(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobboard"],{"04f1":function(t,e,a){},"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a("2b0e"),o=a("b42e"),i=a("c637"),r=a("a723"),s=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=Object(s["d"])({animation:Object(s["c"])(r["s"],"wave"),height:Object(s["c"])(r["s"]),size:Object(s["c"])(r["s"]),type:Object(s["c"])(r["s"],"text"),variant:Object(s["c"])(r["s"]),width:Object(s["c"])(r["s"])},i["zb"]),b=n["default"].extend({name:i["zb"],functional:!0,props:l,render:function(t,e){var a,n=e.data,i=e.props,r=i.size,s=i.animation,l=i.variant;return t("div",Object(o["a"])(n,{staticClass:"b-skeleton",style:{width:r||i.width,height:r||i.height},class:(a={},c(a,"b-skeleton-".concat(i.type),!0),c(a,"b-skeleton-animate-".concat(s),s),c(a,"bg-".concat(l),l),a)}))}})},"12aa":function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a("2b0e"),o=a("b42e"),i=a("c637"),r=a("a723"),s=a("d82f"),c=a("cf75"),l=a("1947");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f=Object(c["d"])(Object(s["m"])(u(u({},Object(s["k"])(l["b"],["size"])),{},{ariaRole:Object(c["c"])(r["s"],"group"),size:Object(c["c"])(r["s"]),tag:Object(c["c"])(r["s"],"div"),vertical:Object(c["c"])(r["g"],!1)})),i["h"]),p=n["default"].extend({name:i["h"],functional:!0,props:f,render:function(t,e){var a=e.props,n=e.data,i=e.children;return t(a.tag,Object(o["a"])(n,{class:d({"btn-group":!a.vertical,"btn-group-vertical":a.vertical},"btn-group-".concat(a.size),a.size),attrs:{role:a.ariaRole}}),i)}})},"159b":function(t,e,a){var n=a("da84"),o=a("fdbc"),i=a("17c2"),r=a("9112");for(var s in o){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{r(l,"forEach",i)}catch(b){l.forEach=i}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,o=a("a640"),i=a("ae40"),r=o("forEach"),s=i("forEach");t.exports=r&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"2bf9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-btn",attrs:{variant:"primary",href:"https://www.facebook.com/"+t.$config.fb.path,target:"_blank","aria-label":"Facebook"}},[a("Fa",{class:t.content?"mr-2":"",attrs:{icon:["fab","facebook-square"],size:"lg"}}),t._v(" "+t._s(t.content)+" ")],1)},o=[],i={name:"FacebookBtn",props:{content:{type:String,default:"Facebook"}}},r=i,s=a("2877"),c=Object(s["a"])(r,n,o,!1,null,null,null);e["a"]=c.exports},4160:function(t,e,a){"use strict";var n=a("23e7"),o=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"5ff0":function(t,e,a){},7057:function(t,e,a){t.exports=a.p+"img/undraw_Updates_re_o5af.6ea0d239.svg"},7067:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$config.starredJobs.active?n("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar(e)}}},[t.active?n("Fa",{attrs:{icon:["fas","star"],size:t.size}}):n("Fa",{attrs:{icon:["far","star"],size:t.size}}),n("BModal",{attrs:{id:"register-modal-"+t.jobId,"content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:t.modalVisible}},[n("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:function(e){t.modalVisible=!1}}},[n("Fa",{attrs:{icon:"times"}})],1),n("div",{staticClass:"py-2 px-3 "},[n("h2",{staticClass:"h4 mb-4 bold"},[t._v("Für später speichern?")]),n("div",{staticClass:"clearfix mb-3"},[n("b-img",{staticClass:"mr-4 mb-2",staticStyle:{"max-width":"150px"},attrs:{fluid:"",left:"",src:a("7734")}}),n("p",[t._v(" Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu bewerben. Registriere Dich dazu jetzt ganz einfach. ")])],1),n("b-button",{attrs:{to:"/auth/register?role=employee",block:"",variant:"secondary"}},[t._v("Jetzt registrieren")])],1)])],1):t._e()},o=[],i=(a("45fc"),a("96cf"),a("c964")),r=a("2b0e"),s=a("6aac");r["default"].component("BModal",s["a"]);var c={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data:function(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},mounted:function(){this.checkStarredJobs()},methods:{checkStarredJobs:function(){var t=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(e){return e.job===t.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$store.state.auth.loggedIn){e.next=3;break}return t.modalVisible=!0,e.abrupt("return");case 3:if(t.active){e.next=11;break}return t.active=!0,e.next=7,t.$store.dispatch("addStarredJob",t.jobId);case 7:t.$gtag.event("add_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","add_starred_job",t.jobId),e.next=16;break;case 11:return t.active=!1,e.next=14,t.$store.dispatch("deleteStarredJob",t.jobId);case 14:t.$gtag.event("delete_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","delete_starred_job",t.jobId);case 16:case"end":return e.stop()}}),e)})))()}}},l=c,b=(a("d1d4"),a("2877")),u=Object(b["a"])(l,n,o,!1,null,"f9ecca82",null);e["a"]=u.exports},7734:function(t,e,a){t.exports=a.p+"img/starredJobs.15f8095f.svg"},"924c":function(t,e,a){},a15b:function(t,e,a){"use strict";var n=a("23e7"),o=a("44ad"),i=a("fc6a"),r=a("a640"),s=[].join,c=o!=Object,l=r("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a281:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BCard",{staticClass:"shadow1",attrs:{"no-body":""}},[a("BCardImgLazy",{attrs:{fluid:"",top:"",srcset:"/img/MfaMalAnders_50+Jobmoeglichkeiten_1200-300x157.jpg 300w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-1024x538.jpg 1024w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-768x403.jpg 768w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg 1200w",sizes:"(max-width: 768px) 100vw, 50vw",src:"/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg",alt:"Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000","blank-color":"#f7f6f9"}}),a("BCardBody",{attrs:{align:"center"}},[a("BCardTitle",{attrs:{title:"Alternative Jobs und Berufsbilder für MFA / ZFA"}}),a("BCardText",[t._v(" Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und Berufen inklusive vieler Alternativen für Medizinische Fachangestellte / ArzthelferInnen! ")]),a("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder",variant:"primary"}},[t._v("Mehr erfahren!")])],1)],1)},o=[],i=a("2b0e"),r=a("205f"),s=a("6197"),c=a("60f1"),l=a("4968"),b=a("d6e4");i["default"].component("BCard",r["a"]),i["default"].component("BCardBody",s["a"]),i["default"].component("BCardImgLazy",c["a"]),i["default"].component("BCardTitle",l["a"]),i["default"].component("BCardText",b["a"]);var u={name:"BerufsbilderBanner"},d=u,f=a("2877"),p=Object(f["a"])(d,n,o,!1,null,null,null);e["a"]=p.exports},be3f:function(t,e,a){"use strict";a("5ff0")},d1bf:function(t,e,a){},d1d4:function(t,e,a){"use strict";a("d1bf")},d81d:function(t,e,a){"use strict";var n=a("23e7"),o=a("b727").map,i=a("1dde"),r=a("ae40"),s=i("map"),c=r("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,a){var n=a("23e7"),o=a("83ab"),i=a("56ef"),r=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,a,n=r(t),o=s.f,l=i(n),b={},u=0;while(l.length>u)a=o(n,e=l[u++]),void 0!==a&&c(b,e,a);return b}})},df14:function(t,e,a){"use strict";a("04f1")},e439:function(t,e,a){var n=a("23e7"),o=a("d039"),i=a("fc6a"),r=a("06cf").f,s=a("83ab"),c=o((function(){r(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return r(i(t),e)}})},e98b:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var n=a("2b0e"),o=a("b42e"),i=a("c637"),r=a("a723"),s=a("d82f"),c=a("cf75"),l=a("4a38"),b=a("aa59");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p=Object(s["j"])(b["b"],["event","routerTag"]);delete p.href.default,delete p.to.default;var m=Object(c["d"])(Object(s["m"])(d(d({},p),{},{pill:Object(c["c"])(r["g"],!1),tag:Object(c["c"])(r["s"],"span"),variant:Object(c["c"])(r["s"],"secondary")})),i["b"]),h=n["default"].extend({name:i["b"],functional:!0,props:m,render:function(t,e){var a=e.props,n=e.data,i=e.children,r=a.active,s=a.disabled,u=Object(l["d"])(a),d=u?b["a"]:a.tag,f=a.variant||"secondary";return t(d,Object(o["a"])(n,{staticClass:"badge",class:["badge-".concat(f),{"badge-pill":a.pill,active:r,disabled:s}],props:u?Object(c["e"])(p,a):{}}),i)}})},f0fa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("div",{staticClass:"jobcard"},[t.disabled?a("div",{staticClass:"disabled-jobcard d-flex justify-content-center align-items-center"},[a("span",{staticClass:"h2 bold text-danger"},[t._v("Abgelaufen")])]):t._e(),a("b-link",{attrs:{to:"stepstone"!=t.job.source?"/stellenangebote/job/"+t.job._id:void 0,href:"stepstone"===t.job.source?t.job.extJobUrl:void 0,target:"stepstone"!=t.job.source?"_self":"_blank"}},[a("BCard",{class:t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0",attrs:{"no-body":""}},[a("BCardText",[a("div",{staticClass:"card-head position-relative"},[a("h2",{class:t.job.company.logoUrl&&!t.compact?"mobile-max-width-75 h4":"h4",style:t.compact?"font-size:1rem; padding: 0.75rem":""},[t._v(" "+t._s(t.compact&&t.job.title.length>32?t.job.title.slice(0,32)+"...":t.job.title)+" ")]),a("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{"blank-src":"/img/MfaMalAnders_logo_circle_dark.svg","blank-width":"90",offset:"1000",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e()],1),t.compact?t._e():a("div",{staticClass:"card-content"},[a("div",{domProps:{innerHTML:t._s(t.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),t.compact?t._e():a("hr"),a("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.name)+" ")]):t._e(),t.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","briefcase"],size:"lg"}})],1),t._v(" "+t._s(t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}})],1),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"syringe",size:"lg"}})],1),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.publishedAt||t.job.paidAt?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}})],1),t._v(" "+t._s(t.timeSince(new Date(t.job.publishedAt||t.job.paidAt)))+" ")]):t._e(),t.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("BBadge",{attrs:{pill:"",variant:"secondary"}},[a("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),t._v("Einfach bewerben")],1)],1):t._e(),t.job.simpleApplication?a("BTooltip",{attrs:{target:"tooltip-simple-application",title:"Lebenslauf genügt für Bewerbung",triggers:"hover",placement:"bottom"}}):t._e()],1)])],1)],1)],1):t._e()},o=[],i=a("1ba6"),r=a("7067"),s=a("b4ae"),c=a("e98b"),l=a("205f"),b=a("d6e4"),u=a("2b0e");u["default"].component("BTooltip",s["a"]),u["default"].component("BBadge",c["a"]),u["default"].component("BCard",l["a"]),u["default"].component("BCardText",b["a"]);var d={name:"JobCard",components:{StarJob:r["a"]},props:{job:{type:Object,default:function(){}},compact:{type:Boolean,default:!1}},data:function(){return{employmentTypeOptions:i["f"],companySizeOptions:i["b"]}},computed:{disabled:function(){return this.job.applicationDeadline&&new Date(this.job.applicationDeadline)<new Date||"published"!=this.job.status||this.job.paidExpiresAt<new Date}},methods:{timeSince:function(t){var e=Math.floor((new Date-t)/1e3),a=e/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=e/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=e/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},f=d,p=(a("f8d1"),a("2877")),m=Object(p["a"])(f,n,o,!1,null,"d4a093b2",null);e["a"]=m.exports},f3f3:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");var n=a("fc11");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},f810:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-card-placeholder"},[a("BSkeleton",{staticClass:"header",attrs:{height:t.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),t.compact?t._e():a("BSkeleton",{attrs:{height:"1px"}}),t.compact?t._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},o=[],i=a("2b0e"),r=a("0942");i["default"].component("BSkeleton",r["a"]);var s={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=s,l=(a("be3f"),a("2877")),b=Object(l["a"])(c,n,o,!1,null,"73f8515e",null);e["a"]=b.exports},f8d1:function(t,e,a){"use strict";a("924c")},fa1a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jobboard"},[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.title))]),n("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),n("b-container",{staticClass:"py-3 py-lg-5"},[n("b-row",{staticClass:"mt-2"},[n("b-col",{staticClass:"px-2 pr-lg-5",attrs:{cols:"12",lg:"4"}},[t.$config.externalJobs.active?n("div",{staticClass:"mb-2"},[n("p",{staticClass:"small text-muted text-right m-0"},[t._v(" "+t._s(t.jobsCount>0?parseInt(t.jobsCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):"-")+" Stellenangebote ")])]):t._e(),n("BButtonToolbar",{attrs:{"aria-label":"Jobboard view toolbar"}},[t.$config.jobboardMap.active?n("BButtonGroup",{staticClass:"mb-3"},[n("b-button",{attrs:{variant:"list"==t.jobboardView?"primary":"outline-primary",size:"sm"},on:{click:function(e){e.preventDefault(),t.jobboardView="list"}}},[n("Fa",{staticClass:"mr-2",attrs:{icon:"list-ul"}}),t._v("Liste")],1),n("b-button",{attrs:{variant:"map"==t.jobboardView?"primary":"outline-primary",size:"sm"},on:{click:function(e){e.preventDefault(),t.jobboardView="map"}}},[n("Fa",{staticClass:"mr-2",attrs:{icon:"map"}}),t._v("Karte")],1)],1):t._e(),n("FacebookBtn",{staticClass:"d-lg-none mb-3 ml-1",attrs:{content:""}}),n("InstagramBtn",{staticClass:"d-lg-none mb-3 ml-1",attrs:{content:""}})],1),n("b-form",{attrs:{id:"job-filter"},on:{submit:function(t){t.preventDefault()}}},[n("label",{staticClass:"sr-only",attrs:{for:"s-jobboard"}},[t._v("Suchbegriff *")]),n("b-input-group",{staticClass:"mb-1 mr-2"},[n("b-form-input",{class:t.filter.s?"border-secondary":"",attrs:{id:"s-jobboard",type:"text",placeholder:"Suchbegriff..."},on:{input:function(){t.getJobs(),t.setQuery()}},model:{value:t.filter.s,callback:function(e){t.$set(t.filter,"s",e)},expression:"filter.s"}}),n("b-input-group-append",[n("b-button",{on:{click:function(e){return e.preventDefault(),function(){t.filter.s="",t.getJobs(),t.setQuery()}()}}},[n("Fa",{attrs:{icon:"times"}})],1)],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"employmentType-jobboard"}},[t._v("Anstellungsart *")]),n("b-form-select",{staticClass:"my-1 mr-2",attrs:{id:"employmentType-jobboard"},on:{change:function(){t.getJobs(),t.setQuery()}},model:{value:t.filter.employmentType,callback:function(e){t.$set(t.filter,"employmentType",e)},expression:"filter.employmentType"}},[n("b-form-select-option",{attrs:{value:""}},[t._v("Alle Anstellungsarten")]),t._l(t.employmentTypeOptions,(function(e){return n("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2),n("label",{staticClass:"sr-only",attrs:{for:"location-jobboard"}},[t._v("Ort *")]),n("b-input-group",{staticClass:"my-1 mr-2"},[n("b-form-input",{class:t.filter.location?"border-secondary":"",attrs:{id:"location-jobboard",type:"text",placeholder:"Ort..."},on:{input:function(){t.getJobs(),t.setQuery()}},model:{value:t.filter.location,callback:function(e){t.$set(t.filter,"location",e)},expression:"filter.location"}}),n("b-input-group-append",[n("b-button",{on:{click:function(e){return e.preventDefault(),function(){t.filter.location="",t.getJobs(),t.setQuery()}()}}},[n("Fa",{attrs:{icon:"times"}})],1)],1)],1),n("label",{staticClass:"sr-only",attrs:{for:"state-jobboard"}},[t._v("Bundesland *")]),n("b-form-select",{staticClass:"my-1 mr-2",attrs:{id:"state-jobboard"},on:{change:function(){t.getJobs(),t.setQuery()}},model:{value:t.filter.state,callback:function(e){t.$set(t.filter,"state",e)},expression:"filter.state"}},[n("b-form-select-option",{attrs:{value:""}},[t._v("Alle Bundesländer")]),t._l(t.companyStateOptions,(function(e){return n("b-form-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2),n("label",{staticClass:"mb-2 pl-2",attrs:{for:"profession-jobboard"}},[t._v("Berufe ")]),n("b-form-group",{staticClass:"pl-2",attrs:{id:"profession-jobboard"}},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.professionOptions,size:"sm",stacked:""},on:{change:function(){t.getJobs()}},model:{value:t.profession.active,callback:function(e){t.$set(t.profession,"active",e)},expression:"profession.active"}})],1),n("label",{staticClass:"mt-0 mb-2 pl-2",staticStyle:{cursor:"pointer"},attrs:{for:"specialization-jobboard"},on:{click:function(e){t.specialization.visible=!t.specialization.visible}}},[t._v("Fachgebiete "),n("Fa",{class:!0===t.specialization.visible?"animate rotate-90 ml-2":"animate ml-2",attrs:{icon:"caret-right",size:"1x"}})],1),n("b-collapse",{attrs:{visible:!0===t.specialization.visible,role:"tabpanel"}},[n("b-form-group",{staticClass:"pl-2",attrs:{id:"specialization-jobboard"},scopedSlots:t._u([{key:"label",fn:function(){return[n("b-form-checkbox",{attrs:{indeterminate:t.specialization.indeterminate,size:"sm",stacked:""},on:{change:t.toggleAll},model:{value:t.specialization.allSelected,callback:function(e){t.$set(t.specialization,"allSelected",e)},expression:"specialization.allSelected"}},[t._v(" "+t._s(t.specialization.allSelected?"Alle Abwählen":"Alle Auswählen")+" ")])]},proxy:!0}])},[n("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.specializationOptions.map((function(t){return{text:t,value:t}})),size:"sm",stacked:""},on:{change:function(){t.getJobs()}},model:{value:t.specialization.active,callback:function(e){t.$set(t.specialization,"active",e)},expression:"specialization.active"}})],1)],1)],1),n("div",{staticClass:"small text-right mb-2 pr-3 pt-1"},[n("b-link",{attrs:{to:"/fuer-arbeitgeber"}},[t._v("Stellenanzeige schalten")])],1),n("div",{staticClass:"d-none d-lg-block mt-5"},[t.$config.starredJobs.active&&t.$store.state.auth.loggedIn&&t.$store.state.starredJobs.starredJobs&&t.$store.state.starredJobs.starredJobs.length>0?n("b-button",{attrs:{to:"/user/dashboard?tab=4",variant:"secondary",size:"sm"}},[t._v("Meine gespeicherten Jobs")]):t._e()],1),n("div",{staticClass:"d-none d-lg-block mt-4"},[n("p",{staticClass:"h5"},[t._v(" Verpasse keine Neuigkeiten und folge uns auf ")]),n("FacebookBtn",{staticClass:"mt-2 mr-1",attrs:{content:"Facebook"}}),n("InstagramBtn",{staticClass:"mt-2 mr-1",attrs:{content:""}}),n("TwitterBtn",{staticClass:"mt-2 mr-1",attrs:{content:""}})],1)],1),n("b-col",{attrs:{cols:"12",lg:"8"}},[n("keep-alive",[n(t.computedJobboardView,{tag:"component",staticClass:"mb-4",attrs:{id:"job-list",jobs:t.filteredJobs,nojobs:t.nojobs}})],1),n("div",{staticClass:"my-4 clearfix"},[n("h2",{staticClass:"h5 bold mb-3"},[t._v("Ihre Stellenanzeige hier?")]),n("b-img",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057"),alt:"Stellenanzeige wird auf MFA mal anders veröffentlicht"}}),n("p",[t._v(" Sie sind als attraktiver Arbeitergeber auf der Suche nach einer motivierten und kompetenten "),n("em",[t._v("Medizinischen Fachangestellten (MFA) / ArzthelferIn oder Zahnmedizinischen Fachangestellten (ZFA)")]),t._v(t._s(t.$route.query.location||t.$route.query.state?" in "+(t.$route.query.location||t.$route.query.state):"")+"? Dann "),n("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[t._v("registrieren")]),t._v(" Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem Karriereportal. "),n("br"),n("b-link",{staticClass:"bold",attrs:{to:"/fuer-arbeitgeber"}},[t._v("Mehr erfahren")])],1)],1),n("div",{staticClass:"mt-5"},[n("b-link",{staticClass:"h2 text-primary",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[t._v("Fort- und Weiterbildungen für MFA")]),n("RandomTrainingsContainer",{staticClass:"mt-3",attrs:{number:2}}),n("BerufsbilderBanner",{staticClass:"mt-3"})],1),n("div",{staticClass:"mt-5"},[n("p",{staticClass:"small"},[t._v(" Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische Fachangestellte (MFA), Arzthelferin, Zahnmedizinische Fachangestellte (ZFA), ZMF, ZMV, MTRA in "+t._s(t.companyStateOptions.join(", "))+". ")])])],1)],1)],1),n("Head",{attrs:{title:"Stellenangebote ArzthelferIn | "+t.profession.active.join(" & ")+" Jobs"+(t.filter.state?" | "+t.filter.state:""),separator:" ",complement:" ",desc:"Stellenangebote (Teilzeit | Vollzeit) für ArzthelferInnen ✓ "+t.profession.active.join(" & ")+" Jobs "+(t.filter.state?"in "+t.filter.state+" ":"")+"– Die Jobbörse für Medizinische / Zahnmedizinische Fachangestellte.",img:"",script:t.snippet,link:t.link}})],1)},o=[],i=(a("99af"),a("4de4"),a("a15b"),a("d81d"),a("fb6a"),a("d3b7"),a("f3f3")),r=a("d0ff"),s=(a("96cf"),a("c964"));a("a4d3"),a("e01a"),a("d28b"),a("3ca3"),a("ddb0");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}var l=a("2b0e"),b=a("c637"),u=a("a723"),d=a("9bfa"),f=a("906c"),p=a("6b77"),m=a("cf75"),h=a("8c18"),g=[".btn:not(.disabled):not([disabled]):not(.dropdown-item)",".form-control:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])",'input[type="checkbox"]:not(.disabled)','input[type="radio"]:not(.disabled)'].join(","),v=Object(m["d"])({justify:Object(m["c"])(u["g"],!1),keyNav:Object(m["c"])(u["g"],!1)},b["i"]),j=l["default"].extend({name:b["i"],mixins:[h["a"]],props:v,mounted:function(){this.keyNav&&this.getItems()},methods:{getItems:function(){var t=Object(f["D"])(g,this.$el);return t.forEach((function(t){t.tabIndex=-1})),t.filter((function(t){return Object(f["u"])(t)}))},focusFirst:function(){var t=this.getItems();Object(f["d"])(t[0])},focusPrev:function(t){var e=this.getItems(),a=e.indexOf(t.target);a>-1&&(e=e.slice(0,a).reverse(),Object(f["d"])(e[0]))},focusNext:function(t){var e=this.getItems(),a=e.indexOf(t.target);a>-1&&(e=e.slice(a+1),Object(f["d"])(e[0]))},focusLast:function(){var t=this.getItems().reverse();Object(f["d"])(t[0])},onFocusin:function(t){var e=this.$el;t.target!==e||Object(f["f"])(e,t.relatedTarget)||(Object(p["f"])(t),this.focusFirst(t))},onKeydown:function(t){var e=t.keyCode,a=t.shiftKey;e===d["k"]||e===d["f"]?(Object(p["f"])(t),a?this.focusFirst(t):this.focusPrev(t)):e!==d["a"]&&e!==d["i"]||(Object(p["f"])(t),a?this.focusLast(t):this.focusNext(t))}},render:function(t){var e=this.keyNav;return t("div",{staticClass:"btn-toolbar",class:{"justify-content-between":this.justify},attrs:{role:"toolbar",tabindex:e?"0":null},on:e?{focusin:this.onFocusin,keydown:this.onKeydown}:{}},[this.normalizeSlot()])}}),y=a("12aa"),_=a("1ba6"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.jobs.length>0?a("div",{staticClass:"position-relative"},t._l(t.jobs,(function(t){return a("JobCard",{key:t._id,attrs:{job:t}})})),1):t.nojobs&&0===t.jobs.length?a("div",{staticStyle:{"min-height":"200px"}},[a("p",{staticClass:"h5"},[t._v("Leider gibt es hierzu keine Ergebnisse.")])]):a("div",t._l(25,(function(t){return a("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1)])},w=[],C=a("f0fa"),k=a("f810"),x={name:"JobboardList",components:{JobCard:C["a"],JobCardPlaceholder:k["a"]},props:{jobs:{type:Array,default:function(){return[]}},nojobs:{type:Boolean,default:!1}}},z=x,J=a("2877"),S=Object(J["a"])(z,O,w,!1,null,null,null),B=S.exports,$=a("2bf9"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"instagram-btn",attrs:{variant:"primary",href:"https://www.instagram.com/"+t.$config.ig.path,target:"_blank","aria-label":"Instagram"}},[a("Fa",{class:t.content?"mr-2":"",attrs:{icon:["fab","instagram"],size:"lg"}}),t._v(" "+t._s(t.content)+" ")],1)},F=[],A={name:"InstagramBtn",props:{content:{type:String,default:"Instagram"}}},I=A,T=Object(J["a"])(I,M,F,!1,null,null,null),P=T.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-btn",attrs:{variant:"primary",href:"https://www.twitter.com/"+t.$config.twitter.path,target:"_blank","aria-label":"Twitter"}},[a("Fa",{class:t.content?"mr-2":"",attrs:{icon:["fab","twitter"],size:"lg"}}),t._v(" "+t._s(t.content)+" ")],1)},E=[],q={name:"TwitterBtn",props:{content:{type:String,default:"Twitter"}}},L=q,R=Object(J["a"])(L,D,E,!1,null,null,null),V=R.exports,Z=a("6df3"),H=a("a281");l["default"].component("BButtonToolbar",j),l["default"].component("BButtonGroup",y["a"]);var Q=function(){return a.e("HereMapMultiJobs").then(a.bind(null,"7fe0"))},N={name:"Jobboard",components:{JobboardList:B,HereMapMultiJobs:Q,FacebookBtn:$["a"],InstagramBtn:P,TwitterBtn:V,RandomTrainingsContainer:Z["a"],BerufsbilderBanner:H["a"]},data:function(){return{title:"Stellenangebote für ArzthelferInnen – MFA & ZFA",filteredJobs:[],filterJobTimeoutId:null,nojobs:!1,jobsCount:0,filter:{s:"",employmentType:"",location:"",state:""},locationSuggestions:[],specialization:{active:_["i"],visible:!1,allSelected:!0,indeterminate:!1},profession:{active:this.$route.query.profession?"object"===c(this.$route.query.profession)?this.$route.query.profession:[this.$route.query.profession]:_["g"].map((function(t){return t.value}))},employmentTypeOptions:_["f"].filter((function(t){return"part_full"!=t.value})),companyStateOptions:_["c"],specializationOptions:_["i"],professionOptions:_["g"],jobboardView:this.$route.query.jobboardView||"list",snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Stellenangebote",\n                              "item": "https://www.mfa-mal-anders.de/stellenangebote"\n                          }'.concat(this.$route.query.state?',{"@type": "ListItem","position": 3,"name": "'+this.$route.query.state+'","item": "https://www.mfa-mal-anders.de/stellenangebote?state='+this.$route.query.state+'"}':"","]\n                      }")}],link:[{rel:"stylesheet",href:"https://js.api.here.com/v3/3.1/mapsjs-ui.css",type:"text/css"}]}},computed:{computedJobboardView:{get:function(){return"map"===this.jobboardView?"HereMapMultiJobs":"JobboardList"}},breadcrumbs:function(){var t=[{text:"Home",to:"/"},{text:"Stellenangebote",to:"/stellenangebote"}];return this.filter.state&&t.push({text:this.filter.state,to:"/stellenangebote/?state=".concat(this.filter.state)}),this.filter.location&&t.push({text:this.filter.location,to:"/stellenangebote/?location=".concat(this.filter.location)}),t}},watch:{"specialization.active":function(t){0===t.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!1):t.length===this.specializationOptions.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!0):(this.specialization.indeterminate=!0,this.specialization.allSelected=!1)},"profession.active":function(){this.setQuery()},"$route.query":function(){this.getJobs()}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getJobs(0),t.setFilter();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.loadMoreJobs()},methods:{getJobs:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t.length>0&&void 0!==t[0]?t[0]:400,o=t.length>1&&void 0!==t[1]?t[1]:"",i=t.length>2&&void 0!==t[2]?t[2]:"",clearTimeout(e.filterJobTimeoutId),e.filteredJobs=i>0?e.filteredJobs:[],e.filterJobTimeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/public-jobs",{params:{s:e.filter.s,employmentType:e.filter.employmentType,state:e.filter.state,location:e.filter.location,profession:"object"===c(e.$route.query.profession)?e.$route.query.profession.join("+"):e.$route.query.profession,specialization:e.specialization.active.length===e.specializationOptions.length?"":"object"===c(e.specialization.active)?e.specialization.active.join("+"):e.specialization.active,limit:o,offset:i}});case 2:a=t.sent,e.filteredJobs=[].concat(Object(r["a"])(e.filteredJobs),Object(r["a"])(a.data.jobs)),e.jobsCount=a.data.jobsCount,0===e.filteredJobs.length?e.nojobs=!0:e.nojobs=!1;case 6:case"end":return t.stop()}}),t)}))),n);case 6:case"end":return a.stop()}}),a)})))()},loadMoreJobs:function(){var t=this;if(this.filteredJobs.length<this.jobsCount||0===this.filteredJobs.length){var e=window.document.getElementById("job-list");if(e){var a=e.getBoundingClientRect().bottom,n=document.documentElement.clientHeight;setTimeout(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.nojobs||!(a-n<500)){e.next=3;break}return e.next=3,t.getJobs(0,void 0,t.filteredJobs.length);case 3:t.loadMoreJobs();case 4:case"end":return e.stop()}}),e)}))),500)}}},setQuery:function(){var t=Object(i["a"])(Object(i["a"])({},this.filter),{},{profession:"object"===c(this.profession.active)&&this.profession.active.length===this.professionOptions.length?"":this.profession.active});for(var e in t)t[e]||delete t[e];this.$router.push({query:t})},setFilter:function(){this.filter={s:this.$route.query.s||"",employmentType:this.$route.query.employmentType||"",location:this.$route.query.location||"",state:this.$route.query.state||""}},toggleAll:function(t){this.specialization.active=t?this.specializationOptions.slice():[],this.getJobs(0)}}},K=N,U=(a("df14"),Object(J["a"])(K,n,o,!1,null,null,null));e["default"]=U.exports},fc11:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=jobboard.6e4e7b4d.js.map