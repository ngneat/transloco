import {
  ChangeDetectorRef,
  Inject,
  OnDestroy,
  Optional,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { switchMap, forkJoin, Observable, Subscription } from 'rxjs';

import { TranslocoService } from './transloco.service';
import { HashMap, OrArray, Translation, TranslocoScope } from './types';
import { TRANSLOCO_SCOPE } from './transloco-scope';
import { TRANSLOCO_LANG } from './transloco-lang';
import {
  listenOrNotOperator,
  resolveInlineLoader,
  shouldListenToLangChanges,
} from './shared';
import { LangResolver } from './lang-resolver';
import { ScopeResolver } from './scope-resolver';

@Pipe({
  name: 'transloco',
  pure: false,
  standalone: true,
})
export class TranslocoPipe implements PipeTransform, OnDestroy {
  private subscription: Subscription | null = null;
  private lastValue = '';
  private lastKey: string | undefined;
  private path: string | undefined;
  private langResolver = new LangResolver();
  private scopeResolver!: ScopeResolver;

  constructor(
    private service: TranslocoService,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    private providerScope: OrArray<TranslocoScope> | undefined,
    @Optional()
    @Inject(TRANSLOCO_LANG)
    private providerLang: string | undefined,
    private cdr: ChangeDetectorRef
  ) {
    this.scopeResolver = new ScopeResolver(this.service);
  }

  // overloads for strict mode
  transform(key: string, params?: HashMap, inlineLang?: string): string;
  transform<T extends null | undefined>(key: T, params?: HashMap, inlineLang?: string): T;
  transform<T extends null | undefined>(key: string | T, params?: HashMap, inlineLang?: string): string | T;

  transform(
    key?: string | null,
    params?: HashMap,
    inlineLang?: string
  ): string | null | undefined {
    if (!key) {
      return key;
    }

    const keyName = params ? `${key}${JSON.stringify(params)}` : key;

    if (keyName === this.lastKey) {
      return this.lastValue;
    }

    this.lastKey = keyName;
    this.subscription?.unsubscribe();

    const listenToLangChange = shouldListenToLangChanges(
      this.service,
      this.providerLang || inlineLang
    );

    this.subscription = this.service.langChanges$
      .pipe(
        switchMap((activeLang) => {
          const lang = this.langResolver.resolve({
            inline: inlineLang,
            provider: this.providerLang,
            active: activeLang,
          });

          return Array.isArray(this.providerScope)
            ? forkJoin(
                this.providerScope.map((providerScope) =>
                  this.resolveScope(lang, providerScope)
                )
              )
            : this.resolveScope(lang, this.providerScope);
        }),
        listenOrNotOperator(listenToLangChange)
      )
      .subscribe(() => this.updateValue(key, params));

    return this.lastValue;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    // Caretaker note: it's important to clean up references to subscriptions since they save the `next`
    // callback within its `destination` property, preventing classes from being GC'd.
    this.subscription = null;
  }

  private updateValue(key: string, params?: HashMap | undefined) {
    const lang = this.langResolver.resolveLangBasedOnScope(this.path!);
    this.lastValue = this.service.translate(key, params, lang);
    this.cdr.markForCheck();
  }

  private resolveScope(
    lang: string,
    providerScope: TranslocoScope | null
  ): Observable<Translation | Translation[]> {
    const resolvedScope = this.scopeResolver.resolve({
      inline: undefined,
      provider: providerScope,
    });
    this.path = this.langResolver.resolveLangPath(lang, resolvedScope);
    const inlineLoader = resolveInlineLoader(providerScope, resolvedScope);

    return this.service._loadDependencies(this.path, inlineLoader);
  }
}
