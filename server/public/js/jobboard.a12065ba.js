(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobboard"],{"2bf9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-btn",attrs:{variant:"primary",href:"https://www.facebook.com/"+t.$config.fb.path,target:"_blank","aria-label":"Facebook"}},[a("Fa",{class:t.content?"mr-2":"",attrs:{icon:["fab","facebook-square"],size:"lg"}}),t._v(" "+t._s(t.content)+" ")],1)},r=[],i={name:"FacebookBtn",props:{content:{type:String,default:"Facebook"}}},s=i,o=a("2877"),l=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=l.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},"689a":function(t,e,a){"use strict";a("be24")},"6df3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",t._l(t.trainings,(function(e){return a("b-col",{key:e.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/t.number}},[a("div",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/page/mfa-career/fort-und-weiterbildungen/"+e.slug,"aria-label":e.title}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-img-lazy",{attrs:{src:e.featuredImage.node.sourceUrl,alt:e.featuredImage.node.altText,offset:"1000",top:""}}),a("b-card-body",[a("b-card-title",{attrs:{title:e.title}}),a("b-card-text",[a("div",{domProps:{innerHTML:t._s(e.excerpt)}})]),a("b-button",{attrs:{to:"/page/mfa-career/fort-und-weiterbildungen/"+e.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)],1)],1)])})),1)},r=[],i=(a("a9e3"),{name:"RandomTrainingsContainer",props:{number:{type:Number,default:3}},data:function(){return{trainings:Array}},mounted:function(){this.getTrainings()},watch:{$route:function(t,e){t!=e&&this.getTrainings()},"$store.state.trainings.trainings":function(){this.getTrainings()}},methods:{getRandom:function(t,e){var a=new Array(e),n=t.length,r=new Array(n);if(e>n)throw new RangeError("getRandom: more elements taken than available");while(e--){var i=Math.floor(Math.random()*n);a[e]=t[i in r?r[i]:i],r[i]=--n in r?r[n]:n}return a},getTrainings:function(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number))}}}),s=i,o=a("2877"),l=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=l.exports},7057:function(t,e,a){t.exports=a.p+"img/undraw_Updates_re_o5af.6ea0d239.svg"},7156:function(t,e,a){var n=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var i,s;return r&&"function"==typeof(i=e.constructor)&&i!==a&&n(s=i.prototype)&&s!==a.prototype&&r(t,s),t}},"7a04":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"jobpage py-5"},[a("Job",{attrs:{apiJobsSchema:"public"}})],1)},r=[],i=a("890f"),s={name:"JobView",components:{Job:i["a"]}},o=s,l=a("2877"),c=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},"9a48":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jobboard"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),n("b-container",{staticClass:"py-3 py-lg-5"},[n("b-row",{staticClass:"mt-2"},[n("b-col",{staticClass:"px-2 pr-lg-5",attrs:{cols:"12",lg:"4"}},[n("b-button-toolbar",{attrs:{"aria-label":"Jobboard view toolbar"}},[n("b-button-group",{staticClass:"mb-3"},[n("b-button",{attrs:{variant:"list"==t.jobboardView?"primary":"outline-primary",size:"sm"},on:{click:function(e){return e.preventDefault(),t.setJobboardView("list")}}},[n("Fa",{staticClass:"mr-2",attrs:{icon:"list-ul"}}),t._v("Liste")],1),n("b-button",{attrs:{variant:"map"==t.jobboardView?"primary":"outline-primary",size:"sm"},on:{click:function(e){return e.preventDefault(),t.setJobboardView("map")}}},[n("Fa",{staticClass:"mr-2",attrs:{icon:"map"}}),t._v("Karte")],1)],1),n("FacebookBtn",{staticClass:"d-lg-none mb-3 ml-1",attrs:{content:""}}),n("InstagramBtn",{staticClass:"d-lg-none mb-3 ml-1",attrs:{content:""}})],1),n("b-form",{attrs:{id:"job-filter"},on:{submit:function(t){t.preventDefault()}}},[n("label",{staticClass:"sr-only",attrs:{for:"searchTerm-jobboard"}},[t._v("Suchbegriff *")]),n("b-input-group",{staticClass:"mb-1 mr-2"},[n("b-form-input",{class:t.filter.searchTerm?"border-secondary":"",attrs:{type:"text",placeholder:"Suchbegriff...",id:"searchTerm-jobboard"},on:{change:t.setQuery},model:{value:t.filter.searchTerm,callback:function(e){t.$set(t.filter,"searchTerm",e)},expression:"filter.searchTerm"}}),n("b-input-group-append",[n("b-button",{on:{click:function(e){return e.preventDefault(),function(){t.filter.searchTerm="",t.setQuery()}()}}},[n("Fa",{attrs:{icon:"times"}})],1)],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"employmentType-jobboard"}},[t._v("Anstellungsart *")]),n("b-form-select",{staticClass:"my-1 mr-2",attrs:{id:"employmentType-jobboard"},on:{change:t.setQuery},model:{value:t.filter.employmentType,callback:function(e){t.$set(t.filter,"employmentType",e)},expression:"filter.employmentType"}},[n("b-form-select-option",{attrs:{value:null}},[t._v("Alle Anstellungsarten")]),t._l(t.employmentTypeOptions,(function(e){return n("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2),n("label",{staticClass:"sr-only",attrs:{for:"location-jobboard"}},[t._v("Ort *")]),n("b-input-group",{staticClass:"my-1 mr-2"},[n("b-form-input",{class:t.filter.location?"border-secondary":"",attrs:{type:"text",list:"location-list",placeholder:"Ort...",id:"location-jobboard"},on:{change:t.setQuery},model:{value:t.filter.location,callback:function(e){t.$set(t.filter,"location",e)},expression:"filter.location"}}),n("b-input-group-append",[n("b-button",{on:{click:function(e){return e.preventDefault(),function(){t.filter.location="",t.setQuery()}()}}},[n("Fa",{attrs:{icon:"times"}})],1)],1)],1),n("b-form-datalist",{attrs:{id:"location-list",options:t.locationsList}}),n("label",{staticClass:"sr-only",attrs:{for:"state-jobboard"}},[t._v("Bundesland *")]),n("b-form-select",{staticClass:"my-1 mr-2",attrs:{id:"state-jobboard"},on:{change:t.setQuery},model:{value:t.filter.state,callback:function(e){t.$set(t.filter,"state",e)},expression:"filter.state"}},[n("b-form-select-option",{attrs:{value:null}},[t._v("Alle Bundesländer")]),t._l(t.companyStateOptions,(function(e){return n("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2),n("label",{staticClass:"mb-2 pl-2",attrs:{for:"profession-jobboard"}},[t._v("Berufe ")]),n("b-form-group",{staticClass:"pl-2",attrs:{id:"profession-jobboard"}},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.professionOptions,size:"sm",stacked:""},model:{value:t.profession.active,callback:function(e){t.$set(t.profession,"active",e)},expression:"profession.active"}})],1),n("label",{staticClass:"mt-0 mb-2 pl-2",staticStyle:{cursor:"pointer"},attrs:{for:"specialization-jobboard"},on:{click:function(e){t.specialization.visible=!t.specialization.visible}}},[t._v("Fachgebiete "),n("Fa",{class:!0===t.specialization.visible?"animate rotate-90 ml-2":"animate ml-2",attrs:{icon:"caret-right",size:"1x"}})],1),n("b-collapse",{attrs:{visible:!0===t.specialization.visible,role:"tabpanel"}},[n("b-form-group",{staticClass:"pl-2",attrs:{id:"specialization-jobboard"},scopedSlots:t._u([{key:"label",fn:function(){return[n("b-form-checkbox",{attrs:{indeterminate:t.specialization.indeterminate,size:"sm",stacked:""},on:{change:t.toggleAll},model:{value:t.specialization.allSelected,callback:function(e){t.$set(t.specialization,"allSelected",e)},expression:"specialization.allSelected"}},[t._v(" "+t._s(t.specialization.allSelected?"Alle Abwählen":"Alle Auswählen")+" ")])]},proxy:!0}])},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.specializationOptions.map((function(t){return{text:t,value:t}})),size:"sm",stacked:""},model:{value:t.specialization.active,callback:function(e){t.$set(t.specialization,"active",e)},expression:"specialization.active"}})],1)],1)],1),n("div",{staticClass:"small text-right mb-2 pr-3 pt-1"},[n("b-link",{attrs:{to:"/page/fuer-arbeitgeber"}},[t._v("Stellenanzeige schalten")])],1),n("div",{staticClass:"d-none d-lg-block mt-5"},[t.$store.state.auth.loggedIn&&t.$store.state.starredJobs.starredJobs&&t.$store.state.starredJobs.starredJobs.length>0?n("b-button",{attrs:{to:"/user/dashboard?tab=3",variant:"secondary",size:"sm"}},[t._v("Meine gespeicherten Jobs")]):t._e()],1),n("div",{staticClass:"d-none d-lg-block mt-4"},[n("p",{staticClass:"h5"},[t._v(" Verpasse keine Neuigkeiten und folge uns auf ")]),n("FacebookBtn",{staticClass:"mt-2 mr-1",attrs:{content:"Facebook"}}),n("InstagramBtn",{staticClass:"mt-2 mr-1",attrs:{content:""}}),n("TwitterBtn",{staticClass:"mt-2 mr-1",attrs:{content:""}})],1)],1),n("b-col",[n("keep-alive",[n(t.computedJobboardView,{tag:"component",attrs:{jobs:t.filteredJobs}})],1),n("div",{staticClass:"my-4 clearfix"},[n("h2",{staticClass:"h5 bold mb-3"},[t._v("Ihre Stellenanzeige hier?")]),n("b-img",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057")}}),n("p",[t._v(" Sie sind als attraktiver Arbeitergeber auf der Suche nach einer motivierten und kompetenten "),n("em",[t._v("Medizinischen Fachangestellten (MFA) / ArzthelferIn oder Zahnmedizinischen Fachangestellten (ZFA)")]),t._v(t._s(t.$route.query.location||t.$route.query.state?" in "+(t.$route.query.location||t.$route.query.state):"")+"? Dann "),n("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[t._v("registrieren")]),t._v(" Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem Karriereportal. "),n("br"),n("b-link",{staticClass:"bold",attrs:{to:"/page/fuer-arbeitgeber"}},[t._v("Mehr erfahren")])],1)],1),n("div",{staticClass:"mt-5"},[n("b-link",{staticClass:"h2",attrs:{to:"/page/mfa-career/fort-und-weiterbildungen"}},[t._v("Fort- und Weiterbildungen für MFA")]),n("RandomTrainingsContainer",{staticClass:"mt-3",attrs:{number:2}}),n("BerufsbilderBanner",{staticClass:"mt-3"})],1),n("div",{staticClass:"mt-5"},[n("p",{staticClass:"small"},[t._v(" Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische Fachangestellte (MFA), Arzthelferin, Zahnmedizinische Fachangestellte (ZFA), ZMF, ZMV, MTRA in "+t._s(t.companyStateOptions.join(", "))+". ")])])],1)],1)],1),n("Head",{attrs:{title:"MFA / ArzthelferIn Jobs"+(t.filter.state?" | "+t.filter.state:""),desc:"Aktuelle Stellenangebote (Teilzeit | Vollzeit) für MFA / ArzthelferInnen "+(t.filter.state?t.filter.state+" ":"")+"– Dein Karriereportal nur für MFAs / ArzthelferInnen.",img:"",script:t.snippet}})],1)},r=[],i=(a("a4d3"),a("e01a"),a("a623"),a("4de4"),a("caad"),a("c975"),a("d81d"),a("fb6a"),a("45fc"),a("b0c0"),a("2532"),a("f3f3")),s=(a("96cf"),a("c964")),o=a("d0ff"),l=a("1ba6"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("div",{ref:"hereMap",staticClass:"map-container multi"})])},u=[],p=(a("99af"),a("4160"),a("d3b7"),a("159b"),{name:"HereMapMultiJobs",props:{jobs:Array},data:function(){return{platform:null,map:null,ui:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",companyCountryOptions:l["a"]}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=new window.H.service.Platform({apikey:t.apikey}),t.platform=a,t.initializeHereMap();case 3:case"end":return e.stop()}}),e)})))()},watch:{jobs:function(){this.map&&(this.deleteMarkers(),this.addMarkers())}},methods:{forward:function(t){this.$router.push("/jobboard/job/".concat(t))},initializeHereMap:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=6.3,e.prev=2,e.next=5,new Promise((function(e,n){window.navigator.geolocation.getCurrentPosition((function(t){t.coords?(a=8,e({lat:t.coords.latitude,lng:t.coords.longitude})):n("")}),(function(){return e(t.$config.maps.defaultCenter)}))}));case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),n=t.$config.maps.defaultCenter;case 11:n||(n=t.$config.maps.defaultCenter),r=t.$refs.hereMap,i=window.H,s=t.platform.createDefaultLayers({lg:t.$config.maps.lang}),t.map=new i.Map(r,s.vector.normal.map,{zoom:a,center:n}),addEventListener("resize",(function(){return t.map.getViewPort().resize()})),new i.mapevents.Behavior(new i.mapevents.MapEvents(t.map)),t.ui=i.ui.UI.createDefault(t.map,s),t.addMarkers(),e.next=25;break;case 22:e.prev=22,e.t1=e["catch"](0),t.$root.$bvToast.toast("Die Karte konnten nicht geladen werden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!1});case 25:case"end":return e.stop()}}),e,null,[[0,22],[2,8]])})))()},addMarkers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.map&&t.jobs.length>0&&(a=window.H,n=new a.map.Group,r=t.createMarkersInput(t.jobs),i=t.createMarkers(a,n,r),t.map.addObject(i));case 1:case"end":return e.stop()}}),e)})))()},createMarkersInput:function(t){var e=this;return t.map((function(t){return{geocode:{lat:e.spreadMarker(t.company.geoCodeLat),lng:e.spreadMarker(t.company.geoCodeLng)},companyName:t.company.name,logoUrl:t.company.logoUrl,jobs:[{jobTitle:t.title,jobId:t._id}]}}))},createMarkers:function(t,e,a){var n=this;return a.forEach(function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(r){var i,s,o,l,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=r.geocode,s=document.createElement("div"),s.classList.add("icon-outer"),o=document.createElement("img"),o.classList.add("icon-inner"),o.src=r.logoUrl||"/img/favicon.ico",s.appendChild(o),l=new t.map.DomIcon(s),c=new window.H.map.DomMarker(i,{icon:l}),u='<div class="map-bubble mb-2"><strong>'.concat(r.companyName,'</strong></div><hr class="my-1" />'),r.jobs.forEach((function(t){u+='<p class="my-0"><a href="/jobboard/job/'.concat(t.jobId,'" target="_blank">').concat(t.jobTitle,'</a></p><hr class="my-1" />')})),c.setData(u),c.addEventListener("tap",(function(e){var a=new t.ui.InfoBubble(e.target.getGeometry(),{content:e.target.getData()});n.ui.addBubble(a)})),e.addObject(c);case 14:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),e},deleteMarkers:function(){this.map&&this.map.removeObjects(this.map.getObjects())},spreadMarker:function(t){var e=5e-4;return t+Math.random()*e-Math.random()*e}}}),b=p,d=a("2877"),f=Object(d["a"])(b,c,u,!1,null,null,null),m=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.jobs.length>0?a("div",[t._l(t.activeJobs,(function(t){return a("JobCard",{key:t._id,attrs:{job:t}})})),a("div",[a("b-pagination",{staticClass:"mt-4",attrs:{"total-rows":t.noOfJobs,"per-page":t.perPage,pills:"",align:"center",limit:5,"aria-controls":"my-table"},on:{change:t.scrollToTop},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],2):0===t.jobs.length&&t.$store.state.jobs.jobs.length>0?a("div",{staticStyle:{"min-height":"200px"}},[a("p",{staticClass:"h5"},[t._v("Leider gibt es hierzu keine Ergebnisse.")])]):a("div",[a("JobCardPlaceholder",{staticClass:"mb-3"}),a("JobCardPlaceholder",{staticClass:"mb-3"}),a("JobCardPlaceholder",{staticClass:"mb-3"})],1)])},g=[],v=a("f0fa"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-card-placeholder"},[a("div",{staticClass:"title"},[a("div",{staticClass:"content animate-color"})]),a("div",{staticClass:"body"},[a("div",{staticClass:"content animate-color"}),a("div",{staticClass:"content animate-color"}),a("div",{staticClass:"content animate-color"}),a("div",{staticClass:"content animate-color"})]),a("div",{staticClass:"footer"},[a("div",{staticClass:"content animate-color"})])])}],C={name:"JobCardPlaceholder"},_=C,k=Object(d["a"])(_,y,w,!1,null,null,null),j=k.exports,z={name:"JobboardList",props:["jobs"],components:{JobCard:v["a"],JobCardPlaceholder:j},data:function(){return{perPage:25,currentPage:1}},computed:{noOfJobs:function(){return this.jobs.length},activeJobs:function(){return this.jobs.slice(this.currentPage*this.perPage-this.perPage,this.currentPage*this.perPage)}},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},x=z,M=Object(d["a"])(x,h,g,!1,null,null,null),T=M.exports,A=a("2bf9"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"instagram-btn",attrs:{variant:"primary",href:"https://www.instagram.com/"+t.$config.ig.path,target:"_blank","aria-label":"Instagram"}},[a("Fa",{class:t.content?"mr-2":"",attrs:{icon:["fab","instagram"],size:"lg"}}),t._v(" "+t._s(t.content)+" ")],1)},O=[],J={name:"InstagramBtn",props:{content:{type:String,default:"Instagram"}}},I=J,F=Object(d["a"])(I,$,O,!1,null,null,null),S=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-btn",attrs:{variant:"primary",href:"https://www.twitter.com/"+t.$config.twitter.path,target:"_blank","aria-label":"Twitter"}},[a("Fa",{class:t.content?"mr-2":"",attrs:{icon:["fab","twitter"],size:"lg"}}),t._v(" "+t._s(t.content)+" ")],1)},E=[],B={name:"TwitterBtn",props:{content:{type:String,default:"Twitter"}}},R=B,V=Object(d["a"])(R,L,E,!1,null,null,null),N=V.exports,P=a("6df3"),q=a("a281"),D={name:"Jobboard",components:{JobboardList:T,HereMapMultiJobs:m,FacebookBtn:A["a"],InstagramBtn:S,TwitterBtn:N,RandomTrainingsContainer:P["a"],BerufsbilderBanner:q["a"]},data:function(){return{title:"Stellenangebote für MFA / ArzthelferIn & ZFA",filter:{searchTerm:this.$route.query.searchTerm||this.$route.query.searchterm||"",employmentType:this.$route.query.employmentType||this.$route.query.employmenttype||null,location:this.$route.query.location||"",state:this.$route.query.state||null},specialization:{active:l["i"],visible:!1,allSelected:!0,indeterminate:!1},profession:{active:l["g"].map((function(t){return t.value}))},employmentTypeOptions:l["f"].filter((function(t){return"part_full"!=t.value})),companyStateOptions:l["c"],specializationOptions:l["i"],professionOptions:l["g"],jobboardView:this.$route.query.jobboardView||"list",snippet:[{type:"application/ld+json",inner:'{\n                        "@context": "http://schema.org",\n                        "@type" : "BreadcrumbList",\n                        "itemListElement": [{\n                            "@type": "ListItem",\n                            "position": 1,\n                            "name": "MFA mal anders",\n                            "item": "https://www.mfa-mal-anders.de"\n                        },{\n                            "@type": "ListItem",\n                            "position": 2,\n                            "name": "Stellenangebote",\n                            "item": "https://www.mfa-mal-anders.de/jobboard"\n                        }'.concat(this.$route.query.state?',{"@type": "ListItem","position": 3,"name": "'+this.$route.query.state+'","item": "https://www.mfa-mal-anders.de/jobboard?state='+this.$route.query.state+'"}':"","]\n                    }")}]}},computed:{computedJobboardView:{get:function(){return"map"===this.jobboardView?"HereMapMultiJobs":"JobboardList"}},filteredJobs:{get:function(){var t=this,e=Object(o["a"])(this.$store.state.jobs.jobs);return this.filter.state&&(e=e.filter((function(e){return e.company&&e.company.state.toLowerCase().includes(t.filter.state.toLowerCase())?e:void 0}))),this.filter.location&&(e=e.filter((function(e){return e.company&&e.company.location.toLowerCase().includes(t.filter.location.toLowerCase())?e:void 0}))),this.filter.searchTerm&&(e=e.filter((function(e){return e.title.toLowerCase().includes(t.filter.searchTerm.toLowerCase())||e.description.toLowerCase().includes(t.filter.searchTerm.toLowerCase())||e.company.name.toLowerCase().includes(t.filter.searchTerm.toLowerCase())||e.company.state.toLowerCase().includes(t.filter.searchTerm.toLowerCase())||e.company.location.toLowerCase().includes(t.filter.searchTerm.toLowerCase())||e.company.zipCode.toLowerCase().includes(t.filter.searchTerm.toLowerCase())?e:void 0}))),this.filter.employmentType&&(e=e.filter((function(e){return e.employmentType.includes(t.filter.employmentType)?e:void 0}))),this.specialization.active&&this.specialization.active.length>0&&this.specialization.active.length!=this.specializationOptions.length&&(e=e.filter((function(e){return t.specialization.active.some((function(t){return e.specialization.includes(t)}))?e:void 0}))),this.profession.active&&1===this.profession.active.length&&(this.profession.active.some((function(t){return"Zahnheilkunde"===t}))?e=e.filter((function(t){return"Zahnheilkunde"===t.specialization})):this.profession.active.every((function(t){return"Zahnheilkunde"!=t}))&&(e=e.filter((function(t){return"Zahnheilkunde"!=t.specialization})))),e}},locationsList:{get:function(){var t=this.filteredJobs.map((function(t){if(t.company)return t.company.location})).filter((function(t){return t}));return t.filter((function(e,a){return t.indexOf(e)===a})).sort()}}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("getJobs");case 1:case"end":return e.stop()}}),e)})))()},watch:{"specialization.active":function(t){0===t.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!1):t.length===this.specializationOptions.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!0):(this.specialization.indeterminate=!0,this.specialization.allSelected=!1)}},methods:{setJobboardView:function(t){this.jobboardView!=t&&(this.jobboardView=t,this.setQuery())},setQuery:function(){this.$router.push({query:Object(i["a"])(Object(i["a"])({},this.filter),{},{jobboardView:this.jobboardView})})},toggleAll:function(t){this.specialization.active=t?this.specializationOptions.slice():[]}}},H=D,Z=(a("689a"),Object(d["a"])(H,n,r,!1,null,null,null));e["default"]=Z.exports},a281:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow1",attrs:{"no-body":""}},[a("b-card-img-lazy",{attrs:{top:"",src:"/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg",alt:"Banner - Jobs und Berufsbilder für MFA und ArzthelferInnen"}}),a("b-card-body",{attrs:{align:"center"}},[a("b-card-title",{attrs:{title:"Alternative Jobs und Berufsbilder für MFA"}}),a("b-card-text",[t._v(" Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und Berufen inklusive vieler Alternativen für Medizinische Fachangestellte / ArzthelferInnen! ")]),a("b-button",{attrs:{to:"/page/mfa-career/jobs-und-berufsbilder",variant:"primary"}},[t._v("Mehr erfahren!")])],1)],1)},r=[],i={name:"BerufsbilderBanner"},s=i,o=a("2877"),l=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=l.exports},a623:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").every,i=a("a640"),s=a("ae40"),o=i("every"),l=s("every");n({target:"Array",proto:!0,forced:!o||!l},{every:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),i=a("94ca"),s=a("6eeb"),o=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),p=a("d039"),b=a("7c73"),d=a("241c").f,f=a("06cf").f,m=a("9bf2").f,h=a("58a8").trim,g="Number",v=r[g],y=v.prototype,w=l(b(y))==g,C=function(t){var e,a,n,r,i,s,o,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=h(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+c}for(i=c.slice(2),s=i.length,o=0;o<s;o++)if(l=i.charCodeAt(o),l<48||l>r)return NaN;return parseInt(i,n)}return+c};if(i(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,k=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof k&&(w?p((function(){y.valueOf.call(a)})):l(a)!=g)?c(new v(C(e)),a,k):C(e)},j=n?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;j.length>z;z++)o(v,_=j[z])&&!o(k,_)&&m(k,_,f(v,_));k.prototype=y,y.constructor=k,s(r,g,k)}},be24:function(t,e,a){},c975:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").indexOf,i=a("a640"),s=a("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=jobboard.a12065ba.js.map