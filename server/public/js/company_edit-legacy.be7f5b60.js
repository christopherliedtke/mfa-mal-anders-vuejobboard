(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["company_edit"],{"1ce6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job-form position-relative"},[n("b-form",{attrs:{id:"company-form"}},[n("label",{attrs:{for:"company-name",required:""}},[e._v("Unternehmensname")]),n("b-form-input",{attrs:{id:"company-name",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.company.name:null,placeholder:"Unternehmensname eingeben...",required:"",trim:""},model:{value:e.company.name,callback:function(t){e.$set(e.company,"name",t)},expression:"company.name"}}),n("label",{attrs:{for:"company-street",required:""}},[e._v("Straße und Hausnummer")]),n("b-form-input",{attrs:{id:"company-street",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.company.street:null,placeholder:"Straße und Hausnummer eingeben...",required:"",trim:""},model:{value:e.company.street,callback:function(t){e.$set(e.company,"street",t)},expression:"company.street"}}),n("label",{attrs:{for:"company-zip-code",required:""}},[e._v("PLZ")]),n("b-form-input",{attrs:{id:"company-zip-code",type:"text",state:e.validated?!!e.company.zipCode:null,placeholder:"PLZ eingeben...",required:"",trim:""},model:{value:e.company.zipCode,callback:function(t){e.$set(e.company,"zipCode",t)},expression:"company.zipCode"}}),n("label",{attrs:{for:"company-location",required:""}},[e._v("Ort")]),n("b-form-input",{attrs:{id:"company-location",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.company.location:null,placeholder:"Ort eingeben...",required:"",trim:""},model:{value:e.company.location,callback:function(t){e.$set(e.company,"location",t)},expression:"company.location"}}),n("label",{attrs:{for:"company-country",required:""}},[e._v("Land")]),n("b-form-select",{attrs:{id:"company-country",state:e.validated?!!e.company.country:null},model:{value:e.company.country,callback:function(t){e.$set(e.company,"country",t)},expression:"company.country"}},[n("b-form-select-option",{attrs:{value:"",disabled:""}},[e._v("-- Land auswählen --")]),e._l(e.companyCountryOptions,(function(t){return n("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),n("label",{attrs:{for:"company-size"}},[e._v("Unternehmensgröße")]),n("b-form-select",{attrs:{id:"company-size",state:e.validated&&!!e.company.size||null},model:{value:e.company.size,callback:function(t){e.$set(e.company,"size",t)},expression:"company.size"}},[n("b-form-select-option",{attrs:{value:""}},[e._v("-- Unternehmensgröße auswählen --")]),e._l(e.companySizeOptions,(function(t){return n("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),n("label",{attrs:{for:"company-url"}},[e._v("Unternehmenswebseite")]),n("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-input-group-text",[n("svg",{staticClass:"bi bi-link-45deg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}}),n("path",{attrs:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"}})])])]},proxy:!0}])},[n("b-form-input",{attrs:{id:"company-url",type:"url","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.company.url||null,placeholder:"https://www.ihr-unternehmen.de"},model:{value:e.company.url,callback:function(t){e.$set(e.company,"url",t)},expression:"company.url"}})],1),n("label",{attrs:{for:"file"}},[e._v("Logo "),n("small",[e._v("(jpg, png | max. 5MB)")])]),n("ImageUploader",{attrs:{validated:e.validated,"image-url":e.company.logoUrl,width:200,height:200,fit:"outside"},on:{"update-url":function(t){e.company.logoUrl=t}}}),e.$store.state.auth.user.isAdmin?n("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:e.company.logoUrl,callback:function(t){e.$set(e.company,"logoUrl",t)},expression:"company.logoUrl"}}):e._e(),n("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"55px",height:"55px"}},[e.company.logoUrl?n("b-img",{attrs:{src:e.company.logoUrl,fluid:""}}):n("svg",{staticClass:"bi bi-box p-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"}})])],1),n("div",{staticClass:"d-flex justify-content-between my-4"},[n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Abbrechen ")]),n("b-button",{attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Speichern ")])],1)],1),e.error?n("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)},r=[],o=(n("b0c0"),n("ac1f"),n("5319"),n("96cf"),n("c964")),s=n("67cc"),i=n("1ba6"),c=n("5641"),l={name:"CompanyForm",components:{ImageUploader:c["a"]},mixins:[s["a"]],props:{apiJobsSchema:{type:String,default:"private"}},data:function(){return{company:{_id:this.$route.params.companyId,name:"",street:"",location:"",zipCode:"",state:"",country:"",geoCodeLat:null,geoCodeLng:null,size:"",url:"",logoUrl:""},companyCountryOptions:i["a"],companyStateOptions:i["c"],companySizeOptions:i["b"],validated:null,success:"",error:""}},created:function(){"new"!=this.$route.params.companyId&&this.getCompany(this.$route.params.companyId)},methods:{getCompany:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/graphql",{params:{query:'\n                          query {\n                              company(_id: "'.concat(e,'") {\n                                  _id\n                                  name\n                                  street\n                                  location\n                                  zipCode\n                                  state\n                                  country\n                                  geoCodeLat\n                                  geoCodeLng\n                                  size\n                                  url\n                                  logoUrl\n                              }\n                          }\n                      ')}});case 3:a=n.sent,t.company=a.data.data.company,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),t.$root.$bvToast.toast("Beim Laden des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error=!1,e.formValidation()){t.next=4;break}return e.error="Bitte füllen Sie die erforderlichen Felder aus!",t.abrupt("return",null);case 4:return e.$store.dispatch("setOverlay",!0),n="new"===e.company._id?"addCompany":"admin"===e.apiJobsSchema?"adminUpdateCompany":"updateCompany",t.next=8,e.saveCompany(n,e.company,!0);case 8:a=t.sent,e.success=a.success,e.$store.dispatch("setOverlay",!1);case 11:case"end":return t.stop()}}),t)})))()},formatter:function(e){return e.replace('"',"'").replace("&","+")},formValidation:function(){return this.validated=!0,!!(this.company.name&&this.company.country&&this.company.location&&this.company.street&&this.company.zipCode)},formReset:function(){for(var e in this.company)this.company[e]=""},hasHistory:function(){return window.history.length>2}}},u=l,p=n("2877"),m=Object(p["a"])(u,a,r,!1,null,null,null);t["a"]=m.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),r=n("5899"),o="["+r+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(a(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"67cc":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("99af"),n("b0c0"),n("96cf");var a=n("c964"),r=(n("d3b7"),n("3ca3"),n("ddb0"),{data:function(){return{hereMaps:{apiKey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",platform:null,service:null}}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");case 3:return t.next=5,Promise.all([e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js")]);case 5:e.initPlatform(),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{initPlatform:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.hereMaps.platform=new window.H.service.Platform({apikey:e.hereMaps.apiKey}),e.hereMaps.service=e.hereMaps.platform.getSearchService();case 2:case"end":return t.stop()}}),t)})))()},getHereLocation:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={},n.prev=1,n.next=4,t.hereMaps.service.geocode({q:e});case 4:r=n.sent,a=r.items[0],n.next=10;break;case 8:n.prev=8,n.t0=n["catch"](1);case 10:return n.prev=10,n.abrupt("return",a);case 13:case"end":return n.stop()}}),n,null,[[1,8,10,13]])})))()},getHereLocationSuggestions:function(e){var t=arguments,n=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var r,o,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:5,o=t.length>2&&void 0!==t[2]?t[2]:"city",s=[],a.prev=3,a.next=6,n.$axios.get("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?\n        ",{params:{query:e,maxresults:r,country:"DEU",language:"de",resultType:o,apiKey:n.hereMaps.apiKey}});case 6:i=a.sent,s=i.data.suggestions,a.next=12;break;case 10:a.prev=10,a.t0=a["catch"](3);case 12:return a.prev=12,a.abrupt("return",s);case 15:case"end":return a.stop()}}),a,null,[[3,10,12,15]])})))()}}}),o={mixins:[r],methods:{saveCompany:function(e,t){var n=arguments,r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var o,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=n.length>2&&void 0!==n[2]&&n[2],a.prev=1,a.next=4,r.getHereLocation("".concat(t.street," ").concat(t.location," ").concat(t.zipCode," ").concat(t.country));case 4:return s=a.sent,t.geoCodeLat=s.position&&s.position.lat?s.position.lat:r.$config.maps.defaultCenter.lat,t.geoCodeLng=s.position&&s.position.lng?s.position.lng:r.$config.maps.defaultCenter.lng,t.state=s.address&&s.address.state?s.address.state:"",i="\n          mutation {\n            ".concat(e,"(\n              ").concat("updateCompany"===e||"adminUpdateCompany"===e?'_id: "'.concat(t._id,'",'):"",' \n              name: "').concat(t.name,'", \n              street: "').concat(t.street,'"\n              location: "').concat(t.location,'", \n              zipCode: "').concat(t.zipCode,'"\n              state: "').concat(t.state,'", \n              country: "').concat(t.country,'", \n              geoCodeLat: ').concat(t.geoCodeLat,", \n              geoCodeLng: ").concat(t.geoCodeLng,', \n              size: "').concat(t.size,'"\n              url: "').concat(!/^https?:\/\//i.test(t.url)&&t.url?"https://"+t.url:t.url,'"\n              logoUrl: "').concat(t.logoUrl,'"\n            ) {\n              _id\n            }\n          }\n      '),a.next=11,r.$axios.post("/graphql",{query:i});case 11:if(c=a.sent,c.data.data[e]._id){a.next=17;break}return r.error="Oh, da ist leider etwas schief gelaufen. Bitte versuchen Sie es noch einmal.",a.abrupt("return",{success:!1});case 17:return r.$root.$bvToast.toast("Das Unternehmen wurde erfolgreich gespeichert.",{title:"Unternehmen gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),o&&(r.hasHistory&&"admin"===r.apiJobsSchema?r.$router.go(-1):r.$router.push("/user/dashboard?tab=2")),a.abrupt("return",{success:!0,companyId:c.data.data[e]._id});case 20:a.next=26;break;case 22:return a.prev=22,a.t0=a["catch"](1),r.$root.$bvToast.toast("Beim Speichern des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),a.abrupt("return",{success:!1});case 26:case"end":return a.stop()}}),a,null,[[1,22]])})))()}}}},7156:function(e,t,n){var a=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var o,s;return r&&"function"==typeof(o=t.constructor)&&o!==n&&a(s=o.prototype)&&s!==n.prototype&&r(e,s),e}},"9ddf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-company container py-5"},[n("h2",[e._v(" Unternehmen "+e._s("new"===e.$route.params.companyId?"erstellen":"bearbeiten")+" ")]),n("CompanyForm",{attrs:{"api-jobs-schema":"private"}})],1)},r=[],o=n("1ce6"),s={name:"UserDashboardEditCompany",components:{CompanyForm:o["a"]}},i=s,c=n("2877"),l=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=l.exports},a9e3:function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),o=n("94ca"),s=n("6eeb"),i=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),p=n("d039"),m=n("7c73"),d=n("241c").f,f=n("06cf").f,h=n("9bf2").f,y=n("58a8").trim,v="Number",g=r[v],b=g.prototype,x=c(m(b))==v,w=function(e){var t,n,a,r,o,s,i,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=y(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(o=l.slice(2),s=o.length,i=0;i<s;i++)if(c=o.charCodeAt(i),c<48||c>r)return NaN;return parseInt(o,a)}return+l};if(o(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(x?p((function(){b.valueOf.call(n)})):c(n)!=v)?l(new g(w(t)),n,_):w(t)},z=a?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;z.length>$;$++)i(g,C=z[$])&&!i(_,C)&&h(_,C,f(g,C));_.prototype=b,b.constructor=_,s(r,v,_)}},da34:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-company container py-5"},[n("h2",[e._v("Unternehmen bearbeiten")]),n("CompanyForm",{attrs:{"api-jobs-schema":"admin"}})],1)},r=[],o=n("1ce6"),s={name:"AdminEditCompany",components:{CompanyForm:o["a"]}},i=s,c=n("2877"),l=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=company_edit-legacy.be7f5b60.js.map