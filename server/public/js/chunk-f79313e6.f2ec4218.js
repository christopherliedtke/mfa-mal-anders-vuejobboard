(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f79313e6"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var a=r("b42e"),n=r("dcb3"),o=r("8690"),i=r("365c"),c=r("cf75"),s=r("d580"),l=r("6197"),b=r("b885");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=p(p({},Object(c["a"])(s["a"].props,c["c"].bind(null,"footer"))),{},{footer:{type:String},footerHtml:{type:String},footerClass:{type:[String,Object,Array]}}),g=n["a"].extend({name:"BCardFooter",functional:!0,props:f,render:function(t,e){var r,n=e.props,i=e.data,c=e.children,s=n.footerBgVariant,l=n.footerBorderVariant,b=n.footerTextVariant;return t(n.footerTag,Object(a["a"])(i,{staticClass:"card-footer",class:[n.footerClass,(r={},u(r,"bg-".concat(s),s),u(r,"border-".concat(l),l),u(r,"text-".concat(b),b),r)],domProps:c?{}:Object(o["a"])(n.footerHtml,n.footer)}),c)}}),m={src:{type:String,required:!0},alt:{type:String,default:null},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1},height:{type:[Number,String]},width:{type:[Number,String]}},y=n["a"].extend({name:"BCardImg",functional:!0,props:m,render:function(t,e){var r=e.props,n=e.data,o="card-img";return r.top?o+="-top":r.right||r.end?o+="-right":r.bottom?o+="-bottom":(r.left||r.start)&&(o+="-left"),t("img",Object(a["a"])(n,{class:[o],attrs:{src:r.src||null,alt:r.alt,height:r.height||null,width:r.width||null}}))}});function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(c["a"])(m,c["c"].bind(null,"img"));h.imgSrc.required=!1;var S=v(v(v(v(v(v({},l["b"]),b["b"]),f),h),Object(c["a"])(s["a"].props)),{},{align:{type:String},noBody:{type:Boolean,default:!1}}),w=n["a"].extend({name:"BCard",functional:!0,props:S,render:function(t,e){var r,n=e.props,s=e.data,d=e.slots,p=e.scopedSlots,u=n.imgLeft,m=n.imgRight,j=n.imgStart,v=n.imgEnd,S=n.header,w=n.headerHtml,x=n.footer,_=n.footerHtml,C=n.align,P=n.textVariant,B=n.bgVariant,T=n.borderVariant,D=p||{},k=d(),V={},z=t(),J=t();if(n.imgSrc){var M=t(y,{props:Object(c["b"])(h,n,c["e"].bind(null,"img"))});n.imgBottom?J=M:z=M}var A=t(),I=Object(i["a"])("header",D,k);(I||S||w)&&(A=t(b["a"],{props:Object(c["b"])(b["b"],n),domProps:I?{}:Object(o["a"])(w,S)},Object(i["b"])("header",V,D,k)));var E=Object(i["b"])("default",V,D,k);n.noBody||(E=t(l["a"],{props:Object(c["b"])(l["b"],n)},E));var $=t(),F=Object(i["a"])("footer",D,k);return(F||x||_)&&($=t(g,{props:Object(c["b"])(f,n),domProps:I?{}:Object(o["a"])(_,x)},Object(i["b"])("footer",V,D,k))),t(n.tag,Object(a["a"])(s,{staticClass:"card",class:(r={"flex-row":u||j,"flex-row-reverse":(m||v)&&!(u||j)},O(r,"text-".concat(C),C),O(r,"bg-".concat(B),B),O(r,"border-".concat(T),T),O(r,"text-".concat(P),P),r)}),[z,A,E,$,J])}})},"2b77":function(t,e,r){},30105:function(t,e,r){"use strict";r("2b77")},4487:function(t,e,r){},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return c}));var a=r("dcb3"),n=r("b42e"),o=r("fa73"),i={title:{type:String},titleTag:{type:String,default:"h4"}},c=a["a"].extend({name:"BCardTitle",functional:!0,props:i,render:function(t,e){var r=e.props,a=e.data,i=e.children;return t(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),i||Object(o["f"])(r.title))}})},"5c2f":function(t,e,r){"use strict";r("4487")},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return S})),r.d(e,"a",(function(){return w}));var a=r("b42e"),n=r("dcb3"),o=r("cf75"),i=r("d580"),c=r("4968"),s=r("228e"),l=r("fa73"),b="BCardSubTitle",d={subTitle:{type:String},subTitleTag:{type:String,default:"h6"},subTitleTextVariant:{type:String,default:function(){return Object(s["c"])(b,"subTitleTextVariant")}}},p=n["a"].extend({name:b,functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data,o=e.children;return t(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),o||Object(l["f"])(r.subTitle))}});function u(t){return y(t)||m(t)||g(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,e){if(t){if("string"===typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}function m(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function y(t){if(Array.isArray(t))return j(t)}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=O(O(O(O({},Object(o["a"])(i["a"].props,o["c"].bind(null,"body"))),{},{bodyClass:{type:[String,Object,Array]}},c["b"]),d),{},{overlay:{type:Boolean,default:!1}}),w=n["a"].extend({name:"BCardBody",functional:!0,props:S,render:function(t,e){var r,n=e.props,i=e.data,s=e.children,l=t(),b=t(),f=s||[t()];return n.title&&(l=t(c["a"],{props:Object(o["b"])(c["b"],n)})),n.subTitle&&(b=t(p,{props:Object(o["b"])(d,n),class:["mb-2"]})),t(n.bodyTag,Object(a["a"])(i,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},h(r,"bg-".concat(n.bodyBgVariant),n.bodyBgVariant),h(r,"border-".concat(n.bodyBorderVariant),n.bodyBorderVariant),h(r,"text-".concat(n.bodyTextVariant),n.bodyTextVariant),r),n.bodyClass||{}]}),[l,b].concat(u(f)))}})},7067:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$config.starredJobs.active?a("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar(e)}}},[t.active?a("Fa",{attrs:{icon:["fas","star"],size:t.size}}):a("Fa",{attrs:{icon:["far","star"],size:t.size}}),a("BModal",{attrs:{id:"register-modal-"+t.jobId,"content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:t.modalVisible}},[a("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:function(e){t.modalVisible=!1}}},[a("Fa",{attrs:{icon:"times"}})],1),a("div",{staticClass:"py-2 px-3 "},[a("h2",{staticClass:"h4 mb-4 bold"},[t._v("Für später speichern?")]),a("div",{staticClass:"clearfix mb-3"},[a("b-img",{staticClass:"mr-4 mb-2",staticStyle:{"max-width":"150px"},attrs:{fluid:"",left:"",src:r("7734")}}),a("p",[t._v(" Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu bewerben. Registriere Dich dazu jetzt ganz einfach. ")])],1),a("b-button",{attrs:{to:"/auth/register?role=employee",block:"",variant:"secondary"}},[t._v("Jetzt registrieren")])],1)])],1):t._e()},n=[],o=(r("45fc"),r("96cf"),r("c964")),i=r("2b0e"),c=r("6aac");i["default"].component("BModal",c["a"]);var s={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data:function(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},mounted:function(){this.checkStarredJobs()},methods:{checkStarredJobs:function(){var t=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(e){return e.job._id===t.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$store.state.auth.loggedIn){e.next=3;break}return t.modalVisible=!0,e.abrupt("return");case 3:if(t.active){e.next=11;break}return t.active=!0,e.next=7,t.$store.dispatch("addStarredJob",t.jobId);case 7:t.$gtag.event("add_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","add_starred_job",t.jobId),e.next=16;break;case 11:return t.active=!1,e.next=14,t.$store.dispatch("deleteStarredJob",t.jobId);case 14:t.$gtag.event("delete_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","delete_starred_job",t.jobId);case 16:case"end":return e.stop()}}),e)})))()}}},l=s,b=(r("30105"),r("2877")),d=Object(b["a"])(l,a,n,!1,null,"1c273dea",null);e["a"]=d.exports},7734:function(t,e,r){t.exports=r.p+"img/starredJobs.15f8095f.svg"},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return p}));var a=r("b42e"),n=r("dcb3"),o=r("8690"),i=r("cf75"),c=r("d580");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=l(l({},Object(i["a"])(c["a"].props,i["c"].bind(null,"header"))),{},{header:{type:String},headerHtml:{type:String},headerClass:{type:[String,Object,Array]}}),p=n["a"].extend({name:"BCardHeader",functional:!0,props:d,render:function(t,e){var r,n=e.props,i=e.data,c=e.children,s=n.headerBgVariant,l=n.headerBorderVariant,d=n.headerTextVariant;return t(n.headerTag,Object(a["a"])(i,{staticClass:"card-header",class:[n.headerClass,(r={},b(r,"bg-".concat(s),s),b(r,"border-".concat(l),l),b(r,"text-".concat(d),d),r)],domProps:c?{}:Object(o["a"])(n.headerHtml,n.header)}),c)}})},d580:function(t,e,r){"use strict";e["a"]={props:{tag:{type:String,default:"div"},bgVariant:{type:String},borderVariant:{type:String},textVariant:{type:String}}}},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var a=r("dcb3"),n=r("b42e"),o={textTag:{type:String,default:"p"}},i=a["a"].extend({name:"BCardText",functional:!0,props:o,render:function(t,e){var r=e.props,a=e.data,o=e.children;return t(r.textTag,Object(n["a"])(a,{staticClass:"card-text"}),o)}})},e98b:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var a=r("b42e"),n=r("dcb3"),o=r("228e"),i=r("d82f"),c=r("cf75"),s=r("4a38"),l=r("aa59");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u="BBadge",f=Object(i["m"])(l["b"],["event","routerTag"]);delete f.href.default,delete f.to.default;var g=d({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(o["c"])(u,"variant")}},pill:{type:Boolean,default:!1}},f),m=n["a"].extend({name:u,functional:!0,props:g,render:function(t,e){var r=e.props,n=e.data,o=e.children,i=Object(s["d"])(r),b=i?l["a"]:r.tag,d={staticClass:"badge",class:[r.variant?"badge-".concat(r.variant):"badge-secondary",{"badge-pill":r.pill,active:r.active,disabled:r.disabled}],props:i?Object(c["b"])(f,r):{}};return t(b,Object(a["a"])(n,d),o)}})},f0fa:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.job?r("div",{staticClass:"jobcard"},[t.disabled?r("div",{staticClass:"disabled-jobcard d-flex justify-content-center align-items-center"},[r("span",{staticClass:"h2 bold text-danger"},[t._v("Abgelaufen")])]):t._e(),r("b-link",{attrs:{to:"stepstone"!=t.job.source?"/stellenangebote/job/"+t.job._id:void 0,href:t.job.extJobUrl,target:"stepstone"!=t.job.source?"_self":"_blank"}},[r("BCard",{class:t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0",attrs:{"no-body":""}},[r("BCardText",[r("div",{staticClass:"card-head position-relative"},[r("h2",{class:t.job.company.logoUrl&&!t.compact?"mobile-max-width-75 h4":"h4",style:t.compact?"font-size:1rem; padding: 0.75rem":""},[t._v(" "+t._s(t.compact&&t.job.title.length>32?t.job.title.slice(0,32)+"...":t.job.title)+" ")]),t.job.source?t._e():r("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?r("div",{staticClass:"img-container"},[r("b-img-lazy",{attrs:{"blank-src":"/img/MfaMalAnders_logo_circle_dark.svg","blank-width":"90",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e()],1),t.compact?t._e():r("div",{staticClass:"card-content"},[r("div",{domProps:{innerHTML:t._s(t.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),t.compact?t._e():r("hr"),r("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?r("div",[r("div",{staticClass:"icon"},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.name)+" ")]):t._e(),t.job.company.location?r("div",[r("div",{staticClass:"icon"},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?r("div",[r("div",{staticClass:"icon"},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fas","briefcase"],size:"lg"}})],1),t._v(" "+t._s(t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():r("div",[r("div",{staticClass:"icon"},[r("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}})],1),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?r("div",[r("div",{staticClass:"icon"},[r("Fa",{staticClass:"mr-2",attrs:{icon:"syringe",size:"lg"}})],1),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.publishedAt||t.job.paidAt?r("div",[r("div",{staticClass:"icon"},[r("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}})],1),t._v(" "+t._s(t.timeSince(new Date(parseInt(t.job.publishedAt||t.job.paidAt))))+" ")]):t._e(),t.job.simpleApplication?r("div",{attrs:{id:"tooltip-simple-application"}},[r("BBadge",{attrs:{pill:"",variant:"secondary"}},[r("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),t._v("Einfach bewerben")],1)],1):t._e(),t.job.simpleApplication?r("BTooltip",{attrs:{target:"tooltip-simple-application",title:"Lebenslauf genügt für Bewerbung",triggers:"hover",placement:"bottom"}}):t._e()],1)])],1)],1)],1):t._e()},n=[],o=r("1ba6"),i=r("7067"),c=r("b4ae"),s=r("e98b"),l=r("205f"),b=r("d6e4"),d=r("2b0e");d["default"].component("BTooltip",c["a"]),d["default"].component("BBadge",s["a"]),d["default"].component("BCard",l["a"]),d["default"].component("BCardText",b["a"]);var p={name:"JobCard",components:{StarJob:i["a"]},props:{job:{type:Object,default:function(){}},compact:{type:Boolean,default:!1}},data:function(){return{employmentTypeOptions:o["f"],companySizeOptions:o["b"]}},computed:{disabled:function(){return this.job.applicationDeadline&&new Date(this.job.applicationDeadline)<new Date||"published"!=this.job.status||this.job.paidExpiresAt<new Date}},methods:{timeSince:function(t){var e=Math.floor((new Date-t)/1e3),r=e/31536e3;return r>1?"vor "+Math.floor(r)+" Jahr"+(Math.floor(r)>1?"en":""):(r=e/604800,r>1?"vor "+Math.floor(r)+" Woche"+(Math.floor(r)>1?"n":""):(r=e/86400,r>1?"vor "+Math.floor(r)+" Tag"+(Math.floor(r)>1?"en":""):"heute"))}}},u=p,f=(r("5c2f"),r("2877")),g=Object(f["a"])(u,a,n,!1,null,"552d378e",null);e["a"]=g.exports}}]);
//# sourceMappingURL=chunk-f79313e6.f2ec4218.js.map