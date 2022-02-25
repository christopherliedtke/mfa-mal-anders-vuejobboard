(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job-preview"],{"01e3":function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var s=a("2b0e"),i=a("b42e"),r=a("c637"),n=a("a723"),o=a("9b76"),l=a("365c"),c=a("cf75");function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b=Object(c["c"])({label:Object(c["b"])(n["s"]),role:Object(c["b"])(n["s"],"status"),small:Object(c["b"])(n["g"],!1),tag:Object(c["b"])(n["s"],"span"),type:Object(c["b"])(n["s"],"border"),variant:Object(c["b"])(n["s"])},r["X"]),h=s["default"].extend({name:r["X"],functional:!0,props:b,render:function(t,e){var a,s=e.props,r=e.data,n=e.slots,c=e.scopedSlots,b=n(),h=c||{},u=Object(l["b"])(o["o"],{},h,b)||s.label;return u&&(u=t("span",{staticClass:"sr-only"},u)),t(s.tag,Object(i["a"])(r,{attrs:{role:u?s.role||"status":null,"aria-hidden":u?null:"true"},class:(a={},d(a,"spinner-".concat(s.type),s.type),d(a,"spinner-".concat(s.type,"-sm"),s.small),d(a,"text-".concat(s.variant),s.variant),a)}),[u||t()])}})},"23b8":function(t,e,a){},2518:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobseek-card-placeholder p-4 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid",staticStyle:{"aspect-ratio":"1"},attrs:{width:"75px",height:"auto"}})],1),a("div",{staticClass:"col-9 col-md-10 order-1 pr-0 pr-md-2"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"40px"}}),a("BSkeleton",{staticClass:"border-radius1",attrs:{width:"200px",height:"18px"}}),a("div",{staticClass:"d-flex flex-wrap mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"150px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"200px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"160px",height:"16px"}})],1)],1)])])},i=[],r=a("2b0e"),n=a("0942");r["default"].component("BSkeleton",n["a"]);var o={name:"JobSeekCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},l=o,c=(a("74eb"),a("2877")),d=Object(c["a"])(l,s,i,!1,null,"3d8b2538",null);e["a"]=d.exports},"2d9a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobpage container py-5"},[t.error?a("div",[t._v(" "+t._s(t.error)+" ")]):t.job?a("Job",{attrs:{job:t.job}}):t.job?t._e():a("JobPlaceholder",{staticClass:"mb-5"})],1)},i=[],r=a("890f"),n=a("5298"),o={name:"UserJobPreview",components:{Job:r["a"],JobPlaceholder:n["a"]},data(){return{job:null,error:null}},watch:{"$route.params.jobId"(){this.getJob(this.$route.params.jobId)}},created(){this.getJob(this.$route.params.jobId)},methods:{async getJob(t){if(this.error=null,!t)throw new Error;this.job=null;try{const e=await this.$axios.get("/graphql",{params:{query:`\n                query {\n                  myJob(_id: "${t}") {\n                    _id\n                    updatedAt\n                    status\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              `}});if(e.data.errors)throw new Error;if(!e.data.data.myJob)return this.jobSeek={},void(this.error="Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.");this.job=e.data.data.myJob}catch(e){this.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}}},l=o,c=a("2877"),d=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=d.exports},"3d59":function(t,e,a){},"3dad":function(t,e,a){"use strict";a("829d")},5688:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobseek-placeholder"},[a("div",{staticClass:"row mb-4 mb-lg-5"},[a("div",{staticClass:"col-3 col-md-2 col-xl-2 order-2 order-md-1"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid",staticStyle:{"aspect-ratio":"1"},attrs:{width:"120px",height:"auto"}})],1),a("div",{staticClass:"col-9 col-md-10 col-xl-10 order-1 order-md-2 pr-0 pr-md-2"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",attrs:{height:"60px"}}),a("BSkeleton",{staticClass:"border-radius1",attrs:{width:"200px",height:"24px"}}),a("div",{staticClass:"d-flex flex-wrap mt-4"},[a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"150px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"200px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"160px",height:"16px"}})],1)],1)]),a("div",{staticClass:"mb-4"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",staticStyle:{"max-width":"300px"},attrs:{height:"30px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"98%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"97%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}})],1),a("div",{staticClass:"mb-4"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",staticStyle:{"max-width":"450px"},attrs:{height:"30px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"98%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"97%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}})],1),a("div",{staticClass:"mb-4"},[a("BSkeleton",{staticClass:"border-radius1 mb-3",staticStyle:{"max-width":"550px"},attrs:{height:"30px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"98%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"97%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}})],1),a("div",{staticClass:"d-flex justify-content-between mt-5"},[a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"100px",height:"39px"}}),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"185px",height:"39px"}})],1)])},i=[],r=a("2b0e"),n=a("0942");r["default"].component("BSkeleton",n["a"]);var o={name:"JobSeekPlaceholder",props:{compact:{type:Boolean,default:!1}}},l=o,c=(a("a8d0"),a("2877")),d=Object(c["a"])(l,s,i,!1,null,"163e4ce8",null);e["a"]=d.exports},"5cd8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobSeek?a("article",{staticClass:"job-seek"},[a("div",{staticClass:"row mb-4 mb-lg-5"},[a("div",{staticClass:"col-3 col-md-2 col-xl-2 order-2 order-md-1"},[t.jobSeek.imageUrl?a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1 mr-md-2",attrs:{src:t.jobSeek.imageUrl,alt:"Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"120",height:"120"}}):a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1 mr-md-2",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"120",height:"120"}})],1),a("div",{staticClass:"col-9 col-md-10 col-xl-10 order-1 order-md-2 pr-0 pr-md-2"},[a("h2",{staticClass:"h1 bold mb-1",staticStyle:{overflow:"hidden","word-wrap":"break-word"}},[t._v(" "+t._s(t.jobSeek.title)+" ")]),a("p",{staticClass:"lead text-muted mb-0"},[t._v(" "+t._s(t.jobSeek.publicFirstName)+" "+t._s(t.jobSeek.publicLastName)+" ")]),a("div",{staticClass:"meta mt-3"},[t.jobSeek.location?a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),a("span",[t._v(t._s(t.jobSeek.location)+" "),t.jobSeek.zipCode?a("span",[t._v("(PLZ: "+t._s(t.jobSeek.zipCode.substring(0,3))+"XX)")]):t._e()])]):t._e(),t.jobSeek.isZfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),a("span",[t._v("Abgeschlossene ZFA Ausbildung")])]):t._e(),t.jobSeek.isMfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),a("span",[t._v("Abgeschlossene MFA Ausbildung")])]):t._e(),a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",[t.jobSeek.partTime?a("span",[t._v("Teilzeit")]):t._e(),t.jobSeek.fullTime?a("span",[t.jobSeek.partTime?a("span",[t._v(" | ")]):t._e(),t._v("Vollzeit")]):t._e(),t.jobSeek.training?a("span",[t.jobSeek.fullTime?a("span",[t._v(" | ")]):t._e(),t._v("Ausbildung")]):t._e(),t.jobSeek.miniJob?a("span",[t.jobSeek.training?a("span",[t._v(" | ")]):t._e(),t._v("450€ Basis")]):t._e()])])])])]),a("div",[a("h3",{staticClass:"bold"},[t._v("Über mich")]),a("div",{domProps:{innerHTML:t._s(t.jobSeek.about)}}),t.jobSeek.experiences?a("div",[a("h3",{staticClass:"bold"},[t._v("Meine Berufserfahrung")]),a("div",{domProps:{innerHTML:t._s(t.jobSeek.experiences)}})]):t._e(),t.jobSeek.qualifications.length>0?a("div",[a("h4",{staticClass:"h5"},[t._v("Zusätzliche Qualifikationen & Weiterbildungen")]),a("ul",t._l(t.jobSeek.qualifications,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),t.jobSeek.tasks?a("div",[a("h3",{staticClass:"bold"},[t._v("Gesuchte Aufgabenbereiche")]),a("div",{domProps:{innerHTML:t._s(t.jobSeek.tasks)}})]):t._e(),t.jobSeek.salaryMin?a("div",{staticClass:"mt-4 mt-lg-5"},[a("p",[t._v(" Mein Gehaltswunsch: "+t._s(t.jobSeek.salaryMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))+"€ "),a("small",{staticClass:"text-muted"},[t._v("brutto, monatlich")])])]):t._e()]),a("div",{staticClass:"d-flex flex-wrap justify-content-between mt-4 mt-lg-5"},[a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-danger"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v(" Zurück ")]),t.$store.state.auth.loggedIn?t.showContactForm?t._e():a("b-button",{staticClass:"mt-2",attrs:{variant:"secondary",target:"_self",disabled:t.linkDisabled},on:{click:function(e){return e.preventDefault(),t.checkEmployer()}}},[t._v(" Jetzt Kontaktieren ")]):a("b-button",{staticClass:"mt-2",attrs:{variant:"secondary",to:"/auth/register",target:"_self",disabled:t.linkDisabled}},[t._v(" Jetzt Anmelden und Kontaktieren ")])],1),t.showContactForm?a("div",{staticClass:"mt-4"},[a("hr",{staticClass:"mb-4"}),t.loading?a("div",{staticClass:"d-flex justify-content-center"},[a("BSpinner",{attrs:{variant:"primary",label:"Lade Zahlungen..."}})],1):t.$store.state.auth.user.isEmployer?t.hasJobAdOnline?a("div",[a("JobSeekContactForm",{attrs:{name:t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,"job-seek-id":t.jobSeek._id}})],1):a("div",[a("p",[t._v(" Sie können nur als Arbeitgeber mit einer laufenden Stellenanzeige auf Stellengesuche reagieren. Bei Problemen nehmen Sie bitte "),a("b-link",{staticClass:"bold",attrs:{to:"/kontakt",target:"_blank"}},[t._v("Kontakt")]),t._v(" zu uns auf. ")],1),a("p",[t._v(" Erstellen Sie jetzt eine "),a("b-link",{staticClass:"bold",attrs:{to:"/user/stellenanzeigen",target:"_blank"}},[t._v("Stellenanzeige")]),t._v(". ")],1)]):a("div",[a("p",[t._v(" Sie können nur als registrierter und verifizierter Arbeitgeber auf Stellengesuche reagieren. Bei Problemen nehmen Sie bitte "),a("b-link",{staticClass:"bold",attrs:{to:"/kontakt",target:"_blank"}},[t._v("Kontakt")]),t._v(" zu uns auf. ")],1)])]):t._e()]):t._e()},i=[],r=a("2b0e"),n=a("01e3");r["default"].component("BSpinner",n["a"]);const o=()=>Promise.all([a.e("JobSeekContactForm~admin~job_edit~job_seek_edit~training_edit"),a.e("JobSeekContactForm")]).then(a.bind(null,"c8d0"));var l={name:"JobSeek",components:{JobSeekContactForm:o},props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}},data(){return{showContactForm:!1,hasJobAdOnline:!1,loading:!1}},methods:{async checkEmployer(){this.loading=!0,this.showContactForm=!0;try{const t=await Promise.all([this.$axios.get("/graphql",{params:{query:"\n                query {\n                  myPayments {\n                    _id\n                    status\n                    paymentExpiresAt\n                  }\n                }\n              "}}),this.$axios.get("/graphql",{params:{query:"\n                query {\n                  myJobs {\n                    _id\n                    paidExpiresAt\n                  }\n                }\n              "}})]),e=t[0],a=t[1];if(e.data.errors&&a.data.errors)throw new Error;(e.data.data.myPayments&&e.data.data.myPayments.some(t=>t.paymentExpiresAt>(new Date).getTime()&&"paid"===t.status)||a.data.data.myJobs&&a.data.data.myJobs.some(t=>t.paidExpiresAt>(new Date).getTime()))&&(this.hasJobAdOnline=!0)}catch(t){this.$root.$bvToast.toast("Beim Laden ist ein Fehler aufgetreten. Bitte versuchen Sie die Seite neu zu laden oder nehmen Sie ggfls. Kontakt über unser Kontaktformular zu uns auf.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.loading=!1}}},c=l,d=(a("d2c5"),a("2877")),b=Object(d["a"])(c,s,i,!1,null,"b6cdb88a",null);e["a"]=b.exports},"74eb":function(t,e,a){"use strict";a("23b8")},"829d":function(t,e,a){},"831f":function(t,e,a){},"9ff9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobSeek?a("article",[a("b-link",{staticClass:"card job-seek-card bg-light-shade border-radius2 shadow1 p-4 mb-3",attrs:{to:"/stellengesuche/gesuch/"+t.jobSeek._id+"/"+t.jobSeek.slug,target:"_self",disabled:t.linkDisabled}},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[t.jobSeek.imageUrl?a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",attrs:{src:t.jobSeek.imageUrl,alt:"Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"75",height:"75"}}):a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"75",height:"75"}})],1),a("div",{staticClass:"col-9 col-md-10  order-1 pr-0 pr-md-2"},[a("h3",{staticClass:"h4 bold mb-1",staticStyle:{overflow:"hidden","word-wrap":"break-word"}},[t._v(" "+t._s(t.jobSeek.title)+" ")]),a("p",{staticClass:"text-muted mb-0"},[t._v(" "+t._s(t.jobSeek.publicFirstName)+" "+t._s(t.jobSeek.publicLastName)+" ")]),a("div",{staticClass:"card-foot"},[t.jobSeek.location?a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),a("span",[t._v(t._s(t.jobSeek.location))])]):t._e(),t.jobSeek.isZfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),a("span",[t._v("Abgeschlossene ZFA Ausbildung")])]):t._e(),t.jobSeek.isMfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),a("span",[t._v("Abgeschlossene MFA Ausbildung")])]):t._e(),a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",[t.jobSeek.partTime?a("span",[t._v("Teilzeit")]):t._e(),t.jobSeek.fullTime?a("span",[t.jobSeek.partTime?a("span",[t._v(" | ")]):t._e(),t._v("Vollzeit")]):t._e(),t.jobSeek.training?a("span",[t.jobSeek.fullTime||t.jobSeek.partTime?a("span",[t._v(" | ")]):t._e(),t._v("Ausbildung")]):t._e(),t.jobSeek.miniJob?a("span",[t.jobSeek.fullTime||t.jobSeek.partTime||t.jobSeek.training?a("span",[t._v(" | ")]):t._e(),t._v("450€ Basis")]):t._e()])])])])])])])],1):t._e()},i=[],r={name:"JobSeekCard",props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}}},n=r,o=(a("3dad"),a("2877")),l=Object(o["a"])(n,s,i,!1,null,"97455698",null);e["a"]=l.exports},a8d0:function(t,e,a){"use strict";a("3d59")},c1b7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobpage container py-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8"},[a("JobSeekCard",{attrs:{"job-seek":t.jobSeek,"link-disabled":!0}}),t.jobSeek?t._e():a("JobSeekCardPlaceholder")],1)]),a("JobSeek",{staticClass:"mt-5",attrs:{"job-seek":t.jobSeek,"link-disabled":!0}}),t.jobSeek?t._e():a("JobSeekPlaceholder",{staticClass:"mt-5"})],1)},i=[],r=a("9ff9"),n=a("2518"),o=a("5cd8"),l=a("5688"),c={name:"AdminJobSeekPreview",components:{JobSeekCard:r["a"],JobSeekCardPlaceholder:n["a"],JobSeek:o["a"],JobSeekPlaceholder:l["a"]},data(){return{jobSeek:null}},created(){this.getJobSeek(this.$route.params.jobSeekId)},methods:{async getJobSeek(t){try{if(!t)throw new Error;const e=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                adminJobSeek(\n                  _id: "${t}"\n                ) {\n                  _id\n                  updatedAt\n                  title\n                  about\n                  experiences\n                  tasks\n                  isMfa\n                  isZfa\n                  qualifications\n                  partTime\n                  fullTime\n                  training\n                  miniJob\n                  salaryMin\n                  gender\n                  publicFirstName\n                  publicLastName\n                  imageUrl\n                  location\n                  zipCode\n                  slug\n                }\n              }\n            `}});if(e.data.errors)throw new Error;this.jobSeek=e.data.data.adminJobSeek}catch(e){this.$root.$bvToast.toast("Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}}},d=c,b=a("2877"),h=Object(b["a"])(d,s,i,!1,null,null,null);e["default"]=h.exports},d2c5:function(t,e,a){"use strict";a("831f")},f954:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobpage container py-5"},[t.error?a("div",[t._v(" "+t._s(t.error)+" ")]):t.job?a("Job",{attrs:{job:t.job}}):t.job?t._e():a("JobPlaceholder",{staticClass:"mb-5"})],1)},i=[],r=a("890f"),n=a("5298"),o={name:"AdminJobPreview",components:{Job:r["a"],JobPlaceholder:n["a"]},data(){return{job:null,error:null}},watch:{"$route.params.jobId"(){this.getJob(this.$route.params.jobId)}},created(){this.getJob(this.$route.params.jobId)},methods:{async getJob(t){if(this.error=null,!t)throw new Error;this.job=null;try{const e=await this.$axios.get("/graphql",{params:{query:`\n                query {\n                  adminJob(_id: "${t}") {\n                    _id\n                    updatedAt\n                    status\n                    publishedAt\n                    paidAt\n                    paid\n                    paidExpiresAt\n                    title\n                    description\n                    profession\n                    employmentType\n                    applicationDeadline\n                    simpleApplication\n                    extJobUrl\n                    applicationEmail\n                    imageUrl\n                    salaryMin\n                    salaryMax\n                    specialization\n                    contactGender\n                    contactTitle\n                    contactFirstName\n                    contactLastName\n                    contactPosition\n                    contactEmail\n                    contactPhone\n                    company {\n                      _id\n                      name\n                      street\n                      location\n                      zipCode\n                      state\n                      country\n                      geoCodeLat\n                      geoCodeLng\n                      size\n                      url\n                      logoUrl\n                      slug\n                    }\n                  }\n                }\n              `}});if(e.data.errors)throw new Error;if(!e.data.data.adminJob)return this.jobSeek={},void(this.error="Das Stellenangebot konnte nicht gefunden werden. Möglicherweise ist es bereits abgelaufen.");this.job=e.data.data.adminJob}catch(e){this.$root.$bvToast.toast("Beim Laden des Stellenangebots ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}}},l=o,c=a("2877"),d=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=job-preview.841e088b.js.map