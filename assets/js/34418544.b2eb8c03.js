"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[4582],{2327:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(4848),r=o(8453);const s={title:"Using xliff",description:"Recipe - Using xliff | Transloco Angular i18n"},i=void 0,a={id:"recipes/xliff",title:"Using xliff",description:"Recipe - Using xliff | Transloco Angular i18n",source:"@site/docs/recipes/xliff.mdx",sourceDirName:"recipes",slug:"/recipes/xliff",permalink:"/transloco/docs/recipes/xliff",draft:!1,unlisted:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/recipes/xliff.mdx",tags:[],version:"current",frontMatter:{title:"Using xliff",description:"Recipe - Using xliff | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Prefetch the User Language",permalink:"/transloco/docs/recipes/prefetch"},next:{title:"Generate Locale Files using Google Translate",permalink:"/transloco/docs/recipes/google-translate-integration"}},l={},c=[];function f(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Install the ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/xliff",children:(0,t.jsx)(e.code,{children:"xliff"})})," package:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm i xliff\nyarn add xliff\n"})}),"\n",(0,t.jsx)(e.p,{children:"Replace the default http loader with the following loader implementation:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",metastring:'title="transloco-root.module.ts"',children:"import { HttpClient } from '@angular/common/http';\nimport {\n  TRANSLOCO_LOADER,\n  Translation,\n  TranslocoLoader,\n  TRANSLOCO_CONFIG,\n  translocoConfig,\n  TranslocoModule\n} from '@jsverse/transloco';\nimport { Injectable, isDevMode, NgModule } from '@angular/core';\nimport { from } from 'rxjs';\nimport { switchMap, map } from 'rxjs/operators';\n// xliff v1.2\nimport xliff from \"xliff/esm/xliff12ToJs\";\n// xliff v2\n//import xliff from \"xliff/esm/xliff2js\";\n\nfunction toTranslationFormat(json) {\n  const obj = json.resources.transloco;\n  return Object.keys(obj).reduce((acc, key) => {\n    acc[key] = obj[key].target;\n    return acc;\n  }, {});\n}\n\n@Injectable({ providedIn: 'root' })\nexport class TranslocoXliffHttpLoader implements TranslocoLoader {\n  constructor(private http: HttpClient) {}\n\n  getTranslation(lang: string) {\n    return this.http.get<Translation>(`/assets/i18n/${lang}.xlf`, { responseType: 'text' })\n      .pipe(\n        switchMap((translation) => from(xliff(translation))),\n        map(toTranslationFormat)\n      );\n  }\n}\n\n@NgModule({\n  exports: [ TranslocoModule ],\n  providers: [\n    {\n      provide: TRANSLOCO_CONFIG,\n      useValue: translocoConfig({\n        availableLangs: ['en', 'es'],\n        defaultLang: 'en',\n        // Remove this option if your application\n        // doesn't support changing language in runtime.\n        reRenderOnLangChange: true,\n        prodMode: !isDevMode(),\n      })\n    },\n    { provide: TRANSLOCO_LOADER, useClass: TranslocoXliffHttpLoader }\n  ]\n})\nexport class TranslocoRootModule {}\n"})}),"\n",(0,t.jsx)(e.p,{children:"The translation file (xliff v1.2):"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">\n  <file source-language="en" datatype="plaintext" original="transloco">\n    <body>\n      <trans-unit id="title">\n        <source>Hello Transloco!</source>\n        <target>Bonjour Transloco!</target>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(f,{...n})}):f(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>a});var t=o(6540);const r={},s=t.createContext(r);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);