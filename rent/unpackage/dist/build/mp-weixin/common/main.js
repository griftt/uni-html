(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"47e2":function(e,t,n){"use strict";n.r(t);var o=n("c5ac");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("ed89");var u,l,r=n("2877"),c=Object(r["a"])(o["default"],u,l,!1,null,null,null);t["default"]=c.exports},a382:function(e,t,n){"use strict";(function(e){n("7302"),n("921b");var t=a(n("66fd")),o=a(n("47e2"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){return n.e("pages/basics/home").then(n.bind(null,"525e"))};t.default.component("basics",r);var c=function(){return n.e("pages/component/home").then(n.bind(null,"20c8"))};t.default.component("components",c);var i=function(){return n.e("pages/plugin/home").then(n.bind(null,"066e"))};t.default.component("plugin",i);var f=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"5870"))};t.default.component("cu-custom",f),t.default.config.productionTip=!1,o.default.mpType="app";var d=new t.default(u({},o.default));e(d).$mount()}).call(this,n("543d")["createApp"])},c5ac:function(e,t,n){"use strict";n.r(t);var o=n("d4d7"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a},d4d7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("66fd"));function a(e){return e&&e.__esModule?e:{default:e}}var u={onLaunch:function(){e.getSystemInfo({success:function(e){o.default.prototype.StatusBar=e.statusBarHeight;var t=wx.getMenuButtonBoundingClientRect();o.default.prototype.Custom=t,o.default.prototype.CustomBar=t.bottom+t.top-e.statusBarHeight}}),o.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=u}).call(this,n("543d")["default"])},ed89:function(e,t,n){"use strict";var o=n("f4a4"),a=n.n(o);a.a},f4a4:function(e,t,n){}},[["a382","common/runtime","common/vendor"]]]);