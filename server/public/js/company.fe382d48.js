(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["company"],{"12f6":function(t,e,a){},"47d0":function(t,e,a){},"4a7d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMap,expression:"showMap"}],ref:"hereMap",staticClass:"map-container"})])},n=[],o={name:"HereMapSingleJob",props:{job:{type:Object,default:()=>{}}},data(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null,showMap:!0}},watch:{job(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},async mounted(){try{await this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js"),await Promise.all([this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")]);const t=new window.H.service.Platform({apikey:this.apikey});this.platform=t,this.initializeHereMap()}catch(t){}},methods:{getGeoCode(t){let e;return t.company&&(e={lat:t.company.geoCodeLat,lng:t.company.geoCodeLng}),e},setMapMarker(t,e,a){const s=document.createElement("div");s.classList.add("icon-outer");const n=document.createElement("img");n.classList.add("icon-inner"),n.src=t.company.logoUrl||"/img/favicon.png",n.alt="Logo - "+(t.company.logoUrl?t.company.name:"MFA mal anders"),s.appendChild(n);const o=new a.map.DomIcon(s);this.map.addObject(new window.H.map.DomMarker(e,{icon:o}))},deleteMarkers(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap(t){this.map.setCenter(t),this.map.setZoom(13)},async initializeHereMap(){try{const t=this.getGeoCode(this.job);t&&(this.mapContainer=this.$refs.hereMap,this.H=window.H,this.maptypes=this.platform.createDefaultLayers({lg:this.$config.maps.lang}),this.map=new this.H.Map(this.mapContainer,this.maptypes.vector.normal.map,{zoom:13,center:t}),this.setMapMarker(this.job,t,this.H),addEventListener("resize",()=>this.map.getViewPort().resize()),new this.H.mapevents.Behavior(new this.H.mapevents.MapEvents(this.map)),this.H.ui.UI.createDefault(this.map,this.maptypes))}catch(t){this.showMap=!1}}}},i=o,r=a("2877"),l=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=l.exports},"53b9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-4 py-lg-5"},[t.company?a("div",[a("article",{staticClass:"company position-relative"},[a("div",{staticClass:"mb-4 mb-lg-5 d-flex align-items-start justify-content-start align-items-center"},[t.company.logoUrl?a("b-link",{staticClass:"logo-container mr-3 mr-lg-4",attrs:{to:"/unternehmen/"+t.company._id+"/"+t.company.slug}},[a("b-img",{staticClass:"logo",attrs:{src:t.company.logoUrl,alt:"Logo - "+t.company.name}})],1):t._e(),a("h1",{staticClass:"overflow-hidden bold",domProps:{innerHTML:t._s(t.company.name)}}),t.$store.state.auth.user.isAdmin?a("span",{staticClass:"border-radius1 bg-light-shade ml-2 p-2"},[a("b-link",{attrs:{to:"/admin/companies/edit/"+t.company._id}},[a("svg",{staticClass:"bi bi-pencil-square text-info",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])])],1):t._e()],1),a("div",{staticClass:"row border-radius1 bg-light-shade mb-5 px-3 px-lg-4 py-4 py-lg-5"},[a("div",{staticClass:"col-12 col-lg-6 order-2 order-lg-1"},[a("div",{staticClass:"mb-0"},[a("h2",{staticClass:"display-4 bold"},[t._v("Standort")]),a("p",[t._v(" "+t._s(t.company.street)+" "),a("br"),t._v(" "+t._s(t.company.zipCode)+", "+t._s(t.company.location)+" "),a("br"),t._v(" "+t._s(t.company.country)+" ")]),t.company.geoCodeLat&&t.company.geoCodeLng?a("HereMapSingleJob",{staticClass:"mb-4 mb-lg-0",attrs:{job:{company:t.company}}}):t._e()],1)]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"mb-0"},[a("h2",{staticClass:"display-4 bold"},[t._v("Über")]),t.company.description&&"undefined"!=t.company.description?a("div",{domProps:{innerHTML:t._s(t.company.description)}}):t._e(),t.company.size?a("p",{staticClass:"mb-0"},[t._v(" Unternehmensgröße: "+t._s(t.company.size)+" ")]):t._e(),t.company.url?a("p",{staticClass:"text-truncate"},[t._v(" Webseite: "),a("b-link",{staticClass:"bold",attrs:{href:t.company.url,target:"_blank"}},[t._v(t._s(t.company.url))])],1):t._e()])])]),a("div",[a("h2",{staticClass:"mb-3"},[t._v(" Aktuelle Stellenangebote bei "),a("span",{domProps:{innerHTML:t._s(t.company.name)}})]),t.company.publicJobs.length>0?a("div",t._l(t.company.publicJobs,(function(t){return a("JobCard",{key:t._id,attrs:{job:t}})})),1):a("p",[t._v(" Aktuell gibt es keine offenen Stellen auf "),a("em",[t._v("MFA mal anders")]),t._v(". ")])])]),a("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[a("JobSearchSingleForm",{staticClass:"mb-3",attrs:{placeholder:"Weitere Stellen finden..."}}),a("JobsTeaserContainer",{attrs:{location:{geoCodeLat:t.company.geoCodeLat,geoCodeLng:t.company.geoCodeLng}}})],1),a("Head",{attrs:{title:t.company.name+" | "+t.company.location,desc:"Unternehmensprofil – "+t.company.name+" | "+t.company.location,img:t.company.logoUrl&&!t.company.logoUrl.includes(".svg")?t.company.logoUrl:"","twitter-card":t.company.logoUrl&&!t.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet,link:t.link}})],1):a("div",[a("CompanyPlaceholder")],1)])},n=[],o=a("4a7d"),i=a("f0fa"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-placeholder"},[a("div",{staticClass:"header mb-4 mb-lg-5"},[a("BSkeleton",{staticClass:"logo shadow1 mr-3 mr-lg-4"}),a("BSkeleton",{staticClass:"name"})],1),a("div",{staticClass:"body mb-4"},[a("BSkeleton",{attrs:{height:"60vh"}})],1),a("div",t._l(3,(function(t){return a("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1)])},l=[],c=a("2b0e"),p=a("0942"),m=a("f810");c["default"].component("BSkeleton",p["a"]);var d={name:"CompanyPlaceholder",components:{JobCardPlaceholder:m["a"]}},h=d,y=(a("71f7"),a("2877")),u=Object(y["a"])(h,r,l,!1,null,"7079d17f",null),g=u.exports,b=a("68b7"),v=a("7b34"),C={name:"CompanyView",components:{HereMapSingleJob:o["a"],JobCard:i["a"],CompanyPlaceholder:g,JobsTeaserContainer:b["a"],JobSearchSingleForm:v["a"]},data(){return{company:null,link:[{id:"mapsjs-ui",rel:"stylesheet",href:"https://js.api.here.com/v3/3.1/mapsjs-ui.css",type:"text/css"}]}},computed:{jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"private"===this.apiJobsSchema?"myJob":"publicJob"},snippet:function(){return[{id:"canonical",rel:"canonical",href:`${this.$config.website.url}/unternehmen/${this.company._id}/${this.company.slug}`}]}},created(){this.getCompany(this.$route.params.companyId)},methods:{async getCompany(t){try{const e=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                company(_id: "${t}") {\n                  _id\n                  name\n                  description\n                  street\n                  zipCode\n                  location\n                  country\n                  size\n                  logoUrl\n                  url\n                  slug\n                  geoCodeLat\n                  geoCodeLng\n                  publicJobs {\n                    _id\n                    title\n                    description\n                    employmentType\n                    simpleApplication\n                    specialization\n                    salaryMin\n                    salaryMax\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                    slug\n                  }\n                }\n              }\n            `}});if(!e.data.data.company)throw new Error;this.company=e.data.data.company}catch(e){this.$root.$bvToast.toast("Dieses Unternehmen ist nicht oder nicht mehr verfügbar.",{title:"Unternehmen nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$router.push("/stellenangebote")}}}},f=C,w=(a("f0b2"),Object(y["a"])(f,s,n,!1,null,"277861d3",null));e["default"]=w.exports},"71f7":function(t,e,a){"use strict";a("47d0")},f0b2:function(t,e,a){"use strict";a("12f6")}}]);
//# sourceMappingURL=company.fe382d48.js.map