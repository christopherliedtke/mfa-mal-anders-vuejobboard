(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job"],{"0ab1":function(t,e,n){"use strict";n("2219")},2219:function(t,e,n){},"9b81":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[n("div",{staticClass:"card-body p-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"position-static col-12 col-xl-9"},[n("router-link",{staticClass:"text-reset stretched-link",attrs:{to:"/stellengesuche/info"}},[n("h2",{staticClass:"display-4 bold",domProps:{innerHTML:t._s(t.header)}})]),n("p",{staticClass:"lead bold text-primary uppercase"},[t._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),n("p",[t._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),n("b-button",{attrs:{variant:"secondary"}},[t._v("Mehr erfahren")])],1)])])])},r=[],i={name:"BannerJobSeeksLarge",props:{header:{type:String,default:"<strong>Stellengesuch schalten</strong>"}}},s=i,o=(n("0ab1"),n("2877")),l=Object(o["a"])(s,a,r,!1,null,"f1e9162c",null);e["a"]=l.exports},a087:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jobpage container py-4 py-lg-5"},[t.error?n("div",[t._v(" "+t._s(t.error)+" "),n("div",{staticClass:"mt-3"},[n("b-btn",{attrs:{to:"/jobs"}},[t._v("Zurück zu den Stellenangeboten")])],1)]):t.job?n("Job",{attrs:{job:t.job}}):t.job?t._e():n("JobItemPlaceholder",{staticClass:"mb-5"}),n("JobListSimilar",{attrs:{job:t.job,number:5}}),n("BannerJobSeeksLarge",{staticClass:"mt-4 mt-lg-5"}),n("TrainingListRandom",{staticClass:"mt-4 mt-lg-5",attrs:{number:3}}),t.job?n("Head",{attrs:{title:(t.job.title||"")+" | "+(t.job.employmentType?t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text:"")+" | "+t.job.company.location,desc:"Stellenangebot – "+(t.job.title||"")+" | "+(t.job.company.name||"")+" | "+(t.job.employmentType?t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text:"")+" | "+t.job.company.location+(t.job.company.state!=t.job.company.location?", "+t.job.company.state:""),img:t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?t.job.imageUrl:t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?t.job.company.logoUrl:"ZFA"===t.job.profession?"/img/MfaMalAnders_NeuesStellenangebot_ZFA.jpg":"/img/MfaMalAnders_NeuesStellenangebot_MFA.jpg","twitter-card":t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?"summary_large_image":t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet}}):t._e()],1)},r=[],i=n("1da1"),s=(n("96cf"),n("99af"),n("ce46")),o=n("9d0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5 px-0"},[t.job&&t.similarJobs.length>0?n("div",[t._l(t.similarJobs,(function(e){return n("JobCard",{key:e.id,attrs:{job:e,compact:t.compact}})})),n("div",{staticClass:"text-right mt-4"},[n("b-button",{attrs:{to:"/jobs?ort="+t.textToSlug(t.job.company.location),variant:"outline-primary"}},[t._v(" Weitere Stellenangebote in der Nähe von "+t._s(t.job.company.location)+" ")])],1)],2):t._e(),t.loading?n("div",t._l(t.number,(function(t){return n("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1):t._e()])},c=[],u=(n("a9e3"),n("fb6a"),n("4de4"),n("d3b7"),n("c452")),d=n("b6d4"),b=n("9192"),m=n.n(b),p={name:"JobListSimilar",components:{JobCard:u["a"],JobCardPlaceholder:d["a"]},props:{job:{type:Object,default:function(){}},number:{type:Number,default:5},compact:{type:Boolean,default:!1}},data:function(){return{similarJobs:[],loading:!1,textToSlug:m.a}},watch:{job:function(){this.getSimilarJobs(this.job)}},created:function(){this.getSimilarJobs(this.job)},methods:{getSimilarJobs:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return e.loading=!0,n.prev=3,n.next=6,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(e.number+1,"\n                  position: { \n                    lat: ").concat(t.company.geoCodeLat||null,",\n                    lng: ").concat(t.company.geoCodeLng||null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    excerpt\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 6:a=n.sent,e.similarJobs=a.data.data.publicJobs.jobs.filter((function(e){return t._id!=e._id})).slice(0,e.number),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](3);case 12:e.loading=!1;case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()}}},g=p,h=n("2877"),f=Object(h["a"])(g,l,c,!1,null,null,null),y=f.exports,j=n("aedd"),v=n("9b81"),x=n("1ba6"),w={name:"JobView",components:{Job:s["a"],JobItemPlaceholder:o["a"],JobListSimilar:y,TrainingListRandom:j["a"],BannerJobSeeksLarge:v["a"]},data:function(){return{job:null,error:null,employmentTypeOptions:x["g"]}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [\n              {\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "Home",\n                  "item": "https://www.mfa-mal-anders.de/"\n              },\n              {\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Job",\n                  "item": "https://www.mfa-mal-anders.de/job/'.concat(this.job?this.job._id:"",'"\n              }\n            ]\n          }')},{id:"canonical",rel:"canonical",href:this.error?this.$config.website.url:"".concat(this.$config.website.url,"/job/").concat(this.job?this.job._id:"","/").concat(this.job?this.job.slug:"")}]}},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},created:function(){this.getJob(this.$route.params.jobId)},methods:{getJob:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.error=null,t){n.next=3;break}throw new Error;case 3:return e.job=null,n.prev=4,n.next=7,e.$axios.get("/graphql",{params:{query:'\n                query {\n                  publicJob(_id: "'.concat(t,'") {\n                    _id\n                    updatedAt\n                    status\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    videoUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    slug\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              ')}});case 7:if(a=n.sent,!a.data.errors){n.next=10;break}throw new Error;case 10:a.data.data.publicJob||(e.job=null,e.$root.$bvToast.toast("Das Stellenangebot konnte nicht gefunden werden bzw. ist bereits abgelaufen.",{title:"Stellenangebot abgelaufen",variant:"danger",toaster:"b-toaster-top-right",solid:!0,noAutoHide:!1}),e.$router.push("/404")),e.job=a.data.data.publicJob,n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](4),e.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))()}}},C=w,_=Object(h["a"])(C,a,r,!1,null,null,null);e["default"]=_.exports},a2be:function(t,e,n){},a32c:function(t,e,n){},aedd:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.trainings?n("div",{staticClass:"row"},t._l(t.trainings,(function(e){return n("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[n("TrainingCard",{attrs:{training:e}})],1)})),0):n("div",{staticClass:"row"},t._l(t.number,(function(e){return n("TrainingCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},r=[],i=n("1da1"),s=(n("96cf"),n("a9e3"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.training.title?n("article",{staticClass:"weiterbildung-card"},[n("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?n("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),n("div",{staticClass:"card-body"},[n("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[n("p",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))])]),n("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),n("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)]):t._e()}),o=[],l={name:"TrainingCard",props:{training:{type:Object,default:function(){}}}},c=l,u=(n("e50f"),n("2877")),d=Object(u["a"])(c,s,o,!1,null,"491446b8",null),b=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[n("div",{staticClass:"card"},[n("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),n("div",{staticClass:"card-body"},[n("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),n("div",{staticClass:"mt-3"},[n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),n("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},p=[],g=n("2b0e"),h=n("0942");g["default"].component("BSkeleton",h["a"]);var f={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},y=f,j=(n("ca98"),Object(u["a"])(y,m,p,!1,null,"da4e611e",null)),v=j.exports,x={name:"TrainingListRandom",components:{TrainingCard:b,TrainingCardPlaceholder:v},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(t,e){t!=e&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(n=e.sent,n.data.data.weiterbildungen){e.next=6;break}return e.abrupt("return");case 6:t.trainings=n.data.data.weiterbildungen,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},w=x,C=Object(u["a"])(w,a,r,!1,null,null,null);e["a"]=C.exports},ca98:function(t,e,n){"use strict";n("a2be")},e50f:function(t,e,n){"use strict";n("a32c")}}]);
//# sourceMappingURL=job-legacy.305db39d.js.map