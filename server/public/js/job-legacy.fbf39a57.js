(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job"],{"0ab1":function(e,t,n){"use strict";n("2219")},2219:function(e,t,n){},"25f0":function(e,t,n){"use strict";var a=n("e330"),r=n("5e77").PROPER,i=n("6eeb"),o=n("825a"),s=n("3a9b"),c=n("577e"),l=n("d039"),u=n("ad6d"),d="toString",b=RegExp.prototype,p=b[d],g=a(u),m=l((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),f=r&&p.name!=d;(m||f)&&i(RegExp.prototype,d,(function(){var e=o(this),t=c(e.source),n=e.flags,a=c(void 0===n&&s(b,e)&&!("flags"in b)?g(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"2c3e":function(e,t,n){var a=n("da84"),r=n("83ab"),i=n("9f7f").UNSUPPORTED_Y,o=n("c6b6"),s=n("9bf2").f,c=n("69f3").get,l=RegExp.prototype,u=a.TypeError;r&&i&&s(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"4d63":function(e,t,n){var a=n("83ab"),r=n("da84"),i=n("e330"),o=n("94ca"),s=n("7156"),c=n("9112"),l=n("9bf2").f,u=n("241c").f,d=n("3a9b"),b=n("44e7"),p=n("577e"),g=n("ad6d"),m=n("9f7f"),f=n("6eeb"),h=n("d039"),y=n("1a2d"),v=n("69f3").enforce,x=n("2626"),j=n("b622"),w=n("fce3"),C=n("107c"),S=j("match"),k=r.RegExp,_=k.prototype,J=r.SyntaxError,T=i(g),E=i(_.exec),R=i("".charAt),L=i("".replace),A=i("".indexOf),B=i("".slice),U=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$=/a/g,O=/a/g,P=new k($)!==$,I=m.UNSUPPORTED_Y,M=a&&(!P||I||w||C||h((function(){return O[S]=!1,k($)!=$||k(O)==O||"/a/i"!=k($,"i")}))),z=function(e){for(var t,n=e.length,a=0,r="",i=!1;a<=n;a++)t=R(e,a),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),r+=t):r+="[\\s\\S]":r+=t+R(e,++a);return r},q=function(e){for(var t,n=e.length,a=0,r="",i=[],o={},s=!1,c=!1,l=0,u="";a<=n;a++){if(t=R(e,a),"\\"===t)t+=R(e,++a);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:E(U,B(e,a+1))&&(a+=2,c=!0),r+=t,l++;continue;case">"===t&&c:if(""===u||y(o,u))throw new J("Invalid capture group name");o[u]=!0,i[i.length]=[u,l],c=!1,u="";continue}c?u+=t:r+=t}return[r,i]};if(o("RegExp",M)){for(var N=function(e,t){var n,a,r,i,o,l,u=d(_,this),g=b(e),m=void 0===t,f=[],h=e;if(!u&&g&&m&&e.constructor===N)return e;if((g||d(_,e))&&(e=e.source,m&&(t="flags"in h?h.flags:T(h))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),h=e,w&&"dotAll"in $&&(a=!!t&&A(t,"s")>-1,a&&(t=L(t,/s/g,""))),n=t,I&&"sticky"in $&&(r=!!t&&A(t,"y")>-1,r&&(t=L(t,/y/g,""))),C&&(i=q(e),e=i[0],f=i[1]),o=s(k(e,t),u?this:_,N),(a||r||f.length)&&(l=v(o),a&&(l.dotAll=!0,l.raw=N(z(e),n)),r&&(l.sticky=!0),f.length&&(l.groups=f)),e!==h)try{c(o,"source",""===h?"(?:)":h)}catch(y){}return o},F=function(e){e in N||l(N,e,{configurable:!0,get:function(){return k[e]},set:function(t){k[e]=t}})},D=u(k),H=0;D.length>H;)F(D[H++]);_.constructor=N,N.prototype=_,f(r,"RegExp",N)}x("RegExp")},"6bea":function(e,t,n){},"7e71":function(e,t,n){"use strict";n("6bea")},9192:function(e,t,n){n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0");var a=function(e){return e?r(e):""};function r(e){e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase(),e=e.replace(/&amp;/g,"-").replace(/&shy;/g,"-").replace(/ß/g,"ss").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue");for(var t="àáãäâèéëêìíïîòóöôùúüûñç·/_,:;",n="aaaaaeeeeiiiioooouuuunc------",a=0,r=t.length;a<r;a++)e=e.replace(new RegExp(t.charAt(a),"g"),n.charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e}e.exports=a},"9b81":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[n("div",{staticClass:"card-body p-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"position-static col-12 col-xl-9"},[n("router-link",{staticClass:"text-reset stretched-link",attrs:{to:"/stellengesuche/info"}},[n("h2",{staticClass:"display-4 bold",domProps:{innerHTML:e._s(e.header)}})]),n("p",{staticClass:"lead bold text-primary uppercase"},[e._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),n("p",[e._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),n("b-button",{attrs:{variant:"secondary"}},[e._v("Mehr erfahren")])],1)])])])},r=[],i={name:"BannerJobSeeksLarge",props:{header:{type:String,default:"<strong>Stellengesuch schalten</strong>"}}},o=i,s=(n("0ab1"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"f1e9162c",null);t["a"]=c.exports},a087:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jobpage container py-4 py-lg-5"},[e.error?n("div",[e._v(" "+e._s(e.error)+" "),n("div",{staticClass:"mt-3"},[n("b-btn",{attrs:{to:"/"}},[e._v("Zurück zu den Stellenangeboten")])],1)]):e.job?n("Job",{attrs:{job:e.job}}):e.job?e._e():n("JobItemPlaceholder",{staticClass:"mb-5"}),n("JobListSimilar",{attrs:{job:e.job,number:5}}),n("BannerJobSeeksLarge",{staticClass:"mt-4 mt-lg-5"}),n("TrainingListRandom",{staticClass:"mt-4 mt-lg-5",attrs:{number:3}}),e.job?n("Head",{attrs:{title:(e.job.title||"")+" | "+(e.job.employmentType?e.employmentTypeOptions.filter((function(t){return t.value===e.job.employmentType}))[0].text:"")+" | "+e.job.company.location,desc:"Stellenangebot – "+(e.job.title||"")+" | "+(e.job.company.name||"")+" | "+(e.job.employmentType?e.employmentTypeOptions.filter((function(t){return t.value===e.job.employmentType}))[0].text:"")+" | "+e.job.company.location+(e.job.company.state!=e.job.company.location?", "+e.job.company.state:""),img:e.job.imageUrl&&!e.job.imageUrl.includes(".svg")?e.job.imageUrl:e.job.company.logoUrl&&!e.job.company.logoUrl.includes(".svg")?e.job.company.logoUrl:"ZFA"===e.job.profession?"/img/MfaMalAnders_NeuesStellenangebot_ZFA.jpg":"/img/MfaMalAnders_NeuesStellenangebot_MFA.jpg","twitter-card":e.job.imageUrl&&!e.job.imageUrl.includes(".svg")?"summary_large_image":e.job.company.logoUrl&&!e.job.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:e.snippet}}):e._e()],1)},r=[],i=n("1da1"),o=(n("96cf"),n("99af"),n("ce46")),s=n("9d0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mt-5 px-0"},[e.job&&e.similarJobs.length>0?n("div",[e._l(e.similarJobs,(function(t){return n("JobCard",{key:t.id,attrs:{job:t,compact:e.compact}})})),n("div",{staticClass:"text-right mt-4"},[n("b-button",{attrs:{to:"/?ort="+e.textToSlug(e.job.company.location),variant:"outline-primary"}},[e._v(" Weitere Stellenangebote in der Nähe von "+e._s(e.job.company.location)+" ")])],1)],2):e._e(),e.loading?n("div",e._l(e.number,(function(e){return n("JobCardPlaceholder",{key:e,staticClass:"mb-3"})})),1):e._e()])},l=[],u=(n("a9e3"),n("fb6a"),n("4de4"),n("d3b7"),n("c452")),d=n("b6d4"),b=n("9192"),p=n.n(b),g={name:"JobListSimilar",components:{JobCard:u["a"],JobCardPlaceholder:d["a"]},props:{job:{type:Object,default:function(){}},number:{type:Number,default:5},compact:{type:Boolean,default:!1}},data:function(){return{similarJobs:[],loading:!1,textToSlug:p.a}},watch:{job:function(){this.getSimilarJobs(this.job)}},created:function(){this.getSimilarJobs(this.job)},methods:{getSimilarJobs:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return t.loading=!0,n.prev=3,n.next=6,t.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(t.number+1,"\n                  position: { \n                    lat: ").concat(e.company.geoCodeLat||null,",\n                    lng: ").concat(e.company.geoCodeLng||null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    excerpt\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 6:a=n.sent,t.similarJobs=a.data.data.publicJobs.jobs.filter((function(t){return e._id!=t._id})).slice(0,t.number),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](3);case 12:t.loading=!1;case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()}}},m=g,f=n("2877"),h=Object(f["a"])(m,c,l,!1,null,null,null),y=h.exports,v=n("aedd"),x=n("9b81"),j=n("1ba6"),w={name:"JobView",components:{Job:o["a"],JobItemPlaceholder:s["a"],JobListSimilar:y,TrainingListRandom:v["a"],BannerJobSeeksLarge:x["a"]},data:function(){return{job:null,error:null,employmentTypeOptions:j["g"]}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [\n              {\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "Home",\n                  "item": "https://www.mfa-mal-anders.de/"\n              },\n              {\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellenangebot",\n                  "item": "https://www.mfa-mal-anders.de/job/'.concat(this.job?this.job._id:"",'"\n              }\n            ]\n          }')},{id:"canonical",rel:"canonical",href:"".concat(this.$config.website.url,"/job/").concat(this.job?this.job._id:"","/").concat(this.job?this.job.slug:"")}]}},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},created:function(){this.getJob(this.$route.params.jobId)},methods:{getJob:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.error=null,e){n.next=3;break}throw new Error;case 3:return t.job=null,n.prev=4,n.next=7,t.$axios.get("/graphql",{params:{query:'\n                query {\n                  publicJob(_id: "'.concat(e,'") {\n                    _id\n                    updatedAt\n                    status\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    slug\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              ')}});case 7:if(a=n.sent,!a.data.errors){n.next=10;break}throw new Error;case 10:if(a.data.data.publicJob){n.next=14;break}return t.jobSeek={},t.error="Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.",n.abrupt("return");case 14:t.job=a.data.data.publicJob,n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](4),t.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 20:case"end":return n.stop()}}),n,null,[[4,17]])})))()}}},C=w,S=Object(f["a"])(C,a,r,!1,null,null,null);t["default"]=S.exports},a2be:function(e,t,n){},aedd:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.trainings?n("div",{staticClass:"row"},e._l(e.trainings,(function(t){return n("div",{key:t.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===e.number?3:2)]},[n("TrainingCard",{attrs:{training:t}})],1)})),0):n("div",{staticClass:"row"},e._l(e.number,(function(t){return n("TrainingCardPlaceholder",{key:t,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===e.number?3:2)]})})),1)},r=[],i=n("1da1"),o=(n("96cf"),n("a9e3"),n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.training.title?n("article",{staticClass:"weiterbildung-card"},[n("div",{staticClass:"card"},[e.training.featuredImage.sourceUrl?n("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:e.training.featuredImage.sourceUrl,alt:e.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):e._e(),n("div",{staticClass:"card-body"},[n("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.training.slug,"aria-label":e.training.title}},[n("h2",{staticClass:"card-title h4"},[e._v(e._s(e.training.title))])]),n("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.training.excerpt)}}),n("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.training.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)]):e._e()}),s=[],c={name:"TrainingCard",props:{training:{type:Object,default:function(){}}}},l=c,u=(n("7e71"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,"06e5f2ba",null),b=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[n("div",{staticClass:"card"},[n("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),n("div",{staticClass:"card-body"},[n("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),n("div",{staticClass:"mt-3"},[n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),n("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},g=[],m=n("2b0e"),f=n("0942");m["default"].component("BSkeleton",f["a"]);var h={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},y=h,v=(n("ca98"),Object(u["a"])(y,p,g,!1,null,"da4e611e",null)),x=v.exports,j={name:"TrainingListRandom",components:{TrainingCard:b,TrainingCardPlaceholder:x},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(e,t){e!=t&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",e.number,', exclude: "').concat(e.$route.params.slug?e.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(n=t.sent,n.data.data.weiterbildungen){t.next=6;break}return t.abrupt("return");case 6:e.trainings=n.data.data.weiterbildungen,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},w=j,C=Object(u["a"])(w,a,r,!1,null,null,null);t["a"]=C.exports},c607:function(e,t,n){var a=n("da84"),r=n("83ab"),i=n("fce3"),o=n("c6b6"),s=n("9bf2").f,c=n("69f3").get,l=RegExp.prototype,u=a.TypeError;r&&i&&s(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},ca98:function(e,t,n){"use strict";n("a2be")}}]);
//# sourceMappingURL=job-legacy.fbf39a57.js.map