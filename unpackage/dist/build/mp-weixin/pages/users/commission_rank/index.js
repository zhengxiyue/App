(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/commission_rank/index"],{"031d":function(t,e,n){"use strict";n.r(e);var i=n("8cc4"),o=n("91cb");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("15b7");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"50426cc2",null,!1,i["a"],r);e["default"]=c.exports},"15b7":function(t,e,n){"use strict";var i=n("16a3"),o=n.n(i);o.a},"16a3":function(t,e,n){},"27d3":function(t,e,n){"use strict";(function(t){n("f524");i(n("66fd"));var e=i(n("031d"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"8cc4":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"91cb":function(t,e,n){"use strict";n.r(e);var i=n("c109"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c109:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("cc12"),o=n("8a48"),a=n("26cb"),r=n("5fb7"),s=function(){n.e("components/home/index").then(function(){return resolve(n("40e3"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/emptyPage").then(function(){return resolve(n("505e"))}.bind(null,n)).catch(n.oe)},u=getApp(),l={components:{emptyPage:c,home:s},data:function(){return{navList:["周排行","月排行"],active:0,rankList:[],page:1,limit:20,loadend:!1,loading:!1,loadTitle:"加载更多",type:"week",position:0,isShow:!1,isAuto:!1,isShowAuth:!1,theme:u.globalData.theme,bgColor:"#e93323"}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getBrokerageRankList(),this.getBrokerageRankNumber(this.type))},deep:!0}},onLoad:function(){this.isLogin?(this.getBrokerageRankList(),this.getBrokerageRankNumber(this.type)):(0,o.toLogin)();var e=this;e.bgColor=(0,r.setThemeColor)(),t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:e.bgColor})},methods:{onLoadFun:function(){this.getBrokerageRankList(),this.getBrokerageRankNumber(this.type)},authColse:function(t){this.isShowAuth=t},switchTap:function(t){this.active=t,this.type=t?"month":"week",this.page=1,this.loadend=!1,this.$set(this,"rankList",[]),this.getBrokerageRankList(),this.getBrokerageRankNumber(this.type)},getBrokerageRankNumber:function(t){var e=this;(0,i.brokerageRankNumber)({type:t}).then((function(t){e.position=t.data}))},getBrokerageRankList:function(){var t=this;this.loadend||this.loading||(this.loading=!0,this.loadTitle="",(0,i.getBrokerageRank)({page:this.page,limit:this.limit,type:this.type}).then((function(e){var n=e.data||[],i=n.length<=t.limit;t.rankList.push.apply(t.rankList,n),t.loading=!1,t.loadend=i,t.loadTitle=i?"😕我也是有底线的":"加载更多",t.$set(t,"rankList",t.rankList),t.isShow=!0})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))}},onReachBottom:function(){this.getBrokerageRankList()}};e.default=l}).call(this,n("543d")["default"])}},[["27d3","common/runtime","common/vendor"]]]);