(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dcb6992"],{"187e":function(t,e,s){"use strict";s("a163")},"39dd":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-wrap"},[s("demo-block",{attrs:{title:t.t("basicUsage")}},[s("PressImage",{attrs:{"show-loading":!0,src:t.src,width:"100",height:"100"},on:{click:t.click}})],1),s("demo-block",{attrs:{title:t.t("mode")}},t._l(t.MODE_LIST,(function(e,a){return s("PressRow",{key:t.getIndex(a,"row")},t._l(e,(function(e,a){return s("PressCol",{key:t.getIndex(a,"col"),attrs:{span:e.span}},[s("div",{staticClass:"demo-grid"},[s("PressImage",{attrs:{"show-loading":!0,width:"100",height:"100",src:t.src,mode:e.mode},on:{click:t.click}}),s("span",{staticClass:"image-title",class:e.titleClass},[t._v(t._s(e.mode))])],1)])})),1)})),1),s("demo-block",{attrs:{title:t.t("round")}},t._l(t.MODE_LIST,(function(e,a){return s("PressRow",{key:t.getIndex(a,"row")},t._l(e,(function(e,a){return s("PressCol",{key:t.getIndex(a,"col"),attrs:{span:e.span}},[s("div",{staticClass:"demo-grid"},[s("PressImage",{attrs:{"show-loading":!0,width:"100",height:"100",src:t.src,round:"",mode:e.mode},on:{click:t.click}}),s("span",{staticClass:"image-title",class:e.titleClass},[t._v(t._s(e.mode))])],1)])})),1)})),1),s("demo-block",{attrs:{title:t.t("loading")}},[s("PressRow",[s("PressCol",{attrs:{span:8}},[s("div",{staticClass:"demo-grid"},[s("PressImage",{attrs:{"show-loading":!0,width:"100",height:"100"}}),s("span",{staticClass:"image-title"},[t._v(t._s(t.t("defaultTip")))])],1)]),s("PressCol",{attrs:{span:8}},[s("div",{staticClass:"demo-grid"},[s("PressImage",{attrs:{"show-loading":!0,width:"100",height:"100"},scopedSlots:t._u([{key:"loading",fn:function(){return[s("PressLoadingPlus",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])}),s("span",{staticClass:"image-title"},[t._v(t._s(t.t("customTip")))])],1)])],1)],1),s("demo-block",{attrs:{title:t.t("error")}},[s("PressRow",[s("PressCol",{attrs:{span:8}},[s("div",{staticClass:"demo-grid"},[s("PressImage",{attrs:{"show-loading":!0,src:"src",width:"100px",height:"100px"}}),s("span",{staticClass:"image-title"},[t._v(t._s(t.t("defaultTip")))])],1)]),s("PressCol",{attrs:{span:8}},[s("div",{staticClass:"demo-grid"},[s("PressImage",{attrs:{"show-loading":!0,src:"src",width:"100px",height:"100px"},scopedSlots:t._u([{key:"error",fn:function(){return[s("span",{staticStyle:{"font-size":"14px"}},[t._v("加载失败")])]},proxy:!0}])}),s("span",{staticClass:"image-title"},[t._v(t._s(t.t("customTip")))])],1)])],1)],1),s("ImagePreview",{ref:"imagePreviewRef",attrs:{mode:"functional"}})],1)},i=[],o=(s("2aaa"),s("2cc5")),r=s("1e59"),l=s("79f0"),n=s("b5e1"),c=s("cf1d"),d=s("fc63"),m=[[{mode:"aspectFit",titleClass:"image-title--gap",span:8},{mode:"aspectFill",titleClass:"image-title--gap",span:8},{mode:"center",titleClass:"",span:8}],[{mode:"widthFix",titleClass:"image-title--gap",span:8},{mode:"heightFix",titleClass:"image-title--long",span:16}]],g={i18n:{"zh-CN":{error:"加载失败提示",loading:"加载中提示",defaultTip:"默认提示",customTip:"自定义提示",mode:"模式",round:"圆形"},"en-US":{error:"Error",loading:"Loading",defaultTip:"Default",customTip:"Custom",mode:"Mode",round:"Round"}},components:{PressCol:r["a"],PressRow:n["a"],PressImage:o["a"],PressLoadingPlus:l["a"],ImagePreview:c["a"]},data:function(){return{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",MODE_LIST:m}},methods:{click:function(){console.log("[click]"),Object(d["a"])({selector:"#imagePreviewRef",images:[this.src]}).then((function(){}))},getIndex:function(t,e){return"".concat(t,"-").concat(e)}}},p=g,u=(s("187e"),s("2777")),f=Object(u["a"])(p,a,i,!1,null,"6df6e4be",null);e["default"]=f.exports},a163:function(t,e,s){var a=s("ac8f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("c69b").default;i("5d003dc0",a,!0,{sourceMap:!1,shadowMode:!1})},ac8f:function(t,e,s){var a=s("ee2b");e=a(!1),e.push([t.i,".demo-grid[data-v-6df6e4be]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.image-title[data-v-6df6e4be]{text-align:center;width:100px;margin-top:16px;color:#646566;margin-bottom:10px}.image-title--long[data-v-6df6e4be]{width:132px}.image-title--gap[data-v-6df6e4be]{margin-bottom:32px}",""]),t.exports=e}}]);