(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-profession-single"],{"02ac":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{staticClass:"row mx-1",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.$router.push("/jobs?s="+t.searchTerm+"&berufsgruppe="+t.profession+"&ort="+(t.localLocation||t.location||"")))}}},[a("div",{staticClass:"col-12 col-lg-5 px-1 mb-2"},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[t._v("Suchbegriff")]),a("b-input-group",{staticClass:"shadow1 border-radius2",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})])])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"landing-search",size:t.size,placeholder:t.placeholder},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}})],1)],1),a("div",{staticClass:"col-12 col-lg-5 px-1 mb-2"},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-location"}},[t._v("PLZ / Ort")]),a("b-input-group",{staticClass:"shadow1 border-radius2",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])])]},proxy:!0}])},[a("b-form-input",{attrs:{id:"landing-location",size:t.size,placeholder:"PLZ / Ort..."},model:{value:t.localLocation,callback:function(e){t.localLocation=e},expression:"localLocation"}})],1)],1),a("div",{staticClass:"col-12 col-lg-2 px-1 mb-2"},[a("b-button",{staticClass:"shadow1 h-100",attrs:{"aria-label":"Suchen",size:t.size,variant:"secondary",block:"",to:"/jobs?s="+t.searchTerm+"&berufsgruppe="+t.profession+"&ort="+(t.localLocation||t.location||"")}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"d-lg-none ml-2"},[t._v("Suchen")])])],1)]),t.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 pl-3 small",attrs:{to:"/stellengesuche/info"}},[t._v(" Stellengesuch schalten ")])],1):t._e()],1)},n=[],s={name:"SearchWidgetJob",props:{size:{type:String,default:""},placeholder:{type:String,default:"Jobtitel, Stichwort..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data:function(){return{searchTerm:"",localLocation:""}}},i=s,o=a("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},1276:function(t,e,a){"use strict";var r=a("2ba4"),n=a("c65b"),s=a("e330"),i=a("d784"),o=a("44e7"),l=a("825a"),c=a("1d80"),u=a("4840"),d=a("8aa5"),p=a("50c4"),b=a("577e"),f=a("dc4a"),m=a("f36a"),h=a("14c3"),g=a("9263"),v=a("9f7f"),w=a("d039"),x=v.UNSUPPORTED_Y,y=4294967295,C=Math.min,k=[].push,_=s(/./.exec),S=s(k),j=s("".slice),T=!w((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));i("split",(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=b(c(this)),i=void 0===a?y:a>>>0;if(0===i)return[];if(void 0===t)return[s];if(!o(t))return n(e,s,t,i);var l,u,d,p=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,f+"g");while(l=n(g,v,s)){if(u=v.lastIndex,u>h&&(S(p,j(s,h,l.index)),l.length>1&&l.index<s.length&&r(k,p,m(l,1)),d=l[0].length,h=u,p.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return h===s.length?!d&&_(v,"")||S(p,""):S(p,j(s,h)),p.length>i?m(p,0,i):p}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:n(e,this,t,a)}:e,[function(e,a){var r=c(this),i=void 0==e?void 0:f(e,t);return i?n(i,e,r,a):n(s,b(r),e,a)},function(t,r){var n=l(this),i=b(t),o=a(s,n,i,r,s!==e);if(o.done)return o.value;var c=u(n,RegExp),f=n.unicode,m=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(x?"g":"y"),g=new c(x?"^(?:"+n.source+")":n,m),v=void 0===r?y:r>>>0;if(0===v)return[];if(0===i.length)return null===h(g,i)?[i]:[];var w=0,k=0,_=[];while(k<i.length){g.lastIndex=x?0:k;var T,L=h(g,x?j(i,k):i);if(null===L||(T=C(p(g.lastIndex+(x?k:0)),i.length))===w)k=d(i,k,f);else{if(S(_,j(i,w,k)),_.length===v)return _;for(var B=1;B<=L.length-1;B++)if(S(_,L[B]),_.length===v)return _;k=w=T}}return S(_,j(i,w)),_}]}),!T,x)},"400a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobs?a("div",[t.jobs.length>0?a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.jobs,(function(e){return a("div",{key:e._id,staticClass:"col"},[a("JobCard",{attrs:{job:e,compact:t.compact}})],1)})),0):a("div",{class:["row","row-cols-"+t.cols,"row-cols-md-"+t.colsMd,"row-cols-lg-"+t.colsLg]},t._l(t.number,(function(e){return a("div",{key:e,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:t.compact}})],1)})),0),t.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/jobs?s="+t.searchTerm+"&anstellungsart="+t.employmentType+"&berufsgruppe="+t.profession,variant:"outline-primary",size:"sm"}},[t._v("Weitere")])],1):t._e()]):t._e()},n=[],s=a("1da1"),i=(a("96cf"),a("a9e3"),a("99af"),a("c452")),o=a("b6d4"),l={name:"JobListTeaser",components:{JobCard:i["a"],JobCardPlaceholder:o["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data:function(){return{jobs:[]}},mounted:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(t.number,'\n                  s: "').concat(t.searchTerm,'"\n                  employmentType: "').concat(t.employmentType,'"\n                  profession: "').concat(t.profession,'"\n                  position: { \n                    lat: ').concat(t.location&&t.location.geoCodeLat?t.location.geoCodeLat:null,",\n                    lng: ").concat(t.location&&t.location.geoCodeLng?t.location.geoCodeLng:null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 3:if(a=e.sent,!a.data.errors){e.next=6;break}throw new Error;case 6:t.jobs=a.data.data.publicJobs.jobs||null,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},c=l,u=a("2877"),d=Object(u["a"])(c,r,n,!1,null,null,null);e["a"]=d.exports},"4bdb":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"card overflow-hidden shadow1"},[r("div",{staticClass:"row no-gutters p-3"},[t.compact?t._e():r("div",{staticClass:"col-md-3"},[r("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:a("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),r("div",{staticClass:"col"},[r("div",{staticClass:"card-body p-3 p-lg-4"},[r("h3",{class:["bold",t.compact?"h2":"h1"]},[t._v(t._s(t.header))]),t._t("desc",(function(){return[t._m(0)]})),r("b-button",{attrs:{to:"/jobs",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],2)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Bist Du auf der Suche nach einer "),a("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),a("br"),t._v(" Du willst Dich "),a("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),a("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],s={name:"BannerJobboard",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},i=s,o=(a("f928"),a("2877")),l=Object(o["a"])(i,r,n,!1,null,"5bb1a882",null);e["a"]=l.exports},"4fef":function(t,e,a){t.exports=a.p+"img/calendar.beda8b1d.svg"},"5aea":function(t,e,a){},"8bfd":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"d-flex justify-content-center"},[r("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[r("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[r("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:a("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),r("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[r("h3",{staticClass:"h6 bold mb-1"},[t._v(" Zum Fortbildungskatalog ")]),r("small",[t._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},n=[],s={name:"BannerTrainingCatalogueSmall"},i=s,o=a("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},a15b:function(t,e,a){"use strict";var r=a("23e7"),n=a("e330"),s=a("44ad"),i=a("fc6a"),o=a("a640"),l=n([].join),c=s!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(t){return l(i(this),void 0===t?",":t)}})},a2be:function(t,e,a){},a32c:function(t,e,a){},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},aedd:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("div",{key:e.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("TrainingCard",{attrs:{training:e}})],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("TrainingCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},n=[],s=a("1da1"),i=(a("96cf"),a("a9e3"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.training.title?a("article",{staticClass:"weiterbildung-card"},[a("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[a("p",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))])]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)]):t._e()}),o=[],l={name:"TrainingCard",props:{training:{type:Object,default:function(){}}}},c=l,u=(a("e50f"),a("2877")),d=Object(u["a"])(c,i,o,!1,null,"491446b8",null),p=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},f=[],m=a("2b0e"),h=a("0942");m["default"].component("BSkeleton",h["a"]);var g={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},v=g,w=(a("ca98"),Object(u["a"])(v,b,f,!1,null,"da4e611e",null)),x=w.exports,y={name:"TrainingListRandom",components:{TrainingCard:p,TrainingCardPlaceholder:x},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(t,e){t!=e&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.weiterbildungen){e.next=6;break}return e.abrupt("return");case 6:t.trainings=a.data.data.weiterbildungen,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},C=y,k=Object(u["a"])(C,r,n,!1,null,null,null);e["a"]=k.exports},ca31:function(t,e,a){t.exports=a.p+"img/search_engine__monochromatic.50ef63ab.svg"},ca98:function(t,e,a){"use strict";a("a2be")},d662:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.profession?a("div",[a("article",{staticClass:"profession"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.profession.title))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"container py-3 py-lg-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-4 order-2 order-lg-1"},[a("NavProfessions"),a("BannerTrainingCatalogueSmall",{staticClass:"my-3"})],1),a("div",{staticClass:"col-12 col-md-8 order-1 order-lg-2 mb-5"},[a("div",{domProps:{innerHTML:t._s(t.profession.content)}}),a("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder/"+t.profession.professionType.slug,size:"sm"}},[t._v("Zurück")]),a("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[a("SearchWidgetJob",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),a("JobListTeaser",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),a("BannerJobboard",{staticClass:"mt-5"})],1)])])]),a("div",{staticClass:"container"},[a("TrainingListRandom")],1),a("Head",{attrs:{title:t.profession.seo.title,desc:t.profession.seo.metaDesc,img:"",script:t.snippet}})],1):t._e()},n=[],s=a("1da1"),i=(a("96cf"),a("99af"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("fb6a"),a("b0c0"),a("ea4e")),o=a("8bfd"),l=a("aedd"),c=a("4bdb"),u=a("400a"),d=a("02ac"),p={name:"CareerProfessionItem",components:{NavProfessions:i["a"],BannerTrainingCatalogueSmall:o["a"],TrainingListRandom:l["a"],BannerJobboard:c["a"],JobListTeaser:u["a"],SearchWidgetJob:d["a"]},data:function(){return{profession:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "name": "MFA mal anders",\n                "item": "https://www.mfa-mal-anders.de"\n            },{\n                "@type": "ListItem",\n                "position": 2,\n                "name": "Karriere",\n                "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n                "@type": "ListItem",\n                "position": 3,\n                "name": "Jobs und Berufsbilder",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n            },{\n                "@type": "ListItem",\n                "position": 4,\n                "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join("-"),'",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,'"\n            },{\n                "@type": "ListItem",\n                "position": 5,\n                "name": "').concat(this.$route.params.profession.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join("-"),'",\n                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,"/").concat(this.$route.params.profession,'"\n            }]\n        }')}]}},computed:{breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.profession.professionType.name,to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.slug)},{text:this.profession?this.profession.title:"",to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.profession)}]}},watch:{"$route.params.profession":function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProfession();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getProfession()},methods:{getProfession:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                profession(slug: "'.concat(t.$route.params.profession,'") {\n                  title\n                  content\n                  professionType {\n                    name\n                    slug\n\n                  }\n                  seo {\n                    title\n                    metaDesc\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.profession){e.next=6;break}throw new Error;case 6:t.profession=a.data.data.profession,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$router.push("/karriere/jobs-und-berufsbilder");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},b=p,f=a("2877"),m=Object(f["a"])(b,r,n,!1,null,null,null);e["default"]=m.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e50f:function(t,e,a){"use strict";a("a32c")},ea4e:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"list-group"},[a("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v(" Jobs & Berufsbilder ")]),t._l(t.berufsbilderTypes,(function(e){return a("b-link",{key:e,staticClass:"list-group-item list-group-item-action",attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.toLowerCase(),active:e.toLowerCase()===t.$route.params.slug}},[t._v(t._s(e))])}))],2)},n=[],s={name:"NavProfessions",components:{},data:function(){return{berufsbilderTypes:["Beratung","Forschung","Management","Medizinisch-Technisch","Verwaltung"]}}},i=s,o=a("2877"),l=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports},f928:function(t,e,a){"use strict";a("5aea")}}]);
//# sourceMappingURL=career-profession-single-legacy.1a4651d8.js.map