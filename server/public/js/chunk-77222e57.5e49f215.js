(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77222e57"],{"037e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","facebook-square"],size:"lg"}}),t._v(" "+t._s(t.content)+" "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],c=(r("99af"),{name:"FacebookShareBtn",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(r))}}}),i=c,o=r("2877"),s=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=s.exports},"0663":function(t,e,r){},1144:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","twitter"],size:"lg"}}),t._v(" Twitter "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],c=(r("99af"),{name:"TwitterShareBtn",props:{sharePath:{type:String,default:""},title:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(r))}}}),i=c,o=r("2877"),s=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=s.exports},1276:function(t,e,r){"use strict";var a=r("d784"),n=r("44e7"),c=r("825a"),i=r("1d80"),o=r("4840"),s=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),b=[].push,p=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var a=String(i(this)),c=void 0===r?h:r>>>0;if(0===c)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,c);var o,s,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(o=d.call(g,a)){if(s=g.lastIndex,s>p&&(u.push(a.slice(p,o.index)),o.length>1&&o.index<a.length&&b.apply(u,o.slice(1)),l=o[0].length,p=s,u.length>=c))break;g.lastIndex===o.index&&g.lastIndex++}return p===a.length?!l&&g.test("")||u.push(""):u.push(a.slice(p)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var n=i(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,n,r):a.call(String(n),e,r)},function(t,n){var i=r(a,t,this,n,a!==e);if(i.done)return i.value;var d=c(t),f=String(this),b=o(d,RegExp),m=d.unicode,O=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new b(g?d:"^(?:"+d.source+")",O),j=void 0===n?h:n>>>0;if(0===j)return[];if(0===f.length)return null===u(v,f)?[f]:[];var y=0,x=0,w=[];while(x<f.length){v.lastIndex=g?x:0;var P,C=u(v,g?f:f.slice(x));if(null===C||(P=p(l(v.lastIndex+(g?0:x)),f.length))===y)x=s(f,x,m);else{if(w.push(f.slice(y,x)),w.length===j)return w;for(var _=1;_<=C.length-1;_++)if(w.push(C[_]),w.length===j)return w;x=y=P}}return w.push(f.slice(y)),w}]}),!g)},"14c3":function(t,e,r){var a=r("c6b6"),n=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var c=r.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("9b76"),s=r("8690"),l=r("365c"),u=r("d82f"),d=r("cf75"),f=r("d580"),b=r("6197"),p=r("b885");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(d["d"])(Object(u["m"])(g(g({},Object(d["a"])(f["a"],d["f"].bind(null,"footer"))),{},{footer:Object(d["c"])(i["s"]),footerClass:Object(d["c"])(i["e"]),footerHtml:Object(d["c"])(i["s"])})),c["m"]),v=a["default"].extend({name:c["m"],functional:!0,props:O,render:function(t,e){var r,a=e.props,c=e.data,i=e.children,o=a.footerBgVariant,l=a.footerBorderVariant,u=a.footerTextVariant;return t(a.footerTag,Object(n["a"])(c,{staticClass:"card-footer",class:[a.footerClass,(r={},m(r,"bg-".concat(o),o),m(r,"border-".concat(l),l),m(r,"text-".concat(u),u),r)],domProps:i?{}:Object(s["a"])(a.footerHtml,a.footer)}),i)}}),j=r("2812");function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=Object(d["a"])(j["b"],d["f"].bind(null,"img"));P.imgSrc.required=!1;var C=Object(d["d"])(Object(u["m"])(x(x(x(x(x(x({},b["b"]),p["b"]),O),P),f["a"]),{},{align:Object(d["c"])(i["s"]),noBody:Object(d["c"])(i["g"],!1)})),c["k"]),_=a["default"].extend({name:c["k"],functional:!0,props:C,render:function(t,e){var r,a=e.props,c=e.data,i=e.slots,u=e.scopedSlots,f=a.imgSrc,h=a.imgLeft,g=a.imgRight,m=a.imgStart,y=a.imgEnd,x=a.imgBottom,C=a.header,_=a.headerHtml,E=a.footer,k=a.footerHtml,I=a.align,S=a.textVariant,A=a.bgVariant,T=a.borderVariant,B=u||{},$=i(),D={},R=t(),N=t();if(f){var F=t(j["a"],{props:Object(d["e"])(P,a,d["h"].bind(null,"img"))});x?N=F:R=F}var V=t(),L=Object(l["a"])(o["n"],B,$);(L||C||_)&&(V=t(p["a"],{props:Object(d["e"])(p["b"],a),domProps:L?{}:Object(s["a"])(_,C)},Object(l["b"])(o["n"],D,B,$)));var M=Object(l["b"])(o["e"],D,B,$);a.noBody||(M=t(b["a"],{props:Object(d["e"])(b["b"],a)},M),a.overlay&&f&&(M=t("div",{staticClass:"position-relative"},[R,M,N]),R=t(),N=t()));var U=t(),z=Object(l["a"])(o["m"],B,$);return(z||E||k)&&(U=t(v,{props:Object(d["e"])(O,a),domProps:L?{}:Object(s["a"])(k,E)},Object(l["b"])(o["m"],D,B,$))),t(a.tag,Object(n["a"])(c,{staticClass:"card",class:(r={"flex-row":h||m,"flex-row-reverse":(g||y)&&!(h||m)},w(r,"text-".concat(I),I),w(r,"bg-".concat(A),A),w(r,"border-".concat(T),T),w(r,"text-".concat(S),S),r)}),[R,V,M,U,N])}})},2812:function(t,e,r){"use strict";r.d(e,"b",(function(){return b})),r.d(e,"a",(function(){return p}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("d82f"),s=r("cf75"),l=r("4918");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=Object(s["d"])(Object(o["m"])(d(d({},Object(o["k"])(l["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(s["c"])(i["g"],!1),end:Object(s["c"])(i["g"],!1),start:Object(s["c"])(i["g"],!1),top:Object(s["c"])(i["g"],!1)})),c["o"]),p=a["default"].extend({name:c["o"],functional:!0,props:b,render:function(t,e){var r=e.props,a=e.data,c=r.src,i=r.alt,o=r.width,s=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),t("img",Object(n["a"])(a,{class:l,attrs:{src:c,alt:i,width:o,height:s}}))}})},"3c2c":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/blog/article/"+t.article.slug,"aria-label":t.article.title}},[r("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"article"}},[r("BCardImgLazy",{attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",top:"",fluid:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:t.article.title}}),r("BCardText",[r("div",{domProps:{innerHTML:t._s(t.article.excerpt)}})]),r("hr"),r("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center"},[r("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.node.name?r("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),r("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.nodes.length>0?r("BBadge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)],1)],1)},n=[],c=r("2b0e"),i=r("e98b"),o=r("205f"),s=r("6197"),l=r("60f1"),u=r("4968"),d=r("d6e4");c["default"].component("BBadge",i["a"]),c["default"].component("BCard",o["a"]),c["default"].component("BCardBody",s["a"]),c["default"].component("BCardImgLazy",l["a"]),c["default"].component("BCardTitle",u["a"]),c["default"].component("BCardText",d["a"]);var f={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},b=f,p=(r("ff23"),r("2877")),h=Object(p["a"])(b,a,n,!1,null,"04cc0ed6",null);e["a"]=h.exports},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=r("fa73"),l=Object(o["d"])({title:Object(o["c"])(i["s"]),titleTag:Object(o["c"])(i["s"],"h4")},c["s"]),u=a["default"].extend({name:c["s"],functional:!0,props:l,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),c||Object(s["g"])(r.title))}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),c="["+n+"]",i=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),s=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"58de":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("article",[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.article.title))]),r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),r("b-container",{staticClass:"cms-article mt-3 mb-5"},[r("div",{staticClass:"position-relative"},[t.article.featuredImage?r("b-img-lazy",{staticClass:"mt-3 mb-4",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",sizes:"100vw",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000",fluid:""}}):t._e(),t.article.author.node.avatar&&t.article.featuredImage?r("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[r("b-img",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),t.article.author.node.name?r("div",[t._v(" by "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e()],1),r("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),r("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[r("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("b-img",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),r("div",{staticClass:"h6"},[r("span",[t._v(" Liebe Grüße, ")]),r("br"),r("span",[t._v(t._s(t.article.author.node.name))])])],1):t._e(),r("div",{staticClass:"text-primary"},[t.article.author.node.url?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.url,target:"blank"}},[r("Fa",{attrs:{icon:["fa","globe"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.facebook?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.facebook,target:"blank"}},[r("Fa",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.instagram?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.instagram,target:"blank"}},[r("Fa",{attrs:{icon:["fab","instagram"],size:"2x"}})],1):t._e()],1)]),r("div",[r("FacebookShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),r("TwitterShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),r("WhatsAppShareBtn",{staticClass:"mb-2 mb-lg-0"})],1),"Erfahrungsbericht"===t.article.tags.nodes[0].name?r("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),r("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])]),r("b-container",[r("RandomArticlesContainer")],1),t.article.title?r("Head",{attrs:{title:t.article.title,desc:t.article.excerpt,img:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",script:t.snippet}}):t._e(),r("ArticleStructuredData",{attrs:{article:t.article}})],1):t._e()},n=[],c=(r("99af"),r("7db0"),r("a15b"),r("d81d"),r("fb6a"),r("ac1f"),r("1276"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")}),i=[],o={name:"ArticleStructuredData",props:{article:{type:Object,default:function(){}}},head:{script:function(){if(this.article.title)return[{type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"Article",headline:this.article.title,author:{"@type":"Person",name:"".concat(this.article.author.node.firstName," ").concat(this.article.author.node.lastName),image:this.article.author.node.avatar?this.article.author.node.avatar.url:""},publisher:{"@type":"Organization",name:"MFA mal anders",logo:{"@type":"ImageObject",url:"/img/MfaMalAnders_logo_circle_dark.png"}},image:this.article.featuredImage.node.sourceUrl,datePublished:this.article.date,dateModofied:this.article.modified})}]}},watch:{article:function(){this.$emit("updateHead")}}},s=o,l=r("2877"),u=Object(l["a"])(s,c,i,!1,null,null,null),d=u.exports,f=r("e674"),b=r("037e"),p=r("1144"),h=r("b13b"),g={name:"Article",components:{ArticleStructuredData:d,RandomArticlesContainer:f["a"],FacebookShareBtn:b["a"],TwitterShareBtn:p["a"],WhatsAppShareBtn:h["a"]},data:function(){return{snippet:[{type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Blog",\n              "item": "https://www.mfa-mal-anders.de/blog"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n              "item": "https://www.mfa-mal-anders.de/article/').concat(this.$route.params.slug,'"\n            }]\n          }')}]}},computed:{article:function(){var t=this;return this.$store.state.articles.articles.find((function(e){return e.slug===t.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/article/".concat(this.$route.params.slug)}]}}},m=g,O=(r("7f17"),Object(l["a"])(m,a,n,!1,null,null,null));e["default"]=O.exports},"60f1":function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("d82f"),o=r("cf75"),s=r("4918"),l=r("f479"),u=r("2812");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(o["d"])(Object(i["m"])(f(f({},Object(i["j"])(l["b"],Object(i["h"])(s["b"]))),Object(i["j"])(u["b"],["src","alt","width","height"]))),c["p"]),h=a["default"].extend({name:c["p"],functional:!0,props:p,render:function(t,e){var r=e.props,a=e.data,c="card-img";return r.top?c+="-top":r.right||r.end?c+="-right":r.bottom?c+="-bottom":(r.left||r.start)&&(c+="-left"),t(l["a"],Object(n["a"])(a,{class:[c],props:Object(i["j"])(r,["left","right"])}))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return O}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("d82f"),s=r("cf75"),l=r("d580"),u=r("4968"),d=r("fa73"),f=Object(s["d"])({subTitle:Object(s["c"])(i["s"]),subTitleTag:Object(s["c"])(i["s"],"h6"),subTitleTextVariant:Object(s["c"])(i["s"],"muted")},c["q"]),b=a["default"].extend({name:c["q"],functional:!0,props:f,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.subTitleTag,Object(n["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),c||Object(d["g"])(r.subTitle))}});function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(s["d"])(Object(o["m"])(h(h(h(h({},u["b"]),f),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(i["e"]),overlay:Object(s["c"])(i["g"],!1)})),c["l"]),O=a["default"].extend({name:c["l"],functional:!0,props:m,render:function(t,e){var r,a=e.props,c=e.data,i=e.children,o=a.bodyBgVariant,l=a.bodyBorderVariant,d=a.bodyTextVariant,p=t();a.title&&(p=t(u["a"],{props:Object(s["e"])(u["b"],a)}));var h=t();return a.subTitle&&(h=t(b,{props:Object(s["e"])(f,a),class:["mb-2"]})),t(a.bodyTag,Object(n["a"])(c,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},g(r,"bg-".concat(o),o),g(r,"border-".concat(l),l),g(r,"text-".concat(d),d),r),a.bodyClass]}),[p,h,i])}})},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var c,i;return n&&"function"==typeof(c=e.constructor)&&c!==r&&a(i=c.prototype)&&i!==r.prototype&&n(t,i),t}},"7db0":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").find,c=r("44d2"),i=r("ae40"),o="find",s=!0,l=i(o);o in[]&&Array(1)[o]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},"7f17":function(t,e,r){"use strict";r("e525")},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},9263:function(t,e,r){"use strict";var a=r("ad6d"),n=r("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||l;d&&(o=function(t){var e,r,n,o,d=this,f=l&&d.sticky,b=a.call(d),p=d.source,h=0,g=t;return f&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),r=new RegExp("^(?:"+p+")",b)),u&&(r=new RegExp("^"+p+"$(?!\\s)",b)),s&&(e=d.lastIndex),n=c.call(f?r:d,g),f?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:s&&n&&(d.lastIndex=d.global?n.index+n[0].length:e),u&&n&&n.length>1&&i.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=o},"9f7f":function(t,e,r){"use strict";var a=r("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,r){"use strict";var a=r("23e7"),n=r("44ad"),c=r("fc6a"),i=r("a640"),o=[].join,s=n!=Object,l=i("join",",");a({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(c(this),void 0===t?",":t)}})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),c=r("94ca"),i=r("6eeb"),o=r("5135"),s=r("c6b6"),l=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),b=r("241c").f,p=r("06cf").f,h=r("9bf2").f,g=r("58a8").trim,m="Number",O=n[m],v=O.prototype,j=s(f(v))==m,y=function(t){var e,r,a,n,c,i,o,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(c=l.slice(2),i=c.length,o=0;o<i;o++)if(s=c.charCodeAt(o),s<48||s>n)return NaN;return parseInt(c,a)}return+l};if(c(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var x,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(j?d((function(){v.valueOf.call(r)})):s(r)!=m)?l(new O(y(e)),r,w):y(e)},P=a?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;P.length>C;C++)o(O,x=P[C])&&!o(w,x)&&h(w,x,p(O,x));w.prototype=v,v.constructor=w,i(n,m,w)}},ac1f:function(t,e,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},b13b:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","whatsapp"],size:"lg"}}),t._v(" WhatsApp "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],c=(r("99af"),{name:"WhatsAppShareBtn",props:{sharePath:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(r))}}}),i=c,o=r("2877"),s=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=s.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return h}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("8690"),s=r("d82f"),l=r("cf75"),u=r("d580");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(l["d"])(Object(s["m"])(f(f({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(i["s"]),headerClass:Object(l["c"])(i["e"]),headerHtml:Object(l["c"])(i["s"])})),c["n"]),h=a["default"].extend({name:c["n"],functional:!0,props:p,render:function(t,e){var r,a=e.props,c=e.data,i=e.children,s=a.headerBgVariant,l=a.headerBorderVariant,u=a.headerTextVariant;return t(a.headerTag,Object(n["a"])(c,{staticClass:"card-header",class:[a.headerClass,(r={},b(r,"bg-".concat(s),s),b(r,"border-".concat(l),l),b(r,"text-".concat(u),u),r)],domProps:i?{}:Object(o["a"])(a.headerHtml,a.header)}),i)}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r("2b0e"),n=r("c637"),c=r("a723"),i=r("cf75"),o=Object(i["d"])({bgVariant:Object(i["c"])(c["s"]),borderVariant:Object(i["c"])(c["s"]),tag:Object(i["c"])(c["s"],"div"),textVariant:Object(i["c"])(c["s"])},n["k"]);a["default"].extend({props:o})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["s"],"p")},c["r"]),l=a["default"].extend({name:c["r"],functional:!0,props:s,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),c)}})},d784:function(t,e,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),c=r("b622"),i=r("9263"),o=r("9112"),s=c("species"),l=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),b=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var p=c(t),h=!n((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h&&!n((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!h||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!b){var m=/./[p],O=r(p,""[t],(function(t,e,r,a,n){return e.exec===i?h&&!n?{done:!0,value:m.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=O[0],j=O[1];a(String.prototype,t,v),a(RegExp.prototype,p,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,c=r("1dde"),i=r("ae40"),o=c("map"),s=i("map");a({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e525:function(t,e,r){},e674:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",t._l(t.articles,(function(e){return r("b-col",{key:e.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/t.number}},[r("ArticleCard",{attrs:{article:e}})],1)})),1)},n=[],c=(r("a9e3"),r("3c2c")),i={name:"RandomArticlesContainer",components:{ArticleCard:c["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(t,e){t!=e&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(t,e){var r=new Array(e),a=t.length,n=new Array(a);if(e>a)throw new RangeError("getRandom: more elements taken than available");while(e--){var c=Math.floor(Math.random()*a);r[e]=t[c in n?n[c]:c],n[c]=--a in n?n[a]:a}return r},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},o=i,s=r("2877"),l=Object(s["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},e98b:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),i=r("a723"),o=r("d82f"),s=r("cf75"),l=r("4a38"),u=r("aa59");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(o["j"])(u["b"],["event","routerTag"]);delete p.href.default,delete p.to.default;var h=Object(s["d"])(Object(o["m"])(f(f({},p),{},{pill:Object(s["c"])(i["g"],!1),tag:Object(s["c"])(i["s"],"span"),variant:Object(s["c"])(i["s"],"secondary")})),c["b"]),g=a["default"].extend({name:c["b"],functional:!0,props:h,render:function(t,e){var r=e.props,a=e.data,c=e.children,i=r.active,o=r.disabled,d=Object(l["d"])(r),f=d?u["a"]:r.tag,b=r.variant||"secondary";return t(f,Object(n["a"])(a,{staticClass:"badge",class:["badge-".concat(b),{"badge-pill":r.pill,active:i,disabled:o}],props:d?Object(s["e"])(p,r):{}}),c)}})},ff23:function(t,e,r){"use strict";r("0663")}}]);
//# sourceMappingURL=chunk-77222e57.5e49f215.js.map