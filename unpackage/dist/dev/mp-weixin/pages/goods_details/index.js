(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods_details/index"],{

/***/ 100:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/damowang/Downloads/App/pages/goods_details/index.vue?vue&type=template&id=78ee64b3&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    jyfParser: function() {
      return Promise.all(/*! import() | components/jyf-parser/jyf-parser */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/jyf-parser/jyf-parser")]).then(__webpack_require__.bind(null, /*! @/components/jyf-parser/jyf-parser.vue */ 692))
    },
    cusPreviewImg: function() {
      return __webpack_require__.e(/*! import() | components/cus-previewImg/cus-previewImg */ "components/cus-previewImg/cus-previewImg").then(__webpack_require__.bind(null, /*! @/components/cus-previewImg/cus-previewImg.vue */ 702))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 =
    Math.floor(_vm.productInfo.sales) + Math.floor(_vm.productInfo.ficti) || 0
  var l0 = _vm.skuArr.length > 1 ? _vm.skuArr.slice(0, 4) : null
  var g1 = _vm.type === "normal" ? Math.floor(_vm.CartCount) : null

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.H5ShareBox = false
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g1: g1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 101:
/*!********************************************************************************************!*\
  !*** /Users/damowang/Downloads/App/pages/goods_details/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 102);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/damowang/Downloads/App/pages/goods_details/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));




























































































































































































































































































































var _uqrcode = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/Sansnn-uQRCode/uqrcode.js */ 103));

var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 13));
var _app = __webpack_require__(/*! @/config/app.js */ 19);
var _user = __webpack_require__(/*! @/api/user */ 17);
var _store2 = __webpack_require__(/*! @/api/store.js */ 64);









var _api = __webpack_require__(/*! @/api/api.js */ 28);
var _order = __webpack_require__(/*! @/api/order.js */ 35);
var _login = __webpack_require__(/*! @/libs/login.js */ 12);
var _vuex = __webpack_require__(/*! vuex */ 14);
var _public = __webpack_require__(/*! @/api/public */ 26);






var _utils = __webpack_require__(/*! @/utils */ 76);

var _user2 = __webpack_require__(/*! @/api/user.js */ 17);

var _base64src = __webpack_require__(/*! @/utils/base64src.js */ 104);




