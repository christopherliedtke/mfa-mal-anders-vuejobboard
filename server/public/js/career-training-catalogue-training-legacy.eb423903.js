(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-training-catalogue-training"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var r=a("2b0e"),i=a("b42e"),n=a("c637"),s=a("a723"),l=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=Object(l["c"])({animation:Object(l["b"])(s["s"],"wave"),height:Object(l["b"])(s["s"]),size:Object(l["b"])(s["s"]),type:Object(l["b"])(s["s"],"text"),variant:Object(l["b"])(s["s"]),width:Object(l["b"])(s["s"])},n["W"]),d=r["default"].extend({name:n["W"],functional:!0,props:o,render:function(t,e){var a,r=e.data,n=e.props,s=n.size,l=n.animation,o=n.variant;return t("div",Object(i["a"])(r,{staticClass:"b-skeleton",style:{width:s||n.width,height:s||n.height},class:(a={},c(a,"b-skeleton-".concat(n.type),!0),c(a,"b-skeleton-animate-".concat(l),l),c(a,"bg-".concat(o),o),a)}))}})},"215b":function(t,e,a){"use strict";a("dd0d")},3812:function(t,e,a){"use strict";a("8dd5")},"408a":function(t,e,a){var r=a("e330");t.exports=r(1..valueOf)},"512d":function(t,e,a){"use strict";a("e136")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("e330"),i=a("1d80"),n=a("577e"),s=a("5899"),l=r("".replace),c="["+s+"]",o=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),u=function(t){return function(e){var a=n(i(e));return 1&t&&(a=l(a,o,"")),2&t&&(a=l(a,d,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5e36":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"card text-center overflow-hidden shadow1 p-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-3"},[r("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:a("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"card-body d-flex flex-column justify-content-center align-items-center h-100 p-4"},[r("h3",{staticClass:"h1 bold"},[t._v(t._s(t.header))]),t._m(0),r("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],1)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Bist du auf der Suche nach einer "),a("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),t._v(" "),a("br"),t._v(" Du willst Dich "),a("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),a("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],n={name:"ToJobboardBanner",props:{header:{type:String,default:"Der richtige Job für Dich!"}}},s=n,l=(a("3812"),a("2877")),c=Object(l["a"])(s,r,i,!1,null,"71c6ab09",null);e["a"]=c.exports},"6df3":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.trainings?a("div",{staticClass:"row"},t._l(t.trainings,(function(e){return a("div",{key:e.id,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[a("WeiterbildungCard",{attrs:{training:e}})],1)})),0):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("WeiterbildungCardPlaceholder",{key:e,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},i=[],n=a("1da1"),s=(a("96cf"),a("a9e3"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"weiterbildung-card"},[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[a("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 768px) 100vw, (max-width: 992px) 50vw, 1200px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),a("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1)}),l=[],c={name:"WeiterbildungCard",props:{training:{type:Object,default:function(){}}}},o=c,d=(a("512d"),a("2877")),u=Object(d["a"])(o,s,l,!1,null,"1ce5d5d3",null),g=u.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},h=[],m=a("2b0e"),p=a("0942");m["default"].component("BSkeleton",p["a"]);var f={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},v=f,w=(a("215b"),Object(d["a"])(v,b,h,!1,null,"773bc4fc",null)),x=w.exports,C={name:"RandomTrainingsContainer",components:{WeiterbildungCard:g,WeiterbildungCardPlaceholder:x},props:{number:{type:Number,default:3}},data:function(){return{trainings:null}},watch:{$route:function(t,e){t!=e&&this.getTrainings()}},created:function(){this.getTrainings()},methods:{getTrainings:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                weiterbildungen(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.weiterbildungen){e.next=6;break}return e.abrupt("return");case 6:t.trainings=a.data.data.weiterbildungen,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},_=C,k=Object(d["a"])(_,r,i,!1,null,null,null);e["a"]=k.exports},7156:function(t,e,a){var r=a("1626"),i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var s,l;return n&&r(s=e.constructor)&&s!==a&&i(l=s.prototype)&&l!==a.prototype&&n(t,l),t}},"8dd5":function(t,e,a){},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),n=a("e330"),s=a("94ca"),l=a("6eeb"),c=a("1a2d"),o=a("7156"),d=a("3a9b"),u=a("d9b5"),g=a("c04e"),b=a("d039"),h=a("241c").f,m=a("06cf").f,p=a("9bf2").f,f=a("408a"),v=a("58a8").trim,w="Number",x=i[w],C=x.prototype,_=i.TypeError,k=n("".slice),y=n("".charCodeAt),S=function(t){var e=g(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,a,r,i,n,s,l,c,o=g(t,"number");if(u(o))throw _("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=v(o),e=y(o,0),43===e||45===e){if(a=y(o,2),88===a||120===a)return NaN}else if(48===e){switch(y(o,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+o}for(n=k(o,2),s=n.length,l=0;l<s;l++)if(c=y(n,l),c<48||c>i)return NaN;return parseInt(n,r)}return+o};if(s(w,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var A,M=function(t){var e=arguments.length<1?0:x(S(t)),a=this;return d(C,a)&&b((function(){f(a)}))?o(Object(e),a,M):e},z=r?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;z.length>F;F++)c(x,A=z[F])&&!c(M,A)&&p(M,A,m(x,A));M.prototype=C,C.constructor=M,l(i,w,M)}},b247:function(t,e,a){},ca31:function(t,e,a){t.exports=a.p+"img/search_engine__monochromatic.50ef63ab.svg"},dd0d:function(t,e,a){},e136:function(t,e,a){},e154:function(t,e,a){"use strict";a("b247")},fe74:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title"},[a("h1",[t._v("Fortbildung – "+t._s(t.training?t.training.title:""))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"container py-4 py-lg-5"},[t.training?a("Training",{attrs:{training:t.training}}):a("span",{staticClass:"h5"},[t._v("Fortbildung konnte nicht gefunden/geladen werden.")]),t.training?a("ToJobboardBanner",{staticClass:"mt-5"}):t._e(),a("div",{staticClass:"mt-5"},[a("h2",[a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[t._v("Fort- und Weiterbildungen aus unserer Übersicht")])],1),a("p",[t._v(" Du bist noch nicht sicher, welche Fort- oder Weiterbildung die richtige für Dich ist? Hier eine Auswahl aus unserer "),a("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[t._v("Übersicht an Fort- und Weiterbildungen für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte (MFA & ZFA)")]),t._v(". ")],1),t.training?a("RandomTrainingsContainer"):t._e()],1)],1),a("Head",{attrs:{title:t.training?t.training.title:" | Fortbildungskatalog",desc:t.training?t.training.excerpt:"",img:"/img/MfaMalAnders_Fortbildungskatalog.jpg",script:t.snippet}})],1)},i=[],n=a("1da1"),s=(a("96cf"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.training?a("article",{staticClass:"training"},[t.training._id?a("div",{staticClass:"header mb-3 mb-md-4"},[a("div",{staticClass:"training-title"},[a("p",{staticClass:"h2 bold"},[t._v(t._s(t.training.title))]),a("span",{staticClass:"text-muted lead",domProps:{innerHTML:t._s(t.training.company)}}),t.$store.state.auth.user.isAdmin?a("span",{staticClass:"border-radius1 bg-light-shade ml-2 p-2"},[a("b-link",{attrs:{to:"/user/trainings/edit/"+t.training._id}},[a("svg",{staticClass:"bi bi-pencil-square text-info",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])])],1):t._e()]),a("div",{staticClass:"logo-container"},[t.training.logoUrl?a("b-img-lazy",{attrs:{fluid:"","blank-src":"/img/MfaMalAnders_logo_circle_bgdark_white.svg","blank-width":"90",offset:"1000",height:"70",src:t.training.logoUrl,alt:"Logo "+t.training.company}}):t._e()],1)]):a("div",{staticClass:"mb-3 mb-md-4"},[a("BSkeleton",{staticClass:"mb-2",attrs:{height:"40px",width:"90%"}}),a("BSkeleton",{attrs:{height:"30px",width:"40%"}})],1),t.training._id?a("div",{staticClass:"meta mb-3"},[t.training.startAt?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-calendar2-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"}})]),t._v(t._s(new Date(t.training.startAt).toLocaleDateString())+" ")]):t._e(),t.training.startAnytime?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-calendar2-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"}})]),t._v(" Jederzeit starten ")]):t._e(),t.training.location&&!t.training.remote?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-geo-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),t._v(t._s(t.training.location)+" ")]):t._e(),t.training.remote?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-laptop mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"}})]),t._v("Online ")]):t._e(),t.training.duration?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-hourglass-split mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"}})]),t._v(t._s(t.training.duration)+" ")]):t._e(),t.training.effort?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-stopwatch-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"}})]),t._v(t._s(t.training.effort)+" ")]):t._e(),t.training.cost?a("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[a("svg",{staticClass:"bi bi-currency-euro mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})]),t._v(t._s(parseInt(t.training.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))+" ")]):t._e()]):a("div",{staticClass:"meta mb-3  d-flex"},[a("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"80px"}}),a("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"90px"}}),a("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"120px"}}),a("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"110px"}}),a("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"70px"}})],1),a("div",{staticClass:"mb-3 mb-md-4"},[t.training._id?a("div",{domProps:{innerHTML:t._s(t.training.desc)}}):a("div",[a("div",{staticClass:"mb-3"},[a("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(7,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",{staticClass:"mb-3"},[a("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(10,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",{staticClass:"mb-3"},[a("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(11,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",[a("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(6,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2)])]),a("div",{staticClass:"footer"},[t.training._id?a("b-button",{staticClass:"mr-2 mb-2 mb-lg-0",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog",variant:"outline-primary"}},[t._v("Zurück zur Übersicht")]):t._e(),t.training._id?a("b-button",{staticClass:"mr-2",attrs:{href:t.training.extUrl,target:"_blank",variant:"success"}},[t._v("Zum Anbieter")]):t._e(),t.training._id?t._e():a("BSkeleton",{staticStyle:{"border-radius":"18px"},attrs:{height:"36px",width:"150px"}})],1)]):t._e()}),l=[],c=a("2b0e"),o=a("0942");c["default"].component("BSkeleton",o["a"]);var d={name:"TrainingView",props:{training:{type:Object,default:function(){}}}},u=d,g=(a("e154"),a("2877")),b=Object(g["a"])(u,s,l,!1,null,"39350a27",null),h=b.exports,m=a("5e36"),p=a("6df3"),f={name:"CareerFortWeiterbildungCatalogueTraining",components:{Training:h,ToJobboardBanner:m["a"],RandomTrainingsContainer:p["a"]},data:function(){return{training:{},error:!1,breadcrumbs:[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildung",to:"/karriere/fort-und-weiterbildung"},{text:"Fortbildungskatalog",to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"},{text:"Fortbildung"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n                "@context": "http://schema.org",\n                "@type" : "BreadcrumbList",\n                "itemListElement": [{\n                    "@type": "ListItem",\n                    "position": 1,\n                    "name": "MFA mal anders",\n                    "item": "https://www.mfa-mal-anders.de"\n                },{\n                    "@type": "ListItem",\n                    "position": 2,\n                    "name": "Karriere",\n                    "item": "https://www.mfa-mal-anders.de/karriere"\n                },{\n                    "@type": "ListItem",\n                    "position": 4,\n                    "name": "Fort- & Weiterbildung",\n                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"\n                },{\n                    "@type": "ListItem",\n                    "position": 4,\n                    "name": "Fortbildungskatalog",\n                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog"\n                },{\n                    "@type": "ListItem",\n                    "position": 5,\n                    "name": "Fortbildung",\n                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog/'.concat(this.$route.params.id,"/").concat(this.$route.params.slug,'"\n                }]\n            }')},{rel:"canonical",href:"".concat(this.$config.website.url,"/karriere/fort-und-weiterbildung/fortbildungskatalog/").concat(this.$route.params.id,"/").concat(this.$route.params.slug),id:"canonical"}]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTraining();case 2:case"end":return e.stop()}}),e)})))()},methods:{getTraining:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                  publicTraining(_id: "'.concat(t.$route.params.id,'") {\n                      _id\n                      title\n                      desc\n                      excerpt\n                      company\n                      logoUrl\n                      type\n                      remote\n                      startAnytime\n                      startAt\n                      endAt\n                      location\n                      duration\n                      effort\n                      cost\n                      extUrl\n                  }\n              }\n          ')}});case 3:if(a=e.sent,!a.data.errors){e.next=6;break}throw new Error("Fortbildungen konnten nicht geladen werden!");case 6:t.training=a.data.data.publicTraining,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.training=null,t.error=!0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},v=f,w=Object(g["a"])(v,r,i,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=career-training-catalogue-training-legacy.eb423903.js.map