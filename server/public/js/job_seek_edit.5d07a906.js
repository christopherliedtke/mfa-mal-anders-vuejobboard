(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job_seek_edit"],{"00ee":function(e,t,a){var i=a("b622"),n=i("toStringTag"),s={};s[n]="z",e.exports="[object z]"===String(s)},"0cb2":function(e,t,a){var i=a("e330"),n=a("7b0b"),s=Math.floor,r=i("".charAt),o=i("".replace),l=i("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,i,d,b){var h=a+e.length,p=i.length,f=u;return void 0!==d&&(d=n(d),f=c),o(b,f,(function(n,o){var c;switch(r(o,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,a);case"'":return l(t,h);case"<":c=d[l(o,1,-1)];break;default:var u=+o;if(0===u)return n;if(u>p){var b=s(u/10);return 0===b?n:b<=p?void 0===i[b-1]?r(o,1):i[b-1]+r(o,1):n}c=i[u-1]}return void 0===c?"":c}))}},"44e7":function(e,t,a){var i=a("861d"),n=a("c6b6"),s=a("b622"),r=s("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==n(e))}},"577e":function(e,t,a){var i=a("da84"),n=a("f5df"),s=i.String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},"5b81":function(e,t,a){"use strict";var i=a("23e7"),n=a("da84"),s=a("c65b"),r=a("e330"),o=a("1d80"),l=a("1626"),c=a("44e7"),u=a("577e"),d=a("dc4a"),b=a("ad6d"),h=a("0cb2"),p=a("b622"),f=a("c430"),m=p("replace"),g=RegExp.prototype,v=n.TypeError,j=r(b),k=r("".indexOf),S=r("".replace),y=r("".slice),O=Math.max,_=function(e,t,a){return a>e.length?-1:""===t?a:k(e,t,a)};i({target:"String",proto:!0},{replaceAll:function(e,t){var a,i,n,r,b,p,T,x,w,$=o(this),C=0,I=0,A="";if(null!=e){if(a=c(e),a&&(i=u(o("flags"in g?e.flags:j(e))),!~k(i,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(n=d(e,m),n)return s(n,e,$,t);if(f&&a)return S(u($),e,t)}r=u($),b=u(e),p=l(t),p||(t=u(t)),T=b.length,x=O(1,T),C=_(r,b,0);while(-1!==C)w=p?u(t(b,C,r)):h(b,r,C,[],void 0,t),A+=y(r,I,C)+w,I=C+T,C=_(r,b,C+x);return I<r.length&&(A+=y(r,I)),A}})},ad6d:function(e,t,a){"use strict";var i=a("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},f5df:function(e,t,a){var i=a("da84"),n=a("00ee"),s=a("1626"),r=a("c6b6"),o=a("b622"),l=o("toStringTag"),c=i.Object,u="Arguments"==r(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(a){}};e.exports=n?r:function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=d(t=c(e),l))?a:u?r(t):"Object"==(i=r(t))&&s(t.callee)?"Arguments":i}},fc85:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-job container py-3 py-lg-5"},[a("h2",[e._v(" Stellengesuch "+e._s("new"===e.$route.params.jobSeekId?"erstellen":"bearbeiten")+" ")]),a("p",[e._v(" Bearbeite Dein Stellengesuch. Felder mit * sind Pflichtfelder. Nach dem Speichern ist das Stellengesuch nicht automatisch veröffentlicht. ")]),a("JobSeekForm",{staticClass:"mt-4"})],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-seek-form position-relative"},[a("b-form",{attrs:{id:"job-seek-form"}},[1===e.step||e.jobSeek._id||null!=e.validated?a("b-form-group",{staticClass:"mb-4 mb-lg-5"},[a("h3",{staticClass:"bold mb-0"},[e._v("Über Dich und Deine Stellensuche")]),a("label",{attrs:{for:"title",required:""}},[e._v("Titel des Stellengesuchs")]),a("b-form-input",{attrs:{id:"title",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!(e.jobSeek.title&&e.jobSeek.title.length<=155):null,"aria-describedby":"title-help title-feedback",placeholder:"Z. B. Erfahrene Abrechnungsmanagerin sucht 30h Stelle",required:"",trim:""},model:{value:e.jobSeek.title,callback:function(t){e.$set(e.jobSeek,"title",t)},expression:"jobSeek.title"}}),a("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"title-feedback"}},[e._v(" Bitte nutzen Sie maximal 155 Zeichen. ")]),a("b-form-text",{staticClass:"ml-2",attrs:{id:"title-help"}},[a("span",{class:[{"text-danger":e.jobSeek.title.length>155}]},[e._v(" "+e._s(155-e.jobSeek.title.length)+" Zeichen verfügbar")])]),a("label",{attrs:{for:"about",required:""}},[e._v("Über Mich")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.jobSeek.about,placeholder:"Wer bist Du? Warum bist Du auf Stellensuche? Hast Du spezielle Anforderungen (Wochenstunden, Arbeitszeiten, etc.) an Deinen neuen Job?"},on:{"update-content":function(t){e.jobSeek.about=t}}}),a("label",{attrs:{for:"experiences",required:""}},[e._v("Meine Berufserfahrung")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.jobSeek.experiences,placeholder:"In welchen Bereichen hast Du Berufserfahrung? Wofür warst Du in vergangenen bzw. Deiner aktuellen Anstellung verantwortlich? Was zeichnet Dich hier aus?"},on:{"update-content":function(t){e.jobSeek.experiences=t}}}),a("label",{attrs:{for:"tasks",required:""}},[e._v("Gewünschte Aufgabenbereiche")]),a("TipTapEditor",{attrs:{validated:e.validated,content:e.jobSeek.tasks,placeholder:"Welche Aufgabenbereiche möchtest Du gern übernehmen? An welchen Aufgabenbereichen bist Du ggfls. nicht interessiert?"},on:{"update-content":function(t){e.jobSeek.tasks=t}}}),a("label",{staticClass:"mb-0 mt-4"},[e._v("Abgeschlossene Ausbildung "),a("small",{staticClass:"text-muted"},[e._v("Sonstige abgeschlossene Ausbildungen bitte bei QUALIFIKATIONEN angeben")])]),a("div",{staticClass:"d-flex flex-wrap"},[a("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-mfa",name:"is-mfa"},model:{value:e.jobSeek.isMfa,callback:function(t){e.$set(e.jobSeek,"isMfa",t)},expression:"jobSeek.isMfa"}},[e._v(" Medizinische Fachangestellte (MFA) ")]),a("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-zfa",name:"is-zfa"},model:{value:e.jobSeek.isZfa,callback:function(t){e.$set(e.jobSeek,"isZfa",t)},expression:"jobSeek.isZfa"}},[e._v(" Zahnmedizinische Fachangestellte (ZFA) ")])],1),a("label",{staticClass:"mt-4",attrs:{for:"qualifications"}},[e._v("Qualifikationen, Abgeschlossene Weiterbildungen, etc. ")]),a("b-form-tags",{attrs:{state:e.validated&&e.jobSeek.qualifications.length>0||null,"input-id":"qualifications",placeholder:"Eingeben und Enter drücken...","duplicate-tag-text":"Doppelte Qualifikation(en)","tag-pills":"","remove-on-delete":"","tag-class":"text-light"},model:{value:e.jobSeek.qualifications,callback:function(t){e.$set(e.jobSeek,"qualifications",t)},expression:"jobSeek.qualifications"}}),a("label",{staticClass:"mt-4 mb-0",attrs:{for:"employmentTypes",required:""}},[e._v("Anstellungsarten ")]),a("div",{staticClass:"d-flex flex-wrap"},[a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"part-time",name:"part-time"},model:{value:e.jobSeek.partTime,callback:function(t){e.$set(e.jobSeek,"partTime",t)},expression:"jobSeek.partTime"}},[e._v(" Teilzeit ")]),a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"full-time",name:"full-time"},model:{value:e.jobSeek.fullTime,callback:function(t){e.$set(e.jobSeek,"fullTime",t)},expression:"jobSeek.fullTime"}},[e._v(" Vollzeit ")]),a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"training",name:"training"},model:{value:e.jobSeek.training,callback:function(t){e.$set(e.jobSeek,"training",t)},expression:"jobSeek.training"}},[e._v(" Ausbildung ")]),a("b-form-checkbox",{staticClass:"mr-md-2",attrs:{id:"mini-job",name:"mini-job"},model:{value:e.jobSeek.miniJob,callback:function(t){e.$set(e.jobSeek,"miniJob",t)},expression:"jobSeek.miniJob"}},[e._v(" 450€ – Basis ")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-4"},[a("label",{staticClass:"mt-4",attrs:{for:"min-salary"}},[e._v("Dein Gehaltswunsch "),a("small",{staticClass:"text-muted"},[e._v("(monatlich brutto)")])]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("€")])]},proxy:!0}],null,!1,3291831653)},[a("b-form-input",{attrs:{id:"min-salary",type:"number",step:"1",state:e.validated&&!!e.jobSeek.salaryMin||null,placeholder:"Min. Monatsgehalt eingeben...","aria-describedby":"min-salary-help"},model:{value:e.jobSeek.salaryMin,callback:function(t){e.$set(e.jobSeek,"salaryMin",t)},expression:"jobSeek.salaryMin"}})],1),a("b-form-text",{attrs:{id:"min-salary-help"}},[a("span",[e._v("Informiere Dich mit unserem "),a("b-link",{attrs:{to:"/karriere/"+(e.jobSeek.isZfa?"zfa":"mfa")+"/gehalt#gehaltsrechner",target:"_blank"}},[e._v("Gehaltsrechner")])],1)])],1)])],1):e._e(),0===e.step||e.jobSeek._id||null!=e.validated?a("b-form-group",{staticClass:"mb-4 mb-lg-5"},[a("h3",{staticClass:"bold mb-0"},[e._v("Persönliche Daten")]),a("b-form-checkbox",{attrs:{id:"anonymized",name:"anonymized","aria-describedby":"anonymized-help",switch:""},model:{value:e.jobSeek.anonymized,callback:function(t){e.$set(e.jobSeek,"anonymized",t)},expression:"jobSeek.anonymized"}},[e._v(" Meine Daten anonym veröffentlichen * ")]),a("b-form-text",{staticClass:"ml-2",attrs:{id:"anonymized-help"}},[e._v("Dein Name wird mit Initialien abgekürzt – z. B. M.M. statt Maxi Mustermann")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-3"},[a("label",{staticClass:"d-block",attrs:{for:"user-gender"}},[e._v("Anrede")]),a("b-form-select",{attrs:{id:"user-gender"},model:{value:e.jobSeek.gender,callback:function(t){e.$set(e.jobSeek,"gender",t)},expression:"jobSeek.gender"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"firstName",required:""}},[e._v("Vorname")]),a("b-form-input",{attrs:{id:"firstName",state:e.validated?!!e.jobSeek.firstName:null,type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:e.jobSeek.firstName,callback:function(t){e.$set(e.jobSeek,"firstName",t)},expression:"jobSeek.firstName"}})],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"lastName",required:""}},[e._v("Nachname")]),a("b-form-input",{attrs:{id:"lastName",state:e.validated?!!e.jobSeek.lastName:null,type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:e.jobSeek.lastName,callback:function(t){e.$set(e.jobSeek,"lastName",t)},expression:"jobSeek.lastName"}})],1),a("div",{staticClass:"col-12 col-lg-7"},[a("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("@")])]},proxy:!0}],null,!1,1351813257)},[a("b-form-input",{attrs:{id:"email",state:e.validated?!!e.$store.state.auth.user.email:null,type:"email",placeholder:"E-Mail Adresse eingeben...","aria-describedby":"email-help",autocomplete:"email",trim:"",disabled:""},model:{value:e.$store.state.auth.user.email,callback:function(t){e.$set(e.$store.state.auth.user,"email",t)},expression:"$store.state.auth.user.email"}})],1),a("b-form-text",{attrs:{id:"email-help"}},[e._v("Es wird Deine Account E-Mail Adresse genutzt. Diese kannst Du unter KONTO > ACCOUNT ändern. Deine E-Mail Adresse ist "),a("u",[e._v("nicht")]),e._v(" öffentlich ersichtlich. Nachrichten von Arbeitgebern werden über unsere Plattform an diese E-Mail Adresse weitergeleitet.")])],1)]),a("h5",{staticClass:"mt-4"},[e._v("Dein Wohnort")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-7 mb-2"},[a("label",{staticClass:"mt-0",attrs:{for:"location",required:""}},[e._v("Ort")]),a("b-form-input",{attrs:{id:"location",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.jobSeek.location:null,placeholder:"Ort eingeben...","aria-describedby":"location-help",required:"",trim:""},model:{value:e.jobSeek.location,callback:function(t){e.$set(e.jobSeek,"location",t)},expression:"jobSeek.location"}})],1),a("div",{staticClass:"col-12 col-lg-2 mb-2"},[a("label",{staticClass:"mt-0",attrs:{for:"zip-code",required:""}},[e._v("PLZ")]),a("b-form-input",{attrs:{id:"zip-code",type:"text",state:e.validated?!!e.jobSeek.zipCode:null,placeholder:"PLZ eingeben...","aria-describedby":"zip-code-help",required:"",trim:""},model:{value:e.jobSeek.zipCode,callback:function(t){e.$set(e.jobSeek,"zipCode",t)},expression:"jobSeek.zipCode"}})],1),a("div",{staticClass:"col-12 col-lg-7"},[a("label",{attrs:{for:"file"}},[e._v("Dein Bild ")]),a("ImageUploader",{attrs:{validated:e.validated,"image-url":e.jobSeek.imageUrl,width:250,height:250,fit:"outside","aria-describedby":"image-help"},on:{"update-url":function(t){e.jobSeek.imageUrl=t}}}),a("b-form-text",{staticClass:"ml-2",attrs:{id:"image-help"}},[a("span",[e._v("[optional] jpg, png | max. 5MB")])]),a("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2 ml-2",staticStyle:{width:"85px",height:"85px"}},[e.jobSeek.imageUrl?a("b-img",{staticClass:"border-radius1",attrs:{src:e.jobSeek.imageUrl,fluid:""}}):a("svg",{staticClass:"bi bi-person-circle p-3 text-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])],1)],1)]),a("b-form-checkbox",{staticClass:"mt-3",attrs:{id:"accepted",state:e.validated?e.jobSeek.accepted:null,name:"accepted",switch:""},model:{value:e.jobSeek.accepted,callback:function(t){e.$set(e.jobSeek,"accepted",t)},expression:"jobSeek.accepted"}},[e._v(" Ich habe die "),a("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),a("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. * ")],1)],1):e._e(),a("div",{staticClass:"d-flex justify-content-between my-4"},[a("div",[a("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Abbrechen ")]),e.step>0&&!e.jobSeek._id&&null===e.validated?a("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){t.preventDefault(),e.step-=1}}},[e._v(" Zurück ")]):e._e()],1),1===e.step||e.jobSeek._id?a("b-button",{attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Speichern ")]):a("b-button",{attrs:{variant:"success"},on:{click:function(t){t.preventDefault(),e.step=1}}},[e._v(" Weiter ")])],1)],1),e.error?a("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)},r=[],o=(a("5b81"),a("1d54")),l=a("5641"),c=a("1ba6"),u=a("c2f1"),d=a("2b0e"),b=a("c637"),h=a("0056"),p=a("9bfa"),f=a("a723"),m=a("992e"),g=a("9b76"),v=a("2326"),j=a("03b2"),k=a("906c"),S=a("6b77"),y=a("6c06"),O=a("7b1e"),_=a("3c21"),T=a("58f2"),x=a("d82f"),w=a("cf75"),$=a("fa73"),C=a("dde7"),I=a("ad47"),A=a("d520"),z=a("90ef"),D=a("8c18"),N=a("1947"),E=a("3010"),M=a("950f"),P=a("b42e"),q=a("4a38"),F=a("aa59");function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){J(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var L=Object(x["j"])(F["b"],["event","routerTag"]);delete L.href.default,delete L.to.default;var Z=Object(w["c"])(Object(x["m"])(B(B({},L),{},{pill:Object(w["b"])(f["g"],!1),tag:Object(w["b"])(f["s"],"span"),variant:Object(w["b"])(f["s"],"secondary")})),b["b"]),U=d["default"].extend({name:b["b"],functional:!0,props:Z,render:function(e,t){var a=t.props,i=t.data,n=t.children,s=a.active,r=a.disabled,o=Object(q["d"])(a),l=o?F["a"]:a.tag,c=a.variant||"secondary";return e(l,Object(P["a"])(i,{staticClass:"badge",class:["badge-".concat(c),{"badge-pill":a.pill,active:s,disabled:r}],props:o?Object(w["d"])(L,a):{}}),n)}}),V=a("f29e");function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){G(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var K,Q=Object(w["c"])(Object(x["m"])(H(H({},z["b"]),{},{disabled:Object(w["b"])(f["g"],!1),noRemove:Object(w["b"])(f["g"],!1),pill:Object(w["b"])(f["g"],!1),removeLabel:Object(w["b"])(f["s"],"Remove tag"),tag:Object(w["b"])(f["s"],"span"),title:Object(w["b"])(f["s"]),variant:Object(w["b"])(f["s"],"secondary")})),b["D"]),X=d["default"].extend({name:b["D"],mixins:[z["a"],D["a"]],props:Q,methods:{onRemove:function(e){var t=e.type,a=e.keyCode;this.disabled||"click"!==t&&("keydown"!==t||a!==p["b"])||this.$emit(h["B"])}},render:function(e){var t=this.title,a=this.tag,i=this.variant,n=this.pill,s=this.disabled,r=this.safeId(),o=this.safeId("_taglabel_"),l=e();this.noRemove||s||(l=e(V["a"],{staticClass:"b-form-tag-remove",props:{ariaLabel:this.removeLabel},attrs:{"aria-controls":r,"aria-describedby":o,"aria-keyshortcuts":"Delete"},on:{click:this.onRemove,keydown:this.onRemove}}));var c=e("span",{staticClass:"b-form-tag-content flex-grow-1 text-truncate",attrs:{id:o}},this.normalizeSlot()||t);return e(U,{staticClass:"b-form-tag d-inline-flex align-items-baseline mw-100",class:{disabled:s},props:{tag:a,variant:i,pill:n},attrs:{id:r,title:t||null,"aria-labelledby":o}},[c,l])}});function Y(e){return ie(e)||ae(e)||te(e)||ee()}function ee(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function te(e,t){if(e){if("string"===typeof e)return ne(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ne(e,t):void 0}}function ae(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function ie(e){if(Array.isArray(e))return ne(e)}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(Object(a),!0).forEach((function(t){oe(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function oe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var le=Object(T["a"])("value",{type:f["b"],defaultValue:[]}),ce=le.mixin,ue=le.props,de=le.prop,be=le.event,he=["text","email","tel","url","number"],pe=[".b-form-tag","button","input","select"].join(" "),fe=function(e){return Object($["a"])(e).replace(m["q"],"\\s")},me=function(e){return Object(v["b"])(e).map((function(e){return Object($["h"])(Object($["g"])(e))})).filter((function(e,t,a){return e.length>0&&a.indexOf(e)===t}))},ge=function(e){return Object(O["n"])(e)?e:Object(O["d"])(e)&&e.target.value||""},ve=function(){return{all:[],valid:[],invalid:[],duplicate:[]}},je=Object(w["c"])(Object(x["m"])(re(re(re(re(re(re({},z["b"]),ue),C["b"]),I["b"]),A["b"]),{},{addButtonText:Object(w["b"])(f["s"],"Add"),addButtonVariant:Object(w["b"])(f["s"],"outline-secondary"),addOnChange:Object(w["b"])(f["g"],!1),duplicateTagText:Object(w["b"])(f["s"],"Duplicate tag(s)"),ignoreInputFocusSelector:Object(w["b"])(f["f"],pe),inputAttrs:Object(w["b"])(f["o"],{}),inputClass:Object(w["b"])(f["e"]),inputId:Object(w["b"])(f["s"]),inputType:Object(w["b"])(f["s"],"text",(function(e){return Object(v["a"])(he,e)})),invalidTagText:Object(w["b"])(f["s"],"Invalid tag(s)"),limit:Object(w["b"])(f["l"]),limitTagsText:Object(w["b"])(f["s"],"Tag limit reached"),noAddOnEnter:Object(w["b"])(f["g"],!1),noOuterFocus:Object(w["b"])(f["g"],!1),noTagRemove:Object(w["b"])(f["g"],!1),placeholder:Object(w["b"])(f["s"],"Add tag..."),removeOnDelete:Object(w["b"])(f["g"],!1),separator:Object(w["b"])(f["f"]),tagClass:Object(w["b"])(f["e"]),tagPills:Object(w["b"])(f["g"],!1),tagRemoveLabel:Object(w["b"])(f["s"],"Remove tag"),tagRemovedLabel:Object(w["b"])(f["s"],"Tag removed"),tagValidator:Object(w["b"])(f["k"]),tagVariant:Object(w["b"])(f["s"],"secondary")})),b["E"]),ke=d["default"].extend({name:b["E"],mixins:[z["a"],ce,C["a"],I["a"],A["a"],D["a"]],props:je,data:function(){return{hasFocus:!1,newTag:"",tags:[],removedTags:[],tagsState:ve()}},computed:{computedInputId:function(){return this.inputId||this.safeId("__input__")},computedInputType:function(){return Object(v["a"])(he,this.inputType)?this.inputType:"text"},computedInputAttrs:function(){var e=this.disabled,t=this.form;return re(re({},this.inputAttrs),{},{id:this.computedInputId,value:this.newTag,disabled:e,form:t})},computedInputHandlers:function(){return{input:this.onInputInput,change:this.onInputChange,keydown:this.onInputKeydown,reset:this.reset}},computedSeparator:function(){return Object(v["b"])(this.separator).filter(O["n"]).filter(y["a"]).join("")},computedSeparatorRegExp:function(){var e=this.computedSeparator;return e?new RegExp("[".concat(fe(e),"]+")):null},computedJoiner:function(){var e=this.computedSeparator.charAt(0);return" "!==e?"".concat(e," "):e},computeIgnoreInputFocusSelector:function(){return Object(v["b"])(this.ignoreInputFocusSelector).filter(y["a"]).join(",").trim()},disableAddButton:function(){var e=this,t=Object($["h"])(this.newTag);return""===t||!this.splitTags(t).some((function(t){return!Object(v["a"])(e.tags,t)&&e.validateTag(t)}))},duplicateTags:function(){return this.tagsState.duplicate},hasDuplicateTags:function(){return this.duplicateTags.length>0},invalidTags:function(){return this.tagsState.invalid},hasInvalidTags:function(){return this.invalidTags.length>0},isLimitReached:function(){var e=this.limit;return Object(O["h"])(e)&&e>=0&&this.tags.length>=e}},watch:(K={},oe(K,de,(function(e){this.tags=me(e)})),oe(K,"tags",(function(e,t){Object(_["a"])(e,this[de])||this.$emit(be,e),Object(_["a"])(e,t)||(e=Object(v["b"])(e).filter(y["a"]),t=Object(v["b"])(t).filter(y["a"]),this.removedTags=t.filter((function(t){return!Object(v["a"])(e,t)})))})),oe(K,"tagsState",(function(e,t){Object(_["a"])(e,t)||this.$emit(h["N"],e.valid,e.invalid,e.duplicate)})),K),created:function(){this.tags=me(this[de])},mounted:function(){var e=this,t=Object(k["e"])("form",this.$el);t&&(Object(S["b"])(t,"reset",this.reset,h["R"]),this.$on(h["S"],(function(){Object(S["a"])(t,"reset",e.reset,h["R"])})))},methods:{addTag:function(e){if(e=Object(O["n"])(e)?e:this.newTag,!this.disabled&&""!==Object($["h"])(e)&&!this.isLimitReached){var t=this.parseTags(e);if(t.valid.length>0||0===t.all.length)if(Object(k["v"])(this.getInput(),"select"))this.newTag="";else{var a=[].concat(Y(t.invalid),Y(t.duplicate));this.newTag=t.all.filter((function(e){return Object(v["a"])(a,e)})).join(this.computedJoiner).concat(a.length>0?this.computedJoiner.charAt(0):"")}t.valid.length>0&&(this.tags=Object(v["b"])(this.tags,t.valid)),this.tagsState=t,this.focus()}},removeTag:function(e){var t=this;this.disabled||(this.tags=this.tags.filter((function(t){return t!==e})),this.$nextTick((function(){t.focus()})))},reset:function(){var e=this;this.newTag="",this.tags=[],this.$nextTick((function(){e.removedTags=[],e.tagsState=ve()}))},onInputInput:function(e){if(!(this.disabled||Object(O["d"])(e)&&e.target.composing)){var t=ge(e),a=this.computedSeparatorRegExp;this.newTag!==t&&(this.newTag=t),t=Object($["i"])(t),a&&a.test(t.slice(-1))?this.addTag():this.tagsState=""===t?ve():this.parseTags(t)}},onInputChange:function(e){if(!this.disabled&&this.addOnChange){var t=ge(e);this.newTag!==t&&(this.newTag=t),this.addTag()}},onInputKeydown:function(e){if(!this.disabled&&Object(O["d"])(e)){var t=e.keyCode,a=e.target.value||"";this.noAddOnEnter||t!==p["e"]?!this.removeOnDelete||t!==p["a"]&&t!==p["b"]||""!==a||(Object(S["f"])(e,{propagation:!1}),this.tags=this.tags.slice(0,-1)):(Object(S["f"])(e,{propagation:!1}),this.addTag())}},onClick:function(e){var t=this,a=this.computeIgnoreInputFocusSelector,i=e.target;this.disabled||Object(k["q"])(i)||a&&Object(k["e"])(a,i,!0)||this.$nextTick((function(){t.focus()}))},onFocusin:function(){this.hasFocus=!0},onFocusout:function(){this.hasFocus=!1},handleAutofocus:function(){var e=this;this.$nextTick((function(){Object(k["B"])((function(){e.autofocus&&!e.disabled&&e.focus()}))}))},focus:function(){this.disabled||Object(k["d"])(this.getInput())},blur:function(){this.disabled||Object(k["c"])(this.getInput())},splitTags:function(e){e=Object($["g"])(e);var t=this.computedSeparatorRegExp;return(t?e.split(t):[e]).map($["h"]).filter(y["a"])},parseTags:function(e){var t=this,a=this.splitTags(e),i={all:a,valid:[],invalid:[],duplicate:[]};return a.forEach((function(e){Object(v["a"])(t.tags,e)||Object(v["a"])(i.valid,e)?Object(v["a"])(i.duplicate,e)||i.duplicate.push(e):t.validateTag(e)?i.valid.push(e):Object(v["a"])(i.invalid,e)||i.invalid.push(e)})),i},validateTag:function(e){var t=this.tagValidator;return!Object(w["a"])(t)||t(e)},getInput:function(){return Object(k["C"])("#".concat(Object(j["a"])(this.computedInputId)),this.$el)},defaultRender:function(e){var t=e.addButtonText,a=e.addButtonVariant,i=e.addTag,n=e.disableAddButton,s=e.disabled,r=e.duplicateTagText,o=e.inputAttrs,l=e.inputClass,c=e.inputHandlers,u=e.inputType,d=e.invalidTagText,b=e.isDuplicate,h=e.isInvalid,p=e.isLimitReached,f=e.limitTagsText,m=e.noTagRemove,v=e.placeholder,j=e.removeTag,k=e.tagClass,S=e.tagPills,O=e.tagRemoveLabel,_=e.tagVariant,T=e.tags,x=this.$createElement,w=T.map((function(e){return e=Object($["g"])(e),x(X,{class:k,props:{disabled:s,noRemove:m,pill:S,removeLabel:O,tag:"li",title:e,variant:_},on:{remove:function(){return j(e)}},key:"tags_".concat(e)},e)})),C=d&&h?this.safeId("__invalid_feedback__"):null,I=r&&b?this.safeId("__duplicate_feedback__"):null,A=f&&p?this.safeId("__limit_feedback__"):null,z=[o["aria-describedby"],C,I,A].filter(y["a"]).join(" "),D=x("input",{staticClass:"b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",class:l,style:{outline:0,minWidth:"5rem"},attrs:re(re({},o),{},{"aria-describedby":z||null,type:u,placeholder:v||null}),domProps:{value:o.value},on:c,directives:[{name:"model",value:o.value}],ref:"input"}),P=x(N["a"],{staticClass:"b-form-tags-button py-0",class:{invisible:n},style:{fontSize:"90%"},props:{disabled:n||p,variant:a},on:{click:function(){return i()}},ref:"button"},[this.normalizeSlot(g["a"])||t]),q=this.safeId("__tag_list__"),F=x("li",{staticClass:"b-from-tags-field flex-grow-1",attrs:{role:"none","aria-live":"off","aria-controls":q},key:"tags_field"},[x("div",{staticClass:"d-flex",attrs:{role:"group"}},[D,P])]),R=x("ul",{staticClass:"b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",attrs:{id:q},key:"tags_list"},[w,F]),B=x();if(d||r||f){var J=this.computedJoiner,L=x();C&&(L=x(E["a"],{props:{id:C,forceShow:!0},key:"tags_invalid_feedback"},[this.invalidTagText,": ",this.invalidTags.join(J)]));var Z=x();I&&(Z=x(M["a"],{props:{id:I},key:"tags_duplicate_feedback"},[this.duplicateTagText,": ",this.duplicateTags.join(J)]));var U=x();A&&(U=x(M["a"],{props:{id:A},key:"tags_limit_feedback"},[f])),B=x("div",{attrs:{"aria-live":"polite","aria-atomic":"true"},key:"tags_feedback"},[L,Z,U])}return[R,B]}},render:function(e){var t=this.name,a=this.disabled,i=this.required,n=this.form,s=this.tags,r=this.computedInputId,o=this.hasFocus,l=this.noOuterFocus,c=re({tags:s.slice(),inputAttrs:this.computedInputAttrs,inputType:this.computedInputType,inputHandlers:this.computedInputHandlers,removeTag:this.removeTag,addTag:this.addTag,reset:this.reset,inputId:r,isInvalid:this.hasInvalidTags,invalidTags:this.invalidTags.slice(),isDuplicate:this.hasDuplicateTags,duplicateTags:this.duplicateTags.slice(),isLimitReached:this.isLimitReached,disableAddButton:this.disableAddButton},Object(x["k"])(this.$props,["addButtonText","addButtonVariant","disabled","duplicateTagText","form","inputClass","invalidTagText","limit","limitTagsText","noTagRemove","placeholder","required","separator","size","state","tagClass","tagPills","tagRemoveLabel","tagVariant"])),u=this.normalizeSlot(g["f"],c)||this.defaultRender(c),d=e("output",{staticClass:"sr-only",attrs:{id:this.safeId("__selected_tags__"),role:"status",for:r,"aria-live":o?"polite":"off","aria-atomic":"true","aria-relevant":"additions text"}},this.tags.join(", ")),b=e("div",{staticClass:"sr-only",attrs:{id:this.safeId("__removed_tags__"),role:"status","aria-live":o?"assertive":"off","aria-atomic":"true"}},this.removedTags.length>0?"(".concat(this.tagRemovedLabel,") ").concat(this.removedTags.join(", ")):""),h=e();if(t&&!a){var p=s.length>0;h=(p?s:[""]).map((function(a){return e("input",{class:{"sr-only":!p},attrs:{type:p?"hidden":"text",value:a,required:i,name:t,form:n},key:"tag_input_".concat(a)})}))}return e("div",{staticClass:"b-form-tags form-control h-auto",class:[{focus:o&&!l&&!a,disabled:a},this.sizeFormClass,this.stateClass],attrs:{id:this.safeId(),role:"group",tabindex:a||l?null:"-1","aria-describedby":this.safeId("__selected_tags__")},on:{click:this.onClick,focusin:this.onFocusin,focusout:this.onFocusout}},[d,b,u,h])}});d["default"].component("BFormDatepicker",u["a"]),d["default"].component("BFormTags",ke);var Se={name:"JobSeekForm",components:{TipTapEditor:o["a"],ImageUploader:l["a"]},data(){return{jobSeek:{_id:"new"!=this.$route.params.jobSeekId?this.$route.params.jobSeekId:"",title:"",about:"",tasks:"",experiences:"",isMfa:!1,isZfa:!1,qualifications:[],partTime:!0,fullTime:!0,training:!1,miniJob:!1,salaryMin:0,anonymized:!0,gender:this.$store.state.auth.user.gender||"",firstName:this.$store.state.auth.user.firstName||"",lastName:this.$store.state.auth.user.lastName||"",imageUrl:"",zipCode:"",location:"",accepted:!1},step:0,contactGenderOptions:c["d"],validated:null,success:"",error:""}},async created(){await this.getJobSeek()},methods:{async getJobSeek(){if("new"==this.$route.params.jobSeekId)return null;this.$store.dispatch("setOverlay",!0);try{const e=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                myJobSeek(\n                  _id: "${this.$route.params.jobSeekId}"\n                ) {\n                  _id\n                  title\n                  about\n                  experiences\n                  tasks\n                  isMfa\n                  isZfa\n                  qualifications\n                  partTime\n                  fullTime\n                  training\n                  miniJob\n                  salaryMin\n                  anonymized\n                  gender\n                  firstName\n                  lastName\n                  imageUrl\n                  location\n                  zipCode\n                  accepted\n                }\n              }\n            `}});if(e.data.errors)throw new Error;this.jobSeek=e.data.data.myJobSeek}catch(e){this.$root.$bvToast.toast("Beim Laden des Stellengesuchs ist ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite neu lädst.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},async onSubmit(){if(this.error=!1,!this.formValidation())return this.error="Bitte fülle die erforderlichen Felder aus und beachte die Zeichenvorgaben!",null;let e;this.$store.dispatch("setOverlay",!0),e=this.jobSeek._id?"updateJobSeek":"addJobSeek";try{const t=`\n          mutation {\n            ${e}(\n              ${"updateJobSeek"===e?`_id: "${this.jobSeek._id}"`:""}\n              title: "${this.jobSeek.title}"\n              about: "${this.jobSeek.about.replace(/"/g,'\\"')}"\n              experiences: "${this.jobSeek.experiences.replace(/"/g,'\\"')}"\n              tasks: "${this.jobSeek.tasks.replace(/"/g,'\\"')}"\n              isMfa: ${this.jobSeek.isMfa}\n              isZfa: ${this.jobSeek.isZfa}\n              qualifications: ${JSON.stringify(this.jobSeek.qualifications)}\n              partTime: ${this.jobSeek.partTime}\n              fullTime: ${this.jobSeek.fullTime}\n              training: ${this.jobSeek.training}\n              miniJob: ${this.jobSeek.miniJob}\n              salaryMin: ${this.jobSeek.salaryMin}\n              anonymized: ${this.jobSeek.anonymized}\n              gender: "${this.jobSeek.gender}"\n              firstName: "${this.jobSeek.firstName}"\n              lastName: "${this.jobSeek.lastName}"\n              publicFirstName: "${this.jobSeek.anonymized?this.jobSeek.firstName.charAt()+".":this.jobSeek.firstName}"\n              publicLastName: "${this.jobSeek.anonymized?this.jobSeek.lastName.charAt()+".":this.jobSeek.lastName}"\n              imageUrl: "${this.jobSeek.imageUrl}"\n              location: "${this.jobSeek.location}"\n              zipCode: "${this.jobSeek.zipCode}"\n              accepted: ${this.jobSeek.accepted}\n            ) {\n              _id\n            }\n          }\n        `,a=await this.$axios.post("/graphql",{query:t});if(a.data.errors)throw new Error(a.data.errors[0].message);this.$gtag.event(e,{event_label:`${this.jobSeek.title} | ${this.jobSeek.location} - ${a.data.data[e]._id}`}),this.$root.$bvToast.toast("Das Stellengesuch wurde erfolgreich gespeichert.",{title:"Stellengesuch gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),window.history.length>2?this.$router.go(-1):this.$router.push("/user/stellengesuche")}catch(t){this.$root.$bvToast.toast("Beim Speichern des Stellengesuchs ist ein Fehler aufgetreten. "+t,{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},formatter(e){return e.replaceAll('"',"'")},formValidation(){return this.validated=!0,!!(this.jobSeek.title&&!(this.jobSeek.title.length>155)&&this.jobSeek.about&&this.jobSeek.tasks&&this.jobSeek.experiences&&this.jobSeek.firstName&&this.jobSeek.lastName&&this.jobSeek.zipCode&&this.jobSeek.location&&this.jobSeek.accepted)}}},ye=Se,Oe=a("2877"),_e=Object(Oe["a"])(ye,s,r,!1,null,null,null),Te=_e.exports,xe={name:"UserEditJobSeek",components:{JobSeekForm:Te}},we=xe,$e=Object(Oe["a"])(we,i,n,!1,null,null,null);t["default"]=$e.exports}}]);
//# sourceMappingURL=job_seek_edit.5d07a906.js.map