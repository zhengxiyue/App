(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_comment_list/index"],{4283:function(t,e,n){"use strict";n.r(e);var a=n("61f8"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"61f8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("b07f"),o=function(){n.e("components/userEvaluation/index").then(function(){return resolve(n("90a6"))}.bind(null,n)).catch(n.oe)},i=getApp(),u={components:{userEvaluation:o},data:function(){return{replyData:{},product_id:0,reply:[],type:0,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,theme:i.globalData.theme}},onLoad:function(t){var e=this;if(!t.productId)return e.$util.Tips({title:"缺少参数"},{tab:3,url:1});e.productId=t.productId},onShow:function(){this.getProductReplyCount(),this.getProductReplyList()},methods:{getProductReplyCount:function(){var t=this;(0,a.getReplyConfig)(t.productId).then((function(e){t.$set(t,"replyData",e.data)}))},getProductReplyList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,a.getReplyList)(t.productId,{page:t.page,limit:t.limit,type:t.type}).then((function(e){var n=e.data.list,a=n.length<t.limit;t.reply=t.$util.SplitArray(n,t.reply),t.$set(t,"reply",t.reply),t.loading=!1,t.loadend=a,t.reply.length&&(t.loadTitle=a?"😕人家是有底线的~~":"加载更多"),t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},changeType:function(t){var e=parseInt(t);e!=this.type&&(this.type=e,this.page=1,this.loadend=!1,this.$set(this,"reply",[]),this.getProductReplyList())}},onReachBottom:function(){this.getProductReplyList()}};e.default=u},"7d42":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,0!==t.replyData.sumCount?Math.round(t.replyData.replyStar/t.replyData.sumCount):null);t.$mp.data=Object.assign({},{$root:{g0:n}})},i=[]},8255:function(t,e,n){"use strict";(function(t){n("f524");a(n("66fd"));var e=a(n("b4f8"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},b4f8:function(t,e,n){"use strict";n.r(e);var a=n("7d42"),o=n("4283");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("eacc");var u,r=n("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=l.exports},c455:function(t,e,n){},eacc:function(t,e,n){"use strict";var a=n("c455"),o=n.n(a);o.a}},[["8255","common/runtime","common/vendor"]]]);