(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-profession-type"],{"4bdb":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1"},[a("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():a("div",{staticClass:"col-md-3"},[a("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:s("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"card-body p-3 p-lg-4"},[a("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),a("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Bist Du auf der Suche nach einer "),s("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),s("br"),t._v(" Du willst Dich "),s("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),s("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],r={name:"BannerJobboard",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},n=r,l=(s("fe1f"),s("2877")),o=Object(l["a"])(n,a,i,!1,null,"17ec15da",null);e["a"]=o.exports},"7fd2":function(t,e,s){t.exports=s.p+"img/Online_lesson_Monochromatic.6ff971e4.svg"},"8bfd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"d-flex justify-content-center"},[a("router-link",{staticClass:"text-dark",attrs:{to:"/fortbildungskatalog"}},[a("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[a("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:s("7fd2"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),a("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[a("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),a("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},i=[],r={name:"BannerTrainingCatalogueSmall"},n=r,l=s("2877"),o=Object(l["a"])(n,a,i,!1,null,null,null);e["a"]=o.exports},a2be:function(t,e,s){},a32c:function(t,e,s){},aedd:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.trainings?s("div",{staticClass:"row"},t._l(t.trainings,(function(e){return s("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[s("TrainingCard",{attrs:{training:e}})],1)})),0):s("div",{staticClass:"row"},t._l(t.number,(function(e){return s("TrainingCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.training.title?s("article",{staticClass:"weiterbildung-card"},[s("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?s("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),s("div",{staticClass:"card-body"},[s("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[s("p",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))])]),s("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),s("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)]):t._e()},n=[],l={name:"TrainingCard",props:{training:{type:Object,default:()=>{}}}},o=l,c=(s("e50f"),s("2877")),d=Object(c["a"])(o,r,n,!1,null,"491446b8",null),u=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[s("div",{staticClass:"card"},[s("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),s("div",{staticClass:"card-body"},[s("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),s("div",{staticClass:"mt-3"},[s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),s("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),s("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},b=[],m=s("2b0e"),f=s("0942");m["default"].component("BSkeleton",f["a"]);var g={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},h=g,v=(s("ca98"),Object(c["a"])(h,p,b,!1,null,"da4e611e",null)),C=v.exports,y={name:"TrainingListRandom",components:{TrainingCard:u,TrainingCardPlaceholder:C},props:{number:{type:Number,default:3}},data(){return{trainings:null}},watch:{$route(t,e){t!=e&&this.getTrainings()}},created(){this.getTrainings()},methods:{async getTrainings(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                weiterbildungen(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.weiterbildungen)return;this.trainings=t.data.data.weiterbildungen}catch(t){return}}}},w=y,x=Object(c["a"])(w,a,i,!1,null,null,null);e["a"]=x.exports},ca31:function(t,e,s){t.exports=s.p+"img/search_engine__monochromatic.50ef63ab.svg"},ca98:function(t,e,s){"use strict";s("a2be")},e50f:function(t,e,s){"use strict";s("a32c")},ea4e:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"list-group"},[s("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v(" Jobs & Berufsbilder ")]),t._l(t.berufsbilderTypes,(function(e){return s("b-link",{key:e,staticClass:"list-group-item list-group-item-action",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.toLowerCase(),active:e.toLowerCase()===t.$route.params.slug}},[t._v(t._s(e))])}))],2)},i=[],r={name:"NavProfessions",components:{},data(){return{berufsbilderTypes:["Beratung","Forschung","Management","Medizinisch-Technisch","Verwaltung"]}}},n=r,l=s("2877"),o=Object(l["a"])(n,a,i,!1,null,null,null);e["a"]=o.exports},f524:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.professions?s("div",{staticClass:"berufsbild-type"},[s("div",{staticClass:"title"},[s("h1",[t._v("MFA & ZFA Berufsbilder – "+t._s(t.professions[0].professionType.name))]),s("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),s("div",{staticClass:"container py-3 py-lg-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-4 mb-4"},[s("NavProfessions"),s("BannerTrainingCatalogueSmall",{staticClass:"my-3"})],1),s("div",{staticClass:"col-12 col-md-8 mb-5"},[t.professions[0].professionType.description?s("div",{staticClass:"mb-4",domProps:{innerHTML:t._s(t.professions[0].professionType.description)}}):t._e(),s("nav",{staticClass:"list-group"},t._l(t.professions,(function(e){return s("div",{key:e.slug,staticClass:"list-group-item mb-0 p-3",staticStyle:{"font-size":"larger",color:"inherit"},attrs:{id:e.slug}},[e.content?s("b-link",{staticClass:"bold text-primary hover-text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.professionType.slug+"/"+e.slug}},[t._v(" "+t._s(e.title)+" "),s("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]):s("span",{staticClass:"text-muted"},[t._v(t._s(e.title))])],1)})),0),s("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[s("SearchWidgetJob",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),s("JobListTeaser",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),s("BannerJobboard",{staticClass:"mt-5"})],1)]),s("TrainingListRandom",{staticClass:"mt-5"})],1),s("Head",{attrs:{title:"MFA & ZFA Berufsbilder – "+t.professions[0].professionType.name,desc:t.professions[0].professionType.metaDesc,img:"",script:t.snippet}})],1):t._e()},i=[],r=s("ea4e"),n=s("aedd"),l=s("4bdb"),o=s("400a"),c=s("02ac"),d=s("8bfd"),u={name:"CareerProfessionType",components:{NavProfessions:r["a"],TrainingListRandom:n["a"],BannerJobboard:l["a"],JobListTeaser:o["a"],SearchWidgetJob:c["a"],BannerTrainingCatalogueSmall:d["a"]},data(){return{professions:null,visible:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "name": "MFA mal anders",\n                "item": "https://www.mfa-mal-anders.de"\n            },{\n                "@type": "ListItem",\n                "position": 2,\n                "name": "Karriere",\n                "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n                "@type": "ListItem",\n                "position": 3,\n                "name": "Jobs und Berufsbilder",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n            },{\n                "@type": "ListItem",\n                "position": 4,\n                "name": "${this.$route.params.slug.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("-")}",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/${this.$route.params.slug}"\n            }]\n          }`}]}},computed:{breadcrumbs(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.professions[0].professionType.name,to:"/karriere/jobs-und-berufsbilder/"+this.$route.params.slug}]}},watch:{async"$route.params.slug"(){await this.getProfessions()}},created(){this.getProfessions()},methods:{async getProfessions(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                professions(type: "${this.$route.params.slug}") {\n                  title\n                  content\n                  slug\n                  professionType {\n                    name\n                    description\n                    slug\n                    metaDesc\n                  }\n                }\n              }\n            `}});if(!t.data.data.professions)return;this.professions=t.data.data.professions}catch(t){return}},setVisible(t){this.visible===t?this.visible=null:this.visible=t}}},p=u,b=s("2877"),m=Object(b["a"])(p,a,i,!1,null,null,null);e["default"]=m.exports},f8ea:function(t,e,s){},fe1f:function(t,e,s){"use strict";s("f8ea")}}]);
//# sourceMappingURL=career-profession-type.088a3db3.js.map