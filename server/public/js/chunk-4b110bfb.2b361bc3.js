(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b110bfb"],{"300b":function(e,t,n){e.exports=n.p+"img/health_.7b347010.svg"},"572e":function(e,t,n){e.exports=n.p+"img/medical_research.5571fe9d.svg"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},6535:function(e,t,n){e.exports=n.p+"img/KristinMaurach_portrait_800.6e9de68e.jpg"},"6df3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",e._l(e.trainings,(function(t){return n("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[n("div",{staticClass:"article-card"},[n("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,"aria-label":t.title}},[n("b-card",{attrs:{"no-body":""}},[n("b-card-img-lazy",{attrs:{src:t.featuredImage.node.sourceUrl,alt:t.featuredImage.node.altText,offset:"1000",top:""}}),n("b-card-body",[n("b-card-title",{attrs:{title:t.title}}),n("b-card-text",[n("div",{domProps:{innerHTML:e._s(t.excerpt)}})]),n("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)],1)],1)])})),1)},a=[],i=(n("a9e3"),{name:"RandomTrainingsContainer",props:{number:{type:Number,default:3}},data:function(){return{trainings:Array}},mounted:function(){this.getTrainings()},watch:{$route:function(e,t){e!=t&&this.getTrainings()},"$store.state.trainings.trainings":function(){this.getTrainings()}},methods:{getRandom:function(e,t){var n=new Array(t),r=e.length,a=new Array(r);if(t>r)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*r);n[t]=e[i in a?a[i]:i],a[i]=--r in a?a[r]:r}return n},getTrainings:function(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number))}}}),s=i,l=n("2877"),c=Object(l["a"])(s,r,a,!1,null,null,null);t["a"]=c.exports},"6df9":function(e,t,n){e.exports=n.p+"img/coach.94fa3305.svg"},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var i,s;return a&&"function"==typeof(i=t.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(e,s),e}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("6eeb"),l=n("5135"),c=n("c6b6"),o=n("7156"),u=n("c04e"),d=n("d039"),h=n("7c73"),b=n("241c").f,m=n("06cf").f,g=n("9bf2").f,f=n("58a8").trim,p="Number",v=a[p],w=v.prototype,A=c(h(w))==p,y=function(e){var t,n,r,a,i,s,l,c,o=u(e,!1);if("string"==typeof o&&o.length>2)if(o=f(o),t=o.charCodeAt(0),43===t||45===t){if(n=o.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+o}for(i=o.slice(2),s=i.length,l=0;l<s;l++)if(c=i.charCodeAt(l),c<48||c>a)return NaN;return parseInt(i,r)}return+o};if(i(p,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,C=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof C&&(A?d((function(){w.valueOf.call(n)})):c(n)!=p)?o(new v(y(t)),n,C):y(t)},k=r?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;k.length>z;z++)l(v,_=k[z])&&!l(C,_)&&g(C,_,m(v,_));C.prototype=w,w.constructor=C,s(a,p,C)}},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("b-container",{staticClass:"hero d-flex justify-content-center align-items-center",attrs:{fluid:""}},[r("b-container",{staticClass:"p-0",staticStyle:{"max-width":"850px"}},[r("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[r("h1",[r("span",{staticClass:"bold display-2"},[e._v(" MFA "),r("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),r("br"),r("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Karriere- & Stellenportal nur für MFA & ZFA ")])]),r("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),r("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA)")]),e._v(". ")])]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm)}}},[r("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),r("b-input-group",[r("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:"Stelle finden..."},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),r("b-input-group-append",[r("b-button",{staticClass:"shadow1",attrs:{size:"lg",variant:"secondary",to:"/stellenangebote?searchTerm="+e.searchTerm}},[r("Fa",{attrs:{icon:"search"}})],1)],1)],1)],1),r("div",{staticClass:"mt-2 text-right"},[r("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1)],1)],1),r("b-container",{staticClass:"my-3 my-md-5 py-3 py-md-5"},[r("b-row",{staticClass:"flex-lg-row-reverse",attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:n("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130"}}),r("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),r("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:n("300b"),alt:"Medizinische Fachangestellte im Untersuchungsraum",height:"130"}}),r("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),r("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1),r("b-col",[r("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[r("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:n("6df9"),alt:"MFA studiert bei Weiterbildung",height:"130"}}),r("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),r("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)],1)],1),r("b-container",{staticClass:"bg-primary text-light py-5",attrs:{fluid:""}},[r("b-container",{staticClass:"py-0 py-md-3"},[r("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),r("b-row",{attrs:{cols:"1","cols-md":"3"}},[r("b-col",[r("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px"},attrs:{fluid:"",left:"",src:n("6535"),alt:"Portrait Kristin Maurach"}}),r("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),r("b-col",[r("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),r("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),r("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungstipps"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),r("b-col",[r("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),r("p",[r("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/article/warum-es-mfa-mal-anders-gibt"}},[r("Fa",{attrs:{icon:"caret-right"}}),e._v(" Mehr über die Story dahinter")],1)],1)])],1)],1)],1),r("b-container",{staticClass:"my-5 py-0 py-md-5 d-flex justify-content-center"},[r("StellenanzeigeSchaltenBanner")],1),r("b-container",[r("b-row",[r("b-col",{staticClass:"mb-5",attrs:{cols:"12",md:"4"}},[r("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),r("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),r("p",[e._v(" Als Medizinische / Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),r("p",[e._v(" Wir haben einige "),r("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),r("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),r("b-col",{attrs:{cols:"12",md:"8"}},[r("RandomTrainingsContainer",{attrs:{number:2}})],1)],1)],1),r("b-container",{staticClass:"bg-light-shade my-5 py-5",attrs:{fluid:""}},[r("b-container",[r("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),r("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),r("RandomArticlesContainer")],1)],1),r("Head",{attrs:{title:"Das Karriere- & Stellenportal nur für MFA & ZFA",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:e.snippet}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{staticClass:"overflow-hidden shadow1",staticStyle:{"max-width":"840px"},attrs:{"no-body":"",align:"center"}},[r("b-row",{staticClass:"p-4"},[r("b-col",{attrs:{md:"4"}},[r("b-img",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:n("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn"}})],1),r("b-col",{attrs:{md:"8"}},[r("b-card-body",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h2",{staticClass:"bold"},[r("em",[e._v("Motivierte")]),e._v(" und "),r("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")]),r("p",[e._v(" Erstellen Sie "),r("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem “Pay What You Want”* Modell veröffentlichen Sie Ihre Stellenanzeige bereits ab "+e._s((e.$config.payment.minCost/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency)+" à "+e._s(e.$config.payment.duration)+" Tage. ")]),r("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige schalten")])],1)],1)],1)],1)},s=[],l={name:"StellenanzeigeSchaltenBanner"},c=l,o=n("2877"),u=Object(o["a"])(c,i,s,!1,null,null,null),d=u.exports,h=n("6df3"),b=n("e674"),m={name:"Home",components:{StellenanzeigeSchaltenBanner:d,RandomTrainingsContainer:h["a"],RandomArticlesContainer:b["a"]},data:function(){return{searchTerm:"",snippet:[{type:"application/ld+json",inner:'{\n                        "@context": "http://schema.org",\n                        "@type" : "BreadcrumbList",\n                        "itemListElement": [{\n                            "@type": "ListItem",\n                            "position": 1,\n                            "name": "MFA mal anders",\n                            "item": "https://www.mfa-mal-anders.de"\n                        }]\n                    }'}]}}},g=m,f=Object(o["a"])(g,r,a,!1,null,null,null);t["default"]=f.exports},e674:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",e._l(e.articles,(function(t){return n("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[n("div",{staticClass:"article-card"},[n("b-link",{attrs:{to:"/blog/article/"+t.slug,"aria-label":t.title}},[n("b-card",{attrs:{"no-body":""}},[n("b-card-img-lazy",{attrs:{src:t.featuredImage?t.featuredImage.node.sourceUrl:"",alt:t.featuredImage?t.featuredImage.node.altText:"",offset:"1000",top:""}}),n("b-card-body",[n("b-card-title",{attrs:{title:t.title}}),n("b-card-text",[n("div",{domProps:{innerHTML:e._s(t.excerpt)}})]),n("b-button",{attrs:{to:"/blog/article/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)],1)],1)])})),1)},a=[],i=(n("a9e3"),{name:"RandomArticlesContainer",props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},mounted:function(){this.getArticles()},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},methods:{getRandom:function(e,t){var n=new Array(t),r=e.length,a=new Array(r);if(t>r)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*r);n[t]=e[i in a?a[i]:i],a[i]=--r in a?a[r]:r}return n},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}}),s=i,l=n("2877"),c=Object(l["a"])(s,r,a,!1,null,null,null);t["a"]=c.exports},fc51:function(e,t,n){e.exports=n.p+"img/career_.8a38acc4.svg"}}]);
//# sourceMappingURL=chunk-4b110bfb.2b361bc3.js.map