(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90e1797a"],{"0b18":function(t,e,a){var i=a("ee2b");e=i(!1),e.push([t.i,".press-count-to__number[data-v-086547d0]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;text-align:center}",""]),t.exports=e},"0fd8":function(t,e,a){"use strict";var i=a("64a0"),s=a("5d34"),n=a("84d3");i({target:"String",proto:!0,forced:n("bold")},{bold:function(){return s(this,"b","","")}})},"17a5":function(t,e,a){"use strict";var i=a("64a0"),s=a("b15a"),n=a("8d5f"),r=a("c3d1"),o=a("78dd"),l=a("5b46"),u=RangeError,c=String,h=Math.floor,d=s(o),m=s("".slice),p=s(1..toFixed),f=function(t,e,a){return 0===e?a:e%2===1?f(t,e-1,a*t):f(t*t,e/2,a)},b=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},V=function(t,e,a){var i=-1,s=a;while(++i<6)s+=e*t[i],t[i]=s%1e7,s=h(s/1e7)},g=function(t,e){var a=6,i=0;while(--a>=0)i+=t[a],t[a]=h(i/e),i=i%e*1e7},y=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var i=c(t[e]);a=""===a?i:a+d("0",7-i.length)+i}return a},v=l((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!l((function(){p({})}));i({target:"Number",proto:!0,forced:v},{toFixed:function(t){var e,a,i,s,o=r(this),l=n(t),h=[0,0,0,0,0,0],p="",v="0";if(l<0||l>20)throw new u("Incorrect fraction digits");if(o!==o)return"NaN";if(o<=-1e21||o>=1e21)return c(o);if(o<0&&(p="-",o=-o),o>1e-21)if(e=b(o*f(2,69,1))-69,a=e<0?o*f(2,-e,1):o/f(2,e,1),a*=4503599627370496,e=52-e,e>0){V(h,0,a),i=l;while(i>=7)V(h,1e7,0),i-=7;V(h,f(10,i,1),0),i=e-1;while(i>=23)g(h,1<<23),i-=23;g(h,1<<i),V(h,1,1),g(h,2),v=y(h)}else V(h,0,a),V(h,1<<-e,0),v=y(h)+d("0",l);return l>0?(s=v.length,v=p+(s<=l?"0."+d("0",l-s)+v:m(v,0,s-l)+"."+m(v,s-l))):v=p+v,v}})},"5d34":function(t,e,a){"use strict";var i=a("b15a"),s=a("ed5c"),n=a("88f1"),r=/"/g,o=i("".replace);t.exports=function(t,e,a,i){var l=n(s(t)),u="<"+e;return""!==a&&(u+=" "+a+'="'+o(n(i),r,"&quot;")+'"'),u+">"+l+"</"+e+">"}},"78dd":function(t,e,a){"use strict";var i=a("8d5f"),s=a("88f1"),n=a("ed5c"),r=RangeError;t.exports=function(t){var e=s(n(this)),a="",o=i(t);if(o<0||o===1/0)throw new r("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},"84d3":function(t,e,a){"use strict";var i=a("5b46");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},e96c:function(t,e,a){"use strict";a("ecf5")},ecf5:function(t,e,a){var i=a("0b18");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("c69b").default;s("c3b74efc",i,!0,{sourceMap:!1,shadowMode:!1})},f6b0:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:t.t("basicUsage")}},[a("PressCountTo",{attrs:{"start-value":30,"end-value":500},on:{end:t.onEnd}})],1),a("demo-block",{attrs:{title:t.t("customStyle")}},[a("PressCountTo",{attrs:{"end-value":3e3,color:"#909399","font-size":30,bold:!0}})],1),a("demo-block",{attrs:{title:t.t("duration")}},[a("PressCountTo",{attrs:{"start-value":30,"end-value":500,duration:5e3},on:{end:t.onEnd}})],1),a("demo-block",{attrs:{title:t.t("animation")}},[a("PressCountTo",{attrs:{"start-value":30,"end-value":500,"use-easing":!1}})],1),a("demo-block",{attrs:{title:t.t("countdown")}},[a("PressCountTo",{attrs:{"start-value":500,"end-value":0}})],1),a("demo-block",{attrs:{title:t.t("decimals")}},[a("PressCountTo",{attrs:{"start-value":30,"end-value":500,decimals:2,decimal:1}})],1),a("demo-block",{attrs:{title:t.t("separator")}},[a("PressCountTo",{attrs:{"end-value":5e3,separator:","}})],1),a("demo-block",{attrs:{title:t.t("slot")}},[a("PressCountTo",{attrs:{"end-value":5e3,"use-slot":!0},on:{change:t.onChange}},[a("span",{staticStyle:{color:"red"}},[t._v(t._s(t.slotValue))])])],1),a("demo-block",{attrs:{title:t.t("control")}},[a("PressCountTo",{ref:"pressCountToRef",attrs:{"end-value":5e3,autoplay:t.autoplay},on:{end:t.onEnd}})],1),a("press-grid",{attrs:{clickable:"","column-num":3}},[a("press-grid-item",{attrs:{text:t.t("start"),icon:"play-circle-o"},on:{click:t.start}}),a("press-grid-item",{attrs:{text:t.t("pause"),icon:"pause-circle-o"},on:{click:t.pause}}),a("press-grid-item",{attrs:{text:t.t("resume"),icon:"replay"},on:{click:t.resume}})],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"press-count-to"},[t.useSlot?t._t("default"):a("span",{staticClass:"press-count-to__number",style:t.countToStyle},[t._v(" "+t._s(t.displayValue)+" ")])],2)},r=[],o=(a("2aaa"),a("948b"),a("17a5"),a("e8e7"),a("745e"),a("e6c9"),a("0fd8"),{props:{startValue:{type:[String,Number],default:0},endValue:{type:[String,Number],default:0},duration:{type:[String,Number],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[String,Number],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[String,Number],default:"."},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:22},bold:{type:Boolean,default:!1},separator:{type:String,default:","},customStyle:{type:String,default:""},useSlot:{type:Boolean,default:!1}}}),l=a("c5eb"),u=a("4208e"),c={name:"PressCountTo",options:{virtualHost:!0,styleIsolation:"shared"},mixins:[o],emits:["change","end"],data:function(){return{localStartVal:this.startValue,displayValue:this.formatNumber(this.startValue),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countToStyle:function(){var t=this.customStyle,e=this.fontSize,a=this.bold,i=this.color;return"".concat(t," ").concat(Object(u["a"])({fontSize:Object(l["a"])(e),fontWeight:a?"bold":"normal",color:i}),"}")},countDown:function(){return this.startValue>this.endValue}},watch:{startValue:function(){this.autoplay&&this.start()},endValue:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{addUnit:l["a"],easingFn:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e},requestAnimationFrame:function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-this.lastTime)),i=setTimeout((function(){t(e+a)}),a);return this.lastTime=e+a,i},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startValue,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.remaining&&(this.startTime=0,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count))},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startValue),this.$emit("change",this.displayValue)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endValue,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endValue-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endValue)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endValue-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endValue?this.endValue:this.printVal:this.printVal=this.printVal>this.endValue?this.endValue:this.printVal,this.displayValue=this.formatNumber(this.printVal)||0,this.$emit("change",this.displayValue),e<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(s.test(a))a=a.replace(s,"$1".concat(this.separator,"$2"));return a+i},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}},h=c,d=(a("e96c"),a("2777")),m=Object(d["a"])(h,n,r,!1,null,"086547d0",null),p=m.exports,f=a("9f10"),b=a("8082"),V={i18n:{"zh-CN":{customStyle:"自定义样式",decimals:"小数位",separator:"千分位分隔符",duration:"自定义持续时间",animation:"禁用缓慢动画",control:"自定义控制",resume:"继续",pause:"暂停",start:"开始",countdown:"倒计时",slot:"插槽"},"en-US":{customStyle:"Custom Style",decimals:"Decimal",separator:"Separator",duration:"Duration",animation:"Animation",control:"Control",resume:"Resume",pause:"Pause",start:"Start",countdown:"Countdown",slot:"Slot"}},components:{PressCountTo:p,PressGrid:f["a"],PressGridItem:b["a"]},data:function(){return{customStyle:"margin-right: 16px;",autoplay:!1,slotValue:""}},methods:{start:function(){this.$refs.pressCountToRef.start()},pause:function(){this.$refs.pressCountToRef.stop()},resume:function(){this.$refs.pressCountToRef.resume()},onEnd:function(){this.onGTip("[end]")},onChange:function(t){this.slotValue=t}}},g=V,y=Object(d["a"])(g,i,s,!1,null,"49b30bee",null);e["default"]=y.exports}}]);