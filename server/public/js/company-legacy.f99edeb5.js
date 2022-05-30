(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["company"],{"02ac":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm+"&profession="+e.profession+"&location="+e.location)}}},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),a("b-input-group",[a("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:e.placeholder},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),a("b-input-group-append",[a("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/stellenangebote?s="+e.searchTerm+"&profession="+e.profession+"&location="+e.location}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"sr-only"},[e._v("Stellenangebote für MFA / ZFA finden")])])],1)],1)],1),e.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1):e._e()],1)},o=[],s={name:"SearchWidgetJob",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data:function(){return{searchTerm:""}}},r=s,i=a("2877"),l=Object(i["a"])(r,n,o,!1,null,null,null);t["a"]=l.exports},"0be1":function(e,t,a){},"223f":function(e,t,a){"use strict";a("0be1")},"400a":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.jobs?a("div",[e.jobs.length>0?a("div",{class:["row","row-cols-"+e.cols,"row-cols-md-"+e.colsMd,"row-cols-lg-"+e.colsLg]},e._l(e.jobs,(function(t){return a("div",{key:t._id,staticClass:"col"},[a("JobCard",{attrs:{job:t,compact:e.compact}})],1)})),0):a("div",{class:["row","row-cols-"+e.cols,"row-cols-md-"+e.colsMd,"row-cols-lg-"+e.colsLg]},e._l(e.number,(function(t){return a("div",{key:t,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:e.compact}})],1)})),0),e.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/stellenangebote?s="+e.searchTerm+"&employmentType="+e.employmentType+"&profession="+e.profession,variant:"outline-primary",size:"sm"}},[e._v("Weitere")])],1):e._e()]):e._e()},o=[],s=a("1da1"),r=(a("96cf"),a("a9e3"),a("99af"),a("c452")),i=a("b6d4"),l={name:"JobListTeaser",components:{JobCard:r["a"],JobCardPlaceholder:i["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data:function(){return{jobs:[]}},mounted:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(e.number,'\n                  s: "').concat(e.searchTerm,'"\n                  employmentType: "').concat(e.employmentType,'"\n                  profession: "').concat(e.profession,'"\n                  position: { \n                    lat: ').concat(e.location&&e.location.geoCodeLat?e.location.geoCodeLat:null,",\n                    lng: ").concat(e.location&&e.location.geoCodeLng?e.location.geoCodeLng:null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 3:if(a=t.sent,!a.data.errors){t.next=6;break}throw new Error;case 6:e.jobs=a.data.data.publicJobs.jobs||null,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},c=l,p=a("2877"),m=Object(p["a"])(c,n,o,!1,null,null,null);t["a"]=m.exports},"53b9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-4 py-lg-5"},[e.company?a("div",[a("article",{staticClass:"company position-relative"},[a("div",{staticClass:"mb-4 mb-lg-5 d-flex align-items-start justify-content-start align-items-center"},[e.company.logoUrl?a("b-link",{staticClass:"logo-container mr-3 mr-lg-4",attrs:{to:"/unternehmen/"+e.company._id+"/"+e.company.slug}},[a("b-img",{staticClass:"logo",attrs:{src:e.company.logoUrl,alt:"Logo - "+e.company.name}})],1):e._e(),a("h1",{staticClass:"overflow-hidden bold",domProps:{innerHTML:e._s(e.company.name)}}),e.$store.state.auth.user.isAdmin?a("span",{staticClass:"border-radius1 bg-light-shade ml-2 p-2"},[a("b-link",{attrs:{to:"/admin/companies/edit/"+e.company._id}},[a("svg",{staticClass:"bi bi-pencil-square text-info",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])])],1):e._e()],1),a("div",{staticClass:"row border-radius1 bg-light-shade mb-5 px-3 px-lg-4 py-4 py-lg-5"},[a("div",{staticClass:"col-12 col-lg-6 order-2 order-lg-1"},[a("div",{staticClass:"mb-0"},[a("h2",{staticClass:"display-4 bold"},[e._v("Standort")]),a("p",[e._v(" "+e._s(e.company.street)+" "),a("br"),e._v(" "+e._s(e.company.zipCode)+", "+e._s(e.company.location)+" "),a("br"),e._v(" "+e._s(e.company.country)+" ")]),e.company.geoCodeLat&&e.company.geoCodeLng?a("MapJobSingle",{staticClass:"mb-4 mb-lg-0",attrs:{job:{company:e.company}}}):e._e()],1)]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"mb-0"},[a("h2",{staticClass:"display-4 bold"},[e._v("Über")]),e.company.description&&"undefined"!=e.company.description?a("div",{domProps:{innerHTML:e._s(e.company.description)}}):e._e(),e.company.size?a("p",{staticClass:"mb-0"},[e._v(" Unternehmensgröße: "+e._s(e.company.size)+" ")]):e._e(),e.company.url?a("p",{staticClass:"text-truncate"},[e._v(" Webseite: "),a("b-link",{staticClass:"bold",attrs:{href:e.company.url,target:"_blank"}},[e._v(e._s(e.company.url))])],1):e._e()])])]),a("div",[a("h2",{staticClass:"mb-3"},[e._v(" Aktuelle Stellenangebote bei "),a("span",{domProps:{innerHTML:e._s(e.company.name)}})]),e.company.publicJobs.length>0?a("div",e._l(e.company.publicJobs,(function(e){return a("JobCard",{key:e._id,attrs:{job:e}})})),1):a("p",[e._v(" Aktuell gibt es keine offenen Stellen auf "),a("em",[e._v("MFA mal anders")]),e._v(". ")])])]),a("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[a("SearchWidgetJob",{staticClass:"mb-3",attrs:{placeholder:"Weitere Stellen finden..."}}),a("JobListTeaser",{attrs:{location:{geoCodeLat:e.company.geoCodeLat,geoCodeLng:e.company.geoCodeLng}}})],1),a("Head",{attrs:{title:e.company.name+" | "+e.company.location,desc:"Unternehmensprofil – "+e.company.name+" | "+e.company.location,img:e.company.logoUrl&&!e.company.logoUrl.includes(".svg")?e.company.logoUrl:"","twitter-card":e.company.logoUrl&&!e.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:e.snippet,link:e.link}})],1):a("div",[a("CompanyItemPlaceholder")],1)])},o=[],s=a("1da1"),r=(a("96cf"),a("99af"),a("a050")),i=a("c452"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"company-placeholder"},[a("div",{staticClass:"header mb-4 mb-lg-5"},[a("BSkeleton",{staticClass:"logo shadow1 mr-3 mr-lg-4"}),a("BSkeleton",{staticClass:"name"})],1),a("div",{staticClass:"body mb-4"},[a("BSkeleton",{attrs:{height:"60vh"}})],1),a("div",e._l(3,(function(e){return a("JobCardPlaceholder",{key:e,staticClass:"mb-3"})})),1)])},c=[],p=a("2b0e"),m=a("0942"),d=a("b6d4");p["default"].component("BSkeleton",m["a"]);var u={name:"CompanyItemPlaceholder",components:{JobCardPlaceholder:d["a"]}},b=u,h=(a("8875"),a("2877")),g=Object(h["a"])(b,l,c,!1,null,"6b4d258b",null),y=g.exports,f=a("400a"),v=a("02ac"),C={name:"CompanyView",components:{MapJobSingle:r["a"],JobCard:i["a"],CompanyItemPlaceholder:y,JobListTeaser:f["a"],SearchWidgetJob:v["a"]},data:function(){return{company:null,link:[{id:"mapsjs-ui",rel:"stylesheet",href:"https://js.api.here.com/v3/3.1/mapsjs-ui.css",type:"text/css"}]}},computed:{jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"private"===this.apiJobsSchema?"myJob":"publicJob"},snippet:function(){return[{id:"canonical",rel:"canonical",href:"".concat(this.$config.website.url,"/unternehmen/").concat(this.company._id,"/").concat(this.company.slug)}]}},created:function(){this.getCompany(this.$route.params.companyId)},methods:{getCompany:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                company(_id: "'.concat(e,'") {\n                  _id\n                  name\n                  description\n                  street\n                  zipCode\n                  location\n                  country\n                  size\n                  logoUrl\n                  url\n                  slug\n                  geoCodeLat\n                  geoCodeLng\n                  publicJobs {\n                    _id\n                    title\n                    description\n                    employmentType\n                    simpleApplication\n                    specialization\n                    salaryMin\n                    salaryMax\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                    slug\n                  }\n                }\n              }\n            ')}});case 3:if(n=a.sent,!n.data.data.company){a.next=8;break}t.company=n.data.data.company,a.next=9;break;case 8:throw new Error;case 9:a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),t.$root.$bvToast.toast("Dieses Unternehmen ist nicht oder nicht mehr verfügbar.",{title:"Unternehmen nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),t.$router.push("/stellenangebote");case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},w=C,_=(a("223f"),Object(h["a"])(w,n,o,!1,null,"012c907c",null));t["default"]=_.exports},8875:function(e,t,a){"use strict";a("efa7")},a050:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showMap,expression:"showMap"}],ref:"hereMap",staticClass:"map-container"})])},o=[],s=a("1da1"),r=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("d81d"),{name:"MapJobSingle",props:{job:{type:Object,default:function(){}}},data:function(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null,showMap:!0}},watch:{job:function(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");case 3:return t.next=5,Promise.all([e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")]);case 5:a=new window.H.service.Platform({apikey:e.apikey}),e.platform=a,e.initializeHereMap(),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},methods:{getGeoCode:function(e){var t;return e.company&&(t={lat:e.company.geoCodeLat,lng:e.company.geoCodeLng}),t},setMapMarker:function(e,t,a){var n=document.createElement("div");n.classList.add("icon-outer");var o=document.createElement("img");o.classList.add("icon-inner"),o.src=e.company.logoUrl||"/img/favicon.png",o.alt="Logo - "+(e.company.logoUrl?e.company.name:"MFA mal anders"),n.appendChild(o);var s=new a.map.DomIcon(n);this.map.addObject(new window.H.map.DomMarker(t,{icon:s}))},deleteMarkers:function(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap:function(e){this.map.setCenter(e),this.map.setZoom(13)},initializeHereMap:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=e.getGeoCode(e.job),a&&(e.mapContainer=e.$refs.hereMap,e.H=window.H,e.maptypes=e.platform.createDefaultLayers({lg:e.$config.maps.lang}),e.map=new e.H.Map(e.mapContainer,e.maptypes.vector.normal.map,{zoom:13,center:a}),e.setMapMarker(e.job,a,e.H),addEventListener("resize",(function(){return e.map.getViewPort().resize()})),new e.H.mapevents.Behavior(new e.H.mapevents.MapEvents(e.map)),e.H.ui.UI.createDefault(e.map,e.maptypes))}catch(n){e.showMap=!1}case 1:case"end":return t.stop()}}),t)})))()}}}),i=r,l=a("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["a"]=c.exports},d81d:function(e,t,a){"use strict";var n=a("23e7"),o=a("b727").map,s=a("1dde"),r=s("map");n({target:"Array",proto:!0,forced:!r},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},efa7:function(e,t,a){}}]);
//# sourceMappingURL=company-legacy.f99edeb5.js.map