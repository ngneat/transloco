"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[1745],{5180:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const l={title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n"},i=void 0,a={id:"multi-lang",title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n",source:"@site/docs/multi-lang.mdx",sourceDirName:".",slug:"/multi-lang",permalink:"/transloco/docs/multi-lang",draft:!1,unlisted:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/multi-lang.mdx",tags:[],version:"current",frontMatter:{title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n"},sidebar:"docs",previous:{title:"SSR Support",permalink:"/transloco/docs/ssr-support"},next:{title:"Additional Functionality",permalink:"/transloco/docs/additional-functionality"}},r={},c=[];function p(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["There are times you may need to use a different language in a specific part of the template, or in a particular component or module. This can be achieved in by using the ",(0,o.jsx)(e.code,{children:"provideTranslocoLang"})," function."]}),"\n",(0,o.jsx)(e.p,{children:"Here's an example of setting it in a component's providers:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'{4} title="my-comp.component.ts"',children:"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [provideTranslocoLang('es')]\n})\nexport class MyComponent {}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Using Angular's DI rules, this will ensure that the language in this component's template and all of its children's templates is ",(0,o.jsx)(e.code,{children:"es"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"Alternatively, here is how to use it directly in the template:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",metastring:'{1} title="my-comp.component.html"',children:"<ng-container *transloco=\"let t; lang: 'en'\">\n  <p>Inline (en) wins: {{ t('home') }}</p>\n</ng-container>\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Note that it will be used as the ",(0,o.jsx)(e.strong,{children:"initial"})," language. If you need it to be ",(0,o.jsx)(e.em,{children:"static"}),", you can use the ",(0,o.jsx)(e.code,{children:"static"})," pipe:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'{4} title="my-comp.component.ts"',children:"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [provideTranslocoLang('es|static')]\n})\nexport class MyComponent {}\n"})}),"\n",(0,o.jsx)(e.p,{children:"Or in the template:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",metastring:'{5} title="my-comp.component.html"',children:"// Define the lang dynamically in the component\n<ng-container *transloco=\"let t; lang: someVariable\">\n\n// Or pass it as inline string\n<ng-container *transloco=\"let t; lang: 'es|static'\">\n  <p>Inline (es) wins and stays: {{ t('home') }}</p>\n</ng-container>\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var o=t(6540);const s={},l=o.createContext(s);function i(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);