(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b54468e","chunk-df71ea1e"],{"0f9f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.showBasicUsage?i("demo-block",{attrs:{title:t.t("basicUsage")}},[i("press-cell",{attrs:{title:t.t("show"),"is-link":""},on:{click:t.onShowDialog}})],1):t._e(),i("demo-block",{attrs:{title:t.t("custom")}},[i("press-cell",{attrs:{title:"样式类型","is-link":"",value:t.customStyleStr},on:{click:t.onCustom}}),i("ToggleHeader"),i("press-cell",{attrs:{title:"隐藏Tip样式",center:"",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("press-switch",{attrs:{"custom-class":"press-switch--e-sport",checked:t.hideTipStyle},on:{change:function(e){return t.$emit("update:hideTipStyle",!t.hideTipStyle)}}})]},proxy:!0}])}),i("press-cell",{attrs:{title:"使用Tip类名",center:"",border:!1},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("press-switch",{attrs:{"custom-class":"press-switch--e-sport",checked:t.useTipClass},on:{change:function(e){return t.$emit("update:useTipClass",!t.useTipClass)}}})]},proxy:!0}])})],1),t._t("default")],2)},s=[],o=i("a89a"),r=i("0c47"),a={i18n:{"zh-CN":{show:"显示",hideHead:"隐藏",showHead:"显示"},"en-US":{show:"Show",hideHead:"Hide",showHead:"Show"}},components:{PressSwitch:o["a"]},mixins:[Object(r["a"])()],props:{customStyleStr:{type:String,default:""},hideTipStyle:{type:Boolean,default:!1},useTipClass:{type:Boolean,default:!1},showBasicUsage:{type:Boolean,default:!0},show:{type:Boolean,default:!1}},data:function(){return{}},methods:{onCustom:function(){this.$emit("onCustom")},onShowDialog:function(){this.$emit("update:show",!0)}}},c=a,l=i("2777"),u=Object(l["a"])(c,n,s,!1,null,"cf917974",null);e["a"]=u.exports},2805:function(t,e,i){var n=i("c14f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("c69b").default;s("6d8384d1",n,!0,{sourceMap:!1,shadowMode:!1})},"344c":function(t,e,i){"use strict";i.d(e,"a",(function(){return J}));i("2aaa"),i("b4ca"),i("cdf1"),i("414c"),i("e2b0");var n=i("5e66"),s=(i("0508"),i("226c"),i("1699"),i("f74f"),i("2cd2")),o=i("ca57"),r=i("14d7"),a=["https://image-1251917893.file.myqcloud.com/igame/component/style-reset/reset.css"];function c(t){Object(r["loaderUnity"])("https://image-1251917893.file.myqcloud.com/igame/common/js/adapter.js",(function(){})),Object(o["loadStyles"])([].concat(a,Object(n["a"])(t)),"load-style")}function l(t){Object(o["loadCssCode"])(t,"load-css-code")}var u={CHANGE_IFRAME_STYLE_TYPE:"CHANGE_IFRAME_STYLE_TYPE",CHANGE_DEMO_PAGE_DIRECTION:"CHANGE_DEMO_PAGE_DIRECTION",CHANGE_EXTERNAL_STYLE_LINK:"CHANGE_EXTERNAL_STYLE_LINK",CHANGE_EXTERNAL_STYLE_CONTENT:"CHANGE_EXTERNAL_STYLE_CONTENT"},d={HOR:"HOR",VERT:"VERT"};Object(s["a"])(Object(s["a"])(Object(s["a"])({},u.CHANGE_IFRAME_STYLE_TYPE,h),u.CHANGE_EXTERNAL_STYLE_LINK,p),u.CHANGE_EXTERNAL_STYLE_CONTENT,m);function h(t){if(t){var e=t.name,i=t.value,n=document.getElementsByTagName("html")[0];n.style.setProperty(e,i)}}function p(t){var e=t.split(";").filter((function(t){return t.startsWith("http")})).map((function(t){return t.trim()}));c(e)}function m(t){l(t)}function f(t,e){window.parent.postMessage({type:t,data:e},"*")}var v=i("ad66"),w=i("8036"),g=i("8e5b"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.innerShow?i("PickerInner",{attrs:{data:t.getPropOrData("list"),current:t.getPropOrData("current"),title:t.getPropOrData("title"),"arrow-icon":t.getPropOrData("arrowIcon"),tip:t.getPropOrData("tip"),"virtual-list-threshold":t.getPropOrData("virtualListThreshold"),horizontal:t.getPropOrData("horizontal")},on:{onCancel:t.remove,onSelect:t.onClickSelect}}):t._e()},y=[],C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PressPopup",{class:t.tip?"press-picker__tip":"",attrs:{"close-icon":!t.arrowIcon,"show-back-arrow":t.arrowIcon,title:t.title,button:t.t("picker.confirm"),mode:"white",horizontal:t.horizontal,"width-number":54,"popup-class":"press-popup-picker"},on:{cancel:t.onCancel,confirm:t.onConfirm}},[t.tip?i("div",{staticClass:"press-picker--tip"},[t._v(" "+t._s(t.tip)+" ")]):t._e(),i("PressPickerView",{ref:"picker",attrs:{data:t.data,"has-tip":!!t.tip,current:t.current,horizontal:t.horizontal,"virtual-list-threshold":t.virtualListThreshold},on:{currentIndexChanged:t.onCurrentIndexChanged}})],1)},T=[],_=(i("948b"),i("ab32")),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"press-picker-view",class:[t.hasTip?"press-picker-view__tip":"",t.horizontal?"press-picker-view--hor":""],on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.mouseDown(e)},mouseup:function(e){return e.stopPropagation(),e.preventDefault(),t.mouseUp(e)},touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.handleStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.handleMove(e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.handleEnd(e)}}},[i("div",{ref:"dropListMask",staticClass:"press-picker-view--mask"}),i("div",{ref:"dropListIndicator",staticClass:"press-picker-view--indicator"}),i("div",{ref:"DropListContent",staticClass:"press-picker-view--content",style:t.transformStyle},[i("div",{style:t.hiddenUpPartStyle}),t._l(t.showingData,(function(e,n){return i("div",{key:n,staticClass:"press-picker-view--item",class:[e.uniqueKey==t.currentIndex?"press-picker-view--item__active":""],attrs:{"data-unique-key":e.uniqueKey},on:{mousedown:t.itemDown,mousemove:t.itemMove,mouseup:t.itemUp,touchstart:t.itemDown,touchmove:t.itemMove,touchend:t.itemUp}},[t._v(" "+t._s(e.label)+" ")])})),i("div",{style:t.hiddenBottomPartStyle})],2)])},E=[],k=i("69b0"),P=(i("b134"),i("4920"),i("dc16"));function x(t){return t.changedTouches&&t.changedTouches[0]?t.changedTouches[0]:t.touches&&t.touches[0]?t.touches[0]:t}var I={name:"PressPickerView",props:{data:{type:Array,default:function(){return[{label:"test"},{label:"test"},{label:"test"},{label:"test"},{label:"test"},{label:"test"}]},required:!0},current:{type:Object,default:null,required:!1},hasTip:{type:Boolean,default:!1,required:!1},virtualListThreshold:{type:Number,default:50},horizontal:{type:Boolean,default:!1}},options:{virtualHost:!0},emits:["currentIndexChanged"],data:function(){return{currentIndex:0,currentScroll:0,start:0,startScroll:0,move:0,itemHeight:56,downX:0,downY:0,upX:0,upY:0,lastMove:0,lastTime:0,speed:0,hasClick:!1,slideLimitNum:10,slideTimeThreshold:300}},computed:{upMissed:function(){var t=this.currentIndex,e=this.virtualListThreshold;return Math.max(0,t-e)},hiddenUpPartStyle:function(){var t=this.itemHeight,e=this.upMissed;return"height: ".concat(e*t,"px;")},hiddenBottomPartStyle:function(){var t=this.currentIndex,e=this.data,i=this.itemHeight,n=this.virtualListThreshold;return"height: ".concat((e.length-t-n)*i,"px;")},showingData:function(){var t=this.currentIndex,e=this.virtualListThreshold,i=this.upMissed;return this.data.slice(i,t+e).map((function(t,e){return Object(k["a"])(Object(k["a"])({},t),{},{uniqueKey:e+i})}))},transformStyle:function(){var t="transform: translate3d(0, ".concat(this.currentScroll,"px, 0);");return t},slideLimitDistance:function(){return this.slideLimitNum*this.itemHeight}},watch:{data:function(t){return this.updateCurrent(),t},current:function(t){return this.updateCurrent(),t},currentIndex:{handler:function(t){this.$emit("currentIndexChanged",t)},deep:!0}},created:function(){},mounted:function(){var t=this;Object(P["a"])(this,".press-picker-view--item__active").then((function(e){t.itemHeight=e.height,t.updateCurrent()})),this.updateCurrent(),document.addEventListener("mouseup",this.mouseUp)},beforeDestroy:function(){this.onBeforeDestroy()},beforeUnmount:function(){this.onBeforeDestroy()},methods:{onBeforeDestroy:function(){document.removeEventListener("mouseup",this.mouseUp)},mouseDown:function(t){document.addEventListener("mousemove",this.mouseMove),this.handleStart(t)},mouseMove:function(t){this.handleMove(t)},mouseUp:function(){document.removeEventListener("mousemove",this.mouseMove),this.handleEnd()},handleStart:function(t){var e=x(t);this.start=null===e||void 0===e?void 0:e.clientY,this.startScroll=this.currentScroll,this.lastMove=0,this.lastTime=(new Date).getTime()},handleMove:function(t){var e=x(t);this.move=(null===e||void 0===e?void 0:e.clientY)-this.start;var i=this.startScroll+this.move;i=Math.min(0,i),i=Math.max(-(this.data.length-1)*this.itemHeight,i),this.currentScroll=i;var n=Math.round(this.currentScroll/this.itemHeight);this.currentIndex=-n,this.time=(new Date).getTime(),this.time!==this.lastTime&&(this.speed=(this.move-this.lastMove)/(this.time-this.lastTime)),this.lastMove=this.move,this.lastTime=this.time},handleEnd:function(){if(this.hasClick)this.hasClick=!1;else{var t=0;(new Date).getTime()-this.lastTime<this.slideTimeThreshold&&(t=this.speed*this.slideTimeThreshold/2,t=Math.min(this.slideLimitDistance,t),t=Math.max(-this.slideLimitDistance,t));var e=this.currentScroll+t;e=Math.min(0,e),e=Math.max(-(this.data.length-1)*this.itemHeight,e);var i=Math.round(e/this.itemHeight);this.currentScroll=i*this.itemHeight,this.currentIndex=-i}},getCurrentItem:function(){return this.data[this.currentIndex]},updateCurrent:function(){var t=this;if(this.current){var e=this.data.find((function(e){return e.value==t.current.value}));this.currentIndex=this.data.indexOf(e),this.currentScroll=-this.currentIndex*this.itemHeight}},itemDown:function(t){var e=x(t);this.downX=null===e||void 0===e?void 0:e.clientX,this.downY=null===e||void 0===e?void 0:e.clientY,this.upX=null===e||void 0===e?void 0:e.clientX,this.upY=null===e||void 0===e?void 0:e.clientY},itemMove:function(t){var e=x(t);this.upX=null===e||void 0===e?void 0:e.clientX,this.upY=null===e||void 0===e?void 0:e.clientY},itemUp:function(t){var e=t.currentTarget.dataset.uniqueKey,i=this.twoPointDistance({x:this.downX,y:this.downY},{x:this.upX,y:this.upY});i<10&&(this.currentIndex=e,this.currentScroll=-this.currentIndex*this.itemHeight,this.hasClick=!0)},twoPointDistance:function(t,e){var i=Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));return i},getElementIndex:function(t){return parseInt(t.id,10)}}},O=I,D=(i("b361"),i("2777")),M=Object(D["a"])(O,S,E,!1,null,"6307150f",null),L=M.exports,N=i("db02"),A={components:{PressPopup:_["a"],PressPickerView:L},props:{title:{type:String,default:"",required:!1},arrowIcon:{type:Boolean,default:!1},tip:{type:String,default:"",required:!1},data:{type:Array,default:function(){return[]},required:!0},current:{type:Object,default:null,required:!1},virtualListThreshold:{type:Number,default:50},horizontal:{type:Boolean,default:!1}},options:{virtualHost:!0,styleIsolation:"shared"},emits:["onSelect","onCancel"],data:function(){return{currentIndex:-1}},mounted:function(){},methods:{t:N["b"],onCurrentIndexChanged:function(t){this.currentIndex=t},onConfirm:function(){var t,e;null!==(t=this.$refs)&&void 0!==t&&t.picker?this.$emit("onSelect",this.$refs.picker.getCurrentItem()):this.$emit("onSelect",null===(e=this.data)||void 0===e?void 0:e[this.currentIndex])},onCancel:function(){this.$emit("onCancel")}}},H=A,j=(i("618a"),Object(D["a"])(H,C,T,!1,null,"31716f5e",null)),R=j.exports,z=i("9466"),Y={arrowIcon:"showBackArrow",list:"selectList",current:"selectItem",confirm:"onClickConfirm",cancel:"onRemove"},U={arrowIcon:{type:Boolean,default:!1},title:{type:String,default:""},list:{type:Array,default:function(){return[]},required:!1},current:{type:Object,default:null,required:!1},tip:{type:String,default:"",required:!1},confirm:{type:Function,default:null,required:!1},cancel:{type:Function,default:null,required:!1},virtualListThreshold:{type:Number,default:50},horizontal:{type:Boolean,default:!1}},$=Object(z["d"])(U,Y),q=i("0b5a"),B={name:"PressPicker",options:{styleIsolation:"shared"},components:{PickerInner:R},mixins:[Object(q["a"])($,{showProp:!1,propsKeyMap:Y})],props:{},emits:["onClickConfirm","confirm","onRemove","cancel"],data:function(){return{}},mounted:function(){this.isFunctionMode||this.showDialog()},methods:{onClickSelect:function(t){var e=this;this.$emit("onClickConfirm",t),this.$emit("confirm",t),this.innerShow=!1,this.getPropOrData("confirm")&&this.getPropOrData("confirm")(t),this.promiseCallback("confirm",{item:t}),setTimeout((function(){e.destroy()}),100)},remove:function(){var t=this;this.$emit("onRemove"),this.$emit("cancel"),this.innerShow=!1,this.getPropOrData("cancel")&&this.getPropOrData("cancel")(),this.promiseCallback("cancel"),setTimeout((function(){t.destroy()}),100)},destroy:function(){var t,e,i;this.isFunctionMode||(null===this||void 0===this||null===(t=this.$destroy)||void 0===t||t.call(this),document.body.contains(this.$el)&&(null===(e=this.$el)||void 0===e||null===(e=e.parentElement)||void 0===e||null===(i=e.removeChild)||void 0===i||i.call(e,this.$el)))}}},G=B,X=Object(D["a"])(G,b,y,!1,null,"57ebeb1d",null),F=X.exports,K=i("9d1c"),V="default";function Q(t){var e=[{label:"默认",value:V}];return e.push.apply(e,Object(n["a"])(t.map((function(t){return{label:t,value:t}})))),e}function J(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pvp";return{components:{PressCell:g["a"],PressPicker:F,PressPopupCell:K["a"]},data:function(){return{customStyle:i,CUSTOM_STYLE_DEFAULT:V,styleList:Q(e),FUNCTIONAL_ID_MAP:w["d"],hideTipStyle:!1,useTipClass:!1}},computed:{styleMap:function(){var t=this.styleList;return t.reduce((function(t,e){return t[e.value]=e,t}),{})},curGameClass:function(){var e=this.customStyle,i="".concat(Object(v["b"])(t),"--type-");return"".concat(i).concat(e)}},watch:{customStyle:{handler:function(t){t.endsWith("vertical")?f(u.CHANGE_DEMO_PAGE_DIRECTION,d.VERT):(this.showHeader&&this.onToggleShowHeader(),f(u.CHANGE_DEMO_PAGE_DIRECTION,d.HOR))},immediate:!0}},methods:{onCustom:function(){var t=this,e=this.customStyle,i=!1;i=document.documentElement.clientHeight<420,Object(w["o"])({context:this,title:"样式类型",closeIcon:!0,horizontal:i,list:this.styleList,current:{value:e}}).then((function(e){var i=e.item;t.customStyle=i.value,t.show=!0,t.onGTip("设置成功")})).catch((function(){}))},onShowDialog:function(){this.show=!this.show}}}}},"618a":function(t,e,i){"use strict";i("e8d7")},ac87:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-wrap",class:t.curGameClass},[i("ActDemo",{attrs:{"custom-style-str":t.styleMap[t.customStyle].label,show:t.show,"hide-tip-style":t.hideTipStyle,"use-tip-class":t.useTipClass},on:{"update:show":function(e){t.show=e},"update:hideTipStyle":function(e){t.hideTipStyle=e},"update:hide-tip-style":function(e){t.hideTipStyle=e},"update:useTipClass":function(e){t.useTipClass=e},"update:use-tip-class":function(e){t.useTipClass=e},onCustom:t.onCustom}},[i("PressActQRCodeDialog",{attrs:{show:t.show,"hide-tip-style":t.hideTipStyle,"use-tip-class":t.useTipClass,url:t.url},on:{"update:show":function(e){t.show=e},"update:hideTipStyle":function(e){t.hideTipStyle=e},"update:hide-tip-style":function(e){t.hideTipStyle=e},"update:useTipClass":function(e){t.useTipClass=e},"update:use-tip-class":function(e){t.useTipClass=e}}})],1),i("PressPopupCell",{ref:t.FUNCTIONAL_ID_MAP.POPUP_CELL,attrs:{id:t.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"}}),i("PressPicker",{ref:t.FUNCTIONAL_ID_MAP.PICKER,attrs:{id:t.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"}})],1)},s=[],o=i("0f9f"),r=i("27f5"),a=i("344c"),c=["cfm-vertical","college-vertical","game-life-vertical","game-life","gp-vertical","gp","hlddz-vertical","hlddz","lolm-lunar","lolm-vertical","lolm","majiang-vertical","majiang","pvp-vertical","pvp","smoba-vertical","smoba","tlbb","x5m-vertical","zqnba"],l={components:{PressActQRCodeDialog:r["a"],ActDemo:o["a"]},mixins:[Object(a["a"])("PressActQRCodeDialog",c,"pvp-vertical")],data:function(){return{show:!0,url:"https://baidu.com"}},mounted:function(){},methods:{}},u=l,d=i("2777"),h=Object(d["a"])(u,n,s,!1,null,"1cb32cda",null);e["default"]=h.exports},b361:function(t,e,i){"use strict";i("2805")},c14f:function(t,e,i){var n=i("ee2b");e=n(!1),e.push([t.i,".press-picker-view[data-v-6307150f]{position:relative;width:100%;height:280px;overflow:hidden}.press-picker-view__tip__content[data-v-6307150f]{padding-top:60px}.press-picker-view--hor .press-picker-view--item[data-v-6307150f]{font-size:16px}.press-picker-view--hor .press-picker-view--item__active[data-v-6307150f]{font-size:20px}.press-picker-view--mask[data-v-6307150f]{position:absolute;left:0;top:0;height:100%;width:100%;z-index:3;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.95)),to(hsla(0,0%,100%,.2))),-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,.95)),to(hsla(0,0%,100%,.2)));background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.2)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.2));background-repeat:no-repeat;background-position:top,bottom;background-size:100% 112px;pointer-events:none}.press-picker-view--indicator[data-v-6307150f]{position:absolute;left:0;top:112px;width:100%;height:56px;z-index:3}.press-picker-view--content[data-v-6307150f]{position:absolute;left:0;top:0;width:100%;padding:112px 0;z-index:1;-webkit-transition:all .3s cubic-bezier(0,0,.2,1.15) 0s;transition:all .3s cubic-bezier(0,0,.2,1.15) 0s}.press-picker-view--item[data-v-6307150f]{height:56px;line-height:56px;font-size:.32rem;color:#596297;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-transition:all .15s ease;transition:all .15s ease}.press-picker-view--item__active[data-v-6307150f]{font-size:.4rem;color:#1181d7}",""]),t.exports=e},dc16:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return r}));i("5e66"),i("b4ca"),i("414c"),i("e8e7"),i("745e"),i("1699");var n=i("12ef"),s=i("5e91");function o(){if(Object(n["b"])())return 0;var t=Object(s["a"])(),e=t.statusBarHeight;return e}function r(t,e){return new Promise((function(i){var n=t.$el;if(n){var s=n.querySelector(e);s||i({});var o=s.getBoundingClientRect();i(o)}else uni.createSelectorQuery().in(t).select(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return i(t[0])}))}))}},e8d7:function(t,e,i){var n=i("fb8c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("c69b").default;s("9d957f76",n,!0,{sourceMap:!1,shadowMode:!1})},fb8c:function(t,e,i){var n=i("ee2b");e=n(!1),e.push([t.i,".press-picker--tip[data-v-31716f5e]{padding:.24rem .32rem;background:rgba(204,236,255,.2);font-size:.24rem;color:#5bbdfa}",""]),t.exports=e}}]);