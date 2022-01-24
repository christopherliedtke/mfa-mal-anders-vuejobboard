(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-profession-type"],{"215b":function(t,e,s){"use strict";s("dd0d")},"230b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"d-flex justify-content-center"},[a("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[a("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[a("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:s("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),a("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[a("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),a("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},r=[],i={name:"TrainingCatalogueSmallBanner"},n=i,l=s("2877"),o=Object(l["a"])(n,a,r,!1,null,null,null);e["a"]=o.exports},"34b7":function(t,e,s){},"4fef":function(t,e,s){t.exports=s.p+"img/calendar.beda8b1d.svg"},5612:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.professions?s("div",{staticClass:"berufsbild-type"},[s("div",{staticClass:"title"},[s("h1",[t._v("MFA & ZFA Berufsbilder – "+t._s(t.professions[0].professionType.name))]),s("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),s("div",{staticClass:"container py-3 py-lg-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-4 mb-4"},[s("JobsBerufsbilderNav"),s("TrainingCatalogueSmallBanner",{staticClass:"my-3"})],1),s("div",{staticClass:"col-12 col-md-8 mb-5"},[t.professions[0].professionType.description?s("div",{staticClass:"mb-4",domProps:{innerHTML:t._s(t.professions[0].professionType.description)}}):t._e(),s("nav",{staticClass:"list-group"},t._l(t.professions,(function(e){return s("div",{key:e.slug,staticClass:"list-group-item mb-0 p-3",staticStyle:{"font-size":"larger",color:"inherit"},attrs:{id:e.slug}},[e.content?s("b-link",{staticClass:"bold text-primary hover-text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.professionType.slug+"/"+e.slug}},[t._v(" "+t._s(e.title)+" "),s("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]):s("span",{staticClass:"text-muted"},[t._v(t._s(e.title))])],1)})),0),s("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[s("JobSearchSingleForm",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),s("JobsTeaserContainer",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),s("ToJobboardBanner",{staticClass:"mt-5"})],1)]),s("RandomTrainingsContainer",{staticClass:"mt-5"})],1),s("Head",{attrs:{title:"MFA & ZFA Berufsbilder – "+t.professions[0].professionType.name,desc:t.professions[0].professionType.metaDesc,img:"",script:t.snippet}})],1):t._e()},r=[],i=s("aad4"),n=s("6df3"),l=s("5e36"),o=s("68b7"),c=s("7b34"),d=s("230b"),u={name:"CareerBerufsbildType",components:{JobsBerufsbilderNav:i["a"],RandomTrainingsContainer:n["a"],ToJobboardBanner:l["a"],JobsTeaserContainer:o["a"],JobSearchSingleForm:c["a"],TrainingCatalogueSmallBanner:d["a"]},data(){return{professions:null,visible:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "name": "MFA mal anders",\n                "item": "https://www.mfa-mal-anders.de"\n            },{\n                "@type": "ListItem",\n                "position": 2,\n                "name": "Karriere",\n                "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n                "@type": "ListItem",\n                "position": 3,\n                "name": "Jobs und Berufsbilder",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n            },{\n                "@type": "ListItem",\n                "position": 4,\n                "name": "${this.$route.params.slug.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("-")}",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/${this.$route.params.slug}"\n            }]\n          }`}]}},computed:{breadcrumbs(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.professions[0].professionType.name,to:"/karriere/jobs-und-berufsbilder/"+this.$route.params.slug}]}},watch:{async"$route.params.slug"(){await this.getProfessions()}},created(){this.getProfessions()},methods:{async getProfessions(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                professions(type: "${this.$route.params.slug}") {\n                  title\n                  content\n                  slug\n                  professionType {\n                    name\n                    description\n                    slug\n                    metaDesc\n                  }\n                }\n              }\n            `}});if(!t.data.data.professions)return;this.professions=t.data.data.professions}catch(t){return}},setVisible(t){this.visible===t?this.visible=null:this.visible=t}}},b=u,m=s("2877"),p=Object(m["a"])(b,a,r,!1,null,null,null);e["default"]=p.exports},"5e36":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1"},[a("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():a("div",{staticClass:"col-md-3"},[a("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:s("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"card-body p-3 p-lg-4"},[a("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),a("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Bist Du auf der Suche nach einer "),s("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),s("br"),t._v(" Du willst Dich "),s("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),s("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],i={name:"ToJobboardBanner",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},n=i,l=(s("a196"),s("2877")),o=Object(l["a"])(n,a,r,!1,null,"6ae0daaa",null);e["a"]=o.exports},"6df3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.trainings?s("div",{staticClass:"row"},t._l(t.trainings,(function(e){return s("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[s("WeiterbildungCard",{attrs:{training:e}})],1)})),0):s("div",{staticClass:"row"},t._l(t.number,(function(e){return s("WeiterbildungCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.training.title?s("article",{staticClass:"weiterbildung-card"},[s("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[s("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?s("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))]),s("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),s("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1):t._e()},n=[],l={name:"WeiterbildungCard",props:{training:{type:Object,default:()=>{}}}},o=l,c=(s("b241"),s("2877")),d=Object(c["a"])(o,i,n,!1,null,"767acb50",null),u=d.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[s("div",{staticClass:"card"},[s("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),s("div",{staticClass:"card-body"},[s("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),s("div",{staticClass:"mt-3"},[s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),s("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},m=[],p=s("2b0e"),g=s("0942");p["default"].component("BSkeleton",g["a"]);var f={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},h=f,C=(s("215b"),Object(c["a"])(h,b,m,!1,null,"773bc4fc",null)),v=C.exports,y={name:"RandomTrainingsContainer",components:{WeiterbildungCard:u,WeiterbildungCardPlaceholder:v},props:{number:{type:Number,default:3}},data(){return{trainings:null}},watch:{$route(t,e){t!=e&&this.getTrainings()}},created(){this.getTrainings()},methods:{async getTrainings(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                weiterbildungen(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.weiterbildungen)return;this.trainings=t.data.data.weiterbildungen}catch(t){return}}}},w=y,x=Object(c["a"])(w,a,r,!1,null,null,null);e["a"]=x.exports},7953:function(t,e,s){},a196:function(t,e,s){"use strict";s("7953")},aad4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"list-group"},[s("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v(" Jobs & Berufsbilder ")]),t._l(t.berufsbilderTypes,(function(e){return s("b-link",{key:e,staticClass:"list-group-item list-group-item-action",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.toLowerCase(),active:e.toLowerCase()===t.$route.params.slug}},[t._v(t._s(e))])}))],2)},r=[],i={name:"JobsBerufsbilderNav",components:{},data(){return{berufsbilderTypes:["Beratung","Forschung","Management","Medizinisch-Technisch","Verwaltung"]}}},n=i,l=s("2877"),o=Object(l["a"])(n,a,r,!1,null,null,null);e["a"]=o.exports},b241:function(t,e,s){"use strict";s("34b7")},ca31:function(t,e,s){t.exports=s.p+"img/search_engine__monochromatic.50ef63ab.svg"},dd0d:function(t,e,s){}}]);
//# sourceMappingURL=career-profession-type.e18b71a2.js.map