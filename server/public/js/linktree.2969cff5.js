(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["linktree"],{"3c2c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title sr-only"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.node.name?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)]),t.article.tags.nodes.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)])],1)},i=[],n={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},s=n,l=(a("77f8"),a("2877")),c=Object(l["a"])(s,r,i,!1,null,"2de979ff",null);e["a"]=c.exports},"5a2f":function(t,e,a){},6740:function(t,e,a){"use strict";a("9c7e")},"77f8":function(t,e,a){"use strict";a("5a2f")},"9c7e":function(t,e,a){},a79b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"linktree"}},[a("div",{attrs:{id:"links"}},[a("div",{staticClass:"bg-logo"}),a("div",{staticClass:"container position-relative py-3 py-lg-5"},[a("nav",{staticClass:"d-flex flex-column align-items-center"},[a("b-button",{attrs:{block:"",to:"/"}},[t._v("📌 mfa-mal-anders.de")]),a("b-button",{attrs:{block:"",to:"/stellenangebote"}},[t._v("📬 Aktuelle Stellenangebote")]),a("b-button",{attrs:{block:"",to:"/karriere/jobs-und-berufsbilder"}},[t._v("💼 50+ Alternative Jobmöglichkeiten")]),a("b-button",{attrs:{block:"",to:"/karriere/mfa/gehalt"}},[t._v("🧮 MFA Gehaltsrechner")]),a("b-button",{attrs:{block:"",to:"/karriere/zfa/gehalt"}},[t._v("🧮 ZFA Gehaltsrechner")]),a("b-button",{attrs:{block:"",to:"/karriere/fort-und-weiterbildung"}},[t._v("🎓 Fort- und Weiterbildungen")]),a("b-button",{attrs:{block:"",to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[t._v("📆 Fortbildungskatalog")]),a("b-button",{attrs:{block:"",to:"/blog"}},[t._v("📰 Blog")]),a("b-button",{attrs:{block:"",to:"/fuer-arbeitgeber"}},[t._v("🏥 Für Arbeitgeber")])],1)])]),t.$config.cms.active&&t.articles?a("div",{staticClass:"container py-3 py-lg-5"},[a("div",{staticClass:"grid"},t._l(t.articles,(function(t){return a("ArticleCard",{key:t.id,staticClass:"mb-3",attrs:{article:t}})})),1)]):t._e(),a("Head",{attrs:{title:"Linktree | Sitemap",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Zahnmedizinische | Medizinische Fachangestellte (ZFA / MFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:t.snippet}})],1)},i=[],n=a("3c2c"),s={name:"Linktree",components:{ArticleCard:n["a"]},data(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [{\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },{\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Linktree",\n                  "item": "https://www.mfa-mal-anders.de/linktree"\n              }]\n          }'}]}},computed:{articles(){return this.$store.state.articles.articles}},created(){this.$store.dispatch("getArticles")}},l=s,c=(a("6740"),a("2877")),o=Object(c["a"])(l,r,i,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=linktree.2969cff5.js.map