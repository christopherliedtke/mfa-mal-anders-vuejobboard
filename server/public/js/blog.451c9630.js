(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"037e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","facebook-square"],size:"lg"}}),t._v(" "+t._s(t.content)+" "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],i={name:"FacebookShareBtn",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r})}}},c=i,o=r("2877"),s=Object(o["a"])(c,a,n,!1,null,null,null);e["a"]=s.exports},"0b52":function(t,e,r){"use strict";r("6d81")},1144:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","twitter"],size:"lg"}}),t._v(" Twitter "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],i={name:"TwitterShareBtn",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r})}}},c=i,o=r("2877"),s=Object(o["a"])(c,a,n,!1,null,null,null);e["a"]=s.exports},1276:function(t,e,r){"use strict";var a=r("d784"),n=r("44e7"),i=r("825a"),c=r("1d80"),o=r("4840"),s=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),b=[].push,p=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var a=String(c(this)),i=void 0===r?h:r>>>0;if(0===i)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,i);var o,s,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(o=d.call(g,a)){if(s=g.lastIndex,s>p&&(u.push(a.slice(p,o.index)),o.length>1&&o.index<a.length&&b.apply(u,o.slice(1)),l=o[0].length,p=s,u.length>=i))break;g.lastIndex===o.index&&g.lastIndex++}return p===a.length?!l&&g.test("")||u.push(""):u.push(a.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var n=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n,r):a.call(String(n),e,r)},function(t,n){var c=r(a,t,this,n,a!==e);if(c.done)return c.value;var d=i(t),f=String(this),b=o(d,RegExp),m=d.unicode,O=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new b(g?d:"^(?:"+d.source+")",O),j=void 0===n?h:n>>>0;if(0===j)return[];if(0===f.length)return null===u(v,f)?[f]:[];var y=0,w=0,x=[];while(w<f.length){v.lastIndex=g?w:0;var P,C=u(v,g?f:f.slice(w));if(null===C||(P=p(l(v.lastIndex+(g?0:w)),f.length))===y)w=s(f,w,m);else{if(x.push(f.slice(y,w)),x.length===j)return x;for(var _=1;_<=C.length-1;_++)if(x.push(C[_]),x.length===j)return x;w=y=P}}return x.push(f.slice(y)),x}]}),!g)},"14c3":function(t,e,r){var a=r("c6b6"),n=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("9b76"),s=r("8690"),l=r("365c"),u=r("d82f"),d=r("cf75"),f=r("d580"),b=r("6197"),p=r("b885");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(d["d"])(Object(u["m"])(g(g({},Object(d["a"])(f["a"],d["f"].bind(null,"footer"))),{},{footer:Object(d["c"])(c["s"]),footerClass:Object(d["c"])(c["e"]),footerHtml:Object(d["c"])(c["s"])})),i["l"]),v=a["default"].extend({name:i["l"],functional:!0,props:O,render:function(t,e){var r,a=e.props,i=e.data,c=e.children,o=a.footerBgVariant,l=a.footerBorderVariant,u=a.footerTextVariant;return t(a.footerTag,Object(n["a"])(i,{staticClass:"card-footer",class:[a.footerClass,(r={},m(r,"bg-".concat(o),o),m(r,"border-".concat(l),l),m(r,"text-".concat(u),u),r)],domProps:c?{}:Object(s["a"])(a.footerHtml,a.footer)}),c)}}),j=r("2812");function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=Object(d["a"])(j["b"],d["f"].bind(null,"img"));P.imgSrc.required=!1;var C=Object(d["d"])(Object(u["m"])(w(w(w(w(w(w({},b["b"]),p["b"]),O),P),f["a"]),{},{align:Object(d["c"])(c["s"]),noBody:Object(d["c"])(c["g"],!1)})),i["j"]),_=a["default"].extend({name:i["j"],functional:!0,props:C,render:function(t,e){var r,a=e.props,i=e.data,c=e.slots,u=e.scopedSlots,f=a.imgSrc,h=a.imgLeft,g=a.imgRight,m=a.imgStart,y=a.imgEnd,w=a.imgBottom,C=a.header,_=a.headerHtml,E=a.footer,k=a.footerHtml,I=a.align,A=a.textVariant,S=a.bgVariant,T=a.borderVariant,B=u||{},$=c(),D={},R=t(),N=t();if(f){var z=t(j["a"],{props:Object(d["e"])(P,a,d["h"].bind(null,"img"))});w?N=z:R=z}var F=t(),V=Object(l["a"])(o["n"],B,$);(V||C||_)&&(F=t(p["a"],{props:Object(d["e"])(p["b"],a),domProps:V?{}:Object(s["a"])(_,C)},Object(l["b"])(o["n"],D,B,$)));var L=Object(l["b"])(o["e"],D,B,$);a.noBody||(L=t(b["a"],{props:Object(d["e"])(b["b"],a)},L),a.overlay&&f&&(L=t("div",{staticClass:"position-relative"},[R,L,N]),R=t(),N=t()));var M=t(),U=Object(l["a"])(o["m"],B,$);return(U||E||k)&&(M=t(v,{props:Object(d["e"])(O,a),domProps:V?{}:Object(s["a"])(k,E)},Object(l["b"])(o["m"],D,B,$))),t(a.tag,Object(n["a"])(i,{staticClass:"card",class:(r={"flex-row":h||m,"flex-row-reverse":(g||y)&&!(h||m)},x(r,"text-".concat(I),I),x(r,"bg-".concat(S),S),x(r,"border-".concat(T),T),x(r,"text-".concat(A),A),r)}),[R,F,L,M,N])}})},2812:function(t,e,r){"use strict";r.d(e,"b",(function(){return b})),r.d(e,"a",(function(){return p}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("d82f"),s=r("cf75"),l=r("4918");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=Object(s["d"])(Object(o["m"])(d(d({},Object(o["k"])(l["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(s["c"])(c["g"],!1),end:Object(s["c"])(c["g"],!1),start:Object(s["c"])(c["g"],!1),top:Object(s["c"])(c["g"],!1)})),i["n"]),p=a["default"].extend({name:i["n"],functional:!0,props:b,render:function(t,e){var r=e.props,a=e.data,i=r.src,c=r.alt,o=r.width,s=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),t("img",Object(n["a"])(a,{class:l,attrs:{src:i,alt:c,width:o,height:s}}))}})},"3a4e":function(t,e,r){},"3c2c":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/blog/article/"+t.article.slug,"aria-label":t.article.title}},[r("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"div"}},[r("BCardImgLazy",{attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",top:"",fluid:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:t.article.title}}),r("BCardText",[r("div",{domProps:{innerHTML:t._s(t.article.excerpt)}})]),r("hr"),r("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center"},[r("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.node.name?r("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),r("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.nodes.length>0?r("BBadge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)],1)],1)},n=[],i=r("2b0e"),c=r("e98b"),o=r("205f"),s=r("6197"),l=r("60f1"),u=r("4968"),d=r("d6e4");i["default"].component("BBadge",c["a"]),i["default"].component("BCard",o["a"]),i["default"].component("BCardBody",s["a"]),i["default"].component("BCardImgLazy",l["a"]),i["default"].component("BCardTitle",u["a"]),i["default"].component("BCardText",d["a"]);var f={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},b=f,p=(r("0b52"),r("2877")),h=Object(p["a"])(b,a,n,!1,null,"ac31008c",null);e["a"]=h.exports},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("cf75"),s=r("fa73"),l=Object(o["d"])({title:Object(o["c"])(c["s"]),titleTag:Object(o["c"])(c["s"],"h4")},i["r"]),u=a["default"].extend({name:i["r"],functional:!0,props:l,render:function(t,e){var r=e.props,a=e.data,i=e.children;return t(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),i||Object(s["g"])(r.title))}})},"57bd":function(t,e,r){"use strict";r("3a4e")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),i="["+n+"]",c=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),s=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"58de":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("div",[r("article",[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.article.title))]),r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),r("div",{staticClass:"cms-article container mt-3 mb-5"},[r("div",{staticClass:"position-relative"},[t.article.featuredImage?r("b-img-lazy",{staticClass:"mt-3 mb-4",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",sizes:"100vw",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000",fluid:""}}):t._e(),t.article.author.node.avatar&&t.article.featuredImage?r("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[r("b-img",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),t.article.author.node.name?r("div",[t._v(" von "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e()],1),r("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),r("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[r("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("b-img",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),r("div",{staticClass:"h6"},[r("span",[t._v(" Liebe Grüße, ")]),r("br"),r("span",[t._v(t._s(t.article.author.node.name))])])],1):t._e(),r("div",{staticClass:"text-primary"},[t.article.author.node.url?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.url,target:"blank"}},[r("Fa",{attrs:{icon:["fa","globe"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.facebook?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.facebook,target:"blank"}},[r("Fa",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.instagram?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.instagram,target:"blank"}},[r("Fa",{attrs:{icon:["fab","instagram"],size:"2x"}})],1):t._e()],1)]),r("div",[r("FacebookShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),r("TwitterShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),r("WhatsAppShareBtn",{staticClass:"mb-2 mb-lg-0"})],1),"Erfahrungsbericht"===t.article.tags.nodes[0].name?r("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),r("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])])]),r("div",{staticClass:"container"},[r("RandomArticlesContainer")],1),t.article.seo.title?r("Head",{attrs:{title:t.article.seo.title,desc:t.article.seo.metaDesc,img:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",script:t.snippet}}):t._e(),r("ArticleStructuredData",{attrs:{article:t.article}})],1):t._e()},n=[],i=(r("99af"),r("7db0"),r("a15b"),r("d81d"),r("fb6a"),r("ac1f"),r("1276"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")}),c=[],o={name:"ArticleStructuredData",props:{article:{type:Object,default:function(){}}},head:{script:function(){if(this.article.title)return[{type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"Article",headline:this.article.title,author:{"@type":"Person",name:"".concat(this.article.author.node.firstName," ").concat(this.article.author.node.lastName),image:this.article.author.node.avatar?this.article.author.node.avatar.url:""},publisher:{"@type":"Organization",name:"MFA mal anders",logo:{"@type":"ImageObject",url:"/img/MfaMalAnders_logo_circle_dark.png"}},image:this.article.featuredImage.node.sourceUrl,datePublished:this.article.date,dateModofied:this.article.modified})}]}},watch:{article:function(){this.$emit("updateHead")}}},s=o,l=r("2877"),u=Object(l["a"])(s,i,c,!1,null,null,null),d=u.exports,f=r("e674"),b=r("037e"),p=r("1144"),h=r("b13b"),g={name:"Article",components:{ArticleStructuredData:d,RandomArticlesContainer:f["a"],FacebookShareBtn:b["a"],TwitterShareBtn:p["a"],WhatsAppShareBtn:h["a"]},data:function(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Blog",\n              "item": "https://www.mfa-mal-anders.de/blog"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n              "item": "https://www.mfa-mal-anders.de/article/').concat(this.$route.params.slug,'"\n            }]\n          }')}]}},computed:{article:function(){var t=this;return this.$store.state.articles.articles.find((function(e){return e.slug===t.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/article/".concat(this.$route.params.slug)}]}},created:function(){this.$store.dispatch("getArticles")}},m=g,O=(r("7f17"),Object(l["a"])(m,a,n,!1,null,null,null));e["default"]=O.exports},"60f1":function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("d82f"),o=r("cf75"),s=r("4918"),l=r("f479"),u=r("2812");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(o["d"])(Object(c["m"])(f(f({},Object(c["j"])(l["b"],Object(c["h"])(s["b"]))),Object(c["j"])(u["b"],["src","alt","width","height"]))),i["o"]),h=a["default"].extend({name:i["o"],functional:!0,props:p,render:function(t,e){var r=e.props,a=e.data,i="card-img";return r.top?i+="-top":r.right||r.end?i+="-right":r.bottom?i+="-bottom":(r.left||r.start)&&(i+="-left"),t(l["a"],Object(n["a"])(a,{class:[i],props:Object(c["j"])(r,["left","right"])}))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return O}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("d82f"),s=r("cf75"),l=r("d580"),u=r("4968"),d=r("fa73"),f=Object(s["d"])({subTitle:Object(s["c"])(c["s"]),subTitleTag:Object(s["c"])(c["s"],"h6"),subTitleTextVariant:Object(s["c"])(c["s"],"muted")},i["p"]),b=a["default"].extend({name:i["p"],functional:!0,props:f,render:function(t,e){var r=e.props,a=e.data,i=e.children;return t(r.subTitleTag,Object(n["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),i||Object(d["g"])(r.subTitle))}});function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(s["d"])(Object(o["m"])(h(h(h(h({},u["b"]),f),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(c["e"]),overlay:Object(s["c"])(c["g"],!1)})),i["k"]),O=a["default"].extend({name:i["k"],functional:!0,props:m,render:function(t,e){var r,a=e.props,i=e.data,c=e.children,o=a.bodyBgVariant,l=a.bodyBorderVariant,d=a.bodyTextVariant,p=t();a.title&&(p=t(u["a"],{props:Object(s["e"])(u["b"],a)}));var h=t();return a.subTitle&&(h=t(b,{props:Object(s["e"])(f,a),class:["mb-2"]})),t(a.bodyTag,Object(n["a"])(i,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},g(r,"bg-".concat(o),o),g(r,"border-".concat(l),l),g(r,"text-".concat(d),d),r),a.bodyClass]}),[p,h,c])}})},"66ba":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"magazin"},[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.title))]),r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),t.$config.cms.active&&t.articles?r("div",{staticClass:"container py-3 py-lg-5"},[r("div",{staticClass:"grid"},t._l(t.articles,(function(t){return r("ArticleCard",{key:t.id,attrs:{article:t}})})),1)]):t._e(),r("Head",{attrs:{title:t.title,desc:"Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr...",img:"",script:t.snippet}})],1)},n=[],i=r("3c2c"),c={name:"Blog",components:{ArticleCard:i["a"]},data:function(){return{title:this.$config.cms.postsPageTitle,breadcrumbs:[{text:"Home",to:"/"},{text:"Blog",to:"/blog"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Blog",\n                              "item": "https://www.mfa-mal-anders.de/blog"\n                          }]\n                      }'}]}},computed:{articles:function(){return this.$store.state.articles.articles}},created:function(){this.$store.dispatch("getArticles")}},o=c,s=(r("57bd"),r("2877")),l=Object(s["a"])(o,a,n,!1,null,"ad4d0748",null);e["default"]=l.exports},"6d81":function(t,e,r){},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var i,c;return n&&"function"==typeof(i=e.constructor)&&i!==r&&a(c=i.prototype)&&c!==r.prototype&&n(t,c),t}},"7db0":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").find,i=r("44d2"),c=r("ae40"),o="find",s=!0,l=c(o);o in[]&&Array(1)[o]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"7f17":function(t,e,r){"use strict";r("e525")},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},9263:function(t,e,r){"use strict";var a=r("ad6d"),n=r("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||l;d&&(o=function(t){var e,r,n,o,d=this,f=l&&d.sticky,b=a.call(d),p=d.source,h=0,g=t;return f&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),r=new RegExp("^(?:"+p+")",b)),u&&(r=new RegExp("^"+p+"$(?!\\s)",b)),s&&(e=d.lastIndex),n=i.call(f?r:d,g),f?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:s&&n&&(d.lastIndex=d.global?n.index+n[0].length:e),u&&n&&n.length>1&&c.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=o},"9f7f":function(t,e,r){"use strict";var a=r("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,r){"use strict";var a=r("23e7"),n=r("44ad"),i=r("fc6a"),c=r("a640"),o=[].join,s=n!=Object,l=c("join",",");a({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(i(this),void 0===t?",":t)}})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),c=r("6eeb"),o=r("5135"),s=r("c6b6"),l=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),b=r("241c").f,p=r("06cf").f,h=r("9bf2").f,g=r("58a8").trim,m="Number",O=n[m],v=O.prototype,j=s(f(v))==m,y=function(t){var e,r,a,n,i,c,o,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(i=l.slice(2),c=i.length,o=0;o<c;o++)if(s=i.charCodeAt(o),s<48||s>n)return NaN;return parseInt(i,a)}return+l};if(i(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(j?d((function(){v.valueOf.call(r)})):s(r)!=m)?l(new O(y(e)),r,x):y(e)},P=a?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;P.length>C;C++)o(O,w=P[C])&&!o(x,w)&&h(x,w,p(O,w));x.prototype=v,v.constructor=x,c(n,m,x)}},ac1f:function(t,e,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},b13b:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","whatsapp"],size:"lg"}}),t._v(" WhatsApp "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],i={name:"WhatsAppShareBtn",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r})}}},c=i,o=r("2877"),s=Object(o["a"])(c,a,n,!1,null,null,null);e["a"]=s.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return h}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("8690"),s=r("d82f"),l=r("cf75"),u=r("d580");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(l["d"])(Object(s["m"])(f(f({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(c["s"]),headerClass:Object(l["c"])(c["e"]),headerHtml:Object(l["c"])(c["s"])})),i["m"]),h=a["default"].extend({name:i["m"],functional:!0,props:p,render:function(t,e){var r,a=e.props,i=e.data,c=e.children,s=a.headerBgVariant,l=a.headerBorderVariant,u=a.headerTextVariant;return t(a.headerTag,Object(n["a"])(i,{staticClass:"card-header",class:[a.headerClass,(r={},b(r,"bg-".concat(s),s),b(r,"border-".concat(l),l),b(r,"text-".concat(u),u),r)],domProps:c?{}:Object(o["a"])(a.headerHtml,a.header)}),c)}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r("2b0e"),n=r("c637"),i=r("a723"),c=r("cf75"),o=Object(c["d"])({bgVariant:Object(c["c"])(i["s"]),borderVariant:Object(c["c"])(i["s"]),tag:Object(c["c"])(i["s"],"div"),textVariant:Object(c["c"])(i["s"])},n["j"]);a["default"].extend({props:o})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(c["s"],"p")},i["q"]),l=a["default"].extend({name:i["q"],functional:!0,props:s,render:function(t,e){var r=e.props,a=e.data,i=e.children;return t(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),i)}})},d784:function(t,e,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),c=r("9263"),o=r("9112"),s=i("species"),l=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),b=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var p=i(t),h=!n((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h&&!n((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!h||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!b){var m=/./[p],O=r(p,""[t],(function(t,e,r,a,n){return e.exec===c?h&&!n?{done:!0,value:m.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=O[0],j=O[1];a(String.prototype,t,v),a(RegExp.prototype,p,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,i=r("1dde"),c=r("ae40"),o=i("map"),s=c("map");a({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e525:function(t,e,r){},e674:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.articles,(function(e){return r("div",{key:e.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]},[r("ArticleCard",{attrs:{article:e}})],1)})),0)},n=[],i=(r("a9e3"),r("96cf"),r("c964")),c=r("3c2c"),o={name:"RandomArticlesContainer",components:{ArticleCard:c["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(t,e){t!=e&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("getArticles"),t.getArticles();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRandom:function(t,e){var r=new Array(e),a=t.length,n=new Array(a);if(e>a)throw new RangeError("getRandom: more elements taken than available");while(e--){var i=Math.floor(Math.random()*a);r[e]=t[i in n?n[i]:i],n[i]=--a in n?n[a]:a}return r},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},s=o,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,null,null);e["a"]=u.exports},e98b:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var a=r("2b0e"),n=r("b42e"),i=r("c637"),c=r("a723"),o=r("d82f"),s=r("cf75"),l=r("4a38"),u=r("aa59");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(o["j"])(u["b"],["event","routerTag"]);delete p.href.default,delete p.to.default;var h=Object(s["d"])(Object(o["m"])(f(f({},p),{},{pill:Object(s["c"])(c["g"],!1),tag:Object(s["c"])(c["s"],"span"),variant:Object(s["c"])(c["s"],"secondary")})),i["b"]),g=a["default"].extend({name:i["b"],functional:!0,props:h,render:function(t,e){var r=e.props,a=e.data,i=e.children,c=r.active,o=r.disabled,d=Object(l["d"])(r),f=d?u["a"]:r.tag,b=r.variant||"secondary";return t(f,Object(n["a"])(a,{staticClass:"badge",class:["badge-".concat(b),{"badge-pill":r.pill,active:c,disabled:o}],props:d?Object(s["e"])(p,r):{}}),i)}})}}]);
//# sourceMappingURL=blog.451c9630.js.map