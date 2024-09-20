"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[2490],{2917:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>t});var r=n(2540),s=n(3023);const i={title:"ngx-translate",description:"ngx-translate Migration | Transloco Angular i18n"},c=void 0,a={id:"migration/ngx",title:"ngx-translate",description:"ngx-translate Migration | Transloco Angular i18n",source:"@site/docs/migration/ngx.mdx",sourceDirName:"migration",slug:"/migration/ngx",permalink:"/transloco/docs/migration/ngx",draft:!1,unlisted:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/migration/ngx.mdx",tags:[],version:"current",frontMatter:{title:"ngx-translate",description:"ngx-translate Migration | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Config Options",permalink:"/transloco/docs/getting-started/config-options"},next:{title:"Angular",permalink:"/transloco/docs/migration/angular"}},o={},t=[{value:"Command",id:"command",level:3},{value:"What will be done?",id:"what-will-be-done",level:2},{value:"Pipes",id:"pipes",level:3},{value:"Examples:",id:"examples",level:5},{value:"Directives",id:"directives",level:3},{value:"Examples:",id:"examples-1",level:5},{value:"Imports",id:"imports",level:3},{value:"Examples:",id:"examples-2",level:5},{value:"Constructor Injections",id:"constructor-injections",level:3},{value:"Examples:",id:"examples-3",level:5},{value:"Service Usages",id:"service-usages",level:3},{value:"Examples:",id:"examples-4",level:5},{value:"Manual Replacements",id:"manual-replacements",level:5},{value:"Modules",id:"modules",level:3},{value:"Examples:",id:"examples-5",level:5},{value:"Specs",id:"specs",level:3},{value:"Issues",id:"issues",level:3}];function d(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.admonition,{type:"info",children:(0,r.jsx)(l.p,{children:"Some manual changes may still be required after the script has executed."})}),"\n",(0,r.jsx)(l.h3,{id:"command",children:"Command"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",children:"ng g @jsverse/transloco:migrate\n# On an nx workspace\nnx g @jsverse/transloco:migrate\n"})}),"\n",(0,r.jsx)(l.h2,{id:"what-will-be-done",children:"What will be done?"}),"\n",(0,r.jsxs)(l.p,{children:["The script will iterate recursively over all your ",(0,r.jsx)(l.code,{children:"HTML"})," and ",(0,r.jsx)(l.code,{children:"TS"})," files and will execute the replacements described below:"]}),"\n",(0,r.jsx)(l.h3,{id:"pipes",children:"Pipes"}),"\n",(0,r.jsxs)(l.p,{children:["The ",(0,r.jsx)(l.code,{children:"translate"})," pipes will be replaced with the ",(0,r.jsx)(l.code,{children:"transloco"})," pipe."]}),"\n",(0,r.jsx)(l.h5,{id:"examples",children:"Examples:"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:'{{ "hello.world" | translate }}'})," will be replaced with",(0,r.jsx)(l.code,{children:'{{ "hello.world" | transloco }}'})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:'{{ "hello.world" | translate | anotherPipe | oneMore ... }}'})," will be replaced with",(0,r.jsx)(l.code,{children:'{{ "hello.world" | transloco | anotherPipe | oneMore ... }}'})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"{{ \"hello\" | translate:{name: 'Jhon'} }}"})," will be replaced with",(0,r.jsx)(l.code,{children:"{{ \"hello\" | transloco:{name: 'Jhon'} }}"})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"{{ \"hello\" | translate:{name: 'Jhon'} | anotherPipe }}"})," will be replaced with",(0,r.jsx)(l.code,{children:"{{ \"hello\" | transloco:{name: 'Jhon'} | anotherPipe }}"})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<component [header]=\"'hello.world' | translate\"..."})," will be replaced with ",(0,r.jsx)(l.code,{children:"<component [header]=\"'hello.world' | transloco\"..."})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<component [header]=\"'hello.world' | translate | anotherPipe\"..."})," will be replaced with ",(0,r.jsx)(l.code,{children:"<component [header]=\"'hello.world' | transloco | anotherPipe\"..."})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<component [header]=\"'hello' | translate:params | anotherPipe\"..."})," will be replaced with ",(0,r.jsx)(l.code,{children:"<component [header]=\"'hello' | transloco:params | anotherPipe\"..."})]}),"\n"]}),"\n",(0,r.jsx)(l.h3,{id:"directives",children:"Directives"}),"\n",(0,r.jsxs)(l.p,{children:["The ",(0,r.jsx)(l.code,{children:"translate"})," & ",(0,r.jsx)(l.code,{children:"translateParams"})," directives will be replaced with the matching ",(0,r.jsx)(l.code,{children:"transloco"})," directives."]}),"\n",(0,r.jsx)(l.h5,{id:"examples-1",children:"Examples:"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"<div [translate]=\"'HELLO'\" [translateParams]=\"{value: 'world'}\"></div>"})," will be replaced with",(0,r.jsx)(l.code,{children:"<div [transloco]=\"'HELLO'\" [translocoParams]=\"{value: 'world'}\"></div>"})]}),"\n"]}),"\n",(0,r.jsx)(l.h3,{id:"imports",children:"Imports"}),"\n",(0,r.jsxs)(l.p,{children:["The ",(0,r.jsx)(l.code,{children:"TranslateService"})," imports will be replaced with ",(0,r.jsx)(l.code,{children:"TranslocoService"}),"."]}),"\n",(0,r.jsx)(l.h5,{id:"examples-2",children:"Examples:"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"import {TranslateService} from '@ngx-translate/core';"})," will be replaced with ",(0,r.jsx)(l.code,{children:"import { TranslocoService } from '@jsverse/transloco';"})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"import {TranslateModule, TranslateLoader} from '@ngx-translate/core';"})," will be replaced with\n",(0,r.jsx)(l.code,{children:"import {TranslateLoader} from '@ngx-translate/core';"}),"\n",(0,r.jsx)(l.code,{children:"import { TranslocoService } from '@jsverse/transloco';"})]}),"\n"]}),"\n",(0,r.jsx)(l.h3,{id:"constructor-injections",children:"Constructor Injections"}),"\n",(0,r.jsxs)(l.p,{children:["The ",(0,r.jsx)(l.code,{children:"TranslateService"})," injections will be replaced with ",(0,r.jsx)(l.code,{children:"TranslocoService"}),"."]}),"\n",(0,r.jsx)(l.h5,{id:"examples-3",children:"Examples:"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"constructor(private translate: TranslateService) {"})," will be replaced with ",(0,r.jsx)(l.code,{children:"constructor(private translate: TranslocoService) {"})]}),"\n"]}),"\n",(0,r.jsx)(l.h3,{id:"service-usages",children:"Service Usages"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.currentLang"})," will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.getActiveLang()"}),"."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.onLangChange"})," will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.langChanges$"}),"."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.use(...)"})," calls will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.setActiveLang(...)"}),"."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.instant(...)"})," calls will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.translate(...)"}),"."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.get(...)"})," calls will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.selectTranslate(...)"})," and ",(0,r.jsx)(l.code,{children:"take(1)"})," needs to be manually added ",(0,r.jsx)(l.code,{children:"translateService.selectTranslate(...).pipe(take(1))"})," in order to prevent listening to language changes."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.stream(...)"})," calls will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.selectTranslate(...)"}),"."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"translateService.set(...)"})," calls will be replaced with ",(0,r.jsx)(l.code,{children:"translateService.setTranslation(...)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(l.h5,{id:"examples-4",children:"Examples:"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"const translation = this.translateService.instant('hello')"})," will be replaced with ",(0,r.jsx)(l.code,{children:"const translation = this.translateService.translate('hello')"})]}),"\n"]}),"\n",(0,r.jsx)(l.h5,{id:"manual-replacements",children:"Manual Replacements"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"getBrowserLang()"})," - In Transloco it's a pure function that needs to be imported."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"getBrowserCultureLang()"})," - In Transloco it's a pure function that needs to be imported."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"currentLoader"})," - No equivalent in Transloco."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"addLangs(...)"})," - No equivalent in Transloco."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"getLangs(...)"})," - No equivalent in Transloco."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"reloadLang(...)"})," - No equivalent in Transloco."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"resetLang(...)"})," - No equivalent in Transloco."]}),"\n"]}),"\n",(0,r.jsx)(l.h3,{id:"modules",children:"Modules"}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.code,{children:"TranslateModule"})," & ",(0,r.jsx)(l.code,{children:"TranslateModule.forChild(...)"})," & ",(0,r.jsx)(l.code,{children:"TranslateModule.forRoot(...)"})," will be replaced with ",(0,r.jsx)(l.code,{children:"TranslocoModule"})]}),"\n",(0,r.jsx)(l.h5,{id:"examples-5",children:"Examples:"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.code,{children:"TranslateModule.forChild({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } })"})," will be replaced with ",(0,r.jsx)(l.code,{children:"TranslocoModule"})]}),"\n"]}),"\n",(0,r.jsx)(l.h3,{id:"specs",children:"Specs"}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.a,{href:"#imports",children:"Imports"}),", ",(0,r.jsx)(l.a,{href:"#modules",children:"Modules"})," and ",(0,r.jsx)(l.code,{children:"TranslateService"})," will be replaced with ",(0,r.jsx)(l.code,{children:"TranslocoService"})]}),"\n",(0,r.jsx)(l.h3,{id:"issues",children:"Issues"}),"\n",(0,r.jsx)(l.p,{children:"If you encounter any issues with the migration script please open a github issue so we can resolve them and make a better experience for all."})]})}function h(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3023:(e,l,n)=>{n.d(l,{R:()=>c,x:()=>a});var r=n(3696);const s={},i=r.createContext(s);function c(e){const l=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:l},e.children)}}}]);