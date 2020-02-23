!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).zlFetch=t()}(this,(function(){"use strict";var e=function(e){if(Array.isArray(e))return e};var t=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}};var r=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var n=function(n,o){return e(n)||t(n,o)||r()};var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t})),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.headers,r=void 0===t?{}:t,n=(e.body,e.method),i=void 0===n?"get":n,c=e.auth;"undefined"==typeof Headers&&require("cross-fetch/polyfill");var u=new Headers(r);if(u.get("content-type")||"get"===i||u.set("content-type","application/json"),c)if("object"===o(c)){var a,s=c.username,f=c.password;if(!s)throw new Error("Username required for basic authentication");if(!f)throw new Error("Password required for basic authentication");a="undefined"==typeof btoa?btoa:require("btoa"),u.set("Authorization","Basic "+a("".concat(s,":").concat(f)))}else u.set("Authorization","Bearer ".concat(c));return u},c=function(e){if(e)return Object.entries(e).reduce((function(e,t,r){var o=n(t,2),i=o[0],c=o[1],u=0===r?"".concat(i,"=").concat(encodeURIComponent(c)):"&".concat(i,"=").concat(encodeURIComponent(c));return"".concat(e).concat(u)}),"")},u=function(e){var t=e.url,r=e.queries;return r?"".concat(t,"?").concat(c(r)):t},a=function(e){if("get"!==e.method){var t=e.headers.get("content-type");if(t)return t.includes("x-www-form-urlencoded")?c(e.body):t.includes("json")?JSON.stringify(e.body):e.body}},s=function(e){return e.headers.entries?function(e){var t={},r=!0,o=!1,i=void 0;try{for(var c,u=e.headers.entries()[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var a=n(c.value,2),s=a[0],f=a[1];t[s]=f}}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(e):function(e){var t={},r=e.headers._headers;for(var n in r)t[n]=r[n].join("");return t}(e)},f=function(e,t){var r=("function"==typeof e.clone?e.clone():void 0)||e;return e[t]().then((function(e){return function(e,t){var r={body:t,headers:s(e),response:e,status:e.status,statusText:e.statusText};return e.ok?Promise.resolve(r):Promise.reject(r)}(r,e)}))},d=function(e){var t=e.headers.get("content-type");if(t.includes("json"))return f(e,"json");if(t.includes("text"))return f(e,"text");if(t.includes("image"))return f(e,"blob");throw new Error("zlFetch does not support content-type ".concat(t," yet"))},l=function(e){return"Failed to fetch"===e.message?Promise.reject({error:e}):Promise.reject(e)};"undefined"==typeof fetch&&require("cross-fetch/polyfill");for(var y=function(e,t){var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},e);return t.url=u(t),t.method=t.method||"get",t.headers=i(t),t.body=a(t),delete t.auth,t}(Object.assign({url:e},t));return fetch(r.url,r).then(d).catch(l)},h=function(){var e=v[p];y[e]=function(t,r){return r=Object.assign({method:e},r),y(t,r)}},p=0,v=["get","post","put","patch","delete"];p<v.length;p++)h();return y}));
//# sourceMappingURL=index.js.map
