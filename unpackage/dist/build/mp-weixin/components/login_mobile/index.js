(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/login_mobile/index"],{3934:function(t,e,n){"use strict";n.r(e);var i=n("d7fc"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},"45dc":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"58fb":function(t,e,n){"use strict";n.r(e);var i=n("45dc"),o=n("3934");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("9ba7");var c,a=n("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"4baaaaa8",null,!1,i["a"],c);e["default"]=r.exports},"9ba7":function(t,e,n){"use strict";var i=n("cab5"),o=n.n(i);o.a},cab5:function(t,e,n){},d7fc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),o=r(n("5975")),u=(r(n("4bc0")),n("26cb")),c=n("cc12"),a=(n("a30d"),n("1bab"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,o,u,c){try{var a=t[u](c),r=a.value}catch(s){return void n(s)}a.done?e(r):Promise.resolve(r).then(i,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var u=t.apply(e,n);function c(t){s(u,i,o,c,a,"next",t)}function a(t){s(u,i,o,c,a,"throw",t)}c(void 0)}))}}var f=getApp(),d={name:"login_mobile",computed:(0,u.mapGetters)(["userInfo","isLogin"]),props:{isUp:{type:Boolean,default:!1},authKey:{type:String,default:""},isShow:{type:Boolean,default:!0},isPos:{type:Boolean,default:!0},appleShow:{type:String,default:""},platform:{type:String,default:""}},data:function(){return{keyCode:"",account:"",codeNum:"",isApp:0}},mixins:[o.default],mounted:function(){},onLoad:function(){},methods:{code:function(){var t=this;return l(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:return e.next=7,(0,c.registerVerify)(n.account).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}));case 7:case"end":return e.stop()}}),e)})))()},getCode:function(){var t=this;(0,c.getCodeApi)().then((function(e){t.keyCode=e.data.key})).catch((function(e){t.$util.Tips({title:e})}))},close:function(){this.$emit("close",!1)},loginBtn:function(){var e=this;return e.account?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.account)?e.codeNum?/^[\w\d]+$/i.test(e.codeNum)?(t.showLoading({title:!this.userInfo.phone&&this.isLogin?"正在绑定中":"正在登录中"}),void(!this.userInfo.phone&&this.isLogin?(0,a.iosBinding)({captcha:e.codeNum,phone:e.account}).then((function(t){e.$util.Tips({title:"绑定手机号成功",icon:"success"},{tab:3}),e.isApp=1,e.getUserInfo()})).catch((function(n){t.hideLoading(),e.$util.Tips({title:n})})):(0,a.getUserPhone)({captcha:e.codeNum,phone:e.account,key:e.authKey}).then((function(t){e.$store.commit("LOGIN",{token:t.data.token}),e.$store.commit("SETUID",t.data.uid),e.getUserInfo()})).catch((function(n){t.hideLoading(),e.$util.Tips({title:n})})))):e.$util.Tips({title:"请输入正确的验证码"}):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码"}):e.$util.Tips({title:"请填写手机号码"})},phoneSilenceAuth:function(t){var e=this,n=this;(0,c.phoneSilenceAuth)({code:t,spid:f.globalData.spread,phone:this.account,captcha:this.codeNum}).then((function(t){e.$store.commit("LOGIN",t.data.token),e.$store.commit("SETUID",t.data.uid),e.getUserInfo()})).catch((function(t){n.$util.Tips({title:t})}))},getUserInfo:function(){var e=this;(0,c.getUserInfo)().then((function(n){t.hideLoading(),e.$store.commit("UPDATE_USERINFO",n.data),e.$util.Tips({title:"登录成功",icon:"success"},{tab:3}),e.close()}))}}};e.default=d}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/login_mobile/index-create-component',
    {
        'components/login_mobile/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("58fb"))
        })
    },
    [['components/login_mobile/index-create-component']]
]);