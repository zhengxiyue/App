(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"071c":function(t,n,e){"use strict";var u=e("e91d"),a=e.n(u);a.a},"4eeb":function(t,n,e){"use strict";e.r(n);var u=e("ed5b"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},"9fd9":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},d826:function(t,n,e){"use strict";e.r(n);var u=e("9fd9"),a=e("4eeb");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("071c");var r,i=e("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,"d09e5804",null,!1,u["a"],r);n["default"]=c.exports},e91d:function(t,n,e){},ed5b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("52a6"),o=r(e("37f7"));function r(t){return t&&t.__esModule?t:{default:t}}var i={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){(0,a.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({animationType:o.default.type,animationDuration:o.default.duration,url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=i}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d826"))
        })
    },
    [['components/recommend/index-create-component']]
]);
