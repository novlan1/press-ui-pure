(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9326"],{"57b0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:e.t("share")}},[n("press-cell",{attrs:{title:e.t("share"),"is-link":""},on:{click:e.onShare}})],1),n("demo-block",{attrs:{title:e.t("custom")}},[n("press-cell",{attrs:{title:e.t("custom"),"is-link":""},on:{click:e.onCustom}})],1),n("PressPopupCell",{ref:e.FUNCTIONAL_ID_MAP.POPUP_CELL,attrs:{id:e.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"}}),n("PressPopupCell",{ref:e.FUNCTIONAL_ID_MAP.POPUP_CELL_2,attrs:{id:e.FUNCTIONAL_ID_MAP.POPUP_CELL_2,mode:"functional"}})],1)},a=[],c=n("7689"),i=n("dd3d"),r=n("69b0"),s=n("8036"),l=n("9d1c"),u=n("8e5b"),p=(n("0508"),n("06dc"),n("b4ca"),n("414c"),n("3076"));function h(e){return e.length===p["SHARE_TYPE_LIST"].length?"全部":p["SHARE_TYPE_LIST"].filter((function(t){return(e||[]).indexOf(t.value)>-1})).map((function(e){return e.label})).join(", ")}function m(e){var t=e.context,n=e.callback,o=e.params,a=void 0===o?{}:o;Object(s["p"])({context:t,title:"自定义设置",closeIcon:!0,cellList:[{label:"游戏内使用 open link",type:"switch",open:a.useOpenLink,click:function(e){var o=e.context;o.closeDialog(),t.onGTip("设置成功"),"function"===typeof n.changeParams&&n.changeParams.call(t,{useOpenLink:!a.useOpenLink})}},{label:"游戏内展示类型",value:h(a.showTypeInGame),click:function(e){var o=e.context;o.closeDialog(),Object(s["q"])({context:t,title:"游戏内展示类型",button:"确定",closeIcon:!0,asyncConfirm:function(e){var n=e.checkedIndexList;return console.log("[checkedIndexList]...",n),!(null===n||void 0===n||!n.length)||(t.onGTip("必须选择一种类型"),!1)},cellList:p["SHARE_TYPE_LIST"].map((function(e){return Object(r["a"])(Object(r["a"])({},e),{},{checked:a.showTypeInGame.indexOf(e.value)>-1,type:"checkbox"})}))}).then((function(e){var o;if(console.log("[showPopupCell2] res",e),null===e||void 0===e||null===(o=e.context)||void 0===o||o.closeDialog(),t.onGTip("设置成功"),"function"===typeof n.changeParams){var a=p["SHARE_TYPE_LIST"].filter((function(t,n){return(e.checkedIndexList||[]).indexOf(n)>-1})).map((function(e){return e.value}));console.log("[selectList]: ",a),n.changeParams.call(t,{showTypeInGame:a})}})).catch((function(e){var t;console.log("[showPopupCell] err",e),null===e||void 0===e||null===(t=e.context)||void 0===t||t.closeDialog()}))}}]}).then((function(e){var t=e||{},n=t.context,o=void 0===n?{}:n;o.closeDialog()})).catch((function(e){var t=e||{},n=t.context,o=void 0===n?{}:n;console.log("[showCustomPopup] err",e),o.closeDialog()}))}var d=n("81f9");n("2aaa"),n("e8e7"),n("c232");function g(){return new Promise((function(e){var t="https://m.igame.qq.com/pvp/share/get_share_cfg",n=encodeURIComponent(encodeURIComponent("".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname).concat(window.location.search)));uni.request({url:"".concat(t,"?referpath=").concat(n,"&tstamp=").concat(Date.now()),method:"POST",success:function(t){e(t.data||{}),console.log("[getWxSignaturePromise]",t.data)}})}))}var f={GOODS:1,STORE:2,OTHER:3,CUSTOM:4,CUSTOM_NO_ENCODE:5};function P(){return new Promise((function(e){var t="https://a.igame.qq.com";uni.request({method:"POST",url:"".concat(t,"/merc.merccgi.accountBind.accountBind/GetMiniProgramOpenLink"),data:{appid:"wx94057b049312ffec",path:"/convert-cross/views/x5m/index/index",param_data:"brandid=b1689820502&configid=gGVLomFG&inviteid=ILG6f2cfa387b694e6077f52edc0c302322&shareId=o5P-Ojory9Xh7lkreheBWF7yrFv4&adtag=share&gid=507",jump_type:f.CUSTOM_NO_ENCODE},success:function(t){e(t.data||{}),console.log("[getMiniProgramOpenLink]",t.data)}})}))}var O=n("6be1"),v=n("34c2"),b=(n("fa2d"),n("1b08"),n("e6c9"),{HtmlAttributeEncode:function(e){return e}});b.HtmlAttributeEncode=function(e){var t=e;return t=t.replace(/&/g,"&amp;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/</g,"&lt;"),t=t.replace(/"/g,"&quot;"),t=t.replace(/'/g,"&#39;"),t=t.replace(/=/g,"&#61;"),t=t.replace(/`/g,"&#96;"),t};n("552f");function I(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(n in t)(t.hasOwnProperty(n)&&!(n in e)||o)&&(e[n]=t[n]);return e}function w(e,t){var n="igameapp://jsapi/".concat(e,"?p=").concat(encodeURIComponent(JSON.stringify(t)||"")),o=document.createElement("iframe");o.setAttribute("width","0"),o.setAttribute("height","0"),o.setAttribute("style","display: none;"),document.body.appendChild(o),o.src=n,setTimeout((function(){document.body.removeChild(o)}),0)}var k=function(e,t,n){I(t,{callback:n}),w(e,t)};var L={i18n:{"zh-CN":{custom:"自定义",share:"分享"},"en-US":{custom:"Custom",share:"Share"}},components:{PressPopupCell:l["a"],PressCell:u["a"]},data:function(){return{FUNCTIONAL_ID_MAP:s["d"],params:{showTypeInGame:[1,2,3,4],useOpenLink:!0},shareParams:{title:"PressUI 跨端组件库",desc:"PressUI可用于uni-app项目、基于Vue的普通H5和PC项目",icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fshare-sheet-wechat.png",mpImageUrl:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui-avatar-wx-share.png",link:"https://novlan1.github.io/press-ui-demo/#/pages/launch-app/launch-app?show=true",mpPath:"/pages/press/protocol/protocol?a=1&b=2&c=3&d=china&e=dd123ff",getWxSignaturePromise:g,getMiniProgramOpenLink:P,pvpInvoke:k}}},created:function(){},mounted:function(){this.onInitShare()},methods:{onInitShare:function(){Object(d["initShare"])(this.shareParams)},onCustom:function(){m({context:this,callback:{changeParams:this.changeParams},params:this.params})},changeParams:function(e){this.params=Object(r["a"])(Object(r["a"])({},this.params),e||{});var t=this.params,n=t.showTypeInGame,o=t.useOpenLink;o?this.shareParams.getMiniProgramOpenLink=P:delete this.shareParams.getMiniProgramOpenLink,this.shareParams.showTypeInGame=n,this.onInitShare()},onShare:function(){Object(d["openShareUI"])()},onGetImgSize:function(){return Object(i["a"])(Object(c["a"])().mark((function e(){var t,n,o;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article%2F2023%2F8%2Fqq-btn.png",e.next=3,Object(v["urlToBase64"])(t);case 3:n=e.sent,o=Object(O["calBase64Size"])(n),console.log("[onGetImgSize] size",o),console.log("[onGetImgSize] data",n);case 7:case"end":return e.stop()}}),e)})))()}}},_=L,C=n("2777"),S=Object(C["a"])(_,o,a,!1,null,null,null);t["default"]=S.exports}}]);