var _setTheme = __webpack_require__(/*! @/utils/setTheme.js */ 48);
var _validate = __webpack_require__(/*! @/utils/validate.js */ 23);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var productConSwiper = function productConSwiper() {Promise.all(/*! require.ensure | components/productConSwiper/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/productConSwiper/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/productConSwiper */ 709));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var couponListWindow = function couponListWindow() {Promise.all(/*! require.ensure | components/couponListWindow/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/couponListWindow/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/couponListWindow */ 716));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var productWindow = function productWindow() {__webpack_require__.e(/*! require.ensure | components/productWindow/index */ "components/productWindow/index").then((function () {return resolve(__webpack_require__(/*! @/components/productWindow */ 678));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var userEvaluation = function userEvaluation() {__webpack_require__.e(/*! require.ensure | components/userEvaluation/index */ "components/userEvaluation/index").then((function () {return resolve(__webpack_require__(/*! @/components/userEvaluation */ 723));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var shareRedPackets = function shareRedPackets() {__webpack_require__.e(/*! require.ensure | components/shareRedPackets/index */ "components/shareRedPackets/index").then((function () {return resolve(__webpack_require__(/*! @/components/shareRedPackets */ 730));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var cusPreviewImg = function cusPreviewImg() {__webpack_require__.e(/*! require.ensure | components/cus-previewImg/cus-previewImg */ "components/cus-previewImg/cus-previewImg").then((function () {return resolve(__webpack_require__(/*! @/components/cus-previewImg/cus-previewImg.vue */ 702));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var parser = function parser() {Promise.all(/*! require.ensure | components/jyf-parser/jyf-parser */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/jyf-parser/jyf-parser")]).then((function () {return resolve(__webpack_require__(/*! @/components/jyf-parser/jyf-parser */ 692));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var authorize = function authorize() {Promise.all(/*! require.ensure | components/Authorize */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/Authorize")]).then((function () {return resolve(__webpack_require__(/*! @/components/Authorize */ 685));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var app = getApp();var _default =
{
  components: {
    productConSwiper: productConSwiper,
    couponListWindow: couponListWindow,
    productWindow: productWindow,
    userEvaluation: userEvaluation,
    shareRedPackets: shareRedPackets,
    cusPreviewImg: cusPreviewImg,
    "jyf-parser": parser,

    authorize: authorize },


  data: function data() {
    var that = this;
    return {
      showSkeleton: true, //骨架屏显示隐藏
      isNodes: 0, //控制什么时候开始抓取元素节点,只要数值改变就重新抓取
      //属性是否打开
      coupon: {
        coupon: false,
        type: 0,
        list: [],
        count: [] },

      attrTxt: '请选择', //属性页面提示
      attrValue: '', //已选属性
      animated: false, //购物车动画
      id: 0, //商品id
      replyCount: 0, //总评论数量
      reply: [], //评论列表
      productInfo: {}, //商品详情
      productValue: [], //系统属性
      couponList: [], //优惠券
      cart_num: 1, //购买数量
      isAuto: false, //没有授权的不会自动授权
      isShowAuth: false, //是否隐藏授权
      isOpen: false, //是否打开属性组件
      actionSheetHidden: true,
      storeImage: '', //海报产品图
      PromotionCode: '', //二维码图片
      posterbackgd: '/static/images/posterbackgd.png',
      sharePacket: {
        isState: true, //默认不显示
        touchstart: false },
      //分销商详细
      circular: false,
      autoplay: false,
      interval: 3000,
      duration: 500,
      clientHeight: "",
      systemStore: {}, //门店信息
      good_list: [],
      replyChance: 0,
      CartCount: 0,
      isDown: true,
      posters: false,
      weixinStatus: false,
      attr: {
        cartAttr: false,
        productAttr: [],
        productSelect: {} },

      description: '',
      navActive: 0,
      H5ShareBox: false, //公众号分享图片
      activityH5: [],
      retunTop: true, //顶部返回
      navH: "",
      navList: [],
      opacity: 0,
      scrollY: 0,
      topArr: [],
      toView: '',
      height: 0,
      heightArr: [],
      lock: false,
      scrollTop: 0,
      tagStyle: {
        img: 'width:100%;display:block;',
        table: 'width:100%',
        video: 'width:100%' },

      sliderImage: [],
      videoLink: '',
      qrcodeSize: 600,
      canvasStatus: false, //是否显示海报
      imagePath: '', //海报路径
      imgTop: '',
      errT: '',
      homeTop: 20,
      navbarRight: 0,
      userCollect: false,
      options: null,
      returnShow: true, //判断顶部返回是否出现
      type: "", //视频号普通商品类型
      theme: app.globalData.theme,
      indicatorBg: '',
      shareStatus: true,
      skuArr: [],
      currentPage: false,
      selectSku: {},
      selectNavList: [
      { name: '首页', icon: 'icon-shouye8', url: '/pages/index/index', after: 'dialog_after' },
      { name: '搜索', icon: 'icon-sousuo6', url: '/pages/goods_search/index', after: 'dialog_after' },
      { name: '购物车', icon: 'icon-gouwuche7', url: '/pages/order_addcart/order_addcart', after: 'dialog_after' },
      { name: '我的收藏', icon: 'icon-shoucang3', url: '/pages/users/user_goods_collection/index', after: 'dialog_after' },
      { name: '个人中心', icon: 'icon-gerenzhongxin1', url: '/pages/user/index' }],

      chatConfig: {
        consumer_hotline: '',
        telephone_service_switch: 'false' },
      //客服配置
      defaultCoupon: [],
      couponDeaultType: [
      { useType: 1 }] };


  },
  computed: (0, _vuex.mapGetters)(['isLogin', 'uid', 'chatUrl']),
  watch: {
    isLogin: {
      handler: function handler(newV, oldV) {
        var that = this;
        if (newV == true) {
          that.getCouponList();
          that.getCartCount();
        }
      },
      deep: true },

    productInfo: {
      handler: function handler() {
        this.$nextTick(function () {});
      },
      immediate: true } },


  onLoad: function onLoad(options) {
    this.options = options;
    var that = this;
    var pages = getCurrentPages();
    that.returnShow = pages.length === 1 ? false : true;
    if (pages.length <= 1) {
      that.retunTop = false;
    }
    that.navH = app.globalData.navHeight;
    that.$set(that, 'chatConfig', that.$Cache.getItem('chatConfig'));




    // 小程序链接进入获取绑定关系id
    setTimeout(function () {
      if (options.spread) {
        app.globalData.spread = options.spread;
        (0, _user.spread)(options.spread).then(function (res) {});
      }
    }, 2000);

    that.$set(that, 'theme', that.$Cache.get('theme')); //用户从分享卡片进入的场景下获取主题色配置
    uni.getSystemInfo({
      success: function success(res) {
        that.height = res.windowHeight;
        //res.windowHeight:获取整个窗口高度为px，*2为rpx；98为头部占据的高度；

        //that.navbarRight = res.windowWidth - uni.getMenuButtonBoundingClientRect().left;

      } });

    if (!options.scene && !options.id) {
      this.showSkeleton = false;
      this.$util.Tips({
        title: '缺少参数无法查看商品' },
      {
        url: '/pages/index/index' });

      return;
    }
    if (options.hasOwnProperty('id') || options.scene) {
      if (options.scene) {// 仅仅小程序扫码进入
        var qrCodeValue = this.$util.getUrlParams(decodeURIComponent(options.scene));
        var mapeMpQrCodeValue = this.$util.formatMpQrCodeData(qrCodeValue);
        app.globalData.spread = mapeMpQrCodeValue.spread;
        this.id = mapeMpQrCodeValue.id;
        setTimeout(function () {
          (0, _user.spread)(mapeMpQrCodeValue.spread).then(function (res) {}).catch(function (res) {});
        }, 2000);

      } else {
        this.id = options.id;
      }
      options.type == undefined || options.type == null ? that.type = 'normal' : that.type = options.type;
      that.$store.commit("PRODUCT_TYPE", that.type);
    }

    this.getGoodsDetails();
    this.getCouponList();
    this.getCouponType();
    this.getProductReplyList();
    this.getProductReplyCount();
    this.getGoods();
    (0, _utils.silenceBindingSpread)();
    this.indicatorBg = (0, _setTheme.setThemeColor)();
  },
  onReady: function onReady() {
    this.isNodes++;
    this.$nextTick(function () {var _this = this;

      var menuButton = uni.getMenuButtonBoundingClientRect();
      var query = uni.createSelectorQuery().in(this);
      query.
      select('#home').
      boundingClientRect(function (data) {
        _this.homeTop = menuButton.top * 2 + menuButton.height - data.height;
      }).
      exec();




    });
  },
  /**
      * 用户点击右上角分享
      */

  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    that.$set(that, 'actionSheetHidden', !that.actionSheetHidden);
    return {
      title: that.productInfo.storeName || '',
      imageUrl: that.productInfo.image || '',
      path: '/pages/goods_details/index?id=' + that.id + '&spread=' + that.uid };

  },

  methods: {



























    kefuClick: function kefuClick() {
      if (this.chatConfig.telephone_service_switch === 'true') {
        uni.makePhoneCall({
          phoneNumber: this.chatConfig.consumer_hotline //仅为示例
        });
      } else {






        location.href = this.chatUrl;

      }
    },
    goActivity: function goActivity(e) {
      var item = e;
      if (item.type === "1") {
        uni.navigateTo({
          url: "/pages/activity/goods_seckill_details/index?id=".concat(item.id) });

      } else if (item.type === "2") {
        uni.navigateTo({
          url: "/pages/activity/goods_bargain_details/index?id=".concat(item.id, "&startBargainUid=").concat(this.uid) });

      } else {
        uni.navigateTo({
          url: "/pages/activity/goods_combination_details/index?id=".concat(item.id) });

      }
    },
    /**
        * 购物车手动填写
        * 
        */
    iptCartNum: function iptCartNum(e) {
      this.$set(this.attr.productSelect, 'cart_num', e ? e : 1);
    },
    // 后退
    returns: function returns() {
      uni.navigateBack();
    },
    showNav: function showNav() {
      this.currentPage = !this.currentPage;
    },
    tap: function tap(index) {
      var id = "past" + index;
      var index = index;
      var that = this;
      this.$set(this, 'toView', id);
      this.$set(this, 'navActive', index);
      this.$set(this, 'lock', true);
      this.$set(this, 'scrollTop', index > 0 ? that.topArr[index] - app.globalData.navHeight / 2 : that.
      topArr[index]);
    },
    scroll: function scroll(e) {
      var that = this,
      scrollY = e.detail.scrollTop;
      var opacity = scrollY / 500;
      opacity = opacity > 1 ? 1 : opacity;
      that.$set(that, 'opacity', opacity);
      that.$set(that, 'scrollY', scrollY);
      if (that.lock) {
        that.$set(that, 'lock', false);
        return;
      }
      for (var i = 0; i < that.topArr.length; i++) {
        if (scrollY < that.topArr[i] - app.globalData.navHeight / 2 + that.heightArr[i]) {
          that.$set(that, 'navActive', i);
          break;
        }
      }
      that.$set(that.sharePacket, 'touchstart', true); //滑动屏幕时让分享气泡缩回
    },
    /*
        *去商品详情页 
        */
    goDetail: function goDetail(item) {
      if (!item.activityH5) {
        uni.redirectTo({
          url: '/pages/goods_details/index?id=' + item.id });

        return;
      }
      if (item.activityH5.length == 0) {
        uni.redirectTo({
          url: '/pages/goods_details/index?id=' + item.id });

        return;
      }
      // 砍价
      if (item.activityH5 && item.activityH5.type == 2) {
        uni.redirectTo({
          url: "/pages/activity/goods_bargain_details/index?id=".concat(item.activityH5.id, "&bargain=").concat(this.uid) });

        return;
      }
      // 拼团
      if (item.activityH5 && item.activityH5.type == 3) {
        uni.redirectTo({
          url: "/pages/activity/goods_combination_details/index?id=".concat(item.activityH5.id) });

        return;
      }
      // 秒杀
      if (item.activityH5 && item.activityH5.type == 1) {
        debugger;
        uni.redirectTo({
          url: "/pages/activity/goods_seckill_details/index?id=".concat(item.activityH5.id) });

        return;
      }
    },
    // 微信登录回调
    onLoadFun: function onLoadFun(e) {
      this.getCouponList();
      this.getCartCount();
    },
    ChangCouponsClone: function ChangCouponsClone() {
      this.$set(this.coupon, 'coupon', false);
    },
    /**
        * 购物车数量加和数量减
        * 
        */
    ChangeCartNum: function ChangeCartNum(changeValue) {
      //changeValue:是否 加|减
      //获取当前变动属性
      var productSelect = this.productValue[this.attrValue];
      //如果没有属性,赋值给商品默认库存
      if (productSelect === undefined && !this.attr.productAttr.length)
      productSelect = this.attr.productSelect;
      //无属性值即库存为0；不存在加减；
      if (productSelect === undefined) return;
      var stock = productSelect.stock || 0;
      var num = this.attr.productSelect;
      if (changeValue) {
        num.cart_num++;
        if (num.cart_num > stock) {
          this.$set(this.attr.productSelect, "cart_num", stock);
          this.$set(this, "cart_num", stock);
        }
      } else {
        num.cart_num--;
        if (num.cart_num < 1) {
          this.$set(this.attr.productSelect, "cart_num", 1);
          this.$set(this, "cart_num", 1);
        }
      }
    },
    attrVal: function attrVal(val) {
      this.$set(this.attr.productAttr[val.indexw], 'index', this.attr.productAttr[val.indexw].attrValues[val.indexn]);
    },
    /**
        * 属性变动赋值
        * 
        */
    ChangeAttr: function ChangeAttr(res) {
      var productSelect = this.productValue[res];
      this.$set(this, "selectSku", productSelect);
      if (productSelect) {
        this.$set(this.attr.productSelect, "image", productSelect.image);
        this.$set(this.attr.productSelect, "price", productSelect.price);
        this.$set(this.attr.productSelect, "stock", productSelect.stock);
        this.$set(this.attr.productSelect, "unique", productSelect.id);
        this.$set(this.attr.productSelect, "cart_num", 1);
        this.$set(this.attr.productSelect, "vipPrice", productSelect.vipPrice);
        this.$set(this.attr.productSelect, 'otPrice', productSelect.otPrice);
        this.$set(this, "attrValue", res);
        this.$set(this, "attrTxt", "已选择");
      } else {
        this.$set(this.attr.productSelect, "image", this.productInfo.image);
        this.$set(this.attr.productSelect, "price", this.productInfo.price);
        this.$set(this.attr.productSelect, "stock", 0);
        this.$set(this.attr.productSelect, "unique", this.productInfo.id);
        this.$set(this.attr.productSelect, "cart_num", 1);
        this.$set(this.attr.productSelect, "vipPrice", this.productInfo.vipPrice);
        this.$set(this.attr.productSelect, 'otPrice', this.productInfo.otPrice);
        this.$set(this, "attrValue", "");
        this.$set(this, "attrTxt", "请选择");
      }
    },
    /**
        * 领取完毕移除当前页面领取过的优惠券展示
        */
    ChangCoupons: function ChangCoupons(e) {
      var coupon = e;
      var couponList = this.$util.ArrayRemove(this.couponList, 'id', coupon.id);
      this.$set(this, 'couponList', couponList);
      this.getCouponList();
    },

    setClientHeight: function setClientHeight() {
      var that = this;
      if (!that.good_list.length) return;
      var view = uni.createSelectorQuery().in(this).select("#list0");
      view.fields({
        size: true },
      function (data) {
        that.$set(that, 'clientHeight', data.height + 20);
      }).exec();
    },
    /**
        * 优品推荐
        * 
        */
    getGoods: function getGoods() {var _this2 = this;
      (0, _store2.getProductGood)().then(function (res) {
        var good_list = res.data.list || [];
        var count = Math.ceil(good_list.length / 6);
        var goodArray = new Array();
        for (var i = 0; i < count; i++) {
          var list = good_list.slice(i * 6, i * 6 + 6);
          if (list.length) goodArray.push({
            list: list });

        }
        _this2.$set(_this2, 'good_list', goodArray);
        var navList = ['商品', '评价', '详情'];
        if (goodArray.length) {
          navList.splice(2, 0, '推荐');
        }
        _this2.$set(_this2, 'navList', navList);
        _this2.$nextTick(function () {
          if (good_list.length) {

            _this2.setClientHeight();






          };
        });
      });
    },
    /**
        * 获取产品详情
        * 
        */
    getGoodsDetails: function getGoodsDetails() {var _this3 = this;
      var that = this;
      (0, _store2.getProductDetail)(that.id, that.type).then(function (res) {
        var productInfo = res.data.productInfo;
        // 字符串数组转数组；
        var arrayImg = productInfo.sliderImage;
        var sliderImage = JSON.parse(arrayImg);
        if (that.getFileType(sliderImage[0]) == 'video') {
          //判断轮播图第一张是否是视频，如果是，就赋值给videoLink，并且将其在轮播图中删除
          _this3.$set(_this3, 'videoLink', sliderImage[0]);
          sliderImage.splice(0, 1);
        }
        that.$set(that, 'sliderImage', sliderImage);
        that.$set(that, 'productInfo', productInfo);
        that.$set(that, 'description', productInfo.content);
        that.$set(that, 'userCollect', res.data.userCollect);
        that.$set(that.attr, 'productAttr', res.data.productAttr);
        that.$set(that, 'productValue', res.data.productValue);
        for (var key in res.data.productValue) {
          var obj = res.data.productValue[key];
          that.skuArr.push(obj);
        }
        _this3.$set(_this3, "selectSku", that.skuArr[0]);
        that.$set(that.sharePacket, 'priceName', res.data.priceName);
        that.$set(that.sharePacket, 'isState', Math.floor(res.data.priceName) != 0 ? false : true);
        that.$set(that, 'activityH5', res.data.activityAllH5 ? res.data.activityAllH5 : []);
        uni.setNavigationBarTitle({
          title: productInfo.storeName.substring(0, 7) + "..." });


        var productAttr = _this3.attr.productAttr.map(function (item) {
          return {
            attrName: item.attrName,
            attrValues: item.attrValues.split(','),
            id: item.id,
            isDel: item.isDel,
            productId: item.productId,
            type: item.type };

        });
        _this3.$set(_this3.attr, 'productAttr', productAttr);

        // var navList = ['商品', '评价', '详情'];
        // if (goodArray.length) {
        // 	navList.splice(2, 0, '推荐')
        // }
        //that.$set(that, 'navList', navList);
        if (that.isLogin) {
          that.getCartCount();






          that.getQrcode();

        };
        setTimeout(function () {
          that.infoScroll();
        }, 500);

        that.imgTop = res.data.productInfo.image;


        that.downloadFilestoreImage();

        that.DefaultSelect();
        setTimeout(function () {
          _this3.showSkeleton = false;
          _this3.defaultCoupon = _this3.coupon.list;
        }, 1000);
      }).catch(function (err) {
        //状态异常返回上级页面
        that.$util.Tips({
          title: err.toString() },
        {
          tab: 3,
          url: 1 });

        setTimeout(function () {
          _this3.showSkeleton = false;
        }, 500);
      });
    },
    getProductReplyList: function getProductReplyList() {var _this4 = this;
      (0, _store2.getReplyProduct)(this.id).then(function (res) {
        _this4.reply = res.data.productReply ? [res.data.productReply] : [];
      });
    },
    getProductReplyCount: function getProductReplyCount() {
      var that = this;
      (0, _store2.getReplyConfig)(that.id).then(function (res) {
        that.$set(that, 'replyChance', res.data.replyChance * 100);
        that.$set(that, 'replyCount', res.data.sumCount);
      });
    },
    infoScroll: function infoScroll() {
      var that = this,
      topArr = [],
      heightArr = [];
      for (var i = 0; i < that.navList.length; i++) {//productList
        //获取元素所在位置
        var query = uni.createSelectorQuery().in(this);
        var idView = "#past" + i;
        // if (!that.data.good_list.length && i == 2) {
        //   var idView = "#past" + 3;
        // }
        query.select(idView).boundingClientRect();
        query.exec(function (res) {
          var top = res[0].top;
          var height = res[0].height;
          topArr.push(top);
          heightArr.push(height);
          that.$set(that, 'topArr', topArr);
          that.$set(that, 'heightArr', heightArr);
        });
      };
    },
    /**
        * 默认选中属性
        * 
        */
    DefaultSelect: function DefaultSelect() {
      var productAttr = this.attr.productAttr;
      var value = [];
      //默认选中每种规格的第一个
      productAttr.forEach(function (item) {
        value.push(item.attrValues[0]);
      });
      for (var i = 0; i < value.length; i++) {
        this.$set(productAttr[i], "index", value[i]);
      }

      //sort();排序函数:数字-英文-汉字；
      var productSelect = this.productValue[value.join(",")];
      if (productSelect && productAttr.length) {
        this.$set(this.attr.productSelect, "storeName", this.productInfo.storeName);
        this.$set(this.attr.productSelect, "image", productSelect.image);
        this.$set(this.attr.productSelect, "price", productSelect.price);
        this.$set(this.attr.productSelect, "stock", productSelect.stock);
        this.$set(this.attr.productSelect, "unique", productSelect.id);
        this.$set(this.attr.productSelect, "cart_num", 1);
        this.$set(this.attr.productSelect, "vipPrice", productSelect.vipPrice); //attr.productSelect.otPrice
        this.$set(this.attr.productSelect, 'otPrice', productSelect.otPrice);
        this.$set(this, "attrValue", value.join(","));
        this.$set(this, "attrTxt", "已选择");
      } else if (!productSelect && productAttr.length) {
        this.$set(this.attr.productSelect, "storeName", this.productInfo.storeName);
        this.$set(this.attr.productSelect, "image", this.productInfo.image);
        this.$set(this.attr.productSelect, "price", this.productInfo.price);
        this.$set(this.attr.productSelect, "stock", 0);
        this.$set(this.attr.productSelect, "unique", this.productInfo.id);
        this.$set(this.attr.productSelect, "cart_num", 1);
        this.$set(this.attr.productSelect, "vipPrice", this.productInfo.vipPrice);
        this.$set(this.attr.productSelect, 'otPrice', this.productInfo.otPrice);
        this.$set(this, "attrValue", "");
        this.$set(this, "attrTxt", "请选择");
      } else if (!productSelect && !productAttr.length) {
        this.$set(this.attr.productSelect, "storeName", this.productInfo.storeName);
        this.$set(this.attr.productSelect, "image", this.productInfo.image);
        this.$set(this.attr.productSelect, "price", this.productInfo.price);
        this.$set(this.attr.productSelect, "stock", this.productInfo.stock);
        this.$set(this.attr.productSelect, "unique", this.productInfo.id || "");
        this.$set(this.attr.productSelect, "cart_num", 1);
        this.$set(this.attr.productSelect, "vipPrice", this.productInfo.vipPrice);
        this.$set(this.attr.productSelect, 'otPrice', this.productInfo.otPrice);
        this.$set(this, "attrValue", "");
        this.$set(this, "attrTxt", "请选择");
      }
    },
    /**
        * 获取优惠券
        * 
        */
    getCouponList: function getCouponList(type) {
      var that = this,
      obj = {
        page: 1,
        limit: 20,
        productId: that.id,
        type: type };

      if (type != undefined || type != null) {
        obj.type = type;
      } else {
        obj.type = "";
      }
      (0, _api.getCoupons)(obj).then(function (res) {
        that.$set(that.coupon, 'list', res.data);
      });
    },
    getCouponType: function getCouponType() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var dataList;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                  (0, _api.getCoupons)({ productId: _this5.id }));case 2:dataList = _context.sent;
                if (dataList.length) {
                  _this5.couponDeaultType = dataList.data;
                  _this5.$set(_this5.coupon, 'type', dataList);
                }case 4:case "end":return _context.stop();}}}, _callee);}))();

    },
    tabCouponType: function tabCouponType(type) {
      this.$set(this.coupon, 'type', type);
      this.getCouponList(type);
    },

    ChangCouponsUseState: function ChangCouponsUseState(index) {
      var that = this;
      that.coupon.list[index].isUse = true;
      that.$set(that.coupon, 'list', that.coupon.list);
      that.$set(that.coupon, 'coupon', false);
    },
    /** 
        * 
        * 
        * 收藏商品
        */
    setCollect: function setCollect() {
      var that = this;
      if (this.isLogin === false) {
        (0, _login.toLogin)();
      } else {
        if (this.userCollect) {
          (0, _store2.collectDel)(this.productInfo.id).then(function (res) {
            that.$set(that, 'userCollect', !that.userCollect);
          });
        } else {
          (0, _store2.collectAdd)(this.productInfo.id).then(function (res) {
            that.$set(that, 'userCollect', !that.userCollect);
          });
        }
      }
    },
    /**
        * 打开属性插件
        */
    selecAttr: function selecAttr() {
      this.$set(this.attr, 'cartAttr', true);
      this.$set(this, 'isOpen', true);
    },
    /**
        * 打开优惠券插件
        */
    couponTap: function couponTap() {
      var that = this;
      if (that.isLogin === false) {
        (0, _login.toLogin)();
      } else {
        that.getCouponList(this.couponDeaultType[0].useType); //打开弹框默认请求商品券
        that.$set(that.coupon, 'coupon', true);
      }
    },
    onMyEvent: function onMyEvent() {
      this.$set(this.attr, 'cartAttr', false);
      this.$set(this, 'isOpen', false);
    },
    /**
        * 打开属性加入购物车
        * 
        */
    joinCart: function joinCart(e) {
      //是否登录
      if (this.isLogin === false) {
        (0, _login.toLogin)();
      } else {
        this.goCat(1);
      }
    },
    /*
        * 加入购物车
        */
    goCat: function goCat(num) {
      var that = this,
      productSelect = that.productValue[this.attrValue];
      //打开属性
      if (that.attrValue) {
        //默认选中了属性，但是没有打开过属性弹窗还是自动打开让用户查看默认选中的属性
        that.attr.cartAttr = !that.isOpen ? true : false;
      } else {
        if (that.isOpen) that.attr.cartAttr = true;else
        that.attr.cartAttr = !that.attr.cartAttr;
      }
      //只有关闭属性弹窗时进行加入购物车
      if (that.attr.cartAttr === true && that.isOpen === false)
      return that.isOpen = true;
      //如果有属性,没有选择,提示用户选择
      if (
      that.attr.productAttr.length &&
      productSelect.stock === 0 &&
      that.isOpen === true)

      return that.$util.Tips({
        title: "产品库存不足，请选择其它" });

      if (num === 1) {
        var q = {
          productId: parseFloat(that.id),
          cartNum: parseFloat(that.attr.productSelect.cart_num),
          isNew: false,
          productAttrUnique: that.attr.productSelect !== undefined ?
          that.attr.productSelect.unique : that.productInfo.id };

        (0, _store2.postCartAdd)(q).then(function (res) {
          that.isOpen = false;
          that.attr.cartAttr = false;
          that.$util.Tips({
            title: "添加购物车成功",
            success: function success() {
              that.getCartCount(true);
            } });

        }).
        catch(function (res) {
          that.isOpen = false;
          return that.$util.Tips({
            title: res });

        });
      } else {
        this.getPreOrder();
      }
    },
    /**
        * 获取购物车数量
        * @param boolean 是否展示购物车动画和重置属性
        */
    getCartCount: function getCartCount(isAnima) {
      var that = this;
      var isLogin = that.isLogin;
      if (isLogin) {
        (0, _order.getCartCounts)(true, 'total').then(function (res) {
          that.CartCount = res.data.count;
          //加入购物车后重置属性
          if (isAnima) {
            that.animated = true;
            setTimeout(function () {
              that.animated = false;
            }, 500);
          }
        });
      }
    },
    /**
        * 立即购买
        */
    goBuy: (0, _validate.Debounce)(function (e) {
      if (this.isLogin === false) {
        (0, _login.toLogin)();
      } else {
        this.goCat(0);
      }
    }),
    /**
         * 预下单
         */
    getPreOrder: function getPreOrder() {
      this.$Order.getPreOrder(this.type === 'normal' ? 'buyNow' : 'video', [{
        "attrValueId": parseFloat(this.attr.productSelect.unique),
        "productId": parseFloat(this.id),
        "productNum": parseFloat(this.attr.productSelect.cart_num) }]);

    },
    // 授权关闭
    authColse: function authColse(e) {
      this.isShowAuth = e;
    },
    /**
        * 分享打开
        * 
        */
    listenerActionSheet: function listenerActionSheet() {
      if (this.isLogin === false) {
        (0, _login.toLogin)();
      } else {





        this.goPoster();
        this.posters = true;
      }
    },
    closePosters: function closePosters() {
      this.posters = false;
      this.currentPage = false;
    },
    //隐藏海报
    posterImageClose: function posterImageClose() {
      this.canvasStatus = false;
      this.posters = false;
    },
    //替换安全域名
    setDomain: function setDomain(url) {
      url = url ? url.toString() : '';
      //本地调试打开,生产请注销
      if (url.indexOf("https://") > -1) return url;else
      return url.replace('http://', 'https://');
    },
    //获取海报产品图（解决跨域问题，只适用于小程序）
    downloadFilestoreImage: function downloadFilestoreImage() {
      var that = this;
      uni.downloadFile({
        url: that.setDomain(that.productInfo.image),
        success: function success(res) {
          that.storeImage = res.tempFilePath;
        },
        fail: function fail() {
          return that.$util.Tips({
            title: '' });

          that.storeImage = '';
        } });

    },
    // 小程序关闭分享弹窗；
    goFriend: function goFriend() {
      this.posters = false;
    },
    // 小程序二维码
    getQrcode: function getQrcode() {
      var that = this;
      var data = {
        pid: that.uid,
        id: that.id,
        path: 'pages/goods_details/index' };

      (0, _api.getQrcode)(data).then(function (res) {
        (0, _base64src.base64src)(res.data.code, Date.now(), function (res) {
          that.PromotionCode = res;
        });

      }).catch(function (err) {
        that.errT = err;
      });
    },
    // 生成二维码；
    make: function make(uid) {var _this6 = this;
      var href = location.href.split('?')[0] + "?id=" + this.id + "&spread=" + this.uid;
      _uqrcode.default.make({
        canvasId: 'qrcode',
        text: href,
        size: this.qrcodeSize,
        margin: 10,
        success: function success(res) {
          _this6.PromotionCode = res;
        },
        complete: function complete() {},
        fail: function fail(res) {
          _this6.$util.Tips({
            title: '海报二维码生成失败！' });

        } });

    },
    getImageBase64: function getImageBase64(images) {
      var that = this;
      (0, _public.imageBase64)({
        url: images }).
      then(function (res) {
        that.imgTop = res.data.code;
      });
    },
    /**
        * 获取产品分销二维码
        * @param function successFn 下载完成回调
        *
        */
    downloadFilePromotionCode: function downloadFilePromotionCode(successFn) {
      var that = this;
      getProductCode(that.id).
      then(function (res) {
        uni.downloadFile({
          url: that.setDomain(res.data.code),
          success: function success(res) {
            that.$set(that, 'isDown', false);
            if (typeof successFn == 'function') successFn && successFn(res.
            tempFilePath);else
            that.$set(that, 'PromotionCode', res.tempFilePath);
          },
          fail: function fail() {
            that.$set(that, 'isDown', false);
            that.$set(that, 'PromotionCode', '');
          } });

      }).
      catch(function (err) {
        that.$set(that, 'isDown', false);
        that.$set(that, 'PromotionCode', '');
      });
    },
    /**
        * 生成海报
        */
    goPoster: function goPoster() {
      var that = this;
      uni.showLoading({
        title: '海报生成中',
        mask: true });

      that.posters = false;
      var arrImagesUrl = '';
      var arrImagesUrlTop = '';
      if (!that.PromotionCode) {
        uni.hideLoading();
        that.$util.Tips({
          title: that.errT });

        return;
      }
      setTimeout(function () {
        if (!that.imgTop) {
          uni.hideLoading();
          that.$util.Tips({
            title: '无法生成商品海报！' });

          return;
        }
      }, 1000);
      uni.downloadFile({
        url: that.imgTop, //仅为示例，并非真实的资源
        success: function success(res) {
          arrImagesUrlTop = res.tempFilePath;
          var arrImages = [that.posterbackgd, arrImagesUrlTop, that.PromotionCode];
          var storeName = that.productInfo.storeName;
          var price = that.productInfo.price;
          setTimeout(function () {
            that.$util.PosterCanvas(arrImages, storeName, price, that.productInfo.
            otPrice,
            function (tempFilePath) {
              that.imagePath = tempFilePath;
              that.canvasStatus = true;
              uni.hideLoading();
            });
          }, 500);
        } });

    },
    // 图片预览；
    getpreviewImage: function getpreviewImage() {
      if (this.imagePath) {
        var photoList = [];
        photoList.push(this.imagePath);
        uni.previewImage({
          urls: photoList,
          current: this.imagePath });

      } else {
        this.$util.Tips({
          title: '您的海报尚未生成' });

      }
    },
    /*
        * 保存到手机相册
        */

    savePosterPath: function savePosterPath() {
      var that = this;
      uni.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            uni.authorize({
              scope: 'scope.writePhotosAlbum',
              success: function success() {
                uni.saveImageToPhotosAlbum({
                  filePath: that.imagePath,
                  success: function success(res) {
                    that.posterImageClose();
                    that.$util.Tips({
                      title: '保存成功',
                      icon: 'success' });

                  },
                  fail: function fail(res) {
                    that.$util.Tips({
                      title: '保存失败' });

                  } });

              } });

          } else {
            uni.saveImageToPhotosAlbum({
              filePath: that.imagePath,
              success: function success(res) {
                that.posterImageClose();
                that.$util.Tips({
                  title: '保存成功',
                  icon: 'success' });

              },
              fail: function fail(res) {
                that.$util.Tips({
                  title: '保存失败' });

              } });

          }
        } });

    },

    ShareInfo: function ShareInfo() {
      var data = this.productInfo;
      var href = location.href;
      if (this.$wechat.isWeixin()) {
        href = href.indexOf("?") === -1 ? href + "?spread=" + this.uid : href + "&spread=" + this.uid;
        var configAppMessage = {
          desc: data.storeInfo,
          title: data.storeName,
          link: href,
          imgUrl: data.image };

        this.$wechat.wechatEvevt([
        "updateAppMessageShareData",
        "updateTimelineShareData",
        "onMenuShareAppMessage",
        "onMenuShareTimeline"],
        configAppMessage).then(function (res) {
          // console.log(res);
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    showShare: function showShare(status) {
      var that = this;
      that.$set(that.sharePacket, 'touchstart', status);
    },
    hideNav: function hideNav() {
      this.currentPage = false;
    },
    //下拉导航页面跳转
    linkPage: function linkPage(url) {
      if (url == '/pages/index/index' || url == '/pages/order_addcart/order_addcart' || url == '/pages/user/index') {
        uni.switchTab({
          url: url });

      } else {
        uni.navigateTo({
          url: url });

      }
      this.currentPage = false;
    },
    //点击sku图片打开轮播图
    showImg: function showImg(index) {
      this.$refs.cusPreviewImg.open(this.selectSku.suk);
    },
    //滑动轮播图选择商品
    changeSwitch: function changeSwitch(e) {var _this7 = this;
      var productSelect = this.skuArr[e];
      this.$set(this, 'selectSku', productSelect);
      var skuList = productSelect.suk.split(',');
      skuList.forEach(function (i, index) {
        _this7.$set(_this7.attr.productAttr[index], 'index', skuList[index]);
      });
      if (productSelect) {
        this.$set(this.attr.productSelect, "image", productSelect.image);
        this.$set(this.attr.productSelect, "price", productSelect.price);
        this.$set(this.attr.productSelect, "stock", productSelect.stock);
        this.$set(this.attr.productSelect, "unique", productSelect.id);
        this.$set(this.attr.productSelect, "vipPrice", productSelect.vipPrice);
        this.$set(this, "attrTxt", "已选择");
        this.$set(this, "attrValue", productSelect.suk);
      }
    },
    getFileType: function getFileType(fileName) {
      // 后缀获取
      var suffix = '';
      // 获取类型结果
      var result = '';
      try {
        var flieArr = fileName.split('.');
        suffix = flieArr[flieArr.length - 1];
      } catch (err) {
        suffix = '';
      }
      // fileName无后缀返回 false
      if (!suffix) {return false;}
      suffix = suffix.toLocaleLowerCase();
      // 图片格式
      var imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
      // 进行图片匹配
      result = imglist.find(function (item) {return item === suffix;});
      if (result) {
        return 'image';
      }
      // 匹配 视频
      var videolist = ['mp4', 'm2v', 'mkv', 'rmvb', 'wmv', 'avi', 'flv', 'mov', 'm4v'];
      result = videolist.find(function (item) {return item === suffix;});
      if (result) {
        return 'video';
      }
      // 其他 文件类型
      return 'other';
    },
    videoPause: function videoPause() {

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 105:
/*!*****************************************************************************************************************************!*\
  !*** /Users/damowang/Downloads/App/pages/goods_details/index.vue?vue&type=style&index=0&id=78ee64b3&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=78ee64b3&scoped=true&lang=scss& */ 106);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 106:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/damowang/Downloads/App/pages/goods_details/index.vue?vue&type=style&index=0&id=78ee64b3&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 97:
/*!**************************************************************************************!*\
  !*** /Users/damowang/Downloads/App/main.js?{"page":"pages%2Fgoods_details%2Findex"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/goods_details/index.vue */ 98));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 98:
/*!*******************************************************************!*\
  !*** /Users/damowang/Downloads/App/pages/goods_details/index.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=78ee64b3&scoped=true& */ 99);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 101);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_78ee64b3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=78ee64b3&scoped=true&lang=scss& */ 105);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 31);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78ee64b3",
  null,
  false,
  _index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods_details/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/*!**************************************************************************************************************!*\
  !*** /Users/damowang/Downloads/App/pages/goods_details/index.vue?vue&type=template&id=78ee64b3&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=78ee64b3&scoped=true& */ 100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_78ee64b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ })

},[[97,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods_details/index.js.map