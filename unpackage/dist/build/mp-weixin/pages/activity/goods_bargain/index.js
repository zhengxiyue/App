(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_bargain/index"],{1062:function(a,e,t){"use strict";(function(a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t("a519"),i=t("be59"),o=t("8a48"),r=t("26cb");c(t("37f7"));function c(a){return a&&a.__esModule?a:{default:a}}var g=getApp(),s=function(){t.e("components/home/index").then(function(){return resolve(t("40e3"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/countDown/index").then(function(){return resolve(t("853c"))}.bind(null,t)).catch(t.oe)},l=function(){Promise.all([t.e("common/vendor"),t.e("components/Authorize")]).then(function(){return resolve(t("5da7"))}.bind(null,t)).catch(t.oe)},h={components:{countDown:u,home:s,authorize:l},data:function(){return{showSkeleton:!0,isNodes:0,bgColor:{bgColor:"#E93323",Color:"#fff",width:"44rpx",timeTxtwidth:"16rpx",isDay:!0},bargainList:[],page:1,limit:10,loading:!1,loadend:!1,navH:"",isAuto:!1,isShowAuth:!1,returnShow:!0,loadTitle:"加载更多",bargainSuccessList:[],bargainTotal:0,indicatorDots:!1,autoplay:!0,theme:g.globalData.theme,imgHost:"",backBg:"crmebimage/change/bargain_header/bargain_header1.jpg",navBgColor:"#e93323"}},computed:(0,r.mapGetters)(["isLogin","uid"]),watch:{isLogin:{handler:function(a,e){a&&(this.getBargainList(),this.getBargainHeader())},deep:!0}},onLoad:function(e){var t=this,n=this;switch(n.$set(n,"imgHost",n.$Cache.get("imgHost")),g.globalData.theme){case"theme1":n.backBg="crmebimage/change/bargain_header/bargain_header1.jpg",n.bgColor.bgColor="#e93323",n.navBgColor="#e93323";break;case"theme2":n.backBg="crmebimage/change/bargain_header/bargain_header2.jpg",n.bgColor.bgColor="#FE5C2D",n.navBgColor="#FE5C2D";break;case"theme3":n.backBg="crmebimage/change/bargain_header/bargain_header3.jpg",n.bgColor.bgColor="#42CA4D",n.navBgColor="#42CA4D";break;case"theme4":n.backBg="crmebimage/change/bargain_header/bargain_header4.jpg",n.bgColor.bgColor="#1DB0FC",n.navBgColor="#1DB0FC";break;case"theme5":n.backBg="crmebimage/change/bargain_header/bargain_header5.jpg",n.bgColor.bgColor="#FF448F",n.navBgColor="#FF448F";break}a.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:n.navBgColor}),setTimeout((function(){t.isNodes++}),500);var i=getCurrentPages();this.returnShow=1!==i.length,a.setNavigationBarTitle({title:"砍价列表"}),this.navH=g.globalData.navHeight,this.isLogin?(this.getBargainList(),this.getBargainHeader()):(0,o.toLogin)()},methods:{getBargainHeader:function(){var a=this;(0,n.bargainHeaderApi)().then((function(e){a.bargainTotal=e.data.bargainTotal,a.bargainSuccessList=e.data.bargainSuccessList})).catch((function(e){return a.$util.Tips({title:e})}))},authColse:function(a){this.isShowAuth=a},goBack:function(){a.switchTab({url:"/pages/index/index"})},onLoadFun:function(a){this.getBargainList()},openSubscribe:function(e){var t=e;a.showLoading({title:"正在加载"}),(0,i.openBargainSubscribe)().then((function(e){a.hideLoading(),a.navigateTo({url:t})})).catch((function(e){a.hideLoading()}))},getBargainList:function(){var a=this;a.loadend||a.loading||(a.loading=!0,a.loadTitle="",a.bargainList=[{image:"",title:"",minPrice:""}],(0,n.getBargainList)({page:a.page,limit:a.limit}).then((function(e){a.bargainList=[];var t=e.data.list,n=a.$util.SplitArray(t,a.bargainList),i=t.length<a.limit;a.loadend=i,a.loading=!1,a.loadTitle=i?"已全部加载":"加载更多",a.$set(a,"bargainList",n),a.$set(a,"page",a.page+1),setTimeout((function(){a.showSkeleton=!1}),1e3)})).catch((function(e){a.loading=!1,a.loadTitle="加载更多"})))},setShare:function(){this.$wechat.isWeixin()&&this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],{desc:this.bargainList[0].title,title:this.bargainList[0].title,link:location.href,imgUrl:this.bargainList[0].image}).then((function(a){})).catch((function(a){console.log(a)}))}},onReachBottom:function(){this.getBargainList()}};e.default=h}).call(this,t("543d")["default"])},"22c3":function(a,e,t){},"288b":function(a,e,t){},"41f4":function(a,e,t){"use strict";(function(a){t("f524");n(t("66fd"));var e=n(t("6914"));function n(a){return a&&a.__esModule?a:{default:a}}wx.__webpack_require_UNI_MP_PLUGIN__=t,a(e.default)}).call(this,t("543d")["createPage"])},4352:function(a,e,t){"use strict";t.r(e);var n=t("1062"),i=t.n(n);for(var o in n)"default"!==o&&function(a){t.d(e,a,(function(){return n[a]}))}(o);e["default"]=i.a},"597b":function(a,e,t){"use strict";var n;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}));var i=function(){var a=this,e=a.$createElement,t=(a._self._c,a.__map(a.bargainSuccessList,(function(e,t){var n=a.__get_orig(e),i=a.$util.formatName(e.nickName);return{$orig:n,g0:i}}))),n=(new Date).getTime();a.$mp.data=Object.assign({},{$root:{l0:t,g1:n}})},o=[]},6914:function(a,e,t){"use strict";t.r(e);var n=t("597b"),i=t("4352");for(var o in i)"default"!==o&&function(a){t.d(e,a,(function(){return i[a]}))}(o);t("ff69"),t("a545");var r,c=t("f0c5"),g=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"a690a7dc",null,!1,n["a"],r);e["default"]=g.exports},a545:function(a,e,t){"use strict";var n=t("288b"),i=t.n(n);i.a},ff69:function(a,e,t){"use strict";var n=t("22c3"),i=t.n(n);i.a}},[["41f4","common/runtime","common/vendor"]]]);