(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_logistics/index"],{3152:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},7022:function(t,e,o){"use strict";var n=o("7763"),r=o.n(n);r.a},"73ab":function(t,e,o){"use strict";o.r(e);var n=o("3152"),r=o("8559");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("7022");var a,s=o("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"00dce295",null,!1,n["a"],a);e["default"]=d.exports},7763:function(t,e,o){},8559:function(t,e,o){"use strict";o.r(e);var n=o("9e8a"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"9e8a":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("fa41"),r=o("b07f"),i=(s(o("9db5")),o("8a48")),a=o("26cb");function s(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([o.e("common/vendor"),o.e("components/recommend/index")]).then(function(){return resolve(o("d826"))}.bind(null,o)).catch(o.oe)},u=function(){Promise.all([o.e("common/vendor"),o.e("components/Authorize")]).then(function(){return resolve(o("5da7"))}.bind(null,o)).catch(o.oe)},c={components:{recommend:d,authorize:u},data:function(){return{orderId:"",product:{productInfo:{}},orderInfo:{},expressList:[],hostProduct:[],loading:!1,goodScroll:!0,params:{page:1,limit:10}}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.orderId)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.orderId,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.deliveryId})},getExpress:function(){var t=this;(0,n.express)(t.orderId).then((function(e){var o=e.data.express||{};t.$set(t,"product",e.data.order.info[0]||{}),t.$set(t,"orderInfo",e.data.order),t.$set(t,"expressList",o.list||[])}))},get_host_product:function(){if(this.loading=!0,this.goodScroll){var t=this;(0,r.getProductHot)(t.params.page,t.params.limit).then((function(e){t.loading=!1,t.goodScroll=e.data.list.length>=t.params.limit,t.params.page++,t.hostProduct=t.hostProduct.concat(e.data.list)}))}}},onReachBottom:function(){1!=this.params.page&&this.get_host_product()}};e.default=c}).call(this,o("543d")["default"])},bd84:function(t,e,o){"use strict";(function(t){o("f524");n(o("66fd"));var e=n(o("73ab"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])}},[["bd84","common/runtime","common/vendor"]]]);