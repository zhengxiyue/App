(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_spread_code/index"],{"047b":function(e,t,n){},"15da":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement;e._self._c},s=[]},"8dfb":function(e,t,n){"use strict";n.r(t);var i=n("91c7"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"91c7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("cc12"),a=n("8a48"),s=n("26cb"),o=n("98f4"),c=n("a30d"),u=n("5fb7"),r=(n("1bab"),function(){Promise.all([n.e("common/vendor"),n.e("components/Authorize")]).then(function(){return resolve(n("5da7"))}.bind(null,n)).catch(n.oe)}),d=function(){n.e("components/home/index").then(function(){return resolve(n("40e3"))}.bind(null,n)).catch(n.oe)},f={components:{authorize:r,home:d},data:function(){return{imgUrls:[],indicatorDots:!1,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],poster:"",isAuto:!1,isShowAuth:!1,qrcodeSize:1e3,PromotionCode:"",base64List:[],canvasStatus:!0,bgColor:"#e93323"}},computed:(0,s.mapGetters)(["isLogin","uid","userInfo"]),watch:{isLogin:{handler:function(e,t){e&&this.userSpreadBannerList()},deep:!0}},onLoad:function(){this.bgColor=(0,u.setThemeColor)(),this.isLogin?this.userSpreadBannerList():(0,a.toLogin)()},onShareAppMessage:function(){return{title:this.userInfo.nickname+"-分销海报",imageUrl:this.spreadList[0].pic,path:"/pages/index/index?spread="+this.uid}},onReady:function(){},methods:{userSpreadBannerList:function(){var t=this;e.showLoading({title:"获取中",mask:!0}),(0,i.spreadBanner)({page:1,limit:5}).then((function(n){e.hideLoading(),t.$set(t,"spreadList",n.data),t.getImageBase64(n.data)})).catch((function(t){e.hideLoading()}))},getImageBase64:function(t){e.showLoading({title:"海报生成中",mask:!0});var n=this;n.base64List=t.map((function(e){return e.pic})),n.getQrcode()},getQrcode:function(){var t=this,n={pid:t.uid,path:"pages/index/index"},i="";e.downloadFile({url:this.base64List[0],success:function(e){i=e.tempFilePath}}),(0,c.getQrcode)(n).then((function(e){(0,o.base64src)(e.data.code,Date.now(),(function(e){t.PromotionCode=e})),setTimeout((function(){t.PosterCanvas(i,t.PromotionCode,t.userInfo.nickname,0)}),300)})).catch((function(n){e.hideLoading(),t.$util.Tips({title:n}),t.$set(t,"canvasStatus",!1)}))},make:function(){var t=this,n=this,i="";uQRCode.make({canvasId:"qrcode",text:i+"/pages/index/index?spread="+n.uid,size:this.qrcodeSize,margin:10,success:function(e){n.PromotionCode=e,setTimeout((function(){n.PosterCanvas(t.base64List[0],n.PromotionCode,n.userInfo.nickname,0)}),300)},complete:function(e){},fail:function(t){e.hideLoading(),n.$util.Tips({title:"海报二维码生成失败！"})}})},PosterCanvas:function(t,n,i,a){var s=e.createCanvasContext("canvasOne");s.clearRect(0,0,0,0);var o=this;e.getImageInfo({src:t,success:function(c){s.drawImage(t,0,0,750,1190),s.save(),s.drawImage(n,110,925,140,140),s.restore(),s.setFontSize(28),s.fillText(i,270,980),s.fillText("邀请您加入",270,1020),setTimeout((function(){s.draw(!0,(function(){e.canvasToTempFilePath({destWidth:750,destHeight:1190,canvasId:"canvasOne",fileType:"jpg",success:function(t){e.hideLoading(),o.spreadList[a].pic=t.tempFilePath,o.$set(o,"poster",t.tempFilePath),o.$set(o,"canvasStatus",!1)}})}))}),100)},fail:function(t){e.hideLoading(),o.$util.Tips({title:"无法获取图片信息"})}})},onLoadFun:function(e){this.$set(this,"userInfo",e),this.userSpreadBannerList()},authColse:function(e){this.isShowAuth=e},bindchange:function(t){var n=this,i=this.base64List,a=t.detail.current;this.swiperIndex=a;var s="";e.downloadFile({url:i[a],success:function(e){s=e.tempFilePath,setTimeout((function(){n.$set(n,"canvasStatus",!0),n.PosterCanvas(s,n.PromotionCode,n.userInfo.nickname,a)}),300)}})},savePhoto:function(t){var n=this;e.saveImageToPhotosAlbum({filePath:t,success:function(e){n.$util.Tips({title:"保存成功",icon:"success"})},fail:function(e){n.$util.Tips({title:"保存失败"})}})},setShareInfoStatus:function(){if(this.$wechat.isWeixin()){var e={desc:"分销海报",title:this.userInfo.nickname+"-分销海报",link:"/pages/index/index?spread="+this.uid,imgUrl:this.spreadList[0].pic};this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],e)}}}};t.default=f}).call(this,n("543d")["default"])},cc45:function(e,t,n){"use strict";(function(e){n("f524");i(n("66fd"));var t=i(n("d797"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},d797:function(e,t,n){"use strict";n.r(t);var i=n("15da"),a=n("8dfb");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("e1be");var o,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"02d71752",null,!1,i["a"],o);t["default"]=u.exports},e1be:function(e,t,n){"use strict";var i=n("047b"),a=n.n(i);a.a}},[["cc45","common/runtime","common/vendor"]]]);