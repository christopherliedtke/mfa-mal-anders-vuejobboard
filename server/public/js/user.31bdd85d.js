(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"23b3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"dashboard py-5"},[a("h2",[e._v("Mein Konto")]),a("b-tabs",{attrs:{"content-class":"mt-3",value:parseInt(e.query.tab),lazy:""}},[a("b-tab",{attrs:{title:"Account"},on:{click:function(t){return e.setQuery("tab",0)}}},[a("MyAccount")],1),e.$store.state.auth.user.isEmployer?a("b-tab",{attrs:{title:"Stellenanzeigen"},on:{click:function(t){return e.setQuery("tab",1)}}},[a("MyJobsList")],1):e._e(),e.$store.state.auth.user.isEmployer?a("b-tab",{attrs:{title:"Unternehmen"},on:{click:function(t){return e.setQuery("tab",2)}}},[a("MyCompaniesList")],1):e._e(),e.$store.state.auth.user.isEmployer?a("b-tab",{attrs:{title:"Zahlungen"},on:{click:function(t){return e.setQuery("tab",3)}}},[a("MyPaymentsList")],1):e._e(),e.$config.starredJobs.active&&(e.$store.state.auth.user.isAdmin||e.$store.state.auth.user.isEmployee||e.$store.state.starredJobs.starredJobs.length>0)?a("b-tab",{attrs:{title:"Meine gespeicherten Stellenanzeigen"},on:{click:function(t){return e.setQuery("tab",4)}}},[a("MyStarredJobs")],1):e._e()],1),a("Head",{attrs:{title:"Dashboard",desc:"",img:""}})],1)},s=[],r=a("fc11"),i=a("f3f3"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Mein Account")]),a("p",[e._v(" Hier können Sie Ihre Account-Daten ändern bzw. Ihren Account löschen. ")]),a("AccountDataForm",{attrs:{"api-users-schema":"private"}}),a("DeleteAccountButton")],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.delete-account",modifiers:{"delete-account":!0}}],attrs:{variant:"danger",size:"sm",type:"submit"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"trash-alt"}}),e._v("Account löschen")],1),a("BModal",{attrs:{id:"delete-account",title:"Account löschen","ok-title":"Jetzt löschen","cancel-title":"Abbrechen",centered:"","ok-variant":"danger","footer-class":"d-flex justify-content-between"},on:{ok:e.deleteAccount}},[a("p",{staticClass:"my-4"},[e._v(" Bist Du sicher, dass Du Deinen Account löschen möchtest? ")]),a("b-form",[a("label",{attrs:{for:"password"}},[e._v("Passwort")]),a("b-input-group",[a("b-form-input",{attrs:{id:"password",type:e.passwordType,placeholder:"Passwort eingeben...",autocomplete:"current-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("Fa",{attrs:{icon:"text"===e.passwordType?"eye":"eye-slash","font-scale":"1.2"},on:{click:e.togglePasswordType}})],1)],1),a("div",{staticClass:"error mt-3"},e._l(e.errors,(function(t){return a("b-alert",{key:t.message,attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(e._s(t.message))])})),1)],1)],1)],1)},u=[],d=(a("96cf"),a("c964")),m=a("2b0e"),b=a("6aac"),p=a("e6c7");m["default"].component("BModal",b["a"]),m["default"].directive("b-modal",p["a"]);var h={name:"DeleteAccountButton",data:function(){return{password:"",passwordType:"password",errors:null}},methods:{deleteAccount:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),t.$store.dispatch("setOverlay",!0),t.errors=null,a.next=5,t.$axios.post("/graphql",{query:'\n                      mutation {\n                          deleteMe (password: "'.concat(t.password,'") {\n                              _id\n                          }\n                      }\n                  ')});case 5:n=a.sent,n.data.errors?t.errors=n.data.errors:(t.$gtag.event("delete_account",{event_label:t.$store.state.auth.user._id}),t.$matomo&&t.$matomo.trackEvent("engagement","delete_account",t.$store.state.auth.user._id),t.$store.dispatch("logout")),t.$store.dispatch("setOverlay",!1);case 8:case"end":return a.stop()}}),a)})))()},togglePasswordType:function(){"text"===this.passwordType?this.passwordType="password":this.passwordType="text"}}},v=h,f=(a("6e06"),a("2877")),g=Object(f["a"])(v,c,u,!1,null,"2d742bec",null),y=g.exports,_=a("986e"),w={name:"MyAccount",components:{DeleteAccountButton:y,AccountDataForm:_["a"]}},k=w,x=Object(f["a"])(k,o,l,!1,null,null,null),$=x.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Meine Stellenanzeigen")]),a("p",[e._v(" Hier können Sie Stellenanzeigen erstellen, bearbeiten, veröffentlichen oder löschen. ")]),a("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/"+(e.$store.state.auth.user.isAdmin?"admin":"user/dashboard")+"/jobs/edit/new",variant:"primary"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"plus"}}),e._v("Neue Stelle")],1),a("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas",variant:"secondary",target:"_blank"}},[e._v("Tipps für Stellenanzeigen")]),a("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/kontakt",variant:"outline-primary",target:"_blank"}},[e._v("Fragen oder Hilfe benötigt?")]),e._l(e.myJobs,(function(t){return a("BCard",{key:t._id,staticClass:"shadow1 bg-light my-3"},[a("BCardText",[a("h4",[e._v(" "+e._s(t.title)+" ")]),a("div",[t.paidExpiresAt>=new Date&&t.paid?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"success\n                      "}},[e._v("bezahlt")]):e._e(),t.paid?e._e():a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"warning"}},[e._v("unbezahlt")]),"published"===t.status&&t.paidExpiresAt>=new Date&&(!t.applicationDeadline||t.applicationDeadline>=(new Date).getTime())&&t.paid?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"success"}},[e._v("online")]):e._e(),"draft"===t.status?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"light"}},[e._v("Entwurf")]):e._e(),"unpublished"===t.status?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"danger"}},[e._v("offline")]):e._e(),t.applicationDeadline&&t.applicationDeadline<(new Date).getTime()?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"danger"}},[e._v("Bewerbungsfrist abgelaufen")]):e._e()],1),a("div",{staticClass:"my-3"},[a("div",[e._v(" Erstellt: "),a("span",{staticClass:"text-muted"},[e._v(" "+e._s(new Date(parseInt(t.createdAt)).toLocaleString())+" ")])]),t.applicationDeadline?a("div",[e._v(" Bewerbungsfrist: "),a("span",{staticClass:"text-muted"},[e._v(" "+e._s(new Date(t.applicationDeadline).toLocaleString())+" ")])]):e._e(),t.publishedAt&&t.paidExpiresAt>=new Date?a("div",[e._v(" Zuletzt veröffentlicht: "),a("span",{staticClass:"text-muted"},[e._v(" "+e._s(new Date(parseInt(t.publishedAt)).toLocaleString())+" ")])]):e._e(),t.paidExpiresAt>=new Date&&t.payment&&"paid"===t.payment.status?a("div",[e._v(" Bezahlt: "),a("span",{staticClass:"text-muted"},[e._v(" "+e._s(new Date(parseInt(t.payment.paidAt)).toLocaleString())+" ")])]):e._e(),t.paidExpiresAt>=new Date&&"invoice-pending"!=t.status?a("div",[e._v(" Zahlung für Anzeige läuft ab: "),a("span",{staticClass:"text-muted"},[e._v(" "+e._s(new Date(parseInt(t.paidExpiresAt)).toLocaleString())+" ")])]):e._e()]),a("div",{staticClass:"d-flex justify-content-between align-items-end"},[a("div",[a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{to:"/user/dashboard/jobs/edit/"+t._id,variant:"primary",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"edit"}}),e._v(" Bearbeiten")],1),a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{to:"/user/dashboard/jobs/preview/"+t._id,target:"_blank",variant:"info",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"eye"}}),e._v(" Vorschau")],1),t.paid&&t.paidExpiresAt>=new Date?a("b-dropdown",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{size:"sm",left:"",variant:"secondary"},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("Fa",{staticClass:"mr-2",attrs:{icon:"ellipsis-v"}}),e._v(" Status ändern ")]},proxy:!0}],null,!0)},[a("b-dropdown-item",{attrs:{variant:""},on:{click:function(a){return a.preventDefault(),e.updateJobStatus(t._id,"draft")}}},[e._v("Entwurf")]),a("b-dropdown-item",{attrs:{variant:"success"},on:{click:function(a){return a.preventDefault(),e.updateJobStatus(t._id,"published")}}},[e._v("Online")]),a("b-dropdown-item",{staticClass:"mb-0",attrs:{variant:"danger"},on:{click:function(a){return a.preventDefault(),e.updateJobStatus(t._id,"unpublished")}}},[e._v("Offline")])],1):e._e(),t.paidExpiresAt<new Date&&!t.payment?a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{variant:"success",size:"sm",to:"/user/dashboard/checkout/"+t._id}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"shopping-cart"}}),e._v("Jetzt bezahlen")],1):e._e(),"invoice-pending"===t.status||t.payment&&"pending"===t.payment.status?a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{disabled:!0,variant:"light",size:"sm"}},[e._v("Rechnung in Bearbeitung")]):e._e()],1),a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t._id,expression:"job._id"}],staticClass:"mb-2 mb-md-0",attrs:{variant:"outline-danger",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"trash-alt"}}),e._v(" Löschen")],1)],1)])]),a("BModal",{attrs:{id:t._id,title:"Delete "+t.title,"ok-title":"Stellenanzeige löschen","cancel-title":"Abbrechen",centered:"","ok-variant":"danger","footer-class":"d-flex justify-content-between"},on:{ok:function(a){return e.deleteJob(t._id)}}},[a("p",{staticClass:"my-4"},[e._v(" Bist Du sicher, dass Du diese Stellenanzeige löschen möchtest? ")])])],1)}))],2)},A=[],S=(a("99af"),a("4160"),a("a434"),a("159b"),a("e98b")),B=a("205f"),D=a("d6e4");m["default"].component("BModal",b["a"]),m["default"].directive("b-modal",p["a"]),m["default"].component("BBadge",S["a"]),m["default"].component("BCard",B["a"]),m["default"].component("BCardText",D["a"]);var E={name:"MyJobsList",data:function(){return{myJobs:[]}},created:function(){this.getJobsByUserId()},mounted:function(){this.checkPaymentSuccess(this.$route.query)},methods:{getJobsByUserId:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,t.next=4,e.$axios.get("/graphql",{params:{query:"\n              query {\n                  myJobs {\n                      _id\n                      createdAt\n                      updatedAt\n                      publishedAt\n                      status\n                      paid\n                      paidExpiresAt\n                      applicationDeadline\n                      title\n                      company {\n                          name\n                          street\n                          zipCode\n                          location\n                          state\n                          size\n                      }\n                      payment {\n                          status\n                          paidAt\n                          paymentExpiresAt\n                      }\n                  }\n              }\n          "}});case 4:a=t.sent,e.myJobs=a.data.data.myJobs,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$root.$bvToast.toast("Ihre Stellenanzeigen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 11:e.$store.dispatch("setOverlay",!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},updateJobStatus:function(e,t){var a=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.$axios.post("/graphql",{query:'\n                              mutation {\n                                  updateJob(_id: "'.concat(e,'", status: "').concat(t,'") {\n                                      _id\n                                      createdAt\n                                      updatedAt\n                                      publishedAt\n                                      status\n                                      paid\n                                      paidExpiresAt\n                                      applicationDeadline\n                                      title\n                                      company {\n                                          name\n                                          street\n                                          zipCode\n                                          location\n                                          state\n                                          size\n                                      }\n                                      payment {\n                                          status\n                                          paidAt\n                                          paymentExpiresAt\n                                      }\n                                  }\n                              }\n                          ')});case 3:s=n.sent,s.data.data.updateJob.status===t?(a.myJobs.forEach((function(n,r){n._id===e&&(a.myJobs[r].status=t,a.myJobs[r].updatedAt=s.data.data.updateJob.updatedAt)})),a.$root.$bvToast.toast("Der Status der Stellenanzeige wurde erfolgreich aktualisiert.",{title:"Status aktualisiert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0})):a.$root.$bvToast.toast("Der Status der Stellenanzeige konnte nicht aktualisiert werden. Bitte versuchen Sie es später noch einmal.",{title:"Fehler beim Aktualisieren",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),a.$root.$bvToast.toast("Der Status der Stellenanzeige konnte nicht aktualisiert werden. Bitte versuchen Sie es später noch einmal.",{title:"Fehler beim Aktualisieren",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteJob:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.post("/graphql",{query:'\n                          mutation {\n                              deleteJob(_id: "'.concat(e,'") {\n                                  _id\n                                  status\n                              }\n                          }\n                      ')});case 3:n=a.sent,"deleted"===n.data.data.deleteJob.status?(t.myJobs.forEach((function(a,n){a._id===e&&t.myJobs.splice(n,1)})),t.$root.$bvToast.toast("Die Stellenanzeige wurde erfolgreich gelöscht.",{title:"Stellenanzeige gelöscht",variant:"success",toaster:"b-toaster-bottom-right",solid:!0})):t.$root.$bvToast.toast("Die Stellenanzeige konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",{title:"Fehler beim Löschen",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),t.$root.$bvToast.toast("Die Stellenanzeige konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",{title:"Fehler beim Löschen",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},checkPaymentSuccess:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:"true"===e.success?t.$root.$bvToast.toast("Der Zahlungsvorgang wurde erfolgreich abgeschlossen. Ihre Anzeige ist ab sofort auf unserer Stellenbörse verfügbar. Einen Beleg für Ihre Zahlung erhalten Sie auf Ihre angegebene E-Mail Adresse.",{title:"Zahlung erfolgreich",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}):"false"===e.success&&t.$root.$bvToast.toast("Ihre Zahlung konnte leider nicht verarbeitet werden. Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.",{title:"Zahlung fehlgeschlagen",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 1:case"end":return a.stop()}}),a)})))()}}},z=E,J=(a("e7f8"),Object(f["a"])(z,C,A,!1,null,"0f298b7e",null)),O=J.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Meine Unternehmen")]),a("p",[e._v(" Hier können Sie Ihre erstellten Unternehmen bearbeiten, löschen bzw. neue Unternehmen erstellen. ")]),a("p",[e._v(' Sie können das selbe Unternehmen mit unterschiedlichen Standorten erstellen und diese gegebenenfalls für Ihre verschiedenen Stellenanzeigen nutzen. Ein Unternehmen können Sie auch direkt während des Erstellens einer Stellenanzeige im Reiter "Stellenanzeigen" einrichten. Bearbeiten Sie hier einzelne Unternehmen, wirkt sich dies direkt auf die verknüpften Stellenanzeigen aus. ')]),a("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/user/dashboard/companies/edit/new",variant:"outline-primary"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"plus"}}),e._v("Neues Unternehmen")],1),a("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/kontakt",variant:"outline-secondary",target:"_blank"}},[e._v("Fragen oder Hilfe benötigt?")]),e._l(e.myCompanies,(function(t){return a("BCard",{key:t._id,staticClass:"shadow1 bg-light my-3"},[a("BCardText",[a("h4",[e._v(e._s(t.name)+" | "+e._s(t.location))]),a("div",{staticClass:"my-3"},[a("div",[e._v(" Erstellt: "+e._s(new Date(parseInt(t.createdAt)).toLocaleString())+" ")])]),a("div",{staticClass:"d-flex justify-content-between align-items-end"},[a("div",[a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{to:"/user/dashboard/companies/edit/"+t._id,variant:"primary",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"edit"}}),e._v(" Bearbeiten")],1)],1),a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t._id,expression:"company._id"}],attrs:{variant:"outline-danger",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"trash-alt"}}),e._v(" Löschen")],1)],1)])]),a("BModal",{attrs:{id:t._id,title:"Delete "+t.name,"ok-title":"Unternehmen löschen","cancel-title":"Abbrechen",centered:"","ok-variant":"danger","footer-class":"d-flex justify-content-between"},on:{ok:function(a){return e.deleteCompany(t._id)}}},[a("p",{staticClass:"my-4"},[e._v(" Bist Du sicher, dass Du das Unternehmen löschen möchtest? ")])])],1)}))],2)},T=[];m["default"].component("BModal",b["a"]),m["default"].directive("b-modal",p["a"]),m["default"].component("BCard",B["a"]),m["default"].component("BCardText",D["a"]);var j={name:"MyCompaniesList",data:function(){return{myCompanies:[]}},created:function(){this.getCompaniesByUserId()},methods:{getCompaniesByUserId:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,t.next=4,e.$axios.get("/graphql",{params:{query:"\n                              query {\n                                  myCompanies {\n                                      _id\n                                      createdAt\n                                      updatedAt\n                                      name\n                                      location\n                                  }\n                              }\n                          "}});case 4:a=t.sent,e.myCompanies=a.data.data.myCompanies,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$root.$bvToast.toast("Ihre Unternehmen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 11:e.$store.dispatch("setOverlay",!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},deleteCompany:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.post("/graphql",{query:'\n                              mutation {\n                                  deleteCompany(_id: "'.concat(e,'") {\n                                      _id\n                                  }\n                              }\n                          ')});case 3:n=a.sent,n.data.data.deleteCompany._id?(t.myCompanies.forEach((function(a,n){a._id===e&&t.myCompanies.splice(n,1)})),t.$root.$bvToast.toast("Das Unternehmen wurde erfolgreich gelöscht.",{title:"Unternehmen gelöscht",variant:"success",toaster:"b-toaster-bottom-right",solid:!0})):t.$root.$bvToast.toast("Das Unternehmen konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",{title:"Fehler beim Löschen",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),t.$root.$bvToast.toast("Das Unternehmen konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",{title:"Fehler beim Löschen",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}}},U=j,q=Object(f["a"])(U,M,T,!1,null,null,null),F=q.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Meine Zahlungen")]),a("p",[e._v(" Hier können Sie Ihre getätigten/ausstehenden Zahlungen bzw. Rechnungen einsehen. ")]),a("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/kontakt",variant:"outline-primary",target:"_blank"}},[e._v("Fragen oder Hilfe benötigt?")]),e.myPayments.length>0?a("div",e._l(e.myPayments,(function(t){return a("BCard",{key:t._id,staticClass:"shadow1 bg-light my-3"},[a("BCardText",[a("h4",[e._v(e._s(t.job.title)+" | "+e._s(t.job.company.name))]),a("div",["paid"===t.status?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"success\n                      "}},[e._v("bezahlt")]):e._e(),"pending"===t.status?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"warning\n                      "}},[e._v("ausstehend")]):e._e(),"cancelled"===t.status?a("BBadge",{staticClass:"mr-1",attrs:{pill:"",variant:"danger\n                      "}},[e._v("verworfen")]):e._e()],1),a("div",{staticClass:"my-3"},[a("div",[e._v(" Rechnungsdatum: "+e._s(new Date(parseInt(t.invoiceDate||t.createdAt)).toLocaleDateString("de-DE"))+" ")]),t.paidAt?a("div",[e._v(" Zahlung eingegangen am: "+e._s(new Date(parseInt(t.paidAt)).toLocaleDateString("de-DE"))+" ")]):e._e(),t.paymentExpiresAt&&"paid"===t.status?a("div",[e._v(" Zahlung läuft ab am: "+e._s(new Date(parseInt(t.paymentExpiresAt)).toLocaleDateString("de-DE"))+" ")]):e._e()]),a("div",{staticClass:"d-flex justify-content-start align-items-end"},[a("div",[a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{href:"/api/invoice/download/"+t._id,target:"_blank",variant:"secondary",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"download"}}),e._v(" Rechnung herunterladen")],1)],1),a("div",[t.receiptUrl?a("b-button",{staticClass:"mr-2 mb-2 mb-md-0",attrs:{href:""+t.receiptUrl,target:"_blank",variant:"info",size:"sm"}},[a("Fa",{staticClass:"mr-2",attrs:{icon:"external-link-alt"}}),e._v("Zahlungsbeleg abrufen")],1):e._e()],1)])])],1)})),1):e._e()],1)},L=[];m["default"].component("BBadge",S["a"]),m["default"].component("BCard",B["a"]),m["default"].component("BCardText",D["a"]);var N={name:"MyPaymentsList",data:function(){return{myPayments:[]}},created:function(){this.getPaymentsByUserId()},methods:{getPaymentsByUserId:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,t.next=4,e.$axios.get("/graphql",{params:{query:"\n                              query {\n                                  myPayments {\n                                      _id\n                                      createdAt\n                                      updatedAt\n                                      paidAt\n                                      paymentExpiresAt\n                                      invoiceNo\n                                      invoiceDate\n                                      amount\n                                      status\n                                      receiptUrl\n                                      job {\n                                          title\n                                          company {\n                                              name\n                                          }\n                                      }\n                                  }\n                              }\n                          "}});case 4:a=t.sent,e.myPayments=a.data.data.myPayments,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$root.$bvToast.toast("Ihre Zahlungen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 11:e.$store.dispatch("setOverlay",!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}},R=N,H=(a("d6be"),Object(f["a"])(R,I,L,!1,null,"5404a05a",null)),P=H.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.$store.state.starredJobs.starredJobs,(function(e){return a("JobCard",{key:e._id,attrs:{job:e.job}})})),0===e.$store.state.starredJobs.starredJobs.length?a("h5",{staticClass:"my-5"},[e._v(" Du hast bisher keine Stellenanzeigen gespeichert. ")]):e._e()],2)},Q=[],V=a("f0fa"),G={name:"MyStarredJobs",components:{JobCard:V["a"]}},K=G,W=Object(f["a"])(K,Z,Q,!1,null,null,null),X=W.exports,Y=a("f902"),ee=a("6190");m["default"].component("b-tabs",Y["a"]),m["default"].component("b-tab",ee["a"]);var te={name:"UserDashboardHome",components:{MyAccount:$,MyJobsList:O,MyCompaniesList:F,MyPaymentsList:P,MyStarredJobs:X},data:function(){return{query:{tab:0}}},watch:{"$route.query.tab":function(){this.query.tab=this.$route.query.tab||0}},mounted:function(){this.query.tab=this.$route.query.tab},methods:{setQuery:function(e,t){this.query[e]=t,this.$router.push({query:Object(i["a"])(Object(i["a"])({},this.$route.query),{},Object(r["a"])({},e,t))})}}},ae=te,ne=Object(f["a"])(ae,n,s,!1,null,null,null);t["default"]=ne.exports},2599:function(e,t,a){"use strict";a("b4e0")},"4c0d":function(e,t,a){},"6e06":function(e,t,a){"use strict";a("d33f")},8354:function(e,t,a){},8515:function(e,t,a){"use strict";var n=function(e,t){return e.map((function(e,t){return[t,e]})).sort(function(e,t){return this(e[1],t[1])||e[0]-t[0]}.bind(t)).map((function(e){return e[1]}))};t["a"]=n},"986e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-data-form position-relative mb-3"},[a("b-form",{attrs:{id:"account-data-form"}},[a("label",{attrs:{for:"user-gender"}},[e._v("Anrede")]),a("b-form-select",{attrs:{id:"user-gender",state:e.validated&&!!e.user.gender||null,disabled:e.disabled},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"user-title"}},[e._v("Titel")]),a("b-form-select",{attrs:{id:"user-title",state:e.validated&&!!e.user.title||null,disabled:e.disabled},model:{value:e.user.title,callback:function(t){e.$set(e.user,"title",t)},expression:"user.title"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return a("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),a("label",{attrs:{for:"first-name"}},[e._v("Vorname *")]),a("b-form-input",{attrs:{id:"first-name",type:"text",state:e.validated?!!e.user.firstName:null,placeholder:"Vorname eingeben...",required:"",disabled:e.disabled},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}}),a("label",{attrs:{for:"last-name"}},[e._v("Nachname *")]),a("b-form-input",{attrs:{id:"last-name",type:"text",state:e.validated?!!e.user.lastName:null,placeholder:"Nachname eingeben...",required:"",disabled:e.disabled},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}}),a("label",{attrs:{for:"email"}},[e._v("E-Mail Adresse *")]),a("b-form-input",{attrs:{id:"email",type:"email",state:e.validated?!!e.user.email:null,placeholder:"E-Mail Adresse eingeben...",required:"",disabled:e.disabled},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("label",{staticClass:"d-block",attrs:{for:"role"}},[e._v("Rolle")]),a("b-form-checkbox",{attrs:{id:"is-employer",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEmployer,callback:function(t){e.$set(e.user,"isEmployer",t)},expression:"user.isEmployer"}},[e._v(" Arbeitgeber ")]),a("b-form-checkbox",{attrs:{id:"is-employee",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEmployee,callback:function(t){e.$set(e.user,"isEmployee",t)},expression:"user.isEmployee"}},[e._v(" MFA / ZFA ")]),a("div",{staticClass:"d-flex justify-content-between my-4"},[a("b-button",{attrs:{variant:e.disabled?"primary":"outline-danger",size:"sm"},on:{click:function(t){e.disabled=!e.disabled}}},[e.disabled?a("Fa",{staticClass:"mr-2",attrs:{icon:"edit"}}):e._e(),e._v(" "+e._s(e.disabled?"Bearbeiten":"Abbrechen")+" ")],1),e.disabled?e._e():a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Speichern ")])],1)],1)],1)},s=[],r=(a("99af"),a("96cf"),a("c964")),i=a("1ba6"),o={name:"AccountDataForm",props:{apiUsersSchema:{type:String,default:"private"}},data:function(){return{user:{_id:"",gender:null,title:null,firstName:"",lastName:"",email:"",isEmployer:!1,isEmployee:!1},contactGenderOptions:i["d"],contactTitleOptions:i["e"],disabled:!0,validated:null}},computed:{userQuery:function(){return"admin"===this.apiUsersSchema?"adminUser":"me"}},created:function(){this.getUserData()},methods:{getUserData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.dispatch("setOverlay",!0),t.next=4,e.$axios.get("/graphql",{params:{query:"\n                              query {\n                                  ".concat(e.userQuery," ").concat("admin"===e.apiUsersSchema?'(_id: "'.concat(e.$route.params.userId,'")'):"","\n                                      {\n                                      _id\n                                      gender\n                                      title\n                                      firstName\n                                      lastName\n                                      email\n                                      isEmployer\n                                      isEmployee\n                                  }\n                              }\n                          ")}});case 4:a=t.sent,a.data.data[e.userQuery]&&(e.user=a.data.data[e.userQuery]),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:e.$store.dispatch("setOverlay",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.formValidation()){t.next=27;break}return e.$store.dispatch("setOverlay",!0),t.prev=2,a="admin"===e.apiUsersSchema?"adminUpdateUser":"updateMe",t.next=6,e.$axios.post("/graphql",{query:"\n                                  mutation {\n                                      ".concat(a," (\n                                          ").concat("admin"===e.apiUsersSchema?'_id: "'.concat(e.user._id,'",'):"",'\n                                          gender: "').concat(e.user.gender,'",\n                                          title: "').concat(e.user.title,'",\n                                          firstName: "').concat(e.user.firstName,'",\n                                          lastName: "').concat(e.user.lastName,'",\n                                          email: "').concat(e.user.email.toLowerCase(),'",\n                                          isEmployer: ').concat(e.user.isEmployer,",\n                                          isEmployee: ").concat(e.user.isEmployee,",\n                                      ) {\n                                          _id\n                                          status\n                                      }\n                                  }\n                              ")});case 6:if(n=t.sent,!n.data.data[a]){t.next=20;break}return e.disabled=!0,t.next=11,e.$store.dispatch("fetchUserFromDb");case 11:if(e.$root.$bvToast.toast("Ihre Daten wurden erfolgreich gespeichert.",{title:"Daten gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),"pending"!==n.data.data[a].status||e.$store.state.auth.user.isAdmin){t.next=18;break}return t.next=15,e.$store.dispatch("fetchUserFromDb");case 15:return t.next=17,e.$axios.get("/api/auth/verification/get-activation-email");case 17:e.$root.$bvToast.toast("In den nächsten Minuten erhalten Sie eine E-Mail zur Verifizierung Ihrer E-Mail Adresse in Ihr Postfach. Bitte bestätigen Sie Ihre E-Mail Adresse über den dort enthaltenen Bestätigunglink.",{title:"E-Mail verifizieren",variant:"info",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 18:t.next=21;break;case 20:throw new Error("Beim Speichern ist ein Fehler aufgetreten.");case 21:t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](2),e.$root.$bvToast.toast("Beim Speichern Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 26:e.$store.dispatch("setOverlay",!1);case 27:case"end":return t.stop()}}),t,null,[[2,23]])})))()},formValidation:function(){return this.validated=!0,!!(this.user.firstName&&this.user.lastName&&this.user.email)}}},l=o,c=(a("2599"),a("2877")),u=Object(c["a"])(l,n,s,!1,null,"92a0dbc4",null);t["a"]=u.exports},b4e0:function(e,t,a){},d33f:function(e,t,a){},d6be:function(e,t,a){"use strict";a("8354")},e7f8:function(e,t,a){"use strict";a("4c0d")}}]);
//# sourceMappingURL=user.31bdd85d.js.map