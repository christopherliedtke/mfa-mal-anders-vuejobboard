(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job-preview"],{"01e3":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var s=a("2b0e"),r=a("b42e"),i=a("c637"),n=a("a723"),o=a("9b76"),l=a("365c"),c=a("cf75");function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=Object(c["c"])({label:Object(c["b"])(n["s"]),role:Object(c["b"])(n["s"],"status"),small:Object(c["b"])(n["g"],!1),tag:Object(c["b"])(n["s"],"span"),type:Object(c["b"])(n["s"],"border"),variant:Object(c["b"])(n["s"])},i["X"]),u=s["default"].extend({name:i["X"],functional:!0,props:b,render:function(e,t){var a,s=t.props,i=t.data,n=t.slots,c=t.scopedSlots,b=n(),u=c||{},p=Object(l["b"])(o["o"],{},u,b)||s.label;return p&&(p=e("span",{staticClass:"sr-only"},p)),e(s.tag,Object(r["a"])(i,{attrs:{role:p?s.role||"status":null,"aria-hidden":p?null:"true"},class:(a={},d(a,"spinner-".concat(s.type),s.type),d(a,"spinner-".concat(s.type,"-sm"),s.small),d(a,"text-".concat(s.variant),s.variant),a)}),[p||e()])}})},"0942":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var s=a("2b0e"),r=a("b42e"),i=a("c637"),n=a("a723"),o=a("cf75");function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=Object(o["c"])({animation:Object(o["b"])(n["s"],"wave"),height:Object(o["b"])(n["s"]),size:Object(o["b"])(n["s"]),type:Object(o["b"])(n["s"],"text"),variant:Object(o["b"])(n["s"]),width:Object(o["b"])(n["s"])},i["W"]),d=s["default"].extend({name:i["W"],functional:!0,props:c,render:function(e,t){var a,s=t.data,i=t.props,n=i.size,o=i.animation,c=i.variant;return e("div",Object(r["a"])(s,{staticClass:"b-skeleton",style:{width:n||i.width,height:n||i.height},class:(a={},l(a,"b-skeleton-".concat(i.type),!0),l(a,"b-skeleton-animate-".concat(o),o),l(a,"bg-".concat(c),c),a)}))}})},"23b8":function(e,t,a){},2518:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobseek-card-placeholder p-4 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid",staticStyle:{"aspect-ratio":"1"},attrs:{width:"75px",height:"auto"}})],1),a("div",{staticClass:"col-9 col-md-10 order-1 pr-0 pr-md-2"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"40px"}}),a("BSkeleton",{staticClass:"border-radius1",attrs:{width:"200px",height:"18px"}}),a("div",{staticClass:"d-flex flex-wrap mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"150px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"200px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"160px",height:"16px"}})],1)],1)])])},r=[],i=a("2b0e"),n=a("0942");i["default"].component("BSkeleton",n["a"]);var o={name:"JobSeekCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},l=o,c=(a("74eb"),a("2877")),d=Object(c["a"])(l,s,r,!1,null,"3d8b2538",null);t["a"]=d.exports},"2d9a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobpage container py-5"},[e.error?a("div",[e._v(" "+e._s(e.error)+" ")]):e.job?a("Job",{attrs:{job:e.job}}):e.job?e._e():a("JobPlaceholder",{staticClass:"mb-5"})],1)},r=[],i=a("1da1"),n=(a("96cf"),a("890f")),o=a("5298"),l={name:"UserJobPreview",components:{Job:n["a"],JobPlaceholder:o["a"]},data:function(){return{job:null,error:null}},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},created:function(){this.getJob(this.$route.params.jobId)},methods:{getJob:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.error=null,e){a.next=3;break}throw new Error;case 3:return t.job=null,a.prev=4,a.next=7,t.$axios.get("/graphql",{params:{query:'\n                query {\n                  myJob(_id: "'.concat(e,'") {\n                    _id\n                    updatedAt\n                    status\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              ')}});case 7:if(s=a.sent,!s.data.errors){a.next=10;break}throw new Error;case 10:if(s.data.data.myJob){a.next=14;break}return t.jobSeek={},t.error="Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.",a.abrupt("return");case 14:t.job=s.data.data.myJob,a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](4),t.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 20:case"end":return a.stop()}}),a,null,[[4,17]])})))()}}},c=l,d=a("2877"),b=Object(d["a"])(c,s,r,!1,null,null,null);t["default"]=b.exports},"3d59":function(e,t,a){},"3dad":function(e,t,a){"use strict";a("829d")},"408a":function(e,t,a){var s=a("e330");e.exports=s(1..valueOf)},"4a6a":function(e,t,a){"use strict";a("fce0")},5688:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobseek-placeholder"},[a("div",{staticClass:"row mb-4 mb-lg-5"},[a("div",{staticClass:"col-3 col-md-2 col-xl-2 order-2 order-md-1"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid",staticStyle:{"aspect-ratio":"1"},attrs:{width:"120px",height:"auto"}})],1),a("div",{staticClass:"col-9 col-md-10 col-xl-10 order-1 order-md-2 pr-0 pr-md-2"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",attrs:{height:"60px"}}),a("BSkeleton",{staticClass:"border-radius1",attrs:{width:"200px",height:"24px"}}),a("div",{staticClass:"d-flex flex-wrap mt-4"},[a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"150px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"200px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"160px",height:"16px"}})],1)],1)]),a("div",{staticClass:"mb-4"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",staticStyle:{"max-width":"300px"},attrs:{height:"30px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"98%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"97%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}})],1),a("div",{staticClass:"mb-4"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",staticStyle:{"max-width":"450px"},attrs:{height:"30px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"98%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"97%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}})],1),a("div",{staticClass:"mb-4"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",staticStyle:{"max-width":"550px"},attrs:{height:"30px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"98%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"97%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}})],1),a("div",{staticClass:"d-flex justify-content-between mt-5"},[a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"100px",height:"39px"}}),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"185px",height:"39px"}})],1)])},r=[],i=a("2b0e"),n=a("0942");i["default"].component("BSkeleton",n["a"]);var o={name:"JobSeekPlaceholder",props:{compact:{type:Boolean,default:!1}}},l=o,c=(a("a8d0"),a("2877")),d=Object(c["a"])(l,s,r,!1,null,"163e4ce8",null);t["a"]=d.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var s=a("e330"),r=a("1d80"),i=a("577e"),n=a("5899"),o=s("".replace),l="["+n+"]",c=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),b=function(e){return function(t){var a=i(r(t));return 1&e&&(a=o(a,c,"")),2&e&&(a=o(a,d,"")),a}};e.exports={start:b(1),end:b(2),trim:b(3)}},"5cd8":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.jobSeek?a("article",{staticClass:"job-seek"},[a("div",{staticClass:"row mb-4 mb-lg-5"},[a("div",{staticClass:"col-3 col-md-2 col-xl-2 order-2 order-md-1"},[e.jobSeek.imageUrl?a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1 mr-md-2",attrs:{src:e.jobSeek.imageUrl,alt:"Bild von "+e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,width:"120",height:"120"}}):a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1 mr-md-2",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,width:"120",height:"120"}})],1),a("div",{staticClass:"col-9 col-md-10 col-xl-10 order-1 order-md-2 pr-0 pr-md-2"},[a("h2",{staticClass:"h1 bold mb-1",staticStyle:{overflow:"hidden","word-wrap":"break-word"}},[e._v(" "+e._s(e.jobSeek.title)+" ")]),a("p",{staticClass:"lead text-muted mb-0"},[e._v(" "+e._s(e.jobSeek.publicFirstName)+" "+e._s(e.jobSeek.publicLastName)+" ")]),a("div",{staticClass:"meta mt-3"},[e.jobSeek.location?a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),a("span",[e._v(e._s(e.jobSeek.location)+" "),e.jobSeek.zipCode?a("span",[e._v("(PLZ: "+e._s(e.jobSeek.zipCode.substring(0,3))+"XX)")]):e._e()])]):e._e(),e.jobSeek.isZfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),a("span",[e._v("Abgeschlossene ZFA Ausbildung")])]):e._e(),e.jobSeek.isMfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),a("span",[e._v("Abgeschlossene MFA Ausbildung")])]):e._e(),a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",[e.jobSeek.partTime?a("span",[e._v("Teilzeit")]):e._e(),e.jobSeek.fullTime?a("span",[e.jobSeek.partTime?a("span",[e._v(" | ")]):e._e(),e._v("Vollzeit")]):e._e(),e.jobSeek.training?a("span",[e.jobSeek.fullTime?a("span",[e._v(" | ")]):e._e(),e._v("Ausbildung")]):e._e(),e.jobSeek.miniJob?a("span",[e.jobSeek.training?a("span",[e._v(" | ")]):e._e(),e._v("450€ Basis")]):e._e()])])])])]),a("div",[a("h3",{staticClass:"bold"},[e._v("Über mich")]),a("div",{domProps:{innerHTML:e._s(e.jobSeek.about)}}),e.jobSeek.experiences?a("div",[a("h3",{staticClass:"bold"},[e._v("Meine Berufserfahrung")]),a("div",{domProps:{innerHTML:e._s(e.jobSeek.experiences)}})]):e._e(),e.jobSeek.qualifications.length>0?a("div",[a("h4",{staticClass:"h5"},[e._v("Zusätzliche Qualifikationen & Weiterbildungen")]),a("ul",e._l(e.jobSeek.qualifications,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),e.jobSeek.tasks?a("div",[a("h3",{staticClass:"bold"},[e._v("Gesuchte Aufgabenbereiche")]),a("div",{domProps:{innerHTML:e._s(e.jobSeek.tasks)}})]):e._e(),e.jobSeek.salaryMin?a("div",{staticClass:"mt-4 mt-lg-5"},[a("p",[e._v(" Mein Gehaltswunsch: "+e._s(e.jobSeek.salaryMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))+"€ "),a("small",{staticClass:"text-muted"},[e._v("brutto, monatlich")])])]):e._e()]),a("div",{staticClass:"d-flex flex-wrap justify-content-between mt-4 mt-lg-5"},[a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Zurück ")]),e.$store.state.auth.loggedIn?e.showContactForm?e._e():a("b-button",{staticClass:"mt-2",attrs:{variant:"secondary",target:"_self",disabled:e.linkDisabled},on:{click:function(t){return t.preventDefault(),e.checkEmployer()}}},[e._v(" Jetzt Kontaktieren ")]):a("b-button",{staticClass:"mt-2",attrs:{variant:"secondary",to:"/auth/register",target:"_self",disabled:e.linkDisabled}},[e._v(" Jetzt Anmelden und Kontaktieren ")])],1),e.showContactForm?a("div",{staticClass:"mt-4"},[a("hr",{staticClass:"mb-4"}),e.loading?a("div",{staticClass:"d-flex justify-content-center"},[a("BSpinner",{attrs:{variant:"primary",label:"Lade Zahlungen..."}})],1):e.$store.state.auth.user.isEmployer?e.hasJobAdOnline?a("div",[a("JobSeekContactForm",{attrs:{name:e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,"job-seek-id":e.jobSeek._id}})],1):a("div",[a("p",[e._v(" Sie können nur als Arbeitgeber mit einer laufenden Stellenanzeige auf Stellengesuche reagieren. Bei Problemen nehmen Sie bitte "),a("b-link",{staticClass:"bold",attrs:{to:"/kontakt",target:"_blank"}},[e._v("Kontakt")]),e._v(" zu uns auf. ")],1),a("p",[e._v(" Erstellen Sie jetzt eine "),a("b-link",{staticClass:"bold",attrs:{to:"/user/stellenanzeigen",target:"_blank"}},[e._v("Stellenanzeige")]),e._v(". ")],1)]):a("div",[a("p",[e._v(" Sie können nur als registrierter und verifizierter Arbeitgeber auf Stellengesuche reagieren. Bei Problemen nehmen Sie bitte "),a("b-link",{staticClass:"bold",attrs:{to:"/kontakt",target:"_blank"}},[e._v("Kontakt")]),e._v(" zu uns auf. ")],1)])]):e._e()]):e._e()},r=[],i=a("1da1"),n=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b0e")),o=a("01e3");n["default"].component("BSpinner",o["a"]);var l=function(){return a.e("JobSeekContactForm").then(a.bind(null,"c8d0"))},c={name:"JobSeek",components:{JobSeekContactForm:l},props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}},data:function(){return{showContactForm:!1,hasJobAdOnline:!1,loading:!1}},methods:{checkEmployer:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.showContactForm=!0,t.prev=2,t.next=5,Promise.all([e.$axios.get("/graphql",{params:{query:"\n                query {\n                  myPayments {\n                    _id\n                    status\n                    paymentExpiresAt\n                  }\n                }\n              "}}),e.$axios.get("/graphql",{params:{query:"\n                query {\n                  myJobs {\n                    _id\n                    paidExpiresAt\n                  }\n                }\n              "}})]);case 5:if(a=t.sent,s=a[0],r=a[1],!s.data.errors||!r.data.errors){t.next=10;break}throw new Error;case 10:(s.data.data.myPayments&&s.data.data.myPayments.some((function(e){return e.paymentExpiresAt>(new Date).getTime()&&"paid"===e.status}))||r.data.data.myJobs&&r.data.data.myJobs.some((function(e){return e.paidExpiresAt>(new Date).getTime()})))&&(e.hasJobAdOnline=!0),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),e.$root.$bvToast.toast("Beim Laden ist ein Fehler aufgetreten. Bitte versuchen Sie die Seite neu zu laden oder nehmen Sie ggfls. Kontakt über unser Kontaktformular zu uns auf.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 16:e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[2,13]])})))()}}},d=c,b=(a("d2c5"),a("2877")),u=Object(b["a"])(d,s,r,!1,null,"b6cdb88a",null);t["a"]=u.exports},7067:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.$config.starredJobs.active?a("span",{staticClass:"star text-secondary",style:"padding: "+e.padding+"; position: "+e.position,on:{click:function(t){return t.preventDefault(),e.toggleStar.apply(null,arguments)}}},[e.active?a("svg",{staticClass:"bi bi-star-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*e.size,height:15*e.size,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}})]):a("svg",{staticClass:"bi bi-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*e.size,height:15*e.size,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])]):e._e()},r=[],i=a("1da1"),n=(a("96cf"),a("a9e3"),a("d3b7"),{name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:Number,default:1}},data:function(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},mounted:function(){this.checkStarredJobs()},methods:{checkStarredJobs:function(){var e=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(t){return t.job===e.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.state.auth.loggedIn){t.next=3;break}return e.$store.commit("setStarJobModal",!0),t.abrupt("return");case 3:if(e.active){t.next=11;break}return e.active=!0,t.next=7,e.$store.dispatch("addStarredJob",e.jobId);case 7:e.$gtag.event("job_add_star",{event_label:e.jobId}),e.$matomo&&e.$matomo.trackEvent("engagement","job_add_star",e.jobId),t.next=16;break;case 11:return e.active=!1,t.next=14,e.$store.dispatch("deleteStarredJob",e.jobId);case 14:e.$gtag.event("job_delete_star",{event_label:e.jobId}),e.$matomo&&e.$matomo.trackEvent("engagement","job_delete_star",e.jobId);case 16:case"end":return t.stop()}}),t)})))()}}}),o=n,l=(a("4a6a"),a("2877")),c=Object(l["a"])(o,s,r,!1,null,"9d73bbf0",null);t["a"]=c.exports},7156:function(e,t,a){var s=a("1626"),r=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var n,o;return i&&s(n=t.constructor)&&n!==a&&r(o=n.prototype)&&o!==a.prototype&&i(e,o),e}},"74eb":function(e,t,a){"use strict";a("23b8")},"829d":function(e,t,a){},"831f":function(e,t,a){},"9ff9":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.jobSeek?a("article",[a("b-link",{staticClass:"card job-seek-card bg-light-shade border-radius2 shadow1 p-4 mb-3",attrs:{to:"/stellengesuche/gesuch/"+e.jobSeek._id+"/"+e.jobSeek.slug,target:"_self",disabled:e.linkDisabled}},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[e.jobSeek.imageUrl?a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",attrs:{src:e.jobSeek.imageUrl,alt:"Bild von "+e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,width:"75",height:"75"}}):a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,width:"75",height:"75"}})],1),a("div",{staticClass:"col-9 col-md-10  order-1 pr-0 pr-md-2"},[a("h3",{staticClass:"h4 bold mb-1",staticStyle:{overflow:"hidden","word-wrap":"break-word"}},[e._v(" "+e._s(e.jobSeek.title)+" ")]),a("p",{staticClass:"text-muted mb-0"},[e._v(" "+e._s(e.jobSeek.publicFirstName)+" "+e._s(e.jobSeek.publicLastName)+" ")]),a("div",{staticClass:"card-foot"},[e.jobSeek.location?a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),a("span",[e._v(e._s(e.jobSeek.location))])]):e._e(),e.jobSeek.isZfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),a("span",[e._v("Abgeschlossene ZFA Ausbildung")])]):e._e(),e.jobSeek.isMfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),a("span",[e._v("Abgeschlossene MFA Ausbildung")])]):e._e(),a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",[e.jobSeek.partTime?a("span",[e._v("Teilzeit")]):e._e(),e.jobSeek.fullTime?a("span",[e.jobSeek.partTime?a("span",[e._v(" | ")]):e._e(),e._v("Vollzeit")]):e._e(),e.jobSeek.training?a("span",[e.jobSeek.fullTime||e.jobSeek.partTime?a("span",[e._v(" | ")]):e._e(),e._v("Ausbildung")]):e._e(),e.jobSeek.miniJob?a("span",[e.jobSeek.fullTime||e.jobSeek.partTime||e.jobSeek.training?a("span",[e._v(" | ")]):e._e(),e._v("450€ Basis")]):e._e()])])])])])])])],1):e._e()},r=[],i={name:"JobSeekCard",props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}}},n=i,o=(a("3dad"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"97455698",null);t["a"]=l.exports},a8d0:function(e,t,a){"use strict";a("3d59")},a9e3:function(e,t,a){"use strict";var s=a("83ab"),r=a("da84"),i=a("e330"),n=a("94ca"),o=a("6eeb"),l=a("1a2d"),c=a("7156"),d=a("3a9b"),b=a("d9b5"),u=a("c04e"),p=a("d039"),h=a("241c").f,m=a("06cf").f,g=a("9bf2").f,f=a("408a"),v=a("58a8").trim,k="Number",S=r[k],w=S.prototype,x=r.TypeError,j=i("".slice),C=i("".charCodeAt),_=function(e){var t=u(e,"number");return"bigint"==typeof t?t:y(t)},y=function(e){var t,a,s,r,i,n,o,l,c=u(e,"number");if(b(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),t=C(c,0),43===t||45===t){if(a=C(c,2),88===a||120===a)return NaN}else if(48===t){switch(C(c,1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+c}for(i=j(c,2),n=i.length,o=0;o<n;o++)if(l=C(i,o),l<48||l>r)return NaN;return parseInt(i,s)}return+c};if(n(k,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var J,B=function(e){var t=arguments.length<1?0:S(_(e)),a=this;return d(w,a)&&p((function(){f(a)}))?c(Object(t),a,B):t},z=s?h(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;z.length>A;A++)l(S,J=z[A])&&!l(B,J)&&g(B,J,m(S,J));B.prototype=w,w.constructor=B,o(r,k,B)}},c1b7:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobpage container py-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8"},[a("JobSeekCard",{attrs:{"job-seek":e.jobSeek,"link-disabled":!0}}),e.jobSeek?e._e():a("JobSeekCardPlaceholder")],1)]),a("JobSeek",{staticClass:"mt-5",attrs:{"job-seek":e.jobSeek,"link-disabled":!0}}),e.jobSeek?e._e():a("JobSeekPlaceholder",{staticClass:"mt-5"})],1)},r=[],i=a("1da1"),n=(a("96cf"),a("9ff9")),o=a("2518"),l=a("5cd8"),c=a("5688"),d={name:"AdminJobSeekPreview",components:{JobSeekCard:n["a"],JobSeekCardPlaceholder:o["a"],JobSeek:l["a"],JobSeekPlaceholder:c["a"]},data:function(){return{jobSeek:null}},created:function(){this.getJobSeek(this.$route.params.jobSeekId)},methods:{getJobSeek:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e){a.next=3;break}throw new Error;case 3:return a.next=5,t.$axios.get("/graphql",{params:{query:'\n              query {\n                adminJobSeek(\n                  _id: "'.concat(e,'"\n                ) {\n                  _id\n                  updatedAt\n                  title\n                  about\n                  experiences\n                  tasks\n                  isMfa\n                  isZfa\n                  qualifications\n                  partTime\n                  fullTime\n                  training\n                  miniJob\n                  salaryMin\n                  gender\n                  publicFirstName\n                  publicLastName\n                  imageUrl\n                  location\n                  zipCode\n                  slug\n                }\n              }\n            ')}});case 5:if(s=a.sent,!s.data.errors){a.next=8;break}throw new Error;case 8:t.jobSeek=s.data.data.adminJobSeek,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),t.$root.$bvToast.toast("Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},b=d,u=a("2877"),p=Object(u["a"])(b,s,r,!1,null,null,null);t["default"]=p.exports},d2c5:function(e,t,a){"use strict";a("831f")},f954:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobpage container py-5"},[e.error?a("div",[e._v(" "+e._s(e.error)+" ")]):e.job?a("Job",{attrs:{job:e.job}}):e.job?e._e():a("JobPlaceholder",{staticClass:"mb-5"})],1)},r=[],i=a("1da1"),n=(a("96cf"),a("890f")),o=a("5298"),l={name:"AdminJobPreview",components:{Job:n["a"],JobPlaceholder:o["a"]},data:function(){return{job:null,error:null}},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},created:function(){this.getJob(this.$route.params.jobId)},methods:{getJob:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.error=null,e){a.next=3;break}throw new Error;case 3:return t.job=null,a.prev=4,a.next=7,t.$axios.get("/graphql",{params:{query:'\n                query {\n                  adminJob(_id: "'.concat(e,'") {\n                    _id\n                    updatedAt\n                    status\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              ')}});case 7:if(s=a.sent,!s.data.errors){a.next=10;break}throw new Error;case 10:if(s.data.data.adminJob){a.next=14;break}return t.jobSeek={},t.error="Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.",a.abrupt("return");case 14:t.job=s.data.data.adminJob,a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](4),t.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 20:case"end":return a.stop()}}),a,null,[[4,17]])})))()}}},c=l,d=a("2877"),b=Object(d["a"])(c,s,r,!1,null,null,null);t["default"]=b.exports},fce0:function(e,t,a){}}]);
//# sourceMappingURL=job-preview-legacy.95ee798b.js.map