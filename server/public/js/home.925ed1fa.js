(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"300b":function(e,t,i){e.exports=i.p+"img/health_.7b347010.svg"},"31be":function(e,t,i){},"3c2c":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"article-card"},[i("b-link",{attrs:{to:"/blog/artikel/"+e.article.slug,"aria-label":e.article.title}},[i("div",{staticClass:"card mb-2"},[i("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.article.featuredImage?e.article.featuredImage.node.srcSet:"",src:e.article.featuredImage?e.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:e.article.featuredImage?e.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[e._v(e._s(e.article.title))]),i("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.article.excerpt)}}),i("hr"),i("div",{staticClass:"d-flex justify-content-between"},[e.article.author.node.avatar?i("div",{staticClass:"d-flex align-items-center"},[i("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.node.avatar.url,alt:e.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),e.article.author.node.name?i("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.node.name)+" ")]):e._e()],1):e._e(),i("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1)]),e.article.tags.nodes.length>0?i("span",{staticClass:"badge badge-pill badge-secondary"},[e._v(e._s(e.article.tags.nodes[0].name))]):e._e()],1)])],1)},r=[],n={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},s=n,l=(i("85fd"),i("2877")),c=Object(l["a"])(s,a,r,!1,null,"4f842045",null);t["a"]=c.exports},4811:function(e,t,i){"use strict";i("6028")},"572e":function(e,t,i){e.exports=i.p+"img/medical_research.5571fe9d.svg"},6028:function(e,t,i){},6535:function(e,t,i){e.exports=i.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"6df3":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},e._l(e.trainings,(function(t){return i("div",{key:t.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number]},[i("article",{staticClass:"article-card"},[i("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.slug,"aria-label":t.title}},[i("div",{staticClass:"card"},[i("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.featuredImage.node.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw",src:t.featuredImage.node.sourceUrl,alt:t.featuredImage.node.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[e._v(e._s(t.title))]),i("p",{staticClass:"card-text",domProps:{innerHTML:e._s(t.excerpt)}}),i("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)])],1)])})),0)},r=[],n={name:"RandomTrainingsContainer",props:{number:{type:Number,default:3}},data(){return{trainings:Array}},watch:{$route(e,t){e!=t&&this.getTrainings()},"$store.state.trainings.trainings"(){this.getTrainings()}},created(){this.$store.dispatch("getTrainings"),this.getTrainings()},methods:{getRandom(e,t){var i=new Array(t),a=e.length,r=new Array(a);if(t>a)throw new RangeError("getRandom: more elements taken than available");while(t--){var n=Math.floor(Math.random()*a);i[t]=e[n in r?r[n]:n],r[n]=--a in r?r[a]:a}return i},getTrainings(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number>this.$store.state.trainings.trainings.length?this.$store.state.trainings.trainings.length:this.number))}}},s=n,l=(i("4811"),i("2877")),c=Object(l["a"])(s,a,r,!1,null,"63e7054a",null);t["a"]=c.exports},"6df9":function(e,t,i){e.exports=i.p+"img/coach.94fa3305.svg"},"85fd":function(e,t,i){"use strict";i("31be")},a1fb:function(e,t,i){},b221:function(e,t,i){"use strict";i("a1fb")},bb51:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"container-fluid hero d-flex justify-content-center align-items-center"},[a("div",{staticClass:"container p-0",staticStyle:{"max-width":"850px"}},[e._m(0),a("JobSearchSingleForm")],1)]),a("div",{staticClass:"container mt-4 mt-lg-0"},[a("JobsTeaserContainer")],1),a("div",{staticClass:"container my-3 my-md-5 py-3 py-md-5"},[a("h2",{staticClass:"d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"},[e._v(" Deine berufliche Weiterentwicklung ")]),a("div",{staticClass:"row row-cols-1 row-cols-md-3 flex-lg-row-reverse"},[a("div",{staticClass:"col"},[a("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[a("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:i("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130","blank-width":"184","blank-height":"130",offset:"1000"}}),a("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),a("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),a("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),a("div",{staticClass:"col"},[a("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[a("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:i("300b"),alt:"Medizinische Fachangestellte im Untersuchungsraum",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),a("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),a("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),a("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1),a("div",{staticClass:"col"},[a("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[a("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:i("6df9"),alt:"MFA studiert bei Weiterbildung",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),a("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),a("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),a("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)]),a("div",[a("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"}},[a("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:i("4fef"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),a("div",[a("h2",{staticClass:"bold"},[e._v("Fortbildungskatalog")]),a("p",[e._v(" Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause! ")]),a("b-button",{attrs:{variant:"primary"}},[e._v("Zum Fortbildungskatalog")])],1)],1)],1)]),a("div",{staticClass:"container-fluid bg-primary text-light py-5"},[a("div",{staticClass:"container py-0 py-md-3"},[a("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),a("div",{staticClass:"row row-cols-1 row-cols-md-3"},[a("div",{staticClass:"col"},[a("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:i("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800","blank-width":"800","blank-height":"800","blank-color":"#f7f6f9",offset:"1000"}}),a("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),a("div",{staticClass:"col"},[a("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),a("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),a("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),a("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),a("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),a("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungs"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),a("div",{staticClass:"col"},[a("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),a("p",[a("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/artikel/warum-es-mfa-mal-anders-gibt"}},[a("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})]),e._v(" Mehr über die Story dahinter")])],1)])])])]),a("div",{staticClass:"container my-5 py-0 py-md-5 d-flex justify-content-center"},[a("StellenanzeigeSchaltenBanner")],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-5"},[a("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),a("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),a("p",[e._v(" Als Medizinische / Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),a("p",[e._v(" Wir haben einige "),a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),a("div",{staticClass:"col-12 col-md-8"},[a("RandomTrainingsContainer",{attrs:{number:2}})],1)])]),a("div",{staticClass:"container-fluid bg-light-shade my-5 py-5 px-0"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),a("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),a("RandomArticlesContainer")],1)]),a("Head",{attrs:{title:"Das Stellen- & Karriereportal nur für MFA & ZFA",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:e.snippet}})],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[i("h1",[i("span",{staticClass:"bold display-2"},[e._v(" MFA "),i("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),i("br"),i("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),i("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),i("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA)")]),e._v(". ")])])}],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"card  overflow-hidden shadow1",staticStyle:{"max-width":"840px"}},[a("div",{staticClass:"row p-4"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body  h-100 p-4"},[e._m(0),a("p",[e._v(" Erstellen Sie "),a("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem "),a("strong",{staticClass:"text-primary"},[e._v("individuellen Paketen")]),e._v(" veröffentlichen Sie Ihre Stellenanzeige bereits ab "),a("strong",{staticClass:"text-primary"},[e._v(e._s((e.$config.pricingPackages[0].price/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency))]),e.$config.payment.tax?a("span",{staticClass:"small"},[e._v(" (zzgl. USt)")]):e._e(),e._v(". ")]),a("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"md"}},[e._v("Stellenanzeige schalten")])],1)]),a("div",{staticClass:"col-md-4"},[a("b-img-lazy",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:i("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn","blank-width":"248","blank-height":"316",offset:"1000",fluid:""}})],1)])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h2",{staticClass:"h3 bold"},[i("em",[e._v("Motivierte")]),e._v(" und "),i("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")])}],l={name:"StellenanzeigeSchaltenBanner"},c=l,d=i("2877"),o=Object(d["a"])(c,n,s,!1,null,null,null),h=o.exports,u=i("6df3"),b=i("e674"),m=i("68b7"),g=i("7b34"),f={name:"Home",components:{StellenanzeigeSchaltenBanner:h,RandomTrainingsContainer:u["a"],RandomArticlesContainer:b["a"],JobsTeaserContainer:m["a"],JobSearchSingleForm:g["a"]},data(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            }]\n          }'}]}}},v=f,p=(i("b221"),Object(d["a"])(v,a,r,!1,null,"113cf7c1",null));t["default"]=p.exports},e674:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},e._l(e.articles,(function(t){return i("div",{key:t.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number]},[i("ArticleCard",{attrs:{article:t}})],1)})),0)},r=[],n=i("3c2c"),s={name:"RandomArticlesContainer",components:{ArticleCard:n["a"]},props:{number:{type:Number,default:3}},data(){return{articles:Array}},watch:{$route(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles"(){this.getArticles()}},async created(){this.$store.dispatch("getArticles"),this.getArticles()},methods:{getRandom(e,t){var i=new Array(t),a=e.length,r=new Array(a);if(t>a)throw new RangeError("getRandom: more elements taken than available");while(t--){var n=Math.floor(Math.random()*a);i[t]=e[n in r?r[n]:n],r[n]=--a in r?r[a]:a}return i},getArticles(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},l=s,c=i("2877"),d=Object(c["a"])(l,a,r,!1,null,null,null);t["a"]=d.exports},fc51:function(e,t,i){e.exports=i.p+"img/career_.8a38acc4.svg"}}]);
//# sourceMappingURL=home.925ed1fa.js.map