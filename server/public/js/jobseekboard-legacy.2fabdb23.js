(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobseekboard"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var s=a("2b0e"),r=a("b42e"),i=a("c637"),n=a("a723"),l=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=Object(l["c"])({animation:Object(l["b"])(n["s"],"wave"),height:Object(l["b"])(n["s"]),size:Object(l["b"])(n["s"]),type:Object(l["b"])(n["s"],"text"),variant:Object(l["b"])(n["s"]),width:Object(l["b"])(n["s"])},i["Y"]),u=s["default"].extend({name:i["Y"],functional:!0,props:o,render:function(t,e){var a,s=e.data,i=e.props,n=i.size,l=i.animation,o=i.variant;return t("div",Object(r["a"])(s,{staticClass:"b-skeleton",style:{width:n||i.width,height:n||i.height},class:(a={},c(a,"b-skeleton-".concat(i.type),!0),c(a,"b-skeleton-animate-".concat(l),l),c(a,"bg-".concat(o),o),a)}))}})},1718:function(t,e,a){"use strict";a("c0b2")},"361b":function(t,e,a){},"36bd":function(t,e,a){},"408a":function(t,e,a){var s=a("e330");t.exports=s(1..valueOf)},4174:function(t,e,a){},"427c":function(t,e,a){"use strict";a("80cd")},"42b9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobseekboard"},[s("div",{staticClass:"title"},[s("h1",[s("strong",[t._v("Stellengesuche")]),t._v(" "),s("br"),s("span",{staticClass:"h4"},[t._v("Qualifizierte MFA & ZFA finden"+t._s(t.canonicalLocation?" in "+t.canonicalLocation:""))])]),s("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:t.breadcrumbs}})],1),s("div",{staticClass:"container py-3 py-lg-4"},[s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-12 col-lg-4 pt-2 pr-lg-5"},[s("b-form",{attrs:{id:"job-filter"},on:{submit:function(e){return e.preventDefault(),function(){t.getJobSeeks(),t.setQuery()}.apply(null,arguments)}}},[s("label",{staticClass:"sr-only",attrs:{for:"location"}},[t._v("Ort / PLZ")]),s("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[s("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])])]},proxy:!0}])},[s("b-form-input",{attrs:{id:"location",type:"text",placeholder:"PLZ oder Ort...",trim:"",lazy:"",formatter:t.capitalize},model:{value:t.filter.ort,callback:function(e){t.$set(t.filter,"ort",e)},expression:"filter.ort"}}),s("b-input-group-append",[s("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.ort="",t.getJobSeeks(),t.setQuery()}.apply(null,arguments)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),s("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),s("label",{staticClass:"sr-only",attrs:{for:"radius"}},[t._v("Umkreisradius")]),s("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[s("svg",{staticClass:"bi bi-bullseye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),s("path",{attrs:{d:"M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}}),s("path",{attrs:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}),s("path",{attrs:{d:"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])])]},proxy:!0}])},[s("b-form-input",{attrs:{id:"radius",type:"number",min:"15",step:"5",placeholder:"Umkreis...",debounce:"500",number:"",trim:"",lazy:""},model:{value:t.filter.radius,callback:function(e){t.$set(t.filter,"radius",e)},expression:"filter.radius"}}),s("b-input-group-append",[s("b-input-group-text",{staticClass:"bg-light text-muted px-2"},[t._v("km")]),s("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.radius=null,t.getJobSeeks(),t.setQuery()}.apply(null,arguments)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),s("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),s("div",{staticClass:"text-primary mt-3 mb-2 ml-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showAdvancedSearch=!t.showAdvancedSearch}}},[t._v(" Erweiterte Suche "),s("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":t.showAdvancedSearch}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),s("b-collapse",{staticClass:"mb-3",attrs:{id:"advanced-search"},model:{value:t.showAdvancedSearch,callback:function(e){t.showAdvancedSearch=e},expression:"showAdvancedSearch"}},[s("label",{staticClass:"sr-only",attrs:{for:"employmentType"}},[t._v("Anstellungsart")]),s("b-input-group",{staticClass:"mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[s("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),s("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])])]},proxy:!0}])},[s("b-form-select",{attrs:{id:"employmentType"},on:{change:function(){t.getJobSeeks(),t.setQuery()}},model:{value:t.filter.anstellungsart,callback:function(e){t.$set(t.filter,"anstellungsart",e)},expression:"filter.anstellungsart"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("Alle Anstellungsarten")]),t._l(t.employmentTypeOptions,(function(e){return s("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2)],1),s("b-form-group",{staticClass:"d-flex flex-wrap mt-2"},[s("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-mfa",name:"is-mfa",switch:""},on:{change:function(){t.getJobSeeks(),t.setQuery()}},model:{value:t.filter.isMfa,callback:function(e){t.$set(t.filter,"isMfa",e)},expression:"filter.isMfa"}},[t._v(" MFA Ausbildung ")]),s("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-zfa",name:"is-zfa",switch:""},on:{change:function(){t.getJobSeeks(),t.setQuery()}},model:{value:t.filter.isZfa,callback:function(e){t.$set(t.filter,"isZfa",e)},expression:"filter.isZfa"}},[t._v(" ZFA Ausbildung ")])],1)],1),s("div",[s("span",{staticClass:"text-danger small ml-2",staticStyle:{cursor:"pointer"},on:{click:t.resetFilter}},[t._v("Filter zurücksetzen")])]),s("div",{staticClass:"mt-2"},[s("b-button",{attrs:{variant:"success",type:"submit",block:""}},[s("svg",{staticClass:"bi bi-search mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),t._v("Stellengesuche finden")])],1)],1),s("div",{staticClass:"d-none d-lg-block my-5"},[s("BannerJobSeeksSmall"),s("SocialButtonFacebook",{staticClass:"mt-3 mr-1",attrs:{content:"Facebook",size:"sm"}}),s("SocialButtonInstagram",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}}),s("SocialButtonTwitter",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}})],1)],1),s("div",{staticClass:"col-12 col-lg-8 pt-2"},[t.errors?s("div",t._l(t.errors,(function(e,a){return s("p",{key:a},[t._v(" "+t._s(e.message)+" ")])})),0):t.jobSeeks?t.jobSeeks.length>0?s("div",[s("JobSeekButton",{staticClass:"mt-3 mt-lg-0 mb-3",attrs:{block:""}}),t._l(t.jobSeeks,(function(t){return s("JobSeekCard",{key:t._id,attrs:{"job-seek":t}})}))],2):0===t.count?s("div",[t._v(" Leider konnten für Ihre Anfrage aktuell keine Stellengesuche gefunden werden. ")]):t._e():s("div",t._l(25,(function(t){return s("JobSeekCardPlaceholder",{key:t})})),1),s("div",{staticClass:"d-flex justify-content-center"},[t.jobSeeks&&t.jobSeeks.length<t.count?s("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.loadMoreJobSeeks()}}},[t._v(" Weitere Laden ")]):t.loading?s("BSpinner",{attrs:{variant:"primary",label:"Lade weitere Stellengesuche..."}}):t._e()],1),s("div",{staticClass:"my-4 my-lg-5 clearfix"},[s("h2",{staticClass:"h5 bold mb-3"},[t._v(" Ihre Stellenanzeige auf MFA mal anders? ")]),s("b-img-lazy",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057"),alt:"Stellenanzeige wird auf MFA mal anders veröffentlicht","blank-width":"120"}}),s("p",[t._v(" Sie sind als attraktiver Arbeitgeber auf der Suche nach einer motivierten und kompetenten "),s("em",[t._v("Medizinischen Fachangestellten (MFA) | Zahnmedizinischen Fachangestellten (ZFA) | ArzthelferIn")]),t._v(t._s(t.$route.query.ort||t.$route.query.state?" in "+(t.$route.query.ort||t.$route.query.state):"")+"? Dann "),s("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[t._v("registrieren")]),t._v(" Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem Karriereportal. "),s("br"),s("b-link",{staticClass:"bold",attrs:{to:"/fuer-arbeitgeber"}},[t._v("Mehr erfahren")])],1)],1)])]),s("BannerJobSeeksLarge",{staticClass:"mb-4 mb-lg-5"}),s("ArticleListRandom")],1),s("ScrollTopButton"),s("Head",{attrs:{title:"Stellengesuche ArzthelferIn | MFA | ZFA"+(t.filter.ort?" in "+t.filter.ort:""),desc:"Stellengesuche von Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)"+(t.filter.ort?" in "+t.filter.ort+" & Umgebung":"")+" ✓ Teilzeit | Vollzeit",img:"/img/MfaMalAnders_Stellengesuche.jpg",script:t.snippet}})],1)},r=[],i=a("5530"),n=a("2909"),l=a("1da1"),c=(a("96cf"),a("dca8"),a("99af"),a("4de4"),a("d3b7"),a("8ba4"),a("a9e3"),a("a15b"),a("ac1f"),a("5319"),a("f303")),o=a("2b0e"),u=a("01e3"),d=a("5843"),b=a("1ba6"),h=a("9192"),f=a.n(h),p=a("46b0"),m=a("96f3"),g=a("f179"),v=a("b430"),w=a("9b81"),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"position-relative border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[s("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:a("dfcd"),alt:"Stellengesuche für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),s("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[s("router-link",{staticClass:"text-reset stretched-link",attrs:{to:"/stellengesuche/info"}},[s("h3",{staticClass:"h6 bold mb-1"},[t._v(" Stellengesuch schalten ")])]),s("small",[t._v(" Lass Dich von Arbeitgebern finden statt umgekehrt ")])],1)],1)])},S=[],x={name:"BannerJobSeeksSmall"},C=x,y=a("2877"),_=Object(y["a"])(C,k,S,!1,null,null,null),j=_.exports,z=a("5a56"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"instagram-btn",attrs:{variant:"primary",size:t.size,href:"https://www.instagram.com/mfa.mal.anders/",target:"_blank","aria-label":"Instagram"}},[a("svg",{class:["bi bi-instagram",{"mr-2":t.content}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}})]),t._v(" "+t._s(t.content)+" ")])},B=[],L={name:"SocialButtonInstagram",props:{content:{type:String,default:"Instagram"},size:{type:String,default:""}}},M=L,F=Object(y["a"])(M,A,B,!1,null,null,null),J=F.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-btn",attrs:{variant:"primary",size:t.size,href:"https://www.twitter.com/MfaMalAnders",target:"_blank","aria-label":"Twitter"}},[a("svg",{class:["bi bi-twitter",{"mr-2":t.content}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" "+t._s(t.content)+" ")])},I=[],T={name:"SocialButtonTwitter",props:{content:{type:String,default:"Twitter"},size:{type:String,default:""}}},$=T,N=Object(y["a"])($,O,I,!1,null,null,null),E=N.exports;o["default"].component("BSpinner",u["a"]),o["default"].component("BCollapse",d["a"]);var Z={name:"JobSeekBoard",components:{JobSeekCard:p["a"],JobSeekCardPlaceholder:m["a"],JobSeekButton:g["a"],ScrollTopButton:c["a"],ArticleListRandom:v["a"],BannerJobSeeksLarge:w["a"],BannerJobSeeksSmall:j,SocialButtonFacebook:z["a"],SocialButtonInstagram:J,SocialButtonTwitter:E},data:function(){return{title:"",jobSeeks:null,count:null,canonicalLocation:"",filter:{ort:"",radius:null,anstellungsart:"",isMfa:!1,isZfa:!1},showAdvancedSearch:!1,employmentTypeOptions:Object.freeze(b["g"]),loading:!1,errors:null}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [{\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },{\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellengesuche",\n                  "item": "https://www.mfa-mal-anders.de/stellengesuche"\n              }'.concat(this.canonicalLocation?',{"@type": "ListItem","position": 3,"name": "'+this.canonicalLocation+'","item": "https://www.mfa-mal-anders.de/stellengesuche/ort/'+f()(this.canonicalLocation)+'"}':"","]\n            }")},{rel:"canonical",href:"".concat("https://www.mfa-mal-anders.de").concat(this.canonical),id:"canonical"}]},breadcrumbs:function(){var t=[{text:"Home",to:"/"},{text:"Stellengesuche",to:"/stellengesuche"}];return this.canonicalLocation&&t.push({text:this.canonicalLocation,to:"/stellengesuche/ort/".concat(this.canonicalLocation.toLowerCase())}),t},canonical:function(){var t="/stellengesuche";return this.canonicalLocation&&!this.loading&&(this.jobSeeks?t+="/ort/"+f()(this.canonicalLocation):t="/404"),t}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setFilter(),t.getJobSeeks();case 2:case"end":return e.stop()}}),e)})))()},methods:{getJobSeeks:function(){var t=arguments,e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=t.length>0&&void 0!==t[0]?t[0]:null,r=t.length>1&&void 0!==t[1]?t[1]:null,!0!==e.loading){a.next=4;break}return a.abrupt("return");case 4:return e.loading=!0,e.jobSeeks=r?e.jobSeeks:null,e.errors=null,a.prev=7,a.next=10,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobSeeks(\n                    limit: ".concat(s,"\n                    skip: ").concat(r,'\n                    location: "').concat(e.filter.ort,'"\n                    radius: ').concat(Number.isInteger(e.filter.radius)?e.filter.radius:null,'\n                    employmentType: "').concat(e.filter.anstellungsart,'"\n                    isMfa: ').concat(e.filter.isMfa,"\n                    isZfa: ").concat(e.filter.isZfa,"\n                  ) {\n                  jobSeeks {\n                    _id\n                    title\n                    isMfa\n                    isZfa\n                    partTime\n                    fullTime\n                    training\n                    miniJob\n                    freelance\n                    publicFirstName\n                    publicLastName\n                    imageUrl\n                    location\n                    slug\n                  }\n                  count\n                  location {\n                    location\n                    zipCode\n                    country\n                  }\n                }\n              }\n            ")}});case 10:if(i=a.sent,!i.data.errors){a.next=18;break}if(!i.data.errors.some((function(t){return"location"==t.extensions.argumentName}))){a.next=17;break}return e.errors=i.data.errors,e.loading=!1,e.canonicalLocation=e.filter.ort,a.abrupt("return");case 17:throw new Error;case 18:e.jobSeeks=[].concat(Object(n["a"])(e.jobSeeks||""),Object(n["a"])(i.data.data.publicJobSeeks.jobSeeks)),e.count=i.data.data.publicJobSeeks.count,i.data.data.publicJobSeeks.location?(e.filter.ort=[i.data.data.publicJobSeeks.location.zipCode||"",i.data.data.publicJobSeeks.location.location||"",!i.data.data.publicJobSeeks.location.zipCode&&!i.data.data.publicJobSeeks.location.location&&i.data.data.publicJobSeeks.location.country||""].filter((function(t){return t})).join(" "),e.canonicalLocation=i.data.data.publicJobSeeks.location.location||""):e.canonicalLocation="",a.next=26;break;case 23:a.prev=23,a.t0=a["catch"](7),e.$root.$bvToast.toast("Beim Laden der Stellengesuche ist ein Fehler aufgetreten. Bitte versuchen Sie die Seite neu zu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 26:e.loading=!1;case 27:case"end":return a.stop()}}),a,null,[[7,23]])})))()},loadMoreJobSeeks:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.jobSeeks&&t.jobSeeks.length<t.count)){e.next=3;break}return e.next=3,t.getJobSeeks(void 0,t.jobSeeks.length);case 3:case"end":return e.stop()}}),e)})))()},setQuery:function(){var t=Object(i["a"])(Object(i["a"])({},this.filter),{},{ort:f()(this.filter.ort)});for(var e in t)t[e]||delete t[e];this.$router.replace({query:t,path:"/stellengesuche"}).catch((function(){}))},setFilter:function(){this.filter=Object(i["a"])(Object(i["a"])({},this.filter),{},{ort:this.capitalize("".concat(this.$route.params.location||this.$route.query.ort||"")).replace(/-/g," "),radius:parseInt(this.$route.query.radius)||null,anstellungsart:this.$route.query.anstellungsart||"",isMfa:!!this.$route.query.isMfa,isZfa:!!this.$route.query.isZfa}),(this.filter.radius||this.filter.anstellungsart||this.filter.isMfa||this.filter.isZfa)&&(this.showAdvancedSearch=!0)},resetFilter:function(){this.filter={ort:"",radius:null,anstellungsart:"",isMfa:!1,isZfa:!1},this.setQuery(),this.getJobSeeks()},capitalize:function(t){return t.replace(/(^[a-z]| [a-z]|-[a-z])/g,(function(t){return t.toUpperCase()}))}}},V=Z,R=(a("90ab"),Object(y["a"])(V,s,r,!1,null,null,null));e["default"]=R.exports},"46b0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobSeek?a("article",[a("div",{staticClass:"card job-seek-card p-4 mb-3"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[t.jobSeek.imageUrl?a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",attrs:{src:t.jobSeek.imageUrl,alt:"Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"75",height:"75"}}):a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"75",height:"75"}})],1),a("div",{staticClass:"col-9 col-md-10 order-1 pr-0 pr-md-2 position-static"},[a("b-link",{staticClass:" stretched-link",attrs:{to:"/stellengesuche/gesuch/"+t.jobSeek._id+"/"+t.jobSeek.slug,target:"_self",disabled:t.linkDisabled}},[a("h3",{staticClass:"h4 bold mb-1 text-break",staticStyle:{"font-weight":"700"}},[t._v(" "+t._s(t.jobSeek.title)+" ")])]),a("p",{staticClass:"text-muted mb-0"},[t._v(" "+t._s(t.jobSeek.publicFirstName)+" "+t._s(t.jobSeek.publicLastName)+" ")]),a("div",{staticClass:"card-foot"},[t.jobSeek.location?a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),a("span",[t._v(t._s(t.jobSeek.location))])]):t._e(),t.jobSeek.isZfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),a("span",[t._v("Abgeschlossene ZFA Ausbildung")])]):t._e(),t.jobSeek.isMfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),a("span",[t._v("Abgeschlossene MFA Ausbildung")])]):t._e(),a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",[t.jobSeek.partTime?a("span",[t._v("Teilzeit")]):t._e(),t.jobSeek.fullTime?a("span",[t.jobSeek.partTime?a("span",[t._v(" | ")]):t._e(),t._v("Vollzeit")]):t._e(),t.jobSeek.training?a("span",[t.jobSeek.fullTime||t.jobSeek.partTime?a("span",[t._v(" | ")]):t._e(),t._v("Ausbildung")]):t._e(),t.jobSeek.miniJob?a("span",[t.jobSeek.fullTime||t.jobSeek.partTime||t.jobSeek.training?a("span",[t._v(" | ")]):t._e(),t._v("520€ Basis")]):t._e(),t.jobSeek.freelance?a("span",[t.jobSeek.fullTime||t.jobSeek.partTime||t.jobSeek.training||t.jobSeek.miniJob?a("span",[t._v(" | ")]):t._e(),t._v("Freie Mitarbeit")]):t._e()])])])],1)])])])]):t._e()},r=[],i={name:"JobSeekCard",props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}}},n=i,l=(a("c5c9"),a("2877")),c=Object(l["a"])(n,s,r,!1,null,"ab9a3858",null);e["a"]=c.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("e330"),r=a("1d80"),i=a("577e"),n=a("5899"),l=s("".replace),c="["+n+"]",o=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t){return function(e){var a=i(r(e));return 1&t&&(a=l(a,o,"")),2&t&&(a=l(a,u,"")),a}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5a56":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-btn",attrs:{variant:"primary",size:t.size,href:"https://www.facebook.com/MFAmalanders",target:"_blank","aria-label":"Facebook"}},[a("svg",{class:["bi bi-facebook",{"mr-2":t.content}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" ")])},r=[],i={name:"SocialButtonFacebook",props:{content:{type:String,default:"Facebook"},size:{type:String,default:""}}},n=i,l=a("2877"),c=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=c.exports},"5f2f":function(t,e,a){"use strict";a("4174")},"664b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},r=[],i=a("2b0e"),n=a("0942");i["default"].component("BSkeleton",n["a"]);var l={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,o=(a("dea4"),a("2877")),u=Object(o["a"])(c,s,r,!1,null,"30408d3e",null);e["a"]=u.exports},7156:function(t,e,a){var s=a("1626"),r=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var n,l;return i&&s(n=e.constructor)&&n!==a&&r(l=n.prototype)&&l!==a.prototype&&i(t,l),t}},"80cd":function(t,e,a){},"90ab":function(t,e,a){"use strict";a("36bd")},"96f3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobseek-card-placeholder p-4 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid",staticStyle:{"aspect-ratio":"1"},attrs:{width:"75px",height:"auto"}})],1),a("div",{staticClass:"col-9 col-md-10 order-1 pr-0 pr-md-2"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"40px"}}),a("BSkeleton",{staticClass:"border-radius1",attrs:{width:"200px",height:"18px"}}),a("div",{staticClass:"d-flex flex-wrap mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"150px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"200px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"160px",height:"16px"}})],1)],1)])])},r=[],i=a("2b0e"),n=a("0942");i["default"].component("BSkeleton",n["a"]);var l={name:"JobSeekCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,o=(a("5f2f"),a("2877")),u=Object(o["a"])(c,s,r,!1,null,"c6feeb66",null);e["a"]=u.exports},"9b81":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"position-static col-12 col-xl-9"},[a("router-link",{staticClass:"text-reset stretched-link",attrs:{to:"/stellengesuche/info"}},[a("h2",{staticClass:"display-4",staticStyle:{"font-weight":"800"},domProps:{innerHTML:t._s(t.header)}})]),a("p",{staticClass:"lead bold text-primary uppercase"},[t._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),a("p",[t._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),a("b-button",{attrs:{variant:"secondary"}},[t._v("Mehr erfahren")])],1)])])])},r=[],i={name:"BannerJobSeeksLarge",props:{header:{type:String,default:"Stellen&shy;gesuch schalten"}}},n=i,l=(a("427c"),a("2877")),c=Object(l["a"])(n,s,r,!1,null,"6c1f6352",null);e["a"]=c.exports},a9e3:function(t,e,a){"use strict";var s=a("83ab"),r=a("da84"),i=a("e330"),n=a("94ca"),l=a("6eeb"),c=a("1a2d"),o=a("7156"),u=a("3a9b"),d=a("d9b5"),b=a("c04e"),h=a("d039"),f=a("241c").f,p=a("06cf").f,m=a("9bf2").f,g=a("408a"),v=a("58a8").trim,w="Number",k=r[w],S=k.prototype,x=r.TypeError,C=i("".slice),y=i("".charCodeAt),_=function(t){var e=b(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,a,s,r,i,n,l,c,o=b(t,"number");if(d(o))throw x("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=v(o),e=y(o,0),43===e||45===e){if(a=y(o,2),88===a||120===a)return NaN}else if(48===e){switch(y(o,1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+o}for(i=C(o,2),n=i.length,l=0;l<n;l++)if(c=y(i,l),c<48||c>r)return NaN;return parseInt(i,s)}return+o};if(n(w,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var z,A=function(t){var e=arguments.length<1?0:k(_(t)),a=this;return u(S,a)&&h((function(){g(a)}))?o(Object(e),a,A):e},B=s?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;B.length>L;L++)c(k,z=B[L])&&!c(A,z)&&m(A,z,p(k,z));A.prototype=S,S.constructor=A,l(r,w,A)}},b430:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles&&t.articles.length>0?a("div",{staticClass:"row"},t._l(t.articles,(function(e){return a("ArticleCard",{key:e.slug,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number],attrs:{article:e}})})),1):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("ArticleCardPlaceholder",{key:e,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]})})),1)])},r=[],i=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),a("d4bc")),l=a("664b"),c={name:"ArticleListRandom",components:{ArticleCard:n["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:null}},watch:{$route:function(t,e){t!=e&&this.getArticles()}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getArticles();case 1:case"end":return e.stop()}}),e)})))()},methods:{getArticles:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                articles(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.articles){e.next=6;break}return e.abrupt("return");case 6:t.articles=a.data.data.articles,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},o=c,u=a("2877"),d=Object(u["a"])(o,s,r,!1,null,null,null);e["a"]=d.exports},c0b2:function(t,e,a){},c5c9:function(t,e,a){"use strict";a("361b")},d4bc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"stretched-link",attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("h4",{staticClass:"card-title"},[t._v(" "+t._s(t.article.title)+" ")])]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{"aria-label":t.article.title,variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])},r=[],i={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},n=i,l=(a("1718"),a("2877")),c=Object(l["a"])(n,s,r,!1,null,"60c7b624",null);e["a"]=c.exports},de4a:function(t,e,a){},dea4:function(t,e,a){"use strict";a("de4a")}}]);
//# sourceMappingURL=jobseekboard-legacy.2fabdb23.js.map