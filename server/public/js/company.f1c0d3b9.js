(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["company"],{"0942":function(t,a,e){"use strict";e.d(a,"a",(function(){return p}));var s=e("2b0e"),o=e("b42e"),i=e("c637"),n=e("a723"),c=e("cf75");function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var l=Object(c["d"])({animation:Object(c["c"])(n["s"],"wave"),height:Object(c["c"])(n["s"]),size:Object(c["c"])(n["s"]),type:Object(c["c"])(n["s"],"text"),variant:Object(c["c"])(n["s"]),width:Object(c["c"])(n["s"])},i["eb"]),p=s["default"].extend({name:i["eb"],functional:!0,props:l,render:function(t,a){var e,s=a.data,i=a.props,n=i.size,c=i.animation,l=i.variant;return t("div",Object(o["a"])(s,{staticClass:"b-skeleton",style:{width:n||i.width,height:n||i.height},class:(e={},r(e,"b-skeleton-".concat(i.type),!0),r(e,"b-skeleton-animate-".concat(c),c),r(e,"bg-".concat(l),l),e)}))}})},2715:function(t,a,e){},"2ca5":function(t,a,e){"use strict";e("2715")},"31dd":function(t,a,e){"use strict";e("8cfd")},"47d0":function(t,a,e){},"4a7d":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMap,expression:"showMap"}],ref:"hereMap",staticClass:"map-container"})])},o=[],i={name:"HereMapSingleJob",props:{job:{type:Object,default:()=>{}}},data(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null,showMap:!0}},watch:{job(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},async mounted(){try{await this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js"),await Promise.all([this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")]);const t=new window.H.service.Platform({apikey:this.apikey});this.platform=t,this.initializeHereMap()}catch(t){}},methods:{getGeoCode(t){let a;return t.company&&(a={lat:t.company.geoCodeLat,lng:t.company.geoCodeLng}),a},setMapMarker(t,a,e){const s=document.createElement("div");s.classList.add("icon-outer");const o=document.createElement("img");o.classList.add("icon-inner"),o.src=t.company.logoUrl||"/img/favicon.ico",s.appendChild(o);const i=new e.map.DomIcon(s);this.map.addObject(new window.H.map.DomMarker(a,{icon:i}))},deleteMarkers(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap(t){this.map.setCenter(t),this.map.setZoom(13)},async initializeHereMap(){try{const t=this.getGeoCode(this.job);t&&(this.mapContainer=this.$refs.hereMap,this.H=window.H,this.maptypes=this.platform.createDefaultLayers({lg:this.$config.maps.lang}),this.map=new this.H.Map(this.mapContainer,this.maptypes.vector.normal.map,{zoom:13,center:t}),this.setMapMarker(this.job,t,this.H),addEventListener("resize",()=>this.map.getViewPort().resize()),new this.H.mapevents.Behavior(new this.H.mapevents.MapEvents(this.map)),this.H.ui.UI.createDefault(this.map,this.maptypes))}catch(t){this.showMap=!1}}}},n=i,c=e("2877"),r=Object(c["a"])(n,s,o,!1,null,null,null);a["a"]=r.exports},"4ce0":function(t,a,e){"use strict";e("50d4")},"4dae":function(t,a,e){},"50d4":function(t,a,e){},"53b9":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container py-4 py-lg-5"},[t.company?e("div",[e("article",{staticClass:"company position-relative"},[e("div",{staticClass:"mb-4 mb-lg-5 d-flex align-items-start justify-content-start align-items-center"},[t.company.logoUrl?e("b-link",{staticClass:"logo-container mr-3 mr-lg-4",attrs:{to:"/unternehmen/"+t.company._id+"/"+t.company.slug}},[e("b-img",{staticClass:"logo",attrs:{src:t.company.logoUrl,alt:"Logo - "+t.company.name}})],1):t._e(),e("h1",{staticClass:"overflow-hidden bold",domProps:{innerHTML:t._s(t.company.name)}})],1),e("div",{staticClass:"row border-radius1 bg-light-shade mb-5 px-3 px-lg-4 py-4 py-lg-5"},[e("div",{staticClass:"col-12 col-lg-6 order-2 order-lg-1"},[e("div",{staticClass:"mb-0"},[e("h2",{staticClass:"h3"},[t._v("Standort")]),e("p",[t._v(" "+t._s(t.company.street)+" "),e("br"),t._v(" "+t._s(t.company.zipCode)+", "+t._s(t.company.location)+" "),e("br"),t._v(" "+t._s(t.company.country)+" ")]),t.company.geoCodeLat&&t.company.geoCodeLng?e("HereMapSingleJob",{staticClass:"mb-4 mb-lg-0",attrs:{job:{company:t.company}}}):t._e()],1)]),e("div",{staticClass:"col-12 col-lg-6"},[e("div",{staticClass:"mb-0"},[e("h2",{staticClass:"h3"},[t._v("Über")]),t.company.description?e("p",{domProps:{innerHTML:t._s(t.company.description)}}):t._e(),e("p",{staticClass:"mb-0"},[t._v("Unternehmensgröße: "+t._s(t.company.size))]),t.company.url?e("p",[t._v(" Webseite: "),e("b-link",{staticClass:"bold",attrs:{href:t.company.url,target:"_blank"}},[t._v(t._s(t.company.url))])],1):t._e()])])]),e("div",[e("h2",{staticClass:"h3 mb-3"},[t._v(" Aktuelle Stellenangebote bei "),e("span",{domProps:{innerHTML:t._s(t.company.name)}})]),t.company.publicJobs.length>0?e("div",t._l(t.company.publicJobs,(function(t){return e("JobCard",{key:t._id,attrs:{job:t}})})),1):e("p",[t._v("Aktuell gibt es keine offenen Stellen.")])])]),e("Head",{attrs:{title:t.company.name+" | "+t.company.location,desc:t.company.name+" | "+t.company.location,img:t.company.logoUrl&&!t.company.logoUrl.includes(".svg")?t.company.logoUrl:"","twitter-card":t.company.logoUrl&&!t.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet,link:t.link}})],1):e("div",[e("CompanyPlaceholder")],1)])},o=[],i=e("4a7d"),n=e("f0fa"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"company-placeholder"},[e("div",{staticClass:"header mb-4 mb-lg-5"},[e("BSkeleton",{staticClass:"logo shadow1 mr-3 mr-lg-4"}),e("BSkeleton",{staticClass:"name"})],1),e("div",{staticClass:"body mb-4"},[e("BSkeleton",{attrs:{height:"60vh"}})],1),e("div",t._l(3,(function(t){return e("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1)])},r=[],l=e("2b0e"),p=e("0942"),m=e("f810");l["default"].component("BSkeleton",p["a"]);var d={name:"CompanyPlaceholder",components:{JobCardPlaceholder:m["a"]}},h=d,b=(e("71f7"),e("2877")),v=Object(b["a"])(h,c,r,!1,null,"7079d17f",null),u=v.exports,g={name:"CompanyView",components:{HereMapSingleJob:i["a"],JobCard:n["a"],CompanyPlaceholder:u},data(){return{company:null,link:[{id:"mapsjs-ui",rel:"stylesheet",href:"https://js.api.here.com/v3/3.1/mapsjs-ui.css",type:"text/css"}]}},computed:{jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"private"===this.apiJobsSchema?"myJob":"publicJob"},snippet:function(){return[{id:"canonical",rel:"canonical",href:`${this.$config.website.url}/unternehmen/${this.company._id}/${this.company.slug}`}]}},created(){this.getCompany(this.$route.params.companyId)},methods:{async getCompany(t){try{const a=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                company(_id: "${t}") {\n                  _id\n                  name\n                  description\n                  street\n                  zipCode\n                  location\n                  country\n                  size\n                  logoUrl\n                  url\n                  slug\n                  geoCodeLat\n                  geoCodeLng\n                  publicJobs {\n                    _id\n                    title\n                    description\n                    employmentType\n                    simpleApplication\n                    specialization\n                    salaryMin\n                    salaryMax\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                    slug\n                  }\n                }\n              }\n            `}});if(!a.data.data.company)throw new Error;this.company=a.data.data.company}catch(a){this.$root.$bvToast.toast("Dieses Unternehmen ist nicht oder nicht mehr verfügbar.",{title:"Unternehmen nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$router.push("/stellenangebote")}}}},y=g,f=(e("31dd"),Object(b["a"])(y,s,o,!1,null,"62fedb35",null));a["default"]=f.exports},7067:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.$config.starredJobs.active?e("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(a){return a.preventDefault(),t.toggleStar(a)}}},[t.active?e("svg",{staticClass:"bi bi-star-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*t.size,height:15*t.size,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}})]):e("svg",{staticClass:"bi bi-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*t.size,height:15*t.size,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])]):t._e()},o=[],i={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:Number,default:1}},data(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs"(){this.checkStarredJobs()}},mounted(){this.checkStarredJobs()},methods:{checkStarredJobs(){this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some(t=>t.job===this.jobId)?this.active=!0:this.active=!1},async toggleStar(){this.$store.state.auth.loggedIn?this.active?(this.active=!1,await this.$store.dispatch("deleteStarredJob",this.jobId),this.$gtag.event("delete_starred_job",{event_label:this.jobId})):(this.active=!0,await this.$store.dispatch("addStarredJob",this.jobId),this.$gtag.event("add_starred_job",{event_label:this.jobId})):this.$store.commit("setStarJobModal",!0)}}},n=i,c=(e("af47"),e("2877")),r=Object(c["a"])(n,s,o,!1,null,"48ac9b66",null);a["a"]=r.exports},"71f7":function(t,a,e){"use strict";e("47d0")},"8cfd":function(t,a,e){},af47:function(t,a,e){"use strict";e("4dae")},f0fa:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.job?e("article",{staticClass:"jobcard"},[e("b-link",{attrs:{to:"/stellenangebote/job/"+t.job._id+"/"+t.job.slug,target:"_self"}},[e("div",{class:["card",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[e("div",{staticClass:"card-text"},[e("div",{staticClass:"card-head position-relative"},[e("h2",{class:["h4",{"mobile-max-width-75":t.job.company.logoUrl&&!t.compact}],style:t.compact?"font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap":"",domProps:{innerHTML:t._s(t.job.title)}}),e("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?e("div",{staticClass:"img-container"},[e("b-img-lazy",{attrs:{fluid:"",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name,height:"70","blank-width":"70","blank-height":"70",offset:"500"}})],1):t._e()],1),t.compact?t._e():e("div",{staticClass:"card-content"},[e("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),t.compact?t._e():e("hr"),e("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-building",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"}}),e("path",{attrs:{d:"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"}})])]),e("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):t._e(),t.job.company.location?e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])]),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),e("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(a){return a.value===t.job.employmentType})).text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-activity",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.simpleApplication?e("div",[e("div",{staticClass:"badge badge-pill badge-secondary"},[t._v(" # Einfach bewerben ")])]):t._e()])])])])],1):t._e()},o=[],i=e("1ba6"),n=e("7067"),c={name:"JobCard",components:{StarJob:n["a"]},props:{job:{type:Object,default:()=>{}},compact:{type:Boolean,default:!1}},data(){return{employmentTypeOptions:i["f"],companySizeOptions:i["b"]}}},r=c,l=(e("4ce0"),e("2877")),p=Object(l["a"])(r,s,o,!1,null,"2cf56b3c",null);a["a"]=p.exports},f810:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["job-card-placeholder",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[e("BSkeleton",{staticClass:"header",attrs:{height:t.compact?"40px":"60px"}}),e("div",{staticClass:"body"},[e("BSkeleton"),e("BSkeleton"),e("BSkeleton")],1),t.compact?t._e():e("BSkeleton",{attrs:{height:"1px"}}),t.compact?t._e():e("div",{staticClass:"footer"},[e("BSkeleton")],1)],1)},o=[],i=e("2b0e"),n=e("0942");i["default"].component("BSkeleton",n["a"]);var c={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},r=c,l=(e("2ca5"),e("2877")),p=Object(l["a"])(r,s,o,!1,null,"534ac5f8",null);a["a"]=p.exports}}]);
//# sourceMappingURL=company.f1c0d3b9.js.map