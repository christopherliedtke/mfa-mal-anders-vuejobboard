(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newsletter"],{"0173":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("b-container",{staticClass:"my-5",staticStyle:{"max-width":"600px"}},[r("h3",{staticClass:"text-center"},[e._v("Schade, dass Du gehst!")]),r("b-form",[r("label",{attrs:{for:"email"}},[e._v("Gib die E-Mail Adresse an, mit welcher Du Dich vom Newsletter abmelden möchtest. *")]),r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-button",{staticClass:"mt-3",attrs:{variant:"danger"},on:{click:function(t){return t.preventDefault(),e.unsubscribe(t)}}},[e._v("Abmelden")]),e.error?r("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0 mt-3",staticStyle:{"z-index":"2000"},attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e()],1)],1)},a=[],o=(r("96cf"),r("c964")),i={name:"NewsletterUnsubscribe",data:function(){return{title:"Abmeldung vom Newsletter",form:{email:""},error:!1}},methods:{unsubscribe:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("/graphql",{query:'\n                      mutation {\n                          deleteSubscriber (email: "'.concat(e.form.email,'") {\n                              email\n                          }\n                      }\n                  ')});case 2:r=t.sent,r.data.errors?e.error="Die angegebene E-Mail Adresse konnte nicht vom Newsletter abgemeldet werden. Bitte überprüfe die E-Mail Adresse und versuche es noch einmal. Achte gegebenenfalls auch auf Groß- und Keinschreibung.":e.$router.push("/newsletter/unsubscribed-successful");case 4:case"end":return t.stop()}}),t)})))()}}},c=i,s=r("2877"),l=Object(s["a"])(c,n,a,!1,null,null,null);t["default"]=l.exports},"205f":function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r("b42e"),a=r("dcb3"),o=r("8690"),i=r("365c"),c=r("cf75"),s=r("d580"),l=r("6197"),u=r("b885");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=d(d({},Object(c["a"])(s["a"].props,c["c"].bind(null,"footer"))),{},{footer:{type:String},footerHtml:{type:String},footerClass:{type:[String,Object,Array]}}),g=a["a"].extend({name:"BCardFooter",functional:!0,props:p,render:function(e,t){var r,a=t.props,i=t.data,c=t.children,s=a.footerBgVariant,l=a.footerBorderVariant,u=a.footerTextVariant;return e(a.footerTag,Object(n["a"])(i,{staticClass:"card-footer",class:[a.footerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(l),l),f(r,"text-".concat(u),u),r)],domProps:c?{}:Object(o["a"])(a.footerHtml,a.footer)}),c)}}),m={src:{type:String,required:!0},alt:{type:String,default:null},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1},height:{type:[Number,String]},width:{type:[Number,String]}},y=a["a"].extend({name:"BCardImg",functional:!0,props:m,render:function(e,t){var r=t.props,a=t.data,o="card-img";return r.top?o+="-top":r.right||r.end?o+="-right":r.bottom?o+="-bottom":(r.left||r.start)&&(o+="-left"),e("img",Object(n["a"])(a,{class:[o],attrs:{src:r.src||null,alt:r.alt,height:r.height||null,width:r.width||null}}))}});function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=Object(c["a"])(m,c["c"].bind(null,"img"));j.imgSrc.required=!1;var w=v(v(v(v(v(v({},l["b"]),u["b"]),p),j),Object(c["a"])(s["a"].props)),{},{align:{type:String},noBody:{type:Boolean,default:!1}}),x=a["a"].extend({name:"BCard",functional:!0,props:w,render:function(e,t){var r,a=t.props,s=t.data,b=t.slots,d=t.scopedSlots,f=a.imgLeft,m=a.imgRight,h=a.imgStart,v=a.imgEnd,w=a.header,x=a.headerHtml,S=a.footer,C=a.footerHtml,A=a.align,P=a.textVariant,B=a.bgVariant,T=a.borderVariant,_=d||{},N=b(),E={},I=e(),D=e();if(a.imgSrc){var k=e(y,{props:Object(c["b"])(j,a,c["e"].bind(null,"img"))});a.imgBottom?D=k:I=k}var V=e(),R=Object(i["a"])("header",_,N);(R||w||x)&&(V=e(u["a"],{props:Object(c["b"])(u["b"],a),domProps:R?{}:Object(o["a"])(x,w)},Object(i["b"])("header",E,_,N)));var $=Object(i["b"])("default",E,_,N);a.noBody||($=e(l["a"],{props:Object(c["b"])(l["b"],a)},$));var M=e(),H=Object(i["a"])("footer",_,N);return(H||S||C)&&(M=e(g,{props:Object(c["b"])(p,a),domProps:R?{}:Object(o["a"])(C,S)},Object(i["b"])("footer",E,_,N))),e(a.tag,Object(n["a"])(s,{staticClass:"card",class:(r={"flex-row":f||h,"flex-row-reverse":(m||v)&&!(f||h)},O(r,"text-".concat(A),A),O(r,"bg-".concat(B),B),O(r,"border-".concat(T),T),O(r,"text-".concat(P),P),r)}),[I,V,$,M,D])}})},4968:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r("dcb3"),a=r("b42e"),o=r("fa73"),i={title:{type:String},titleTag:{type:String,default:"h4"}},c=n["a"].extend({name:"BCardTitle",functional:!0,props:i,render:function(e,t){var r=t.props,n=t.data,i=t.children;return e(r.titleTag,Object(a["a"])(n,{staticClass:"card-title"}),i||Object(o["f"])(r.title))}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},5995:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"newsletter-activation"},[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("b-container",{staticClass:"py-3 py-lg-5"},[r("p",{staticClass:"text-center"},[e._v(" Aktivierung Deiner Job-Newsletter Anmeldung läuft... ")]),r("RandomArticlesContainer",{staticStyle:{"margin-top":"5rem"}})],1),r("Head",{attrs:{title:e.title,desc:"Aktivierung Job-Newsletter für MFAs / ZFAs / ArzthelferInnen.",img:""}})],1)},a=[],o=(r("96cf"),r("c964")),i=r("e674"),c={name:"NewsletterSubscriptionActivation",components:{RandomArticlesContainer:i["a"]},data:function(){return{title:"Aktivierung – Job Newsletter"}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.activateSubscriber();case 2:case"end":return t.stop()}}),t)})))()},methods:{activateSubscriber:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.dispatch("setOverlay",!0),t.prev=1,!e.$route.params.subscriberId){t.next=9;break}return t.next=5,e.$axios.post("/graphql",{query:'\n                              mutation {\n                                  activateSubscriber (_id: "'.concat(e.$route.params.subscriberId,'") {\n                                      _id\n                                  }\n                              }\n                          ')});case 5:if(r=t.sent,!r.data.errors){t.next=8;break}throw new Error("Deine Newsletter Anmeldung konnte nicht aktiviert werden. Bitte versuche es noch einmal.");case 8:e.$router.push("/newsletter/subscription-successful");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.$root.$bvToast.toast(t.t0.message,{title:"Aktivierung Deiner Newsletter Anmeldung",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 14:e.$store.dispatch("setOverlay",!1);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},s=c,l=r("2877"),u=Object(l["a"])(s,n,a,!1,null,null,null);t["default"]=u.exports},"60f1":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("dcb3"),a=r("d82f"),o=r("b42e"),i=r("f479");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=Object(a["m"])(i["b"],["left","right","center","block","rounded","thumbnail","fluid","fluidGrow"]),b=s(s({},u),{},{top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1}}),d=n["a"].extend({name:"BCardImgLazy",functional:!0,props:b,render:function(e,t){var r=t.props,n=t.data,a="card-img";r.top?a+="-top":r.right||r.end?a+="-right":r.bottom?a+="-bottom":(r.left||r.start)&&(a+="-left");var c=s(s({},r),{},{left:!1,right:!1,center:!1});return e(i["a"],Object(o["a"])(n,{class:[a],props:c}))}})},6197:function(e,t,r){"use strict";r.d(t,"b",(function(){return w})),r.d(t,"a",(function(){return x}));var n=r("b42e"),a=r("dcb3"),o=r("cf75"),i=r("d580"),c=r("4968"),s=r("228e"),l=r("fa73"),u="BCardSubTitle",b={subTitle:{type:String},subTitleTag:{type:String,default:"h6"},subTitleTextVariant:{type:String,default:function(){return Object(s["c"])(u,"subTitleTextVariant")}}},d=a["a"].extend({name:u,functional:!0,props:b,render:function(e,t){var r=t.props,a=t.data,o=t.children;return e(r.subTitleTag,Object(n["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),o||Object(l["f"])(r.subTitle))}});function f(e){return y(e)||m(e)||g(e)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){if(e){if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function m(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function y(e){if(Array.isArray(e))return h(e)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=O(O(O(O({},Object(o["a"])(i["a"].props,o["c"].bind(null,"body"))),{},{bodyClass:{type:[String,Object,Array]}},c["b"]),b),{},{overlay:{type:Boolean,default:!1}}),x=a["a"].extend({name:"BCardBody",functional:!0,props:w,render:function(e,t){var r,a=t.props,i=t.data,s=t.children,l=e(),u=e(),p=s||[e()];return a.title&&(l=e(c["a"],{props:Object(o["b"])(c["b"],a)})),a.subTitle&&(u=e(d,{props:Object(o["b"])(b,a),class:["mb-2"]})),e(a.bodyTag,Object(n["a"])(i,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},j(r,"bg-".concat(a.bodyBgVariant),a.bodyBgVariant),j(r,"border-".concat(a.bodyBorderVariant),a.bodyBorderVariant),j(r,"text-".concat(a.bodyTextVariant),a.bodyTextVariant),r),a.bodyClass||{}]}),[l,u].concat(f(p)))}})},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==r&&n(i=o.prototype)&&i!==r.prototype&&a(e,i),e}},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("6eeb"),c=r("5135"),s=r("c6b6"),l=r("7156"),u=r("c04e"),b=r("d039"),d=r("7c73"),f=r("241c").f,p=r("06cf").f,g=r("9bf2").f,m=r("58a8").trim,y="Number",h=a[y],v=h.prototype,O=s(d(v))==y,j=function(e){var t,r,n,a,o,i,c,s,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(o=l.slice(2),i=o.length,c=0;c<i;c++)if(s=o.charCodeAt(c),s<48||s>a)return NaN;return parseInt(o,n)}return+l};if(o(y,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var w,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(O?b((function(){v.valueOf.call(r)})):s(r)!=y)?l(new h(j(t)),r,x):j(t)},S=n?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;S.length>C;C++)c(h,w=S[C])&&!c(x,w)&&g(x,w,p(h,w));x.prototype=v,v.constructor=x,i(a,y,x)}},b885:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return d}));var n=r("b42e"),a=r("dcb3"),o=r("8690"),i=r("cf75"),c=r("d580");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=l(l({},Object(i["a"])(c["a"].props,i["c"].bind(null,"header"))),{},{header:{type:String},headerHtml:{type:String},headerClass:{type:[String,Object,Array]}}),d=a["a"].extend({name:"BCardHeader",functional:!0,props:b,render:function(e,t){var r,a=t.props,i=t.data,c=t.children,s=a.headerBgVariant,l=a.headerBorderVariant,b=a.headerTextVariant;return e(a.headerTag,Object(n["a"])(i,{staticClass:"card-header",class:[a.headerClass,(r={},u(r,"bg-".concat(s),s),u(r,"border-".concat(l),l),u(r,"text-".concat(b),b),r)],domProps:c?{}:Object(o["a"])(a.headerHtml,a.header)}),c)}})},be8e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"newsletter-unsubscribe-success"},[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("b-container",{staticClass:"py-3 py-lg-5"},[r("p",[e._v(" Du hast dich erfolgreich von unserem Job-Newsletter abgemeldet. ")]),r("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[e._v("Weiter zur Stellenbörse")]),r("RandomArticlesContainer",{staticStyle:{"margin-top":"5rem"}})],1),r("Head",{attrs:{title:e.title,desc:"Job-Newsletter Abmeldung erfolgreich",img:""}})],1)},a=[],o=r("e674"),i={name:"NewsletterUnsubscriptionSuccess",components:{RandomArticlesContainer:o["a"]},data:function(){return{title:"Job Newsletter Abmeldung erfolgreich"}}},c=i,s=r("2877"),l=Object(s["a"])(c,n,a,!1,null,null,null);t["default"]=l.exports},c4c7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"newsletter-success"},[r("h1",{staticClass:"title"},[e._v(e._s(e.title))]),r("b-container",{staticClass:" py-5"},[r("p",[e._v(" Deine Anmeldung für den Job-Newsletter war erfolgreich. ")]),r("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[e._v("Weiter zur Stellenbörse")]),r("RandomArticlesContainer",{staticStyle:{"margin-top":"5rem"}})],1),r("Head",{attrs:{title:e.title,desc:"Anmeldung für den Job-Newsletter erfolgreich.",img:""}})],1)},a=[],o=r("e674"),i={name:"NewsletterSubscriptionSuccess",components:{RandomArticlesContainer:o["a"]},data:function(){return{title:"Job Newsletter Anmeldung erfolgreich"}}},c=i,s=r("2877"),l=Object(s["a"])(c,n,a,!1,null,null,null);t["default"]=l.exports},d580:function(e,t,r){"use strict";t["a"]={props:{tag:{type:String,default:"div"},bgVariant:{type:String},borderVariant:{type:String},textVariant:{type:String}}}},d6e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("dcb3"),a=r("b42e"),o={textTag:{type:String,default:"p"}},i=n["a"].extend({name:"BCardText",functional:!0,props:o,render:function(e,t){var r=t.props,n=t.data,o=t.children;return e(r.textTag,Object(a["a"])(n,{staticClass:"card-text"}),o)}})},e674:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",e._l(e.articles,(function(t){return r("b-col",{key:t.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/e.number}},[r("div",{staticClass:"article-card"},[r("b-link",{attrs:{to:"/blog/article/"+t.slug,"aria-label":t.title}},[r("BCard",{attrs:{"no-body":""}},[r("BCardImgLazy",{attrs:{src:t.featuredImage?t.featuredImage.node.sourceUrl:"",alt:t.featuredImage?t.featuredImage.node.altText:"",offset:"1000",top:""}}),r("BCardBody",[r("BCardTitle",{attrs:{title:t.title}}),r("BCardText",[r("div",{domProps:{innerHTML:e._s(t.excerpt)}})]),r("b-button",{attrs:{to:"/blog/article/"+t.slug,variant:"primary"}},[e._v("Mehr")])],1)],1)],1)],1)])})),1)},a=[],o=(r("a9e3"),r("2b0e")),i=r("205f"),c=r("6197"),s=r("60f1"),l=r("4968"),u=r("d6e4");o["default"].component("BCard",i["a"]),o["default"].component("BCardBody",c["a"]),o["default"].component("BCardImgLazy",s["a"]),o["default"].component("BCardTitle",l["a"]),o["default"].component("BCardText",u["a"]);var b={name:"RandomArticlesContainer",props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(e,t){e!=t&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(e,t){var r=new Array(t),n=e.length,a=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");while(t--){var o=Math.floor(Math.random()*n);r[t]=e[o in a?a[o]:o],a[o]=--n in a?a[n]:n}return r},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},d=b,f=r("2877"),p=Object(f["a"])(d,n,a,!1,null,null,null);t["a"]=p.exports}}]);
//# sourceMappingURL=newsletter.03d076fc.js.map