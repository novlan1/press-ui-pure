(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631a061e"],{"1cb3":function(e,t,n){var o=n("7d68");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("c69b").default;a("689a1d98",o,!0,{sourceMap:!1,shadowMode:!1})},"252e":function(e,t,n){var o=n("73df");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("c69b").default;a("42360a16",o,!0,{sourceMap:!1,shadowMode:!1})},"291e":function(e,t,n){"use strict";var o=n("4088"),a=n("61db"),i=n("b15a"),r=n("cc40"),c=n("960e"),s=n("9d48"),u=n("c5ba"),l=n("e0a5").f,d=n("7487"),p=n("8403"),f=n("88f1"),h=n("7abc"),b=n("6610"),g=n("4ec8"),m=n("1b66"),v=n("5b46"),x=n("35e4"),y=n("f522").enforce,_=n("6379"),k=n("0529"),S=n("b387"),w=n("5ecb"),C=k("match"),I=a.RegExp,L=I.prototype,R=a.SyntaxError,E=i(L.exec),M=i("".charAt),j=i("".replace),P=i("".indexOf),F=i("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,N=/a/g,z=/a/g,D=new I(N)!==N,O=b.MISSED_STICKY,B=b.UNSUPPORTED_Y,$=o&&(!D||O||S||w||v((function(){return z[C]=!1,I(N)!==N||I(z)===z||"/a/i"!==String(I(N,"i"))}))),H=function(e){for(var t,n=e.length,o=0,a="",i=!1;o<=n;o++)t=M(e,o),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),a+=t):a+="[\\s\\S]":a+=t+M(e,++o);return a},T=function(e){for(var t,n=e.length,o=0,a="",i=[],r=u(null),c=!1,s=!1,l=0,d="";o<=n;o++){if(t=M(e,o),"\\"===t)t+=M(e,++o);else if("]"===t)c=!1;else if(!c)switch(!0){case"["===t:c=!0;break;case"("===t:E(A,F(e,o+1))&&(o+=2,s=!0),a+=t,l++;continue;case">"===t&&s:if(""===d||x(r,d))throw new R("Invalid capture group name");r[d]=!0,i[i.length]=[d,l],s=!1,d="";continue}s?d+=t:a+=t}return[a,i]};if(r("RegExp",$)){for(var U=function(e,t){var n,o,a,i,r,u,l=d(L,this),b=p(e),g=void 0===t,m=[],v=e;if(!l&&b&&g&&e.constructor===U)return e;if((b||d(L,e))&&(e=e.source,g&&(t=h(v))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),v=e,S&&"dotAll"in N&&(o=!!t&&P(t,"s")>-1,o&&(t=j(t,/s/g,""))),n=t,O&&"sticky"in N&&(a=!!t&&P(t,"y")>-1,a&&B&&(t=j(t,/y/g,""))),w&&(i=T(e),e=i[0],m=i[1]),r=c(I(e,t),l?this:L,U),(o||a||m.length)&&(u=y(r),o&&(u.dotAll=!0,u.raw=U(H(e),n)),a&&(u.sticky=!0),m.length&&(u.groups=m)),e!==v)try{s(r,"source",""===v?"(?:)":v)}catch(x){}return r},V=l(I),K=0;V.length>K;)g(U,I,V[K++]);L.constructor=U,U.prototype=L,m(a,"RegExp",U,{constructor:!0})}_("RegExp")},"3b0a":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return c}));n("b67b"),n("f1f0"),n("414c"),n("291e"),n("5654"),n("e8e7"),n("5fb0"),n("745e"),n("6905"),n("e6c9");function o(e){return/^[+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(e)}function a(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e){return"function"===typeof e}function r(e){return a(e)&&i(e.then)&&i(e.catch)}function c(e){var t=e.split("?")[0],n=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;return n.test(t)}function s(e){var t=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;return t.test(e)}},"53cf":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:e.t("basicUsage")}},[n("PressCodeInput",{on:{change:e.change,finish:e.finish},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("demo-block",{attrs:{title:e.t("mode")}},[n("PressCodeInput",{attrs:{mode:"line"},model:{value:e.valueMode,callback:function(t){e.valueMode=t},expression:"valueMode"}})],1),n("demo-block",{attrs:{title:e.t("maxLength")}},[n("PressCodeInput",{attrs:{"max-length":4},model:{value:e.valueMaxLength,callback:function(t){e.valueMaxLength=t},expression:"valueMaxLength"}})],1),n("demo-block",{attrs:{title:e.t("space")}},[n("PressCodeInput",{attrs:{space:0,"max-length":4},model:{value:e.valueSpace,callback:function(t){e.valueSpace=t},expression:"valueSpace"}})],1),n("demo-block",{attrs:{title:e.t("hairline")}},[n("PressCodeInput",{attrs:{hairline:"","max-length":4},model:{value:e.valueHairline,callback:function(t){e.valueHairline=t},expression:"valueHairline"}})],1),n("demo-block",{attrs:{title:e.t("style")}},[n("PressCodeInput",{attrs:{color:"#f56c6c","border-color":"#f56c6c","max-length":4},model:{value:e.valueStyle,callback:function(t){e.valueStyle=t},expression:"valueStyle"}})],1),n("demo-block",{attrs:{title:e.t("dot")}},[n("PressCodeInput",{attrs:{dot:"","max-length":4},model:{value:e.valueDot,callback:function(t){e.valueDot=t},expression:"valueDot"}})],1),n("demo-block",{attrs:{title:e.t("autoFocus")}},[n("PressCodeInput",{attrs:{focus:"","max-length":4},model:{value:e.valueFocus,callback:function(t){e.valueFocus=t},expression:"valueFocus"}})],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-code-input"},[e._l(e.codeLength,(function(t,o){return n("div",{key:o,staticClass:"press-code-input__item",style:[e.itemStyle(o)]},[e.dot&&e.codeArray.length>o?n("div",{staticClass:"press-code-input__item__dot"}):n("span",{style:{fontSize:e.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color}},[e._v(" "+e._s(e.codeArray[o]||"")+" ")]),"line"===e.mode?n("div",{staticClass:"press-code-input__item__line",style:[e.lineStyle]}):e._e(),e.isFocus&&e.codeArray.length===o?n("div",{staticClass:"press-code-input__item__cursor",style:{backgroundColor:e.color}}):e._e()])})),n("input",{staticClass:"press-code-input__input",style:{height:e.addUnit(e.size)},attrs:{disabled:e.disabledKeyboard,type:"number",focus:e.focus,maxlength:e.maxLength,adjustPosition:e.adjustPosition},domProps:{value:e.inputValue},on:{input:e.inputHandler,focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1}}})],2)},r=[],c=(n("2aaa"),n("948b"),n("e8e7"),n("e6c9"),n("7899")),s=(n("745e"),n("3b0a")),u={props:{adjustPosition:{type:Boolean,default:!0},maxLength:{type:[String,Number],default:6},dot:{type:Boolean,default:!1},mode:{type:String,default:"box"},hairline:{type:Boolean,default:!1},space:{type:[String,Number],default:10},value:{type:[String,Number],default:""},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:18},size:{type:[String,Number],default:35},disabledKeyboard:{type:Boolean,default:!1},borderColor:{type:String,default:"#c9cacc"},disabledDot:{type:Boolean,default:!0}}};function l(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s["c"]("".concat(e))?t?"".concat(e,"px"):Number(e):/(rpx|upx)$/.test("".concat(e))?t?"".concat(uni.upx2px(parseInt("".concat(e))),"px"):Number(uni.upx2px(parseInt("".concat(e)))):t?"".concat(parseInt("".concat(e)),"px"):parseInt("".concat(e))}var d={name:"PressCodeInput",mixins:[u],emits:["change","finish","input"],data:function(){return{inputValue:"",isFocus:this.focus}},computed:{codeLength:function(){var e=new Array(Number(this.maxLength));return e},itemStyle:function(){var e=this;return function(t){var n={width:Object(c["a"])(e.size),height:Object(c["a"])(e.size)};return"box"===e.mode&&(n.border="".concat(e.hairline?.5:1,"px solid ").concat(e.borderColor),0===l(e.space)&&(0===t&&(n.borderTopLeftRadius="3px",n.borderBottomLeftRadius="3px"),t===e.codeLength.length-1&&(n.borderTopRightRadius="3px",n.borderBottomRightRadius="3px"),t!==e.codeLength.length-1&&(n.borderRight="none"))),t!==e.codeLength.length-1?n.marginRight=Object(c["a"])(e.space):n.marginRight=0,n}},codeArray:function(){return String(this.inputValue).split("")},lineStyle:function(){var e={};return e.height=this.hairline?"2px":"4px",e.width=Object(c["a"])(this.size),e.backgroundColor=this.borderColor,e}},watch:{value:{immediate:!0,handler:function(e){this.inputValue=String(e).substring(0,this.maxLength)||""}}},methods:{addUnit:c["a"],inputHandler:function(e){var t=this,n=e.detail||e.target,o=n.value;this.inputValue=o,this.disabledDot&&this.$nextTick((function(){t.inputValue=o.replace(".","")})),this.$emit("change",o),this.$emit("input",o),String(o).length>=Number(this.maxLength)&&this.$emit("finish",o)}}},p=d,f=(n("c74b"),n("2777")),h=Object(f["a"])(p,i,r,!1,null,"2226047c",null),b=h.exports,g={i18n:{"zh-CN":{mode:"模式",maxLength:"自定义长度",space:"自定义间距",hairline:"细边框",style:"自定义样式",dot:"隐藏输入内容",autoFocus:"自动获取焦点"},"en-US":{mode:"Mode",maxLength:"Max Length",space:"Space",hairline:"Hairline",style:"Custom Style",dot:"Dot",autoFocus:"Auto Focus"}},components:{PressCodeInput:b},data:function(){return{value:"",valueMode:"",valueSpace:"",valueMaxLength:"",valueHairline:"",valueHairline2:"",valueStyle:"",valueDot:"",valueFocus:""}},methods:{change:function(e){console.log("内容改变，当前值为：".concat(e))},finish:function(e){console.log("输入结束，当前值为：".concat(e))}}},m=g,v=(n("cdf6"),Object(f["a"])(m,o,a,!1,null,"5f23cfa3",null));t["default"]=v.exports},5654:function(e,t,n){"use strict";var o=n("4088"),a=n("b387"),i=n("0d4b"),r=n("192c"),c=n("f522").get,s=RegExp.prototype,u=TypeError;o&&a&&r(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===i(this))return!!c(this).dotAll;throw new u("Incompatible receiver, RegExp required")}}})},"5fb0":function(e,t,n){"use strict";var o=n("4088"),a=n("6610").MISSED_STICKY,i=n("0d4b"),r=n("192c"),c=n("f522").get,s=RegExp.prototype,u=TypeError;o&&a&&r(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===i(this))return!!c(this).sticky;throw new u("Incompatible receiver, RegExp required")}}})},"73df":function(e,t,n){var o=n("ee2b");t=o(!1),t.push([e.i,".press-code-input[data-v-2226047c]{overflow:hidden}.press-code-input[data-v-2226047c],.press-code-input__item[data-v-2226047c]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.press-code-input__item[data-v-2226047c]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.press-code-input__item__text[data-v-2226047c]{font-size:15px;color:#606266}.press-code-input__item__dot[data-v-2226047c]{width:7px;height:7px;border-radius:100px;background-color:#606266}.press-code-input__item__line[data-v-2226047c]{position:absolute;bottom:0;height:4px;border-radius:100px;width:40px;background-color:#606266}.press-code-input__item__cursor[data-v-2226047c]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:1px;height:40%;-webkit-animation:press-cursor-flicker-data-v-2226047c 1s infinite;animation:press-cursor-flicker-data-v-2226047c 1s infinite}.press-code-input__input[data-v-2226047c]{position:absolute;left:-750px;width:1500px;top:0;background-color:transparent;text-align:left;border:0;outline:none}@-webkit-keyframes press-cursor-flicker-data-v-2226047c{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes press-cursor-flicker-data-v-2226047c{0%{opacity:0}50%{opacity:1}to{opacity:0}}",""]),e.exports=t},7899:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("e8e7"),n("745e");var o=/^-?\d+(\.\d+)?$/;function a(e){if(null!=e)return o.test("".concat(e))?"".concat(e,"px"):e}},"7d68":function(e,t,n){var o=n("ee2b");t=o(!1),t.push([e.i,".demo-wrap[data-v-5f23cfa3]{padding-bottom:30px}",""]),e.exports=t},c74b:function(e,t,n){"use strict";n("252e")},cdf6:function(e,t,n){"use strict";n("1cb3")}}]);