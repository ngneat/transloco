"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[4077],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(i,".").concat(g)]||d[g]||p[g]||a;return r?t.createElement(f,l(l({ref:n},u),{},{components:r})):t.createElement(f,l({ref:n},u))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5411:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],s={title:"Preload Languages",description:"Plugins - Preload Languages | Transloco Angular i18n"},i=void 0,c={unversionedId:"plugins/preload-langs",id:"plugins/preload-langs",title:"Preload Languages",description:"Plugins - Preload Languages | Transloco Angular i18n",source:"@site/docs/plugins/preload-langs.mdx",sourceDirName:"plugins",slug:"/plugins/preload-langs",permalink:"/transloco/docs/plugins/preload-langs",draft:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/plugins/preload-langs.mdx",tags:[],version:"current",frontMatter:{title:"Preload Languages",description:"Plugins - Preload Languages | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Persist Lang",permalink:"/transloco/docs/plugins/persist-lang"},next:{title:"Locale L10N",permalink:"/transloco/docs/plugins/locale"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p};function g(e){var n=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This plugin provides the functionality of preloading the provided languages when the browser is idle by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestIdleCallback")," API."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @jsverse/transloco-preload-langs\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { provideTranslocoPreloadLangs } from '@jsverse/transloco-preload-langs';\n\n@NgModule({\n  providers: [\n    provideTranslocoPreloadLangs(['es', 'some-scope'])\n  ]\n  ...\n})\nexport class TranslocoRootModule {}\n")))}g.isMDXComponent=!0}}]);