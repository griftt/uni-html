(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{6175:function(e,n,a){"use strict";(function(e){a("6b77"),a("921b");u(a("66fd"));var n=u(a("6a44"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},6920:function(e,n){throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\nError: Cannot find module 'D:\\HBuilderX\\plugins\\compile-node-sass\\node_modules\\node-sass-china'\n    at Function.Module._resolveFilename (module.js:547:15)\n    at Function.Module._resolveFilename (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\module-alias\\index.js:49:29)\n    at Function.Module._load (module.js:474:25)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.sassLoader (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\sass-loader\\lib\\loader.js:46:72)\n    at runLoaders (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\NormalModule.js:301:20)\n    at D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at Object.context.callback (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.module.exports (D:\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader\\index.js:60:10)")},"6a44":function(e,n,a){"use strict";a.r(n);var u=a("b714"),r=a("f399");for(var d in r)"default"!==d&&function(e){a.d(n,e,function(){return r[e]})}(d);a("a0a8");var o=a("2877"),l=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=l.exports},a0a8:function(e,n,a){"use strict";var u=a("6920"),r=a.n(u);r.a},b714:function(e,n,a){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},r=[];a.d(n,"a",function(){return u}),a.d(n,"b",function(){return r})},f399:function(e,n,a){"use strict";a.r(n);var u=a("fa5b"),r=a.n(u);for(var d in u)"default"!==d&&function(e){a.d(n,e,function(){return u[e]})}(d);n["default"]=r.a},fa5b:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{source:0,addressList:[{name:"刘晓晓",mobile:"18666666666",addressName:"贵族皇仕牛排(东城店)",address:"北京市东城区",area:"B区",default:!0},{name:"刘大大",mobile:"18667766666",addressName:"龙回1区12号楼",address:"山东省济南市历城区",area:"西单元302",default:!1}]}},onLoad:function(e){console.log(e.source),this.source=e.source},methods:{checkAddress:function(n){1==this.source&&(this.$api.prePage().addressData=n,e.navigateBack())},addAddress:function(n,a){e.navigateTo({url:"/pages/address/addressManage?type=".concat(n,"&data=").concat(JSON.stringify(a))})},refreshList:function(e,n){this.addressList.unshift(e),console.log(e,n)}}};n.default=a}).call(this,a("543d")["default"])}},[["6175","common/runtime","common/vendor"]]]);