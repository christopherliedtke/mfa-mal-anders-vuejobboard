(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a0d114"],{"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),s=n("9112");for(var l in i){var c=r[l],o=c&&c.prototype;if(o&&o.forEach!==a)try{s(o,"forEach",a)}catch(d){o.forEach=a}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=n("ae40"),s=i("forEach"),l=a("forEach");e.exports=s&&l?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"205f":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("2b0e"),i=n("b42e"),a=n("c637"),s=n("a723"),l=n("9b76"),c=n("8690"),o=n("365c"),d=n("d82f"),u=n("cf75"),b=n("d580"),h=n("6197"),g=n("b885");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(u["d"])(Object(d["m"])(m(m({},Object(u["a"])(b["a"],u["f"].bind(null,"footer"))),{},{footer:Object(u["c"])(s["s"]),footerClass:Object(u["c"])(s["e"]),footerHtml:Object(u["c"])(s["s"])})),a["m"]),w=r["default"].extend({name:a["m"],functional:!0,props:v,render:function(e,t){var n,r=t.props,a=t.data,s=t.children,l=r.footerBgVariant,o=r.footerBorderVariant,d=r.footerTextVariant;return e(r.footerTag,Object(i["a"])(a,{staticClass:"card-footer",class:[r.footerClass,(n={},f(n,"bg-".concat(l),l),f(n,"border-".concat(o),o),f(n,"text-".concat(d),d),n)],domProps:s?{}:Object(c["a"])(r.footerHtml,r.footer)}),s)}}),z=n("2812");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=Object(u["a"])(z["b"],u["f"].bind(null,"img"));O.imgSrc.required=!1;var S=Object(u["d"])(Object(d["m"])(_(_(_(_(_(_({},h["b"]),g["b"]),v),O),b["a"]),{},{align:Object(u["c"])(s["s"]),noBody:Object(u["c"])(s["g"],!1)})),a["k"]),j=r["default"].extend({name:a["k"],functional:!0,props:S,render:function(e,t){var n,r=t.props,a=t.data,s=t.slots,d=t.scopedSlots,b=r.imgSrc,p=r.imgLeft,m=r.imgRight,f=r.imgStart,y=r.imgEnd,_=r.imgBottom,S=r.header,j=r.headerHtml,C=r.footer,x=r.footerHtml,P=r.align,I=r.textVariant,A=r.bgVariant,B=r.borderVariant,M=d||{},F=s(),E={},Z=e(),D=e();if(b){var T=e(z["a"],{props:Object(u["e"])(O,r,u["h"].bind(null,"img"))});_?D=T:Z=T}var V=e(),H=Object(o["a"])(l["n"],M,F);(H||S||j)&&(V=e(g["a"],{props:Object(u["e"])(g["b"],r),domProps:H?{}:Object(c["a"])(j,S)},Object(o["b"])(l["n"],E,M,F)));var W=Object(o["b"])(l["e"],E,M,F);r.noBody||(W=e(h["a"],{props:Object(u["e"])(h["b"],r)},W),r.overlay&&b&&(W=e("div",{staticClass:"position-relative"},[Z,W,D]),Z=e(),D=e()));var L=e(),G=Object(o["a"])(l["m"],M,F);return(G||C||x)&&(L=e(w,{props:Object(u["e"])(v,r),domProps:H?{}:Object(c["a"])(x,C)},Object(o["b"])(l["m"],E,M,F))),e(r.tag,Object(i["a"])(a,{staticClass:"card",class:(n={"flex-row":p||f,"flex-row-reverse":(m||y)&&!(p||f)},k(n,"text-".concat(P),P),k(n,"bg-".concat(A),A),k(n,"border-".concat(B),B),k(n,"text-".concat(I),I),n)}),[Z,V,W,L,D])}})},2812:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g}));var r=n("2b0e"),i=n("b42e"),a=n("c637"),s=n("a723"),l=n("d82f"),c=n("cf75"),o=n("4918");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=Object(c["d"])(Object(l["m"])(u(u({},Object(l["k"])(o["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(c["c"])(s["g"],!1),end:Object(c["c"])(s["g"],!1),start:Object(c["c"])(s["g"],!1),top:Object(c["c"])(s["g"],!1)})),a["o"]),g=r["default"].extend({name:a["o"],functional:!0,props:h,render:function(e,t){var n=t.props,r=t.data,a=n.src,s=n.alt,l=n.width,c=n.height,o="card-img";return n.top?o+="-top":n.right||n.end?o+="-right":n.bottom?o+="-bottom":(n.left||n.start)&&(o+="-left"),e("img",Object(i["a"])(r,{class:o,attrs:{src:a,alt:s,width:l,height:c}}))}})},4160:function(e,t,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4968:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return d}));var r=n("2b0e"),i=n("b42e"),a=n("c637"),s=n("a723"),l=n("cf75"),c=n("fa73"),o=Object(l["d"])({title:Object(l["c"])(s["s"]),titleTag:Object(l["c"])(s["s"],"h4")},a["s"]),d=r["default"].extend({name:a["s"],functional:!0,props:o,render:function(e,t){var n=t.props,r=t.data,a=t.children;return e(n.titleTag,Object(i["a"])(r,{staticClass:"card-title"}),a||Object(c["g"])(n.title))}})},"4dc8":function(e,t,n){e.exports=n.p+"img/handshake.2d0373f2.svg"},5922:function(e,t,n){e.exports=n.p+"img/presentation.af7b5947.svg"},6197:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return v}));var r=n("2b0e"),i=n("b42e"),a=n("c637"),s=n("a723"),l=n("d82f"),c=n("cf75"),o=n("d580"),d=n("4968"),u=n("fa73"),b=Object(c["d"])({subTitle:Object(c["c"])(s["s"]),subTitleTag:Object(c["c"])(s["s"],"h6"),subTitleTextVariant:Object(c["c"])(s["s"],"muted")},a["q"]),h=r["default"].extend({name:a["q"],functional:!0,props:b,render:function(e,t){var n=t.props,r=t.data,a=t.children;return e(n.subTitleTag,Object(i["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),a||Object(u["g"])(n.subTitle))}});function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=Object(c["d"])(Object(l["m"])(p(p(p(p({},d["b"]),b),Object(c["a"])(o["a"],c["f"].bind(null,"body"))),{},{bodyClass:Object(c["c"])(s["e"]),overlay:Object(c["c"])(s["g"],!1)})),a["l"]),v=r["default"].extend({name:a["l"],functional:!0,props:f,render:function(e,t){var n,r=t.props,a=t.data,s=t.children,l=r.bodyBgVariant,o=r.bodyBorderVariant,u=r.bodyTextVariant,g=e();r.title&&(g=e(d["a"],{props:Object(c["e"])(d["b"],r)}));var p=e();return r.subTitle&&(p=e(h,{props:Object(c["e"])(b,r),class:["mb-2"]})),e(r.bodyTag,Object(i["a"])(a,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},m(n,"bg-".concat(l),l),m(n,"border-".concat(o),o),m(n,"text-".concat(u),u),n),r.bodyClass]}),[g,p,s])}})},"65f7":function(e,t,n){e.exports=n.p+"img/profiling_monochromatic.4abc8e60.svg"},"993d":function(e,t,n){e.exports=n.p+"img/marketing_.cfe79d4e.svg"},abaf:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["pricing-card border-radius2 bg-light m-1 mb-3",e.active?"shadow2":"shadow1"]},[n("div",{class:"position-relative text-center bg-"+e.pricing.accent+" border-radius2 p-3",staticStyle:{overflow:"hidden"}},[n("span",{class:"h2 bold text-"+e.pricing.primary},[e._v(" "+e._s(e.pricing.name)+" ")]),e.pricing.badge?n("span",{class:"position-absolute text-light bg-"+e.pricing.badgeBg+" px-5 py-1 small",staticStyle:{transform:"rotate(45deg)",right:"-45px",top:"12px"}},[e._v(" "+e._s(e.pricing.badge)+" ")]):e._e()]),n("div",{staticClass:"p-3"},[n("span",{staticClass:"display-3 text-center d-block"},[n("span",{staticClass:"bold"},[e._v(e._s(e.pricing.price/100))]),n("span",[e._v("€")])])]),n("hr",{staticClass:"bg-light-shade"}),n("div",{staticClass:"p-3 p-lg-4"},[n("ul",{staticClass:"no-bullets"},e._l(e.pricing.desc,(function(t){return n("li",{key:t.html,staticClass:"d-flex"},[n("Fa",{class:"mr-3 "+(t.icon?"text-success":"text-muted"),attrs:{icon:t.icon||"check-circle",size:"lg"}}),n("div",{staticClass:"pb-1 pb-lg-2",domProps:{innerHTML:e._s(t.html)}})],1)})),0),n("b-button",{staticClass:"mt-2 mt-lg-3",attrs:{block:"",variant:e.active?"primary":"secondary"},on:{click:function(t){return e.setPricingPackage(e.pricing.name)}}},[e._v(e._s(e.checkout?"":"Weiter mit ")+e._s(e.pricing.name)+e._s(e.checkout?e.active?" Ausgewählt":" Auswählen":""))])],1)])},i=[],a={name:"PricingCard",props:{pricing:{type:Object,default:function(){return{price:0,name:"kA",desc:["kA"],primary:"primary",accent:"light-shade"}}},checkout:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},methods:{setPricingPackage:function(e){localStorage.setItem("pricingPackage",e),this.checkout?this.$emit("update-pricing-package",e):this.$router.push("/user/dashboard?tab=1")}}},s=a,l=n("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null);t["a"]=c.exports},b885:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return p}));var r=n("2b0e"),i=n("b42e"),a=n("c637"),s=n("a723"),l=n("8690"),c=n("d82f"),o=n("cf75"),d=n("d580");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(o["d"])(Object(c["m"])(b(b({},Object(o["a"])(d["a"],o["f"].bind(null,"header"))),{},{header:Object(o["c"])(s["s"]),headerClass:Object(o["c"])(s["e"]),headerHtml:Object(o["c"])(s["s"])})),a["n"]),p=r["default"].extend({name:a["n"],functional:!0,props:g,render:function(e,t){var n,r=t.props,a=t.data,s=t.children,c=r.headerBgVariant,o=r.headerBorderVariant,d=r.headerTextVariant;return e(r.headerTag,Object(i["a"])(a,{staticClass:"card-header",class:[r.headerClass,(n={},h(n,"bg-".concat(c),c),h(n,"border-".concat(o),o),h(n,"text-".concat(d),d),n)],domProps:s?{}:Object(l["a"])(r.headerHtml,r.header)}),s)}})},c4d7:function(e,t,n){"use strict";n("d0de")},d0de:function(e,t,n){},d25f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"employer"},[r("div",{staticClass:"title"},[r("h1",[e._v(e._s(e.title))]),r("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),r("b-container",{staticClass:"py-3 py-lg-5 px-md-5"},[r("b-row",{staticClass:"bg-primary text-light border-radius2 shadow1 w-100 p-3 py-4 p-md-5 mx-auto position-relative",staticStyle:{"overflow-x":"hidden"}},[r("div",{staticClass:"bg-logo"}),r("b-col",{staticStyle:{"z-index":"1"},attrs:{cols:"12",lg:"8"}},[r("h2",{staticClass:"display-4 bold mb-4"},[r("em",[e._v("Motivierte")]),e._v(" und "),r("em",[e._v("qualifizierte")]),e._v(" MFA & ZFA"+e._s(e.$route.query.location?" in "+e.$route.query.location:"")+" gesucht? ")]),r("ul",{staticClass:"lead no-bullets my-4 my-lg-5"},[r("li",{staticClass:"d-flex"},[r("Fa",{staticClass:"mr-3 mt-1",attrs:{icon:"check"}}),r("div",[e._v(" Einfach und bequem "),r("span",{staticClass:"text-secondary"},[e._v("in wenigen Minuten")]),e._v(" Ihre Stellenanzeige veröffentlichen ")])],1),r("li",{staticClass:"d-flex"},[r("Fa",{staticClass:"mr-3 mt-1",attrs:{icon:"check"}}),r("div",[r("span",{staticClass:"text-secondary"},[e._v("Erhalten Sie mit uns mehr Reichweite")]),e._v(" über Google Jobs, Social Media und unsere MFA & ZFA Community ")])],1),r("li",{staticClass:"d-flex"},[r("Fa",{staticClass:"mr-3 mt-1",attrs:{icon:"check"}}),r("div",[e._v(" Veröffentlichen Sie Ihre Stellenaneige "),r("b-link",{staticClass:"text-secondary",attrs:{href:"#preise"}},[e._v("ab "+e._s(e.$config.pricingPackages[0].price/100)+" "+e._s(e.$config.payment.currency))])],1)],1)]),r("div",{staticClass:"my-3"},[r("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/auth/register",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige erstellen")]),r("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{href:"#advantages",variant:"outline-light",size:"lg"}},[e._v("Mehr erfahren")])],1)]),r("b-col",{staticClass:"d-none d-lg-flex justify-content-center align-items-center",attrs:{cols:"12",lg:"4"}},[r("b-img",{staticClass:"position-absolute p-0",staticStyle:{width:"450px",opacity:"0.9",right:"0"},attrs:{src:n("4dc8"),alt:"MFA / ZFA trifft Arzt zum Bewerbungsgespräch"}})],1)],1)],1),r("b-container",{staticClass:"my-5 pb-3 pb-lg-5",attrs:{id:"advantages"}},[r("h2",{staticClass:"h5 text-center"},[e._v(" Stellenanzeige schalten bei MFA mal anders ")]),r("p",{staticClass:"bold display-4 text-center"},[e._v(" Ihre Zielgruppe genau im Blick ")]),r("h3",{staticClass:"h3 text-center"},[e._v(" Stellenanzeigen nur für ArzthelferInnen – MFA & ZFA ")]),r("b-row",{staticClass:"my-4 my-md-5"},[r("b-col",[r("div",{staticClass:"icon-box shadow1 py-5 px-4"},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa","user-nurse"],size:"3x"}}),r("h4",{staticClass:"h4 mt-4 mb-3"},[e._v("Genau Ihre Zielgruppe")]),r("p",[e._v(" Bei uns erreichen Sie "),r("strong",[e._v("exklusiv motivierte ArzthelferInnen – MFA & ZFA")]),e._v(" und damit genau Ihre Zielgruppe. ")])],1)]),r("b-col",[r("div",{staticClass:"icon-box shadow1 py-5 px-4"},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa","credit-card"],size:"3x"}}),r("h4",{staticClass:"h4 mt-4 mb-3"},[e._v("Niedrige Kosten")]),r("p",[e._v(" Veröffentlichen Sie Ihre Stellenanzeige und wählen Sie eines unserer Pakete "),r("strong",[e._v(" ab "+e._s(e.$config.pricingPackages[0].price/100)+" "+e._s(e.$config.payment.currency)+" für "+e._s(e.$config.pricingPackages[0].duration)+" Tage. ")])])],1)]),r("b-col",[r("div",{staticClass:"icon-box shadow1 py-5 px-4"},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa","paper-plane"],size:"3x"}}),r("h4",{staticClass:"h4 mt-4 mb-3"},[e._v("Einfach und bequem")]),r("p",[r("strong",[e._v("Sie erstellen Ihre Anzeige, wir sorgen für den Rest")]),e._v(" - Reichweite auf MFA mal anders, Google Jobs, Facebook und "),r("b-link",{attrs:{to:"#more-info"}},[e._v("mehr...")])],1)],1)])],1),r("div",{staticClass:"d-flex flex-column align-items-center mt-4"},[r("div",{staticClass:"mb-3"},[r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{to:"/auth/register",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige erstellen")]),r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#preise",variant:"primary",size:"lg"}},[e._v("Preise")])],1),r("div",[r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#tipps-stellenanzeigen",variant:"outline-secondary",size:"lg"}},[e._v("Tipps für Stellenanzeigen")]),r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#more-info",variant:"outline-primary",size:"lg"}},[e._v("Weitere Informationen")]),r("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#faq",variant:"outline-primary",size:"lg"}},[e._v("Fragen oder Hilfe benötigt?")])],1)])],1),r("b-container",{staticClass:"bg-light-shade py-4 py-lg-5 px-0",attrs:{fluid:""}},[r("b-container",{attrs:{id:"preise"}},[r("h2",{staticClass:" display-4 bold text-center"},[e._v(" Unsere Pakete in der Übersicht ")]),r("div",{staticClass:"my-4 my-lg-5 text-center text-lg-left"},[r("p",[e._v(" Mit MFA mal anders möchten wir Medizinischen & Zahnmedizinischen Fachangestellten die Möglichkeit geben, einen attraktiven Job zu finden. Aber auch Ihnen als Arbeitgeber eine alternative Plattform bereitstellen, die Ihre Stellenangebote an die richtige Zielgruppe ausspielt und so Ihre Chancen erhöht, qualifizierte Bewerbungen zu erhalten. ")]),r("p",[e._v(" Zur Veröffentlichung Ihrer Stellenanzeige bieten wir verschiedene Pakete an, um Sie bei Ihrer MitarbeiterInnen-Suche optimal unterstützen und ergänzen zu können. ")])]),r("b-row",{staticClass:"mb-4",attrs:{cols:"1","cols-lg":"3"}},e._l(e.$config.pricingPackages,(function(e){return r("b-col",{key:e.name},[r("PricingCard",{attrs:{pricing:e}})],1)})),1),r("p",[e._v(" Sie haben die Möglichkeit, Ihre Stellenanzeige nach "),r("b-link",{attrs:{to:"/auth/register"}},[e._v("Registrierung")]),e._v(" auf unserem Portal zu erstellen und in einer Vorschau zu betrachten. Anschließend können Sie Ihre Stellenanzeige mit einem der drei Pakete veröffentlichen. Auch für das Professional Paket bitten wir Sie, Ihre Stellenanzeige anhand unserer vorgegebenen Struktur zu erstellen. Wir setzen uns dann umgehend mit Ihnen in Verbindung, um Ihre Stellenanzeige gemeinsam für die Veröffentlichung und Reichweitenmaximierung zu optimieren. ")],1),r("p",[e._v(" Gern bieten wir Ihnen nach Absprache auch individuelle Pakete an, wenn Sie beispielsweise eine Stellenanzeige dauerhaft bei uns schalten möchten. Kontaktieren Sie uns dazu gern über unser "),r("b-link",{attrs:{to:"/kontakt?role=employer&subject=Stellenpakete"}},[e._v("Kontaktformular")]),e._v(". ")],1)],1)],1),r("b-container",{staticClass:"my-4 my-md-5"},[r("h2",{staticClass:"display-4 text-center bold"},[e._v(" Wir kooperieren mit ")]),r("b-row",{staticClass:"py-4"},e._l(e.partners,(function(t){return r("b-col",{key:t.name,staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("b-link",{attrs:{href:t.url,target:"_blank"}},[r("img",{staticClass:"m-5 blend",staticStyle:{"max-height":"75px","max-width":"220px"},attrs:{fluid:"",src:t.img,alt:"Logo - "+t.name}})]),r("div",{domProps:{innerHTML:e._s(t.html)}}),t.html?r("b-button",{staticClass:"align-self-start",attrs:{size:"sm",variant:"outline-primary",href:t.url,target:"_blank",rel:"noopener"}},[e._v("Mehr erfahren")]):e._e()],1)})),1)],1),r("b-container",{staticClass:"mb-5 py-md-5",attrs:{id:"numbers-and-facts"}},[r("h2",{staticClass:"h1 text-center bold mb-4"},[e._v(" Ein paar Zahlen und Fakten "),r("span",{staticStyle:{"font-size":"0.8rem"}},[e._v("(01/2021)")])]),r("b-row",{attrs:{cols:"1","cols-md":"3"}},e._l(e.numbersAndFacts,(function(t){return r("b-col",{key:t.desc,staticClass:"text-center"},[r("Fa",{staticClass:"mt-3 mb-4 text-secondary",attrs:{icon:["fab",t.icon],size:"4x"}}),r("div",{staticClass:"display-4 bold mb-3"},[e._v(" "+e._s(Math.floor(t.number).toLocaleString())+"+ ")]),r("p",[e._v(e._s(t.desc))])],1)})),1)],1),r("b-container",{staticClass:"bg-light-shade py-5 mb-5",attrs:{id:"more-info",fluid:""}},[r("b-container",[r("h2",{staticClass:"bold mb-4"},[e._v(" Ihre Jobbörse nur für ArzthelferInnen – MFA & ZFA – MFA mal anders ")]),r("b-row",{attrs:{cols:"1","cols-md":"2"}},[r("b-col",[r("p",[e._v(" Wir bieten speziell Arztpraxen, MVZs und allen weiteren Einrichtungen aus dem Gesundheitswesen eine vertrauensvolle Plattform mit "),r("strong",[e._v("Fokus auf Ihre Zielgruppe")]),e._v(". ")]),r("p",[e._v(" Aufgrund persönlicher Erfahrungen als MFA und im Gesundheitsbereich bringen wir als Initiatoren von MFA mal anders detaillierte Branchenkenntnisse mit. Da wir um die "),r("strong",[e._v(" Probleme beim Finden von qualifiziertem Personal ")]),e._v(" wissen, können wir unser Angebot punktgenau ausrichten. ")]),r("p",[e._v(" Ihre Stellenanzeige ist bei uns bestens platziert. Im Gegensatz zu anderen allgemeinen Stellenbörsen, finden Sie hier ausschließlich die richtige Zielgruppe für Ihr Unternehmen: Medizinische & Zahnmedizinische Fachangestellte. ")]),r("h3",[e._v("Wo wir Ihre Stellenanzeige ausspielen")]),r("p",[e._v(" Ihre Stellenanzeige wird dort ausgespielt, wo Sie Ihre Zielgruppe findet: bei "),r("strong",[e._v(" Social Media, Google Jobs und auf unserer Webseite ")]),e._v(" . Zusätzlich versenden wir Ihre Anzeige in unserem "),r("strong",[e._v(" wöchentlichen Newsletter ")]),e._v(" . ")])]),r("b-col",[r("p",[e._v(" Erhöhen Sie die Chance, dass Ihre Stellenanzeige von der richtigen Person gesehen wird. ")]),r("b-img",{staticClass:"p-2 p-md-4",staticStyle:{"max-width":"50%"},attrs:{right:"",src:n("993d"),alt:"Stellenanzeige für MFA / ZFA wird über verschiedene Kanäle veröffentlicht"}}),r("p",[e._v(" Damit grenzen wir uns gezielt von allgemeinen Jobbörsen, die eine breite Masse an unterschiedlichen Berufsgruppen ansprechen und hohe Streuverluste haben, ab. Da wir "),r("strong",[e._v("mehr als eine reine Jobbörse")]),e._v(" sind, erreichen wir mit unserem Angebot zudem eine deutlich größere Anzahl von wirklich motivierten MFAs & ZFAs. ")]),r("p",[e._v(" Wir arbeiten "),r("strong",[e._v("nicht mit Personalvermittlern")]),e._v(", "),r("strong",[e._v("Zeitarbeitsfirmen oder Headhuntern")]),e._v(" zusammen. ")]),r("p",[e._v(" Bei uns können Sie Ihre Stellenanzeige zudem "),r("strong",[e._v("kostengünstig")]),e._v(" veröffentlichen und so Ihrem Budget anpassen sowie zusätzliche Reichweite und qualifizierte Bewerbungen erzielen. ")])],1)],1)],1)],1),r("b-container",{staticClass:"mb-5",attrs:{id:"tipps-stellenanzeigen"}},[r("h2",{staticClass:"bold mb-4"},[e._v(" Tipps für Ihre Stellenanzeige ")]),r("p",[e._v(" Ihre Stellenanzeige ist eine Einladung für BewerberInnen zum Dialog – denn bestenfalls wird daraus ein Vorstellungsgespräch. Eine gute Stellenanzeige beschreibt nicht nur die zu besetzende Stelle, sondern geht auch auf die Bedürfnisse der Zielgruppe ein. Machen Sie ein Angebot, dass so attraktiv ist, dass man nicht anders kann, als sich zu bewerben! ")]),r("p",[e._v(" Durch unsere Arbeit hatten wir die Gelegenheit eine Vielzahl von Bewerbungsprozessen zu begleiten und aus erster Hand zu erfahren, was bei potentiellen BewerberInnen ankommt und was nicht. Deshalb geben wir hier eine kleine Übersicht an Tipps. Zusätzlich können Sie sich unsere "),r("b-link",{staticClass:"bold",attrs:{href:"/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf",target:"_blank"}},[e._v("Beispiel Stellenanzeige")]),e._v(" zur Inspiration ansehen. ")],1),r("b-row",[e._l(e.jobAdTipps,(function(t){return r("b-col",{key:t.title,attrs:{cols:"12",md:"6",lg:"4"}},[r("div",{staticClass:"icon-box shadow1"},[r("div",{staticClass:"bg-light border-radius1 shadow3 d-flex justify-content-center align-items-center mb-3",staticStyle:{width:"75px",height:"75px"}},[r("Fa",{staticClass:"m-0",attrs:{icon:["fa",t.icon],size:"3x"}})],1),r("h3",{staticClass:"bold"},[e._v(e._s(t.title))]),r("p",{staticClass:"mb-0"},[e._v(" "+e._s(t.desc)+" ")])])])})),r("b-col",{attrs:{cols:"12",md:"6",lg:"4"}},[r("div",{staticClass:"icon-box shadow1 py-4"},[r("h4",{staticClass:"bold mb-3"},[e._v(" Jetzt Stellenanzeige erstellen ")]),r("p",[e._v(" Erstellen Sie jetzt Ihre attraktive Stellenanzeige und erreichen Sie unsere große Community von MFAs & ZFAs! Mit unseren "),r("b-link",{staticClass:"text-secondary",attrs:{href:"#preise"}},[e._v("Paketen")]),e._v(" unterstützen wir Sie optimal und individuell bei der Personalsuche. ")],1),r("b-button",{attrs:{to:"/auth/register",variant:"secondary"}},[e._v("Zur Registrierung")])],1)]),r("b-col",{attrs:{cols:"12",md:"6",lg:"12"}},[r("JobAdTippsBanner")],1),r("b-col",{attrs:{cols:"12"}},[r("ApplicationProcessBanner")],1)],2)],1),r("b-container",{attrs:{id:"faq"}},[r("h2",{staticClass:"h1 bold text-center mb-4"},[e._v(" Häufige Fragen ")]),r("b-row",{attrs:{cols:"1","cols-md":"2"}},[r("b-col",[r("h3",{staticClass:"h5 bold"},[e._v(" Welche Zahlungsarten stehen zur Verfügung? ")]),r("p",[e._v(" Für die Zahlung Ihrer Stellenanzeige können Sie eine Kreditkarte nutzen, per GooglePay oder per GiroPay bezahlen. Bei diesen Zahlungsmethoden wird Ihre Stellenanzeige sofort veröffentlicht. Ebenso steht Ihnen die Zahlung per Rechnung zur Verfügung. Bitte beachten Sie hierbei, dass Ihre Stellenanzeige erst dann veröffentlicht wird, wenn Ihre Zahlung bei uns eingegangen ist. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Wie lange dauert es bis zur Veröffentlichung meiner Stellenanzeige? ")]),r("p",[e._v(" Je nach Zahlungsmethode ist Ihre Stellenanzeige sofort online (GiroPay, GooglePay, Kreditkarte) oder Zahlung auf Rechnung erst nach erfolgtem Zahlungseingang. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Kann ich auch per Rechnung zahlen? ")]),r("p",[e._v(" Ja, die Möglichkeit besteht. Ihre Stellenanzeige wird von uns freigeschaltet sobald wir einen Zahlungseingang von Ihnen verbuchen können. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Kann ich meine Stellenanzeige im Nachhinein ändern? ")]),r("p",[e._v(" Über Ihren registrierten Account können Sie Ihre Stellenanzeige jederzeit anpassen. Die Änderungen werden sofort automatisch übernommen. ")])]),r("b-col",[r("h3",{staticClass:"h5 bold"},[e._v(" Wie lange ist meine Stellenanzeige online? ")]),r("p",[e._v(" Die Laufzeit Ihrer Stellenanzeige können Sie über die verfügbaren Stellenpakete auswählen. Die Mindestlaufzeit beträgt 60 Tage. Ihre Stelle ist so lange online, wie Ihre gewählte Laufzeit sowie Ihre angegebene Bewerbungsfrist nicht abgelaufen sind. Über Ihren Account können Sie Ihre Stellenanzeige jederzeit selbst offline nehmen oder löschen. Für individuelle Stellenpakete können Sie uns direkt über das "),r("b-link",{attrs:{to:"/kontakt?role=employer"}},[e._v("Kontaktformular")]),e._v(" kontaktieren. ")],1),r("h3",{staticClass:"h5 bold"},[e._v(" Wo wird meine Stellenanzeige veröffentlicht? ")]),r("p",[e._v(" Mit der Veröffentlichung Ihrer Stellenanzeige auf unserer Webseite wird diese automatisch bei Google Jobs gelistet (es kann ein wenig Zeit in Anspruch nehmen, bis Google Ihre Anzeige integriert). Darüber hinaus verteilen wir Ihre Stellenanzeige über unseren Jobs Newsletter sowie je nach Paket in unsere Social Media Kanälen. ")]),r("h3",{staticClass:"h5 bold"},[e._v(" Ich benötige Hilfe bei der Erstellung einer attraktiven Stellenanzeige. Kann ich Unterstützung von Ihnen bekommen? ")]),r("p",[e._v(' In unserem "Professional" Paket erhalten Sie individuelle und persönliche Beratung bei der Erstellung und Optimierung Ihrer Stellenanzeige. Zudem geben wir Ihnen mit unseren '),r("b-link",{attrs:{href:"#tipps-stellenanzeigen"}},[e._v("Tipps für attraktive Stellenanzeigen")]),e._v(" wichtige Hinweise an die Hand. Benötigen Sie darüber hinaus Hilfe, melden Sie sich gern auch über das "),r("b-link",{attrs:{to:"/kontakt?role=employer"}},[e._v("Kontaktformular")]),e._v(" bei uns. ")],1)])],1),r("div",{staticClass:"d-flex flex-column align-items-center mt-4"},[r("b-button",{staticClass:"mx-1 my-1",attrs:{to:"/kontakt?role=employer",variant:"primary",size:"lg"}},[e._v("Kontakt")]),r("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/auth/register",variant:"secondary",size:"lg"}},[e._v("Stellenanzeige erstellen")])],1)],1),r("Head",{attrs:{title:"Motivierte ArzthelferInnen – MFA & ZFA gesucht?",desc:"MFA mal anders ist das Jobportal speziell nur für Medizinische / Zahnmedizinische Fachangestellte. Gesucht – Gefunden! Mit günstigen Stellenanzeigen, die wirklich ankommen.",img:"",script:e.snippet}})],1)},i=[],a=(n("4160"),n("159b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden bg-light-shade shadow1 m-3 p-4",attrs:{"no-body":"",align:"center"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"3"}},[r("b-img",{staticClass:"p-1 w-100 h-100",attrs:{src:n("5922"),alt:"Weitere Tipps für Stellenanzeigen für MFA & ZFA"}})],1),r("b-col",{attrs:{md:"9"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h4",{staticClass:"bold"},[e._v("Weitere Tipps für Ihre Stellenanzeige")]),r("p",[e._v(" Erhalten Sie zusätzliche Details zu unseren Tipps und erstellen Sie eine attraktive Stellenanzeige, die mehr Bewerber*innen anzieht. ")]),r("div",[r("b-button",{staticClass:"mx-1 my-1",attrs:{to:"/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas",variant:"primary"}},[e._v("Zu den Tipps")]),r("b-button",{staticClass:"mx-1 my-1",attrs:{href:"/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf",target:"_blank",variant:"secondary"}},[e._v("Beispiel herunterladen")])],1)])],1)],1)],1)}),s=[],l=n("2b0e"),c=n("205f"),o=n("6197");l["default"].component("BCard",c["a"]),l["default"].component("BCardBody",o["a"]);var d={name:"JobAdTippsBanner"},u=d,b=n("2877"),h=Object(b["a"])(u,a,s,!1,null,null,null),g=h.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BCard",{staticClass:"overflow-hidden bg-light-shade shadow1 m-3 p-4",attrs:{"no-body":"",align:"center"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"3"}},[r("b-img",{staticClass:"p-1 w-100 h-100",attrs:{src:n("65f7"),alt:"Tipps für einen effizienten Bewerbungsprozess für MFAs / ZFAs / ArzthelferInnen"}})],1),r("b-col",{attrs:{md:"9"}},[r("BCardBody",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h4",{staticClass:"bold"},[e._v(" Unsere Tipps für einen effizienten Bewerbungsprozess ")]),r("p",[e._v(" Die Einstellung neuer MitarbeiterInnen kostet viel Zeit, Geld und Mühe. Aus diesem Grund sollte ein Bewerbungsprozess so effizient und gründlich wie möglich etabliert werden. Hier haben wir Ihnen einen kleinen Leitfaden zusammengestellt. ")]),r("b-button",{attrs:{to:"/blog/article/tipps-fuer-einen-effizienten-bewerbungsprozess",variant:"primary"}},[e._v("Mehr erfahren")])],1)],1)],1)],1)},m=[];l["default"].component("BCard",c["a"]),l["default"].component("BCardBody",o["a"]);var f={name:"JobAdTippsBanner"},v=f,w=Object(b["a"])(v,p,m,!1,null,null,null),z=w.exports,y=n("abaf"),_={name:"Employer",components:{JobAdTippsBanner:g,ApplicationProcessBanner:z,PricingCard:y["a"]},data:function(){return{title:"Für Arbeitgeber",breadcrumbs:[{text:"Home",to:"/"},{text:"Für Arbeitgeber",to:"/fuer-arbeitgeber"}],jobAdTipps:[{icon:"drafting-compass",title:"Präziser Stellentitel",desc:"Beschreiben Sie die Stelle in wenigen Worten so konkret wie möglich. Heben Sie bereits hier die Vorteile für die Arbeit bei Ihnen hervor. Versuchen Sie positiv aufzufallen!"},{icon:"hospital",title:"Interessanter Einstiegstext",desc:"Erzählen Sie ein wenig über die Praxis bzw. Ihr Unternehmen. Wie viele MitarbeiterInnen gibt es? Seit wann gibt es die Praxis? Was zeichnet Sie aus? Wie ist die Arbeitskultur?"},{icon:"tasks",title:"Konkrete Aufgaben",desc:"Beschreiben Sie die konkreten und wichtigsten Aufgaben, sodass BewerberInnen ein gutes Bild bekommen und wissen, was sie potentiell erwartet."},{icon:"users",title:"Sympathisches Teambild",desc:"Bilder sagen mehr als 1000 Worte. Das gilt auch hier und speziell in Zeiten von Social Media. Ein nettes Bild von Ihrem Praxisteam kann die Zahl der Bewerbungen um ein Vielfaches erhöhen."},{icon:"syringe",title:"Adäquates Stellenprofil",desc:"Werden Sie auch hier konkret und unterscheiden Sie zwischen erforderlichen und wünschenswerten Kenntnissen. Zu viele oder hohe Anforderungen können BewerberInnen abschrecken, die eigentlich geeignet wären."},{icon:"gift",title:"Lukrative Benefits",desc:"Vergessen Sie nicht das wesentliche für die KandidatInnen. Was macht einen Wechsel zu Ihnen lohnenswert? Neben Gehalt und Urlaub können auch Dinge wie Weiterbildungen, spezielle Arbeitszeitmodelle oder Zuschüsse attraktiv sein."},{icon:"door-open",title:"Einfaches Bewerben",desc:"Ermöglichen Sie das einfache Bewerben nur per Lebenslauf. So können Sie die innerliche Hürde für BewerberInnen beträchtlich senken. Das persönliche Gespräch ist letztlich ohnehin entscheidend."},{icon:"desktop",title:"Moderner Webauftritt",desc:"Platzieren Sie sich als moderner Arbeitgeber. Potentielle BewerberInnen informieren sich meist auf Ihrer Webseite über Ihr Unternehmen. Hier können Sie punkten und positiv herausstechen."}],partners:[{name:"PKV Institut",img:"/img/pkvverlag_logo.png",url:"https://www.pkv-institut.de/?utm_source=MFA%20mal%20anders&utm_medium=affiliate"},{name:"Landarzt sein.",img:"/img/landarztSein_logo.png",url:"https://www.landarzt-sein.de/?utm_source=mfa-mal-anders&utm_medium=linkref&utm_campaign=other"},{name:"Hausärzteverband HH",img:"/img/hzv-logo-hamburg2.png",url:"https://www.hausaerzteverband-hamburg.de/"},{name:"Hausärzteverband Westfalen-Lippe",img:"/img/hvwl_logo.png",url:"https://www.hausaerzteverband-wl.de/index.php/hausaerzte/personal-finden-mfa-mal-anders",html:"\n            <p>Der Hausärzteverband Westfalen-Lippe e.V. ist ein Zusammenschluss und\n              die Interessenvertretung hausärztlich tätiger Ärztinnen und Ärzte in\n              Westfalen-Lippe und der drittgrößte der 17 Landesverbände des\n              Deutschen Hausärzteverbandes.\n            </p>\n            <p>\n              Mit knapp 30.000 Mitgliedern bundesweit ist der Deutsche\n              Hausärzteverband e.V. der größte Berufsverband niedergelassener Ärzte\n              in Deutschland und Europa.\n            </p>\n            <p>\n              Die 17 Landesverbände setzen sich für die Interessen der Hausärztinnen\n              und Hausärzte regional gegenüber Ärztekammern, Kassenärztlichen\n              Vereinigungen, Krankenkassen und Landesministerien ein. Das Büro des\n              Bundesvorsitzenden in Berlin nimmt die Interessen auf\n              bundespolitischer Ebene wahr.\n            </p>\n            <p>\n              Der Hausärzteverband Westfalen-Lippe e.V. vertritt mehr als 4.500\n              Ärztinnen und Ärzte, die in Westfalen-Lippe an der hausärztlichen\n              Versorgung teilnehmen.\n            </p>\n            <p>\n              <strong>\n                Als Kooperationspartner des Hausärzteverbandes Westfalen-Lippe\n                unterstützt „MFA mal anders“ Mitglieder des Hausärzteverbandes mit\n                einem Vorzugsangebot zur Schaltung von Stellenanzeigen.\n              </strong>\n            </p>\n          "}],numbersAndFacts:[{icon:"google",number:423e3,current:0,desc:"Menschen sehen uns monatlich bei Google"},{icon:"facebook",number:28e3,current:0,desc:"Monatliche Reichweite bei Facebook"},{icon:"chrome",number:53e3,current:0,desc:"Monatliche Seitenaufrufe auf der Webseite"}],snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Für Arbeitgeber",\n                              "item": "https://www.mfa-mal-anders.de/fuer-arbeitgeber"\n                          }]\n                      }'}]}},mounted:function(){},methods:{startCounters:function(){this.numbersAndFacts.forEach((function(e){setInterval((function(){e.current<e.number&&(e.current=e.current+e.number/100)}),1)}))}}},k=_,O=(n("c4d7"),Object(b["a"])(k,r,i,!1,null,"0910d72a",null));t["default"]=O.exports},d580:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("2b0e"),i=n("c637"),a=n("a723"),s=n("cf75"),l=Object(s["d"])({bgVariant:Object(s["c"])(a["s"]),borderVariant:Object(s["c"])(a["s"]),tag:Object(s["c"])(a["s"],"div"),textVariant:Object(s["c"])(a["s"])},i["k"]);r["default"].extend({props:l})}}]);
//# sourceMappingURL=chunk-63a0d114.5a0c7e14.js.map