(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JobSeekContactForm"],{"0cb2":function(e,t,r){var a=r("e330"),n=r("7b0b"),s=Math.floor,o=a("".charAt),i=a("".replace),l=a("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,d,f){var m=r+e.length,b=a.length,h=u;return void 0!==d&&(d=n(d),h=c),i(f,h,(function(n,i){var c;switch(o(i,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,r);case"'":return l(t,m);case"<":c=d[l(i,1,-1)];break;default:var u=+i;if(0===u)return n;if(u>b){var f=s(u/10);return 0===f?n:f<=b?void 0===a[f-1]?o(i,1):a[f-1]+o(i,1):n}c=a[u-1]}return void 0===c?"":c}))}},"486d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form",{attrs:{id:"jobseek-contact-form"}},[r("h3",{staticClass:"h5 mb-0"},[e._v("Ihre Kontaktdaten")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-3"},[r("label",{staticClass:"d-block",attrs:{for:"gender"}},[e._v("Anrede")]),r("b-form-select",{attrs:{id:"gender"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),r("div",{staticClass:"col-12 col-lg-3"},[r("label",{staticClass:"d-block",attrs:{for:"title"}},[e._v("Titel")]),r("b-form-select",{attrs:{id:"title"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),r("div",{staticClass:"w-100"}),r("div",{staticClass:"col-12 col-lg-4"},[r("label",{attrs:{for:"firstName",required:""}},[e._v("Vorname")]),r("b-form-input",{attrs:{id:"firstName",state:e.validated?!!e.form.firstName:null,type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],1),r("div",{staticClass:"col-12 col-lg-4"},[r("label",{attrs:{for:"lastName",required:""}},[e._v("Nachname")]),r("b-form-input",{attrs:{id:"lastName",state:e.validated?!!e.form.lastName:null,type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],1),r("div",{staticClass:"col-12 col-lg-8"},[r("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),r("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[r("b-input-group-text",[e._v("@")])]},proxy:!0}])},[r("b-form-input",{attrs:{id:"email",state:e.validated?!!e.form.email:null,type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:"","aria-describedby":"email-help"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-text",{staticClass:"ml-1",attrs:{id:"email-help"}},[e._v("Ihre E-Mail Adresse wird der/dem Jobsuchenden zum Antworten auf Ihre Nachricht angezeigt.")])],1),r("div",{staticClass:"col-12 col-lg-8"},[r("label",{staticClass:"d-block",attrs:{for:"job"}},[e._v("Ihre freie Stellenanzeige")]),r("b-form-select",{attrs:{id:"job"},model:{value:e.form.jobId,callback:function(t){e.$set(e.form,"jobId",t)},expression:"form.jobId"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Stellenanzeige auswählen --")]),e._l(e.myJobs,(function(t){return r("b-form-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],2)],1)]),r("label",{staticClass:"h5 mt-4",attrs:{for:"message"}},[e._v("Ihre Nachricht *")]),r("b-form-textarea",{attrs:{id:"message",rows:"10","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.form.message:null,placeholder:"Ihre Nachricht eingeben...","aria-describedby":"message-help",required:"",trim:""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),r("b-form-text",{staticClass:"ml-1",attrs:{id:"message-help"}},[e._v("Stellen Sie kurz Ihre offene Stelle mit Aufgabenbereichen, Profilanforderungen und Benefits vor. Fügen Sie ggfls. einen Link zum Stellenangebot ein. Gehen Sie auch darauf ein, warum die Person hinter dem Stellengesuch zur Stelle passen würde.")]),r("b-form-checkbox",{attrs:{id:"accepted",state:e.validated?e.form.accepted:null,name:"accepted",switch:""},model:{value:e.form.accepted,callback:function(t){e.$set(e.form,"accepted",t)},expression:"form.accepted"}},[e._v(" Ich habe die "),r("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),r("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. * ")],1),r("div",{staticClass:"d-flex justify-content-between my-4"},[r("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Zurück ")]),r("b-button",{attrs:{variant:"success",disabled:e.success},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.success?r("span",[r("svg",{staticClass:"bi bi-check-all mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"}})]),e._v(" Erfolgreich gesendet ")]):r("span",[e._v("Absenden")])])],1)],1),e.error?r("b-alert",{staticClass:"border-radius2 mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{staticClass:"border-radius2 mt-3",attrs:{show:"",dismissible:"",variant:"success"}},[e._v(" Ihre Nachricht wurde erfolgreich gesendet. Sie erhalten eine Kopie Ihrer Nachricht an Ihre angegebene E-Mail Adresse. Wir wünschen Ihnen viel Erfolg im Gespräch"+e._s(e.name?" mit "+e.name:"")+".")]):e._e()],1)},n=[],s=r("5530"),o=r("1da1"),i=(r("d81d"),r("4de4"),r("d3b7"),r("99af"),r("b0c0"),r("ac1f"),r("5319"),r("5b81"),r("96cf"),r("1ba6")),l={name:"JobSeekContactForm",props:{name:{type:String,default:""},jobSeekId:{type:String,default:""}},data:function(){return{form:{gender:this.$store.state.auth.user.gender||"",title:this.$store.state.auth.user.title||"",firstName:this.$store.state.auth.user.firstName||"",lastName:this.$store.state.auth.user.lastName||"",email:this.$store.state.auth.user.email||"",message:"",jobId:"",accepted:!1},myJobs:null,validated:null,success:null,error:!1,contactGenderOptions:i["e"],contactTitleOptions:i["f"]}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMyJobs();case 2:case"end":return t.stop()}}),t)})))()},methods:{getMyJobs:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,t.next=4,e.$axios.get("/graphql",{params:{query:"\n              query {\n                myJobs {\n                  _id\n                  title\n                  status\n                  company {\n                    name\n                  }\n                }\n              }\n            "}});case 4:if(r=t.sent,r.data.data.myJobs){t.next=7;break}return t.abrupt("return",null);case 7:e.myJobs=r.data.data.myJobs.filter((function(e){return"published"==e.status})).map((function(e){return{value:e._id,text:"".concat(e.title," | ").concat(e.company.name)}})),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](1);case 12:e.$store.dispatch("setOverlay",!1);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error=!1,e.formValidation()){t.next=4;break}return e.error="Bitte füllen Sie die erforderlichen Felder aus!",t.abrupt("return",null);case 4:return e.$store.dispatch("setOverlay",!0),t.prev=5,t.next=8,e.$axios.post("/api/send-email/contact-jobseek",Object(s["a"])(Object(s["a"])({},e.form),{},{jobSeekId:e.jobSeekId}));case 8:r=t.sent,r.data.error&&(e.error=r.data.error),r.data.success&&(e.success=r.data.success,e.$root.$bvToast.toast("Ihre Nachricht wurde erfolgreich versandt.",{title:"Nachricht versandt",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),e.$gtag.event("jobseek_contact",{event_label:"".concat(e.jobSeekId," by ").concat(e.$store.state.auth.user._id)}),e.$matomo&&e.$matomo.trackEvent("engagement","jobseek_contact","".concat(e.jobSeekId," by ").concat(e.$store.state.auth.user._id)),e.resetForm()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),e.$root.$bvToast.toast("Es ist ein Fehler beim Versenden aufgetreten. Bitte versuchen Sie die Seite neu zu laden oder nehmen Sie ggfls. Kontakt über unser Kontaktformular zu uns auf.",{title:"Fehler beim Versenden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 16:e.$store.dispatch("setOverlay",!1);case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))()},resetForm:function(){this.validated=null,this.form={gender:"",title:"",firstName:"",lastName:"",email:"",message:"",accepted:!1}},formatter:function(e){return e.replaceAll('"',"'")},formValidation:function(){return this.validated=!0,!!(this.form.firstName&&this.form.lastName&&this.form.email&&this.form.message&&this.form.accepted)}}},c=l,u=r("2877"),d=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=d.exports},5319:function(e,t,r){"use strict";var a=r("2ba4"),n=r("c65b"),s=r("e330"),o=r("d784"),i=r("d039"),l=r("825a"),c=r("1626"),u=r("5926"),d=r("50c4"),f=r("577e"),m=r("1d80"),b=r("8aa5"),h=r("dc4a"),v=r("0cb2"),p=r("14c3"),g=r("b622"),k=g("replace"),w=Math.max,y=Math.min,_=s([].concat),x=s([].push),$=s("".indexOf),O=s("".slice),j=function(e){return void 0===e?e:String(e)},S=function(){return"$0"==="a".replace(/./,"$0")}(),N=function(){return!!/./[k]&&""===/./[k]("a","$0")}(),I=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,r){var s=N?"$":"$0";return[function(e,r){var a=m(this),s=void 0==e?void 0:h(e,k);return s?n(s,e,a,r):n(t,f(a),e,r)},function(e,n){var o=l(this),i=f(e);if("string"==typeof n&&-1===$(n,s)&&-1===$(n,"$<")){var m=r(t,o,i,n);if(m.done)return m.value}var h=c(n);h||(n=f(n));var g=o.global;if(g){var k=o.unicode;o.lastIndex=0}var S=[];while(1){var N=p(o,i);if(null===N)break;if(x(S,N),!g)break;var I=f(N[0]);""===I&&(o.lastIndex=b(i,d(o.lastIndex),k))}for(var C="",A=0,z=0;z<S.length;z++){N=S[z];for(var E=f(N[0]),J=w(y(u(N.index),i.length),0),P=[],M=1;M<N.length;M++)x(P,j(N[M]));var D=N.groups;if(h){var F=_([E],P,J,i);void 0!==D&&x(F,D);var q=f(a(n,void 0,F))}else q=v(E,i,J,P,D,n);J>=A&&(C+=O(i,A,J)+q,A=J+E.length)}return C+O(i,A)}]}),!I||!S||N)},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"5b81":function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("c65b"),o=r("e330"),i=r("1d80"),l=r("1626"),c=r("44e7"),u=r("577e"),d=r("dc4a"),f=r("ad6d"),m=r("0cb2"),b=r("b622"),h=r("c430"),v=b("replace"),p=RegExp.prototype,g=n.TypeError,k=o(f),w=o("".indexOf),y=o("".replace),_=o("".slice),x=Math.max,$=function(e,t,r){return r>e.length?-1:""===t?r:w(e,t,r)};a({target:"String",proto:!0},{replaceAll:function(e,t){var r,a,n,o,f,b,O,j,S,N=i(this),I=0,C=0,A="";if(null!=e){if(r=c(e),r&&(a=u(i("flags"in p?e.flags:k(e))),!~w(a,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(n=d(e,v),n)return s(n,e,N,t);if(h&&r)return y(u(N),e,t)}o=u(N),f=u(e),b=l(t),b||(t=u(t)),O=f.length,j=x(1,O),I=$(o,f,0);while(-1!==I)S=b?u(t(f,I,o)):m(f,o,I,[],void 0,t),A+=_(o,C,I)+S,C=I+O,I=$(o,f,I+j);return C<o.length&&(A+=_(o,C)),A}})},d81d:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").map,s=r("1dde"),o=s("map");a({target:"Array",proto:!0,forced:!o},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),o=r("fc6a"),i=r("06cf"),l=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,a=o(e),n=i.f,c=s(a),u={},d=0;while(c.length>d)r=n(a,t=c[d++]),void 0!==r&&l(u,t,r);return u}})},e439:function(e,t,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),o=r("06cf").f,i=r("83ab"),l=n((function(){o(1)})),c=!i||l;a({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})}}]);
//# sourceMappingURL=JobSeekContactForm-legacy.bd768391.js.map