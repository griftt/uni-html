(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/animation"],{"1f33":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},3494:function(e,n,t){"use strict";t.r(n);var a=t("1f33"),o=t("8160");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("950a");var r=t("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},"6dae":function(e,n,t){"use strict";(function(e){t("7302"),t("921b");a(t("66fd"));var n=a(t("3494"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},8160:function(e,n,t){"use strict";t.r(n);var a=t("d9ad"),o=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=o.a},"950a":function(e,n,t){"use strict";var a=t("dbcc"),o=t.n(a);o.a},d9ad:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(e){var n=this,t=e.currentTarget.dataset.class;this.animation=t,setTimeout(function(){n.animation=""},1e3)},ToggleDelay:function(){var e=this;this.toggleDelay=!0,setTimeout(function(){e.toggleDelay=!1},1e3)}}};n.default=a},dbcc:function(e,n,t){}},[["6dae","common/runtime","common/vendor"]]]);