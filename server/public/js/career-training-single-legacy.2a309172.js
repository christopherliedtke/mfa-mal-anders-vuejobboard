(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-training-single"],{"0942":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("2b0e"),i=n("b42e"),a=n("c637"),s=n("a723"),c=n("cf75");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=Object(c["c"])({animation:Object(c["b"])(s["s"],"wave"),height:Object(c["b"])(s["s"]),size:Object(c["b"])(s["s"]),type:Object(c["b"])(s["s"],"text"),variant:Object(c["b"])(s["s"]),width:Object(c["b"])(s["s"])},a["W"]),l=r["default"].extend({name:a["W"],functional:!0,props:u,render:function(t,e){var n,r=e.data,a=e.props,s=a.size,c=a.animation,u=a.variant;return t("div",Object(i["a"])(r,{staticClass:"b-skeleton",style:{width:s||a.width,height:s||a.height},class:(n={},o(n,"b-skeleton-".concat(a.type),!0),o(n,"b-skeleton-animate-".concat(c),c),o(n,"bg-".concat(u),u),n)}))}})},1276:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),a=n("e330"),s=n("d784"),c=n("44e7"),o=n("825a"),u=n("1d80"),l=n("4840"),d=n("8aa5"),b=n("50c4"),f=n("577e"),g=n("dc4a"),p=n("f36a"),m=n("14c3"),h=n("9263"),v=n("9f7f"),w=n("d039"),x=v.UNSUPPORTED_Y,y=4294967295,I=Math.min,_=[].push,k=a(/./.exec),C=a(_),E=a("".slice),N=!w((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));s("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=f(u(this)),s=void 0===n?y:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!c(t))return i(e,a,t,s);var o,l,d,b=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,v=new RegExp(t.source,g+"g");while(o=i(h,v,a)){if(l=v.lastIndex,l>m&&(C(b,E(a,m,o.index)),o.length>1&&o.index<a.length&&r(_,b,p(o,1)),d=o[0].length,m=l,b.length>=s))break;v.lastIndex===o.index&&v.lastIndex++}return m===a.length?!d&&k(v,"")||C(b,""):C(b,E(a,m)),b.length>s?p(b,0,s):b}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var r=u(this),s=void 0==e?void 0:g(e,t);return s?i(s,e,r,n):i(a,f(r),e,n)},function(t,r){var i=o(this),s=f(t),c=n(a,i,s,r,a!==e);if(c.done)return c.value;var u=l(i,RegExp),g=i.unicode,p=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(x?"g":"y"),h=new u(x?"^(?:"+i.source+")":i,p),v=void 0===r?y:r>>>0;if(0===v)return[];if(0===s.length)return null===m(h,s)?[s]:[];var w=0,_=0,k=[];while(_<s.length){h.lastIndex=x?0:_;var N,j=m(h,x?E(s,_):s);if(null===j||(N=I(b(h.lastIndex+(x?_:0)),s.length))===w)_=d(s,_,g);else{if(C(k,E(s,w,_)),k.length===v)return k;for(var T=1;T<=j.length-1;T++)if(C(k,j[T]),k.length===v)return k;_=w=N}}return C(k,E(s,w)),k}]}),!N,x)},3294:function(t,e,n){},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},"46ec":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.training?n("div",[n("article",{staticClass:"fort-weiterbildung"},[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.training?t.training.title:""))]),n("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),n("div",{staticClass:"container py-3 py-lg-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-4 order-2 order-md-1"},[n("NavTrainings")],1),n("div",{staticClass:"col-12 col-md-8 order-1 order-md-2 mb-4"},[t.training.featuredImage?n("b-img-lazy",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 768px",src:t.training.featuredImage.sourceUrl,alt:"Banner - "+t.training.title,width:"1200",height:"630","blank-width":"1200","blank-height":"630"}}):t._e(),n("div",{domProps:{innerHTML:t._s(t.training.content)}}),n("BannerTrainingCatalogueLarge",{staticClass:"mt-4",attrs:{header:"Jetzt passende Fortbildung finden"}}),n("BannerJobboard",{staticClass:"mt-4"})],1)])])]),n("div",{staticClass:"container"},[n("TrainingListRandom")],1),t.training?n("Head",{attrs:{title:t.training.seo&&t.training.seo.title,desc:t.training.seo&&t.training.seo.metaDesc,img:t.training.featuredImage&&t.training.featuredImage.sourceUrl,script:t.snippet}}):t._e()],1):t._e()},i=[],a=n("1da1"),s=(n("96cf"),n("99af"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("fb6a"),n("9910")),c=n("aedd"),o=n("f066"),u=n("4bdb"),l={name:"CareerTrainingItem",components:{NavTrainings:s["a"],TrainingListRandom:c["a"],BannerTrainingCatalogueLarge:o["a"],BannerJobboard:u["a"]},data:function(){return{training:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Karriere",\n              "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Fort- und Weiterbildung",\n              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Überblick für MFA & ZFA",\n              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick"\n            },{\n              "@type": "ListItem",\n              "position": 4,\n              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick/').concat(this.$route.params.slug,'"\n            }]\n          }')}]}},computed:{breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildung",to:"/karriere/fort-und-weiterbildung"},{text:"Überblick für MFA & ZFA",to:"/karriere/fort-und-weiterbildung/ueberblick"},{text:this.training.title,to:"/karriere/fort-und-weiterbildung/ueberblick/".concat(this.training.slug)}]}},watch:{"$route.params.slug":function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTraining();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getTraining()},methods:{getTraining:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                weiterbildung(slug: "'.concat(t.$route.params.slug,'") {\n                  title\n                  content\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                  seo {\n                    title\n                    metaDesc\n                  }\n                }\n              }\n            ')}});case 3:if(n=e.sent,n.data.data.weiterbildung){e.next=6;break}throw new Error;case 6:t.training=n.data.data.weiterbildung,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$router.push("/karriere/fort-und-weiterbildung/ueberblick");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},d=l,b=(n("d5b8"),n("2877")),f=Object(b["a"])(d,r,i,!1,null,null,null);e["default"]=f.exports},"4bdb":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"card overflow-hidden shadow1"},[r("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():r("div",{staticClass:"col-md-3"},[r("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:n("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),r("div",{staticClass:"col"},[r("div",{staticClass:"card-body p-3 p-lg-4"},[r("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),r("b-button",{attrs:{to:"/",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Bist Du auf der Suche nach einer "),n("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),n("br"),t._v(" Du willst Dich "),n("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),n("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],a={name:"BannerJobboard",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},s=a,c=(n("b946"),n("2877")),o=Object(c["a"])(s,r,i,!1,null,"45042856",null);e["a"]=o.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("e330"),i=n("1d80"),a=n("577e"),s=n("5899"),c=r("".replace),o="["+s+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=a(i(e));return 1&t&&(n=c(n,u,"")),2&t&&(n=c(n,l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(t,e,n){var r=n("1626"),i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var s,c;return a&&r(s=e.constructor)&&s!==n&&i(c=s.prototype)&&c!==n.prototype&&a(t,c),t}},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),a=n("44ad"),s=n("fc6a"),c=n("a640"),o=i([].join),u=a!=Object,l=c("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(t){return o(s(this),void 0===t?",":t)}})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),a=n("e330"),s=n("94ca"),c=n("6eeb"),o=n("1a2d"),u=n("7156"),l=n("3a9b"),d=n("d9b5"),b=n("c04e"),f=n("d039"),g=n("241c").f,p=n("06cf").f,m=n("9bf2").f,h=n("408a"),v=n("58a8").trim,w="Number",x=i[w],y=x.prototype,I=i.TypeError,_=a("".slice),k=a("".charCodeAt),C=function(t){var e=b(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,i,a,s,c,o,u=b(t,"number");if(d(u))throw I("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=v(u),e=k(u,0),43===e||45===e){if(n=k(u,2),88===n||120===n)return NaN}else if(48===e){switch(k(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(a=_(u,2),s=a.length,c=0;c<s;c++)if(o=k(a,c),o<48||o>i)return NaN;return parseInt(a,r)}return+u};if(s(w,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var N,j=function(t){var e=arguments.length<1?0:x(C(t)),n=this;return l(y,n)&&f((function(){h(n)}))?u(Object(e),n,j):e},T=r?g(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;T.length>O;O++)o(x,N=T[O])&&!o(j,N)&&m(j,N,p(x,N));j.prototype=y,y.constructor=j,c(i,w,j)}},b853:function(t,e,n){},b946:function(t,e,n){"use strict";n("b853")},ca31:function(t,e,n){t.exports=n.p+"img/search_engine__monochromatic.50ef63ab.svg"},d5b8:function(t,e,n){"use strict";n("3294")}}]);
//# sourceMappingURL=career-training-single-legacy.2a309172.js.map