(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"0059":function(t,e,a){},"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("2b0e"),s=a("b42e"),r=a("c637"),l=a("a723"),c=a("cf75");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=Object(c["c"])({animation:Object(c["b"])(l["s"],"wave"),height:Object(c["b"])(l["s"]),size:Object(c["b"])(l["s"]),type:Object(c["b"])(l["s"],"text"),variant:Object(c["b"])(l["s"]),width:Object(c["b"])(l["s"])},r["W"]),o=i["default"].extend({name:r["W"],functional:!0,props:d,render:function(t,e){var a,i=e.data,r=e.props,l=r.size,c=r.animation,d=r.variant;return t("div",Object(s["a"])(i,{staticClass:"b-skeleton",style:{width:l||r.width,height:l||r.height},class:(a={},n(a,"b-skeleton-".concat(r.type),!0),n(a,"b-skeleton-animate-".concat(c),c),n(a,"bg-".concat(d),d),a)}))}})},"3c2c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)]),t.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])],1)},s=[],r={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},l=r,c=(a("f425"),a("2877")),n=Object(c["a"])(l,i,s,!1,null,"f23a1062",null);e["a"]=n.exports},6570:function(t,e,a){"use strict";a("0059")},"66ba":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"magazin"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.title))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),t.articles?a("div",{staticClass:"container py-3 py-lg-5"},[t.articles&&t.articles.length>0?a("div",{staticClass:"grid"},t._l(t.articles,(function(t){return a("ArticleCard",{key:t.id,attrs:{article:t}})})),1):a("div",{staticClass:"grid"},t._l(10,(function(t){return a("ArticleCardPlaceholder",{key:t})})),1)]):t._e(),a("Head",{attrs:{title:t.title,desc:"Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr...",img:"",script:t.snippet}})],1)},s=[],r=a("3c2c"),l=a("ab2f"),c={name:"Blog",components:{ArticleCard:r["a"],ArticleCardPlaceholder:l["a"]},data(){return{title:"Blog",breadcrumbs:[{text:"Home",to:"/"},{text:"Blog",to:"/blog"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Blog",\n              "item": "https://www.mfa-mal-anders.de/blog"\n            }]\n          }'}]}},computed:{articles(){return this.$store.state.articles.articles}},created(){this.$store.dispatch("getArticles")}},n=c,d=(a("6570"),a("2877")),o=Object(d["a"])(n,i,s,!1,null,"23b0afb2",null);e["default"]=o.exports},"78bf":function(t,e,a){"use strict";a("c6be")},ab2f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},s=[],r=a("2b0e"),l=a("0942");r["default"].component("BSkeleton",l["a"]);var c={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},n=c,d=(a("78bf"),a("2877")),o=Object(d["a"])(n,i,s,!1,null,"d6454454",null);e["a"]=o.exports},c6be:function(t,e,a){},f425:function(t,e,a){"use strict";a("f790")},f790:function(t,e,a){}}]);
//# sourceMappingURL=blog.23cabafd.js.map