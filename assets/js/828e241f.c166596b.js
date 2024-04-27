"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[251],{5815:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(4848),a=r(8453);const s={title:"Hack The Library",description:"Hack The Library | Transloco Angular i18n"},o=void 0,l={id:"hack",title:"Hack The Library",description:"Hack The Library | Transloco Angular i18n",source:"@site/docs/hack.mdx",sourceDirName:".",slug:"/hack",permalink:"/transloco/docs/hack",draft:!1,unlisted:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/hack.mdx",tags:[],version:"current",frontMatter:{title:"Hack The Library",description:"Hack The Library | Transloco Angular i18n"},sidebar:"docs",previous:{title:"The Transpiler",permalink:"/transloco/docs/transpiler"},next:{title:"Blog Posts",permalink:"/transloco/docs/blog-posts"}},i={},c=[{value:"The Loader",id:"the-loader",level:2},{value:"The Interceptor",id:"the-interceptor",level:2},{value:"Missing Handler",id:"missing-handler",level:2},{value:"Fallback Strategy",id:"fallback-strategy",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"the-loader",children:"The Loader"}),"\n",(0,t.jsx)(n.p,{children:"The loader provides you with the ability to override the default handling of translation file loading."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { TranslocoLoader } from '@jsverse/transloco';\n\nexport class CustomLoader implements TranslocoLoader {\n  getTranslation(lang: string) {\n    if(langInLocalStorage) {\n      return of(langFromStorage);\n    }\n\n    return ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"the-interceptor",children:"The Interceptor"}),"\n",(0,t.jsx)(n.p,{children:"The interceptor provides you with the ability to manipulate the translation object before it is saved by the service."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { TranslocoInterceptor } from '@jsverse/transloco';\n\nexport class CustomInterceptor implements TranslocoInterceptor {\n  preSaveTranslation(translation: Translation, lang: string): Translation {\n    return translation;\n  }\n\n  preSaveTranslationKey(key: string, value: string, lang: string): string {\n    return value;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"missing-handler",children:"Missing Handler"}),"\n",(0,t.jsxs)(n.p,{children:["This handler is responsible for handling missing keys. The default handler calls ",(0,t.jsx)(n.code,{children:"console.warn()"})," with the key when config.isProdMode is set to ",(0,t.jsx)(n.code,{children:"false"}),", and returns an empty string to use as a replacement for the missing key's value."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { TranslocoMissingHandler } from '@jsverse/transloco';\n\nexport class CustomHandler implements TranslocoMissingHandler {\n  handle(key: string, config: TranslocoConfig) {\n    return '...';\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fallback-strategy",children:"Fallback Strategy"}),"\n",(0,t.jsxs)(n.p,{children:["The fallback strategy is responsible for loading the fallback translation file, when the selected active language has failed to load. The default behavior is to load the language set in the ",(0,t.jsx)(n.code,{children:"config.fallbackLang"}),", and set it as the new active language."]}),"\n",(0,t.jsx)(n.p,{children:"When you need more control over this functionality, you can define your own strategy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { TranslocoFallbackStrategy } from '@jsverse/transloco';\n\nexport class CustomStrategy implements TranslocoFallbackStrategy {\n  getNextLangs(failedLang: string) {\n    return '...';\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getNextLangs"})," method is called with the failed language, and should return an array containing the next languages to load, in order of preference."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);