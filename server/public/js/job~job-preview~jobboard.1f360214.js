(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job~job-preview~jobboard"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("2b0e"),s=a("b42e"),r=a("c637"),n=a("a723"),o=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=Object(o["c"])({animation:Object(o["b"])(n["s"],"wave"),height:Object(o["b"])(n["s"]),size:Object(o["b"])(n["s"]),type:Object(o["b"])(n["s"],"text"),variant:Object(o["b"])(n["s"]),width:Object(o["b"])(n["s"])},r["U"]),d=i["default"].extend({name:r["U"],functional:!0,props:l,render:function(t,e){var a,i=e.data,r=e.props,n=r.size,o=r.animation,l=r.variant;return t("div",Object(s["a"])(i,{staticClass:"b-skeleton",style:{width:n||r.width,height:n||r.height},class:(a={},c(a,"b-skeleton-".concat(r.type),!0),c(a,"b-skeleton-animate-".concat(o),o),c(a,"bg-".concat(l),l),a)}))}})},2715:function(t,e,a){},"2ca5":function(t,e,a){"use strict";a("2715")},"4b3a":function(t,e,a){},"4dae":function(t,e,a){},"4e15":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.auth.loggedIn&&t.$store.state.auth.user.isEmployee?a("b-button",{attrs:{to:"/user/dashboard?tab=6"}},[t._v(t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]):a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:t.variant,size:t.size}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),a("BModal",{ref:"subscribe-newsletter-modal2",attrs:{id:"subscribe-newsletter-modal2","hide-footer":"","hide-header":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":t.state},on:{close:function(e){return t.$refs["subscribe-newsletter-modal2"].hide()}}})],1)],1)},s=[],r=a("2b0e"),n=a("6aac"),o=a("e6c7"),c=a("e7ba");r["default"].component("BModal",n["a"]),r["default"].directive("b-modal",o["a"]);var l={name:"SubscribeNewsletterBtn",components:{NewsletterSignUpForm:c["a"]},props:{state:{type:String,default:""},variant:{type:String,default:"secondary"},size:{type:String,default:""}}},d=l,b=a("2877"),h=Object(b["a"])(d,i,s,!1,null,null,null);e["a"]=h.exports},"6df3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("div",{key:e.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,"aria-label":e.title}},[a("div",{staticClass:"card"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.featuredImage.node.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw",src:e.featuredImage.node.sourceUrl,alt:e.featuredImage.node.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(e.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1)])})),0)},s=[],r={name:"RandomTrainingsContainer",props:{number:{type:Number,default:3}},data(){return{trainings:Array}},watch:{$route(t,e){t!=e&&this.getTrainings()},"$store.state.trainings.trainings"(){this.getTrainings()}},created(){this.$store.dispatch("getTrainings"),this.getTrainings()},methods:{getRandom(t,e){var a=new Array(e),i=t.length,s=new Array(i);if(e>i)throw new RangeError("getRandom: more elements taken than available");while(e--){var r=Math.floor(Math.random()*i);a[e]=t[r in s?s[r]:r],s[r]=--i in s?s[i]:i}return a},getTrainings(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number>this.$store.state.trainings.trainings.length?this.$store.state.trainings.trainings.length:this.number))}}},n=r,o=(a("7725"),a("2877")),c=Object(o["a"])(n,i,s,!1,null,"7a470ba2",null);e["a"]=c.exports},7067:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$config.starredJobs.active?a("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar.apply(null,arguments)}}},[t.active?a("svg",{staticClass:"bi bi-star-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*t.size,height:15*t.size,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}})]):a("svg",{staticClass:"bi bi-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:15*t.size,height:15*t.size,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}})])]):t._e()},s=[],r={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:Number,default:1}},data(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs"(){this.checkStarredJobs()}},mounted(){this.checkStarredJobs()},methods:{checkStarredJobs(){this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some(t=>t.job===this.jobId)?this.active=!0:this.active=!1},async toggleStar(){this.$store.state.auth.loggedIn?this.active?(this.active=!1,await this.$store.dispatch("deleteStarredJob",this.jobId),this.$gtag.event("delete_starred_job",{event_label:this.jobId})):(this.active=!0,await this.$store.dispatch("addStarredJob",this.jobId),this.$gtag.event("add_starred_job",{event_label:this.jobId})):this.$store.commit("setStarJobModal",!0)}}},n=r,o=(a("af47"),a("2877")),c=Object(o["a"])(n,i,s,!1,null,"48ac9b66",null);e["a"]=c.exports},7725:function(t,e,a){"use strict";a("4b3a")},a06e:function(t,e,a){"use strict";a("be49")},af47:function(t,e,a){"use strict";a("4dae")},be49:function(t,e,a){},e6c7:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var i=a("c637"),s=a("0056"),r=a("9bfa"),n=a("906c"),o=a("6b77"),c=a("7b1e"),l=a("d82f"),d=Object(o["d"])(i["O"],s["P"]),b="__bv_modal_directive__",h=function(t){var e=t.modifiers,a=void 0===e?{}:e,i=t.arg,s=t.value;return Object(c["n"])(s)?s:Object(c["n"])(i)?i:Object(l["h"])(a).reverse()[0]},m=function(t){return t&&Object(n["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(n["C"])("a, button",t)||t},u=function(t){t&&"BUTTON"!==t.tagName&&(Object(n["o"])(t,"role")||Object(n["E"])(t,"role","button"),"A"===t.tagName||Object(n["o"])(t,"tabindex")||Object(n["E"])(t,"tabindex","0"))},p=function(t,e,a){var i=h(e),c=m(t);if(i&&c){var l=function(t){var e=t.currentTarget;if(!Object(n["r"])(e)){var s=t.type,o=t.keyCode;"click"!==s&&("keydown"!==s||o!==r["c"]&&o!==r["j"])||a.context.$root.$emit(d,i,e)}};t[b]={handler:l,target:i,trigger:c},u(c),Object(o["b"])(c,"click",l,s["V"]),"BUTTON"!==c.tagName&&"button"===Object(n["h"])(c,"role")&&Object(o["b"])(c,"keydown",l,s["V"])}},v=function(t){var e=t[b]||{},a=e.trigger,i=e.handler;a&&i&&(Object(o["a"])(a,"click",i,s["V"]),Object(o["a"])(a,"keydown",i,s["V"]),Object(o["a"])(t,"click",i,s["V"]),Object(o["a"])(t,"keydown",i,s["V"])),delete t[b]},g=function(t,e,a){var i=t[b]||{},s=h(e),r=m(t);s===i.target&&r===i.trigger||(v(t,e,a),p(t,e,a)),u(r)},f=function(){},w={inserted:g,updated:f,componentUpdated:g,unbind:v}},f0fa:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("article",{staticClass:"jobcard"},[a("b-link",{attrs:{to:"/stellenangebote/job/"+t.job._id+"/"+t.job.slug,target:"_self"}},[a("div",{class:["card",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("div",{staticClass:"card-text"},[a("div",{class:["card-head position-relative",t.job.refreshFrequency&&t.job.refreshFrequency<=7?"bg-secondary":"bg-primary"]},[a("h2",{class:["h4",{"mobile-max-width-75":t.job.company.logoUrl&&!t.compact},{bold:t.job.refreshFrequency&&t.job.refreshFrequency<=7}],style:t.compact?"font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap":"",domProps:{innerHTML:t._s(t.job.title)}}),a("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl&&!t.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{fluid:"",src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name,height:"70","blank-width":"70","blank-height":"70",offset:"500"}})],1):t._e()],1),t.compact?t._e():a("div",{staticClass:"card-content"},[a("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),t.compact?t._e():a("hr"),a("div",{staticClass:"card-foot",style:t.compact?"font-size:0.85rem; padding: 0.7rem":""},[t.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-building",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"}}),a("path",{attrs:{d:"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"}})])]),a("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):t._e(),t.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])]),t._v(" "+t._s(t.job.company.location)+" ")]):t._e(),t.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),a("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(e){return e.value===t.job.employmentType})).text)+" ")]):t._e(),t.compact||!t.job.salaryMin&&!t.job.salaryMax?t._e():a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!t.compact&&t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-activity",attrs:{xmlns:"http://www.w3.org/2000/svg",width:18+2*!t.compact,height:18+2*!t.compact,fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),t.job.simpleApplication?a("div",[a("div",{staticClass:"badge badge-pill badge-secondary"},[t._v(" # Einfach bewerben ")])]):t._e()])])])])],1):t._e()},s=[],r=a("1ba6"),n=a("7067"),o={name:"JobCard",components:{StarJob:n["a"]},props:{job:{type:Object,default:()=>{}},compact:{type:Boolean,default:!1}},data(){return{employmentTypeOptions:r["f"],companySizeOptions:r["b"]}}},c=o,l=(a("a06e"),a("2877")),d=Object(l["a"])(c,i,s,!1,null,"4d7f4098",null);e["a"]=d.exports},f810:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["job-card-placeholder",t.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0"]},[a("BSkeleton",{staticClass:"header",attrs:{height:t.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),t.compact?t._e():a("BSkeleton",{attrs:{height:"1px"}}),t.compact?t._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},s=[],r=a("2b0e"),n=a("0942");r["default"].component("BSkeleton",n["a"]);var o={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=o,l=(a("2ca5"),a("2877")),d=Object(l["a"])(c,i,s,!1,null,"534ac5f8",null);e["a"]=d.exports}}]);
//# sourceMappingURL=job~job-preview~jobboard.1f360214.js.map