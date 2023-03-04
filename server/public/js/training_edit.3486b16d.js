(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["training_edit"],{"00ee":function(t,e,i){var n=i("b622"),r=n("toStringTag"),a={};a[r]="z",t.exports="[object z]"===String(a)},"0cb2":function(t,e,i){var n=i("e330"),r=i("7b0b"),a=Math.floor,s=n("".charAt),o=n("".replace),l=n("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,n,g,u){var p=i+t.length,f=n.length,m=c;return void 0!==g&&(g=r(g),m=d),o(u,m,(function(r,o){var d;switch(s(o,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,i);case"'":return l(e,p);case"<":d=g[l(o,1,-1)];break;default:var c=+o;if(0===c)return r;if(c>f){var u=a(c/10);return 0===u?r:u<=f?void 0===n[u-1]?s(o,1):n[u-1]+s(o,1):r}d=n[c-1]}return void 0===d?"":d}))}},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),a=i("b622"),s=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"577e":function(t,e,i){var n=i("da84"),r=i("f5df"),a=n.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return a(t)}},"5b81":function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),a=i("c65b"),s=i("e330"),o=i("1d80"),l=i("1626"),d=i("44e7"),c=i("577e"),g=i("dc4a"),u=i("ad6d"),p=i("0cb2"),f=i("b622"),m=i("c430"),h=f("replace"),b=RegExp.prototype,v=r.TypeError,y=s(u),x=s("".indexOf),_=s("".replace),$=s("".slice),w=Math.max,k=function(t,e,i){return i>t.length?-1:""===e?i:x(t,e,i)};n({target:"String",proto:!0},{replaceAll:function(t,e){var i,n,r,s,u,f,C,S,T,A=o(this),U=0,F=0,z="";if(null!=t){if(i=d(t),i&&(n=c(o("flags"in b?t.flags:y(t))),!~x(n,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(r=g(t,h),r)return a(r,t,A,e);if(m&&i)return _(c(A),t,e)}s=c(A),u=c(t),f=l(e),f||(e=c(e)),C=u.length,S=w(1,C),U=k(s,u,0);while(-1!==U)T=f?c(e(u,U,s)):p(u,s,U,[],void 0,e),z+=$(s,F,U)+T,F=U+C,U=k(s,u,U+S);return F<s.length&&(z+=$(s,F)),z}})},ad6d:function(t,e,i){"use strict";var n=i("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ebd1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-training container py-3 py-lg-5"},[i("h2",[t._v(" Fortbildung "+t._s("new"===t.$route.params.trainingId?"erstellen":"bearbeiten")+" ")]),i("p",[t._v("Bearbeiten Sie hier Ihre Fortbildung.")]),i("TrainingDataForm")],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"training-form position-relative"},[i("b-form",{attrs:{id:"training-form"}},[i("label",{attrs:{for:"title",required:""}},[t._v("Titel der Fortbildung")]),i("b-form-input",{attrs:{id:"title",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!(t.training.title&&t.training.title.length<=75):null,"aria-describedby":"title-help title-feedback",placeholder:"Titel der Fortbildung eingeben...",required:"",trim:""},model:{value:t.training.title,callback:function(e){t.$set(t.training,"title",e)},expression:"training.title"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"title-feedback"}},[t._v(" Bitte nutzen Sie maximal 155 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"title-help"}},[i("span",{class:[{"text-danger":t.training.title.length>75}]},[t._v(" "+t._s(75-t.training.title.length)+" Zeichen verfügbar")])]),t.$store.state.auth.user.isAdmin?i("b-form-group",{staticClass:"bg-light-shade border-radius1 p-3 mt-3"},[i("h6",[t._v("ADMIN")]),i("label",{attrs:{for:"is-sponsored"}},[t._v("isSponsored")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"is-sponsored",options:[!0,!1],name:"is-sponsored",size:"sm"},model:{value:t.training.isSponsored,callback:function(e){t.$set(t.training,"isSponsored",e)},expression:"training.isSponsored"}})],1):t._e(),i("label",{attrs:{for:"excerpt",required:""}},[t._v("Kurzbeschreibung der Fortbildung für Vorschau")]),i("b-form-textarea",{attrs:{id:"excerpt",type:"text",rows:"6","lazy-formatter":"",wrap:"hard",formatter:t.formatter,state:t.validated?!!(t.training.excerpt&&t.training.excerpt.length<=700):null,"aria-describedby":"excerpt-help excerpt-feedback",placeholder:"Kurzbeschreibung der Fortbildung eingeben...",required:"",trim:""},model:{value:t.training.excerpt,callback:function(e){t.$set(t.training,"excerpt",e)},expression:"training.excerpt"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"excerpt-feedback"}},[t._v(" Bitte nutzen Sie maximal 700 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"excerpt-help"}},[i("span",{class:[{"text-danger":t.training.excerpt.length>700}]},[t._v(" "+t._s(700-t.training.excerpt.length)+" Zeichen verfügbar")])]),i("label",{attrs:{for:"description"}},[t._v("Beschreibung")]),i("TipTapEditor",{attrs:{validated:t.validated,content:t.training.desc,placeholder:"Beschreiben Sie die Fort- / Weiterbildung bei Bedarf hier ausführlich. Sie können beispielsweise Angaben zu Lerninhalten, Karriereperspektiven, Dauer, Lernpensum etc. machen."},on:{"update-content":function(e){t.training.desc=e}}}),i("label",{attrs:{for:"ext-training-url",required:""}},[t._v("Ihre Webseite zur Fortbildung")]),i("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",[i("svg",{staticClass:"bi bi-link-45deg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}}),i("path",{attrs:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"}})])])]},proxy:!0}])},[i("b-form-input",{attrs:{id:"ext-training-url",type:"url","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!t.training.extUrl:null,placeholder:"https://www.ihr-unternehmen.de/fortbildung"},model:{value:t.training.extUrl,callback:function(e){t.$set(t.training,"extUrl",e)},expression:"training.extUrl"}})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-4"},[i("label",{attrs:{for:"training-event-type",required:""}},[t._v("Veranstaltungsart")]),i("b-form-select",{attrs:{id:"training-event-type",state:t.validated?!!t.training.eventType:null},model:{value:t.training.eventType,callback:function(e){t.$set(t.training,"eventType",e)},expression:"training.eventType"}},[i("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Art auswählen --")]),t._l(t.eventTypeOptions,(function(e){return i("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1),i("div",{staticClass:"col-12 col-lg-4"},[i("label",{attrs:{for:"training-graduation",required:""}},[t._v("Abschluss")]),i("b-form-select",{attrs:{id:"training-graduation",state:t.validated?!!t.training.eventType:null},model:{value:t.training.graduation,callback:function(e){t.$set(t.training,"graduation",e)},expression:"training.graduation"}},[i("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Abschluss auswählen --")]),t._l(t.graduationOptions,(function(e){return i("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1),i("div",{staticClass:"w-100"}),i("div",{staticClass:"col-12 col-lg-6"},[i("label",{attrs:{for:"training-duration"}},[t._v("Dauer der Fortbildung")]),i("b-form-input",{attrs:{id:"training-duration",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!(t.training.duration&&t.training.duration.length<=55)||null,"aria-describedby":"duration-help duration-feedback",placeholder:"Dauer der Fortbildung eingeben...",trim:""},model:{value:t.training.duration,callback:function(e){t.$set(t.training,"duration",e)},expression:"training.duration"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"duration-feedback"}},[t._v(" Bitte nutzen Sie maximal 55 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"duration-help"}},[i("span",{class:[{"text-danger":t.training.duration.length>55}]},[t._v(" "+t._s(55-t.training.duration.length)+" Zeichen verfügbar")])])],1),i("div",{staticClass:"col-12 col-lg-6"},[i("label",{attrs:{for:"training-effort"}},[t._v("Zeitaufwand")]),i("b-form-input",{attrs:{id:"training-effort",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!(t.training.effort&&t.training.effort.length<=55)||null,"aria-describedby":"effort-help effort-feedback",placeholder:"z.B. 5 Stunden pro Woche...",trim:""},model:{value:t.training.effort,callback:function(e){t.$set(t.training,"effort",e)},expression:"training.effort"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"effort-feedback"}},[t._v(" Bitte nutzen Sie maximal 55 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"effort-help"}},[i("span",{class:[{"text-danger":t.training.effort.length>55}]},[t._v(" "+t._s(55-t.training.effort.length)+" Zeichen verfügbar")])])],1)]),i("b-form-group",[i("label",{staticClass:"mt-4",attrs:{for:"start-anytime"}},[t._v("Start der Fortbildung")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"start-anytime",options:[{value:!0,text:"Start jederzeit"},{value:!1,text:"Termine regelmäßig / auf Anfrage"}],name:"start-anytime",size:"sm"},model:{value:t.training.startAnytime,callback:function(e){t.$set(t.training,"startAnytime",e)},expression:"training.startAnytime"}})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-4"},[i("label",{attrs:{for:"cost"}},[t._v("Kosten für Fortbildung")]),i("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",[t._v("€")])]},proxy:!0}])},[i("b-form-input",{attrs:{id:"cost",type:"number",number:"",min:"0",state:t.validated&&!!t.cost||null,placeholder:"Kosten für Fortbildung eingeben..."},model:{value:t.cost,callback:function(e){t.cost=e},expression:"cost"}})],1)],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-4"},[i("label",{attrs:{for:"profession"}},[t._v("Berufsgruppe")]),i("b-form-select",{attrs:{id:"profession",state:!!t.validated||null},model:{value:t.training.profession,callback:function(e){t.$set(t.training,"profession",e)},expression:"training.profession"}},[i("b-form-select-option",{attrs:{value:""}},[t._v("-- Alle Berufsgruppen --")]),t._l(t.professionOptions,(function(e){return i("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2)],1),i("div",{staticClass:"col-12 col-lg-4"},[i("label",{attrs:{for:"training-type",required:""}},[t._v("Bereich")]),i("b-form-select",{attrs:{id:"training-type",state:t.validated?!!t.training.type:null},model:{value:t.training.type,callback:function(e){t.$set(t.training,"type",e)},expression:"training.type"}},[i("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Bereich auswählen --")]),t._l(t.typeOptions,(function(e){return i("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1)]),i("b-form-group",[i("label",{staticClass:"mt-4",attrs:{for:"remote"}},[t._v("Unterrichtsform")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"remote",options:[{value:!1,text:"Präsenz / Hybrid"},{value:!0,text:"Online / Fern"}],name:"remote",size:"sm"},model:{value:t.training.remote,callback:function(e){t.$set(t.training,"remote",e)},expression:"training.remote"}}),t.training.remote?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("label",{staticClass:"mt-1",attrs:{for:"training-location"}},[t._v("Ort")]),i("b-form-input",{attrs:{id:"training-location",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!t.training.title||null,placeholder:"Ort der Fortbildung eingeben...",trim:"","aria-describedby":"location-help"},model:{value:t.training.location,callback:function(e){t.$set(t.training,"location",e)},expression:"training.location"}}),i("b-form-text",{staticClass:"ml-2",attrs:{id:"location-help"}},[t._v("Mehrere Orte mit Komma trennen")])],1),i("div",{staticClass:"col-12 col-lg-4"},[i("label",{staticClass:"mt-2",attrs:{for:"training-state"}},[t._v("Bundesland")]),i("b-form-select",{staticStyle:{"border-radius":"5px 0 0 5px"},attrs:{id:"training-state",state:t.validated&&!!t.state||null,multiple:"","aria-describedby":"state-help"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[i("b-form-select-option",{attrs:{value:""}},[t._v("-- Bundesland auswählen --")]),t._l(t.companyStateOptions,(function(e){return i("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2),i("b-form-text",{staticClass:"ml-2",attrs:{id:"state-help"}},[t._v("'STRG' für Mehrfachauswahl gedrückt halten")])],1)])],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-6"},[i("label",{attrs:{for:"company",required:""}},[t._v("Unternehmen")]),i("b-form-input",{attrs:{id:"company",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!(t.training.company&&t.training.company.length<=155):null,placeholder:"Name des Fortbildungsunternehmens eingeben...",required:"",trim:""},model:{value:t.training.company,callback:function(e){t.$set(t.training,"company",e)},expression:"training.company"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-6"},[i("label",{attrs:{for:"logo"}},[t._v("Logo")]),i("ImageUploader",{attrs:{id:"logo",validated:t.validated,"image-url":t.training.logoUrl,width:200,height:200,fit:"inside","aria-describedby":"logo-url-help"},on:{"update-url":function(e){t.training.logoUrl=e}}}),i("b-form-text",{staticClass:"ml-2",attrs:{id:"logo-url-help"}},[i("span",[t._v("jpg, png | max. 5MB")])]),t.$store.state.auth.user.isAdmin?i("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:t.training.logoUrl,callback:function(e){t.$set(t.training,"logoUrl",e)},expression:"training.logoUrl"}}):t._e(),i("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"55px",height:"55px"}},[t.training.logoUrl?i("b-img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.training.logoUrl,fluid:""}}):i("svg",{staticClass:"bi bi-box p-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"}})])],1)],1)]),i("div",{staticClass:"d-flex justify-content-between my-4"},[i("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v(" Abbrechen ")]),i("b-button",{attrs:{variant:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v(" Speichern ")])],1)],1),t.error?i("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(t.error))]):t._e()],1)},s=[],o=(i("5b81"),i("4aca")),l=i("324b"),d=i("2b0e"),c=i("c2f1"),g=i("1ba6");d["default"].component("BFormDatepicker",c["a"]);var u={name:"TrainingDataForm",components:{TipTapEditor:o["a"],ImageUploader:l["a"]},data(){return{training:{title:"",excerpt:"",desc:"",remote:!1,startAnytime:!1,location:"",state:"",company:"",logoUrl:"",type:"",eventType:"",graduation:"",profession:"",duration:"",effort:"",cost:null,extUrl:"",isSponsored:!!this.$store.state.auth.user.isAdmin},validated:null,success:!1,error:!1,professionOptions:g["j"],companyStateOptions:g["d"],typeOptions:g["m"],eventTypeOptions:g["h"],graduationOptions:g["i"]}},computed:{cost:{get(){return this.training.cost},set(t){this.training.cost=t||null}},state:{get(){return this.training.state.split(",")},set(t){this.training.state=t.join(",")}}},created(){"new"!=this.$route.params.trainingId&&this.getTraining(this.$route.params.trainingId)},methods:{async getTraining(t){try{const e=this.$store.state.auth.user.isAdmin?"adminTraining":"myTraining",i=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                ${e} (_id: "${t}") {\n                  _id\n                  title\n                  excerpt\n                  desc\n                  remote\n                  startAnytime\n                  location\n                  state\n                  company\n                  logoUrl\n                  type\n                  eventType\n                  graduation\n                  profession\n                  duration\n                  effort\n                  cost\n                  extUrl\n                  isSponsored\n                }\n              }\n            `}});if(i.data.errors)throw new Error("Fortbildung konnte nicht geladen werden.");this.training=i.data.data[e]}catch(e){this.$root.$bvToast.toast("Beim Laden der Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}},async onSubmit(){this.error=!1;try{if(!this.formValidation())return this.error="Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!",null;this.$store.dispatch("setOverlay",!0);const t=this.training._id?"updateTraining":"addTraining",e=await this.$axios.post("/graphql",{query:`\n            mutation {\n              ${t} (\n                ${this.training._id?`_id: "${this.training._id}"`:""}\n                title: "${this.training.title}"\n                excerpt: "${this.training.excerpt.replace(/\n/g,"\\n")}"\n                desc: "${this.training.desc.replace(/"/g,'\\"')}"\n                remote: ${this.training.remote}\n                startAnytime: ${this.training.startAnytime}\n                location: "${this.training.location?this.training.location:""}"\n                state: "${this.training.state?this.training.state:""}"\n                company: "${this.training.company}"\n                logoUrl: "${this.training.logoUrl?this.training.logoUrl:""}"\n                type: "${this.training.type}"\n                eventType: "${this.training.eventType}"\n                graduation: "${this.training.graduation}"\n                profession: "${this.training.profession}"\n                duration: "${this.training.duration?this.training.duration:""}"\n                effort: "${this.training.effort?this.training.effort:""}"\n                cost: ${this.training.cost}\n                extUrl: "${!/^https?:\/\//i.test(this.training.extUrl)&&this.training.extUrl?"https://"+this.training.extUrl:this.training.extUrl}"\n                isSponsored: ${this.training.isSponsored}\n              ) {\n                _id\n                title\n                excerpt\n                desc\n                remote\n                startAnytime\n                location\n                state\n                company\n                logoUrl\n                type\n                eventType\n                graduation\n                profession\n                duration\n                effort\n                cost\n                extUrl\n                isSponsored\n              }\n            }\n          `});if(e.data.errors)throw new Error("Training could not be saved.");this.$gtag.event("training_"+(/update/gi.test(t)?"update":"add"),{event_label:`${this.training.title} | ${this.training.company} - ${e.data.data[t]._id}`}),this.$matomo&&this.$matomo.trackEvent("engagement","training_"+(/update/gi.test(t)?"update":"add"),`${this.training.title} | ${this.training.company} - ${e.data.data[t]._id}`),this.$root.$bvToast.toast("Die Fortbildung wurde erfolgreich gespeichert.",{title:"Fortbildung gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),this.$router.push("/user/fortbildungen")}catch(t){this.$root.$bvToast.toast("Beim Speichern Ihrer Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},formatter(t){return t.replaceAll('"',"'").replace(/&amp;/,"&")},formValidation(){return this.validated=!0,!(!this.training.title||this.training.title.length>75||!this.training.excerpt||this.training.excerpt.length>700||!this.training.extUrl||!this.training.company||!this.training.type||!this.training.eventType||!this.training.graduation||this.training.effort.length>55||this.training.duration.length>55)}}},p=u,f=i("2877"),m=Object(f["a"])(p,a,s,!1,null,null,null),h=m.exports,b={name:"UserTrainingEdit",components:{TrainingDataForm:h}},v=b,y=Object(f["a"])(v,n,r,!1,null,null,null);e["default"]=y.exports},f5df:function(t,e,i){var n=i("da84"),r=i("00ee"),a=i("1626"),s=i("c6b6"),o=i("b622"),l=o("toStringTag"),d=n.Object,c="Arguments"==s(function(){return arguments}()),g=function(t,e){try{return t[e]}catch(i){}};t.exports=r?s:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=g(e=d(t),l))?i:c?s(e):"Object"==(n=s(e))&&a(e.callee)?"Arguments":n}}}]);
//# sourceMappingURL=training_edit.3486b16d.js.map