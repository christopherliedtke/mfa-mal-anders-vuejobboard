(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JobSeekContactForm"],{"0cb2":function(e,t,r){var a=r("e330"),n=r("7b0b"),s=Math.floor,i=a("".charAt),o=a("".replace),l=a("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,f,d){var m=r+e.length,b=a.length,h=u;return void 0!==f&&(f=n(f),h=c),o(d,h,(function(n,o){var c;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,r);case"'":return l(t,m);case"<":c=f[l(o,1,-1)];break;default:var u=+o;if(0===u)return n;if(u>b){var d=s(u/10);return 0===d?n:d<=b?void 0===a[d-1]?i(o,1):a[d-1]+i(o,1):n}c=a[u-1]}return void 0===c?"":c}))}},"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),s=r("785a"),i=r("17c2"),o=r("9112"),l=function(e){if(e&&e.forEach!==i)try{o(e,"forEach",i)}catch(t){e.forEach=i}};for(var c in n)n[c]&&l(a[c]&&a[c].prototype);l(s)},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=n("forEach");e.exports=s?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},5319:function(e,t,r){"use strict";var a=r("2ba4"),n=r("c65b"),s=r("e330"),i=r("d784"),o=r("d039"),l=r("825a"),c=r("1626"),u=r("5926"),f=r("50c4"),d=r("577e"),m=r("1d80"),b=r("8aa5"),h=r("dc4a"),v=r("0cb2"),p=r("14c3"),g=r("b622"),w=g("replace"),k=Math.max,x=Math.min,y=s([].concat),_=s([].push),O=s("".indexOf),$=s("".slice),N=function(e){return void 0===e?e:String(e)},S=function(){return"$0"==="a".replace(/./,"$0")}(),j=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),C=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,r){var s=j?"$":"$0";return[function(e,r){var a=m(this),s=void 0==e?void 0:h(e,w);return s?n(s,e,a,r):n(t,d(a),e,r)},function(e,n){var i=l(this),o=d(e);if("string"==typeof n&&-1===O(n,s)&&-1===O(n,"$<")){var m=r(t,i,o,n);if(m.done)return m.value}var h=c(n);h||(n=d(n));var g=i.global;if(g){var w=i.unicode;i.lastIndex=0}var S=[];while(1){var j=p(i,o);if(null===j)break;if(_(S,j),!g)break;var C=d(j[0]);""===C&&(i.lastIndex=b(o,f(i.lastIndex),w))}for(var E="",I=0,A=0;A<S.length;A++){j=S[A];for(var z=d(j[0]),P=k(x(u(j.index),o.length),0),D=[],M=1;M<j.length;M++)_(D,N(j[M]));var F=j.groups;if(h){var T=y([z],D,P,o);void 0!==F&&_(T,F);var V=d(a(n,void 0,T))}else V=v(z,o,P,D,F,n);P>=I&&(E+=$(o,I,P)+V,I=P+z.length)}return E+$(o,I)}]}),!C||!S||j)},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"5b81":function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("c65b"),i=r("e330"),o=r("1d80"),l=r("1626"),c=r("44e7"),u=r("577e"),f=r("dc4a"),d=r("ad6d"),m=r("0cb2"),b=r("b622"),h=r("c430"),v=b("replace"),p=RegExp.prototype,g=n.TypeError,w=i(d),k=i("".indexOf),x=i("".replace),y=i("".slice),_=Math.max,O=function(e,t,r){return r>e.length?-1:""===t?r:k(e,t,r)};a({target:"String",proto:!0},{replaceAll:function(e,t){var r,a,n,i,d,b,$,N,S,j=o(this),C=0,E=0,I="";if(null!=e){if(r=c(e),r&&(a=u(o("flags"in p?e.flags:w(e))),!~k(a,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(n=f(e,v),n)return s(n,e,j,t);if(h&&r)return x(u(j),e,t)}i=u(j),d=u(e),b=l(t),b||(t=u(t)),$=d.length,N=_(1,$),C=O(i,d,0);while(-1!==C)S=b?u(t(d,C,i)):m(d,i,C,[],void 0,t),I+=y(i,E,C)+S,E=C+$,C=O(i,d,C+N);return E<i.length&&(I+=y(i,E)),I}})},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},c8d0:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form",{attrs:{id:"jobseek-contact-form"}},[r("h3",{staticClass:"h5 mb-0"},[e._v("Ihre Kontaktdaten")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-3"},[r("label",{staticClass:"d-block",attrs:{for:"gender"}},[e._v("Anrede")]),r("b-form-select",{attrs:{id:"gender"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),r("div",{staticClass:"col-12 col-lg-3"},[r("label",{staticClass:"d-block",attrs:{for:"title"}},[e._v("Titel")]),r("b-form-select",{attrs:{id:"title"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),r("div",{staticClass:"w-100"}),r("div",{staticClass:"col-12 col-lg-4"},[r("label",{attrs:{for:"firstName",required:""}},[e._v("Vorname")]),r("b-form-input",{attrs:{id:"firstName",state:e.validated?!!e.form.firstName:null,type:"text",placeholder:"Vorname eingeben...",autocomplete:"given-name",trim:""},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],1),r("div",{staticClass:"col-12 col-lg-4"},[r("label",{attrs:{for:"lastName",required:""}},[e._v("Nachname")]),r("b-form-input",{attrs:{id:"lastName",state:e.validated?!!e.form.lastName:null,type:"text",placeholder:"Nachname eingeben...",autocomplete:"family-name",trim:""},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],1),r("div",{staticClass:"col-12 col-lg-8"},[r("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),r("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[r("b-input-group-text",[e._v("@")])]},proxy:!0}])},[r("b-form-input",{attrs:{id:"email",state:e.validated?!!e.form.email:null,type:"email",placeholder:"E-Mail Adresse eingeben...",autocomplete:"email",trim:"","aria-describedby":"email-help"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-text",{staticClass:"ml-1",attrs:{id:"email-help"}},[e._v("Ihre E-Mail Adresse wird der/dem Jobsuchenden zum Antworten auf Ihre Nachricht angezeigt.")])],1)]),r("label",{staticClass:"h5 mt-4",attrs:{for:"message"}},[e._v("Ihre Nachricht *")]),r("b-form-textarea",{attrs:{id:"message",rows:"10","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.form.message:null,placeholder:"Ihre Nachricht eingeben...","aria-describedby":"message-help",required:"",trim:""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),r("b-form-text",{staticClass:"ml-1",attrs:{id:"message-help"}},[e._v("Stellen Sie kurz Ihre offene Stelle mit Aufgabenbereichen, Profilanforderungen und Benefits vor. Fügen Sie ggfls. einen Link zum Stellenangebot ein. Gehen Sie auch darauf ein, warum die Person hinter dem Stellengesuch zur Stelle passen würde.")]),r("b-form-checkbox",{attrs:{id:"accepted",state:e.validated?e.form.accepted:null,name:"accepted",switch:""},model:{value:e.form.accepted,callback:function(t){e.$set(e.form,"accepted",t)},expression:"form.accepted"}},[e._v(" Ich habe die "),r("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),r("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. * ")],1),r("div",{staticClass:"d-flex justify-content-between my-4"},[r("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Zurück ")]),r("b-button",{attrs:{variant:"success",disabled:e.success},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.success?r("span",[r("svg",{staticClass:"bi bi-check-all mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"}})]),e._v(" Erfolgreich gesendet ")]):r("span",[e._v("Absenden")])])],1)],1),e.error?r("b-alert",{staticClass:"border-radius2 mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{staticClass:"border-radius2 mt-3",attrs:{show:"",dismissible:"",variant:"success"}},[e._v(" Ihre Nachricht wurde erfolgreich gesendet. Sie erhalten eine Kopie Ihrer Nachricht an Ihre angegebene E-Mail Adresse. Wir wünschen Ihnen viel Erfolg im Gespräch"+e._s(e.name?" mit "+e.name:"")+".")]):e._e()],1)},n=[],s=r("5530"),i=r("1da1"),o=(r("ac1f"),r("5319"),r("5b81"),r("96cf"),r("1ba6")),l={name:"JobSeekContactForm",props:{name:{type:String,default:""},jobSeekId:{type:String,default:""}},data:function(){return{form:{gender:this.$store.state.auth.user.gender||"",title:this.$store.state.auth.user.title||"",firstName:this.$store.state.auth.user.firstName||"",lastName:this.$store.state.auth.user.lastName||"",email:this.$store.state.auth.user.email||"",message:"",accepted:!1},validated:null,success:null,error:!1,contactGenderOptions:o["d"],contactTitleOptions:o["e"]}},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error=!1,e.formValidation()){t.next=4;break}return e.error="Bitte füllen Sie die erforderlichen Felder aus!",t.abrupt("return",null);case 4:return e.$store.dispatch("setOverlay",!0),t.prev=5,t.next=8,e.$axios.post("/api/send-email/contact-jobseek",Object(s["a"])(Object(s["a"])({},e.form),{},{jobSeekId:e.jobSeekId}));case 8:r=t.sent,r.data.error&&(e.error=r.data.error),r.data.success&&(e.success=r.data.success,e.$root.$bvToast.toast("Ihre Nachricht wurde erfolgreich versandt.",{title:"Nachricht versandt",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),e.resetForm()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),e.$root.$bvToast.toast("Es ist ein Fehler beim Versenden aufgetreten. Bitte versuchen Sie die Seite neu zu laden oder nehmen Sie ggfls. Kontakt über unser Kontaktformular zu uns auf.",{title:"Fehler beim Versenden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 16:e.$store.dispatch("setOverlay",!1);case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))()},resetForm:function(){this.validated=null,this.form={gender:"",title:"",firstName:"",lastName:"",email:"",message:"",accepted:!1}},formatter:function(e){return e.replaceAll('"',"'")},formValidation:function(){return this.validated=!0,!!(this.form.firstName&&this.form.lastName&&this.form.email&&this.form.message&&this.form.accepted)}}},c=l,u=r("2877"),f=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=f.exports},dbb4:function(e,t,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),o=r("06cf"),l=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,a=i(e),n=o.f,c=s(a),u={},f=0;while(c.length>f)r=n(a,t=c[f++]),void 0!==r&&l(u,t,r);return u}})},e439:function(e,t,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,o=r("83ab"),l=n((function(){i(1)})),c=!o||l;a({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(e,t){return i(s(e),t)}})}}]);
//# sourceMappingURL=JobSeekContactForm-legacy.9ea0e361.js.map