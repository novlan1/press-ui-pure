(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab00e506"],{"18c9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{time:t.time}})],1),i("demo-block",{attrs:{title:t.t("customFormat"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{time:t.time,format:t.t("formatWithDay")}})],1),i("demo-block",{attrs:{title:t.t("millisecond"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{time:t.time,millisecond:"",format:"HH:mm:ss:SSS"}})],1),i("demo-block",{attrs:{title:t.t("customStyle"),"section-style":t.sectionStyle}},[i("press-count-down",{attrs:{"use-slot":"",time:t.time},on:{change:t.onChange},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.timeData;return[i("span",{staticClass:"item"},[t._v(" "+t._s(n.hours)+" ")]),i("span",{staticClass:"item"},[t._v(" "+t._s(n.minutes)+" ")]),i("span",{staticClass:"item"},[t._v(" "+t._s(n.seconds)+" ")])]}}])})],1),i("demo-block",{attrs:{title:t.t("manualControl"),"section-style":t.sectionStyle}},[i("press-count-down",{ref:"controlCountDown",attrs:{id:"controlCountDown",millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS"},on:{finish:t.finished}})],1),i("press-grid",{attrs:{clickable:"","column-num":3}},[i("press-grid-item",{attrs:{text:t.t("start"),icon:"play-circle-o"},on:{click:t.start}}),i("press-grid-item",{attrs:{text:t.t("pause"),icon:"pause-circle-o"},on:{click:t.pause}}),i("press-grid-item",{attrs:{text:t.t("reset"),icon:"replay"},on:{click:t.reset}})],1)],1)},o=[],a=i("49d7"),r=i("6dcb"),s=i("7a28"),l=i("fc58"),c=i("1ee1"),u={i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:a["a"],PressGrid:r["a"],PressGridItem:s["a"]},data:function(){return{time:108e6,sectionStyle:"margin: 0 12px 20px;"}},methods:{onChange:function(){},start:function(){var t=Object(l["a"])(this,"#controlCountDown");Object(c["a"])(t,null,"start")},pause:function(){var t=Object(l["a"])(this,"#controlCountDown");Object(c["a"])(t,null,"pause")},reset:function(){var t=Object(l["a"])(this,"#controlCountDown");Object(c["a"])(t,null,"reset")},finished:function(){}}},d=u,f=(i("2f46"),i("2777")),m=Object(f["a"])(d,n,o,!1,null,"2652d426",null);e["default"]=m.exports},"1ee1":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));i("2aaa");function n(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"setData";if(t){var o=(null===(i=t.$vm)||void 0===i?void 0:i[n])||t[n];return"function"===typeof o?o(e):void 0}}function o(t){for(var e=t.$vm||t,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];e.$set.apply(e,[e].concat(n))}},"2f46":function(t,e,i){"use strict";i("8ffa")},"3d70":function(t,e,i){var n=i("ee2b");e=n(!1),e.push([t.i,'.press-ellipsis[data-v-797e3e48]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-797e3e48]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-797e3e48],.press-multi-ellipsis--l3[data-v-797e3e48]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-797e3e48]{-webkit-line-clamp:3}.press-clearfix[data-v-797e3e48]:after{clear:both;content:"";display:table}.press-hairline[data-v-797e3e48],.press-hairline--bottom[data-v-797e3e48],.press-hairline--left[data-v-797e3e48],.press-hairline--right[data-v-797e3e48],.press-hairline--surround[data-v-797e3e48],.press-hairline--top[data-v-797e3e48],.press-hairline--top-bottom[data-v-797e3e48]{position:relative}.press-hairline--bottom[data-v-797e3e48]:after,.press-hairline--left[data-v-797e3e48]:after,.press-hairline--right[data-v-797e3e48]:after,.press-hairline--surround[data-v-797e3e48]:after,.press-hairline--top-bottom[data-v-797e3e48]:after,.press-hairline--top[data-v-797e3e48]:after,.press-hairline[data-v-797e3e48]:after{border:0 solid #ebedf0;bottom:-50%;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-797e3e48]:after{border-top-width:1px}.press-hairline--left[data-v-797e3e48]:after{border-left-width:1px}.press-hairline--right[data-v-797e3e48]:after{border-right-width:1px}.press-hairline--bottom[data-v-797e3e48]:after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-797e3e48]:after{border-width:1px 0}.press-hairline--surround[data-v-797e3e48]:after{border-width:1px}.press-count-down[data-v-797e3e48]{color:var(--count-down-text-color,#323233);font-size:var(--count-down-font-size,14px);line-height:var(--count-down-line-height,20px)}',""]),t.exports=e},"49d7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"press-count-down"},[t.useSlot?t._t("default",[i("span",[t._v(" "+t._s(t.formattedTime)+" ")])],{timeData:t.timeData}):[t._v(" "+t._s(t.formattedTime)+" ")]],2)},o=[];i("948b"),i("e8e7"),i("e6c9");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i="".concat(t);while(i.length<e)i="0".concat(i);return i}var r=1e3,s=60*r,l=60*s,c=24*l;function u(t){var e=Math.floor(t/c),i=Math.floor(t%c/l),n=Math.floor(t%l/s),o=Math.floor(t%s/r),a=Math.floor(t%r);return{days:e,hours:i,minutes:n,seconds:o,milliseconds:a}}function d(t,e){var i=e.days,n=e.hours,o=e.minutes,r=e.seconds,s=e.milliseconds;return-1===t.indexOf("DD")?n+=24*i:t=t.replace("DD",a(i)),-1===t.indexOf("HH")?o+=60*n:t=t.replace("HH",a(n)),-1===t.indexOf("mm")?r+=60*o:t=t.replace("mm",a(o)),-1===t.indexOf("ss")?s+=1e3*r:t=t.replace("ss",a(r)),t.replace("SSS",a(s,3))}function f(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}function m(t){return setTimeout(t,30)}var h={name:"PressCountDown",props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},emits:["change","finish"],data:function(){return{formattedTime:"0",remain:0}},computed:{timeData:function(){var t=u(this.remain);return t}},watch:{time:{handler:function(t){var e=this.remain,i=this.millisecond;(i||Math.floor(t/1e3)!==Math.floor(e/1e3)&&Math.round(t/1e3)!==Math.round(e/1e3))&&this.reset()},immediate:!0}},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){clearTimeout(this.tid),this.tid=null},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.tid=m((function(){t.setRemain(t.getRemain()),0!==t.remain&&t.microTick()}))},macroTick:function(){var t=this;this.tid=m((function(){var e=t.getRemain();f(e,t.remain)&&0!==e||t.setRemain(e),0!==t.remain&&t.macroTick()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t;var e=u(t);this.useSlot&&this.$emit("change",e),this.formattedTime=d(this.format,e),0===t&&(this.pause(),this.$emit("finish"))}}},p=h,v=(i("fd1f"),i("2777")),b=Object(v["a"])(p,n,o,!1,null,"797e3e48",null);e["a"]=b.exports},"63ce":function(t,e,i){var n=i("ee2b");e=n(!1),e.push([t.i,".item[data-v-2652d426]{display:inline-block;width:22px;margin-right:5px;color:#fff;font-size:12px;text-align:center;background-color:#1989fa;border-radius:2px}",""]),t.exports=e},"87f3":function(t,e,i){var n=i("3d70");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("c69b").default;o("5edf44f2",n,!0,{sourceMap:!1,shadowMode:!1})},"8ffa":function(t,e,i){var n=i("63ce");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("c69b").default;o("134e52d4",n,!0,{sourceMap:!1,shadowMode:!1})},fc58:function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return d}));var n=i("69b0"),o=i("c05a"),a=(i("4920"),i("414c"),i("e8e7"),i("1b08"),i("1699"),i("561a")),r=i("1ee1"),s="showDialog";function l(){var t=getCurrentPages();return t[t.length-1]}function c(t,e,i){var n=t.$children;if(n){var a,r=Object(o["a"])(n);try{for(r.s();!(a=r.n()).done;){var s=a.value;if(s.$attrs[e]===i)return s}}catch(m){r.e(m)}finally{r.f()}var l,u=Object(o["a"])(n);try{for(u.s();!(l=u.n()).done;){var d=l.value,f=c(d,e,i);if(f)return f}}catch(m){u.e(m)}finally{u.f()}}}function u(t,e){var i,n;if(e&&t){var o=e;if(o.match(/^[^\w]/)&&(o=o.slice(1)),null!==(i=t.$refs)&&void 0!==i&&i[o])return t.$refs[o];if(Object(a["b"])()){var r=e.startsWith("#")?"id":"class",s=c(t,r,o);if(s)return s}if("function"===typeof(null===t||void 0===t?void 0:t.$selectComponent)){var l,u=null===t||void 0===t||null===(l=t.$selectComponent)||void 0===l?void 0:l.call(t,e);return u}return null===t||void 0===t||null===(n=t.selectComponent)||void 0===n?void 0:n.call(t,e)}}function d(t){return new Promise((function(e,i){var o=t.context||l(),a=t.dialog;a||(a=u(o,t.selector));var c=Object(n["a"])({callback:function(t,n){"confirm"===t?e(n):i(n)}},t);delete c.dialog,delete c.context;var d=t.showFunction||s;Object(r["a"])(a,c,d)}))}},fd1f:function(t,e,i){"use strict";i("87f3")}}]);