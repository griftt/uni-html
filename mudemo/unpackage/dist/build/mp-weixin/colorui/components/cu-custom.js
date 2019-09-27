(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"30e2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"7d80":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,e=this.CustomBar,n=this.bgImage,a="height:".concat(e,"px;padding-top:").concat(t,"px;");return this.bgImage&&(a="".concat(a,"background-image:url(").concat(n,");")),a}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var e="/"+__wxConfig.pages[0];return t.redirectTo({url:e})}t.navigateBack({delta:1})}}};e.default=n}).call(this,n("543d")["default"])},8075:function(t,e,n){"use strict";n.r(e);var a=n("7d80"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},ef5a:function(t,e,n){"use strict";n.r(e);var a=n("30e2"),u=n("8075");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);var o=n("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ef5a"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                
