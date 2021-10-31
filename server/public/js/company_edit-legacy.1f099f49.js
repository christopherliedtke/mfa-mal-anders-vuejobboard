(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["company_edit"],{"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1ce6":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"job-form position-relative"},[r("b-form",{attrs:{id:"company-form"}},[r("label",{attrs:{for:"company-name",required:""}},[e._v("Unternehmensname")]),r("b-form-input",{attrs:{id:"company-name",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.company.name:null,placeholder:"Unternehmensname eingeben...",required:"",trim:""},model:{value:e.company.name,callback:function(t){e.$set(e.company,"name",t)},expression:"company.name"}}),r("label",{attrs:{for:"company-street",required:""}},[e._v("Straße und Hausnummer")]),r("b-form-input",{attrs:{id:"company-street",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.company.street:null,placeholder:"Straße und Hausnummer eingeben...",required:"",trim:""},model:{value:e.company.street,callback:function(t){e.$set(e.company,"street",t)},expression:"company.street"}}),r("label",{attrs:{for:"company-zip-code",required:""}},[e._v("PLZ")]),r("b-form-input",{attrs:{id:"company-zip-code",type:"text",state:e.validated?!!e.company.zipCode:null,placeholder:"PLZ eingeben...",required:"",trim:""},model:{value:e.company.zipCode,callback:function(t){e.$set(e.company,"zipCode",t)},expression:"company.zipCode"}}),r("label",{attrs:{for:"company-location",required:""}},[e._v("Ort")]),r("b-form-input",{attrs:{id:"company-location",type:"text","lazy-formatter":"",formatter:e.formatter,state:e.validated?!!e.company.location:null,placeholder:"Ort eingeben...",required:"",trim:""},model:{value:e.company.location,callback:function(t){e.$set(e.company,"location",t)},expression:"company.location"}}),r("label",{attrs:{for:"company-country",required:""}},[e._v("Land")]),r("b-form-select",{attrs:{id:"company-country",state:e.validated?!!e.company.country:null},model:{value:e.company.country,callback:function(t){e.$set(e.company,"country",t)},expression:"company.country"}},[r("b-form-select-option",{attrs:{value:"",disabled:""}},[e._v("-- Land auswählen --")]),e._l(e.companyCountryOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),r("label",{attrs:{for:"company-size"}},[e._v("Unternehmensgröße")]),r("b-form-select",{attrs:{id:"company-size",state:e.validated&&!!e.company.size||null},model:{value:e.company.size,callback:function(t){e.$set(e.company,"size",t)},expression:"company.size"}},[r("b-form-select-option",{attrs:{value:""}},[e._v("-- Unternehmensgröße auswählen --")]),e._l(e.companySizeOptions,(function(t){return r("b-form-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],2),r("label",{attrs:{for:"company-url"}},[e._v("Unternehmenswebseite")]),r("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[r("b-input-group-text",[r("svg",{staticClass:"bi bi-link-45deg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}}),r("path",{attrs:{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"}})])])]},proxy:!0}])},[r("b-form-input",{attrs:{id:"company-url",type:"url","lazy-formatter":"",formatter:e.formatter,state:e.validated&&!!e.company.url||null,placeholder:"https://www.ihr-unternehmen.de"},model:{value:e.company.url,callback:function(t){e.$set(e.company,"url",t)},expression:"company.url"}})],1),r("label",{attrs:{for:"file"}},[e._v("Logo "),r("small",[e._v("(jpg, png | max. 5MB)")])]),r("ImageUploader",{attrs:{validated:e.validated,"image-url":e.company.logoUrl,width:200,height:200,fit:"outside"},on:{"update-url":function(t){e.company.logoUrl=t}}}),e.$store.state.auth.user.isAdmin?r("b-form-input",{staticClass:"bg-light-shade mt-2",attrs:{type:"url",placeholder:"ADMIN - URL to image (incl. https://)"},model:{value:e.company.logoUrl,callback:function(t){e.$set(e.company,"logoUrl",t)},expression:"company.logoUrl"}}):e._e(),r("div",{staticClass:"position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2",staticStyle:{width:"55px",height:"55px"}},[e.company.logoUrl?r("b-img",{attrs:{src:e.company.logoUrl,fluid:""}}):r("svg",{staticClass:"bi bi-box p-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"}})])],1),r("div",{staticClass:"d-flex justify-content-between my-4"},[r("b-button",{attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.$router.go(-1)}}},[e._v(" Abbrechen ")]),r("b-button",{attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v(" Speichern ")])],1)],1),e.error?r("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)},a=[],i=(r("b0c0"),r("ac1f"),r("5319"),r("96cf"),r("c964")),o=r("67cc"),s=r("1ba6"),c=r("5641"),l={name:"CompanyForm",components:{ImageUploader:c["a"]},mixins:[o["a"]],props:{apiJobsSchema:{type:String,default:"private"}},data:function(){return{company:{_id:this.$route.params.companyId,name:"",street:"",location:"",zipCode:"",state:"",country:"",geoCodeLat:null,geoCodeLng:null,size:"",url:"",logoUrl:""},companyCountryOptions:s["a"],companyStateOptions:s["c"],companySizeOptions:s["b"],validated:null,success:"",error:""}},created:function(){"new"!=this.$route.params.companyId&&this.getCompany(this.$route.params.companyId)},methods:{getCompany:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$axios.get("/graphql",{params:{query:'\n                          query {\n                              company(_id: "'.concat(e,'") {\n                                  _id\n                                  name\n                                  street\n                                  location\n                                  zipCode\n                                  state\n                                  country\n                                  geoCodeLat\n                                  geoCodeLng\n                                  size\n                                  url\n                                  logoUrl\n                              }\n                          }\n                      ')}});case 3:n=r.sent,t.company=n.data.data.company,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),t.$root.$bvToast.toast("Beim Laden des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error=!1,e.formValidation()){t.next=4;break}return e.error="Bitte füllen Sie die erforderlichen Felder aus!",t.abrupt("return",null);case 4:return e.$store.dispatch("setOverlay",!0),r="new"===e.company._id?"addCompany":"admin"===e.apiJobsSchema?"adminUpdateCompany":"updateCompany",t.next=8,e.saveCompany(r,e.company,!0);case 8:n=t.sent,e.success=n.success,e.$store.dispatch("setOverlay",!1);case 11:case"end":return t.stop()}}),t)})))()},formatter:function(e){return e.replace('"',"'").replace("&","+")},formValidation:function(){return this.validated=!0,!!(this.company.name&&this.company.country&&this.company.location&&this.company.street&&this.company.zipCode)},formReset:function(){for(var e in this.company)this.company[e]=""},hasHistory:function(){return window.history.length>2}}},u=l,p=r("2877"),d=Object(p["a"])(u,n,a,!1,null,null,null);t["a"]=d.exports},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),s=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),p=Math.max,d=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!g&&b||"string"===typeof n&&-1===n.indexOf(y)){var i=r(t,e,this,n);if(i.done)return i.value}var c=a(e),f=String(this),m="function"===typeof n;m||(n=String(n));var h=c.global;if(h){var w=c.unicode;c.lastIndex=0}var O=[];while(1){var j=u(c,f);if(null===j)break;if(O.push(j),!h)break;var $=String(j[0]);""===$&&(c.lastIndex=l(f,o(c.lastIndex),w))}for(var C="",E=0,_=0;_<O.length;_++){j=O[_];for(var S=String(j[0]),F=p(d(s(j.index),f.length),0),k=[],A=1;A<j.length;A++)k.push(v(j[A]));var I=j.groups;if(m){var R=[S].concat(k,F,f);void 0!==I&&R.push(I);var D=String(n.apply(void 0,R))}else D=x(S,f,F,k,I,n);F>=E&&(C+=f.slice(E,F)+D,E=F+S.length)}return C+f.slice(E)}];function x(e,r,n,a,o,s){var c=n+e.length,l=a.length,u=h;return void 0!==o&&(o=i(o),u=m),t.call(s,u,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>l){var p=f(u/10);return 0===p?t:p<=l?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):t}s=a[u-1]}return void 0===s?"":s}))}}))},5641:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex"},[r("BFormFile",{ref:"file-input",attrs:{id:e.id,state:e.validated&&!!e.file||null,accept:"image/jpeg, image/png",placeholder:"Datei wählen/ablegen...","drop-placeholder":"Datei hier ablegen...","browse-text":"Durchsuchen"},on:{input:e.uploadImage},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),r("b-button",{staticClass:"ml-2",attrs:{variant:"outline-danger"},on:{click:function(t){return t.preventDefault(),e.resetFile(t)}}},[r("svg",{staticClass:"bi bi-trash-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}})])])],1),r("b-form-invalid-feedback",{attrs:{state:e.success}},[e._v(" Das Bild muss im Format *.jpg oder *.png hochgeladen werden und darf maximal 5MB groß sein. ")])],1)},i=[],o=(r("a9e3"),r("96cf"),r("c964")),s=r("2b0e"),c=r("c637"),l=r("e863"),u=r("0056"),p=r("a723"),d=r("9b76"),f=r("992e"),m=r("ca88"),h=r("2326"),v=r("c9a9"),g=r("906c"),b=r("6b77"),y=r("6c06"),x=r("7b1e"),w=r("3c21"),O=r("58f2"),j=r("d82f"),$=r("cf75"),C=r("fa73"),E=r("686b"),_=r("493b"),S=r("dde7"),F=r("a953"),k=r("d520"),A=r("90ef"),I=r("8c18"),R=r("ad47");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=Object(O["a"])("value",{type:[p["b"],m["b"]],defaultValue:null,validator:function(e){return""===e?(Object(E["a"])(B,c["B"]),!0):Object(x["p"])(e)||V(e)}}),N=P.mixin,L=P.props,T=P.prop,M=P.event,B='Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.',V=function e(t){return Object(x["e"])(t)||Object(x["a"])(t)&&t.every((function(t){return e(t)}))},q=function(e){return Object(x["f"])(e.getAsEntry)?e.getAsEntry():Object(x["f"])(e.webkitGetAsEntry)?e.webkitGetAsEntry():null},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.all(Object(h["f"])(e).filter((function(e){return"file"===e.kind})).map((function(e){var r=q(e);if(r){if(r.isDirectory&&t)return K(r.createReader(),"".concat(r.name,"/"));if(r.isFile)return new Promise((function(e){r.file((function(t){t.$path="",e(t)}))}))}return null})).filter(y["a"]))},K=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n){var a=[],i=function i(){t.readEntries((function(t){0===t.length?n(Promise.all(a).then((function(e){return Object(h["d"])(e)}))):(a.push(Promise.all(t.map((function(t){if(t){if(t.isDirectory)return e(t.createReader(),"".concat(r).concat(t.name,"/"));if(t.isFile)return new Promise((function(e){t.file((function(t){t.$path="".concat(r).concat(t.name),e(t)}))}))}return null})).filter(y["a"]))),i())}))};i()}))},G=Object($["d"])(Object(j["m"])(U(U(U(U(U(U(U({},A["b"]),L),S["b"]),F["b"]),k["b"]),R["b"]),{},{accept:Object($["c"])(p["s"],""),browseText:Object($["c"])(p["s"],"Browse"),capture:Object($["c"])(p["g"],!1),directory:Object($["c"])(p["g"],!1),dropPlaceholder:Object($["c"])(p["s"],"Drop files here"),fileNameFormatter:Object($["c"])(p["k"]),multiple:Object($["c"])(p["g"],!1),noDrop:Object($["c"])(p["g"],!1),noDropPlaceholder:Object($["c"])(p["s"],"Not allowed"),noTraverse:Object($["c"])(p["g"],!1),placeholder:Object($["c"])(p["s"],"No file chosen")})),c["B"]),J=s["default"].extend({name:c["B"],mixins:[_["a"],A["a"],N,I["a"],S["a"],k["a"],F["a"],I["a"]],inheritAttrs:!1,props:G,data:function(){return{files:[],dragging:!1,dropAllowed:!this.noDrop,hasFocus:!1}},computed:{computedAccept:function(){var e=this.accept;return e=(e||"").trim().split(/[,\s]+/).filter(y["a"]),0===e.length?null:e.map((function(e){var t="name",r="^",n="$";f["i"].test(e)?r="":(t="type",f["s"].test(e)&&(n=".+$",e=e.slice(0,-1))),e=Object(C["a"])(e);var a=new RegExp("".concat(r).concat(e).concat(n));return{rx:a,prop:t}}))},computedCapture:function(){var e=this.capture;return!0===e||""===e||(e||null)},computedAttrs:function(){var e=this.name,t=this.disabled,r=this.required,n=this.form,a=this.computedCapture,i=this.accept,o=this.multiple,s=this.directory;return U(U({},this.bvAttrs),{},{type:"file",id:this.safeId(),name:e,disabled:t,required:r,form:n||null,capture:a,accept:i||null,multiple:o,directory:s,webkitdirectory:s,"aria-required":r?"true":null})},computedFileNameFormatter:function(){var e=this.fileNameFormatter;return Object($["b"])(e)?e:this.defaultFileNameFormatter},clonedFiles:function(){return Object(v["a"])(this.files)},flattenedFiles:function(){return Object(h["e"])(this.files)},fileNames:function(){return this.flattenedFiles.map((function(e){return e.name}))},labelContent:function(){if(this.dragging&&!this.noDrop)return this.normalizeSlot(d["h"],{allowed:this.dropAllowed})||(this.dropAllowed?this.dropPlaceholder:this.$createElement("span",{staticClass:"text-danger"},this.noDropPlaceholder));if(0===this.files.length)return this.normalizeSlot(d["F"])||this.placeholder;var e=this.flattenedFiles,t=this.clonedFiles,r=this.fileNames,n=this.computedFileNameFormatter;return this.hasNormalizedSlot(d["k"])?this.normalizeSlot(d["k"],{files:e,filesTraversed:t,names:r}):n(e,t,r)}},watch:(n={},z(n,T,(function(e){(!e||Object(x["a"])(e)&&0===e.length)&&this.reset()})),z(n,"files",(function(e,t){if(!Object(w["a"])(e,t)){var r=this.multiple,n=this.noTraverse,a=!r||n?Object(h["e"])(e):e;this.$emit(M,r?a:a[0]||null)}})),n),created:function(){this.$_form=null},mounted:function(){var e=Object(g["e"])("form",this.$el);e&&(Object(b["b"])(e,"reset",this.reset,u["V"]),this.$_form=e)},beforeDestroy:function(){var e=this.$_form;e&&Object(b["a"])(e,"reset",this.reset,u["V"])},methods:{isFileValid:function(e){if(!e)return!1;var t=this.computedAccept;return!t||t.some((function(t){return t.rx.test(e[t.prop])}))},isFilesArrayValid:function(e){var t=this;return Object(x["a"])(e)?e.every((function(e){return t.isFileValid(e)})):this.isFileValid(e)},defaultFileNameFormatter:function(e,t,r){return r.join(", ")},setFiles:function(e){this.dropAllowed=!this.noDrop,this.dragging=!1,this.files=this.multiple?this.directory?e:Object(h["e"])(e):Object(h["e"])(e).slice(0,1)},setInputFiles:function(e){try{var t=new ClipboardEvent("").clipboardData||new DataTransfer;Object(h["e"])(Object(v["a"])(e)).forEach((function(e){delete e.$path,t.items.add(e)})),this.$refs.input.files=t.files}catch(r){}},reset:function(){try{var e=this.$refs.input;e.value="",e.type="",e.type="file"}catch(t){}this.files=[]},handleFiles:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var r=e.filter(this.isFilesArrayValid);r.length>0&&(this.setFiles(r),this.setInputFiles(r))}else this.setFiles(e)},focusHandler:function(e){this.plain||"focusout"===e.type?this.hasFocus=!1:this.hasFocus=!0},onChange:function(e){var t=this,r=e.type,n=e.target,a=e.dataTransfer,i=void 0===a?{}:a,o="drop"===r;this.$emit(u["d"],e);var s=Object(h["f"])(i.items||[]);if(l["e"]&&s.length>0&&!Object(x["g"])(q(s[0])))H(s,this.directory).then((function(e){return t.handleFiles(e,o)}));else{var c=Object(h["f"])(n.files||i.files||[]).map((function(e){return e.$path=e.webkitRelativePath||"",e}));this.handleFiles(c,o)}},onDragenter:function(e){Object(b["f"])(e),this.dragging=!0;var t=e.dataTransfer,r=void 0===t?{}:t;if(this.noDrop||this.disabled||!this.dropAllowed)return r.dropEffect="none",void(this.dropAllowed=!1);r.dropEffect="copy"},onDragover:function(e){Object(b["f"])(e),this.dragging=!0;var t=e.dataTransfer,r=void 0===t?{}:t;if(this.noDrop||this.disabled||!this.dropAllowed)return r.dropEffect="none",void(this.dropAllowed=!1);r.dropEffect="copy"},onDragleave:function(e){var t=this;Object(b["f"])(e),this.$nextTick((function(){t.dragging=!1,t.dropAllowed=!t.noDrop}))},onDrop:function(e){var t=this;Object(b["f"])(e),this.dragging=!1,this.noDrop||this.disabled||!this.dropAllowed?this.$nextTick((function(){t.dropAllowed=!t.noDrop})):this.onChange(e)}},render:function(e){var t=this.custom,r=this.plain,n=this.size,a=this.dragging,i=this.stateClass,o=this.bvAttrs,s=e("input",{class:[{"form-control-file":r,"custom-file-input":t,focus:t&&this.hasFocus},i],style:t?{zIndex:-5}:{},attrs:this.computedAttrs,on:{change:this.onChange,focusin:this.focusHandler,focusout:this.focusHandler,reset:this.reset},ref:"input"});if(r)return s;var c=e("label",{staticClass:"custom-file-label",class:{dragging:a},attrs:{for:this.safeId(),"data-browse":this.browseText||null}},[e("span",{staticClass:"d-block form-file-text",style:{pointerEvents:"none"}},[this.labelContent])]);return e("div",{staticClass:"custom-file b-form-file",class:[z({},"b-custom-control-".concat(n),n),i,o.class],style:o.style,attrs:{id:this.safeId("_BV_file_outer_")},on:{dragenter:this.onDragenter,dragover:this.onDragover,dragleave:this.onDragleave,drop:this.onDrop}},[s,c])}});s["default"].component("BFormFile",J);var Y={name:"ImageUploader",props:{id:{type:String,default:""},validated:{type:Boolean},imageUrl:{type:String,default:""},width:{type:Number,default:0},height:{type:Number,default:0},fit:{type:String,default:"outside"}},data:function(){return{file:null,success:null}},methods:{uploadImage:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.success=null,e){r.next=3;break}return r.abrupt("return");case 3:return t.$store.dispatch("setOverlay",!0),r.prev=4,t.imageUrl&&t.deleteImage(),n=new FormData,n.append("file",e),n.append("width",t.width),n.append("height",t.height),n.append("fit",t.fit),r.next=13,t.$axios.post("/api/images/upload",n);case 13:a=r.sent,a.data.success?t.$emit("update-url",a.data.url):(t.success=!1,t.$emit("update-url","")),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](4),t.$root.$bvToast.toast("Das Bild konnte nicht gespeichert werden.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!1});case 20:t.$store.dispatch("setOverlay",!1);case 21:case"end":return r.stop()}}),r,null,[[4,17]])})))()},deleteImage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,t.next=4,e.$axios.post("/api/images/delete",{imageUrl:e.imageUrl});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1);case 9:e.$store.dispatch("setOverlay",!1);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},resetFile:function(){this.$store.dispatch("setOverlay",!0),this.imageUrl&&this.deleteImage(),this.$refs["file-input"].reset(),this.$emit("update-url",""),this.$store.dispatch("setOverlay",!1)}}},X=Y,Z=r("2877"),W=Object(Z["a"])(X,a,i,!1,null,null,null);t["a"]=W.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(s,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},"67cc":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("99af"),r("b0c0"),r("96cf");var n=r("c964"),a=(r("d3b7"),r("3ca3"),r("ddb0"),{data:function(){return{hereMaps:{apiKey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",platform:null,service:null}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");case 3:return t.next=5,Promise.all([e.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js")]);case 5:e.initPlatform(),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{initPlatform:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.hereMaps.platform=new window.H.service.Platform({apikey:e.hereMaps.apiKey}),e.hereMaps.service=e.hereMaps.platform.getSearchService();case 2:case"end":return t.stop()}}),t)})))()},getHereLocation:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={},r.prev=1,r.next=4,t.hereMaps.service.geocode({q:e});case 4:a=r.sent,n=a.items[0],r.next=10;break;case 8:r.prev=8,r.t0=r["catch"](1);case 10:return r.prev=10,r.abrupt("return",n);case 13:case"end":return r.stop()}}),r,null,[[1,8,10,13]])})))()},getHereLocationSuggestions:function(e){var t=arguments,r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var a,i,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>1&&void 0!==t[1]?t[1]:5,i=t.length>2&&void 0!==t[2]?t[2]:"city",o=[],n.prev=3,n.next=6,r.$axios.get("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?\n        ",{params:{query:e,maxresults:a,country:"DEU",language:"de",resultType:i,apiKey:r.hereMaps.apiKey}});case 6:s=n.sent,o=s.data.suggestions,n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](3);case 12:return n.prev=12,n.abrupt("return",o);case 15:case"end":return n.stop()}}),n,null,[[3,10,12,15]])})))()}}}),i={mixins:[a],methods:{saveCompany:function(e,t){var r=arguments,a=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var i,o,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=r.length>2&&void 0!==r[2]&&r[2],n.prev=1,n.next=4,a.getHereLocation("".concat(t.street," ").concat(t.location," ").concat(t.zipCode," ").concat(t.country));case 4:return o=n.sent,t.geoCodeLat=o.position&&o.position.lat?o.position.lat:a.$config.maps.defaultCenter.lat,t.geoCodeLng=o.position&&o.position.lng?o.position.lng:a.$config.maps.defaultCenter.lng,t.state=o.address&&o.address.state?o.address.state:"",s="\n          mutation {\n            ".concat(e,"(\n              ").concat("updateCompany"===e||"adminUpdateCompany"===e?'_id: "'.concat(t._id,'",'):"",' \n              name: "').concat(t.name,'", \n              street: "').concat(t.street,'"\n              location: "').concat(t.location,'", \n              zipCode: "').concat(t.zipCode,'"\n              state: "').concat(t.state,'", \n              country: "').concat(t.country,'", \n              geoCodeLat: ').concat(t.geoCodeLat,", \n              geoCodeLng: ").concat(t.geoCodeLng,', \n              size: "').concat(t.size,'"\n              url: "').concat(!/^https?:\/\//i.test(t.url)&&t.url?"https://"+t.url:t.url,'"\n              logoUrl: "').concat(t.logoUrl,'"\n            ) {\n              _id\n            }\n          }\n      '),n.next=11,a.$axios.post("/graphql",{query:s});case 11:if(c=n.sent,c.data.data[e]._id){n.next=17;break}return a.error="Oh, da ist leider etwas schief gelaufen. Bitte versuchen Sie es noch einmal.",n.abrupt("return",{success:!1});case 17:return a.$root.$bvToast.toast("Das Unternehmen wurde erfolgreich gespeichert.",{title:"Unternehmen gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),i&&(a.hasHistory&&"admin"===a.apiJobsSchema?a.$router.go(-1):a.$router.push("/user/dashboard?tab=2")),n.abrupt("return",{success:!0,companyId:c.data.data[e]._id});case 20:n.next=26;break;case 22:return n.prev=22,n.t0=n["catch"](1),a.$root.$bvToast.toast("Beim Speichern des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),n.abrupt("return",{success:!1});case 26:case"end":return n.stop()}}),n,null,[[1,22]])})))()}}}},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var i,o;return a&&"function"==typeof(i=t.constructor)&&i!==r&&n(o=i.prototype)&&o!==r.prototype&&a(e,o),e}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||l;p&&(s=function(e){var t,r,a,s,p=this,d=l&&p.sticky,f=n.call(p),m=p.source,h=0,v=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(m="(?: "+m+")",v=" "+v,h++),r=new RegExp("^(?:"+m+")",f)),u&&(r=new RegExp("^"+m+"$(?!\\s)",f)),c&&(t=p.lastIndex),a=i.call(d?r:p,v),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:c&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),u&&a&&a.length>1&&o.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"9ddf":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit-company container py-5"},[r("h2",[e._v(" Unternehmen "+e._s("new"===e.$route.params.companyId?"erstellen":"bearbeiten")+" ")]),r("CompanyForm",{attrs:{"api-jobs-schema":"private"}})],1)},a=[],i=r("1ce6"),o={name:"UserDashboardEditCompany",components:{CompanyForm:i["a"]}},s=o,c=r("2877"),l=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),o=r("6eeb"),s=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),p=r("d039"),d=r("7c73"),f=r("241c").f,m=r("06cf").f,h=r("9bf2").f,v=r("58a8").trim,g="Number",b=a[g],y=b.prototype,x=c(d(y))==g,w=function(e){var t,r,n,a,i,o,s,c,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=v(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(i=l.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>a)return NaN;return parseInt(i,n)}return+l};if(i(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var O,j=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof j&&(x?p((function(){y.valueOf.call(r)})):c(r)!=g)?l(new b(w(t)),r,j):w(t)},$=n?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;$.length>C;C++)s(b,O=$[C])&&!s(j,O)&&h(j,O,m(b,O));j.prototype=y,y.constructor=j,o(a,g,j)}},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),s=r("9112"),c=i("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var m=i(e),h=!a((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),v=h&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return t=!0,null},r[m](""),!t}));if(!h||!v||"replace"===e&&(!l||!u||d)||"split"===e&&!f){var g=/./[m],b=r(m,""[e],(function(e,t,r,n,a){return t.exec===o?h&&!a?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=b[0],x=b[1];n(String.prototype,e,y),n(RegExp.prototype,m,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}p&&s(RegExp.prototype[m],"sham",!0)}},da34:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit-company container py-5"},[r("h2",[e._v("Unternehmen bearbeiten")]),r("CompanyForm",{attrs:{"api-jobs-schema":"admin"}})],1)},a=[],i=r("1ce6"),o={name:"AdminEditCompany",components:{CompanyForm:i["a"]}},s=o,c=r("2877"),l=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=company_edit-legacy.1f099f49.js.map