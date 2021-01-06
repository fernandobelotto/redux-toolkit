/*! For license information please see 696261a1.d4669fe6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),o=(n(90),n(89)),i=n(96),l=n(97),u={id:"immutabilityMiddleware",title:"Immutability Middleware",sidebar_label:"Immutability Middleware",hide_title:!0},c={unversionedId:"api/immutabilityMiddleware",id:"api/immutabilityMiddleware",isDocsHomePage:!1,title:"Immutability Middleware",description:"Immutability Middleware",source:"@site/..\\docs\\api\\immutabilityMiddleware.mdx",slug:"/api/immutabilityMiddleware",permalink:"/redux-toolkit/api/immutabilityMiddleware",version:"current",sidebar_label:"Immutability Middleware",sidebar:"docs",previous:{title:"getDefaultMiddleware",permalink:"/redux-toolkit/api/getDefaultMiddleware"},next:{title:"Serializability Middleware",permalink:"/redux-toolkit/api/serializabilityMiddleware"}},s=[{value:"Options",id:"options",children:[]},{value:"Exports",id:"exports",children:[{value:"<code>createImmutableStateInvariantMiddleware</code>",id:"createimmutablestateinvariantmiddleware",children:[]},{value:"<code>isImmutableDefault</code>",id:"isimmutabledefault",children:[]}]}],d={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"immutability-middleware"},"Immutability Middleware"),Object(o.b)("p",null,"A port of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/leoasis/redux-immutable-state-invariant"}),Object(o.b)("inlineCode",{parentName:"a"},"redux-immutable-state-invariant"))," middleware, customized for use with Redux Toolkit. Any detected mutations will be thrown as errors."),Object(o.b)("p",null,"This middleware is added to the store by default by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/configureStore"}),Object(o.b)("inlineCode",{parentName:"a"},"configureStore"))," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/getDefaultMiddleware"}),Object(o.b)("inlineCode",{parentName:"a"},"getDefaultMiddleware")),"."),Object(o.b)("p",null,"You can customize the behavior of this middleware by passing any of the supported options as the ",Object(o.b)("inlineCode",{parentName:"p"},"immutableCheck")," value for ",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware"),"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"no-transpile","no-transpile":!0}),"type IsImmutableFunc = (value: any) => boolean\n\ninterface ImmutableStateInvariantMiddlewareOptions {\n  /**\n    Callback function to check if a value is considered to be immutable.\n    This function is applied recursively to every value contained in the state.\n    The default implementation will return true for primitive types \n    (like numbers, strings, booleans, null and undefined).\n   */\n  isImmutable?: IsImmutableFunc\n  /** \n    An array of dot-separated path strings that match named nodes from \n    the root state to ignore when checking for immutability.\n    Defaults to undefined\n   */\n  ignoredPaths?: string[]\n  /** Print a warning if checks take longer than N ms. Default: 32ms */\n  warnAfter?: number\n  // @deprecated. Use ignoredPaths\n  ignore?: string[]\n}\n")),Object(o.b)("h2",{id:"exports"},"Exports"),Object(o.b)("h3",{id:"createimmutablestateinvariantmiddleware"},Object(o.b)("inlineCode",{parentName:"h3"},"createImmutableStateInvariantMiddleware")),Object(o.b)("p",null,"Creates an instance of the immutability check middleware, with the given options."),Object(o.b)("p",null,"You will most likely not need to call this yourself, as ",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," already does so."),Object(o.b)("p",null,"Example:"),Object(o.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// file: exampleSlice.ts\nimport { createSlice } from '@reduxjs/toolkit'\n\nexport const exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two',\n    },\n  },\n  reducers: {},\n})\n\nexport default exampleSlice.reducer\n\n\n// file: store.ts\nimport {\n  configureStore,\n  createImmutableStateInvariantMiddleware,\n} from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n})\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: [immutableInvariantMiddleware],\n})\n"))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// file: exampleSlice.ts\nimport { createSlice } from '@reduxjs/toolkit'\n\nexport const exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two',\n    },\n  },\n  reducers: {},\n})\n\nexport default exampleSlice.reducer\n\n\n// file: store.ts\nimport {\n  configureStore,\n  createImmutableStateInvariantMiddleware,\n} from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n})\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: [immutableInvariantMiddleware],\n})\n")))),Object(o.b)("p",null,"doing the same without removing all other middlewares, using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./getDefaultMiddleware"}),"getDetfaultMiddleware"),":"),Object(o.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { configureStore } from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      immutableCheck: {\n        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n      },\n    }),\n})\n"))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { configureStore } from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      immutableCheck: {\n        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n      },\n    }),\n})\n")))),Object(o.b)("h3",{id:"isimmutabledefault"},Object(o.b)("inlineCode",{parentName:"h3"},"isImmutableDefault")),Object(o.b)("p",null,'Default implementation of the "is this value immutable?" check. Currently implemented as:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"return (\n  typeof value !== 'object' || value === null || typeof value === 'undefined'\n)\n")),Object(o.b)("p",null,"This will return true for primitive types (like numbers, strings, booleans, null and undefined)"))}f.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||f[p]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";e.exports=n(91)},91:function(e,t,n){"use strict";var r=n(92),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.concurrent_mode"):60111,p=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(e=Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||w}function x(){}function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||w}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=O.prototype;var k=S.prototype=new x;k.constructor=S,r(k,O.prototype),k.isPureReactComponent=!0;var I={current:null},N={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,n){var r=void 0,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:N.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,T=[];function D(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function $(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(r,e,""===t?"."+F(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+F(a=e[u],u);l+=$(a,c,n,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=$(a=a.value,c=t+F(a,u++),n,r);else"object"===a&&g("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}function A(e,t,n){return null==e?0:$(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function V(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),A(e,U,t=D(t,o,r,a)),R(t)}function q(){var e=I.current;return null===e&&g("321"),e}var z={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return V(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,L,t=D(null,null,t,n)),R(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){return E(e)||g("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:l,StrictMode:u,Suspense:m,createElement:M,cloneElement:function(e,t,n){null==e&&g("267",e);var a=void 0,i=r({},e.props),l=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=N.current),void 0!==t.key&&(l=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)P.call(t,a)&&!C.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))i.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:o,type:e.type,key:l,ref:u,props:i,_owner:c}},createFactory:function(e){var t=M.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:N,assign:r}},J={default:z},K=J&&z||J;e.exports=K.default||K},92:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,u=i(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))a.call(n,s)&&(u[s]=n[s]);if(r){l=r(n);for(var d=0;d<l.length;d++)o.call(n,l[d])&&(u[l[d]]=n[l[d]])}}return u}},93:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},94:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},95:function(e,t,n){"use strict";var r=n(0),a=n(94);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(95),i=n(93),l=n(48),u=n.n(l);const c=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:d,groupId:f}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(o.a)(),[b,y]=Object(r.useState)(l),[h,v]=Object(r.useState)(!1);if(null!=f){const e=p[f];null!=e&&e!==b&&d.some(t=>t.value===e)&&y(e)}const g=e=>{y(e),null!=f&&m(f,e)},w=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},O=()=>{v(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",O)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":b===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":b===e}),style:h?{}:{outline:"none"},key:e,ref:e=>w.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(w,e.target,e),j(e)},onFocus:()=>g(e),onClick:()=>{g(e),v(!1)},onPointerDown:()=>v(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===b)[0]))}}}]);