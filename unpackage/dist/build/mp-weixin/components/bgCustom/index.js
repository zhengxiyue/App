(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bgCustom/index"],{"4b94":function(t,e,n){"use strict";n.r(e);var c=n("ab15"),o=n.n(c);for(var u in c)"default"!==u&&function(t){n.d(e,t,(function(){return c[t]}))}(u);e["default"]=o.a},8144:function(t,e,n){"use strict";var c;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return c}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},ab15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n("26cb"),o={name:"Home",props:{},data:function(){return{top:"500"}},computed:(0,c.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")},bgTheme:function(t){this.$emit("getTheme",t)}},created:function(){}};e.default=o},c863:function(t,e,n){"use strict";n.r(e);var c=n("8144"),o=n("4b94");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("f3c1");var i,r=n("f0c5"),a=Object(r["a"])(o["default"],c["b"],c["c"],!1,null,"12d78224",null,!1,c["a"],i);e["default"]=a.exports},f3c1:function(t,e,n){"use strict";var c=n("f533"),o=n.n(c);o.a},f533:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bgCustom/index-create-component',
    {
        'components/bgCustom/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c863"))
        })
    },
    [['components/bgCustom/index-create-component']]
]);
