(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1149:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("66fd"));function u(t){return t&&t.__esModule?t:{default:t}}var a={onLaunch:function(){console.log("App Launch"),t.getSystemInfo({success:function(t){o.default.prototype.StatusBar=t.statusBarHeight;var n=wx.getMenuButtonBoundingClientRect();o.default.prototype.Custom=n,o.default.prototype.CustomBar=n.bottom+n.top-t.statusBarHeight}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=a}).call(this,e("543d")["default"])},"1cab":function(t,n,e){"use strict";e.r(n);var o=e("a546");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("ad26");var a,r,c=e("2877"),f=Object(c["a"])(o["default"],a,r,!1,null,null,null);n["default"]=f.exports},"8ab7":function(t,n,e){},"95f6":function(t,n,e){"use strict";(function(t){e("38fb"),e("921b");var n=u(e("66fd")),o=u(e("1cab"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){r(t,n,e[n])})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){return e.e("colorui/components/cu-custom").then(e.bind(null,"ada7"))};n.default.config.productionTip=!1,o.default.mpType="app",n.default.component("cu-custom",c);var f=new n.default(a({},o.default));t(f).$mount()}).call(this,e("543d")["createApp"])},a546:function(t,n,e){"use strict";e.r(n);var o=e("1149"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},ad26:function(t,n,e){"use strict";var o=e("8ab7"),u=e.n(o);u.a}},[["95f6","common/runtime","common/vendor"]]]);