(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/components/fresh"],{"05dc":function(t,i,e){"use strict";e.r(i);var r=e("1db1"),a=e.n(r);for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);i["default"]=a.a},"068a":function(t,i,e){"use strict";e.r(i);var r=e("616a"),a=e("05dc");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("f326");var c,n=e("f0c5"),o=Object(n["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);i["default"]=o.exports},"0f36":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r={name:"d_goodList",props:{dataConfig:{type:Object,default:function(){}},tempArr:{type:Array,default:[]},isLogin:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},mounted:function(){},methods:{goDetail:function(t){this.$emit("detail",t)},goCartDuo:function(t){this.$emit("gocartduo",t)},goCartDan:function(t,i){this.$emit("gocartdan",t,i)},CartNumDes:function(t,i){this.$emit("ChangeCartNumDan",!1,t,i)},CartNumAdd:function(t,i){this.$emit("ChangeCartNumDan",!0,t,i)}}};i.default=r},"1db1":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e("b07f"),a=e("fa41"),s=d(e("fba4")),c=e("26cb"),n=e("52a6"),o=e("8a48"),u=d(e("37f7"));function d(t){return t&&t.__esModule?t:{default:t}}var h=function(){e.e("components/productWindow/index").then(function(){return resolve(e("3076"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/cartList/index").then(function(){return resolve(e("070d"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/home/index").then(function(){return resolve(e("40e3"))}.bind(null,e)).catch(e.oe)},f={computed:(0,c.mapGetters)(["isLogin","uid"]),components:{productWindow:h,goodList:s.default,cartList:l,home:p},props:{showSlide:{type:Boolean,default:!0}},data:function(){return{productList:[],navActive:0,categoryTitle:"",categoryErList:[],tabLeft:0,isWidth:0,tabClick:0,iSlong:!0,tempArr:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:10,cid:0,sid:0,isAuto:!1,isShowAuth:!1,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],attrValue:"",storeName:"",id:0,cartData:{cartList:[],iScart:!1},cartCount:0,totalPrice:0,lengthCart:0,theme:"theme1"}},created:function(){this.isLogin&&(this.getCartNum(),this.getCartLists(1)),this.getAllCategory();var i=this;i.lengthCart=i.cartData.cartList,t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/5}})},methods:{subOrder:function(){var t=this,i=t.cartData.cartList;if(!i.length)return t.$util.Tips({title:"请选择产品"});var e=i.map((function(t){return{shoppingCartId:Number(t.id)}}));this.$Order.getPreOrder("shoppingCart",e),t.cartData.iScart=!1},getTotalPrice:function(){var t=this,i=t.cartData.cartList,e=0;i.forEach((function(i){i.attrStatus&&(e=t.$util.$h.Add(e,t.$util.$h.Mul(i.cartNum,i.vipPrice?i.vipPrice:i.price)))})),t.$set(t,"totalPrice",e)},ChangeSubDel:function(t){var i=this,e=i.cartData.cartList,r=[];e.forEach((function(t){r.push(t.id)})),(0,a.cartDel)(r.join(",")).then((function(t){i.$set(i.cartData,"cartList",[]),i.cartData.iScart=!1,i.totalPrice=0,i.page=1,i.loadend=!1,i.tempArr=[],i.productslist(),i.getCartNum()}))},ChangeOneDel:function(t,i){var e=this,r=e.cartData.cartList;(0,a.cartDel)(t.toString()).then((function(t){r.splice(i,1),r.length||(e.cartData.iScart=!1,e.page=1,e.loadend=!1,e.tempArr=[],e.productslist()),e.getCartNum()}))},getCartLists:function(t){var i=this,e={page:1,limit:i.cartCount,isValid:!0};(0,a.getCartList)(e).then((function(e){i.$set(i.cartData,"cartList",e.data.list),e.data.list.length?i.$set(i.cartData,"iScart",!t&&!i.cartData.iScart):i.$set(i.cartData,"iScart",!1),i.getTotalPrice()}))},closeList:function(t){this.$set(this.cartData,"iScart",t),this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},getCartNum:function(){var t=this;(0,a.getCartCounts)(!0,"sum").then((function(i){t.$set(t,"cartCount",i.data.count)}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].stock>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var r=0;r<t.length;r++)this.$set(t[r],"index",i[r]);var a=this.productValue[i.join(",")];a&&t.length?(this.$set(this.attr.productSelect,"storeName",this.storeName),this.$set(this.attr.productSelect,"image",a.image),this.$set(this.attr.productSelect,"price",a.price),this.$set(this.attr.productSelect,"stock",a.stock),this.$set(this.attr.productSelect,"unique",a.id),this.$set(this.attr.productSelect,"vipPrice",a.vipPrice),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",i.join(","))):!a&&t.length?(this.$set(this.attr.productSelect,"storeName",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue","")):a||t.length||(this.$set(this.attr.productSelect,"storeName",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""))},ChangeAttr:function(t){var i=this.productValue[t];i?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.id),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vipPrice",i.vipPrice),this.$set(this,"attrValue",t)):(this.$set(this.attr.productSelect,"image",this.productInfo.image),this.$set(this.attr.productSelect,"price",this.productInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",this.productInfo.id),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vipPrice",this.productInfo.vipPrice),this.$set(this,"attrValue",""))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attrValues[t.indexn])},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},onLoadFun:function(){},productslist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,r.getProductslist)({page:t.page,limit:t.limit,type:1,cid:t.sid}).then((function(i){var e=i.data.list,r=e.length<t.limit;t.tempArr=t.$util.SplitArray(e,t.tempArr),t.$set(t,"tempArr",t.tempArr),t.loading=!1,t.loadend=r,t.loadTitle=r?"😕人家是有底线的~~":"加载更多",t.page=t.page+1})).catch((function(i){t.loading=!1,t.loadTitle="加载更多"})))},ChangeCartNumDuo:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,r=this.attr.productSelect;t?(r.cart_num++,r.cart_num>e&&(this.$set(this.attr.productSelect,"cart_num",e),this.$set(this,"cart_num",e))):(r.cart_num--,r.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},ChangeCartList:function(t,i){var e=this.cartData.cartList,r=e[i],a=e[i].stock;this.ChangeCartNum(t,r,a,0,r.productId,i,1),e.length||(this.cartData.iScart=!1,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist())},ChangeCartNum:function(t,i){var e=this;t?i.cartNum>=i.stock?i.cartNum=i.stock:(i.cartNum++,(0,a.changeCartNum)(i.id,i.cartNum).then((function(t){e.getCartNum(!0),e.getTotalPrice()}))):(i.cartNum--,(0,a.changeCartNum)(i.id,i.cartNum).then((function(t){e.getCartNum(!0),e.getTotalPrice()})),0==i.cartNum&&(0,a.cartDel)(i.id).then((function(t){e.getCartLists(1),e.getTotalPrice(),e.productslist(),e.getCartNum()})))},goCatNum:function(){this.goCat(1)},goCat:function(t){var i=this,e=i.productValue[this.attrValue];if(i.attrValue?i.attr.cartAttr=!i.isOpen:i.isOpen?i.attr.cartAttr=!0:i.attr.cartAttr=!i.attr.cartAttr,!0===i.attr.cartAttr&&!1===i.isOpen)return i.isOpen=!0;if(i.attr.productAttr.length&&0===e.stock&&!0===i.isOpen)return i.$util.Tips({title:"产品库存不足，请选择其它"});if(1===t){var a={productId:parseFloat(i.id),cartNum:parseFloat(i.attr.productSelect.cart_num),isNew:!1,productAttrUnique:void 0!==i.attr.productSelect?i.attr.productSelect.unique:i.productInfo.id};(0,r.postCartAdd)(a).then((function(t){i.isOpen=!1,i.attr.cartAttr=!1,i.$util.Tips({title:"添加购物车成功",success:function(){setTimeout((function(){i.getCartNum(!0),i.getCartLists(1)}),100)}})})).catch((function(t){return i.isOpen=!1,i.$util.Tips({title:t})}))}else this.getPreOrder()},goCartDuo:function(i){this.isLogin?(t.showLoading({title:"加载中"}),this.storeName=i.storeName,this.getAttrs(i.id,i.storeName),this.$set(this,"id",i.id)):this.getIsLogin()},getIsLogin:function(){(0,o.toLogin)()},getAttrs:function(i){var e=this,a=this;(0,r.getAttr)(i).then((function(i){t.hideLoading(),a.$set(a.attr,"productAttr",i.data.productAttr),a.$set(a,"productValue",i.data.productValue);var r=a.attr.productAttr.map((function(t){return{attrName:t.attrName,attrValues:t.attrValues.split(","),id:t.id,isDel:t.isDel,productId:t.productId,type:t.type}}));e.$set(a.attr,"productAttr",r),e.$set(a.attr,"cartAttr",!0),a.DefaultSelect()}))},goDetail:function(i){this.isLogin?(0,n.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({animationType:u.default.type,animationDuration:u.default.duration,url:"/pages/goods_details/index?id=".concat(i.id)})})):(0,o.toLogin)()},openTap:function(){this.iSlong=!1},closeTap:function(){this.iSlong=!0},getAllCategory:function(){var t=this;(0,r.getCategoryList)().then((function(i){i.data.forEach((function(t){t.child&&t.child.unshift({id:t.id,name:"全部"})}));var e=i.data;t.categoryTitle=e[0].name,t.sid=e[0].id,t.productList=e,t.categoryErList=i.data[0].child?i.data[0].child:[],t.page=1,t.loadend=!1,t.tempArr=[],t.productslist()}))},tapNav:function(t,i){var e=this.productList[t];this.navActive=t,this.categoryTitle=e.name,this.categoryErList=i.child?i.child:[],this.tabClick=0,this.tabLeft=0,this.sid=i.id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},longClick:function(t,i){this.productList.length>3&&(this.tabLeft=(t-1)*(this.isWidth+6)),this.tabClick=t,this.iSlong=!0,this.sid=i.id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},navSwitch:function(t,i){this.productList.length>3&&(this.tabLeft=(t-1)*(this.isWidth+6)),this.tabClick=t,this.iSlong=!0,this.sid=i.id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()}}};i.default=f}).call(this,e("543d")["default"])},"35e0":function(t,i,e){"use strict";(function(t){e("f524");r(e("66fd"));var i=r(e("068a"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},"5b79":function(t,i,e){},"616a":function(t,i,e){"use strict";var r;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return r}));var a=function(){var t=this,i=t.$createElement;t._self._c},s=[]},"7b9a":function(t,i,e){"use strict";var r=e("e677"),a=e.n(r);a.a},9589:function(t,i,e){"use strict";e.r(i);var r=e("0f36"),a=e.n(r);for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);i["default"]=a.a},b506:function(t,i,e){"use strict";var r;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return r}));var a=function(){var t=this,i=t.$createElement;t._self._c},s=[]},e677:function(t,i,e){},f326:function(t,i,e){"use strict";var r=e("5b79"),a=e.n(r);a.a},fba4:function(t,i,e){"use strict";e.r(i);var r=e("b506"),a=e("9589");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("7b9a");var c,n=e("f0c5"),o=Object(n["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);i["default"]=o.exports}},[["35e0","common/runtime","common/vendor"]]]);