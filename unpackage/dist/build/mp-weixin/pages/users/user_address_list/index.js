(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_address_list/index"],{"007e":function(t,e,i){"use strict";var s=i("ddd5"),n=i.n(s);n.a},"1c2b":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement;t._self._c},d=[]},"57c9":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("cc12"),n=i("8a48"),d=i("26cb"),o=function(){Promise.all([i.e("common/vendor"),i.e("components/Authorize")]).then(function(){return resolve(i("5da7"))}.bind(null,i)).catch(i.oe)},r=function(){i.e("components/home/index").then(function(){return resolve(i("40e3"))}.bind(null,i)).catch(i.oe)},c=getApp(),a={components:{authorize:o,home:r},data:function(){return{addressList:[],cartId:"",pinkId:0,couponId:0,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,bargain:!1,combination:!1,secKill:!1,theme:c.globalData.theme}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUserAddress(!0)},deep:!0}},onLoad:function(t){this.isLogin?(this.preOrderNo=t.preOrderNo||0,this.getAddressList(!0)):(0,n.toLogin)()},onShow:function(){var t=this;t.getAddressList(!0)},methods:{onLoadFun:function(){this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var e=this;t.authorize({scope:"scope.address",success:function(i){t.chooseAddress({success:function(t){var i={};i.province=t.provinceName,i.city=t.cityName,i.district=t.countyName,i.cityId=0,(0,s.editAddress)({address:i,isDefault:!0,realName:t.userName,postCode:t.postalCode,phone:t.telNumber,detail:t.detailInfo,id:0}).then((function(t){setTimeout((function(){e.getAddressList(!0),e.$util.Tips({title:"添加成功",icon:"success"})}),0)})).catch((function(t){return e.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return e.$util.Tips({title:"取消选择"})}})},fail:function(i){t.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(i){if(i.confirm)t.openSetting({success:function(t){console.log(t.authSetting)}});else if(i.cancel)return e.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(e){(0,s.editAddress)({realName:e.userName,phone:e.telNumber,address:{province:e.provinceName,city:e.cityName,district:e.countryName,cityId:0},detail:e.detailInfo,postCode:e.postalCode,isDefault:!0}).then((function(){setTimeout((function(){t.getAddressList(!0),t.$util.Tips({title:"添加成功",icon:"success"})}),0)})).catch((function(e){return t.$util.Tips({title:e||"添加失败"})}))}))},getAddressList:function(t){var e=this;t&&(e.loadend=!1,e.page=1,e.$set(e,"addressList",[])),e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,s.getAddressList)({page:e.page,limit:e.limit}).then((function(t){var i=t.data.list,s=i.length<e.limit;e.addressList=e.$util.SplitArray(i,e.addressList),e.$set(e,"addressList",e.addressList),e.loadend=s,e.loadTitle=s?"我也是有底线的":"加载更多",e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle="加载更多"})))},radioChange:function(t){var e=parseInt(t.detail.value),i=this,n=this.addressList[e];if(void 0==n)return i.$util.Tips({title:"您设置的默认地址不存在!"});(0,s.setAddressDefault)(n.id).then((function(t){for(var s=0,n=i.addressList.length;s<n;s++)i.addressList[s].isDefault=s==e;i.$util.Tips({title:"设置成功",icon:"success"},(function(){i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},editAddress:function(e){var i=this.cartId,s=this.pinkId,n=this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?id="+e+"&cartId="+i+"&pinkId="+s+"&couponId="+n+"&secKill"+this.secKill+"&combination="+this.combination+"&bargain="+this.bargain})},delAddress:function(e){var i=this,n=this.addressList[e];if(void 0==n)return i.$util.Tips({title:"您删除的地址不存在!"});t.showModal({content:"确定删除该地址",cancelText:"取消",confirmText:"确定",showCancel:!0,confirmColor:"#f55850",success:function(t){t.confirm&&(0,s.delAddress)(n.id).then((function(t){i.addressList.splice(e,1),i.$set(i,"addressList",i.addressList),i.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))}})},addAddress:function(){this.cartId,this.pinkId,this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?preOrderNo="+this.preOrderNo})},goOrder:function(e){this.preOrderNo&&t.redirectTo({url:"/pages/users/order_confirm/index?is_address=1&preOrderNo="+this.preOrderNo+"&addressId="+e})}},onReachBottom:function(){this.getAddressList()}};e.default=a}).call(this,i("543d")["default"])},"5c2c":function(t,e,i){"use strict";(function(t){i("f524");s(i("66fd"));var e=s(i("c520"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"8a89":function(t,e,i){"use strict";i.r(e);var s=i("57c9"),n=i.n(s);for(var d in s)"default"!==d&&function(t){i.d(e,t,(function(){return s[t]}))}(d);e["default"]=n.a},c520:function(t,e,i){"use strict";i.r(e);var s=i("1c2b"),n=i("8a89");for(var d in n)"default"!==d&&function(t){i.d(e,t,(function(){return n[t]}))}(d);i("007e");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,"08fedf2a",null,!1,s["a"],o);e["default"]=c.exports},ddd5:function(t,e,i){}},[["5c2c","common/runtime","common/vendor"]]]);