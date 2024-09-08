import{r as w}from"./index-RYns6xqu.js";var E={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=w,P=Symbol.for("react.element"),k=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,N=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,f){var o,s={},a=null,t=null;f!==void 0&&(a=""+f),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(t=r.ref);for(o in r)A.call(r,o)&&!S.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)s[o]===void 0&&(s[o]=r[o]);return{$$typeof:P,type:e,key:a,ref:t,props:s,_owner:N.current}}u.Fragment=k;u.jsx=g;u.jsxs=g;E.exports=u;var B=E.exports,R={exports:{}},_={};function h(e){function r(s,a,t,n){var v=a?f+s+e.e+a:f+s,i=v;if(t){var x=" "+i+e.m;for(var p in t)if(t.hasOwnProperty(p)){var m=t[p];m===!0?i+=x+p:m&&(i+=x+p+o+m)}}if(n!==void 0)for(var l=0,j=(n=Array.isArray(n)?n:[n]).length;l<j;l++){var c=n[l];if(c&&typeof c.valueOf()=="string")for(var d=c.valueOf().split(" "),y=0;y<d.length;y++){var O=d[y];O!==v&&(i+=" "+O)}}return i}var f=e.n||"",o=e.v||e.m;return function(s,a){return function(t,n,v){return typeof t=="string"?typeof n=="string"||Array.isArray(n)?r(s,t,void 0,n):r(s,t,n,v):r(s,a,t,n)}}}Object.defineProperty(_,"__esModule",{value:!0});var I=h({e:"-",m:"_"});_.cn=I,_.withNaming=h;R.exports=_;var L=R.exports;const C=e=>({bem:L.withNaming({n:"fluidity-",e:"__",m:"--",v:"_"})(e)});export{C as g,B as j};
