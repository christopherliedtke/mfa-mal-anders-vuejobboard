(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff4d09e4"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return P}));var a=r("b42e"),n=r("dcb3"),o=r("8690"),c=r("365c"),i=r("cf75"),l=r("d580"),s=r("6197"),u=r("b885");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=b(b({},Object(i["a"])(l["a"].props,i["c"].bind(null,"footer"))),{},{footer:{type:String},footerHtml:{type:String},footerClass:{type:[String,Object,Array]}}),g=n["a"].extend({name:"BCardFooter",functional:!0,props:f,render:function(t,e){var r,n=e.props,c=e.data,i=e.children,l=n.footerBgVariant,s=n.footerBorderVariant,u=n.footerTextVariant;return t(n.footerTag,Object(a["a"])(c,{staticClass:"card-footer",class:[n.footerClass,(r={},p(r,"bg-".concat(l),l),p(r,"border-".concat(s),s),p(r,"text-".concat(u),u),r)],domProps:i?{}:Object(o["a"])(n.footerHtml,n.footer)}),i)}}),y={src:{type:String,required:!0},alt:{type:String,default:null},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1},height:{type:[Number,String]},width:{type:[Number,String]}},O=n["a"].extend({name:"BCardImg",functional:!0,props:y,render:function(t,e){var r=e.props,n=e.data,o="card-img";return r.top?o+="-top":r.right||r.end?o+="-right":r.bottom?o+="-bottom":(r.left||r.start)&&(o+="-left"),t("img",Object(a["a"])(n,{class:[o],attrs:{src:r.src||null,alt:r.alt,height:r.height||null,width:r.width||null}}))}});function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(i["a"])(y,i["c"].bind(null,"img"));h.imgSrc.required=!1;var w=j(j(j(j(j(j({},s["b"]),u["b"]),f),h),Object(i["a"])(l["a"].props)),{},{align:{type:String},noBody:{type:Boolean,default:!1}}),P=n["a"].extend({name:"BCard",functional:!0,props:w,render:function(t,e){var r,n=e.props,l=e.data,d=e.slots,b=e.scopedSlots,p=n.imgLeft,y=n.imgRight,m=n.imgStart,j=n.imgEnd,w=n.header,P=n.headerHtml,B=n.footer,C=n.footerHtml,S=n.align,x=n.textVariant,T=n.bgVariant,D=n.borderVariant,V=b||{},E=d(),I={},_=t(),k=t();if(n.imgSrc){var A=t(O,{props:Object(i["b"])(h,n,i["e"].bind(null,"img"))});n.imgBottom?k=A:_=A}var H=t(),L=Object(c["a"])("header",V,E);(L||w||P)&&(H=t(u["a"],{props:Object(i["b"])(u["b"],n),domProps:L?{}:Object(o["a"])(P,w)},Object(c["b"])("header",I,V,E)));var z=Object(c["b"])("default",I,V,E);n.noBody||(z=t(s["a"],{props:Object(i["b"])(s["b"],n)},z));var $=t(),M=Object(c["a"])("footer",V,E);return(M||B||C)&&($=t(g,{props:Object(i["b"])(f,n),domProps:L?{}:Object(o["a"])(C,B)},Object(c["b"])("footer",I,V,E))),t(n.tag,Object(a["a"])(l,{staticClass:"card",class:(r={"flex-row":p||m,"flex-row-reverse":(y||j)&&!(p||m)},v(r,"text-".concat(S),S),v(r,"bg-".concat(T),T),v(r,"border-".concat(D),D),v(r,"text-".concat(x),x),r)}),[_,H,z,$,k])}})},"26c4":function(t,e,r){},"3c2c":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/blog/article/"+t.article.slug,"aria-label":t.article.title}},[r("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"article"}},[r("BCardImgLazy",{attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",offset:"1000",top:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:t.article.title}}),r("BCardText",[r("div",{domProps:{innerHTML:t._s(t.article.excerpt)}})]),r("hr"),r("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center"},[r("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96",offset:"1000"}}),t.article.author.node.name?r("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),r("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.nodes.length>0?r("BBadge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)],1)],1)},n=[],o=r("2b0e"),c=r("e98b"),i=r("205f"),l=r("6197"),s=r("60f1"),u=r("4968"),d=r("d6e4");o["default"].component("BBadge",c["a"]),o["default"].component("BCard",i["a"]),o["default"].component("BCardBody",l["a"]),o["default"].component("BCardImgLazy",s["a"]),o["default"].component("BCardTitle",u["a"]),o["default"].component("BCardText",d["a"]);var b={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},p=b,f=(r("4831"),r("2877")),g=Object(f["a"])(p,a,n,!1,null,"07277098",null);e["a"]=g.exports},4831:function(t,e,r){"use strict";r("26c4")},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return i}));var a=r("dcb3"),n=r("b42e"),o=r("fa73"),c={title:{type:String},titleTag:{type:String,default:"h4"}},i=a["a"].extend({name:"BCardTitle",functional:!0,props:c,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),c||Object(o["f"])(r.title))}})},"60f1":function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var a=r("dcb3"),n=r("d82f"),o=r("b42e"),c=r("f479");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=Object(n["m"])(c["b"],["left","right","center","block","rounded","thumbnail","fluid","fluidGrow"]),d=l(l({},u),{},{top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1}}),b=a["a"].extend({name:"BCardImgLazy",functional:!0,props:d,render:function(t,e){var r=e.props,a=e.data,n="card-img";r.top?n+="-top":r.right||r.end?n+="-right":r.bottom?n+="-bottom":(r.left||r.start)&&(n+="-left");var i=l(l({},r),{},{left:!1,right:!1,center:!1});return t(c["a"],Object(o["a"])(a,{class:[n],props:i}))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return w})),r.d(e,"a",(function(){return P}));var a=r("b42e"),n=r("dcb3"),o=r("cf75"),c=r("d580"),i=r("4968"),l=r("228e"),s=r("fa73"),u="BCardSubTitle",d={subTitle:{type:String},subTitleTag:{type:String,default:"h6"},subTitleTextVariant:{type:String,default:function(){return Object(l["c"])(u,"subTitleTextVariant")}}},b=n["a"].extend({name:u,functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data,o=e.children;return t(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),o||Object(s["f"])(r.subTitle))}});function p(t){return O(t)||y(t)||g(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,e){if(t){if("string"===typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function y(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function O(t){if(Array.isArray(t))return m(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w=v(v(v(v({},Object(o["a"])(c["a"].props,o["c"].bind(null,"body"))),{},{bodyClass:{type:[String,Object,Array]}},i["b"]),d),{},{overlay:{type:Boolean,default:!1}}),P=n["a"].extend({name:"BCardBody",functional:!0,props:w,render:function(t,e){var r,n=e.props,c=e.data,l=e.children,s=t(),u=t(),f=l||[t()];return n.title&&(s=t(i["a"],{props:Object(o["b"])(i["b"],n)})),n.subTitle&&(u=t(b,{props:Object(o["b"])(d,n),class:["mb-2"]})),t(n.bodyTag,Object(a["a"])(c,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},h(r,"bg-".concat(n.bodyBgVariant),n.bodyBgVariant),h(r,"border-".concat(n.bodyBorderVariant),n.bodyBorderVariant),h(r,"text-".concat(n.bodyTextVariant),n.bodyTextVariant),r),n.bodyClass||{}]}),[s,u].concat(p(f)))}})},"66ba":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"magazin"},[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.title))]),r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),t.$config.cms.active&&t.articles?r("b-container",{staticClass:"py-3 py-lg-5"},[r("div",{staticClass:"grid"},t._l(t.articles,(function(t){return r("ArticleCard",{key:t.id,attrs:{article:t}})})),1)]):t._e(),r("Head",{attrs:{title:t.title,desc:"Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr...",img:"",script:t.snippet}})],1)},n=[],o=r("3c2c"),c={name:"Blog",components:{ArticleCard:o["a"]},data:function(){return{title:this.$config.cms.postsPageTitle,breadcrumbs:[{text:"Home",to:"/"},{text:"Blog",to:"/blog"}],snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Blog",\n                              "item": "https://www.mfa-mal-anders.de/blog"\n                          }]\n                      }'}]}},computed:{articles:function(){return this.$store.state.articles.articles}}},i=c,l=(r("e1cd"),r("2877")),s=Object(l["a"])(i,a,n,!1,null,"51a44d95",null);e["default"]=s.exports},ad12:function(t,e,r){},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return b}));var a=r("b42e"),n=r("dcb3"),o=r("8690"),c=r("cf75"),i=r("d580");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=s(s({},Object(c["a"])(i["a"].props,c["c"].bind(null,"header"))),{},{header:{type:String},headerHtml:{type:String},headerClass:{type:[String,Object,Array]}}),b=n["a"].extend({name:"BCardHeader",functional:!0,props:d,render:function(t,e){var r,n=e.props,c=e.data,i=e.children,l=n.headerBgVariant,s=n.headerBorderVariant,d=n.headerTextVariant;return t(n.headerTag,Object(a["a"])(c,{staticClass:"card-header",class:[n.headerClass,(r={},u(r,"bg-".concat(l),l),u(r,"border-".concat(s),s),u(r,"text-".concat(d),d),r)],domProps:i?{}:Object(o["a"])(n.headerHtml,n.header)}),i)}})},d580:function(t,e,r){"use strict";e["a"]={props:{tag:{type:String,default:"div"},bgVariant:{type:String},borderVariant:{type:String},textVariant:{type:String}}}},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r("dcb3"),n=r("b42e"),o={textTag:{type:String,default:"p"}},c=a["a"].extend({name:"BCardText",functional:!0,props:o,render:function(t,e){var r=e.props,a=e.data,o=e.children;return t(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),o)}})},e1cd:function(t,e,r){"use strict";r("ad12")},e98b:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var a=r("b42e"),n=r("dcb3"),o=r("228e"),c=r("d82f"),i=r("cf75"),l=r("4a38"),s=r("aa59");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p="BBadge",f=Object(c["m"])(s["b"],["event","routerTag"]);delete f.href.default,delete f.to.default;var g=d({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(o["c"])(p,"variant")}},pill:{type:Boolean,default:!1}},f),y=n["a"].extend({name:p,functional:!0,props:g,render:function(t,e){var r=e.props,n=e.data,o=e.children,c=Object(l["d"])(r),u=c?s["a"]:r.tag,d={staticClass:"badge",class:[r.variant?"badge-".concat(r.variant):"badge-secondary",{"badge-pill":r.pill,active:r.active,disabled:r.disabled}],props:c?Object(i["b"])(f,r):{}};return t(u,Object(a["a"])(n,d),o)}})}}]);
//# sourceMappingURL=chunk-ff4d09e4.d31d905f.js.map