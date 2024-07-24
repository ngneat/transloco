import { inject, Pipe, PipeTransform } from '@angular/core';
import { isNil } from '@jsverse/transloco';

import { getDefaultOptions } from '../shared';
import { TRANSLOCO_LOCALE_CONFIG } from '../transloco-locale.config';
import {
  Locale,
  LocaleConfig,
  NumberFormatOptions,
} from '../transloco-locale.types';

import { BaseLocalePipe } from './base-locale.pipe';

@Pipe({
  name: 'translocoDecimal',
  pure: false,
  standalone: true,
})
export class TranslocoDecimalPipe
  extends BaseLocalePipe
  implements PipeTransform
{
  private localeConfig: LocaleConfig = inject(TRANSLOCO_LOCALE_CONFIG);

  /**
   * Transform a given number into the locale's currency format.
   *
   * @example
   *
   * 1234567890 | translocoDecimal: {} : en-US // 1,234,567,890
   * 1234567890 | translocoDecimal: {useGrouping: false}: en-US // 1234567890
   *
   */
  // overloads for strict mode
  transform(
    value: number | string,
    numberFormatOptions?: NumberFormatOptions,
    locale?: Locale
  ): string;
  transform<T extends null | undefined>(
    value: T,
    numberFormatOptions?: NumberFormatOptions,
    locale?: Locale
  ): T;
  transform<T extends null | undefined>(
    value: number | string | T,
    numberFormatOptions?: NumberFormatOptions,
    locale?: Locale
  ): string | T;

  transform(
    value?: string | number | null,
    numberFormatOptions: NumberFormatOptions = {},
    locale?: Locale
  ): string | null | undefined {
    if (isNil(value)) return value;
    locale = this.getLocale(locale);

    const options = {
      ...getDefaultOptions(locale, 'decimal', this.localeConfig),
      ...numberFormatOptions,
    };

    return this.localeService.localizeNumber(value, 'decimal', locale, options);
  }
}
