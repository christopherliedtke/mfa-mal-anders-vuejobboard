(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["training_edit"],{"1b2a":function(t,e,i){},a8a7:function(t,e,i){"use strict";i("1b2a")},c2ad:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-training container py-3 py-lg-5"},[i("h2",[t._v(" Fortbildung "+t._s("new"===t.$route.params.trainingId?"erstellen":"bearbeiten")+" ")]),i("p",[t._v("Bearbeiten Sie hier Ihre Fortbildung.")]),i("TrainingForm")],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"training-form position-relative"},[i("b-form",{attrs:{id:"training-form"}},[i("label",{attrs:{for:"title",required:""}},[t._v("Titel der Fortbildung")]),i("b-form-input",{attrs:{id:"title",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!(t.training.title&&t.training.title.length<=75):null,"aria-describedby":"title-help title-feedback",placeholder:"Titel der Fortbildung eingeben...",required:"",trim:""},model:{value:t.training.title,callback:function(e){t.$set(t.training,"title",e)},expression:"training.title"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"title-feedback"}},[t._v(" Bitte nutzen Sie maximal 155 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"title-help"}},[i("span",{class:[{"text-danger":t.training.title.length>75}]},[t._v(" "+t._s(75-t.training.title.length)+" Zeichen verfügbar")])]),t.$store.state.auth.user.isAdmin?i("b-form-group",{staticClass:"bg-light-shade border-radius1 p-3 mt-3"},[i("h6",[t._v("ADMIN")]),i("label",{attrs:{for:"published"}},[t._v("published")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"published",options:[!0,!1],name:"published",size:"sm"},model:{value:t.training.published,callback:function(e){t.$set(t.training,"published",e)},expression:"training.published"}}),i("label",{attrs:{for:"paid"}},[t._v("paid")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"paid",options:[!0,!1],name:"paid",size:"sm"},model:{value:t.training.paid,callback:function(e){t.$set(t.training,"paid",e)},expression:"training.paid"}}),i("label",{attrs:{for:"pending"}},[t._v("pending")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"pending",options:[!0,!1],name:"pending",size:"sm"},model:{value:t.training.pending,callback:function(e){t.$set(t.training,"pending",e)},expression:"training.pending"}})],1):t._e(),i("label",{attrs:{for:"excerpt",required:""}},[t._v("Kurzbeschreibung der Fortbildung für Vorschau")]),i("b-form-textarea",{attrs:{id:"excerpt",type:"text",rows:"6","max-rows":"50","lazy-formatter":"",wrap:"hard",formatter:t.formatter,state:t.validated?!!(t.training.excerpt&&t.training.excerpt.length<=700):null,"aria-describedby":"excerpt-help excerpt-feedback",placeholder:"Kurzbeschreibung der Fortbildung eingeben...",required:"",trim:""},model:{value:t.training.excerpt,callback:function(e){t.$set(t.training,"excerpt",e)},expression:"training.excerpt"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"excerpt-feedback"}},[t._v(" Bitte nutzen Sie maximal 700 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"excerpt-help"}},[i("span",{class:[{"text-danger":t.training.excerpt.length>700}]},[t._v(" "+t._s(700-t.training.excerpt.length)+" Zeichen verfügbar")])]),i("label",{attrs:{for:"description"}},[t._v("Beschreibung")]),i("TipTapEditor",{attrs:{validated:t.validated,content:t.training.desc,placeholder:"Beschreiben Sie die Fort- / Weiterbildung bei Bedarf hier ausführlich. Sie können beispielsweise Angaben zu Lerninhalten, Karriereperspektiven, Dauer, Lernpensum etc. machen."},on:{"update-content":function(e){t.training.desc=e}}}),i("label",{attrs:{for:"ext-training-url",required:""}},[t._v("Ihre Webseite zur Fortbildung")]),i("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",[i("Fa",{attrs:{icon:"link"}})],1)]},proxy:!0}])},[i("b-form-input",{attrs:{id:"ext-training-url",type:"url","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!t.training.extUrl:null,placeholder:"https://www.ihr-unternehmen.de/fortbildung"},model:{value:t.training.extUrl,callback:function(e){t.$set(t.training,"extUrl",e)},expression:"training.extUrl"}})],1),i("label",{attrs:{for:"training-duration"}},[t._v("Dauer der Fortbildung")]),i("b-form-input",{attrs:{id:"training-duration",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!(t.training.duration&&t.training.duration.length<=55)||null,"aria-describedby":"duration-help duration-feedback",placeholder:"Dauer der Fortbildung eingeben...",trim:""},model:{value:t.training.duration,callback:function(e){t.$set(t.training,"duration",e)},expression:"training.duration"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"duration-feedback"}},[t._v(" Bitte nutzen Sie maximal 55 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"duration-help"}},[i("span",{class:[{"text-danger":t.training.duration.length>55}]},[t._v(" "+t._s(55-t.training.duration.length)+" Zeichen verfügbar")])]),i("label",{attrs:{for:"training-effort"}},[t._v("Zeitaufwand")]),i("b-form-input",{attrs:{id:"training-effort",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!(t.training.effort&&t.training.effort.length<=55)||null,"aria-describedby":"effort-help effort-feedback",placeholder:"z.B. 5 Stunden pro Woche...",trim:""},model:{value:t.training.effort,callback:function(e){t.$set(t.training,"effort",e)},expression:"training.effort"}}),i("b-form-invalid-feedback",{staticClass:"ml-2",attrs:{id:"effort-feedback"}},[t._v(" Bitte nutzen Sie maximal 55 Zeichen. ")]),i("b-form-text",{staticClass:"ml-2",attrs:{id:"effort-help"}},[i("span",{class:[{"text-danger":t.training.effort.length>55}]},[t._v(" "+t._s(55-t.training.effort.length)+" Zeichen verfügbar")])]),i("b-form-group",[i("label",{staticClass:"mt-4",attrs:{for:"start-anytime"}},[t._v("Start der Fortbildung")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"start-anytime",options:[{value:!0,text:"Start jederzeit"},{value:!1,text:"Feste Startdaten"}],name:"start-anytime",size:"sm"},model:{value:t.training.startAnytime,callback:function(e){t.$set(t.training,"startAnytime",e)},expression:"training.startAnytime"}}),t.training.startAnytime?t._e():i("div",[i("label",{attrs:{for:"start-at"}},[t._v("Nächstes Startdatum")]),i("BFormDatepicker",{attrs:{id:"start-at",state:!!t.validated||null,placeholder:"Startet am...","reset-button":!0,"reset-value":"","label-reset-button":"Zurücksetzen"},model:{value:t.startAt,callback:function(e){t.startAt=e},expression:"startAt"}}),i("label",{attrs:{for:"end-at"}},[t._v("Enddatum")]),i("BFormDatepicker",{attrs:{id:"end-at",state:!!t.validated||null,placeholder:"Endet am...","reset-button":!0,"reset-value":"","label-reset-button":"Zurücksetzen"},model:{value:t.endAt,callback:function(e){t.endAt=e},expression:"endAt"}})],1)],1),i("label",{attrs:{for:"cost"}},[t._v("Kosten für Fortbildung "),i("small",[t._v("[€]")])]),i("b-form-input",{attrs:{id:"cost",type:"number",number:"",min:"0",state:t.validated&&!!t.cost||null,placeholder:"Kosten für Fortbildung eingeben..."},model:{value:t.cost,callback:function(e){t.cost=e},expression:"cost"}}),i("label",{attrs:{for:"profession"}},[t._v("Berufsgruppe")]),i("b-form-select",{attrs:{id:"profession",state:!!t.validated||null},model:{value:t.training.profession,callback:function(e){t.$set(t.training,"profession",e)},expression:"training.profession"}},[i("b-form-select-option",{attrs:{value:""}},[t._v("-- Alle Berufsgruppen --")]),t._l(t.professionOptions,(function(e){return i("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2),i("label",{attrs:{for:"training-type",required:""}},[t._v("Bereich")]),i("b-form-select",{attrs:{id:"training-type",state:t.validated?!!t.training.type:null},model:{value:t.training.type,callback:function(e){t.$set(t.training,"type",e)},expression:"training.type"}},[i("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v("-- Bereich auswählen --")]),t._l(t.typeOptions,(function(e){return i("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2),i("b-form-group",[i("label",{staticClass:"mt-4",attrs:{for:"remote"}},[t._v("Ort der Fortbildung")]),i("b-form-radio-group",{staticClass:"mb-2",attrs:{id:"remote",options:[{value:!1,text:"Vor Ort / Hybrid"},{value:!0,text:"Nur Online"}],name:"remote",size:"sm"},model:{value:t.training.remote,callback:function(e){t.$set(t.training,"remote",e)},expression:"training.remote"}}),t.training.remote?t._e():i("div",[i("label",{staticClass:"mt-1",attrs:{for:"training-location"}},[t._v("Ort "),i("small",[t._v("[Mehrere Orte mit Komma trennen]")])]),i("b-form-input",{attrs:{id:"training-location",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated&&!!t.training.title||null,placeholder:"Ort der Fortbildung eingeben...",trim:""},model:{value:t.training.location,callback:function(e){t.$set(t.training,"location",e)},expression:"training.location"}}),i("label",{staticClass:"mt-2",attrs:{for:"training-state"}},[t._v("Bundesland "),i("small",[t._v("['STRG' für Mehrfachauswahl gedrückt halten]")])]),i("b-form-select",{staticStyle:{"border-radius":"5px 0 0 5px"},attrs:{id:"training-state",state:t.validated&&!!t.state||null,multiple:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[i("b-form-select-option",{attrs:{value:""}},[t._v("-- Bundesland auswählen --")]),t._l(t.companyStateOptions,(function(e){return i("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1)],1),i("label",{attrs:{for:"company",required:""}},[t._v("Unternehmen")]),i("b-form-input",{attrs:{id:"company",type:"text","lazy-formatter":"",formatter:t.formatter,state:t.validated?!!(t.training.company&&t.training.company.length<=155):null,placeholder:"Name des Fortbildungsunternehmens eingeben...",required:"",trim:""},model:{value:t.training.company,callback:function(e){t.$set(t.training,"company",e)},expression:"training.company"}}),i("label",{attrs:{for:"logo"}},[t._v("Logo "),i("small",[t._v("(jpg, png | max. 5MB)")])]),i("ImageUploader",{attrs:{id:"logo",validated:t.validated,"image-url":t.training.logoUrl,width:200,height:200,fit:"inside"},on:{"update-url":function(e){t.training.logoUrl=e}}}),t.$store.state.auth.user.isAdmin?i("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:t.training.logoUrl,callback:function(e){t.$set(t.training,"logoUrl",e)},expression:"training.logoUrl"}}):t._e(),i("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"55px",height:"55px"}},[t.training.logoUrl?i("b-img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.training.logoUrl,fluid:""}}):i("Fa",{attrs:{icon:"box-open",size:"lg"}})],1),i("div",{staticClass:"d-flex justify-content-between my-4"},[i("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v(" Abbrechen ")]),i("b-button",{attrs:{variant:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.success?i("Fa",{staticClass:"mr-2",attrs:{icon:"check"}}):t._e(),t._v(" "+t._s(t.success?"Gespeichert":"Speichern")+" ")],1)],1)],1),t.error?i("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(t.error))]):t._e()],1)},s=[],o=i("2b0e"),l=i("c2f1"),d=i("1d54"),c=i("5641"),g=i("1ba6");o["default"].component("BFormDatepicker",l["a"]);var u={name:"TrainingForm",components:{TipTapEditor:d["a"],ImageUploader:c["a"]},data(){return{training:{title:"",excerpt:"",desc:"",remote:!1,startAnytime:!1,location:"",state:"",company:"",logoUrl:"",type:"",profession:"",startAt:null,endAt:null,duration:"",effort:"",cost:null,extUrl:"",published:!!this.$store.state.auth.user.isAdmin,pending:!1,paid:!!this.$store.state.auth.user.isAdmin},validated:null,success:!1,error:!1,professionOptions:g["g"],companyStateOptions:g["c"],typeOptions:g["j"]}},computed:{startAt:{get(){return this.training.startAt?new Date(this.training.startAt):""},set(t){this.training.startAt=t?new Date(t).getTime():null}},endAt:{get(){return this.training.endAt?new Date(this.training.endAt):""},set(t){this.training.endAt=t?new Date(t).getTime():null}},cost:{get(){return this.training.cost},set(t){this.training.cost=t||null}},state:{get(){return this.training.state.split(",")},set(t){this.training.state=t.join(",")}}},created(){"new"!=this.$route.params.trainingId&&this.getTraining(this.$route.params.trainingId)},methods:{async getTraining(t){try{const e=this.$store.state.auth.user.isAdmin?"adminTraining":"myTraining",i=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                ${e} (_id: "${t}") {\n                  _id\n                  title\n                  excerpt\n                  desc\n                  remote\n                  startAnytime\n                  location\n                  state\n                  company\n                  logoUrl\n                  type\n                  profession\n                  startAt\n                  endAt\n                  duration\n                  effort\n                  cost\n                  extUrl\n                  published\n                  pending\n                  paid\n                }\n              }\n            `}});if(i.data.errors)throw new Error("Fortbildung konnte nicht geladen werden.");this.training=i.data.data[e]}catch(e){this.$root.$bvToast.toast("Beim Laden der Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}},async onSubmit(){this.error=!1;try{if(!this.formValidation())return this.error="Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!",null;this.$store.dispatch("setOverlay",!0);const t=this.training._id?"updateTraining":"addTraining",e=await this.$axios.post("/graphql",{query:`\n            mutation {\n              ${t} (\n                ${this.training._id?`_id: "${this.training._id}"`:""}\n                title: "${this.training.title}"\n                excerpt: "${this.training.excerpt.replace(/\n/g,"\\n")}"\n                desc: "${this.training.desc.replace(/"/g,'\\"')}"\n                remote: ${this.training.remote}\n                startAnytime: ${this.training.startAnytime}\n                location: "${this.training.location?this.training.location:""}"\n                state: "${this.training.state?this.training.state:""}"\n                company: "${this.training.company}"\n                logoUrl: "${this.training.logoUrl?this.training.logoUrl:""}"\n                type: "${this.training.type}"\n                profession: "${this.training.profession}"\n                startAt: ${this.training.startAt}\n                endAt: ${this.training.endAt}\n                duration: "${this.training.duration?this.training.duration:""}"\n                effort: "${this.training.effort?this.training.effort:""}"\n                cost: ${this.training.cost}\n                extUrl: "${!/^https?:\/\//i.test(this.training.extUrl)&&this.training.extUrl?"https://"+this.training.extUrl:this.training.extUrl}"\n                published: ${this.training.published}\n                pending: ${this.training.pending}\n                paid: ${this.training.paid}\n              ) {\n                _id\n                title\n                excerpt\n                desc\n                remote\n                startAnytime\n                location\n                state\n                company\n                logoUrl\n                type\n                profession\n                startAt\n                endAt\n                duration\n                effort\n                cost\n                extUrl\n                published\n                pending\n                paid\n              }\n            }\n          `});if(e.data.errors)throw new Error("Training could not be saved.");this.$root.$bvToast.toast("Die Fortbildung wurde erfolgreich gespeichert.",{title:"Fortbildung gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),this.$router.push("/user/dashboard?tab=4")}catch(t){this.$root.$bvToast.toast("Beim Speichern Ihrer Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},formatter(t){return t.replaceAll('"',"'").replace(/&amp;/,"&")},formValidation(){return this.validated=!0,!(!this.training.title||this.training.title.length>75||!this.training.excerpt||this.training.excerpt.length>700||!this.training.extUrl||!this.training.company||!this.training.type||this.training.effort.length>55||this.training.duration.length>55)}}},p=u,m=(i("a8a7"),i("2877")),h=Object(m["a"])(p,a,s,!1,null,"3bc86f91",null),f=h.exports,b={name:"UserDashboardEditTraining",components:{TrainingForm:f}},v=b,x=Object(m["a"])(v,n,r,!1,null,null,null);e["default"]=x.exports}}]);
//# sourceMappingURL=training_edit.5288c217.js.map