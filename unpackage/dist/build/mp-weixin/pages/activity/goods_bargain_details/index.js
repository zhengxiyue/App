(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_bargain_details/index"],{"0d8e":function(a,t,i){"use strict";var e=i("f5db"),n=i.n(e);n.a},"24d6":function(a,t,i){"use strict";i.r(t);var e=i("edab"),n=i.n(e);for(var r in e)"default"!==r&&function(a){i.d(t,a,(function(){return e[a]}))}(r);t["default"]=n.a},"3fd9":function(a,t,i){"use strict";var e=i("f44a"),n=i.n(e);n.a},"619d":function(a,t,i){"use strict";i.r(t);var e=i("8e18"),n=i("24d6");for(var r in n)"default"!==r&&function(a){i.d(t,a,(function(){return n[a]}))}(r);i("0d8e"),i("3fd9");var s,o=i("f0c5"),g=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"b2cf5fe4",null,!1,e["a"],s);t["default"]=g.exports},"8e18":function(a,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return e}));var e={jyfParser:function(){return Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(i.bind(null,"58d3"))}},n=function(){var a=this,t=a.$createElement,i=(a._self._c,(new Date).getTime()-a.bargainInfo.stopTime<0&&a.bargainInfo.quota>0),e=(new Date).getTime(),n=a.startBargainUid==a.uid&&(1==a.bargainStatus||3==a.bargainStatus)||a.startBargainUid!=a.uid&&5==a.bargainStatus?(new Date).getTime():null,r=a.startBargainUid==a.uid&&(1==a.bargainStatus||3==a.bargainStatus)||a.startBargainUid!=a.uid&&5==a.bargainStatus?(new Date).getTime():null,s=a.startBargainUid==a.uid&&(1==a.bargainStatus||3==a.bargainStatus)||a.startBargainUid!=a.uid&&5==a.bargainStatus?(new Date).getTime():null,o=a.startBargainUid==a.uid&&(1==a.bargainStatus||3==a.bargainStatus)||a.startBargainUid!=a.uid&&5==a.bargainStatus?(new Date).getTime():null,g=a.startBargainUid==a.uid&&(1==a.bargainStatus||3==a.bargainStatus)||a.startBargainUid!=a.uid&&5==a.bargainStatus?(new Date).getTime():null,d=a.startBargainUid==a.uid&&parseFloat(a.bargainUserInfo.surplusPrice)>0&&1==a.bargainStatus,u=a.startBargainUid==a.uid&&parseFloat(a.bargainUserInfo.surplusPrice)>0&&3==a.bargainStatus,c=a.startBargainUid!=a.uid&&5==a.bargainStatus&&parseFloat(a.bargainUserInfo.surplusPrice)>0,b=a.startBargainUid!=a.uid&&4==a.bargainStatus&&0==parseFloat(a.bargainUserInfo.surplusPrice),l=0==parseFloat(a.bargainUserInfo.surplusPrice)&&a.startBargainUid==a.uid&&(4==a.bargainStatus||8==a.bargainStatus),p=0==parseFloat(a.bargainUserInfo.surplusPrice)&&a.startBargainUid==a.uid&&9==a.bargainStatus,h=(new Date).getTime(),f=(new Date).getTime()-a.bargainInfo.stopTime>=0||0==a.bargainInfo.quota;a._isMounted||(a.e0=function(t){a.H5ShareBox=!1}),a.$mp.data=Object.assign({},{$root:{g0:i,g1:e,g2:n,g3:r,g4:s,g5:o,g6:g,m0:d,m1:u,m2:c,m3:b,m4:l,m5:p,g7:h,g8:f}})},r=[]},d74d:function(a,t,i){"use strict";(function(a){i("f524");e(i("66fd"));var t=e(i("619d"));function e(a){return a&&a.__esModule?a:{default:a}}wx.__webpack_require_UNI_MP_PLUGIN__=i,a(t.default)}).call(this,i("543d")["createPage"])},edab:function(a,t,i){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i("a519"),n=i("1bab"),r=c(i("e5db")),s=(i("b07f"),c(i("e041")),i("8a48")),o=i("26cb"),g=i("a30d"),d=i("b1ec"),u=i("5355");function c(a){return a&&a.__esModule?a:{default:a}}var b=function(){Promise.all([i.e("common/vendor"),i.e("components/Authorize")]).then(function(){return resolve(i("5da7"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/countDown/index").then(function(){return resolve(i("853c"))}.bind(null,i)).catch(i.oe)},p=function(){i.e("components/home/index").then(function(){return resolve(i("40e3"))}.bind(null,i)).catch(i.oe)},h=function(){Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(i("58d3"))}.bind(null,i)).catch(i.oe)},f=getApp(),m={components:{countDown:l,authorize:b,home:p,"jyf-parser":h},filters:{picFilter:function(a){var t={0:"num1",1:"num2",2:"num3"};return t[a]}},data:function(){return{showSkeleton:!0,isNodes:0,bgColor:{bgColor:"#333333",Color:"#fff",width:"44rpx",timeTxtwidth:"16rpx",isDay:!0},countDownDay:"00",countDownHour:"00",countDownMinute:"00",countDownSecond:"00",active:!1,id:0,bargainStatus:0,startBargainUid:0,bargainUserInfo:{},storeBargainId:0,bargainInfo:{},page:1,limit:5,limitStatus:!1,bargainUserHelpList:[],bargainUserHelpInfo:[],bargainUserBargainPrice:0,bargainCount:[],retunTop:!0,bargainPartake:0,isHelp:!1,interval:null,productStock:0,quota:0,userBargainStatusHelp:!0,navH:"",bargainPrice:0,datatime:0,offest:"",tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},H5ShareBox:!1,systemH:0,isAuto:!1,isShowAuth:!1,pages:"",couponsHidden:!0,loading:!1,loadend:!1,posters:!1,buyPrice:"",qrcodeSize:600,posterbackgd:"../../../static/images/bargain_post1.png",PromotionCode:"",canvasStatus:!1,imgTop:"",imagePath:"",theme:f.globalData.theme,imgHost:"",backBg:"crmebimage/change/bargain_header_bg/bargain_header_bg1.jpg",backHead:"crmebimage/change/bargain_tip/bargain_tip1.png"}},computed:(0,o.mapGetters)(["isLogin","userInfo","uid"]),onLoad:function(t){var i=this;setTimeout((function(){i.isNodes++}),200);var e=this;switch(e.$set(e,"theme",e.$Cache.get("theme")),(0,g.getImageDomain)().then((function(a){e.$set(e,"imgHost",a.data)})),e.theme){case"theme1":e.backBg="crmebimage/change/bargain_header_bg/bargain_header_bg1.jpg",e.backHead="crmebimage/change/bargain_tip/bargain_tip1.png",e.posterbackgd="../../../static/images/bargain_post1.png";break;case"theme2":e.backBg="crmebimage/change/bargain_header_bg/bargain_header_bg2.jpg",e.backHead="crmebimage/change/bargain_tip/bargain_tip2.png",e.posterbackgd="../../../static/images/bargain_post2.png";break;case"theme3":e.backBg="crmebimage/change/bargain_header_bg/bargain_header_bg3.jpg",e.backHead="crmebimage/change/bargain_tip/bargain_tip3.png",e.posterbackgd="../../../static/images/bargain_post3.png";break;case"theme4":e.backBg="crmebimage/change/bargain_header_bg/bargain_header_bg4.jpg",e.backHead="crmebimage/change/bargain_tip/bargain_tip4.png",e.posterbackgd="../../../static/images/bargain_post4.png";break;case"theme5":e.backBg="crmebimage/change/bargain_header_bg/bargain_header_bg5.jpg",e.backHead="crmebimage/change/bargain_tip/bargain_tip5.png",e.posterbackgd="../../../static/images/bargain_post5.png";break}e.$store.commit("PRODUCT_TYPE","normal"),a.getSystemInfo({success:function(a){e.systemH=a.statusBarHeight,e.navH=e.systemH+10}}),t.spread&&(f.globalData.spread=t.spread);var n=getCurrentPages();if(n.length<=1&&(e.retunTop=!1),t.hasOwnProperty("id")||t.scene)if(t.scene){var r=this.$util.getUrlParams(decodeURIComponent(t.scene)),o=this.$util.formatMpQrCodeData(r);f.globalData=o,this.id=f.globalData.id}else this.id=t.id;"undefined"==t.startBargainUid?e.startBargainUid=0:e.startBargainUid=Number(t.startBargainUid),this.isLogin?(0==e.startBargainUid&&(e.startBargainUid=Number(e.$store.state.app.uid)),this.storeBargainId=t.storeBargainId?Number(t.storeBargainId):0,this.page=1):(this.$Cache.set(u.BACK_URL,"/pages/activity/goods_bargain_details/index?id="+t.id+"&startBargainUid="+this.uid+"&spread="+this.uid+"&storeBargainId="+this.storeBargainId),(0,s.toLogin)()),a.setNavigationBarTitle({title:"砍价详情"}),setTimeout((function(){(0,d.silenceBindingSpread)()}),2e3)},methods:{goConfirm:function(){a.navigateTo({url:"/pages/activity/bargain/index"})},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},goProduct:function(){a.navigateTo({url:"/pages/goods_details/index?id=".concat(this.bargainInfo.productId)})},userBargain:function(){this.uid==this.startBargainUid&&this.setBargain()},goBack:function(){a.navigateBack({delta:1})},make:function(){var a=this,t=window.location.protocol+"//"+window.location.host+"/pages/activity/goods_bargain_details/index?id="+this.id+"&startBargainUid="+this.uid+"&spread="+this.uid+"&storeBargainId="+this.storeBargainId;r.default.make({canvasId:"qrcode",text:t,size:this.qrcodeSize,margin:10,success:function(t){a.PromotionCode=t},complete:function(){},fail:function(t){a.$util.Tips({title:"海报二维码生成失败！"})}})},getImageBase64:function(a){var t=this;(0,n.imageBase64)({url:a}).then((function(a){t.imgTop=a.data.code}))},gobargainUserInfo:function(){var a=this;(0,e.getBargainUser)({bargainId:this.id,bargainUserId:this.storeBargainId||0}).then((function(t){var i=t.data;a.bargainUserInfo=i,a.bargainStatus=i.bargainStatus,a.storeBargainId=i.storeBargainUserId,a.buyPrice=a.$util.$h.Sub(parseFloat(a.bargainPrice),parseFloat(i.alreadyPrice)),a.bargainUserHelpList=i.userHelpList||[]})).catch((function(t){return a.$util.Tips({title:t.toString()},{tab:3,url:1})}))},goPay:function(){!1===this.isLogin?(0,s.toLogin)():this.$Order.getPreOrder("buyNow",[{attrValueId:parseFloat(this.bargainInfo.attrValueId),bargainId:parseFloat(this.id),productNum:1,productId:parseFloat(this.bargainInfo.productId),bargainUserId:parseFloat(this.storeBargainId)}])},getBargainDetails:function(){var t=this;(0,e.getBargainDetail)(t.id).then((function(i){var e=i.data;t.bargainInfo=e,t.bargainPrice=e.price,t.quota=e.quota,t.datatime=e.stopTime/1e3,t.pages="/pages/activity/goods_bargain_details/index?id="+t.id+"&startBargainUid="+t.uid+"&spread="+t.uid+"&storeBargainId="+t.storeBargainId,a.setNavigationBarTitle({title:e.title.substring(0,13)+"..."}),t.bargainUserHelpList=[],t.isLogin&&t.quota>0&&(new Date).getTime()-e.stopTime<0?t.gobargainUserInfo():t.buyPrice=t.bargainPrice,setTimeout((function(){t.showSkeleton=!1}),1e3)})).catch((function(a){t.$util.Tips({title:a},{tab:2,url:"/pages/activity/goods_bargain/index"})}))},currentBargainUser:function(){this.page=1,a.navigateTo({url:"/pages/activity/goods_bargain_details/index?id="+this.id+"&startBargainUid="+this.uid})},setBargain:function(){var a=this,t=this;(0,e.postBargainStart)(t.id).then((function(i){"subscribe"!==i.code&&(a.storeBargainId=i.data.storeBargainUserId,t.setBargainHelp(),t.userBargainStatus=1)}),(function(i){a.startBargainUid=0,t.$util.Tips({title:i})}))},setBargainHelp:function(){var a=this,t={bargainId:this.id,bargainUserId:this.storeBargainId,bargainUserUid:this.startBargainUid};(0,e.postBargainHelp)(t).then((function(t){a.$set(a,"bargainUserHelpList",[]),a.$set(a,"bargainUserBargainPrice",t.data.bargainPrice),a.$set(a,"active",!0),a.gobargainUserInfo()})).catch((function(t){a.$util.Tips({title:t}),a.$set(a,"bargainUserHelpList",[])}))},getBargainUserBargainPricePoster:function(){var t=this;this.active=!1,a.showLoading({title:"海报生成中",mask:!0}),this.posters=!1;var i="";if(!this.PromotionCode)return a.hideLoading(),void this.$util.Tips({title:this.errT});setTimeout((function(){if(!t.imgTop)return a.hideLoading(),void t.$util.Tips({title:"无法生成商品海报！"})}),1e3),a.downloadFile({url:this.imgTop,success:function(e){i=e.tempFilePath;var n=[t.posterbackgd,i,t.PromotionCode];setTimeout((function(){t.$util.activityCanvas(n,t.bargainInfo.title,t.buyPrice,"已砍至","还剩"+t.bargainUserInfo.surplusPrice+"元砍价成功",0,(function(i){t.imagePath=i,t.canvasStatus=!0,a.hideLoading()}))}),500)}})},goBargainList:function(){a.navigateTo({url:"/pages/activity/goods_bargain/index"})},close:function(){this.$set(this,"active",!1),this.$set(this,"posters",!1),this.$set(this,"canvasStatus",!1)},returns:function(){a.switchTab({url:"/pages/index/index"})},backList:function(){a.navigateTo({url:"/pages/activity/goods_bargain/index"})}},onReady:function(){},onShow:function(){this.isLogin&&this.getBargainDetails()},onHide:function(){null!==this.interval&&clearInterval(this.interval)},onUnload:function(){null!==this.interval&&clearInterval(this.interval)},onShareAppMessage:function(){var a=this,t={title:"您的好友"+a.userInfo.nickname+"邀请您帮他砍"+a.bargainInfo.title+" 快去帮忙吧！",path:"/pages/activity/goods_bargain_details/index?id="+this.id+"&startBargainUid="+this.startBargainUid+"&spread="+this.uid+"&storeBargainId="+this.storeBargainId,imageUrl:a.bargainInfo.image};return a.close(),t}};t.default=m}).call(this,i("543d")["default"])},f44a:function(a,t,i){},f5db:function(a,t,i){}},[["d74d","common/runtime","common/vendor"]]]);