(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/accredit/index"],{1561:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("4bc0")),i=n("cc12"),a=n("1bab");function u(t){return t&&t.__esModule?t:{default:t}}getApp();var c={name:"",props:{locationType:{type:Boolean,default:!1},userPhoneType:{type:Boolean,default:!1},authKey:{type:String,default:""},isPhoneBox:{type:Boolean,default:!1},content:{type:String,default:"申请获取用于完整服务"}},data:function(){return{isStatus:!1}},methods:{modelCancel:function(){this.$emit("closeModel",{isStatus:this.isStatus})},modelConfirm:function(){this.$emit("confirmModel")},getphonenumber:function(e){var n=this;t.showLoading({title:"加载中"}),o.default.getCode().then((function(t){n.getUserPhoneNumber(e.detail.encryptedData,e.detail.iv,t)})).catch((function(e){t.hideLoading()}))},getUserPhoneNumber:function(e,n,o){var i=this;(0,a.getUserPhone)({encryptedData:e,iv:n,code:o,key:this.authKey,type:"routine"}).then((function(t){i.$store.commit("LOGIN",{token:t.data.token}),i.$store.commit("SETUID",t.data.uid),i.getUserInfo()})).catch((function(e){t.hideLoading(),i.$util.Tips({title:e})}))},getUserInfo:function(){var e=this,n=this;(0,i.getUserInfo)().then((function(o){t.hideLoading(),n.$store.commit("UPDATE_USERINFO",o.data),n.isStatus=!0,e.modelCancel()}))}}};e.default=c}).call(this,n("543d")["default"])},3384:function(t,e,n){"use strict";n.r(e);var o=n("1561"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"566f":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},cb85:function(t,e,n){"use strict";var o=n("e70f"),i=n.n(o);i.a},e70f:function(t,e,n){},e93f:function(t,e,n){"use strict";n.r(e);var o=n("566f"),i=n("3384");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("cb85");var u,c=n("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"5400057e",null,!1,o["a"],u);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/accredit/index-create-component',
    {
        'components/accredit/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e93f"))
        })
    },
    [['components/accredit/index-create-component']]
]);