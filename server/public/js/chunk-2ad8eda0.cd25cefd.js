(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ad8eda0"],{"2a84":function(e,t,n){"use strict";n("33d6")},"300b":function(e,t,n){e.exports=n.p+"img/health_.7b347010.svg"},"33d6":function(e,t,n){},"3c2c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-card"},[n("b-link",{attrs:{to:"/blog/article/"+e.article.slug,"aria-label":e.article.title}},[n("BCard",{staticClass:"mb-2",attrs:{title:e.article.title,"img-src":e.article.featuredImage?e.article.featuredImage.node.sourceUrl:"","img-alt":e.article.featuredImage?e.article.featuredImage.node.altText:"","img-top":"",tag:"article"}},[n("BCardText",[n("div",{domProps:{innerHTML:e._s(e.article.excerpt)}})]),n("hr"),n("div",{staticClass:"d-flex justify-content-between"},[e.article.author.node.avatar?n("div",{staticClass:"d-flex align-items-center"},[n("b-img",{staticClass:"mr-2 rounded-circle",attrs:{src:e.article.author.node.avatar.url,alt:e.article.author.node.name,height:"37.5"}}),e.article.author.node.name?n("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.node.name)+" ")]):e._e()],1):e._e(),n("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1),e.article.tags.nodes.length>0?n("BBadge",{attrs:{pill:"",variant:"secondary"}},[e._v(e._s(e.article.tags.nodes[0].name))]):e._e()],1)],1)],1)},a=[],i=n("2b0e"),s=n("e98b"),l=n("205f"),c=n("d6e4");i["default"].component("BBadge",s["a"]),i["default"].component("BCard",l["a"]),i["default"].component("BCardText",c["a"]);var o={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},d=o,u=(n("2a84"),n("2877")),h=Object(u["a"])(d,r,a,!1,null,"1f147e1b",null);t["a"]=h.exports},"572e":function(e,t,n){e.exports=n.p+"img/medical_research.5571fe9d.svg"},6535:function(e,t,n){e.exports=n.p+"img/KristinMaurach_portrait_800.6e9de68e.jpg"},"6df9":function(e,t,n){e.exports=n.p+"img/coach.94fa3305.svg"},a669:function(e,t,n){"use strict";n("d0bc")},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("b-container",{staticClass:"hero d-flex justify-content-center align-items-center",attrs:{fluid:""}},[r("b-container",{staticClass:"p-0",staticStyle:{"max-width":"850px"}},[r("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[r("h1",[r("span",{staticClass:"bold display-2"},[e._v(" MFA "),r("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),r("br"),r("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Karriere- & Stellenportal nur für MFA & ZFA ")])]),r("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),r("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA)")]),e._v(". ")])]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm)}}},[r("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),r("b-input-group",[r("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:"Stelle finden..."},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),r("b-input-group-append",[r("b-button",{staticClass:"shadow1",attrs:{size:"lg",variant:"secondary",to:"/stellenangebote?s="+e.searchTerm}},[r("Fa",{attrs:{icon:"search"}})],1)],1)],1)],1),r("div",{staticClass:"mt-2 text-right"},[r("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1)],1)],1),r("b-container",{staticClass:"my-3 my-md-5 py-3 py-md-5"},[r("b-row",{staticClass:"flex-lg-row-reverse",attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:n("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130"}}),r("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),r("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:n("300b"),alt:"Medizinische Fachangestellte im Untersuchungsraum",height:"130"}}),r("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),r("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1),r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:n("6df9"),alt:"MFA studiert bei Weiterbildung",height:"130"}}),r("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),r("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)],1)],1),r("b-container",{staticClass:"bg-primary text-light py-5",attrs:{fluid:""}},[r("b-container",{staticClass:"py-0 py-md-3"},[r("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),r("b-row",{attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px"},attrs:{fluid:"",left:"",src:n("6535"),alt:"Portrait Kristin Maurach"}}),r("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),r("b-col",[r("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),r("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungstipps"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),r("b-col",[r("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),r("p",[r("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/article/warum-es-mfa-mal-anders-gibt"}},[r("Fa",{attrs:{icon:"caret-right"}}),e._v(" Mehr über die Story dahinter")],1)],1)])],1)],1)],1),r("b-container",{staticClass:"my-5 py-0 py-md-5 d-flex justify-content-center"},[r("StellenanzeigeSchaltenBanner")],1),r("b-container",[r("b-row",[r("b-col",{staticClass:"mb-5",attrs:{cols:"12",md:"4"}},[r("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),r("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),r("p",[e._v(" Als Medizinische / Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),r("p",[e._v(" Wir haben einige "),r("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),r("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),r("b-col",{attrs:{cols:"12",md:"8"}},[r("RandomTrainingsContainer",{attrs:{number:2}})],1)],1)],1),r("b-container",{staticClass:"bg-light-shade my-5 py-5",attrs:{fluid:""}},[r("b-container",[r("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),r("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),r("RandomArticlesContainer")],1)],1),r("Head",{attrs:{title:"Das Karriere- & Stellenportal nur für MFA & ZFA",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:e.snippet}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden shadow1",staticStyle:{"max-width":"840px"},attrs:{"no-body":"",align:"center"}},[r("b-row",{staticClass:"p-4"},[r("b-col",{attrs:{md:"4"}},[r("b-img",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:n("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn"}})],1),r("b-col",{attrs:{md:"8"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h2",{staticClass:"bold"},[r("em",[e._v("Motivierte")]),e._v(" und "),r("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")]),r("p",[e._v(" Erstellen Sie "),r("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem “Pay What You Want”* Modell veröffentlichen Sie Ihre Stellenanzeige bereits ab "+e._s((e.$config.payment.minCost/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency)+" à "+e._s(e.$config.payment.duration)+" Tage. ")]),r("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige schalten")])],1)],1)],1)],1)},s=[],l=n("2b0e"),c=n("205f"),o=n("6197");l["default"].component("BCard",c["a"]),l["default"].component("BCardBody",o["a"]);var d={name:"StellenanzeigeSchaltenBanner"},u=d,h=n("2877"),b=Object(h["a"])(u,i,s,!1,null,null,null),m=b.exports,g=n("6df3"),f=n("e674"),p={name:"Home",components:{StellenanzeigeSchaltenBanner:m,RandomTrainingsContainer:g["a"],RandomArticlesContainer:f["a"]},data:function(){return{searchTerm:"",snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          }]\n                      }'}]}}},v=p,y=(n("a669"),Object(h["a"])(v,r,a,!1,null,"a9a0ad96",null));t["default"]=y.exports},d0bc:function(e,t,n){},e674:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",e._l(e.articles,(function(t){return n("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[n("ArticleCard",{attrs:{article:t}})],1)})),1)},a=[],i=(n("a9e3"),n("2b0e")),s=n("205f"),l=n("6197"),c=n("60f1"),o=n("4968"),d=n("d6e4"),u=n("3c2c");i["default"].component("BCard",s["a"]),i["default"].component("BCardBody",l["a"]),i["default"].component("BCardImgLazy",c["a"]),i["default"].component("BCardTitle",o["a"]),i["default"].component("BCardText",d["a"]);var h={name:"RandomArticlesContainer",components:{ArticleCard:u["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(e,t){var n=new Array(t),r=e.length,a=new Array(r);if(t>r)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*r);n[t]=e[i in a?a[i]:i],a[i]=--r in a?a[r]:r}return n},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},b=h,m=n("2877"),g=Object(m["a"])(b,r,a,!1,null,null,null);t["a"]=g.exports},e98b:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("b42e"),a=n("dcb3"),i=n("228e"),s=n("d82f"),l=n("cf75"),c=n("4a38"),o=n("aa59");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b="BBadge",m=Object(s["m"])(o["b"],["event","routerTag"]);delete m.href.default,delete m.to.default;var g=u({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(i["c"])(b,"variant")}},pill:{type:Boolean,default:!1}},m),f=a["a"].extend({name:b,functional:!0,props:g,render:function(e,t){var n=t.props,a=t.data,i=t.children,s=Object(c["d"])(n),d=s?o["a"]:n.tag,u={staticClass:"badge",class:[n.variant?"badge-".concat(n.variant):"badge-secondary",{"badge-pill":n.pill,active:n.active,disabled:n.disabled}],props:s?Object(l["b"])(m,n):{}};return e(d,Object(r["a"])(a,u),i)}})},fc51:function(e,t,n){e.exports=n.p+"img/career_.8a38acc4.svg"}}]);
//# sourceMappingURL=chunk-2ad8eda0.cd25cefd.js.map