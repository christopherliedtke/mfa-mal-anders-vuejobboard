(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dbe1660"],{"0663":function(e,t,a){},"0942":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("2b0e"),n=a("b42e"),i=a("c637"),s=a("a723"),l=a("cf75");function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=Object(l["d"])({animation:Object(l["c"])(s["s"],"wave"),height:Object(l["c"])(s["s"]),size:Object(l["c"])(s["s"]),type:Object(l["c"])(s["s"],"text"),variant:Object(l["c"])(s["s"]),width:Object(l["c"])(s["s"])},i["lb"]),d=r["default"].extend({name:i["lb"],functional:!0,props:c,render:function(e,t){var a,r=t.data,i=t.props,s=i.size,l=i.animation,c=i.variant;return e("div",Object(n["a"])(r,{staticClass:"b-skeleton",style:{width:s||i.width,height:s||i.height},class:(a={},o(a,"b-skeleton-".concat(i.type),!0),o(a,"b-skeleton-animate-".concat(l),l),o(a,"bg-".concat(c),c),a)}))}})},"16e2":function(e,t,a){"use strict";a("6aab")},"300b":function(e,t,a){e.exports=a.p+"img/health_.7b347010.svg"},"3c2c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/article/"+e.article.slug,"aria-label":e.article.title}},[a("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"article"}},[a("BCardImgLazy",{attrs:{srcset:e.article.featuredImage?e.article.featuredImage.node.srcSet:"",src:e.article.featuredImage?e.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:e.article.featuredImage?e.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",top:"",fluid:""}}),a("BCardBody",[a("BCardTitle",{attrs:{title:e.article.title}}),a("BCardText",[a("div",{domProps:{innerHTML:e._s(e.article.excerpt)}})]),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[e.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.node.avatar.url,alt:e.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),e.article.author.node.name?a("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.node.name)+" ")]):e._e()],1):e._e(),a("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1)],1),e.article.tags.nodes.length>0?a("BBadge",{attrs:{pill:"",variant:"secondary"}},[e._v(e._s(e.article.tags.nodes[0].name))]):e._e()],1)],1)],1)},n=[],i=a("2b0e"),s=a("e98b"),l=a("205f"),o=a("6197"),c=a("60f1"),d=a("4968"),b=a("d6e4");i["default"].component("BBadge",s["a"]),i["default"].component("BCard",l["a"]),i["default"].component("BCardBody",o["a"]),i["default"].component("BCardImgLazy",c["a"]),i["default"].component("BCardTitle",d["a"]),i["default"].component("BCardText",b["a"]);var u={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},h=u,m=(a("ff23"),a("2877")),f=Object(m["a"])(h,r,n,!1,null,"04cc0ed6",null);t["a"]=f.exports},"4fef":function(e,t,a){e.exports=a.p+"img/calendar.beda8b1d.svg"},"572e":function(e,t,a){e.exports=a.p+"img/medical_research.5571fe9d.svg"},"5a91":function(e,t,a){"use strict";a("8812")},"5ff0":function(e,t,a){},6535:function(e,t,a){e.exports=a.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"6aab":function(e,t,a){},"6df9":function(e,t,a){e.exports=a.p+"img/coach.94fa3305.svg"},7067:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$config.starredJobs.active?r("span",{staticClass:"star text-secondary",style:"padding: "+e.padding+"; position: "+e.position,on:{click:function(t){return t.preventDefault(),e.toggleStar(t)}}},[e.active?r("Fa",{attrs:{icon:["fas","star"],size:e.size}}):r("Fa",{attrs:{icon:["far","star"],size:e.size}}),r("BModal",{attrs:{id:"register-modal-"+e.jobId,"content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:e.modalVisible}},[r("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:function(t){e.modalVisible=!1}}},[r("Fa",{attrs:{icon:"times"}})],1),r("div",{staticClass:"py-2 px-3 "},[r("h2",{staticClass:"h4 mb-4 bold"},[e._v("Für später speichern?")]),r("div",{staticClass:"clearfix mb-3"},[r("b-img",{staticClass:"mr-4 mb-2",staticStyle:{"max-width":"150px"},attrs:{fluid:"",left:"",src:a("7734")}}),r("p",[e._v(" Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu bewerben. Registriere Dich dazu jetzt ganz einfach. ")])],1),r("b-button",{attrs:{to:"/auth/register?role=employee",block:"",variant:"secondary"}},[e._v("Jetzt registrieren")])],1)])],1):e._e()},n=[],i=(a("45fc"),a("96cf"),a("c964")),s=a("2b0e"),l=a("6aac");s["default"].component("BModal",l["a"]);var o={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data:function(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},mounted:function(){this.checkStarredJobs()},methods:{checkStarredJobs:function(){var e=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(t){return t.job===e.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.state.auth.loggedIn){t.next=3;break}return e.modalVisible=!0,t.abrupt("return");case 3:if(e.active){t.next=11;break}return e.active=!0,t.next=7,e.$store.dispatch("addStarredJob",e.jobId);case 7:e.$gtag.event("add_starred_job",{event_label:e.jobId}),e.$matomo&&e.$matomo.trackEvent("engagement","add_starred_job",e.jobId),t.next=16;break;case 11:return e.active=!1,t.next=14,e.$store.dispatch("deleteStarredJob",e.jobId);case 14:e.$gtag.event("delete_starred_job",{event_label:e.jobId}),e.$matomo&&e.$matomo.trackEvent("engagement","delete_starred_job",e.jobId);case 16:case"end":return t.stop()}}),t)})))()}}},c=o,d=(a("d1d4"),a("2877")),b=Object(d["a"])(c,r,n,!1,null,"f9ecca82",null);t["a"]=b.exports},7734:function(e,t,a){e.exports=a.p+"img/starredJobs.15f8095f.svg"},8812:function(e,t,a){},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("b-container",{staticClass:"hero d-flex justify-content-center align-items-center",attrs:{fluid:""}},[r("b-container",{staticClass:"p-0",staticStyle:{"max-width":"850px"}},[r("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[r("h1",[r("span",{staticClass:"bold display-2"},[e._v(" MFA "),r("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),r("br"),r("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),r("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),r("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA)")]),e._v(". ")])]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm)}}},[r("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),r("b-input-group",[r("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:"Stelle finden..."},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),r("b-input-group-append",[r("b-button",{staticClass:"shadow1",attrs:{size:"lg",variant:"secondary",to:"/stellenangebote?s="+e.searchTerm}},[r("Fa",{attrs:{icon:"search"}})],1)],1)],1)],1),r("div",{staticClass:"mt-2 text-right"},[r("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1)],1)],1),r("b-container",{staticClass:"mt-4 mt-lg-0"},[e.jobs.length>0?r("b-row",{attrs:{cols:"1","cols-md":"3"}},e._l(e.jobs,(function(e){return r("b-col",{key:e._id},[r("JobCard",{attrs:{job:e,compact:!0}})],1)})),1):r("b-row",{attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("JobCardPlaceholder",{attrs:{compact:!0}})],1),r("b-col",[r("JobCardPlaceholder",{attrs:{compact:!0}})],1),r("b-col",[r("JobCardPlaceholder",{attrs:{compact:!0}})],1)],1),r("div",{staticClass:"d-flex justify-content-end mt-2"},[r("b-button",{attrs:{to:"/stellenangebote",variant:"outline-primary",size:"sm"}},[e._v("Weitere")])],1)],1),r("b-container",{staticClass:"my-3 my-md-5 py-3 py-md-5"},[r("h2",{staticClass:"d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"},[e._v(" Deine berufliche Weiterentwicklung ")]),r("b-row",{staticClass:"flex-lg-row-reverse",attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130","blank-width":"184","blank-height":"130",offset:"1000"}}),r("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),r("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("300b"),alt:"Medizinische Fachangestellte im Untersuchungsraum",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),r("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1),r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("6df9"),alt:"MFA studiert bei Weiterbildung",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),r("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)],1),r("div",[r("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/fortbildungskalender"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("4fef"),alt:"MFA liest Fortbildungskalender",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),r("div",[r("h2",{staticClass:"bold"},[e._v("Fortbildungskalender")]),r("p",[e._v(" Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zum Fortbildungskalender")])],1)],1)],1)],1),r("b-container",{staticClass:"bg-primary text-light py-5",attrs:{fluid:""}},[r("b-container",{staticClass:"py-0 py-md-3"},[r("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),r("b-row",{attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:a("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800","blank-width":"800","blank-height":"800","blank-color":"#f7f6f9",offset:"1000"}}),r("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),r("b-col",[r("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),r("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungstipps"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),r("b-col",[r("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),r("p",[r("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/article/warum-es-mfa-mal-anders-gibt"}},[r("Fa",{attrs:{icon:"caret-right"}}),e._v(" Mehr über die Story dahinter")],1)],1)])],1)],1)],1),r("b-container",{staticClass:"my-5 py-0 py-md-5 d-flex justify-content-center"},[r("StellenanzeigeSchaltenBanner")],1),r("b-container",[r("b-row",[r("b-col",{staticClass:"mb-5",attrs:{cols:"12",md:"4"}},[r("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),r("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),r("p",[e._v(" Als Medizinische / Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),r("p",[e._v(" Wir haben einige "),r("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),r("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),r("b-col",{attrs:{cols:"12",md:"8"}},[r("RandomTrainingsContainer",{attrs:{number:2}})],1)],1)],1),r("b-container",{staticClass:"bg-light-shade my-5 py-5 px-0",attrs:{fluid:""}},[r("b-container",[r("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),r("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),r("RandomArticlesContainer")],1)],1),r("Head",{attrs:{title:"Das Stellen- & Karriereportal nur für MFA & ZFA",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:e.snippet}})],1)},n=[],i=(a("96cf"),a("c964")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden shadow1",staticStyle:{"max-width":"840px"},attrs:{"no-body":"",align:"center"}},[r("b-row",{staticClass:"p-4"},[r("b-col",{attrs:{md:"4"}},[r("b-img-lazy",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:a("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn","blank-width":"248","blank-height":"316",offset:"1000",fluid:""}})],1),r("b-col",{attrs:{md:"8"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h2",{staticClass:"bold"},[r("em",[e._v("Motivierte")]),e._v(" und "),r("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")]),r("p",[e._v(" Erstellen Sie "),r("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem "),r("strong",{staticClass:"text-primary"},[e._v("individuellen Paketen")]),e._v(" veröffentlichen Sie Ihre Stellenanzeige bereits ab "),r("strong",{staticClass:"text-primary"},[e._v(e._s((e.$config.pricingPackages[0].price/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency))]),e._v(". ")]),r("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige schalten")])],1)],1)],1)],1)},l=[],o=a("2b0e"),c=a("205f"),d=a("6197");o["default"].component("BCard",c["a"]),o["default"].component("BCardBody",d["a"]);var b={name:"StellenanzeigeSchaltenBanner"},u=b,h=a("2877"),m=Object(h["a"])(u,s,l,!1,null,null,null),f=m.exports,p=a("6df3"),g=a("e674"),v=a("f0fa"),_=a("f810"),y={name:"Home",components:{StellenanzeigeSchaltenBanner:f,RandomTrainingsContainer:p["a"],RandomArticlesContainer:g["a"],JobCard:v["a"],JobCardPlaceholder:_["a"]},data:function(){return{jobs:[],searchTerm:"",snippet:[{type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            }]\n          }'}]}},created:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/public-jobs",{params:{limit:3}});case 2:a=t.sent,e.jobs=a.data.jobs;case 4:case"end":return t.stop()}}),t)})))()}}},w=y,C=(a("5a91"),Object(h["a"])(w,r,n,!1,null,"ff6428f0",null));t["default"]=C.exports},be3f:function(e,t,a){"use strict";a("5ff0")},d1bf:function(e,t,a){},d1d4:function(e,t,a){"use strict";a("d1bf")},e674:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",e._l(e.articles,(function(t){return a("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[a("ArticleCard",{attrs:{article:t}})],1)})),1)},n=[],i=(a("a9e3"),a("3c2c")),s={name:"RandomArticlesContainer",components:{ArticleCard:i["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(e,t){var a=new Array(t),r=e.length,n=new Array(r);if(t>r)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*r);a[t]=e[i in n?n[i]:i],n[i]=--r in n?n[r]:r}return a},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},l=s,o=a("2877"),c=Object(o["a"])(l,r,n,!1,null,null,null);t["a"]=c.exports},e98b:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("2b0e"),n=a("b42e"),i=a("c637"),s=a("a723"),l=a("d82f"),o=a("cf75"),c=a("4a38"),d=a("aa59");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=Object(l["j"])(d["b"],["event","routerTag"]);delete m.href.default,delete m.to.default;var f=Object(o["d"])(Object(l["m"])(u(u({},m),{},{pill:Object(o["c"])(s["g"],!1),tag:Object(o["c"])(s["s"],"span"),variant:Object(o["c"])(s["s"],"secondary")})),i["b"]),p=r["default"].extend({name:i["b"],functional:!0,props:f,render:function(e,t){var a=t.props,r=t.data,i=t.children,s=a.active,l=a.disabled,b=Object(c["d"])(a),u=b?d["a"]:a.tag,h=a.variant||"secondary";return e(u,Object(n["a"])(r,{staticClass:"badge",class:["badge-".concat(h),{"badge-pill":a.pill,active:s,disabled:l}],props:b?Object(o["e"])(m,a):{}}),i)}})},f0fa:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.job?a("div",{staticClass:"jobcard"},[e.disabled?a("div",{staticClass:"disabled-jobcard d-flex justify-content-center align-items-center"},[a("span",{staticClass:"h2 bold text-danger"},[e._v("Abgelaufen")])]):e._e(),a("b-link",{attrs:{to:"stepstone"!=e.job.source?"/stellenangebote/job/"+e.job._id:void 0,href:"stepstone"===e.job.source?e.job.extJobUrl:void 0,target:"stepstone"!=e.job.source?"_self":"_blank"}},[a("BCard",{class:e.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0",attrs:{"no-body":""}},[a("BCardText",[a("div",{staticClass:"card-head position-relative"},[a("h2",{class:["h4",{"mobile-max-width-75":e.job.company.logoUrl&&!e.compact}],style:e.compact?"font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap":""},[e._v(" "+e._s(e.job.title)+" ")]),a("StarJob",{attrs:{"job-id":e.job._id}}),e.job.company.logoUrl&&!e.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{fluid:"","blank-src":"/img/MfaMalAnders_logo_circle_dark.svg","blank-width":"90",offset:"1000",src:e.job.company.logoUrl,alt:"Logo - "+e.job.company.name,height:"70"}})],1):e._e()],1),e.compact?e._e():a("div",{staticClass:"card-content"},[a("div",{domProps:{innerHTML:e._s(e.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),e.compact?e._e():a("hr"),a("div",{staticClass:"card-foot",style:e.compact?"font-size:0.85rem; padding: 0.7rem":""},[e.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}})],1),e._v(" "+e._s(e.job.company.name)+" ")]):e._e(),e.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}})],1),e._v(" "+e._s(e.job.company.location)+" ")]):e._e(),e.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","briefcase"],size:"lg"}})],1),e._v(" "+e._s(e.employmentTypeOptions.filter((function(t){return t.value===e.job.employmentType}))[0].text)+" ")]):e._e(),e.compact||!e.job.salaryMin&&!e.job.salaryMax?e._e():a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}})],1),e._v(" "+e._s(e.job.salaryMax?e.job.salaryMin?parseInt(e.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(e.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+e._s(e.job.salaryMax?parseInt(e.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!e.compact&&e.job.specialization&&"null"!=e.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"syringe",size:"lg"}})],1),e._v(" "+e._s(e.job.specialization)+" ")]):e._e(),e.job.publishedAt||e.job.paidAt?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}})],1),e._v(" "+e._s(e.timeSince(new Date(e.job.publishedAt||e.job.paidAt)))+" ")]):e._e(),e.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("BBadge",{attrs:{pill:"",variant:"secondary"}},[a("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),e._v("Einfach bewerben")],1)],1):e._e(),e.job.simpleApplication?a("BTooltip",{attrs:{target:"tooltip-simple-application",title:"Lebenslauf genügt für Bewerbung",triggers:"hover",placement:"bottom"}}):e._e()],1)])],1)],1)],1):e._e()},n=[],i=a("1ba6"),s=a("7067"),l=a("b4ae"),o=a("e98b"),c=a("205f"),d=a("d6e4"),b=a("2b0e");b["default"].component("BTooltip",l["a"]),b["default"].component("BBadge",o["a"]),b["default"].component("BCard",c["a"]),b["default"].component("BCardText",d["a"]);var u={name:"JobCard",components:{StarJob:s["a"]},props:{job:{type:Object,default:function(){}},compact:{type:Boolean,default:!1}},data:function(){return{employmentTypeOptions:i["f"],companySizeOptions:i["b"]}},computed:{disabled:function(){return this.job.applicationDeadline&&new Date(this.job.applicationDeadline)<new Date||"published"!=this.job.status||this.job.paidExpiresAt<new Date}},methods:{timeSince:function(e){var t=Math.floor((new Date-e)/1e3),a=t/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=t/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=t/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},h=u,m=(a("16e2"),a("2877")),f=Object(m["a"])(h,r,n,!1,null,"c9569850",null);t["a"]=f.exports},f810:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-card-placeholder"},[a("BSkeleton",{staticClass:"header",attrs:{height:e.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),e.compact?e._e():a("BSkeleton",{attrs:{height:"1px"}}),e.compact?e._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},n=[],i=a("2b0e"),s=a("0942");i["default"].component("BSkeleton",s["a"]);var l={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},o=l,c=(a("be3f"),a("2877")),d=Object(c["a"])(o,r,n,!1,null,"73f8515e",null);t["a"]=d.exports},fc51:function(e,t,a){e.exports=a.p+"img/career_.8a38acc4.svg"},ff23:function(e,t,a){"use strict";a("0663")}}]);
//# sourceMappingURL=chunk-7dbe1660.c8bef038.js.map