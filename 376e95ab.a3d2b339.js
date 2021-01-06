/*! For license information please see 376e95ab.a3d2b339.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(90),n(89)),i=n(96),l=n(97),u={id:"getDefaultMiddleware",title:"getDefaultMiddleware",sidebar_label:"getDefaultMiddleware",hide_title:!0},c={unversionedId:"api/getDefaultMiddleware",id:"api/getDefaultMiddleware",isDocsHomePage:!1,title:"getDefaultMiddleware",description:"getDefaultMiddleware",source:"@site/..\\docs\\api\\getDefaultMiddleware.mdx",slug:"/api/getDefaultMiddleware",permalink:"/redux-toolkit/api/getDefaultMiddleware",version:"current",sidebar_label:"getDefaultMiddleware",sidebar:"docs",previous:{title:"configureStore",permalink:"/redux-toolkit/api/configureStore"},next:{title:"Immutability Middleware",permalink:"/redux-toolkit/api/immutabilityMiddleware"}},d=[{value:"Intended Usage",id:"intended-usage",children:[]},{value:"getDefaultMiddleware import",id:"getdefaultmiddleware-import",children:[]},{value:"Included Default Middleware",id:"included-default-middleware",children:[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]}]},{value:"Customizing the Included Middleware",id:"customizing-the-included-middleware",children:[]},{value:"API Reference",id:"api-reference",children:[]}],s={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"getdefaultmiddleware"},Object(o.b)("inlineCode",{parentName:"h1"},"getDefaultMiddleware")),Object(o.b)("p",null,"Returns an array containing the default list of middleware."),Object(o.b)("h2",{id:"intended-usage"},"Intended Usage"),Object(o.b)("p",null,"By default, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/configureStore"}),Object(o.b)("inlineCode",{parentName:"a"},"configureStore"))," adds some middleware to the Redux store setup automatically."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = configureStore({\n  reducer: rootReducer\n})\n\n// Store has middleware added, because the middleware list was not customized\n")),Object(o.b)("p",null,"If you want to customize the list of middleware, you can supply an array of middleware functions to ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = configureStore({\n  reducer: rootReducer,\n  middleware: [thunk, logger]\n})\n\n// Store specifically has the thunk and logger middleware applied\n")),Object(o.b)("p",null,"However, when you supply the ",Object(o.b)("inlineCode",{parentName:"p"},"middleware")," option, you are responsible for defining ",Object(o.b)("em",{parentName:"p"},"all")," the middleware you want added\nto the store. ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore")," will not add any extra middleware beyond what you listed."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," is useful if you want to add some custom middleware, but also still want to have the default\nmiddleware added as well:"),Object(o.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { configureStore } from '@reduxjs/toolkit'\n\nimport logger from 'redux-logger'\n\nimport rootReducer from './reducer'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n})\n\n// Store has all of the default middleware added, _plus_ the logger middleware\n"))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { configureStore } from '@reduxjs/toolkit'\n\nimport logger from 'redux-logger'\n\nimport rootReducer from './reducer'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n})\n\n// Store has all of the default middleware added, _plus_ the logger middleware\n")))),Object(o.b)("p",null,"It is preferrable to use the chainable ",Object(o.b)("inlineCode",{parentName:"p"},".concat(...)")," and ",Object(o.b)("inlineCode",{parentName:"p"},".prepend(...)")," methods of the returned ",Object(o.b)("inlineCode",{parentName:"p"},"MiddlewareArray")," instead of the array spread operator, as the latter can lose valuable type information under some circumstances."),Object(o.b)("h2",{id:"getdefaultmiddleware-import"},"getDefaultMiddleware import"),Object(o.b)("p",null,"While the callback notation with ",Object(o.b)("inlineCode",{parentName:"p"},"configureStore")," shown in the last example is the recommended way of using ",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware"),", it can also be imported to be used independently from 'configureStore':"),Object(o.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { getDefaultMiddleware } from '@reduxjs/toolkit'\n\ninterface State {\n  // ...\n}\n\nconst middlewares = getDefaultMiddleware<State>()\n"))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { getDefaultMiddleware } from '@reduxjs/toolkit'\n\nconst middlewares = getDefaultMiddleware()\n")))),Object(o.b)("p",null,"The benefit of using the callback notation is that the ",Object(o.b)("inlineCode",{parentName:"p"},"State")," type is already pre-bound, which might prevent circular type references when trying to specify generics by hand."),Object(o.b)("h2",{id:"included-default-middleware"},"Included Default Middleware"),Object(o.b)("h3",{id:"development"},"Development"),Object(o.b)("p",null,"One of the goals of Redux Toolkit is to provide opinionated defaults and prevent common mistakes. As part of that,\n",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," includes some middleware that are added ",Object(o.b)("strong",{parentName:"p"},"in development builds of your app only")," to\nprovide runtime checks for two common issues:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/immutabilityMiddleware"}),"Immutability check middleware"),": deeply compares\nstate values for mutations. It can detect mutations in reducers during a dispatch, and also mutations that occur between\ndispatches (such as in a component or a selector). When a mutation is detected, it will throw an error and indicate the key\npath for where the mutated value was detected in the state tree. (Forked from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/leoasis/redux-immutable-state-invariant"}),Object(o.b)("inlineCode",{parentName:"a"},"redux-immutable-state-invariant")),".)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/redux-toolkit/api/serializabilityMiddleware"}),"Serializability check middleware"),": a custom middleware created specifically for use in Redux Toolkit. Similar in\nconcept to ",Object(o.b)("inlineCode",{parentName:"p"},"immutable-state-invariant"),", but deeply checks your state tree and your actions for non-serializable values\nsuch as functions, Promises, Symbols, and other non-plain-JS-data values. When a non-serializable value is detected, a\nconsole error will be printed with the key path for where the non-serializable value was detected."))),Object(o.b)("p",null,"In addition to these development tool middleware, it also adds ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux-thunk"}),Object(o.b)("inlineCode",{parentName:"a"},"redux-thunk")),"\nby default, since thunks are the basic recommended side effects middleware for Redux."),Object(o.b)("p",null,"Currently, the return value is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const middleware = [thunk, immutableStateInvariant, serializableStateInvariant]\n")),Object(o.b)("h3",{id:"production"},"Production"),Object(o.b)("p",null,"Currently, the return value is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const middleware = [thunk]\n")),Object(o.b)("h2",{id:"customizing-the-included-middleware"},"Customizing the Included Middleware"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," accepts an options object that allows customizing each middleware in two ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each middleware can be excluded the result array by passing ",Object(o.b)("inlineCode",{parentName:"li"},"false")," for its corresponding field"),Object(o.b)("li",{parentName:"ul"},"Each middleware can have its options customized by passing the matching options object for its corresponding field")),Object(o.b)("p",null,'This example shows excluding the serializable state check middleware, and passing a specific value for the thunk\nmiddleware\'s "extra argument":'),Object(o.b)(l.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { configureStore } from '@reduxjs/toolkit'\nimport rootReducer from './reducer'\nimport { myCustomApiService } from './api'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      thunk: {\n        extraArgument: myCustomApiService,\n      },\n      serializableCheck: false,\n    }),\n})\n"))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { configureStore } from '@reduxjs/toolkit'\nimport rootReducer from './reducer'\nimport { myCustomApiService } from './api'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      thunk: {\n        extraArgument: myCustomApiService,\n      },\n      serializableCheck: false,\n    }),\n})\n")))),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"no-transpile","no-transpile":!0}),'interface ThunkOptions<E = any> {\n  extraArgument: E\n}\n\ninterface ImmutableStateInvariantMiddlewareOptions {\n  // See "Immutability Middleware" page for definition\n}\n\ninterface SerializableStateInvariantMiddlewareOptions {\n  // See "Serializability Middleware" page for definition\n}\n\ninterface GetDefaultMiddlewareOptions {\n  thunk?: boolean | ThunkOptions\n  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions\n  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions\n}\n\nfunction getDefaultMiddleware<S = any>(\n  options: GetDefaultMiddlewareOptions = {}\n): Middleware<{}, S>[]\n')))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||p[f]||o;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";e.exports=n(91)},91:function(e,t,n){"use strict";var r=n(92),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,d=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.concurrent_mode"):60111,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e,t,n,r,a,o,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(e=Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function j(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);g(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||w}function S(){}function k(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||w}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&j("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=v.prototype;var x=k.prototype=new S;x.constructor=k,r(x,v.prototype),x.isPureReactComponent=!0;var C={current:null},N={current:null},M=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r=void 0,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)M.call(t,r)&&!D.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:N.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g,E=[];function P(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function z(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(r,e,""===t?"."+$(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+$(a=e[u],u);l+=z(a,c,n,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=z(a=a.value,c=t+$(a,u++),n,r);else"object"===a&&j("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}function A(e,t,n){return null==e?0:z(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function V(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(T,"$&/")+"/"),A(e,L,t=P(t,o,r,a)),R(t)}function F(){var e=C.current;return null===e&&j("321"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return V(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,U,t=P(null,null,t,n)),R(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){return _(e)||j("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,StrictMode:u,Suspense:b,createElement:I,cloneElement:function(e,t,n){null==e&&j("267",e);var a=void 0,i=r({},e.props),l=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=N.current),void 0!==t.key&&(l=""+t.key);var d=void 0;for(a in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)M.call(t,a)&&!D.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==d?d[a]:t[a])}if(1===(a=arguments.length-2))i.children=n;else if(1<a){d=Array(a);for(var s=0;s<a;s++)d[s]=arguments[s+2];i.children=d}return{$$typeof:o,type:e.type,key:l,ref:u,props:i,_owner:c}},createFactory:function(e){var t=I.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentOwner:N,assign:r}},J={default:q},G=J&&q||J;e.exports=G.default||G},92:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,u=i(e),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))a.call(n,d)&&(u[d]=n[d]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(u[l[s]]=n[l[s]])}}return u}},93:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},94:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},95:function(e,t,n){"use strict";var r=n(0),a=n(94);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(95),i=n(93),l=n(48),u=n.n(l);const c=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:s,groupId:p}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(o.a)(),[m,y]=Object(r.useState)(l),[h,g]=Object(r.useState)(!1);if(null!=p){const e=f[p];null!=e&&e!==m&&s.some(t=>t.value===e)&&y(e)}const j=e=>{y(e),null!=p&&b(p,e)},w=[],O=e=>{e.metaKey||e.altKey||e.ctrlKey||g(!0)},v=()=>{g(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",O),window.addEventListener("mousedown",v)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":m===e}),style:h?{}:{outline:"none"},key:e,ref:e=>w.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(w,e.target,e),O(e)},onFocus:()=>j(e),onClick:()=>{j(e),g(!1)},onPointerDown:()=>g(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}}}]);