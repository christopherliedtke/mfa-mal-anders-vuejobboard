(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-training"],{1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),s=n("1d80"),l=n("4840"),o=n("8aa5"),u=n("50c4"),c=n("14c3"),d=n("9263"),g=n("d039"),f=[].push,b=Math.min,h=4294967295,p=!g((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var l,o,u,c=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,p=new RegExp(e.source,g+"g");while(l=d.call(p,r)){if(o=p.lastIndex,o>b&&(c.push(r.slice(b,l.index)),l.length>1&&l.index<r.length&&f.apply(c,l.slice(1)),u=l[0].length,b=o,c.length>=a))break;p.lastIndex===l.index&&p.lastIndex++}return b===r.length?!u&&p.test("")||c.push(""):c.push(r.slice(b)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var s=n(r,e,this,i,r!==t);if(s.done)return s.value;var d=a(e),g=String(this),f=l(d,RegExp),m=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),x=new f(p?d:"^(?:"+d.source+")",v),w=void 0===i?h:i>>>0;if(0===w)return[];if(0===g.length)return null===c(x,g)?[g]:[];var _=0,y=0,I=[];while(y<g.length){x.lastIndex=p?y:0;var E,k=c(x,p?g:g.slice(y));if(null===k||(E=b(u(x.lastIndex+(p?0:y)),g.length))===_)y=o(g,y,m);else{if(I.push(g.slice(_,y)),I.length===w)return I;for(var A=1;A<=k.length-1;A++)if(I.push(k[A]),I.length===w)return I;y=_=E}}return I.push(g.slice(_)),I}]}),!p)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"1e0b":function(e,t,n){e.exports=n.p+"img/Banner_In6SchrittenZurRichtigenWeiterbildung_1200.92f50048.jpg"},"209b":function(e,t,n){"use strict";n("fb4e")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",s=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},"5e36":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{staticClass:"overflow-hidden shadow1 p-3",attrs:{"no-body":"",align:"center"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"3"}},[r("b-img",{staticClass:"p-4 w-100 h-100",attrs:{src:n("ca31"),alt:"Karriereschritt für MFA / ZFA"}})],1),r("b-col",{attrs:{md:"9"}},[r("b-card-body",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h3",{staticClass:"h2 bold"},[e._v("Neuer Job gefällig?")]),r("p",[e._v(" Bist du auf der Suche nach einer "),r("strong",[e._v("neuen Herausforderung?")]),e._v(" "),r("br"),e._v(" Möchtest du einfach mal schauen, was es sonst noch für Möglichkeiten gibt? ")]),r("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[e._v("Zu den Stellenangeboten")])],1)],1)],1)],1)},i=[],a={name:"ToJobboardBanner"},s=a,l=(n("209b"),n("2877")),o=Object(l["a"])(s,r,i,!1,null,"3eceb22e",null);t["a"]=o.exports},"6b34":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.trainings?n("b-list-group",[n("b-list-group-item",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[n("h3",{staticClass:"h5 bold"},[e._v(" Fort- & Weiterbildungen ")])]),e._l(e.categories,(function(t){return n("b-list-group-item",{key:t,staticClass:"p-0"},[n("h4",{staticClass:"h5 bold pt-3 pb-1 px-3 mb-0"},[e._v(e._s(t))]),n("b-list-group",{attrs:{flush:""}},e._l(e.trainings.filter((function(e){return e.category===t})),(function(t){return n("b-list-group-item",{key:t.id,staticClass:"px-4",attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,active:t.slug===e.$route.params.slug}},[e._v(e._s(t.title))])})),1)],1)}))],2):e._e(),n("div",[n("SgdBanner",{staticClass:"my-2"})],1)],1)},i=[],a=(n("4de4"),n("d81d"),n("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-link",{attrs:{href:"https://pn.sgd.de/go.cgi?pid=13&wmid=45&cpid=1&prid=3&subid=&target=10_Prozent_Rabatt_auf_ueber_100_ausgewaehlte_Kurse"}},[r("b-img",{staticClass:"border-radius1",attrs:{fluid:"",src:n("b90f"),alt:"Banner - SGD Fernschule"}})],1)],1)}),s=[],l={name:"SgdBanner"},o=l,u=n("2877"),c=Object(u["a"])(o,a,s,!1,null,null,null),d=c.exports,g={name:"FortWeiterbildungenNav",components:{SgdBanner:d},computed:{trainings:function(){return this.$store.state.trainings.trainings.map((function(e){return e.category=e.categories.nodes.length>0?e.categories.nodes[0].name:"Allgemein",e}))},categories:function(){var e=this.$store.state.trainings.trainings.map((function(e){return e.categories.nodes.length>0?e.categories.nodes[0].name:"Allgemein"}));return e=e.filter((function(t,n){return e.indexOf(t)===n})).sort(),e}}},f=g,b=Object(u["a"])(f,r,i,!1,null,null,null);t["a"]=b.exports},"6df3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",e._l(e.trainings,(function(t){return n("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[n("div",{staticClass:"article-card"},[n("b-link",{attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,"aria-label":t.title}},[n("b-card",{attrs:{"no-body":""}},[n("b-card-img-lazy",{attrs:{src:t.featuredImage.node.sourceUrl,alt:t.featuredImage.node.altText,offset:"1000",top:""}}),n("b-card-body",[n("b-card-title",{attrs:{title:t.title}}),n("b-card-text",[n("div",{domProps:{innerHTML:e._s(t.excerpt)}})]),n("b-button",{attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)],1)],1)])})),1)},i=[],a=(n("a9e3"),{name:"RandomTrainingsContainer",props:{number:{type:Number,default:3}},data:function(){return{trainings:Array}},watch:{$route:function(e,t){e!=t&&this.getTrainings()},"$store.state.trainings.trainings":function(){this.getTrainings()}},mounted:function(){this.getTrainings()},methods:{getRandom:function(e,t){var n=new Array(t),r=e.length,i=new Array(r);if(t>r)throw new RangeError("getRandom: more elements taken than available");while(t--){var a=Math.floor(Math.random()*r);n[t]=e[a in i?i[a]:a],i[a]=--r in i?i[r]:r}return n},getTrainings:function(){this.$store.state.trainings.trainings.length>0&&(this.trainings=this.getRandom(this.$store.state.trainings.trainings,this.number))}}}),s=a,l=n("2877"),o=Object(l["a"])(s,r,i,!1,null,null,null);t["a"]=o.exports},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var a,s;return i&&"function"==typeof(a=t.constructor)&&a!==n&&r(s=a.prototype)&&s!==n.prototype&&i(e,s),e}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),s=n("ae40"),l="find",o=!0,u=s(l);l in[]&&Array(1)[l]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!u},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(l)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,c=void 0!==/()??/.exec("")[1],d=o||c||u;d&&(l=function(e){var t,n,i,l,d=this,g=u&&d.sticky,f=r.call(d),b=d.source,h=0,p=e;return g&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),p=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(b="(?: "+b+")",p=" "+p,h++),n=new RegExp("^(?:"+b+")",f)),c&&(n=new RegExp("^"+b+"$(?!\\s)",f)),o&&(t=d.lastIndex),i=a.call(g?n:d,p),g?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),c&&i&&i.length>1&&s.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),a=n("fc6a"),s=n("a640"),l=[].join,o=i!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(e){return l.call(a(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),a=n("94ca"),s=n("6eeb"),l=n("5135"),o=n("c6b6"),u=n("7156"),c=n("c04e"),d=n("d039"),g=n("7c73"),f=n("241c").f,b=n("06cf").f,h=n("9bf2").f,p=n("58a8").trim,m="Number",v=i[m],x=v.prototype,w=o(g(x))==m,_=function(e){var t,n,r,i,a,s,l,o,u=c(e,!1);if("string"==typeof u&&u.length>2)if(u=p(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(a=u.slice(2),s=a.length,l=0;l<s;l++)if(o=a.charCodeAt(l),o<48||o>i)return NaN;return parseInt(a,r)}return+u};if(a(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var y,I=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof I&&(w?d((function(){x.valueOf.call(n)})):o(n)!=m)?u(new v(_(t)),n,I):_(t)},E=r?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)l(v,y=E[k])&&!l(I,y)&&h(I,y,b(v,y));I.prototype=x,x.constructor=I,s(i,m,I)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b90f:function(e,t,n){e.exports=n.p+"img/SGD_Banner_468.e66b47e1.jpg"},ca31:function(e,t,n){e.exports=n.p+"img/search_engine__monochromatic.50ef63ab.svg"},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),s=n("9263"),l=n("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),g=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var b=a(e),h=!i((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),p=h&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!h||!p||"replace"===e&&(!u||!c||g)||"split"===e&&!f){var m=/./[b],v=n(b,""[e],(function(e,t,n,r,i){return t.exec===s?h&&!i?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:g}),x=v[0],w=v[1];r(String.prototype,e,x),r(RegExp.prototype,b,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&l(RegExp.prototype[b],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),s=n("ae40"),l=a("map"),o=s("map");r({target:"Array",proto:!0,forced:!l||!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},ef01:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"title"},[r("h1",[e._v(e._s(e.title))]),r("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),r("b-container",{staticClass:"py-3 py-lg-5"},[r("b-row",[r("b-col",{staticClass:"mb-4",attrs:{md:"4"}},[r("FortWeiterbildungenNav")],1),r("b-col",[r("b-img",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",src:"/img/Banner_Weiterbildungsdschungel_1200.jpg",alt:"Banner - So viel verdienst Du wirklich"}}),r("p",[e._v(" Als Medizinische & Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Fort- und Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),r("p",[e._v(" MFA mal anders bietet dir die Informationen, die du brauchst. Und das komprimiert und zusammengefasst auf einer Seite. Ohne, dass du dich endlos durchs Internet klicken musst, um einen Überblick über deine Chancen zu bekommen. ")]),r("p",[e._v(" Ob "),r("b-link",{attrs:{to:"/blog/article/fortbildung-weiterbildung-oder-studium"}},[e._v("Fortbildung, Weiterbildung oder Studium für MFA / ZFA")]),e._v(", finde deinen richtigen Weg. ")],1),r("p",[e._v(' In der Rubrik "Fort- und Weiterbildungen" kannst du dich informieren, welche Möglichkeiten du als Medizinische Fachangestellte in und außerhalb der Arztpraxis hast. ')]),r("div",{staticClass:"d-flex justify-content-center"},[r("b-card",{staticClass:"bg-light-shade shadow1 mt-4 mb-5",staticStyle:{"max-width":"600px"},attrs:{title:"Die richtige Weiterbildung für dich?!","img-src":n("1e0b"),"img-alt":"Banner - In 6 Schritten zur richtigen Weiterbildung für MFA / ZFA und ArzthelferIn","img-top":"",align:"center"}},[r("b-card-text",[e._v(" Hier findest du eine kleine Anleitung, wie du Schritt für Schritt vorgehen kannst. ")]),r("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder",variant:"primary"}},[e._v("Los geht's!")])],1)],1),r("p",[e._v(" Wir beschreiben anerkannte Fortbildungen der Ärztekammer, zertifizierte Weiterbildungen, Lehrgänge, Studiengänge und andere Weiterentwicklungsmöglichkeiten für MFA / ZFA. Die Eckdaten wie Kosten, Dauer, Inhalte und Lernkonzepte werden für dich übersichtlich und verständlich dargestellt. Daneben zeigen wir dir vor allem auch, was du mit welchem Abschluss anschließend anfangen kannst. Und natürlich auch wo. Das Gesundheitswesen bietet dir zahlreiche Karrierewege. ")]),r("p",[e._v(" Die Liste ist noch lange nicht vollständig. Nach und nach erstellen wir für dich eine grandiose Übersicht über deine Karrieremöglichkeiten in- und außerhalb der Arztpraxis zusammenstellen. ")]),r("p",[e._v("Also bleib dran!")]),r("p",[e._v(" PS: Wenn du interessiert an einer bestimmten Weiterbildung für MFA / ZFA bist, die wir noch nicht aufgeführt haben, schreib uns doch. Oder vielleicht hast du schon eine Fortbildung gemacht von der deine Kolleginnen unbedingt wissen sollten?! ")]),r("p",[e._v(" Wir freuen uns über "),r("b-link",{attrs:{to:"/kontakt"}},[e._v("eure Nachrichten")]),e._v(". ")],1)],1)],1),r("RandomTrainingsContainer",{staticClass:"mt-5"})],1),r("Head",{attrs:{title:"Fort- und Weiterbildung für ArzthelferInnen – MFA & ZFA",desc:"Fortbildungen und Weiterbildungen für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) im Gesundheitswesen || Karriere | Gehalt "+(new Date).getFullYear()+" | Stellenangebote",img:"/img/Banner_Weiterbildungsdschungel_1200.jpg",script:e.snippet}})],1)},i=[],a=n("6b34"),s=n("6df3"),l={name:"CareerFortWeiterbildungen",components:{FortWeiterbildungenNav:a["a"],RandomTrainingsContainer:s["a"]},data:function(){return{title:"Fort- und Weiterbildungen für MFA & ZFA",breadcrumbs:[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildungen",to:"/karriere/fort-und-weiterbildungen"}],snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Fort- und Weiterbildungen",\n                              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"\n                          }]\n                      }'}]}}},o=l,u=n("2877"),c=Object(u["a"])(o,r,i,!1,null,null,null);t["default"]=c.exports},f006:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.training?n("div",{staticClass:"fort-weiterbildung"},[n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.training.title))]),n("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),n("b-container",{staticClass:"py-3 py-lg-5"},[n("b-row",[n("b-col",{attrs:{md:"4",order:"2","order-md":"1"}},[n("FortWeiterbildungenNav")],1),n("b-col",{staticClass:"mb-4",attrs:{order:"1","order-md":"2"}},[e.training.featuredImage?n("b-img",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",src:e.training.featuredImage.node.sourceUrl,alt:"Banner - "+e.training.title}}):e._e(),n("div",{domProps:{innerHTML:e._s(e.training.content)}}),n("ToJobboardBanner",{staticClass:"mt-4"})],1)],1),n("RandomTrainingsContainer")],1),n("Head",{attrs:{title:e.training.seo&&e.training.seo.title,desc:e.training.seo&&e.training.seo.metaDesc,img:e.training.featuredImage&&e.training.featuredImage.node.sourceUrl,script:e.snippet}})],1):e._e()},i=[],a=(n("99af"),n("7db0"),n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("1276"),n("6b34")),s=n("6df3"),l=n("5e36"),o={name:"CareerFortWeiterbildung",components:{FortWeiterbildungenNav:a["a"],RandomTrainingsContainer:s["a"],ToJobboardBanner:l["a"]},data:function(){return{snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Fort- und Weiterbildungen",\n                              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"\n                          },{\n                              "@type": "ListItem",\n                              "position": 4,\n                              "name": "'.concat(this.$route.params.slug.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "),'",\n                              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen/').concat(this.$route.params.slug,'"\n                          }]\n                      }')}]}},computed:{training:function(){var e=this;return this.$store.state.trainings.trainings.find((function(t){return t.slug===e.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildungen",to:"/karriere/jobs-und-berufsbilder"},{text:this.training.title,to:"/karriere/jobs-und-berufsbilder/".concat(this.training.slug)}]}}},u=o,c=n("2877"),d=Object(c["a"])(u,r,i,!1,null,null,null);t["default"]=d.exports},fb4e:function(e,t,n){}}]);
//# sourceMappingURL=career-training.440b881f.js.map