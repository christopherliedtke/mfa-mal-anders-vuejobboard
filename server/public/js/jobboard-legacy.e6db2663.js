(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobboard"],{2532:function(t,e,a){"use strict";var n=a("23e7"),i=a("e330"),r=a("5a34"),s=a("1d80"),o=a("577e"),l=a("ab13"),c=i("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(o(s(this)),o(r(t)),arguments.length>1?arguments[1]:void 0)}})},"2d0e":function(t,e,a){"use strict";a("7f45")},"32af":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card shadow1 position-relative"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{fluid:"",top:"",srcset:"\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_350.jpg 350w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_579.jpg 579w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_782.jpg 782w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg 1200w\n    ",sizes:"(max-width: 768px) 100vw, 50vw",src:"/img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg",alt:"Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000","blank-color":"#f7f6f9"}}),a("div",{staticClass:"card-body text-center"},[a("h3",{staticClass:"h4 card-title",staticStyle:{"font-weight":"700"}},[a("b-link",{staticClass:"stretched-link text-reset",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v(" Alternative Jobs und Berufsbilder für MFA / ZFA ")])],1),a("p",{staticClass:"card-text"},[t._v(" Hier findest Du eine Auswahl von ganz unterschiedlichen Jobs und Berufen inklusive vieler Alternativen für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte | ArzthelferInnen! ")])])],1)},i=[],r={name:"BannerProfessions"},s=r,o=a("2877"),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},"7f45":function(t,e,a){},b129:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jobboard"},[n("div",{staticClass:"title"},[n("h1",[n("strong",[t._v(" Stellenangebote ")]),n("br"),n("span",{staticClass:"h4"},[t._v(t._s(1===t.berufsgruppe.active.length?t.berufsgruppe.active.join(" & "):"MFA & ZFA")+" Jobs "+t._s(t.canonicalLocation?" in "+t.canonicalLocation:""))])]),n("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:t.breadcrumbs}})],1),n("div",{staticClass:"container py-3 py-lg-4"},[n("div",{staticClass:"row mt-2"},[n("nav",{staticClass:"col-12 col-lg-4 pt-2 px-2 pr-lg-5"},[n("b-form",{attrs:{id:"job-filter"},on:{submit:function(e){return e.preventDefault(),function(){t.setQuery()}.apply(null,arguments)}}},[n("label",{staticClass:"sr-only",attrs:{for:"location-jobboard"}},[t._v("Ort / PLZ")]),n("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"location-jobboard",type:"text",placeholder:"PLZ / Ort...",trim:"",lazy:""},model:{value:t.filter.ort,callback:function(e){t.$set(t.filter,"ort",e)},expression:"filter.ort"}}),n("b-input-group-append",[n("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.ort="",t.setQuery()}.apply(null,arguments)}}},[n("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),n("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"radius"}},[t._v("Umkreisradius")]),n("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-bullseye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),n("path",{attrs:{d:"M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}}),n("path",{attrs:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}),n("path",{attrs:{d:"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"radius",type:"number",min:"15",step:"5",placeholder:"Umkreis...",debounce:"500",number:"",trim:"",lazy:""},model:{value:t.filter.radius,callback:function(e){t.$set(t.filter,"radius",e)},expression:"filter.radius"}}),n("b-input-group-append",[n("b-input-group-text",{staticClass:"bg-light text-muted px-2"},[t._v("km")]),n("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.radius=null,t.setQuery()}.apply(null,arguments)}}},[n("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),n("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),n("div",{staticClass:"text-primary  mt-3 mb-2 ml-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showAdvancedSearch=!t.showAdvancedSearch}}},[t._v(" Erweiterte Suche "),n("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":t.showAdvancedSearch}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),n("b-collapse",{staticClass:"mb-3",attrs:{id:"advanced-search"},model:{value:t.showAdvancedSearch,callback:function(e){t.showAdvancedSearch=e},expression:"showAdvancedSearch"}},[n("label",{staticClass:"sr-only",attrs:{for:"s-jobboard"}},[t._v("Suchbegriff")]),n("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})])])]},proxy:!0}])},[n("b-form-input",{class:t.filter.s?"border-secondary":"",attrs:{id:"s-jobboard",type:"text",placeholder:"Jobtitel, Stichwort...",lazy:""},model:{value:t.filter.s,callback:function(e){t.$set(t.filter,"s",e)},expression:"filter.s"}}),n("b-input-group-append",[n("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.s="",t.setQuery()}.apply(null,arguments)}}},[n("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),n("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"employmentType-jobboard"}},[t._v("Anstellungsart")]),n("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),n("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])])]},proxy:!0}])},[n("b-form-select",{attrs:{id:"employmentType-jobboard"},on:{change:function(){t.setQuery()}},model:{value:t.filter.anstellungsart,callback:function(e){t.$set(t.filter,"anstellungsart",e)},expression:"filter.anstellungsart"}},[n("b-form-select-option",{attrs:{value:""}},[t._v("Alle Anstellungsarten")]),t._l(t.employmentTypeOptions,(function(e){return n("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2)],1),n("label",{staticClass:"mb-2 pl-2",attrs:{for:"profession-jobboard"}},[t._v("Berufsgruppe")]),n("b-form-group",{staticClass:"pl-2",attrs:{id:"profession-jobboard"}},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.professionOptions,size:"sm",stacked:""},on:{change:function(){t.setQuery()}},model:{value:t.berufsgruppe.active,callback:function(e){t.$set(t.berufsgruppe,"active",e)},expression:"berufsgruppe.active"}})],1),n("label",{staticClass:"mt-0 mb-2 pl-2",staticStyle:{cursor:"pointer"},attrs:{for:"specialization-jobboard"},on:{click:function(e){t.specialization.visible=!t.specialization.visible}}},[t._v("Fachgebiete "),n("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":t.specialization.visible}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),n("BCollapse",{attrs:{visible:!0===t.specialization.visible,role:"tabpanel"}},[n("b-form-group",{staticClass:"pl-2",attrs:{id:"specialization-jobboard"},scopedSlots:t._u([{key:"label",fn:function(){return[n("b-form-checkbox",{attrs:{indeterminate:t.specialization.indeterminate,size:"sm",stacked:""},on:{change:t.toggleAll},model:{value:t.specialization.allSelected,callback:function(e){t.$set(t.specialization,"allSelected",e)},expression:"specialization.allSelected"}},[t._v(" "+t._s(t.specialization.allSelected?"Alle Abwählen":"Alle Auswählen")+" ")])]},proxy:!0}])},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.specializationOptions.map((function(t){return{text:t,value:t}})),size:"sm",stacked:""},on:{change:function(){t.getJobs()}},model:{value:t.specialization.active,callback:function(e){t.$set(t.specialization,"active",e)},expression:"specialization.active"}})],1)],1)],1),n("div",[n("span",{staticClass:"text-danger small ml-2",staticStyle:{cursor:"pointer"},on:{click:t.resetFilter}},[t._v("Filter zurücksetzen")])]),n("div",{staticClass:"mt-2"},[n("b-button",{attrs:{variant:"success",type:"submit",block:""}},[n("svg",{staticClass:"bi bi-search mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),t._v("Jobs finden")])],1)],1),n("div",{staticClass:"small text-right mt-2 mb-2 pr-3 pt-1"},[n("b-link",{attrs:{to:"/fuer-arbeitgeber"}},[t._v("Stellenanzeige schalten")])],1),n("div",{staticClass:"mt-3 text-right"},[t.$config.starredJobs.active&&t.$store.state.auth.loggedIn&&t.$store.state.starredJobs.starredJobs&&t.$store.state.starredJobs.starredJobs.length>0?n("b-button",{attrs:{to:"/user/gespeicherte-stellenanzeigen",variant:"outline-secondary",size:"sm"}},[t._v("Meine gespeicherten Jobs")]):n("NewsletterSignUpModal",{staticClass:"mt-2 mr-1 d-flex justify-content-end justify-content-lg-end",attrs:{size:"sm",variant:"secondary"}}),n("BannerProfessions",{staticClass:"d-none d-lg-block mt-5"})],1)],1),n("section",{staticClass:"col-12 col-lg-8 pt-2"},[t.errors&&t.errors.length>0?n("div",t._l(t.errors,(function(e,a){return n("p",{key:a},[t._v(" "+t._s(e.message)+" ")])})),0):t.jobs?t.jobs.length>0?n("div",{staticClass:"position-relative"},[n("JobSeekButton",{staticClass:"mt-3 mt-lg-0 mb-lg-3",attrs:{block:""}}),t._l(t.jobs,(function(t){return n("JobCard",{key:t._id,attrs:{job:t}})}))],2):0===t.count?n("div",[t._v(" Leider konnten für die Anfrage aktuell keine Stellenangebote gefunden werden. ")]):t._e():n("div",t._l(15,(function(t){return n("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1),n("div",{staticClass:"d-flex justify-content-center"},[t.jobs&&t.jobs.length<t.count&&!t.loading?n("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.loadMoreJobs()}}},[t._v(" Weitere Laden ")]):t.loading?n("BSpinner",{attrs:{variant:"primary",label:"Lade weitere Stellenanzeigen..."}}):t._e()],1),n("div",{staticClass:"my-4 clearfix"},[n("h2",{staticClass:"h5 bold mb-3"},[t._v("Ihr Stellenangebot hier?")]),n("b-img-lazy",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057"),alt:"Stellenanzeige wird auf MFA mal anders veröffentlicht","blank-width":"120"}}),n("p",[t._v(" Sie sind als attraktiver Arbeitgeber auf der Suche nach einer motivierten und kompetenten "),n("em",[t._v("Medizinischen Fachangestellten (MFA) | Zahnmedizinischen Fachangestellten (ZFA) | ArzthelferIn")]),t._v(t._s(t.$route.query.ort||t.$route.query.state?" in "+(t.$route.query.ort||t.$route.query.state):"")+"? Dann "),n("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[t._v("registrieren")]),t._v(" Sie sich und veröffentlichen Sie noch heute Ihr Stellenangebot auf "),n("em",[t._v("MFA mal anders")]),t._v(". "),n("br"),n("b-link",{staticClass:"bold",attrs:{to:"/fuer-arbeitgeber"}},[t._v("Mehr erfahren")])],1),n("BannerProfessions",{staticClass:"mt-5"})],1)])])]),!t.$route.params.location&&t.$route.query&&0===Object.keys(t.$route.query).length?n("JobBoardMore"):t._e(),n("ScrollTopButton"),n("Head",{attrs:{title:"Stellenangebote für "+(1===t.berufsgruppe.active.length?t.professionOptions.filter((function(e){return e.value==t.berufsgruppe.active[0]&&e.text})).map((function(t){return t.text})).join(" & "):t.professionOptions.map((function(t){return t.value})).join(" & "))+" "+(t.filter.ort?" | "+t.filter.ort:""),desc:"Attraktive Stellenangebote für "+(1===t.berufsgruppe.active.length?t.berufsgruppe.active.includes("MFA")?"Medizinische Fachangestellte (MFA)":"Zahnmedizinische Fachangestellte (ZFA)":"Medizinische Fachangestellte (MFA) & Zahnmedizinische Fachangestellte (ZFA)")+(t.filter.ort?" in "+t.filter.ort+" & Umgebung":"")+" | MFA mal anders",img:"",script:t.snippet}})],1)},i=[],r=a("5530"),s=a("2909");a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var l=a("1da1"),c=(a("96cf"),a("d81d"),a("dca8"),a("4de4"),a("99af"),a("8ba4"),a("a9e3"),a("a15b"),a("fb6a"),a("caad"),a("2532"),a("f303")),u=a("2b0e"),p=a("01e3"),b=a("5843"),d=a("1ba6"),f=a("9192"),h=a.n(f),g=a("c452"),m=a("b6d4"),v=a("32af"),w=a("ce98"),y=a("f179");u["default"].component("BSpinner",p["a"]),u["default"].component("BCollapse",b["a"]);var x=function(){return a.e("JobBoardMore").then(a.bind(null,"2a2d"))},z={name:"JobBoard",components:{JobCard:g["a"],JobCardPlaceholder:m["a"],BannerProfessions:v["a"],NewsletterSignUpModal:w["a"],ScrollTopButton:c["a"],JobSeekButton:y["a"],JobBoardMore:x},data:function(){return{jobs:null,count:0,canonicalLocation:"",loading:!1,filter:{s:"",anstellungsart:"",ort:"",radius:null},specialization:{active:d["l"],visible:!1,allSelected:!0,indeterminate:!1},berufsgruppe:{active:d["j"].map((function(t){return t.value}))},showAdvancedSearch:!1,employmentTypeOptions:Object.freeze(d["g"].filter((function(t){return"freelance"!==t.value}))),specializationOptions:Object.freeze(d["l"]),professionOptions:Object.freeze(d["j"]),textToSlug:h.a,errors:null}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [\n                {\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "Home",\n                  "item": "https://www.mfa-mal-anders.de/"\n                },\n                {\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellenangebote",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote"\n                }\n                '.concat(this.canonicalLocation?',{\n                  "@type": "ListItem",\n                  "position": 3,\n                  "name": "'.concat(this.canonicalLocation,'",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote/').concat(h()(this.canonicalLocation),'"\n                }'):"","  \n              ]\n            }")},{rel:"canonical",href:"".concat(this.$config.website.url).concat(this.canonical),id:"canonical"}]},breadcrumbs:function(){var t=[{text:"Home",href:"/"},{text:"Stellenangebote",href:"/stellenangebote"}];return this.canonicalLocation&&(t.push({text:this.canonicalLocation,href:"/stellenangebote/".concat(h()(this.canonicalLocation))}),1===this.berufsgruppe.active.length&&t.push({text:this.berufsgruppe.active[0].toUpperCase()})),t},canonical:function(){var t="/stellenangebote";return this.canonicalLocation&&!this.loading&&this.jobs&&(t+="/"+h()(this.canonicalLocation)),t}},watch:{"specialization.active":function(t){0===t.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!1):t.length===this.specializationOptions.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!0):(this.specialization.indeterminate=!0,this.specialization.allSelected=!1)},"$route.query":function(){this.setFilter(),this.getJobs()}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setFilter(),t.getJobs();case 2:case"end":return e.stop()}}),e)})))()},methods:{getJobs:function(){var t=arguments,e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:null,i=t.length>1&&void 0!==t[1]?t[1]:null,1!=e.loading){a.next=4;break}return a.abrupt("return");case 4:return e.loading=!0,e.errors=null,e.jobs=i?e.jobs:null,a.prev=7,a.next=10,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(n,"\n                  skip: ").concat(i,'\n                  s: "').concat(e.filter.s,'"\n                  location: "').concat(e.filter.ort,'"\n                  radius: ').concat(Number.isInteger(e.filter.radius)?e.filter.radius:null,'\n                  employmentType: "').concat(e.filter.anstellungsart,'",\n                  specialization: "').concat(e.specialization.active.length===e.specializationOptions.length?"":"object"===o(e.specialization.active)?e.specialization.active.join("+"):e.specialization.active,'"\n                  profession: "').concat(e.berufsgruppe.active.length===e.professionOptions.length?"":"object"===o(e.berufsgruppe.active)?e.berufsgruppe.active.join("+"):e.berufsgruppe.active,'"\n                ) {\n                  jobs {\n                    _id\n                    title\n                    excerpt\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    simpleApplication\n                    slug\n                    refreshFrequency\n                    company {\n                      name\n                      noLocation\n                      location\n                      logoUrl\n                    }\n                  }\n                  count\n                  location {\n                    location\n                    zipCode\n                    country\n                  }\n                }\n              }\n            ')}});case 10:if(r=a.sent,!r.data.errors){a.next=18;break}if(!r.data.errors.some((function(t){return"location"==t.extensions.argumentName}))){a.next=17;break}return e.errors=r.data.errors,e.loading=!1,e.canonicalLocation=e.filter.ort,a.abrupt("return");case 17:throw new Error;case 18:e.jobs=[].concat(Object(s["a"])(e.jobs||""),Object(s["a"])(r.data.data.publicJobs.jobs)),e.count=r.data.data.publicJobs.count,r.data.data.publicJobs.location?(e.filter.ort=[r.data.data.publicJobs.location.zipCode||"",r.data.data.publicJobs.location.location||"",!r.data.data.publicJobs.location.zipCode&&!r.data.data.publicJobs.location.location&&r.data.data.publicJobs.location.country||""].filter((function(t){return t})).join(" "),e.canonicalLocation=r.data.data.publicJobs.location.location||""):e.canonicalLocation="",a.next=26;break;case 23:a.prev=23,a.t0=a["catch"](7),e.$root.$bvToast.toast("Beim Laden der Stellenangebote ist ein Fehler aufgetreten. Bitte versuche die Seite neu zu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 26:e.loading=!1;case 27:case"end":return a.stop()}}),a,null,[[7,23]])})))()},loadMoreJobs:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.jobs&&t.jobs.length<t.count)){e.next=3;break}return e.next=3,t.getJobs(void 0,t.jobs.length);case 3:case"end":return e.stop()}}),e)})))()},setQuery:function(){var t=Object(r["a"])(Object(r["a"])({},this.filter),{},{ort:h()(this.filter.ort),berufsgruppe:1===this.berufsgruppe.active.length?this.berufsgruppe.active:""});for(var e in t)t[e]||delete t[e];this.$router.push({query:t,path:"/stellenangebote"}).catch((function(){}))},setFilter:function(){this.filter={s:this.$route.query.s||"",anstellungsart:this.$route.query.anstellungsart||"",ort:this.$route.params.location||this.$route.query.ort||"",radius:parseInt(this.$route.query.radius)||null},this.berufsgruppe.active=this.getBerufsgruppeActive(),(this.filter.s||this.filter.anstellungsart||1===this.berufsgruppe.active.length||this.specialization.length>0)&&(this.showAdvancedSearch=!0)},toggleAll:function(t){this.specialization.active=t?this.specializationOptions.slice():[],this.getJobs()},resetFilter:function(){this.filter={s:"",anstellungsart:"",ort:"",radius:null},this.specialization={active:this.specializationOptions,visible:!1,allSelected:!0,indeterminate:!1},this.berufsgruppe.active=this.professionOptions.map((function(t){return t.value})),this.setQuery(),this.getJobs()},getBerufsgruppeActive:function(){var t=this,e=this.professionOptions.filter((function(e){return((Array.isArray(t.$route.query.berufsgruppe)?t.$route.query.berufsgruppe.join():t.$route.query.berufsgruppe)||"").toLowerCase().includes(e.value.toLowerCase())})).map((function(t){return t.value}));return 1===e.length?e:this.professionOptions.map((function(t){return t.value}))}}},_=z,C=(a("2d0e"),a("2877")),k=Object(C["a"])(_,n,i,!1,null,null,null);e["default"]=k.exports},caad:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").includes,r=a("44d2");n({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},ce98:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.auth.loggedIn&&t.$store.state.auth.user.isEmployee?a("b-button",{attrs:{to:"/user/job-newsletter"}},[t._v(t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]):a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:t.variant,size:t.size}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),a("BModal",{ref:"subscribe-newsletter-modal2",attrs:{id:"subscribe-newsletter-modal2","hide-footer":"","hide-header":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":t.state},on:{close:function(e){return t.$refs["subscribe-newsletter-modal2"].hide()}}})],1)],1)},i=[],r=a("2b0e"),s=a("6aac"),o=a("e6c7"),l=a("2c32");r["default"].component("BModal",s["a"]),r["default"].directive("b-modal",o["a"]);var c={name:"NewsletterSignUpModal",components:{NewsletterSignUpForm:l["a"]},props:{state:{type:String,default:""},variant:{type:String,default:"secondary"},size:{type:String,default:""}}},u=c,p=a("2877"),b=Object(p["a"])(u,n,i,!1,null,null,null);e["a"]=b.exports},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,r=a("1dde"),s=r("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e6c7:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var n=a("c637"),i=a("0056"),r=a("9bfa"),s=a("906c"),o=a("6b77"),l=a("7b1e"),c=a("d82f"),u=Object(o["d"])(n["R"],i["K"]),p="__bv_modal_directive__",b=function(t){var e=t.modifiers,a=void 0===e?{}:e,n=t.arg,i=t.value;return Object(l["n"])(i)?i:Object(l["n"])(n)?n:Object(c["h"])(a).reverse()[0]},d=function(t){return t&&Object(s["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(s["C"])("a, button",t)||t},f=function(t){t&&"BUTTON"!==t.tagName&&(Object(s["o"])(t,"role")||Object(s["E"])(t,"role","button"),"A"===t.tagName||Object(s["o"])(t,"tabindex")||Object(s["E"])(t,"tabindex","0"))},h=function(t,e,a){var n=b(e),l=d(t);if(n&&l){var c=function(t){var e=t.currentTarget;if(!Object(s["r"])(e)){var i=t.type,o=t.keyCode;"click"!==i&&("keydown"!==i||o!==r["e"]&&o!==r["l"])||a.context.$root.$emit(u,n,e)}};t[p]={handler:c,target:n,trigger:l},f(l),Object(o["b"])(l,"click",c,i["R"]),"BUTTON"!==l.tagName&&"button"===Object(s["h"])(l,"role")&&Object(o["b"])(l,"keydown",c,i["R"])}},g=function(t){var e=t[p]||{},a=e.trigger,n=e.handler;a&&n&&(Object(o["a"])(a,"click",n,i["R"]),Object(o["a"])(a,"keydown",n,i["R"]),Object(o["a"])(t,"click",n,i["R"]),Object(o["a"])(t,"keydown",n,i["R"])),delete t[p]},m=function(t,e,a){var n=t[p]||{},i=b(e),r=d(t);i===n.target&&r===n.trigger||(g(t,e,a),h(t,e,a)),f(r)},v=function(){},w={inserted:m,updated:v,componentUpdated:m,unbind:g}}}]);
//# sourceMappingURL=jobboard-legacy.e6db2663.js.map