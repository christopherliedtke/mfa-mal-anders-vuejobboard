(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"15f6":function(e,t,a){},1744:function(e,t,a){"use strict";a("70f3")},"215b":function(e,t,a){"use strict";a("dd0d")},"300b":function(e,t,a){e.exports=a.p+"img/health_.7b347010.svg"},"3c2c":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+e.article.slug,"aria-label":e.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.article.featuredImage?e.article.featuredImage.node.srcSet:"",src:e.article.featuredImage?e.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:e.article.featuredImage?e.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[e._v(e._s(e.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[e.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.node.avatar.url,alt:e.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),e.article.author.node.name?a("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.node.name)+" ")]):e._e()],1):e._e(),a("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1)]),e.article.tags.nodes.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[e._v(e._s(e.article.tags.nodes[0].name))]):e._e()],1)])],1)},s=[],r={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},n=r,l=(a("f7b5"),a("2877")),c=Object(l["a"])(n,i,s,!1,null,"116d1e3d",null);t["a"]=c.exports},"4fef":function(e,t,a){e.exports=a.p+"img/calendar.beda8b1d.svg"},"572e":function(e,t,a){e.exports=a.p+"img/medical_research.5571fe9d.svg"},6535:function(e,t,a){e.exports=a.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"68b7":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.jobs?a("div",[e.jobs.length>0?a("div",{class:["row","row-cols-"+e.cols,"row-cols-md-"+e.colsMd,"row-cols-lg-"+e.colsLg]},e._l(e.jobs,(function(t){return a("div",{key:t._id,staticClass:"col"},[a("JobCard",{attrs:{job:t,compact:e.compact}})],1)})),0):a("div",{class:["row","row-cols-"+e.cols,"row-cols-md-"+e.colsMd,"row-cols-lg-"+e.colsLg]},e._l(e.number,(function(t){return a("div",{key:t,staticClass:"col"},[a("JobCardPlaceholder",{attrs:{compact:e.compact}})],1)})),0),e.showMoreBtn?a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("b-button",{attrs:{to:"/stellenangebote?s="+e.searchTerm+"&employmentType="+e.employmentType+"&profession="+e.profession,variant:"outline-primary",size:"sm"}},[e._v("Weitere")])],1):e._e()]):e._e()},s=[],r=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),a("f0fa")),l=a("f810"),c={name:"JobsTeaserContainer",components:{JobCard:n["a"],JobCardPlaceholder:l["a"]},props:{number:{type:Number,default:3},compact:{type:Boolean,default:!0},searchTerm:{type:String,default:""},employmentType:{type:String,default:""},profession:{type:String,default:""},location:{type:Object,default:null},showMoreBtn:{type:Boolean,default:!0},cols:{type:Number,default:1},colsMd:{type:Number,default:3},colsLg:{type:Number,default:3}},data:function(){return{jobs:[]}},mounted:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                publicJobs (\n                  limit: ".concat(e.number,'\n                  s: "').concat(e.searchTerm,'"\n                  employmentType: "').concat(e.employmentType,'"\n                  profession: "').concat(e.profession,'"\n                  position: { \n                    lat: ').concat(e.location&&e.location.geoCodeLat?e.location.geoCodeLat:null,",\n                    lng: ").concat(e.location&&e.location.geoCodeLng?e.location.geoCodeLng:null,"\n                  }\n                ) {\n                  jobs {\n                    _id\n                    title\n                    description\n                    profession\n                    employmentType\n                    specialization\n                    salaryMin\n                    salaryMax\n                    refreshFrequency\n                    slug\n                    company {\n                      name\n                      location\n                      logoUrl\n                    }\n                  }\n                }\n              }\n            ")}});case 3:if(a=t.sent,!a.data.errors){t.next=6;break}throw new Error;case 6:e.jobs=a.data.data.publicJobs.jobs||null,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},o=c,d=a("2877"),u=Object(d["a"])(o,i,s,!1,null,null,null);t["a"]=u.exports},"6df3":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.trainings?a("div",{staticClass:"row"},e._l(e.trainings,(function(t){return a("article",{key:t.id,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===e.number?3:2)]},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.slug,"aria-label":t.title}},[a("div",{staticClass:"card"},[t.featuredImage.node.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.featuredImage.node.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw",src:t.featuredImage.node.sourceUrl,alt:t.featuredImage.node.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):e._e(),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[e._v(e._s(t.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:e._s(t.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)])],1)})),0):a("div",{staticClass:"row"},e._l(e.number,(function(t){return a("WeiterbildungCardPlaceholder",{key:t,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===e.number?3:2)]})})),1)},s=[],r=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])}),n=[],l=a("2b0e"),c=a("0942");l["default"].component("BSkeleton",c["a"]);var o={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},d=o,u=(a("215b"),a("2877")),h=Object(u["a"])(d,r,n,!1,null,"773bc4fc",null),b=h.exports,m={name:"RandomTrainingsContainer",components:{WeiterbildungCardPlaceholder:b},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(e,t){e!=t&&this.getTrainings()},"$store.state.trainings.trainings":function(){this.getTrainings()}},created:function(){this.$store.dispatch("getTrainings"),this.getTrainings()},methods:{getRandom:function(e,t){var a=new Array(t),i=e.length,s=new Array(i);if(t>i)throw new RangeError("getRandom: more elements taken than available");while(t--){var r=Math.floor(Math.random()*i);a[t]=e[r in s?s[r]:r],s[r]=--i in s?s[i]:i}return a},getTrainings:function(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number>this.$store.state.trainings.trainings.length?this.$store.state.trainings.trainings.length:this.number))}}},g=m,f=(a("fdcd"),Object(u["a"])(g,i,s,!1,null,"4a77e4b8",null));t["a"]=f.exports},"6df9":function(e,t,a){e.exports=a.p+"img/coach.94fa3305.svg"},"70f3":function(e,t,a){},"78bf":function(e,t,a){"use strict";a("c6be")},"7b34":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm+"&profession="+e.profession+"&location="+e.location)}}},[a("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),a("b-input-group",[a("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:e.placeholder},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),a("b-input-group-append",[a("b-button",{staticClass:"shadow1",attrs:{"aria-label":"Suchen",size:"lg",variant:"secondary",to:"/stellenangebote?s="+e.searchTerm+"&profession="+e.profession+"&location="+e.location}},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",{staticClass:"sr-only"},[e._v("Stellenangebote für MFA / ZFA finden")])])],1)],1)],1),e.showAdJobLink?a("div",{staticClass:"mt-2 text-right"},[a("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1):e._e()],1)},s=[],r={name:"JobSearchSingleForm",props:{placeholder:{type:String,default:"Stelle finden..."},showAdJobLink:{type:Boolean,default:!0},profession:{type:String,default:""},location:{type:String,default:""}},data:function(){return{searchTerm:""}}},n=r,l=a("2877"),c=Object(l["a"])(n,i,s,!1,null,null,null);t["a"]=c.exports},ab2f:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},s=[],r=a("2b0e"),n=a("0942");r["default"].component("BSkeleton",n["a"]);var l={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,o=(a("78bf"),a("2877")),d=Object(o["a"])(c,i,s,!1,null,"d6454454",null);t["a"]=d.exports},bb51:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"container-fluid hero d-flex justify-content-center align-items-center"},[i("div",{staticClass:"container p-0",staticStyle:{"max-width":"850px"}},[e._m(0),i("JobSearchSingleForm")],1)]),i("div",{staticClass:"container mt-4 mt-lg-0"},[i("JobsTeaserContainer")],1),i("div",{staticClass:"container my-3 my-md-5 py-3 py-md-5"},[i("h2",{staticClass:"d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"},[e._v(" Deine berufliche Weiterentwicklung ")]),i("div",{staticClass:"row row-cols-1 row-cols-md-3 flex-lg-row-reverse"},[i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130","blank-width":"184","blank-height":"130",offset:"1000"}}),i("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),i("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellengesuche/info"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("dfcd"),alt:"Stellengesuche für MFA & ZFA",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("h2",{staticClass:"bold"},[e._v("Stellengesuche für MFA & ZFA")]),i("p",[e._v(" Erstelle als MFA | ZFA Dein individuelles Stellengesuch und lasse Dich von Arbeitgebern mit passenden Angeboten finden. ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Stellengesuch erstellen")])],1)],1),i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("6df9"),alt:"MFA | ZFA studiert bei Weiterbildung",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),i("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)]),i("div",{staticClass:"mb-4"},[i("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("300b"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("div",[i("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),i("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1)],1),i("div",{staticClass:"mb-4"},[i("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("4fef"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("div",[i("h2",{staticClass:"bold"},[e._v("Fortbildungskatalog")]),i("p",[e._v(" Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause! ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Zum Fortbildungskatalog")])],1)],1)],1)]),i("div",{staticClass:"container-fluid bg-primary text-light py-5"},[i("div",{staticClass:"container py-0 py-md-3"},[i("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),i("div",{staticClass:"row row-cols-1 row-cols-md-3"},[i("div",{staticClass:"col"},[i("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:a("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800","blank-width":"800","blank-height":"800","blank-color":"#f7f6f9",offset:"1000"}}),i("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),i("div",{staticClass:"col"},[i("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),i("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildung"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungs"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),i("div",{staticClass:"col"},[i("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),i("p",[i("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/artikel/warum-es-mfa-mal-anders-gibt"}},[i("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})]),e._v(" Mehr über die Story dahinter")])],1)])])])]),i("div",{staticClass:"container my-5 py-0 py-md-5 d-flex justify-content-center"},[i("StellenanzeigeSchaltenBanner")],1),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4 mb-5"},[i("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),i("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),i("p",[e._v(" Als Medizinische Fachangestelle | Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),i("p",[e._v(" Wir haben einige "),i("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),i("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),i("div",{staticClass:"col-12 col-md-8"},[i("RandomTrainingsContainer",{attrs:{number:2}})],1)])]),i("div",{staticClass:"container-fluid bg-light-shade my-5 py-5 px-0"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),i("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),i("RandomArticlesContainer")],1)]),i("Head",{attrs:{title:"Das Karriereportal nur für MFA & ZFA",desc:"MFA mal anders ist dein Job- und Karriereportal speziell für ArzthelferIn | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)",img:"",script:e.snippet}})],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[a("h1",[a("span",{staticClass:"bold display-2"},[e._v(" MFA "),a("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),a("br"),a("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),a("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),a("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)")]),e._v(". ")])])}],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"card  overflow-hidden shadow1",staticStyle:{"max-width":"840px"}},[i("div",{staticClass:"row p-4"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"card-body  h-100 p-4"},[e._m(0),i("p",[e._v(" Erstellen Sie "),i("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem "),i("strong",{staticClass:"text-primary"},[e._v("individuellen Paketen")]),e._v(" veröffentlichen Sie Ihre Stellenanzeige bereits ab "),i("strong",{staticClass:"text-primary"},[e._v(e._s((e.$config.pricingPackages[0].price/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency))]),e.$config.payment.tax?i("span",{staticClass:"small"},[e._v(" (zzgl. USt)")]):e._e(),e._v(". ")]),i("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"md"}},[e._v("Stellenanzeige schalten")])],1)]),i("div",{staticClass:"col-md-4"},[i("b-img-lazy",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:a("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn","blank-width":"248","blank-height":"316",offset:"1000",fluid:""}})],1)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"h3 bold"},[a("em",[e._v("Motivierte")]),e._v(" und "),a("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")])}],l={name:"StellenanzeigeSchaltenBanner"},c=l,o=a("2877"),d=Object(o["a"])(c,r,n,!1,null,null,null),u=d.exports,h=a("6df3"),b=a("e674"),m=a("68b7"),g=a("7b34"),f={name:"Home",components:{StellenanzeigeSchaltenBanner:u,RandomTrainingsContainer:h["a"],RandomArticlesContainer:b["a"],JobsTeaserContainer:m["a"],JobSearchSingleForm:g["a"]},data:function(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            }]\n          }'}]}}},p=f,v=(a("1744"),Object(o["a"])(p,i,s,!1,null,"3fb43792",null));t["default"]=v.exports},c11e:function(e,t,a){},c6be:function(e,t,a){},dd0d:function(e,t,a){},dfcd:function(e,t,a){e.exports=a.p+"img/LinkedIn_Monochromatic.a4d7c979.svg"},e674:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.articles&&e.articles.length>0?a("div",{staticClass:"row"},e._l(e.articles,(function(t){return a("ArticleCard",{key:t.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number],attrs:{article:t}})})),1):a("div",{staticClass:"row"},e._l(e.number,(function(t){return a("ArticleCardPlaceholder",{key:t,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number]})})),1)])},s=[],r=a("1da1"),n=(a("96cf"),a("a9e3"),a("3c2c")),l=a("ab2f"),c={name:"RandomArticlesContainer",components:{ArticleCard:n["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:null}},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("getArticles"),e.getArticles();case 2:case"end":return t.stop()}}),t)})))()},methods:{getRandom:function(e,t){var a=new Array(t),i=e.length,s=new Array(i);if(t>i)throw new RangeError("getRandom: more elements taken than available");while(t--){var r=Math.floor(Math.random()*i);a[t]=e[r in s?s[r]:r],s[r]=--i in s?s[i]:i}return a},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},o=c,d=a("2877"),u=Object(d["a"])(o,i,s,!1,null,null,null);t["a"]=u.exports},f7b5:function(e,t,a){"use strict";a("c11e")},fc51:function(e,t,a){e.exports=a.p+"img/career_.8a38acc4.svg"},fdcd:function(e,t,a){"use strict";a("15f6")}}]);
//# sourceMappingURL=home-legacy.309fa4f4.js.map