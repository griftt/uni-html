(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"05fc":function(e,n){throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\nError: Cannot find module 'D:\\HBuilderX\\plugins\\compile-node-sass\\node_modules\\node-sass-china'\n    at Function.Module._resolveFilename (module.js:547:15)\n    at Function.Module._resolveFilename (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\module-alias\\index.js:49:29)\n    at Function.Module._load (module.js:474:25)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.sassLoader (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\sass-loader\\lib\\loader.js:46:72)\n    at runLoaders (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\NormalModule.js:301:20)\n    at D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at Object.context.callback (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.module.exports (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader\\index.js:60:10)")},1117:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,o){try{var l=e[u](o),a=l.value}catch(s){return void t(s)}l.done?n(a):Promise.resolve(a).then(i,r)}function o(e){return function(){var n=this,t=arguments;return new Promise(function(i,r){var o=e.apply(n,t);function l(e){u(o,i,r,l,a,"next",e)}function a(e){u(o,i,r,l,a,"throw",e)}l(void 0)})}}var l={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var e=o(i.default.mark(function e(){var n,t=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.json("cateList");case 2:n=e.sent,n.forEach(function(e){e.pid?e.picture?t.tlist.push(e):t.slist.push(e):t.flist.push(e)});case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),tabtap:function(e){this.sizeCalcState||this.calcSize(),this.currentId=e.id;var n=this.slist.findIndex(function(n){return n.pid===e.id});this.tabScrollTop=this.slist[n].top},asideScroll:function(e){this.sizeCalcState||this.calcSize();var n=e.detail.scrollTop,t=this.slist.filter(function(e){return e.top<=n}).reverse();t.length>0&&(this.currentId=t[0].pid)},calcSize:function(){var n=0;this.slist.forEach(function(t){var i=e.createSelectorQuery().select("#main-"+t.id);i.fields({size:!0},function(e){t.top=n,n+=e.height,t.bottom=n}).exec()}),this.sizeCalcState=!0},navToList:function(n,t){e.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(n,"&tid=").concat(t)})}}};n.default=l}).call(this,t("543d")["default"])},"38a5":function(e,n,t){"use strict";t.r(n);var i=t("dde3"),r=t("de71");for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);t("8de8");var o=t("2877"),l=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=l.exports},8023:function(e,n,t){"use strict";(function(e){t("6b77"),t("921b");i(t("66fd"));var n=i(t("38a5"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"8de8":function(e,n,t){"use strict";var i=t("05fc"),r=t.n(i);r.a},dde3:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r})},de71:function(e,n,t){"use strict";t.r(n);var i=t("1117"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);n["default"]=r.a}},[["8023","common/runtime","common/vendor"]]]);