(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ad~user"],{"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),i=r("785a"),s=r("17c2"),o=r("9112"),c=function(e){if(e&&e.forEach!==s)try{o(e,"forEach",s)}catch(t){e.forEach=s}};for(var l in n)n[l]&&c(a[l]&&a[l].prototype);c(i)},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),i=n("forEach");e.exports=i?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"408a":function(e,t,r){var a=r("e330");e.exports=a(1..valueOf)},4874:function(e,t,r){"use strict";r("5371")},5371:function(e,t,r){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("e330"),n=r("1d80"),i=r("577e"),s=r("5899"),o=a("".replace),c="["+s+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e){return function(t){var r=i(n(t));return 1&e&&(r=o(r,l,"")),2&e&&(r=o(r,u,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(e,t,r){var a=r("1626"),n=r("861d"),i=r("d2bb");e.exports=function(e,t,r){var s,o;return i&&a(s=t.constructor)&&s!==r&&n(o=s.prototype)&&o!==r.prototype&&i(e,o),e}},8515:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(e,t){return e.map((function(e,t){return[t,e]})).sort(function(e,t){return this(e[1],t[1])||e[0]-t[0]}.bind(t)).map((function(e){return e[1]}))}},"986e":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-data-form position-relative mb-3"},[r("b-form",{attrs:{id:"account-data-form"}},[r("label",{attrs:{for:"user-gender"}},[e._v("Anrede")]),r("b-form-select",{attrs:{id:"user-gender",state:e.validated&&!!e.user.gender||null,disabled:e.disabled},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Anrede auswählen --")]),e._l(e.contactGenderOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),r("label",{attrs:{for:"user-title"}},[e._v("Titel")]),r("b-form-select",{attrs:{id:"user-title",state:e.validated&&!!e.user.title||null,disabled:e.disabled},model:{value:e.user.title,callback:function(t){e.$set(e.user,"title",t)},expression:"user.title"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Titel auswählen --")]),e._l(e.contactTitleOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),r("label",{attrs:{for:"first-name",required:""}},[e._v("Vorname")]),r("b-form-input",{attrs:{id:"first-name",type:"text",state:e.validated?!!e.user.firstName:null,placeholder:"Vorname eingeben...",required:"",disabled:e.disabled},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}}),r("label",{attrs:{for:"last-name",required:""}},[e._v("Nachname")]),r("b-form-input",{attrs:{id:"last-name",type:"text",state:e.validated?!!e.user.lastName:null,placeholder:"Nachname eingeben...",required:"",disabled:e.disabled},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}}),r("label",{attrs:{for:"email",required:""}},[e._v("E-Mail Adresse")]),r("b-form-input",{attrs:{id:"email",type:"email",state:e.validated?!!e.user.email:null,placeholder:"E-Mail Adresse eingeben...",required:"",disabled:e.disabled},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("label",{staticClass:"d-block",attrs:{for:"role"}},[e._v("Rolle")]),r("b-form-checkbox",{attrs:{id:"is-employer",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEmployer,callback:function(t){e.$set(e.user,"isEmployer",t)},expression:"user.isEmployer"}},[e._v(" Arbeitgeber ")]),r("b-form-checkbox",{attrs:{id:"is-employee",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEmployee,callback:function(t){e.$set(e.user,"isEmployee",t)},expression:"user.isEmployee"}},[e._v(" MFA / ZFA ")]),r("b-form-checkbox",{attrs:{id:"is-educational",value:!0,"unchecked-value":!1,disabled:e.disabled,inline:""},model:{value:e.user.isEducational,callback:function(t){e.$set(e.user,"isEducational",t)},expression:"user.isEducational"}},[e._v(" Fortbildungsanbieter ")]),r("div",{staticClass:"d-flex justify-content-between my-4"},[r("b-button",{attrs:{variant:e.disabled?"primary":"outline-danger",size:"sm"},on:{click:function(t){e.disabled=!e.disabled}}},[e.disabled?r("svg",{staticClass:"bi bi-pencil-square mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),r("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})]):e._e(),e._v(" "+e._s(e.disabled?"Bearbeiten":"Abbrechen")+" ")]),e.disabled?e._e():r("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Speichern ")])],1)],1)],1)},n=[],i=r("1da1"),s=(r("96cf"),r("99af"),r("1ba6")),o={name:"AccountDataForm",props:{apiUsersSchema:{type:String,default:"private"}},data:function(){return{user:{_id:"",gender:null,title:null,firstName:"",lastName:"",email:"",isEmployer:!1,isEmployee:!1,isEducational:!1},contactGenderOptions:s["d"],contactTitleOptions:s["e"],disabled:!0,validated:null}},computed:{userQuery:function(){return"admin"===this.apiUsersSchema?"adminUser":"me"}},created:function(){this.getUserData()},methods:{getUserData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.dispatch("setOverlay",!0),t.next=4,e.$axios.get("/graphql",{params:{query:"\n              query {\n                  ".concat(e.userQuery," ").concat("admin"===e.apiUsersSchema?'(_id: "'.concat(e.$route.params.userId,'")'):"","\n                {\n                  _id\n                  gender\n                  title\n                  firstName\n                  lastName\n                  email\n                  isEmployer\n                  isEmployee\n                  isEducational\n                }\n              }\n            ")}});case 4:r=t.sent,r.data.data[e.userQuery]&&(e.user=r.data.data[e.userQuery]),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:e.$store.dispatch("setOverlay",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.formValidation()){t.next=27;break}return e.$store.dispatch("setOverlay",!0),t.prev=2,r="admin"===e.apiUsersSchema?"adminUpdateUser":"updateMe",t.next=6,e.$axios.post("/graphql",{query:"\n              mutation {\n                  ".concat(r," (\n                      ").concat("admin"===e.apiUsersSchema?'_id: "'.concat(e.user._id,'",'):"",'\n                      gender: "').concat(e.user.gender,'",\n                      title: "').concat(e.user.title,'",\n                      firstName: "').concat(e.user.firstName,'",\n                      lastName: "').concat(e.user.lastName,'",\n                      email: "').concat(e.user.email.toLowerCase(),'",\n                      isEmployer: ').concat(e.user.isEmployer,",\n                      isEmployee: ").concat(e.user.isEmployee,",\n                      isEducational: ").concat(e.user.isEducational,",\n                  ) {\n                      _id\n                      status\n                  }\n              }\n          ")});case 6:if(a=t.sent,!a.data.data[r]){t.next=20;break}return e.disabled=!0,t.next=11,e.$store.dispatch("fetchUserFromDb");case 11:if(e.$root.$bvToast.toast("Ihre Daten wurden erfolgreich gespeichert.",{title:"Daten gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),"pending"!==a.data.data[r].status||e.$store.state.auth.user.isAdmin){t.next=18;break}return t.next=15,e.$store.dispatch("fetchUserFromDb");case 15:return t.next=17,e.$axios.get("/api/auth/verification/get-activation-email");case 17:e.$root.$bvToast.toast("In den nächsten Minuten erhalten Sie eine E-Mail zur Verifizierung Ihrer E-Mail Adresse in Ihr Postfach. Bitte bestätigen Sie Ihre E-Mail Adresse über den dort enthaltenen Bestätigunglink.",{title:"E-Mail verifizieren",variant:"info",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 18:t.next=21;break;case 20:throw new Error("Beim Speichern ist ein Fehler aufgetreten.");case 21:t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](2),e.$root.$bvToast.toast("Beim Speichern Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 26:e.$store.dispatch("setOverlay",!1);case 27:case"end":return t.stop()}}),t,null,[[2,23]])})))()},formValidation:function(){return this.validated=!0,!!(this.user.firstName&&this.user.lastName&&this.user.email)}}},c=o,l=(r("4874"),r("2877")),u=Object(l["a"])(c,a,n,!1,null,"12590b8c",null);t["a"]=u.exports},"9eaa":function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a=r("2b0e"),n=r("c637"),i=r("0056"),s=r("a723"),o=r("906c"),c=r("d82f"),l=r("cf75"),u=r("493b"),d=r("8c18"),b=r("aa59");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=Object(c["j"])(b["b"],["event","routerTag"]),v=Object(l["c"])(Object(c["m"])(p(p({},h),{},{linkClass:Object(l["b"])(s["e"]),variant:Object(l["b"])(s["s"])})),n["l"]),g=a["default"].extend({name:n["l"],mixins:[u["a"],d["a"]],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:v,computed:{computedAttrs:function(){return p(p({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var e=this;Object(o["B"])((function(){e.bvDropdown&&e.bvDropdown.hide(!0)}))},onClick:function(e){this.$emit(i["f"],e),this.closeDropdown()}},render:function(e){var t=this.linkClass,r=this.variant,a=this.active,n=this.disabled,i=this.onClick,s=this.bvAttrs;return e("li",{class:s.class,style:s.style,attrs:{role:"presentation"}},[e(b["a"],{staticClass:"dropdown-item",class:[t,m({},"text-".concat(r),r&&!(a||n))],props:Object(l["d"])(h,this.$props),attrs:this.computedAttrs,on:{click:i},ref:"item"},this.normalizeSlot())])}})},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("23cb"),s=r("5926"),o=r("07fa"),c=r("7b0b"),l=r("65f0"),u=r("8418"),d=r("1dde"),b=d("splice"),f=n.TypeError,p=Math.max,m=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var r,a,n,d,b,g,O=c(this),y=o(O),j=i(e,y),w=arguments.length;if(0===w?r=a=0:1===w?(r=0,a=y-j):(r=w-2,a=m(p(s(t),0),y-j)),y+r-a>h)throw f(v);for(n=l(O,a),d=0;d<a;d++)b=j+d,b in O&&u(n,d,O[b]);if(n.length=a,r<a){for(d=j;d<y-a;d++)b=d+a,g=d+r,b in O?O[g]=O[b]:delete O[g];for(d=y;d>y-a+r;d--)delete O[d-1]}else if(r>a)for(d=y-a;d>j;d--)b=d+a-1,g=d+r-1,b in O?O[g]=O[b]:delete O[g];for(d=0;d<r;d++)O[d+j]=arguments[d+2];return O.length=y-a+r,n}})},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("e330"),s=r("94ca"),o=r("6eeb"),c=r("1a2d"),l=r("7156"),u=r("3a9b"),d=r("d9b5"),b=r("c04e"),f=r("d039"),p=r("241c").f,m=r("06cf").f,h=r("9bf2").f,v=r("408a"),g=r("58a8").trim,O="Number",y=n[O],j=y.prototype,w=n.TypeError,k=i("".slice),x=i("".charCodeAt),E=function(e){var t=b(e,"number");return"bigint"==typeof t?t:_(t)},_=function(e){var t,r,a,n,i,s,o,c,l=b(e,"number");if(d(l))throw w("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=g(l),t=x(l,0),43===t||45===t){if(r=x(l,2),88===r||120===r)return NaN}else if(48===t){switch(x(l,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(i=k(l,2),s=i.length,o=0;o<s;o++)if(c=x(i,o),c<48||c>n)return NaN;return parseInt(i,a)}return+l};if(s(O,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var N,C=function(e){var t=arguments.length<1?0:y(E(e)),r=this;return u(j,r)&&f((function(){v(r)}))?l(Object(t),r,C):t},A=a?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;A.length>S;S++)c(y,N=A[S])&&!c(C,N)&&h(C,N,m(y,N));C.prototype=j,j.constructor=C,o(n,O,C)}},d81d:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").map,i=r("1dde"),s=i("map");a({target:"Array",proto:!0,forced:!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},dd9a:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r("2b0e"),n=r("c637"),i=r("a723"),s=r("9b76"),o=r("2326"),c=r("8690"),l=r("cf75"),u=r("fa73"),d=r("95ae"),b=r("90ef"),f=r("8c18"),p=r("1947"),m=r("d82f");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=Object(l["c"])(Object(m["m"])(v(v(v({},b["b"]),d["b"]),{},{block:Object(l["b"])(i["g"],!1),html:Object(l["b"])(i["s"]),lazy:Object(l["b"])(i["g"],!1),menuClass:Object(l["b"])(i["e"]),noCaret:Object(l["b"])(i["g"],!1),role:Object(l["b"])(i["s"],"menu"),size:Object(l["b"])(i["s"]),split:Object(l["b"])(i["g"],!1),splitButtonType:Object(l["b"])(i["s"],"button",(function(e){return Object(o["a"])(["button","submit","reset"],e)})),splitClass:Object(l["b"])(i["e"]),splitHref:Object(l["b"])(i["s"]),splitTo:Object(l["b"])(i["q"]),splitVariant:Object(l["b"])(i["s"]),text:Object(l["b"])(i["s"]),toggleClass:Object(l["b"])(i["e"]),toggleTag:Object(l["b"])(i["s"],"button"),toggleText:Object(l["b"])(i["s"],"Toggle dropdown"),variant:Object(l["b"])(i["s"],"secondary")})),n["k"]),y=a["default"].extend({name:n["k"],mixins:[b["a"],d["a"],f["a"]],props:O,computed:{dropdownClasses:function(){var e=this.block,t=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":t||!e,"d-flex":e&&t}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var e=this.split;return[this.toggleClass,{"dropdown-toggle-split":e,"dropdown-toggle-no-caret":this.noCaret&&!e}]}},render:function(e){var t=this.visible,r=this.variant,a=this.size,n=this.block,i=this.disabled,o=this.split,l=this.role,d=this.hide,b=this.toggle,f={variant:r,size:a,block:n,disabled:i},m=this.normalizeSlot(s["c"]),h=this.hasNormalizedSlot(s["c"])?{}:Object(c["a"])(this.html,this.text),g=e();if(o){var O=this.splitTo,y=this.splitHref,j=this.splitButtonType,w=v(v({},f),{},{variant:this.splitVariant||r});O?w.to=O:y?w.href=y:j&&(w.type=j),g=e(p["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:w,domProps:h,on:{click:this.onSplitClick},ref:"button"},m),m=[e("span",{class:["sr-only"]},[this.toggleText])],h={}}var k=e(p["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(u["g"])(t)},props:v(v({},f),{},{tag:this.toggleTag,block:n&&!o}),domProps:h,on:{mousedown:this.onMousedown,click:b,keydown:b},ref:"toggle"},m),x=e("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:l,tabindex:"-1","aria-labelledby":this.safeId(o?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||t?this.normalizeSlot(s["e"],{hide:d}):e()]);return e("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[g,k,x])}})},e6c7:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r("c637"),n=r("0056"),i=r("9bfa"),s=r("906c"),o=r("6b77"),c=r("7b1e"),l=r("d82f"),u=Object(o["d"])(a["O"],n["P"]),d="__bv_modal_directive__",b=function(e){var t=e.modifiers,r=void 0===t?{}:t,a=e.arg,n=e.value;return Object(c["n"])(n)?n:Object(c["n"])(a)?a:Object(l["h"])(r).reverse()[0]},f=function(e){return e&&Object(s["v"])(e,".dropdown-menu > li, li.nav-item")&&Object(s["C"])("a, button",e)||e},p=function(e){e&&"BUTTON"!==e.tagName&&(Object(s["o"])(e,"role")||Object(s["E"])(e,"role","button"),"A"===e.tagName||Object(s["o"])(e,"tabindex")||Object(s["E"])(e,"tabindex","0"))},m=function(e,t,r){var a=b(t),c=f(e);if(a&&c){var l=function(e){var t=e.currentTarget;if(!Object(s["r"])(t)){var n=e.type,o=e.keyCode;"click"!==n&&("keydown"!==n||o!==i["c"]&&o!==i["j"])||r.context.$root.$emit(u,a,t)}};e[d]={handler:l,target:a,trigger:c},p(c),Object(o["b"])(c,"click",l,n["V"]),"BUTTON"!==c.tagName&&"button"===Object(s["h"])(c,"role")&&Object(o["b"])(c,"keydown",l,n["V"])}},h=function(e){var t=e[d]||{},r=t.trigger,a=t.handler;r&&a&&(Object(o["a"])(r,"click",a,n["V"]),Object(o["a"])(r,"keydown",a,n["V"]),Object(o["a"])(e,"click",a,n["V"]),Object(o["a"])(e,"keydown",a,n["V"])),delete e[d]},v=function(e,t,r){var a=e[d]||{},n=b(t),i=f(e);n===a.target&&i===a.trigger||(h(e,t,r),m(e,t,r)),p(i)},g=function(){},O={inserted:v,updated:g,componentUpdated:v,unbind:h}}}]);
//# sourceMappingURL=ad~user-legacy.30e77e87.js.map