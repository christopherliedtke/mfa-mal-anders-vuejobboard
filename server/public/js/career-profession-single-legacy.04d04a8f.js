(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-profession-single"],{"02ac":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.$router.push("/?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location)}}},[r("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[t._v("Suchbegriff")]),r("b-input-group",[r("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:t.placeholder},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),r("b-input-group-append",[r("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/?s="+t.searchTerm+"&profession="+t.profession+"&location="+t.location}},[r("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),r("span",{staticClass:"sr-only"},[t._v("Stellenangebote für MFA / ZFA finden")])])],1)],1)],1),t.showAdJobLink?r("div",{staticClass:"mt-2 text-right"},[r("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[t._v(" Stellenanzeige schalten ")])],1):t._e()],1)},n=[],s={name:"SearchWidgetJob",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data:function(){return{searchTerm:""}}},i=s,o=r("2877"),l=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=l.exports},1276:function(t,e,r){"use strict";var a=r("2ba4"),n=r("c65b"),s=r("e330"),i=r("d784"),o=r("44e7"),l=r("825a"),c=r("1d80"),u=r("4840"),d=r("8aa5"),p=r("50c4"),f=r("577e"),b=r("dc4a"),m=r("f36a"),h=r("14c3"),g=r("9263"),v=r("9f7f"),w=r("d039"),x=v.UNSUPPORTED_Y,y=4294967295,C=Math.min,k=[].push,_=s(/./.exec),S=s(k),j=s("".slice),T=!w((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));i("split",(function(t,e,r){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var s=f(c(this)),i=void 0===r?y:r>>>0;if(0===i)return[];if(void 0===t)return[s];if(!o(t))return n(e,s,t,i);var l,u,d,p=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,b+"g");while(l=n(g,v,s)){if(u=v.lastIndex,u>h&&(S(p,j(s,h,l.index)),l.length>1&&l.index<s.length&&a(k,p,m(l,1)),d=l[0].length,h=u,p.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return h===s.length?!d&&_(v,"")||S(p,""):S(p,j(s,h)),p.length>i?m(p,0,i):p}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:n(e,this,t,r)}:e,[function(e,r){var a=c(this),i=void 0==e?void 0:b(e,t);return i?n(i,e,a,r):n(s,f(a),e,r)},function(t,a){var n=l(this),i=f(t),o=r(s,n,i,a,s!==e);if(o.done)return o.value;var c=u(n,RegExp),b=n.unicode,m=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(x?"g":"y"),g=new c(x?"^(?:"+n.source+")":n,m),v=void 0===a?y:a>>>0;if(0===v)return[];if(0===i.length)return null===h(g,i)?[i]:[];var w=0,k=0,_=[];while(k<i.length){g.lastIndex=x?0:k;var T,B=h(g,x?j(i,k):i);if(null===B||(T=C(p(g.lastIndex+(x?k:0)),i.length))===w)k=d(i,k,b);else{if(S(_,j(i,w,k)),_.length===v)return _;for(var $=1;$<=B.length-1;$++)if(S(_,B[$]),_.length===v)return _;k=w=T}}return S(_,j(i,w)),_}]}),!T,x)},"400a":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.jobs?r("div",[t.jobs.length>0?r("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.jobs,(function(e){return r("div",{key:e._id,staticClass:"col"},[r("JobCard",{attrs:{job:e,compact:t.compact}})],1)})),0):r("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.number,(function(e){return r("div",{key:e,staticClass:"col"},[r("JobCardPlaceholder",{attrs:{compact:t.compact}})],1)})),0),t.showMoreBtn?r("div",{staticClass:"d-flex justify-content-end mt-2"},[r("b-button",{attrs:{to:"/?s="+t.searchTerm+"&anstellungsart="+t.employmentType+"&berufsgruppe="+t.profession,variant:"outline-primary",size:"sm"}},[t._v("Weitere")])],1):t._e()]):t._e()},n=[],s=r("1da1"),i=(r("96cf"),r("a9e3"),r("99af"),r("c452")),o=r("b6d4"),l={name:"JobListTeaser",components:{JobCard:i["a"],JobCardPlaceholder:o["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data:function(){return{jobs:[]}},mounted:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(t.number,'\n                  s: "').concat(t.searchTerm,'"\n                  employmentType: "').concat(t.employmentType,'"\n                  profession: "').concat(t.profession,'"\n                  position: { \n                    lat: ').concat(t.location&&t.location.geoCodeLat?t.location.geoCodeLat:null,",\n                    lng: ").concat(t.location&&t.location.geoCodeLng?t.location.geoCodeLng:null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 3:if(r=e.sent,!r.data.errors){e.next=6;break}throw new Error;case 6:t.jobs=r.data.data.publicJobs.jobs||null,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},c=l,u=r("2877"),d=Object(u["a"])(c,a,n,!1,null,null,null);e["a"]=d.exports},"4bdb":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1"},[a("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():a("div",{staticClass:"col-md-3"},[a("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:r("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"card-body p-3 p-lg-4"},[a("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),a("b-button",{attrs:{to:"/jobs",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Bist Du auf der Suche nach einer "),r("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),r("br"),t._v(" Du willst Dich "),r("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),r("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],s={name:"BannerJobboard",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},i=s,o=(r("f928"),r("2877")),l=Object(o["a"])(i,a,n,!1,null,"5bb1a882",null);e["a"]=l.exports},"4fef":function(t,e,r){t.exports=r.p+"img/calendar.beda8b1d.svg"},"5aea":function(t,e,r){},"6bea":function(t,e,r){},"7e71":function(t,e,r){"use strict";r("6bea")},"8bfd":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"d-flex justify-content-center"},[a("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[a("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[a("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:r("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),a("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[a("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),a("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},n=[],s={name:"BannerTrainingCatalogueSmall"},i=s,o=r("2877"),l=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=l.exports},a15b:function(t,e,r){"use strict";var a=r("23e7"),n=r("e330"),s=r("44ad"),i=r("fc6a"),o=r("a640"),l=n([].join),c=s!=Object,u=o("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(t){return l(i(this),void 0===t?",":t)}})},a2be:function(t,e,r){},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},aedd:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.trainings?r("div",{staticClass:"row"},t._l(t.trainings,(function(e){return r("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[r("TrainingCard",{attrs:{training:e}})],1)})),0):r("div",{staticClass:"row"},t._l(t.number,(function(e){return r("TrainingCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},n=[],s=r("1da1"),i=(r("96cf"),r("a9e3"),r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.training.title?r("article",{staticClass:"weiterbildung-card"},[r("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?r("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),r("div",{staticClass:"card-body"},[r("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[r("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))])]),r("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),r("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)]):t._e()}),o=[],l={name:"TrainingCard",props:{training:{type:Object,default:function(){}}}},c=l,u=(r("7e71"),r("2877")),d=Object(u["a"])(c,i,o,!1,null,"06e5f2ba",null),p=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[r("div",{staticClass:"card"},[r("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),r("div",{staticClass:"card-body"},[r("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),r("div",{staticClass:"mt-3"},[r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),r("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),r("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},b=[],m=r("2b0e"),h=r("0942");m["default"].component("BSkeleton",h["a"]);var g={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},v=g,w=(r("ca98"),Object(u["a"])(v,f,b,!1,null,"da4e611e",null)),x=w.exports,y={name:"TrainingListRandom",components:{TrainingCard:p,TrainingCardPlaceholder:x},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(t,e){t!=e&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(r=e.sent,r.data.data.weiterbildungen){e.next=6;break}return e.abrupt("return");case 6:t.trainings=r.data.data.weiterbildungen,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},C=y,k=Object(u["a"])(C,a,n,!1,null,null,null);e["a"]=k.exports},ca31:function(t,e,r){t.exports=r.p+"img/search_engine__monochromatic.50ef63ab.svg"},ca98:function(t,e,r){"use strict";r("a2be")},d662:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.profession?r("div",[r("article",{staticClass:"profession"},[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.profession.title))]),r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),r("div",{staticClass:"container py-3 py-lg-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-4 order-2 order-lg-1"},[r("NavProfessions"),r("BannerTrainingCatalogueSmall",{staticClass:"my-3"})],1),r("div",{staticClass:"col-12 col-md-8 order-1 order-lg-2 mb-5"},[r("div",{domProps:{innerHTML:t._s(t.profession.content)}}),r("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder/"+t.profession.professionType.slug,size:"sm"}},[t._v("Zurück")]),r("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[r("SearchWidgetJob",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),r("JobListTeaser",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),r("BannerJobboard",{staticClass:"mt-5"})],1)])])]),r("div",{staticClass:"container"},[r("TrainingListRandom")],1),r("Head",{attrs:{title:t.profession.seo.title,desc:t.profession.seo.metaDesc,img:"",script:t.snippet}})],1):t._e()},n=[],s=r("1da1"),i=(r("96cf"),r("99af"),r("a15b"),r("d81d"),r("ac1f"),r("1276"),r("fb6a"),r("b0c0"),r("ea4e")),o=r("8bfd"),l=r("aedd"),c=r("4bdb"),u=r("400a"),d=r("02ac"),p={name:"CareerProfessionItem",components:{NavProfessions:i["a"],BannerTrainingCatalogueSmall:o["a"],TrainingListRandom:l["a"],BannerJobboard:c["a"],JobListTeaser:u["a"],SearchWidgetJob:d["a"]},data:function(){return{profession:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "name": "MFA mal anders",\n                "item": "https://www.mfa-mal-anders.de"\n            },{\n                "@type": "ListItem",\n                "position": 2,\n                "name": "Karriere",\n                "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n                "@type": "ListItem",\n                "position": 3,\n                "name": "Jobs und Berufsbilder",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n            },{\n                "@type": "ListItem",\n                "position": 4,\n                "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join("-"),'",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,'"\n            },{\n                "@type": "ListItem",\n                "position": 5,\n                "name": "').concat(this.$route.params.profession.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join("-"),'",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,"/").concat(this.$route.params.profession,'"\n            }]\n        }')}]}},computed:{breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.profession.professionType.name,to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.slug)},{text:this.profession?this.profession.title:"",to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.profession)}]}},watch:{"$route.params.profession":function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProfession();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getProfession()},methods:{getProfession:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                profession(slug: "'.concat(t.$route.params.profession,'") {\n                  title\n                  content\n                  professionType {\n                    name\n                    slug\n\n                  }\n                  seo {\n                    title\n                    metaDesc\n                  }\n                }\n              }\n            ')}});case 3:if(r=e.sent,r.data.data.profession){e.next=6;break}throw new Error;case 6:t.profession=r.data.data.profession,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$router.push("/karriere/jobs-und-berufsbilder");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},f=p,b=r("2877"),m=Object(b["a"])(f,a,n,!1,null,null,null);e["default"]=m.exports},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,s=r("1dde"),i=s("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ea4e:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"list-group"},[r("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v(" Jobs & Berufsbilder ")]),t._l(t.berufsbilderTypes,(function(e){return r("b-link",{key:e,staticClass:"list-group-item list-group-item-action",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.toLowerCase(),active:e.toLowerCase()===t.$route.params.slug}},[t._v(t._s(e))])}))],2)},n=[],s={name:"NavProfessions",components:{},data:function(){return{berufsbilderTypes:["Beratung","Forschung","Management","Medizinisch-Technisch","Verwaltung"]}}},i=s,o=r("2877"),l=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=l.exports},f928:function(t,e,r){"use strict";r("5aea")}}]);
//# sourceMappingURL=career-profession-single-legacy.04d04a8f.js.map