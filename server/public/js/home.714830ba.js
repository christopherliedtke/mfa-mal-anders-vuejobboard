(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{1744:function(t,e,a){"use strict";a("70f3")},"215b":function(t,e,a){"use strict";a("dd0d")},"300b":function(t,e,a){t.exports=a.p+"img/health_.7b347010.svg"},"3c2c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)]),t.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])],1)},s=[],r={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},n=r,l=(a("d0e7"),a("2877")),c=Object(l["a"])(n,i,s,!1,null,"981d0dd2",null);e["a"]=c.exports},"4fef":function(t,e,a){t.exports=a.p+"img/calendar.beda8b1d.svg"},"512d":function(t,e,a){"use strict";a("e136")},"572e":function(t,e,a){t.exports=a.p+"img/medical_research.cc6659ef.svg"},6535:function(t,e,a){t.exports=a.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"6df3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("div",{key:e.id,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("WeiterbildungCard",{attrs:{training:e}})],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("WeiterbildungCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"weiterbildung-card"},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[a("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 1200px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1)},n=[],l={name:"WeiterbildungCard",props:{training:{type:Object,default:()=>{}}}},c=l,d=(a("512d"),a("2877")),o=Object(d["a"])(c,r,n,!1,null,"1ce5d5d3",null),u=o.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},b=[],m=a("2b0e"),g=a("0942");m["default"].component("BSkeleton",g["a"]);var f={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},p=f,v=(a("215b"),Object(d["a"])(p,h,b,!1,null,"773bc4fc",null)),C=v.exports,w={name:"RandomTrainingsContainer",components:{WeiterbildungCard:u,WeiterbildungCardPlaceholder:C},props:{number:{type:Number,default:3}},data(){return{trainings:null}},watch:{$route(t,e){t!=e&&this.getTrainings()}},created(){this.getTrainings()},methods:{async getTrainings(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                weiterbildungen(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.weiterbildungen)return;this.trainings=t.data.data.weiterbildungen}catch(t){return}}}},x=w,k=Object(d["a"])(x,i,s,!1,null,null,null);e["a"]=k.exports},"6df9":function(t,e,a){t.exports=a.p+"img/coach.94fa3305.svg"},"70f3":function(t,e,a){},7452:function(t,e,a){},"78bf":function(t,e,a){"use strict";a("c6be")},ab2f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},s=[],r=a("2b0e"),n=a("0942");r["default"].component("BSkeleton",n["a"]);var l={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,d=(a("78bf"),a("2877")),o=Object(d["a"])(c,i,s,!1,null,"d6454454",null);e["a"]=o.exports},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"container-fluid hero d-flex justify-content-center align-items-center"},[i("div",{staticClass:"container p-0",staticStyle:{"max-width":"850px"}},[t._m(0),i("JobSearchSingleForm")],1)]),i("div",{staticClass:"container mt-4 mt-lg-0"},[i("JobsTeaserContainer")],1),i("div",{staticClass:"container my-3 my-md-5 py-3 py-md-5"},[i("h2",{staticClass:"d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"},[t._v(" Deine berufliche Weiterentwicklung ")]),i("div",{staticClass:"row row-cols-1 row-cols-md-3 flex-lg-row-reverse"},[i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130","blank-width":"184","blank-height":"130",offset:"1000"}}),i("h2",{staticClass:"bold"},[t._v("Stellenbörse für MFA & ZFA")]),i("p",[t._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),i("b-button",{attrs:{variant:"primary"}},[t._v("Zur Stellenbörse")])],1)],1),i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellengesuche/info"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("dfcd"),alt:"Stellengesuche für MFA & ZFA",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("h2",{staticClass:"bold"},[t._v("Stellengesuche für MFA & ZFA")]),i("p",[t._v(" Erstelle als MFA | ZFA Dein individuelles Stellengesuch und lasse Dich von Arbeitgebern mit passenden Angeboten finden. ")]),i("b-button",{attrs:{variant:"primary"}},[t._v("Stellengesuch erstellen")])],1)],1),i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("6df9"),alt:"MFA | ZFA studiert bei Weiterbildung",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("h2",{staticClass:"bold"},[t._v("Fort- & Weiterbildungen")]),i("p",[t._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),i("b-button",{attrs:{variant:"primary"}},[t._v("Zu den Weiterbildungen")])],1)],1)]),i("div",{staticClass:"mb-4"},[i("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("300b"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("div",[i("h2",{staticClass:"bold"},[t._v("Jobs & Berufsbilder")]),i("p",[t._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),i("b-button",{attrs:{variant:"primary"}},[t._v("Zu den Berufsbildern")])],1)],1)],1),i("div",{staticClass:"mb-4"},[i("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("4fef"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("div",[i("h2",{staticClass:"bold"},[t._v("Fortbildungskatalog")]),i("p",[t._v(" Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause! ")]),i("b-button",{attrs:{variant:"primary"}},[t._v("Zum Fortbildungskatalog")])],1)],1)],1)]),i("div",{staticClass:"container-fluid bg-primary text-light py-5"},[i("div",{staticClass:"container py-0 py-md-3"},[i("h2",{staticClass:"h1 mb-4 bold display-4"},[t._v("Warum MFA mal anders?")]),i("div",{staticClass:"row row-cols-1 row-cols-md-3"},[i("div",{staticClass:"col"},[i("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:a("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800","blank-width":"800","blank-height":"800","blank-color":"#f7f6f9",offset:"1000"}}),i("p",[t._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),i("div",{staticClass:"col"},[i("p",[t._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),i("p",[t._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildung"}},[t._v("Weiterbildungsmöglichkeiten")]),t._v(", "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[t._v("Karrierechancen")]),t._v(" aber auch "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[t._v("Gehalt")]),t._v(" (inkl. Gehaltsrechner), "),i("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungs"}},[t._v("Bewerbungen")]),t._v(" und vieles, vieles mehr geben. ")],1)]),i("div",{staticClass:"col"},[i("p",[t._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),i("p",[i("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/artikel/warum-es-mfa-mal-anders-gibt"}},[i("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})]),t._v(" Mehr über die Story dahinter")])],1)])])])]),i("div",{staticClass:"container my-5 py-0 py-md-5 d-flex justify-content-center"},[i("StellenanzeigeSchaltenBanner")],1),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4 mb-5"},[i("h2",{staticClass:"bold"},[t._v(" Fort- und Weiterbildungen ")]),i("h3",{staticClass:"h4"},[t._v("Informiere Dich")]),i("p",[t._v(" Als Medizinische Fachangestelle | Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),i("p",[t._v(" Wir haben einige "),i("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[t._v("Fort- und Weiterbildungen")]),t._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),i("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick",variant:"primary"}},[t._v("Zu den Fort- und Weiterbildungen")])],1),i("div",{staticClass:"col-12 col-md-8"},[i("RandomTrainingsContainer",{attrs:{number:2}})],1)])]),i("div",{staticClass:"container-fluid bg-light-shade my-5 py-5 px-0"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"h1 bold display-4 text-center"},[t._v("Blog")]),i("h3",{staticClass:"h5 text-center mb-4"},[t._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),i("RandomArticlesContainer")],1)]),i("Head",{attrs:{title:"Das Karriereportal nur für MFA & ZFA",desc:"MFA mal anders ist dein Job- und Karriereportal speziell für ArzthelferIn | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)",img:"",script:t.snippet}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[a("h1",[a("span",{staticClass:"bold display-2"},[t._v(" MFA "),a("br",{staticClass:"d-md-none"}),t._v(" mal anders ")]),a("br"),a("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[t._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),a("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[t._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),a("span",{staticClass:"d-none d-md-inline"},[t._v(" – speziell für ArzthelferInnen | Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA)")]),t._v(". ")])])}],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"card  overflow-hidden shadow1",staticStyle:{"max-width":"840px"}},[i("div",{staticClass:"row p-4"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"card-body  h-100 p-4"},[t._m(0),i("p",[t._v(" Erstellen Sie "),i("strong",{staticClass:"text-primary"},[t._v("in wenigen Minuten Ihre Stellenanzeige")]),t._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem "),i("strong",{staticClass:"text-primary"},[t._v("individuellen Paketen")]),t._v(" veröffentlichen Sie Ihre Stellenanzeige bereits ab "),i("strong",{staticClass:"text-primary"},[t._v(t._s((t.$config.pricingPackages[0].price/100).toFixed(2).toString().replace(".",","))+" "+t._s(t.$config.payment.currency))]),t.$config.payment.tax?i("span",{staticClass:"small"},[t._v(" (zzgl. USt)")]):t._e(),t._v(". ")]),i("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"md"}},[t._v("Stellenanzeige schalten")])],1)]),i("div",{staticClass:"col-md-4"},[i("b-img-lazy",{staticClass:"p-0 w-100 h-100",attrs:{src:a("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn","blank-width":"248","blank-height":"316",offset:"1000",fluid:""}})],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"h3 bold"},[a("em",[t._v("Motivierte")]),t._v(" und "),a("em",[t._v("qualifizierte")]),t._v(" ArzthelferInnen – MFA & ZFA gesucht? ")])}],l={name:"StellenanzeigeSchaltenBanner"},c=l,d=a("2877"),o=Object(d["a"])(c,r,n,!1,null,null,null),u=o.exports,h=a("6df3"),b=a("e674"),m=a("68b7"),g=a("7b34"),f={name:"Home",components:{StellenanzeigeSchaltenBanner:u,RandomTrainingsContainer:h["a"],RandomArticlesContainer:b["a"],JobsTeaserContainer:m["a"],JobSearchSingleForm:g["a"]},data(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            }]\n          }'}]}}},p=f,v=(a("1744"),Object(d["a"])(p,i,s,!1,null,"3fb43792",null));e["default"]=v.exports},c6be:function(t,e,a){},d0e7:function(t,e,a){"use strict";a("7452")},dd0d:function(t,e,a){},dfcd:function(t,e,a){t.exports=a.p+"img/LinkedIn_Monochromatic.a4d7c979.svg"},e136:function(t,e,a){},e674:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles&&t.articles.length>0?a("div",{staticClass:"row"},t._l(t.articles,(function(e){return a("ArticleCard",{key:e.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number],attrs:{article:e}})})),1):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("ArticleCardPlaceholder",{key:e,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]})})),1)])},s=[],r=a("3c2c"),n=a("ab2f"),l={name:"RandomArticlesContainer",components:{ArticleCard:r["a"],ArticleCardPlaceholder:n["a"]},props:{number:{type:Number,default:3}},data(){return{articles:null}},watch:{$route(t,e){t!=e&&this.getArticles()}},async created(){this.getArticles()},methods:{async getArticles(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                articles(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.articles)return;this.articles=t.data.data.articles}catch(t){return}}}},c=l,d=a("2877"),o=Object(d["a"])(c,i,s,!1,null,null,null);e["a"]=o.exports},fc51:function(t,e,a){t.exports=a.p+"img/career_.8a38acc4.svg"}}]);
//# sourceMappingURL=home.714830ba.js.map