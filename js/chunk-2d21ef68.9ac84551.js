(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ef68"],{d897:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:e.t("basicUsage")}},[n("press-search",{attrs:{value:e.value,placeholder:e.t("placeholder")},on:{change:e.onChange}})],1),n("demo-block",{attrs:{title:e.t("listenToEvents")}},[n("press-search",{attrs:{value:e.value,placeholder:e.t("placeholder"),"show-action":""},on:{search:e.onSearch,cancel:e.onCancel,change:e.onChange}})],1),n("demo-block",{attrs:{title:e.t("inputAlign")}},[n("press-search",{attrs:{value:e.value,placeholder:e.t("placeholder"),"input-align":"center"},on:{search:e.onSearch,cancel:e.onCancel,change:e.onChange}})],1),n("demo-block",{attrs:{title:e.t("disabled")}},[n("press-search",{attrs:{value:e.value,disabled:"",placeholder:e.t("placeholder")},on:{change:e.onChange}})],1),n("demo-block",{attrs:{title:e.t("background")}},[n("press-search",{attrs:{value:e.value,shape:"round",background:"#4fc08d",placeholder:e.t("placeholder")},on:{change:e.onChange}})],1),n("demo-block",{attrs:{title:e.t("customButton")}},[n("press-search",{attrs:{value:e.value,label:e.t("label"),"use-action-slot":"",placeholder:e.t("placeholder")},on:{change:e.onChange},scopedSlots:e._u([{key:"action",fn:function(){return[n("div",{on:{click:e.onClick}},[e._v(" "+e._s(e.t("search"))+" ")])]},proxy:!0}])})],1)],1)},o=[],l=n("52dc"),c={i18n:{"zh-CN":{label:"地址",disabled:"禁用搜索框",inputAlign:"搜索框内容对齐",background:"自定义背景色",placeholder:"请输入搜索关键词",customButton:"自定义按钮",listenToEvents:"事件监听"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}},components:{PressSearch:l["a"]},data:function(){return{value:""}},methods:{onChange:function(e){"string"===typeof e&&this.onGTip("".concat(e))},onCancel:function(){this.onGTip("cancel")},onSearch:function(){this.onGTip("search")},onClick:function(){this.onGTip("click")}}},s=c,r=n("2777"),i=Object(r["a"])(s,a,o,!1,null,"c2fa721a",null);t["default"]=i.exports}}]);