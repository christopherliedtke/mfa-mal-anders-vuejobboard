(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["linktree"],{1718:function(t,e,a){"use strict";a("c0b2")},6740:function(t,e,a){"use strict";a("9c7e")},"9c7e":function(t,e,a){},a79b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"linktree"}},[a("div",{attrs:{id:"links"}},[a("div",{staticClass:"bg-logo"}),a("div",{staticClass:"container position-relative py-3 py-lg-5"},[a("nav",{staticClass:"d-flex flex-column align-items-center"},[a("b-button",{attrs:{block:"",to:"/"}},[t._v("📌 mfa-mal-anders.de")]),a("b-button",{attrs:{block:"",to:"/stellengesuche/info"}},[t._v("🔎 Stellengesuch schalten")]),a("b-button",{attrs:{block:"",to:"/stellenangebote"}},[t._v("📬 Aktuelle Stellenangebote")]),a("b-button",{attrs:{block:"",to:"/fuer-arbeitgeber"}},[t._v("🏥 Für Arbeitgeber")]),a("b-button",{attrs:{block:"",to:"/karriere/mfa/gehalt"}},[t._v("🧮 MFA Gehaltsrechner")]),a("b-button",{attrs:{block:"",to:"/karriere/zfa/gehalt"}},[t._v("🧮 ZFA Gehaltsrechner")]),a("b-button",{attrs:{block:"",to:"/karriere/fort-und-weiterbildung"}},[t._v("🎓 Fort- und Weiterbildungen")]),a("b-button",{attrs:{block:"",to:"/fortbildungskatalog"}},[t._v("📆 Fortbildungskatalog")])],1)])]),t.articles?a("div",{staticClass:"container py-3 py-lg-5"},[a("div",{staticClass:"grid"},t._l(t.articles,(function(t){return a("ArticleCard",{key:t.id,staticClass:"mb-3",attrs:{article:t}})})),1)]):t._e(),a("Head",{attrs:{title:"Linktree | Sitemap",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Zahnmedizinische | Medizinische Fachangestellte (ZFA / MFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:t.snippet}})],1)},i=[],s=a("d4bc"),l={name:"Linktree",components:{ArticleCard:s["a"]},data(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [{\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },{\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Linktree",\n                  "item": "https://www.mfa-mal-anders.de/linktree"\n              }]\n          }'}]}},computed:{articles(){return this.$store.state.articles.articles}},created(){this.$store.dispatch("getArticles")}},n=l,c=(a("6740"),a("2877")),o=Object(c["a"])(n,r,i,!1,null,null,null);e["default"]=o.exports},c0b2:function(t,e,a){},d4bc:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"stretched-link",attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("h4",{staticClass:"card-title"},[t._v(" "+t._s(t.article.title)+" ")])]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{"aria-label":t.article.title,variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])},i=[],s={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},l=s,n=(a("1718"),a("2877")),c=Object(n["a"])(l,r,i,!1,null,"60c7b624",null);e["a"]=c.exports}}]);
//# sourceMappingURL=linktree.f20d3a92.js.map