(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b19a6992"],{4385:function(e,t,s){var o=s("da57");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=s("c69b").default;i("eb7405ee",o,!0,{sourceMap:!1,shadowMode:!1})},"49ea":function(e,t,s){"use strict";s("4385")},"7a24":function(e,t,s){var o=s("a4a3");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=s("c69b").default;i("43f4cce3",o,!0,{sourceMap:!1,shadowMode:!1})},a4a3:function(e,t,s){var o=s("ee2b");t=o(!1),t.push([e.i,".hidden[data-v-13e87a02]{visibility:hidden;display:none}",""]),e.exports=t},a8ba:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"demo-wrap"},[s("div",{staticClass:"demo-inner"},[s("demo-block",{attrs:{title:e.t("basicUsage")}},[s("press-cell",{attrs:{title:e.t("toggle"),"is-link":""},on:{click:e.onToggle}})],1),s("PressTeleport",{attrs:{to:"body",disabled:e.disabled}},[s("div",{staticClass:"demo-text"},[e._v(" test ")])])],1)])},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("PressTeleportWeb",{attrs:{to:e.to,where:e.where,disabled:e.disabled},scopedSlots:e._u([{key:"default",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)})},r=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.classes},[e._t("default")],2)},d=[],l=(s("0508"),s("d014"),s("7144"),s("414c"),s("af77"),s("faa0"),s("79cc"),{name:"PressTeleportWeb",props:{to:{type:String,required:!0},where:{type:String,default:"after"},disabled:Boolean},data:function(){return{nodes:[],waiting:!1,observer:null,parent:null}},computed:{classes:function(){return this.disabled?["teleporter"]:["teleporter","hidden"]}},watch:{to:"maybeMove",where:"maybeMove",disabled:function(e){e?(this.disable(),this.teardownObserver()):(this.bootObserver(),this.move())}},mounted:function(){this.nodes=Array.from(this.$el.childNodes),this.disabled||this.bootObserver(),this.maybeMove()},beforeDestroy:function(){this.disable(),this.teardownObserver()},methods:{maybeMove:function(){this.disabled||this.move()},move:function(){if(this.waiting=!1,this.to&&(this.parent=document.querySelector(this.to)),!this.parent)return this.disable(),void(this.waiting=!0);"before"===this.where?this.parent.prepend(this.getFragment()):this.parent.appendChild(this.getFragment())},disable:function(){this.$el.appendChild(this.getFragment()),this.parent=null},getFragment:function(){var e=document.createDocumentFragment();return this.nodes.forEach((function(t){return e.appendChild(t)})),e},onMutations:function(e){for(var t=this,s=!1,o=0;o<e.length;o++){var i=e[o],n=Array.from(i.addedNodes).filter((function(e){return!t.nodes.includes(e)}));Array.from(i.removedNodes).includes(this.parent)?(this.disable(),this.waiting=!this.disabled):this.waiting&&n.length>0&&(s=!0)}s&&this.move()},bootObserver:function(){var e=this;this.observer||(this.observer=new MutationObserver((function(t){return e.onMutations(t)})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))},teardownObserver:function(){this.observer&&(this.observer.disconnect(),this.observer=null)}}}),u=l,c=(s("dd9e"),s("2777")),h=Object(c["a"])(u,a,d,!1,null,"13e87a02",null),b=h.exports,p={name:"PressTeleport",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressTeleportWeb:b},props:{to:{type:String,default:"body"},where:{type:String,default:"after"},disabled:Boolean},data:function(){return{}},mounted:function(){},methods:{}},f=p,v=Object(c["a"])(f,n,r,!1,null,"1bc1888d",null),m=v.exports,g={i18n:{"zh-CN":{toggle:"切换"},"en-US":{toggle:"Toggle"}},components:{PressTeleport:m},data:function(){return{disabled:!1}},methods:{onToggle:function(){this.disabled=!this.disabled}}},w=g,y=(s("49ea"),Object(c["a"])(w,o,i,!1,null,"d86e14a0",null));t["default"]=y.exports},da57:function(e,t,s){var o=s("ee2b");t=o(!1),t.push([e.i,".demo-inner[data-v-d86e14a0]{position:relative;height:300px}.demo-text[data-v-d86e14a0]{width:100%;position:absolute;bottom:0;top:200px;z-index:5000;padding:10px;background:rgba(0,0,0,.1);color:#5baae7;font-size:16px}",""]),e.exports=t},dd9e:function(e,t,s){"use strict";s("7a24")}}]);