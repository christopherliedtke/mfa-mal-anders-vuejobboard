(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"0119":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("b-container",{staticClass:"logout"}),r("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"danger",dismissible:""},model:{value:e.alert.show,callback:function(t){e.$set(e.alert,"show",t)},expression:"alert.show"}},[e._v(" "+e._s(e.alert.msg)+" "),r("BSpinner",{staticStyle:{width:"1.2rem",height:"1.2rem"},attrs:{variant:"danger",label:"Spinning"}})],1),r("Head",{attrs:{title:e.title,desc:"Ausloggen bei MFA mal anders",img:""}})],1)},a=[],n=(r("96cf"),r("c964")),o=r("2b0e"),i=r("01e3");o["default"].component("BSpinner",i["a"]);var c={name:"AuthLogout",data:function(){return{title:"Abmelden",alert:{show:!1,msg:""}}},mounted:function(){this.$route.query.error&&this.$root.$bvToast.toast(this.$route.query.error,{title:"Fehler",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.logout()},methods:{logout:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return localStorage.clear(),localStorage.setItem("nl-pop","false"),t.next=4,e.$axios.get("/api/auth/logout");case 4:r=t.sent,r.data.success&&(e.$store.commit("setUserId",""),e.$store.commit("setUserRole",""),e.$store.commit("setUserStatus",""),e.$router.push({path:"/auth/login"}));case 6:case"end":return t.stop()}}),t)})))()}}},l=c,u=r("2877"),p=Object(u["a"])(l,s,a,!1,null,null,null);t["default"]=p.exports},"01e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var s=r("2b0e"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("9b76"),c=r("365c"),l=r("cf75");function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(l["d"])({label:Object(l["c"])(o["s"]),role:Object(l["c"])(o["s"],"status"),small:Object(l["c"])(o["g"],!1),tag:Object(l["c"])(o["s"],"span"),type:Object(l["c"])(o["s"],"border"),variant:Object(l["c"])(o["s"])},n["Ab"]),d=s["default"].extend({name:n["Ab"],functional:!0,props:p,render:function(e,t){var r,s=t.props,n=t.data,o=t.slots,l=t.scopedSlots,p=o(),d=l||{},m=Object(c["b"])(i["p"],{},d,p)||s.label;return m&&(m=e("span",{staticClass:"sr-only"},m)),e(s.tag,Object(a["a"])(n,{attrs:{role:m?s.role||"status":null,"aria-hidden":m?null:"true"},class:(r={},u(r,"spinner-".concat(s.type),s.type),u(r,"spinner-".concat(s.type,"-sm"),s.small),u(r,"text-".concat(s.variant),s.variant),r)}),[m||e()])}})},"12aa":function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var s=r("2b0e"),a=r("b42e"),n=r("c637"),o=r("a723"),i=r("d82f"),c=r("cf75"),l=r("1947");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=Object(c["d"])(Object(i["m"])(p(p({},Object(i["k"])(l["b"],["size"])),{},{ariaRole:Object(c["c"])(o["s"],"group"),size:Object(c["c"])(o["s"]),tag:Object(c["c"])(o["s"],"div"),vertical:Object(c["c"])(o["g"],!1)})),n["h"]),b=s["default"].extend({name:n["h"],functional:!0,props:m,render:function(e,t){var r=t.props,s=t.data,n=t.children;return e(r.tag,Object(a["a"])(s,{class:d({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),n)}})},"4dab":function(e,t,r){},"5c74":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"login auth-container"},[r("h2",{staticClass:"text-center"},[e._v(e._s(e.title))]),r("div",{staticClass:"icon-box mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("Fa",{staticClass:"text-light m-0",attrs:{icon:"unlock-alt",size:"2x"}})],1),r("LoginForm"),r("Head",{attrs:{title:e.title,desc:"Anmelden bei MFA mal anders",img:""}})],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",[r("label",{attrs:{for:"email"}},[e._v("E-Mail Addresse")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("label",{attrs:{for:"password"}},[e._v("Passwort")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"current-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("Fa",{attrs:{icon:"text"===e.passwordType?"eye":"eye-slash",size:"lg"},on:{click:e.togglePasswordType}})],1)],1),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Login ")]),r("p",[e._v(" Noch nicht registriert? Jetzt "),r("b-link",{attrs:{to:"/auth/register"}},[e._v("Registrieren")]),e._v(". ")],1),r("p",[r("b-link",{attrs:{to:"/auth/password-reset"}},[e._v("Passwort vergessen?")])],1),e.errors?r("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return r("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(t.message))])})),1):e._e()],1)},o=[],i=(r("96cf"),r("c964")),c={name:"LoginForm",data:function(){return{email:"",password:"",passwordType:"password",errors:[]}},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.next=3,e.$store.dispatch("auth",{type:"login",creds:{email:e.email.toLowerCase(),password:e.password}});case 3:r=t.sent,r.errors?e.errors=r.errors:("pending"===e.$store.state.auth.user.status?e.$router.push("/auth/account/verification"):e.$store.state.auth.loggedIn&&(e.$store.state.auth.user.isEmployee?e.$router.push(e.$route.query.redirect||"/user/dashboard?tab=4"):e.$router.push(e.$route.query.redirect||"/user/dashboard?tab=1")),e.$gtag.event("login",{method:"local",event_label:e.$store.state.auth.user._id}),e.$matomo&&e.$matomo.trackEvent("engagement","login",e.$store.state.auth.user._id),e.$matomo&&e.$matomo.setUserId(e.$store.state.auth.user._id)),e.$store.dispatch("getStarredJobs"),e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}},l=c,u=(r("b7dc"),r("2877")),p=Object(u["a"])(l,n,o,!1,null,"5d460532",null),d=p.exports,m={name:"AuthLogin",components:{LoginForm:d},data:function(){return{title:"Anmeldung"}}},b=m,h=Object(u["a"])(b,s,a,!1,null,null,null);t["default"]=h.exports},"77be":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"account-verification position-relative py-5"},[r("h2",[e._v("E-Mail Adresse verifizieren")]),r("p",[e._v(" Aus Datenschutzgründen müssen wir Ihre E-Mail Adresse verifizieren. ")]),r("p",[e._v(" Bitte "),r("strong",[e._v("überprüfen Sie in den nächsten Minuten Ihr E-Mail Postfach")]),e._v(" und bestätigen Sie Ihre E-Mail Adresse über den Aktivierungslink. "),r("strong",[e._v(" Bitte überprüfen Sie gegebenenfalls auch Ihren Spam Ordner. ")])]),r("p",[e._v("Keine E-Mail erhalten?")]),r("b-button",{staticClass:"mt-3 mr-2",attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Neue E-Mail zur Aktivierung senden ")]),r("b-button",{staticClass:"mt-3 mr-2",attrs:{variant:"secondary",to:"/kontakt?subject=Probleme+bei+E-Mail-Verifizierung"}},[e._v(" Probleme? Kontakt aufnehmen ")])],1)},a=[],n=(r("96cf"),r("c964")),o={name:"AuthAccountVerification",data:function(){return{timeoutId:null}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.activateUser();case 2:e.checkUserStatus(),e.checkError();case 4:case"end":return t.stop()}}),t)})))()},methods:{onSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.next=3,e.$store.dispatch("getActivationEmail");case 3:r=t.sent,r?e.$root.$bvToast.toast("Eine neue E-Mail mit Aktivierungslink wurde versandt und sollte innerhalb der nächsten Minuten in Ihrem Postfach ankommen. Bitte überprüfen Sie ggfls. auch Ihren Spam Ordner.",{title:"Aktivierungslink versandt",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}):e.$root.$bvToast.toast("Die E-Mail konnte leider nicht versandt werden. Bitte versuchen Sie es noch einmal oder melden sich ggfls. über unser Kontaktformular.",{title:"Fehler beim Versenden der E-Mail",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),e.$store.dispatch("setOverlay",!1);case 6:case"end":return t.stop()}}),t)})))()},activateUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.dispatch("setOverlay",!0),!e.$route.params.userId){t.next=6;break}return t.next=4,e.$store.dispatch("activateUser",e.$route.params.userId);case 4:r=t.sent,r||e.checkUserStatus();case 6:e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},checkUserStatus:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchUserFromToken");case 2:"active"===e.$store.state.auth.user.status?(e.$root.$bvToast.toast("Sie haben Ihre E-Mail Adresse erfolgreich bestätigt. Ihr Account ist nun freigeschaltet.",{title:"Account aktiviert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),e.$router.push("/user/dashboard?tab=1")):e.timeoutId=setTimeout(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.checkUserStatus();case 1:case"end":return t.stop()}}),t)}))),5e3);case 3:case"end":return t.stop()}}),t)})))()},checkError:function(){this.$route.query.error&&this.$root.$bvToast.toast("Bei der Bestätigung Ihrer E-Mail Adresse ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie einen neuen Aktivierungslink anfordern oder melden Sie sich über unser Kontaktformular.",{title:"Fehler bei der Aktivierung",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}}},i=o,c=r("2877"),l=Object(c["a"])(i,s,a,!1,null,null,null);t["default"]=l.exports},"8ad8":function(e,t,r){},b631:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"register auth-container"},[r("RegisterForm",{scopedSlots:e._u([{key:"intro",fn:function(){return[r("h2",{staticClass:"text-center mb-0"},[e._v(" "+e._s("employee"===e.$route.query.role?"Registrierung als MFA / ZFA":"Registrierung als Arbeitgeber")+" ")]),"employee"!=e.$route.query.role?r("div",{staticClass:"mt-4"},[r("p",{staticClass:"bold text-left text-md-center"},[e._v(" Sie möchten eine Stellenanzeige bei uns schalten? ")]),r("b-row",{staticClass:"d-none d-md-flex my-4 text-center",attrs:{"cols-md":"3"}},[r("b-col",[r("div",{staticClass:"icon-box mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("Fa",{staticClass:"text-light m-0",attrs:{icon:"user-plus",size:"2x"}})],1),r("h3",{staticClass:"h6"},[e._v("Registrieren")])]),r("b-col",[r("div",{staticClass:"icon-box mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("Fa",{staticClass:"text-light m-0",attrs:{icon:"drafting-compass",size:"2x"}})],1),r("h3",{staticClass:"h6"},[e._v("Stellenanzeige erstellen")])]),r("b-col",[r("div",{staticClass:"icon-box mx-auto bg-primary rounded-circle",staticStyle:{width:"75px",height:"75px"}},[r("Fa",{staticClass:"text-light m-0",attrs:{icon:"paper-plane",size:"2x"}})],1),r("h3",{staticClass:"h6"},[e._v("Veröffentlichen")])])],1),r("p",{},[e._v(" Registrieren Sie sich jetzt und veröffentlichen Sie noch heute Ihre Stellenanzeige! ")])],1):e._e()]},proxy:!0}])}),r("Head",{attrs:{title:e.title,desc:"Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige.",img:""}})],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("BButtonGroup",{staticClass:"d-flex mb-4"},[r("b-button",{attrs:{variant:e.isEmployer?"primary":"outline-primary"},on:{click:function(t){return e.toggleRole("employer")}}},[e._v("Ich bin Arbeitgeber")]),r("b-button",{attrs:{variant:e.isEmployee?"primary":"outline-primary"},on:{click:function(t){return e.toggleRole("employee")}}},[e._v("Ich bin MFA / ZFA")])],1),e._t("intro"),r("b-form",[r("label",{attrs:{for:"user-gender"}},[e._v("Anrede")]),r("b-form-select",{attrs:{id:"user-gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),e.isEmployer?r("label",{attrs:{for:"user-title"}},[e._v("Titel")]):e._e(),e.isEmployer?r("b-form-select",{attrs:{id:"user-title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2):e._e(),r("label",{attrs:{for:"firstName"}},[e._v("Vorname *")]),r("b-form-input",{attrs:{id:"firstName",type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),r("label",{attrs:{for:"lastName"}},[e._v("Nachname *")]),r("b-form-input",{attrs:{id:"lastName",type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),r("label",{attrs:{for:"email"}},[e._v("E-Mail Adresse *")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("label",{attrs:{for:"password"}},[e._v("Passwort *")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password","aria-describedby":"password-help-block"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("Fa",{attrs:{icon:"text"===e.passwordType?"eye":"eye-slash",size:"lg"},on:{click:e.togglePasswordType}})],1)],1),r("b-form-text",{attrs:{id:"password-help-block"}},[e._v(" Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten. ")]),r("label",{attrs:{for:"password2"}},[e._v("Passwort wiederholen *")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password2",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("Fa",{attrs:{icon:"text"===e.passwordType?"eye":"eye-slash",size:"lg"},on:{click:e.togglePasswordType}})],1)],1),r("b-form-checkbox",{staticClass:"mt-3",attrs:{id:"acceptance",name:"acceptance",value:"accepted","unchecked-value":"not_accepted",switch:""},model:{value:e.acceptance,callback:function(t){e.acceptance=t},expression:"acceptance"}},[e._v(" Ich habe die "),r("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),r("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. * ")],1),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Registrieren ")]),r("p",[e._v(" Bereits registriert? Jetzt "),r("b-link",{attrs:{to:"/auth/login"}},[e._v("Anmelden")]),e._v(". ")],1),e.errors?r("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return r("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(t.message))])})),1):e._e()],1)],2)},o=[],i=(r("99af"),r("96cf"),r("c964")),c=r("2b0e"),l=r("12aa"),u=r("1ba6");c["default"].component("BButtonGroup",l["a"]);var p={name:"RegisterForm",data:function(){return{gender:"",title:"",firstName:"",lastName:"",email:"",password:"",password2:"",passwordType:"password",acceptance:"",contactGenderOptions:u["d"],contactTitleOptions:u["e"],isEmployer:!0,isEmployee:!1,errors:[]}},mounted:function(){this.toggleRole(this.$route.query.role)},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.next=3,e.$store.dispatch("auth",{type:"register",creds:{gender:e.gender,title:e.title,firstName:e.firstName,lastName:e.lastName,email:e.email.toLowerCase(),password:e.password,password2:e.password2,isEmployer:e.isEmployer,isEmployee:e.isEmployee,acceptance:e.acceptance}});case 3:if(r=t.sent,!r.errors){t.next=8;break}e.errors=r.errors,t.next=11;break;case 8:return t.next=10,e.$store.dispatch("getActivationEmail");case 10:e.$store.state.auth.user._id&&(e.$gtag.event("sign_up",{method:"local",event_label:"id: ".concat(e.$store.state.auth.user._id,"; type: ").concat(e.isEmployer?"employer":"employee")}),e.$matomo&&e.$matomo.trackEvent("engagement","sign_up","id: ".concat(e.$store.state.auth.user._id,"; type: ").concat(e.isEmployer?"employer":"employee")),e.$matomo&&e.$matomo.setUserId(e.$store.state.auth.user._id),e.$router.push("/auth/account/verification"));case 11:e.$store.dispatch("setOverlay",!1);case 12:case"end":return t.stop()}}),t)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"},toggleRole:function(e){e!=this.$route.query.role&&this.$router.push({query:{role:e}}),"employee"===e?(this.isEmployer=!1,this.isEmployee=!0):(this.isEmployer=!0,this.isEmployee=!1)}}},d=p,m=(r("df6f"),r("2877")),b=Object(m["a"])(d,n,o,!1,null,"3ac1a12f",null),h=b.exports,f={name:"AuthRegister",components:{RegisterForm:h},data:function(){return{title:"Registrierung für Arbeitgeber"}}},g=f,v=Object(m["a"])(g,s,a,!1,null,null,null);t["default"]=v.exports},b7dc:function(e,t,r){"use strict";r("4dab")},d199:function(e,t,r){},df6f:function(e,t,r){"use strict";r("d199")},ed83:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"password-reset auth-container"},[r("h2",{staticClass:"text-center"},[e._v(e._s(e.title))]),r("PasswordResetForm")],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[0===e.state?r("b-form",[r("label",{attrs:{for:"email"}},[e._v("E-Mail Adresse")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",autofocus:"",trim:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmitEmail(t)}}},[e._v(" Passwort zurücksetzen ")]),r("p",[e._v(" Nicht was Du möchtest? "),r("b-link",{attrs:{to:"/auth/register"}},[e._v("Registrieren")]),e._v(" oder "),r("b-link",{attrs:{to:"/login"}},[e._v("Anmelden")]),e._v("! ")],1)],1):e._e(),1===e.state?r("b-form",[r("p",{staticClass:"mt-4"},[e._v(" Bitte überprüfen Sie Ihr E-Mail Postfach und geben Sie den erhaltenen Code ein. ")]),r("label",{attrs:{for:"secretCode"}},[e._v("Code")]),r("b-form-input",{attrs:{id:"secretCode",type:"text",placeholder:"Code eingeben...",autofocus:"",trim:""},model:{value:e.secretCode,callback:function(t){e.secretCode=t},expression:"secretCode"}}),r("label",{attrs:{for:"password"}},[e._v("Neues Passwort")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Neues Passwort eingeben...",autocomplete:"new-password","aria-describedby":"password-help-block"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("Fa",{attrs:{icon:"text"===e.passwordType?"eye":"eye-slash",size:"lg"},on:{click:e.togglePasswordType}})],1)],1),r("b-form-text",{attrs:{id:"password-help-block"}},[e._v(" Das Passwort muss mindestens 6 Zeichen inkl. jeweils ein Kleinbuchstabe, Großbuchstabe, Zahl und Sonderzeichen enthalten. ")]),r("label",{attrs:{for:"password2"}},[e._v("Passwort wiederholen")]),r("b-input-group",[r("b-form-input",{attrs:{id:"password2",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"new-password"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("Fa",{attrs:{icon:"text"===e.passwordType?"eye":"eye-slash",size:"lg"},on:{click:e.togglePasswordType}})],1)],1),r("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){return t.preventDefault(),e.onSubmitNewPw(t)}}},[e._v(" Neues Passwort speichern ")])],1):e._e(),e.errors?r("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return r("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(t.message))])})),1):e._e()],1)},o=[],i=(r("99af"),r("96cf"),r("c964")),c={name:"PasswordResetForm",data:function(){return{email:"",password:"",password2:"",passwordType:"password",secretCode:"",state:0,errors:[]}},methods:{onSubmitEmail:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),e.errors=[],t.next=4,e.$axios.post("/graphql",{query:'\n                          mutation {\n                              resetPasswordGetCode (email: "'.concat(e.email.toLowerCase(),'") {\n                                  _id\n                              }\n                          }\n                      ')});case 4:r=t.sent,r.data.errors?e.errors=r.data.errors:e.state=1,e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},onSubmitNewPw:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errors=[],e.$store.dispatch("setOverlay",!0),t.next=4,e.$axios.post("/graphql",{query:'\n                      mutation {\n                          resetPasswordVerify(\n                              email: "'.concat(e.email.toLowerCase(),'",\n                              password: "').concat(e.password,'",\n                              password2: "').concat(e.password2,'",\n                              code: "').concat(e.secretCode,'"\n\n                          ) {\n                              _id\n                          }\n                      }\n                  ')});case 4:r=t.sent,r.data.errors?e.errors=r.data.errors:(e.$root.$bvToast.toast("Ihr neues Passwort wurde erfolgreich gespeichert. Bitte melden Sie sich mit dem neuen Passwort an.",{title:"Neues Passwort gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,autoHideDelay:1e4}),e.$router.push({path:"/auth/login"})),e.$store.dispatch("setOverlay",!1);case 7:case"end":return t.stop()}}),t)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}},l=c,u=(r("f311"),r("2877")),p=Object(u["a"])(l,n,o,!1,null,"3ea92bdf",null),d=p.exports,m={name:"AuthPasswordReset",components:{PasswordResetForm:d},data:function(){return{title:"Passwort zurücksetzen"}}},b=m,h=Object(u["a"])(b,s,a,!1,null,null,null);t["default"]=h.exports},f311:function(e,t,r){"use strict";r("8ad8")}}]);
//# sourceMappingURL=auth.38cf2af0.js.map