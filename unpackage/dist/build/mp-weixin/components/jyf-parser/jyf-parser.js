(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-parser/jyf-parser"],{"1d90":function(t,e,i){},"4a61":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=function(){i.e("components/jyf-parser/libs/trees").then(function(){return resolve(i("84a4"))}.bind(null,i)).catch(i.oe)},o={},a=t.getFileSystemManager?t.getFileSystemManager():null,r=i("4b1c");function c(t){for(var e=t.length,i=5381;e--;)i+=(i<<5)+t.charCodeAt(e);return i}var h={name:"parser",data:function(){return{scaleAm:"",showAm:"",imgs:[],nodes:[]}},components:{trees:s},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},compress:Number,useCache:Boolean,xml:Boolean,domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){var i=this;if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,s="",o=0;n=e[o];o++){if("/"==n&&"/"!=e[o-1]&&"/"!=e[o+1])break;s+=Math.random()>.5?n.toUpperCase():n}return s+=e.substr(o),this[t]=s}if(this[t]=e,e.includes("data:image")){var r,c=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!c)return;r="".concat(wx.env.USER_DATA_PATH,"/").concat(Date.now(),".").concat(c[1]),a&&a.writeFile({filePath:r,data:c[3],encoding:c[2],success:function(){return i[t]=r}})}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this.imgList.each((function(e){e&&e.includes(t.env.USER_DATA_PATH)&&a&&a.unlink({filePath:e})})),clearInterval(this._timer)},methods:{setContent:function(e,i){var s,a,h=this;if(!e)return this.nodes=[];if("string"==typeof e){var l=new r(e,this);if(this.useCache){var u=c(e);o[u]?s=o[u]:(s=l.parse(),o[u]=s)}else s=l.parse();this.$emit("parse",s)}else if("[object Array]"==Object.prototype.toString.call(e)){if(e.length&&"Parser"!=e[0].PoweredBy){var f=new r(e,this);(function t(e){for(var i,n=0;i=e[n];n++)if("text"!=i.type){for(var s in i.attrs=i.attrs||{},i.attrs)"string"!=typeof i.attrs[s]&&(i.attrs[s]=i.attrs[s].toString());f.matchAttr(i,f),i.children&&i.children.length?(f.STACK.push(i),t(i.children),f.popNode(f.STACK.pop())):i.children=void 0}})(e)}s=e}else{if("object"!=typeof e||!e.nodes)return console.warn("错误的 html 类型："+typeof e);s=e.nodes,console.warn("错误的 html 类型：object 类型已废弃")}n&&(this.document=new n(this.nodes,"nodes",this)),this.nodes=i?this.nodes.concat(s):s,s.length&&s[0].title&&this.autosetTitle&&t.setNavigationBarTitle({title:s[0].title}),this.$nextTick((function(){h.imgList.length=0,h.videoContexts=[];var e=function e(i){for(var n,s=function(i,n){if("trees"==n.$options.name)for(a=n.nodes.length;r=n.nodes[--a];)r.c||("img"==r.name?(h.imgList.setItem(r.attrs.i,r.attrs.src),n.observer||n.imgLoad||"0"==r.attrs.i||(h.lazyLoad&&t.createIntersectionObserver?(n.observer=t.createIntersectionObserver(n),n.observer.relativeToViewport({top:900,bottom:900}).observe("._img",(function(){n.imgLoad=!0,n.observer.disconnect()}))):n.imgLoad=!0)):"video"==r.name&&(c=t.createVideoContext(r.attrs.id,n),c.id=r.attrs.id,h.videoContexts.push(c)));n.$children.length&&e(n.$children)},o=0;n=i[o++];){var a,r,c;s(o,n)}};e(h.$children)})),clearInterval(this._timer),this._timer=setInterval((function(){h.createSelectorQuery().select("#top").boundingClientRect().exec((function(t){h.width=t[0].width,t[0].height==a&&(h.$emit("ready",t[0]),clearInterval(h._timer)),a=t[0].height}))}),350),this.showWithAnimation&&!i&&(this.showAm="animation:show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes,i="",n=0;t=e[n++];)if("text"==t.type)i+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)i+="\n";else{var s="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";s&&i&&"\n"!=i[i.length-1]&&(i+="\n"),t.children&&(i+=this.getText(t.children)),s&&"\n"!=i[i.length-1]?i+="\n":"td"!=t.name&&"th"!=t.name||(i+="\t")}return i},navigateTo:function(e){var i=this;if(!this.useAnchor)return e.fail&&e.fail({errMsg:"Anchor is disabled"});var n=function(n,s){t.createSelectorQuery().in(s||i).select(n).boundingClientRect().selectViewport().scrollOffset().exec((function(i){if(!i||!i[0])return e.fail&&e.fail({errMsg:"Label not found"});e.scrollTop=i[1].scrollTop+i[0].top,t.pageScrollTo(e)}))};e.id?n("#top >>> #"+e.id+", #top >>> ."+e.id):n("#top")},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function(t,e){if("string"==typeof t){var i=c(t);t=new r(t,this).parse(),o[i]=t}var n=[];(function t(e){for(var i,s=0;i=e[s++];)"img"==i.name&&i.attrs.src&&!n.includes(i.attrs.src)&&n.push(i.attrs.src),t(i.children||[])})(t),e&&(n=n.slice(0,e)),this._wait=(this._wait||[]).concat(n),this.imgs?this.imgs.length<15&&(this.imgs=this.imgs.concat(this._wait.splice(0,15-this.imgs.length))):this.imgs=this._wait.splice(0,15)},_load:function(t){this._wait.length&&this.$set(this.imgs,t.target.id,this._wait.shift())},_tap:function(e){if(this.gestureZoom&&e.timeStamp-this._lastT<300){var i=e.touches[0].pageY-e.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),t.pageScrollTo({scrollTop:(i+this._initY)/2-e.touches[0].clientY,duration:400});else{var n=e.touches[0].pageX-e.currentTarget.offsetLeft;this._initY=i,this._scaleAm=t.createAnimation({transformOrigin:"".concat(n,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=n/2,this._tMin=(n-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=e.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};e.default=h}).call(this,i("543d")["default"])},"58d3":function(t,e,i){"use strict";i.r(e);var n=i("cd27"),s=i("ec70");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("e951");var a,r=i("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},cd27:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e951:function(t,e,i){"use strict";var n=i("1d90"),s=i.n(n);s.a},ec70:function(t,e,i){"use strict";i.r(e);var n=i("4a61"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser/jyf-parser-create-component',
    {
        'components/jyf-parser/jyf-parser-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("58d3"))
        })
    },
    [['components/jyf-parser/jyf-parser-create-component']]
]);
