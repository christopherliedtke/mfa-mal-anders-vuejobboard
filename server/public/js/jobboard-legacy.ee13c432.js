(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobboard"],{2532:function(e,t,a){"use strict";var n=a("23e7"),i=a("e330"),r=a("5a34"),s=a("1d80"),l=a("577e"),o=a("ab13"),c=i("".indexOf);n({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~c(l(s(this)),l(r(e)),arguments.length>1?arguments[1]:void 0)}})},"2a70":function(e,t,a){},"2d0e":function(e,t,a){"use strict";a("7f45")},"32af":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"card shadow1"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{fluid:"",top:"",srcset:"\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_350.jpg 350w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_579.jpg 579w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_782.jpg 782w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg 1200w\n    ",sizes:"(max-width: 768px) 100vw, 50vw",src:"/img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg",alt:"Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000","blank-color":"#f7f6f9"}}),a("div",{staticClass:"card-body text-center"},[a("h3",{staticClass:"h4 card-title"},[e._v(" Alternative Jobs und Berufsbilder für MFA / ZFA ")]),a("p",{staticClass:"card-text"},[e._v(" Hier findest Du eine Auswahl von ganz unterschiedlichen Jobs und Berufen inklusive vieler Alternativen für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte | ArzthelferInnen! ")]),a("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder",variant:"primary"}},[e._v("Mehr erfahren!")])],1)],1)},i=[],r={name:"BannerProfessions"},s=r,l=a("2877"),o=Object(l["a"])(s,n,i,!1,null,null,null);t["a"]=o.exports},4186:function(e,t,a){"use strict";a("2a70")},"4fef":function(e,t,a){e.exports=a.p+"img/calendar.beda8b1d.svg"},"7f45":function(e,t,a){},"8bfd":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[n("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[n("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:a("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),n("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[n("h3",{staticClass:"h6 bold mb-1"},[e._v(" Zum Fortbildungskatalog ")]),n("small",[e._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},i=[],r={name:"BannerTrainingCatalogueSmall"},s=r,l=a("2877"),o=Object(l["a"])(s,n,i,!1,null,null,null);t["a"]=o.exports},a15b:function(e,t,a){"use strict";var n=a("23e7"),i=a("e330"),r=a("44ad"),s=a("fc6a"),l=a("a640"),o=i([].join),c=r!=Object,u=l("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(e){return o(s(this),void 0===e?",":e)}})},b129:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jobboard"},[n("div",{staticClass:"title"},[n("h1",[n("strong",[e._v("Stellenangebote")]),e._v(" "),n("br"),n("span",{staticClass:"h4"},[e._v(e._s(1===e.berufsgruppe.active.length?e.berufsgruppe.active.join(" & "):e.professionOptions.map((function(e){return e.value})).join(" & "))+" Jobs "+e._s(e.filter.ort?" in "+e.filter.ort:""))])]),n("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:e.breadcrumbs}})],1),n("div",{staticClass:"container py-3 py-lg-4"},[n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col-12 col-lg-4 pt-2 px-2 pr-lg-5"},[n("b-form",{attrs:{id:"job-filter"},on:{submit:function(t){return t.preventDefault(),function(){e.getJobs(),e.setQuery()}.apply(null,arguments)}}},[n("label",{staticClass:"sr-only",attrs:{for:"location-jobboard"}},[e._v("Ort / PLZ")]),n("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"location-jobboard",type:"text",placeholder:"PLZ / Ort...",trim:"",lazy:"",formatter:e.capitalize},model:{value:e.filter.ort,callback:function(t){e.$set(e.filter,"ort",t)},expression:"filter.ort"}}),n("b-input-group-append",[n("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(t){return t.preventDefault(),function(){e.filter.ort="",e.getJobs(),e.setQuery()}.apply(null,arguments)}}},[n("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),n("span",{staticClass:"sr-only"},[e._v("Zurücksetzen")])])],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"radius"}},[e._v("Umkreisradius")]),n("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-bullseye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),n("path",{attrs:{d:"M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}}),n("path",{attrs:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}),n("path",{attrs:{d:"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"radius",type:"number",min:"15",step:"5",placeholder:"Umkreis...",debounce:"500",number:"",trim:"",lazy:""},model:{value:e.filter.radius,callback:function(t){e.$set(e.filter,"radius",t)},expression:"filter.radius"}}),n("b-input-group-append",[n("b-input-group-text",{staticClass:"bg-light text-muted px-2"},[e._v("km")]),n("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(t){return t.preventDefault(),function(){e.filter.radius=null,e.getJobs(),e.setQuery()}.apply(null,arguments)}}},[n("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),n("span",{staticClass:"sr-only"},[e._v("Zurücksetzen")])])],1)],1),n("div",{staticClass:"text-primary  mt-3 mb-2 ml-2",staticStyle:{cursor:"pointer"},on:{click:function(t){e.showAdvancedSearch=!e.showAdvancedSearch}}},[e._v(" Erweiterte Suche "),n("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":e.showAdvancedSearch}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),n("b-collapse",{staticClass:"mb-3",attrs:{id:"advanced-search"},model:{value:e.showAdvancedSearch,callback:function(t){e.showAdvancedSearch=t},expression:"showAdvancedSearch"}},[n("label",{staticClass:"sr-only",attrs:{for:"s-jobboard"}},[e._v("Suchbegriff")]),n("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})])])]},proxy:!0}])},[n("b-form-input",{class:e.filter.s?"border-secondary":"",attrs:{id:"s-jobboard",type:"text",placeholder:"Jobtitel, Stichwort...",lazy:""},model:{value:e.filter.s,callback:function(t){e.$set(e.filter,"s",t)},expression:"filter.s"}}),n("b-input-group-append",[n("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(t){return t.preventDefault(),function(){e.filter.s="",e.getJobs(),e.setQuery()}.apply(null,arguments)}}},[n("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),n("span",{staticClass:"sr-only"},[e._v("Zurücksetzen")])])],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"employmentType-jobboard"}},[e._v("Anstellungsart")]),n("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[n("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),n("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])])]},proxy:!0}])},[n("b-form-select",{attrs:{id:"employmentType-jobboard"},on:{change:function(){e.getJobs(),e.setQuery()}},model:{value:e.filter.anstellungsart,callback:function(t){e.$set(e.filter,"anstellungsart",t)},expression:"filter.anstellungsart"}},[n("b-form-select-option",{attrs:{value:""}},[e._v("Alle Anstellungsarten")]),e._l(e.employmentTypeOptions,(function(t){return n("b-form-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],2)],1),n("label",{staticClass:"mb-2 pl-2",attrs:{for:"profession-jobboard"}},[e._v("Berufsgruppe")]),n("b-form-group",{staticClass:"pl-2",attrs:{id:"profession-jobboard"}},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:e.professionOptions,size:"sm",stacked:""},on:{change:function(){e.getJobs(),e.setQuery()}},model:{value:e.berufsgruppe.active,callback:function(t){e.$set(e.berufsgruppe,"active",t)},expression:"berufsgruppe.active"}})],1),n("label",{staticClass:"mt-0 mb-2 pl-2",staticStyle:{cursor:"pointer"},attrs:{for:"specialization-jobboard"},on:{click:function(t){e.specialization.visible=!e.specialization.visible}}},[e._v("Fachgebiete "),n("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":e.specialization.visible}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),n("BCollapse",{attrs:{visible:!0===e.specialization.visible,role:"tabpanel"}},[n("b-form-group",{staticClass:"pl-2",attrs:{id:"specialization-jobboard"},scopedSlots:e._u([{key:"label",fn:function(){return[n("b-form-checkbox",{attrs:{indeterminate:e.specialization.indeterminate,size:"sm",stacked:""},on:{change:e.toggleAll},model:{value:e.specialization.allSelected,callback:function(t){e.$set(e.specialization,"allSelected",t)},expression:"specialization.allSelected"}},[e._v(" "+e._s(e.specialization.allSelected?"Alle Abwählen":"Alle Auswählen")+" ")])]},proxy:!0}])},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:e.specializationOptions.map((function(e){return{text:e,value:e}})),size:"sm",stacked:""},on:{change:function(){e.getJobs()}},model:{value:e.specialization.active,callback:function(t){e.$set(e.specialization,"active",t)},expression:"specialization.active"}})],1)],1)],1),n("div",[n("span",{staticClass:"text-danger small ml-2",staticStyle:{cursor:"pointer"},on:{click:e.resetFilter}},[e._v("Filter zurücksetzen")])]),n("div",{staticClass:"mt-2"},[n("b-button",{attrs:{variant:"success",type:"submit",block:""}},[n("svg",{staticClass:"bi bi-search mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),e._v("Jobs finden")])],1)],1),n("div",{staticClass:"small text-right mt-2 mb-2 pr-3 pt-1"},[n("b-link",{attrs:{to:"/fuer-arbeitgeber"}},[e._v("Stellenanzeige schalten")])],1),n("div",{staticClass:"mt-3 mt-lg-5 text-right text-lg-left"},[e.$config.starredJobs.active&&e.$store.state.auth.loggedIn&&e.$store.state.starredJobs.starredJobs&&e.$store.state.starredJobs.starredJobs.length>0?n("b-button",{attrs:{to:"/user/gespeicherte-stellenanzeigen",variant:"outline-secondary",size:"sm"}},[e._v("Meine gespeicherten Jobs")]):n("NewsletterSignUpModal",{staticClass:"mt-2 mr-1 d-flex justify-content-end justify-content-lg-start",attrs:{size:"sm",variant:"secondary"}})],1),n("div",{staticClass:"d-none d-lg-block mt-5"},[n("BannerJobSeeksSmall"),n("SocialButtonFacebook",{staticClass:"mt-3 mr-1",attrs:{content:"Facebook",size:"sm"}}),n("SocialButtonInstagram",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}}),n("SocialButtonTwitter",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}})],1)],1),n("div",{staticClass:"col-12 col-lg-8 pt-2"},[e.errors&&e.errors.length>0?n("div",e._l(e.errors,(function(t,a){return n("p",{key:a},[e._v(" "+e._s(t.message)+" ")])})),0):e.jobs?e.jobs.length>0?n("div",{staticClass:"position-relative"},[n("JobSeekButton",{staticClass:"mt-3 mt-lg-0 mb-lg-3",attrs:{block:""}}),e._l(e.jobs,(function(e){return n("JobCard",{key:e._id,attrs:{job:e}})}))],2):0===e.count?n("div",[e._v(" Leider konnten für die Anfrage aktuell keine Stellenangebote gefunden werden. ")]):e._e():n("div",e._l(25,(function(e){return n("JobCardPlaceholder",{key:e,staticClass:"mb-3"})})),1),n("div",{staticClass:"d-flex justify-content-center"},[e.jobs&&e.jobs.length<e.count?n("button",{staticClass:"btn btn-secondary",on:{click:function(t){return e.loadMoreJobs()}}},[e._v(" Weitere Laden ")]):e.loading?n("BSpinner",{attrs:{variant:"primary",label:"Lade weitere Stellenanzeigen..."}}):e._e()],1),n("div",{staticClass:"my-4 clearfix"},[n("h2",{staticClass:"h5 bold mb-3"},[e._v("Ihr Stellenangebot hier?")]),n("b-img-lazy",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057"),alt:"Stellenanzeige wird auf MFA mal anders veröffentlicht","blank-width":"120"}}),n("p",[e._v(" Sie sind als attraktiver Arbeitgeber auf der Suche nach einer motivierten und kompetenten "),n("em",[e._v("Medizinischen Fachangestellten (MFA) | Zahnmedizinischen Fachangestellten (ZFA) | ArzthelferIn")]),e._v(e._s(e.$route.query.ort||e.$route.query.state?" in "+(e.$route.query.ort||e.$route.query.state):"")+"? Dann "),n("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[e._v("registrieren")]),e._v(" Sie sich und veröffentlichen Sie noch heute Ihr Stellenangebot auf "),n("em",[e._v("MFA mal anders")]),e._v(". "),n("br"),n("b-link",{staticClass:"bold",attrs:{to:"/fuer-arbeitgeber"}},[e._v("Mehr erfahren")])],1)],1)])])]),n("div",{staticClass:"container"},[n("BannerJobSeeksLarge",{staticClass:"mt-2 mt-lg-3"}),n("BannerTrainingCatalogueSmall",{staticClass:"d-lg-none mt-3"})],1),n("div",{staticClass:"container-fluid bg-light-shade my-4 my-lg-5 px-0"},[n("div",{staticClass:"container py-4 py-lg-5"},[n("h2",{staticClass:"lead bold"},[e._v(" "+e._s(e.berufsgruppe.active.some((function(e){return"MFA"==e}))?"Medizinische Fachangestellte":"")+" "+e._s(e.berufsgruppe.active.length>1?" & ":"")+" "+e._s(e.berufsgruppe.active.some((function(e){return"ZFA"==e}))?"Zahnmedizinische Fachangestellte":"")+" – Stellenangebote nach Stadt ")]),n("ul",{staticClass:"list-group list-group-flush mb-4"},e._l(e.cities,(function(t){return n("li",{key:t.slug,staticClass:"list-group-item bg-light-shade"},[n("b-link",{attrs:{to:"/jobs?ort="+t.slug+(1==e.berufsgruppe.active.length?"?berufsgruppe="+e.berufsgruppe.active[0]:"")},on:{click:function(){e.filter.ort=t.name,e.getJobs()}}},[e._v(e._s(e.berufsgruppe.active.length>0?e.berufsgruppe.active.join(" & "):"MFA & ZFA")+" Jobs in "+e._s(t.name)+" "),n("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1)})),0),n("h2",{staticClass:"lead bold mt-4"},[e._v(" Auf der Suche nach Stellenangeboten für Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)? ")]),n("p",[e._v(" Stellenangebote für Medizinische Fachangestellte und Zahnmedizinische Fachangestellte gibt es im Internet zur Genüge. Wenn Du als MFA & ZFA einen neuen Job suchst, könntest Du in kürzester Zeit einen neuen Arbeitsplatz antreten. Nicht nur die Arztpraxen und Zahnarztpraxen, auch andere Arbeitgeber im Gesundheitswesen suchen händeringend nach Personal und haben viele attraktive Stellenangebote für Medizinische Fachangestellte und Zahnmedizinische Fachangestellte zu bieten. Mit unseren "),n("router-link",{attrs:{to:"/blog/artikel/4-tipps-wie-du-die-richtige-stelle-fuer-Dich-findest"}},[n("strong",[e._v("4 Tipps, wie Du die richtige Stelle für Dich findest")])]),e._v(" zeigen wir Dir, worüber Du Dir im Vorhinein Gedanken machen und worauf Du bei der Stellensuche achten solltest. ")],1),n("p",[e._v(" Auf MFA mal anders findest Du passende Jobs für Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) von attraktiven Arbeitgebern in ganz Deutschland. Hier findest Du Stellenangebote in Vollzeit und Teilzeit in verschiedenen Fachgebieten. Außerdem hast Du die Möglichkeit, als ein "),n("router-link",{staticClass:"bold",attrs:{to:"/stellengesuche/info"}},[e._v("Stellengesuch als MFA | ZFA")]),e._v(" zu schalten und Dich von passenden Arbeitgebern ansprechen zu lassen. ")],1),n("h2",{staticClass:"lead bold mt-4"},[e._v(" Gehalt für Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) ")]),n("p",[e._v(" In unserem großen "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehaltsreport für MFA")]),e._v(" oder "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/zfa/gehalt"}},[e._v("ZFA")]),e._v(" bekommst Du alle relevanten Informationen zu Gehaltstarifverträgen, Gehalt nach Bundesländern, Gehalt in Teilzeit oder Vollzeit und noch viel mehr. Zusätzlich kannst Du mit dem "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/mfa/gehalt#gehaltsrechner"}},[e._v("Gehaltsrechner für MFA")]),e._v(" bzw. dem "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/zfa/gehalt#gehaltsrechner"}},[e._v("Gehaltsrechner für ZFA")]),e._v(" herausfinden, wie viel Gehalt Dir laut aktuellem Tarifvertrag im Jahr "+e._s((new Date).getFullYear())+" mindestens zusteht. ")],1),n("h2",{staticClass:"lead bold mt-4"},[e._v(" Häufige Fragen ")]),n("h3",{staticClass:"lead"},[e._v(" Welche Aufgaben hat man im Job als MFA? ")]),n("p",[e._v(" Je nachdem, wie eine Praxis organisiert ist sowie Praxisgröße und Fachrichtung, werden MFAs als Allrounder eingesetzt und erledigen quasi alle anfallenden Aufgaben in der Praxis. Neben der Sprechstundenorganisation und Patientenbetreuung, gibt es zahlreiche Tätigkeiten für eine MFA, die für den Patienten nicht ersichtlich sind. Der Beruf vereint bürokratische, organisatorische und medizinische Aufgaben. Mehr erfährst Du in unserem Artikel über "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/mfa/ausbildung-berufsbild"}},[e._v("Ausbildung und Berufsbild für Medizinische Fachangestellte")]),e._v(". ")],1),n("h3",{staticClass:"lead"},[e._v(" Welche Weiterbildungen kann man als MFA | ZFA machen? ")]),n("p",[e._v(" Als MFA | ZFA hast Du vielerlei Möglichkeiten Fortbildungen, Weiterbildungen bis hin zu einem Studium abzuschließen, um Deine Jobmöglichkeiten und Karriereperspektiven zu erweitern. In unserer großen "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/fort-und-weiterbildung"}},[e._v("Übersicht an Fortbildungen, Weiterbildungen & Studium")]),e._v(" findest Du verschiedenste Alternativen, bei denen auch für Dich sicherlich etwas dabei ist. ")],1),n("h3",{staticClass:"lead"},[e._v(" Welche alternativen Jobmöglichkeiten und Arbeitsorte gibt es für MFA & ZFA? ")]),n("p",[e._v(" In unserer Liste von "),n("router-link",{staticClass:"bold",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("50+ Alternativen Jobs und Berufsbildern")]),e._v(" findest Du eine Reihe von interessanten Möglichkeiten für MFA und ZFA. Von der Medizinischen Fachangestellten bei der Polizei, über die Arbeit als MFA | ZFA beim Gesundheitsamt bis hin zur Arbeit als SachbearbeiterIn bei einer Krankenkasse und viele weitere mehr, ist einiges dabei. ")],1)])]),n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-5 mb-3"},[n("div",{staticClass:"col-12 col-lg-8 mb-4"},[n("BannerTrainingCatalogueLarge")],1),n("div",{staticClass:"col-12 col-lg-4 mb-4"},[n("BannerProfessions")],1)]),n("div",{staticClass:"mt-5 mb-4"},[n("p",{staticClass:"small"},[e._v(" Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische Fachangestellte (MFA), Arzthelferin, Zahnmedizinische Fachangestellte (ZFA), ZMF, ZMV, MTRA in "),e._l(e.companyStateOptions,(function(t,a){return n("span",{key:t},[n("b-link",{attrs:{to:"/jobs?ort="+t.toLowerCase()},on:{click:function(){e.filter.ort=t,e.getJobs()}}},[e._v(e._s(t))]),a<e.companyStateOptions.length-1?n("span",[e._v(", ")]):e._e()],1)})),e._v(". ")],2)])]),n("ScrollTopButton"),n("Head",{attrs:{title:(1===e.berufsgruppe.active.length?e.professionOptions.filter((function(t){return t.value==e.berufsgruppe.active[0]&&t.text})).map((function(e){return e.text})).join(" & "):e.professionOptions.map((function(e){return e.value})).join(" & "))+" Stellenangebote"+(e.filter.ort?" | "+e.filter.ort:""),desc:"Aktuelle Jobs speziell für "+(e.berufsgruppe.active.includes("MFA")?"Medizinische Fachangestellte (MFA)":"")+(e.berufsgruppe.active.includes("MFA")&&e.berufsgruppe.active.includes("ZFA")?" & ":"")+(e.berufsgruppe.active.includes("ZFA")?"Zahnmedizinische Fachangestellte (ZFA)":"")+(0==e.berufsgruppe.active.length?"Medizinische Fachangestellte (MFA) & Zahnmedizinische Fachangestellte (ZFA)":"")+(e.filter.ort?" in "+e.filter.ort+" & Umgebung":"")+" | MFA mal anders",img:"",script:e.snippet}})],1)},i=[],r=a("5530"),s=a("2909");a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var o=a("1da1"),c=(a("96cf"),a("d81d"),a("dca8"),a("4de4"),a("99af"),a("8ba4"),a("a9e3"),a("a15b"),a("ac1f"),a("5319"),a("fb6a"),a("caad"),a("2532"),a("f303")),u=a("2b0e"),d=a("01e3"),b=a("5843"),p=a("1ba6"),h=a("9192"),g=a.n(h),f=a("c452"),m=a("b6d4"),v=a("5a56"),w=a("f401"),z=a("ff65"),y=a("32af"),_=a("8bfd"),k=a("f066"),C=a("9b81"),A=a("f93d"),x=a("ce98"),F=a("f179");u["default"].component("BSpinner",d["a"]),u["default"].component("BCollapse",b["a"]);var j=[{name:"Berlin",slug:"berlin"},{name:"Bochum",slug:"bochum"},{name:"Bonn",slug:"bonn"},{name:"Bremen",slug:"bremen"},{name:"Dortmund",slug:"dortmund"},{name:"Duisburg",slug:"duisburg"},{name:"Düsseldorf",slug:"duesseldorf"},{name:"Essen",slug:"essen"},{name:"Frankfurt am Main",slug:"frankfurt-am-main"},{name:"Hamburg",slug:"hamburg"},{name:"Hannover",slug:"hannover"},{name:"Köln",slug:"koeln"},{name:"München",slug:"muenchen"},{name:"Stuttgart",slug:"stuttgart"},{name:"Wuppertal",slug:"wuppertal"}],S={name:"JobBoard",components:{JobCard:f["a"],JobCardPlaceholder:m["a"],SocialButtonFacebook:v["a"],SocialButtonInstagram:w["a"],SocialButtonTwitter:z["a"],BannerProfessions:y["a"],BannerTrainingCatalogueSmall:_["a"],BannerTrainingCatalogueLarge:k["a"],BannerJobSeeksLarge:C["a"],BannerJobSeeksSmall:A["a"],NewsletterSignUpModal:x["a"],ScrollTopButton:c["a"],JobSeekButton:F["a"]},data:function(){return{jobs:null,count:0,loading:!1,filter:{s:"",anstellungsart:"",ort:"",radius:null},specialization:{active:p["l"],visible:!1,allSelected:!0,indeterminate:!1},berufsgruppe:{active:p["j"].map((function(e){return e.value}))},showAdvancedSearch:!1,employmentTypeOptions:Object.freeze(p["g"].filter((function(e){return"freelance"!==e.value}))),companyStateOptions:Object.freeze(p["d"]),specializationOptions:Object.freeze(p["l"]),professionOptions:Object.freeze(p["j"]),cities:Object.freeze(j),errors:null}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [\n                {\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "Home",\n                  "item": "https://www.mfa-mal-anders.de/"\n                },\n                {\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Jobs",\n                  "item": "https://www.mfa-mal-anders.de/jobs"\n                }\n                '.concat(this.filter.ort?',{\n                  "@type": "ListItem",\n                  "position": 3,\n                  "name": "'.concat(this.filter.ort,'",\n                  "item": "https://www.mfa-mal-anders.de/jobs/').concat(g()(this.filter.ort),'"\n                }'):"","  \n              ]\n            }")},{rel:"canonical",href:"".concat(this.$config.website.url).concat(this.canonical),id:"canonical"}]},breadcrumbs:function(){var e=[{text:"Home",href:"/"},{text:"Stellenangebote",href:"/jobs"}];return this.filter.ort&&(e.push({text:this.filter.ort,href:"/jobs/".concat(g()(this.filter.ort))}),1===this.berufsgruppe.active.length&&e.push({text:this.berufsgruppe.active[0].toUpperCase()})),e},canonical:function(){var e="/jobs";return this.filter.ort&&!this.loading&&(this.jobs?e+="/"+g()(this.filter.ort):e="/404"),e}},watch:{"specialization.active":function(e){0===e.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!1):e.length===this.specializationOptions.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!0):(this.specialization.indeterminate=!0,this.specialization.allSelected=!1)}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setFilter(),e.getJobs();case 2:case"end":return t.stop()}}),t)})))()},methods:{getJobs:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.length>0&&void 0!==e[0]?e[0]:null,i=e.length>1&&void 0!==e[1]?e[1]:null,1!=t.loading){a.next=4;break}return a.abrupt("return");case 4:return t.loading=!0,t.errors=null,t.jobs=i?t.jobs:null,a.prev=7,a.next=10,t.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(n,"\n                  skip: ").concat(i,'\n                  s: "').concat(t.filter.s,'"\n                  location: "').concat(t.filter.ort,'"\n                  radius: ').concat(Number.isInteger(t.filter.radius)?t.filter.radius:null,'\n                  employmentType: "').concat(t.filter.anstellungsart,'",\n                  specialization: "').concat(t.specialization.active.length===t.specializationOptions.length?"":"object"===l(t.specialization.active)?t.specialization.active.join("+"):t.specialization.active,'"\n                  profession: "').concat(t.berufsgruppe.active.length===t.professionOptions.length?"":"object"===l(t.berufsgruppe.active)?t.berufsgruppe.active.join("+"):t.berufsgruppe.active,'"\n                ) {\n                  jobs {\n                    _id\n                    title\n                    excerpt\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    simpleApplication\n                    slug\n                    refreshFrequency\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                  count\n                  location\n                }\n              }\n            ')}});case 10:if(r=a.sent,!r.data.errors){a.next=17;break}if(!r.data.errors.some((function(e){return"location"==e.extensions.argumentName}))){a.next=16;break}return t.errors=r.data.errors,t.loading=!1,a.abrupt("return");case 16:throw new Error;case 17:t.jobs=[].concat(Object(s["a"])(t.jobs||""),Object(s["a"])(r.data.data.publicJobs.jobs)),t.count=r.data.data.publicJobs.count,r.data.data.publicJobs.location&&(t.filter.ort=r.data.data.publicJobs.location),a.next=25;break;case 22:a.prev=22,a.t0=a["catch"](7),t.$root.$bvToast.toast("Beim Laden der Stellenangebote ist ein Fehler aufgetreten. Bitte versuche die Seite neu zu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 25:t.loading=!1;case 26:case"end":return a.stop()}}),a,null,[[7,22]])})))()},loadMoreJobs:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.jobs&&e.jobs.length<e.count)){t.next=3;break}return t.next=3,e.getJobs(void 0,e.jobs.length);case 3:case"end":return t.stop()}}),t)})))()},setQuery:function(){var e=Object(r["a"])(Object(r["a"])({},this.filter),{},{ort:g()(this.filter.ort),berufsgruppe:1===this.berufsgruppe.active.length?this.berufsgruppe.active:""});for(var t in e)e[t]||delete e[t];this.$router.replace({query:e,path:"/jobs"}).catch((function(){}))},setFilter:function(){this.filter={s:this.$route.query.s||"",anstellungsart:this.$route.query.anstellungsart||"",ort:this.capitalize("".concat(this.$route.params.location||this.$route.query.ort||"").concat(this.$route.query.state?" "+this.$route.query.state:"")).replace(/-/g," "),radius:parseInt(this.$route.query.radius)||null},this.berufsgruppe.active=this.getBerufsgruppeActive(),(this.filter.s||this.filter.anstellungsart||1===this.berufsgruppe.active.length||this.specialization.length>0)&&(this.showAdvancedSearch=!0)},toggleAll:function(e){this.specialization.active=e?this.specializationOptions.slice():[],this.getJobs()},resetFilter:function(){this.filter={s:"",anstellungsart:"",ort:"",radius:null},this.specialization={active:this.specializationOptions,visible:!1,allSelected:!0,indeterminate:!1},this.berufsgruppe.active=this.professionOptions.map((function(e){return e.value})),this.setQuery(),this.getJobs()},capitalize:function(e){return e.replace(/(^[a-z]| [a-z]|-[a-z])/g,(function(e){return e.toUpperCase()}))},getBerufsgruppeActive:function(){var e=this,t=this.professionOptions.filter((function(t){return(e.$route.path+(Array.isArray(e.$route.query.berufsgruppe)?e.$route.query.berufsgruppe.join():e.$route.query.berufsgruppe)).toLowerCase().includes(t.value.toLowerCase())})).map((function(e){return e.value}));return 1===t.length?t:this.professionOptions.map((function(e){return e.value}))}}},M=S,J=(a("2d0e"),a("2877")),O=Object(J["a"])(M,n,i,!1,null,null,null);t["default"]=O.exports},caad:function(e,t,a){"use strict";var n=a("23e7"),i=a("4d64").includes,r=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},ce98:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.$store.state.auth.loggedIn&&e.$store.state.auth.user.isEmployee?a("b-button",{attrs:{to:"/user/job-newsletter"}},[e._v(e._s(e.state?"Abonniere Jobs für "+e.state:"Abonniere den Job Newsletter"))]):a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:e.variant,size:e.size}},[e._v(" "+e._s(e.state?"Abonniere Jobs für "+e.state:"Abonniere den Job Newsletter"))]),a("BModal",{ref:"subscribe-newsletter-modal2",attrs:{id:"subscribe-newsletter-modal2","hide-footer":"","hide-header":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":e.state},on:{close:function(t){return e.$refs["subscribe-newsletter-modal2"].hide()}}})],1)],1)},i=[],r=a("2b0e"),s=a("6aac"),l=a("e6c7"),o=a("2c32");r["default"].component("BModal",s["a"]),r["default"].directive("b-modal",l["a"]);var c={name:"NewsletterSignUpModal",components:{NewsletterSignUpForm:o["a"]},props:{state:{type:String,default:""},variant:{type:String,default:"secondary"},size:{type:String,default:""}}},u=c,d=a("2877"),b=Object(d["a"])(u,n,i,!1,null,null,null);t["a"]=b.exports},d81d:function(e,t,a){"use strict";var n=a("23e7"),i=a("b727").map,r=a("1dde"),s=r("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},e6c7:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a("c637"),i=a("0056"),r=a("9bfa"),s=a("906c"),l=a("6b77"),o=a("7b1e"),c=a("d82f"),u=Object(l["d"])(n["R"],i["K"]),d="__bv_modal_directive__",b=function(e){var t=e.modifiers,a=void 0===t?{}:t,n=e.arg,i=e.value;return Object(o["n"])(i)?i:Object(o["n"])(n)?n:Object(c["h"])(a).reverse()[0]},p=function(e){return e&&Object(s["v"])(e,".dropdown-menu > li, li.nav-item")&&Object(s["C"])("a, button",e)||e},h=function(e){e&&"BUTTON"!==e.tagName&&(Object(s["o"])(e,"role")||Object(s["E"])(e,"role","button"),"A"===e.tagName||Object(s["o"])(e,"tabindex")||Object(s["E"])(e,"tabindex","0"))},g=function(e,t,a){var n=b(t),o=p(e);if(n&&o){var c=function(e){var t=e.currentTarget;if(!Object(s["r"])(t)){var i=e.type,l=e.keyCode;"click"!==i&&("keydown"!==i||l!==r["e"]&&l!==r["l"])||a.context.$root.$emit(u,n,t)}};e[d]={handler:c,target:n,trigger:o},h(o),Object(l["b"])(o,"click",c,i["R"]),"BUTTON"!==o.tagName&&"button"===Object(s["h"])(o,"role")&&Object(l["b"])(o,"keydown",c,i["R"])}},f=function(e){var t=e[d]||{},a=t.trigger,n=t.handler;a&&n&&(Object(l["a"])(a,"click",n,i["R"]),Object(l["a"])(a,"keydown",n,i["R"]),Object(l["a"])(e,"click",n,i["R"]),Object(l["a"])(e,"keydown",n,i["R"])),delete e[d]},m=function(e,t,a){var n=e[d]||{},i=b(t),r=p(e);i===n.target&&r===n.trigger||(f(e,t,a),g(e,t,a)),h(r)},v=function(){},w={inserted:m,updated:v,componentUpdated:m,unbind:f}},f066:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[a("div",{staticClass:"card-body d-flex flex-column justify-content-start align-items-start h-100 p-0"},[a("h2",{staticClass:"h1",domProps:{innerHTML:e._s(e.header)}}),a("p",{staticClass:"lead bold text-primary"},[e._v(" Finde jetzt den passenden Anbieter für Deinen nächsten Karriereschritt ")]),a("p",[e._v(" Egal ob online oder in Deiner Umgebung, für MFA oder ZFA, von Abrechnung über Praxismanagement bis hin zu Medizinstudium... In unserem Fortbildungskatalog findest Du garantiert Deine nächste Fort- oder Weiterbildung! ")]),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog",variant:"secondary"}},[e._v("Zum Fortbildungskatalog")])],1)])},i=[],r={name:"BannerTrainingCatalogueLarge",props:{header:{type:String,default:"<strong>Online Fortbildungskatalog</strong> <br> speziell für MFA & ZFA!"}}},s=r,l=(a("4186"),a("2877")),o=Object(l["a"])(s,n,i,!1,null,"1c462f20",null);t["a"]=o.exports}}]);
//# sourceMappingURL=jobboard-legacy.ee13c432.js.map