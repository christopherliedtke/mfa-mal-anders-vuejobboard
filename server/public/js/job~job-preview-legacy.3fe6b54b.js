(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job~job-preview"],{"037e":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-facebook mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},n=[],i={name:"FacebookShareBtn",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},s=i,r=a("2877"),l=Object(r["a"])(s,o,n,!1,null,null,null);e["a"]=l.exports},1142:function(t,e,a){},1144:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[a("svg",{staticClass:"bi bi-twitter mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" Twitter "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},n=[],i={name:"TwitterShareBtn",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},s=i,r=a("2877"),l=Object(r["a"])(s,o,n,!1,null,null,null);e["a"]=l.exports},"1d09":function(t,e,a){"use strict";a("bab1")},"4a7d":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMap,expression:"showMap"}],ref:"hereMap",staticClass:"map-container"})])},n=[],i=(a("d81d"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("c964")),s={name:"HereMapSingleJob",props:{job:{type:Object,default:function(){}}},data:function(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null,showMap:!0}},watch:{job:function(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");case 3:return e.next=5,Promise.all([t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")]);case 5:a=new window.H.service.Platform({apikey:t.apikey}),t.platform=a,t.initializeHereMap(),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()},methods:{getGeoCode:function(t){var e;return t.company&&(e={lat:t.company.geoCodeLat,lng:t.company.geoCodeLng}),e},setMapMarker:function(t,e,a){var o=document.createElement("div");o.classList.add("icon-outer");var n=document.createElement("img");n.classList.add("icon-inner"),n.src=t.company.logoUrl||"/img/favicon.ico",o.appendChild(n);var i=new a.map.DomIcon(o);this.map.addObject(new window.H.map.DomMarker(e,{icon:i}))},deleteMarkers:function(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap:function(t){this.map.setCenter(t),this.map.setZoom(13)},initializeHereMap:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{a=t.getGeoCode(t.job),a&&(t.mapContainer=t.$refs.hereMap,t.H=window.H,t.maptypes=t.platform.createDefaultLayers({lg:t.$config.maps.lang}),t.map=new t.H.Map(t.mapContainer,t.maptypes.vector.normal.map,{zoom:13,center:a}),t.setMapMarker(t.job,a,t.H),addEventListener("resize",(function(){return t.map.getViewPort().resize()})),new t.H.mapevents.Behavior(new t.H.mapevents.MapEvents(t.map)),t.H.ui.UI.createDefault(t.map,t.maptypes))}catch(o){t.showMap=!1}case 1:case"end":return e.stop()}}),e)})))()}}},r=s,l=a("2877"),c=Object(l["a"])(r,o,n,!1,null,null,null);e["a"]=c.exports},"890f":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job.title||t.error?t.job.title?a("div",[a("article",{staticClass:"job position-relative"},[a("div",{staticClass:"mb-4 d-flex align-items-start justify-content-between"},[a("div",[a("h1",{domProps:{innerHTML:t._s(t.job.title)}}),a("span",{staticClass:"lead"},[a("b-link",{staticClass:"text-muted",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[a("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]),t._v(" | "),a("b-link",{staticClass:"text-muted",attrs:{to:"/stellenangebote/ort/"+t.job.company.location.toLowerCase().replace(" ","-")}},[t._v(t._s(t.job.company.location)+t._s(t.job.company.state&&t.job.company.state!=t.job.company.location?", "+t.job.company.state:""))])],1)]),t.job.company&&t.job.company.logoUrl?a("b-link",{staticClass:"d-none d-sm-flex logo-container mx-2",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[a("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e()],1),a("hr"),a("div",[a("div",{staticClass:"d-flex flex-lg-nowrap justify-content-between align-items-start"},[t.job.company&&t.job.company.logoUrl?a("b-link",{staticClass:"d-sm-none logo-container mr-1 ml-2 ml-sm-0 mr-sm-4 mb-3 mb-lg-0 order-2 order-sm-1",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[a("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e(),a("div",{staticClass:"head flex-column flex-sm-row order-1 order-sm-2"},[t.job.employmentType?a("b-link",{attrs:{to:"/stellenangebote?employmentType="+t.job.employmentType}},[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),a("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(e){return e.value===t.job.employmentType})).text)+" ")]):t._e(),t.job.company.size?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-people-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"}}),a("path",{attrs:{d:"M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}})])]),t._v(" "+t._s(t.job.company.size)+" ")]):t._e(),t.job.salaryMin||t.job.salaryMax?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]):t._e(),t.job.specialization&&"null"!=t.job.specialization?a("b-link",{attrs:{to:"/stellenangebote?fachgebiet="+t.job.specialization.toLowerCase()}},[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-activity",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-megaphone-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"}})])]),t._v(" "+t._s(t.job.paid?t.timeSince(new Date(t.job.publishedAt||t.job.paidAt)):"-")+" ")]),t.job.applicationDeadline?a("div",{class:new Date(t.job.applicationDeadline)<new Date?"text-danger":""},[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-calendar2-x-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"}})])]),t._v(" bis "+t._s(new Date(t.job.applicationDeadline).toLocaleDateString())+" ")]):t._e(),t.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("div",{staticClass:"badge badge-pill badge-secondary",staticStyle:{cursor:"pointer"}},[t._v(" # Einfach bewerben ")])]):t._e()],1)],1)]),a("hr"),a("div",{staticClass:"position-relative d-flex align-items-center my-4"},[a("StarJob",{attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:2}}),a("SubscribeNewsletterBtn",{attrs:{state:t.job.company.state}}),t.$store.state.auth.user.isAdmin?a("div",{staticClass:"border-radius1 bg-light-shade ml-3 py-2 px-3"},[a("svg",{staticClass:"bi bi-share-fill text-info",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:function(e){return t.socialShareJobToClipboard(t.job)}}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})]),a("b-link",{attrs:{to:"/admin/jobs/edit/"+t.job._id}},[a("svg",{staticClass:"bi bi-pencil-square text-info ml-3",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])]),a("b-link",{attrs:{href:"https://developers.facebook.com/tools/debug/?q=https://www.mfa-mal-anders.de/stellenangebote/job/"+t.job._id,target:"_blank"}},[a("svg",{staticClass:"bi bi-facebook text-info ml-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})])])],1):t._e()],1),t.job.imageUrl?a("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[a("b-img",{staticClass:"blur position-absolute w-100",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl,alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}}),a("b-img",{staticClass:"title-img",attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}})],1):t._e(),a("div",{staticClass:"mt-4",domProps:{innerHTML:t._s(t.job.description)}}),t.job.company.url?a("div",{staticClass:"mt-3"},[a("b-link",{ref:"nofollow",attrs:{href:t.job.company.url,target:"_blank"},on:{click:function(e){return t.track("apply_visit_hp",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[a("strong",[t._v("Besuchen Sie unsere Homepage "),a("svg",{staticClass:"bi bi-box-arrow-up-right",staticStyle:{position:"relative",top:"-5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])])],1):t._e(),a("div",{staticClass:"mt-3"},[a("b-link",{attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[t._v("Unternehmensprofil – "),a("span",{staticClass:"mr-1",domProps:{innerHTML:t._s(t.job.company.name)}}),a("svg",{staticClass:"bi bi-box-arrow-up-right",staticStyle:{position:"relative",top:"-5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])],1),t._m(0),a("div",{staticClass:"mt-4"},[a("b-button",{attrs:{size:"lg",variant:t.job.simpleApplication?"secondary":"primary",href:t.job.applicationEmail?"mailto:"+t.job.applicationEmail+"?subject=Bewerbung - "+t.job.title+" über "+t.$config.website.name:t.job.extJobUrl,target:"_blank"},on:{click:function(e){return t.track("apply_now",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v("Jetzt "+t._s(t.job.simpleApplication?"nur mit Lebenslauf":"")+" bewerben")])],1),a("div",{staticClass:"my-3"},[a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/stellenangebote"}},[t._v("Zurück zur Stellenbörse")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/mfa/gehalt"}},[t._v("Gehaltsrechner")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/bewerbungstipps"}},[t._v("Bewerbungsvorlage")])],1),t.job.contactLastName||t.job.contactEmail||t.job.contactPhone||t.job.applicationEmail?a("div",{staticClass:"mt-4"},[a("h2",[t._v("Kontakt für Bewerbungen")]),a("div",{staticClass:"mb-3"},[t.job.contactLastName?a("div",[t._v(" "+t._s("null"!=t.job.contactGender?t.job.contactGender+" ":"")+" "+t._s("null"!=t.job.contactTitle?t.job.contactTitle+" ":"")+" "+t._s(t.job.contactFirstName+" "+t.job.contactLastName)+" "),t.job.contactPosition?a("br"):t._e(),t._v(" "+t._s(t.job.contactPosition)+" "),a("br")]):t._e(),t.job.contactPhone?a("div",[t._v(" Telefon: "),a("b-link",{attrs:{href:"tel:"+t.job.contactPhone,target:"_blank"},on:{click:function(e){return t.track("apply_phone",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactPhone))]),a("br")],1):t._e(),t.job.contactEmail||t.job.applicationEmail?a("div",[t._v(" E-Mail: "),a("b-link",{attrs:{href:"mailto:"+(t.job.contactEmail||t.job.applicationEmail)+"?subject="+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(e){return t.track("apply_email",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactEmail||t.job.applicationEmail))])],1):t._e()])]):t._e(),a("div",{staticClass:"mt-4"},[a("h2",[t._v("Arbeitsort")]),a("p",[a("b-link",{attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[t._v(t._s(t.job.company.name))]),t.job.company.name?a("br"):t._e(),t._v(" "+t._s(t.job.company.street)+" "),t.job.company.street?a("br"):t._e(),t._v(" "+t._s(t.job.company.zipCode+" "+t.job.company.location)+" "),a("br")],1),t.job.company&&t.job.company.geoCodeLat&&t.job.company.geoCodeLng?a("HereMapSingleJob",{staticClass:"mt-4 mb-5",attrs:{job:t.job}}):t._e()],1),a("div",{staticClass:"d-flex flex-wrap flex-column flex-md-row align-items-center"},[a("StarJob",{staticClass:"ml-3 ml-md-0 mb-2",attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:2}}),a("FacebookShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),a("WhatsAppShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),a("TwitterShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,title:t.job.title}}),a("EmailShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,subject:t.job.title}})],1)]),a("SimilarJobsContainer",{attrs:{job:t.job,number:5}}),a("RandomTrainingsContainer",{staticClass:"mt-4 mt-lg-5",attrs:{number:3}}),a("Head",{attrs:{title:t.job.title+" | "+(t.job.employmentType?t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text:"")+" | "+t.job.company.location,desc:"Stellenangebot – "+t.job.title+" | "+t.job.company.name+" | "+(t.job.employmentType?t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text:"")+" | "+t.job.company.location+(t.job.company.state!=t.job.company.location?", "+t.job.company.state:""),img:t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?t.job.imageUrl:t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?t.job.company.logoUrl:"ZFA"===t.job.profession?"/img/MfaMalAnders_NeuesStellenangebot_ZFA_1200.jpg":"/img/MfaMalAnders_NeuesStellenangebot_MFA_1200.jpg","twitter-card":t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?"summary_large_image":t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet,link:t.link}}),a("JobStructuredData",{attrs:{job:t.job}})],1):a("div",[a("p",{staticClass:"h5"},[t._v(" Diese Stellenanzeige scheint nicht (mehr) zu existieren. ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"outline-primary",to:"/stellenangebote"}},[t._v("Zurück zur Stellenübersicht")])],1):a("div",[a("JobPlaceholder",{staticClass:"mb-5"}),t._l(5,(function(t){return a("JobCardPlaceholder",{key:t,staticClass:"mb-3"})}))],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 small"},[a("p",[t._v(" Beziehe Dich in Deiner Bewerbung auf MFA mal anders. ")])])}],i=(a("99af"),a("96cf"),a("c964")),s=a("fa8e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5 px-0"},[t.similarJobs.length>0?a("div",[t._l(t.similarJobs,(function(e){return a("JobCard",{key:e.id,attrs:{job:e,compact:t.compact}})})),a("div",{staticClass:"text-right mt-4"},[a("b-button",{attrs:{to:"/stellenangebote/ort/"+t.job.company.location.toLowerCase().replace(" ","-"),variant:"outline-primary"}},[t._v(" Weitere Stellenangebote in der Nähe von "+t._s(t.job.company.location)+" ")])],1)],2):t._e(),t.loading?a("div",t._l(t.number,(function(t){return a("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1):t._e()])},l=[],c=(a("4de4"),a("fb6a"),a("a9e3"),a("f0fa")),p=a("f810"),b={name:"SimiarJobsContainer",components:{JobCard:c["a"],JobCardPlaceholder:p["a"]},props:{job:{type:Object,default:function(){}},number:{type:Number,default:5},compact:{type:Boolean,default:!1}},data:function(){return{similarJobs:[],loading:!0}},watch:{job:function(){this.getSimilarJobs(this.job)}},created:function(){this.getSimilarJobs(this.job)},methods:{getSimilarJobs:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.length>0&&void 0!==t[0]?t[0]:{},a.next=3,e.$axios.get("/api/public-jobs",{params:{limit:e.number+1,geoCodeLat:o.company?o.company.geoCodeLat:void 0,geoCodeLng:o.company?o.company.geoCodeLng:void 0}});case 3:n=a.sent,e.loading=!1,e.similarJobs=n.data.jobs.filter((function(t){return o._id!=t._id})).slice(0,e.number);case 6:case"end":return a.stop()}}),a)})))()}}},m=b,h=a("2877"),d=Object(h["a"])(m,r,l,!1,null,null,null),u=d.exports,g=a("1ba6"),v=a("7067"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},j=[],w=(a("a4d3"),a("e01a"),a("b0c0"),a("ac1f"),a("5319"),{name:"JobStructuredData",props:{job:{type:Object,default:function(){}}},head:{script:function(){if(this.job.title)return[{id:"job-structured-data",type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"JobPosting",title:"".concat(this.job.title," | ").concat(this.job.company.location),description:this.job.description.replace(/"/g,"'").replace(/h1|h2|h3|h4|h5|h6/g,"p"),datePosted:new Date(this.job.publishedAt||"").toISOString(),hiringOrganization:{"@type":"Organization",name:this.job.company.name||"",sameAs:this.job.company.url||"",logo:this.job.company.logoUrl||""},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:this.job.company.street||"",addressLocality:this.job.company.location||"",addressRegion:this.job.company.state||"",postalCode:this.job.company.zipCode||"",addressCountry:this.job.company.country||""}},validThrough:this.job.applicationDeadline?new Date(this.job.applicationDeadline).toISOString():this.job.paidExpiresAt?new Date(this.job.paidExpiresAt).toISOString():"",employmentType:this.getEmploymentType(this.job.employmentType||""),baseSalary:{"@type":"MonetaryAmount",currency:"EUR",value:{"@type":"QuantitativeValue",value:"",minValue:this.job.salaryMin?parseInt(this.job.salaryMin):"",maxValue:this.job.salaryMax?parseInt(this.job.salaryMax):"",unitText:"MONTH"}}})}]}},watch:{job:function(){this.$emit("updateHead")}},methods:{getEmploymentType:function(t){var e;switch(t){case"full":e='"FULL_TIME"';break;case"training":e='"FULL_TIME"';break;case"part":e='"PART_TIME"';break;case"mini":e='"PART_TIME"';break;case"part_full":e='["PART_TIME", "FULL_TIME"]';break;default:e=null;break}return e}}}),y=w,C=Object(h["a"])(y,f,j,!1,null,null,null),_=C.exports,x=a("4a7d"),k=a("037e"),S=a("b13b"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"email-share-btn",attrs:{variant:"secondary",size:t.size,disabled:!t.$route.meta.public,href:"mailto:?subject="+t.subject+"&body=Stellenanzeige auf "+t.$config.website.name+": "+t.url+(t.sharePath?t.sharePath:""),target:"_blank","aria-label":"E-Mail"},on:{click:function(e){return t.track("share","email",t.sharePath)}}},[a("svg",{staticClass:"bi bi-envelope-fill mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"}})]),t._v(" E-Mail "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},z=[],A={name:"EmailShareBtn",props:{sharePath:{type:String,default:""},subject:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},B=A,L=Object(h["a"])(B,M,z,!1,null,null,null),P=L.exports,J=a("1144"),E=a("4e15"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-placeholder"},[a("div",{staticClass:"header mb-4"},[a("div",[a("BSkeleton",{staticClass:"title mb-3"}),a("BSkeleton",{staticClass:"company"})],1)]),a("BSkeleton",{attrs:{height:"1px"}}),a("div",{staticClass:"meta"},[a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1),a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1),a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1),a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1)]),a("BSkeleton",{attrs:{height:"1px"}}),a("div",{staticClass:"d-flex mt-4"},[a("BSkeleton",{staticClass:"mr-3",attrs:{type:"avatar",height:"40px",width:"40px"}}),a("BSkeleton",{staticClass:"border-radius2",staticStyle:{"max-width":"50vw"},attrs:{type:"button",height:"40px",width:"300px"}})],1),a("div",{staticClass:"body"},[a("BSkeleton",{attrs:{height:"35vh"}}),a("div",[a("BSkeleton",{staticClass:"heading"}),t._l(7,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",[a("BSkeleton",{staticClass:"heading"}),t._l(10,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",[a("BSkeleton",{staticClass:"heading"}),t._l(6,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2)],1),a("div",{staticClass:"footer"},[a("BSkeleton",{staticClass:"map-skeleton"}),a("BSkeleton",{attrs:{height:"30px"}})],1)],1)},$=[],H=a("2b0e"),O=a("0942");H["default"].component("BSkeleton",O["a"]);var V={name:"JobPlaceholder"},U=V,D=(a("e8c7"),Object(h["a"])(U,T,$,!1,null,"2780af7f",null)),I=D.exports,R=a("6df3"),N={name:"Job",components:{SimilarJobsContainer:u,HereMapSingleJob:x["a"],JobStructuredData:_,FacebookShareBtn:k["a"],WhatsAppShareBtn:S["a"],EmailShareBtn:P,TwitterShareBtn:J["a"],SubscribeNewsletterBtn:E["a"],StarJob:v["a"],JobPlaceholder:I,JobCardPlaceholder:p["a"],RandomTrainingsContainer:R["a"]},props:{apiJobsSchema:{type:String,default:"private"}},data:function(){return{job:Object,error:!1,employmentTypeOptions:g["f"],companySizeOptions:g["b"],socialShareJobToClipboard:s["a"],link:[{id:"mapsjs-ui",rel:"stylesheet",href:"https://js.api.here.com/v3/3.1/mapsjs-ui.css",type:"text/css"}]}},computed:{jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"private"===this.apiJobsSchema?"myJob":"publicJob"},snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [\n              {\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },\n              {\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellenangebote",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote"\n              },\n              {\n                  "@type": "ListItem",\n                  "position": 3,\n                  "name": "Stellenangebot",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote/job/'.concat(this.job._id,'"\n              }\n            ]\n          }')},{id:"canonical",rel:"canonical",href:"".concat(this.$config.website.url,"/stellenangebote/job/").concat(this.job._id,"/").concat(this.job.slug)}]}},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},created:function(){this.getJob(this.$route.params.jobId)},methods:{getJob:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("publicJob"!==e.jobQuery){a.next=18;break}return a.prev=1,a.next=4,e.$axios.get("/api/public-jobs/job/".concat(t));case 4:if(o=a.sent,!o.data.job){a.next=9;break}e.job=o.data.job,a.next=10;break;case 9:throw new Error;case 10:a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](1),e.$root.$bvToast.toast("Diese Stellenanzeige ist nicht oder nicht mehr verfügbar.",{title:"Stellenanzeige nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),e.$router.push("/stellenangebote");case 16:a.next=33;break;case 18:return a.prev=18,a.next=21,e.$axios.get("/graphql",{params:{query:"\n                query {\n                  ".concat(e.jobQuery,'(_id: "').concat(t,'") {\n                    _id\n                    createdAt\n                    updatedAt\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              ')}});case 21:if(n=a.sent,!n.data.data[e.jobQuery]){a.next=26;break}e.job=n.data.data[e.jobQuery],a.next=28;break;case 26:throw e.$router.push("/stellenangebote"),new Error;case 28:a.next=33;break;case 30:a.prev=30,a.t1=a["catch"](18),e.error=!0;case 33:case"end":return a.stop()}}),a,null,[[1,12],[18,30]])})))()},track:function(t,e){this.$gtag.event(t,{event_label:e})},timeSince:function(t){var e=Math.floor((new Date-t)/1e3),a=e/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=e/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=e/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},F=N,G=(a("1d09"),Object(h["a"])(F,o,n,!1,null,"69542d5c",null));e["a"]=G.exports},b13b:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}})]),t._v(" WhatsApp "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},n=[],i={name:"WhatsAppShareBtn",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},s=i,r=a("2877"),l=Object(r["a"])(s,o,n,!1,null,null,null);e["a"]=l.exports},bab1:function(t,e,a){},e8c7:function(t,e,a){"use strict";a("1142")},fa8e:function(t,e,a){"use strict";a("99af"),a("ac1f"),a("5319");e["a"]=function(t){var e=document.createElement("textarea");e.value="".concat(t.title," | 📍 ").concat(t.company.location,"\n\n📌 ").concat(this.$config.website.url,"/stellenangebote/job/").concat(t._id,"\n\n#mfamalanders #medizinischefachangestellte #mfa #arzthelfer #arzthelferin #mfajobs #stellenangebot #stellenanzeige #verstärkunggesucht #").concat(t.company.location.replace("-","").replace(/\s/g,"").toLowerCase(),"jobs #").concat(t.company.location.replace("-","").replace(/\s/g,"").toLowerCase()),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}}]);
//# sourceMappingURL=job~job-preview-legacy.3fe6b54b.js.map