(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b4626b1"],{"4f2b":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"press-loading",style:{background:e.loadingBg}},[a("img",{class:"btn"==e.loadingScenes?"press-loading__img--btn":"press-loading__img--page",attrs:{src:"https://image-1251917893.file.myqcloud.com/Esports/user/img/"+e.loadingScenes+"-loading.gif"}})])},n=[],i={name:"PressLoading",props:{loadingBg:{type:String,default:"",required:!1},loadingScenes:{type:String,default:"page",required:!1}},options:{virtualHost:!0},emits:[],data:function(){return{}},mounted:function(){},methods:{}},r=i,s=(a("9306"),a("2777")),c=Object(s["a"])(r,o,n,!1,null,"1ee3a987",null);t["a"]=c.exports},9306:function(e,t,a){"use strict";a("df9a")},a33e:function(e,t,a){var o=a("ee2b");t=o(!1),t.push([e.i,'.section-content[data-v-698ea6a6]{margin:0 10px}.primary-btn[data-v-698ea6a6]{display:-webkit-box;display:-ms-flexbox;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;position:relative;display:flex;align-items:center;justify-content:center;width:2rem;height:.72rem;font-size:.32rem;color:#fff;border-radius:.08rem;background-image:-webkit-gradient(linear,left top,left bottom,from(#336bcf),to(#339ce5));background-image:linear-gradient(180deg,#336bcf 0,#339ce5)}.primary-btn[data-v-698ea6a6]:active{background:#0f489f}.primary-btn[data-v-698ea6a6]:after{top:.08rem;right:0;width:1.52rem}.primary-btn[data-v-698ea6a6]:after,.primary-btn[data-v-698ea6a6]:before{position:absolute;content:"";height:.3rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/btn-bg-r.png) no-repeat 50%;background-size:contain;pointer-events:none}.primary-btn[data-v-698ea6a6]:before{bottom:0;left:0;width:1.26rem}.secondary-btn[data-v-698ea6a6]{display:-webkit-box;display:-ms-flexbox;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;position:relative;display:flex;align-items:center;justify-content:center;width:2rem;height:.72rem;font-size:.32rem;color:#09134e;border-radius:.08rem}.secondary-btn[data-v-698ea6a6],.secondary-btn[data-v-698ea6a6]:active{background:#dfe2ea}',""]),e.exports=t},a3a2:function(e,t,a){"use strict";a("f3c4")},c90d:function(e,t,a){var o=a("ee2b");t=o(!1),t.push([e.i,".press-loading[data-v-1ee3a987]{position:absolute;left:0;right:0;bottom:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:999}.press-loading__img--btn[data-v-1ee3a987]{width:1.2rem;height:.45rem}.press-loading__img--page[data-v-1ee3a987]{width:1.06rem;height:.58rem}",""]),e.exports=t},df9a:function(e,t,a){var o=a("c90d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("c69b").default;n("4ae3e91a",o,!0,{sourceMap:!1,shadowMode:!1})},e1a4:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:e.t("buttonMode")}},[a("div",{staticClass:"primary-btn",staticStyle:{position:"relative","margin-left":"10px"},on:{click:function(t){return t.stopPropagation(),e.onShowLoading("btn")}}},[e._v(" "+e._s(e.options.btn.show?"":e.t("click"))+" "),e.options.btn.show?a("press-loading",{attrs:{"loading-scenes":"btn"}}):e._e()],1)]),a("demo-block",{attrs:{title:e.t("pageMode")}},[a("div",{staticClass:"primary-btn",staticStyle:{position:"relative","margin-left":"10px"},on:{click:function(t){return t.stopPropagation(),e.onShowLoading("page")}}},[e._v(" "+e._s(e.t("check"))+" ")])]),a("demo-block",{attrs:{title:e.t("customBackground")}},[a("div",{staticClass:"primary-btn",staticStyle:{position:"relative","margin-left":"10px"},on:{click:function(t){return t.stopPropagation(),e.onShowLoading("bg")}}},[e._v(" "+e._s(e.t("disappear"))+" ")])]),e.options.page.show?a("press-loading"):e._e(),e.options.bg.show?a("press-loading",{attrs:{"loading-bg":"#eee"}}):e._e()],1)},n=[],i=a("4f2b"),r={i18n:{"zh-CN":{buttonMode:"按钮模式",pageMode:"页面模式",customBackground:"指定背景色",click:"点击加载",disappear:"三秒后消失"},"en-US":{buttonMode:"Button Mode",pageMode:"Page Mode",customBackground:"Custom Background",click:"Check",disappear:"Check"}},components:{PressLoading:i["a"]},data:function(){return{options:{btn:{show:!1},page:{show:!1},bg:{show:!1}}}},methods:{onShowLoading:function(e){var t=this;this.options[e].show=!0,setTimeout((function(){t.options[e].show=!1}),3e3)}}},s=r,c=(a("a3a2"),a("2777")),l=Object(c["a"])(s,o,n,!1,null,"698ea6a6",null);t["default"]=l.exports},f3c4:function(e,t,a){var o=a("a33e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("c69b").default;n("65471aee",o,!0,{sourceMap:!1,shadowMode:!1})}}]);