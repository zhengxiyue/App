(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_details/index"],{"07de":function(t,e,o){"use strict";(function(t){o("f524");n(o("66fd"));var e=n(o("7d8a"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},"3cff":function(t,e,o){},"5e24":function(t,e,o){"use strict";o.r(e);var n=o("d415"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"5e8f":function(t,e,o){"use strict";var n=o("3cff"),i=o.n(n);i.a},"7a38":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=(t._self._c,0==t.isGoodsReturn&&2==t.orderInfo.shippingType&&t.orderInfo.paid&&t.orderInfo.systemStore?t.orderInfo.systemStore.dayTime.replace(",","-"):null);t._isMounted||(t.e0=function(e){t.isShow=!t.isShow},t.e1=function(e){t.isShow=!t.isShow}),t.$mp.data=Object.assign({},{$root:{g0:o}})},s=[]},"7d8a":function(t,e,o){"use strict";o.r(e);var n=o("7a38"),i=o("5e24");for(var s in i)"default"!==s&&function(t){o.d(e,t,(function(){return i[t]}))}(s);o("5e8f");var r,a=o("f0c5"),d=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"17f3045c",null,!1,n["a"],r);e["default"]=d.exports},d415:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("fa41"),i=(a(o("9db5")),o("8a48")),s=o("26cb"),r=(a(o("e5db")),o("5fb7"));function a(t){return t&&t.__esModule?t:{default:t}}var d=function(){o.e("components/home/index").then(function(){return resolve(o("40e3"))}.bind(null,o)).catch(o.oe)},c=function(){Promise.all([o.e("common/vendor"),o.e("components/payment/index")]).then(function(){return resolve(o("8dd3"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("components/orderGoods/index").then(function(){return resolve(o("eedd"))}.bind(null,o)).catch(o.oe)},l=function(){Promise.all([o.e("common/vendor"),o.e("components/Authorize")]).then(function(){return resolve(o("5da7"))}.bind(null,o)).catch(o.oe)},f=getApp(),h={components:{payment:c,home:d,orderGoods:u,authorize:l},data:function(){return{codeImg:"",qrcodeSize:100,order_id:"",evaluate:0,cartInfo:[],orderInfo:{systemStore:{},pstatus:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"微信快捷支付",payStatus:1},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",number:0,payStatus:1}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,id:0,uniId:"",utils:this.$util,againStatus:0,type:"normal",isShow:!0,theme:f.globalData.theme,bgColor:"#e93323",chatConfig:{consumer_hotline:"",telephone_service_switch:"false"}}},computed:(0,s.mapGetters)(["isLogin","chatUrl","userInfo"]),onLoad:function(e){if(void 0==e.type||null==e.type?this.type="normal":this.type=e.type,!e.order_id&&!e.uniId)return this.$util.Tips({title:"缺少参数"},{tab:3,url:1});this.$set(this,"order_id",e.order_id);var o=this;o.bgColor=(0,r.setThemeColor)(),t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:o.bgColor}),o.$set(o,"chatConfig",o.$Cache.getItem("chatConfig"))},onShow:function(){this.isLogin?(this.getOrderInfo(),this.payMode[1].number=this.userInfo.nowMoney,this.$set(this,"payMode",this.payMode)):(0,i.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){},methods:{kefuClick:function(){"true"===this.chatConfig.telephone_service_switch?t.makePhoneCall({phoneNumber:this.chatConfig.consumer_hotline}):location.href=this.chatUrl},onChangeFun:function(t){var e=t,o=e.action||null,n=void 0!=e.value?e.value:null;o&&this[o]&&this[o](n)},makePhone:function(){t.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});t.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailedAddress,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.orderId,this.totalPrice=this.orderInfo.payPrice},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo()},getOrderInfo:function(){var e=this,o=this;t.showLoading({title:"正在加载中"}),(0,n.getOrderDetail)(o.order_id).then((function(n){t.hideLoading(),o.$set(o,"orderInfo",n.data),o.$set(o,"evaluate",2==n.data.status?2:0),o.$set(o,"system_store",n.data.systemStore),o.$set(o,"id",n.data.id),o.$set(o,"cartInfo",n.data.orderInfoList),0!=n.data.refundStatus&&(o.isGoodsReturn=!0),2==o.orderInfo.shippingType&&o.orderInfo.paid&&o.markCode(n.data.verifyCode),o.orderInfo.refundStatus>0&&t.setNavigationBarColor({frontColor:"#fff",backgroundColor:"#666666"}),(n.data.combinationId>0||n.data.bargainId>0||n.data.seckillId>0)&&(e.againStatus=1)})).catch((function(e){t.hideLoading(),o.$util.Tips({title:e},"/pages/users/order_list/index")}))},markCode:function(t){var e=this;(0,n.qrcodeApi)({height:"145",text:t,width:"145"}).then((function(t){e.codeImg=t.data.code}))},copy:function(){t.setClipboardData({data:this.orderInfo.orderId})},goTel:function(){t.makePhoneCall({phoneNumber:this.orderInfo.deliveryId})},getOrderStatus:function(){var t=this.orderInfo||{},e=t.pstatus||{type:0},o={},n=parseInt(e.type),i=t.deliveryType,s=t.seckillId?parseInt(t.seckillId):0,r=t.bargainId?parseInt(t.bargainId):0,a=t.combinationId?parseInt(t.combinationId):0;o={type:9==n?-9:n,class_status:0},1==n&&a>0&&(o.class_status=1),2==n&&"express"==i&&(o.class_status=2),2==n&&(o.class_status=3),4!=n&&0!=n||(o.class_status=4),s||r||a||3!=n&&4!=n||(o.class_status=5),this.$set(this,"status",o)},goJoinPink:function(){t.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pinkId})},goOrderConfirm:function(){this.$Order.getPreOrder("again",[{orderNo:this.order_id}])},confirmOrder:function(){var e=this;t.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&(0,n.orderTake)(e.id).then((function(t){return e.$util.Tips({title:"操作成功",icon:"success"},(function(){e.getOrderInfo()}))})).catch((function(t){return e.$util.Tips({title:t})}))}})},delOrder:function(){var e=this;t.showModal({content:"确定删除该订单",cancelText:"取消",confirmText:"确定",showCancel:!0,confirmColor:"#f55850",success:function(t){if(t.confirm){var o=e;(0,n.orderDel)(e.id).then((function(t){return o.$util.Tips({title:"删除成功",icon:"success"},{tab:4,url:"../users/order_list/index"})})).catch((function(t){return o.$util.Tips({title:t})}))}}})},cancelOrder:function(){var e=this;t.showModal({title:"提示",content:"确认取消该订单?",success:function(t){t.confirm?(0,n.orderCancel)(e.orderInfo.id).then((function(t){e.$util.Tips({title:"取消成功"},{tab:3})})).catch((function(){e.$util.Tips({title:err}),e.getDetail()})):t.cancel&&console.log("用户点击取消")}})}}};e.default=h}).call(this,o("543d")["default"])}},[["07de","common/runtime","common/vendor"]]]);