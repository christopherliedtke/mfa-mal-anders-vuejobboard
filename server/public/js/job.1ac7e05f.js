(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a("2b0e"),i=a("b42e"),s=a("c637"),o=a("a723"),r=a("cf75");function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c=Object(r["c"])({animation:Object(r["b"])(o["s"],"wave"),height:Object(r["b"])(o["s"]),size:Object(r["b"])(o["s"]),type:Object(r["b"])(o["s"],"text"),variant:Object(r["b"])(o["s"]),width:Object(r["b"])(o["s"])},s["W"]),d=n["default"].extend({name:s["W"],functional:!0,props:c,render:function(t,e){var a,n=e.data,s=e.props,o=s.size,r=s.animation,c=s.variant;return t("div",Object(i["a"])(n,{staticClass:"b-skeleton",style:{width:o||s.width,height:o||s.height},class:(a={},l(a,"b-skeleton-".concat(s.type),!0),l(a,"b-skeleton-animate-".concat(r),r),l(a,"bg-".concat(c),c),a)}))}})},"0f84":function(t,e,a){"use strict";a("7536")},"15f6":function(t,e,a){},"215b":function(t,e,a){"use strict";a("dd0d")},2715:function(t,e,a){},"2ca5":function(t,e,a){"use strict";a("2715")},"2f62b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobpage container py-4 py-lg-5"},[t.error?a("div",[t._v(" "+t._s(t.error)+" "),a("div",{staticClass:"mt-3"},[a("b-btn",{attrs:{to:"/stellenangebote"}},[t._v("Zurück zu den Stellenangeboten")])],1)]):t.job?a("Job",{attrs:{job:t.job}}):t.job?t._e():a("JobPlaceholder",{staticClass:"mb-5"}),a("SimilarJobsContainer",{attrs:{job:t.job,number:5}}),a("JobSeeksLargeBanner",{staticClass:"mt-4 mt-lg-5"}),a("RandomTrainingsContainer",{staticClass:"mt-4 mt-lg-5",attrs:{number:3}}),t.job?a("Head",{attrs:{title:(t.job.title||"")+" | "+(t.job.employmentType?t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text:"")+" | "+t.job.company.location,desc:"Stellenangebot – "+(t.job.title||"")+" | "+(t.job.company.name||"")+" | "+(t.job.employmentType?t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text:"")+" | "+t.job.company.location+(t.job.company.state!=t.job.company.location?", "+t.job.company.state:""),img:t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?t.job.imageUrl:t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?t.job.company.logoUrl:"ZFA"===t.job.profession?"/img/MfaMalAnders_NeuesStellenangebot_ZFA.jpg":"/img/MfaMalAnders_NeuesStellenangebot_MFA.jpg","twitter-card":t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?"summary_large_image":t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet}}):t._e()],1)},i=[],s=a("890f"),o=a("5298"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5 px-0"},[t.job&&t.similarJobs.length>0?a("div",[t._l(t.similarJobs,(function(e){return a("JobCard",{key:e.id,attrs:{job:e,compact:t.compact}})})),a("div",{staticClass:"text-right mt-4"},[a("b-button",{attrs:{to:"/stellenangebote/ort/"+t.job.company.location.toLowerCase().replace(" ","-"),variant:"outline-primary"}},[t._v(" Weitere Stellenangebote in der Nähe von "+t._s(t.job.company.location)+" ")])],1)],2):t._e(),t.loading?a("div",t._l(t.number,(function(t){return a("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1):t._e()])},l=[],c=a("f0fa"),d=a("f810"),m={name:"SimiarJobsContainer",components:{JobCard:c["a"],JobCardPlaceholder:d["a"]},props:{job:{type:Object,default:()=>{}},number:{type:Number,default:5},compact:{type:Boolean,default:!1}},data(){return{similarJobs:[],loading:!1}},watch:{job(){this.getSimilarJobs(this.job)}},created(){this.getSimilarJobs(this.job)},methods:{async getSimilarJobs(t){if(t){this.loading=!0;try{const e=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                publicJobs (\n                  limit: ${this.number+1}\n                  position: { \n                    lat: ${t.company.geoCodeLat||null},\n                    lng: ${t.company.geoCodeLng||null}\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    excerpt\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            `}});this.similarJobs=e.data.data.publicJobs.jobs.filter(e=>t._id!=e._id).slice(0,this.number)}catch(e){}this.loading=!1}}}},b=m,p=a("2877"),h=Object(p["a"])(b,r,l,!1,null,null,null),u=h.exports,g=a("6df3"),v=a("448f"),f=a("1ba6"),y={name:"JobView",components:{Job:s["a"],JobPlaceholder:o["a"],SimilarJobsContainer:u,RandomTrainingsContainer:g["a"],JobSeeksLargeBanner:v["a"]},data(){return{job:null,error:null,employmentTypeOptions:f["f"]}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [\n              {\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },\n              {\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellenangebote",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote"\n              },\n              {\n                  "@type": "ListItem",\n                  "position": 3,\n                  "name": "Stellenangebot",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote/job/${this.job?this.job._id:""}"\n              }\n            ]\n          }`},{id:"canonical",rel:"canonical",href:`${this.$config.website.url}/stellenangebote/job/${this.job?this.job._id:""}/${this.job?this.job.slug:""}`}]}},watch:{"$route.params.jobId"(){this.getJob(this.$route.params.jobId)}},created(){this.getJob(this.$route.params.jobId)},methods:{async getJob(t){if(this.error=null,!t)throw new Error;this.job=null;try{const e=await this.$axios.get("/graphql",{params:{query:`\n                query {\n                  publicJob(_id: "${t}") {\n                    _id\n                    updatedAt\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              `}});if(e.data.errors)throw new Error;if(!e.data.data.publicJob)return this.jobSeek={},void(this.error="Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.");this.job=e.data.data.publicJob}catch(e){this.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}}},w=y,j=Object(p["a"])(w,n,i,!1,null,null,null);e["default"]=j.exports},"30d1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-archive"},[a("div",{staticClass:"title"},[a("h1",[t._v(" Unternehmensverzeichnis ")]),a("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"container py-4 py-lg-5"},[a("nav",{staticClass:"list-group-flush"},t._l(t.companies,(function(e){return a("b-link",{key:e._id,staticClass:"list-group-item list-group-item-action py-3 mb-0 text-primary d-flex justify-content-between",attrs:{to:"/unternehmen/"+e._id+"/"+e.slug}},[a("span",[a("strong",[t._v(t._s(e.name))]),t._v(" | "+t._s(e.location))]),e.logoUrl?a("div",{staticClass:"logo-container ml-3"},[a("b-img-lazy",{staticClass:"logo",attrs:{fluid:"",src:e.logoUrl,alt:"Logo - "+e.name}})],1):t._e()])})),1)]),a("Head",{attrs:{title:"Unternehmensverzeichnis für Stellenangebote",desc:"Finde passende Unternehmen mit Stellenanzeigen auf MFA mal anders",script:t.snippet}})],1)},i=[],s={name:"CompanyArchive",data(){return{companies:null,breadcrumbs:[{text:"Home",to:"/"},{text:"Stellenangebote",to:"/stellenangebote"},{text:"Unternehmensverzeichnis",to:"/stellenangebote/unternehmensverzeichnis"}],snippet:[{id:"canonical",rel:"canonical",href:this.$config.website.url+"/stellenangebote/unternehmensverzeichnis"},{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Stellenangebote",\n              "item": "https://www.mfa-mal-anders.de/stellenangebote"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Unternehmensverzeichnis",\n              "item": "https://www.mfa-mal-anders.de/stellenangebote/unternehmensverzeichnis"\n            }]\n          }'}]}},async created(){await this.getCompanies()},methods:{async getCompanies(){try{const t=await this.$axios.get("/graphql",{params:{query:"\n                query {\n                  companies {\n                    _id\n                    name\n                    location\n                    logoUrl\n                    slug\n                  }\n                }\n              "}});if(!t.data.data.companies)throw new Error;this.companies=t.data.data.companies}catch(t){this.$root.$bvToast.toast("Unternehmen konnten nicht geladen werden.",{title:"Unternehmen nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$router.push("/stellenangebote")}}}},o=s,r=(a("0f84"),a("2877")),l=Object(r["a"])(o,n,i,!1,null,"72d6906e",null);e["default"]=l.exports},"448f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-xl-9"},[a("h2",{staticClass:"display-4 bold",domProps:{innerHTML:t._s(t.header)}}),a("p",{staticClass:"lead bold text-primary uppercase"},[t._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),a("p",[t._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),a("b-button",{attrs:{to:"/stellengesuche/info",variant:"secondary"}},[t._v("Mehr erfahren")])],1)])])])},i=[],s={name:"JobSeeksLargeBanner",props:{header:{type:String,default:"<strong>Stellengesuch schalten</strong>"}}},o=s,r=(a("d441"),a("2877")),l=Object(r["a"])(o,n,i,!1,null,"cc7e7da0",null);e["a"]=l.exports},"510e":function(t,e,a){"use strict";a("d1b1")},"6df3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("article",{key:e.id,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,"aria-label":e.title}},[a("div",{staticClass:"card"},[e.featuredImage.node.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.featuredImage.node.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw",src:e.featuredImage.node.sourceUrl,alt:e.featuredImage.node.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("WeiterbildungCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},o=[],r=a("2b0e"),l=a("0942");r["default"].component("BSkeleton",l["a"]);var c={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},d=c,m=(a("215b"),a("2877")),b=Object(m["a"])(d,s,o,!1,null,"773bc4fc",null),p=b.exports,h={name:"RandomTrainingsContainer",components:{WeiterbildungCardPlaceholder:p},props:{number:{type:Number,default:3}},data(){return{trainings:null}},watch:{$route(t,e){t!=e&&this.getTrainings()},"$store.state.trainings.trainings"(){this.getTrainings()}},created(){this.$store.dispatch("getTrainings"),this.getTrainings()},methods:{getRandom(t,e){var a=new Array(e),n=t.length,i=new Array(n);if(e>n)throw new RangeError("getRandom: more elements taken than available");while(e--){var s=Math.floor(Math.random()*n);a[e]=t[s in i?i[s]:s],i[s]=--n in i?i[n]:n}return a},getTrainings(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number>this.$store.state.trainings.trainings.length?this.$store.state.trainings.trainings.length:this.number))}}},u=h,g=(a("fdcd"),Object(m["a"])(u,n,i,!1,null,"4a77e4b8",null));e["a"]=g.exports},7536:function(t,e,a){},"7fd8":function(t,e,a){},d1b1:function(t,e,a){},d441:function(t,e,a){"use strict";a("7fd8")},dd0d:function(t,e,a){},f0fa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("article",{staticClass:"jobcard"},[a("b-link",{attrs:{to:"/stellenangebote/job/"+t.job._id+"/"+t.job.slug,target:"_self"}},[a("div",{class:["card",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("div",{staticClass:"card-text"},[a("div",{class:["card-head position-relative",t.job.refreshFrequency&&t.job.refreshFrequency<=7?"bg-secondary":"bg-primary"]},[a("h2",{class:["h4",{"mobile-max-width-75":t.job.company.logoUrl&&!t.compact}],style:t.compact?"font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap":"",domProps:{innerHTML:t._s(t.job.title)}}),a("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{fluid:"",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name,height:"70","blank-width":"70","blank-height":"70",offset:"500"}})],1):t._e()],1),!t.compact&&t.job.excerpt?a("div",{staticClass:"card-content"},[a("p",[t._v(t._s(t.job.excerpt))])]):t._e(),t.compact?t._e():a("hr"),a("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-building",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"}}),a("path",{attrs:{d:"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"}})])]),a("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):t._e(),t.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])]),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),a("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(e){return e.value===t.job.employmentType})).text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-activity",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.simpleApplication?a("div",[a("div",{staticClass:"badge badge-pill badge-secondary"},[t._v(" # Einfach bewerben ")])]):t._e()])])])])],1):t._e()},i=[],s=a("1ba6"),o=a("7067"),r={name:"JobCard",components:{StarJob:o["a"]},props:{job:{type:Object,default:()=>{}},compact:{type:Boolean,default:!1}},data(){return{employmentTypeOptions:s["f"],companySizeOptions:s["b"]}}},l=r,c=(a("510e"),a("2877")),d=Object(c["a"])(l,n,i,!1,null,"4325ca1e",null);e["a"]=d.exports},f810:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["job-card-placeholder",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("BSkeleton",{staticClass:"header",attrs:{height:t.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),t.compact?t._e():a("BSkeleton",{attrs:{height:"1px"}}),t.compact?t._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},i=[],s=a("2b0e"),o=a("0942");s["default"].component("BSkeleton",o["a"]);var r={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},l=r,c=(a("2ca5"),a("2877")),d=Object(c["a"])(l,n,i,!1,null,"534ac5f8",null);e["a"]=d.exports},fdcd:function(t,e,a){"use strict";a("15f6")}}]);
//# sourceMappingURL=job.1ac7e05f.js.map