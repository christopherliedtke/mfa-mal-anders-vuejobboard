(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54a7412e"],{"037e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","facebook-square"],size:"lg"}}),t._v(" "+t._s(t.content)+" "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],i=(r("99af"),{name:"FacebookShareBtn",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(r))}}}),o=i,c=r("2877"),l=Object(c["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},"05f0":function(t,e,r){"use strict";r("3aaf")},1144:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","twitter"],size:"lg"}}),t._v(" Twitter "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],i=(r("99af"),{name:"TwitterShareBtn",props:{sharePath:{type:String,default:""},title:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(r))}}}),o=i,c=r("2877"),l=Object(c["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},1276:function(t,e,r){"use strict";var a=r("d784"),n=r("44e7"),i=r("825a"),o=r("1d80"),c=r("4840"),l=r("8aa5"),s=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),p=[].push,b=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var a=String(o(this)),i=void 0===r?h:r>>>0;if(0===i)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,i);var c,l,s,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,g=new RegExp(t.source,f+"g");while(c=d.call(g,a)){if(l=g.lastIndex,l>b&&(u.push(a.slice(b,c.index)),c.length>1&&c.index<a.length&&p.apply(u,c.slice(1)),s=c[0].length,b=l,u.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return b===a.length?!s&&g.test("")||u.push(""):u.push(a.slice(b)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var n=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n,r):a.call(String(n),e,r)},function(t,n){var o=r(a,t,this,n,a!==e);if(o.done)return o.value;var d=i(t),f=String(this),p=c(d,RegExp),m=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new p(g?d:"^(?:"+d.source+")",y),O=void 0===n?h:n>>>0;if(0===O)return[];if(0===f.length)return null===u(v,f)?[f]:[];var j=0,x=0,w=[];while(x<f.length){v.lastIndex=g?x:0;var C,P=u(v,g?f:f.slice(x));if(null===P||(C=b(s(v.lastIndex+(g?0:x)),f.length))===j)x=l(f,x,m);else{if(w.push(f.slice(j,x)),w.length===O)return w;for(var S=1;S<=P.length-1;S++)if(w.push(P[S]),w.length===O)return w;x=j=C}}return w.push(f.slice(j)),w}]}),!g)},"14c3":function(t,e,r){var a=r("c6b6"),n=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var a=r("b42e"),n=r("dcb3"),i=r("8690"),o=r("365c"),c=r("cf75"),l=r("d580"),s=r("6197"),u=r("b885");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=f(f({},Object(c["a"])(l["a"].props,c["c"].bind(null,"footer"))),{},{footer:{type:String},footerHtml:{type:String},footerClass:{type:[String,Object,Array]}}),h=n["a"].extend({name:"BCardFooter",functional:!0,props:b,render:function(t,e){var r,n=e.props,o=e.data,c=e.children,l=n.footerBgVariant,s=n.footerBorderVariant,u=n.footerTextVariant;return t(n.footerTag,Object(a["a"])(o,{staticClass:"card-footer",class:[n.footerClass,(r={},p(r,"bg-".concat(l),l),p(r,"border-".concat(s),s),p(r,"text-".concat(u),u),r)],domProps:c?{}:Object(i["a"])(n.footerHtml,n.footer)}),c)}}),g={src:{type:String,required:!0},alt:{type:String,default:null},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1},height:{type:[Number,String]},width:{type:[Number,String]}},m=n["a"].extend({name:"BCardImg",functional:!0,props:g,render:function(t,e){var r=e.props,n=e.data,i="card-img";return r.top?i+="-top":r.right||r.end?i+="-right":r.bottom?i+="-bottom":(r.left||r.start)&&(i+="-left"),t("img",Object(a["a"])(n,{class:[i],attrs:{src:r.src||null,alt:r.alt,height:r.height||null,width:r.width||null}}))}});function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=Object(c["a"])(g,c["c"].bind(null,"img"));j.imgSrc.required=!1;var x=v(v(v(v(v(v({},s["b"]),u["b"]),b),j),Object(c["a"])(l["a"].props)),{},{align:{type:String},noBody:{type:Boolean,default:!1}}),w=n["a"].extend({name:"BCard",functional:!0,props:x,render:function(t,e){var r,n=e.props,l=e.data,d=e.slots,f=e.scopedSlots,p=n.imgLeft,g=n.imgRight,y=n.imgStart,v=n.imgEnd,x=n.header,w=n.headerHtml,C=n.footer,P=n.footerHtml,S=n.align,E=n.textVariant,_=n.bgVariant,B=n.borderVariant,I=f||{},k=d(),T={},A=t(),$=t();if(n.imgSrc){var R=t(m,{props:Object(c["b"])(j,n,c["e"].bind(null,"img"))});n.imgBottom?$=R:A=R}var D=t(),N=Object(o["a"])("header",I,k);(N||x||w)&&(D=t(u["a"],{props:Object(c["b"])(u["b"],n),domProps:N?{}:Object(i["a"])(w,x)},Object(o["b"])("header",T,I,k)));var V=Object(o["b"])("default",T,I,k);n.noBody||(V=t(s["a"],{props:Object(c["b"])(s["b"],n)},V));var F=t(),L=Object(o["a"])("footer",I,k);return(L||C||P)&&(F=t(h,{props:Object(c["b"])(b,n),domProps:N?{}:Object(i["a"])(P,C)},Object(o["b"])("footer",T,I,k))),t(n.tag,Object(a["a"])(l,{staticClass:"card",class:(r={"flex-row":p||y,"flex-row-reverse":(g||v)&&!(p||y)},O(r,"text-".concat(S),S),O(r,"bg-".concat(_),_),O(r,"border-".concat(B),B),O(r,"text-".concat(E),E),r)}),[A,D,V,F,$])}})},"3aaf":function(t,e,r){},"3c2c":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/blog/article/"+t.article.slug,"aria-label":t.article.title}},[r("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"article"}},[r("BCardImgLazy",{attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",top:"",fluid:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:t.article.title}}),r("BCardText",[r("div",{domProps:{innerHTML:t._s(t.article.excerpt)}})]),r("hr"),r("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center"},[r("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.node.name?r("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),r("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.nodes.length>0?r("BBadge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)],1)],1)},n=[],i=r("2b0e"),o=r("e98b"),c=r("205f"),l=r("6197"),s=r("60f1"),u=r("4968"),d=r("d6e4");i["default"].component("BBadge",o["a"]),i["default"].component("BCard",c["a"]),i["default"].component("BCardBody",l["a"]),i["default"].component("BCardImgLazy",s["a"]),i["default"].component("BCardTitle",u["a"]),i["default"].component("BCardText",d["a"]);var f={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},p=f,b=(r("05f0"),r("2877")),h=Object(b["a"])(p,a,n,!1,null,"1e078330",null);e["a"]=h.exports},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var a=r("dcb3"),n=r("b42e"),i=r("fa73"),o={title:{type:String},titleTag:{type:String,default:"h4"}},c=a["a"].extend({name:"BCardTitle",functional:!0,props:o,render:function(t,e){var r=e.props,a=e.data,o=e.children;return t(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),o||Object(i["f"])(r.title))}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),l=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"58de":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("article",[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.article.title))]),r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),r("b-container",{staticClass:"cms-article mt-3 mb-5"},[r("div",{staticClass:"position-relative"},[t.article.featuredImage?r("b-img-lazy",{staticClass:"mt-3 mb-4",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",sizes:"100vw",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"","blank-width":"1200","blank-height":"630",fluid:""}}):t._e(),t.article.author.node.avatar&&t.article.featuredImage?r("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[r("b-img",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),t.article.author.node.name?r("div",[t._v(" by "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e()],1),r("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),r("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[r("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("b-img",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),r("div",{staticClass:"h6"},[r("span",[t._v(" Liebe Grüße, ")]),r("br"),r("span",[t._v(t._s(t.article.author.node.name))])])],1):t._e(),r("div",{staticClass:"text-primary"},[t.article.author.node.url?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.url,target:"blank"}},[r("Fa",{attrs:{icon:["fa","globe"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.facebook?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.facebook,target:"blank"}},[r("Fa",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.instagram?r("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.instagram,target:"blank"}},[r("Fa",{attrs:{icon:["fab","instagram"],size:"2x"}})],1):t._e()],1)]),r("div",[r("FacebookShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),r("TwitterShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),r("WhatsAppShareBtn",{staticClass:"mb-2 mb-lg-0"})],1),"Erfahrungsbericht"===t.article.tags.nodes[0].name?r("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),r("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])]),r("b-container",[r("RandomArticlesContainer")],1),t.article.title?r("Head",{attrs:{title:t.article.title,desc:t.article.excerpt,img:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",script:t.snippet}}):t._e()],1):t._e()},n=[],i=(r("99af"),r("7db0"),r("a15b"),r("d81d"),r("fb6a"),r("ac1f"),r("1276"),r("e674")),o=r("037e"),c=r("1144"),l=r("b13b"),s={name:"Article",components:{RandomArticlesContainer:i["a"],FacebookShareBtn:o["a"],TwitterShareBtn:c["a"],WhatsAppShareBtn:l["a"]},data:function(){return{snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Blog",\n                              "item": "https://www.mfa-mal-anders.de/blog"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n                              "item": "https://www.mfa-mal-anders.de/article/').concat(this.$route.params.slug,'"\n                          }]\n                      }')}]}},computed:{article:function(){var t=this;return this.$store.state.articles.articles.find((function(e){return e.slug===t.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/article/".concat(this.$route.params.slug)}]}}},u=s,d=(r("7f17"),r("2877")),f=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},"60f1":function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var a=r("dcb3"),n=r("d82f"),i=r("b42e"),o=r("f479");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=Object(n["m"])(o["b"],["left","right","center","block","rounded","thumbnail","fluid","fluidGrow"]),d=l(l({},u),{},{top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1}}),f=a["a"].extend({name:"BCardImgLazy",functional:!0,props:d,render:function(t,e){var r=e.props,a=e.data,n="card-img";r.top?n+="-top":r.right||r.end?n+="-right":r.bottom?n+="-bottom":(r.left||r.start)&&(n+="-left");var c=l(l({},r),{},{left:!1,right:!1,center:!1});return t(o["a"],Object(i["a"])(a,{class:[n],props:c}))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return x})),r.d(e,"a",(function(){return w}));var a=r("b42e"),n=r("dcb3"),i=r("cf75"),o=r("d580"),c=r("4968"),l=r("228e"),s=r("fa73"),u="BCardSubTitle",d={subTitle:{type:String},subTitleTag:{type:String,default:"h6"},subTitleTextVariant:{type:String,default:function(){return Object(l["c"])(u,"subTitleTextVariant")}}},f=n["a"].extend({name:u,functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),i||Object(s["f"])(r.subTitle))}});function p(t){return m(t)||g(t)||h(t)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"===typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function g(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function m(t){if(Array.isArray(t))return y(t)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x=O(O(O(O({},Object(i["a"])(o["a"].props,i["c"].bind(null,"body"))),{},{bodyClass:{type:[String,Object,Array]}},c["b"]),d),{},{overlay:{type:Boolean,default:!1}}),w=n["a"].extend({name:"BCardBody",functional:!0,props:x,render:function(t,e){var r,n=e.props,o=e.data,l=e.children,s=t(),u=t(),b=l||[t()];return n.title&&(s=t(c["a"],{props:Object(i["b"])(c["b"],n)})),n.subTitle&&(u=t(f,{props:Object(i["b"])(d,n),class:["mb-2"]})),t(n.bodyTag,Object(a["a"])(o,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},j(r,"bg-".concat(n.bodyBgVariant),n.bodyBgVariant),j(r,"border-".concat(n.bodyBorderVariant),n.bodyBorderVariant),j(r,"text-".concat(n.bodyTextVariant),n.bodyTextVariant),r),n.bodyClass||{}]}),[s,u].concat(p(b)))}})},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var i,o;return n&&"function"==typeof(i=e.constructor)&&i!==r&&a(o=i.prototype)&&o!==r.prototype&&n(t,o),t}},"7db0":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").find,i=r("44d2"),o=r("ae40"),c="find",l=!0,s=o(c);c in[]&&Array(1)[c]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!s},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},"7f17":function(t,e,r){"use strict";r("e525")},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},9263:function(t,e,r){"use strict";var a=r("ad6d"),n=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||s;d&&(c=function(t){var e,r,n,c,d=this,f=s&&d.sticky,p=a.call(d),b=d.source,h=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(b="(?: "+b+")",g=" "+g,h++),r=new RegExp("^(?:"+b+")",p)),u&&(r=new RegExp("^"+b+"$(?!\\s)",p)),l&&(e=d.lastIndex),n=i.call(f?r:d,g),f?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:l&&n&&(d.lastIndex=d.global?n.index+n[0].length:e),u&&n&&n.length>1&&o.call(n[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(n[c]=void 0)})),n}),t.exports=c},"9f7f":function(t,e,r){"use strict";var a=r("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,r){"use strict";var a=r("23e7"),n=r("44ad"),i=r("fc6a"),o=r("a640"),c=[].join,l=n!=Object,s=o("join",",");a({target:"Array",proto:!0,forced:l||!s},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),o=r("6eeb"),c=r("5135"),l=r("c6b6"),s=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),p=r("241c").f,b=r("06cf").f,h=r("9bf2").f,g=r("58a8").trim,m="Number",y=n[m],v=y.prototype,O=l(f(v))==m,j=function(t){var e,r,a,n,i,o,c,l,s=u(t,!1);if("string"==typeof s&&s.length>2)if(s=g(s),e=s.charCodeAt(0),43===e||45===e){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+s}for(i=s.slice(2),o=i.length,c=0;c<o;c++)if(l=i.charCodeAt(c),l<48||l>n)return NaN;return parseInt(i,a)}return+s};if(i(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(O?d((function(){v.valueOf.call(r)})):l(r)!=m)?s(new y(j(e)),r,w):j(e)},C=a?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;C.length>P;P++)c(y,x=C[P])&&!c(w,x)&&h(w,x,b(y,x));w.prototype=v,v.constructor=w,o(n,m,w)}},ac1f:function(t,e,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},b13b:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fab","whatsapp"],size:"lg"}}),t._v(" WhatsApp "),r("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},n=[],i=(r("99af"),{name:"WhatsAppShareBtn",props:{sharePath:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,r){this.$gtag.event(t,{method:e,content_id:r}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(r))}}}),o=i,c=r("2877"),l=Object(c["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return f}));var a=r("b42e"),n=r("dcb3"),i=r("8690"),o=r("cf75"),c=r("d580");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=s(s({},Object(o["a"])(c["a"].props,o["c"].bind(null,"header"))),{},{header:{type:String},headerHtml:{type:String},headerClass:{type:[String,Object,Array]}}),f=n["a"].extend({name:"BCardHeader",functional:!0,props:d,render:function(t,e){var r,n=e.props,o=e.data,c=e.children,l=n.headerBgVariant,s=n.headerBorderVariant,d=n.headerTextVariant;return t(n.headerTag,Object(a["a"])(o,{staticClass:"card-header",class:[n.headerClass,(r={},u(r,"bg-".concat(l),l),u(r,"border-".concat(s),s),u(r,"text-".concat(d),d),r)],domProps:c?{}:Object(i["a"])(n.headerHtml,n.header)}),c)}})},d580:function(t,e,r){"use strict";e["a"]={props:{tag:{type:String,default:"div"},bgVariant:{type:String},borderVariant:{type:String},textVariant:{type:String}}}},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r("dcb3"),n=r("b42e"),i={textTag:{type:String,default:"p"}},o=a["a"].extend({name:"BCardText",functional:!0,props:i,render:function(t,e){var r=e.props,a=e.data,i=e.children;return t(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),i)}})},d784:function(t,e,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),o=r("9263"),c=r("9112"),l=i("species"),s=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var b=i(t),h=!n((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),g=h&&!n((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return e=!0,null},r[b](""),!e}));if(!h||!g||"replace"===t&&(!s||!u||f)||"split"===t&&!p){var m=/./[b],y=r(b,""[t],(function(t,e,r,a,n){return e.exec===o?h&&!n?{done:!0,value:m.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=y[0],O=y[1];a(String.prototype,t,v),a(RegExp.prototype,b,2==e?function(t,e){return O.call(t,this,e)}:function(t){return O.call(t,this)})}d&&c(RegExp.prototype[b],"sham",!0)}},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,i=r("1dde"),o=r("ae40"),c=i("map"),l=o("map");a({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e525:function(t,e,r){},e674:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",t._l(t.articles,(function(e){return r("b-col",{key:e.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/t.number}},[r("ArticleCard",{attrs:{article:e}})],1)})),1)},n=[],i=(r("a9e3"),r("3c2c")),o={name:"RandomArticlesContainer",components:{ArticleCard:i["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(t,e){t!=e&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(t,e){var r=new Array(e),a=t.length,n=new Array(a);if(e>a)throw new RangeError("getRandom: more elements taken than available");while(e--){var i=Math.floor(Math.random()*a);r[e]=t[i in n?n[i]:i],n[i]=--a in n?n[a]:a}return r},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},c=o,l=r("2877"),s=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=s.exports},e98b:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var a=r("b42e"),n=r("dcb3"),i=r("228e"),o=r("d82f"),c=r("cf75"),l=r("4a38"),s=r("aa59");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p="BBadge",b=Object(o["m"])(s["b"],["event","routerTag"]);delete b.href.default,delete b.to.default;var h=d({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(i["c"])(p,"variant")}},pill:{type:Boolean,default:!1}},b),g=n["a"].extend({name:p,functional:!0,props:h,render:function(t,e){var r=e.props,n=e.data,i=e.children,o=Object(l["d"])(r),u=o?s["a"]:r.tag,d={staticClass:"badge",class:[r.variant?"badge-".concat(r.variant):"badge-secondary",{"badge-pill":r.pill,active:r.active,disabled:r.disabled}],props:o?Object(c["b"])(b,r):{}};return t(u,Object(a["a"])(n,d),i)}})}}]);
//# sourceMappingURL=chunk-54a7412e.303f07c5.js.map