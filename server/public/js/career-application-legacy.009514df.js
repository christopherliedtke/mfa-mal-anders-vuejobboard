(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-application"],{"0942":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("2b0e"),r=n("b42e"),a=n("c637"),s=n("a723"),l=n("cf75");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=Object(l["c"])({animation:Object(l["b"])(s["s"],"wave"),height:Object(l["b"])(s["s"]),size:Object(l["b"])(s["s"]),type:Object(l["b"])(s["s"],"text"),variant:Object(l["b"])(s["s"]),width:Object(l["b"])(s["s"])},a["W"]),d=i["default"].extend({name:a["W"],functional:!0,props:u,render:function(e,t){var n,i=t.data,a=t.props,s=a.size,l=a.animation,u=a.variant;return e("div",Object(r["a"])(i,{staticClass:"b-skeleton",style:{width:s||a.width,height:s||a.height},class:(n={},c(n,"b-skeleton-".concat(a.type),!0),c(n,"b-skeleton-animate-".concat(l),l),c(n,"bg-".concat(u),u),n)}))}})},"0cb2":function(e,t,n){var i=n("e330"),r=n("7b0b"),a=Math.floor,s=i("".charAt),l=i("".replace),c=i("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,i,h,o){var b=n+e.length,g=i.length,f=d;return void 0!==h&&(h=r(h),f=u),l(o,f,(function(r,l){var u;switch(s(l,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,b);case"<":u=h[c(l,1,-1)];break;default:var d=+l;if(0===d)return r;if(d>g){var o=a(d/10);return 0===o?r:o<=g?void 0===i[o-1]?s(l,1):i[o-1]+s(l,1):r}u=i[d-1]}return void 0===u?"":u}))}},"1fc7":function(e,t,n){"use strict";n("9463")},"22d6":function(e,t,n){},3219:function(e,t,n){e.exports=n.p+"img/Vorlage_Bewerbungsanschreiben_300.4951005d.jpg"},"3c2c":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"article-card"},[n("b-link",{attrs:{to:"/blog/artikel/"+e.article.slug,"aria-label":e.article.title}},[n("div",{staticClass:"card mb-2"},[n("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:e.article.featuredImage?e.article.featuredImage.srcSet:"",src:e.article.featuredImage?e.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:e.article.featuredImage?e.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(e.article.title))]),n("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.article.excerpt)}}),n("hr"),n("div",{staticClass:"d-flex justify-content-between"},[e.article.author.avatarUrl?n("div",{staticClass:"d-flex align-items-center"},[n("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.avatarUrl,alt:e.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),e.article.author.firstName?n("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.firstName)+" ")]):e._e()],1):e._e(),n("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1)]),e.article.tags.length>0?n("span",{staticClass:"badge badge-pill badge-secondary"},[e._v(e._s(e.article.tags[0]))]):e._e()],1)])],1)},r=[],a={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},s=a,l=(n("f425"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"f23a1062",null);t["a"]=c.exports},"408a":function(e,t,n){var i=n("e330");e.exports=i(1..valueOf)},"448f":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[n("div",{staticClass:"card-body p-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-xl-9"},[n("h2",{staticClass:"display-4 bold",domProps:{innerHTML:e._s(e.header)}}),n("p",{staticClass:"lead bold text-primary uppercase"},[e._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),n("p",[e._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),n("b-button",{attrs:{to:"/stellengesuche/info",variant:"secondary"}},[e._v("Mehr erfahren")])],1)])])])},r=[],a={name:"JobSeeksLargeBanner",props:{header:{type:String,default:"<strong>Stellengesuch schalten</strong>"}}},s=a,l=(n("1fc7"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"003c3c46",null);t["a"]=c.exports},5319:function(e,t,n){"use strict";var i=n("2ba4"),r=n("c65b"),a=n("e330"),s=n("d784"),l=n("d039"),c=n("825a"),u=n("1626"),d=n("5926"),h=n("50c4"),o=n("577e"),b=n("1d80"),g=n("8aa5"),f=n("dc4a"),m=n("0cb2"),p=n("14c3"),v=n("b622"),w=v("replace"),_=Math.max,k=Math.min,D=a([].concat),z=a([].push),B=a("".indexOf),C=a("".slice),x=function(e){return void 0===e?e:String(e)},A=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),y=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,n){var a=S?"$":"$0";return[function(e,n){var i=b(this),a=void 0==e?void 0:f(e,w);return a?r(a,e,i,n):r(t,o(i),e,n)},function(e,r){var s=c(this),l=o(e);if("string"==typeof r&&-1===B(r,a)&&-1===B(r,"$<")){var b=n(t,s,l,r);if(b.done)return b.value}var f=u(r);f||(r=o(r));var v=s.global;if(v){var w=s.unicode;s.lastIndex=0}var A=[];while(1){var S=p(s,l);if(null===S)break;if(z(A,S),!v)break;var y=o(S[0]);""===y&&(s.lastIndex=g(l,h(s.lastIndex),w))}for(var E="",I=0,M=0;M<A.length;M++){S=A[M];for(var F=o(S[0]),T=_(k(d(S.index),l.length),0),j=[],N=1;N<S.length;N++)z(j,x(S[N]));var L=S.groups;if(f){var $=D([F],j,T,l);void 0!==L&&z($,L);var P=o(i(r,void 0,$))}else P=m(F,l,T,j,L,r);T>=I&&(E+=C(l,I,T)+P,I=T+F.length)}return E+C(l,I)}]}),!y||!A||S)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("e330"),r=n("1d80"),a=n("577e"),s=n("5899"),l=i("".replace),c="["+s+"]",u=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),h=function(e){return function(t){var n=a(r(t));return 1&e&&(n=l(n,u,"")),2&e&&(n=l(n,d,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},"5e36":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"card overflow-hidden shadow1"},[i("div",{staticClass:"row no-gutters p-3"},[e.compact?e._e():i("div",{staticClass:"col-md-3"},[i("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:n("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),i("div",{staticClass:"col"},[i("div",{staticClass:"card-body p-3 p-lg-4"},[i("h3",{class:["bold",e.compact?"h2":"h1"]},[e._v(e._s(e.header))]),e._t("desc",(function(){return[e._m(0)]})),i("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[e._v("Zu den Stellenangeboten")])],2)])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Bist Du auf der Suche nach einer "),n("strong",{staticClass:"text-primary"},[e._v("neuen Herausforderung?")]),n("br"),e._v(" Du willst Dich "),n("strong",{staticClass:"text-primary"},[e._v("beruflich weiterentwickeln?")]),n("br"),e._v(" Finde bei uns Deinen nächsten Job! ")])}],a={name:"ToJobboardBanner",props:{header:{type:String,default:"Der richtige Job für Dich!"},compact:{type:Boolean,default:!1}}},s=a,l=(n("a196"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"6ae0daaa",null);t["a"]=c.exports},"6c3c":function(e,t,n){e.exports=n.p+"img/Vorlage_Lebenslauf_300.1c083b63.jpg"},7156:function(e,t,n){var i=n("1626"),r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var s,l;return a&&i(s=t.constructor)&&s!==n&&r(l=s.prototype)&&l!==n.prototype&&a(e,l),e}},"78bf":function(e,t,n){"use strict";n("c6be")},7953:function(e,t,n){},9463:function(e,t,n){},9482:function(e,t,n){e.exports=n.p+"img/innovation_.f9570acd.svg"},a196:function(e,t,n){"use strict";n("7953")},a9e3:function(e,t,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("e330"),s=n("94ca"),l=n("6eeb"),c=n("1a2d"),u=n("7156"),d=n("3a9b"),h=n("d9b5"),o=n("c04e"),b=n("d039"),g=n("241c").f,f=n("06cf").f,m=n("9bf2").f,p=n("408a"),v=n("58a8").trim,w="Number",_=r[w],k=_.prototype,D=r.TypeError,z=a("".slice),B=a("".charCodeAt),C=function(e){var t=o(e,"number");return"bigint"==typeof t?t:x(t)},x=function(e){var t,n,i,r,a,s,l,c,u=o(e,"number");if(h(u))throw D("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=v(u),t=B(u,0),43===t||45===t){if(n=B(u,2),88===n||120===n)return NaN}else if(48===t){switch(B(u,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(a=z(u,2),s=a.length,l=0;l<s;l++)if(c=B(a,l),c<48||c>r)return NaN;return parseInt(a,i)}return+u};if(s(w,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var A,S=function(e){var t=arguments.length<1?0:_(C(e)),n=this;return d(k,n)&&b((function(){p(n)}))?u(Object(t),n,S):t},y=i?g(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;y.length>E;E++)c(_,A=y[E])&&!c(S,A)&&m(S,A,f(_,A));S.prototype=k,k.constructor=S,l(r,w,S)}},ab2f:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-card-placeholder mb-2"},[n("div",{staticClass:"card"},[n("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),n("div",{staticClass:"card-body"},[n("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),n("div",{staticClass:"mt-3"},[n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),n("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"d-flex align-items-center"},[n("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),n("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),n("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},r=[],a=n("2b0e"),s=n("0942");a["default"].component("BSkeleton",s["a"]);var l={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,u=(n("78bf"),n("2877")),d=Object(u["a"])(c,i,r,!1,null,"d6454454",null);t["a"]=d.exports},c6be:function(e,t,n){},ca31:function(e,t,n){e.exports=n.p+"img/search_engine__monochromatic.50ef63ab.svg"},d67a:function(e,t,n){"use strict";n("22d6")},db00:function(e,t,n){e.exports=n.p+"img/personal_data__monochromatic.40edb4f4.svg"},e674:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.articles&&e.articles.length>0?n("div",{staticClass:"row"},e._l(e.articles,(function(t){return n("ArticleCard",{key:t.slug,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number],attrs:{article:t}})})),1):n("div",{staticClass:"row"},e._l(e.number,(function(t){return n("ArticleCardPlaceholder",{key:t,class:["col-12 mb-4","col-md-6","col-lg-"+12/e.number]})})),1)])},r=[],a=n("1da1"),s=(n("96cf"),n("a9e3"),n("99af"),n("3c2c")),l=n("ab2f"),c={name:"RandomArticlesContainer",components:{ArticleCard:s["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:null}},watch:{$route:function(e,t){e!=t&&this.getArticles()}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getArticles();case 1:case"end":return t.stop()}}),t)})))()},methods:{getArticles:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/graphql",{params:{query:"\n              query {\n                articles(random: ".concat(!0,", limit: ",e.number,', exclude: "').concat(e.$route.params.slug?e.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(n=t.sent,n.data.data.articles){t.next=6;break}return t.abrupt("return");case 6:e.articles=n.data.data.articles,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},u=c,d=n("2877"),h=Object(d["a"])(u,i,r,!1,null,null,null);t["a"]=h.exports},ec19:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"title"},[i("h1",[i("strong",[e._v(e._s(e.title))]),e._v(" "),i("br"),i("span",{staticClass:"h4"},[e._v("Tipps | Beispiele | Vorlage")])]),i("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),i("div",{staticClass:"container py-3 py-lg-5"},[i("b-img-lazy",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5 w-100",attrs:{fluid:"",srcset:"\n        /img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_350.jpg 350w,\n        /img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_745.jpg 745w,\n        /img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_1200.jpg 1200w\n      ",sizes:"100vw",src:"/img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_1200.jpg",alt:"Banner - Schnell und einfach eine Top-Bewerbung schreiben",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000"}}),i("p",[e._v(" Hast Du eine Stellenanzeige entdeckt, die Dir richtig gut gefällt? Am liebsten würdest Du Dich bewerben, wäre da nicht der innere Schweinehund, dem es vor der Erstellung der Bewerbungsunterlagen graut. ")]),i("p",[e._v(" Nutze unsere Vorlage zum Anschreiben und Lebenslauf und erstelle schnell und unkompliziert eine Top-Bewerbung. ")]),i("p",[e._v(" Bewerbungsunterlagen unterliegen heute nicht mehr ganz so strengen Vorschriften, wie es noch vor ein paar Jahren der Fall war. Die meisten Arbeitgeber suchen händeringend nach neuen Mitarbeitern. Daher sollte der Bewerbungsprozess für Kandidaten so einfach, wie möglich gemacht werden. ")]),i("nav",{staticClass:"content my-4 py-4 px-3 px-lg-5"},[i("h2",{staticClass:"h1"},[e._v("Inhalt")]),i("ol",{staticClass:"text-tertiary pl-4"},[i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben"}},[e._v("Bewerbungsschreiben")]),i("ol",[i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-briefkopf"}},[e._v("Briefkopf")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-betreff"}},[e._v("Betreff")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-anrede"}},[e._v("Anrede")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-einleitung"}},[e._v("Einleitung")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-hauptteil"}},[e._v("Hauptteil")]),i("ol",[i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-hauptteil-qualifikationen"}},[e._v("Qualifikationen")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-hauptteil-motivation"}},[e._v("Motivation & Ziele")])],1)])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-schlussteil"}},[e._v("Schlussteil")]),i("ol",[i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-schlussteil-gehaltsvorstellungen"}},[e._v("Gehaltsvorstellungen")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-schlussteil-eintrittsdatum"}},[e._v("Eintrittsdatum")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#anschreiben-schlussteil-letzter-satz"}},[e._v("Letzter Satz")])],1)])],1)])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#lebenslauf"}},[e._v("Lebenslauf")])],1),i("ol",[i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#lebenslauf-aufbau-persoenliche-daten"}},[e._v("Persönliche Daten")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#lebenslauf-aufbau-berufliche-stationen"}},[e._v("Berufliche Stationen")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#lebenslauf-aufbau-bildung"}},[e._v("Bildung")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#lebenslauf-aufbau-besondere-qualifikationen"}},[e._v("Besondere Qualifikationen und Kenntnisse")])],1),i("li",{staticClass:"lead mt-3"},[i("b-link",{attrs:{to:"#lebenslauf-aufbau-hobbys"}},[e._v("Hobbys und weitere Interessen und Tätigkeiten")])],1)])])]),i("blockquote",[e._v(" Bevor Du Dich nicht bewirbst und Dir einen tollen Job entgehen lässt, nutze unsere Vorlage für eine Top Bewerbung inklusive Anschreiben und Lebenslauf. ")]),i("div",{staticClass:"d-flex justify-content-center mb-5"},[i("b-img",{staticClass:"mx-3 shadow1",staticStyle:{width:"35vw","max-width":"300px",height:"auto"},attrs:{src:n("3219"),alt:"Bild von Mustervorlage für Motivationsschreiben",width:"300",height:"425"}}),i("b-img",{staticClass:"mx-3 shadow1",staticStyle:{width:"35vw","max-width":"300px",height:"auto"},attrs:{src:n("6c3c"),alt:"Bild von Mustervorlage für Lebenslauf",width:"300",height:"425"}})],1),i("div",{staticClass:"d-flex justify-content-center mb-5"},[i("b-button",{attrs:{href:"/downloads/Bewerbungsunterlagen.zip",variant:"primary",size:"lg"},on:{click:function(t){return e.track("download","bewerbungsunterlagen")}}},[e._v("Download")])],1),i("h2",{staticClass:"mb-4"},[e._v(" Mit einer Top-Bewerbung zum Vorstellungsgespräch ")]),i("p",[e._v(" Auch wenn Medizinische Fachangestelle | Zahnmedizinische Fachangestellte heute sehr gefragt sind und sich Ihren Arbeitgeber in der Regel aussuchen können, ist es immer von Vorteil, mit seiner Bewerbung positiv hervorzustechen. Je nachdem, in welchem Bereich man sich bewirbt (Arztpraxis, MVZ, Krankenhaus, Verwaltung ...) sind mehr oder weniger spezialisierte Personaler für die Sichtung deiner Unterlagen verantwortlich. Auch die Qualität und Quantität der Konkurrenz kann sehr unterschiedlich sein. ")]),i("p",[e._v(" Erfahrungsgemäß ist es nicht besonders schwer positiv aufzufallen, da viele MitbewerberInnen oftmals nicht in der Lage sind, eine fehlerfreie und ansehnliche Bewerbung zusammenzustellen. Mit unseren Tipps gehörst Du garantiert nicht zu dieser Gruppe. ")]),i("h3",{staticClass:"h5 bold"},[e._v("Der erste Eindruck muss stimmen")]),i("p",[e._v(" Die Bewerbung muss optisch ansprechend aussehen. Dafür brauchst Du keine Skills eines Grafikers, um eine gut strukturierte und übersichtliche Bewerbung zu erstellen. In unserer Vorlage musst Du nur noch deinen Text einfügen. ")]),i("p",[e._v(" Tipp: Passe die Farben in deiner Bewerbung denen des Unternehmens an. Das vermittelt direkt, dass Du Dich mit der Firma beschäftigt hast und Dich mit ihr identifizierst. Es wird bei der Person, die deine Bewerbung sichtet, ein positives Gefühl erzeugen. Außerdem wirken deine Unterlagen individueller. ")]),i("h3",{staticClass:"h5 bold"},[e._v("Das Bewerbungsbild ist kein Muss mehr")]),i("p",[e._v(" Früher musste jeder Bewerbung ein Foto beigefügt sein. Heute ist das nicht mehr gängige Praxis und viele Arbeitgeber erwähnen es auch nicht mehr in den Anforderungen an eine Bewerbung. ")]),i("p",[e._v(" Wenn Du ein Bild von Dir mitschicken möchtest, sollte es von guter Qualität und kein offensichtliches Selfie oder Urlaubsfoto sein. Es muss nicht im Blazer sein, sollte aber seriös und sympathisch aussehen. Falls Du kein Foto von Dir hast, muss Du kein schlechtes Gewissen haben, wenn Du keins mitschickst. Ein Arbeitgeber sollte deine Qualitäten nicht nach dem Aussehen oder daran messen, ob Du ein Bild deiner Bewerbung anhängst. ")]),i("JobSeeksLargeBanner",{staticClass:"my-4 my-lg-5"}),e._m(0),i("h3",{attrs:{id:"anschreiben-briefkopf"}},[e._v("Briefkopf")]),i("p",[e._v(" Ein korrekter Briefkopf für Dein Anschreiben sollte folgende Bestandteile beinhalten: ")]),i("h4",{staticClass:"h5 bold"},[e._v("Deine Anschrift")]),e._m(1),i("h4",{staticClass:"h5 bold"},[e._v("Die Adresse des Empfängers")]),e._m(2),i("h4",{staticClass:"h5 bold mb-4"},[e._v("Aktuelles Datum und Ort")]),i("h3",{attrs:{id:"anschreiben-betreff"}},[e._v("Betreff")]),i("p",[e._v(" Im Betreff Deines Anschreibens weist Du direkt auf die Stellenanzeige hin. Gibt es eine Referenznummer zur Stellenanzeige, ist hier die richtige Stelle, um diese zu erwähnen. Für die Übersichtlichkeit der gesamten Bewerbung, ist es ratsam, den Betreff in fett zu formatieren. Deine Betreffzeile für das Anschreiben könnte beispielsweise wie folgt aussehen: ")]),i("blockquote",{staticClass:"lead mb-4"},[e._v(" Bewerbung als Medizinische Fachangestellte im Bereich XY – Referenznummer XY ")]),i("h3",{attrs:{id:"anschreiben-anrede"}},[e._v("Anrede")]),i("p",[e._v(" Für die Anrede im Anschreiben ist es ideal, wenn Du die korrekte AnsprechpartnerIn bereits per Namen kennst. In der Regel findest Du die AnsprechpartnerIn in der Stellenanzeige. ")]),i("p",[e._v(" Wenn Du vorab Fragen zur Stellenanzeige hast und eine in der Anzeige eine Telefonnummer ausgewiesen ist, kannst Du die Gelegenheit direkt nutzen und neben Antworten zu Deinen Fragen auch gleich den Namen der AnsprechpartnerIn herauszubekommen. Das unterstreicht auch noch einmal Deine Motivation und Du bleibst wahrscheinlich im Gedächtnis hängen. ")]),i("p",[e._v(" Achte unbedingt darauf, den Namen korrekt zu schreiben, sonst ist der erste Eindruck direkt dahin. ")]),i("h3",{attrs:{id:"anschreiben-einleitung"}},[e._v("Einleitung")]),i("p",[e._v(" Beginne mit einer kleinen Einleitung, die nicht mehr als 2-3 kurze Sätze beinhaltet. Wecke bei dem Gegenüber Interesse, beschreibe deine aktuelle Situation und warum Du Dich auf die Stelle bewerben willst. ")]),i("p",[e._v(" Fragen, die Du in Deiner Einleitung bereits beantworten kannst: ")]),e._m(3),i("p",[e._v(" Schreibe keine Standard-Floskeln, die auf jede Firma zutreffen können. Sei so individuell wie möglich und verfasse einen Text, der genau zu der Stelle und dem Arbeitgeber passt. Hier ein paar Beispiele: ")]),i("blockquote",{staticClass:"lead"},[e._v(" Meine X Jahre Berufserfahrung als AbrechnungsmanagerIn in einer Arztpraxis möchte ich gern in einem neuen ambitionierten Arbeitsumfeld in Ihrem Team einbringen... ")]),i("blockquote",{staticClass:"lead mb-4"},[e._v(" Das Thema XY beschäftigt mich in meinem beruflichen Alltag als Medizinische Fachangestellte schon seit einiger Zeit. Gern würde ich meine erworbenen Kompetenzen in dem Bereich als XY in Ihrem Unternehmen einbringen... ")]),i("h3",{attrs:{id:"anschreiben-hauptteil"}},[e._v("Hauptteil")]),i("h4",{attrs:{id:"anschreiben-hauptteil-qualifikationen"}},[e._v("Deine Qualifikationen")]),i("p",[e._v(" Beschreibe als nächstes deine Fertigkeiten, die zur Stelle passen. Orientiere Dich hier an der Stellenanzeige und finde Beispiele aus deiner bisherigen beruflichen Praxis und deinen Erfahrungen, die dazu passen. Erwähne auch Fortbildungen und Weiterbildungen, die für die Stelle relevant sein können. ")]),i("b-img",{staticClass:"pr-3 pr-md-5 pb-3",staticStyle:{width:"50vw","max-width":"350px"},attrs:{left:"",src:n("9482"),alt:"Person bearbeitet Bewerbungsunterlagen am Schreibtisch"}}),i("p",[e._v(" Nenne zusätzlich ein konkretes Projekt oder Aufgabengebiet, in dem Du in der Vergangenheit gearbeitet hast. Dies sollte wieder zur Stelle und dem genannten Aufgabenprofil passen. ")]),i("p",[e._v(" Ein Beispiel: Du bewirbst Dich auf eine Stelle als Praxismanager/in in einer Praxis, die von Papier- auf digitale Akten umstellen will. Vor ein paar Jahren hast Du das Prozedere bei deinem alten Arbeitgeber schon durchlaufen. Nutze die Erfahrung und erzähle davon: ")]),i("p",[e._v(" „In der Praxis XY habe ich aktiv bei der Umstellung von Papierakte auf digitale Patientenkartei mitgewirkt. Dabei war ich verantwortlich für die digitale Archivierung der vorhanden Papierdokumente und die Einführung eines Online-Dokumentensystems.“ ")]),i("p",[e._v(" Erwähne auch Erfolge, die Du in deinem Beruf erzielt hast. Beziehe Dich hierbei am besten auf Projekte und Aufgabengebieten, die zur Stelle passen. Zum Beispiel, dass Du für das Impfmanagement verantwortlich warst und ihr die durchschnittliche Impfquote in der Praxis durch dein Engagement deutlich erhöhen konntet. ")]),i("h4",{attrs:{id:"anschreiben-hauptteil-motivation"}},[e._v("Motivation und Ziele")]),i("p",[e._v(" Im letzten Absatz beschreibst du, was Dich motiviert bei dem ausgewählten Unternehmen zu arbeiten. Warum möchtest Du ausgerechnet in der Praxis oder der Firma arbeiten? Bessere Entwicklungsmöglichkeiten? Kleineres, familiäreres Team? ")]),i("h3",{attrs:{id:"anschreiben-schlussteil"}},[e._v("Schlussteil")]),i("p",[e._v(" Mit dem Schlussteil kannst Du Deine Bewerbung abrunden und noch einmal auf ein paar wichtige Eckpunkte Deiner Bewerbung eingehen. ")]),i("h4",{attrs:{id:"anschreiben-schlussteil-gehaltsvorstellungen"}},[e._v(" Gehaltsvorstellungen ")]),i("p",[e._v(" Insofern in der Stellenauschreibung nicht explizit darauf hingewiesen wird, einen Gehaltswunsch anzugeben, ist dieser Teil nicht zwingend notwendig. Möchtest Du jedoch auf Nummer sicher gehen, dass Dein Gehaltswunsch zum Budget der Stelle passt, ist es empfehlenswert hier einen Wert anzugeben. Wenn Du unsicher bist, wie viel Gehalt Du verlangen kannst, schau Dir unseren "),i("b-link",{attrs:{to:"/karriere/mfa/gehalt#gehaltsrechner"}},[e._v("MFA Gehaltsrechner")]),e._v(" bzw. "),i("b-link",{attrs:{to:"/karriere/zfa/gehalt#gehaltsrechner"}},[e._v("ZFA Gehaltsrechner")]),e._v(" an. Du solltest Dich in jedem Fall nicht unter Wert verkaufen. ")],1),i("blockquote",{staticClass:"lead"},[e._v(" Meine Gehaltsvorstellungen liegen bei 3.200,- Euro brutto im Monat. ")]),i("h4",{attrs:{id:"anschreiben-schlussteil-eintrittsdatum"}},[e._v("Eintrittsdatum")]),i("p",[e._v(" Gib unbedingt auch Dein frühstmögliches Eintrittsdatum an. Schaue gegebenenfalls noch einmal in Deinen aktuellen Arbeitsvertrag, um Deine Kündigungsfrist zu prüfen. ")]),i("blockquote",{staticClass:"lead"},[e._v(" Ab dem XY stehe ich Ihnen mit meinem vollen Engagement zur Verfügung. ")]),i("h4",{attrs:{id:"anschreiben-schlussteil-letzter-satz"}},[e._v("Letzter Satz")]),i("p",[e._v(" Im letzten Satz des Anschreibens verabschiedest Du Dich höflich und bekräftigst, dass Du Dich über eine Einladung zum Vorstellungsgespräch freust. ")]),i("blockquote",{staticClass:"lead"},[e._v(" Über eine Einladung zum persönlichen Gespräch freue ich mich. ")]),e._m(4),i("p",[e._v(" Achte auch hier auf eine übersichtliche Darstellung und passe das Design farblich dem Anschreiben an. ")]),i("h3",{attrs:{id:"lebenslauf-aufbau"}},[e._v("Aufbau und Inhalte")]),i("p",[e._v(" Was gehört alles in einen Lebenslauf? Hier geben wir Dir eine Übersicht. ")]),i("b-img",{staticClass:"p-2",staticStyle:{width:"50vw","max-width":"350px"},attrs:{right:"",src:n("db00"),alt:"Grafik von einem Lebenslauf"}}),i("h4",{attrs:{id:"lebenslauf-aufbau-persoenliche-daten"}},[e._v("Persönliche Daten")]),i("p",[e._v(" Zu Deinen perönlichen Daten gehören "),i("strong",[e._v("Vor- und Nachname, Anschrift")]),e._v(". Heutzutage haben Dinge wie Staatsangehörigkeit, Familienstand oder Geburtsdatum im Normalfall nicht in die Bewerbung. Das verhindert zumindest in gewissem Maße, dass Du wegen dieser Faktoren diskriminierst wirst. Sollte Dir so etwas im Laufe Deiner Bewerbung passieren, solltest Du Dich unbedingt an "),i("b-link",{attrs:{href:"https://www.antidiskriminierungsstelle.de/DE/startseite/startseite-node.html",target:"_blank"}},[e._v("entsprechende Stellen")]),e._v(" wenden. ")],1),i("h4",{attrs:{id:"lebenslauf-aufbau-berufliche-stationen"}},[e._v("Berufliche Stationen")]),i("p",[e._v(" Liste deine beruflichen Stationen auf und schreibe immer 2-3 Beispiele zu den Aufgaben, die Du bei den einzelnen Arbeitgebern hattest. Das macht deinen Lebenslauf etwas lebendiger und hebt Dich von anderen Bewerbern ab. Auch Praktika und Ausbildung gehören hierher. Achte darauf, dass Dein Lebenslauf speziell an dieser Stelle lückenlos ist. Hast Du berufliche Auszeiten genommen, gib diese an. Idealerweise kannst Du sogar persönliche Kompetenzgewinne aus der Auszeit ableiten. ")]),i("p",[e._v(" Du könntest beispielsweise aus Deiner Elternzeit auf Deine Stressresistenz und Organisationstalent hinweisen. ")]),i("h4",{attrs:{id:"lebenslauf-aufbau-bildung"}},[e._v("Bildung")]),i("p",[e._v(" Deinen Bildungsweg kannst Du ganz klassisch mit Name der Schule/ Einrichtung, Dauer und dem erworbenen Abschluss aufführen. Bei guten und sehr guten Noten erwähne deine Abschlussnote. Man darf ruhig ein bisschen prahlen 😊. ")]),i("h4",{attrs:{id:"lebenslauf-aufbau-besondere-qualifikationen"}},[e._v(" Besondere Qualifikationen und Kenntnisse ")]),i("p",[e._v(" Gut ist immer, wenn Du zusätzliche Qualifikationen erworben hast, die Dich im Berufsleben weiterbringen. Diese solltest Du unbedingt erwähnen. Dazu zählen z. B. Weiterbildungen, Fortbildungen, ein berufsbegleitendes Studium oder auch erworbene Kenntnisse, die Du Dir privat angeeignet hast. ")]),i("p",[e._v(" Auch spezielle EDV-Kenntnisse, Sprachkenntnisse oder beispielsweise einen Führerschein solltest Du hier erwähnen. ")]),i("h4",{attrs:{id:"lebenslauf-aufbau-hobbys"}},[e._v(" Hobbys und weitere Interessen und Tätigkeiten ")]),i("p",[e._v(" Hier solltest Du nicht unbedingt alles aufzählen, was Dir einfällt. Achte stattdessen darauf, Tätigkeiten zu erwähnen, die Dich auch im beruflichen Leben an der einen oder anderen Stelle weiterbringen. ")]),i("p",[e._v(" In der Mustervorlage findest Du im Lebenslauf einen kleinen Abschnitt „Über mich“. Beschreibe Dich in einem Satz oder stichpunktartig. Beziehe Dich hier am besten auf die Anforderungen und Fertigkeiten von der Stellenanzeige und hebe deine Stärken hervor, die für die Stelle wichtig sind. ")]),i("p",[e._v(" Und jetzt, erstelle schnell deine Top-Bewerbung für deinen Traumjob. Mfa mal anders drückt Dir die Daumen für die Bewerbung und wünscht viel Erfolg! ")]),i("div",{staticClass:"d-flex justify-content-center my-5"},[i("b-button",{attrs:{href:"/downloads/Bewerbungsunterlagen.zip",variant:"primary",size:"lg"},on:{click:function(t){return e.track("download","bewerbungsunterlagen")}}},[e._v("Download Bewerbungsunterlagen")])],1),i("ToJobboardBanner",{staticClass:"my-5 mx-auto"}),i("RandomArticlesContainer",{staticClass:"my-5 mx-auto"})],1),i("ScrollToTopBtn"),i("Head",{attrs:{title:e.title+" | Tipps | Beispiele | Vorlage",desc:"Bewerbungstipps für Medizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Lebenslauf | Anschreiben | Tipps und mehr",img:"/img/MfaMalAnders_Bewerbungstipps_mh2kqw_c_scale,w_1200.jpg",script:e.snippet}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"my-4",attrs:{id:"anschreiben"}},[n("span",{staticClass:"display-4 bold"},[e._v("Bewerbungs­schreiben")]),e._v(" "),n("br"),n("span",{staticClass:"h5"},[e._v("für Medizinische Fachangestellte (MFA) & Zahnmedizinische Fachangestellte (ZFA)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Vor- und Nachname")]),n("li",[e._v("Staße und Hausnummer")]),n("li",[e._v("PLZ und Wohnort")]),n("li",[e._v("Telefonnummer")]),n("li",[e._v("E-Mail Adresse")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Name des Arbeitgebers")]),n("li",[e._v(" Idealerweise kennst Du die AnsprechpartnerIn für die offene Stelle mit Anrede, Vor- und Nachname ")]),n("li",[e._v("Straße und Hausnummer")]),n("li",[e._v("PLZ und Wohnort")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v(" Warum bewirbst Du Dich? ")]),n("li",[e._v(" Was interessiert Dich an dem Arbeitgeber? ")]),n("li",[e._v(" Warum bist Du die Richtige für die Stelle (mit 1-2 Stichworten passend zur Stellenausschreibung)? ")]),n("li",[e._v(" Welche Kompetenz / Erfahrung macht Dich zur idealen BewerberIn? ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"my-4",attrs:{id:"lebenslauf"}},[n("span",{staticClass:"display-4 bold"},[e._v("Lebenslauf")]),e._v(" "),n("br"),n("span",{staticClass:"h5"},[e._v("für Medizinische Fachangestellte (MFA) & Zahnmedizinische Fachangestellte (ZFA)")])])}],a=n("5e36"),s=n("e674"),l=n("448f"),c=n("f70e"),u=n("f867"),d={name:"CareerBewerbung",components:{ToJobboardBanner:a["a"],RandomArticlesContainer:s["a"],JobSeeksLargeBanner:l["a"],ScrollToTopBtn:c["a"]},mixins:[u["a"]],data:function(){return{title:"Bewerbung für MFA & ZFA",breadcrumbs:[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Bewerbung",to:"/karriere/bewerbung"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Bewerbung",\n                              "item": "https://www.mfa-mal-anders.de/karriere/bewerbungs"\n                          }]\n                      }'}]}},methods:{track:function(e,t){this.$gtag.event(e,{event_label:t})}}},h=d,o=n("2877"),b=Object(o["a"])(h,i,r,!1,null,null,null);t["default"]=b.exports},f425:function(e,t,n){"use strict";n("f790")},f70e:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{ref:"scrollToTopBtn",staticClass:"scroll-to-top-btn",on:{click:e.scrollToTop}},[n("svg",{staticClass:"bi bi-arrow-bar-up text-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"}})])])},r=[],a={name:"ScrollToTopBtn",methods:{scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}},s=a,l=(n("d67a"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"65be4d00",null);t["a"]=c.exports},f790:function(e,t,n){},f867:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("ac1f"),n("5319");var i={mounted:function(){this.scrollToHash()},methods:{scrollToHash:function(){var e=this;this.$nextTick((function(){if(e.$route.hash){var t=window.document.getElementById(e.$route.hash.replace("#",""));t&&t.scrollIntoView({behavior:"smooth"})}}))}}}}}]);
//# sourceMappingURL=career-application-legacy.009514df.js.map