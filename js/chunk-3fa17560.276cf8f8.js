(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fa17560"],{"0474":function(t,e,a){var i=a("bc66");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("c69b").default;r("46adb9bc",i,!0,{sourceMap:!1,shadowMode:!1})},"0d24":function(t,e,a){"use strict";var i=a("64a0"),r=a("5d34"),n=a("84d3");i({target:"String",proto:!0,forced:n("fixed")},{fixed:function(){return r(this,"tt","","")}})},"200a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var i=!1;try{var r={};Object.defineProperty(r,"passive",{get:function(){return i=!0,!0}}),window.addEventListener("test-passive",(function(){}),r)}catch(s){}var n=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!i&&{passive:t}},o=n()},"5d34":function(t,e,a){"use strict";var i=a("b15a"),r=a("ed5c"),n=a("88f1"),o=/"/g,s=i("".replace);t.exports=function(t,e,a,i){var l=n(r(t)),d="<"+e;return""!==a&&(d+=" "+a+'="'+s(n(i),o,"&quot;")+'"'),d+">"+l+"</"+e+">"}},6007:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o}));a("e8e7"),a("745e"),a("1699");var i=/scroll|auto|overlay/i;function r(t,e){void 0===e&&(e=window);var a=t;while(a&&"HTML"!==a.tagName&&"BODY"!==a.tagName&&1===a.nodeType&&a!==e){var r=window.getComputedStyle(a),n=r.overflowY;if(i.test(n))return a;a=a.parentNode}return e}function n(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}function o(t){var e=t;return t.startsWith("#")||(e="#".concat(t)),e="".concat(e," > .uni-scroll-view > .uni-scroll-view"),e}},6881:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"sticky",staticClass:"press-sticky",class:t.customClass,style:t.containerStyle},[a("div",{class:t.wrapClass,style:t.wrapStyle},[t._t("default")],2)])])},r=[],n=a("9b85"),o=a("69b0"),s=(a("948b"),a("f1f0"),a("414c"),a("faa0"),a("0d24"),a("79cc"),a("7475"),a("8098")),l=a("b0e8"),d=a("04d3");function c(t){return Object(l["b"])({height:t.fixed?Object(d["a"])(t.height):"","z-index":t.zIndex})}function f(t){return Object(l["b"])({transform:t.transform?"translate3d(0, ".concat(t.transform,"px, 0)"):"",top:t.fixed?Object(d["a"])(t.offsetTop):"","z-index":t.zIndex})}var u={containerStyle:c,wrapStyle:f},p=a("6b81"),h=a("f552");a("0508"),a("cdf1");function v(){var t=getCurrentPages();return t[t.length-1]}function b(t){var e=v(),a=e.pressPageScroller,i=void 0===a?[]:a;i.forEach((function(e){"function"===typeof e&&e(t)}))}var m=function(t){return{created:function(){var e=v();Object(h["e"])(e)&&(Array.isArray(e.pressPageScroller)?e.pressPageScroller.push(t.bind(this)):e.pressPageScroller="function"===typeof e.onPageScroll?[e.onPageScroll.bind(e),t.bind(this)]:[t.bind(this)],e.onPageScroll=b)},destroy:function(){var e,a=v();Object(h["e"])(a)&&(a.pressPageScroller=(null===(e=a.pressPageScroller)||void 0===e?void 0:e.filter((function(e){return e!==t})))||[])}}},w=a("c151"),g=a("6007"),x=a("21ac"),y=".press-sticky",k=(m((function(t){null===this.scrollTop&&this.onScroll(t)})),{name:"PressSticky",options:Object(o["a"])({},x["b"]),mixins:[Object(w["a"])((function(t){this.scroller||(this.scroller=Object(g["c"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),t(this.scroller,"touchmove",this.onScroll,!0),this.onScroll()}))],props:Object(o["a"])(Object(o["a"])({},x["c"]),{},{zIndex:{type:Number,default:99},offsetTop:{type:Number,default:0},disabled:{type:Boolean},container:{type:[Function,null],default:null},scrollTop:{type:[Number,null],default:null}}),emits:["scroll"],data:function(){return{height:0,fixed:!1,transform:0,scrollTopData:this.scrollTop}},computed:{containerStyle:function(){var t=this.fixed,e=this.height,a=this.zIndex,i=u.containerStyle({fixed:t,height:e,zIndex:a});return i},wrapStyle:function(){var t=this.fixed,e=this.offsetTop,a=this.transform,i=this.zIndex,r=u.wrapStyle({fixed:t,offsetTop:e,transform:a,zIndex:i});return r},wrapClass:function(){var t=this.fixed;return s["a"].bem2("sticky-wrap",{fixed:t})}},watch:{offsetTop:{handler:function(){this.onScroll()}},disabled:{handler:function(){this.onScroll()}},container:{handler:function(){this.onScroll()}},scrollTop:{handler:function(t){this.onScroll({scrollTop:t}),this.scrollTopData=t}}},created:function(){},mounted:function(){this.scrollTopData=this.scrollTop,this.onScroll()},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(a){e[a]=t[a]}))},onScroll:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.scrollTop,i=this.container,r=this.offsetTop,o=this.disabled;o?this.setDataAfterDiff({fixed:!1,transform:0}):(this.scrollTopData=a||this.scrollTopData,"function"===typeof i&&i()?Promise.all([Object(p["b"])(this,y),this.getContainerRect()]).then((function(e){var a=Object(n["a"])(e,2),i=a[0],o=a[1];i&&o&&r+i.height>o.height+o.top?t.setDataAfterDiff({fixed:!1,transform:o.height-i.height}):i&&r>=i.top?t.setDataAfterDiff({fixed:!0,height:i.height,transform:0}):t.setDataAfterDiff({fixed:!1,transform:0})})).catch((function(t){console.warn("error",t)})):Object(p["b"])(this,y).then((function(e){Object(h["e"])(e)&&(r>=e.top?(t.setDataAfterDiff({fixed:!0,height:e.height}),t.transform=0):t.setDataAfterDiff({fixed:!1}))})))},setDataAfterDiff:function(t){var e=this;this.$nextTick((function(){var a=Object.keys(t).reduce((function(a,i){return t[i]!==e[i]&&(a[i]=t[i]),a}),{});Object.keys(a).length>0&&e.setData(a),e.$emit("scroll",{scrollTop:e.scrollTopData,isFixed:t.fixed||e.fixed})}))},getContainerRect:function(){var t,e=this.container(),a=e.getBoundingClientRect();return t=Promise.resolve(a),t}}}),S=k,_=(a("b0fa"),a("2777")),C=Object(_["a"])(S,i,r,!1,null,"65161dd6",null);e["a"]=C.exports},"6b81":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return d})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return f}));var i=a("5e66"),r=(a("b4ca"),a("414c"),a("e8e7"),a("6007")),n=a("8098"),o=a("5696");function s(){if(Object(n["b"])()){var t=Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width),e=Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height);return{windowWidth:t,windowHeight:e,windowTop:0,windowBottom:0}}var a=uni.getSystemInfoSync(),i=a.windowWidth,r=a.windowHeight,o=a.windowTop,s=a.windowBottom;return{windowWidth:i,windowHeight:r,windowTop:o,windowBottom:s}}function l(){if(Object(n["b"])())return 0;var t=Object(o["a"])(),e=t.statusBarHeight;return e}function d(t,e){return new Promise((function(a){var i=Object(r["a"])(e),n=t.$el;if(n){var o=n.querySelector(i);return o||a({}),void a({scrollHeight:o.scrollHeight,scrollTop:o.scrollTop})}uni.createSelectorQuery().in(t).select(i).fields({scrollOffset:!0},(function(t){a(t)})).exec()}))}function c(t,e){return new Promise((function(a){var i=t.$el;if(i){var r=i.querySelector(e);r||a({});var n=r.getBoundingClientRect();a(n)}else uni.createSelectorQuery().in(t).select(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(t[0])}))}))}function f(t,e){return new Promise((function(a){var r=t.$el;if(r){var n=r.querySelectorAll(e),o=Object(i["a"])(n).map((function(t){return t.getBoundingClientRect()}));a(o)}else uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];a(t[0])}))}))}},"7b59":function(t,e,a){"use strict";a("0474")},"7ce9":function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return d}));var i=a("f552"),r=a("8098"),n=a("200a");function o(t,e,a){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];i["b"]||t.addEventListener(e,a,!!n["b"]&&{capture:!1,passive:r})}function s(t,e,a){i["b"]||t.removeEventListener(e,a)}function l(t){return d(t).value||""}function d(t){var e,a,i;return Object(r["b"])()?{value:(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)||"",scrollTop:null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.scrollTop,scrollHeight:null===t||void 0===t||null===(i=t.target)||void 0===i?void 0:i.scrollHeight}:t.detail}},"84d3":function(t,e,a){"use strict";var i=a("5b46");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},"98b2":function(t,e,a){var i=a("dcfa");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("c69b").default;r("367b1938",i,!0,{sourceMap:!1,shadowMode:!1})},b0fa:function(t,e,a){"use strict";a("98b2")},bc66:function(t,e,a){var i=a("ee2b");e=i(!1),e.push([t.i,'.van-ellipsis[data-v-3fda8c1f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-3fda8c1f]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-3fda8c1f],.van-multi-ellipsis--l3[data-v-3fda8c1f]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-3fda8c1f]{-webkit-line-clamp:3}.van-clearfix[data-v-3fda8c1f]:after{clear:both;content:"";display:table}.van-hairline[data-v-3fda8c1f],.van-hairline--bottom[data-v-3fda8c1f],.van-hairline--left[data-v-3fda8c1f],.van-hairline--right[data-v-3fda8c1f],.van-hairline--surround[data-v-3fda8c1f],.van-hairline--top[data-v-3fda8c1f],.van-hairline--top-bottom[data-v-3fda8c1f]{position:relative}.van-hairline--bottom[data-v-3fda8c1f]:after,.van-hairline--left[data-v-3fda8c1f]:after,.van-hairline--right[data-v-3fda8c1f]:after,.van-hairline--surround[data-v-3fda8c1f]:after,.van-hairline--top-bottom[data-v-3fda8c1f]:after,.van-hairline--top[data-v-3fda8c1f]:after,.van-hairline[data-v-3fda8c1f]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-3fda8c1f]:after{border-top-width:1px}.van-hairline--left[data-v-3fda8c1f]:after{border-left-width:1px}.van-hairline--right[data-v-3fda8c1f]:after{border-right-width:1px}.van-hairline--bottom[data-v-3fda8c1f]:after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-3fda8c1f]:after{border-width:1px 0}.van-hairline--surround[data-v-3fda8c1f]:after{border-width:1px}.press-ellipsis[data-v-3fda8c1f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-3fda8c1f]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-3fda8c1f],.press-multi-ellipsis--l3[data-v-3fda8c1f]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-3fda8c1f]{-webkit-line-clamp:3}.press-clearfix[data-v-3fda8c1f]:after{clear:both;content:"";display:table}.press-hairline[data-v-3fda8c1f],.press-hairline--bottom[data-v-3fda8c1f],.press-hairline--left[data-v-3fda8c1f],.press-hairline--right[data-v-3fda8c1f],.press-hairline--surround[data-v-3fda8c1f],.press-hairline--top[data-v-3fda8c1f],.press-hairline--top-bottom[data-v-3fda8c1f]{position:relative}.press-hairline--bottom[data-v-3fda8c1f]:after,.press-hairline--left[data-v-3fda8c1f]:after,.press-hairline--right[data-v-3fda8c1f]:after,.press-hairline--surround[data-v-3fda8c1f]:after,.press-hairline--top-bottom[data-v-3fda8c1f]:after,.press-hairline--top[data-v-3fda8c1f]:after,.press-hairline[data-v-3fda8c1f]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-3fda8c1f]:after{border-top-width:1px}.press-hairline--left[data-v-3fda8c1f]:after{border-left-width:1px}.press-hairline--right[data-v-3fda8c1f]:after{border-right-width:1px}.press-hairline--bottom[data-v-3fda8c1f]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-3fda8c1f]:after{border-width:1px 0}.press-hairline--surround[data-v-3fda8c1f]:after{border-width:1px}.press-notice-bar[data-v-3fda8c1f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:var(--notice-bar-height,40px);padding:var(--notice-bar-padding,0 16px);font-size:var(--notice-bar-font-size,14px);color:var(--notice-bar-text-color,#ed6a0c);line-height:var(--notice-bar-line-height,24px);background-color:var(--notice-bar-background-color,#fffbe8)}.press-notice-bar--withicon[data-v-3fda8c1f]{position:relative;padding-right:40px}.press-notice-bar--wrapable[data-v-3fda8c1f]{height:auto;padding:var(--notice-bar-wrapable-padding,8px 16px)}.press-notice-bar--wrapable .press-notice-bar__wrap[data-v-3fda8c1f]{height:auto}.press-notice-bar--wrapable .press-notice-bar__content[data-v-3fda8c1f]{position:relative;white-space:normal}.press-notice-bar__left-icon[data-v-3fda8c1f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4px;vertical-align:middle}.press-notice-bar__left-icon[data-v-3fda8c1f],.press-notice-bar__right-icon[data-v-3fda8c1f]{font-size:var(--notice-bar-icon-size,16px);min-width:var(--notice-bar-icon-min-width,22px)}.press-notice-bar__right-icon[data-v-3fda8c1f]{position:absolute;top:10px;right:15px}.press-notice-bar__wrap[data-v-3fda8c1f]{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;height:var(--notice-bar-line-height,24px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-notice-bar__content[data-v-3fda8c1f]{position:absolute;white-space:nowrap}.press-notice-bar__content.press-ellipsis[data-v-3fda8c1f]{max-width:100%}',""]),t.exports=e},c151:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("7ce9"),r=0;function n(t){var e="binded_".concat(r);function a(){var a=this;a[e]||(t.call(a,i["d"],!0),a[e]=!0)}function n(){var a=this;a[e]&&(t.call(a,i["c"],!1),a[e]=!1)}return r+=1,{mounted:a,activated:a,deactivated:n,beforeDestroy:n}}},dcfa:function(t,e,a){var i=a("ee2b");e=i(!1),e.push([t.i,'.van-ellipsis[data-v-65161dd6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-65161dd6]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-65161dd6],.van-multi-ellipsis--l3[data-v-65161dd6]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-65161dd6]{-webkit-line-clamp:3}.van-clearfix[data-v-65161dd6]:after{clear:both;content:"";display:table}.van-hairline[data-v-65161dd6],.van-hairline--bottom[data-v-65161dd6],.van-hairline--left[data-v-65161dd6],.van-hairline--right[data-v-65161dd6],.van-hairline--surround[data-v-65161dd6],.van-hairline--top[data-v-65161dd6],.van-hairline--top-bottom[data-v-65161dd6]{position:relative}.van-hairline--bottom[data-v-65161dd6]:after,.van-hairline--left[data-v-65161dd6]:after,.van-hairline--right[data-v-65161dd6]:after,.van-hairline--surround[data-v-65161dd6]:after,.van-hairline--top-bottom[data-v-65161dd6]:after,.van-hairline--top[data-v-65161dd6]:after,.van-hairline[data-v-65161dd6]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-65161dd6]:after{border-top-width:1px}.van-hairline--left[data-v-65161dd6]:after{border-left-width:1px}.van-hairline--right[data-v-65161dd6]:after{border-right-width:1px}.van-hairline--bottom[data-v-65161dd6]:after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-65161dd6]:after{border-width:1px 0}.van-hairline--surround[data-v-65161dd6]:after{border-width:1px}.press-ellipsis[data-v-65161dd6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-65161dd6]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-65161dd6],.press-multi-ellipsis--l3[data-v-65161dd6]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-65161dd6]{-webkit-line-clamp:3}.press-clearfix[data-v-65161dd6]:after{clear:both;content:"";display:table}.press-hairline[data-v-65161dd6],.press-hairline--bottom[data-v-65161dd6],.press-hairline--left[data-v-65161dd6],.press-hairline--right[data-v-65161dd6],.press-hairline--surround[data-v-65161dd6],.press-hairline--top[data-v-65161dd6],.press-hairline--top-bottom[data-v-65161dd6]{position:relative}.press-hairline--bottom[data-v-65161dd6]:after,.press-hairline--left[data-v-65161dd6]:after,.press-hairline--right[data-v-65161dd6]:after,.press-hairline--surround[data-v-65161dd6]:after,.press-hairline--top-bottom[data-v-65161dd6]:after,.press-hairline--top[data-v-65161dd6]:after,.press-hairline[data-v-65161dd6]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-65161dd6]:after{border-top-width:1px}.press-hairline--left[data-v-65161dd6]:after{border-left-width:1px}.press-hairline--right[data-v-65161dd6]:after{border-right-width:1px}.press-hairline--bottom[data-v-65161dd6]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-65161dd6]:after{border-width:1px 0}.press-hairline--surround[data-v-65161dd6]:after{border-width:1px}.press-sticky[data-v-65161dd6]{position:relative}.press-sticky-wrap--fixed[data-v-65161dd6]{position:fixed;right:0;left:0}',""]),t.exports=e},fd70:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"press-notice-bar-index"},[t.show?a("div",{class:t.noticeBarClass,style:t.noticeBarStyle,on:{click:t.onClick}},[t.leftIcon?a("PressIconPlus",{class:[t.leftIconClass],attrs:{name:t.leftIcon,"custom-class":t.leftIconCustomClass}}):t._t("left-icon"),a("div",{staticClass:"press-notice-bar__wrap"},[a("div",{class:"press-notice-bar__content "+(!1!==t.scrollable||t.wrapable?"":"press-ellipsis"),style:t.animationStyle},[t._v(" "+t._s(t.text)+" "),t.text?t._e():t._t("default")],2)]),"closeable"===t.mode?a("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"cross"},on:{click:t.onClickIcon}}):"link"===t.mode?[t.isNotInUni?a("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}}):a("navigator",{attrs:{url:t.url,"open-type":t.openType}},[a("PressIconPlus",{class:[t.rightIconClass],attrs:{"custom-class":t.rightIconCustomClass,name:"arrow"}})],1)]:t._t("right-icon")],2):t._e()])},r=[],n=a("9b85"),o=a("69b0"),s=(a("2aaa"),a("06dc"),a("948b"),a("414c"),a("faa0"),a("7475"),a("c252")),l=a("5696"),d=a("6b81"),c=a("8098"),f=a("b0e8");function u(t){return Object(f["b"])({color:t.color,"background-color":t.backgroundColor,background:t.background})}var p={rootStyle:u},h=a("21ac"),v=a("7ce9"),b={name:"PressNoticeBar",options:Object(o["a"])(Object(o["a"])({},h["b"]),{},{styleIsolation:"shared"}),components:{PressIconPlus:s["a"]},props:Object(o["a"])({text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean},h["c"]),emits:["close","click"],data:function(){return{show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:Object(c["b"])()}},computed:{noticeBarClass:function(){var t=this.mode,e=this.wrapable,a=this.customClass;return"".concat(a," ").concat(c["a"].bem2("notice-bar",{withicon:t,wrapable:e}))},noticeBarStyle:function(){var t=this.color,e=this.backgroundColor,a=this.background;return p.rootStyle({color:t,backgroundColor:e,background:a})},animationStyle:function(){var t=this.animationDuration,e=this.delay,a=this.translateX,i=["transform: translateX(".concat(a,"px);"),"transition: -webkit-transform ".concat(t,"ms linear ").concat(e,"ms, transform ").concat(t,"ms linear ").concat(e,"ms;"),"transform-origin: 50% 50% 0px;"].join(" ");return i},leftIconClass:function(){return"press-notice-bar__left-icon"},leftIconCustomClass:function(){var t="";return t},rightIconClass:function(){return"press-notice-bar__right-icon"},rightIconCustomClass:function(){var t="";return t}},watch:{text:{handler:function(){this.init()}},speed:{handler:function(){this.init()}}},created:function(){},mounted:function(){this.init()},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){this.timer&&clearTimeout(this.timer)},init:function(){var t=this;Object(l["e"])((function(){Promise.all([Object(d["b"])(t,".press-notice-bar__content"),Object(d["b"])(t,".press-notice-bar__wrap")]).then((function(e){var a=Object(n["a"])(e,2),i=a[0],r=a[1],o=t.speed,s=t.scrollable;if(null!=i&&null!=r&&i.width&&r.width&&!1!==s&&(s||r.width<i.width)){var l=(r.width+i.width)/o*1e3;t.wrapWidth=r.width,t.contentWidth=i.width,t.duration=l,t.scroll(!0)}}))}))},scroll:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=e?0:this.wrapWidth,this.animationDuration=0,Object(l["e"])((function(){t.translateX=-t.contentWidth,t.animationDuration=t.duration})),this.timer=setTimeout((function(){t.scroll()}),this.duration)},onClickIcon:function(t){"closeable"===this.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",Object(v["a"])(t)))},onClick:function(t){this.$emit("click",t)}}},m=b,w=(a("7b59"),a("2777")),g=Object(w["a"])(m,i,r,!1,null,"3fda8c1f",null);e["a"]=g.exports}}]);