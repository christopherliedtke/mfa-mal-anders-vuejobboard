(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job_seek_edit"],{"5b81":function(e,t,a){"use strict";var i=a("23e7"),n=a("da84"),s=a("c65b"),r=a("e330"),o=a("1d80"),l=a("1626"),c=a("44e7"),u=a("577e"),d=a("dc4a"),b=a("ad6d"),p=a("0cb2"),f=a("b622"),m=a("c430"),h=f("replace"),g=RegExp.prototype,v=n.TypeError,j=r(b),k=r("".indexOf),S=r("".replace),O=r("".slice),y=Math.max,_=function(e,t,a){return a>e.length?-1:""===t?a:k(e,t,a)};i({target:"String",proto:!0},{replaceAll:function(e,t){var a,i,n,r,b,f,x,T,w,C=o(this),I=0,A=0,$="";if(null!=e){if(a=c(e),a&&(i=u(o("flags"in g?e.flags:j(e))),!~k(i,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(n=d(e,h),n)return s(n,e,C,t);if(m&&a)return S(u(C),e,t)}r=u(C),b=u(e),f=l(t),f||(t=u(t)),x=b.length,T=y(1,x),I=_(r,b,0);while(-1!==I)w=f?u(t(b,I,r)):p(b,r,I,[],void 0,t),$+=O(r,A,I)+w,A=I+x,I=_(r,b,I+T);return A<r.length&&($+=O(r,A)),$}})},fc85:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-job container py-3 py-lg-5"},[a("h2",[e._v(" Stellengesuch "+e._s("new"===e.$route.params.jobSeekId?"erstellen":"bearbeiten")+" ")]),a("p",[e._v(" Bearbeite Dein Stellengesuch. Felder mit * sind Pflichtfelder. Nach dem Speichern ist das Stellengesuch nicht automatisch veröffentlicht. ")]),a("JobSeekForm",{staticClass:"mt-4"})],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-seek-form position-relative"},[a("b-form",{attrs:{id:"job-seek-form"}},[1===e.step||e.jobSeek._id||null!=e.validated?a("b-form-group",{staticClass:"mb-4 mb-lg-5"},[a("h3",{staticClass:"bold mb-0"},[e._v("Über Dich und Deine Stellensuche")]),a("label",{attrs:{for:"title",required:""}},[e._v("Titel des Stellengesuchs")]),a("b-form-input",{attrs:{id:"title",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!(e.jobSeek.title&&e.jobSeek.title.length<=155):null,"aria-describedby":"title-help title-feedback",placeholder:"Z. B. Erfahrene Abrechnungsmanagerin sucht 30h Stelle",required:"",trim:""},model:{value:e.jobSeek.title,callback:function(t){e.$set(e.jobSeek,"title",t)},expression:"jobSeek.title"}}),a("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"title-feedback"}},[e._v(" Bitte nutzen Sie maximal 155 Zeichen. ")]),a("b-form-text",{staticClass:"ml-2",attrs:{id:"title-help"}},[a("span",{class:[{"text-danger":e.jobSeek.title.length>155}]},[e._v(" "+e._s(155-e.jobSeek.title.length)+" Zeichen verfügbar")])]),a("label",{attrs:{for:"about",required:""}},[e._v("Über Mich")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.jobSeek.about,placeholder:"Wer bist Du? Warum bist Du auf Stellensuche? Hast Du spezielle Anforderungen (Wochenstunden, Arbeitszeiten, etc.) an Deinen neuen Job?"},on:{"update-content":function(t){e.jobSeek.about=t}}}),a("label",{attrs:{for:"experiences",required:""}},[e._v("Meine Berufserfahrung")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.jobSeek.experiences,placeholder:"In welchen Bereichen hast Du Berufserfahrung? Wofür warst Du in vergangenen bzw. Deiner aktuellen Anstellung verantwortlich? Was zeichnet Dich hier aus?"},on:{"update-content":function(t){e.jobSeek.experiences=t}}}),a("label",{attrs:{for:"tasks",required:""}},[e._v("Gewünschte Aufgabenbereiche")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.jobSeek.tasks,placeholder:"Welche Aufgabenbereiche möchtest Du gern übernehmen? An welchen Aufgabenbereichen bist Du ggfls. nicht interessiert?"},on:{"update-content":function(t){e.jobSeek.tasks=t}}}),a("label",{staticClass:"mb-0 mt-4"},[e._v("Abgeschlossene Ausbildung "),a("small",{staticClass:"text-muted"},[e._v("Sonstige abgeschlossene Ausbildungen bitte bei QUALIFIKATIONEN angeben")])]),a("div",{staticClass:"d-flex flex-wrap"},[a("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-mfa",name:"is-mfa"},model:{value:e.jobSeek.isMfa,callback:function(t){e.$set(e.jobSeek,"isMfa",t)},expression:"jobSeek.isMfa"}},[e._v(" Medizinische Fachangestellte (MFA) ")]),a("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-zfa",name:"is-zfa"},model:{value:e.jobSeek.isZfa,callback:function(t){e.$set(e.jobSeek,"isZfa",t)},expression:"jobSeek.isZfa"}},[e._v(" Zahnmedizinische Fachangestellte (ZFA) ")])],1),a("label",{staticClass:"mt-4",attrs:{for:"qualifications"}},[e._v("Qualifikationen, Abgeschlossene Weiterbildungen, etc. ")]),a("b-form-tags",{attrs:{state:e.validated&&e.jobSeek.qualifications.length>0||null,"input-id":"qualifications",placeholder:"Eingeben und Enter drücken...","duplicate-tag-text":"Doppelte Qualifikation(en)","tag-pills":"","remove-on-delete":"","tag-class":"text-light"},model:{value:e.jobSeek.qualifications,callback:function(t){e.$set(e.jobSeek,"qualifications",t)},expression:"jobSeek.qualifications"}}),a("label",{staticClass:"mt-4 mb-0",attrs:{for:"employmentTypes",required:""}},[e._v("Anstellungsarten ")]),a("div",{staticClass:"d-flex flex-wrap"},[a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"part-time",name:"part-time"},model:{value:e.jobSeek.partTime,callback:function(t){e.$set(e.jobSeek,"partTime",t)},expression:"jobSeek.partTime"}},[e._v(" Teilzeit ")]),a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"full-time",name:"full-time"},model:{value:e.jobSeek.fullTime,callback:function(t){e.$set(e.jobSeek,"fullTime",t)},expression:"jobSeek.fullTime"}},[e._v(" Vollzeit ")]),a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"training",name:"training"},model:{value:e.jobSeek.training,callback:function(t){e.$set(e.jobSeek,"training",t)},expression:"jobSeek.training"}},[e._v(" Ausbildung ")]),a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"mini-job",name:"mini-job"},model:{value:e.jobSeek.miniJob,callback:function(t){e.$set(e.jobSeek,"miniJob",t)},expression:"jobSeek.miniJob"}},[e._v(" 450€ – Basis ")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-4"},[a("label",{staticClass:"mt-4",attrs:{for:"min-salary"}},[e._v("Dein Gehaltswunsch "),a("small",{staticClass:"text-muted"},[e._v("(monatlich brutto)")])]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("€")])]},proxy:!0}],null,!1,3291831653)},[a("b-form-input",{attrs:{id:"min-salary",type:"number",step:"1",state:e.validated&&!!e.jobSeek.salaryMin||null,placeholder:"Min. Monatsgehalt eingeben...","aria-describedby":"min-salary-help"},model:{value:e.jobSeek.salaryMin,callback:function(t){e.$set(e.jobSeek,"salaryMin",t)},expression:"jobSeek.salaryMin"}})],1),a("b-form-text",{attrs:{id:"min-salary-help"}},[a("span",[e._v("Informiere Dich mit unserem "),a("b-link",{attrs:{to:"/karriere/"+(e.jobSeek.isZfa?"zfa":"mfa")+"/gehalt#gehaltsrechner",target:"_blank"}},[e._v("Gehaltsrechner")])],1)])],1)])],1):e._e(),0===e.step||e.jobSeek._id||null!=e.validated?a("b-form-group",{staticClass:"mb-4 mb-lg-5"},[a("h3",{staticClass:"bold mb-0"},[e._v("Persönliche Daten")]),a("b-form-checkbox",{attrs:{id:"anonymized",name:"anonymized","aria-describedby":"anonymized-help",switch:""},model:{value:e.jobSeek.anonymized,callback:function(t){e.$set(e.jobSeek,"anonymized",t)},expression:"jobSeek.anonymized"}},[e._v(" Meine Daten anonym veröffentlichen * ")]),a("b-form-text",{staticClass:"ml-2",attrs:{id:"anonymized-help"}},[e._v("Dein Name wird mit Initialien abgekürzt – z. B. M.M. statt Maxi Mustermann")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-3"},[a("label",{staticClass:"d-block",attrs:{for:"user-gender"}},[e._v("Anrede")]),a("b-form-select",{attrs:{id:"user-gender"},model:{value:e.jobSeek.gender,callback:function(t){e.$set(e.jobSeek,"gender",t)},expression:"jobSeek.gender"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"firstName",required:""}},[e._v("Vorname")]),a("b-form-input",{attrs:{id:"firstName",state:e.validated?!!e.jobSeek.firstName:null,type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:e.jobSeek.firstName,callback:function(t){e.$set(e.jobSeek,"firstName",t)},expression:"jobSeek.firstName"}})],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"lastName",required:""}},[e._v("Nachname")]),a("b-form-input",{attrs:{id:"lastName",state:e.validated?!!e.jobSeek.lastName:null,type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:e.jobSeek.lastName,callback:function(t){e.$set(e.jobSeek,"lastName",t)},expression:"jobSeek.lastName"}})],1),a("div",{staticClass:"col-12 col-lg-7"},[a("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("@")])]},proxy:!0}],null,!1,1351813257)},[a("b-form-input",{attrs:{id:"email",state:e.validated?!!e.$store.state.auth.user.email:null,type:"email",placeholder:"E-Mail Adresse eingeben...","aria-describedby":"email-help",autocomplete:"email",trim:"",disabled:""},model:{value:e.$store.state.auth.user.email,callback:function(t){e.$set(e.$store.state.auth.user,"email",t)},expression:"$store.state.auth.user.email"}})],1),a("b-form-text",{attrs:{id:"email-help"}},[e._v("Es wird Deine Account E-Mail Adresse genutzt. Diese kannst Du unter KONTO > ACCOUNT ändern. Deine E-Mail Adresse ist "),a("u",[e._v("nicht")]),e._v(" öffentlich ersichtlich. Nachrichten von Arbeitgebern werden über unsere Plattform an diese E-Mail Adresse weitergeleitet.")])],1)]),a("h5",{staticClass:"mt-4"},[e._v("Dein Wohnort")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-7 mb-2"},[a("label",{staticClass:"mt-0",attrs:{for:"location",required:""}},[e._v("Ort")]),a("b-form-input",{attrs:{id:"location",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.jobSeek.location:null,placeholder:"Ort eingeben...","aria-describedby":"location-help",required:"",trim:""},model:{value:e.jobSeek.location,callback:function(t){e.$set(e.jobSeek,"location",t)},expression:"jobSeek.location"}})],1),a("div",{staticClass:"col-12 col-lg-2 mb-2"},[a("label",{staticClass:"mt-0",attrs:{for:"zip-code",required:""}},[e._v("PLZ")]),a("b-form-input",{attrs:{id:"zip-code",type:"text",state:e.validated?!!e.jobSeek.zipCode:null,placeholder:"PLZ eingeben...","aria-describedby":"zip-code-help",required:"",trim:""},model:{value:e.jobSeek.zipCode,callback:function(t){e.$set(e.jobSeek,"zipCode",t)},expression:"jobSeek.zipCode"}})],1),a("div",{staticClass:"col-12 col-lg-7"},[a("label",{attrs:{for:"file"}},[e._v("Dein Bild ")]),a("ImageUploader",{attrs:{validated:e.validated,"image-url":e.jobSeek.imageUrl,width:250,height:250,fit:"outside","aria-describedby":"image-help"},on:{"update-url":function(t){e.jobSeek.imageUrl=t}}}),a("b-form-text",{staticClass:"ml-2",attrs:{id:"image-help"}},[a("span",[e._v("[optional] jpg, png | max. 5MB")])]),a("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2 ml-2",staticStyle:{width:"85px",height:"85px"}},[e.jobSeek.imageUrl?a("b-img",{staticClass:"border-radius1",attrs:{src:e.jobSeek.imageUrl,fluid:""}}):a("svg",{staticClass:"bi bi-person-circle p-3 text-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])],1)],1)]),a("b-form-checkbox",{staticClass:"mt-3",attrs:{id:"accepted",state:e.validated?e.jobSeek.accepted:null,name:"accepted",switch:""},model:{value:e.jobSeek.accepted,callback:function(t){e.$set(e.jobSeek,"accepted",t)},expression:"jobSeek.accepted"}},[e._v(" Ich habe die "),a("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),a("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. * ")],1)],1):e._e(),a("div",{staticClass:"d-flex justify-content-between my-4"},[a("div",[a("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Abbrechen ")]),e.step>0&&!e.jobSeek._id&&null===e.validated?a("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){t.preventDefault(),e.step-=1}}},[e._v(" Zurück ")]):e._e()],1),1===e.step||e.jobSeek._id?a("b-button",{attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Speichern ")]):a("b-button",{attrs:{variant:"success"},on:{click:function(t){t.preventDefault(),e.step=1}}},[e._v(" Weiter ")])],1)],1),e.error?a("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)},r=[],o=a("1da1"),l=(a("99af"),a("ac1f"),a("5319"),a("e9c4"),a("5b81"),a("96cf"),a("1d54")),c=a("5641"),u=a("1ba6"),d=a("c2f1"),b=a("2b0e"),p=a("c637"),f=a("0056"),m=a("9bfa"),h=a("a723"),g=a("992e"),v=a("9b76"),j=a("2326"),k=a("03b2"),S=a("906c"),O=a("6b77"),y=a("6c06"),_=a("7b1e"),x=a("3c21"),T=a("58f2"),w=a("d82f"),C=a("cf75"),I=a("fa73"),A=a("dde7"),$=a("ad47"),D=a("d520"),z=a("90ef"),N=a("8c18"),E=a("1947"),M=a("3010"),P=a("950f"),R=a("b42e"),q=a("4a38"),F=a("aa59");function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){L(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Z=Object(w["j"])(F["b"],["event","routerTag"]);delete Z.href.default,delete Z.to.default;var U=Object(C["c"])(Object(w["m"])(J(J({},Z),{},{pill:Object(C["b"])(h["g"],!1),tag:Object(C["b"])(h["s"],"span"),variant:Object(C["b"])(h["s"],"secondary")})),p["b"]),V=b["default"].extend({name:p["b"],functional:!0,props:U,render:function(e,t){var a=t.props,i=t.data,n=t.children,s=a.active,r=a.disabled,o=Object(q["d"])(a),l=o?F["a"]:a.tag,c=a.variant||"secondary";return e(l,Object(R["a"])(i,{staticClass:"badge",class:["badge-".concat(c),{"badge-pill":a.pill,active:s,disabled:r}],props:o?Object(C["d"])(Z,a):{}}),n)}}),W=a("f29e");function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){K(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function K(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Q,X=Object(C["c"])(Object(w["m"])(G(G({},z["b"]),{},{disabled:Object(C["b"])(h["g"],!1),noRemove:Object(C["b"])(h["g"],!1),pill:Object(C["b"])(h["g"],!1),removeLabel:Object(C["b"])(h["s"],"Remove tag"),tag:Object(C["b"])(h["s"],"span"),title:Object(C["b"])(h["s"]),variant:Object(C["b"])(h["s"],"secondary")})),p["D"]),Y=b["default"].extend({name:p["D"],mixins:[z["a"],N["a"]],props:X,methods:{onRemove:function(e){var t=e.type,a=e.keyCode;this.disabled||"click"!==t&&("keydown"!==t||a!==m["b"])||this.$emit(f["B"])}},render:function(e){var t=this.title,a=this.tag,i=this.variant,n=this.pill,s=this.disabled,r=this.safeId(),o=this.safeId("_taglabel_"),l=e();this.noRemove||s||(l=e(W["a"],{staticClass:"b-form-tag-remove",props:{ariaLabel:this.removeLabel},attrs:{"aria-controls":r,"aria-describedby":o,"aria-keyshortcuts":"Delete"},on:{click:this.onRemove,keydown:this.onRemove}}));var c=e("span",{staticClass:"b-form-tag-content flex-grow-1 text-truncate",attrs:{id:o}},this.normalizeSlot()||t);return e(V,{staticClass:"b-form-tag d-inline-flex align-items-baseline mw-100",class:{disabled:s},props:{tag:a,variant:i,pill:n},attrs:{id:r,title:t||null,"aria-labelledby":o}},[c,l])}});function ee(e){return ne(e)||ie(e)||ae(e)||te()}function te(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ae(e,t){if(e){if("string"===typeof e)return se(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?se(e,t):void 0}}function ie(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function ne(e){if(Array.isArray(e))return se(e)}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){le(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function le(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ce=Object(T["a"])("value",{type:h["b"],defaultValue:[]}),ue=ce.mixin,de=ce.props,be=ce.prop,pe=ce.event,fe=["text","email","tel","url","number"],me=[".b-form-tag","button","input","select"].join(" "),he=function(e){return Object(I["a"])(e).replace(g["q"],"\\s")},ge=function(e){return Object(j["b"])(e).map((function(e){return Object(I["h"])(Object(I["g"])(e))})).filter((function(e,t,a){return e.length>0&&a.indexOf(e)===t}))},ve=function(e){return Object(_["n"])(e)?e:Object(_["d"])(e)&&e.target.value||""},je=function(){return{all:[],valid:[],invalid:[],duplicate:[]}},ke=Object(C["c"])(Object(w["m"])(oe(oe(oe(oe(oe(oe({},z["b"]),de),A["b"]),$["b"]),D["b"]),{},{addButtonText:Object(C["b"])(h["s"],"Add"),addButtonVariant:Object(C["b"])(h["s"],"outline-secondary"),addOnChange:Object(C["b"])(h["g"],!1),duplicateTagText:Object(C["b"])(h["s"],"Duplicate tag(s)"),ignoreInputFocusSelector:Object(C["b"])(h["f"],me),inputAttrs:Object(C["b"])(h["o"],{}),inputClass:Object(C["b"])(h["e"]),inputId:Object(C["b"])(h["s"]),inputType:Object(C["b"])(h["s"],"text",(function(e){return Object(j["a"])(fe,e)})),invalidTagText:Object(C["b"])(h["s"],"Invalid tag(s)"),limit:Object(C["b"])(h["l"]),limitTagsText:Object(C["b"])(h["s"],"Tag limit reached"),noAddOnEnter:Object(C["b"])(h["g"],!1),noOuterFocus:Object(C["b"])(h["g"],!1),noTagRemove:Object(C["b"])(h["g"],!1),placeholder:Object(C["b"])(h["s"],"Add tag..."),removeOnDelete:Object(C["b"])(h["g"],!1),separator:Object(C["b"])(h["f"]),tagClass:Object(C["b"])(h["e"]),tagPills:Object(C["b"])(h["g"],!1),tagRemoveLabel:Object(C["b"])(h["s"],"Remove tag"),tagRemovedLabel:Object(C["b"])(h["s"],"Tag removed"),tagValidator:Object(C["b"])(h["k"]),tagVariant:Object(C["b"])(h["s"],"secondary")})),p["E"]),Se=b["default"].extend({name:p["E"],mixins:[z["a"],ue,A["a"],$["a"],D["a"],N["a"]],props:ke,data:function(){return{hasFocus:!1,newTag:"",tags:[],removedTags:[],tagsState:je()}},computed:{computedInputId:function(){return this.inputId||this.safeId("__input__")},computedInputType:function(){return Object(j["a"])(fe,this.inputType)?this.inputType:"text"},computedInputAttrs:function(){var e=this.disabled,t=this.form;return oe(oe({},this.inputAttrs),{},{id:this.computedInputId,value:this.newTag,disabled:e,form:t})},computedInputHandlers:function(){return{input:this.onInputInput,change:this.onInputChange,keydown:this.onInputKeydown,reset:this.reset}},computedSeparator:function(){return Object(j["b"])(this.separator).filter(_["n"]).filter(y["a"]).join("")},computedSeparatorRegExp:function(){var e=this.computedSeparator;return e?new RegExp("[".concat(he(e),"]+")):null},computedJoiner:function(){var e=this.computedSeparator.charAt(0);return" "!==e?"".concat(e," "):e},computeIgnoreInputFocusSelector:function(){return Object(j["b"])(this.ignoreInputFocusSelector).filter(y["a"]).join(",").trim()},disableAddButton:function(){var e=this,t=Object(I["h"])(this.newTag);return""===t||!this.splitTags(t).some((function(t){return!Object(j["a"])(e.tags,t)&&e.validateTag(t)}))},duplicateTags:function(){return this.tagsState.duplicate},hasDuplicateTags:function(){return this.duplicateTags.length>0},invalidTags:function(){return this.tagsState.invalid},hasInvalidTags:function(){return this.invalidTags.length>0},isLimitReached:function(){var e=this.limit;return Object(_["h"])(e)&&e>=0&&this.tags.length>=e}},watch:(Q={},le(Q,be,(function(e){this.tags=ge(e)})),le(Q,"tags",(function(e,t){Object(x["a"])(e,this[be])||this.$emit(pe,e),Object(x["a"])(e,t)||(e=Object(j["b"])(e).filter(y["a"]),t=Object(j["b"])(t).filter(y["a"]),this.removedTags=t.filter((function(t){return!Object(j["a"])(e,t)})))})),le(Q,"tagsState",(function(e,t){Object(x["a"])(e,t)||this.$emit(f["N"],e.valid,e.invalid,e.duplicate)})),Q),created:function(){this.tags=ge(this[be])},mounted:function(){var e=this,t=Object(S["e"])("form",this.$el);t&&(Object(O["b"])(t,"reset",this.reset,f["R"]),this.$on(f["S"],(function(){Object(O["a"])(t,"reset",e.reset,f["R"])})))},methods:{addTag:function(e){if(e=Object(_["n"])(e)?e:this.newTag,!this.disabled&&""!==Object(I["h"])(e)&&!this.isLimitReached){var t=this.parseTags(e);if(t.valid.length>0||0===t.all.length)if(Object(S["v"])(this.getInput(),"select"))this.newTag="";else{var a=[].concat(ee(t.invalid),ee(t.duplicate));this.newTag=t.all.filter((function(e){return Object(j["a"])(a,e)})).join(this.computedJoiner).concat(a.length>0?this.computedJoiner.charAt(0):"")}t.valid.length>0&&(this.tags=Object(j["b"])(this.tags,t.valid)),this.tagsState=t,this.focus()}},removeTag:function(e){var t=this;this.disabled||(this.tags=this.tags.filter((function(t){return t!==e})),this.$nextTick((function(){t.focus()})))},reset:function(){var e=this;this.newTag="",this.tags=[],this.$nextTick((function(){e.removedTags=[],e.tagsState=je()}))},onInputInput:function(e){if(!(this.disabled||Object(_["d"])(e)&&e.target.composing)){var t=ve(e),a=this.computedSeparatorRegExp;this.newTag!==t&&(this.newTag=t),t=Object(I["i"])(t),a&&a.test(t.slice(-1))?this.addTag():this.tagsState=""===t?je():this.parseTags(t)}},onInputChange:function(e){if(!this.disabled&&this.addOnChange){var t=ve(e);this.newTag!==t&&(this.newTag=t),this.addTag()}},onInputKeydown:function(e){if(!this.disabled&&Object(_["d"])(e)){var t=e.keyCode,a=e.target.value||"";this.noAddOnEnter||t!==m["e"]?!this.removeOnDelete||t!==m["a"]&&t!==m["b"]||""!==a||(Object(O["f"])(e,{propagation:!1}),this.tags=this.tags.slice(0,-1)):(Object(O["f"])(e,{propagation:!1}),this.addTag())}},onClick:function(e){var t=this,a=this.computeIgnoreInputFocusSelector,i=e.target;this.disabled||Object(S["q"])(i)||a&&Object(S["e"])(a,i,!0)||this.$nextTick((function(){t.focus()}))},onFocusin:function(){this.hasFocus=!0},onFocusout:function(){this.hasFocus=!1},handleAutofocus:function(){var e=this;this.$nextTick((function(){Object(S["B"])((function(){e.autofocus&&!e.disabled&&e.focus()}))}))},focus:function(){this.disabled||Object(S["d"])(this.getInput())},blur:function(){this.disabled||Object(S["c"])(this.getInput())},splitTags:function(e){e=Object(I["g"])(e);var t=this.computedSeparatorRegExp;return(t?e.split(t):[e]).map(I["h"]).filter(y["a"])},parseTags:function(e){var t=this,a=this.splitTags(e),i={all:a,valid:[],invalid:[],duplicate:[]};return a.forEach((function(e){Object(j["a"])(t.tags,e)||Object(j["a"])(i.valid,e)?Object(j["a"])(i.duplicate,e)||i.duplicate.push(e):t.validateTag(e)?i.valid.push(e):Object(j["a"])(i.invalid,e)||i.invalid.push(e)})),i},validateTag:function(e){var t=this.tagValidator;return!Object(C["a"])(t)||t(e)},getInput:function(){return Object(S["C"])("#".concat(Object(k["a"])(this.computedInputId)),this.$el)},defaultRender:function(e){var t=e.addButtonText,a=e.addButtonVariant,i=e.addTag,n=e.disableAddButton,s=e.disabled,r=e.duplicateTagText,o=e.inputAttrs,l=e.inputClass,c=e.inputHandlers,u=e.inputType,d=e.invalidTagText,b=e.isDuplicate,p=e.isInvalid,f=e.isLimitReached,m=e.limitTagsText,h=e.noTagRemove,g=e.placeholder,j=e.removeTag,k=e.tagClass,S=e.tagPills,O=e.tagRemoveLabel,_=e.tagVariant,x=e.tags,T=this.$createElement,w=x.map((function(e){return e=Object(I["g"])(e),T(Y,{class:k,props:{disabled:s,noRemove:h,pill:S,removeLabel:O,tag:"li",title:e,variant:_},on:{remove:function(){return j(e)}},key:"tags_".concat(e)},e)})),C=d&&p?this.safeId("__invalid_feedback__"):null,A=r&&b?this.safeId("__duplicate_feedback__"):null,$=m&&f?this.safeId("__limit_feedback__"):null,D=[o["aria-describedby"],C,A,$].filter(y["a"]).join(" "),z=T("input",{staticClass:"b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",class:l,style:{outline:0,minWidth:"5rem"},attrs:oe(oe({},o),{},{"aria-describedby":D||null,type:u,placeholder:g||null}),domProps:{value:o.value},on:c,directives:[{name:"model",value:o.value}],ref:"input"}),N=T(E["a"],{staticClass:"b-form-tags-button py-0",class:{invisible:n},style:{fontSize:"90%"},props:{disabled:n||f,variant:a},on:{click:function(){return i()}},ref:"button"},[this.normalizeSlot(v["a"])||t]),R=this.safeId("__tag_list__"),q=T("li",{staticClass:"b-from-tags-field flex-grow-1",attrs:{role:"none","aria-live":"off","aria-controls":R},key:"tags_field"},[T("div",{staticClass:"d-flex",attrs:{role:"group"}},[z,N])]),F=T("ul",{staticClass:"b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",attrs:{id:R},key:"tags_list"},[w,q]),B=T();if(d||r||m){var J=this.computedJoiner,L=T();C&&(L=T(M["a"],{props:{id:C,forceShow:!0},key:"tags_invalid_feedback"},[this.invalidTagText,": ",this.invalidTags.join(J)]));var Z=T();A&&(Z=T(P["a"],{props:{id:A},key:"tags_duplicate_feedback"},[this.duplicateTagText,": ",this.duplicateTags.join(J)]));var U=T();$&&(U=T(P["a"],{props:{id:$},key:"tags_limit_feedback"},[m])),B=T("div",{attrs:{"aria-live":"polite","aria-atomic":"true"},key:"tags_feedback"},[L,Z,U])}return[F,B]}},render:function(e){var t=this.name,a=this.disabled,i=this.required,n=this.form,s=this.tags,r=this.computedInputId,o=this.hasFocus,l=this.noOuterFocus,c=oe({tags:s.slice(),inputAttrs:this.computedInputAttrs,inputType:this.computedInputType,inputHandlers:this.computedInputHandlers,removeTag:this.removeTag,addTag:this.addTag,reset:this.reset,inputId:r,isInvalid:this.hasInvalidTags,invalidTags:this.invalidTags.slice(),isDuplicate:this.hasDuplicateTags,duplicateTags:this.duplicateTags.slice(),isLimitReached:this.isLimitReached,disableAddButton:this.disableAddButton},Object(w["k"])(this.$props,["addButtonText","addButtonVariant","disabled","duplicateTagText","form","inputClass","invalidTagText","limit","limitTagsText","noTagRemove","placeholder","required","separator","size","state","tagClass","tagPills","tagRemoveLabel","tagVariant"])),u=this.normalizeSlot(v["f"],c)||this.defaultRender(c),d=e("output",{staticClass:"sr-only",attrs:{id:this.safeId("__selected_tags__"),role:"status",for:r,"aria-live":o?"polite":"off","aria-atomic":"true","aria-relevant":"additions text"}},this.tags.join(", ")),b=e("div",{staticClass:"sr-only",attrs:{id:this.safeId("__removed_tags__"),role:"status","aria-live":o?"assertive":"off","aria-atomic":"true"}},this.removedTags.length>0?"(".concat(this.tagRemovedLabel,") ").concat(this.removedTags.join(", ")):""),p=e();if(t&&!a){var f=s.length>0;p=(f?s:[""]).map((function(a){return e("input",{class:{"sr-only":!f},attrs:{type:f?"hidden":"text",value:a,required:i,name:t,form:n},key:"tag_input_".concat(a)})}))}return e("div",{staticClass:"b-form-tags form-control h-auto",class:[{focus:o&&!l&&!a,disabled:a},this.sizeFormClass,this.stateClass],attrs:{id:this.safeId(),role:"group",tabindex:a||l?null:"-1","aria-describedby":this.safeId("__selected_tags__")},on:{click:this.onClick,focusin:this.onFocusin,focusout:this.onFocusout}},[d,b,u,p])}});b["default"].component("BFormDatepicker",d["a"]),b["default"].component("BFormTags",Se);var Oe={name:"JobSeekForm",components:{TipTapEditor:l["a"],ImageUploader:c["a"]},data:function(){return{jobSeek:{_id:"new"!=this.$route.params.jobSeekId?this.$route.params.jobSeekId:"",title:"",about:"",tasks:"",experiences:"",isMfa:!1,isZfa:!1,qualifications:[],partTime:!0,fullTime:!0,training:!1,miniJob:!1,salaryMin:0,anonymized:!0,gender:this.$store.state.auth.user.gender||"",firstName:this.$store.state.auth.user.firstName||"",lastName:this.$store.state.auth.user.lastName||"",imageUrl:"",zipCode:"",location:"",accepted:!1},step:0,contactGenderOptions:u["d"],validated:null,success:"",error:""}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getJobSeek();case 2:case"end":return t.stop()}}),t)})))()},methods:{getJobSeek:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("new"!=e.$route.params.jobSeekId){t.next=2;break}return t.abrupt("return",null);case 2:return e.$store.dispatch("setOverlay",!0),t.prev=3,t.next=6,e.$axios.get("/graphql",{params:{query:'\n              query {\n                myJobSeek(\n                  _id: "'.concat(e.$route.params.jobSeekId,'"\n                ) {\n                  _id\n                  title\n                  about\n                  experiences\n                  tasks\n                  isMfa\n                  isZfa\n                  qualifications\n                  partTime\n                  fullTime\n                  training\n                  miniJob\n                  salaryMin\n                  anonymized\n                  gender\n                  firstName\n                  lastName\n                  imageUrl\n                  location\n                  zipCode\n                  accepted\n                }\n              }\n            ')}});case 6:if(a=t.sent,!a.data.errors){t.next=9;break}throw new Error;case 9:e.jobSeek=a.data.data.myJobSeek,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.$root.$bvToast.toast("Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 15:e.$store.dispatch("setOverlay",!1);case 16:case"end":return t.stop()}}),t,null,[[3,12]])})))()},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error=!1,e.formValidation()){t.next=4;break}return e.error="Bitte fülle die erforderlichen Felder aus und beachte die Zeichenvorgaben!",t.abrupt("return",null);case 4:return e.$store.dispatch("setOverlay",!0),a=e.jobSeek._id?"updateJobSeek":"addJobSeek",t.prev=6,i="\n          mutation {\n            ".concat(a,"(\n              ").concat("updateJobSeek"===a?'_id: "'.concat(e.jobSeek._id,'"'):"",'\n              title: "').concat(e.jobSeek.title,'"\n              about: "').concat(e.jobSeek.about.replace(/"/g,'\\"'),'"\n              experiences: "').concat(e.jobSeek.experiences.replace(/"/g,'\\"'),'"\n              tasks: "').concat(e.jobSeek.tasks.replace(/"/g,'\\"'),'"\n              isMfa: ').concat(e.jobSeek.isMfa,"\n              isZfa: ").concat(e.jobSeek.isZfa,"\n              qualifications: ").concat(JSON.stringify(e.jobSeek.qualifications),"\n              partTime: ").concat(e.jobSeek.partTime,"\n              fullTime: ").concat(e.jobSeek.fullTime,"\n              training: ").concat(e.jobSeek.training,"\n              miniJob: ").concat(e.jobSeek.miniJob,"\n              salaryMin: ").concat(e.jobSeek.salaryMin,"\n              anonymized: ").concat(e.jobSeek.anonymized,'\n              gender: "').concat(e.jobSeek.gender,'"\n              firstName: "').concat(e.jobSeek.firstName,'"\n              lastName: "').concat(e.jobSeek.lastName,'"\n              publicFirstName: "').concat(e.jobSeek.anonymized?e.jobSeek.firstName.charAt()+".":e.jobSeek.firstName,'"\n              publicLastName: "').concat(e.jobSeek.anonymized?e.jobSeek.lastName.charAt()+".":e.jobSeek.lastName,'"\n              imageUrl: "').concat(e.jobSeek.imageUrl,'"\n              location: "').concat(e.jobSeek.location,'"\n              zipCode: "').concat(e.jobSeek.zipCode,'"\n              accepted: ').concat(e.jobSeek.accepted,"\n            ) {\n              _id\n            }\n          }\n        "),t.next=10,e.$axios.post("/graphql",{query:i});case 10:if(n=t.sent,!n.data.errors){t.next=13;break}throw new Error(n.data.errors[0].message);case 13:e.$gtag.event(a,{event_label:"".concat(e.jobSeek.title," | ").concat(e.jobSeek.location," - ").concat(n.data.data[a]._id)}),e.$root.$bvToast.toast("Das Stellengesuch wurde erfolgreich gespeichert.",{title:"Stellengesuch gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),window.history.length>2?e.$router.go(-1):e.$router.push("/user/stellengesuche"),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](6),e.$root.$bvToast.toast("Beim Speichern des Stellengesuchs ist ein Fehler aufgetreten. ".concat(t.t0),{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 21:e.$store.dispatch("setOverlay",!1);case 22:case"end":return t.stop()}}),t,null,[[6,18]])})))()},formatter:function(e){return e.replaceAll('"',"'")},formValidation:function(){return this.validated=!0,!!(this.jobSeek.title&&!(this.jobSeek.title.length>155)&&this.jobSeek.about&&this.jobSeek.tasks&&this.jobSeek.experiences&&this.jobSeek.firstName&&this.jobSeek.lastName&&this.jobSeek.zipCode&&this.jobSeek.location&&this.jobSeek.accepted)}}},ye=Oe,_e=a("2877"),xe=Object(_e["a"])(ye,s,r,!1,null,null,null),Te=xe.exports,we={name:"UserEditJobSeek",components:{JobSeekForm:Te}},Ce=we,Ie=Object(_e["a"])(Ce,i,n,!1,null,null,null);t["default"]=Ie.exports}}]);
//# sourceMappingURL=job_seek_edit-legacy.5673b551.js.map