(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-training-catalogue-training"],{"0942":function(t,a,e){"use strict";e.d(a,"a",(function(){return c}));var i=e("2b0e"),r=e("b42e"),n=e("c637"),s=e("a723"),l=e("cf75");function d(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o=Object(l["c"])({animation:Object(l["b"])(s["s"],"wave"),height:Object(l["b"])(s["s"]),size:Object(l["b"])(s["s"]),type:Object(l["b"])(s["s"],"text"),variant:Object(l["b"])(s["s"]),width:Object(l["b"])(s["s"])},n["W"]),c=i["default"].extend({name:n["W"],functional:!0,props:o,render:function(t,a){var e,i=a.data,n=a.props,s=n.size,l=n.animation,o=n.variant;return t("div",Object(r["a"])(i,{staticClass:"b-skeleton",style:{width:s||n.width,height:s||n.height},class:(e={},d(e,"b-skeleton-".concat(n.type),!0),d(e,"b-skeleton-animate-".concat(l),l),d(e,"bg-".concat(o),o),e)}))}})},"215b":function(t,a,e){"use strict";e("dd0d")},3812:function(t,a,e){"use strict";e("8dd5")},"5e36":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("aside",{staticClass:"card text-center overflow-hidden shadow1 p-3"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-md-3"},[i("b-img-lazy",{staticClass:"p-4 w-100 h-100",attrs:{src:e("ca31"),alt:"Karriereschritt für MFA / ZFA","blank-width":"170","blank-height":"148",offset:"1000",fluid:""}})],1),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"card-body d-flex flex-column justify-content-center align-items-center h-100 p-4"},[i("h3",{staticClass:"h1 bold"},[t._v(t._s(t.header))]),t._m(0),i("b-button",{attrs:{to:"/stellenangebote",variant:"secondary"}},[t._v("Zu den Stellenangeboten")])],1)])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" Bist du auf der Suche nach einer "),e("strong",{staticClass:"text-primary"},[t._v("neuen Herausforderung?")]),t._v(" "),e("br"),t._v(" Du willst Dich "),e("strong",{staticClass:"text-primary"},[t._v("beruflich weiterentwickeln?")]),e("br"),t._v(" Finde bei uns Deinen nächsten Job! ")])}],n={name:"ToJobboardBanner",props:{header:{type:String,default:"Der richtige Job für Dich!"}}},s=n,l=(e("3812"),e("2877")),d=Object(l["a"])(s,i,r,!1,null,"71c6ab09",null);a["a"]=d.exports},"6df3":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.trainings?e("div",{staticClass:"row"},t._l(t.trainings,(function(a){return e("div",{key:a.id,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]},[e("WeiterbildungCard",{attrs:{training:a}})],1)})),0):e("div",{staticClass:"row"},t._l(t.number,(function(a){return e("WeiterbildungCardPlaceholder",{key:a,class:["article-card col-12 mb-4","col-md-6","col-lg-"+12/(3===t.number?3:2)]})})),1)},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"weiterbildung-card"},[e("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,"aria-label":t.training.title}},[e("div",{staticClass:"card"},[t.training.featuredImage.sourceUrl?e("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.training.featuredImage.srcSet,sizes:"(max-width: 576px) 100vw, 600px",src:t.training.featuredImage.sourceUrl,alt:t.training.featuredImage.altText,width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}):t._e(),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title h4"},[t._v(t._s(t.training.title))]),e("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.training.excerpt)}}),e("b-button",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick/"+t.training.slug,variant:"primary"}},[t._v("Mehr")])],1)],1)])],1)},s=[],l={name:"WeiterbildungCard",props:{training:{type:Object,default:()=>{}}}},d=l,o=(e("7788"),e("2877")),c=Object(o["a"])(d,n,s,!1,null,"89ee0286",null),g=c.exports,u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"weiterbildung-card-placeholder mb-2"},[e("div",{staticClass:"card"},[e("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),e("div",{staticClass:"card-body"},[e("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),e("div",{staticClass:"mt-3"},[e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),e("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{width:"86px",height:"39px"}})],1)],1)])},h=[],b=e("2b0e"),m=e("0942");b["default"].component("BSkeleton",m["a"]);var p={name:"WeiterbildungCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},v=p,w=(e("215b"),Object(o["a"])(v,u,h,!1,null,"773bc4fc",null)),f=w.exports,C={name:"RandomTrainingsContainer",components:{WeiterbildungCard:g,WeiterbildungCardPlaceholder:f},props:{number:{type:Number,default:3}},data(){return{trainings:null}},watch:{$route(t,a){t!=a&&this.getTrainings()}},created(){this.getTrainings()},methods:{async getTrainings(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                weiterbildungen(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    sizes\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.weiterbildungen)return;this.trainings=t.data.data.weiterbildungen}catch(t){return}}}},x=C,_=Object(o["a"])(x,i,r,!1,null,null,null);a["a"]=_.exports},7788:function(t,a,e){"use strict";e("aa36")},"8dd5":function(t,a,e){},aa36:function(t,a,e){},b247:function(t,a,e){},ca31:function(t,a,e){t.exports=e.p+"img/search_engine__monochromatic.50ef63ab.svg"},dd0d:function(t,a,e){},e154:function(t,a,e){"use strict";e("b247")},fe74:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"title"},[e("h1",[t._v("Fortbildung – "+t._s(t.training?t.training.title:""))]),e("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),e("div",{staticClass:"container py-4 py-lg-5"},[t.training?e("Training",{attrs:{training:t.training}}):e("span",{staticClass:"h5"},[t._v("Fortbildung konnte nicht gefunden/geladen werden.")]),t.training?e("ToJobboardBanner",{staticClass:"mt-5"}):t._e(),e("div",{staticClass:"mt-5"},[e("h2",[e("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[t._v("Fort- und Weiterbildungen aus unserer Übersicht")])],1),e("p",[t._v(" Du bist noch nicht sicher, welche Fort- oder Weiterbildung die richtige für Dich ist? Hier eine Auswahl aus unserer "),e("b-link",{attrs:{to:"/karriere/fort-und-weiterbildung/ueberblick"}},[t._v("Übersicht an Fort- und Weiterbildungen für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte (MFA & ZFA)")]),t._v(". ")],1),t.training?e("RandomTrainingsContainer"):t._e()],1)],1),e("Head",{attrs:{title:t.training?t.training.title:" | Fortbildungskatalog",desc:t.training?t.training.excerpt:"",img:"/img/MfaMalAnders_Fortbildungskatalog.jpg",script:t.snippet}})],1)},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.training?e("article",{staticClass:"training"},[t.training._id?e("div",{staticClass:"header mb-3 mb-md-4"},[e("div",{staticClass:"training-title"},[e("p",{staticClass:"h2 bold"},[t._v(t._s(t.training.title))]),e("span",{staticClass:"text-muted lead",domProps:{innerHTML:t._s(t.training.company)}}),t.$store.state.auth.user.isAdmin?e("span",{staticClass:"border-radius1 bg-light-shade ml-2 p-2"},[e("b-link",{attrs:{to:"/user/trainings/edit/"+t.training._id}},[e("svg",{staticClass:"bi bi-pencil-square text-info",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])])],1):t._e()]),e("div",{staticClass:"logo-container"},[t.training.logoUrl?e("b-img-lazy",{attrs:{fluid:"","blank-src":"/img/MfaMalAnders_logo_circle_bgdark_white.svg","blank-width":"90",offset:"1000",height:"70",src:t.training.logoUrl,alt:"Logo "+t.training.company}}):t._e()],1)]):e("div",{staticClass:"mb-3 mb-md-4"},[e("BSkeleton",{staticClass:"mb-2",attrs:{height:"40px",width:"90%"}}),e("BSkeleton",{attrs:{height:"30px",width:"40%"}})],1),t.training._id?e("div",{staticClass:"meta mb-3"},[t.training.startAt?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-calendar2-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"}})]),t._v(t._s(new Date(t.training.startAt).toLocaleDateString())+" ")]):t._e(),t.training.startAnytime?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-calendar2-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"}})]),t._v(" Jederzeit starten ")]):t._e(),t.training.location&&!t.training.remote?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-geo-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),t._v(t._s(t.training.location)+" ")]):t._e(),t.training.remote?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-laptop mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"}})]),t._v("Online ")]):t._e(),t.training.duration?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-hourglass-split mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"}})]),t._v(t._s(t.training.duration)+" ")]):t._e(),t.training.effort?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-stopwatch-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"}})]),t._v(t._s(t.training.effort)+" ")]):t._e(),t.training.cost?e("div",{staticClass:"badge badge-secondary badge-pill mr-1"},[e("svg",{staticClass:"bi bi-currency-euro mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})]),t._v(t._s(parseInt(t.training.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))+" ")]):t._e()]):e("div",{staticClass:"meta mb-3  d-flex"},[e("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"80px"}}),e("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"90px"}}),e("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"120px"}}),e("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"110px"}}),e("BSkeleton",{staticClass:"mr-2",staticStyle:{"border-radius":"15px"},attrs:{height:"30px",width:"70px"}})],1),e("div",{staticClass:"mb-3 mb-md-4"},[t.training._id?e("div",{domProps:{innerHTML:t._s(t.training.desc)}}):e("div",[e("div",{staticClass:"mb-3"},[e("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(7,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2),e("div",{staticClass:"mb-3"},[e("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(10,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2),e("div",{staticClass:"mb-3"},[e("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(11,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2),e("div",[e("BSkeleton",{staticClass:"mb-2",attrs:{height:"2rem",width:40*Math.random()+40+"%"}}),t._l(6,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2)])]),e("div",{staticClass:"footer"},[t.training._id?e("b-button",{staticClass:"mr-2 mb-2 mb-lg-0",attrs:{to:"/karriere/fort-und-weiterbildung/fortbildungskatalog",variant:"outline-primary"}},[t._v("Zurück zur Übersicht")]):t._e(),t.training._id?e("b-button",{staticClass:"mr-2",attrs:{href:t.training.extUrl,target:"_blank",variant:"success"}},[t._v("Zum Anbieter")]):t._e(),t.training._id?t._e():e("BSkeleton",{staticStyle:{"border-radius":"18px"},attrs:{height:"36px",width:"150px"}})],1)]):t._e()},s=[],l=e("2b0e"),d=e("0942");l["default"].component("BSkeleton",d["a"]);var o={name:"TrainingView",props:{training:{type:Object,default:()=>{}}}},c=o,g=(e("e154"),e("2877")),u=Object(g["a"])(c,n,s,!1,null,"39350a27",null),h=u.exports,b=e("5e36"),m=e("6df3"),p={name:"CareerFortWeiterbildungCatalogueTraining",components:{Training:h,ToJobboardBanner:b["a"],RandomTrainingsContainer:m["a"]},data(){return{training:{},error:!1,breadcrumbs:[{text:"Home",to:"/"},{text:"Karriere",to:"/karriere"},{text:"Fort- & Weiterbildung",to:"/karriere/fort-und-weiterbildung"},{text:"Fortbildungskatalog",to:"/karriere/fort-und-weiterbildung/fortbildungskatalog"},{text:"Fortbildung"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n                "@context": "http://schema.org",\n                "@type" : "BreadcrumbList",\n                "itemListElement": [{\n                    "@type": "ListItem",\n                    "position": 1,\n                    "name": "MFA mal anders",\n                    "item": "https://www.mfa-mal-anders.de"\n                },{\n                    "@type": "ListItem",\n                    "position": 2,\n                    "name": "Karriere",\n                    "item": "https://www.mfa-mal-anders.de/karriere"\n                },{\n                    "@type": "ListItem",\n                    "position": 4,\n                    "name": "Fort- & Weiterbildung",\n                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"\n                },{\n                    "@type": "ListItem",\n                    "position": 4,\n                    "name": "Fortbildungskatalog",\n                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog"\n                },{\n                    "@type": "ListItem",\n                    "position": 5,\n                    "name": "Fortbildung",\n                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog/${this.$route.params.id}/${this.$route.params.slug}"\n                }]\n            }`},{rel:"canonical",href:`${this.$config.website.url}/karriere/fort-und-weiterbildung/fortbildungskatalog/${this.$route.params.id}/${this.$route.params.slug}`,id:"canonical"}]}},async created(){await this.getTraining()},methods:{async getTraining(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                  publicTraining(_id: "${this.$route.params.id}") {\n                      _id\n                      title\n                      desc\n                      excerpt\n                      company\n                      logoUrl\n                      type\n                      remote\n                      startAnytime\n                      startAt\n                      endAt\n                      location\n                      duration\n                      effort\n                      cost\n                      extUrl\n                  }\n              }\n          `}});if(t.data.errors)throw new Error("Fortbildungen konnten nicht geladen werden!");this.training=t.data.data.publicTraining}catch(t){this.training=null,this.error=!0}}}},v=p,w=Object(g["a"])(v,i,r,!1,null,null,null);a["default"]=w.exports}}]);
//# sourceMappingURL=career-training-catalogue-training.750ad13b.js.map