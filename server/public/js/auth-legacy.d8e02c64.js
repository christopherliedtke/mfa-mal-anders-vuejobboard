(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"0119":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("div",{staticClass:"logout container"}),r("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"danger",dismissible:""},model:{value:e.alert.show,callback:function(t){e.$set(e.alert,"show",t)},expression:"alert.show"}},[e._v(" "+e._s(e.alert.msg)+" "),r("BSpinner",{staticStyle:{width:"1.2rem",height:"1.2rem"},attrs:{variant:"danger",label:"Spinning"}})],1),r("Head",{attrs:{title:e.title,desc:"Ausloggen bei MFA mal anders",img:""}})],1)},a=[],i=r("1da1"),n=(r("96cf"),r("2b0e")),o=r("01e3");n["default"].component("BSpinner",o["a"]);var l={name:"AuthLogout",data:function(){return{title:"Abmelden",alert:{show:!1,msg:""}}},mounted:function(){this.$route.query.error&&this.$root.$bvToast.toast(this.$route.query.error,{title:"Fehler",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.logout()},methods:{logout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return localStorage.clear(),localStorage.setItem("nl-pop","false"),t.next=4,e.$axios.get("/api/auth/logout");case 4:r=t.sent,r.data.success&&(e.$store.commit("setUserId",""),e.$store.commit("setUserRole",""),e.$store.commit("setUserStatus",""),e.$router.push({path:"/auth/login"}));case 6:case"end":return t.stop()}}),t)})))()}}},c=l,u=r("2877"),d=Object(u["a"])(c,s,a,!1,null,null,null);t["default"]=d.exports},"01e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r("2b0e"),a=r("b42e"),i=r("c637"),n=r("a723"),o=r("9b76"),l=r("365c"),c=r("cf75");function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=Object(c["c"])({label:Object(c["b"])(n["s"]),role:Object(c["b"])(n["s"],"status"),small:Object(c["b"])(n["g"],!1),tag:Object(c["b"])(n["s"],"span"),type:Object(c["b"])(n["s"],"border"),variant:Object(c["b"])(n["s"])},i["X"]),p=s["default"].extend({name:i["X"],functional:!0,props:d,render:function(e,t){var r,s=t.props,i=t.data,n=t.slots,c=t.scopedSlots,d=n(),p=c||{},m=Object(l["b"])(o["o"],{},p,d)||s.label;return m&&(m=e("span",{staticClass:"sr-only"},m)),e(s.tag,Object(a["a"])(i,{attrs:{role:m?s.role||"status":null,"aria-hidden":m?null:"true"},class:(r={},u(r,"spinner-".concat(s.type),s.type),u(r,"spinner-".concat(s.type,"-sm"),s.small),u(r,"text-".concat(s.variant),s.variant),r)}),[m||e()])}})},"2f99":function(e,t,r){},"5c74":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login auth-container container"},[r("h1",{staticClass:"h2 bold text-center"},[e._v(e._s(e.title))]),r("div",{staticClass:"mx-auto my-3 bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("div",[r("svg",{staticClass:"bi bi-unlock-fill text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"}})])])]),r("LoginForm"),r("Head",{attrs:{title:e.title,desc:"Anmelden bei MFA mal anders",img:""}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",[r("label",{attrs:{for:"email"}},[e._v("E-Mail Addresse")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("label",{attrs:{for:"password"}},[e._v("Passwort")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"current-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:e.togglePasswordType}},["text"===e.passwordType?r("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),r("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):r("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),r("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Login ")]),r("p",[e._v(" Noch nicht registriert? Jetzt "),r("b-link",{attrs:{to:"/auth/register"}},[e._v("Registrieren")]),e._v(". ")],1),r("p",[r("b-link",{attrs:{to:"/auth/password-reset"}},[e._v("Passwort vergessen?")])],1),e.errors?r("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return r("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(t.message))])})),1):e._e()],1)},n=[],o=r("1da1"),l=(r("96cf"),{name:"LoginForm",data:function(){return{email:"",password:"",passwordType:"password",errors:[]}},methods:{onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.next=3,e.$store.dispatch("auth",{type:"login",creds:{email:e.email.toLowerCase(),password:e.password}});case 3:r=t.sent,r.errors?e.errors=r.errors:("pending"===e.$store.state.auth.user.status?e.$router.push("/auth/account/verification"):e.$store.state.auth.loggedIn&&(e.$store.state.auth.user.isEmployee?e.$router.push(e.$route.query.redirect||"/user/gespeicherte-stellenanzeigen"):e.$router.push(e.$route.query.redirect||"/user/stellenanzeigen")),e.$gtag.event("login",{method:"local",event_label:e.$store.state.auth.user._id})),e.$store.dispatch("getStarredJobs"),e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}}),c=l,u=(r("f7a3"),r("2877")),d=Object(u["a"])(c,i,n,!1,null,"4b7129ec",null),p=d.exports,m={name:"AuthLogin",components:{LoginForm:p},data:function(){return{title:"Anmeldung"}}},h=m,b=Object(u["a"])(h,s,a,!1,null,null,null);t["default"]=b.exports},6032:function(e,t,r){},"658b":function(e,t,r){},"77be":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-verification container position-relative py-5"},[r("h2",[e._v("E-Mail Adresse verifizieren")]),r("p",[e._v(" Aus Datenschutzgründen müssen wir Ihre E-Mail Adresse verifizieren. ")]),e._m(0),r("p",[e._v("Keine E-Mail erhalten?")]),r("b-button",{staticClass:"mt-3 mr-2",attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Neue E-Mail zur Aktivierung senden ")]),r("b-button",{staticClass:"mt-3 mr-2",attrs:{variant:"secondary",to:"/kontakt?subject=Probleme+bei+E-Mail-Verifizierung"}},[e._v(" Probleme? Kontakt aufnehmen ")])],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Bitte "),r("strong",[e._v("überprüfen Sie in den nächsten Minuten Ihr E-Mail Postfach")]),e._v(" und bestätigen Sie Ihre E-Mail Adresse über den Aktivierungslink. "),r("strong",[e._v(" Bitte überprüfen Sie gegebenenfalls auch Ihren Spam Ordner. ")])])}],i=r("1da1"),n=(r("96cf"),{name:"AuthAccountVerification",data:function(){return{timeoutId:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.activateUser();case 2:e.checkUserStatus(),e.checkError();case 4:case"end":return t.stop()}}),t)})))()},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.next=3,e.$store.dispatch("getActivationEmail");case 3:r=t.sent,r?e.$root.$bvToast.toast("Eine neue E-Mail mit Aktivierungslink wurde versandt und sollte innerhalb der nächsten Minuten in Ihrem Postfach ankommen. Bitte überprüfen Sie ggfls. auch Ihren Spam Ordner.",{title:"Aktivierungslink versandt",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}):e.$root.$bvToast.toast("Die E-Mail konnte leider nicht versandt werden. Bitte versuchen Sie es noch einmal oder melden sich ggfls. über unser Kontaktformular.",{title:"Fehler beim Versenden der E-Mail",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),e.$store.dispatch("setOverlay",!1);case 6:case"end":return t.stop()}}),t)})))()},activateUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.dispatch("setOverlay",!0),!e.$route.params.userId){t.next=6;break}return t.next=4,e.$store.dispatch("activateUser",e.$route.params.userId);case 4:r=t.sent,r||e.checkUserStatus();case 6:e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},checkUserStatus:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchUserFromToken");case 2:"active"===e.$store.state.auth.user.status?(e.$root.$bvToast.toast("Sie haben Ihre E-Mail Adresse erfolgreich bestätigt. Ihr Account ist nun freigeschaltet.",{title:"Account aktiviert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),e.$store.state.auth.user.isEmployer?e.$router.push("/user/stellenanzeigen"):e.$store.state.auth.user.isEducational?e.$router.push("/user/fortbildungen"):e.$store.state.auth.user.isEmployee?e.$router.push("/user/stellengesuche"):e.$router.push("/user/account")):e.timeoutId=setTimeout(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.checkUserStatus();case 1:case"end":return t.stop()}}),t)}))),5e3);case 3:case"end":return t.stop()}}),t)})))()},checkError:function(){this.$route.query.error&&this.$root.$bvToast.toast("Bei der Bestätigung Ihrer E-Mail Adresse ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie einen neuen Aktivierungslink anfordern oder melden Sie sich über unser Kontaktformular.",{title:"Fehler bei der Aktivierung",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}}),o=n,l=r("2877"),c=Object(l["a"])(o,s,a,!1,null,null,null);t["default"]=c.exports},8977:function(e,t,r){"use strict";r("2f99")},b631:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register auth-container container"},[r("RegisterForm",{scopedSlots:e._u([{key:"intro",fn:function(){return[r("h2",{staticClass:"h1 bold text-center mt-3 mt-lg-4 mb-0"},[e._v(" "+e._s("employee"===e.$route.query.role?"MFA | ZFA":"education"===e.$route.query.role?"Fortbildungsanbieter":"Arbeitgeber")+" ")]),"education"==e.$route.query.role?r("div",{staticClass:"mt-4"},[r("p",{staticClass:"text-left text-md-center"},[e._v(" Sie möchten eine Fortbildung un unserem "),r("b-link",{staticClass:"bold",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog",target:"_blank"}},[e._v("Fortbildungskatalog")]),e._v(" veröffentlichen? ")],1)]):"employee"==e.$route.query.role?r("div",{staticClass:"mt-4"},[r("p",{staticClass:"text-left text-md-center"},[e._v(" Du möchtest ein Stellengesuch schalten oder unseren Job Newsletter abonnieren? ")])]):r("div",{staticClass:"mt-4"},[r("p",{staticClass:"text-left text-md-center"},[e._v(" Sie möchten eine Stellenanzeige bei uns schalten und auf Stellengesuche antworten? ")]),r("div",{staticClass:"row row-cols-md-3 d-none d-md-flex my-4 text-center"},[r("div",{staticClass:"col"},[r("div",{staticClass:"mx-auto my-3 bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("svg",{staticClass:"bi bi-person-plus-fill text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),r("path",{attrs:{"fill-rule":"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"}})])]),r("h3",{staticClass:"h6"},[e._v("Registrieren")])]),r("div",{staticClass:"col"},[r("div",{staticClass:"my-3 mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("svg",{staticClass:"bi bi-pencil-square text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),r("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])]),r("h3",{staticClass:"h6"},[e._v("Stellenanzeige erstellen")])]),r("div",{staticClass:"col"},[r("div",{staticClass:"my-3 mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("svg",{staticClass:"bi bi-megaphone-fill text-light p-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"}})])]),r("h3",{staticClass:"h6"},[e._v("Veröffentlichen")])])]),r("p",{},[e._v(" Registrieren Sie sich jetzt und veröffentlichen Sie noch heute Ihre Stellenanzeige! Zusätzlich bekommen Sie mit einer laufenden Stellenanzeige die Möglichkeit, auf unsere "),r("b-link",{staticClass:"bold",attrs:{to:"/stellengesuche",target:"_blank"}},[e._v("Stellengesuche von MFA & ZFA")]),e._v(" zu antworten. ")],1)])]},proxy:!0}])}),r("Head",{attrs:{title:e.title,desc:"Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige.",img:""}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"h3 text-center mb-3"},[e._v(" Registrierung als ")]),r("div",{staticClass:"btn-group btn-group-sm d-flex mb-4",attrs:{role:"group"}},[r("b-button",{staticClass:"py-2 py-lg-3",staticStyle:{"border-top-left-radius":"35px","border-bottom-left-radius":"35px","flex-basis":"0"},attrs:{variant:e.isEmployer?"primary":"outline-primary"},on:{click:function(t){return e.toggleRole("employer")}}},[e._v("Arbeitgeber")]),r("b-button",{staticClass:"py-2 py-lg-3 ",staticStyle:{"flex-basis":"0"},attrs:{variant:e.isEmployee?"primary":"outline-primary"},on:{click:function(t){return e.toggleRole("employee")}}},[e._v("MFA | ZFA")]),r("b-button",{staticClass:"py-2 py-lg-3 ",staticStyle:{"border-top-right-radius":"35px","border-bottom-right-radius":"35px","flex-basis":"0"},attrs:{variant:e.isEducational?"primary":"outline-primary"},on:{click:function(t){return e.toggleRole("education")}}},[e._v("Fortbildungs­anbieter")])],1),e._t("intro"),r("b-form",[r("label",{attrs:{for:"user-gender"}},[e._v("Anrede")]),r("b-form-select",{attrs:{id:"user-gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),e.isEmployer||e.isEducational?r("label",{attrs:{for:"user-title"}},[e._v("Titel")]):e._e(),e.isEmployer||e.isEducational?r("b-form-select",{attrs:{id:"user-title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2):e._e(),r("label",{attrs:{for:"firstName",required:""}},[e._v("Vorname")]),r("b-form-input",{attrs:{id:"firstName",type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),r("label",{attrs:{for:"lastName",required:""}},[e._v("Nachname")]),r("b-form-input",{attrs:{id:"lastName",type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),r("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("label",{attrs:{for:"password",required:""}},[e._v("Passwort")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password","aria-describedby":"password-help-block"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:e.togglePasswordType}},["text"===e.passwordType?r("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),r("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):r("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),r("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),r("b-form-text",{attrs:{id:"password-help-block"}},[e._v(" Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten. ")]),r("label",{attrs:{for:"password2",required:""}},[e._v("Passwort wiederholen")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password2",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}),r("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:e.togglePasswordType}},["text"===e.passwordType?r("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),r("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):r("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),r("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),r("b-form-checkbox",{staticClass:"mt-3",attrs:{id:"acceptance",name:"acceptance",value:"accepted","unchecked-value":"not_accepted",switch:""},model:{value:e.acceptance,callback:function(t){e.acceptance=t},expression:"acceptance"}},[e._v(" Ich habe die "),r("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),r("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. * ")],1),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Registrieren ")]),r("p",[e._v(" Bereits registriert? Jetzt "),r("b-link",{attrs:{to:"/auth/login"}},[e._v("Anmelden")]),e._v(". ")],1),e.errors?r("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return r("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(t.message))])})),1):e._e()],1)],2)},n=[],o=r("1da1"),l=(r("96cf"),r("99af"),r("1ba6")),c={name:"RegisterForm",data:function(){return{gender:"",title:"",firstName:"",lastName:"",email:"",password:"",password2:"",passwordType:"password",acceptance:"",contactGenderOptions:l["d"],contactTitleOptions:l["e"],isEmployer:!0,isEmployee:!1,isEducational:!1,errors:[]}},mounted:function(){this.toggleRole(this.$route.query.role)},methods:{onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.next=3,e.$store.dispatch("auth",{type:"register",creds:{gender:e.gender,title:e.title,firstName:e.firstName,lastName:e.lastName,email:e.email.toLowerCase(),password:e.password,password2:e.password2,isEmployer:e.isEmployer,isEmployee:e.isEmployee,isEducational:e.isEducational,acceptance:e.acceptance}});case 3:if(r=t.sent,!r.errors){t.next=8;break}e.errors=r.errors,t.next=11;break;case 8:return t.next=10,e.$store.dispatch("getActivationEmail");case 10:e.$store.state.auth.user._id&&(e.$gtag.event("sign_up",{method:"local",event_label:"id: ".concat(e.$store.state.auth.user._id,"; type: ").concat(e.isEmployer?"employer":e.isEmployee?"employee":"educational")}),e.$router.push("/auth/account/verification"));case 11:e.$store.dispatch("setOverlay",!1);case 12:case"end":return t.stop()}}),t)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"},toggleRole:function(e){e!=this.$route.query.role&&this.$router.push({query:{role:e}}),"employee"===e?(this.isEmployer=!1,this.isEmployee=!0,this.isEducational=!1):"education"===e?(this.isEmployer=!1,this.isEmployee=!1,this.isEducational=!0):(this.isEmployer=!0,this.isEmployee=!1,this.isEducational=!1)}}},u=c,d=(r("8977"),r("2877")),p=Object(d["a"])(u,i,n,!1,null,"71ccb872",null),m=p.exports,h={name:"AuthRegister",components:{RegisterForm:m},data:function(){return{title:"Registrierung für Arbeitgeber"}}},b=h,g=Object(d["a"])(b,s,a,!1,null,null,null);t["default"]=g.exports},c23e:function(e,t,r){"use strict";r("658b")},ed83:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"password-reset auth-container container"},[r("h1",{staticClass:"h2 text-center"},[e._v(e._s(e.title))]),r("PasswordResetForm"),r("Head",{attrs:{title:e.title,desc:"Passwort zurücksetzen bei MFA mal anders",img:""}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[0===e.state?r("b-form",[r("label",{attrs:{for:"email"}},[e._v("E-Mail Adresse")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",autofocus:"",trim:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmitEmail.apply(null,arguments)}}},[e._v(" Passwort zurücksetzen ")]),r("p",[e._v(" Nicht was Du möchtest? "),r("b-link",{attrs:{to:"/auth/register"}},[e._v("Registrieren")]),e._v(" oder "),r("b-link",{attrs:{to:"/login"}},[e._v("Anmelden")]),e._v("! ")],1)],1):e._e(),1===e.state?r("b-form",[r("p",{staticClass:"mt-4"},[e._v(" Bitte überprüfen Sie Ihr E-Mail Postfach und geben Sie den erhaltenen Code ein. ")]),r("label",{attrs:{for:"secretCode"}},[e._v("Code")]),r("b-form-input",{attrs:{id:"secretCode",type:"text",placeholder:"Code eingeben...",autofocus:"",trim:""},model:{value:e.secretCode,callback:function(t){e.secretCode=t},expression:"secretCode"}}),r("label",{attrs:{for:"password"}},[e._v("Neues Passwort")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Neues Passwort eingeben...",autocomplete:"new-password","aria-describedby":"password-help-block"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:e.togglePasswordType}},["text"===e.passwordType?r("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),r("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):r("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),r("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),r("b-form-text",{attrs:{id:"password-help-block"}},[e._v(" Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten. ")]),r("label",{attrs:{for:"password2"}},[e._v("Passwort wiederholen")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password2",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}),r("b-input-group-append",{staticStyle:{cursor:"pointer"},attrs:{"is-text":""},on:{click:e.togglePasswordType}},["text"===e.passwordType?r("svg",{staticClass:"bi bi-eye-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}}),r("path",{attrs:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}})]):r("svg",{staticClass:"bi bi-eye-slash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}}),r("path",{attrs:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}})])])],1),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmitNewPw.apply(null,arguments)}}},[e._v(" Neues Passwort speichern ")])],1):e._e(),e.errors?r("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return r("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(t.message))])})),1):e._e()],1)},n=[],o=r("1da1"),l=(r("99af"),r("96cf"),{name:"PasswordResetForm",data:function(){return{email:"",password:"",password2:"",passwordType:"password",secretCode:"",state:0,errors:[]}},methods:{onSubmitEmail:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),e.errors=[],t.next=4,e.$axios.post("/graphql",{query:'\n                          mutation {\n                              resetPasswordGetCode (email: "'.concat(e.email.toLowerCase(),'") {\n                                  _id\n                              }\n                          }\n                      ')});case 4:r=t.sent,r.data.errors?e.errors=r.data.errors:e.state=1,e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},onSubmitNewPw:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errors=[],e.$store.dispatch("setOverlay",!0),t.next=4,e.$axios.post("/graphql",{query:'\n                      mutation {\n                          resetPasswordVerify(\n                              email: "'.concat(e.email.toLowerCase(),'",\n                              password: "').concat(e.password,'",\n                              password2: "').concat(e.password2,'",\n                              code: "').concat(e.secretCode,'"\n\n                          ) {\n                              _id\n                          }\n                      }\n                  ')});case 4:r=t.sent,r.data.errors?e.errors=r.data.errors:(e.$root.$bvToast.toast("Ihr neues Passwort wurde erfolgreich gespeichert. Bitte melden Sie sich mit dem neuen Passwort an.",{title:"Neues Passwort gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,autoHideDelay:1e4}),e.$router.push({path:"/auth/login"})),e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}}),c=l,u=(r("c23e"),r("2877")),d=Object(u["a"])(c,i,n,!1,null,"b9e2563e",null),p=d.exports,m={name:"AuthPasswordReset",components:{PasswordResetForm:p},data:function(){return{title:"Passwort zurücksetzen"}}},h=m,b=Object(u["a"])(h,s,a,!1,null,null,null);t["default"]=b.exports},f7a3:function(e,t,r){"use strict";r("6032")}}]);
//# sourceMappingURL=auth-legacy.d8e02c64.js.map