(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7af4bd3e"],{5246:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Button",{class:t.buttonClass,style:t.buttonStyle,attrs:{id:t.id,"data-detail":t.dataset,"hover-class":["press-button--active",t.hoverClass],lang:t.lang,"form-type":t.formType,"open-type":t.disabled||t.loading||t.canIUseGetUserProfile&&"getUserInfo"===t.openType?"":t.openType,"business-id":t.businessId,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"app-parameter":t.appParameter,"aria-label":t.ariaLabel},on:{click:function(e){return e.stopPropagation(),t.onFakeClick(e)},getuserinfo:t.onGetUserInfo,contact:t.onContact,getphonenumber:t.onGetPhoneNumber,error:t.onError,launchapp:t.onLaunchApp,opensetting:t.onOpenSetting,chooseavatar:t.onChooseAvatar}},[t.isESportLoading?[r("PressLoading",{attrs:{"loading-scenes":"btn"}})]:t.loading?[r("press-loading-plus",{attrs:{"custom-class":t.loadingClass,size:t.loadingSize,type:t.loadingType,color:t.loadingColor}}),t.loadingText?r("div",{staticClass:"press-button__loading-text"},[t._v(" "+t._s(t.loadingText)+" ")]):t._e()]:[t.icon?r("press-icon-plus",{staticClass:"press-button__icon",attrs:{size:"1.2em",name:t.icon,"class-prefix":t.classPrefix,"custom-style":"line-height: inherit;"}}):t._e(),r("div",{staticClass:"press-button__text"},[t._t("default")],2)]],2)},o=[],n=r("5e66"),i=r("69b0"),s=(r("2aaa"),r("cdf1"),r("e8e7"),r("e6c9"),r("4710")),l=r("f42f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"press-loading",style:{background:t.loadingBg}},[r("img",{class:"btn"==t.loadingScenes?"press-loading__img--btn":"press-loading__img--page",attrs:{src:"https://image-1251917893.file.myqcloud.com/Esports/user/img/"+t.loadingScenes+"-loading.gif"}})])},p=[],b={name:"PressLoading",props:{loadingBg:{type:String,default:"",required:!1},loadingScenes:{type:String,default:"page",required:!1}},options:{virtualHost:!0},emits:[],data:function(){return{}},mounted:function(){},methods:{}},u=b,c=(r("da12"),r("2777")),g=Object(c["a"])(u,d,p,!1,null,"57b7d732",null),f=g.exports,h=r("4609"),v={props:{id:{type:String,default:""},lang:{type:String,default:""},businessId:{type:String,default:""},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:String,default:""},appParameter:{type:String,default:""},ariaLabel:{type:String,default:""},openType:{type:String,default:""},getUserProfileDesc:{type:String,default:""},hoverClass:{type:String,default:""},loadingClass:{type:String,default:""}},data:function(){return{canIUseGetUserProfile:Object(h["b"])()}},methods:{triggerEvent:function(){this.$emit.apply(this,arguments)},onGetUserInfo:function(t){this.triggerEvent("getuserinfo",t)},onContact:function(t){this.triggerEvent("contact",t)},onGetPhoneNumber:function(t){this.triggerEvent("getphonenumber",t)},onError:function(t){this.triggerEvent("error",t)},onLaunchApp:function(t){this.triggerEvent("launchapp",t)},onOpenSetting:function(t){this.triggerEvent("opensetting",t)},onChooseAvatar:function(t){this.triggerEvent("chooseAvatar",t)}}},m=r("12ef"),x=r("b67b"),w=r("b47f"),y=["normal","large","small","mini"];function k(t){var e={},r=t.size;return r&&("string"===r&&y.indexOf(r)<=-1?(e.height=r,e.width=r):"object"===Object(x["a"])(r)&&(r.height&&(e.height=r.height),r.width&&(e.width=r.width))),e}function S(t){var e=k(t);if(!t.color)return Object(w["a"])([e,t.customStyle]);var r=Object(i["a"])({color:t.plain?t.color:"#fff",background:t.plain?null:t.color},e);return-1!==t.color.indexOf("gradient")?r.border=0:r["border-color"]=t.color,Object(w["a"])([r,t.customStyle])}function _(t){return t.plain?t.color?t.color:"#c9c9c9":"default"===t.type?"#c9c9c9":"#fff"}var z=r("9466"),C={"e-sport-primary":["e-sport-primary"],"e-sport-primary-bg":["e-sport-primary","e-sport-bg"],"e-sport-primary-bg-lg":["e-sport-primary","e-sport-bg","e-sport-bg-lg"],"e-sport-primary-bg-xl":["e-sport-primary","e-sport-bg","e-sport-bg-xl"],"e-sport-secondary":["e-sport-secondary"],"e-sport-border":["e-sport-border"]},P=[v];Object(h["a"])()&&P.push("wx://form-field-button");var O={name:"PressButton",options:Object(i["a"])(Object(i["a"])({virtualHost:!0},z["b"]),{},{styleIsolation:"shared"}),components:{PressIconPlus:s["a"],PressLoadingPlus:l["a"],PressLoading:f},mixins:P,props:Object(i["a"])({formType:{type:String,default:""},icon:{type:String,default:""},classPrefix:{type:String,default:"press-icon-plus"},plain:Boolean,block:Boolean,round:Boolean,square:Boolean,loading:{type:Boolean,default:!1},hairline:Boolean,disabled:Boolean,loadingText:{type:String,default:""},customStyle:{type:String,default:""},loadingType:{type:String,default:"circular"},type:{type:String,default:"default"},dataset:{type:[Object,null],default:null},size:{type:[String,Object],default:"normal"},loadingSize:{type:String,default:"20px"},color:{type:String,default:""}},z["c"]),emits:["click","getuserinfo"],data:function(){return{baseStyle:""}},computed:{isESportLoading:function(){return this.loading&&C[this.type]},buttonClass:function(){var t=this.type,e=this.size,r=this.block,a=this.round,o=this.plain,i=this.square,s=this.loading,l=this.disabled,d=this.hairline,p=this.customClass,b=y.indexOf(e)>-1?e:"",u=[],c=t;if(C[t]&&(u=C[t],c=""),t.indexOf("-disabled")>-1){var g=t.replace("-disabled","");u=[].concat(Object(n["a"])(C[g]),["e-sport-disabled"])}return"".concat(p," ").concat(m["a"].bem2("button",[c,b].concat(Object(n["a"])(u),[{block:r,round:a,plain:o,square:i,loading:s,disabled:l,hairline:d,unclickable:l||s}]))," ").concat(d?"press-hairline--surround":"")},buttonStyle:function(){var t=this.plain,e=this.color,r=this.customStyle,a=this.size;return S({plain:t,color:e,customStyle:r,size:a})},loadingColor:function(){var t=this.type,e=this.color,r=this.plain;return _({type:t,color:e,plain:r})}},methods:{onFakeClick:function(t){var e=this.disabled,r=this.loading;e||r||this.onClick(t)},onClick:function(t){var e=this;this.$emit("click",t);var r=this.canIUseGetUserProfile,a=this.openType,o=this.getUserProfileDesc,n=this.lang;"getUserInfo"===a&&r&&uni.getUserProfile({desc:o||"  ",lang:n||"en",complete:function(t){e.$emit("getuserinfo",t)}})}}},E=O,j=(r("f427"),r("f34e"),Object(c["a"])(E,a,o,!1,null,"30378308",null));e["a"]=j.exports},"88e4":function(t,e,r){var a=r("ee2b");e=a(!1),e.push([t.i,'.press-button--e-sport-primary[data-v-30378308]{width:1.76rem;height:.72rem;font-size:16px;color:#fff;border-radius:4px;background-image:-webkit-gradient(linear,left top,left bottom,from(#336bcf),to(#339ce5));background-image:linear-gradient(180deg,#336bcf 0,#339ce5);border:none}.press-button--e-sport-primary[data-v-30378308]:not(.press-button--unclickable):active{background:#0f489f}.press-button--e-sport-secondary[data-v-30378308]{width:2rem;height:.72rem;font-size:16px;color:#09134e;border-radius:4px;background:#dfe2ea;border:none}.press-button--e-sport-secondary[data-v-30378308]:not(.press-button--unclickable):active{background:#dfe2ea}.press-button--e-sport-secondary[data-v-30378308]:before{background-color:transparent;border:none}.press-button--e-sport-border[data-v-30378308]{width:2rem;height:.72rem;font-size:16px;color:#1181d7;border-width:1px;border-style:solid;border-color:#1181d7;border-radius:4px;background:transparent}.press-button--e-sport-border[data-v-30378308]:not(.press-button--unclickable):active{background:#f5f6fa;border-color:#0f489f;color:#0f489f}.press-button--e-sport-border[data-v-30378308]:before{background-color:transparent;border:none}.press-button--e-sport-bg[data-v-30378308]{width:2.72rem;height:.72rem}.press-button--e-sport-bg[data-v-30378308]:before{bottom:0;left:0;width:1.26rem;top:unset;right:unset}.press-button--e-sport-bg[data-v-30378308]:after,.press-button--e-sport-bg[data-v-30378308]:before{position:absolute;content:"";height:.3rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/btn-bg-r.png) no-repeat 50%;background-size:contain;pointer-events:none;-webkit-transform:unset;transform:unset;opacity:1}.press-button--e-sport-bg[data-v-30378308]:after{top:.08rem;right:0;width:1.52rem;left:unset;bottom:unset}.press-button--e-sport-bg-lg[data-v-30378308]{width:5.34rem;height:.88rem}.press-button--e-sport-bg-lg[data-v-30378308]:before{width:1.86rem;height:.3rem;background-image:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/large-btn-bg-l.png);background-color:transparent;border:none}.press-button--e-sport-bg-lg[data-v-30378308]:after{top:.08rem;width:1.86rem;height:.3rem;background-image:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/large-btn-bg-r.png)}.press-button--e-sport-bg-xl[data-v-30378308]{width:6rem;height:.88rem}.press-button--e-sport-bg-xl[data-v-30378308]:before{width:2.1rem;height:.84rem;background-image:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/agent-btn-bg-l.png);background-color:transparent;border:none}.press-button--e-sport-bg-xl[data-v-30378308]:after{top:0;width:2.1rem;height:.84rem;background-image:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/agent-btn-bg-r.png);background-color:transparent;border:none}.press-button--e-sport-disabled[data-v-30378308]{opacity:var(--button-disabled-opacity,.4)}',""]),t.exports=e},8990:function(t,e,r){var a=r("b535");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r("c69b").default;o("2bd6fc76",a,!0,{sourceMap:!1,shadowMode:!1})},"9ff1":function(t,e,r){var a=r("88e4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r("c69b").default;o("9d786438",a,!0,{sourceMap:!1,shadowMode:!1})},b535:function(t,e,r){var a=r("ee2b");e=a(!1),e.push([t.i,'.van-ellipsis[data-v-30378308]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-30378308]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-30378308],.van-multi-ellipsis--l3[data-v-30378308]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-30378308]{-webkit-line-clamp:3}.van-clearfix[data-v-30378308]:after{clear:both;content:"";display:table}.van-hairline[data-v-30378308],.van-hairline--bottom[data-v-30378308],.van-hairline--left[data-v-30378308],.van-hairline--right[data-v-30378308],.van-hairline--surround[data-v-30378308],.van-hairline--top[data-v-30378308],.van-hairline--top-bottom[data-v-30378308]{position:relative}.van-hairline--bottom[data-v-30378308]:after,.van-hairline--left[data-v-30378308]:after,.van-hairline--right[data-v-30378308]:after,.van-hairline--surround[data-v-30378308]:after,.van-hairline--top-bottom[data-v-30378308]:after,.van-hairline--top[data-v-30378308]:after,.van-hairline[data-v-30378308]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-30378308]:after{border-top-width:1px}.van-hairline--left[data-v-30378308]:after{border-left-width:1px}.van-hairline--right[data-v-30378308]:after{border-right-width:1px}.van-hairline--bottom[data-v-30378308]:after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-30378308]:after{border-width:1px 0}.van-hairline--surround[data-v-30378308]:after{border-width:1px}.press-ellipsis[data-v-30378308]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-30378308]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-30378308],.press-multi-ellipsis--l3[data-v-30378308]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-30378308]{-webkit-line-clamp:3}.press-clearfix[data-v-30378308]:after{clear:both;content:"";display:table}.press-hairline[data-v-30378308],.press-hairline--bottom[data-v-30378308],.press-hairline--left[data-v-30378308],.press-hairline--right[data-v-30378308],.press-hairline--surround[data-v-30378308],.press-hairline--top[data-v-30378308],.press-hairline--top-bottom[data-v-30378308]{position:relative}.press-hairline--bottom[data-v-30378308]:after,.press-hairline--left[data-v-30378308]:after,.press-hairline--right[data-v-30378308]:after,.press-hairline--surround[data-v-30378308]:after,.press-hairline--top-bottom[data-v-30378308]:after,.press-hairline--top[data-v-30378308]:after,.press-hairline[data-v-30378308]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-30378308]:after{border-top-width:1px}.press-hairline--left[data-v-30378308]:after{border-left-width:1px}.press-hairline--right[data-v-30378308]:after{border-right-width:1px}.press-hairline--bottom[data-v-30378308]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-30378308]:after{border-width:1px 0}.press-hairline--surround[data-v-30378308]:after{border-width:1px}.press-button[data-v-30378308]{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;text-align:center;vertical-align:middle;-webkit-appearance:none;-webkit-text-size-adjust:100%;height:var(--button-default-height,44px);line-height:var(--button-line-height,20px);font-size:var(--button-default-font-size,16px);-webkit-transition:opacity .2s;transition:opacity .2s;border-radius:var(--button-border-radius,4px)}.press-button[data-v-30378308]:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:" ";background-color:#000;border-color:#000}.press-button[data-v-30378308]:after{border-width:0}.press-button--active[data-v-30378308]:not(.press-button--unclickable):before,.press-button[data-v-30378308]:active:not(.press-button--unclickable):before{opacity:.15}.press-button--default[data-v-30378308]{color:var(--button-default-color,#323233);background:var(--button-default-background-color,#fff);border:var(--button-border-width,1px) solid var(--button-default-border-color,#ebedf0)}.press-button--primary[data-v-30378308]{color:var(--button-primary-color,#fff);background:var(--button-primary-background-color,#07c160);border:var(--button-border-width,1px) solid var(--button-primary-border-color,#07c160)}.press-button--info[data-v-30378308]{color:var(--button-info-color,#fff);background:var(--button-info-background-color,#1989fa);border:var(--button-border-width,1px) solid var(--button-info-border-color,#1989fa)}.press-button--danger[data-v-30378308]{color:var(--button-danger-color,#fff);background:var(--button-danger-background-color,#ee0a24);border:var(--button-border-width,1px) solid var(--button-danger-border-color,#ee0a24)}.press-button--warning[data-v-30378308]{color:var(--button-warning-color,#fff);background:var(--button-warning-background-color,#ff976a);border:var(--button-border-width,1px) solid var(--button-warning-border-color,#ff976a)}.press-button--plain[data-v-30378308]{background:var(--button-plain-background-color,#fff)}.press-button--plain.press-button--primary[data-v-30378308]{color:var(--button-primary-background-color,#07c160)}.press-button--plain.press-button--info[data-v-30378308]{color:var(--button-info-background-color,#1989fa)}.press-button--plain.press-button--danger[data-v-30378308]{color:var(--button-danger-background-color,#ee0a24)}.press-button--plain.press-button--warning[data-v-30378308]{color:var(--button-warning-background-color,#ff976a)}.press-button--large[data-v-30378308]{width:100%;height:var(--button-large-height,50px)}.press-button--normal[data-v-30378308]{padding:0 6px;font-size:var(--button-normal-font-size,16px)}.press-button--small[data-v-30378308]{min-width:var(--button-small-min-width,60px);height:var(--button-small-height,30px);padding:0 var(--padding-xs,8px);font-size:var(--button-small-font-size,12px)}.press-button--mini[data-v-30378308]{display:inline-block;min-width:var(--button-mini-min-width,50px);height:var(--button-mini-height,22px);font-size:var(--button-mini-font-size,10px)}.press-button--mini+.press-button--mini[data-v-30378308]{margin-left:5px}.press-button--block[data-v-30378308]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.press-button--round[data-v-30378308]{border-radius:var(--button-round-border-radius,999px)}.press-button--square[data-v-30378308]{border-radius:0}.press-button--disabled[data-v-30378308]{opacity:var(--button-disabled-opacity,.4)}.press-button__text[data-v-30378308]{display:inline;white-space:nowrap;position:relative;z-index:1}.press-button__icon+.press-button__text[data-v-30378308]:not(:empty),.press-button__loading-text[data-v-30378308]{margin-left:4px}.press-button__icon[data-v-30378308]{min-width:1em;line-height:inherit!important;vertical-align:top}.press-button--hairline[data-v-30378308]{padding-top:1px;border-width:0}.press-button--hairline[data-v-30378308]:after{border-color:inherit;border-width:1px;border-radius:calc(var(--button-border-radius, 4px)*2)}.press-button--hairline.press-button--round[data-v-30378308]:after{border-radius:var(--button-round-border-radius,999px)}.press-button--hairline.press-button--square[data-v-30378308]:after{border-radius:0}.press-button--hairline.press-hairline--surround[data-v-30378308]:after{border-width:1px}',""]),t.exports=e},cb87:function(t,e,r){var a=r("cce4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r("c69b").default;o("0765cba4",a,!0,{sourceMap:!1,shadowMode:!1})},cce4:function(t,e,r){var a=r("ee2b");e=a(!1),e.push([t.i,".press-loading[data-v-57b7d732]{position:absolute;left:0;right:0;bottom:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:999}.press-loading__img--btn[data-v-57b7d732]{width:1.2rem;height:.45rem}.press-loading__img--page[data-v-57b7d732]{width:1.06rem;height:.58rem}",""]),t.exports=e},da12:function(t,e,r){"use strict";r("cb87")},f34e:function(t,e,r){"use strict";r("9ff1")},f427:function(t,e,r){"use strict";r("8990")}}]);