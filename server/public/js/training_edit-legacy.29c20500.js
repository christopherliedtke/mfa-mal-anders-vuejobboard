(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["training_edit"],{1276:function(t,e,n){"use strict";var i=n("2ba4"),r=n("c65b"),a=n("e330"),o=n("d784"),s=n("44e7"),l=n("825a"),c=n("1d80"),d=n("4840"),u=n("8aa5"),g=n("50c4"),p=n("577e"),f=n("dc4a"),m=n("f36a"),b=n("14c3"),v=n("9263"),h=n("9f7f"),x=n("d039"),y=h.UNSUPPORTED_Y,_=4294967295,w=Math.min,k=[].push,C=a(/./.exec),S=a(k),T=a("".slice),$=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=p(c(this)),o=void 0===n?_:n>>>0;if(0===o)return[];if(void 0===t)return[a];if(!s(t))return r(e,a,t,o);var l,d,u,g=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,h=new RegExp(t.source,f+"g");while(l=r(v,h,a)){if(d=h.lastIndex,d>b&&(S(g,T(a,b,l.index)),l.length>1&&l.index<a.length&&i(k,g,m(l,1)),u=l[0].length,b=d,g.length>=o))break;h.lastIndex===l.index&&h.lastIndex++}return b===a.length?!u&&C(h,"")||S(g,""):S(g,T(a,b)),g.length>o?m(g,0,o):g}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=c(this),o=void 0==e?void 0:f(e,t);return o?r(o,e,i,n):r(a,p(i),e,n)},function(t,i){var r=l(this),o=p(t),s=n(a,r,o,i,a!==e);if(s.done)return s.value;var c=d(r,RegExp),f=r.unicode,m=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(y?"g":"y"),v=new c(y?"^(?:"+r.source+")":r,m),h=void 0===i?_:i>>>0;if(0===h)return[];if(0===o.length)return null===b(v,o)?[o]:[];var x=0,k=0,C=[];while(k<o.length){v.lastIndex=y?0:k;var $,U=b(v,y?T(o,k):o);if(null===U||($=w(g(v.lastIndex+(y?k:0)),o.length))===x)k=u(o,k,f);else{if(S(C,T(o,x,k)),C.length===h)return C;for(var A=1;A<=U.length-1;A++)if(S(C,U[A]),C.length===h)return C;k=x=$}}return S(C,T(o,x)),C}]}),!$,y)},"5b81":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("c65b"),o=n("e330"),s=n("1d80"),l=n("1626"),c=n("44e7"),d=n("577e"),u=n("dc4a"),g=n("ad6d"),p=n("0cb2"),f=n("b622"),m=n("c430"),b=f("replace"),v=RegExp.prototype,h=r.TypeError,x=o(g),y=o("".indexOf),_=o("".replace),w=o("".slice),k=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:y(t,e,n)};i({target:"String",proto:!0},{replaceAll:function(t,e){var n,i,r,o,g,f,S,T,$,U=s(this),A=0,F=0,z="";if(null!=t){if(n=c(t),n&&(i=d(s("flags"in v?t.flags:x(t))),!~y(i,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(r=u(t,b),r)return a(r,t,U,e);if(m&&n)return _(d(U),t,e)}o=d(U),g=d(t),f=l(e),f||(e=d(e)),S=g.length,T=k(1,S),A=C(o,g,0);while(-1!==A)$=f?d(e(g,A,o)):p(g,o,A,[],void 0,e),z+=w(o,F,A)+$,F=A+S,A=C(o,g,A+T);return F<o.length&&(z+=w(o,F)),z}})},"990f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-training container py-3 py-lg-5"},[n("h2",[t._v(" Fortbildung "+t._s("new"===t.$route.params.trainingId?"erstellen":"bearbeiten")+" ")]),n("p",[t._v("Bearbeiten Sie hier Ihre Fortbildung.")]),n("TrainingDataForm")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"training-form position-relative"},[n("b-form",{attrs:{id:"training-form"}},[n("label",{attrs:{for:"title",required:""}},[t._v("Titel der Fortbildung")]),n("b-form-input",{attrs:{id:"title",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!(t.training.title&&t.training.title.length<=75):null,"aria-describedby":"title-help title-feedback",placeholder:"Titel der Fortbildung eingeben...",required:"",trim:""},model:{value:t.training.title,callback:function(e){t.$set(t.training,"title",e)},expression:"training.title"}}),n("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"title-feedback"}},[t._v(" Bitte nutzen Sie maximal 155 Zeichen. ")]),n("b-form-text",{staticClass:"ml-2",attrs:{id:"title-help"}},[n("span",{class:[{"text-danger":t.training.title.length>75}]},[t._v(" "+t._s(75-t.training.title.length)+" Zeichen verfügbar")])]),t.$store.state.auth.user.isAdmin?n("b-form-group",{staticClass:"bg-light-shade border-radius1 p-3 mt-3"},[n("h6",[t._v("ADMIN")]),n("label",{attrs:{for:"is-sponsored"}},[t._v("isSponsored")]),n("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"is-sponsored",options:[!0,!1],name:"is-sponsored",size:"sm"},model:{value:t.training.isSponsored,callback:function(e){t.$set(t.training,"isSponsored",e)},expression:"training.isSponsored"}})],1):t._e(),n("label",{attrs:{for:"excerpt",required:""}},[t._v("Kurzbeschreibung der Fortbildung für Vorschau")]),n("b-form-textarea",{attrs:{id:"excerpt",type:"text",rows:"6","lazy-formatter":"",wrap:"hard",formatter:t.formatter,state:t.validated?!!(t.training.excerpt&&t.training.excerpt.length<=700):null,"aria-describedby":"excerpt-help excerpt-feedback",placeholder:"Kurzbeschreibung der Fortbildung eingeben...",required:"",trim:""},model:{value:t.training.excerpt,callback:function(e){t.$set(t.training,"excerpt",e)},expression:"training.excerpt"}}),n("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"excerpt-feedback"}},[t._v(" Bitte nutzen Sie maximal 700 Zeichen. ")]),n("b-form-text",{staticClass:"ml-2",attrs:{id:"excerpt-help"}},[n("span",{class:[{"text-danger":t.training.excerpt.length>700}]},[t._v(" "+t._s(700-t.training.excerpt.length)+" Zeichen verfügbar")])]),n("label",{attrs:{for:"description"}},[t._v("Beschreibung")]),n("TipTapEditor",{attrs:{validated:t.validated,content:t.training.desc,placeholder:"Beschreiben Sie die Fort- / Weiterbildung bei Bedarf hier ausführlich. Sie können beispielsweise Angaben zu Lerninhalten, Karriereperspektiven, Dauer, Lernpensum etc. machen."},on:{"update-content":function(e){t.training.desc=e}}}),n("label",{attrs:{for:"ext-training-url",required:""}},[t._v("Ihre Webseite zur Fortbildung")]),n("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",[n("svg",{staticClass:"bi bi-link-45deg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}}),n("path",{attrs:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"}})])])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"ext-training-url",type:"url","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!t.training.extUrl:null,placeholder:"https://www.ihr-unternehmen.de/fortbildung"},model:{value:t.training.extUrl,callback:function(e){t.$set(t.training,"extUrl",e)},expression:"training.extUrl"}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-4"},[n("label",{attrs:{for:"training-event-type",required:""}},[t._v("Veranstaltungsart")]),n("b-form-select",{attrs:{id:"training-event-type",state:t.validated?!!t.training.eventType:null},model:{value:t.training.eventType,callback:function(e){t.$set(t.training,"eventType",e)},expression:"training.eventType"}},[n("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Art auswählen --")]),t._l(t.eventTypeOptions,(function(e){return n("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1),n("div",{staticClass:"col-12 col-lg-4"},[n("label",{attrs:{for:"training-graduation",required:""}},[t._v("Abschluss")]),n("b-form-select",{attrs:{id:"training-graduation",state:t.validated?!!t.training.eventType:null},model:{value:t.training.graduation,callback:function(e){t.$set(t.training,"graduation",e)},expression:"training.graduation"}},[n("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Abschluss auswählen --")]),t._l(t.graduationOptions,(function(e){return n("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1),n("div",{staticClass:"w-100"}),n("div",{staticClass:"col-12 col-lg-6"},[n("label",{attrs:{for:"training-duration"}},[t._v("Dauer der Fortbildung")]),n("b-form-input",{attrs:{id:"training-duration",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!(t.training.duration&&t.training.duration.length<=55)||null,"aria-describedby":"duration-help duration-feedback",placeholder:"Dauer der Fortbildung eingeben...",trim:""},model:{value:t.training.duration,callback:function(e){t.$set(t.training,"duration",e)},expression:"training.duration"}}),n("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"duration-feedback"}},[t._v(" Bitte nutzen Sie maximal 55 Zeichen. ")]),n("b-form-text",{staticClass:"ml-2",attrs:{id:"duration-help"}},[n("span",{class:[{"text-danger":t.training.duration.length>55}]},[t._v(" "+t._s(55-t.training.duration.length)+" Zeichen verfügbar")])])],1),n("div",{staticClass:"col-12 col-lg-6"},[n("label",{attrs:{for:"training-effort"}},[t._v("Zeitaufwand")]),n("b-form-input",{attrs:{id:"training-effort",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!(t.training.effort&&t.training.effort.length<=55)||null,"aria-describedby":"effort-help effort-feedback",placeholder:"z.B. 5 Stunden pro Woche...",trim:""},model:{value:t.training.effort,callback:function(e){t.$set(t.training,"effort",e)},expression:"training.effort"}}),n("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"effort-feedback"}},[t._v(" Bitte nutzen Sie maximal 55 Zeichen. ")]),n("b-form-text",{staticClass:"ml-2",attrs:{id:"effort-help"}},[n("span",{class:[{"text-danger":t.training.effort.length>55}]},[t._v(" "+t._s(55-t.training.effort.length)+" Zeichen verfügbar")])])],1)]),n("b-form-group",[n("label",{staticClass:"mt-4",attrs:{for:"start-anytime"}},[t._v("Start der Fortbildung")]),n("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"start-anytime",options:[{value:!0,text:"Start jederzeit"},{value:!1,text:"Termine regelmäßig / auf Anfrage"}],name:"start-anytime",size:"sm"},model:{value:t.training.startAnytime,callback:function(e){t.$set(t.training,"startAnytime",e)},expression:"training.startAnytime"}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-4"},[n("label",{attrs:{for:"cost"}},[t._v("Kosten für Fortbildung")]),n("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",[t._v("€")])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"cost",type:"number",number:"",min:"0",state:t.validated&&!!t.cost||null,placeholder:"Kosten für Fortbildung eingeben..."},model:{value:t.cost,callback:function(e){t.cost=e},expression:"cost"}})],1)],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-4"},[n("label",{attrs:{for:"profession"}},[t._v("Berufsgruppe")]),n("b-form-select",{attrs:{id:"profession",state:!!t.validated||null},model:{value:t.training.profession,callback:function(e){t.$set(t.training,"profession",e)},expression:"training.profession"}},[n("b-form-select-option",{attrs:{value:""}},[t._v("-- Alle Berufsgruppen --")]),t._l(t.professionOptions,(function(e){return n("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2)],1),n("div",{staticClass:"col-12 col-lg-4"},[n("label",{attrs:{for:"training-type",required:""}},[t._v("Bereich")]),n("b-form-select",{attrs:{id:"training-type",state:t.validated?!!t.training.type:null},model:{value:t.training.type,callback:function(e){t.$set(t.training,"type",e)},expression:"training.type"}},[n("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Bereich auswählen --")]),t._l(t.typeOptions,(function(e){return n("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1)]),n("b-form-group",[n("label",{staticClass:"mt-4",attrs:{for:"remote"}},[t._v("Unterrichtsform")]),n("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"remote",options:[{value:!1,text:"Präsenz / Hybrid"},{value:!0,text:"Online / Fern"}],name:"remote",size:"sm"},model:{value:t.training.remote,callback:function(e){t.$set(t.training,"remote",e)},expression:"training.remote"}}),t.training.remote?t._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("label",{staticClass:"mt-1",attrs:{for:"training-location"}},[t._v("Ort")]),n("b-form-input",{attrs:{id:"training-location",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!t.training.title||null,placeholder:"Ort der Fortbildung eingeben...",trim:"","aria-describedby":"location-help"},model:{value:t.training.location,callback:function(e){t.$set(t.training,"location",e)},expression:"training.location"}}),n("b-form-text",{staticClass:"ml-2",attrs:{id:"location-help"}},[t._v("Mehrere Orte mit Komma trennen")])],1),n("div",{staticClass:"col-12 col-lg-4"},[n("label",{staticClass:"mt-2",attrs:{for:"training-state"}},[t._v("Bundesland")]),n("b-form-select",{staticStyle:{"border-radius":"5px 0 0 5px"},attrs:{id:"training-state",state:t.validated&&!!t.state||null,multiple:"","aria-describedby":"state-help"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("b-form-select-option",{attrs:{value:""}},[t._v("-- Bundesland auswählen --")]),t._l(t.companyStateOptions,(function(e){return n("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2),n("b-form-text",{staticClass:"ml-2",attrs:{id:"state-help"}},[t._v("'STRG' für Mehrfachauswahl gedrückt halten")])],1)])],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-6"},[n("label",{attrs:{for:"company",required:""}},[t._v("Unternehmen")]),n("b-form-input",{attrs:{id:"company",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!(t.training.company&&t.training.company.length<=155):null,placeholder:"Name des Fortbildungsunternehmens eingeben...",required:"",trim:""},model:{value:t.training.company,callback:function(e){t.$set(t.training,"company",e)},expression:"training.company"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-6"},[n("label",{attrs:{for:"logo"}},[t._v("Logo")]),n("ImageUploader",{attrs:{id:"logo",validated:t.validated,"image-url":t.training.logoUrl,width:200,height:200,fit:"inside","aria-describedby":"logo-url-help"},on:{"update-url":function(e){t.training.logoUrl=e}}}),n("b-form-text",{staticClass:"ml-2",attrs:{id:"logo-url-help"}},[n("span",[t._v("jpg, png | max. 5MB")])]),t.$store.state.auth.user.isAdmin?n("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:t.training.logoUrl,callback:function(e){t.$set(t.training,"logoUrl",e)},expression:"training.logoUrl"}}):t._e(),n("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"55px",height:"55px"}},[t.training.logoUrl?n("b-img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.training.logoUrl,fluid:""}}):n("svg",{staticClass:"bi bi-box p-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"}})])],1)],1)]),n("div",{staticClass:"d-flex justify-content-between my-4"},[n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v(" Abbrechen ")]),n("b-button",{attrs:{variant:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v(" Speichern ")])],1)],1),t.error?n("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(t.error))]):t._e()],1)},o=[],s=n("1da1"),l=(n("96cf"),n("ac1f"),n("1276"),n("a15b"),n("99af"),n("5319"),n("00b4"),n("5b81"),n("4aca")),c=n("324b"),d=n("2b0e"),u=n("c2f1"),g=n("1ba6");d["default"].component("BFormDatepicker",u["a"]);var p={name:"TrainingDataForm",components:{TipTapEditor:l["a"],ImageUploader:c["a"]},data:function(){return{training:{title:"",excerpt:"",desc:"",remote:!1,startAnytime:!1,location:"",state:"",company:"",logoUrl:"",type:"",eventType:"",graduation:"",profession:"",duration:"",effort:"",cost:null,extUrl:"",isSponsored:!!this.$store.state.auth.user.isAdmin},validated:null,success:!1,error:!1,professionOptions:g["j"],companyStateOptions:g["d"],typeOptions:g["m"],eventTypeOptions:g["h"],graduationOptions:g["i"]}},computed:{cost:{get:function(){return this.training.cost},set:function(t){this.training.cost=t||null}},state:{get:function(){return this.training.state.split(",")},set:function(t){this.training.state=t.join(",")}}},created:function(){"new"!=this.$route.params.trainingId&&this.getTraining(this.$route.params.trainingId)},methods:{getTraining:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,i=e.$store.state.auth.user.isAdmin?"adminTraining":"myTraining",n.next=4,e.$axios.get("/graphql",{params:{query:"\n              query {\n                ".concat(i,' (_id: "').concat(t,'") {\n                  _id\n                  title\n                  excerpt\n                  desc\n                  remote\n                  startAnytime\n                  location\n                  state\n                  company\n                  logoUrl\n                  type\n                  eventType\n                  graduation\n                  profession\n                  duration\n                  effort\n                  cost\n                  extUrl\n                  isSponsored\n                }\n              }\n            ')}});case 4:if(r=n.sent,!r.data.errors){n.next=7;break}throw new Error("Fortbildung konnte nicht geladen werden.");case 7:e.training=r.data.data[i],n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),e.$root.$bvToast.toast("Beim Laden der Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},onSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.error=!1,e.prev=1,t.formValidation()){e.next=5;break}return t.error="Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!",e.abrupt("return",null);case 5:return t.$store.dispatch("setOverlay",!0),n=t.training._id?"updateTraining":"addTraining",e.next=9,t.$axios.post("/graphql",{query:"\n            mutation {\n              ".concat(n," (\n                ").concat(t.training._id?'_id: "'.concat(t.training._id,'"'):"",'\n                title: "').concat(t.training.title,'"\n                excerpt: "').concat(t.training.excerpt.replace(/\n/g,"\\n"),'"\n                desc: "').concat(t.training.desc.replace(/"/g,'\\"'),'"\n                remote: ').concat(t.training.remote,"\n                startAnytime: ").concat(t.training.startAnytime,'\n                location: "').concat(t.training.location?t.training.location:"",'"\n                state: "').concat(t.training.state?t.training.state:"",'"\n                company: "').concat(t.training.company,'"\n                logoUrl: "').concat(t.training.logoUrl?t.training.logoUrl:"",'"\n                type: "').concat(t.training.type,'"\n                eventType: "').concat(t.training.eventType,'"\n                graduation: "').concat(t.training.graduation,'"\n                profession: "').concat(t.training.profession,'"\n                duration: "').concat(t.training.duration?t.training.duration:"",'"\n                effort: "').concat(t.training.effort?t.training.effort:"",'"\n                cost: ').concat(t.training.cost,'\n                extUrl: "').concat(!/^https?:\/\//i.test(t.training.extUrl)&&t.training.extUrl?"https://"+t.training.extUrl:t.training.extUrl,'"\n                isSponsored: ').concat(t.training.isSponsored,"\n              ) {\n                _id\n                title\n                excerpt\n                desc\n                remote\n                startAnytime\n                location\n                state\n                company\n                logoUrl\n                type\n                eventType\n                graduation\n                profession\n                duration\n                effort\n                cost\n                extUrl\n                isSponsored\n              }\n            }\n          ")});case 9:if(i=e.sent,!i.data.errors){e.next=12;break}throw new Error("Training could not be saved.");case 12:t.$gtag.event("training_".concat(/update/gi.test(n)?"update":"add"),{event_label:"".concat(t.training.title," | ").concat(t.training.company," - ").concat(i.data.data[n]._id)}),t.$root.$bvToast.toast("Die Fortbildung wurde erfolgreich gespeichert.",{title:"Fortbildung gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),t.$router.push("/user/fortbildungen"),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](1),t.$root.$bvToast.toast("Beim Speichern Ihrer Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 20:t.$store.dispatch("setOverlay",!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))()},formatter:function(t){return t.replaceAll('"',"'").replace(/&amp;/,"&")},formValidation:function(){return this.validated=!0,!(!this.training.title||this.training.title.length>75||!this.training.excerpt||this.training.excerpt.length>700||!this.training.extUrl||!this.training.company||!this.training.type||!this.training.eventType||!this.training.graduation||this.training.effort.length>55||this.training.duration.length>55)}}},f=p,m=n("2877"),b=Object(m["a"])(f,a,o,!1,null,null,null),v=b.exports,h={name:"UserEditTraining",components:{TrainingDataForm:v}},x=h,y=Object(m["a"])(x,i,r,!1,null,null,null);e["default"]=y.exports},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),a=n("44ad"),o=n("fc6a"),s=n("a640"),l=r([].join),c=a!=Object,d=s("join",",");i({target:"Array",proto:!0,forced:c||!d},{join:function(t){return l(o(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}}}]);
//# sourceMappingURL=training_edit-legacy.29c20500.js.map