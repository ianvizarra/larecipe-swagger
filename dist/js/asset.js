!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports=function(e,t,a,r,n,s){var o,l=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,l=e.default);var u,d="function"==typeof l?l.options:l;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),n&&(d._scopeId=n),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):r&&(u=r),u){var c=d.functional,p=c?d.render:d.beforeCreate;c?(d._injectStyles=u,d.render=function(e,t){return u.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,u):[u]}return{esModule:o,exports:l,options:d}}},function(e,t,a){a(2),e.exports=a(28)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=a.n(r);LaRecipe.booting(function(e){e.component(n.a.name,n.a)})},function(e,t,a){var r=a(0)(a(4),a(27),!1,null,null,null);e.exports=r.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(5),n=a.n(r),s=a(8),o=a.n(s),l=a(11),i=a.n(l),u=a(13),d=a.n(u),c=a(21),p=a.n(c),f=a(24),h=a.n(f),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.default={name:"larecipe-swagger",props:{baseUrl:{type:String,default:window.location.origin},endpoint:{type:String,default:"/"},defaultHeaders:Object,defaultParams:Object,defaultMethod:String,hasCommonHeaders:{type:Boolean,default:!1},hasAuthHeader:{type:Boolean,default:!1}},data:function(){return{fullUrl:"",panelId:Date.now(),response:{data:"Press the run button!",status:null},resultHeight:400,method:"get",headers:{},commonHeaders:{"Content-Type":"application/json",Accept:"application/json"},authHeader:{Authorization:"Bearer token_here"},params:{}}},computed:{getDefaultHeaders:function(){return v({},this.defaultHeaders?this.defaultHeaders:{},this.hasCommonHeaders?this.commonHeaders:{},this.hasAuthHeader?this.authHeader:{})}},methods:{updateResultPanelHeight:function(){this.resultHeight=$(".request-panel-"+this.panelId).height()},updateRequestUrl:function(e){this.fullUrl=e},updateRequestMethod:function(e){this.method=e},updateRequestHeaders:function(e){this.headers=e},updateRequestParams:function(e){this.params=e},run:function(){var e=this;("get"==this.method?axios[this.method](this.fullUrl,{params:this.params,headers:this.headers}):axios[this.method](this.fullUrl,this.params,{headers:this.headers})).then(function(t){return e.response=t}).catch(function(t){return e.response=t.response})}},created:function(){this.fullUrl=this.baseUrl+this.endpoint},mounted:function(){this.updateResultPanelHeight()},components:{RequestUrl:n.a,RequestResult:d.a,RequestParams:o.a,RequestRunner:i.a,RequestMethods:p.a,RequestHeaders:h.a}}},function(e,t,a){var r=a(0)(a(6),a(7),!1,null,null,null);e.exports=r.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["url"],data:function(){return{fullUrl:""}},mounted:function(){this.fullUrl=this.url},watch:{fullUrl:function(e){this.$emit("change",e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h6",{staticClass:"text-lg text-grey-light"},[e._v("Request URL")]),e._v(" "),a("div",{staticClass:"appearance-none overflow-hidden mt-3 rounded-lg w-full focus:outline-none"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullUrl,expression:"fullUrl"}],staticClass:"w-full overflow-scroll h-scrollable bg-blue-darkest text-green font-bold px-3 py-2 focus:outline-none",attrs:{type:"text",placeholder:"url"},domProps:{value:e.fullUrl},on:{input:function(t){t.target.composing||(e.fullUrl=t.target.value)}}})])])},staticRenderFns:[]}},function(e,t,a){var r=a(0)(a(9),a(10),!1,null,null,null);e.exports=r.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["defaultParams"],data:function(){return{params:[]}},watch:{params:{handler:function(e){this.$emit("change",this.prepareParams())},deep:!0}},methods:{addNewParam:function(){this.params.push({key:"",value:""})},prepareParams:function(){var e={};return this.params.forEach(function(t){e[t.key]=t.value}),e},getParamInputType:function(e){return"password"==e.key?"password":"text"}},created:function(){this.defaultParams&&(this.params=Object.entries(this.defaultParams).map(function(e){return{key:e[0],value:e[1]}}),this.$emit("change",this.prepareParams()))}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10"},[a("div",{staticClass:"flex justify-between"},[a("h6",{staticClass:"text-lg text-grey-light"},[e._v("Params")]),e._v(" "),a("button",{staticClass:"w-6 h-6 bg-blue text-sm rounded-full flex items-center justify-center text-white focus:outline-none",on:{click:e.addNewParam}},[a("i",{staticClass:"fa fa-plus"})])]),e._v(" "),e._l(e.params,function(t,r){return a("div",{key:r,staticClass:"mt-3"},[a("div",{staticClass:"bg-blue-darkest appearance-none font-bold rounded-lg w-full text-grey-dark leading-tight flex"},[a("div",{staticClass:"w-1/2 overflow-hidden border-r-2 border-blue-dark"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.params[r].key,expression:"params[index].key"}],staticClass:"bg-transparent text-grey-dark px-3 py-2 focus:outline-none",attrs:{type:"text",placeholder:"name"},domProps:{value:e.params[r].key},on:{input:function(t){t.target.composing||e.$set(e.params[r],"key",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"w-1/2 overflow-hidden"},["checkbox"===e.getParamInputType(t)?a("input",{directives:[{name:"model",rawName:"v-model",value:e.params[r].value,expression:"params[index].value"}],staticClass:"bg-transparent text-grey-dark px-3 py-2 focus:outline-none",attrs:{placeholder:"value",type:"checkbox"},domProps:{checked:Array.isArray(e.params[r].value)?e._i(e.params[r].value,null)>-1:e.params[r].value},on:{change:function(t){var a=e.params[r].value,n=t.target,s=!!n.checked;if(Array.isArray(a)){var o=e._i(a,null);n.checked?o<0&&e.$set(e.params[r],"value",a.concat([null])):o>-1&&e.$set(e.params[r],"value",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.params[r],"value",s)}}}):"radio"===e.getParamInputType(t)?a("input",{directives:[{name:"model",rawName:"v-model",value:e.params[r].value,expression:"params[index].value"}],staticClass:"bg-transparent text-grey-dark px-3 py-2 focus:outline-none",attrs:{placeholder:"value",type:"radio"},domProps:{checked:e._q(e.params[r].value,null)},on:{change:function(t){return e.$set(e.params[r],"value",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.params[r].value,expression:"params[index].value"}],staticClass:"bg-transparent text-grey-dark px-3 py-2 focus:outline-none",attrs:{placeholder:"value",type:e.getParamInputType(t)},domProps:{value:e.params[r].value},on:{input:function(t){t.target.composing||e.$set(e.params[r],"value",t.target.value)}}})])])])}),e._v(" "),e.params.length?e._e():a("div",{staticClass:"mt-3"},[a("div",{staticClass:"bg-blue-darkest appearance-none p-2 font-bold rounded-lg w-full text-grey-dark leading-tight flex"},[e._v("\n            No Params Attached\n        ")])])],2)},staticRenderFns:[]}},function(e,t,a){var r=a(0)(null,a(12),!1,null,null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-right mt-6"},[a("button",{staticClass:"bg-primary text-lg rounded-lg px-3 py-2 text-white focus:outline-none",on:{click:function(t){return e.$emit("run")}}},[e._v("Run")])])},staticRenderFns:[]}},function(e,t,a){var r=a(0)(a(19),a(20),!1,function(e){a(14)},null,null);e.exports=r.exports},function(e,t,a){var r=a(15);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(17)("19b12c49",r,!0,{})},function(e,t,a){(e.exports=a(16)(!1)).push([e.i,"#request-result::-webkit-scrollbar{width:3px;height:3px}#request-result::-webkit-scrollbar-track{background:#dae1e7;border-radius:5px;overflow:hidden}#request-result::-webkit-scrollbar-thumb{background:#305e8a;border-radius:5px}#request-result::-webkit-scrollbar-thumb:hover{background:#0e2336}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=function(e,t){var a=e[1]||"",r=e[3];if(!r)return a;if(t&&"function"==typeof btoa){var n=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[a].concat(s).concat([n]).join("\n")}var o;return[a].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(r[s]=!0)}for(n=0;n<e.length;n++){var o=e[n];"number"==typeof o[0]&&r[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),t.push(o))}},t}},function(e,t,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a(18),s={},o=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,i=0,u=!1,d=function(){},c=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var a=e[t],r=s[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(m(a.parts[n]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var o=[];for(n=0;n<a.parts.length;n++)o.push(m(a.parts[n]));s[a.id]={id:a.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function m(e){var t,a,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(f){var n=i++;r=l||(l=v()),t=b.bind(null,r,n,!1),a=b.bind(null,r,n,!0)}else r=v(),t=function(e,t){var a=t.css,r=t.media,n=t.sourceMap;r&&e.setAttribute("media",r);c.ssrId&&e.setAttribute(p,t.id);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else a()}}e.exports=function(e,t,a,r){u=a,c=r||{};var o=n(e,t);return h(o),function(t){for(var a=[],r=0;r<o.length;r++){var l=o[r];(i=s[l.id]).refs--,a.push(i)}t?h(o=n(e,t)):o=[];for(r=0;r<a.length;r++){var i;if(0===(i=a[r]).refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete s[i.id]}}}};var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,a,r){var n=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var s=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e,t){for(var a=[],r={},n=0;n<t.length;n++){var s=t[n],o=s[0],l={id:e+":"+n,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(l):a.push(r[o]={id:o,parts:[l]})}return a}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["response","height"],computed:{formatedData:function(){var e=this.response.data;return JSON.stringify(e,void 0,2)},status:function(){var e=this.response.status;return e},statusColor:function(){return"bg-"+{2:"success",3:"warning",4:"danger",5:"danger"}[Number(String(this.status).charAt(0))]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-full relative overflow-hidden"},[a("div",{staticClass:"flex items-center"},[a("h6",{staticClass:"text-grey-darkest text-xl font-bold"},[e._v("Result")]),e._v(" "),e.status?a("span",{staticClass:"rounded-lg font-bold text-white ml-2 px-1 py-1",class:e.statusColor},[e._v(e._s(e.status))]):a("span",{staticClass:"bg-grey rounded-lg font-bold text-white ml-2 px-1 py-1"},[e._v("Ready")])]),e._v(" "),a("div",{staticClass:"border-l-2 border-t-2 bg-grey-lightest rounded p-4 mt-4 overflow-scroll",style:{height:e.height+"px"},attrs:{id:"request-result"}},[a("pre",[e._v(e._s(e.formatedData)+"\n            ")])])])},staticRenderFns:[]}},function(e,t,a){var r=a(0)(a(22),a(23),!1,null,null,null);e.exports=r.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["defaultMethod"],data:function(){return{methods:["get","post","put","patch","delete"],selectedMethod:"get"}},methods:{selectMethod:function(e){this.selectedMethod=e,this.$emit("change",e)}},mounted:function(){this.defaultMethod&&(this.selectedMethod=this.defaultMethod,this.$emit("change",this.selectedMethod))}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10"},[a("h6",{staticClass:"text-lg text-grey-light"},[e._v("Request Method")]),e._v(" "),a("div",{staticClass:"flex mt-3 overflow-scroll h-scrollable"},e._l(e.methods,function(t){return a("button",{key:t,staticClass:"mx-1 p-2 rounded-lg font-bold focus:outline-none",class:[e.selectedMethod==t?"bg-blue text-white":"bg-grey-light text-grey-dark"],on:{click:function(a){return e.selectMethod(t)}}},[e._v(e._s(t.toUpperCase()))])}),0)])},staticRenderFns:[]}},function(e,t,a){var r=a(0)(a(25),a(26),!1,null,null,null);e.exports=r.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["defaultHeaders"],data:function(){return{headers:[{key:"Content-Type",value:"application/json"}]}},watch:{headers:{handler:function(e){this.$emit("change",this.prepareHeader())},deep:!0}},methods:{addNewHeader:function(){this.headers.push({key:"",value:""})},prepareHeader:function(){var e={};return this.headers.forEach(function(t){e[t.key]=t.value}),e}},mounted:function(){this.defaultHeaders&&(this.headers=Object.entries(this.defaultHeaders).map(function(e){return{key:e[0],value:e[1]}}),this.$emit("change",this.prepareHeader()))}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10"},[a("div",{staticClass:"flex justify-between"},[a("h6",{staticClass:"text-lg text-grey-light"},[e._v("Request Headers")]),e._v(" "),a("button",{staticClass:"w-6 h-6 bg-blue text-sm rounded-full flex items-center justify-center text-white focus:outline-none",on:{click:e.addNewHeader}},[a("i",{staticClass:"fa fa-plus"})])]),e._v(" "),e._l(e.headers,function(t,r){return a("div",{key:r,staticClass:"mt-3"},[a("div",{staticClass:"bg-blue-darkest appearance-none font-bold rounded-lg w-full text-grey-dark leading-tight flex"},[a("div",{staticClass:"w-1/2 overflow-hidden border-r-2 border-blue-dark"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.headers[r].key,expression:"headers[index].key"}],staticClass:"bg-transparent text-grey-dark px-3 py-2 focus:outline-none",attrs:{type:"text",placeholder:"key"},domProps:{value:e.headers[r].key},on:{input:function(t){t.target.composing||e.$set(e.headers[r],"key",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"w-1/2 overflow-hidden"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.headers[r].value,expression:"headers[index].value"}],staticClass:"bg-transparent text-grey-dark px-3 py-2 focus:outline-none",attrs:{type:"text",placeholder:"value"},domProps:{value:e.headers[r].value},on:{input:function(t){t.target.composing||e.$set(e.headers[r],"value",t.target.value)}}})])])])}),e._v(" "),e.headers.length?e._e():a("div",{staticClass:"mt-3"},[a("div",{staticClass:"bg-blue-darkest appearance-none p-2 font-bold rounded-lg w-full text-grey-dark leading-tight flex"},[e._v("\n            No Headers Attached\n        ")])])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-4 font-sans"},[e._m(0),e._v(" "),a("div",{staticClass:"bg-blue-darker p-2 rounded-lg flex flex-wrap justify-start"},[a("div",{staticClass:"w-1/2 px-6 py-4",class:"request-panel-"+e.panelId},[a("RequestUrl",{attrs:{url:e.fullUrl},on:{change:e.updateRequestUrl}}),e._v(" "),a("RequestMethods",{attrs:{defaultMethod:e.defaultMethod},on:{change:e.updateRequestMethod}}),e._v(" "),a("RequestHeaders",{attrs:{defaultHeaders:e.getDefaultHeaders},on:{change:e.updateRequestHeaders}}),e._v(" "),a("RequestParams",{attrs:{defaultParams:e.defaultParams},on:{change:e.updateRequestParams}}),e._v(" "),a("RequestRunner",{on:{run:e.run}})],1),e._v(" "),a("div",{staticClass:"w-1/2 p-8 bg-white rounded-lg"},[a("RequestResult",{attrs:{response:e.response,height:e.resultHeight}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-left"},[t("div",{staticClass:"p-2 bg-blue-darker items-center text-blue-lightest leading-none rounded-full flex inline-flex",attrs:{role:"alert"}},[t("span",{staticClass:"flex rounded-full bg-blue uppercase px-2 py-1 text-xs font-bold mr-3"},[this._v("Try")]),this._v(" "),t("span",{staticClass:"font-semibold mr-2 text-left flex-auto"},[this._v("Live Demo")])])])}]}},function(e,t){}]);