parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uXLq":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function t(n,r,s){return e(this,t),new Proxy(n,{get:function(e,n,o){return e[n]&&Array.isArray(e[n])?new t(e[n],r,s):Reflect.get(e,n,o)},set:function(e,t,n,o){return r&&r(Object.assign({},e)),e[t]=n,s&&s(e),Reflect.set(e,t,n,o)}})};exports.default=t;
},{}],"omYY":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||!l(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,p(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,e,n){return(f=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function l(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0});var y=require("./observable"),b=function(t){function n(){var t;return e(this,n),(t=o(this,p(n).apply(this,arguments))).iid="",t.tid="",t.barrier=!1,t.useShadow=!0,t.mixins=[],t.oldValues=[],t.data=new y.default({}),t.initiallyRendered=!1,t.descendants=document.createDocumentFragment(),t.batches={attributes:[],data:[]},t}return i(n,c(HTMLElement)),r(n,[{key:"paint",value:function(t){}},{key:"repaint",value:function(){}},{key:"set",value:function(t){}},{key:"_batchData",value:function(t,e){this.batches.data.push([t,e])}},{key:"_batchAttribute",value:function(t,e){this.batches.attributes.push([t,e])}},{key:"_getBatches",value:function(){return this.batches}},{key:"_resetBatches",value:function(){this.batches={attributes:[],data:[]}}}]),n}();exports.MosaicComponent=b;
},{"./observable":"uXLq"}],"hPM2":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(n){var r=this;t(this,e),this.data={},this.routes={},this.current="/",this.element="string"==typeof n?document.getElementById(n)||document.body:n||document.body,window.onpopstate=function(){var t=window.location.pathname;r.data=Object.assign({},r.data),r.current=t,r.render(t)}}return n(e,[{key:"render",value:function(t){var e=this.routes[t];e||(this.notFound?(this.data.status=404,e=this.notFound):e=document.createElement("div")),this.element.innerHTML="",this.element.appendChild(e)}},{key:"addRoute",value:function(t,e){var n=this,r=function(t){e.router=n,n.routes[t]=e};if(Array.isArray(t))for(var i=0;i<t.length;i++)r(t[i]);else r(t)}},{key:"setNotFound",value:function(t){this.notFound=t}},{key:"send",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=t,this.data=Object.assign({},e),window.history.pushState({},this.current,window.location.origin+this.current),this.render(this.current)}},{key:"paint",value:function(){window.location.pathname!==this.current&&(this.current=window.location.pathname),this.render(this.current)}}]),e}();exports.default=r;
},{}],"pzHV":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function n(t,i){e(this,n),this.data=t,this.action=i,this.dependencies=new Set}return t(n,[{key:"get",value:function(e){return this.data[e]}},{key:"addDependency",value:function(e){this.dependencies.add(e)}},{key:"removeDependency",value:function(e){this.dependencies.delete(e)}},{key:"dispatch",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.action)throw new Error("You must define an action in the Portfolio constructor before dispatching events.");Array.isArray(e)?e.forEach(function(e){return n.action(e,n.data,t)}):this.action(e,this.data,t),this.dependencies.forEach(function(e){return e.repaint()})}}]),n}();exports.default=i;
},{}],"Y/Oq":[function(require,module,exports) {
"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){return i(e)||o(e,r)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(l){o=!0,i=l}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return t}function i(e){if(Array.isArray(e))return e}function a(e){return"string"==typeof e||"boolean"==typeof e||"number"==typeof e||"bigint"==typeof e}function s(e,r){return r.parentNode.insertBefore(e,r.nextSibling),e}function l(e){return Object.fromEntries?Object.fromEntries(e):Array.from(e).reduce(function(e,n){var o=t(n,2),i=o[0],a=o[1];return Object.assign(e,r({},i,a))},{})}function u(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];r&&r(e,t);for(var n=e.childNodes,o=0;o<n.length;o++)u(n[o],r,t.concat(o))}function c(e,r){for(var t=Object.keys(r),n=0;n<t.length;n++){var o=t[n];if("data"===o)for(var i=Object.keys(r[o]),a=0;a<i.length;a++){var s=i[a];e.data[s]=r[o][s]}else if("created"===o||"willUpdate"===o||"updated"===o||"willDestroy"===o||"received"===o)if(Array.isArray(e[o]))e[o].splice(0,0,r[o]);else{var l=e[o];e[o]=[r[o]],l&&e[o].push(l)}else e[o]=r[o]}}function f(e,r){for(var t=arguments.length,n=new Array(t>2?t-2:0),o=2;o<t;o++)n[o-2]=arguments[o];r[e]&&(Array.isArray(r[e])?r[e].forEach(function(e){return e.call.apply(e,[r].concat(n))}):r[e].apply(r,n))}function d(e,r){for(var t=e,n=0;n<r.length;n++){var o=r[n];if(t.childNodes.length>=o){if(!t.childNodes[o])continue;t=t.childNodes[o]}}return t}function p(){for(var e=0,r=this.parentNode;r&&r.parentNode&&"BODY"!==r.parentNode.nodeName;){if(r.router){this.router=r.router;break}if(r=r.parentNode,(e+=1)>1e5)break}r&&r.firstChild&&r.firstChild.router&&(this.router=r.firstChild.router)}function y(r,t,n){if(!r)return!0;if(r&&!t)return!0;if(a(t))return r!==t;if("function"==typeof t)return!(!n||!0!==n)||""+r!=""+t;if(Array.isArray(t))return!0;if("object"===e(t)){if(r.__isTemplate)return!t.__isTemplate||""+r.values!=""+t.values;if(!r.__isKeyedArray)return!Object.is(r,t);if(!t.__isKeyedArray)return!0;if(""+r.keys!=""+t.keys)return!0;if(""+r.stringified!=""+t.stringified)return!0}return!1}Object.defineProperty(exports,"__esModule",{value:!0}),exports.nodeMarker="\x3c!--{{m-".concat(String(Math.random()).slice(2),"}}--\x3e"),exports.lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,exports.randomKey=function(){return Math.random().toString(36).slice(2)},exports.isPrimitive=a,exports.isBooleanAttribute=function(e){return"contenteditable|controlsdefault|defer|disabled|formNoValidate|frameborder|hidden|","indeterminate|ismap|loop|multiple|muted|nohref|noresizenoshade|novalidate|nowrap|","open|readonly|required|reversed|scoped|scrolling|seamless|selected|sortable|spell|","check|translate",new RegExp("async|autocomplete|autofocus|autoplay|border|challenge|checked|compact|contenteditable|controlsdefault|defer|disabled|formNoValidate|frameborder|hidden|indeterminate|ismap|loop|multiple|muted|nohref|noresizenoshade|novalidate|nowrap|open|readonly|required|reversed|scoped|scrolling|seamless|selected|sortable|spell|check|translate","gi").test(e)},exports.insertAfter=s,exports.objectFromArray=l,exports.traverse=u,exports.applyMixin=c,exports.runLifecycle=f,exports.step=d,exports.goUpToConfigureRouter=p,exports.changed=y;
},{}],"kpCs":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(n,o){e(this,t),this.first=n,this.second=o,this.first=n,this.second=o}return n(t,[{key:"diff",value:function(e){var t=this,n=this.first.length,o=this.second.length,s=1,i=n+o,r=[{components:[],newPos:-1}],u=function(t){return e?(setTimeout(function(){return e(t)},0),!0):t},c=this.extractCommon(r[0],0);if(r[0].newPos+1>=o&&c+1>=n)return u([{edit:this.second,count:this.second.length}]);var a=function(){for(var e=-1*s;e<=s;e+=2){var i=void 0,c=r[e-1],a=r[e+1],d=(a?a.newPos:0)-e;c&&(r[e-1]=void 0);var f=c&&c.newPos+1<o,l=a&&0<=d&&d<n;if(f||l){if(!f||l&&c.newPos<a.newPos?(i=t.clonePath(a),t.pushComponent(i.components,void 0,!0)):((i=c).newPos+=1,t.pushComponent(i.components,!0,void 0)),d=t.extractCommon(i,e),i.newPos+1>=o&&d+1>=n){var h=t.constructEdits(i.components,!0);return u(h)}r[e]=i}else r[e]=void 0}s+=1},d=e;if(d)!function e(){setTimeout(function(){if(s>i)return d([]);a()||e()},0)}();else for(;s<=i;){var f=a();if(f)return f}}},{key:"extractCommon",value:function(e,t){for(var n=this.first.length,o=this.second.length,s=e.newPos,i=s-t,r=0;s+1<o&&i+1<n&&this.equals(this.second[s+1],this.first[i+1]);)s+=1,i+=1,r+=1;return r&&e.components.push({count:r}),e.newPos=s,i}},{key:"clonePath",value:function(e){return{newPos:e.newPos,components:e.components.slice()}}},{key:"pushComponent",value:function(e,t,n){var o=e[e.length-1];o&&o.added===t&&o.deleted===n?e[e.length-1]={count:o.count+1,added:t,deleted:n}:e.push({count:1,added:t,deleted:n})}},{key:"constructEdits",value:function(e,t){for(var n=this,o=0,s=e.length,i=0,r=0;o<s;o++){var u=e[o];if(u.deleted){if(u.edit=this.first.slice(r,r+u.count),r+=u.count,o&&e[o-1].added){var c=e[o-1];e[o-1]=e[o],e[o]=c}}else!u.added&&t?function(){var e=n.second.slice(i,i+u.count).map(function(t,o){var s=n.first[r+o],i=e?e.length:0;return n.first.length>i?s:e});u.edit=e.slice()}():u.edit=this.second.slice(i,i+u.count),i+=u.count,u.added||(r+=u.count)}return e}},{key:"equals",value:function(e,t){var n=""+e.values==""+t.values,o=e.key&&t.key&&e.key===t.key;return this.first.length>this.second.length?n||o:n}}]),t}();exports.default=o;
},{}],"n1Wj":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),a=require("./options"),o=require("./templating"),c=require("./mad"),u=function(){function r(e){t(this,r),this.config=e}return n(r,[{key:"batch",value:function(e,t,r){e.data.hasOwnProperty(t)?e._batchData(t,r):e._batchAttribute(t,r);var n=e._getBatches(),a=this.config.trackedAttributeCount||0;if(n.attributes.length+n.data.length>=a){var o=i.objectFromArray(n.data),c=i.objectFromArray(n.attributes);if(n.attributes.length>0&&i.runLifecycle("received",e,c),n.data.length>0){e.barrier=!0;for(var u=Object.keys(o),s=0;s<u.length;s++){var l=u[s],f=o[l];e.data[l]=f}e.barrier=!1,e.repaint()}e._resetBatches()}}},{key:"commit",value:function(e,t,r,n){switch(this.config.type){case"node":this.commitNode(e,t,r,n);break;case"attribute":if(!this.config.attribute)break;var i=this.config.attribute.name;!0===this.config.isEvent?this.commitEvent(e,t,i,r,n):this.commitAttribute(e,t,i,r,n)}}},{key:"commitNode",value:function(t,r,n,i){if(!(!0===this.config.isComponentType&&r instanceof a.MosaicComponent)){if(Array.isArray(i)){for(var c=i,u=document.createDocumentFragment(),s=0;s<c.length;s++){var l=c[s],f=o.OTT(l),m=f.instance;o._repaint(m,f.memories,[],f.values,!0),u.append(m)}var h=document.createElement("div");h.appendChild(u),r.replaceWith(h)}if("object"===e(i)&&i.__isTemplate){var d=o.OTT(i),y=d.instance;r.replaceWith(y),o._repaint(y,d.memories,[],d.values,!0)}if("object"===e(i)&&i.__isKeyedArray)this.commitArray(t,r,n,i);else if("function"==typeof i){var v=i(),b=o.OTT(v),p=b.instance;r.replaceWith(p),o._repaint(p,b.memories,[],b.values,!0)}else r.replaceWith(i)}}},{key:"commitAttribute",value:function(e,t,r,n,o){var c=t.attributes.getNamedItem(r);if(c){var u=c.value.replace(i.nodeMarker,""+o).replace(n,""+o),s=u.length>0?u:o;t.setAttribute(r,s),i.isBooleanAttribute(r)&&(!0===o?(t.setAttribute(r,"true"),this.config.trackedAttributeCount&&(this.config.trackedAttributeCount+=1)):(t.removeAttribute(r),this.config.trackedAttributeCount&&(this.config.trackedAttributeCount-=1))),"function"==typeof o&&(t.removeAttribute(r),this.config.trackedAttributeCount&&(this.config.trackedAttributeCount-=1)),!0===this.config.isComponentType&&t instanceof a.MosaicComponent&&this.batch(t,r,o)}else i.isBooleanAttribute(r)&&!0===o&&t.setAttribute(r,"true")}},{key:"commitEvent",value:function(e,t,r,n,i){var o=t.eventHandlers||{},c=r.substring(2);!i&&o[r]?t.removeEventListener(c,o[r]):i&&(o[r]=i.bind(e),t.eventHandlers=o,t.addEventListener(c,t.eventHandlers[r])),t.hasAttribute(r)&&(t.removeAttribute(r),this.config.trackedAttributeCount&&(this.config.trackedAttributeCount-=1)),!0===this.config.isComponentType&&t instanceof a.MosaicComponent&&this.batch(t,r,i)}},{key:"commitArray",value:function(t,r,n,a){var u=n&&"object"===e(n)&&n.__isKeyedArray?n.items:[],s=a&&"object"===e(a)&&a.__isKeyedArray?a.items:[];if(0===u.length&&s.length>0){for(var l=document.createDocumentFragment(),f=0;f<s.length;f++){var m=s[f],h=o.OTT(m,m.key),d=h.instance;o._repaint(d,h.memories,[],h.values,!0),l.appendChild(d)}i.insertAfter(l,r)}else if(u.length>0&&0===s.length)for(var y=0;y<u.length;y++){var v=u[y].key,b=document.querySelector("[key='".concat(v,"']"));b&&b.remove()}else for(var p=new c.default(u,s).diff(),g=0,k=0;k<p.length;k++){var A=p[k],_=A.added,C=A.deleted,T=A.count,O=A.edit;if(C&&k+1<p.length&&p[k+1].added&&T===p[k+1].count){for(var S=0;S<O.length;S++){var j=O[S],q=document.querySelector('[key="'.concat(j.key,'"]')),E=p[k+1].edit[S],w=o.OTT(E,E.key),F=w.instance;o._repaint(F,w.memories,[],w.values,!0),q&&q.replaceWith(F)}k+=1}else if(_){var M=r;u.length>0&&(M=document.querySelector('[key="'.concat(u[g-1].key,'"]'))),M||(M=document.querySelector('[key="'.concat(u[u.length-1].key,'"]')));for(var W=document.createDocumentFragment(),B=0;B<O.length;B++){var D=O[B],H=o.OTT(D,D.key),K=H.instance;o._repaint(K,H.memories,[],H.values,!0),W.appendChild(K)}M=i.insertAfter(W,M)}else if(C){for(var L=0;L<O.length;L++){var N=O[L],P=document.querySelector("[key='".concat(N.key,"']"));P&&P.remove()}g-=T}g+=T}}}]),r}();exports.default=u;
},{"./util":"Y/Oq","./options":"omYY","./templating":"iMSu","./mad":"kpCs"}],"CUYV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./util"),t=require("./memory");function r(t){for(var r="",n=t.length-1,o=0;o<n;o++){var a=t[o],i=e.lastAttributeNameRegex.exec(a);r+=null===i?a+e.nodeMarker:a.substring(0,i.index)+i[1]+i[2]+i[3]+e.nodeMarker}return r+=t[n]}function n(t){var r=[],n=document.importNode(t,!0);return e.traverse(n.content,function(e,t){switch(e.nodeType){case 1:r=r.concat(o(e,t));break;case 8:r=r.concat(a(e,t))}}),r}function o(r,n){if(!r.attributes)return[];for(var o=[],a=void 0!==customElements.get(r.nodeName.toLowerCase()),i=0,s=new RegExp("[a-z|A-Z| ]*".concat(e.nodeMarker,"[a-z|A-Z| ]*"),"g"),u=0;u<r.attributes.length;u++){var c=r.attributes[u],l=c.name,m=c.value,p=m.match(s);if(p&&!(p.length<1))for(var d=("style"===l?m.split(";"):m.split(" ")).filter(function(e){return e.length>0}),v=0;v<d.length;v++){var f=d[v].trim();new RegExp(e.nodeMarker,"gi").test(f)&&(i+=1,o.push(new t.default({type:"attribute",steps:n,isComponentType:a,isEvent:l.startsWith("on")&&l.length>2,attribute:{name:l},trackedAttributeCount:i})))}}return o}function a(r,n){var o=e.nodeMarker.replace("\x3c!--","").replace("--\x3e","");if(r.textContent!==o)return[];var a=void 0!==customElements.get(r.nodeName.toLowerCase()),i=!1;return r.parentElement&&(i=void 0!==customElements.get(r.parentElement.nodeName.toLowerCase())),[new t.default({type:"node",steps:n,isComponentType:a||i})]}exports.buildHTML=r,exports.memorize=n;
},{"./util":"Y/Oq","./memory":"n1Wj"}],"iMSu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./parser"),t=require("./util");function i(t){var i=document.getElementById(t.tid);if(i)return i;if(!t.view)return document.createElement("template");var n=t.view(t).strings,r=document.createElement("template");return r.id=t.tid,r.innerHTML=e.buildHTML(n),r.memories=e.memorize(r),document.body.appendChild(r),r}function n(t,i){var n,r=encodeURIComponent(t.strings.join("")),o=r?document.getElementById(r):document.createElement("template");return r?o?n=document.importNode(o.content,!0).firstChild:((o=document.createElement("template")).id=r,o.innerHTML=e.buildHTML(t.strings),o.memories=e.memorize(o),n=document.importNode(o.content,!0).firstChild,document.body.appendChild(o)):(o.innerHTML=e.buildHTML(t.strings),o.memories=e.memorize(o),n=document.importNode(o.content,!0).firstChild),i&&n&&n.setAttribute("key",i),n&&(n.isOTT=!0),{instance:n,values:t.values,memories:o.memories}}function r(e,i,n,r){for(var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],m=0;m<i.length;m++){var d=i[m],s=void 0;if(!0===o){var c=d.config.steps.slice();c.splice(0,1),s=t.step(e,c)}else{var l=d.config.steps.slice();s=t.step(e,l)}var u=n[m],a=r[m],p="node"===d.config.type;t.changed(u,a,p)&&d.commit(e,s,u,a)}}exports.getTemplate=i,exports.OTT=n,exports._repaint=r;
},{"./parser":"CUYV","./util":"Y/Oq"}],"Focm":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return n(e)||i(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function n(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function l(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?u(t):r}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var h=require("./options"),p=require("./observable"),y=require("./router");exports.Router=y.default;var b=require("./portfolio");exports.Portfolio=b.default;var m=require("./util"),v=require("./templating");function g(r){var i=Object.assign({},r),n=m.randomKey();if("string"!=typeof i.name)throw new Error("Name must be specified and must be a string.");if(i.descendants)throw new Error('You cannot directly set the "descendants" property on a component.');return customElements.define(i.name,function(a){function d(){var e;o(this,d),(e=l(this,c(d).call(this))).initiallyRendered=!1,e.tid=n,e.iid=m.randomKey(),e.data=new p.default(Object.assign({},i.data||{}),function(t){!0!==e.barrier&&m.runLifecycle("willUpdate",u(e),t)},function(){!0!==e.barrier&&(e.repaint(),m.runLifecycle("updated",u(e)))});for(var t=Object.keys(i),a=0;a<t.length;a++){var s=t[a];"element"!==s&&("data"!==s&&(e[s]=r[s]))}if(i.mixins)for(var f=0;f<i.mixins.length;f++){e.barrier=!0;var h=i.mixins[f];m.applyMixin(u(e),h),e.barrier=!1}return!0===i.useShadow&&(e._shadow=e.attachShadow({mode:"open"})),e}return f(d,h.MosaicComponent),s(d,[{key:"connectedCallback",value:function(){var r;this.initiallyRendered||0!==this.childNodes.length&&(r=this.descendants).append.apply(r,t(this.childNodes));this.portfolio&&this.portfolio.addDependency(this),this.initiallyRendered||(this.innerHTML=""),m.goUpToConfigureRouter.call(this);var i=v.getTemplate(this),n=document.importNode(i.content,!0);if(this.initiallyRendered||(this._shadow?this._shadow.appendChild(n):this.appendChild(n)),this.repaint(),!1===this.initiallyRendered){for(var o={},a={},s=0;s<this.attributes.length;s++){var l=this.attributes[s],c=l.name,u=l.value;u!==m.nodeMarker&&(this.data.hasOwnProperty(c)?a[c]=u:o[c]=u)}if(Object.keys(o).length>0&&m.runLifecycle("received",this,o),Object.keys(a).length>0){this.barrier=!0;for(var f=Object.keys(a),d=0;d<f.length;d++){var h=f[d];if("string"==typeof a[h])if("number"==typeof this.data[h])this.data[h]=parseFloat(a[h]);else if("bigint"==typeof this.data[h])this.data[h]=parseInt(a[h]);else if("boolean"==typeof this.data[h])this.data[h]="true"===a[h];else if(Array.isArray(this.data[h])){var p=a[h].replace(/'/gi,'"'),y=JSON.parse(p);this.data[h]=y}else"object"===e(this.data[h])?this.data[h]=JSON.parse(a[h]):this.data[h]=a[h];else this.data[h]=a[h]}this.barrier=!1,this.repaint()}}m.runLifecycle("created",this),this.initiallyRendered=!0}},{key:"disconnectedCallback",value:function(){this.portfolio&&this.portfolio.removeDependency(this),m.runLifecycle("willDestroy",this)}},{key:"paint",value:function(t){var r="string"==typeof t||t instanceof HTMLElement,n=i.element||this.element;if(r)"string"==typeof t?n=document.getElementById(t):t instanceof HTMLElement&&(n=t);else if("object"===e(t)){this.barrier=!0;for(var o=Object.keys(t),a=0;a<o.length;a++){var s=o[a],l=t[s];this.data[s]=l}this.barrier=!1}var c="string"==typeof n?document.getElementById(n):n;if(!c)throw new Error("Could not find the base element: ".concat(i.element,"."));c.appendChild(this)}},{key:"repaint",value:function(){var e=v.getTemplate(this).memories;if(this.view){var t=this.view(this).values,r=this._shadow?this._shadow:this;v._repaint(r,e,this.oldValues,t),this.oldValues=t}}},{key:"set",value:function(e){this.barrier=!0;for(var t=Object.keys(e),r=0;r<t.length;r++){var i=t[r];this.data[i]=e[i]}this.barrier=!1,this.repaint(),m.runLifecycle("updated",this)}}]),d}()),document.createElement(i.name)}exports.default=g,g.list=function(e,t,r){var i=e.map(function(e,r){return t(e,r)}),n=e.map(function(e,t){return Object.assign({},r(e,t),{key:i[t]})}),o=n.map(function(e){return JSON.stringify(e)});return{keys:i,items:n,stringified:o,__isKeyedArray:!0}},window.html=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return{strings:e,values:r,__isTemplate:!0}},window.Mosaic=g;
},{"./options":"omYY","./observable":"uXLq","./router":"hPM2","./portfolio":"pzHV","./util":"Y/Oq","./templating":"iMSu"}]},{},["Focm"], "Mosaic")