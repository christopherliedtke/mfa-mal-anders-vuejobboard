(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"01e3":function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));var r=s("2b0e"),a=s("b42e"),i=s("c637"),o=s("a723"),n=s("9b76"),l=s("365c"),c=s("cf75");function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d=Object(c["c"])({label:Object(c["b"])(o["s"]),role:Object(c["b"])(o["s"],"status"),small:Object(c["b"])(o["g"],!1),tag:Object(c["b"])(o["s"],"span"),type:Object(c["b"])(o["s"],"border"),variant:Object(c["b"])(o["s"])},i["Z"]),h=r["default"].extend({name:i["Z"],functional:!0,props:d,render:function(t,e){var s,r=e.props,i=e.data,o=e.slots,c=e.scopedSlots,d=o(),h=c||{},p=Object(l["b"])(n["o"],{},h,d)||r.label;return p&&(p=t("span",{staticClass:"sr-only"},p)),t(r.tag,Object(a["a"])(i,{attrs:{role:p?r.role||"status":null,"aria-hidden":p?null:"true"},class:(s={},u(s,"spinner-".concat(r.type),r.type),u(s,"spinner-".concat(r.type,"-sm"),r.small),u(s,"text-".concat(r.variant),r.variant),s)}),[p||t()])}})},"0887":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v(t._s(t.title))]),s("div",{staticClass:"logout container"}),s("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"danger",dismissible:""},model:{value:t.alert.show,callback:function(e){t.$set(t.alert,"show",e)},expression:"alert.show"}},[t._v(" "+t._s(t.alert.msg)+" "),s("BSpinner",{staticStyle:{width:"1.2rem",height:"1.2rem"},attrs:{variant:"danger",label:"Spinning"}})],1),s("Head",{attrs:{title:t.title,desc:"Ausloggen bei MFA mal anders",img:""}})],1)},a=[],i=s("2b0e"),o=s("01e3");i["default"].component("BSpinner",o["a"]);var n={name:"AuthLogout",data(){return{title:"Abmelden",alert:{show:!1,msg:""}}},mounted(){this.$route.query.error&&this.$root.$bvToast.toast(this.$route.query.error,{title:"Fehler",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.logout()},methods:{async logout(){localStorage.clear(),localStorage.setItem("nl-pop","false");const t=await this.$axios.get("/api/auth/logout");t.data.success&&(this.$store.commit("setUserId",""),this.$store.commit("setUserRole",""),this.$store.commit("setUserStatus",""),this.$router.push({path:"/auth/login"}))}}},l=n,c=s("2877"),u=Object(c["a"])(l,r,a,!1,null,null,null);e["default"]=u.exports},"0b5e":function(t,e,s){},1427:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"password-reset auth-container container"},[s("h1",{staticClass:"h2 text-center"},[t._v(t._s(t.title))]),s("AuthPasswordResetForm"),s("Head",{attrs:{title:t.title,desc:"Passwort zurücksetzen bei MFA mal anders",img:""}})],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0===t.state?s("b-form",[s("label",{attrs:{for:"email"}},[t._v("E-Mail Adresse")]),s("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",autofocus:"",trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("button",{staticClass:"btn btn-primary my-3",on:{click:function(e){return e.preventDefault(),t.onSubmitEmail.apply(null,arguments)}}},[t._v(" Passwort zurücksetzen ")]),s("p",[t._v(" Nicht was Du möchtest? "),s("b-link",{attrs:{to:"/auth/register"}},[t._v("Registrieren")]),t._v(" oder "),s("b-link",{attrs:{to:"/auth/login"}},[t._v("Anmelden")]),t._v("! ")],1)],1):t._e(),1===t.state?s("b-form",[s("p",{staticClass:"mt-4"},[t._v(" Bitte überprüfen Sie Ihr E-Mail Postfach und geben Sie den erhaltenen Code ein. ")]),s("label",{attrs:{for:"secretCode"}},[t._v("Code")]),s("b-form-input",{attrs:{id:"secretCode",type:"text",placeholder:"Code eingeben...",autofocus:"",trim:""},model:{value:t.secretCode,callback:function(e){t.secretCode=e},expression:"secretCode"}}),s("label",{attrs:{for:"password"}},[t._v("Neues Passwort")]),s("b-input-group",[s("b-form-input",{attrs:{id:"password",type:t.passwordType,placeholder:"Neues Passwort eingeben...",autocomplete:"new-password","aria-describedby":"password-help-block"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:t.togglePasswordType}},["text"===t.passwordType?s("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):s("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),s("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten. ")]),s("label",{attrs:{for:"password2"}},[t._v("Passwort wiederholen")]),s("b-input-group",[s("b-form-input",{attrs:{id:"password2",type:t.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),s("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:t.togglePasswordType}},["text"===t.passwordType?s("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):s("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),s("button",{staticClass:"btn btn-primary my-3",on:{click:function(e){return e.preventDefault(),t.onSubmitNewPw.apply(null,arguments)}}},[t._v(" Neues Passwort speichern ")])],1):t._e(),t.errors?s("div",{staticClass:"error mt-3"},t._l(t.errors,(function(e){return s("b-alert",{key:e.message,staticClass:"border-radius2",attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(e.message))])})),1):t._e()],1)},o=[],n={name:"AuthPasswordResetForm",data(){return{email:"",password:"",password2:"",passwordType:"password",secretCode:"",state:0,errors:[]}},methods:{async onSubmitEmail(){this.$store.dispatch("setOverlay",!0),this.errors=[];try{const t=await this.$axios.post("/graphql",{query:`\n                    mutation {\n                      resetPasswordGetCode (email: "${this.email.toLowerCase()}") {\n                        _id\n                      }\n                    }\n                  `});t.data.errors?this.errors=t.data.errors:this.state=1}catch(t){this.$root.$bvToast.toast("Beim zurücksetzen Ihres Passworts ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu und versuchen es noch einmal. Sollte der Fehler wiederholt auftreten, melden Sie sich bitte über unser Kontaktformular, sodass wir Ihnen schnellstmöglich weiterhelfen können.",{title:"Fehler beim Zurücksetzen Ihres Passworts",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},async onSubmitNewPw(){this.errors=[],this.$store.dispatch("setOverlay",!0);try{const t=await this.$axios.post("/graphql",{query:`\n                        mutation {\n                            resetPasswordVerify(\n                                email: "${this.email.toLowerCase()}",\n                                password: "${this.password}",\n                                password2: "${this.password2}",\n                                code: "${this.secretCode}"\n\n                            ) {\n                                _id\n                            }\n                        }\n                    `});t.data.errors?this.errors=t.data.errors:(this.$root.$bvToast.toast("Ihr neues Passwort wurde erfolgreich gespeichert. Bitte melden Sie sich mit dem neuen Passwort an.",{title:"Neues Passwort gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,autoHideDelay:1e4}),this.$router.push({path:"/auth/login"}))}catch(t){this.$root.$bvToast.toast("Beim zurücksetzen Ihres Passworts ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu und versuchen es noch einmal. Sollte der Fehler wiederholt auftreten, melden Sie sich bitte über unser Kontaktformular, sodass wir Ihnen schnellstmöglich weiterhelfen können.",{title:"Fehler beim Zurücksetzen Ihres Passworts",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},togglePasswordType(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}},l=n,c=(s("bc6c"),s("2877")),u=Object(c["a"])(l,i,o,!1,null,"16142444",null),d=u.exports,h={name:"AuthPasswordReset",components:{AuthPasswordResetForm:d},data(){return{title:"Passwort zurücksetzen"}}},p=h,m=Object(c["a"])(p,r,a,!1,null,null,null);e["default"]=m.exports},"1ebd":function(t,e,s){"use strict";s("bf6f")},3896:function(t,e,s){},"803d":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register auth-container container position-relative"},[s("div",{staticClass:"bg-logo",staticStyle:{opacity:"0.025"}}),s("AuthRegisterForm",{staticClass:"position-relative",scopedSlots:t._u([{key:"intro",fn:function(){return[s("h2",{staticClass:"h1 bold text-center mt-3 mt-lg-4 mb-0"},[t._v(" "+t._s("employee"===t.$route.query.role?"MFA | ZFA":"education"===t.$route.query.role?"Fortbildungsanbieter":"Arbeitgeber")+" ")]),"education"==t.$route.query.role?s("div",{staticClass:"mt-4"},[s("p",{staticClass:"text-left text-md-center"},[t._v(" Sie möchten eine Fortbildung un unserem "),s("b-link",{staticClass:"bold",attrs:{to:"/fortbildungskatalog",target:"_blank"}},[t._v("Fortbildungskatalog")]),t._v(" veröffentlichen? ")],1)]):"employee"==t.$route.query.role?s("div",{staticClass:"mt-4"},[s("p",{staticClass:"text-left text-md-center"},[t._v(" Du möchtest ein Stellengesuch schalten oder unseren Job Newsletter abonnieren? ")])]):s("div",{staticClass:"mt-4"},[s("p",{staticClass:"text-left text-md-center"},[t._v(" Sie möchten eine Stellenanzeige bei uns schalten und auf Stellengesuche antworten? ")]),s("div",{staticClass:"row row-cols-md-3 d-none d-md-flex my-4 text-center"},[s("div",{staticClass:"col"},[s("div",{staticClass:"mx-auto my-3 bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[s("svg",{staticClass:"bi bi-person-plus-fill text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),s("path",{attrs:{"fill-rule":"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"}})])]),s("h3",{staticClass:"h6"},[t._v("Registrieren")])]),s("div",{staticClass:"col"},[s("div",{staticClass:"my-3 mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[s("svg",{staticClass:"bi bi-pencil-square text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),s("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])]),s("h3",{staticClass:"h6"},[t._v("Stellenanzeige erstellen")])]),s("div",{staticClass:"col"},[s("div",{staticClass:"my-3 mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[s("svg",{staticClass:"bi bi-megaphone-fill text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"}})])]),s("h3",{staticClass:"h6"},[t._v("Veröffentlichen")])])]),s("p",{staticClass:"text-center"},[t._v(" Registrieren Sie sich jetzt und veröffentlichen Sie noch heute Ihre Stellenanzeige! "),s("br"),t._v(" Weitere Informationen gibt es unter "),s("b-link",{attrs:{to:"/fuer-arbeitgeber"}},[s("strong",[t._v("Für Arbeitgeber")])]),t._v(". ")],1)])]},proxy:!0}])}),s("Head",{attrs:{title:t.title,desc:"Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige.",img:""}})],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"h3 text-center mb-3"},[t._v(" Registrierung als ")]),s("div",{staticClass:"btn-group btn-group-sm d-flex mb-4",attrs:{role:"group"}},[s("b-button",{staticClass:"py-2 py-lg-3",staticStyle:{"border-top-left-radius":"35px","border-bottom-left-radius":"35px","flex-basis":"0"},attrs:{variant:t.isEmployer?"primary":"outline-primary"},on:{click:function(e){return t.toggleRole("employer")}}},[t._v("Arbeitgeber")]),s("b-button",{staticClass:"py-2 py-lg-3 ",staticStyle:{"flex-basis":"0"},attrs:{variant:t.isEmployee?"primary":"outline-primary"},on:{click:function(e){return t.toggleRole("employee")}}},[t._v("MFA | ZFA")]),s("b-button",{staticClass:"py-2 py-lg-3 ",staticStyle:{"border-top-right-radius":"35px","border-bottom-right-radius":"35px","flex-basis":"0"},attrs:{variant:t.isEducational?"primary":"outline-primary"},on:{click:function(e){return t.toggleRole("education")}}},[t._v("Fortbildungs­anbieter")])],1),t._t("intro"),s("b-form",[s("label",{attrs:{for:"user-gender"}},[t._v("Anrede")]),s("b-form-select",{attrs:{id:"user-gender"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("-- Anrede auswählen --")]),t._l(t.contactGenderOptions,(function(e){return s("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2),t.isEmployer||t.isEducational?s("label",{attrs:{for:"user-title"}},[t._v("Titel")]):t._e(),t.isEmployer||t.isEducational?s("b-form-select",{attrs:{id:"user-title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("-- Titel auswählen --")]),t._l(t.contactTitleOptions,(function(e){return s("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2):t._e(),s("label",{attrs:{for:"firstName",required:""}},[t._v("Vorname")]),s("b-form-input",{attrs:{id:"firstName",type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),s("label",{attrs:{for:"lastName",required:""}},[t._v("Nachname")]),s("b-form-input",{attrs:{id:"lastName",type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),s("label",{attrs:{for:"email",required:""}},[t._v("E-Mail Adresse")]),s("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("label",{attrs:{for:"password",required:""}},[t._v("Passwort")]),s("b-input-group",[s("b-form-input",{attrs:{id:"password",type:t.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password","aria-describedby":"password-help-block"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:t.togglePasswordType}},["text"===t.passwordType?s("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):s("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),s("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten. ")]),s("label",{attrs:{for:"password2",required:""}},[t._v("Passwort wiederholen")]),s("b-input-group",[s("b-form-input",{attrs:{id:"password2",type:t.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),s("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:t.togglePasswordType}},["text"===t.passwordType?s("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):s("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),s("b-form-checkbox",{staticClass:"mt-3",attrs:{id:"acceptance",name:"acceptance",value:"accepted","unchecked-value":"not_accepted",switch:""},model:{value:t.acceptance,callback:function(e){t.acceptance=e},expression:"acceptance"}},[t._v(" Ich habe die "),s("b-link",{attrs:{href:"/agbs",target:"_blank"}},[t._v(" AGBs ")]),t._v(" und "),s("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[t._v(" Datenschutzbestimmungen ")]),t._v(" gelesen und akzeptiere diese. * ")],1),s("b-btn",{staticClass:"my-3",attrs:{variant:"secondary",block:""},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v(" Registrieren ")])],1),s("p",[t._v(" Bereits registriert? Jetzt "),s("b-link",{attrs:{to:"/auth/login"}},[s("strong",[t._v("Einloggen")])]),t._v(". ")],1),t.errors?s("div",{staticClass:"error mt-3"},t._l(t.errors,(function(e){return s("b-alert",{key:e.message,staticClass:"border-radius2",attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(e.message))])})),1):t._e()],2)},o=[],n=s("1ba6"),l={name:"AuthRegisterForm",data(){return{gender:"",title:"",firstName:"",lastName:"",email:"",password:"",password2:"",passwordType:"password",acceptance:"",contactGenderOptions:n["e"],contactTitleOptions:n["f"],isEmployer:!0,isEmployee:!1,isEducational:!1,errors:[]}},mounted(){this.toggleRole(this.$route.query.role)},methods:{async onSubmit(){this.$store.dispatch("setOverlay",!0),this.errors=[];try{const t=await this.$store.dispatch("auth",{type:"register",creds:{gender:this.gender,title:this.title,firstName:this.firstName,lastName:this.lastName,email:this.email.toLowerCase(),password:this.password,password2:this.password2,isEmployer:this.isEmployer,isEmployee:this.isEmployee,isEducational:this.isEducational,acceptance:this.acceptance}});t.errors?this.errors=t.errors:(await this.$store.dispatch("getActivationEmail"),this.$store.state.auth.user._id&&(this.$gtag.config({user_id:this.$store.state.auth.user._id}),this.$gtag.event("user_register",{method:"local",event_label:`id: ${this.$store.state.auth.user._id}; type: ${this.isEmployer?"employer":this.isEmployee?"employee":"educational"}`}),this.$matomo&&this.$matomo.trackEvent("engagement","user_register",`id: ${this.$store.state.auth.user._id}; type: ${this.isEmployer?"employer":this.isEmployee?"employee":"educational"}`),this.$matomo&&this.$matomo.setUserId(this.$store.state.auth.user._id),this.$router.push("/auth/account/verification")))}catch(t){this.$root.$bvToast.toast("Bei Ihrer Registrierung ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu und versuchen es noch einmal. Sollte der Fehler wiederholt auftreten, melden Sie sich bitte über unser Kontaktformular, sodass wir Ihnen schnellstmöglich weiterhelfen können.",{title:"Fehler bei der Registrierung",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},togglePasswordType(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"},toggleRole(t){t!=this.$route.query.role&&this.$router.push({query:{role:t}}),"employee"===t?(this.isEmployer=!1,this.isEmployee=!0,this.isEducational=!1):"education"===t?(this.isEmployer=!1,this.isEmployee=!1,this.isEducational=!0):(this.isEmployer=!0,this.isEmployee=!1,this.isEducational=!1)}}},c=l,u=(s("9940"),s("2877")),d=Object(u["a"])(c,i,o,!1,null,"7ed8546e",null),h=d.exports,p={name:"AuthRegister",components:{AuthRegisterForm:h},data(){return{title:"Registrierung für Arbeitgeber"}}},m=p,b=Object(u["a"])(m,r,a,!1,null,null,null);e["default"]=b.exports},9940:function(t,e,s){"use strict";s("0b5e")},bc6c:function(t,e,s){"use strict";s("3896")},bf6f:function(t,e,s){},c7ec:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-verification container position-relative py-5"},[s("h2",[t._v("E-Mail Adresse verifizieren")]),s("p",[t._v(" Aus Datenschutzgründen müssen wir Ihre E-Mail Adresse verifizieren. ")]),s("p",[t._v(" Bitte "),s("strong",[t._v("überprüfen Sie in den nächsten Minuten Ihr E-Mail Postfach ")]),t._v(" für "),s("em",{staticClass:"text-secondary bold"},[t._v(t._s(t.$store.state.auth.user.email))]),t._v(" und bestätigen Sie Ihre E-Mail Adresse über den Aktivierungslink. "),s("strong",[t._v(" Bitte überprüfen Sie gegebenenfalls auch Ihren Spam Ordner und stellen Sie sicher, dass Sie Ihre E-Mail Adresse korrekt eingegeben haben. ")])]),s("p",[t._v("Keine E-Mail erhalten?")]),s("b-button",{staticClass:"mt-3 mr-2",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v(" Neue E-Mail zur Aktivierung senden ")]),s("b-button",{staticClass:"mt-3 mr-2",attrs:{variant:"secondary",to:"/kontakt?subject=Probleme+bei+E-Mail-Verifizierung"}},[t._v(" Probleme? Kontakt aufnehmen ")])],1)},a=[],i={name:"AuthAccountVerification",data(){return{timeoutId:null}},async mounted(){await this.activateUser(),this.checkUserStatus(),this.checkError()},methods:{async onSubmit(){this.$store.dispatch("setOverlay",!0);const t=await(await this.$store.dispatch("getActivationEmail"));t?this.$root.$bvToast.toast("Eine neue E-Mail mit Aktivierungslink wurde versandt und sollte innerhalb der nächsten Minuten in Ihrem Postfach ankommen. Bitte überprüfen Sie ggfls. auch Ihren Spam Ordner.",{title:"Aktivierungslink versandt",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}):this.$root.$bvToast.toast("Die E-Mail konnte leider nicht versandt werden. Bitte versuchen Sie es noch einmal oder melden sich ggfls. über unser Kontaktformular.",{title:"Fehler beim Versenden der E-Mail",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$store.dispatch("setOverlay",!1)},async activateUser(){if(this.$store.dispatch("setOverlay",!0),this.$route.params.userId){const t=await this.$store.dispatch("activateUser",this.$route.params.userId);t||this.checkUserStatus()}this.$store.dispatch("setOverlay",!1)},async checkUserStatus(){await this.$store.dispatch("fetchUserFromToken"),"active"===this.$store.state.auth.user.status?(this.$root.$bvToast.toast("Sie haben Ihre E-Mail Adresse erfolgreich bestätigt. Ihr Account ist nun freigeschaltet.",{title:"Account aktiviert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$store.state.auth.user.isEmployer?this.$router.push("/user/stellenanzeigen"):this.$store.state.auth.user.isEducational?this.$router.push("/user/fortbildungen"):this.$store.state.auth.user.isEmployee?this.$router.push("/user/stellengesuche"):this.$router.push("/user/account")):this.timeoutId=setTimeout(async()=>{this.checkUserStatus()},5e3)},checkError(){this.$route.query.error&&this.$root.$bvToast.toast("Bei der Bestätigung Ihrer E-Mail Adresse ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie einen neuen Aktivierungslink anfordern oder melden Sie sich über unser Kontaktformular.",{title:"Fehler bei der Aktivierung",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}},o=i,n=s("2877"),l=Object(n["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},d772:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login auth-container container position-relative"},[s("div",{staticClass:"bg-logo",staticStyle:{opacity:"0.025"}}),s("div",{staticClass:"position-relative"},[s("h1",{staticClass:"display-3 bold text-center"},[t._v(t._s(t.title))]),s("p",{staticClass:"text-center h3"},[t._v("MFA mal anders")]),s("b-img",{staticClass:"d-block mx-auto my-4",attrs:{src:"/img/MfaMalAnders_logo_circle_bgdark_white.svg",width:"90px",height:"90px"}}),s("AuthLoginForm")],1),s("Head",{attrs:{title:t.title,desc:"Anmelden bei MFA mal anders",img:""}})],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit.apply(null,arguments)}}},[s("label",{attrs:{for:"email",required:""}},[t._v("E-Mail Addresse")]),s("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("label",{attrs:{for:"password",required:""}},[t._v("Passwort")]),s("b-input-group",[s("b-form-input",{attrs:{id:"password",type:t.passwordType,placeholder:"Passwort eingeben...",autocomplete:"current-password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:t.togglePasswordType}},["text"===t.passwordType?s("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),s("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):s("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),s("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),s("b-btn",{staticClass:"mt-3 mb-4",attrs:{variant:"secondary",block:""},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v(" Login ")]),s("p",[t._v(" Noch nicht registriert? Jetzt "),s("b-link",{attrs:{to:"/auth/register"}},[s("strong",[t._v("Registrieren")])]),t._v(". ")],1),s("p",[s("b-link",{attrs:{to:"/auth/password-reset"}},[s("strong",[t._v("Passwort vergessen?")])])],1),t.errors?s("div",{staticClass:"error mt-3"},t._l(t.errors,(function(e){return s("b-alert",{key:e.message,staticClass:"border-radius2",attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(e.message))])})),1):t._e()],1)},o=[],n={name:"AuthLoginForm",data(){return{email:"",password:"",passwordType:"password",errors:[]}},methods:{async onSubmit(){this.$store.dispatch("setOverlay",!0),this.errors=[];try{const t=await this.$store.dispatch("auth",{type:"login",creds:{email:this.email.toLowerCase(),password:this.password}});t.errors?this.errors=t.errors:"pending"===this.$store.state.auth.user.status?this.$router.push(this.$route.query.redirect||"/auth/account/verification"):this.$store.state.auth.loggedIn&&(this.$store.state.auth.user.isEmployee?this.$router.push(this.$route.query.redirect||"/user/gespeicherte-stellenanzeigen"):this.$router.push(this.$route.query.redirect||"/user/stellenanzeigen"),this.$store.dispatch("getStarredJobs"),this.$gtag.config({user_id:this.$store.state.auth.user._id}),this.$gtag.event("user_login",{method:"local",event_label:this.$store.state.auth.user._id}),this.$matomo&&this.$matomo.trackEvent("engagement","user_login",this.$store.state.auth.user._id),this.$matomo&&this.$matomo.setUserId(this.$store.state.auth.user._id))}catch(t){this.$root.$bvToast.toast("Beim Login ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu und versuchen es noch einmal. Sollte der Fehler wiederholt auftreten, melden Sie sich bitte über unser Kontaktformular, sodass wir Ihnen schnellstmöglich weiterhelfen können.",{title:"Fehler beim Login",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},togglePasswordType(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}},l=n,c=(s("1ebd"),s("2877")),u=Object(c["a"])(l,i,o,!1,null,"fd8cf988",null),d=u.exports,h={name:"AuthLogin",components:{AuthLoginForm:d},data(){return{title:"Login"}}},p=h,m=Object(c["a"])(p,r,a,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=auth.a52f3a9b.js.map