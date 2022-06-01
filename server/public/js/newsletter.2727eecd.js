(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newsletter"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var s=a("2b0e"),r=a("b42e"),i=a("c637"),l=a("a723"),n=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=Object(n["c"])({animation:Object(n["b"])(l["s"],"wave"),height:Object(n["b"])(l["s"]),size:Object(n["b"])(l["s"]),type:Object(n["b"])(l["s"],"text"),variant:Object(n["b"])(l["s"]),width:Object(n["b"])(l["s"])},i["W"]),d=s["default"].extend({name:i["W"],functional:!0,props:o,render:function(t,e){var a,s=e.data,i=e.props,l=i.size,n=i.animation,o=i.variant;return t("div",Object(r["a"])(s,{staticClass:"b-skeleton",style:{width:l||i.width,height:l||i.height},class:(a={},c(a,"b-skeleton-".concat(i.type),!0),c(a,"b-skeleton-animate-".concat(n),n),c(a,"bg-".concat(o),o),a)}))}})},"0e02":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newsletter-unsubscribe-success"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"container py-3 py-lg-5"},[a("p",[t._v(" Du hast Dich erfolgreich von unserem Job-Newsletter abgemeldet. ")]),a("b-button",{attrs:{to:"/",variant:"secondary"}},[t._v("Weiter zur Stellenbörse")]),a("ArticleListRandom",{staticStyle:{"margin-top":"5rem"}})],1),a("Head",{attrs:{title:t.title,desc:"Job-Newsletter Abmeldung erfolgreich",img:""}})],1)},r=[],i=a("b430"),l={name:"NewsletterUnsubscriptionSuccess",components:{ArticleListRandom:i["a"]},data(){return{title:"Job Newsletter Abmeldung erfolgreich"}}},n=l,c=a("2877"),o=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=o.exports},"227a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newsletter-activation"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"container py-3 py-lg-5"},[a("p",{staticClass:"text-center"},[t._v(" Aktivierung Deiner Job-Newsletter Anmeldung läuft... ")]),a("ArticleListRandom",{staticStyle:{"margin-top":"5rem"}})],1),a("Head",{attrs:{title:t.title,desc:"Aktivierung Job-Newsletter für MFAs / ZFAs / ArzthelferInnen.",img:""}})],1)},r=[],i=a("b430"),l={name:"NewsletterSubscriptionActivation",components:{ArticleListRandom:i["a"]},data(){return{title:"Aktivierung – Job Newsletter"}},async mounted(){await this.activateSubscriber()},methods:{async activateSubscriber(){this.$store.dispatch("setOverlay",!0);try{if(this.$route.params.subscriberId){const t=await this.$axios.post("/graphql",{query:`\n                              mutation {\n                                  activateSubscriber (_id: "${this.$route.params.subscriberId}") {\n                                      _id\n                                  }\n                              }\n                          `});if(t.data.errors)throw new Error("Deine Newsletter Anmeldung konnte nicht aktiviert werden. Bitte versuche es noch einmal.");this.$router.push("/newsletter/subscription-successful")}}catch(t){this.$root.$bvToast.toast(t.message,{title:"Aktivierung Deiner Newsletter Anmeldung",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)}}},n=l,c=a("2877"),o=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=o.exports},"2e75":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"container my-5",staticStyle:{"max-width":"600px"}},[a("h3",{staticClass:"text-center"},[t._v("Schade, dass Du gehst!")]),a("b-form",[a("label",{attrs:{for:"email"}},[t._v("Gib die E-Mail Adresse an, mit welcher Du Dich vom Newsletter abmelden möchtest. *")]),a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"E-Mail Adresse eingeben...",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger"},on:{click:function(e){return e.preventDefault(),t.unsubscribe.apply(null,arguments)}}},[t._v("Abmelden")]),a("div",{staticClass:"small mt-4"},[t._v(" Du hast Dich über Deinen registrierten Account zum Job-Newsletter angemeldet? Dann melde Dich "),a("b-link",{attrs:{to:"/user/job-newsletter"}},[t._v("hier")]),t._v(" ab. ")],1),t.error?a("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0 mt-3",staticStyle:{"z-index":"2000"},attrs:{show:"",dismissible:"",variant:"danger"}},[t._v(t._s(t.error))]):t._e()],1)])},r=[],i={name:"NewsletterUnsubscribe",data(){return{title:"Abmeldung vom Newsletter",form:{email:""},error:!1}},methods:{async unsubscribe(){const t=await this.$axios.post("/graphql",{query:`\n                      mutation {\n                          deleteSubscriber (email: "${this.form.email}") {\n                              email\n                          }\n                      }\n                  `});t.data.errors?this.error="Die angegebene E-Mail Adresse konnte nicht vom Newsletter abgemeldet werden. Bitte überprüfe die E-Mail Adresse und versuche es noch einmal. Achte gegebenenfalls auch auf Groß- und Keinschreibung.":this.$router.push("/newsletter/unsubscribed-successful")}}},l=i,n=a("2877"),c=Object(n["a"])(l,s,r,!1,null,null,null);e["default"]=c.exports},4609:function(t,e,a){"use strict";a("80d2")},"664b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},r=[],i=a("2b0e"),l=a("0942");i["default"].component("BSkeleton",l["a"]);var n={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=n,o=(a("dea4"),a("2877")),d=Object(o["a"])(c,s,r,!1,null,"30408d3e",null);e["a"]=d.exports},"80d2":function(t,e,a){},b430:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles&&t.articles.length>0?a("div",{staticClass:"row"},t._l(t.articles,(function(e){return a("ArticleCard",{key:e.slug,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number],attrs:{article:e}})})),1):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("ArticleCardPlaceholder",{key:e,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]})})),1)])},r=[],i=a("d4bc"),l=a("664b"),n={name:"ArticleListRandom",components:{ArticleCard:i["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data(){return{articles:null}},watch:{$route(t,e){t!=e&&this.getArticles()}},async created(){this.getArticles()},methods:{async getArticles(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                articles(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.articles)return;this.articles=t.data.data.articles}catch(t){return}}}},c=n,o=a("2877"),d=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=d.exports},d4bc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)]),t.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])],1)},r=[],i={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},l=i,n=(a("4609"),a("2877")),c=Object(n["a"])(l,s,r,!1,null,"9ceb1b4c",null);e["a"]=c.exports},dc4d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newsletter-success"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"container py-5"},[a("p",[t._v(" Deine Anmeldung für den Job-Newsletter war erfolgreich. ")]),a("b-button",{attrs:{to:"/",variant:"secondary"}},[t._v("Weiter zur Stellenbörse")]),a("ArticleListRandom",{staticStyle:{"margin-top":"5rem"}})],1),a("Head",{attrs:{title:t.title,desc:"Anmeldung für den Job-Newsletter erfolgreich.",img:""}})],1)},r=[],i=a("b430"),l={name:"NewsletterSubscriptionSuccess",components:{ArticleListRandom:i["a"]},data(){return{title:"Job Newsletter Anmeldung erfolgreich"}}},n=l,c=a("2877"),o=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=o.exports},de4a:function(t,e,a){},dea4:function(t,e,a){"use strict";a("de4a")}}]);
//# sourceMappingURL=newsletter.2727eecd.js.map