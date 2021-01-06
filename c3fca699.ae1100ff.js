/*! For license information please see c3fca699.ae1100ff.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(90),r(89)),i=r(96),c=r(97),u={id:"other-exports",title:"Outras Exporta\xe7\xf5es",sidebar_label:"Outras Exporta\xe7\xf5es",hide_title:!0},l={unversionedId:"api/other-exports",id:"api/other-exports",isDocsHomePage:!1,title:"Outras Exporta\xe7\xf5es",description:"Other Exports",source:"@site/..\\docs\\api\\otherExports.mdx",slug:"/api/other-exports",permalink:"/redux-toolkit/api/other-exports",version:"current",sidebar_label:"Outras Exporta\xe7\xf5es",sidebar:"docs",previous:{title:"Matching Utilities",permalink:"/redux-toolkit/api/matching-utilities"}},s=[{value:"<code>nanoid</code>",id:"nanoid",children:[]},{value:"Exports from Other Libraries",id:"exports-from-other-libraries",children:[{value:"<code>createNextState</code>",id:"createnextstate",children:[]},{value:"<code>current</code>",id:"current",children:[]},{value:"<code>original</code>",id:"original",children:[]},{value:"<code>combineReducers</code>",id:"combinereducers",children:[]},{value:"<code>compose</code>",id:"compose",children:[]},{value:"<code>bindActionCreators</code>",id:"bindactioncreators",children:[]},{value:"<code>createStore</code>",id:"createstore",children:[]},{value:"<code>applyMiddleware</code>",id:"applymiddleware",children:[]}]}],p={rightToc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"other-exports"},"Other Exports"),Object(a.b)("p",null,"Redux Toolkit exports some of its internal utilities, and re-exports additional functions from other dependencies as well."),Object(a.b)("h3",{id:"nanoid"},Object(a.b)("inlineCode",{parentName:"h3"},"nanoid")),Object(a.b)("p",null,"An inlined copy of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ai/nanoid"}),Object(a.b)("inlineCode",{parentName:"a"},"nanoid/nonsecure")),". Generates a non-cryptographically-secure random ID string. Automatically used by ",Object(a.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," for request IDs, but may also be useful for other cases as well."),Object(a.b)(c.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { nanoid } from '@reduxjs/toolkit'\n\nconsole.log(nanoid())\n// 'dgPXxUz_6fWIQBD8XmiSy'\n"))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { nanoid } from '@reduxjs/toolkit'\n\nconsole.log(nanoid())\n// 'dgPXxUz_6fWIQBD8XmiSy'\n")))),Object(a.b)("h2",{id:"exports-from-other-libraries"},"Exports from Other Libraries"),Object(a.b)("h3",{id:"createnextstate"},Object(a.b)("inlineCode",{parentName:"h3"},"createNextState")),Object(a.b)("p",null,"The default immutable update function from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/"}),Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),", re-exported here as ",Object(a.b)("inlineCode",{parentName:"p"},"createNextState")," (also commonly referred to as ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/docs/produce"}),Object(a.b)("inlineCode",{parentName:"a"},"produce")),")"),Object(a.b)("h3",{id:"current"},Object(a.b)("inlineCode",{parentName:"h3"},"current")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/docs/current"}),"The ",Object(a.b)("inlineCode",{parentName:"a"},"current")," function")," from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/"}),Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),", which takes a snapshot of the current state of a draft and finalizes it (but without freezing). Current is a great utility to print the current state during debugging, and the output of ",Object(a.b)("inlineCode",{parentName:"p"},"current")," can also be safely leaked outside the producer."),Object(a.b)("h3",{id:"original"},Object(a.b)("inlineCode",{parentName:"h3"},"original")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/docs/original"}),"The ",Object(a.b)("inlineCode",{parentName:"a"},"original")," function")," from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://immerjs.github.io/immer/"}),Object(a.b)("inlineCode",{parentName:"a"},"immer")," library"),", which returns the original object. This is particularly useful for referential equality check in reducers."),Object(a.b)(c.a,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { createReducer, createAction, current } from '@reduxjs/toolkit'\n\ninterface Todo {\n  //...\n}\nconst addTodo = createAction<Todo>('addTodo')\n\nconst initialState: Todo[] = []\n\nconst todosReducer = createReducer(initialState, (builder) => {\n  builder.addCase(addTodo, (state, action) => {\n    state.push(action.payload)\n    console.log(current(state))\n  })\n})\n"))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createReducer, createAction, current } from '@reduxjs/toolkit'\nconst addTodo = createAction('addTodo')\n\nconst initialState = []\n\nconst todosReducer = createReducer(initialState, (builder) => {\n  builder.addCase(addTodo, (state, action) => {\n    state.push(action.payload)\n    console.log(current(state))\n  })\n})\n")))),Object(a.b)("h3",{id:"combinereducers"},Object(a.b)("inlineCode",{parentName:"h3"},"combineReducers")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/api/combinereducers"}),Object(a.b)("inlineCode",{parentName:"a"},"combineReducers")),", re-exported for convenience. While ",Object(a.b)("inlineCode",{parentName:"p"},"configureStore")," calls this internally, you may wish to call it yourself to compose multiple levels of slice reducers."),Object(a.b)("h3",{id:"compose"},Object(a.b)("inlineCode",{parentName:"h3"},"compose")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/api/compose"}),Object(a.b)("inlineCode",{parentName:"a"},"compose")),". It composes functions from right to left.\nThis is a functional programming utility. You might want to use it to apply several store custom enhancers/ functions in a row."),Object(a.b)("h3",{id:"bindactioncreators"},Object(a.b)("inlineCode",{parentName:"h3"},"bindActionCreators")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/api/bindactioncreators"}),Object(a.b)("inlineCode",{parentName:"a"},"bindActionCreators")),". It wraps action creators with ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch()")," so that they dispatch immediately when called."),Object(a.b)("h3",{id:"createstore"},Object(a.b)("inlineCode",{parentName:"h3"},"createStore")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/api/createstore"}),Object(a.b)("inlineCode",{parentName:"a"},"createStore")),". You should not need to use this directly."),Object(a.b)("h3",{id:"applymiddleware"},Object(a.b)("inlineCode",{parentName:"h3"},"applyMiddleware")),Object(a.b)("p",null,"Redux's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/api/applymiddleware"}),Object(a.b)("inlineCode",{parentName:"a"},"applyMiddleware")),". You should not need to use this directly."))}d.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";e.exports=r(91)},91:function(e,t,r){"use strict";var n=r(92),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function j(e,t,r,n,o,a,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,a,i,c],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function w(){}function C(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var N=C.prototype=new w;N.constructor=C,n(N,x.prototype),N.isPureReactComponent=!0;var S={current:null},k={current:null},E=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n=void 0,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,n)&&!T.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,I=[];function $(e,t,r,n){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function D(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return r(n,e,""===t?"."+L(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+L(o=e[u],u);c+=D(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)c+=D(o=o.value,l=t+L(o,u++),r,n);else"object"===o&&O("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return c}function M(e,t,r){return null==e?0:D(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function V(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),M(e,q,t=$(t,a,n,o)),A(t)}function z(){var e=S.current;return null===e&&O("321"),e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return V(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=$(null,null,t,r)),A(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return V(e,t,null,(function(e){return e})),t},only:function(e){return P(e)||O("143"),e}},createRef:function(){return{current:null}},Component:x,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z().useCallback(e,t)},useContext:function(e,t){return z().useContext(e,t)},useEffect:function(e,t){return z().useEffect(e,t)},useImperativeHandle:function(e,t,r){return z().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return z().useLayoutEffect(e,t)},useMemo:function(e,t){return z().useMemo(e,t)},useReducer:function(e,t,r){return z().useReducer(e,t,r)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:c,StrictMode:u,Suspense:b,createElement:_,cloneElement:function(e,t,r){null==e&&O("267",e);var o=void 0,i=n({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=k.current),void 0!==t.key&&(c=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)E.call(t,o)&&!T.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){s=Array(o);for(var p=0;p<o;p++)s[p]=arguments[p+2];i.children=s}return{$$typeof:a,type:e.type,key:c,ref:u,props:i,_owner:l}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.6",unstable_ConcurrentMode:d,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentOwner:k,assign:n}},X={default:F},B=X&&F||X;e.exports=B.default||B},92:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(u[s]=r[s]);if(n){c=n(r);for(var p=0;p<c.length;p++)a.call(r,c[p])&&(u[c[p]]=r[c[p]])}}return u}},93:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},94:function(e,t,r){"use strict";var n=r(0);const o=Object(n.createContext)(void 0);t.a=o},95:function(e,t,r){"use strict";var n=r(0),o=r(94);t.a=function(){const e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},97:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(95),i=r(93),c=r(48),u=r.n(c);const l=37,s=39;t.a=function(e){const{block:t,children:r,defaultValue:c,values:p,groupId:d}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(a.a)(),[m,h]=Object(n.useState)(c),[y,j]=Object(n.useState)(!1);if(null!=d){const e=f[d];null!=e&&e!==m&&p.some(t=>t.value===e)&&h(e)}const O=e=>{h(e),null!=d&&b(d,e)},v=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},x=()=>{j(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",x)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":m===e}),style:y?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,r)=>{switch(r.keyCode){case s:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),g(e)},onFocus:()=>O(e),onClick:()=>{O(e),j(!1)},onPointerDown:()=>j(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter(e=>e.props.value===m)[0]))}}}]);