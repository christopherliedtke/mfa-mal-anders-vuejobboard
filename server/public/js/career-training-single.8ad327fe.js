(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-training-single"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("2b0e"),n=a("b42e"),r=a("c637"),s=a("a723"),l=a("cf75");function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c=Object(l["c"])({animation:Object(l["b"])(s["s"],"wave"),height:Object(l["b"])(s["s"]),size:Object(l["b"])(s["s"]),type:Object(l["b"])(s["s"],"text"),variant:Object(l["b"])(s["s"]),width:Object(l["b"])(s["s"])},r["W"]),d=i["default"].extend({name:r["W"],functional:!0,props:c,render:function(t,e){var a,i=e.data,r=e.props,s=r.size,l=r.animation,c=r.variant;return t("div",Object(n["a"])(i,{staticClass:"b-skeleton",style:{width:s||r.width,height:s||r.height},class:(a={},o(a,"b-skeleton-".concat(r.type),!0),o(a,"b-skeleton-animate-".concat(l),l),o(a,"bg-".concat(c),c),a)}))}})},"2a70":function(t,e,a){},3294:function(t,e,a){},4186:function(t,e,a){"use strict";a("2a70")},"46ec":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.training?a("div",[a("article",{staticClass:"fort-weiterbildung"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.training?t.training.title:""))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"container py-3 py-lg-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 order-2 order-md-1"},[a("NavTrainings")],1),a("div",{staticClass:"col-12 col-md-8 order-1 order-md-2 mb-4"},[t.training.featuredImage?a("b-img-lazy",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 768px",src:t.training.featuredImage.sourceUrl,alt:"Banner - "+t.training.title,width:"1200",height:"630","blank-width":"1200","blank-height":"630"}}):t._e(),a("div",{domProps:{innerHTML:t._s(t.training.content)}}),a("BannerTrainingCatalogueLarge",{staticClass:"mt-4",attrs:{header:"Jetzt passende Fortbildung finden"}}),a("BannerJobboard",{staticClass:"mt-4"})],1)])])]),a("div",{staticClass:"container"},[a("TrainingListRandom")],1),t.training?a("Head",{attrs:{title:t.training.seo&&t.training.seo.title,desc:t.training.seo&&t.training.seo.metaDesc,img:t.training.featuredImage&&t.training.featuredImage.sourceUrl,script:t.snippet}}):t._e()],1):t._e()},n=[],r=a("9910"),s=a("aedd"),l=a("f066"),o=a("4bdb"),c={name:"CareerTrainingItem",components:{NavTrainings:r["a"],TrainingListRandom:s["a"],BannerTrainingCatalogueLarge:l["a"],BannerJobboard:o["a"]},data(){return{training:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Karriere",\n              "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Fort- und Weiterbildung",\n              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Überblick für MFA & ZFA",\n              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick"\n            },{\n              "@type": "ListItem",\n              "position": 4,\n              "name": "${this.$route.params.slug.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}",\n              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick/${this.$route.params.slug}"\n            }]\n          }`}]}},computed:{breadcrumbs(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildung",to:"/karriere/fort-und-weiterbildung"},{text:"Überblick für MFA & ZFA",to:"/karriere/fort-und-weiterbildung/ueberblick"},{text:this.training.title,to:"/karriere/fort-und-weiterbildung/ueberblick/"+this.training.slug}]}},watch:{async"$route.params.slug"(){await this.getTraining()}},created(){this.getTraining()},methods:{async getTraining(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                weiterbildung(slug: "${this.$route.params.slug}") {\n                  title\n                  content\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                  seo {\n                    title\n                    metaDesc\n                  }\n                }\n              }\n            `}});if(!t.data.data.weiterbildung)throw new Error;this.training=t.data.data.weiterbildung}catch(t){this.$router.push("/karriere/fort-und-weiterbildung/ueberblick")}}}},d=c,u=(a("d5b8"),a("2877")),g=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=g.exports},"4bdb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"card overflow-hidden shadow1"},[i("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():i("div",{staticClass:"col-md-3"},[i("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:a("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),i("div",{staticClass:"col"},[i("div",{staticClass:"card-body p-3 p-lg-4"},[i("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),i("b-button",{attrs:{to:"/",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Bist Du auf der Suche nach einer "),a("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),a("br"),t._v(" Du willst Dich "),a("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),a("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],r={name:"BannerJobboard",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},s=r,l=(a("b946"),a("2877")),o=Object(l["a"])(s,i,n,!1,null,"45042856",null);e["a"]=o.exports},"4fef":function(t,e,a){t.exports=a.p+"img/calendar.beda8b1d.svg"},"6bea":function(t,e,a){},"7e71":function(t,e,a){"use strict";a("6bea")},"8bfd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"d-flex justify-content-center"},[i("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[i("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[i("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:a("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),i("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[i("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),i("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},n=[],r={name:"BannerTrainingCatalogueSmall"},s=r,l=a("2877"),o=Object(l["a"])(s,i,n,!1,null,null,null);e["a"]=o.exports},"94a4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",[i("b-link",{attrs:{href:"https://pn.sgd.de/go.cgi?pid=13&wmid=45&cpid=1&prid=3&subid=&target=10_Prozent_Rabatt_auf_ueber_100_ausgewaehlte_Kurse",target:"_blank"}},[i("b-img",{staticClass:"border-radius1",attrs:{fluid:"",src:a("b90f"),alt:"Banner - SGD Fernschule",width:"468",height:"60"}})],1)],1)},n=[],r={name:"BannerSponsoredSgd"},s=r,l=a("2877"),o=Object(l["a"])(s,i,n,!1,null,null,null);e["a"]=o.exports},9910:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto",staticStyle:{"max-width":"600px"}},[t.trainings?a("nav",{staticClass:"list-group"},[a("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/fort-und-weiterbildung"}},[t._v(" Fort- & Weiterbildungen ")]),t._l(t.categories,(function(e){return a("div",{key:e,staticClass:"list-group-item p-0"},[a("h4",{staticClass:"h5 bold pt-3 pb-1 px-3 mb-0"},[t._v(t._s(e))]),a("div",{staticClass:"list-group list-group-flush"},t._l(t.computedTrainings.filter((function(t){return t.category===e})),(function(e){return a("b-link",{key:e.id,staticClass:"list-group-item list-group-item-action px-4",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,active:e.slug===t.$route.params.slug}},[t._v(t._s(e.title))])})),1)])}))],2):t._e(),a("div",{staticClass:"mt-3"},[t.showTrainingCatalogue?a("BannerTrainingCatalogueSmall",{staticClass:"my-2"}):t._e(),t.showBannerSponsoredPkv?a("BannerSponsoredPkv",{staticClass:"my-2"}):t._e(),t.showBannerSponsoredSgd?a("BannerSponsoredSgd",{staticClass:"my-2"}):t._e()],1)])},n=[],r=a("94a4"),s=a("e5aa"),l=a("8bfd"),o={name:"NavTrainings",components:{BannerSponsoredSgd:r["a"],BannerSponsoredPkv:s["a"],BannerTrainingCatalogueSmall:l["a"]},props:{showTrainingCatalogue:{type:Boolean,default:!0},showBannerSponsoredSgd:{type:Boolean,default:!0},showBannerSponsoredPkv:{type:Boolean,default:!0}},data(){return{trainings:null}},computed:{computedTrainings(){return this.trainings.map(t=>(t.category=t.categories.length>0?t.categories[0]:"Allgemein",t))},categories(){let t=this.trainings.map(t=>t.categories.length>0?t.categories[0]:"Allgemein");return t=t.filter((e,a)=>t.indexOf(e)===a).sort(),t}},created(){this.getTrainings()},methods:{async getTrainings(){try{const t=await this.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen {\n                  title\n                  slug\n                  categories\n                }\n              }\n            "}});if(!t.data.data.weiterbildungen)return;this.trainings=t.data.data.weiterbildungen}catch(t){return}}}},c=o,d=a("2877"),u=Object(d["a"])(c,i,n,!1,null,null,null);e["a"]=u.exports},a2be:function(t,e,a){},aedd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("TrainingCard",{attrs:{training:e}})],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("TrainingCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.training.title?a("article",{staticClass:"weiterbildung-card"},[a("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))])]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)]):t._e()},s=[],l={name:"TrainingCard",props:{training:{type:Object,default:()=>{}}}},o=l,c=(a("7e71"),a("2877")),d=Object(c["a"])(o,r,s,!1,null,"06e5f2ba",null),u=d.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},b=[],m=a("2b0e"),p=a("0942");m["default"].component("BSkeleton",p["a"]);var h={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},f=h,w=(a("ca98"),Object(c["a"])(f,g,b,!1,null,"da4e611e",null)),v=w.exports,x={name:"TrainingListRandom",components:{TrainingCard:u,TrainingCardPlaceholder:v},props:{number:{type:Number,default:3}},data(){return{trainings:null}},watch:{$route(t,e){t!=e&&this.getTrainings()}},created(){this.getTrainings()},methods:{async getTrainings(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                weiterbildungen(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.weiterbildungen)return;this.trainings=t.data.data.weiterbildungen}catch(t){return}}}},C=x,k=Object(c["a"])(C,i,n,!1,null,null,null);e["a"]=k.exports},b853:function(t,e,a){},b90f:function(t,e,a){t.exports=a.p+"img/SGD_Banner_468.9e9d2f84.jpg"},b946:function(t,e,a){"use strict";a("b853")},ca31:function(t,e,a){t.exports=a.p+"img/search_engine__monochromatic.50ef63ab.svg"},ca98:function(t,e,a){"use strict";a("a2be")},d5b8:function(t,e,a){"use strict";a("3294")},e5aa:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-link",{staticClass:"text-reset",attrs:{to:"/karriere/fort-und-weiterbildung/pkv-institut"}},[a("div",{staticClass:"d-flex align-items-center flex-nowrap border-radius1 bg-light-shade shadow1 pl-2 pr-1 py-1"},[a("b-img-lazy",{attrs:{src:"/img/pkvverlag_logo3.png",alt:"PKV Institut",height:"35"}}),a("small",{staticClass:"ml-3 mr-2",staticStyle:{"line-height":"1.4"}},[t._v("Dein Partner für berufliche Weiterentwicklung in der Praxis")]),a("b-btn",{staticClass:"px-1 py-1 rounded",staticStyle:{"line-height":"1.3","font-size":"0.8em"},attrs:{variant:"secondary",size:"sm"}},[t._v("Zu den Kursen")])],1)])},n=[],r={name:"BannerSponsoredPkv"},s=r,l=a("2877"),o=Object(l["a"])(s,i,n,!1,null,null,null);e["a"]=o.exports},f066:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[a("div",{staticClass:"card-body d-flex flex-column justify-content-start align-items-start h-100 p-0"},[a("h2",{staticClass:"h1",domProps:{innerHTML:t._s(t.header)}}),a("p",{staticClass:"lead bold text-primary"},[t._v(" Finde jetzt den passenden Anbieter für Deinen nächsten Karriereschritt ")]),a("p",[t._v(" Egal ob online oder in Deiner Umgebung, für MFA oder ZFA, von Abrechnung über Praxismanagement bis hin zu Medizinstudium... In unserem Fortbildungskatalog findest Du garantiert Deine nächste Fort- oder Weiterbildung! ")]),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog",variant:"secondary"}},[t._v("Zum Fortbildungskatalog")])],1)])},n=[],r={name:"BannerTrainingCatalogueLarge",props:{header:{type:String,default:"<strong>Online Fortbildungskatalog</strong> <br> speziell für MFA & ZFA!"}}},s=r,l=(a("4186"),a("2877")),o=Object(l["a"])(s,i,n,!1,null,"1c462f20",null);e["a"]=o.exports}}]);
//# sourceMappingURL=career-training-single.8ad327fe.js.map