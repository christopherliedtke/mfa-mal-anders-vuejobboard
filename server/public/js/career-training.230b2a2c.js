(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-training"],{1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),s=n("1d80"),l=n("4840"),o=n("8aa5"),u=n("50c4"),c=n("14c3"),d=n("9263"),g=n("d039"),f=[].push,b=Math.min,p=4294967295,h=!g((function(){return!RegExp(p,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),a=void 0===n?p:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var l,o,u,c=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,h=new RegExp(e.source,g+"g");while(l=d.call(h,r)){if(o=h.lastIndex,o>b&&(c.push(r.slice(b,l.index)),l.length>1&&l.index<r.length&&f.apply(c,l.slice(1)),u=l[0].length,b=o,c.length>=a))break;h.lastIndex===l.index&&h.lastIndex++}return b===r.length?!u&&h.test("")||c.push(""):c.push(r.slice(b)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var s=n(r,e,this,i,r!==t);if(s.done)return s.value;var d=a(e),g=String(this),f=l(d,RegExp),m=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),x=new f(h?d:"^(?:"+d.source+")",v),w=void 0===i?p:i>>>0;if(0===w)return[];if(0===g.length)return null===c(x,g)?[g]:[];var y=0,_=0,k=[];while(_<g.length){x.lastIndex=h?_:0;var O,C=c(x,h?g:g.slice(_));if(null===C||(O=b(u(x.lastIndex+(h?0:_)),g.length))===y)_=o(g,_,m);else{if(k.push(g.slice(y,_)),k.length===w)return k;for(var F=1;F<=C.length-1;F++)if(k.push(C[F]),k.length===w)return k;_=y=O}}return k.push(g.slice(y)),k}]}),!h)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"1e0b":function(e,t,n){e.exports=n.p+"img/Banner_In6SchrittenZurRichtigenWeiterbildung_1200.ce9dd5df.jpg"},3135:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("dcb3"),i=n("b42e"),a=n("7b1e");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={tag:{type:String,default:"div"},flush:{type:Boolean,default:!1},horizontal:{type:[Boolean,String],default:!1}},o=r["a"].extend({name:"BListGroup",functional:!0,props:l,render:function(e,t){var n=t.props,r=t.data,l=t.children,o=""===n.horizontal||n.horizontal;o=!n.flush&&o;var u={staticClass:"list-group",class:s({"list-group-flush":n.flush,"list-group-horizontal":!0===o},"list-group-horizontal-".concat(o),Object(a["j"])(o))};return e(n.tag,Object(i["a"])(r,u),l)}})},"5e36":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden shadow1 p-3",attrs:{"no-body":"",align:"center"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"3"}},[r("b-img",{staticClass:"p-4 w-100 h-100",attrs:{src:n("ca31"),alt:"Karriereschritt für MFA / ZFA"}})],1),r("b-col",{attrs:{md:"9"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h3",{staticClass:"h2 bold"},[e._v("Neuer Job gefällig?")]),r("p",[e._v(" Bist du auf der Suche nach einer "),r("strong",[e._v("neuen Herausforderung?")]),e._v(" "),r("br"),e._v(" Möchtest du einfach mal schauen, was es sonst noch für Möglichkeiten gibt? ")]),r("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[e._v("Zu den Stellenangeboten")])],1)],1)],1)],1)},i=[],a=n("2b0e"),s=n("205f"),l=n("6197");a["default"].component("BCard",s["a"]),a["default"].component("BCardBody",l["a"]);var o={name:"ToJobboardBanner"},u=o,c=(n("7cc0"),n("2877")),d=Object(c["a"])(u,r,i,!1,null,"1e0f4499",null);t["a"]=d.exports},"6b34":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.trainings?n("BListGroup",[n("BListGroupItem",{attrs:{to:"/karriere/fort-und-weiterbildungen"}},[n("h3",{staticClass:"h5 bold"},[e._v(" Fort- & Weiterbildungen ")])]),e._l(e.categories,(function(t){return n("BListGroupItem",{key:t,staticClass:"p-0"},[n("h4",{staticClass:"h5 bold pt-3 pb-1 px-3 mb-0"},[e._v(e._s(t))]),n("BListGroup",{attrs:{flush:""}},e._l(e.trainings.filter((function(e){return e.category===t})),(function(t){return n("BListGroupItem",{key:t.id,staticClass:"px-4",attrs:{to:"/karriere/fort-und-weiterbildungen/"+t.slug,active:t.slug===e.$route.params.slug}},[e._v(e._s(t.title))])})),1)],1)}))],2):e._e(),n("div",[n("SgdBanner",{staticClass:"my-2"})],1)],1)},i=[],a=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),n("2b0e")),s=n("3135"),l=n("d247"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-link",{attrs:{href:"https://pn.sgd.de/go.cgi?pid=13&wmid=45&cpid=1&prid=3&subid=&target=10_Prozent_Rabatt_auf_ueber_100_ausgewaehlte_Kurse"}},[r("b-img",{staticClass:"border-radius1",attrs:{fluid:"",src:n("b90f"),alt:"Banner - SGD Fernschule"}})],1)],1)},u=[],c={name:"SgdBanner"},d=c,g=n("2877"),f=Object(g["a"])(d,o,u,!1,null,null,null),b=f.exports;a["default"].component("BListGroup",s["a"]),a["default"].component("BListGroupItem",l["a"]);var p={name:"FortWeiterbildungenNav",components:{SgdBanner:b},computed:{trainings:function(){return this.$store.state.trainings.trainings.map((function(e){return e.category=e.categories.nodes.length>0?e.categories.nodes[0].name:"Allgemein",e}))},categories:function(){var e=this.$store.state.trainings.trainings.map((function(e){return e.categories.nodes.length>0?e.categories.nodes[0].name:"Allgemein"}));return e=e.filter((function(t,n){return e.indexOf(t)===n})).sort(),e}}},h=p,m=Object(g["a"])(h,r,i,!1,null,null,null);t["a"]=m.exports},"6eb7":function(e,t,n){"use strict";n("8fcc")},"7cc0":function(e,t,n){"use strict";n("8cca")},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),s=n("ae40"),l="find",o=!0,u=s(l);l in[]&&Array(1)[l]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!u},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(l)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8cca":function(e,t,n){},"8fcc":function(e,t,n){},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,c=void 0!==/()??/.exec("")[1],d=o||c||u;d&&(l=function(e){var t,n,i,l,d=this,g=u&&d.sticky,f=r.call(d),b=d.source,p=0,h=e;return g&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(b="(?: "+b+")",h=" "+h,p++),n=new RegExp("^(?:"+b+")",f)),c&&(n=new RegExp("^"+b+"$(?!\\s)",f)),o&&(t=d.lastIndex),i=a.call(g?n:d,h),g?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),c&&i&&i.length>1&&s.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),a=n("fc6a"),s=n("a640"),l=[].join,o=i!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(e){return l.call(a(this),void 0===e?",":e)}})},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b90f:function(e,t,n){e.exports=n.p+"img/SGD_Banner_468.e66b47e1.jpg"},c975:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,a=n("a640"),s=n("ae40"),l=[].indexOf,o=!!l&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),c=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:o||!u||!c},{indexOf:function(e){return o?l.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},ca31:function(e,t,n){e.exports=n.p+"img/search_engine__monochromatic.50ef63ab.svg"},d247:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n("b42e"),i=n("dcb3"),a=n("2326"),s=n("228e"),l=n("906c"),o=n("d82f"),u=n("cf75"),c=n("4a38"),d=n("aa59");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="BListGroupItem",h=["a","router-link","button","b-link"],m=Object(o["m"])(d["b"],["event","routerTag"]);delete m.href.default,delete m.to.default;var v=f({tag:{type:String,default:"div"},action:{type:Boolean,default:null},button:{type:Boolean,default:null},variant:{type:String,default:function(){return Object(s["c"])(p,"variant")}}},m),x=i["a"].extend({name:p,functional:!0,props:v,render:function(e,t){var n,i=t.props,s=t.data,o=t.children,g=i.button,f=i.variant,p=i.active,v=i.disabled,x=Object(c["d"])(i),w=g?"button":x?d["a"]:i.tag,y=!!(i.action||x||g||Object(a["a"])(h,i.tag)),_={},k={};return Object(l["s"])(w,"button")?(s.attrs&&s.attrs.type||(_.type="button"),i.disabled&&(_.disabled=!0)):k=Object(u["b"])(m,i),e(w,Object(r["a"])(s,{attrs:_,props:k,staticClass:"list-group-item",class:(n={},b(n,"list-group-item-".concat(f),f),b(n,"list-group-item-action",y),b(n,"active",p),b(n,"disabled",v),n)}),o)}})},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),s=n("9263"),l=n("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),g=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var b=a(e),p=!i((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),h=p&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!p||!h||"replace"===e&&(!u||!c||g)||"split"===e&&!f){var m=/./[b],v=n(b,""[e],(function(e,t,n,r,i){return t.exec===s?p&&!i?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:g}),x=v[0],w=v[1];r(String.prototype,e,x),r(RegExp.prototype,b,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&l(RegExp.prototype[b],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),s=n("ae40"),l=a("map"),o=s("map");r({target:"Array",proto:!0,forced:!l||!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},ef01:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"title"},[r("h1",[e._v(e._s(e.title))]),r("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),r("b-container",{staticClass:"py-3 py-lg-5"},[r("b-row",[r("b-col",{staticClass:"mb-4",attrs:{md:"4"}},[r("FortWeiterbildungenNav")],1),r("b-col",[r("b-img",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",src:"/img/Banner_Weiterbildungsdschungel_1200.jpg",alt:"Banner - So viel verdienst Du wirklich"}}),r("p",[e._v(" Als Medizinische & Zahnmedizinische Fachangestellte haben wir viele Möglichkeiten uns zu qualifizieren und im Job aufzusteigen oder sogar in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist der Dschungel an Fort- und Weiterbildungen für Medizinische Fachangestellte so stark bewachsen und undurchdringlich, dass es nicht leicht fällt, den Durchblick zu behalten. ")]),r("p",[e._v(" MFA mal anders bietet dir die Informationen, die du brauchst. Und das komprimiert und zusammengefasst auf einer Seite. Ohne, dass du dich endlos durchs Internet klicken musst, um einen Überblick über deine Chancen zu bekommen. ")]),r("p",[e._v(" Ob "),r("b-link",{attrs:{to:"/blog/article/fortbildung-weiterbildung-oder-studium"}},[e._v("Fortbildung, Weiterbildung oder Studium für MFA / ZFA")]),e._v(", finde deinen richtigen Weg. ")],1),r("p",[e._v(' In der Rubrik "Fort- und Weiterbildungen" kannst du dich informieren, welche Möglichkeiten du als Medizinische Fachangestellte in und außerhalb der Arztpraxis hast. ')]),r("div",{staticClass:"d-flex justify-content-center"},[r("BCard",{staticClass:"bg-light-shade shadow1 mt-4 mb-5",staticStyle:{"max-width":"600px"},attrs:{title:"Die richtige Weiterbildung für dich?!","img-src":n("1e0b"),"img-alt":"Banner - In 6 Schritten zur richtigen Weiterbildung für MFA / ZFA und ArzthelferIn","img-top":"",align:"center"}},[r("BCardText",[e._v(" Hier findest du eine kleine Anleitung, wie du Schritt für Schritt vorgehen kannst. ")]),r("b-button",{attrs:{to:"/karriere/jobs-und-berufsbilder",variant:"primary"}},[e._v("Los geht's!")])],1)],1),r("p",[e._v(" Wir beschreiben anerkannte Fortbildungen der Ärztekammer, zertifizierte Weiterbildungen, Lehrgänge, Studiengänge und andere Weiterentwicklungsmöglichkeiten für MFA / ZFA. Die Eckdaten wie Kosten, Dauer, Inhalte und Lernkonzepte werden für dich übersichtlich und verständlich dargestellt. Daneben zeigen wir dir vor allem auch, was du mit welchem Abschluss anschließend anfangen kannst. Und natürlich auch wo. Das Gesundheitswesen bietet dir zahlreiche Karrierewege. ")]),r("p",[e._v(" Die Liste ist noch lange nicht vollständig. Nach und nach erstellen wir für dich eine grandiose Übersicht über deine Karrieremöglichkeiten in- und außerhalb der Arztpraxis zusammenstellen. ")]),r("p",[e._v("Also bleib dran!")]),r("p",[e._v(" PS: Wenn du interessiert an einer bestimmten Weiterbildung für MFA / ZFA bist, die wir noch nicht aufgeführt haben, schreib uns doch. Oder vielleicht hast du schon eine Fortbildung gemacht von der deine Kolleginnen unbedingt wissen sollten?! ")]),r("p",[e._v(" Wir freuen uns über "),r("b-link",{attrs:{to:"/kontakt"}},[e._v("eure Nachrichten")]),e._v(". ")],1)],1)],1),r("RandomTrainingsContainer",{staticClass:"mt-5"})],1),r("Head",{attrs:{title:"Fort- und Weiterbildung für ArzthelferInnen – MFA & ZFA",desc:"Fortbildungen und Weiterbildungen für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) im Gesundheitswesen || Karriere | Gehalt "+(new Date).getFullYear()+" | Stellenangebote",img:"/img/Banner_Weiterbildungsdschungel_1200.jpg",script:e.snippet}})],1)},i=[],a=n("2b0e"),s=n("205f"),l=n("d6e4"),o=n("6b34"),u=n("6df3");a["default"].component("BCard",s["a"]),a["default"].component("BCardText",l["a"]);var c={name:"CareerFortWeiterbildungen",components:{FortWeiterbildungenNav:o["a"],RandomTrainingsContainer:u["a"]},data:function(){return{title:"Fort- und Weiterbildungen für MFA & ZFA",breadcrumbs:[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildungen",to:"/karriere/fort-und-weiterbildungen"}],snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Fort- und Weiterbildungen",\n                              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"\n                          }]\n                      }'}]}}},d=c,g=n("2877"),f=Object(g["a"])(d,r,i,!1,null,null,null);t["default"]=f.exports},f006:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.training?n("div",{staticClass:"fort-weiterbildung"},[n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.training.title))]),n("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),n("b-container",{staticClass:"py-3 py-lg-5"},[n("b-row",[n("b-col",{attrs:{md:"4",order:"2","order-md":"1"}},[n("FortWeiterbildungenNav")],1),n("b-col",{staticClass:"mb-4",attrs:{order:"1","order-md":"2"}},[e.training.featuredImage?n("b-img",{staticClass:"border-radius1 shadow1 mb-3 mb-lg-5",attrs:{fluid:"",src:e.training.featuredImage.node.sourceUrl,alt:"Banner - "+e.training.title}}):e._e(),n("div",{domProps:{innerHTML:e._s(e.training.content)}}),n("ToJobboardBanner",{staticClass:"mt-4"})],1)],1),n("RandomTrainingsContainer")],1),n("Head",{attrs:{title:e.training.seo&&e.training.seo.title,desc:e.training.seo&&e.training.seo.metaDesc,img:e.training.featuredImage&&e.training.featuredImage.node.sourceUrl,script:e.snippet}})],1):e._e()},i=[],a=(n("99af"),n("7db0"),n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("1276"),n("6b34")),s=n("6df3"),l=n("5e36"),o={name:"CareerFortWeiterbildung",components:{FortWeiterbildungenNav:a["a"],RandomTrainingsContainer:s["a"],ToJobboardBanner:l["a"]},data:function(){return{snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Karriere",\n                              "item": "https://www.mfa-mal-anders.de/karriere"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "Fort- und Weiterbildungen",\n                              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"\n                          },{\n                              "@type": "ListItem",\n                              "position": 4,\n                              "name": "'.concat(this.$route.params.slug.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "),'",\n                              "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen/').concat(this.$route.params.slug,'"\n                          }]\n                      }')}]}},computed:{training:function(){var e=this;return this.$store.state.trainings.trainings.find((function(t){return t.slug===e.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildungen",to:"/karriere/jobs-und-berufsbilder"},{text:this.training.title,to:"/karriere/jobs-und-berufsbilder/".concat(this.training.slug)}]}}},u=o,c=(n("6eb7"),n("2877")),d=Object(c["a"])(u,r,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=career-training.230b2a2c.js.map