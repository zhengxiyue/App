(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/promotion"],{"0ed9":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},2187:function(t,n,e){"use strict";var a=e("811b"),o=e.n(a);o.a},"811b":function(t,n,e){},b407:function(t,n,e){"use strict";e.r(n);var a=e("0ed9"),o=e("df7f");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("2187");var i,u=e("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=c.exports},b989:function(t,n,e){"use strict";(function(t){e("f524");a(e("66fd"));var n=a(e("b407"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},df7f:function(t,n,e){"use strict";e.r(n);var a=e("e9f5"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=o.a},e9f5:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("a34a")),o=e("b07f"),r=i(e("37f7"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,o,r,i){try{var u=t[r](i),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(a,o)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(a,o){var r=t.apply(n,e);function i(t){u(r,a,o,i,c,"next",t)}function c(t){u(r,a,o,i,c,"throw",t)}i(void 0)}))}}var f=function(){e.e("components/promotionGood/index").then(function(){return resolve(e("bc12"))}.bind(null,e)).catch(e.oe)},s=(getApp(),{name:"promotion",props:{tabData:{type:Array,default:[]},showType:{type:Number,default:1}},components:{promotionGood:f},created:function(){var t=this;setTimeout((function(){t.reloadData()}),1e3)},data:function(){return{tempArr:[],params:{page:1,limit:6}}},methods:{productslist:function(t){var n=this;return new Promise((function(e,a){(0,o.getGroomList)(t.type,n.params).then((function(t){var n=t.data;e(n.list)}))}))},reloadData:function(){var t=this;return c(a.default.mark((function n(){var e,o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e=0;case 1:if(!(e<t.tabData.length)){n.next=9;break}return n.next=4,t.productslist(t.tabData[e]);case 4:o=n.sent,t.tempArr.push(o);case 6:e++,n.next=1;break;case 9:case"end":return n.stop()}}),n)})))()},gopage:function(n){t.navigateTo({animationType:r.default.type,animationDuration:r.default.duration,url:"/pages/activity/promotionList/index?type="+JSON.stringify(n)})},goDetail:function(n){t.navigateTo({animationType:r.default.type,animationDuration:r.default.duration,url:"/pages/goods_details/index?id=".concat(n)})}}});n.default=s}).call(this,e("543d")["default"])}},[["b989","common/runtime","common/vendor"]]]);