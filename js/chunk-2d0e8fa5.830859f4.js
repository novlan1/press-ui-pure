(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8fa5"],{"8c26":function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:t.t("text")}},[i("press-cell",{attrs:{title:t.t("check"),"is-link":""},on:{click:t.onShowToast}})],1),i("demo-block",{attrs:{title:t.t("loading")}},[i("press-cell",{attrs:{title:t.t("default"),"is-link":""},on:{click:function(s){return t.onShowToastLoading("normal")}}}),i("press-cell",{attrs:{title:"Spinner","is-link":""},on:{click:function(s){return t.onShowToastLoading("spinner")}}}),i("press-cell",{attrs:{title:t.t("noDestroy"),"is-link":""},on:{click:function(s){return t.onShowToastLoading("normal",0)}}})],1),i("demo-block",{attrs:{title:t.t("customTip")}},[i("press-cell",{attrs:{title:t.t("success"),"is-link":""},on:{click:function(s){return t.onShowToastSuccess("success")}}}),i("press-cell",{attrs:{title:t.t("fail"),"is-link":""},on:{click:function(s){return t.onShowToastSuccess("fail")}}}),i("press-cell",{attrs:{title:t.t("dynamic"),"is-link":""},on:{click:t.onShowDynamicToast}}),i("press-cell",{attrs:{title:t.t("html"),"is-link":""},on:{click:t.onShowHtmlToast}})],1),i("press-toast",{ref:"press-toast",attrs:{id:"press-toast"}})],1)},o=[],e=i("af74"),a=i("083d"),c=i("dd21"),l={i18n:{"zh-CN":{customTip:"自定义提示",text:"文字提示",loading:"加载提示",default:"默认",success:"成功提示",fail:"失败提示",dynamic:"动态更新提示",html:"HTML提示",toastTip:"我是提示文案，建议不超过十五字~",loadingTip:"加载中...",successTip:"成功文案",failTip:"失败文案",htmlTip:'我是提示文案，建议不超过<span style="color: #07A872">十五字</span>~',dynamicTip:function(t){return"倒计时 ".concat(t," 秒")},noDestroy:"不消失"},"en-US":{customTip:"Custom Tip",text:"Show",loading:"Loading",default:"Default",success:"Success",fail:"Fail",dynamic:"Dynamic",html:"HTML",toastTip:"Some messages",loadingTip:"Loading...",successTip:"Success",failTip:"Fail",htmlTip:'Some <span style="color: #07A872">messages</span>',dynamicTip:function(t){return"".concat(t," seconds")},noDestroy:"Not Destroy"}},components:{PressCell:e["a"],PressToast:a["a"]},data:function(){return{customStyle:"",timer:null}},methods:{onShowToast:function(){Object(c["a"])(this.t("toastTip"))},onShowToastLoading:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;c["a"].clear(),"normal"!==t?c["a"].loading({message:this.t("loadingTip"),forbidClick:!!s,loadingType:"spinner",duration:s}):c["a"].loading({message:this.t("loadingTip"),forbidClick:!!s,duration:s})},onShowToastSuccess:function(t){"success"!==t?c["a"].fail(this.t("failTip")):c["a"].success(this.t("successTip"))},onShowDynamicToast:function(){var t=this,s=c["a"].loading({duration:0,forbidClick:!0,message:this.t("dynamicTip",3)}),i=3;clearInterval(this.timer),this.timer=setInterval((function(){i-=1,i?s.set("dataMessage",t.t("dynamicTip",i)):(clearInterval(t.timer),c["a"].clear())}),1e3)},onShowHtmlToast:function(){Object(c["a"])({message:this.t("htmlTip"),duration:3e3,type:"html"})}}},r=l,u=i("2777"),d=Object(u["a"])(r,n,o,!1,null,"311c9f08",null);s["default"]=d.exports}}]);