(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/bargain/index"],{"4c40":function(t,n,i){"use strict";var e=i("b1e4"),a=i.n(e);a.a},5073:function(t,n,i){"use strict";i.r(n);var e=i("fc21"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},6079:function(t,n,i){"use strict";i.r(n);var e=i("8f22"),a=i("5073");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("cf17"),i("4c40");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"b7686740",null,!1,e["a"],r);n["default"]=u.exports},"6b14":function(t,n,i){"use strict";(function(t){i("f524");e(i("66fd"));var n=e(i("6079"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(n.default)}).call(this,i("543d")["createPage"])},"8f22":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},a8e1:function(t,n,i){},b1e4:function(t,n,i){},cf17:function(t,n,i){"use strict";var e=i("a8e1"),a=i.n(e);a.a},fc21:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("a519"),a=i("26cb"),o=i("5fb7"),r=s(i("37f7"));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(){i.e("components/countDown/index").then(function(){return resolve(i("853c"))}.bind(null,i)).catch(i.oe)},c=function(){i.e("components/emptyPage").then(function(){return resolve(i("505e"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/Loading/index").then(function(){return resolve(i("2669"))}.bind(null,i)).catch(i.oe)},d=function(){i.e("components/home/index").then(function(){return resolve(i("40e3"))}.bind(null,i)).catch(i.oe)},f=function(){Promise.all([i.e("common/vendor"),i.e("components/payment/index")]).then(function(){return resolve(i("8dd3"))}.bind(null,i)).catch(i.oe)},g=getApp(),h={name:"BargainRecord",components:{CountDown:u,Loading:l,emptyPage:c,home:d,payment:f},props:{},computed:(0,a.mapGetters)(["isLogin","userInfo","uid"]),data:function(){return{bgColor:{bgColor:"",Color:"#E93323",width:"40rpx",timeTxtwidth:"28rpx",isDay:!1},bargain:[],status:!1,loadingList:!1,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"微信快捷支付"},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",number:0}],pay_close:!1,pay_order_id:"",totalPrice:"0",theme:g.globalData.theme}},onShow:function(){this.isLogin?(this.payMode[1].number=this.userInfo.nowMoney,this.$set(this,"payMode",this.payMode),this.getBargainUserList(),this.bgColor.Color=(0,o.setThemeColor)()):toLogin()},methods:{goPay:function(t,n){this.$set(this,"pay_close",!0),this.$set(this,"pay_order_id",n),this.$set(this,"totalPrice",t)},onChangeFun:function(t){var n=t,i=n.action||null,e=void 0!=n.value?n.value:null;i&&this[i]&&this[i](e)},payClose:function(){this.pay_close=!1},pay_complete:function(){this.status=!1,this.page=1,this.$set(this,"bargain",[]),this.$set(this,"pay_close",!1),this.getBargainUserList()},pay_fail:function(){this.pay_close=!1},goConfirm:function(n){!1===this.isLogin?toLogin():t.navigateTo({animationType:r.default.type,animationDuration:r.default.duration,url:"/pages/activity/goods_bargain_details/index?id=".concat(n.id,"&startBargainUid=").concat(this.uid,"&storeBargainId=").concat(n.bargainUserId)})},goDetail:function(n){t.navigateTo({animationType:r.default.type,animationDuration:r.default.duration,url:"/pages/activity/goods_bargain_details/index?id=".concat(n,"&startBargainUid=").concat(this.uid)})},goList:function(){t.navigateTo({animationType:r.default.type,animationDuration:r.default.duration,url:"/pages/activity/goods_bargain/index"})},getBargainUserList:function(){var t=this;t.loadingList||t.status||(0,e.getBargainUserList)({page:t.page,limit:t.limit}).then((function(n){t.status=n.data.list.length<t.limit,t.bargain.push.apply(t.bargain,n.data.list),t.page++,t.loadingList=!1})).catch((function(n){t.$dialog.error(n)}))},getBargainUserCancel:function(t){var n=this;(0,e.getBargainUserCancel)({bargainId:t}).then((function(t){n.status=!1,n.loadingList=!1,n.page=1,n.bargain=[],n.getBargainUserList(),n.$util.Tips({title:t})})).catch((function(t){n.$util.Tips({title:t})}))}},onReachBottom:function(){this.getBargainUserList()}};n.default=h}).call(this,i("543d")["default"])}},[["6b14","common/runtime","common/vendor"]]]);