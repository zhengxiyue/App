(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{"0544":function(t,n,e){},"3ba2":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.bastList,(function(n,e){var a=t.__get_orig(n),u=n.vip_price&&n.vip_price>0&&0==t.status?Number(n.sales)+Number(n.ficti)||0:null,i=n.vip_price&&n.vip_price>0||0!=t.status?null:Number(n.sales)+Number(n.ficti)||0;return{$orig:a,m0:u,m1:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[]},4123:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("26cb"),u=e("52a6");i(e("37f7"));function i(t){return t&&t.__esModule?t:{default:t}}var r={computed:(0,a.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){(0,u.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({animationType:"zoom-fade-out",animationDuration:200,url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=r}).call(this,e("543d")["default"])},7689:function(t,n,e){"use strict";e.r(n);var a=e("3ba2"),u=e("a65a");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("ae86");var r,o=e("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"48c709fc",null,!1,a["a"],r);n["default"]=c.exports},a65a:function(t,n,e){"use strict";e.r(n);var a=e("4123"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},ae86:function(t,n,e){"use strict";var a=e("0544"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7689"))
        })
    },
    [['components/goodList/index-create-component']]
]);