(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-profession"],{"04d1":function(e,t,n){var r=n("342f"),s=r.match(/firefox\/(\d+)/i);e.exports=!!s&&+s[1]},1276:function(e,t,n){"use strict";var r=n("2ba4"),s=n("c65b"),i=n("e330"),a=n("d784"),o=n("44e7"),l=n("825a"),d=n("1d80"),c=n("4840"),u=n("8aa5"),b=n("50c4"),f=n("577e"),m=n("dc4a"),h=n("f36a"),p=n("14c3"),g=n("9263"),v=n("9f7f"),w=n("d039"),x=v.UNSUPPORTED_Y,C=4294967295,y=Math.min,A=[].push,k=i(/./.exec),_=i(A),J=i("".slice),F=!w((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=f(d(this)),a=void 0===n?C:n>>>0;if(0===a)return[];if(void 0===e)return[i];if(!o(e))return s(t,i,e,a);var l,c,u,b=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=new RegExp(e.source,m+"g");while(l=s(g,v,i)){if(c=v.lastIndex,c>p&&(_(b,J(i,p,l.index)),l.length>1&&l.index<i.length&&r(A,b,h(l,1)),u=l[0].length,p=c,b.length>=a))break;v.lastIndex===l.index&&v.lastIndex++}return p===i.length?!u&&k(v,"")||_(b,""):_(b,J(i,p)),b.length>a?h(b,0,a):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:s(t,this,e,n)}:t,[function(t,n){var r=d(this),a=void 0==t?void 0:m(t,e);return a?s(a,t,r,n):s(i,f(r),t,n)},function(e,r){var s=l(this),a=f(e),o=n(i,s,a,r,i!==t);if(o.done)return o.value;var d=c(s,RegExp),m=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(x?"g":"y"),g=new d(x?"^(?:"+s.source+")":s,h),v=void 0===r?C:r>>>0;if(0===v)return[];if(0===a.length)return null===p(g,a)?[a]:[];var w=0,A=0,k=[];while(A<a.length){g.lastIndex=x?0:A;var F,M=p(g,x?J(a,A):a);if(null===M||(F=y(b(g.lastIndex+(x?A:0)),a.length))===w)A=u(a,A,m);else{if(_(k,J(a,w,A)),k.length===v)return k;for(var j=1;j<=M.length-1;j++)if(_(k,M[j]),k.length===v)return k;A=w=F}}return _(k,J(a,w)),k}]}),!F,x)},"14c3":function(e,t,n){var r=n("da84"),s=n("c65b"),i=n("825a"),a=n("1626"),o=n("c6b6"),l=n("9263"),d=r.TypeError;e.exports=function(e,t){var n=e.exec;if(a(n)){var r=s(n,e,t);return null!==r&&i(r),r}if("RegExp"===o(e))return s(l,e,t);throw d("RegExp#exec called on incompatible receiver")}},"230b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center"},[r("router-link",{staticClass:"text-dark",attrs:{to:"/karriere/fortbildungskatalog"}},[r("div",{staticClass:"border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center",staticStyle:{"max-width":"450px"}},[r("b-img-lazy",{staticClass:"p-1",staticStyle:{"max-height":"60px"},attrs:{src:n("4fef"),alt:"Fortbildungskatalog für MFA / ZFA und ArzthelferInnen","blank-width":"77","blank-height":"60",offset:"1000",fluid:""}}),r("div",{staticClass:"text-center d-flex flex-column justify-content-center align-items-center px-2"},[r("h3",{staticClass:"h6 bold mb-1"},[e._v(" Zum Fortbildungskatalog ")]),r("small",[e._v(" Finde die passende Fort- oder Weiterbildung für Dich ")])])],1)])],1)},s=[],i={name:"TrainingCatalogueSmallBanner"},a=i,o=(n("8296"),n("2877")),l=Object(o["a"])(a,r,s,!1,null,"7d94c9c3",null);t["a"]=l.exports},"4e82":function(e,t,n){"use strict";var r=n("23e7"),s=n("e330"),i=n("59ed"),a=n("7b0b"),o=n("07fa"),l=n("577e"),d=n("d039"),c=n("addb"),u=n("a640"),b=n("04d1"),f=n("d998"),m=n("2d00"),h=n("512c"),p=[],g=s(p.sort),v=s(p.push),w=d((function(){p.sort(void 0)})),x=d((function(){p.sort(null)})),C=u("sort"),y=!d((function(){if(m)return m<70;if(!(b&&b>3)){if(f)return!0;if(h)return h<603;var e,t,n,r,s="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)p.push({k:t+r,v:n})}for(p.sort((function(e,t){return t.v-e.v})),r=0;r<p.length;r++)t=p[r].k.charAt(0),s.charAt(s.length-1)!==t&&(s+=t);return"DGBEFHACIJK"!==s}})),A=w||!x||!C||!y,k=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:l(t)>l(n)?1:-1}};r({target:"Array",proto:!0,forced:A},{sort:function(e){void 0!==e&&i(e);var t=a(this);if(y)return void 0===e?g(t):g(t,e);var n,r,s=[],l=o(t);for(r=0;r<l;r++)r in t&&v(s,t[r]);c(s,k(e)),n=s.length,r=0;while(r<n)t[r]=s[r++];while(r<l)delete t[r++];return t}})},"512c":function(e,t,n){var r=n("342f"),s=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!s&&+s[1]},5612:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.berufsbilder?n("div",{staticClass:"berufsbild-type"},[n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.title))]),n("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),n("div",{staticClass:"container py-3 py-lg-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-4 mb-4"},[n("JobsBerufsbilderNav")],1),n("div",{staticClass:"col-12 col-md-8 mb-5"},[e.berufsbilder[0].berufsbildTypes.nodes[0].description?n("div",{staticClass:"mb-4",domProps:{innerHTML:e._s(e.berufsbilder[0].berufsbildTypes.nodes[0].description)}}):e._e(),n("nav",{staticClass:"list-group"},e._l(e.berufsbilder,(function(t){return n("div",{key:t.slug,staticClass:"list-group-item mb-0 p-3",staticStyle:{"font-size":"larger",color:"inherit"},attrs:{id:t.slug}},[t.content?n("b-link",{staticClass:"bold text-primary hover-text-secondary",attrs:{to:"/karriere/jobs-und-berufsbilder/"+t.berufsbildTypes.nodes[0].slug+"/"+t.slug}},[e._v(" "+e._s(t.title)+" "),n("svg",{staticClass:"bi bi-caret-right-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]):n("span",{staticClass:"text-muted"},[e._v(e._s(t.title))])],1)})),0),n("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[n("JobSearchSingleForm",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),n("JobsTeaserContainer",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),n("ToJobboardBanner",{staticClass:"mt-5"})],1)]),n("RandomTrainingsContainer",{staticClass:"mt-5"})],1),n("Head",{attrs:{title:e.title,desc:e.berufsbilder[0].berufsbildTypes.nodes[0].seo.metaDesc,img:"",script:e.snippet}})],1):e._e()},s=[],i=(n("99af"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("fb6a"),n("b0c0"),n("4de4"),n("d3b7"),n("aad4")),a=n("6df3"),o=n("5e36"),l=n("68b7"),d=n("7b34"),c={name:"CareerBerufsbildType",components:{JobsBerufsbilderNav:i["a"],RandomTrainingsContainer:a["a"],ToJobboardBanner:o["a"],JobsTeaserContainer:l["a"],JobSearchSingleForm:d["a"]},data:function(){return{visible:null,snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Jobs und Berufsbilder",\n                              "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n                          },{\n                              "@type": "ListItem",\n                              "position": 4,\n                              "name": "'.concat(this.$route.params.slug.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("-"),'",\n                              "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,'"\n                          }]\n                      }')}]}},computed:{title:function(){return"MFA & ZFA Berufsbilder – ".concat(this.berufsbilder[0].berufsbildTypes.nodes[0].name)},berufsbilder:function(){var e=this;return this.$store.state.professions.professions.length>0?this.$store.state.professions.professions.filter((function(t){return t.berufsbildTypes.nodes[0].name.toLowerCase()===e.$route.params.slug.toLowerCase()})):null},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.berufsbilder[0].berufsbildTypes.nodes[0].name,to:"/karriere/jobs-und-berufsbilder/".concat(this.berufsbilder[0].slug)}]}},created:function(){this.$store.dispatch("getProfessions")},methods:{setVisible:function(e){this.visible===e?this.visible=null:this.visible=e}}},u=c,b=n("2877"),f=Object(b["a"])(u,r,s,!1,null,null,null);t["default"]=f.exports},"658d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jobs-berufsbilder-home"},[n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.title))]),n("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),n("div",{staticClass:"container py-3 py-lg-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-4 order-2 order-md-1 mb-4"},[n("JobsBerufsbilderNav")],1),n("div",{staticClass:"col order-1 order-md-2 mb-4"},[n("b-img-lazy",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",srcset:"/img/MfaMalAnders_50+Jobmoeglichkeiten_1200-300x157.jpg 300w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-1024x538.jpg 1024w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-768x403.jpg 768w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg 1200w",sizes:"(max-width: 992px) 100vw, 800px",src:"/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg",alt:"50+ Alternative Jobs für MFA / ZFA / ArtzhelferInnen",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000"}}),n("h2",{staticClass:"bold"},[e._v(" Wo man als MFA / ZFA überall arbeiten kann? ")]),n("p",[e._v(" Sprechstundenhilfe sind wir schon lange nicht mehr. Als Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) und ArzthelferIn sind wir Organisationstalente, Medizinische Assistenten, SekretärInnen, Seelsorger, Logistiker, Abrechnungsprofis und Aushängeschild der gesamten Praxis. Du merkst schon: Die Aufgabenspektren und Jobs für Medizinische & Zahnmedizinische Fachangestellte und ArzthelferInnen sind wahnsinnig vielfältig. ")]),n("p",[e._v(" Weil wir so viele Kompetenzen mitbringen, sind MFAs nicht nur in der Arztpraxis beliebt. Der Job bietet in viele Richtungen des Gesundheitswesens verschiedene Aufstiegsmöglichkeiten. Auch verschiedenste alternative Jobs und Berufe mit der Ausbildung als Medizinische Fachangestellte sind möglich. ")]),e._m(0),n("p",[e._v(" Wenn du nicht weißt, welche Türen dir offen stehen, informiere Dich hier über Deine Chancen als ausgebildete/r ArzthelferIn. Ganz gleich, ob Du den direkten Patientenkontakt liebst, gerne organisatorische Aufgaben erledigst oder Dich lieber für einen alternativen Job außerhalb der Arztpraxis interessierst. ")]),n("ProfessionTypeContainer",{staticClass:"my-4",attrs:{"col-md":12,"col-lg":6}}),n("ToJobboardBanner")],1)]),n("RandomTrainingsContainer",{staticClass:"mt-5"})],1),n("Head",{attrs:{title:e.title,desc:"50+ Alternative Jobs / Berufe für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) / ArzthelferIn || Stellenangebote | Fortbildungen | Weiterbildungen",img:"/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg",script:e.snippet}})],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Hast Du schon einmal gedacht: "),n("strong",[e._v('"Ich will keine MFA mehr sein"')]),e._v("? Willst Du Deinem Job als Medizinische / Zahnmedizinische Fachangestellte neuen Schwung geben, Dein Gehalt aufbessern oder bist einfach auf der Suche nach alternativen Jobs für Medizinische / Zahnmedizinische Fachangestellte? ")])}],i=n("aad4"),a=n("6df3"),o=n("5e36"),l=n("30d6"),d={name:"CareerJobsBerufsbilderHome",components:{JobsBerufsbilderNav:i["a"],RandomTrainingsContainer:a["a"],ToJobboardBanner:o["a"],ProfessionTypeContainer:l["a"]},data:function(){return{title:"50+ Alternative Jobs für ArzthelferInnen ".concat((new Date).getFullYear()," – MFA & ZFA"),breadcrumbs:[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Jobs & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Karriere",\n              "item": "https://www.mfa-mal-anders.de/karriere"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Jobs und Berufsbilder",\n              "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n            }]\n          }'},{type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "FAQPage",\n            "mainEntity": [{\n              "@type": "Question",\n              "name": "Welche alternativen Jobs gibt es für Medizinische Fachangestellte (MFA) / ArzthelferIn?",\n              "acceptedAnswer": {\n                "@type": "Answer",\n                "text": "Für Medizinische Fachangestellte (MFA) / ArzthelferInnen gibt es zahlreiche berufliche Alternativen. In verschiedenen Bereichen wie Beratung, Forschung, Management, Verwaltung oder im medizinische-technischen Bereich kann eine ausgebildete MFA Tätigkeiten z.B. als Study Nurse, PraxisberaterIn, AbrechnungsmanagerIn, PraxismanagerIn, VERAH und vieles mehr durchführen. Es gibt weit über 50 passende alternative Berufsfelder."\n              }\n            }]\n          }'}]}}},c=d,u=n("2877"),b=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=b.exports},"7db0":function(e,t,n){"use strict";var r=n("23e7"),s=n("b727").find,i=n("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},8296:function(e,t,n){"use strict";n("f676")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},a15b:function(e,t,n){"use strict";var r=n("23e7"),s=n("e330"),i=n("44ad"),a=n("fc6a"),o=n("a640"),l=s([].join),d=i!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:d||!c},{join:function(e){return l(a(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},aad4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"list-group"},[n("b-link",{staticClass:"h5 bold list-group-item list-group-item-action text-dark mb-0",attrs:{to:"/karriere/jobs-und-berufsbilder"}},[e._v(" Jobs & Berufsbilder ")]),e._l(e.berufsbilderTypes,(function(t){return n("b-link",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{to:"/karriere/jobs-und-berufsbilder/"+t.toLowerCase(),active:t.toLowerCase()===e.$route.params.slug}},[e._v(e._s(t))])}))],2),n("div",{staticClass:"mt-3"},[n("TrainingCatalogueSmallBanner",{staticClass:"my-2"})],1)])},s=[],i=(n("d81d"),n("b0c0"),n("4e82"),n("4de4"),n("d3b7"),n("230b")),a={name:"JobsBerufsbilderNav",components:{TrainingCatalogueSmallBanner:i["a"]},computed:{berufsbilderTypes:function(){var e=this.$store.state.professions.professions.map((function(e){return e.berufsbildTypes.nodes.length>0?e.berufsbildTypes.nodes[0].name:null}));return e.filter((function(t,n){return t&&e.indexOf(t)===n})).sort()}},created:function(){this.$store.dispatch("getProfessions")}},o=a,l=n("2877"),d=Object(l["a"])(o,r,s,!1,null,null,null);t["a"]=d.exports},addb:function(e,t,n){var r=n("f36a"),s=Math.floor,i=function(e,t){var n=e.length,l=s(n/2);return n<8?a(e,t):o(e,i(r(e,0,l),t),i(r(e,l),t),t)},a=function(e,t){var n,r,s=e.length,i=1;while(i<s){r=i,n=e[i];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==i++&&(e[r]=n)}return e},o=function(e,t,n,r){var s=t.length,i=n.length,a=0,o=0;while(a<s||o<i)e[a+o]=a<s&&o<i?r(t[a],n[o])<=0?t[a++]:n[o++]:a<s?t[a++]:n[o++];return e};e.exports=i},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),s=n("6eeb"),i=n("9263"),a=n("d039"),o=n("b622"),l=n("9112"),d=o("species"),c=RegExp.prototype;e.exports=function(e,t,n,u){var b=o(e),f=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),m=f&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[d]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!m||n){var h=r(/./[b]),p=t(b,""[e],(function(e,t,n,s,a){var o=r(e),l=t.exec;return l===i||l===c.exec?f&&!a?{done:!0,value:h(t,n,s)}:{done:!0,value:o(n,t,s)}:{done:!1}}));s(String.prototype,e,p[0]),s(c,b,p[1])}u&&l(c[b],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),s=n("b727").map,i=n("1dde"),a=i("map");r({target:"Array",proto:!0,forced:!a},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},e58d:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.profession?n("div",[n("article",{staticClass:"profession"},[n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.profession.title))]),n("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),n("div",{staticClass:"container py-3 py-lg-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-4 mb-4 order-2 order-lg-1"},[n("JobsBerufsbilderNav")],1),n("div",{staticClass:"col-12 col-md-8 order-1 order-lg-2 mb-5"},[n("div",{domProps:{innerHTML:e._s(e.profession.content)}}),n("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder/"+e.profession.berufsbildTypes.nodes[0].slug,size:"sm"}},[e._v("Zurück")]),n("div",{staticClass:"bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4"},[n("JobSearchSingleForm",{staticClass:"mb-3",attrs:{placeholder:"Passende Stelle finden...",profession:""}}),n("JobsTeaserContainer",{attrs:{profession:"",number:2,"cols-md":2,"cols-lg":2}})],1),n("ToJobboardBanner",{staticClass:"mt-5"})],1)])])]),n("div",{staticClass:"container"},[n("RandomTrainingsContainer")],1),n("Head",{attrs:{title:e.title,desc:e.profession.seo.metaDesc,img:"",script:e.snippet}})],1):e._e()},s=[],i=(n("99af"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("fb6a"),n("7db0"),n("d3b7"),n("b0c0"),n("aad4")),a=n("6df3"),o=n("5e36"),l=n("68b7"),d=n("7b34"),c={name:"CareerBerufsbildProfession",components:{JobsBerufsbilderNav:i["a"],RandomTrainingsContainer:a["a"],ToJobboardBanner:o["a"],JobsTeaserContainer:l["a"],JobSearchSingleForm:d["a"]},data:function(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Jobs und Berufsbilder",\n                              "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"\n                          },{\n                              "@type": "ListItem",\n                              "position": 4,\n                              "name": "'.concat(this.$route.params.slug.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("-"),'",\n                              "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,'"\n                          },{\n                              "@type": "ListItem",\n                              "position": 5,\n                              "name": "').concat(this.$route.params.profession.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("-"),'",\n                              "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/').concat(this.$route.params.slug,"/").concat(this.$route.params.profession,'"\n                          }]\n                      }')}]}},computed:{title:function(){return"MFA & ZFA Berufsbilder – ".concat(this.profession?this.profession.title:"")},profession:function(){var e=this;return this.$store.state.professions.professions.find((function(t){return t.slug.toLowerCase()==e.$route.params.profession.toLowerCase()}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Job- & Berufsbilder",to:"/karriere/jobs-und-berufsbilder"},{text:this.profession.berufsbildTypes.nodes[0].name,to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.slug)},{text:this.profession?this.profession.title:"",to:"/karriere/jobs-und-berufsbilder/".concat(this.$route.params.profession)}]}},created:function(){this.$store.dispatch("getProfessions")}},u=c,b=n("2877"),f=Object(b["a"])(u,r,s,!1,null,null,null);t["default"]=f.exports},f676:function(e,t,n){}}]);
//# sourceMappingURL=career-profession-legacy.90927583.js.map