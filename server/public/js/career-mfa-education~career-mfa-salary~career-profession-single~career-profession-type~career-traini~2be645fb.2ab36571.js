(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-mfa-education~career-mfa-salary~career-profession-single~career-profession-type~career-traini~2be645fb"],{"02ac":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.$router.push("/?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location)}}},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[t._v("Suchbegriff")]),a("b-input-group",[a("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:t.placeholder},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),a("b-input-group-append",[a("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"sr-only"},[t._v("Stellenangebote für MFA / ZFA finden")])])],1)],1)],1),t.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[t._v(" Stellenanzeige schalten ")])],1):t._e()],1)},o=[],i={name:"SearchWidgetJob",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data(){return{searchTerm:""}}},r=i,c=a("2877"),n=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports},"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var s=a("2b0e"),o=a("b42e"),i=a("c637"),r=a("a723"),c=a("cf75");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=Object(c["c"])({animation:Object(c["b"])(r["s"],"wave"),height:Object(c["b"])(r["s"]),size:Object(c["b"])(r["s"]),type:Object(c["b"])(r["s"],"text"),variant:Object(c["b"])(r["s"]),width:Object(c["b"])(r["s"])},i["W"]),d=s["default"].extend({name:i["W"],functional:!0,props:l,render:function(t,e){var a,s=e.data,i=e.props,r=i.size,c=i.animation,l=i.variant;return t("div",Object(o["a"])(s,{staticClass:"b-skeleton",style:{width:r||i.width,height:r||i.height},class:(a={},n(a,"b-skeleton-".concat(i.type),!0),n(a,"b-skeleton-animate-".concat(c),c),n(a,"bg-".concat(l),l),a)}))}})},"0cb3":function(t,e,a){"use strict";a("7e41")},1223:function(t,e,a){},2740:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$config.starredJobs.active?a("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar.apply(null,arguments)}}},[t.active?a("svg",{staticClass:"bi bi-star-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*t.size,height:15*t.size,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}})]):a("svg",{staticClass:"bi bi-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*t.size,height:15*t.size,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])]):t._e()},o=[],i={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:Number,default:1}},data(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs"(){this.checkStarredJobs()}},mounted(){this.checkStarredJobs()},methods:{checkStarredJobs(){this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some(t=>t.job===this.jobId)?this.active=!0:this.active=!1},async toggleStar(){this.$store.state.auth.loggedIn?this.active?(this.active=!1,await this.$store.dispatch("deleteStarredJob",this.jobId),this.$gtag.event("job_delete_star",{event_label:this.jobId}),this.$matomo&&this.$matomo.trackEvent("engagement","job_delete_star",this.jobId)):(this.active=!0,await this.$store.dispatch("addStarredJob",this.jobId),this.$gtag.event("job_add_star",{event_label:this.jobId}),this.$matomo&&this.$matomo.trackEvent("engagement","job_add_star",this.jobId)):this.$store.commit("setStarJobModal",!0)}}},r=i,c=(a("f17c"),a("2877")),n=Object(c["a"])(r,s,o,!1,null,"42ec67ec",null);e["a"]=n.exports},"354b":function(t,e,a){},"400a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobs?a("div",[t.jobs.length>0?a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.jobs,(function(e){return a("div",{key:e._id,staticClass:"col"},[a("JobCard",{attrs:{job:e,compact:t.compact}})],1)})),0):a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.number,(function(e){return a("div",{key:e,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:t.compact}})],1)})),0),t.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/?s="+t.searchTerm+"&anstellungsart="+t.employmentType+"&berufsgruppe="+t.profession,variant:"outline-primary",size:"sm"}},[t._v("Weitere")])],1):t._e()]):t._e()},o=[],i=a("c452"),r=a("b6d4"),c={name:"JobListTeaser",components:{JobCard:i["a"],JobCardPlaceholder:r["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data(){return{jobs:[]}},mounted(){this.getPublicJobs()},methods:{async getPublicJobs(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                publicJobs (\n                  limit: ${this.number}\n                  s: "${this.searchTerm}"\n                  employmentType: "${this.employmentType}"\n                  profession: "${this.profession}"\n                  position: { \n                    lat: ${this.location&&this.location.geoCodeLat?this.location.geoCodeLat:null},\n                    lng: ${this.location&&this.location.geoCodeLng?this.location.geoCodeLng:null}\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            `}});if(t.data.errors)throw new Error;this.jobs=t.data.data.publicJobs.jobs||null}catch(t){}}}},n=c,l=a("2877"),d=Object(l["a"])(n,s,o,!1,null,null,null);e["a"]=d.exports},"7e41":function(t,e,a){},"88ef":function(t,e,a){"use strict";a("354b")},b6d4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["job-card-placeholder",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("BSkeleton",{staticClass:"header",attrs:{height:t.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),t.compact?t._e():a("BSkeleton",{attrs:{height:"1px"}}),t.compact?t._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},o=[],i=a("2b0e"),r=a("0942");i["default"].component("BSkeleton",r["a"]);var c={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},n=c,l=(a("0cb3"),a("2877")),d=Object(l["a"])(n,s,o,!1,null,"57ec608f",null);e["a"]=d.exports},c452:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("article",{staticClass:"jobcard"},[a("div",{class:["card",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("div",{staticClass:"card-text"},[a("div",{class:["card-head",t.job.refreshFrequency&&t.job.refreshFrequency<=7?"bg-secondary":"bg-primary"]},[a("b-link",{class:["text-reset stretched-link",{"mr-3":!t.job.company.logoUrl||t.compact}],style:t.compact?"max-width: 95%":"",attrs:{to:"/job/"+t.job._id+"/"+t.job.slug,"aria-label":t.job.title,target:"_self"}},[a("h2",{class:["h4 text-break",{"text-truncate":t.compact}],style:t.compact?"font-size:1rem; padding: 0.75rem;":"",domProps:{innerHTML:t._s(t.job.title)}})]),a("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{fluid:"",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name,height:"70","blank-width":"70","blank-height":"70",offset:"500"}})],1):t._e()],1),!t.compact&&t.job.excerpt?a("div",{staticClass:"card-content"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.job.excerpt))])]):t._e(),t.compact?t._e():a("hr"),a("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-hospital",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"}}),a("path",{attrs:{d:"M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"}})])]),a("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):t._e(),t.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])]),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-clock-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(e){return e.value===t.job.employmentType})).text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("svg",{attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.simpleApplication?a("div",[a("div",{staticClass:"badge badge-pill badge-secondary"},[t._v(" # Einfach bewerben ")])]):t._e()])])])]):t._e()},o=[],i=a("1ba6"),r=a("2740"),c={name:"JobCard",components:{StarJob:r["a"]},props:{job:{type:Object,default:()=>{}},compact:{type:Boolean,default:!1}},data(){return{employmentTypeOptions:i["g"],companySizeOptions:i["c"]}}},n=c,l=(a("88ef"),a("2877")),d=Object(l["a"])(n,s,o,!1,null,"228b5b94",null);e["a"]=d.exports},f17c:function(t,e,a){"use strict";a("1223")}}]);
//# sourceMappingURL=career-mfa-education~career-mfa-salary~career-profession-single~career-profession-type~career-traini~2be645fb.2ab36571.js.map