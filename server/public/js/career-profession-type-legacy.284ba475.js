(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-profession-type"],{"02ac":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.$router.push("/stellenangebote?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location)}}},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[t._v("Suchbegriff")]),a("b-input-group",[a("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:t.placeholder},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),a("b-input-group-append",[a("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/stellenangebote?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"sr-only"},[t._v("Stellenangebote für MFA / ZFA finden")])])],1)],1)],1),t.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[t._v(" Stellenanzeige schalten ")])],1):t._e()],1)},r=[],s={name:"SearchWidgetJob",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data:function(){return{searchTerm:""}}},i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},1276:function(t,e,a){"use strict";var n=a("2ba4"),r=a("c65b"),s=a("e330"),i=a("d784"),o=a("44e7"),l=a("825a"),c=a("1d80"),u=a("4840"),d=a("8aa5"),p=a("50c4"),f=a("577e"),b=a("dc4a"),m=a("f36a"),g=a("14c3"),h=a("9263"),v=a("9f7f"),y=a("d039"),w=v.UNSUPPORTED_Y,x=4294967295,C=Math.min,_=[].push,k=s(/./.exec),T=s(_),S=s("".slice),j=!y((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));i("split",(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=f(c(this)),i=void 0===a?x:a>>>0;if(0===i)return[];if(void 0===t)return[s];if(!o(t))return r(e,s,t,i);var l,u,d,p=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,b+"g");while(l=r(h,v,s)){if(u=v.lastIndex,u>g&&(T(p,S(s,g,l.index)),l.length>1&&l.index<s.length&&n(_,p,m(l,1)),d=l[0].length,g=u,p.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return g===s.length?!d&&k(v,"")||T(p,""):T(p,S(s,g)),p.length>i?m(p,0,i):p}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:r(e,this,t,a)}:e,[function(e,a){var n=c(this),i=void 0==e?void 0:b(e,t);return i?r(i,e,n,a):r(s,f(n),e,a)},function(t,n){var r=l(this),i=f(t),o=a(s,r,i,n,s!==e);if(o.done)return o.value;var c=u(r,RegExp),b=r.unicode,m=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(w?"g":"y"),h=new c(w?"^(?:"+r.source+")":r,m),v=void 0===n?x:n>>>0;if(0===v)return[];if(0===i.length)return null===g(h,i)?[i]:[];var y=0,_=0,k=[];while(_<i.length){h.lastIndex=w?0:_;var j,B=g(h,w?S(i,_):i);if(null===B||(j=C(p(h.lastIndex+(w?_:0)),i.length))===y)_=d(i,_,b);else{if(T(k,S(i,y,_)),k.length===v)return k;for(var J=1;J<=B.length-1;J++)if(T(k,B[J]),k.length===v)return k;_=y=j}}return T(k,S(i,y)),k}]}),!j,w)},2101:function(t,e,a){},"400a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobs?a("div",[t.jobs.length>0?a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.jobs,(function(e){return a("div",{key:e._id,staticClass:"col"},[a("JobCard",{attrs:{job:e,compact:t.compact}})],1)})),0):a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.number,(function(e){return a("div",{key:e,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:t.compact}})],1)})),0),t.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/stellenangebote?s="+t.searchTerm+"&employmentType="+t.employmentType+"&profession="+t.profession,variant:"outline-primary",size:"sm"}},[t._v("Weitere")])],1):t._e()]):t._e()},r=[],s=a("1da1"),i=(a("96cf"),a("a9e3"),a("99af"),a("c452")),o=a("b6d4"),l={name:"JobListTeaser",components:{JobCard:i["a"],JobCardPlaceholder:o["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data:function(){return{jobs:[]}},mounted:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(t.number,'\n                  s: "').concat(t.searchTerm,'"\n                  employmentType: "').concat(t.employmentType,'"\n                  profession: "').concat(t.profession,'"\n                  position: { \n                    lat: ').concat(t.location&&t.location.geoCodeLat?t.location.geoCodeLat:null,",\n                    lng: ").concat(t.location&&t.location.geoCodeLng?t.location.geoCodeLng:null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 3:if(a=e.sent,!a.data.errors){e.next=6;break}throw new Error;case 6:t.jobs=a.data.data.publicJobs.jobs||null,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},c=l,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);e["a"]=d.exports},"468f":function(t,e,a){"use strict";a("2101")},"4bdb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"card overflow-hidden shadow1"},[n("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():n("div",{staticClass:"col-md-3"},[n("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:a("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),n("div",{staticClass:"col"},[n("div",{staticClass:"card-body p-3 p-lg-4"},[n("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),n("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Bist Du auf der Suche nach einer "),a("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),a("br"),t._v(" Du willst Dich "),a("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),a("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],s={name:"BannerJobboard",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},i=s,o=(a("fe1f"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,"17ec15da",null);e["a"]=l.exports},"4fef":function(t,e,a){t.exports=a.p+"img/calendar.beda8b1d.svg"},5612:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.professions?a("div",{staticClass:"berufsbild-type"},[a("div",{staticClass:"title"},[a("h1",[t._v("MFA & ZFA Berufsbilder – "+t._s(t.professions[0].professionType.name))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"container py-3 py-lg-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("NavProfessions"),a("BannerTrainingCatalogueSmall",{staticClass:"my-3"})],1),a("div",{staticClass:"col-12 col-md-8 mb-5"},[t.professions[0].professionType.description?a("div",{staticClass:"mb-4",domProps:{innerHTML:t._s(t.professions[0].professionType.description)}}):t._e(),a("nav",{staticClass:"list-group"},t._l(t.professions,(function(e){return a("div",{key:e.slug,staticClass:"list-group-item mb-0 p-3",staticStyle:{"font-size":"larger",color:"inherit"},attrs:{id:e.slug}},[e.content?a("b-link",{staticClass:"bold text-primary hover-text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.professionType.slug+"/"+e.slug}},[t._v(" "+t._s(e.title)+" "),a("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]):a("span",{staticClass:"text-muted"},[t._v(t._s(e.title))])],1)})),0),a("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[a("SearchWidgetJob",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),a("JobListTeaser",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),a("BannerJobboard",{staticClass:"mt-5"})],1)]),a("TrainingListRandom",{staticClass:"mt-5"})],1),a("Head",{attrs:{title:"MFA & ZFA Berufsbilder – "+t.professions[0].professionType.name,desc:t.professions[0].professionType.metaDesc,img:"",script:t.snippet}})],1):t._e()},r=[],s=a("1da1"),i=(a("96cf"),a("99af"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("fb6a"),a("b0c0"),a("ea4e")),o=a("aedd"),l=a("4bdb"),c=a("400a"),u=a("02ac"),d=a("8bfd"),p={name:"CareerBerufsbildType",components:{NavProfessions:i["a"],TrainingListRandom:o["a"],BannerJobboard:l["a"],JobListTeaser:c["a"],SearchWidgetJob:u["a"],BannerTrainingCatalogueSmall:d["a"]},data:function(){return{professions:null,visible:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "name": "MFA mal anders",\n                "item": "https://www.mfa-mal-anders.de"\n            },{\n                "@type": "ListItem",\n                "position": 2,\n                "name": "Karriere",\n                "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n                "@type": "ListItem",\n                "position": 3,\n                "name": "Jobs und Berufsbilder",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n            },{\n                "@type": "ListItem",\n                "position": 4,\n                "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join("-"),'",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,'"\n            }]\n          }')}]}},computed:{breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.professions[0].professionType.name,to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.slug)}]}},watch:{"$route.params.slug":function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProfessions();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getProfessions()},methods:{getProfessions:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                professions(type: "'.concat(t.$route.params.slug,'") {\n                  title\n                  content\n                  slug\n                  professionType {\n                    name\n                    description\n                    slug\n                    metaDesc\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.professions){e.next=6;break}return e.abrupt("return");case 6:t.professions=a.data.data.professions,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},setVisible:function(t){this.visible===t?this.visible=null:this.visible=t}}},f=p,b=a("2877"),m=Object(b["a"])(f,n,r,!1,null,null,null);e["default"]=m.exports},"8bfd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"d-flex justify-content-center"},[n("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[n("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[n("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:a("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),n("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[n("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),n("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},r=[],s={name:"BannerTrainingCatalogueSmall"},i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},a15b:function(t,e,a){"use strict";var n=a("23e7"),r=a("e330"),s=a("44ad"),i=a("fc6a"),o=a("a640"),l=r([].join),c=s!=Object,u=o("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(t){return l(i(this),void 0===t?",":t)}})},a2be:function(t,e,a){},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},aedd:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("TrainingCard",{attrs:{training:e}})],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("TrainingCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},r=[],s=a("1da1"),i=(a("96cf"),a("a9e3"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.training.title?a("article",{staticClass:"weiterbildung-card"},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[a("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1):t._e()}),o=[],l={name:"TrainingCard",props:{training:{type:Object,default:function(){}}}},c=l,u=(a("468f"),a("2877")),d=Object(u["a"])(c,i,o,!1,null,"6b040cbb",null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},b=[],m=a("2b0e"),g=a("0942");m["default"].component("BSkeleton",g["a"]);var h={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},v=h,y=(a("ca98"),Object(u["a"])(v,f,b,!1,null,"da4e611e",null)),w=y.exports,x={name:"TrainingListRandom",components:{TrainingCard:p,TrainingCardPlaceholder:w},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(t,e){t!=e&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.weiterbildungen){e.next=6;break}return e.abrupt("return");case 6:t.trainings=a.data.data.weiterbildungen,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},C=x,_=Object(u["a"])(C,n,r,!1,null,null,null);e["a"]=_.exports},ca31:function(t,e,a){t.exports=a.p+"img/search_engine__monochromatic.50ef63ab.svg"},ca98:function(t,e,a){"use strict";a("a2be")},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,s=a("1dde"),i=s("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},ea4e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"list-group"},[a("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v(" Jobs & Berufsbilder ")]),t._l(t.berufsbilderTypes,(function(e){return a("b-link",{key:e,staticClass:"list-group-item list-group-item-action",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.toLowerCase(),active:e.toLowerCase()===t.$route.params.slug}},[t._v(t._s(e))])}))],2)},r=[],s={name:"NavProfessions",components:{},data:function(){return{berufsbilderTypes:["Beratung","Forschung","Management","Medizinisch-Technisch","Verwaltung"]}}},i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},f8ea:function(t,e,a){},fe1f:function(t,e,a){"use strict";a("f8ea")}}]);
//# sourceMappingURL=career-profession-type-legacy.284ba475.js.map