(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ebc540"],{"0942":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("2b0e"),r=a("b42e"),i=a("c637"),s=a("a723"),o=a("cf75");function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=Object(o["d"])({animation:Object(o["c"])(s["s"],"wave"),height:Object(o["c"])(s["s"]),size:Object(o["c"])(s["s"]),type:Object(o["c"])(s["s"],"text"),variant:Object(o["c"])(s["s"]),width:Object(o["c"])(s["s"])},i["lb"]),d=n["default"].extend({name:i["lb"],functional:!0,props:l,render:function(e,t){var a,n=t.data,i=t.props,s=i.size,o=i.animation,l=i.variant;return e("div",Object(r["a"])(n,{staticClass:"b-skeleton",style:{width:s||i.width,height:s||i.height},class:(a={},c(a,"b-skeleton-".concat(i.type),!0),c(a,"b-skeleton-animate-".concat(o),o),c(a,"bg-".concat(l),l),a)}))}})},"0b52":function(e,t,a){"use strict";a("6d81")},"14c3":function(e,t,a){var n=a("c6b6"),r=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"300b":function(e,t,a){e.exports=a.p+"img/health_.7b347010.svg"},"3c2c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/article/"+e.article.slug,"aria-label":e.article.title}},[a("BCard",{staticClass:"mb-2",attrs:{"no-body":"",tag:"div"}},[a("BCardImgLazy",{attrs:{srcset:e.article.featuredImage?e.article.featuredImage.node.srcSet:"",src:e.article.featuredImage?e.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:e.article.featuredImage?e.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",top:"",fluid:""}}),a("BCardBody",[a("BCardTitle",{attrs:{title:e.article.title}}),a("BCardText",[a("div",{domProps:{innerHTML:e._s(e.article.excerpt)}})]),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[e.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("BCardImgLazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:e.article.author.node.avatar.url,alt:e.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),e.article.author.node.name?a("div",{staticClass:"mr-3"},[e._v(" "+e._s(e.article.author.node.name)+" ")]):e._e()],1):e._e(),a("b-button",{attrs:{variant:"primary"}},[e._v("Weiterlesen")])],1)],1),e.article.tags.nodes.length>0?a("BBadge",{attrs:{pill:"",variant:"secondary"}},[e._v(e._s(e.article.tags.nodes[0].name))]):e._e()],1)],1)],1)},r=[],i=a("2b0e"),s=a("e98b"),o=a("205f"),c=a("6197"),l=a("60f1"),d=a("4968"),u=a("d6e4");i["default"].component("BBadge",s["a"]),i["default"].component("BCard",o["a"]),i["default"].component("BCardBody",c["a"]),i["default"].component("BCardImgLazy",l["a"]),i["default"].component("BCardTitle",d["a"]),i["default"].component("BCardText",u["a"]);var b={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},f=b,h=(a("0b52"),a("2877")),p=Object(h["a"])(f,n,r,!1,null,"ac31008c",null);t["a"]=p.exports},"434e":function(e,t,a){},"4d63":function(e,t,a){var n=a("83ab"),r=a("da84"),i=a("94ca"),s=a("7156"),o=a("9bf2").f,c=a("241c").f,l=a("44e7"),d=a("ad6d"),u=a("9f7f"),b=a("6eeb"),f=a("d039"),h=a("69f3").set,p=a("2626"),m=a("b622"),g=m("match"),v=r.RegExp,y=v.prototype,x=/a/g,_=/a/g,w=new v(x)!==x,C=u.UNSUPPORTED_Y,j=n&&i("RegExp",!w||C||f((function(){return _[g]=!1,v(x)!=x||v(_)==_||"/a/i"!=v(x,"i")})));if(j){var k=function(e,t){var a,n=this instanceof k,r=l(e),i=void 0===t;if(!n&&r&&e.constructor===k&&i)return e;w?r&&!i&&(e=e.source):e instanceof k&&(i&&(t=d.call(e)),e=e.source),C&&(a=!!t&&t.indexOf("y")>-1,a&&(t=t.replace(/y/g,"")));var o=s(w?new v(e,t):v(e,t),n?this:y,k);return C&&a&&h(o,{sticky:a}),o},A=function(e){e in k||o(k,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},S=c(v),z=0;while(S.length>z)A(S[z++]);y.constructor=k,k.prototype=y,b(r,"RegExp",k)}p("RegExp")},"4fef":function(e,t,a){e.exports=a.p+"img/calendar.beda8b1d.svg"},5319:function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),i=a("7b0b"),s=a("50c4"),o=a("a691"),c=a("1d80"),l=a("8aa5"),d=a("14c3"),u=Math.max,b=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,a,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(a,n){var r=c(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,r,n):t.call(String(r),a,n)},function(e,n){if(!g&&v||"string"===typeof n&&-1===n.indexOf(y)){var i=a(t,e,this,n);if(i.done)return i.value}var c=r(e),f=String(this),h="function"===typeof n;h||(n=String(n));var p=c.global;if(p){var _=c.unicode;c.lastIndex=0}var w=[];while(1){var C=d(c,f);if(null===C)break;if(w.push(C),!p)break;var j=String(C[0]);""===j&&(c.lastIndex=l(f,s(c.lastIndex),_))}for(var k="",A=0,S=0;S<w.length;S++){C=w[S];for(var z=String(C[0]),F=u(b(o(C.index),f.length),0),B=[],E=1;E<C.length;E++)B.push(m(C[E]));var M=C.groups;if(h){var I=[z].concat(B,F,f);void 0!==M&&I.push(M);var O=String(n.apply(void 0,I))}else O=x(z,f,F,B,M,n);F>=A&&(k+=f.slice(A,F)+O,A=F+z.length)}return k+f.slice(A)}];function x(e,a,n,r,s,o){var c=n+e.length,l=r.length,d=p;return void 0!==s&&(s=i(s),d=h),t.call(o,d,(function(t,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,n);case"'":return a.slice(c);case"<":o=s[i.slice(1,-1)];break;default:var d=+i;if(0===d)return t;if(d>l){var u=f(d/10);return 0===u?t:u<=l?void 0===r[u-1]?i.charAt(1):r[u-1]+i.charAt(1):t}o=r[d-1]}return void 0===o?"":o}))}}))},"572e":function(e,t,a){e.exports=a.p+"img/medical_research.5571fe9d.svg"},"5ff0":function(e,t,a){},6535:function(e,t,a){e.exports=a.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},"6d81":function(e,t,a){},"6df9":function(e,t,a){e.exports=a.p+"img/coach.94fa3305.svg"},7067:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$config.starredJobs.active?n("span",{staticClass:"star text-secondary",style:"padding: "+e.padding+"; position: "+e.position,on:{click:function(t){return t.preventDefault(),e.toggleStar(t)}}},[e.active?n("Fa",{attrs:{icon:["fas","star"],size:e.size}}):n("Fa",{attrs:{icon:["far","star"],size:e.size}}),n("BModal",{attrs:{id:"register-modal-"+e.jobId,"content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:e.modalVisible}},[n("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:function(t){e.modalVisible=!1}}},[n("Fa",{attrs:{icon:"times"}})],1),n("div",{staticClass:"py-2 px-3 "},[n("h2",{staticClass:"h4 mb-4 bold"},[e._v("Für später speichern?")]),n("div",{staticClass:"clearfix mb-3"},[n("b-img",{staticClass:"mr-4 mb-2",staticStyle:{"max-width":"150px"},attrs:{fluid:"",left:"",src:a("7734")}}),n("p",[e._v(" Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu bewerben. Registriere Dich dazu jetzt ganz einfach. ")])],1),n("b-button",{attrs:{to:"/auth/register?role=employee",block:"",variant:"secondary"}},[e._v("Jetzt registrieren")])],1)])],1):e._e()},r=[],i=(a("45fc"),a("96cf"),a("c964")),s=a("2b0e"),o=a("6aac");s["default"].component("BModal",o["a"]);var c={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data:function(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},mounted:function(){this.checkStarredJobs()},methods:{checkStarredJobs:function(){var e=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(t){return t.job===e.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.state.auth.loggedIn){t.next=3;break}return e.modalVisible=!0,t.abrupt("return");case 3:if(e.active){t.next=11;break}return e.active=!0,t.next=7,e.$store.dispatch("addStarredJob",e.jobId);case 7:e.$gtag.event("add_starred_job",{event_label:e.jobId}),e.$matomo&&e.$matomo.trackEvent("engagement","add_starred_job",e.jobId),t.next=16;break;case 11:return e.active=!1,t.next=14,e.$store.dispatch("deleteStarredJob",e.jobId);case 14:e.$gtag.event("delete_starred_job",{event_label:e.jobId}),e.$matomo&&e.$matomo.trackEvent("engagement","delete_starred_job",e.jobId);case 16:case"end":return t.stop()}}),t)})))()}}},l=c,d=(a("d1d4"),a("2877")),u=Object(d["a"])(l,n,r,!1,null,"f9ecca82",null);t["a"]=u.exports},7734:function(e,t,a){e.exports=a.p+"img/starredJobs.15f8095f.svg"},"8aa5":function(e,t,a){"use strict";var n=a("6547").charAt;e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},9263:function(e,t,a){"use strict";var n=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=c||d||l;u&&(o=function(e){var t,a,r,o,u=this,b=l&&u.sticky,f=n.call(u),h=u.source,p=0,m=e;return b&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,p++),a=new RegExp("^(?:"+h+")",f)),d&&(a=new RegExp("^"+h+"$(?!\\s)",f)),c&&(t=u.lastIndex),r=i.call(b?a:u,m),b?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:c&&r&&(u.lastIndex=u.global?r.index+r[0].length:t),d&&r&&r.length>1&&s.call(r[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=o},"9f7f":function(e,t,a){"use strict";var n=a("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("b-container",{staticClass:"hero d-flex justify-content-center align-items-center",attrs:{fluid:""}},[n("b-container",{staticClass:"p-0",staticStyle:{"max-width":"850px"}},[n("div",{staticClass:"hero-text mt-4 mb-5 my-lg-5 p-4"},[n("h1",[n("span",{staticClass:"bold display-2"},[e._v(" MFA "),n("br",{staticClass:"d-md-none"}),e._v(" mal anders ")]),n("br"),n("span",{staticClass:"h2 bg-primary text-light p-2 mt-2 border-radius1 d-inline-block"},[e._v(" Das Stellen- & Karriereportal nur für MFA & ZFA ")])]),n("p",{staticClass:"lead mt-2 mt-md-3 mb-0"},[e._v(" Informiere Dich über berufliche Perspektiven, Fort- und Weiterbildungen, Stellenangebote und vieles mehr"),n("span",{staticClass:"d-none d-md-inline"},[e._v(" – speziell für ArzthelferInnen | Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA)")]),e._v(". ")])]),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.$router.push("/stellenangebote?s="+e.searchTerm)}}},[n("label",{staticClass:"sr-only sr-only-focusable",attrs:{for:"landing-search"}},[e._v("Suchbegriff")]),n("b-input-group",[n("b-form-input",{staticClass:"shadow1",attrs:{id:"landing-search",size:"lg",placeholder:"Stelle finden..."},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),n("b-input-group-append",[n("b-button",{staticClass:"shadow1",attrs:{size:"lg",variant:"secondary",to:"/stellenangebote?s="+e.searchTerm}},[n("Fa",{attrs:{icon:"search"}})],1)],1)],1)],1),n("div",{staticClass:"mt-2 text-right"},[n("b-link",{staticClass:"pt-3 pb-4 px-3 small",attrs:{to:"/fuer-arbeitgeber"}},[e._v(" Stellenanzeige schalten ")])],1)],1)],1),n("b-container",{staticClass:"mt-4 mt-lg-0"},[e.jobs.length>0?n("b-row",{attrs:{cols:"1","cols-md":"3"}},e._l(e.jobs,(function(e){return n("b-col",{key:e._id},[n("JobCard",{attrs:{job:e,compact:!0}})],1)})),1):n("b-row",{attrs:{cols:"1","cols-md":"3"}},[n("b-col",[n("JobCardPlaceholder",{attrs:{compact:!0}})],1),n("b-col",[n("JobCardPlaceholder",{attrs:{compact:!0}})],1),n("b-col",[n("JobCardPlaceholder",{attrs:{compact:!0}})],1)],1),n("div",{staticClass:"d-flex justify-content-end mt-2"},[n("b-button",{attrs:{to:"/stellenangebote",variant:"outline-primary",size:"sm"}},[e._v("Weitere")])],1)],1),n("b-container",{staticClass:"my-3 my-md-5 py-3 py-md-5"},[n("h2",{staticClass:"d-none d-lg-block bold display-4 text-left text-lg-center mb-lg-5"},[e._v(" Deine berufliche Weiterentwicklung ")]),n("b-row",{staticClass:"flex-lg-row-reverse",attrs:{cols:"1","cols-md":"3"}},[n("b-col",[n("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/stellenangebote"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("fc51"),alt:"MFA / ZFA macht nächsten Schritt in der Jobsuche",height:"130","blank-width":"184","blank-height":"130",offset:"1000"}}),n("h2",{staticClass:"bold"},[e._v("Stellenbörse für MFA & ZFA")]),n("p",[e._v(" Bist Du auf der Suche nach einer interessanten Stelle, die genau zu Dir passt? Schau direkt in unserer Stellenbörse nur für ArzthelferInnen (MFA & ZFA) vorbei! ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zur Stellenbörse")])],1)],1),n("b-col",[n("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("300b"),alt:"Medizinische Fachangestellte im Untersuchungsraum",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),n("h2",{staticClass:"bold"},[e._v("Jobs & Berufsbilder")]),n("p",[e._v(" Schau Dir unsere 50+ Jobs und Berufsbilder für ArzthelferInnen – MFA & ZFA an! Deine Möglichkeiten sind größer als Du denkst. ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Berufsbildern")])],1)],1),n("b-col",[n("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("6df9"),alt:"MFA studiert bei Weiterbildung",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),n("h2",{staticClass:"bold"},[e._v("Fort- & Weiterbildungen")]),n("p",[e._v(" Auf der Suche nach Deinem nächsten Karriereschritt? Informiere Dich über verschiedene Fort- und Weiterbildungen für ArzthelferInnen – MFA & ZFA! ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zu den Weiterbildungen")])],1)],1)],1),n("div",[n("b-link",{staticClass:"d-flex flex-column flex-lg-row icon-box shadow1",attrs:{to:"/karriere/fortbildungskatalog"}},[n("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:a("4fef"),alt:"MFA liest Fortbildungskatalog",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),n("div",[n("h2",{staticClass:"bold"},[e._v("Fortbildungskatalog")]),n("p",[e._v(" Finde die nächste Fort- oder Weiterbildung für ArzthelferInnen (MFA & ZFA) in Deiner Nähe oder bequem online von zu Hause! ")]),n("b-button",{attrs:{variant:"primary"}},[e._v("Zum Fortbildungskatalog")])],1)],1)],1)],1),n("b-container",{staticClass:"bg-primary text-light py-5",attrs:{fluid:""}},[n("b-container",{staticClass:"py-0 py-md-3"},[n("h2",{staticClass:"h1 mb-4 bold display-4"},[e._v("Warum MFA mal anders?")]),n("b-row",{attrs:{cols:"1","cols-md":"3"}},[n("b-col",[n("b-img-lazy",{staticClass:"border-radius2 mr-3 mb-2",staticStyle:{"max-width":"170px",height:"auto"},attrs:{fluid:"",left:"",src:a("6535"),alt:"Portrait Kristin Maurach",width:"800",height:"800","blank-width":"800","blank-height":"800","blank-color":"#f7f6f9",offset:"1000"}}),n("p",[e._v(" Ich habe selbst über 10 Jahre in Praxen gearbeitet. Und obwohl ich meinen Job mit Herz und Seele gemacht habe, wurde ich mit der Zeit immer frustrierter, was bestimmte Punkte anging: ich stand auf der Stelle und habe nichts neues mehr gelernt. Aber ich wusste auch nicht so recht, was ich dagegen tun kann, wie ich es schaffe, dass ich wieder glücklicher im Job werde. Ob mir eine Weiterbildungen etwas bringt? Und wenn ja: welche? Mein Gehalt damals war echt nicht viel. Im Anbetracht dessen, was ich an Tätigkeiten übernommen habe, nicht angemessen. ")])],1),n("b-col",[n("p",[e._v(" Die Gesellschaft und Politik spricht immer nur von katastrophalen Zuständen in der Pflege, zu wenig Pflegepersonal und unter welchem Zeitdruck Ärzte stehen. Der Beruf der MFA & ZFA findet gar keine Beachtung. Obwohl unser Job auch nicht immer Zuckerschlecken ist und Ärzte auch hier händeringend nach Personal suchen. Ich will kein Mitleid erzeugen, sondern den Beruf würdigen und mehr Aufmerksamkeit schenken. ")]),n("p",[e._v(" Mit MFA mal anders möchte ich in erster Linie den Beruf der MFA & ZFA stärken und Dir Tipps und Hilfestellungen zu Themen wie "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Weiterbildungsmöglichkeiten")]),e._v(", "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v("Karrierechancen")]),e._v(" aber auch "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/mfa/gehalt"}},[e._v("Gehalt")]),e._v(" (inkl. Gehaltsrechner), "),n("b-link",{staticClass:"text-secondary",attrs:{to:"/karriere/bewerbungstipps"}},[e._v("Bewerbungen")]),e._v(" und vieles, vieles mehr geben. ")],1)]),n("b-col",[n("p",[e._v(" Auf der anderen Seite weiß ich auch um die Probleme bei der Personalsuche für Arbeitgeber. Auch hier möchte ich mit meiner Expertise und Erfahrung aus dem Personal Recruiting unterstützen, um Arbeitnehmer und Arbeitgeber bzw. MFAs & ZFAs und Ärzte zusammenzubringen. Am Ende des Tages ist entscheidend, dass das Zusammenspiel zwischen ArzthelferInnen und Ärzten funktioniert und Kollegen gern zusammenarbeiten. Nur so kann der Praxisalltag auf lange Sicht für alle Beteiligten positiv gestaltet werden. ")]),n("p",[n("b-link",{staticClass:"text-secondary",attrs:{to:"/blog/article/warum-es-mfa-mal-anders-gibt"}},[n("Fa",{attrs:{icon:"caret-right"}}),e._v(" Mehr über die Story dahinter")],1)],1)])],1)],1)],1),n("b-container",{staticClass:"my-5 py-0 py-md-5 d-flex justify-content-center"},[n("StellenanzeigeSchaltenBanner")],1),n("b-container",[n("b-row",[n("b-col",{staticClass:"mb-5",attrs:{cols:"12",md:"4"}},[n("h2",{staticClass:"bold"},[e._v(" Fort- und Weiterbildungen ")]),n("h3",{staticClass:"h4"},[e._v("Informiere Dich")]),n("p",[e._v(" Als Medizinische / Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),n("p",[e._v(" Wir haben einige "),n("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[e._v("Fort- und Weiterbildungen")]),e._v(" speziell für ArzthelferInnen (MFA & ZFA) für dich zusammengestellt und erweitern die Auswahl stetig, sodass du dich ein wenig inspirieren lassen kannst. Schau doch gleich mal rein! ")],1),n("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen",variant:"primary"}},[e._v("Zu den Fort- und Weiterbildungen")])],1),n("b-col",{attrs:{cols:"12",md:"8"}},[n("RandomTrainingsContainer",{attrs:{number:2}})],1)],1)],1),n("b-container",{staticClass:"bg-light-shade my-5 py-5 px-0",attrs:{fluid:""}},[n("b-container",[n("h2",{staticClass:"h1 bold display-4 text-center"},[e._v("Blog")]),n("h3",{staticClass:"h5 text-center mb-4"},[e._v(" Rund um Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr... ")]),n("RandomArticlesContainer")],1)],1),n("Head",{attrs:{title:"Das Stellen- & Karriereportal nur für MFA & ZFA",desc:"Dein Job- und Karriereportal für ArzthelferInnen – Medizinische / Zahnmedizinische Fachangestellte (MFA / ZFA) | Stellenangebote | Weiterbildungen | Alternative Jobs | Gehalt | Bewerbung",img:"",script:e.snippet}})],1)},r=[],i=(a("96cf"),a("c964")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BCard",{staticClass:"overflow-hidden shadow1",staticStyle:{"max-width":"840px"},attrs:{"no-body":"",align:"center"}},[n("b-row",{staticClass:"p-4"},[n("b-col",{attrs:{md:"4"}},[n("b-img-lazy",{staticClass:"p-3 pl-md-3 pr-md-0 w-100 h-100",attrs:{src:a("572e"),alt:"Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn","blank-width":"248","blank-height":"316",offset:"1000",fluid:""}})],1),n("b-col",{attrs:{md:"8"}},[n("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[n("h2",{staticClass:"bold"},[n("em",[e._v("Motivierte")]),e._v(" und "),n("em",[e._v("qualifizierte")]),e._v(" ArzthelferInnen – MFA & ZFA gesucht? ")]),n("p",[e._v(" Erstellen Sie "),n("strong",{staticClass:"text-primary"},[e._v("in wenigen Minuten Ihre Stellenanzeige")]),e._v(" und erreichen Sie noch heute unsere große Community von MFAs & ZFAs! Mit unserem "),n("strong",{staticClass:"text-primary"},[e._v("individuellen Paketen")]),e._v(" veröffentlichen Sie Ihre Stellenanzeige bereits ab "),n("strong",{staticClass:"text-primary"},[e._v(e._s((e.$config.pricingPackages[0].price/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency))]),e._v(". ")]),n("b-button",{attrs:{to:"/fuer-arbeitgeber",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige schalten")])],1)],1)],1)],1)},o=[],c=a("2b0e"),l=a("205f"),d=a("6197");c["default"].component("BCard",l["a"]),c["default"].component("BCardBody",d["a"]);var u={name:"StellenanzeigeSchaltenBanner"},b=u,f=a("2877"),h=Object(f["a"])(b,s,o,!1,null,null,null),p=h.exports,m=a("6df3"),g=a("e674"),v=a("f0fa"),y=a("f810"),x={name:"Home",components:{StellenanzeigeSchaltenBanner:p,RandomTrainingsContainer:m["a"],RandomArticlesContainer:g["a"],JobCard:v["a"],JobCardPlaceholder:y["a"]},data:function(){return{jobs:[],searchTerm:"",snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            }]\n          }'}]}},created:function(){this.getPublicJobs()},methods:{getPublicJobs:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/public-jobs",{params:{limit:3}});case 2:a=t.sent,e.jobs=a.data.jobs;case 4:case"end":return t.stop()}}),t)})))()}}},_=x,w=(a("ef71"),Object(f["a"])(_,n,r,!1,null,"62ba3d5f",null));t["default"]=w.exports},be3f:function(e,t,a){"use strict";a("5ff0")},d1bf:function(e,t,a){},d1d4:function(e,t,a){"use strict";a("d1bf")},d784:function(e,t,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),i=a("b622"),s=a("9263"),o=a("9112"),c=i("species"),l=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),b=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),f=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,u){var h=i(e),p=!r((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),m=p&&!r((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[h]=/./[h]),a.exec=function(){return t=!0,null},a[h](""),!t}));if(!p||!m||"replace"===e&&(!l||!d||b)||"split"===e&&!f){var g=/./[h],v=a(h,""[e],(function(e,t,a,n,r){return t.exec===s?p&&!r?{done:!0,value:g.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:b}),y=v[0],x=v[1];n(String.prototype,e,y),n(RegExp.prototype,h,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}u&&o(RegExp.prototype[h],"sham",!0)}},db2a:function(e,t,a){},e29e:function(e,t,a){"use strict";a("db2a")},e674:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",e._l(e.articles,(function(t){return a("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[a("ArticleCard",{attrs:{article:t}})],1)})),1)},r=[],i=(a("a9e3"),a("3c2c")),s={name:"RandomArticlesContainer",components:{ArticleCard:i["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(e,t){var a=new Array(t),n=e.length,r=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");while(t--){var i=Math.floor(Math.random()*n);a[t]=e[i in r?r[i]:i],r[i]=--n in r?r[n]:n}return a},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},o=s,c=a("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null);t["a"]=l.exports},e98b:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("2b0e"),r=a("b42e"),i=a("c637"),s=a("a723"),o=a("d82f"),c=a("cf75"),l=a("4a38"),d=a("aa59");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=Object(o["j"])(d["b"],["event","routerTag"]);delete h.href.default,delete h.to.default;var p=Object(c["d"])(Object(o["m"])(b(b({},h),{},{pill:Object(c["c"])(s["g"],!1),tag:Object(c["c"])(s["s"],"span"),variant:Object(c["c"])(s["s"],"secondary")})),i["b"]),m=n["default"].extend({name:i["b"],functional:!0,props:p,render:function(e,t){var a=t.props,n=t.data,i=t.children,s=a.active,o=a.disabled,u=Object(l["d"])(a),b=u?d["a"]:a.tag,f=a.variant||"secondary";return e(b,Object(r["a"])(n,{staticClass:"badge",class:["badge-".concat(f),{"badge-pill":a.pill,active:s,disabled:o}],props:u?Object(c["e"])(h,a):{}}),i)}})},ef71:function(e,t,a){"use strict";a("434e")},f0fa:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.job?a("article",{staticClass:"jobcard"},[e.disabled?a("div",{staticClass:"disabled-jobcard d-flex justify-content-center align-items-center"},[a("span",{staticClass:"h2 bold text-danger"},[e._v("Abgelaufen")])]):e._e(),a("b-link",{attrs:{to:"stepstone"!=e.job.source?"/stellenangebote/job/"+e.job._id+"/"+e.textToSlug(e.job.title+" in "+e.job.company.location)+(e.job.userId.isAdmin?"":"?dsa=1"):void 0,href:"stepstone"===e.job.source?e.job.extJobUrl:void 0,target:"stepstone"!=e.job.source?"_self":"_blank"}},[a("BCard",{class:e.compact?"mb-2 mt-2 mt-lg-0":"mb-3 mt-3 mt-lg-0",attrs:{"no-body":""}},[a("BCardText",[a("div",{staticClass:"card-head position-relative"},[a("h2",{class:["h4",{"mobile-max-width-75":e.job.company.logoUrl&&!e.compact}],style:e.compact?"font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap":"",domProps:{innerHTML:e._s(e.job.title)}}),a("StarJob",{attrs:{"job-id":e.job._id}}),e.job.company.logoUrl&&!e.compact?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{fluid:"","blank-src":"/img/MfaMalAnders_logo_circle_dark.svg","blank-width":"90",offset:"1000",src:e.job.company.logoUrl,alt:"Logo - "+e.job.company.name,height:"70"}})],1):e._e()],1),e.compact?e._e():a("div",{staticClass:"card-content"},[a("div",{domProps:{innerHTML:e._s(e.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),e.compact?e._e():a("hr"),a("div",{staticClass:"card-foot",style:e.compact?"font-size:0.85rem; padding: 0.7rem":""},[e.job.company.name?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}})],1),a("span",{domProps:{innerHTML:e._s(e.job.company.name)}})]):e._e(),e.job.company.location?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}})],1),e._v(" "+e._s(e.job.company.location)+" ")]):e._e(),e.job.employmentType?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","briefcase"],size:"lg"}})],1),e._v(" "+e._s(e.employmentTypeOptions.filter((function(t){return t.value===e.job.employmentType}))[0].text)+" ")]):e._e(),e.compact||!e.job.salaryMin&&!e.job.salaryMax?e._e():a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}})],1),e._v(" "+e._s(e.job.salaryMax?e.job.salaryMin?parseInt(e.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(e.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+e._s(e.job.salaryMax?parseInt(e.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]),!e.compact&&e.job.specialization&&"null"!=e.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"syringe",size:"lg"}})],1),e._v(" "+e._s(e.job.specialization)+" ")]):e._e(),e.job.publishedAt||e.job.paidAt?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}})],1),e._v(" "+e._s(e.timeSince(new Date(e.job.publishedAt||e.job.paidAt)))+" ")]):e._e(),e.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("BBadge",{attrs:{pill:"",variant:"secondary"}},[a("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),e._v("Einfach bewerben")],1)],1):e._e(),e.job.simpleApplication?a("BTooltip",{attrs:{target:"tooltip-simple-application",title:"Lebenslauf genügt für Bewerbung",triggers:"hover",placement:"bottom"}}):e._e()],1)])],1)],1)],1):e._e()},r=[],i=a("f796"),s=a("1ba6"),o=a("7067"),c=a("b4ae"),l=a("e98b"),d=a("205f"),u=a("d6e4"),b=a("2b0e");b["default"].component("BTooltip",c["a"]),b["default"].component("BBadge",l["a"]),b["default"].component("BCard",d["a"]),b["default"].component("BCardText",u["a"]);var f={name:"JobCard",components:{StarJob:o["a"]},props:{job:{type:Object,default:function(){}},compact:{type:Boolean,default:!1}},data:function(){return{employmentTypeOptions:s["f"],companySizeOptions:s["b"],textToSlug:i["a"]}},computed:{disabled:function(){return this.job.applicationDeadline&&new Date(this.job.applicationDeadline)<new Date||"published"!=this.job.status||this.job.paidExpiresAt<new Date}},methods:{timeSince:function(e){var t=Math.floor((new Date-e)/1e3),a=t/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=t/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=t/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},h=f,p=(a("e29e"),a("2877")),m=Object(p["a"])(h,n,r,!1,null,"0926c1ef",null);t["a"]=m.exports},f796:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("4d63"),a("ac1f"),a("25f0"),a("5319");function n(e){return e?r(e):""}function r(e){e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase(),e=e.replace(/&amp;/g,"-").replace(/ß/g,"ss").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue");for(var t="àáãäâèéëêìíïîòóöôùúüûñç·/_,:;",a="aaaaaeeeeiiiioooouuuunc------",n=0,r=t.length;n<r;n++)e=e.replace(new RegExp(t.charAt(n),"g"),a.charAt(n));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e}},f810:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-card-placeholder"},[a("BSkeleton",{staticClass:"header",attrs:{height:e.compact?"40px":"60px"}}),a("div",{staticClass:"body"},[a("BSkeleton"),a("BSkeleton"),a("BSkeleton")],1),e.compact?e._e():a("BSkeleton",{attrs:{height:"1px"}}),e.compact?e._e():a("div",{staticClass:"footer"},[a("BSkeleton")],1)],1)},r=[],i=a("2b0e"),s=a("0942");i["default"].component("BSkeleton",s["a"]);var o={name:"JobCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=o,l=(a("be3f"),a("2877")),d=Object(l["a"])(c,n,r,!1,null,"73f8515e",null);t["a"]=d.exports},fc51:function(e,t,a){e.exports=a.p+"img/career_.8a38acc4.svg"}}]);
//# sourceMappingURL=chunk-57ebc540.4cfc78d0.js.map