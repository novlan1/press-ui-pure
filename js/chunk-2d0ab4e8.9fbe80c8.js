(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab4e8"],{"155c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:t.t("basicUsage"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{fixed:!1,active:t.active,"safe-area-inset-bottom":!1},on:{change:t.onChange}},[a("press-tabbar-item",{attrs:{icon:"home-o"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"search"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)],1),a("demo-block",{attrs:{title:t.t("matchByName"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{active:t.activeName,fixed:!1,"safe-area-inset-bottom":!1},on:{change:t.onChangeName}},[a("press-tabbar-item",{attrs:{icon:"home-o",name:"home"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"search",name:"search"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"friends-o",name:"friends"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"setting-o",name:"setting"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)],1),a("demo-block",{attrs:{title:t.t("badge"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{active:t.active,fixed:!1,"safe-area-inset-bottom":!1},on:{change:t.onChange}},[a("press-tabbar-item",{attrs:{icon:"home-o"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"search",dot:""}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"friends-o",info:"5"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"setting-o",info:"20"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)],1),a("demo-block",{attrs:{title:t.t("customIcon"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{fixed:!1,active:t.active,"safe-area-inset-bottom":!1},on:{change:t.onChange}},[a("press-tabbar-item",{attrs:{info:"3"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("img",{staticStyle:{width:"23px",height:"18px"},attrs:{src:t.icon.normal,mode:"aspectFit"}})]},proxy:!0},{key:"icon-active",fn:function(){return[a("img",{staticStyle:{width:"23px",height:"18px"},attrs:{src:t.icon.active,mode:"aspectFit"}})]},proxy:!0}])},[t._v(" "+t._s(t.t("custom"))+" ")]),a("press-tabbar-item",{attrs:{icon:"search"}},[t._v(" "+t._s(t.t("tag"))+" ")]),a("press-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(" "+t._s(t.t("tag"))+" ")])],1)],1),a("demo-block",{attrs:{title:t.t("customColor"),"section-style":t.sectionStyle}},[a("press-tabbar",{attrs:{active:t.active,fixed:!1,"active-color":"#07c160","inactive-color":"#000","safe-area-inset-bottom":!1},on:{change:t.onChange}},[a("press-tabbar-item",{attrs:{icon:"home-o"}},[t._v(" "+t._s(t.t("tag"))+"A ")]),a("press-tabbar-item",{attrs:{icon:"search"}},[t._v(" "+t._s(t.t("tag"))+"B ")]),a("press-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(" "+t._s(t.t("tag"))+"C ")]),a("press-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(" "+t._s(t.t("tag"))+"D ")])],1)],1)],1)},o=[],i=a("bfbe"),n=a("5413"),r={i18n:{"zh-CN":{badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event",selectTip:"You select "}},components:{PressTabbar:i["a"],PressTabbarItem:n["a"]},data:function(){return{active:0,activeName:"home",sectionStyle:"margin: 0;",icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}},methods:{onChange:function(t){console.log("val",t),this.active=t},onChangeName:function(t){console.log("val",t),this.activeName=t}}},c=r,m=a("2777"),b=Object(m["a"])(c,s,o,!1,null,"eaf5aab0",null);e["default"]=b.exports}}]);