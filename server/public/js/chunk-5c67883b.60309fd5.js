(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c67883b"],{"0537":function(e,t,r){"use strict";r("dd81")},"0757":function(e,t,r){"use strict";r("7e17")},"300b":function(e,t,r){e.exports=r.p+"img/health_.7b347010.svg"},"3c2c":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/blog/article/"+e.article.slug,"aria-label":e.article.title}},[r("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"article"}},[r("BCardImgLazy",{attrs:{src:e.article.featuredImage?e.article.featuredImage.node.sourceUrl:"",alt:e.article.featuredImage?e.article.featuredImage.node.altText:"",width:"1200",height:"630",offset:"1000",top:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:e.article.title}}),r("BCardText",[r("div",{domProps:{innerHTML:e._s(e.article.excerpt)}})]),r("hr"),r("div",{staticClass:"d-flex justify-content-between"},[e.article.author.node.avatar?r("div",{staticClass:"d-flex align-items-center"},[r("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.node.avatar.url,alt:e.article.author.node.name,height:"96",width:"96",offset:"1000"}}),e.article.author.node.name?r("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.node.name)+" ")]):e._e()],1):e._e(),r("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1)],1),e.article.tags.nodes.length>0?r("BBadge",{attrs:{pill:"",variant:"secondary"}},[e._v(e._s(e.article.tags.nodes[0].name))]):e._e()],1)],1)],1)},a=[],i=r("2b0e"),s=r("e98b"),l=r("205f"),c=r("6197"),o=r("60f1"),d=r("4968"),u=r("d6e4");i["default"].component("BBadge",s["a"]),i["default"].component("BCard",l["a"]),i["default"].component("BCardBody",c["a"]),i["default"].component("BCardImgLazy",o["a"]),i["default"].component("BCardTitle",d["a"]),i["default"].component("BCardText",u["a"]);var h={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},b=h,m=(r("0537"),r("2877")),f=Object(m["a"])(b,n,a,!1,null,"77a018f3",null);t["a"]=f.exports},5356:function(e,t,r){"use strict";r("ddad")},"572e":function(e,t,r){e.exports=r.p+"img/medical_research.5571fe9d.svg"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),c=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},"60f1":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("dcb3"),a=r("d82f"),i=r("b42e"),s=r("f479");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=Object(a["m"])(s["b"],["left","right","center","block","rounded","thumbnail","fluid","fluidGrow"]),u=c(c({},d),{},{top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1}}),h=n["a"].extend({name:"BCardImgLazy",functional:!0,props:u,render:function(e,t){var r=t.props,n=t.data,a="card-img";r.top?a+="-top":r.right||r.end?a+="-right":r.bottom?a+="-bottom":(r.left||r.start)&&(a+="-left");var l=c(c({},r),{},{left:!1,right:!1,center:!1});return e(s["a"],Object(i["a"])(n,{class:[a],props:l}))}})},6535:function(e,t,r){e.exports=r.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"6df3":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",e._l(e.trainings,(function(t){return r("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[r("div",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,"aria-label":t.title}},[r("BCard",{attrs:{"no-body":""}},[r("BCardImgLazy",{attrs:{src:t.featuredImage.node.sourceUrl,alt:t.featuredImage.node.altText,"img-width":"1200","img-height":"630",offset:"1000",top:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:t.title}}),r("BCardText",[r("div",{domProps:{innerHTML:e._s(t.excerpt)}})]),r("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)],1)],1)])})),1)},a=[],i=(r("a9e3"),r("2b0e")),s=r("205f"),l=r("6197"),c=r("60f1"),o=r("4968"),d=r("d6e4");i["default"].component("BCard",s["a"]),i["default"].component("BCardBody",l["a"]),i["default"].component("BCardImgLazy",c["a"]),i["default"].component("BCardTitle",o["a"]),i["default"].component("BCardText",d["a"]);var u={name:"RandomTrainingsContainer",props:{number:{type:Number,default:3}},data:function(){return{trainings:Array}},watch:{$route:function(e,t){e!=t&&this.getTrainings()},"$store.state.trainings.trainings":function(){this.getTrainings()}},mounted:function(){this.getTrainings()},methods:{getRandom:function(e,t){var r=new Array(t),n=e.length,a=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*n);r[t]=e[i in a?a[i]:i],a[i]=--n in a?a[n]:n}return r},getTrainings:function(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number))}}},h=u,b=(r("5356"),r("2877")),m=Object(b["a"])(h,n,a,!1,null,"c5824906",null);t["a"]=m.exports},"6df9":function(e,t,r){e.exports=r.p+"img/coach.94fa3305.svg"},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var i,s;return a&&"function"==typeof(i=t.constructor)&&i!==r&&n(s=i.prototype)&&s!==r.prototype&&a(e,s),e}},"7e17":function(e,t,r){},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),s=r("6eeb"),l=r("5135"),c=r("c6b6"),o=r("7156"),d=r("c04e"),u=r("d039"),h=r("7c73"),b=r("241c").f,m=r("06cf").f,f=r("9bf2").f,g=r("58a8").trim,p="Number",v=a[p],y=v.prototype,C=c(h(y))==p,w=function(e){var t,r,n,a,i,s,l,c,o=d(e,!1);if("string"==typeof o&&o.length>2)if(o=g(o),t=o.charCodeAt(0),43===t||45===t){if(r=o.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+o}for(i=o.slice(2),s=i.length,l=0;l<s;l++)if(c=i.charCodeAt(l),c<48||c>a)return NaN;return parseInt(i,n)}return+o};if(i(p,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,A=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof A&&(C?u((function(){y.valueOf.call(r)})):c(r)!=p)?o(new v(w(t)),r,A):w(t)},x=n?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;x.length>k;k++)l(v,_=x[k])&&!l(A,_)&&f(A,_,m(v,_));A.prototype=y,y.constructor=A,s(a,p,A)}},bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("b-container",{staticClass:"hero d-flex justify-content-center align-items-center",attrs:{fluid:""}},[n("b-container",{staticClass:"p-0",staticStyle:{"max-width":"850px"}},[n("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[n("h1",[n("span",{staticClass:"bold display-2"},[e._v(" MFA "),n("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),n("br"),n("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),n("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),n("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA)")]),e._v(". ")])]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm)}}},[n("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),n("b-input-group",[n("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:"Stelle finden..."},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),n("b-input-group-append",[n("b-button",{staticClass:"shadow1",attrs:{size:"lg",variant:"secondary",to:"/stellenangebote?s="+e.searchTerm}},[n("Fa",{attrs:{icon:"search"}})],1)],1)],1)],1),n("div",{staticClass:"mt-2 text-right"},[n("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1)],1)],1),e.$store.state.jobs.jobs.length>0?n("b-container",{staticClass:"mt-4 mt-lg-0"},[n("h2",{staticClass:"h3 bold text-primary ml-1"},[e._v("Neu in der Stellenbörse:")]),n("b-row",{attrs:{cols:"1","cols-md":"3"}},e._l(e.$store.state.jobs.jobs.slice(0,3),(function(e){return n("b-col",{key:e._id},[n("JobCard",{attrs:{job:e,compact:!0}})],1)})),1),n("div",{staticClass:"d-flex justify-content-end mt-2"},[n("b-button",{attrs:{variant:"outline-primary",size:"sm"}},[e._v("Weitere")])],1)],1):e._e(),n("b-container",{staticClass:"my-3 my-md-5 py-3 py-md-5"},[n("h2",{staticClass:"bold display-4 text-left text-lg-center mb-lg-5"},[e._v(" Deine berufliche Weiterentwicklung ")]),n("b-row",{staticClass:"flex-lg-row-reverse",attrs:{cols:"1","cols-md":"3"}},[n("b-col",[n("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:r("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130"}}),n("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),n("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),n("b-col",[n("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:r("300b"),alt:"Medizinische Fachangestellte im Untersuchungsraum",height:"130"}}),n("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),n("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1),n("b-col",[n("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:r("6df9"),alt:"MFA studiert bei Weiterbildung",height:"130"}}),n("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),n("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)],1)],1),n("b-container",{staticClass:"bg-primary text-light py-5",attrs:{fluid:""}},[n("b-container",{staticClass:"py-0 py-md-3"},[n("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),n("b-row",{attrs:{cols:"1","cols-md":"3"}},[n("b-col",[n("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:r("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800"}}),n("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),n("b-col",[n("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),n("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungstipps"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),n("b-col",[n("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),n("p",[n("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/article/warum-es-mfa-mal-anders-gibt"}},[n("Fa",{attrs:{icon:"caret-right"}}),e._v(" Mehr über die Story dahinter")],1)],1)])],1)],1)],1),n("b-container",{staticClass:"my-5 py-0 py-md-5 d-flex justify-content-center"},[n("StellenanzeigeSchaltenBanner")],1),n("b-container",[n("b-row",[n("b-col",{staticClass:"mb-5",attrs:{cols:"12",md:"4"}},[n("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),n("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),n("p",[e._v(" Als Medizinische / Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),n("p",[e._v(" Wir haben einige "),n("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),n("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),n("b-col",{attrs:{cols:"12",md:"8"}},[n("RandomTrainingsContainer",{attrs:{number:2}})],1)],1)],1),n("b-container",{staticClass:"bg-light-shade my-5 py-5 px-0",attrs:{fluid:""}},[n("b-container",[n("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),n("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),n("RandomArticlesContainer")],1)],1),n("Head",{attrs:{title:"Das Stellen- & Karriereportal nur für MFA & ZFA",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:e.snippet}})],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BCard",{staticClass:"overflow-hidden shadow1",staticStyle:{"max-width":"840px"},attrs:{"no-body":"",align:"center"}},[n("b-row",{staticClass:"p-4"},[n("b-col",{attrs:{md:"4"}},[n("b-img",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:r("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn"}})],1),n("b-col",{attrs:{md:"8"}},[n("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[n("h2",{staticClass:"bold"},[n("em",[e._v("Motivierte")]),e._v(" und "),n("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")]),n("p",[e._v(" Erstellen Sie "),n("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem “Pay What You Want”* Modell veröffentlichen Sie Ihre Stellenanzeige bereits ab "+e._s((e.$config.payment.minCost/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency)+" à "+e._s(e.$config.payment.duration)+" Tage. ")]),n("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige schalten")])],1)],1)],1)],1)},s=[],l=r("2b0e"),c=r("205f"),o=r("6197");l["default"].component("BCard",c["a"]),l["default"].component("BCardBody",o["a"]);var d={name:"StellenanzeigeSchaltenBanner"},u=d,h=r("2877"),b=Object(h["a"])(u,i,s,!1,null,null,null),m=b.exports,f=r("6df3"),g=r("e674"),p=r("f0fa"),v={name:"Home",components:{StellenanzeigeSchaltenBanner:m,RandomTrainingsContainer:f["a"],RandomArticlesContainer:g["a"],JobCard:p["a"]},data:function(){return{searchTerm:"",snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          }]\n                      }'}]}}},y=v,C=(r("0757"),Object(h["a"])(y,n,a,!1,null,"749aa487",null));t["default"]=C.exports},dd81:function(e,t,r){},ddad:function(e,t,r){},e674:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",e._l(e.articles,(function(t){return r("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[r("ArticleCard",{attrs:{article:t}})],1)})),1)},a=[],i=(r("a9e3"),r("2b0e")),s=r("205f"),l=r("6197"),c=r("60f1"),o=r("4968"),d=r("d6e4"),u=r("3c2c");i["default"].component("BCard",s["a"]),i["default"].component("BCardBody",l["a"]),i["default"].component("BCardImgLazy",c["a"]),i["default"].component("BCardTitle",o["a"]),i["default"].component("BCardText",d["a"]);var h={name:"RandomArticlesContainer",components:{ArticleCard:u["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(e,t){var r=new Array(t),n=e.length,a=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*n);r[t]=e[i in a?a[i]:i],a[i]=--n in a?a[n]:n}return r},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},b=h,m=r("2877"),f=Object(m["a"])(b,n,a,!1,null,null,null);t["a"]=f.exports},fc51:function(e,t,r){e.exports=r.p+"img/career_.8a38acc4.svg"}}]);
//# sourceMappingURL=chunk-5c67883b.60309fd5.js.map