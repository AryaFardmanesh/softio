"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _createForOfIteratorHelper(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function _regeneratorRuntime(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),u=new A(n||[]);return o(a,"_invoke",{value:j(t,e,u)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",d={};function g(){}function m(){}function w(){}var b={};f(b,a,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(N([])));x&&x!==e&&n.call(x,a)&&(b=x);var E=w.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,r){function e(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==_typeof(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function j(r,e,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=T(u,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var f=l(r,e,n);if("normal"===f.type){if(o=n.done?v:p,f.arg===d)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=v,n.method="throw",n.arg=f.arg)}}}function T(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,T(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(_typeof(r)+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(O.prototype),f(O.prototype,u,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),f(E,c,"Generator"),f(E,a,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,A.prototype={constructor:A,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}var softio;!function(){var t={990:function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var e=process.stdout;r.default={get title(){return process.title},set title(t){if(void 0===t)t=this.title;else if("string"!=typeof t)throw new TypeError("The 'title' property only takes a string as a title.");process.title=t},get width(){return e.columns},get height(){return e.rows}}},11:function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var e=process.stdout;r.default={center:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!=typeof t)throw new TypeError("The 'center' function only takes a string as a message.");for(var r="",n=e.columns/2-t.length/2,o=0;o<n;o++)r+=" ";return r+t},clear:function(){e.write("[2J")}}},463:function(t,r,e){var n=this&&this.__awaiter||function(t,r,e,n){return new(e||(e=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function u(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(a,u)}c((n=n.apply(t,r||[])).next())}))},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var i=o(e(848)),a=process.stdin,u=process.stdout;r.default={input:function(){return n(this,arguments,void 0,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _regeneratorRuntime().mark((function r(){var e,n;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("string"==typeof t){r.next=2;break}throw new TypeError("The 'input' function only takes a string as a message.");case 2:return e=i.default.createInterface({output:u,input:a}),r.next=5,e.question(t);case 5:return n=r.sent,r.abrupt("return",(e.close(),n));case 7:case"end":return r.stop()}}),r)}))()}))},confirm:function(){return n(this,arguments,void 0,(function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _regeneratorRuntime().mark((function e(){var n,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r+=" (y/n) ",e.next=3,t.input(r);case 3:return n=e.sent.trim().toUpperCase(),o=!1,e.abrupt("return",("Y"!==n&&"YES"!==n&&"OK"!==n||(o=!0),o));case 6:case"end":return e.stop()}}),e)}))()}))},readNumber:function(){return n(this,arguments,void 0,(function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _regeneratorRuntime().mark((function e(){var n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.input(r);case 2:return n=e.sent.trim(),e.abrupt("return",Number(n));case 4:case"end":return e.stop()}}),e)}))()}))}}},290:function(t,r,e){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.softio=void 0;var o=n(e(802)),i=n(e(463)),a=n(e(990)),u=n(e(11)),c=Object.assign(Object.assign(Object.assign(Object.assign({version:"0.3.12"},o.default),i.default),a.default),u.default);r.softio=c},802:function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var e=process.stdout,n=process.stderr;function o(t){if("function"==typeof(null==t?void 0:t.toString))return t.toString();if(void 0===t)return"undefined";if(null===t)return"null";if(t instanceof Object)throw new TypeError("Sorry, non-primitive data types are not yet supported.");return"<@UNKNOWN_TYPE_ERROR@>"}function i(t){for(var r="",e=0,n=0;n<t.length;n++){var i,a=t[n];"%"!==a||"v"!==t[n+1]?r+=a:(n++,r+=o((i=1+e++)<1||arguments.length<=i?void 0:arguments[i]))}return r}r.default={write:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=function(t){var r,e="",n=_createForOfIteratorHelper(t);try{for(n.s();!(r=n.n()).done;){e+=o(r.value),e+=" "}}catch(t){n.e(t)}finally{n.f()}return e.slice(0,-1)}(r);e.write(i)},writeln:function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];r.push("\n"),this.write.apply(this,r)},printf:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!=typeof t)throw new TypeError("The 'printf' method given only string message.");for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t=i.apply(void 0,[t].concat(n)),e.write(t)},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!=typeof t)throw new TypeError("The 'error' method given only string message.");for(var r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];t=i.apply(void 0,[t].concat(e)),n.write(t)}}},848:function(t){t.exports=require("node:readline/promises")}},r={},e=function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}(290);softio=e}();module.exports=softio.softio;