(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bd42567"],{"0898":function(e,t,r){"use strict";var n=r("5c67"),o=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},"14d7":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("8c7c"),o=r("7c15"),c=r("c7e3"),a=void 0,i=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return"function"===typeof t?o.loader.call.apply(o.loader,n.__spreadArray([a,e,t],r,!1)):c.loadJS.call(a,e)},s=i;t.loader=s,t.loaderUnity=i},"27f5":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{class:[e.getActClass("cover"),{"press-act--hidden-tip":e.hideTipStyle},"press-act"]},[r("div",{class:[e.getActClass("dialog","dialog--qr")]},[r("a",{class:[e.getActClass("close")],on:{click:e.closeDialog}}),r("p",{class:[e.getActClass("title","title--qr")]},[e._v(" "+e._s(e.title)+" ")]),r("div",{class:[e.getActClass("content")]},[e.url?r("PressQRCodeWeb",{class:[e.getActClass("image")],attrs:{value:e.url}}):e.image?r("img",{class:[e.getActClass("image")],attrs:{src:e.image}}):e._e(),r("div",{class:[e.getActClass("desc")]},[e._v(" "+e._s(e.scanTitle)+" ")]),r("div",{class:[e.getActClass("button-wrap")]},[r("a",{class:[e.getActClass("btn--qr","btn--medium-primary")],on:{click:e.closeDialog}},[e._v("确定")])])],1)])]):e._e()},o=[],c=r("faca"),a=r("cad9"),i={cover:"tip-comp-cover",dialog:"tip-comp-dialog","dialog--qr":"tip-comp-dialog--scan-code",close:"tip-comp-dialog--close",title:"tip-comp-dialog--title","title--qr":"tip-comp-dialog--scan-code-title",content:"tip-comp-dialog--scan-code-content",image:"tip-comp-dialog--scan-code-img",desc:"tip-comp-dialog--scan-code-subhead","button-wrap":"tip-comp-dialog--scan-code-btn","btn--qr":"tip-comp-dialog--scan-code-sure","btn--medium-primary":"tip-comp-btn-medium-primary"};function s(e,t){return Object(a["a"])(e,i,t)}var l={name:"PressActQRCodeDialog",options:{styleIsolation:"shared"},components:{PressQRCodeWeb:c["a"]},props:{show:{type:Boolean,default:!1,required:!1},url:{type:String,default:null,required:!1},image:{type:String,default:"https://image-1251917893.file.myqcloud.com/2020/TIP-igame-H5/gh_9e4c56699893_258.jpg",required:!1},title:{type:String,default:"扫一扫二维码",required:!1},scanTitle:{type:String,default:"截图保存使用微信-扫一扫"},useTipClass:{type:Boolean,default:!1},hideTipStyle:{type:Boolean,default:!1}},emits:["update:show"],data:function(){return{}},methods:{closeDialog:function(){this.$emit("update:show",!1)},getActClass:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return s(this.useTipClass,t)}}},u=l,d=(r("4a2c"),r("b953"),r("2777")),f=Object(d["a"])(u,n,o,!1,null,"c3337e90",null);t["a"]=f.exports},"291e":function(e,t,r){"use strict";var n=r("4088"),o=r("61db"),c=r("b15a"),a=r("cc40"),i=r("960e"),s=r("9d48"),l=r("c5ba"),u=r("e0a5").f,d=r("7487"),f=r("8403"),p=r("88f1"),g=r("7abc"),v=r("6610"),h=r("4ec8"),m=r("1b66"),y=r("5b46"),b=r("35e4"),C=r("f522").enforce,E=r("6379"),x=r("0529"),_=r("b387"),w=r("5ecb"),S=x("match"),A=o.RegExp,T=A.prototype,k=o.SyntaxError,M=c(T.exec),j=c("".charAt),O=c("".replace),R=c("".indexOf),q=c("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,B=/a/g,I=/a/g,P=new A(B)!==B,D=v.MISSED_STICKY,W=v.UNSUPPORTED_Y,J=n&&(!P||D||_||w||y((function(){return I[S]=!1,A(B)!==B||A(I)===I||"/a/i"!==String(A(B,"i"))}))),K=function(e){for(var t,r=e.length,n=0,o="",c=!1;n<=r;n++)t=j(e,n),"\\"!==t?c||"."!==t?("["===t?c=!0:"]"===t&&(c=!1),o+=t):o+="[\\s\\S]":o+=t+j(e,++n);return o},Y=function(e){for(var t,r=e.length,n=0,o="",c=[],a=l(null),i=!1,s=!1,u=0,d="";n<=r;n++){if(t=j(e,n),"\\"===t)t+=j(e,++n);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:M(N,q(e,n+1))&&(n+=2,s=!0),o+=t,u++;continue;case">"===t&&s:if(""===d||b(a,d))throw new k("Invalid capture group name");a[d]=!0,c[c.length]=[d,u],s=!1,d="";continue}s?d+=t:o+=t}return[o,c]};if(a("RegExp",J)){for(var Q=function(e,t){var r,n,o,c,a,l,u=d(T,this),v=f(e),h=void 0===t,m=[],y=e;if(!u&&v&&h&&e.constructor===Q)return e;if((v||d(T,e))&&(e=e.source,h&&(t=g(y))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),y=e,_&&"dotAll"in B&&(n=!!t&&R(t,"s")>-1,n&&(t=O(t,/s/g,""))),r=t,D&&"sticky"in B&&(o=!!t&&R(t,"y")>-1,o&&W&&(t=O(t,/y/g,""))),w&&(c=Y(e),e=c[0],m=c[1]),a=i(A(e,t),u?this:T,Q),(n||o||m.length)&&(l=C(a),n&&(l.dotAll=!0,l.raw=Q(K(e),r)),o&&(l.sticky=!0),m.length&&(l.groups=m)),e!==y)try{s(a,"source",""===y?"(?:)":y)}catch(b){}return a},U=u(A),z=0;U.length>z;)h(Q,A,U[z++]);T.constructor=Q,Q.prototype=T,m(o,"RegExp",Q,{constructor:!0})}E("RegExp")},"2c21":function(e,t,r){var n=r("d7e6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("c69b").default;o("0e188fb4",n,!0,{sourceMap:!1,shadowMode:!1})},"44ab":function(e,t,r){var n=r("dd67");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("c69b").default;o("1d015578",n,!0,{sourceMap:!1,shadowMode:!1})},"4a2c":function(e,t,r){"use strict";r("2c21")},5654:function(e,t,r){"use strict";var n=r("4088"),o=r("b387"),c=r("0d4b"),a=r("192c"),i=r("f522").get,s=RegExp.prototype,l=TypeError;n&&o&&a(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===c(this))return!!i(this).dotAll;throw new l("Incompatible receiver, RegExp required")}}})},"5d62":function(e,t,r){"use strict";var n=r("5c67");e.exports=/MSIE|Trident/.test(n)},"5fb0":function(e,t,r){"use strict";var n=r("4088"),o=r("6610").MISSED_STICKY,c=r("0d4b"),a=r("192c"),i=r("f522").get,s=RegExp.prototype,l=TypeError;n&&o&&a(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===c(this))return!!i(this).sticky;throw new l("Incompatible receiver, RegExp required")}}})},"7c15":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},o=0,c=function(e){var t,r=document.getElementsByTagName("script")[0];null===(t=null===r||void 0===r?void 0:r.parentNode)||void 0===t||t.insertBefore(e,r)},a=function(e,t,r,a){var i;void 0===r&&(r="utf-8"),void 0===a&&(a=null),t&&"function"!==typeof t&&(a=t.context||a,i=t.setup,t=t.callback);var s,l,u=!1,d=function(){u||(u=!0,null===l||void 0===l||l(),t&&t.call(a,s))},f=function(){s=new Error(e||"EMPTY"),d()},p=document.querySelector('script[src="'.concat(e,'"]'));if(p)var g=setInterval((function(){p.isready&&(d(),clearInterval(g))}),20);else{var v=document.createElement("script");if(v.isready=!1,v.readyState&&!("async"in v)){o+=1;var h=o,m={loaded:!0,complete:!0},y=!1;l=function(){v.onreadystatechange=null,v.onerror=null,n[h]=void 0},v.onreadystatechange=function(){var e=v.readyState;if(!s){if(!y&&m[e]&&(y=!0,c(v)),"loaded"===e&&(v.children,"loading"===v.readyState))return f();"complete"===v.readyState&&(v.isready=!0,d())}},v.onerror=f,n[h]=v,i&&i.call(a,v),v.src=e}else l=function(){v.onload=null,v.onerror=null},v.onerror=f,v.onload=function(){v.isready=!0,d()},v.async=!0,v.charset=r||"utf-8",i&&i.call(a,v),v.src=e,c(v)}};t.loader=a},b134:function(e,t,r){"use strict";var n=r("64a0"),o=r("5a5a").find,c=r("d860"),a="find",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(a)},b259:function(e,t,r){"use strict";var n=r("5c67"),o=n.match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},b45d:function(e,t,r){"use strict";var n=r("64a0"),o=r("b15a"),c=r("d19e"),a=r("4697"),i=r("4a72"),s=r("ca24"),l=r("88f1"),u=r("5b46"),d=r("c8d1"),f=r("ad3e"),p=r("b259"),g=r("5d62"),v=r("fd58"),h=r("0898"),m=[],y=o(m.sort),b=o(m.push),C=u((function(){m.sort(void 0)})),E=u((function(){m.sort(null)})),x=f("sort"),_=!u((function(){if(v)return v<70;if(!(p&&p>3)){if(g)return!0;if(h)return h<603;var e,t,r,n,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)m.push({k:t+n,v:r})}for(m.sort((function(e,t){return t.v-e.v})),n=0;n<m.length;n++)t=m[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}})),w=C||!E||!x||!_,S=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:l(t)>l(r)?1:-1}};n({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&c(e);var t=a(this);if(_)return void 0===e?y(t):y(t,e);var r,n,o=[],l=i(t);for(n=0;n<l;n++)n in t&&b(o,t[n]);d(o,S(e)),r=i(o),n=0;while(n<r)t[n]=o[n++];while(n<l)s(t,n++);return t}})},b953:function(e,t,r){"use strict";r("44ab")},c7e3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7c15");function o(e){return new Promise((function(t){n.loader(e,(function(){t(1)}))}))}function c(e){for(var t,r=!0,n=document.getElementsByTagName("link"),o=0;o<n.length;o++)(null===(t=n[o])||void 0===t?void 0:t.href)&&-1!==n[o].href.indexOf(e)&&(r=!1);if(r){var c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href=e,document.getElementsByTagName("head")[0].appendChild(c)}}t.loadCSS=c,t.loadJS=o},c8d1:function(e,t,r){"use strict";var n=r("178c"),o=Math.floor,c=function(e,t){var r=e.length;if(r<8){var a,i,s=1;while(s<r){i=s,a=e[s];while(i&&t(e[i-1],a)>0)e[i]=e[--i];i!==s++&&(e[i]=a)}}else{var l=o(r/2),u=c(n(e,0,l),t),d=c(n(e,l),t),f=u.length,p=d.length,g=0,v=0;while(g<f||v<p)e[g+v]=g<f&&v<p?t(u[g],d[v])<=0?u[g++]:d[v++]:g<f?u[g++]:d[v++]}return e};e.exports=c},ca57:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("e41e");r("8c7c"),t.loadCssCode=n.loadCssCode,t.loadStyles=n.loadStyles,t.removeCss=n.removeCss},cad9:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("b67b"),o=r("5e66"),c=(r("2aaa"),r("06dc"),r("b4ca"),r("cdf1"),r("f1f0"),r("414c"),r("291e"),r("5654"),r("e8e7"),r("5fb0"),r("745e"),r("6905"),"press__");function a(e){var t=e.reduce((function(e,t){return Array.isArray(t)?e.push.apply(e,Object(o["a"])(t)):e.push(t),e}),[]),r=t.reduce((function(e,t){return"string"===typeof t?e.push(t):"object"===Object(n["a"])(t)&&Object.keys(t).map((function(r){t[r]&&e.push(r)})),e}),[]);return r}function i(e,t,r){var n=a(r),i=n.map((function(e){return e&&t[e]||""})),s=n.map((function(e){var t=new RegExp("^".concat(c));return e?t.test(e)?e:"".concat(c).concat(e):""}));return e?[].concat(Object(o["a"])(s),Object(o["a"])(i)).join(" "):s.join(" ")}},d7e6:function(e,t,r){var n=r("ee2b");t=n(!1),t.push([e.i,".press__dialog[data-v-c3337e90]{-webkit-box-sizing:border-box;box-sizing:border-box}",""]),e.exports=t},dd67:function(e,t,r){var n=r("ee2b");t=n(!1),t.push([e.i,"",""]),e.exports=t},e2b0:function(e,t,r){"use strict";var n=r("64a0"),o=r("e88d"),c=r("0152").f,a=r("cc03"),i=r("88f1"),s=r("991c"),l=r("ed5c"),u=r("6a9f"),d=r("3c34"),f=o("".slice),p=Math.min,g=u("endsWith"),v=!d&&!g&&!!function(){var e=c(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!v&&!g},{endsWith:function(e){var t=i(l(this));s(e);var r=arguments.length>1?arguments[1]:void 0,n=t.length,o=void 0===r?n:p(a(r),n),c=i(e);return f(t,o-c.length,o)===c}})},e41e:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("8c7c");function o(e){for(var t,r=document.getElementsByTagName("link"),n=0;n<r.length;n++)(null===(t=r[n])||void 0===t?void 0:t.href)&&-1!==r[n].href.indexOf(e)&&r[n].parentNode.removeChild(r[n])}function c(e,t){var r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,r.className=t;var n=document.getElementsByTagName("head")[0];n.appendChild(r)}function a(e,t){Array.prototype.slice.call(document.getElementsByClassName(t)).forEach((function(e){return e.remove()})),n.__spreadArray([],e,!0).forEach((function(e){c(e,t)}))}function i(e,t){Array.prototype.slice.call(document.getElementsByClassName(t)).forEach((function(e){return e.remove()}));var r=document.createElement("style");r.className=t,r.type="text/css",r.rel="stylesheet";try{r.appendChild(document.createTextNode(e))}catch(o){r.styleSheet.cssText=e}var n=document.getElementsByTagName("head")[0];n.appendChild(r)}t.loadCssCode=i,t.loadStyles=a,t.removeCss=o}}]);