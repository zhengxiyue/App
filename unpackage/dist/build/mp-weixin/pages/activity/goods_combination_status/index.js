(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_status/index"],{"2b7d":function(t,e,i){},"310f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(i("e5db")),a=i("1bab"),n=i("8a48"),s=i("26cb"),r=i("a519");i("b07f");function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){i.e("components/countDown/index").then(function(){return resolve(i("853c"))}.bind(null,i)).catch(i.oe)},h=function(){i.e("components/productWindow/index").then(function(){return resolve(i("3076"))}.bind(null,i)).catch(i.oe)},d=function(){Promise.all([i.e("common/vendor"),i.e("components/Authorize")]).then(function(){return resolve(i("5da7"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/home/index").then(function(){return resolve(i("40e3"))}.bind(null,i)).catch(i.oe)},p="GroupRule",m=getApp(),g={name:p,components:{CountDown:u,ProductWindow:h,home:l,authorize:d},props:{},data:function(){return{bgColor:{bgColor:"#333333",Color:"#fff",width:"44rpx",timeTxtwidth:"16rpx",isDay:!0},currentPinkOrder:"",isOk:0,pinkBool:0,userBool:0,pinkAll:[],pinkT:[],storeCombination:{},storeCombinationHost:[],pinkId:0,count:0,iShidden:!1,isOpen:!1,attr:{cartAttr:!1,productSelect:{image:"",storeName:"",price:"",quota:0,unique:"",cart_num:1,quotaShow:0,stock:0,num:0},attrValue:"",productAttr:[]},cart_num:"",limit:10,page:1,loading:!1,loadend:!1,userInfo:{},posters:!1,H5ShareBox:!1,isAuto:!1,isShowAuth:!1,onceNum:0,timestamp:0,qrcodeSize:600,posterbackgd:"/static/images/canbj.png",PromotionCode:"",canvasStatus:!1,imgTop:"",imagePath:"",theme:m.globalData.theme}},watch:{userData:{handler:function(t,e){t&&(this.userInfo=t,m.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId+"&spread="+this.uid)},deep:!0}},computed:(0,s.mapGetters)({isLogin:"isLogin",userData:"userInfo",uid:"uid"}),onLoad:function(t){var e=this;switch(e.pinkId=t.id,0==e.isLogin?(0,n.toLogin)():(this.timestamp=(new Date).getTime(),this.getCombinationPink()),e.$set(e,"theme",e.$Cache.get("theme")),e.theme){case"theme1":e.posterbackgd="../../../static/images/bargain_post1.png";break;case"theme2":e.posterbackgd="../../../static/images/bargain_post2.png";break;case"theme3":e.posterbackgd="../../../static/images/bargain_post3.png";break;case"theme4":e.posterbackgd="../../../static/images/bargain_post4.png";break;case"theme5":e.posterbackgd="../../../static/images/bargain_post5.png";break}},onShow:function(){},mounted:function(){this.combinationMore()},onShareAppMessage:function(){var t=this;return{title:"您的好友"+t.userInfo.nickname+"邀请您参团"+t.storeCombination.title,path:m.globalData.openPages,imageUrl:t.storeCombination.image}},methods:{listenerActionClose:function(){this.posters=!1,this.canvasStatus=!1},combinationMore:function(){var t=this;if(!t.loadend&&!t.loading){var e={page:t.page,limit:t.limit,comId:t.pinkId};this.loading=!0,(0,r.getCombinationMore)(e).then((function(e){var i=t.storeCombinationHost,o=t.limit;t.page++,t.loadend=o>e.data.length,t.storeCombinationHost=i.concat(e.data.list),t.page=t.data.page,t.loading=!1})).catch((function(e){t.loading=!1,t.$util.Tips({title:e})}))}},authColse:function(t){this.isShowAuth=t},onLoadFun:function(t){this.userInfo=t,m.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId,this.getCombinationPink()},iptCartNum:function(t){t>this.onceNum?(this.$util.Tips({title:"该商品每次限购".concat(this.onceNum).concat(this.storeCombination.unitName)}),this.$set(this.attr.productSelect,"cart_num",this.onceNum),this.$set(this,"cart_num",this.onceNum)):(this.$set(this.attr.productSelect,"cart_num",t),this.$set(this,"cart_num",t))},attrVal:function(t){this.attr.productAttr[t.indexw].index=this.attr.productAttr[t.indexw].attrValues[t.indexn]},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];e?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"quota",e.quota),this.$set(this.attr.productSelect,"unique",e.id),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"quotaShow",e.quotaShow),this.attrValue=t,this.attrTxt="已选择"):(this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quotaShow",0),this.$set(this.attr.productSelect,"stock",0),this.attrValue="",this.attrTxt="请选择")},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attr.productSelect.cart_num=this.cart_num),void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,o=(e.quotaShow,e.quota||0),a=this.attr.productSelect,n=this.storeCombination.num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){a.cart_num++;var s=[];s.push(n),s.push(o),s.push(i);var r=Math.min.apply(null,s);a.cart_num>=r&&(this.$set(this.attr.productSelect,"cart_num",r||1),this.$set(this,"cart_num",r||1)),this.$set(this,"cart_num",a.cart_num),this.$set(this.attr.productSelect,"cart_num",a.cart_num)}else a.cart_num--,a.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",a.cart_num),this.$set(this.attr.productSelect,"cart_num",a.cart_num)}},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].quota>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var o=0;o<t.length;o++)this.$set(t[o],"index",e[o]);var a=this.productValue[e.join(",")];a&&t.length?(this.$set(this.attr.productSelect,"storeName",this.storeCombination.title),this.$set(this.attr.productSelect,"image",a.image),this.$set(this.attr.productSelect,"price",a.price),this.$set(this.attr.productSelect,"quota",a.quota),this.$set(this.attr.productSelect,"unique",a.id),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"stock",a.stock),this.$set(this.attr.productSelect,"quotaShow",a.quotaShow),this.attrValue=e.join(","),this.attrTxt="已选择"):!a&&t.length?(this.$set(this.attr.productSelect,"storeName",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"quotaShow",0),this.attrValue="",this.attrTxt="请选择"):a||t.length||(this.$set(this.attr.productSelect,"storeName",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",this.storeCombination.id||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quotaShow",0),this.$set(this.attr.productSelect,"stock",0),this.attrValue="",this.attrTxt="请选择")},setProductSelect:function(){var t=this,e=t.attr;e.productSelect.image=t.storeCombination.image,e.productSelect.storeName=t.storeCombination.title,e.productSelect.price=t.storeCombination.price,e.productSelect.quota=0,e.productSelect.quotaShow=0,e.productSelect.stock=0,e.cartAttr=!1,t.$set(t,"attr",e)},pay:function(){var t=this;t.attr.cartAttr=!0,t.isOpen=!0},goPay:function(){this.$Order.getPreOrder("buyNow",[{attrValueId:parseFloat(this.attr.productSelect.unique),combinationId:parseFloat(this.storeCombination.id),productNum:parseFloat(this.attr.productSelect.cart_num),productId:parseFloat(this.storeCombination.productId),pinkId:parseFloat(this.pinkId)}])},goPoster:function(){},goOrder:function(){var e=this;t.navigateTo({url:"/pages/order_details/index?order_id="+e.currentPinkOrder})},goList:function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})},goDetail:function(e){this.pinkId=e,t.navigateTo({url:"/pages/activity/goods_combination_details/index?id="+e})},getImageBase64:function(t){var e=this;(0,a.imageBase64)({url:t}).then((function(t){e.imgTop=t.data.code}))},make:function(){var t=this,e=location.protocol+"//"+location.host+"/pages/activity/goods_combination_status/index?id="+this.pinkId+"&spread="+this.uid;o.default.make({canvasId:"qrcode",text:e,size:this.qrcodeSize,margin:10,success:function(e){t.PromotionCode=e},complete:function(){},fail:function(e){t.$util.Tips({title:"海报二维码生成失败！"})}})},getCombinationPink:function(){var t=this;(0,r.getCombinationPink)(t.pinkId).then((function(e){var i=e.data.storeCombination;e.data.pinkT.stop_time=parseInt(e.data.pinkT.stopTime),t.$set(t,"storeCombination",i),t.$set(t.attr.productSelect,"num",i.totalNum),t.$set(t,"pinkT",e.data.pinkT),t.$set(t,"pinkAll",e.data.pinkAll),t.$set(t,"count",e.data.count),t.$set(t,"userBool",e.data.userBool),t.$set(t,"pinkBool",e.data.pinkBool),t.$set(t,"isOk",e.data.isOk),t.$set(t,"currentPinkOrder",e.data.currentPinkOrder),t.$set(t,"userInfo",e.data.userInfo),t.onceNum=i.onceNum,t.attr.productAttr=i.productAttr,t.productValue=i.productValue,t.setProductSelect(),0!=t.attr.productAttr&&t.DefaultSelect()})).catch((function(e){t.isLogin&&t.$util.Tips({title:e},{url:"/pages/index/index"})}))},getCombinationRemove:function(){var t=this;(0,r.postCombinationRemove)({id:t.pinkId,cid:t.storeCombination.id}).then((function(e){t.$util.Tips({title:e.msg},{tab:3})})).catch((function(e){t.$util.Tips({title:e})}))},lookAll:function(){this.iShidden=!this.iShidden}}};e.default=g}).call(this,i("543d")["default"])},6241:function(t,e,i){"use strict";(function(t){i("f524");o(i("66fd"));var e=o(i("da08"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},ca47:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.H5ShareBox=!1})},n=[]},da08:function(t,e,i){"use strict";i.r(e);var o=i("ca47"),a=i("fa6b");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("e308");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"0c9c87c4",null,!1,o["a"],s);e["default"]=c.exports},e308:function(t,e,i){"use strict";var o=i("2b7d"),a=i.n(o);a.a},fa6b:function(t,e,i){"use strict";i.r(e);var o=i("310f"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a}},[["6241","common/runtime","common/vendor"]]]);