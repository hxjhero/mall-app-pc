(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a058d3c"],{"0164":function(t,e,r){"use strict";r("59de")},"147e":function(t,e,r){},1760:function(t,e,r){"use strict";r("147e")},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}},"59de":function(t,e,r){},9201:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productList"},[r("search-box",{attrs:{data:t.categoryList},on:{submit:t.searchSubmit}}),r("a-button",{staticClass:"addBtn",attrs:{type:"primary"}},[r("router-link",{attrs:{to:{name:"ProductAdd"}}},[t._v("新增商品")])],1),r("products-table",{attrs:{data:t.tableData,page:t.page,categoryList:t.categoryList},on:{change:t.changePage,edit:t.editProduct,remove:t.removeProduct}})],1)},a=[],o=r("5530"),i=r("1da1"),c=(r("96cf"),r("159b"),r("d81d"),r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-box"},[r("a-form-model",{attrs:{layout:"inline",model:t.searchForm},on:{submit:t.handleSubmit},nativeOn:{submit:function(t){t.preventDefault()}}},[r("a-form-model-item",{attrs:{label:"搜索关键字"}},[r("a-input",{attrs:{allowClear:"",placeholder:"请输入关键字"},model:{value:t.searchForm.searchWord,callback:function(e){t.$set(t.searchForm,"searchWord",e)},expression:"searchForm.searchWord"}})],1),r("a-form-model-item",{attrs:{label:"商品类目"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{allowClear:"","show-search":"",placeholder:"请选择商品类目"},on:{change:t.handleChange}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-model-item",[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v("搜索")])],1)],1)],1)}),u=[],s=r("c405"),l={created:function(){var t=this;s["a"].list().then((function(e){t.categoryList=e.data}))},data:function(){return{searchForm:{searchWord:"",category:""},categoryList:[]}},methods:{handleSubmit:function(){this.$emit("submit",this.searchForm)},handleChange:function(t){this.searchForm.category=t}}},h=l,f=(r("0164"),r("2877")),d=Object(f["a"])(h,c,u,!1,null,"08be9f4a",null),p=d.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-table",{attrs:{"data-source":t.tableData,columns:t.columns,pagination:t.page},on:{change:t.changePage},scopedSlots:t._u([{key:"operation",fn:function(e,n){return r("div",{},[r("a-button",{on:{click:function(e){return t.editProduct(n)}}},[t._v("编辑")]),r("a-button",{on:{click:function(e){return t.removeProduct(n)}}},[t._v("删除")])],1)}}])})},m=[],y=[{title:"ID",dataIndex:"id",key:"id",align:"center"},{title:"标题",dataIndex:"title",key:"title",ellipsis:!0,align:"center"},{title:"描述",dataIndex:"desc",key:"desc",ellipsis:!0,align:"center"},{title:"类目",dataIndex:"categoryName",key:"category",ellipsis:!0,align:"center"},{title:"预售价格",dataIndex:"price",key:"price",align:"center"},{title:"折扣价格",dataIndex:"price_off",key:"price_off",align:"center"},{title:"标签",dataIndex:"tags",key:"tags",align:"center"},{title:"库存",dataIndex:"inventory",key:"inventory",align:"center"},{title:"上架状态",dataIndex:"status",key:"status",customRender:function(t,e){return 1===e.status?"上架":"下架"},align:"center"},{title:"操作",dataIndex:"operation",key:"operation",width:"200px",scopedSlots:{customRender:"operation"},align:"center"}],v={data:function(){return{columns:y}},props:["data","page"],computed:{tableData:function(){return this.data.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{key:t.id})}))}},methods:{changePage:function(t){this.$emit("change",t)},editProduct:function(t){this.$emit("edit",t)},removeProduct:function(t){this.$emit("remove",t)}}},b=v,w=Object(f["a"])(b,g,m,!1,null,null,null),x=w.exports,L=r("c4c8"),_={data:function(){return{searchForm:{},tableData:[],page:{current:1,pageSize:10,showSizeChanger:!0,total:1},categoryList:[],categoryObj:{}}},components:{SearchBox:p,ProductsTable:x},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].list().then((function(e){t.categoryList=e.data,e.data.forEach((function(e){t.categoryObj[e.id]=e}))}));case 2:t.getTableData();case 3:case"end":return e.stop()}}),e)})))()},methods:{searchSubmit:function(t){this.searchForm=t,this.getTableData()},getTableData:function(){var t=this;L["a"].list(Object(o["a"])({page:this.page.current,size:this.page.pageSize},this.searchForm)).then((function(e){t.page.total=e.total,t.tableData=e.data.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{categoryName:t.categoryObj[e.category].name})}))}))},changePage:function(t){this.page=t,this.getTableData()},editProduct:function(t){this.$router.push({name:"ProductEdit",params:{id:t.id}})},removeProduct:function(t){var e=this,r=this.$createElement;this.$confirm({title:"确认删除",content:function(){return r("div",{style:"color:red;"},['确认删除标题为"'.concat(t.title,'"的产品吗？')])},onOk:function(){L["a"].remove({id:t.id}).then((function(){e.getTableData()}))},onCancel:function(){console.log("Cancel")},class:"confirm-box"})}}},k=_,E=(r("1760"),Object(f["a"])(k,n,a,!1,null,"b7bdb970",null));e["default"]=E.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(D){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=E(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function y(){}function v(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(F([])));x&&x!==r&&n.call(x,o)&&(b=x);var L=v.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=h;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return I()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=L.constructor=v,v.constructor=y,y.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/category/all",{params:t})}}},c4c8:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/products/all",{params:t})},remove:function(t){return n["a"].delete("/products/".concat(t.id))},add:function(t){return n["a"].post("/products/add",t)}}}}]);