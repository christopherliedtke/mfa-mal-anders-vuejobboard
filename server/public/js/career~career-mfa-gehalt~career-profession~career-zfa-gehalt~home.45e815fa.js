(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career~career-mfa-gehalt~career-profession~career-zfa-gehalt~home"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var s=a("2b0e"),o=a("b42e"),i=a("c637"),r=a("a723"),l=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var n=Object(l["d"])({animation:Object(l["c"])(r["s"],"wave"),height:Object(l["c"])(r["s"]),size:Object(l["c"])(r["s"]),type:Object(l["c"])(r["s"],"text"),variant:Object(l["c"])(r["s"]),width:Object(l["c"])(r["s"])},i["eb"]),d=s["default"].extend({name:i["eb"],functional:!0,props:n,render:function(t,e){var a,s=e.data,i=e.props,r=i.size,l=i.animation,n=i.variant;return t("div",Object(o["a"])(s,{staticClass:"b-skeleton",style:{width:r||i.width,height:r||i.height},class:(a={},c(a,"b-skeleton-".concat(i.type),!0),c(a,"b-skeleton-animate-".concat(l),l),c(a,"bg-".concat(n),n),a)}))}})},"22d6":function(t,e,a){"use strict";a("2eaf")},2715:function(t,e,a){},"2ca5":function(t,e,a){"use strict";a("2715")},"2eaf":function(t,e,a){},"4ce0":function(t,e,a){"use strict";a("50d4")},"4fef":function(t,e,a){t.exports=a.p+"img/calendar.beda8b1d.svg"},"50d4":function(t,e,a){},"68b7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobs?a("div",[t.jobs.length>0?a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.jobs,(function(e){return a("div",{key:e._id,staticClass:"col"},[a("JobCard",{attrs:{job:e,compact:t.compact}})],1)})),0):a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.number,(function(e){return a("div",{key:e,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:t.compact}})],1)})),0),t.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/stellenangebote?s="+t.searchTerm+"&employmentType="+t.employmentType+"&profession="+t.profession,variant:"outline-primary",size:"sm"}},[t._v("Weitere")])],1):t._e()]):t._e()},o=[],i=a("f0fa"),r=a("f810"),l={name:"JobsTeaserContainer",components:{JobCard:i["a"],JobCardPlaceholder:r["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data(){return{jobs:[]}},created(){this.getPublicJobs()},methods:{async getPublicJobs(){const t=await this.$axios.get("/api/public-jobs",{params:{s:this.searchTerm,employmentType:this.employmentType,profession:this.profession,limit:this.number}});this.jobs=t.data.jobs.length>0?t.data.jobs:null}}},c=l,n=a("2877"),d=Object(n["a"])(c,s,o,!1,null,null,null);e["a"]=d.exports},7067:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$config.starredJobs.active?a("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar(e)}}},[t.active?a("svg",{staticClass:"bi bi-star-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}})]):a("svg",{staticClass:"bi bi-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])]):t._e()},o=[],i={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs"(){this.checkStarredJobs()}},mounted(){this.checkStarredJobs()},methods:{checkStarredJobs(){this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some(t=>t.job===this.jobId)?this.active=!0:this.active=!1},async toggleStar(){this.$store.state.auth.loggedIn?this.active?(this.active=!1,await this.$store.dispatch("deleteStarredJob",this.jobId),this.$gtag.event("delete_starred_job",{event_label:this.jobId})):(this.active=!0,await this.$store.dispatch("addStarredJob",this.jobId),this.$gtag.event("add_starred_job",{event_label:this.jobId})):this.$store.commit("setStarJobModal",!0)}}},r=i,l=(a("22d6"),a("2877")),c=Object(l["a"])(r,s,o,!1,null,"21bf5ae1",null);e["a"]=c.exports},"7b34":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.$router.push("/stellenangebote?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location)}}},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[t._v("Suchbegriff")]),a("b-input-group",[a("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:t.placeholder},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),a("b-input-group-append",[a("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/stellenangebote?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"sr-only"},[t._v("Suchen")])])],1)],1)],1),t.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[t._v(" Stellenanzeige schalten ")])],1):t._e()],1)},o=[],i={name:"JobSearchSingleForm",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data(){return{searchTerm:""}}},r=i,l=a("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);e["a"]=c.exports},f0fa:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("article",{staticClass:"jobcard"},[a("b-link",{attrs:{to:"/stellenangebote/job/"+t.job._id+"/"+t.job.slug,target:"_self"}},[a("div",{class:["card",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("div",{staticClass:"card-text"},[a("div",{staticClass:"card-head position-relative"},[a("h2",{class:["h4",{"mobile-max-width-75":t.job.company.logoUrl&&!t.compact}],style:t.compact?"font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap":"",domProps:{innerHTML:t._s(t.job.title)}}),a("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{fluid:"",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name,height:"70","blank-width":"70","blank-height":"70",offset:"500"}})],1):t._e()],1),t.compact?t._e():a("div",{staticClass:"card-content"},[a("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),t.compact?t._e():a("hr"),a("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-building",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"}}),a("path",{attrs:{d:"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"}})])]),a("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):t._e(),t.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])]),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),a("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(e){return e.value===t.job.employmentType})).text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-activity",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.simpleApplication?a("div",[a("div",{staticClass:"badge badge-pill badge-secondary"},[t._v(" # Einfach bewerben ")])]):t._e()])])])])],1):t._e()},o=[],i=a("1ba6"),r=a("7067"),l={name:"JobCard",components:{StarJob:r["a"]},props:{job:{type:Object,default:()=>{}},compact:{type:Boolean,default:!1}},data(){return{employmentTypeOptions:i["f"],companySizeOptions:i["b"]}}},c=l,n=(a("4ce0"),a("2877")),d=Object(n["a"])(c,s,o,!1,null,"2cf56b3c",null);e["a"]=d.exports},f810:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["job-card-placeholder",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("BSkeleton",{staticClass:"header",attrs:{height:t.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),t.compact?t._e():a("BSkeleton",{attrs:{height:"1px"}}),t.compact?t._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},o=[],i=a("2b0e"),r=a("0942");i["default"].component("BSkeleton",r["a"]);var l={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,n=(a("2ca5"),a("2877")),d=Object(n["a"])(c,s,o,!1,null,"534ac5f8",null);e["a"]=d.exports}}]);
//# sourceMappingURL=career~career-mfa-gehalt~career-profession~career-zfa-gehalt~home.45e815fa.js.map