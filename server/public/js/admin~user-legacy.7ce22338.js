(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin~user"],{"159b":function(e,t,r){var a=r("da84"),s=r("fdbc"),i=r("785a"),n=r("17c2"),o=r("9112"),l=function(e){if(e&&e.forEach!==n)try{o(e,"forEach",n)}catch(t){e.forEach=n}};for(var c in s)s[c]&&l(a[c]&&a[c].prototype);l(i)},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,s=r("a640"),i=s("forEach");e.exports=i?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"3c32":function(e,t,r){},"408a":function(e,t,r){var a=r("e330");e.exports=a(1..valueOf)},"5e85":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-data-form position-relative mb-3"},[r("b-form",{attrs:{id:"account-data-form"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-3"},[r("label",{attrs:{for:"user-gender"}},[e._v("Anrede")]),r("b-form-select",{attrs:{id:"user-gender",state:e.validated&&!!e.user.gender||null,disabled:e.disabled},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),r("div",{staticClass:"col-12 col-lg-3"},[r("label",{attrs:{for:"user-title"}},[e._v("Titel")]),r("b-form-select",{attrs:{id:"user-title",state:e.validated&&!!e.user.title||null,disabled:e.disabled},model:{value:e.user.title,callback:function(t){e.$set(e.user,"title",t)},expression:"user.title"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2)],1),r("div",{staticClass:"col-12 col-lg-4"})]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-3"},[r("label",{attrs:{for:"first-name",required:""}},[e._v("Vorname")]),r("b-form-input",{attrs:{id:"first-name",type:"text",state:e.validated?!!e.user.firstName:null,placeholder:"Vorname eingeben...",required:"",disabled:e.disabled},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1),r("div",{staticClass:"col-12 col-lg-3"},[r("label",{attrs:{for:"last-name",required:""}},[e._v("Nachname")]),r("b-form-input",{attrs:{id:"last-name",type:"text",state:e.validated?!!e.user.lastName:null,placeholder:"Nachname eingeben...",required:"",disabled:e.disabled},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-6"},[r("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),r("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[r("b-input-group-text",[e._v("@")])]},proxy:!0}])},[r("b-form-input",{attrs:{id:"email",type:"email",state:e.validated?!!e.user.email:null,placeholder:"E-Mail Adresse eingeben...",required:"",disabled:e.disabled},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)]),r("label",{staticClass:"d-block mt-4 mb-0",attrs:{for:"role"}},[e._v("Rolle")]),r("b-form-checkbox",{attrs:{id:"is-employer",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEmployer,callback:function(t){e.$set(e.user,"isEmployer",t)},expression:"user.isEmployer"}},[e._v(" Arbeitgeber ")]),r("b-form-checkbox",{attrs:{id:"is-employee",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEmployee,callback:function(t){e.$set(e.user,"isEmployee",t)},expression:"user.isEmployee"}},[e._v(" MFA / ZFA ")]),r("b-form-checkbox",{attrs:{id:"is-educational",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEducational,callback:function(t){e.$set(e.user,"isEducational",t)},expression:"user.isEducational"}},[e._v(" Fortbildungsanbieter ")]),r("div",{staticClass:"d-flex justify-content-between my-4"},[r("b-button",{attrs:{variant:e.disabled?"primary":"outline-danger",size:"sm"},on:{click:function(t){e.disabled=!e.disabled}}},[e.disabled?r("svg",{staticClass:"bi bi-pencil-square mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),r("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})]):e._e(),e._v(" "+e._s(e.disabled?"Bearbeiten":"Abbrechen")+" ")]),e.disabled?e._e():r("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Speichern ")])],1)],1)],1)},s=[],i=r("1da1"),n=(r("96cf"),r("99af"),r("1ba6")),o={name:"UserDataForm",props:{apiUsersSchema:{type:String,default:"private"}},data:function(){return{user:{_id:"",gender:null,title:null,firstName:"",lastName:"",email:"",isEmployer:!1,isEmployee:!1,isEducational:!1},contactGenderOptions:n["e"],contactTitleOptions:n["f"],disabled:!0,validated:null}},computed:{userQuery:function(){return"admin"===this.apiUsersSchema?"adminUser":"me"}},created:function(){this.getUserData()},methods:{getUserData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.dispatch("setOverlay",!0),t.next=4,e.$axios.get("/graphql",{params:{query:"\n              query {\n                  ".concat(e.userQuery," ").concat("admin"===e.apiUsersSchema?'(_id: "'.concat(e.$route.params.userId,'")'):"","\n                {\n                  _id\n                  gender\n                  title\n                  firstName\n                  lastName\n                  email\n                  isEmployer\n                  isEmployee\n                  isEducational\n                }\n              }\n            ")}});case 4:r=t.sent,r.data.data[e.userQuery]&&(e.user=r.data.data[e.userQuery]),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:e.$store.dispatch("setOverlay",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.formValidation()){t.next=29;break}return e.$store.dispatch("setOverlay",!0),t.prev=2,r="admin"===e.apiUsersSchema?"adminUpdateUser":"updateMe",t.next=6,e.$axios.post("/graphql",{query:"\n              mutation {\n                  ".concat(r," (\n                      ").concat("admin"===e.apiUsersSchema?'_id: "'.concat(e.user._id,'",'):"",'\n                      gender: "').concat(e.user.gender,'",\n                      title: "').concat(e.user.title,'",\n                      firstName: "').concat(e.user.firstName,'",\n                      lastName: "').concat(e.user.lastName,'",\n                      email: "').concat(e.user.email.toLowerCase(),'",\n                      isEmployer: ').concat(e.user.isEmployer,",\n                      isEmployee: ").concat(e.user.isEmployee,",\n                      isEducational: ").concat(e.user.isEducational,",\n                  ) {\n                      _id\n                      status\n                  }\n              }\n          ")});case 6:if(a=t.sent,!a.data.data[r]){t.next=20;break}return e.disabled=!0,t.next=11,e.$store.dispatch("fetchUserFromDb");case 11:if(e.$root.$bvToast.toast("Ihre Daten wurden erfolgreich gespeichert.",{title:"Daten gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),"pending"!==a.data.data[r].status||e.$store.state.auth.user.isAdmin){t.next=18;break}return t.next=15,e.$store.dispatch("fetchUserFromDb");case 15:return t.next=17,e.$axios.get("/api/auth/verification/get-activation-email");case 17:e.$root.$bvToast.toast("In den nächsten Minuten erhalten Sie eine E-Mail zur Verifizierung Ihrer E-Mail Adresse in Ihr Postfach. Bitte bestätigen Sie Ihre E-Mail Adresse über den dort enthaltenen Bestätigunglink.",{title:"E-Mail verifizieren",variant:"info",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 18:t.next=22;break;case 20:throw console.log(a),new Error(a.data.errors&&a.data.errors[0]&&"BAD_USER_INPUT"===a.data.errors[0].extensions.code?a.data.errors[0].message:"");case 22:t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](2),console.log(t.t0),e.$root.$bvToast.toast("".concat(t.t0.message||"Beim Speichern Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal."),{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 28:e.$store.dispatch("setOverlay",!1);case 29:case"end":return t.stop()}}),t,null,[[2,24]])})))()},formValidation:function(){return this.validated=!0,!!(this.user.firstName&&this.user.lastName&&this.user.email)}}},l=o,c=(r("91d4"),r("2877")),u=Object(c["a"])(l,a,s,!1,null,"609f44d6",null);t["a"]=u.exports},"91d4":function(e,t,r){"use strict";r("3c32")},"9eaa":function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a=r("2b0e"),s=r("c637"),i=r("0056"),n=r("a723"),o=r("906c"),l=r("d82f"),c=r("cf75"),u=r("493b"),d=r("8c18"),b=r("aa59");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=Object(l["j"])(b["b"],["event","routerTag"]),v=Object(c["c"])(Object(l["m"])(f(f({},h),{},{linkClass:Object(c["b"])(n["e"]),variant:Object(c["b"])(n["s"])})),s["m"]),g=a["default"].extend({name:s["m"],mixins:[u["a"],d["a"]],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:v,computed:{computedAttrs:function(){return f(f({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var e=this;Object(o["B"])((function(){e.bvDropdown&&e.bvDropdown.hide(!0)}))},onClick:function(e){this.$emit(i["d"],e),this.closeDropdown()}},render:function(e){var t=this.linkClass,r=this.variant,a=this.active,s=this.disabled,i=this.onClick,n=this.bvAttrs;return e("li",{class:n.class,style:n.style,attrs:{role:"presentation"}},[e(b["a"],{staticClass:"dropdown-item",class:[t,m({},"text-".concat(r),r&&!(a||s))],props:Object(c["d"])(h,this.$props),attrs:this.computedAttrs,on:{click:i},ref:"item"},this.normalizeSlot())])}})},a434:function(e,t,r){"use strict";var a=r("23e7"),s=r("da84"),i=r("23cb"),n=r("5926"),o=r("07fa"),l=r("7b0b"),c=r("65f0"),u=r("8418"),d=r("1dde"),b=d("splice"),p=s.TypeError,f=Math.max,m=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var r,a,s,d,b,g,O=l(this),y=o(O),j=i(e,y),w=arguments.length;if(0===w?r=a=0:1===w?(r=0,a=y-j):(r=w-2,a=m(f(n(t),0),y-j)),y+r-a>h)throw p(v);for(s=c(O,a),d=0;d<a;d++)b=j+d,b in O&&u(s,d,O[b]);if(s.length=a,r<a){for(d=j;d<y-a;d++)b=d+a,g=d+r,b in O?O[g]=O[b]:delete O[g];for(d=y;d>y-a+r;d--)delete O[d-1]}else if(r>a)for(d=y-a;d>j;d--)b=d+a-1,g=d+r-1,b in O?O[g]=O[b]:delete O[g];for(d=0;d<r;d++)O[d+j]=arguments[d+2];return O.length=y-a+r,s}})},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},d81d:function(e,t,r){"use strict";var a=r("23e7"),s=r("b727").map,i=r("1dde"),n=i("map");a({target:"Array",proto:!0,forced:!n},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},dd9a:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r("2b0e"),s=r("c637"),i=r("a723"),n=r("9b76"),o=r("2326"),l=r("8690"),c=r("cf75"),u=r("fa73"),d=r("95ae"),b=r("90ef"),p=r("8c18"),f=r("1947"),m=r("d82f");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=Object(c["c"])(Object(m["m"])(v(v(v({},b["b"]),d["b"]),{},{block:Object(c["b"])(i["g"],!1),html:Object(c["b"])(i["s"]),lazy:Object(c["b"])(i["g"],!1),menuClass:Object(c["b"])(i["e"]),noCaret:Object(c["b"])(i["g"],!1),role:Object(c["b"])(i["s"],"menu"),size:Object(c["b"])(i["s"]),split:Object(c["b"])(i["g"],!1),splitButtonType:Object(c["b"])(i["s"],"button",(function(e){return Object(o["a"])(["button","submit","reset"],e)})),splitClass:Object(c["b"])(i["e"]),splitHref:Object(c["b"])(i["s"]),splitTo:Object(c["b"])(i["q"]),splitVariant:Object(c["b"])(i["s"]),text:Object(c["b"])(i["s"]),toggleClass:Object(c["b"])(i["e"]),toggleTag:Object(c["b"])(i["s"],"button"),toggleText:Object(c["b"])(i["s"],"Toggle dropdown"),variant:Object(c["b"])(i["s"],"secondary")})),s["l"]),y=a["default"].extend({name:s["l"],mixins:[b["a"],d["a"],p["a"]],props:O,computed:{dropdownClasses:function(){var e=this.block,t=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":t||!e,"d-flex":e&&t}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var e=this.split;return[this.toggleClass,{"dropdown-toggle-split":e,"dropdown-toggle-no-caret":this.noCaret&&!e}]}},render:function(e){var t=this.visible,r=this.variant,a=this.size,s=this.block,i=this.disabled,o=this.split,c=this.role,d=this.hide,b=this.toggle,p={variant:r,size:a,block:s,disabled:i},m=this.normalizeSlot(n["d"]),h=this.hasNormalizedSlot(n["d"])?{}:Object(l["a"])(this.html,this.text),g=e();if(o){var O=this.splitTo,y=this.splitHref,j=this.splitButtonType,w=v(v({},p),{},{variant:this.splitVariant||r});O?w.to=O:y?w.href=y:j&&(w.type=j),g=e(f["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:w,domProps:h,on:{click:this.onSplitClick},ref:"button"},m),m=[e("span",{class:["sr-only"]},[this.toggleText])],h={}}var k=e(f["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(u["g"])(t)},props:v(v({},p),{},{tag:this.toggleTag,block:s&&!o}),domProps:h,on:{mousedown:this.onMousedown,click:b,keydown:b},ref:"toggle"},m),x=e("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:c,tabindex:"-1","aria-labelledby":this.safeId(o?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||t?this.normalizeSlot(n["f"],{hide:d}):e()]);return e("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[g,k,x])}})},e6c7:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r("c637"),s=r("0056"),i=r("9bfa"),n=r("906c"),o=r("6b77"),l=r("7b1e"),c=r("d82f"),u=Object(o["d"])(a["R"],s["K"]),d="__bv_modal_directive__",b=function(e){var t=e.modifiers,r=void 0===t?{}:t,a=e.arg,s=e.value;return Object(l["n"])(s)?s:Object(l["n"])(a)?a:Object(c["h"])(r).reverse()[0]},p=function(e){return e&&Object(n["v"])(e,".dropdown-menu > li, li.nav-item")&&Object(n["C"])("a, button",e)||e},f=function(e){e&&"BUTTON"!==e.tagName&&(Object(n["o"])(e,"role")||Object(n["E"])(e,"role","button"),"A"===e.tagName||Object(n["o"])(e,"tabindex")||Object(n["E"])(e,"tabindex","0"))},m=function(e,t,r){var a=b(t),l=p(e);if(a&&l){var c=function(e){var t=e.currentTarget;if(!Object(n["r"])(t)){var s=e.type,o=e.keyCode;"click"!==s&&("keydown"!==s||o!==i["e"]&&o!==i["l"])||r.context.$root.$emit(u,a,t)}};e[d]={handler:c,target:a,trigger:l},f(l),Object(o["b"])(l,"click",c,s["R"]),"BUTTON"!==l.tagName&&"button"===Object(n["h"])(l,"role")&&Object(o["b"])(l,"keydown",c,s["R"])}},h=function(e){var t=e[d]||{},r=t.trigger,a=t.handler;r&&a&&(Object(o["a"])(r,"click",a,s["R"]),Object(o["a"])(r,"keydown",a,s["R"]),Object(o["a"])(e,"click",a,s["R"]),Object(o["a"])(e,"keydown",a,s["R"])),delete e[d]},v=function(e,t,r){var a=e[d]||{},s=b(t),i=p(e);s===a.target&&i===a.trigger||(h(e,t,r),m(e,t,r)),f(i)},g=function(){},O={inserted:v,updated:g,componentUpdated:v,unbind:h}}}]);
//# sourceMappingURL=admin~user-legacy.7ce22338.js.map