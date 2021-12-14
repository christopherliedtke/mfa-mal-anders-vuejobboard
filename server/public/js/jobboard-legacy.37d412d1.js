(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobboard"],{"04f1":function(t,e,a){},"15f6":function(t,e,a){},"215b":function(t,e,a){"use strict";a("dd0d")},"230b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"d-flex justify-content-center"},[i("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[i("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[i("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:a("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),i("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[i("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),i("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},s=[],r={name:"TrainingCatalogueSmallBanner"},n=r,l=a("2877"),o=Object(l["a"])(n,i,s,!1,null,null,null);e["a"]=o.exports},"4e15":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.auth.loggedIn&&t.$store.state.auth.user.isEmployee?a("b-button",{attrs:{to:"/user/job-newsletter"}},[t._v(t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]):a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:t.variant,size:t.size}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),a("BModal",{ref:"subscribe-newsletter-modal2",attrs:{id:"subscribe-newsletter-modal2","hide-footer":"","hide-header":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":t.state},on:{close:function(e){return t.$refs["subscribe-newsletter-modal2"].hide()}}})],1)],1)},s=[],r=a("2b0e"),n=a("6aac"),l=a("e6c7"),o=a("e7ba");r["default"].component("BModal",n["a"]),r["default"].directive("b-modal",l["a"]);var c={name:"SubscribeNewsletterBtn",components:{NewsletterSignUpForm:o["a"]},props:{state:{type:String,default:""},variant:{type:String,default:"secondary"},size:{type:String,default:""}}},u=c,d=a("2877"),b=Object(d["a"])(u,i,s,!1,null,null,null);e["a"]=b.exports},"4fef":function(t,e,a){t.exports=a.p+"img/calendar.beda8b1d.svg"},"6df3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("article",{key:e.id,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,"aria-label":e.title}},[a("div",{staticClass:"card"},[e.featuredImage.node.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.featuredImage.node.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw",src:e.featuredImage.node.sourceUrl,alt:e.featuredImage.node.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("WeiterbildungCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},s=[],r=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])}),n=[],l=a("2b0e"),o=a("0942");l["default"].component("BSkeleton",o["a"]);var c={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},u=c,d=(a("215b"),a("2877")),b=Object(d["a"])(u,r,n,!1,null,"773bc4fc",null),h=b.exports,g={name:"RandomTrainingsContainer",components:{WeiterbildungCardPlaceholder:h},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(t,e){t!=e&&this.getTrainings()},"$store.state.trainings.trainings":function(){this.getTrainings()}},created:function(){this.$store.dispatch("getTrainings"),this.getTrainings()},methods:{getRandom:function(t,e){var a=new Array(e),i=t.length,s=new Array(i);if(e>i)throw new RangeError("getRandom: more elements taken than available");while(e--){var r=Math.floor(Math.random()*i);a[e]=t[r in s?s[r]:r],s[r]=--i in s?s[i]:i}return a},getTrainings:function(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number>this.$store.state.trainings.trainings.length?this.$store.state.trainings.trainings.length:this.number))}}},p=g,f=(a("fdcd"),Object(d["a"])(p,i,s,!1,null,"4a77e4b8",null));e["a"]=f.exports},"7db0":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").find,r=a("44d2"),n="find",l=!0;n in[]&&Array(1)[n]((function(){l=!1})),i({target:"Array",proto:!0,forced:l},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(n)},a15b:function(t,e,a){"use strict";var i=a("23e7"),s=a("e330"),r=a("44ad"),n=a("fc6a"),l=a("a640"),o=s([].join),c=r!=Object,u=l("join",",");i({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o(n(this),void 0===t?",":t)}})},a281:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card shadow1"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{fluid:"",top:"",srcset:"\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_350.jpg 350w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_579.jpg 579w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_782.jpg 782w,\n      /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg 1200w\n    ",sizes:"(max-width: 768px) 100vw, 50vw",src:"/img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg",alt:"Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000","blank-color":"#f7f6f9"}}),a("div",{staticClass:"card-body text-center"},[a("h3",{staticClass:"h4 card-title"},[t._v(" Alternative Jobs und Berufsbilder für MFA / ZFA ")]),a("p",{staticClass:"card-text"},[t._v(" Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und Berufen inklusive vieler Alternativen für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte | ArzthelferInnen! ")]),a("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder",variant:"primary"}},[t._v("Mehr erfahren!")])],1)],1)},s=[],r={name:"BerufsbilderBanner"},n=r,l=a("2877"),o=Object(l["a"])(n,i,s,!1,null,null,null);e["a"]=o.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,r=a("1dde"),n=r("map");i({target:"Array",proto:!0,forced:!n},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},dd0d:function(t,e,a){},df14:function(t,e,a){"use strict";a("04f1")},e6c7:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var i=a("c637"),s=a("0056"),r=a("9bfa"),n=a("906c"),l=a("6b77"),o=a("7b1e"),c=a("d82f"),u=Object(l["d"])(i["R"],s["K"]),d="__bv_modal_directive__",b=function(t){var e=t.modifiers,a=void 0===e?{}:e,i=t.arg,s=t.value;return Object(o["n"])(s)?s:Object(o["n"])(i)?i:Object(c["h"])(a).reverse()[0]},h=function(t){return t&&Object(n["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(n["C"])("a, button",t)||t},g=function(t){t&&"BUTTON"!==t.tagName&&(Object(n["o"])(t,"role")||Object(n["E"])(t,"role","button"),"A"===t.tagName||Object(n["o"])(t,"tabindex")||Object(n["E"])(t,"tabindex","0"))},p=function(t,e,a){var i=b(e),o=h(t);if(i&&o){var c=function(t){var e=t.currentTarget;if(!Object(n["r"])(e)){var s=t.type,l=t.keyCode;"click"!==s&&("keydown"!==s||l!==r["e"]&&l!==r["l"])||a.context.$root.$emit(u,i,e)}};t[d]={handler:c,target:i,trigger:o},g(o),Object(l["b"])(o,"click",c,s["R"]),"BUTTON"!==o.tagName&&"button"===Object(n["h"])(o,"role")&&Object(l["b"])(o,"keydown",c,s["R"])}},f=function(t){var e=t[d]||{},a=e.trigger,i=e.handler;a&&i&&(Object(l["a"])(a,"click",i,s["R"]),Object(l["a"])(a,"keydown",i,s["R"]),Object(l["a"])(t,"click",i,s["R"]),Object(l["a"])(t,"keydown",i,s["R"])),delete t[d]},m=function(t,e,a){var i=t[d]||{},s=b(e),r=h(t);s===i.target&&r===i.trigger||(f(t,e,a),p(t,e,a)),g(r)},v=function(){},w={inserted:m,updated:v,componentUpdated:m,unbind:f}},fa1a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jobboard"},[i("div",{staticClass:"title"},[i("h1",[t._v(" "+t._s("Stellenangebote"+(t.berufsgruppe.active.length>0?" – "+t.berufsgruppe.active.join(" & "):"")+" ")+t._s(t.filter.ort?" | "+t.filter.ort:"")+" ")]),i("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:t.breadcrumbs}})],1),i("div",{staticClass:"container py-3 py-lg-4"},[i("div",{staticClass:"row mt-2"},[i("div",{staticClass:"col-12 col-lg-4 pt-2 px-2 pr-lg-5"},[i("b-form",{attrs:{id:"job-filter"},on:{submit:function(e){return e.preventDefault(),function(){t.getJobs(),t.setQuery()}.apply(null,arguments)}}},[i("label",{staticClass:"sr-only",attrs:{for:"location-jobboard"}},[t._v("Ort / PLZ")]),i("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[i("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])])]},proxy:!0}])},[i("b-form-input",{attrs:{id:"location-jobboard",type:"text",placeholder:"PLZ oder Ort...",trim:"",lazy:"",formatter:t.capitalize},model:{value:t.filter.ort,callback:function(e){t.$set(t.filter,"ort",e)},expression:"filter.ort"}}),i("b-input-group-append",[i("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.ort="",t.getJobs(),t.setQuery()}.apply(null,arguments)}}},[i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),i("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),i("label",{staticClass:"sr-only",attrs:{for:"radius"}},[t._v("Umkreisradius")]),i("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[i("svg",{staticClass:"bi bi-bullseye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),i("path",{attrs:{d:"M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}}),i("path",{attrs:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}),i("path",{attrs:{d:"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])])]},proxy:!0}])},[i("b-form-input",{attrs:{id:"radius",type:"number",min:"15",step:"5",placeholder:"Umkreis...",debounce:"500",number:"",trim:"",lazy:""},model:{value:t.filter.radius,callback:function(e){t.$set(t.filter,"radius",e)},expression:"filter.radius"}}),i("b-input-group-append",[i("b-input-group-text",{staticClass:"bg-light text-muted px-2"},[t._v("km")]),i("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.radius=null,t.getJobs(),t.setQuery()}.apply(null,arguments)}}},[i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),i("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),i("div",{staticClass:"text-primary  mt-3 mb-2 ml-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showAdvancedSearch=!t.showAdvancedSearch}}},[t._v(" Erweiterte Suche "),i("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":t.showAdvancedSearch}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),i("b-collapse",{staticClass:"mb-3",attrs:{id:"advanced-search"},model:{value:t.showAdvancedSearch,callback:function(e){t.showAdvancedSearch=e},expression:"showAdvancedSearch"}},[i("label",{staticClass:"sr-only",attrs:{for:"s-jobboard"}},[t._v("Suchbegriff")]),i("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[i("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})])])]},proxy:!0}])},[i("b-form-input",{class:t.filter.s?"border-secondary":"",attrs:{id:"s-jobboard",type:"text",placeholder:"Suchbegriff...",lazy:""},model:{value:t.filter.s,callback:function(e){t.$set(t.filter,"s",e)},expression:"filter.s"}}),i("b-input-group-append",[i("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.s="",t.getJobs(),t.setQuery()}.apply(null,arguments)}}},[i("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),i("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),i("label",{staticClass:"sr-only",attrs:{for:"employmentType-jobboard"}},[t._v("Anstellungsart")]),i("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[i("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[i("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),i("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])])]},proxy:!0}])},[i("b-form-select",{attrs:{id:"employmentType-jobboard"},on:{change:function(){t.getJobs(),t.setQuery()}},model:{value:t.filter.anstellungsart,callback:function(e){t.$set(t.filter,"anstellungsart",e)},expression:"filter.anstellungsart"}},[i("b-form-select-option",{attrs:{value:""}},[t._v("Alle Anstellungsarten")]),t._l(t.employmentTypeOptions,(function(e){return i("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2)],1),i("label",{staticClass:"mb-2 pl-2",attrs:{for:"profession-jobboard"}},[t._v("Berufsgruppe")]),i("b-form-group",{staticClass:"pl-2",attrs:{id:"profession-jobboard"}},[i("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.professionOptions,size:"sm",stacked:""},on:{change:function(){t.getJobs()}},model:{value:t.berufsgruppe.active,callback:function(e){t.$set(t.berufsgruppe,"active",e)},expression:"berufsgruppe.active"}})],1),i("label",{staticClass:"mt-0 mb-2 pl-2",staticStyle:{cursor:"pointer"},attrs:{for:"specialization-jobboard"},on:{click:function(e){t.specialization.visible=!t.specialization.visible}}},[t._v("Fachgebiete "),i("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":t.specialization.visible}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),i("BCollapse",{attrs:{visible:!0===t.specialization.visible,role:"tabpanel"}},[i("b-form-group",{staticClass:"pl-2",attrs:{id:"specialization-jobboard"},scopedSlots:t._u([{key:"label",fn:function(){return[i("b-form-checkbox",{attrs:{indeterminate:t.specialization.indeterminate,size:"sm",stacked:""},on:{change:t.toggleAll},model:{value:t.specialization.allSelected,callback:function(e){t.$set(t.specialization,"allSelected",e)},expression:"specialization.allSelected"}},[t._v(" "+t._s(t.specialization.allSelected?"Alle Abwählen":"Alle Auswählen")+" ")])]},proxy:!0}])},[i("b-form-checkbox-group",{staticClass:"ml-1",attrs:{options:t.specializationOptions.map((function(t){return{text:t,value:t}})),size:"sm",stacked:""},on:{change:function(){t.getJobs()}},model:{value:t.specialization.active,callback:function(e){t.$set(t.specialization,"active",e)},expression:"specialization.active"}})],1)],1)],1),i("div",[i("span",{staticClass:"text-danger small ml-2",staticStyle:{cursor:"pointer"},on:{click:t.resetFilter}},[t._v("Filter zurücksetzen")])]),i("div",{staticClass:"mt-2"},[i("b-button",{attrs:{variant:"success",type:"submit",block:""}},[i("svg",{staticClass:"bi bi-search mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),t._v("Jobs finden")])],1)],1),i("div",{staticClass:"small text-right mt-2 mb-2 pr-3 pt-1"},[i("b-link",{attrs:{to:"/fuer-arbeitgeber"}},[t._v("Stellenanzeige schalten")])],1),i("div",{staticClass:"mt-3 mt-lg-5 text-right text-lg-left"},[t.$config.starredJobs.active&&t.$store.state.auth.loggedIn&&t.$store.state.starredJobs.starredJobs&&t.$store.state.starredJobs.starredJobs.length>0?i("b-button",{attrs:{to:"/user/gespeicherte-stellenanzeigen",variant:"outline-secondary",size:"sm"}},[t._v("Meine gespeicherten Jobs")]):i("SubscribeNewsletterBtn",{staticClass:"mt-2 mr-1 d-flex justify-content-end justify-content-lg-start",attrs:{size:"sm",variant:"secondary"}})],1),i("div",{staticClass:"d-none d-lg-block mt-5"},[i("JobSeeksSmallBanner"),i("FacebookBtn",{staticClass:"mt-3 mr-1",attrs:{content:"Facebook",size:"sm"}}),i("InstagramBtn",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}}),i("TwitterBtn",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}})],1)],1),i("div",{staticClass:"col-12 col-lg-8 pt-2"},[t.errors&&t.errors.length>0?i("div",t._l(t.errors,(function(e,a){return i("p",{key:a},[t._v(" "+t._s(e.message)+" ")])})),0):t.jobs?t.jobs.length>0?i("div",{staticClass:"position-relative"},t._l(t.jobs,(function(t){return i("JobCard",{key:t._id,attrs:{job:t}})})),1):0===t.count?i("div",[t._v(" Leider konnten für die Anfrage aktuell keine Stellenangebote gefunden werden. ")]):t._e():i("div",t._l(25,(function(t){return i("JobCardPlaceholder",{key:t,staticClass:"mb-3"})})),1),i("div",{staticClass:"d-flex justify-content-center"},[t.jobs&&t.jobs.length<t.count?i("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.loadMoreJobs()}}},[t._v(" Weitere Laden ")]):t.loading?i("BSpinner",{attrs:{variant:"primary",label:"Lade weitere Stellenanzeigen..."}}):t._e()],1),i("div",{staticClass:"my-4 clearfix"},[i("h2",{staticClass:"h5 bold mb-3"},[t._v("Ihre Stellenanzeige hier?")]),i("b-img",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057"),alt:"Stellenanzeige wird auf MFA mal anders veröffentlicht"}}),i("p",[t._v(" Sie sind als attraktiver Arbeitergeber auf der Suche nach einer motivierten und kompetenten "),i("em",[t._v("Medizinischen Fachangestellten (MFA) | Zahnmedizinischen Fachangestellten (ZFA) | ArzthelferIn")]),t._v(t._s(t.$route.query.ort||t.$route.query.state?" in "+(t.$route.query.ort||t.$route.query.state):"")+"? Dann "),i("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[t._v("registrieren")]),t._v(" Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem Karriereportal. "),i("br"),i("b-link",{staticClass:"bold",attrs:{to:"/fuer-arbeitgeber"}},[t._v("Mehr erfahren")])],1)],1)])])]),i("div",{staticClass:"container"},[i("JobSeeksLargeBanner",{staticClass:"mt-2 mt-lg-3"}),i("TrainingCatalogueSmallBanner",{staticClass:"d-lg-none mt-3"})],1),i("div",{staticClass:"container-fluid bg-light-shade my-4 my-lg-5 px-0"},[i("div",{staticClass:"container py-4 py-lg-5"},[i("h2",{staticClass:"lead bold"},[t._v(" MFA & ZFA Jobs nach Stadt ")]),i("ul",{staticClass:"list-group list-group-flush mb-4"},[i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/berlin"}},[t._v(t._s(t.berufsgruppe.active.length>0?t.berufsgruppe.active.join(" & "):"MFA & ZFA")+" Jobs in Berlin "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/bremen"}},[t._v("MFA & ZFA Jobs in Bremen "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/dueseldorf"}},[t._v("MFA & ZFA Jobs in Düsseldorf "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/hamburg"}},[t._v("MFA & ZFA Jobs in Hamburg "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/hannover"}},[t._v("MFA & ZFA Jobs in Hannover "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/koeln"}},[t._v("MFA & ZFA Jobs in Köln "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/muenchen"}},[t._v("MFA & ZFA Jobs in München "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1),i("li",{staticClass:"list-group-item bg-light-shade"},[i("b-link",{attrs:{to:"/stellenangebote/ort/stuttgart"}},[t._v("MFA & ZFA Jobs in Stuttgart "),i("svg",{staticClass:"bi bi-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})])])],1)]),i("h2",{staticClass:"lead bold mt-4"},[t._v(" Auf der Suche nach Stellenangeboten für Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)? ")]),i("p",[t._v(" Stellenangebote für Medizinische Fachangestellte und Zahnmedizinische Fachangestellte gibt es im Internet zur Genüge. Wenn du als MFA & ZFA einen neuen Job suchst, könntest du in kürzester Zeit einen neuen Arbeitsplatz antreten. Nicht nur die Arztpraxen und Zahnarztpraxen, auch andere Arbeitgeber im Gesundheitswesen suchen händeringend nach Personal und haben viele attraktive Stellenangebote für Medizinische Fachangestellte und Zahnmedizinische Fachangestellte zu bieten. Mit unseren "),i("router-link",{attrs:{to:"/blog/artikel/4-tipps-wie-du-die-richtige-stelle-fuer-dich-findest"}},[i("strong",[t._v("4 Tipps, wie du die richtige Stelle für dich findest")])]),t._v(" zeigen wir Dir, worüber Du Dir im Vorhinein Gedanken machen und worauf Du bei der Stellensuche achten solltest. ")],1),i("p",[t._v(" Auf MFA mal anders findest Du passende Jobs für Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) von attraktiven Arbeitergebern in ganz Deutschland. Hier findest Du Stellenangebote in Vollzeit und Teilzeit in verschiedenen Fachgebieten. Außerdem hast Du die Möglichkeit, als ein "),i("router-link",{staticClass:"bold",attrs:{to:"/stellengesuche/info"}},[t._v("Stellengesuch als MFA | ZFA")]),t._v(" zu schalten und Dich von passenden Arbeitgebern ansprechen zu lassen. ")],1),i("h2",{staticClass:"lead bold mt-4"},[t._v(" Gehalt für Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) ")]),i("p",[t._v(" In unserem großen "),i("router-link",{staticClass:"bold",attrs:{to:"/karriere/mfa/gehalt"}},[t._v("Gehaltsreport für MFA")]),t._v(" oder "),i("router-link",{staticClass:"bold",attrs:{to:"/karriere/zfa/gehalt"}},[t._v("ZFA")]),t._v(" bekommst Du alle relevanten Informationen zu Gehaltstarifverträgen, Gehalt nach Bundesländern, Gehalt in Teilzeit oder Vollzeit und noch viel mehr. Zusätzlich kannst Du mit dem "),i("router-link",{staticClass:"bold",attrs:{to:"/karriere/mfa/gehalt#gehaltsrechner"}},[t._v("Gehaltsrechner für MFA")]),t._v(" bzw. dem "),i("router-link",{staticClass:"bold",attrs:{to:"/karriere/zfa/gehalt#gehaltsrechner"}},[t._v("Gehaltsrechner für ZFA")]),t._v(" herausfinden, wie viel Gehalt Dir laut aktuellem Tarifvertrag im Jahr "+t._s((new Date).getFullYear())+" mindestens zusteht. ")],1)])]),i("div",{staticClass:"container"},[i("div",{staticClass:"row mt-5 mb-3"},[i("div",{staticClass:"col-12 col-lg-4 mb-4"},[i("BerufsbilderBanner",{})],1),i("div",{staticClass:"col-12 col-lg-8 mb-4"},[i("div",{},[i("RandomTrainingsContainer",{attrs:{number:2}})],1)])]),i("div",{staticClass:"mt-5 mb-4"},[i("p",{staticClass:"small"},[t._v(" Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische Fachangestellte (MFA), Arzthelferin, Zahnmedizinische Fachangestellte (ZFA), ZMF, ZMV, MTRA in "),t._l(t.companyStateOptions,(function(e,a){return i("span",{key:e},[i("b-link",{attrs:{to:"/stellenangebote/ort/"+e.toLowerCase()},on:{click:function(){t.filter.ort=e,t.getJobs()}}},[t._v(t._s(e))]),a<t.companyStateOptions.length-1?i("span",[t._v(", ")]):t._e()],1)})),t._v(". ")],2)])]),i("ScrollToTopBtn"),i("Head",{attrs:{title:"Stellenangebote für "+t.berufsgruppe.active.join(" & ")+" | Jobs"+(t.filter.ort?" in "+t.filter.ort:""),desc:"Jobs für "+(t.berufsgruppe.active.includes("MFA")?"Medizinische Fachangestellte (MFA)":"")+(t.berufsgruppe.active.includes("MFA")&&t.berufsgruppe.active.includes("ZFA")?" & ":"")+(t.berufsgruppe.active.includes("ZFA")?"Zahnmedizinische Fachangestellte (ZFA)":"")+(t.filter.ort?" in "+t.filter.ort+" & Umgebung":"")+" ✓ Teilzeit | Vollzeit – MFA mal anders Stellenbörse",img:"",script:t.snippet}})],1)},s=[],r=a("5530"),n=a("2909"),l=a("1da1");a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}a("96cf"),a("d81d"),a("4de4"),a("99af"),a("8ba4"),a("a9e3"),a("a15b"),a("ac1f"),a("5319"),a("7db0"),a("fb6a");var c=a("2b0e"),u=a("01e3"),d=a("5843"),b=a("1ba6"),h=a("f0fa"),g=a("f810"),p=a("2bf9"),f=a("670c"),m=a("9b8e"),v=a("6df3"),w=a("a281"),y=a("230b"),C=a("448f"),x=a("e10e"),z=a("4e15"),k=a("f70e");c["default"].component("BSpinner",u["a"]),c["default"].component("BCollapse",d["a"]);var _={name:"Jobboard",components:{JobCard:h["a"],JobCardPlaceholder:g["a"],FacebookBtn:p["a"],InstagramBtn:f["a"],TwitterBtn:m["a"],RandomTrainingsContainer:v["a"],BerufsbilderBanner:w["a"],TrainingCatalogueSmallBanner:y["a"],JobSeeksLargeBanner:C["a"],JobSeeksSmallBanner:x["a"],SubscribeNewsletterBtn:z["a"],ScrollToTopBtn:k["a"]},data:function(){return{jobs:null,count:0,loading:!1,filter:{s:"",anstellungsart:"",ort:"",radius:null},specialization:{active:b["i"],visible:!1,allSelected:!0,indeterminate:!1},berufsgruppe:{active:this.$route.query.berufsgruppe?"object"===o(this.$route.query.berufsgruppe)?this.$route.query.berufsgruppe:[this.$route.query.berufsgruppe]:b["g"].map((function(t){return t.value}))},employmentTypeOptions:b["f"],showAdvancedSearch:!1,companyStateOptions:b["c"],specializationOptions:b["i"],professionOptions:b["g"],errors:null}},computed:{snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [{\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },{\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellenangebote",\n                  "item": "https://www.mfa-mal-anders.de/stellenangebote"\n              }'.concat(this.filter.ort?',{"@type": "ListItem","position": 3,"name": "'+this.filter.ort+'","item": "https://www.mfa-mal-anders.de/stellenangebote/ort/'+this.filter.ort.toLowerCase()+'"}':"","]\n            }")},{rel:"canonical",href:"".concat(this.$config.website.url,"/stellenangebote").concat(this.getCanonical()),id:"canonical"}]},breadcrumbs:function(){var t=[{text:"Home",to:"/"},{text:"Stellenangebote",to:"/stellenangebote"}];return this.filter.ort&&t.push({text:this.filter.ort,to:"/stellenangebote/ort/".concat(this.filter.ort.toLowerCase())}),t}},watch:{"specialization.active":function(t){0===t.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!1):t.length===this.specializationOptions.length?(this.specialization.indeterminate=!1,this.specialization.allSelected=!0):(this.specialization.indeterminate=!0,this.specialization.allSelected=!1)},"berufsgruppe.active":function(){this.setQuery()}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setFilter(),t.getJobs();case 2:case"end":return e.stop()}}),e)})))()},methods:{getJobs:function(){var t=arguments,e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var i,s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:null,s=t.length>1&&void 0!==t[1]?t[1]:null,1!=e.loading){a.next=4;break}return a.abrupt("return");case 4:return e.loading=!0,e.errors=null,e.jobs=s?e.jobs:null,a.prev=7,a.next=10,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(i,"\n                  skip: ").concat(s,'\n                  s: "').concat(e.filter.s,'"\n                  location: "').concat(e.filter.ort,'"\n                  radius: ').concat(Number.isInteger(e.filter.radius)?e.filter.radius:null,'\n                  employmentType: "').concat(e.filter.anstellungsart,'",\n                  specialization: "').concat(e.specialization.active.length===e.specializationOptions.length?"":"object"===o(e.specialization.active)?e.specialization.active.join("+"):e.specialization.active,'"\n                  profession: "').concat(e.berufsgruppe.active.length===e.professionOptions.length?"":"object"===o(e.berufsgruppe.active)?e.berufsgruppe.active.join("+"):e.berufsgruppe.active,'"\n                ) {\n                  jobs {\n                    _id\n                    title\n                    description\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    slug\n                    refreshFrequency\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                  count\n                }\n              }\n            ')}});case 10:if(r=a.sent,!r.data.errors){a.next=17;break}if(!r.data.errors.some((function(t){return"NO_LOCATION"==t.extensions.exception.code}))){a.next=16;break}return e.errors=r.data.errors,e.loading=!1,a.abrupt("return");case 16:throw new Error;case 17:e.jobs=[].concat(Object(n["a"])(e.jobs||""),Object(n["a"])(r.data.data.publicJobs.jobs)),e.count=r.data.data.publicJobs.count,a.next=24;break;case 21:a.prev=21,a.t0=a["catch"](7),e.$root.$bvToast.toast("Beim Laden der Stellenangebote ist ein Fehler aufgetreten. Bitte versuche die Seite neu zu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 24:e.loading=!1;case 25:case"end":return a.stop()}}),a,null,[[7,21]])})))()},loadMoreJobs:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.jobs&&t.jobs.length<t.count)){e.next=3;break}return e.next=3,t.getJobs(void 0,t.jobs.length);case 3:case"end":return e.stop()}}),e)})))()},setQuery:function(){var t=Object(r["a"])(Object(r["a"])({},this.filter),{},{ort:this.filter.ort.replace(/(\s)/g,"-").toLowerCase(),berufsgruppe:"object"===o(this.berufsgruppe.active)&&this.berufsgruppe.active.length===this.professionOptions.length?"":this.berufsgruppe.active});for(var e in t)t[e]||delete t[e];this.$router.replace({query:t,path:"/stellenangebote"}).catch((function(){}))},setFilter:function(){var t=this;if(this.filter={s:this.$route.query.s||"",anstellungsart:this.$route.query.anstellungsart||"",ort:this.capitalize("".concat(this.$route.params.location||this.$route.query.ort||"").concat(this.$route.query.state?" "+this.$route.query.state:"")).replace(/-/g," "),radius:parseInt(this.$route.query.radius)||null},this.$route.query.fachgebiet){var e=this.specializationOptions.find((function(e){return e.toLowerCase()==t.$route.query.fachgebiet}));this.specialization={active:[e],visible:!0,allSelected:!1,indeterminate:!0}}(this.$route.query.s||this.$route.query.anstellungsart||this.$route.query.berufsgruppe||this.$route.query.fachgebiet)&&(this.showAdvancedSearch=!0)},toggleAll:function(t){this.specialization.active=t?this.specializationOptions.slice():[],this.getJobs()},resetFilter:function(){this.filter={s:"",anstellungsart:"",ort:"",radius:null},this.specialization={active:this.specializationOptions,visible:!1,allSelected:!0,indeterminate:!1},this.berufsgruppe.active=this.professionOptions.map((function(t){return t.value})),this.setQuery(),this.getJobs()},capitalize:function(t){return t.replace(/(^[a-z]| [a-z]|-[a-z])/g,(function(t){return t.toUpperCase()}))},getCanonical:function(){var t="",e=this.$route.params.location||this.$route.query.ort||this.$route.query.state;return e&&(t+="/ort/"+e.toLowerCase()),this.$route.query.berufsgruppe&&(t+="?berufsgruppe="+this.$route.query.berufsgruppe),t}}},A=_,S=(a("df14"),a("2877")),F=Object(S["a"])(A,i,s,!1,null,null,null);e["default"]=F.exports},fdcd:function(t,e,a){"use strict";a("15f6")}}]);
//# sourceMappingURL=jobboard-legacy.37d412d1.js.map