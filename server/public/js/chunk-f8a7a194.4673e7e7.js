(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8a7a194"],{"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),s=n("9112");for(var l in i){var o=r[l],c=o&&o.prototype;if(c&&c.forEach!==a)try{s(c,"forEach",a)}catch(d){c.forEach=a}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=n("ae40"),s=i("forEach"),l=a("forEach");e.exports=s&&l?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"205f":function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("b42e"),i=n("dcb3"),a=n("8690"),s=n("365c"),l=n("cf75"),o=n("d580"),c=n("6197"),d=n("b885");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=b(b({},Object(l["a"])(o["a"].props,l["c"].bind(null,"footer"))),{},{footer:{type:String},footerHtml:{type:String},footerClass:{type:[String,Object,Array]}}),p=i["a"].extend({name:"BCardFooter",functional:!0,props:g,render:function(e,t){var n,i=t.props,s=t.data,l=t.children,o=i.footerBgVariant,c=i.footerBorderVariant,d=i.footerTextVariant;return e(i.footerTag,Object(r["a"])(s,{staticClass:"card-footer",class:[i.footerClass,(n={},h(n,"bg-".concat(o),o),h(n,"border-".concat(c),c),h(n,"text-".concat(d),d),n)],domProps:l?{}:Object(a["a"])(i.footerHtml,i.footer)}),l)}}),m={src:{type:String,required:!0},alt:{type:String,default:null},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1},height:{type:[Number,String]},width:{type:[Number,String]}},f=i["a"].extend({name:"BCardImg",functional:!0,props:m,render:function(e,t){var n=t.props,i=t.data,a="card-img";return n.top?a+="-top":n.right||n.end?a+="-right":n.bottom?a+="-bottom":(n.left||n.start)&&(a+="-left"),e("img",Object(r["a"])(i,{class:[a],attrs:{src:n.src||null,alt:n.alt,height:n.height||null,width:n.width||null}}))}});function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=Object(l["a"])(m,l["c"].bind(null,"img"));_.imgSrc.required=!1;var z=y(y(y(y(y(y({},c["b"]),d["b"]),g),_),Object(l["a"])(o["a"].props)),{},{align:{type:String},noBody:{type:Boolean,default:!1}}),S=i["a"].extend({name:"BCard",functional:!0,props:z,render:function(e,t){var n,i=t.props,o=t.data,u=t.slots,b=t.scopedSlots,h=i.imgLeft,m=i.imgRight,v=i.imgStart,y=i.imgEnd,z=i.header,S=i.headerHtml,C=i.footer,k=i.footerHtml,x=i.align,O=i.textVariant,A=i.bgVariant,j=i.borderVariant,I=b||{},B=u(),P={},M=e(),F=e();if(i.imgSrc){var T=e(f,{props:Object(l["b"])(_,i,l["e"].bind(null,"img"))});i.imgBottom?F=T:M=T}var E=e(),W=Object(s["a"])("header",I,B);(W||z||S)&&(E=e(d["a"],{props:Object(l["b"])(d["b"],i),domProps:W?{}:Object(a["a"])(S,z)},Object(s["b"])("header",P,I,B)));var Z=Object(s["b"])("default",P,I,B);i.noBody||(Z=e(c["a"],{props:Object(l["b"])(c["b"],i)},Z));var V=e(),$=Object(s["a"])("footer",I,B);return($||C||k)&&(V=e(p,{props:Object(l["b"])(g,i),domProps:W?{}:Object(a["a"])(k,C)},Object(s["b"])("footer",P,I,B))),e(i.tag,Object(r["a"])(o,{staticClass:"card",class:(n={"flex-row":h||v,"flex-row-reverse":(m||y)&&!(h||v)},w(n,"text-".concat(x),x),w(n,"bg-".concat(A),A),w(n,"border-".concat(j),j),w(n,"text-".concat(O),O),n)}),[M,E,Z,V,F])}})},4160:function(e,t,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4968:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n("dcb3"),i=n("b42e"),a=n("fa73"),s={title:{type:String},titleTag:{type:String,default:"h4"}},l=r["a"].extend({name:"BCardTitle",functional:!0,props:s,render:function(e,t){var n=t.props,r=t.data,s=t.children;return e(n.titleTag,Object(i["a"])(r,{staticClass:"card-title"}),s||Object(a["f"])(n.title))}})},"4b05":function(e,t,n){},"4dc8":function(e,t,n){e.exports=n.p+"img/handshake.2d0373f2.svg"},"4e2a":function(e,t,n){e.exports=n.p+"img/piggy_bank.9f93f64b.svg"},5922:function(e,t,n){e.exports=n.p+"img/presentation.af7b5947.svg"},6197:function(e,t,n){"use strict";n.d(t,"b",(function(){return z})),n.d(t,"a",(function(){return S}));var r=n("b42e"),i=n("dcb3"),a=n("cf75"),s=n("d580"),l=n("4968"),o=n("228e"),c=n("fa73"),d="BCardSubTitle",u={subTitle:{type:String},subTitleTag:{type:String,default:"h6"},subTitleTextVariant:{type:String,default:function(){return Object(o["c"])(d,"subTitleTextVariant")}}},b=i["a"].extend({name:d,functional:!0,props:u,render:function(e,t){var n=t.props,i=t.data,a=t.children;return e(n.subTitleTag,Object(r["a"])(i,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),a||Object(c["f"])(n.subTitle))}});function h(e){return f(e)||m(e)||p(e)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function m(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e){if(Array.isArray(e))return v(e)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=w(w(w(w({},Object(a["a"])(s["a"].props,a["c"].bind(null,"body"))),{},{bodyClass:{type:[String,Object,Array]}},l["b"]),u),{},{overlay:{type:Boolean,default:!1}}),S=i["a"].extend({name:"BCardBody",functional:!0,props:z,render:function(e,t){var n,i=t.props,s=t.data,o=t.children,c=e(),d=e(),g=o||[e()];return i.title&&(c=e(l["a"],{props:Object(a["b"])(l["b"],i)})),i.subTitle&&(d=e(b,{props:Object(a["b"])(u,i),class:["mb-2"]})),e(i.bodyTag,Object(r["a"])(s,{staticClass:"card-body",class:[(n={"card-img-overlay":i.overlay},_(n,"bg-".concat(i.bodyBgVariant),i.bodyBgVariant),_(n,"border-".concat(i.bodyBorderVariant),i.bodyBorderVariant),_(n,"text-".concat(i.bodyTextVariant),i.bodyTextVariant),n),i.bodyClass||{}]}),[c,d].concat(h(g)))}})},"65f7":function(e,t,n){e.exports=n.p+"img/profiling_monochromatic.4abc8e60.svg"},"993d":function(e,t,n){e.exports=n.p+"img/marketing_.cfe79d4e.svg"},b885:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return b}));var r=n("b42e"),i=n("dcb3"),a=n("8690"),s=n("cf75"),l=n("d580");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=c(c({},Object(s["a"])(l["a"].props,s["c"].bind(null,"header"))),{},{header:{type:String},headerHtml:{type:String},headerClass:{type:[String,Object,Array]}}),b=i["a"].extend({name:"BCardHeader",functional:!0,props:u,render:function(e,t){var n,i=t.props,s=t.data,l=t.children,o=i.headerBgVariant,c=i.headerBorderVariant,u=i.headerTextVariant;return e(i.headerTag,Object(r["a"])(s,{staticClass:"card-header",class:[i.headerClass,(n={},d(n,"bg-".concat(o),o),d(n,"border-".concat(c),c),d(n,"text-".concat(u),u),n)],domProps:l?{}:Object(a["a"])(i.headerHtml,i.header)}),l)}})},d25f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"employer"},[r("div",{staticClass:"title"},[r("h1",[e._v(e._s(e.title))]),r("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),r("b-container",{staticClass:"py-3 py-lg-5 px-md-5"},[r("b-row",{staticClass:"bg-primary text-light border-radius2 shadow1 w-100 p-3 py-4 p-md-5 mx-auto position-relative",staticStyle:{"overflow-x":"hidden"}},[r("div",{staticClass:"bg-logo"}),r("b-col",{staticStyle:{"z-index":"1"},attrs:{cols:"12",lg:"8"}},[r("h2",{staticClass:"display-4 bold mb-4"},[r("em",[e._v("Motivierte")]),e._v(" und "),r("em",[e._v("qualifizierte")]),e._v(" MFA & ZFA"+e._s(e.$route.query.location?" in "+e.$route.query.location:"")+" gesucht? ")]),r("ul",{staticClass:"lead no-bullets my-4 my-lg-5"},[r("li",{staticClass:"d-flex"},[r("Fa",{staticClass:"mr-3 mt-1",attrs:{icon:"check"}}),r("div",[e._v(" Einfach und bequem "),r("span",{staticClass:"text-secondary"},[e._v("in wenigen Minuten")]),e._v(" Ihre Stellenanzeige veröffentlichen ")])],1),r("li",{staticClass:"d-flex"},[r("Fa",{staticClass:"mr-3 mt-1",attrs:{icon:"check"}}),r("div",[r("span",{staticClass:"text-secondary"},[e._v("Erhalten Sie mit uns mehr Reichweite")]),e._v(" über Google Jobs, Social Media und unsere MFA & ZFA Community ")])],1),r("li",{staticClass:"d-flex"},[r("Fa",{staticClass:"mr-3 mt-1",attrs:{icon:"check"}}),r("div",[e._v(" Veröffentlichen Sie Ihre Stellenaneige "),r("b-link",{staticClass:"text-secondary",attrs:{href:"#pay-what-you-want"}},[e._v("ab "+e._s(e.$config.payment.minCost/100)+" "+e._s(e.$config.payment.currency))])],1)],1)]),r("div",{staticClass:"my-3"},[r("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/auth/register",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige erstellen")]),r("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{href:"#advantages",variant:"outline-light",size:"lg"}},[e._v("Mehr erfahren")])],1)]),r("b-col",{staticClass:"d-none d-lg-flex justify-content-center align-items-center",attrs:{cols:"12",lg:"4"}},[r("b-img",{staticClass:"position-absolute p-0",staticStyle:{width:"450px",opacity:"0.9",right:"0"},attrs:{src:n("4dc8"),alt:"MFA / ZFA trifft Arzt zum Bewerbungsgespräch"}})],1)],1)],1),r("b-container",{staticClass:"my-5",attrs:{id:"advantages"}},[r("h2",{staticClass:"h5 text-center"},[e._v(" Stellenanzeige schalten bei MFA mal anders ")]),r("p",{staticClass:"bold display-4 text-center"},[e._v(" Ihre Zielgruppe genau im Blick ")]),r("h3",{staticClass:"h3 text-center"},[e._v(" Stellenanzeigen nur für ArzthelferInnen – MFA & ZFA ")]),r("b-row",{staticClass:"my-4 my-md-5"},[r("b-col",[r("div",{staticClass:"icon-box shadow1 py-5 px-4"},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa","user-nurse"],size:"3x"}}),r("h4",{staticClass:"h4 mt-4 mb-3"},[e._v("Genau Ihre Zielgruppe")]),r("p",[e._v(" Bei uns erreichen Sie "),r("strong",[e._v("exklusiv motivierte ArzthelferInnen – MFA & ZFA")]),e._v(" und damit genau Ihre Zielgruppe. ")])],1)]),r("b-col",[r("div",{staticClass:"icon-box shadow1 py-5 px-4"},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa","credit-card"],size:"3x"}}),r("h4",{staticClass:"h4 mt-4 mb-3"},[e._v("Niedrige Kosten")]),r("p",[e._v(" Veröffentlichen Sie Ihre Stellenanzeige nach unserem "),r("b-link",{attrs:{href:"#pay-what-you-want"}},[r("strong",[e._v('"Pay What You Want"')])]),e._v(" Modell "),r("strong",[e._v(" ab "+e._s(e.$config.payment.minCost/100)+" "+e._s(e.$config.payment.currency)+" für "+e._s(e.$config.payment.duration)+" Tage. ")])],1)],1)]),r("b-col",[r("div",{staticClass:"icon-box shadow1 py-5 px-4"},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa","paper-plane"],size:"3x"}}),r("h4",{staticClass:"h4 mt-4 mb-3"},[e._v("Einfach und bequem")]),r("p",[r("strong",[e._v("Sie erstellen Ihre Anzeige, wir sorgen für den Rest")]),e._v(" - Reichweite auf MFA mal anders, Google Jobs, Facebook und "),r("b-link",{attrs:{to:"#more-info"}},[e._v("mehr...")])],1)],1)])],1),r("div",{staticClass:"d-flex flex-column align-items-center mt-4"},[r("div",{staticClass:"mb-3"},[r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{to:"/auth/register",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige erstellen")]),r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#pay-what-you-want",variant:"primary",size:"lg"}},[e._v("Preise")])],1),r("div",[r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#tipps-stellenanzeigen",variant:"outline-secondary",size:"lg"}},[e._v("Tipps für Stellenanzeigen")]),r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#more-info",variant:"outline-primary",size:"lg"}},[e._v("Weitere Informationen")]),r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#faq",variant:"outline-primary",size:"lg"}},[e._v("Fragen oder Hilfe benötigt?")])],1)])],1),r("b-container",{staticClass:"pt-3 bg-light-shade",attrs:{fluid:""}},[r("b-container",{staticClass:"my-4 my-md-5"},[r("h2",{staticClass:"display-4 text-center bold"},[e._v(" Wir kooperieren mit ")]),r("b-row",{staticClass:"py-4",attrs:{cols:"1","cols-lg":"4"}},e._l(e.partners,(function(e){return r("b-col",{key:e.name,staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("b-link",{attrs:{href:e.url,target:"_blank"}},[r("img",{staticClass:"m-5 blend",staticStyle:{"max-height":"130px","max-width":"220px"},attrs:{fluid:"",src:e.img,alt:"Logo - "+e.name}})])],1)})),1)],1)],1),r("b-container",{staticClass:"mb-5 py-md-5",attrs:{id:"numbers-and-facts"}},[r("h2",{staticClass:"h1 text-center bold mb-4"},[e._v(" Ein paar Zahlen und Fakten "),r("span",{staticStyle:{"font-size":"0.8rem"}},[e._v("(01/2021)")])]),r("b-row",{attrs:{cols:"1","cols-md":"3"}},e._l(e.numbersAndFacts,(function(t){return r("b-col",{key:t.desc,staticClass:"text-center"},[r("Fa",{staticClass:"mt-3 mb-4 text-secondary",attrs:{icon:["fab",t.icon],size:"4x"}}),r("div",{staticClass:"display-4 bold mb-3"},[e._v(" "+e._s(Math.floor(t.current).toLocaleString())+"+ ")]),r("p",[e._v(e._s(t.desc))])],1)})),1)],1),r("b-container",{staticClass:"mb-5 py-0 py-md-5",attrs:{id:"pay-what-you-want"}},[r("h2",{staticClass:"mb-4 bold"},[e._v(" Unsere Preise nach dem “Pay What You Want”* Model ")]),r("b-row",{attrs:{cols:"1","cols-md":"2"}},[r("b-col",{staticClass:"mb-4"},[r("p",[e._v(" Mit MFA mal anders möchten wir Medizinischen Fachangestellten die Möglichkeit geben, einen attraktiven Job zu finden. Aber auch Ihnen als Arbeitgeber eine alternative Plattform bereitstellen, die Ihre Stellenangebote an die richtige Zielgruppe ausspielt und so Ihre Chancen erhöht, qualifizierte Bewerbungen zu erhalten. ")]),r("b-img",{staticClass:"p-2 p-md-4",staticStyle:{"max-width":"45%"},attrs:{right:"",src:n("4e2a"),alt:"Person zahlt Preis für MFA / ZFA Stellenanzeige"}}),r("p",[e._v(" Bei uns finden Sie keine überteuerten Angebote, um Ihre Stellenanzeige zu veröffentlichen. ")]),r("p",[e._v(" Die Idee ist ganz einfach: Nach dem Prinzip "),r("strong",[e._v("“Pay What You Want”")]),e._v("* entscheiden Sie, welchen Beitrag Sie für die Nutzung der Stellenbörse und der Informationen rund um MFA mal anders zahlen möchten. So können wir jedem Arbeitgeber die Möglichkeit bieten, vergleichsweise kostengünstig eine Stellenanzeige für "+e._s(e.$config.payment.duration)+" Tage bei uns zu schalten. ")]),r("p",{staticClass:"small"},[e._v(" * Es fällt ein Mindestbeitrag von "+e._s((e.$config.payment.minCost/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency)+" pro Stellenanzeige à "+e._s(e.$config.payment.duration)+" Tage an, der für den Betrieb der IT-Infrastruktur und der Pflege des Portals unerlässlich ist. ")])],1),r("b-col",[r("PayWhatYouWantSuggestion",{staticClass:"bg-light-shade border-radius1 p-4",attrs:{minimum:!1}})],1)],1)],1),r("b-container",{staticClass:"bg-light-shade py-5 mb-5",attrs:{id:"more-info",fluid:""}},[r("b-container",[r("h2",{staticClass:"bold mb-4"},[e._v(" Ihre Jobbörse nur für ArzthelferInnen – MFA & ZFA – MFA mal anders ")]),r("b-row",{attrs:{cols:"1","cols-md":"2"}},[r("b-col",[r("p",[e._v(" Wir bieten speziell Arztpraxen, MVZs und allen weiteren Einrichtungen aus dem Gesundheitswesen eine vertrauensvolle Plattform mit "),r("strong",[e._v("Fokus auf Ihre Zielgruppe")]),e._v(". ")]),r("p",[e._v(" Aufgrund persönlicher Erfahrungen als MFA und im Gesundheitsbereich bringen wir als Initiatoren von MFA mal anders detaillierte Branchenkenntnisse mit. Da wir um die "),r("strong",[e._v(" Probleme beim Finden von qualifiziertem Personal ")]),e._v(" wissen, können wir unser Angebot punktgenau ausrichten. ")]),r("p",[e._v(" Ihre Stellenanzeige ist bei uns bestens platziert. Im Gegensatz zu anderen allgemeinen Stellenbörsen, finden Sie hier ausschließlich die richtige Zielgruppe für Ihr Unternehmen: Medizinische & Zahnmedizinische Fachangestellte. ")]),r("h3",[e._v("Wo wir Ihre Stellenanzeige ausspielen")]),r("p",[e._v(" Ihre Stellenanzeige wird dort ausgespielt, wo Sie Ihre Zielgruppe findet: bei "),r("strong",[e._v(" Social Media, Google Jobs und auf unserer Webseite ")]),e._v(" . Zusätzlich versenden wir Ihre Anzeige in unserem "),r("strong",[e._v(" wöchentlichen Newsletter ")]),e._v(" . ")])]),r("b-col",[r("p",[e._v(" Erhöhen Sie die Chance, dass Ihre Stellenanzeige von der richtigen Person gesehen wird. ")]),r("b-img",{staticClass:"p-2 p-md-4",staticStyle:{"max-width":"50%"},attrs:{right:"",src:n("993d"),alt:"Stellenanzeige für MFA / ZFA wird über verschiedene Kanäle veröffentlicht"}}),r("p",[e._v(" Damit grenzen wir uns gezielt von allgemeinen Jobbörsen, die eine breite Masse an unterschiedlichen Berufsgruppen ansprechen und hohe Streuverluste haben, ab. Da wir "),r("strong",[e._v("mehr als eine reine Jobbörse")]),e._v(" sind, erreichen wir mit unserem Angebot zudem eine deutlich größere Anzahl von wirklich motivierten MFAs & ZFAs. ")]),r("p",[e._v(" Wir arbeiten "),r("strong",[e._v("nicht mit Personalvermittlern")]),e._v(", "),r("strong",[e._v("Zeitarbeitsfirmen oder Headhuntern")]),e._v(" zusammen. ")]),r("p",[e._v(" Bei uns können Sie Ihre Stellenanzeige zudem "),r("strong",[e._v("kostengünstig")]),e._v(" veröffentlichen und so Ihrem Budget anpassen sowie zusätzliche Reichweite und qualifizierte Bewerbungen erzielen. ")])],1)],1)],1)],1),r("b-container",{staticClass:"mb-5",attrs:{id:"tipps-stellenanzeigen"}},[r("h2",{staticClass:"bold mb-4"},[e._v(" Tipps für Ihre Stellenanzeige ")]),r("p",[e._v(" Ihre Stellenanzeige ist eine Einladung für BewerberInnen zum Dialog – denn bestenfalls wird daraus ein Vorstellungsgespräch. Eine gute Stellenanzeige beschreibt nicht nur die zu besetzende Stelle, sondern geht auch auf die Bedürfnisse der Zielgruppe ein. Machen Sie ein Angebot, dass so attraktiv ist, dass man nicht anders kann, als sich zu bewerben! ")]),r("p",[e._v(" Durch unsere Arbeit hatten wir die Gelegenheit eine Vielzahl von Bewerbungsprozessen zu begleiten und aus erster Hand zu erfahren, was bei potentiellen BewerberInnen ankommt und was nicht. Deshalb geben wir hier eine kleine Übersicht an Tipps. ")]),r("b-row",[e._l(e.jobAdTipps,(function(t){return r("b-col",{key:t.title,attrs:{cols:"12",md:"6",lg:"4"}},[r("div",{staticClass:"icon-box shadow1"},[r("div",{staticClass:"bg-light border-radius1 shadow3 d-flex justify-content-center align-items-center mb-3",staticStyle:{width:"75px",height:"75px"}},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa",t.icon],size:"3x"}})],1),r("h3",{staticClass:"bold"},[e._v(e._s(t.title))]),r("p",{staticClass:"mb-0"},[e._v(" "+e._s(t.desc)+" ")])])])})),r("b-col",{attrs:{cols:"12",md:"6",lg:"4"}},[r("div",{staticClass:"icon-box shadow1 py-4"},[r("h4",{staticClass:"bold mb-3"},[e._v(" Jetzt Stellenanzeige erstellen ")]),r("p",[e._v(" Erstellen Sie jetzt Ihre attraktive Stellenanzeige und erreichen Sie unsere große Community von MFAs & ZFAs! Mit unserem "),r("b-link",{staticClass:"text-secondary",attrs:{href:"#pay-what-you-want"}},[e._v("“Pay What You Want”*")]),e._v(" Modell bestimmen Sie, wie viel Sie zahlen. ")],1),r("b-button",{attrs:{to:"/auth/register",variant:"secondary"}},[e._v("Zur Registrierung")])],1)]),r("b-col",{attrs:{cols:"12",md:"6",lg:"12"}},[r("JobAdTippsBanner")],1),r("b-col",{attrs:{cols:"12"}},[r("ApplicationProcessBanner")],1)],2)],1),r("b-container",{attrs:{id:"faq"}},[r("h2",{staticClass:"h1 bold text-center mb-4"},[e._v(" Häufige Fragen ")]),r("b-row",{attrs:{cols:"1","cols-md":"2"}},[r("b-col",[r("h3",{staticClass:"h5 bold"},[e._v(" Welche Zahlungsarten stehen zur Verfügung? ")]),r("p",[e._v(" Für die Zahlung Ihrer Stellenanzeige können Sie eine Kreditkarte nutzen, per GooglePay oder per GiroPay bezahlen. Bei diesen Zahlungsmethoden wird Ihre Stellenanzeige sofort veröffentlicht. Ebenso steht Ihnen die Zahlung per Rechnung zur Verfügung. Bitte beachten Sie hierbei, dass Ihre Stellenanzeige erst dann veröffentlicht wird, wenn Ihre Zahlung bei uns eingegangen ist. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Wie lange dauert es bis zur Veröffentlichung meiner Stellenanzeige? ")]),r("p",[e._v(" Je nach Zahlungsmethode ist Ihre Stellenanzeige sofort online (GiroPay, GooglePay, Kreditkarte) oder Zahlung auf Rechnung erst nach bei uns erfolgtem Zahlungseingang. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Kann ich auch per Rechnung zahlen? ")]),r("p",[e._v(' Ja, die Möglichkeit besteht. Lesen Sie dazu nach einem Klick auf "Jetzt bezahlen" die Anmerkung **im Zahlungsprozess haben Sie die Auswahl zwischen verschiedenen Bezahlfunktionen und können dort unter anderem die "Zahlung per Rechnung" nutzen. Da wir einen erhöhten Aufwand für die separate Rechnungslegung und Zahlungsabwicklung haben, erhöht sich der Rechnungsbetrag bei Zahlung per Rechnung um 5,- Euro. Ihre Stellenanzeige wird von uns freigeschaltet sobald wir einen Zahlungseingang von Ihnen verbuchen können. ')]),r("h3",{staticClass:"h5 bold"},[e._v(" Woher weiß ich, wie viel ich für meine Stellenanzeige zahlen soll? ")]),r("p",[e._v(' Wir arbeiten grundsätzlich nach dem "Pay What You Want" Prinzip, d.h. Sie können selbst entscheiden, wie viel Sie für die Veröffentlichung Ihrer Stellenanzeige bei uns zahlen möchten. Um den Betrieb der Plattform zu sichern, erheben wir lediglich einen Mindestbetrag von '+e._s((e.$config.payment.minCost/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency)+". Wer heutzutage auf Personalsuche ist, weiß, dass die Veröffentlichung von Stellenanzeigen sehr schnell sehr teuer werden kann. Mit unserem Nischenportal möchten wir Ihnen eine maßgeschneiderte Alternative anbieten. Wir haben Ihnen "),r("b-link",{attrs:{href:"#pay-what-you-want"}},[e._v("einige Vorschläge")]),e._v(", die weit unterhalb der großen Allgemein-Jobportale liegen, zusammengestellt. ")],1)]),r("b-col",[r("h3",{staticClass:"h5 bold"},[e._v(" Kann ich meine Stellenanzeige im Nachhinein ändern? ")]),r("p",[e._v(" Über Ihren registrierten Account können Sie Ihre Stellenanzeige jederzeit anpassen. Die Änderungen werden sofort automatisch übernommen. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Wie lange ist meine Stellenanzeige online? ")]),r("p",[e._v(" Nach bestätigter Zahlung ist Ihre Stellenanzeige für "+e._s(e.$config.payment.duration)+" Tage freigeschaltet. Ihre Stelle ist so lange online, wie die "+e._s(e.$config.payment.duration)+" Tage sowie Ihre angegebene Bewerbungsfrist nicht abgelaufen sind. Über Ihren Account können Sie Ihre Stellenanzeige jederzeit selbst offline nehmen oder löschen. Für individuelle Stellenpakete können Sie uns direkt über das "),r("b-link",{attrs:{to:"/kontakt"}},[e._v("Kontaktformular")]),e._v(" kontaktieren. ")],1),r("h3",{staticClass:"h5 bold"},[e._v(" Wo wird meine Stellenanzeige veröffentlicht? ")]),r("p",[e._v(" Mit der Veröffentlichung Ihrer Stellenanzeige auf unserer Webseite wird diese automatisch bei Google Jobs gelistet (es kann ein wenig Zeit in Anspruch nehmen, bis Google Ihre Anzeige integriert). Darüber hinaus verteilen wir Ihre Stellenanzeige über unseren Jobs Newsletter sowie unsere Social Media Kanäle. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Ich benötige Hilfe bei der Erstellung einer attraktiven Stellenanzeige. Kann ich Unterstützung von Ihnen bekommen? ")]),r("p",[e._v(" Mit unseren "),r("b-link",{attrs:{href:"#tipps-stellenanzeigen"}},[e._v("Tipps für attraktive Stellenanzeigen")]),e._v(" geben wir Ihnen unseren Erfahrungsschatz an die Hand. Benötigen Sie darüber hinaus Hilfe, melden Sie sich gern über das "),r("b-link",{attrs:{to:"/kontakt"}},[e._v("Kontaktformular")]),e._v(" bei uns. ")],1)])],1),r("div",{staticClass:"d-flex flex-column align-items-center mt-4"},[r("b-button",{staticClass:"mx-1 my-1",attrs:{to:"/kontakt",variant:"primary",size:"lg"}},[e._v("Kontakt")]),r("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/auth/register",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige erstellen")])],1)],1),r("Head",{attrs:{title:"Motivierte ArzthelferInnen – MFA & ZFA gesucht?",desc:"MFA mal anders ist das Jobportal speziell nur für Medizinische / Zahnmedizinische Fachangestellte. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen.",img:"",script:e.snippet}})],1)},i=[],a=(n("4160"),n("159b"),n("f873")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden bg-light-shade shadow1 m-3 p-4",attrs:{"no-body":"",align:"center"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"3"}},[r("b-img",{staticClass:"p-1 w-100 h-100",attrs:{src:n("5922"),alt:"Weitere Tipps für Stellenanzeigen für MFA / ZFA"}})],1),r("b-col",{attrs:{md:"9"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h4",{staticClass:"bold"},[e._v("Weitere Tipps für Ihre Stellenanzeige")]),r("p",[e._v(" Erhalten Sie zusätzliche Details zu unseren Tipps und erstellen Sie eine attraktive Stellenanzeige, die mehr Bewerber*innen anzieht. ")]),r("b-button",{attrs:{to:"/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas",variant:"primary"}},[e._v("Zu den Tipps")])],1)],1)],1)],1)},l=[],o=n("2b0e"),c=n("205f"),d=n("6197");o["default"].component("BCard",c["a"]),o["default"].component("BCardBody",d["a"]);var u={name:"JobAdTippsBanner"},b=u,h=n("2877"),g=Object(h["a"])(b,s,l,!1,null,null,null),p=g.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden bg-light-shade shadow1 m-3 p-4",attrs:{"no-body":"",align:"center"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"3"}},[r("b-img",{staticClass:"p-1 w-100 h-100",attrs:{src:n("65f7"),alt:"Tipps für einen effizienten Bewerbungsprozess für MFAs / ZFAs / ArzthelferInnen"}})],1),r("b-col",{attrs:{md:"9"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h4",{staticClass:"bold"},[e._v(" Unsere Tipps für einen effizienten Bewerbungsprozess ")]),r("p",[e._v(" Die Einstellung neuer MitarbeiterInnen kostet viel Zeit, Geld und Mühe. Aus diesem Grund sollte ein Bewerbungsprozess so effizient und gründlich wie möglich etabliert werden. Hier haben wir Ihnen einen kleinen Leitfaden zusammengestellt. ")]),r("b-button",{attrs:{to:"/blog/article/tipps-fuer-einen-effizienten-bewerbungsprozess",variant:"primary"}},[e._v("Mehr erfahren")])],1)],1)],1)],1)},f=[];o["default"].component("BCard",c["a"]),o["default"].component("BCardBody",d["a"]);var v={name:"JobAdTippsBanner"},y=v,w=Object(h["a"])(y,m,f,!1,null,null,null),_=w.exports,z={name:"Employer",components:{PayWhatYouWantSuggestion:a["a"],JobAdTippsBanner:p,ApplicationProcessBanner:_},data:function(){return{title:"Für Arbeitgeber",breadcrumbs:[{text:"Home",to:"/"},{text:"Für Arbeitgeber",to:"/fuer-arbeitgeber"}],jobAdTipps:[{icon:"drafting-compass",title:"Präziser Stellentitel",desc:"Beschreiben Sie die Stelle in wenigen Worten so konkret wie möglich. Heben Sie bereits hier die Vorteile für die Arbeit bei Ihnen hervor. Versuchen Sie positiv aufzufallen!"},{icon:"hospital",title:"Interessanter Einstiegstext",desc:"Erzählen Sie ein wenig über die Praxis bzw. Ihr Unternehmen. Wie viele MitarbeiterInnen gibt es? Seit wann gibt es die Praxis? Was zeichnet Sie aus? Wie ist die Arbeitskultur?"},{icon:"tasks",title:"Konkrete Aufgaben",desc:"Beschreiben Sie die konkreten und wichtigsten Aufgaben, sodass BewerberInnen ein gutes Bild bekommen und wissen, was sie potentiell erwartet."},{icon:"users",title:"Sympathisches Teambild",desc:"Bilder sagen mehr als 1000 Worte. Das gilt auch hier und speziell in Zeiten von Social Media. Ein nettes Bild von Ihrem Praxisteam kann die Zahl der Bewerbungen um ein Vielfaches erhöhen."},{icon:"syringe",title:"Adäquates Stellenprofil",desc:"Werden Sie auch hier konkret und unterscheiden Sie zwischen erforderlichen und wünschenswerten Kenntnissen. Zu viele oder hohe Anforderungen können BewerberInnen abschrecken, die eigentlich geeignet wären."},{icon:"gift",title:"Lukrative Benefits",desc:"Vergessen Sie nicht das wesentliche für die KandidatInnen. Was macht einen Wechsel zu Ihnen lohnenswert? Neben Gehalt und Urlaub können auch Dinge wie Weiterbildungen, spezielle Arbeitszeitmodelle oder Zuschüsse attraktiv sein."},{icon:"door-open",title:"Einfaches Bewerben",desc:"Ermöglichen Sie das einfache Bewerben nur per Lebenslauf. So können Sie die innerliche Hürde für BewerberInnen beträchtlich senken. Das persönliche Gespräch ist letztlich ohnehin entscheidend."},{icon:"desktop",title:"Moderner Webauftritt",desc:"Platzieren Sie sich als moderner Arbeitgeber. Potentielle BewerberInnen informieren sich meist auf Ihrer Webseite über Ihr Unternehmen. Hier können Sie punkten und positiv herausstechen."}],partners:[{name:"Landarzt sein.",img:"/img/landarztSein_logo.png",url:"https://www.landarzt-sein.de/?utm_source=mfa-mal-anders&utm_medium=linkref&utm_campaign=other"},{name:"Hausärzteverband HH",img:"/img/hzv-logo-hamburg2.png",url:"https://www.hausaerzteverband-hamburg.de/"},{name:"Hausärzteverband Westfalen-Lippe",img:"/img/hvwl_logo.png",url:"https://www.hausaerzteverband-wl.de/"},{name:"Ihre „gesunde“ Arztpraxis",img:"/img/ihreGesundeArztpraxis_logo2.png",url:"https://www.facebook.com/ihregesundearztpraxis/"}],numbersAndFacts:[{icon:"google",number:423e3,current:0,desc:"Menschen sehen uns monatlich bei Google"},{icon:"facebook",number:28e3,current:0,desc:"Monatliche Reichweite bei Facebook"},{icon:"chrome",number:53e3,current:0,desc:"Monatliche Seitenaufrufe auf der Webseite"}],snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Für Arbeitgeber",\n                              "item": "https://www.mfa-mal-anders.de/fuer-arbeitgeber"\n                          }]\n                      }'}]}},mounted:function(){var e=this,t=window.document.getElementById("numbers-and-facts"),n=setInterval((function(){t.offsetTop<window.scrollY+.66*window.innerHeight&&(clearInterval(n),e.startCounters())}),500)},methods:{startCounters:function(){this.numbersAndFacts.forEach((function(e){setInterval((function(){e.current<e.number&&(e.current=e.current+e.number/100)}),1)}))}}},S=z,C=(n("eed5"),Object(h["a"])(S,r,i,!1,null,"ef591940",null));t["default"]=C.exports},d580:function(e,t,n){"use strict";t["a"]={props:{tag:{type:String,default:"div"},bgVariant:{type:String},borderVariant:{type:String},textVariant:{type:String}}}},eed5:function(e,t,n){"use strict";n("4b05")},f873:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h5",[e._v("Wie hoch könnte Ihr Beitrag sein?")]),n("p",[e._v(" Wenn Sie nicht so recht wissen, wie hoch ihr Beitrag ausfallen könnte, gebe ich Ihnen an der Stelle gern einen Vorschlag, der sich an vergleichbaren Angeboten von anderen Branchen orientiert. ")]),n("ul",[n("li",[e._v(" Als "),n("strong",[e._v("kleine Praxis")]),e._v(" bis 5 MitarbeiterInnen, die zum ersten Mal in Jahren eine neue feste Stelle ausschreibt: "),n("strong",[e._v(e._s(e.$config.payment.minCost/100)+" "+e._s(e.$config.payment.currency)+" pro Stelle.")])]),n("li",[e._v(" Als "),n("strong",[e._v("mittlere Praxis")]),e._v(" mit 6 bis 10 MitarbeiterInnen, die gelegentlich eine neue Stelle ausschreibt: "),n("strong",[e._v(e._s(e.$config.payment.mediumCost/100)+" "+e._s(e.$config.payment.currency)+" pro Stelle.")])]),n("li",[e._v(" Als "),n("strong",[e._v("größere Praxis")]),e._v(" oder "),n("strong",[e._v("kleinere bis mittlere Versorgungseinrichtung ")]),e._v("mit 11 bis 20 MitarbeiterInnen, die regelmäßig Stellen ausschreibt: "),n("strong",[e._v(e._s(e.$config.payment.largeCost/100)+" "+e._s(e.$config.payment.currency)+" pro Stelle.")])]),n("li",[e._v(" Als "),n("strong",[e._v("große Versorgungseinrichtung ")]),e._v("mit über 20 Mitarbeiter*innen, die regelmäßig mehrere Stellen ausschreibt: "),n("strong",[e._v(e._s(e.$config.payment.xLargeCost/100)+" "+e._s(e.$config.payment.currency)+" pro Stelle.")])])]),n("p",[n("strong",[e._v(" Ab einem Betrag von "+e._s(e.$config.payment.refreshCost/100)+" "+e._s(e.$config.payment.currency)+" ")]),e._v(" wird Ihre Stellenanzeige automatisch alle 14 Tage in der Anzeigenliste an den Anfang versetzt. ")]),e._m(0),e.minimum?n("p",{staticClass:"small"},[e._v(" * Es fällt ein Mindestbeitrag von "+e._s((e.$config.payment.minCost/100).toFixed(2).toString().replace(".",","))+" "+e._s(e.$config.payment.currency)+" pro Stellenanzeige à "+e._s(e.$config.payment.duration)+" Tage an, der für den Betrieb der IT-Infrastruktur und der Pflege des Portals unerlässlich ist. ")]):e._e()])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"small"},[e._v(" Der Grundsatz "),n("strong",[n("em",[e._v("“Pay What You Want”")])]),e._v("* bleibt natürlich bestehen. Sie bestimmen die Höhe in Abhängigkeit von Ihrer ganz individuellen Situation. ")])}],a={name:"PayWhatYouWantSuggestion",props:{minimum:{type:Boolean}}},s=a,l=n("2877"),o=Object(l["a"])(s,r,i,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-f8a7a194.4673e7e7.js.map