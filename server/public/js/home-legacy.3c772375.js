(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"02ac":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/?s="+e.searchTerm+"&profession="+e.profession+"&location="+e.location)}}},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),a("b-input-group",[a("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:e.placeholder},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),a("b-input-group-append",[a("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/?s="+e.searchTerm+"&profession="+e.profession+"&location="+e.location}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"sr-only"},[e._v("Stellenangebote für MFA / ZFA finden")])])],1)],1)],1),e.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1):e._e()],1)},i=[],s={name:"SearchWidgetJob",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data:function(){return{searchTerm:""}}},n=s,l=a("2877"),c=Object(l["a"])(n,r,i,!1,null,null,null);t["a"]=c.exports},"234c":function(e,t,a){},"2bd1":function(e,t,a){"use strict";a("fc7c")},"300b":function(e,t,a){e.exports=a.p+"img/health_.7b347010.svg"},"400a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.jobs?a("div",[e.jobs.length>0?a("div",{class:["row","row-cols-"+e.cols,"row-cols-md-"+e.colsMd,"row-cols-lg-"+e.colsLg]},e._l(e.jobs,(function(t){return a("div",{key:t._id,staticClass:"col"},[a("JobCard",{attrs:{job:t,compact:e.compact}})],1)})),0):a("div",{class:["row","row-cols-"+e.cols,"row-cols-md-"+e.colsMd,"row-cols-lg-"+e.colsLg]},e._l(e.number,(function(t){return a("div",{key:t,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:e.compact}})],1)})),0),e.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/?s="+e.searchTerm+"&anstellungsart="+e.employmentType+"&berufsgruppe="+e.profession,variant:"outline-primary",size:"sm"}},[e._v("Weitere")])],1):e._e()]):e._e()},i=[],s=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),a("c452")),l=a("b6d4"),c={name:"JobListTeaser",components:{JobCard:n["a"],JobCardPlaceholder:l["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data:function(){return{jobs:[]}},mounted:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(e.number,'\n                  s: "').concat(e.searchTerm,'"\n                  employmentType: "').concat(e.employmentType,'"\n                  profession: "').concat(e.profession,'"\n                  position: { \n                    lat: ').concat(e.location&&e.location.geoCodeLat?e.location.geoCodeLat:null,",\n                    lng: ").concat(e.location&&e.location.geoCodeLng?e.location.geoCodeLng:null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 3:if(a=t.sent,!a.data.errors){t.next=6;break}throw new Error;case 6:e.jobs=a.data.data.publicJobs.jobs||null,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},o=c,d=a("2877"),u=Object(d["a"])(o,r,i,!1,null,null,null);t["a"]=u.exports},"4fef":function(e,t,a){e.exports=a.p+"img/calendar.beda8b1d.svg"},"572e":function(e,t,a){e.exports=a.p+"img/medical_research.cc6659ef.svg"},6535:function(e,t,a){e.exports=a.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"664b":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},i=[],s=a("2b0e"),n=a("0942");s["default"].component("BSkeleton",n["a"]);var l={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,o=(a("dea4"),a("2877")),d=Object(o["a"])(c,r,i,!1,null,"30408d3e",null);t["a"]=d.exports},"6bea":function(e,t,a){},"6df9":function(e,t,a){e.exports=a.p+"img/coach.94fa3305.svg"},"7e71":function(e,t,a){"use strict";a("6bea")},a2be:function(e,t,a){},aedd:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.trainings?a("div",{staticClass:"row"},e._l(e.trainings,(function(t){return a("div",{key:t.slug,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===e.number?3:2)]},[a("TrainingCard",{attrs:{training:t}})],1)})),0):a("div",{staticClass:"row"},e._l(e.number,(function(t){return a("TrainingCardPlaceholder",{key:t,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===e.number?3:2)]})})),1)},i=[],s=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.training.title?a("article",{staticClass:"weiterbildung-card"},[a("div",{staticClass:"card"},[e.training.featuredImage.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:e.training.featuredImage.sourceUrl,alt:e.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):e._e(),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"text-reset stretched-link",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.training.slug,"aria-label":e.training.title}},[a("h2",{staticClass:"card-title h4"},[e._v(e._s(e.training.title))])]),a("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.training.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+e.training.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)]):e._e()}),l=[],c={name:"TrainingCard",props:{training:{type:Object,default:function(){}}}},o=c,d=(a("7e71"),a("2877")),u=Object(d["a"])(o,n,l,!1,null,"06e5f2ba",null),h=u.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},m=[],g=a("2b0e"),f=a("0942");g["default"].component("BSkeleton",f["a"]);var p={name:"TrainingCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},v=p,w=(a("ca98"),Object(d["a"])(v,b,m,!1,null,"da4e611e",null)),C=w.exports,x={name:"TrainingListRandom",components:{TrainingCard:h,TrainingCardPlaceholder:C},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(e,t){e!=t&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",e.number,', exclude: "').concat(e.$route.params.slug?e.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=t.sent,a.data.data.weiterbildungen){t.next=6;break}return t.abrupt("return");case 6:e.trainings=a.data.data.weiterbildungen,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},k=x,y=Object(d["a"])(k,r,i,!1,null,null,null);t["a"]=y.exports},b430:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.articles&&e.articles.length>0?a("div",{staticClass:"row"},e._l(e.articles,(function(t){return a("ArticleCard",{key:t.slug,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number],attrs:{article:t}})})),1):a("div",{staticClass:"row"},e._l(e.number,(function(t){return a("ArticleCardPlaceholder",{key:t,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number]})})),1)])},i=[],s=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),a("d4bc")),l=a("664b"),c={name:"ArticleListRandom",components:{ArticleCard:n["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:null}},watch:{$route:function(e,t){e!=t&&this.getArticles()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getArticles();case 1:case"end":return t.stop()}}),t)})))()},methods:{getArticles:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                articles(random: ".concat(!0,", limit: ",e.number,', exclude: "').concat(e.$route.params.slug?e.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=t.sent,a.data.data.articles){t.next=6;break}return t.abrupt("return");case 6:e.articles=a.data.data.articles,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},o=c,d=a("2877"),u=Object(d["a"])(o,r,i,!1,null,null,null);t["a"]=u.exports},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"container-fluid hero d-flex justify-content-center align-items-center"},[r("div",{staticClass:"container p-0",staticStyle:{"max-width":"850px"}},[e._m(0),r("SearchWidgetJob")],1)]),r("div",{staticClass:"container mt-4 mt-lg-0"},[r("JobListTeaser")],1),r("div",{staticClass:"container my-3 my-md-5 py-3 py-md-5"},[r("h2",{staticClass:"d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"},[e._v(" Deine berufliche Weiterentwicklung ")]),r("div",{staticClass:"row row-cols-1 row-cols-md-3 flex-lg-row-reverse"},[r("div",{staticClass:"col"},[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130","blank-width":"184","blank-height":"130",offset:"1000"}}),r("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),r("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),r("div",{staticClass:"col"},[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellengesuche/info"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("dfcd"),alt:"Stellengesuche für MFA & ZFA",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("h2",{staticClass:"bold"},[e._v("Stellengesuche für MFA & ZFA")]),r("p",[e._v(" Erstelle als MFA | ZFA Dein individuelles Stellengesuch und lasse Dich von Arbeitgebern mit passenden Angeboten finden. ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Stellengesuch erstellen")])],1)],1),r("div",{staticClass:"col"},[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("6df9"),alt:"MFA | ZFA studiert bei Weiterbildung",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),r("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)]),r("div",{staticClass:"mb-4"},[r("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("300b"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("div",[r("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),r("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1)],1),r("div",{staticClass:"mb-4"},[r("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("4fef"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("div",[r("h2",{staticClass:"bold"},[e._v("Fortbildungskatalog")]),r("p",[e._v(" Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zum Fortbildungskatalog")])],1)],1)],1)]),r("div",{staticClass:"container-fluid bg-primary text-light py-5"},[r("div",{staticClass:"container py-0 py-md-3"},[r("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),r("div",{staticClass:"row row-cols-1 row-cols-md-3"},[r("div",{staticClass:"col"},[r("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:a("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800","blank-width":"800","blank-height":"800","blank-color":"#f7f6f9",offset:"1000"}}),r("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. In Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),r("div",{staticClass:"col"},[r("p",[e._v(" Gesellschaft und Politik sprechen immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),r("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildung"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungs"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),r("div",{staticClass:"col"},[r("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),r("p",[r("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/artikel/warum-es-mfa-mal-anders-gibt"}},[r("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})]),e._v(" Mehr über die Story dahinter")])],1)])])])]),r("div",{staticClass:"container my-5 py-0 py-md-5 d-flex justify-content-center"},[r("BannerJobPublish")],1),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-5"},[r("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),r("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),r("p",[e._v(" Als Medizinische Fachangestelle | Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),r("p",[e._v(" Wir haben einige "),r("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für Dich zusammengestellt und erweitern die Auswahl stetig, sodass Du Dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),r("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),r("div",{staticClass:"col-12 col-md-8"},[r("TrainingListRandom",{attrs:{number:2}})],1)])]),r("div",{staticClass:"container-fluid bg-light-shade my-5 py-5 px-0"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),r("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),r("ArticleListRandom")],1)]),r("Head",{attrs:{title:"Das Karriereportal nur für MFA & ZFA",desc:"MFA mal anders ist dein Job- und Karriereportal speziell für ArzthelferIn | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)",img:"",script:e.snippet}})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[a("h1",[a("span",{staticClass:"bold display-2"},[e._v(" MFA "),a("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),a("br"),a("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),a("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),a("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)")]),e._v(". ")])])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"card overflow-hidden shadow1",staticStyle:{"max-width":"840px"}},[r("div",{staticClass:"row p-4"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body  h-100 p-4"},[e._m(0),e._m(1),r("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"md"}},[e._v("Stellenanzeige schalten")])],1)]),r("div",{staticClass:"col-md-4"},[r("b-img-lazy",{staticClass:"p-0 w-100 h-100",attrs:{src:a("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn","blank-width":"248","blank-height":"316",offset:"1000",fluid:""}})],1)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"h3 bold"},[a("em",[e._v("Motivierte")]),e._v(" und "),a("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Erstellen Sie "),a("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem "),a("strong",{staticClass:"text-primary"},[e._v("individuellen Paketen")]),e._v(" veröffentlichen Sie Ihre Stellenanzeige "),a("strong",{staticClass:"text-primary"},[e._v("unkompliziert und auf Ihren Bedarf abgestimmt")]),e._v(". ")])}],l={name:"BannerJobPublish"},c=l,o=a("2877"),d=Object(o["a"])(c,s,n,!1,null,null,null),u=d.exports,h=a("aedd"),b=a("b430"),m=a("400a"),g=a("02ac"),f={name:"Home",components:{BannerJobPublish:u,TrainingListRandom:h["a"],ArticleListRandom:b["a"],JobListTeaser:m["a"],SearchWidgetJob:g["a"]},data:function(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            }]\n          }'},{rel:"canonical",href:"".concat(this.$config.website.url),id:"canonical"}]}}},p=f,v=(a("e675"),Object(o["a"])(p,r,i,!1,null,"2cbb4eec",null));t["default"]=v.exports},ca98:function(e,t,a){"use strict";a("a2be")},d4bc:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"article-card"},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.article.featuredImage?e.article.featuredImage.srcSet:"",src:e.article.featuredImage?e.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:e.article.featuredImage?e.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"stretched-link",attrs:{to:"/blog/artikel/"+e.article.slug,"aria-label":e.article.title}},[a("h4",{staticClass:"card-title"},[e._v(e._s(e.article.title))])]),a("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[e.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.avatarUrl,alt:e.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),e.article.author.firstName?a("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.firstName)+" ")]):e._e()],1):e._e(),a("b-button",{attrs:{"aria-label":e.article.title,variant:"primary"}},[e._v("Weiterlesen")])],1)],1),e.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[e._v(e._s(e.article.tags[0]))]):e._e()],1)])},i=[],s={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},n=s,l=(a("2bd1"),a("2877")),c=Object(l["a"])(n,r,i,!1,null,"2e0598f8",null);t["a"]=c.exports},de4a:function(e,t,a){},dea4:function(e,t,a){"use strict";a("de4a")},dfcd:function(e,t,a){e.exports=a.p+"img/LinkedIn_Monochromatic.a4d7c979.svg"},e675:function(e,t,a){"use strict";a("234c")},fc51:function(e,t,a){e.exports=a.p+"img/career_.8a38acc4.svg"},fc7c:function(e,t,a){}}]);
//# sourceMappingURL=home-legacy.3c772375.js.map