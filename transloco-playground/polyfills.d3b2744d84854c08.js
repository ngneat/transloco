"use strict";(self.webpackChunktransloco_playground=self.webpackChunktransloco_playground||[]).push([[461],{3569:(t,e,n)=>{n(6935)},6935:()=>{const t=globalThis;function e(e){return(t.__Zone_symbol_prefix||"__zone_symbol__")+e}const n=Object.getOwnPropertyDescriptor,o=Object.defineProperty,r=Object.getPrototypeOf,s=Object.create,i=Array.prototype.slice,a="addEventListener",c="removeEventListener",l=e(a),u=e(c),h="true",f="false",p=e("");function d(t,e){return Zone.current.wrap(t,e)}function _(t,e,n,o,r){return Zone.current.scheduleMacroTask(t,e,n,o,r)}const k=e,g=typeof window<"u",y=g?window:void 0,T=g&&y||globalThis,m="removeAttribute";function v(t,e){for(let n=t.length-1;n>=0;n--)"function"==typeof t[n]&&(t[n]=d(t[n],e+"_"+n));return t}function b(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const E=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,w=!("nw"in T)&&typeof T.process<"u"&&"[object process]"===T.process.toString(),S=!w&&!E&&!(!g||!y.HTMLElement),Z=typeof T.process<"u"&&"[object process]"===T.process.toString()&&!E&&!(!g||!y.HTMLElement),D={},P=function(t){if(!(t=t||T.event))return;let e=D[t.type];e||(e=D[t.type]=k("ON_PROPERTY"+t.type));const n=this||t.target||T,o=n[e];let r;return S&&n===y&&"error"===t.type?(r=o&&o.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===r&&t.preventDefault()):(r=o&&o.apply(this,arguments),null!=r&&!r&&t.preventDefault()),r};function C(t,e,r){let s=n(t,e);if(!s&&r&&n(r,e)&&(s={enumerable:!0,configurable:!0}),!s||!s.configurable)return;const i=k("on"+e+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete s.writable,delete s.value;const a=s.get,c=s.set,l=e.slice(2);let u=D[l];u||(u=D[l]=k("ON_PROPERTY"+l)),s.set=function(e){let n=this;!n&&t===T&&(n=T),n&&("function"==typeof n[u]&&n.removeEventListener(l,P),c&&c.call(n,null),n[u]=e,"function"==typeof e&&n.addEventListener(l,P,!1))},s.get=function(){let n=this;if(!n&&t===T&&(n=T),!n)return null;const o=n[u];if(o)return o;if(a){let t=a.call(this);if(t)return s.set.call(this,t),"function"==typeof n[m]&&n.removeAttribute(e),t}return null},o(t,e,s),t[i]=!0}function O(t,e,n){if(e)for(let o=0;o<e.length;o++)C(t,"on"+e[o],n);else{const e=[];for(const n in t)"on"==n.slice(0,2)&&e.push(n);for(let o=0;o<e.length;o++)C(t,e[o],n)}}const z=k("originalInstance");function j(t){const e=T[t];if(!e)return;T[k(t)]=e,T[t]=function(){const n=v(arguments,t);switch(n.length){case 0:this[z]=new e;break;case 1:this[z]=new e(n[0]);break;case 2:this[z]=new e(n[0],n[1]);break;case 3:this[z]=new e(n[0],n[1],n[2]);break;case 4:this[z]=new e(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},M(T[t],e);const n=new e((function(){}));let r;for(r in n)"XMLHttpRequest"===t&&"responseBlob"===r||function(e){"function"==typeof n[e]?T[t].prototype[e]=function(){return this[z][e].apply(this[z],arguments)}:o(T[t].prototype,e,{set:function(n){"function"==typeof n?(this[z][e]=d(n,t+"."+e),M(this[z][e],n)):this[z][e]=n},get:function(){return this[z][e]}})}(r);for(r in e)"prototype"!==r&&e.hasOwnProperty(r)&&(T[t][r]=e[r])}function I(t,e,o){let s=t;for(;s&&!s.hasOwnProperty(e);)s=r(s);!s&&t[e]&&(s=t);const i=k(e);let a=null;if(s&&(!(a=s[i])||!s.hasOwnProperty(i))&&(a=s[i]=s[e],b(s&&n(s,e)))){const t=o(a,i,e);s[e]=function(){return t(this,arguments)},M(s[e],a)}return a}function R(t,e,n){let o=null;function r(t){const e=t.data;return e.args[e.cbIdx]=function(){t.invoke.apply(this,arguments)},o.apply(e.target,e.args),t}o=I(t,e,(t=>function(e,o){const s=n(e,o);return s.cbIdx>=0&&"function"==typeof o[s.cbIdx]?_(s.name,o[s.cbIdx],s,r):t.apply(e,o)}))}function M(t,e){t[k("OriginalDelegate")]=e}let N=!1,A=!1;function L(){if(N)return A;N=!0;try{const t=y.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(A=!0)}catch{}return A}let H=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){H=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{H=!1}const x={useG:!0},F={},q={},G=new RegExp("^"+p+"(\\w+)(true|false)$"),W=k("propagationStopped");function B(t,e){const n=(e?e(t):t)+f,o=(e?e(t):t)+h,r=p+n,s=p+o;F[t]={},F[t][f]=r,F[t][h]=s}function U(t,e,n,o){const s=o&&o.add||a,i=o&&o.rm||c,l=o&&o.listeners||"eventListeners",u=o&&o.rmAll||"removeAllListeners",d=k(s),_="."+s+":",g="prependListener",y="."+g+":",T=function(t,e,n){if(t.isRemoved)return;const o=t.callback;let r;"object"==typeof o&&o.handleEvent&&(t.callback=t=>o.handleEvent(t),t.originalDelegate=o);try{t.invoke(t,e,[n])}catch(a){r=a}const s=t.options;return s&&"object"==typeof s&&s.once&&e[i].call(e,n.type,t.originalDelegate?t.originalDelegate:t.callback,s),r};function m(n,o,r){if(!(o=o||t.event))return;const s=n||o.target||t,i=s[F[o.type][r?h:f]];if(i){const t=[];if(1===i.length){const e=T(i[0],s,o);e&&t.push(e)}else{const e=i.slice();for(let n=0;n<e.length&&(!o||!0!==o[W]);n++){const r=T(e[n],s,o);r&&t.push(r)}}if(1===t.length)throw t[0];for(let n=0;n<t.length;n++){const o=t[n];e.nativeScheduleMicroTask((()=>{throw o}))}}}const v=function(t){return m(this,t,!1)},b=function(t){return m(this,t,!0)};function E(e,n){if(!e)return!1;let o=!0;n&&void 0!==n.useG&&(o=n.useG);const a=n&&n.vh;let c=!0;n&&void 0!==n.chkDup&&(c=n.chkDup);let T=!1;n&&void 0!==n.rt&&(T=n.rt);let m=e;for(;m&&!m.hasOwnProperty(s);)m=r(m);if(!m&&e[s]&&(m=e),!m||m[d])return!1;const E=n&&n.eventNameToString,S={},Z=m[d]=m[s],D=m[k(i)]=m[i],P=m[k(l)]=m[l],C=m[k(u)]=m[u];let O;n&&n.prepend&&(O=m[k(n.prepend)]=m[n.prepend]);const z=o?function(t){if(!S.isExisting)return Z.call(S.target,S.eventName,S.capture?b:v,S.options)}:function(t){return Z.call(S.target,S.eventName,t.invoke,S.options)},j=o?function(t){if(!t.isRemoved){const e=F[t.eventName];let n;e&&(n=e[t.capture?h:f]);const o=n&&t.target[n];if(o)for(let r=0;r<o.length;r++)if(o[r]===t){o.splice(r,1),t.isRemoved=!0,t.removeAbortListener&&(t.removeAbortListener(),t.removeAbortListener=null),0===o.length&&(t.allRemoved=!0,t.target[n]=null);break}}if(t.allRemoved)return D.call(t.target,t.eventName,t.capture?b:v,t.options)}:function(t){return D.call(t.target,t.eventName,t.invoke,t.options)},I=n&&n.diff?n.diff:function(t,e){const n=typeof e;return"function"===n&&t.callback===e||"object"===n&&t.originalDelegate===e},R=Zone[k("UNPATCHED_EVENTS")],N=t[k("PASSIVE_EVENTS")],A=function(e,r,s,i,l=!1,u=!1){return function(){const p=this||t;let d=arguments[0];n&&n.transferEventName&&(d=n.transferEventName(d));let _=arguments[1];if(!_)return e.apply(this,arguments);if(w&&"uncaughtException"===d)return e.apply(this,arguments);let k=!1;if("function"!=typeof _){if(!_.handleEvent)return e.apply(this,arguments);k=!0}if(a&&!a(e,_,p,arguments))return;const g=H&&!!N&&-1!==N.indexOf(d),y=function(t){if("object"==typeof t&&null!==t){const e={...t};return t.signal&&(e.signal=t.signal),e}return t}(function(t,e){return!H&&"object"==typeof t&&t?!!t.capture:H&&e?"boolean"==typeof t?{capture:t,passive:!0}:t?"object"==typeof t&&!1!==t.passive?{...t,passive:!0}:t:{passive:!0}:t}(arguments[2],g)),T=y?.signal;if(T?.aborted)return;if(R)for(let t=0;t<R.length;t++)if(d===R[t])return g?e.call(p,d,_,y):e.apply(this,arguments);const m=!!y&&("boolean"==typeof y||y.capture),v=!(!y||"object"!=typeof y)&&y.once,b=Zone.current;let Z=F[d];Z||(B(d,E),Z=F[d]);const D=Z[m?h:f];let P,C=p[D],O=!1;if(C){if(O=!0,c)for(let t=0;t<C.length;t++)if(I(C[t],_))return}else C=p[D]=[];const z=p.constructor.name,j=q[z];j&&(P=j[d]),P||(P=z+r+(E?E(d):d)),S.options=y,v&&(S.options.once=!1),S.target=p,S.capture=m,S.eventName=d,S.isExisting=O;const M=o?x:void 0;M&&(M.taskData=S),T&&(S.options.signal=void 0);const A=b.scheduleEventTask(P,_,M,s,i);if(T){S.options.signal=T;const t=()=>A.zone.cancelTask(A);e.call(T,"abort",t,{once:!0}),A.removeAbortListener=()=>T.removeEventListener("abort",t)}return S.target=null,M&&(M.taskData=null),v&&(S.options.once=!0),!H&&"boolean"==typeof A.options||(A.options=y),A.target=p,A.capture=m,A.eventName=d,k&&(A.originalDelegate=_),u?C.unshift(A):C.push(A),l?p:void 0}};return m[s]=A(Z,_,z,j,T),O&&(m[g]=A(O,y,(function(t){return O.call(S.target,S.eventName,t.invoke,S.options)}),j,T,!0)),m[i]=function(){const e=this||t;let o=arguments[0];n&&n.transferEventName&&(o=n.transferEventName(o));const r=arguments[2],s=!!r&&("boolean"==typeof r||r.capture),i=arguments[1];if(!i)return D.apply(this,arguments);if(a&&!a(D,i,e,arguments))return;const c=F[o];let l;c&&(l=c[s?h:f]);const u=l&&e[l];if(u)for(let t=0;t<u.length;t++){const n=u[t];if(I(n,i))return u.splice(t,1),n.isRemoved=!0,0!==u.length||(n.allRemoved=!0,e[l]=null,s||"string"!=typeof o)||(e[p+"ON_PROPERTY"+o]=null),n.zone.cancelTask(n),T?e:void 0}return D.apply(this,arguments)},m[l]=function(){const e=this||t;let o=arguments[0];n&&n.transferEventName&&(o=n.transferEventName(o));const r=[],s=V(e,E?E(o):o);for(let t=0;t<s.length;t++){const e=s[t];r.push(e.originalDelegate?e.originalDelegate:e.callback)}return r},m[u]=function(){const e=this||t;let o=arguments[0];if(o){n&&n.transferEventName&&(o=n.transferEventName(o));const t=F[o];if(t){const n=e[t[f]],r=e[t[h]];if(n){const t=n.slice();for(let e=0;e<t.length;e++){const n=t[e];this[i].call(this,o,n.originalDelegate?n.originalDelegate:n.callback,n.options)}}if(r){const t=r.slice();for(let e=0;e<t.length;e++){const n=t[e];this[i].call(this,o,n.originalDelegate?n.originalDelegate:n.callback,n.options)}}}}else{const t=Object.keys(e);for(let e=0;e<t.length;e++){const n=G.exec(t[e]);let o=n&&n[1];o&&"removeListener"!==o&&this[u].call(this,o)}this[u].call(this,"removeListener")}if(T)return this},M(m[s],Z),M(m[i],D),C&&M(m[u],C),P&&M(m[l],P),!0}let S=[];for(let r=0;r<n.length;r++)S[r]=E(n[r],o);return S}function V(t,e){if(!e){const n=[];for(let o in t){const r=G.exec(o);let s=r&&r[1];if(s&&(!e||s===e)){const e=t[o];if(e)for(let t=0;t<e.length;t++)n.push(e[t])}}return n}let n=F[e];n||(B(e),n=F[e]);const o=t[n[f]],r=t[n[h]];return o?r?o.concat(r):o.slice():r?r.slice():[]}function $(t,e){const n=t.Event;n&&n.prototype&&e.patchMethod(n.prototype,"stopImmediatePropagation",(t=>function(e,n){e[W]=!0,t&&t.apply(e,n)}))}const X=k("zoneTask");function Y(t,e,n,o){let r=null,s=null;n+=o;const i={};function a(e){const n=e.data;return n.args[0]=function(){return e.invoke.apply(this,arguments)},n.handleId=r.apply(t,n.args),e}function c(e){return s.call(t,e.data.handleId)}r=I(t,e+=o,(n=>function(r,s){if("function"==typeof s[0]){const t={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?s[1]||0:void 0,args:s},n=s[0];s[0]=function(){try{return n.apply(this,arguments)}finally{t.isPeriodic||("number"==typeof t.handleId?delete i[t.handleId]:t.handleId&&(t.handleId[X]=null))}};const r=_(e,s[0],t,a,c);if(!r)return r;const l=r.data.handleId;return"number"==typeof l?i[l]=r:l&&(l[X]=r),l&&l.ref&&l.unref&&"function"==typeof l.ref&&"function"==typeof l.unref&&(r.ref=l.ref.bind(l),r.unref=l.unref.bind(l)),"number"==typeof l||l?l:r}return n.apply(t,s)})),s=I(t,n,(e=>function(n,o){const r=o[0];let s;"number"==typeof r?s=i[r]:(s=r&&r[X],s||(s=r)),s&&"string"==typeof s.type?"notScheduled"!==s.state&&(s.cancelFn&&s.data.isPeriodic||0===s.runCount)&&("number"==typeof r?delete i[r]:r&&(r[X]=null),s.zone.cancelTask(s)):e.apply(t,o)}))}function J(t,e,n){if(!n||0===n.length)return e;const o=n.filter((e=>e.target===t));if(!o||0===o.length)return e;const r=o[0].ignoreProperties;return e.filter((t=>-1===r.indexOf(t)))}function K(t,e,n,o){t&&O(t,J(t,e,n),o)}function Q(t){return Object.getOwnPropertyNames(t).filter((t=>t.startsWith("on")&&t.length>2)).map((t=>t.substring(2)))}function tt(t,e,n,o,r){const s=Zone.__symbol__(o);if(e[s])return;const i=e[s]=e[o];e[o]=function(s,a,c){return a&&a.prototype&&r.forEach((function(e){const r=`${n}.${o}::`+e,s=a.prototype;try{if(s.hasOwnProperty(e)){const n=t.ObjectGetOwnPropertyDescriptor(s,e);n&&n.value?(n.value=t.wrapWithCurrentZone(n.value,r),t._redefineProperty(a.prototype,e,n)):s[e]&&(s[e]=t.wrapWithCurrentZone(s[e],r))}else s[e]&&(s[e]=t.wrapWithCurrentZone(s[e],r))}catch{}})),i.call(e,s,a,c)},t.attachOriginToPatched(e[o],i)}const et=function(){const n=globalThis,o=!0===n[e("forceDuplicateZoneCheck")];if(n.Zone&&(o||"function"!=typeof n.Zone.__symbol__))throw new Error("Zone already loaded.");return n.Zone??=function(){const n=t.performance;function o(t){n&&n.mark&&n.mark(t)}function r(t,e){n&&n.measure&&n.measure(t,e)}o("Zone");let s=(()=>{class n{static#t=this.__symbol__=e;static assertZonePatched(){if(t.Promise!==P.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=n.current;for(;t.parent;)t=t.parent;return t}static get current(){return O.zone}static get currentTask(){return z}static __load_patch(s,i,a=!1){if(P.hasOwnProperty(s)){const n=!0===t[e("forceDuplicateZoneCheck")];if(!a&&n)throw Error("Already loaded patch: "+s)}else if(!t["__Zone_disable_"+s]){const e="Zone:"+s;o(e),P[s]=i(t,n,C),r(e,e)}}get parent(){return this._parent}get name(){return this._name}constructor(t,e){this._parent=t,this._name=e?e.name||"unnamed":"<root>",this._properties=e&&e.properties||{},this._zoneDelegate=new a(this,this._parent&&this._parent._zoneDelegate,e)}get(t){const e=this.getZoneWith(t);if(e)return e._properties[t]}getZoneWith(t){let e=this;for(;e;){if(e._properties.hasOwnProperty(t))return e;e=e._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,e){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const n=this._zoneDelegate.intercept(this,t,e),o=this;return function(){return o.runGuarded(n,this,arguments,e)}}run(t,e,n,o){O={parent:O,zone:this};try{return this._zoneDelegate.invoke(this,t,e,n,o)}finally{O=O.parent}}runGuarded(t,e=null,n,o){O={parent:O,zone:this};try{try{return this._zoneDelegate.invoke(this,t,e,n,o)}catch(r){if(this._zoneDelegate.handleError(this,r))throw r}}finally{O=O.parent}}runTask(t,e,n){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||y).name+"; Execution: "+this.name+")");if(t.state===T&&(t.type===D||t.type===Z))return;const o=t.state!=b;o&&t._transitionTo(b,v),t.runCount++;const r=z;z=t,O={parent:O,zone:this};try{t.type==Z&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,e,n)}catch(s){if(this._zoneDelegate.handleError(this,s))throw s}}finally{t.state!==T&&t.state!==w&&(t.type==D||t.data&&t.data.isPeriodic?o&&t._transitionTo(v,b):(t.runCount=0,this._updateTaskCount(t,-1),o&&t._transitionTo(T,b,T))),O=O.parent,z=r}}scheduleTask(t){if(t.zone&&t.zone!==this){let e=this;for(;e;){if(e===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);e=e.parent}}t._transitionTo(m,T);const e=[];t._zoneDelegates=e,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(n){throw t._transitionTo(w,m,T),this._zoneDelegate.handleError(this,n),n}return t._zoneDelegates===e&&this._updateTaskCount(t,1),t.state==m&&t._transitionTo(v,m),t}scheduleMicroTask(t,e,n,o){return this.scheduleTask(new c(S,t,e,n,o,void 0))}scheduleMacroTask(t,e,n,o,r){return this.scheduleTask(new c(Z,t,e,n,o,r))}scheduleEventTask(t,e,n,o,r){return this.scheduleTask(new c(D,t,e,n,o,r))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||y).name+"; Execution: "+this.name+")");if(t.state===v||t.state===b){t._transitionTo(E,v,b);try{this._zoneDelegate.cancelTask(this,t)}catch(e){throw t._transitionTo(w,E),this._zoneDelegate.handleError(this,e),e}return this._updateTaskCount(t,-1),t._transitionTo(T,E),t.runCount=0,t}}_updateTaskCount(t,e){const n=t._zoneDelegates;-1==e&&(t._zoneDelegates=null);for(let o=0;o<n.length;o++)n[o]._updateTaskCount(t.type,e)}}return n})();const i={name:"",onHasTask:(t,e,n,o)=>t.hasTask(n,o),onScheduleTask:(t,e,n,o)=>t.scheduleTask(n,o),onInvokeTask:(t,e,n,o,r,s)=>t.invokeTask(n,o,r,s),onCancelTask:(t,e,n,o)=>t.cancelTask(n,o)};class a{get zone(){return this._zone}constructor(t,e,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=t,this._parentDelegate=e,this._forkZS=n&&(n&&n.onFork?n:e._forkZS),this._forkDlgt=n&&(n.onFork?e:e._forkDlgt),this._forkCurrZone=n&&(n.onFork?this._zone:e._forkCurrZone),this._interceptZS=n&&(n.onIntercept?n:e._interceptZS),this._interceptDlgt=n&&(n.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=n&&(n.onInvoke?n:e._invokeZS),this._invokeDlgt=n&&(n.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=n&&(n.onHandleError?n:e._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:e._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=n&&(n.onInvokeTask?n:e._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=n&&(n.onCancelTask?n:e._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const o=n&&n.onHasTask;(o||e&&e._hasTaskZS)&&(this._hasTaskZS=o?n:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,n.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),n.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),n.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(t,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,t,e):new s(t,e)}intercept(t,e,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,t,e,n):e}invoke(t,e,n,o,r){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,t,e,n,o,r):e.apply(n,o)}handleError(t,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,t,e)}scheduleTask(t,e){let n=e;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,t,e),n||(n=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=S)throw new Error("Task is missing scheduleFn.");k(e)}return n}invokeTask(t,e,n,o){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,t,e,n,o):e.callback.apply(n,o)}cancelTask(t,e){let n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,t,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");n=e.cancelFn(e)}return n}hasTask(t,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,t,e)}catch(n){this.handleError(t,n)}}_updateTaskCount(t,e){const n=this._taskCounts,o=n[t],r=n[t]=o+e;if(r<0)throw new Error("More tasks executed then were scheduled.");0!=o&&0!=r||this.hasTask(this._zone,{microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:t})}}class c{constructor(e,n,o,r,s,i){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=e,this.source=n,this.data=r,this.scheduleFn=s,this.cancelFn=i,!o)throw new Error("callback is not defined");this.callback=o;const a=this;this.invoke=e===D&&r&&r.useG?c.invokeTask:function(){return c.invokeTask.call(t,a,this,arguments)}}static invokeTask(t,e,n){t||(t=this),j++;try{return t.runCount++,t.zone.runTask(t,e,n)}finally{1==j&&g(),j--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(T,m)}_transitionTo(t,e,n){if(this._state!==e&&this._state!==n)throw new Error(`${this.type} '${this.source}': can not transition to '${t}', expecting state '${e}'${n?" or '"+n+"'":""}, was '${this._state}'.`);this._state=t,t==T&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const l=e("setTimeout"),u=e("Promise"),h=e("then");let f,p=[],d=!1;function _(e){if(f||t[u]&&(f=t[u].resolve(0)),f){let t=f[h];t||(t=f.then),t.call(f,e)}else t[l](e,0)}function k(t){0===j&&0===p.length&&_(g),t&&p.push(t)}function g(){if(!d){for(d=!0;p.length;){const e=p;p=[];for(let n=0;n<e.length;n++){const o=e[n];try{o.zone.runTask(o,null,null)}catch(t){C.onUnhandledError(t)}}}C.microtaskDrainDone(),d=!1}}const y={name:"NO ZONE"},T="notScheduled",m="scheduling",v="scheduled",b="running",E="canceling",w="unknown",S="microTask",Z="macroTask",D="eventTask",P={},C={symbol:e,currentZoneFrame:()=>O,onUnhandledError:I,microtaskDrainDone:I,scheduleMicroTask:k,showUncaughtError:()=>!s[e("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:I,patchMethod:()=>I,bindArguments:()=>[],patchThen:()=>I,patchMacroTask:()=>I,patchEventPrototype:()=>I,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>I,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>I,wrapWithCurrentZone:()=>I,filterProperties:()=>[],attachOriginToPatched:()=>I,_redefineProperty:()=>I,patchCallbacks:()=>I,nativeScheduleMicroTask:_};let O={parent:null,zone:new s(null,null)},z=null,j=0;function I(){}return r("Zone","Zone"),s}(),n.Zone}();var nt;(function(t){t.__load_patch("ZoneAwarePromise",((t,e,n)=>{const o=Object.getOwnPropertyDescriptor,r=Object.defineProperty,s=n.symbol,i=[],a=!1!==t[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],c=s("Promise"),l=s("then"),u="__creationTrace__";n.onUnhandledError=t=>{if(n.showUncaughtError()){const e=t&&t.rejection;e?console.error("Unhandled Promise rejection:",e instanceof Error?e.message:e,"; Zone:",t.zone.name,"; Task:",t.task&&t.task.source,"; Value:",e,e instanceof Error?e.stack:void 0):console.error(t)}},n.microtaskDrainDone=()=>{for(;i.length;){const e=i.shift();try{e.zone.runGuarded((()=>{throw e.throwOriginal?e.rejection:e}))}catch(t){f(t)}}};const h=s("unhandledPromiseRejectionHandler");function f(t){n.onUnhandledError(t);try{const n=e[h];"function"==typeof n&&n.call(this,t)}catch{}}function p(t){return t&&t.then}function d(t){return t}function _(t){return A.reject(t)}const k=s("state"),g=s("value"),y=s("finally"),T=s("parentPromiseValue"),m=s("parentPromiseState"),v="Promise.then",b=null,E=!0,w=!1,S=0;function Z(t,e){return n=>{try{O(t,e,n)}catch(o){O(t,!1,o)}}}const D=function(){let t=!1;return function(e){return function(){t||(t=!0,e.apply(null,arguments))}}},P="Promise resolved with itself",C=s("currentTaskTrace");function O(t,o,s){const c=D();if(t===s)throw new TypeError(P);if(t[k]===b){let f=null;try{("object"==typeof s||"function"==typeof s)&&(f=s&&s.then)}catch(l){return c((()=>{O(t,!1,l)}))(),t}if(o!==w&&s instanceof A&&s.hasOwnProperty(k)&&s.hasOwnProperty(g)&&s[k]!==b)j(s),O(t,s[k],s[g]);else if(o!==w&&"function"==typeof f)try{f.call(s,c(Z(t,o)),c(Z(t,!1)))}catch(l){c((()=>{O(t,!1,l)}))()}else{t[k]=o;const c=t[g];if(t[g]=s,t[y]===y&&o===E&&(t[k]=t[m],t[g]=t[T]),o===w&&s instanceof Error){const t=e.currentTask&&e.currentTask.data&&e.currentTask.data[u];t&&r(s,C,{configurable:!0,enumerable:!1,writable:!0,value:t})}for(let e=0;e<c.length;)R(t,c[e++],c[e++],c[e++],c[e++]);if(0==c.length&&o==w){t[k]=S;let o=s;try{throw new Error("Uncaught (in promise): "+function(t){return t&&t.toString===Object.prototype.toString?(t.constructor&&t.constructor.name||"")+": "+JSON.stringify(t):t?t.toString():Object.prototype.toString.call(t)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(h){o=h}a&&(o.throwOriginal=!0),o.rejection=s,o.promise=t,o.zone=e.current,o.task=e.currentTask,i.push(o),n.scheduleMicroTask()}}}return t}const z=s("rejectionHandledHandler");function j(t){if(t[k]===S){try{const n=e[z];n&&"function"==typeof n&&n.call(this,{rejection:t[g],promise:t})}catch{}t[k]=w;for(let e=0;e<i.length;e++)t===i[e].promise&&i.splice(e,1)}}function R(t,e,n,o,r){j(t);const s=t[k],i=s?"function"==typeof o?o:d:"function"==typeof r?r:_;e.scheduleMicroTask(v,(()=>{try{const o=t[g],r=!!n&&y===n[y];r&&(n[T]=o,n[m]=s);const a=e.run(i,void 0,r&&i!==_&&i!==d?[]:[o]);O(n,!0,a)}catch(o){O(n,!1,o)}}),n)}const M=function(){},N=t.AggregateError;class A{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(t){return t instanceof A?t:O(new this(null),E,t)}static reject(t){return O(new this(null),w,t)}static withResolvers(){const t={};return t.promise=new A(((e,n)=>{t.resolve=e,t.reject=n})),t}static any(t){if(!t||"function"!=typeof t[Symbol.iterator])return Promise.reject(new N([],"All promises were rejected"));const e=[];let n=0;try{for(let o of t)n++,e.push(A.resolve(o))}catch{return Promise.reject(new N([],"All promises were rejected"))}if(0===n)return Promise.reject(new N([],"All promises were rejected"));let o=!1;const r=[];return new A(((t,s)=>{for(let i=0;i<e.length;i++)e[i].then((e=>{o||(o=!0,t(e))}),(t=>{r.push(t),n--,0===n&&(o=!0,s(new N(r,"All promises were rejected")))}))}))}static race(t){let e,n,o=new this(((t,o)=>{e=t,n=o}));function r(t){e(t)}function s(t){n(t)}for(let i of t)p(i)||(i=this.resolve(i)),i.then(r,s);return o}static all(t){return A.allWithCallback(t)}static allSettled(t){return(this&&this.prototype instanceof A?this:A).allWithCallback(t,{thenCallback:t=>({status:"fulfilled",value:t}),errorCallback:t=>({status:"rejected",reason:t})})}static allWithCallback(t,e){let n,o,r=new this(((t,e)=>{n=t,o=e})),s=2,i=0;const a=[];for(let l of t){p(l)||(l=this.resolve(l));const t=i;try{l.then((o=>{a[t]=e?e.thenCallback(o):o,s--,0===s&&n(a)}),(r=>{e?(a[t]=e.errorCallback(r),s--,0===s&&n(a)):o(r)}))}catch(c){o(c)}s++,i++}return s-=2,0===s&&n(a),r}constructor(t){const e=this;if(!(e instanceof A))throw new Error("Must be an instanceof Promise.");e[k]=b,e[g]=[];try{const n=D();t&&t(n(Z(e,E)),n(Z(e,w)))}catch(n){O(e,!1,n)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(t,n){let o=this.constructor?.[Symbol.species];(!o||"function"!=typeof o)&&(o=this.constructor||A);const r=new o(M),s=e.current;return this[k]==b?this[g].push(s,r,t,n):R(this,s,r,t,n),r}catch(t){return this.then(null,t)}finally(t){let n=this.constructor?.[Symbol.species];(!n||"function"!=typeof n)&&(n=A);const o=new n(M);o[y]=y;const r=e.current;return this[k]==b?this[g].push(r,o,t,t):R(this,r,o,t,t),o}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;const L=t[c]=t.Promise;t.Promise=A;const H=s("thenPatched");function x(t){const e=t.prototype,n=o(e,"then");if(n&&(!1===n.writable||!n.configurable))return;const r=e.then;e[l]=r,t.prototype.then=function(t,e){return new A(((t,e)=>{r.call(this,t,e)})).then(t,e)},t[H]=!0}return n.patchThen=x,L&&(x(L),I(t,"fetch",(t=>function(t){return function(e,n){let o=t.apply(e,n);if(o instanceof A)return o;let r=o.constructor;return r[H]||x(r),o}}(t)))),Promise[e.__symbol__("uncaughtPromiseErrors")]=i,A}))})(nt=et),function(t){t.__load_patch("toString",(t=>{const e=Function.prototype.toString,n=k("OriginalDelegate"),o=k("Promise"),r=k("Error"),s=function(){if("function"==typeof this){const s=this[n];if(s)return"function"==typeof s?e.call(s):Object.prototype.toString.call(s);if(this===Promise){const n=t[o];if(n)return e.call(n)}if(this===Error){const n=t[r];if(n)return e.call(n)}}return e.call(this)};s[n]=e,Function.prototype.toString=s;const i=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":i.call(this)}}))}(nt),function(t){t.__load_patch("util",((t,e,r)=>{const l=Q(t);r.patchOnProperties=O,r.patchMethod=I,r.bindArguments=v,r.patchMacroTask=R;const u=e.__symbol__("BLACK_LISTED_EVENTS"),_=e.__symbol__("UNPATCHED_EVENTS");t[_]&&(t[u]=t[_]),t[u]&&(e[u]=e[_]=t[u]),r.patchEventPrototype=$,r.patchEventTarget=U,r.isIEOrEdge=L,r.ObjectDefineProperty=o,r.ObjectGetOwnPropertyDescriptor=n,r.ObjectCreate=s,r.ArraySlice=i,r.patchClass=j,r.wrapWithCurrentZone=d,r.filterProperties=J,r.attachOriginToPatched=M,r._redefineProperty=Object.defineProperty,r.patchCallbacks=tt,r.getGlobalObjects=()=>({globalSources:q,zoneSymbolEventNames:F,eventNames:l,isBrowser:S,isMix:Z,isNode:w,TRUE_STR:h,FALSE_STR:f,ZONE_SYMBOL_PREFIX:p,ADD_EVENT_LISTENER_STR:a,REMOVE_EVENT_LISTENER_STR:c})}))}(nt),function(t){t.__load_patch("legacy",(e=>{const n=e[t.__symbol__("legacyPatch")];n&&n()})),t.__load_patch("timers",(t=>{const e="set",n="clear";Y(t,e,n,"Timeout"),Y(t,e,n,"Interval"),Y(t,e,n,"Immediate")})),t.__load_patch("requestAnimationFrame",(t=>{Y(t,"request","cancel","AnimationFrame"),Y(t,"mozRequest","mozCancel","AnimationFrame"),Y(t,"webkitRequest","webkitCancel","AnimationFrame")})),t.__load_patch("blocking",((t,e)=>{const n=["alert","prompt","confirm"];for(let o=0;o<n.length;o++)I(t,n[o],((n,o,r)=>function(o,s){return e.current.run(n,t,s,r)}))})),t.__load_patch("EventTarget",((t,e,n)=>{(function(t,e){e.patchEventPrototype(t,e)})(t,n),function(t,e){if(Zone[e.symbol("patchEventTarget")])return;const{eventNames:n,zoneSymbolEventNames:o,TRUE_STR:r,FALSE_STR:s,ZONE_SYMBOL_PREFIX:i}=e.getGlobalObjects();for(let c=0;c<n.length;c++){const t=n[c],e=i+(t+s),a=i+(t+r);o[t]={},o[t][s]=e,o[t][r]=a}const a=t.EventTarget;a&&a.prototype&&e.patchEventTarget(t,e,[a&&a.prototype])}(t,n);const o=t.XMLHttpRequestEventTarget;o&&o.prototype&&n.patchEventTarget(t,n,[o.prototype])})),t.__load_patch("MutationObserver",((t,e,n)=>{j("MutationObserver"),j("WebKitMutationObserver")})),t.__load_patch("IntersectionObserver",((t,e,n)=>{j("IntersectionObserver")})),t.__load_patch("FileReader",((t,e,n)=>{j("FileReader")})),t.__load_patch("on_property",((t,e,n)=>{!function(t,e){if(w&&!Z||Zone[t.symbol("patchEvents")])return;const n=e.__Zone_ignore_on_properties;let o=[];if(S){const t=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const e=function(){try{const t=y.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:t,ignoreProperties:["error"]}]:[];K(t,Q(t),n&&n.concat(e),r(t))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<o.length;r++){const t=e[o[r]];t&&t.prototype&&K(t.prototype,Q(t.prototype),n)}}(n,t)})),t.__load_patch("customElements",((t,e,n)=>{!function(t,e){const{isBrowser:n,isMix:o}=e.getGlobalObjects();(n||o)&&t.customElements&&"customElements"in t&&e.patchCallbacks(e,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(t,n)})),t.__load_patch("XHR",((t,e)=>{!function(t){const c=t.XMLHttpRequest;if(!c)return;const h=c.prototype;let f=h[l],p=h[u];if(!f){const e=t.XMLHttpRequestEventTarget;if(e){const t=e.prototype;f=t[l],p=t[u]}}const d="readystatechange",g="scheduled";function y(t){const o=t.data,i=o.target;i[s]=!1,i[a]=!1;const c=i[r];f||(f=i[l],p=i[u]),c&&p.call(i,d,c);const h=i[r]=()=>{if(i.readyState===i.DONE)if(!o.aborted&&i[s]&&t.state===g){const n=i[e.__symbol__("loadfalse")];if(0!==i.status&&n&&n.length>0){const r=t.invoke;t.invoke=function(){const n=i[e.__symbol__("loadfalse")];for(let e=0;e<n.length;e++)n[e]===t&&n.splice(e,1);!o.aborted&&t.state===g&&r.call(t)},n.push(t)}else t.invoke()}else!o.aborted&&!1===i[s]&&(i[a]=!0)};return f.call(i,d,h),i[n]||(i[n]=t),w.apply(i,o.args),i[s]=!0,t}function T(){}function m(t){const e=t.data;return e.aborted=!0,S.apply(e.target,e.args)}const v=I(h,"open",(()=>function(t,e){return t[o]=0==e[2],t[i]=e[1],v.apply(t,e)})),b=k("fetchTaskAborting"),E=k("fetchTaskScheduling"),w=I(h,"send",(()=>function(t,n){if(!0===e.current[E]||t[o])return w.apply(t,n);{const e={target:t,url:t[i],isPeriodic:!1,args:n,aborted:!1},o=_("XMLHttpRequest.send",T,e,y,m);t&&!0===t[a]&&!e.aborted&&o.state===g&&o.invoke()}})),S=I(h,"abort",(()=>function(t,o){const r=function(t){return t[n]}(t);if(r&&"string"==typeof r.type){if(null==r.cancelFn||r.data&&r.data.aborted)return;r.zone.cancelTask(r)}else if(!0===e.current[b])return S.apply(t,o)}))}(t);const n=k("xhrTask"),o=k("xhrSync"),r=k("xhrListener"),s=k("xhrScheduled"),i=k("xhrURL"),a=k("xhrErrorBeforeScheduled")})),t.__load_patch("geolocation",(t=>{t.navigator&&t.navigator.geolocation&&function(t,e){const o=t.constructor.name;for(let r=0;r<e.length;r++){const s=e[r],i=t[s];if(i){if(!b(n(t,s)))continue;t[s]=(t=>{const e=function(){return t.apply(this,v(arguments,o+"."+s))};return M(e,t),e})(i)}}}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])})),t.__load_patch("PromiseRejectionEvent",((t,e)=>{function n(e){return function(n){V(t,e).forEach((o=>{const r=t.PromiseRejectionEvent;if(r){const t=new r(e,{promise:n.promise,reason:n.rejection});o.invoke(t)}}))}}t.PromiseRejectionEvent&&(e[k("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),e[k("rejectionHandledHandler")]=n("rejectionhandled"))})),t.__load_patch("queueMicrotask",((t,e,n)=>{!function(t,e){e.patchMethod(t,"queueMicrotask",(t=>function(t,e){Zone.current.scheduleMicroTask("queueMicrotask",e[0])}))}(t,n)}))}(et)}},t=>{t(t.s=3569)}]);