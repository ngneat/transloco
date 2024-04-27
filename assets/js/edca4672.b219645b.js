"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[5221],{6752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(4848),t=r(8453);const a={title:"The Transpiler",description:"The Transpiler | Transloco Angular i18n"},l=void 0,i={id:"transpiler",title:"The Transpiler",description:"The Transpiler | Transloco Angular i18n",source:"@site/docs/transpiler.mdx",sourceDirName:".",slug:"/transpiler",permalink:"/transloco/docs/transpiler",draft:!1,unlisted:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/transpiler.mdx",tags:[],version:"current",frontMatter:{title:"The Transpiler",description:"The Transpiler | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Loading Template",permalink:"/transloco/docs/loading-template"},next:{title:"Hack The Library",permalink:"/transloco/docs/hack"}},o={},c=[{value:"DefaultTranspiler",id:"defaulttranspiler",level:2},{value:"Functional Transpiler",id:"functional-transpiler",level:2},{value:"Usage",id:"usage",level:3},{value:"Usage Notes",id:"usage-notes",level:3},{value:"Custom Transpiler",id:"custom-transpiler",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The transpiler is responsible for resolving the given value.\nFor example, when given ",(0,s.jsx)(n.code,{children:"Hello {{ key }}"})," the default transpiler will replace the dynamic variable ",(0,s.jsx)(n.code,{children:"key"})," based on the given params, or in some cases, within the ",(0,s.jsx)(n.a,{href:"./additional-functionality#reference-other-keys",children:"translation object itself"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"defaulttranspiler",children:"DefaultTranspiler"}),"\n",(0,s.jsx)(n.p,{children:"The default transpiler can be configured with custom interpolation start and end markings to match message parameters."}),"\n",(0,s.jsxs)(n.p,{children:["To configure the ",(0,s.jsx)(n.code,{children:"DefaultTranspiler"})," interpolation markings you must provide a Transloco config with the ",(0,s.jsx)(n.a,{href:"./getting-started/config-options#interpolation",children:"interpolation"})," property set."]}),"\n",(0,s.jsx)(n.h2,{id:"functional-transpiler",children:"Functional Transpiler"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the default transpiler, Transloco also exposes the ",(0,s.jsx)(n.code,{children:"FunctionalTranspiler"})," which allows you to implement function calls into your translation values. This way you can leverage Angular's DI power and make your translations even more flexible."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"FunctionalTranspiler"})," is compatible with the ",(0,s.jsx)(n.code,{children:"DefaultTranspiler"}),", therefore you can switch to the functional without worrying that it'll break your current translations."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Switching back to the default transpiler will require you to remove all the functional syntax."})}),"\n",(0,s.jsxs)(n.p,{children:["To enable this transpiler, add the following provider in your ",(0,s.jsx)(n.code,{children:"TranslocoRootModule"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="transloco-root.module.ts"',children:"import { FunctionalTranspiler, provideTranslocoTranspiler } from '@jsverse/transloco';\n\n@NgModule({\n  ...\n  providers: [provideTranslocoTranspiler(FunctionalTranspiler)]\n})\nexport class TranslocoRootModule {}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["In order to use a function in the translation, we need to provide it to the transpiler.\nWe do so by creating a new class that implements the ",(0,s.jsx)(n.code,{children:"TranslocoTranspilerFunction"})," interface."]}),"\n",(0,s.jsx)(n.p,{children:"For example, let's say we want to display different texts, based on whether the user is exposed to a specific feature or not:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="has-feature-flag.ts"',children:"import { FFService } from './feature-flag.service';\nimport { TranslocoTranspilerFunction } from '@jsverse/transloco';\n\nclass FeatureFlagResolver implements TranslocoTranspilerFunction {\n  constructor(private featureFlagService: FFService) {}\n\n  transpile(...args: string[]): any {\n    const [flagName, trueValue, falseValue] = args;\n\n    return this.featureFlagService.hasFF(flagName) ? trueValue : falseValue;\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, the ",(0,s.jsx)(n.code,{children:"transpile"})," function can accept any number of arguments; you're the one who defines which arguments will be passed. In my case I'm passing three:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The feature flag's name."}),"\n",(0,s.jsx)(n.li,{children:"The value I want to present in case the user has the flag."}),"\n",(0,s.jsx)(n.li,{children:"The value I want to present in case the user doesn't have the flag."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now we will add this transpiler function to the ",(0,s.jsx)(n.code,{children:"TranslocoRootModule"})," providers:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="transloco-root.module.ts"',children:"import { FunctionalTranspiler, provideTranslocoTranspiler } from '@jsverse/transloco';\nimport { FeatureFlagResolver } from './has-feature-flag';\n\n@NgModule({\n  ...\n  providers: [provideTranslocoTranspiler(FunctionalTranspiler),\n  {\n    provide: 'hasFeatureFlag', // ====> The function name used in the translation\n    useClass: FeatureFlagResolver\n  }],\n})\nexport class TranslocoRootModule {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The functional syntax is very similar to calling a regular function, here is an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="en.json"',children:'{\n  "title": "[[ hasFeatureFlag(newDashboards, has flag, missing flag) ]]",\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this case, we are checking if the user has the ",(0,s.jsx)(n.code,{children:"newDashboard"})," flag, and in case he does, we want to display ",(0,s.jsx)(n.code,{children:"'has flag'"}),"; otherwise, we will display ",(0,s.jsx)(n.code,{children:"'missing flag'"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,s.jsxs)(n.p,{children:["If the function returns a string that includes the interpolation syntax (",(0,s.jsx)(n.code,{children:"{{value}}"}),"), the transpiler will replace it with the ",(0,s.jsx)(n.code,{children:"params"})," or ",(0,s.jsx)(n.a,{href:"./additional-functionality#reference-other-keys",children:"other keys references"})," just like the default transpiler does."]}),"\n",(0,s.jsx)(n.p,{children:"If your function param needs to include a comma, you need to escape it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="en.json"',children:'{\n  "title": "[[ someFunc(Hello {{user}}\\\\, welcome ,...) ]]",\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'Hello {{user}}, welcome'"})," will be the first param passed."]}),"\n",(0,s.jsx)(n.h2,{id:"custom-transpiler",children:"Custom Transpiler"}),"\n",(0,s.jsxs)(n.p,{children:["You can also provide a custom transpiler by creating a class that implements the ",(0,s.jsx)(n.code,{children:"TranslocoTranspiler"})," interface."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { TranslocoTranspiler } from '@jsverse/transloco';\n\nexport class CustomTranspiler implements TranslocoTranspiler {\n  transpile(value: any, params, translation: Translation, key: string) {\n    return ...;\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(6540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);