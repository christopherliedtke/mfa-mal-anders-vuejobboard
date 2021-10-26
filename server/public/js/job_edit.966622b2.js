(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job_edit"],{"0f1a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-job container py-5"},[a("h2",[e._v("Stellenanzeige bearbeiten")]),a("JobForm",{attrs:{"api-jobs-schema":"admin"}})],1)},o=[],i=a("13e7"),r={name:"AdminEditJob",components:{JobForm:i["a"]}},s=r,l=a("2877"),c=Object(l["a"])(s,n,o,!1,null,null,null);t["default"]=c.exports},"13e7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-form position-relative"},[a("b-form",{attrs:{id:"job-form"}},[a("p",[e._v(" Bitte beachten Sie, dass mit * gekennzeichete Felder ausgefüllt werden müssen. ")]),a("label",{attrs:{for:"title",required:""}},[e._v("Titel")]),a("b-form-input",{attrs:{id:"title",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!(e.job.title&&e.job.title.length<=155):null,"aria-describedby":"title-help title-feedback",placeholder:"Titel der Stellenanzeige eingeben...",required:"",trim:""},model:{value:e.job.title,callback:function(t){e.$set(e.job,"title",t)},expression:"job.title"}}),a("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"title-feedback"}},[e._v(" Bitte nutzen Sie maximal 155 Zeichen. ")]),a("b-form-text",{staticClass:"ml-2",attrs:{id:"title-help"}},[a("span",{class:[{"text-danger":e.job.title.length>155}]},[e._v(" "+e._s(155-e.job.title.length)+" Zeichen verfügbar")])]),e.$store.state.auth.user.isAdmin?a("div",{staticClass:"bg-light-shade border-radius1 p-3 mt-3"},[a("h6",[e._v("ADMIN")]),a("label",{attrs:{for:"published-at"}},[e._v("publishedAt")]),a("BFormDatepicker",{attrs:{placeholder:"Veröffentlicht am..."},model:{value:e.publishedAt,callback:function(t){e.publishedAt=t},expression:"publishedAt"}}),a("label",{staticClass:"mt-2",attrs:{for:"paid-expires-at"}},[e._v("paidExpiresAt")]),a("BFormDatepicker",{attrs:{placeholder:"Zahlung läuft ab am..."},model:{value:e.paidExpiresAt,callback:function(t){e.paidExpiresAt=t},expression:"paidExpiresAt"}}),a("label",{staticClass:"mt-2",attrs:{for:"refresh-frequency"}},[e._v("refreshFrequency")]),a("b-form-input",{attrs:{type:"number",number:"",placeholder:"Anzeige wird nach X Tagen aktualisiert..."},model:{value:e.job.refreshFrequency,callback:function(t){e.$set(e.job,"refreshFrequency",t)},expression:"job.refreshFrequency"}})],1):e._e(),a("label",{attrs:{for:"profession"}},[e._v("Berufsgruppe")]),a("b-form-select",{attrs:{id:"profession",state:!!e.validated||null},model:{value:e.job.profession,callback:function(t){e.$set(e.job,"profession",t)},expression:"job.profession"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Alle --")]),e._l(e.professionOptions,(function(t){return a("b-form-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],2),a("label",{attrs:{for:"specialization"}},[e._v("Fachbereich Schwerpunkt")]),a("b-form-select",{attrs:{id:"specialization",state:!!e.validated||null},model:{value:e.job.specialization,callback:function(t){e.$set(e.job,"specialization",t)},expression:"job.specialization"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Fachbereich wählen --")]),e._l(e.specializationOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"employment-type",required:""}},[e._v("Anstellungsart")]),a("b-form-select",{attrs:{id:"employment-type",state:e.validated?!!e.job.employmentType:null},model:{value:e.job.employmentType,callback:function(t){e.$set(e.job,"employmentType",t)},expression:"job.employmentType"}},[a("b-form-select-option",{attrs:{value:"",disabled:""}},[e._v("-- Anstellungsart wählen --")]),e._l(e.employmentTypeOptions,(function(t){return a("b-form-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],2),a("label",{attrs:{for:"application-deadline"}},[e._v("Bewerbungsfrist "),a("small",[e._v("[Stellenanzeige geht nach diesem Datum automatisch offline]")])]),a("BFormDatepicker",{attrs:{id:"application-deadline",state:!!e.validated||null,placeholder:"Bewerbungsfrist wählen","reset-button":!0,"reset-value":"","label-reset-button":"Zurücksetzen"},model:{value:e.applicationDeadline,callback:function(t){e.applicationDeadline=t},expression:"applicationDeadline"}}),a("label",{attrs:{for:"simple-applcation"}},[e._v("Nur mit Lebenslauf bewerben")]),a("b-form-select",{attrs:{id:"simple-application",state:!!e.validated||null},model:{value:e.job.simpleApplication,callback:function(t){e.$set(e.job,"simpleApplication",t)},expression:"job.simpleApplication"}},e._l(e.simpleApplicationOptions,(function(t){return a("b-form-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),1),a("label",{attrs:{for:"description",required:""}},[e._v("Stellenbeschreibung")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.job.description},on:{"update-content":function(t){e.job.description=t}}}),a("label",{attrs:{for:"application-email"}},[e._v("E-Mail Adresse für Bewerbungen")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("@")])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"application-email",type:"email","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.job.applicationEmail||!(!e.job.applicationEmail&&!e.job.extJobUrl)&&null:null,placeholder:"karriere@ihr-unternehmen.de","aria-describedby":"application-email-feedback"},model:{value:e.job.applicationEmail,callback:function(t){e.$set(e.job,"applicationEmail",t)},expression:"job.applicationEmail"}}),a("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"application-email-feedback"}},[e._v(" Bitte E-Mail Adresse für Bewerbungen oder URL zur Bewerbung auf Bewerberportal angeben. ")])],1),a("label",{attrs:{for:"ext-job-url"}},[e._v("URL zur Bewerbung auf Ihrem Bewerberportal "),a("small",[e._v("[optional, wenn vorhanden]")])]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[a("svg",{staticClass:"bi bi-link-45deg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}}),a("path",{attrs:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"}})])])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"ext-job-url",type:"url","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.job.extJobUrl||!(!e.job.applicationEmail&&!e.job.extJobUrl)&&null:null,placeholder:"https://www.ihr-unternehmen.com/karriere/stelle/bewerben","aria-describedby":"ext-job-url-feedback"},model:{value:e.job.extJobUrl,callback:function(t){e.$set(e.job,"extJobUrl",t)},expression:"job.extJobUrl"}}),a("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"ext-job-url-feedback"}},[e._v(" Bitte E-Mail Adresse für Bewerbungen oder URL zur Bewerbung auf Bewerberportal angeben. ")])],1),a("label",{attrs:{for:"title-image"}},[e._v("Team/Praxis Bild "),a("small",[e._v("(jpg, png | max. 5MB)")])]),a("ImageUploader",{attrs:{id:"title-image",validated:e.validated,"image-url":e.job.imageUrl,width:1280,height:720,fit:"inside"},on:{"update-url":function(t){e.job.imageUrl=t}}}),e.$store.state.auth.user.isAdmin?a("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:e.job.imageUrl,callback:function(t){e.$set(e.job,"imageUrl",t)},expression:"job.imageUrl"}}):e._e(),a("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"150px",height:"150px"}},[e.job.imageUrl?a("b-img",{attrs:{src:e.job.imageUrl,fluid:""}}):a("svg",{staticClass:"bi bi-image p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}}),a("path",{attrs:{d:"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"}})])],1),a("div",{staticClass:"row row-cols-1 row-cols-md-2"},[a("div",{staticClass:"col"},[a("label",{attrs:{for:"min-salary"}},[e._v("Minimum Monatsgehalt "),a("small",[e._v("[optional]")])]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("€")])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"min-salary",type:"number",step:"1",state:e.validated&&!!e.job.salaryMin||null,placeholder:"Min. Monatsgehalt eingeben..."},model:{value:e.job.salaryMin,callback:function(t){e.$set(e.job,"salaryMin",t)},expression:"job.salaryMin"}})],1)],1),a("div",{staticClass:"col"},[a("label",{attrs:{for:"max-salary"}},[e._v("Maximum Monatsgehalt "),a("small",[e._v("[optional]")])]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("€")])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"max-salary",type:"number",step:"1",state:e.validated&&!!e.job.salaryMax||null,placeholder:"Max. Monatsgehalt eingeben..."},model:{value:e.job.salaryMax,callback:function(t){e.$set(e.job,"salaryMax",t)},expression:"job.salaryMax"}})],1)],1)]),a("h3",{staticClass:"mt-4"},[e._v("Kontakt für Bewerbungen")]),a("label",{attrs:{for:"contact-gender"}},[e._v("Anrede")]),a("b-form-select",{attrs:{id:"contact-gender",state:e.validated&&!!e.job.contactGender||null},model:{value:e.job.contactGender,callback:function(t){e.$set(e.job,"contactGender",t)},expression:"job.contactGender"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactGenderOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"contact-title"}},[e._v("Titel")]),a("b-form-select",{attrs:{id:"contact-title",state:e.validated&&!!e.job.contactTitle||null},model:{value:e.job.contactTitle,callback:function(t){e.$set(e.job,"contactTitle",t)},expression:"job.contactTitle"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"contact-first-name"}},[e._v("Vorname")]),a("b-form-input",{attrs:{id:"contact-first-name",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.job.contactFirstName||null,placeholder:"Vorname eingeben...",trim:""},model:{value:e.job.contactFirstName,callback:function(t){e.$set(e.job,"contactFirstName",t)},expression:"job.contactFirstName"}}),a("label",{attrs:{for:"contact-last-name"}},[e._v("Nachname")]),a("b-form-input",{attrs:{id:"contact-last-name",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.job.contactLastName||null,placeholder:"Nachname eingeben...",trim:""},model:{value:e.job.contactLastName,callback:function(t){e.$set(e.job,"contactLastName",t)},expression:"job.contactLastName"}}),a("label",{attrs:{for:"contact-position"}},[e._v("Position im Unternehmen")]),a("b-form-input",{attrs:{id:"contact-position",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.job.contactPosition||null,placeholder:"Position eingeben...",trim:""},model:{value:e.job.contactPosition,callback:function(t){e.$set(e.job,"contactPosition",t)},expression:"job.contactPosition"}}),a("label",{attrs:{for:"contact-email"}},[e._v("E-Mail Adresse")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("@")])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"contact-email",type:"email","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.job.contactEmail||null,placeholder:"kontakt@ihr-unternehmen.de",trim:""},model:{value:e.job.contactEmail,callback:function(t){e.$set(e.job,"contactEmail",t)},expression:"job.contactEmail"}})],1),a("label",{attrs:{for:"contact-phone"}},[e._v("Telefon")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[a("svg",{staticClass:"bi bi-phone",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"}}),a("path",{attrs:{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}})])])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"contact-phone",type:"tel","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.job.contactPhone||null,placeholder:"Telefonnummer eingeben..."},model:{value:e.job.contactPhone,callback:function(t){e.$set(e.job,"contactPhone",t)},expression:"job.contactPhone"}})],1),a("h3",{staticClass:"mt-4"},[e._v("Arbeitsort")]),a("div",{staticClass:"mt-3 d-flex align-items-end"},[a("div",[a("label",{attrs:{for:"company-list"}},[e._v("Vorhandenes Unternehmen wählen")]),a("b-form-select",{attrs:{id:"company-list"},on:{change:e.setCompany},model:{value:e.selectedCompanyId,callback:function(t){e.selectedCompanyId=t},expression:"selectedCompanyId"}},e._l(e.companies,(function(t){return a("b-form-select-option",{key:t._id,attrs:{value:t._id}},[e._v(e._s(t.name+" | "+t.location))])})),1)],1),a("b-button",{staticClass:"ml-2",attrs:{variant:"warning"},on:{click:function(t){return t.preventDefault(),e.resetCompany(t)}}},[e._v("Zurücksetzen")])],1),a("label",{attrs:{for:"company-name",required:""}},[e._v("Unternehmensname")]),a("b-form-input",{attrs:{id:"company-name",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.job.company.name:null,placeholder:"Unternehmensname eingeben...",trim:""},model:{value:e.job.company.name,callback:function(t){e.$set(e.job.company,"name",t)},expression:"job.company.name"}}),a("label",{attrs:{for:"company-street",required:""}},[e._v("Straße und Hausnummer")]),a("b-form-input",{attrs:{id:"company-street",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.job.company.street:null,placeholder:"Straße und Hausnummer eingeben...",required:"",trim:""},model:{value:e.job.company.street,callback:function(t){e.$set(e.job.company,"street",t)},expression:"job.company.street"}}),a("label",{attrs:{for:"company-zip-code",required:""}},[e._v("PLZ")]),a("b-form-input",{attrs:{id:"company-zip-code",type:"text",state:e.validated?!!e.job.company.zipCode:null,placeholder:"PLZ eingeben...",required:"",trim:""},model:{value:e.job.company.zipCode,callback:function(t){e.$set(e.job.company,"zipCode",t)},expression:"job.company.zipCode"}}),a("label",{attrs:{for:"company-location",required:""}},[e._v("Ort")]),a("b-form-input",{attrs:{id:"company-location",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.job.company.location:null,placeholder:"Ort eingeben...",required:"",trim:""},model:{value:e.job.company.location,callback:function(t){e.$set(e.job.company,"location",t)},expression:"job.company.location"}}),a("label",{attrs:{for:"company-country",required:""}},[e._v("Land")]),a("b-form-select",{attrs:{id:"company-country",state:e.validated?!!e.job.company.country:null},model:{value:e.job.company.country,callback:function(t){e.$set(e.job.company,"country",t)},expression:"job.company.country"}},[a("b-form-select-option",{attrs:{value:"",disabled:""}},[e._v("-- Land auswählen --")]),e._l(e.companyCountryOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"company-size"}},[e._v("Unternehmensgröße")]),a("b-form-select",{attrs:{id:"company-size",state:e.validated&&!!e.job.company.size||null},model:{value:e.job.company.size,callback:function(t){e.$set(e.job.company,"size",t)},expression:"job.company.size"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Unternehmensgröße auswählen --")]),e._l(e.companySizeOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"company-url"}},[e._v("Unternehmenswebseite")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[a("svg",{staticClass:"bi bi-link-45deg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}}),a("path",{attrs:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"}})])])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"company-url",type:"url","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.job.company.url||null,placeholder:"https://www.ihr-unternehmen.de"},model:{value:e.job.company.url,callback:function(t){e.$set(e.job.company,"url",t)},expression:"job.company.url"}})],1),a("label",{attrs:{for:"logo"}},[e._v("Logo "),a("small",[e._v("(jpg, png | max. 5MB)")])]),a("ImageUploader",{attrs:{id:"logo",validated:e.validated,"image-url":e.job.company.logoUrl,width:200,height:200,fit:"outside"},on:{"update-url":function(t){e.job.company.logoUrl=t}}}),e.$store.state.auth.user.isAdmin?a("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:e.job.company.logoUrl,callback:function(t){e.$set(e.job.company,"logoUrl",t)},expression:"job.company.logoUrl"}}):e._e(),a("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"55px",height:"55px"}},[e.job.company.logoUrl?a("b-img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:e.job.company.logoUrl,fluid:""}}):a("svg",{staticClass:"bi bi-box p-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"}})])],1),a("div",{staticClass:"d-flex justify-content-between my-4"},[a("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Abbrechen ")]),a("b-button",{attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Speichern ")])],1)],1),e.error?a("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)},o=[],i=a("67cc");const r={methods:{async saveJob(e,t,a=!1){try{const n=`\n                        mutation {\n                            ${e}(\n                                ${"updateJob"===e||"adminUpdateJob"===e?`_id: "${t._id}"`:""} \n                                title: "${t.title}"\n                                publishedAt: ${t.publishedAt}\n                                paidExpiresAt: ${t.paidExpiresAt}\n                                refreshFrequency: ${t.refreshFrequency}\n                                description: "${t.description.replace(/"/g,'\\"')}"\n                                profession: "${t.profession}"\n                                employmentType: "${t.employmentType}"\n                                applicationDeadline: ${t.applicationDeadline?new Date(new Date(new Date(t.applicationDeadline).setHours(23)).setMinutes(59)).setSeconds(59):null}\n                                simpleApplication: ${t.simpleApplication}\n                                specialization: "${t.specialization}"\n                                extJobUrl: "${!/^https?:\/\//i.test(t.extJobUrl)&&t.extJobUrl?"https://"+t.extJobUrl:t.extJobUrl}"\n                                applicationEmail: "${t.applicationEmail}"\n                                imageUrl: "${t.imageUrl}"\n                                salaryMin: "${t.salaryMin}"\n                                salaryMax: "${t.salaryMax}"\n                                contactGender: "${t.contactGender}"\n                                contactTitle: "${t.contactTitle}"\n                                contactFirstName: "${t.contactFirstName}"\n                                contactLastName: "${t.contactLastName}"\n                                contactPosition: "${t.contactPosition}"\n                                contactEmail: "${t.contactEmail}"\n                                contactPhone: "${t.contactPhone}"\n                                company: "${t.company._id}"\n                            ) {\n                                _id\n                            }\n                        }\n                    `,o=await this.$axios.post("/graphql",{query:n});if(o.data.errors)throw new Error("Error on saving the job!");return this.$gtag.event(e,{event_label:`${t.title} | ${t.company.state} - ${o.data.data[e]._id}`}),this.$root.$bvToast.toast("Die Stellenanzeige wurde erfolgreich gespeichert.",{title:"Stellenanzeige gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),a&&(this.hasHistory()?this.$router.go(-1):this.$router.push("/user/dashboard?tab=1")),{success:!0}}catch(n){return this.$root.$bvToast.toast("Beim Speichern der Stellenanzeige ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),{success:!1}}},hasHistory(){return window.history.length>2}}};var s=a("1ba6"),l=a("1d54"),c=a("5641"),p=a("c2f1"),m=a("2b0e");m["default"].component("BFormDatepicker",p["a"]);var d={name:"JobForm",components:{TipTapEditor:l["a"],ImageUploader:c["a"]},mixins:[i["a"],r],props:{apiJobsSchema:{type:String,default:"private"}},data(){return{job:{_id:this.$route.params.jobId,publishedAt:0,paidExpiresAt:0,refreshFrequency:0,title:"",description:"<p>[Für eine attraktive Stellenanzeige sollten Sie mindestens folgende Punkte berücksichtigen. Bitte ersetzen Sie den hier stehenden Text entsprechend.]</p><p>[Schreiben Sie eine kurze Einleitung zu Ihrem Unternehmen.]</p><h3>Was wir Ihnen bieten</h3><p>[Was bieten Sie potentiellen BewerberInnen?]</p><h3>Ihre Aufgaben</h3><p>[Welche Aufgaben sollen von potentiellen BewerberInnen durchgeführt werden?]</p><h3>Ihr Profil</h3><p>[Was sollen potentielle BewerberInnen mitbringen?]</p>",profession:"",specialization:"",employmentType:"",applicationDeadline:null,simpleApplication:!1,extJobUrl:"",applicationEmail:"",imageUrl:"",salaryMin:"",salaryMax:"",contactGender:"",contactTitle:"",contactFirstName:"",contactLastName:"",contactPosition:"",contactEmail:"",contactPhone:"",company:{_id:"",name:"",street:"",location:"",zipCode:"",state:"",country:s["a"][0],geoCodeLat:null,geoCodeLng:null,size:"",url:"",logoUrl:""}},companies:[],selectedCompanyId:"",professionOptions:s["g"],specializationOptions:s["i"],employmentTypeOptions:s["f"],simpleApplicationOptions:s["h"],contactGenderOptions:s["d"],contactTitleOptions:s["e"],companyCountryOptions:s["a"],companyStateOptions:s["c"],companySizeOptions:s["b"],validated:null,success:"",error:""}},computed:{publishedAt:{get(){return new Date(this.job.publishedAt)},set(e){this.job.publishedAt=new Date(e).getTime()}},paidExpiresAt:{get(){return new Date(this.job.paidExpiresAt)},set(e){this.job.paidExpiresAt=new Date(e).getTime()}},applicationDeadline:{get(){return this.job.applicationDeadline?new Date(this.job.applicationDeadline):""},set(e){this.job.applicationDeadline=e?new Date(e).getTime():null}},jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"myJob"}},created(){this.setAdminDates(),"new"!=this.$route.params.jobId&&this.getJob(this.$route.params.jobId),this.getCompanies()},methods:{setAdminDates(){this.$store.state.auth.user.isAdmin&&(this.publishedAt=new Date,this.paidExpiresAt=new Date((new Date).valueOf()+864e5*this.$config.payment.minDuration))},async getJob(e){this.$store.dispatch("setOverlay",!0);try{const t=await this.$axios.get("/graphql",{params:{query:`\n                              query {\n                                  ${this.jobQuery}(_id: "${e}") {\n                                      _id\n                                      publishedAt\n                                      paidExpiresAt\n                                      refreshFrequency\n                                      title\n                                      description\n                                      profession\n                                      employmentType\n                                      applicationDeadline\n                                      simpleApplication\n                                      specialization\n                                      extJobUrl\n                                      applicationEmail\n                                      imageUrl\n                                      salaryMin\n                                      salaryMax\n                                      contactGender\n                                      contactTitle\n                                      contactFirstName\n                                      contactLastName\n                                      contactPosition\n                                      contactEmail\n                                      contactPhone\n                                      company {\n                                          _id\n                                          name\n                                          street\n                                          location\n                                          zipCode\n                                          state\n                                          country\n                                          geoCodeLat\n                                          geoCodeLng\n                                          size\n                                          url\n                                          logoUrl\n                                      }\n                                  }\n                              }\n                          `}});t.data.data[this.jobQuery].company||(t.data.data[this.jobQuery].company={_id:"",name:"",street:"",location:"",zipCode:"",state:"",country:this.companyCountryOptions[0],geoCodeLat:null,geoCodeLng:null,size:"",url:"",logoUrl:""}),this.job=t.data.data[this.jobQuery],this.selectedCompanyId=this.job.company._id}catch(t){this.$root.$bvToast.toast("Beim Laden der Stellenanzeige ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},async getCompanies(){try{const e=await this.$axios.get("/graphql",{params:{query:"\n                              query {\n                                  myCompanies {\n                                      _id\n                                      name\n                                      street\n                                      location\n                                      zipCode\n                                      state\n                                      country\n                                      geoCodeLat\n                                      geoCodeLng\n                                      size\n                                      url\n                                      logoUrl\n                                  }\n                              }\n                          "}});this.companies=e.data.data.myCompanies.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0}))}catch(e){this.$root.$bvToast.toast("Beim Laden Ihrer erstellten Unternehmen ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}},async onSubmit(){if(this.error=!1,!this.formValidation())return this.error="Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!",null;let e;this.$store.dispatch("setOverlay",!0),e=this.job.company._id?"admin"===this.apiJobsSchema?"adminUpdateCompany":"updateCompany":"addCompany";const t=await this.saveCompany(e,this.job.company,!1);if(t.success){let e;this.job.company._id=t.companyId,e="new"===this.job._id?"private"===this.apiJobsSchema?"addJob":"adminAddJob":"private"===this.apiJobsSchema?"updateJob":"adminUpdateJob";const a=await this.saveJob(e,this.job,!0);this.success=a.success}this.$store.dispatch("setOverlay",!1)},formatter(e){return e.replaceAll('"',"'")},formValidation(){return this.validated=!0,!!(this.job.title&&!(this.job.title.length>155)&&this.job.description&&this.job.employmentType&&(this.job.applicationEmail||this.job.extJobUrl)&&this.job.company.name&&this.job.company.country&&this.job.company.location&&this.job.company.street&&this.job.company.zipCode)},resetCompany(){for(const e in this.job.company)this.job.company[e]="",this.selectedCompanyId=""},setCompany(){this.job.company=this.companies.find(e=>e._id===this.selectedCompanyId)}}},u=d,b=a("2877"),h=Object(b["a"])(u,n,o,!1,null,null,null);t["a"]=h.exports},"2b4a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-job container py-3 py-lg-5"},[a("h2",[e._v(" Stellenanzeige "+e._s("new"===e.$route.params.jobId?"erstellen":"bearbeiten")+" ")]),a("p",[e._v(" Bearbeiten Sie hier Ihre Stellenanzeige. "),a("strong",[e._v("Beachten Sie auch unsere "),a("b-link",{attrs:{href:"/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas",target:"_blank"}},[e._v("Tipps ")])],1),a("svg",{staticClass:"bi bi-info-circle-fill position-relative text-info",staticStyle:{top:"-5px",cursor:"pointer"},attrs:{id:"popover-job-ad-tipps",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}})]),a("BPopover",{attrs:{target:"popover-job-ad-tipps",triggers:"hover",placement:"bottomleft"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Tipps für Ihre Stellenanzeige")]},proxy:!0}])},[a("b-link",{attrs:{href:"/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas",target:"_blank"}},[e._v("Hier")]),e._v(" haben wir Ihnen aus unseren Erfahrungen einige Tipps für eine attraktive Stellenanzeige zusammengestellt. ")],1)],1),a("JobForm",{attrs:{"api-jobs-schema":"private"}})],1)},o=[],i=a("3828"),r=a("2b0e"),s=a("13e7");r["default"].component("BPopover",i["a"]);var l={name:"UserDashboardEditJob",components:{JobForm:s["a"]}},c=l,p=a("2877"),m=Object(p["a"])(c,n,o,!1,null,null,null);t["default"]=m.exports},"67cc":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));const n={data(){return{hereMaps:{apiKey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",platform:null,service:null}}},async created(){try{await this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js"),await Promise.all([this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js")]),this.initPlatform()}catch(e){}},methods:{async initPlatform(){this.hereMaps.platform=new window.H.service.Platform({apikey:this.hereMaps.apiKey}),this.hereMaps.service=this.hereMaps.platform.getSearchService()},async getHereLocation(e){let t={};try{const a=await this.hereMaps.service.geocode({q:e});t=a.items[0]}catch(a){}finally{return t}},async getHereLocationSuggestions(e,t=5,a="city"){let n=[];try{const o=await this.$axios.get("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?\n        ",{params:{query:e,maxresults:t,country:"DEU",language:"de",resultType:a,apiKey:this.hereMaps.apiKey}});n=o.data.suggestions}catch(o){}finally{return n}}}},o={mixins:[n],methods:{async saveCompany(e,t,a=!1){try{const n=await this.getHereLocation(`${t.street} ${t.location} ${t.zipCode} ${t.country}`);t.geoCodeLat=n.position&&n.position.lat?n.position.lat:this.$config.maps.defaultCenter.lat,t.geoCodeLng=n.position&&n.position.lng?n.position.lng:this.$config.maps.defaultCenter.lng,t.state=n.address&&n.address.state?n.address.state:"";const o=`\n          mutation {\n            ${e}(\n              ${"updateCompany"===e||"adminUpdateCompany"===e?`_id: "${t._id}",`:""} \n              name: "${t.name}", \n              street: "${t.street}"\n              location: "${t.location}", \n              zipCode: "${t.zipCode}"\n              state: "${t.state}", \n              country: "${t.country}", \n              geoCodeLat: ${t.geoCodeLat}, \n              geoCodeLng: ${t.geoCodeLng}, \n              size: "${t.size}"\n              url: "${!/^https?:\/\//i.test(t.url)&&t.url?"https://"+t.url:t.url}"\n              logoUrl: "${t.logoUrl}"\n            ) {\n              _id\n            }\n          }\n      `,i=await this.$axios.post("/graphql",{query:o});return i.data.data[e]._id?(this.$root.$bvToast.toast("Das Unternehmen wurde erfolgreich gespeichert.",{title:"Unternehmen gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),a&&(this.hasHistory&&"admin"===this.apiJobsSchema?this.$router.go(-1):this.$router.push("/user/dashboard?tab=2")),{success:!0,companyId:i.data.data[e]._id}):(this.error="Oh, da ist leider etwas schief gelaufen. Bitte versuchen Sie es noch einmal.",{success:!1})}catch(n){return this.$root.$bvToast.toast("Beim Speichern des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),{success:!1}}}}}},f07e:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){}}}]);
//# sourceMappingURL=job_edit.966622b2.js.map