"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}!function(){var e={885:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(389);t.default=function(){return _createClass((function e(){_classCallCheck(this,e)}),null,[{key:"title",get:function(){return process.title},set:function(e){if("string"!=typeof e)throw new TypeError("The 'title' property only takes a string as a title.");process.title=e}},{key:"width",get:function(){return r.stdout.columns}},{key:"height",get:function(){return r.stdout.rows}}])}()},949:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(828)),o=process.stdout,s=Object.assign({},o._events),a=o._events;t.default=function(){return _createClass((function e(){_classCallCheck(this,e)}),null,[{key:"addEventListener",value:function(e,t){(0,i.default)("addEventListener","string",e),(0,i.default)("addEventListener","function",t),a[e]=function(){t(),"function"==typeof s[e]&&s[e]()}}},{key:"removeEventListener",value:function(e){a[e]=s[e]}}])}()},38:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(715)),o=r(n(828));t.default=function(){return _createClass((function e(){_classCallCheck(this,e)}),null,[{key:"input",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,o.default)("In.input","string",e),i.default.question(e)}},{key:"password",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,o.default)("In.password","string",e),(0,o.default)("In.password","string",t),i.default.question(e,{hideEchoBack:!0,mask:t})}},{key:"confirm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((0,o.default)("confirm","string",e),e+=" (y/n) ",this.input(e).trim().toUpperCase()){case"Y":case"YES":case"OK":return!0;default:return!1}}},{key:"readNumber",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.input(e);return Number(t)}}])}()},201:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Utilities=t.Events=t.Attr=t.In=t.Out=t.version=void 0;var i=n(472);Object.defineProperty(t,"version",{enumerable:!0,get:function(){return i.version}});var o=r(n(69));t.Out=o.default;var s=r(n(38));t.In=s.default;var a=r(n(885));t.Attr=a.default;var c=r(n(949));t.Events=c.default;var u=r(n(394));t.Utilities=u.default},69:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(900)),o=r(n(710)),s=r(n(828)),a=n(389),c=n(402);t.default=function(){return _createClass((function e(){_classCallCheck(this,e)}),null,[{key:"write",value:function(){var e=o.default.apply(void 0,arguments);a.stdout.write(e)}},{key:"writeln",value:function(){var e=o.default.apply(void 0,arguments)+"\n";a.stdout.write(e)}},{key:"printf",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(0,s.default)("printf","string",e),e=(0,i.default)(e,n),a.stdout.write(e)}},{key:"error",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(0,s.default)("error","string",e),e=(0,i.default)(e,n),c.stderr.write(e)}}])}()},394:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(828)),o=n(389);t.default=function(){return _createClass((function e(){_classCallCheck(this,e)}),null,[{key:"center",value:function(e){(0,i.default)("center","string",e);for(var t=o.stdout.columns/2-e.length/2,n="",r=1;r<=t;r++)n+=" ";return n+=e}},{key:"clear",value:function(){o.stdout.write("[2J")}}])}()},900:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n="",r=0,o=0;o<e.length;o++){var s=e[o];"%"!==s||"v"!==e[o+1]?n+=s:(o++,n+=(0,i.default)(t[r++]))}return n};var i=r(n(710))},710:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t=process.stdout.write,n="";return process.stdout.write=function(e){n=e},(e=console).log.apply(e,arguments),process.stdout.write=t,n.slice(0,-1)}},828:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(_typeof(n)!==t)throw new TypeError("The '".concat(e,"' method given only ").concat(t," message."))}},402:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.stderr=void 0,t.stderr=process.stderr},389:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.stdout=void 0,t.stdout=process.stdout},472:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.version=void 0,t.version="2.5.0"},715:function(e,t,n){var r,i,o,s,a,c,u="win32"===process.platform,l="aes-256-cbc",f="The current environment doesn't support interactive reading from TTY.",p=n(896),d=process.binding("tty_wrap").TTY,y=n(317),h=n(928),m={prompt:"> ",hideEchoBack:!1,mask:"*",limit:[],limitMessage:"Input another, please.$<( [)limit(])>",defaultInput:"",trueValue:[],falseValue:[],caseSensitive:!1,keepWhitespace:!1,encoding:"utf8",bufferSize:1024,print:void 0,history:!0,cd:!1,phContent:void 0,preCheck:void 0},v="none",g=!1,k=0,_="",w=[],S=!1,b=!1,C=!1;function x(e){return s.concat((t={display:"string",displayOnly:"boolean",keyIn:"boolean",hideEchoBack:"boolean",mask:"string",limit:"string",caseSensitive:"boolean"},n=[],Object.keys(t).forEach((function(r){"boolean"===t[r]?e[r]&&n.push("--"+r):"string"===t[r]&&e[r]&&n.push("--"+r,e[r].replace(/[^\w\u0080-\uFFFF]/g,(function(e){return"#"+e.charCodeAt(0)+";"})))})),n));var t,n}function E(e){var t="",m=e.display,w=!e.display&&e.keyIn&&e.hideEchoBack&&!e.mask;function E(){var t=function(e){var t,r,i={},c={env:process.env,encoding:e.encoding};if(o||(u?process.env.PSModulePath?(o="powershell.exe",s=["-ExecutionPolicy","Bypass","-File",__dirname+"\\read.ps1"]):(o="cscript.exe",s=["//nologo",__dirname+"\\read.cs.js"]):(o="/bin/sh",s=[__dirname+"/read.sh"])),u&&!process.env.PSModulePath&&(c.stdio=[process.stdin]),y.execFileSync){t=x(e),C&&C("execFileSync",t);try{i.input=y.execFileSync(o,t,c)}catch(e){r=e.stderr?(e.stderr+"").trim():"",i.error=new Error(f+(r?"\n"+r:"")),i.error.method="execFileSync",i.error.program=o,i.error.args=t,i.error.extMessage=r,i.error.exitCode=e.status,i.error.code=e.code,i.error.signal=e.signal}}else i=function(e,t){function r(e){var t,r,i="";for(a=a||n(857).tmpdir();;){t=h.join(a,e+i);try{r=p.openSync(t,"wx")}catch(e){if("EEXIST"===e.code){i++;continue}throw e}p.closeSync(r);break}return t}var i,s,c,d,m,v,g,_,w={},S=r("readline-sync.stdout"),b=r("readline-sync.stderr"),E=r("readline-sync.exit"),O=r("readline-sync.done"),I=n(982);(v=I.createHash("sha256")).update(""+process.pid+k+++Math.random()),_=v.digest("hex"),g=I.createDecipher(l,_),i=x(e),u?(s=process.env.ComSpec||"cmd.exe",process.env.Q='"',c=["/V:ON","/S","/C","(%Q%"+s+"%Q% /V:ON /S /C %Q%%Q%"+o+"%Q%"+i.map((function(e){return" %Q%"+e+"%Q%"})).join("")+" & (echo !ERRORLEVEL!)>%Q%"+E+"%Q%%Q%) 2>%Q%"+b+"%Q% |%Q%"+process.execPath+"%Q% %Q%"+__dirname+"\\encrypt.js%Q% %Q%"+l+"%Q% %Q%"+_+"%Q% >%Q%"+S+"%Q% & (echo 1)>%Q%"+O+"%Q%"]):(s="/bin/sh",c=["-c",'("'+o+'"'+i.map((function(e){return" '"+e.replace(/'/g,"'\\''")+"'"})).join("")+'; echo $?>"'+E+'") 2>"'+b+'" |"'+process.execPath+'" "'+__dirname+'/encrypt.js" "'+l+'" "'+_+'" >"'+S+'"; echo 1 >"'+O+'"']),C&&C("_execFileSync",i);try{y.spawn(s,c,t)}catch(e){w.error=new Error(e.message),w.error.method="_execFileSync - spawn",w.error.program=s,w.error.args=c}for(;"1"!==p.readFileSync(O,{encoding:e.encoding}).trim(););return"0"===(d=p.readFileSync(E,{encoding:e.encoding}).trim())?w.input=g.update(p.readFileSync(S,{encoding:"binary"}),"hex",e.encoding)+g.final(e.encoding):(m=p.readFileSync(b,{encoding:e.encoding}).trim(),w.error=new Error(f+(m?"\n"+m:"")),w.error.method="_execFileSync",w.error.program=s,w.error.args=c,w.error.extMessage=m,w.error.exitCode=+d),p.unlinkSync(S),p.unlinkSync(b),p.unlinkSync(E),p.unlinkSync(O),w}(e,c);return i.error||(i.input=i.input.replace(/^\s*'|'\s*$/g,""),e.display=""),i}(e);if(t.error)throw t.error;return t.input}return b&&b(e),function(){var e,t,n;function o(){return e||(e=process.binding("fs"),t=(t=process.binding("constants"))&&t.fs&&"number"==typeof t.fs.O_RDWR?t.fs:t),e}if("string"==typeof v)if(v=null,u){if((n=function(){var e=process.version.replace(/^\D+/,"").split("."),t=0;return(e[0]=+e[0])&&(t+=1e4*e[0]),(e[1]=+e[1])&&(t+=100*e[1]),(e[2]=+e[2])&&(t+=e[2]),t}())>=20302&&n<40204||n>=5e4&&n<50100||n>=50600&&n<60200||!process.stdin.isTTY)try{v=o().open("CONIN$",t.O_RDWR,parseInt("0666",8)),i=new d(v,!0)}catch(e){}else process.stdin.pause(),v=process.stdin.fd,i=process.stdin._handle;if(process.stdout.isTTY)r=process.stdout.fd;else{try{r=p.openSync("\\\\.\\CON","w")}catch(e){}if("number"!=typeof r)try{r=o().open("CONOUT$",t.O_RDWR,parseInt("0666",8))}catch(e){}}}else{if(process.stdin.isTTY){process.stdin.pause();try{v=p.openSync("/dev/tty","r"),i=process.stdin._handle}catch(e){}}else try{v=p.openSync("/dev/tty","r"),i=new d(v,!1)}catch(e){}if(process.stdout.isTTY)r=process.stdout.fd;else try{r=p.openSync("/dev/tty","w")}catch(e){}}}(),function(){var n,o,s,a,u,l,f,d=!e.hideEchoBack&&!e.keyIn;function y(e){return e===g||0===i.setRawMode(e)&&(g=e,!0)}if(c="",!S&&i&&("number"==typeof r||!e.display&&d)){if(e.display&&(p.writeSync(r,e.display),e.display=""),!e.displayOnly)if(y(!d)){for(a=e.keyIn?1:e.bufferSize,s=Buffer.allocUnsafe&&Buffer.alloc?Buffer.alloc(a):new Buffer(a),e.keyIn&&e.limit&&(o=new RegExp("[^"+e.limit+"]","g"+(e.caseSensitive?"":"i")));;){u=0;try{u=p.readSync(v,s,0,a)}catch(e){if("EOF"!==e.code)return y(!1),void(t+=E())}if(u>0?(l=s.toString(e.encoding,0,u),c+=l):(l="\n",c+=String.fromCharCode(0)),l&&"string"==typeof(f=(l.match(/^(.*?)[\r\n]/)||[])[1])&&(l=f,n=!0),l&&(l=l.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g,"")),l&&o&&(l=l.replace(o,"")),l&&(d||(e.hideEchoBack?e.mask&&p.writeSync(r,new Array(l.length+1).join(e.mask)):p.writeSync(r,l)),t+=l),!e.keyIn&&n||e.keyIn&&t.length>=a)break}d||w||p.writeSync(r,"\n"),y(!1)}else t=E()}else t=E()}(),e.print&&!w&&e.print(m+(e.displayOnly?"":(e.hideEchoBack?new Array(t.length+1).join(e.mask):t)+"\n"),e.encoding),e.displayOnly?"":_=e.keepWhitespace||e.keyIn?t:t.trim()}function O(e){return e.replace(/[\x00-\x7f]/g,(function(e){return"\\x"+("00"+e.charCodeAt().toString(16)).substr(-2)}))}function I(){var e,t,n=Array.prototype.slice.call(arguments);return n.length&&"boolean"==typeof n[0]&&(t=n.shift())&&(e=Object.keys(m),n.unshift(m)),n.reduce((function(n,r){return null==r||(r.hasOwnProperty("noEchoBack")&&!r.hasOwnProperty("hideEchoBack")&&(r.hideEchoBack=r.noEchoBack,delete r.noEchoBack),r.hasOwnProperty("noTrim")&&!r.hasOwnProperty("keepWhitespace")&&(r.keepWhitespace=r.noTrim,delete r.noTrim),t||(e=Object.keys(r)),e.forEach((function(e){var t,i,o,s;if(r.hasOwnProperty(e))switch(t=r[e],e){case"mask":case"limitMessage":case"defaultInput":case"encoding":(t=null!=t?t+"":"")&&"limitMessage"!==e&&(t=t.replace(/[\r\n]/g,"")),n[e]=t;break;case"bufferSize":isNaN(t=parseInt(t,10))||"number"!=typeof t||(n[e]=t);break;case"displayOnly":case"keyIn":case"hideEchoBack":case"caseSensitive":case"keepWhitespace":case"history":case"cd":n[e]=!!t;break;case"limit":case"trueValue":case"falseValue":n[e]=(i=t,o=function(e){var t=_typeof(e);return"string"===t||"number"===t||"function"===t||e instanceof RegExp},s=[],function e(t){null!=t&&(Array.isArray(t)?t.forEach(e):o&&!o(t)||s.push(t))}(i),s).map((function(e){return"string"==typeof e?e.replace(/[\r\n]/g,""):e}));break;case"print":case"phContent":case"preCheck":n[e]="function"==typeof t?t:void 0;break;case"prompt":case"display":n[e]=null!=t?t:""}}))),n}),{})}function M(e,t,n){return t.some((function(t){var r=_typeof(t);return"string"===r?n?e===t:e.toLowerCase()===t.toLowerCase():"number"===r?parseFloat(e)===t:"function"===r?t(e):t instanceof RegExp&&t.test(e)}))}function P(e,t){var n=h.normalize(u?(process.env.HOMEDRIVE||"")+(process.env.HOMEPATH||""):process.env.HOME||"").replace(/[/\\]+$/,"");return e=h.normalize(e),t?e.replace(/^~(?=\/|\\|$)/,n):e.replace(new RegExp("^"+O(n)+"(?=\\/|\\\\|$)",u?"i":""),"~")}function $(e,t){var n="(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?",r=new RegExp("(\\$)?(\\$<"+n+">)","g"),i=new RegExp("(\\$)?(\\$\\{"+n+"\\})","g");function o(e,n,r,i,o,s){var a;return n||"string"!=typeof(a=t(o))?r:a?(i||"")+a+(s||""):""}return e.replace(r,o).replace(i,o)}function B(e,t,n){var r,i,o=[],s=-1,a=0,c="";function u(e,t){return t.length>3?(e.push(t[0]+"..."+t[t.length-1]),i=!0):t.length&&(e=e.concat(t)),e}return r=e.reduce((function(e,t){return e.concat((t+"").split(""))}),[]).reduce((function(e,r){var i,l;return t||(r=r.toLowerCase()),i=/^\d$/.test(r)?1:/^[A-Z]$/.test(r)?2:/^[a-z]$/.test(r)?3:0,n&&0===i?c+=r:(l=r.charCodeAt(0),i&&i===s&&l===a+1?o.push(r):(e=u(e,o),o=[r],s=i),a=l),e}),[]),r=u(r,o),c&&(r.push(c),i=!0),{values:r,suppressed:i}}function j(e,t){return e.join(e.length>2?", ":t?" / ":"/")}function N(e,t){var n,r,i,o={};if(t.phContent&&(n=t.phContent(e,t)),"string"!=typeof n)switch(e){case"hideEchoBack":case"mask":case"defaultInput":case"caseSensitive":case"keepWhitespace":case"encoding":case"bufferSize":case"history":case"cd":n=t.hasOwnProperty(e)?"boolean"==typeof t[e]?t[e]?"on":"off":t[e]+"":"";break;case"limit":case"trueValue":case"falseValue":r=t[t.hasOwnProperty(e+"Src")?e+"Src":e],n=j(r=t.keyIn?(o=B(r,t.caseSensitive)).values:r.filter((function(e){var t=_typeof(e);return"string"===t||"number"===t})),o.suppressed);break;case"limitCount":case"limitCountNotZero":n=(n=t[t.hasOwnProperty("limitSrc")?"limitSrc":"limit"].length)||"limitCountNotZero"!==e?n+"":"";break;case"lastInput":n=_;break;case"cwd":case"CWD":case"cwdHome":n=process.cwd(),"CWD"===e?n=h.basename(n):"cwdHome"===e&&(n=P(n));break;case"date":case"time":case"localeDate":case"localeTime":n=(new Date)["to"+e.replace(/^./,(function(e){return e.toUpperCase()}))+"String"]();break;default:"string"==typeof(i=(e.match(/^history_m(\d+)$/)||[])[1])&&(n=w[w.length-i]||"")}return n}function A(e){var t,n,r,i,o=/^(.)-(.)$/.exec(e),s="";if(!o)return null;for(i=(t=o[1].charCodeAt(0))<(n=o[2].charCodeAt(0))?1:-1,r=t;r!==n+i;r+=i)s+=String.fromCharCode(r);return s}function R(e){var t,n,r=new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),i="",o=[];for(e=e.trim();t=r.exec(e);)n=t[3]||t[4]||"",t[1]&&(o.push(i),i=""),i+=n;return i&&o.push(i),o}function T(e,t){return!(!t.trueValue.length||!M(e,t.trueValue,t.caseSensitive))||(!t.falseValue.length||!M(e,t.falseValue,t.caseSensitive))&&e}function D(e){var t,n,r,i,o,s,a;function c(t){return N(t,e)}function u(t){e.display+=(/[^\r\n]$/.test(e.display)?"\n":"")+t}for(e.limitSrc=e.limit,e.displaySrc=e.display,e.limit="",e.display=$(e.display+"",c);;){if(t=E(e),n=!1,r="",e.defaultInput&&!t&&(t=e.defaultInput),e.history&&((i=/^\s*!(?:!|-1)(:p)?\s*$/.exec(t))?(o=w[0]||"",i[1]?n=!0:t=o,u(o+"\n"),n||(e.displayOnly=!0,E(e),e.displayOnly=!1)):t&&t!==w[w.length-1]&&(w=[t])),!n&&e.cd&&t)switch((s=R(t))[0].toLowerCase()){case"cd":if(s[1])try{process.chdir(P(s[1],!0))}catch(e){u(e+"")}n=!0;break;case"pwd":u(process.cwd()),n=!0}if(!n&&e.preCheck&&(t=(a=e.preCheck(t,e)).res,a.forceNext&&(n=!0)),!n){if(!e.limitSrc.length||M(t,e.limitSrc,e.caseSensitive))break;e.limitMessage&&(r=$(e.limitMessage,c))}u((r?r+"\n":"")+$(e.displaySrc+"",c))}return T(t,e)}function V(e,n,r){var i;return t.question(e,I({limitMessage:"Input valid number, please."},n,{limit:function(e){return i=r(e),!isNaN(i)&&"number"==typeof i},cd:!1})),i}function Q(e,t){var n={},r={};return"object"==_typeof(e)?(Object.keys(e).forEach((function(n){"function"==typeof e[n]&&(r[t.caseSensitive?n:n.toLowerCase()]=e[n])})),n.preCheck=function(e){var i;return n.args=R(e),i=n.args[0]||"",t.caseSensitive||(i=i.toLowerCase()),n.hRes="_"!==i&&r.hasOwnProperty(i)?r[i].apply(e,n.args.slice(1)):r.hasOwnProperty("_")?r._.apply(e,n.args):null,{res:e,forceNext:!1}},r.hasOwnProperty("_")||(n.limit=function(){var e=n.args[0]||"";return t.caseSensitive||(e=e.toLowerCase()),r.hasOwnProperty(e)})):n.preCheck=function(t){return n.args=R(t),n.hRes="function"!=typeof e||e.apply(t,n.args),{res:t,forceNext:!1}},n}function F(e,n,r){var i;return null==e&&(e="Are you sure? "),n&&!1===n.guide||!(e+="")||(e=e.replace(/\s*:?\s*$/,"")+" [y/n]: "),"boolean"==typeof(i=t.keyIn(e,I(n,{hideEchoBack:!1,limit:r,trueValue:"y",falseValue:"n",caseSensitive:!1})))?i:""}function q(e,n){var r;return n.length&&((r={})[e]=n[0]),t.setDefaultOptions(r)[e]}t._DBG_set_useExt=function(e){S=e},t._DBG_set_checkOptions=function(e){b=e},t._DBG_set_checkMethod=function(e){C=e},t._DBG_clearHistory=function(){_="",w=[]},t.setDefaultOptions=function(e){return m=I(!0,e),I(!0)},t.question=function(e,t){return D(I(I(!0,t),{display:e}))},t.prompt=function(e){var t=I(!0,e);return t.display=t.prompt,D(t)},t.keyIn=function(e,t){var n=I(I(!0,t),{display:e,keyIn:!0,keepWhitespace:!0});return n.limitSrc=n.limit.filter((function(e){var t=_typeof(e);return"string"===t||"number"===t})).map((function(e){return $(e+"",A)})),n.limit=O(n.limitSrc.join("")),["trueValue","falseValue"].forEach((function(e){n[e]=n[e].reduce((function(e,t){var n=_typeof(t);return"string"===n||"number"===n?e=e.concat((t+"").split("")):e.push(t),e}),[])})),n.display=$(n.display+"",(function(e){return N(e,n)})),T(E(n),n)},t.questionEMail=function(e,n){return null==e&&(e="Input e-mail address: "),t.question(e,I({hideEchoBack:!1,limit:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,limitMessage:"Input valid e-mail address, please.",trueValue:null,falseValue:null},n,{keepWhitespace:!1,cd:!1}))},t.questionNewPassword=function(e,n){var r,i,o,s,a,c,u,l,f,p,d=I({hideEchoBack:!0,mask:"*",limitMessage:"It can include: $<charlist>\nAnd the length must be: $<length>",trueValue:null,falseValue:null,caseSensitive:!0},n,{history:!1,cd:!1,phContent:function(e){return"charlist"===e?r.text:"length"===e?i+"..."+o:null}});for(s=$((n=n||{}).charlist?n.charlist+"":"$<!-~>",A),(isNaN(i=parseInt(n.min,10))||"number"!=typeof i)&&(i=12),(isNaN(o=parseInt(n.max,10))||"number"!=typeof o)&&(o=24),u=new RegExp("^["+O(s)+"]{"+i+","+o+"}$"),(r=B([s],d.caseSensitive,!0)).text=j(r.values,r.suppressed),a=null!=n.confirmMessage?n.confirmMessage:"Reinput a same one to confirm it: ",c=null!=n.unmatchMessage?n.unmatchMessage:"It differs from first one. Hit only the Enter key if you want to retry from first one.",null==e&&(e="Input new password: "),l=d.limitMessage;!p;)d.limit=u,d.limitMessage=l,f=t.question(e,d),d.limit=[f,""],d.limitMessage=c,p=t.question(a,d);return f},t.questionInt=function(e,t){return V(e,t,(function(e){return parseInt(e,10)}))},t.questionFloat=function(e,t){return V(e,t,parseFloat)},t.questionPath=function(e,n){var r,i="",o=I({hideEchoBack:!1,limitMessage:"$<error(\n)>Input valid path, please.$<( Min:)min>$<( Max:)max>",history:!0,cd:!0},n,{keepWhitespace:!1,limit:function(e){var t,o,s;function a(e){e.split(/\/|\\/).reduce((function(e,t){var n=h.resolve(e+=t+h.sep);if(p.existsSync(n)){if(!p.statSync(n).isDirectory())throw new Error("Non directory already exists: "+n)}else p.mkdirSync(n);return e}),"")}e=P(e,!0),i="";try{if(t=p.existsSync(e),r=t?p.realpathSync(e):h.resolve(e),!n.hasOwnProperty("exists")&&!t||"boolean"==typeof n.exists&&n.exists!==t)return i=(t?"Already exists":"No such file or directory")+": "+r,!1;if(!t&&n.create&&(n.isDirectory?a(r):(a(h.dirname(r)),p.closeSync(p.openSync(r,"w"))),r=p.realpathSync(r)),t&&(n.min||n.max||n.isFile||n.isDirectory)){if(o=p.statSync(r),n.isFile&&!o.isFile())return i="Not file: "+r,!1;if(n.isDirectory&&!o.isDirectory())return i="Not directory: "+r,!1;if(n.min&&o.size<+n.min||n.max&&o.size>+n.max)return i="Size "+o.size+" is out of range: "+r,!1}if("function"==typeof n.validate&&!0!==(s=n.validate(r)))return"string"==typeof s&&(i=s),!1}catch(e){return i=e+"",!1}return!0},phContent:function(e){return"error"===e?i:"min"!==e&&"max"!==e?null:n.hasOwnProperty(e)?n[e]+"":""}});return n=n||{},null==e&&(e='Input path (you can "cd" and "pwd"): '),t.question(e,o),r},t.promptCL=function(e,n){var r=I({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},n),i=Q(e,r);return r.limit=i.limit,r.preCheck=i.preCheck,t.prompt(r),i.args},t.promptLoop=function(e,n){for(var r=I({hideEchoBack:!1,trueValue:null,falseValue:null,caseSensitive:!1,history:!0},n);!e(t.prompt(r)););},t.promptCLLoop=function(e,n){var r=I({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},n),i=Q(e,r);for(r.limit=i.limit,r.preCheck=i.preCheck;t.prompt(r),!i.hRes;);},t.promptSimShell=function(e){return t.prompt(I({hideEchoBack:!1,history:!0},e,{prompt:u?"$<cwd>>":(process.env.USER||"")+(process.env.HOSTNAME?"@"+process.env.HOSTNAME.replace(/\..*$/,""):"")+":$<cwdHome>$ "}))},t.keyInYN=function(e,t){return F(e,t)},t.keyInYNStrict=function(e,t){return F(e,t,"yn")},t.keyInPause=function(e,n){null==e&&(e="Continue..."),n&&!1===n.guide||!(e+="")||(e=e.replace(/\s+$/,"")+" (Hit any key)"),t.keyIn(e,I({limit:null},n,{hideEchoBack:!0,mask:""}))},t.keyInSelect=function(e,n,r){var i=I({hideEchoBack:!1},r,{trueValue:null,falseValue:null,caseSensitive:!1,phContent:function(t){return"itemsCount"===t?e.length+"":"firstItem"===t?(e[0]+"").trim():"lastItem"===t?(e[e.length-1]+"").trim():null}}),o="",s={},a=49,c="\n";if(!Array.isArray(e)||!e.length||e.length>35)throw"`items` must be Array (max length: 35).";return e.forEach((function(e,t){var n=String.fromCharCode(a);o+=n,s[n]=t,c+="["+n+"] "+(e+"").trim()+"\n",a=57===a?97:a+1})),r&&!1===r.cancel||(o+="0",s[0]=-1,c+="[0] "+(r&&null!=r.cancel&&"boolean"!=typeof r.cancel?(r.cancel+"").trim():"CANCEL")+"\n"),i.limit=o,c+="\n",null==n&&(n="Choose one from list: "),(n+="")&&(r&&!1===r.guide||(n=n.replace(/\s*:?\s*$/,"")+" [$<limit>]: "),c+=n),s[t.keyIn(c,i).toLowerCase()]},t.getRawInput=function(){return c},t.setPrint=function(){return q("print",arguments)},t.setPrompt=function(){return q("prompt",arguments)},t.setEncoding=function(){return q("encoding",arguments)},t.setMask=function(){return q("mask",arguments)},t.setBufferSize=function(){return q("bufferSize",arguments)}},317:function(e){e.exports=require("child_process")},982:function(e){e.exports=require("crypto")},896:function(e){e.exports=require("fs")},857:function(e){e.exports=require("os")},928:function(e){e.exports=require("path")}},t={},n=function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(201);module.exports=n}();