(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog-article"],{"0942":function(t,a,e){"use strict";e.d(a,"a",(function(){return h}));var r=e("2b0e"),s=e("b42e"),i=e("c637"),l=e("a723"),n=e("cf75");function c(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o=Object(n["c"])({animation:Object(n["b"])(l["s"],"wave"),height:Object(n["b"])(l["s"]),size:Object(n["b"])(l["s"]),type:Object(n["b"])(l["s"],"text"),variant:Object(n["b"])(l["s"]),width:Object(n["b"])(l["s"])},i["W"]),h=r["default"].extend({name:i["W"],functional:!0,props:o,render:function(t,a){var e,r=a.data,i=a.props,l=i.size,n=i.animation,o=i.variant;return t("div",Object(s["a"])(r,{staticClass:"b-skeleton",style:{width:l||i.width,height:l||i.height},class:(e={},c(e,"b-skeleton-".concat(i.type),!0),c(e,"b-skeleton-animate-".concat(n),n),c(e,"bg-".concat(o),o),e)}))}})},"0ab1":function(t,a,e){"use strict";e("2219")},2044:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,disabled:!t.$route.meta.public,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(a){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[e("svg",{staticClass:"bi bi-facebook mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},s=[],i={name:"SocialButtonFacebookShare",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data(){return{url:window.location.origin}},methods:{track(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,`method: ${a}; path: ${e}`)}}},l=i,n=e("2877"),c=Object(n["a"])(l,r,s,!1,null,null,null);a["a"]=c.exports},2219:function(t,a,e){},"2bd1":function(t,a,e){"use strict";e("fc7c")},3488:function(t,a,e){},"4e10":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(a){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[e("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}})]),t._v(" WhatsApp "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},s=[],i={name:"SocialButtonWhatsAppShare",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data(){return{url:window.location.origin}},methods:{track(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,`method: ${a}; path: ${e}`)}}},l=i,n=e("2877"),c=Object(n["a"])(l,r,s,!1,null,null,null);a["a"]=c.exports},"4f51":function(t,a,e){"use strict";e("3488")},"52a8":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.article?e("div",[e("article",[e("div",{staticClass:"title"},[e("h1",[t._v(t._s(t.article.title))]),e("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),e("div",{staticClass:"cms-article container mt-3 mb-5"},[e("div",{staticClass:"position-relative"},[t.article.featuredImage?e("b-img-lazy",{staticClass:"mt-3 mb-4",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",sizes:"(max-width: 1200px) 100vw, 1200px",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000",fluid:""}}):t._e(),t.article.author.avatarUrl&&t.article.featuredImage?e("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[e("b-img",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName}}),t.article.author.firstName?e("div",[t._v(" von "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e()],1),e("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),e("p",{staticClass:"mt-4"},[t._v(" Hast Du Interesse an Themen rund um Deine Karriere im Gesundheitswesen? Dann folge MFA mal anders gern auf "),e("b-link",{staticClass:"bold",attrs:{href:"https://www.facebook.com/"+t.$config.fb.path,target:"_blank"}},[t._v("Facebook")]),t._v(" und "),e("b-link",{staticClass:"bold",attrs:{href:"https://www.instagram.com/"+t.$config.ig.path,target:"_blank"}},[t._v("Instagram")]),t._v(". ")],1),e("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[e("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.avatarUrl?e("div",{staticClass:"d-flex align-items-center mb-3"},[e("b-img",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName}}),e("div",{staticClass:"h6"},[e("span",[t._v(" Liebe Grüße, ")]),e("br"),e("span",[t._v(t._s(t.article.author.firstName))])])],1):t._e(),e("div",{staticClass:"text-primary"},[t.article.author.fbUrl?e("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.fbUrl,target:"blank"}},[e("svg",{staticClass:"bi bi-facebook",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})])]):t._e(),t.article.author.igUrl?e("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.igUrl,target:"blank"}},[e("svg",{staticClass:"bi bi-instagram",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}})])]):t._e()],1)]),e("div",[e("SocialButtonFacebookShare",{staticClass:"mb-2 mb-lg-0 mr-2"}),e("SocialButtonTwitterShare",{staticClass:"mb-2 mb-lg-0 mr-2"}),e("SocialButtonWhatsAppShare",{staticClass:"mb-2 mb-lg-0"})],1),t.article.tags.some((function(t){return"Erfahrungsbericht"==t}))?e("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),e("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])])]),e("div",{staticClass:"container"},[e("BannerJobSeeksLarge",{staticClass:"my-4 my-lg-5"}),e("ArticleListRandom")],1),t.article.seo.title?e("Head",{attrs:{title:t.article.seo.title,desc:t.article.seo.metaDesc,img:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",script:t.snippet}}):t._e()],1):t._e()},s=[],i=e("b430"),l=e("9b81"),n=e("2044"),c=e("776a"),o=e("4e10"),h={name:"BlogArticle",components:{ArticleListRandom:i["a"],BannerJobSeeksLarge:l["a"],SocialButtonFacebookShare:n["a"],SocialButtonTwitterShare:c["a"],SocialButtonWhatsAppShare:o["a"]},data(){return{article:null}},computed:{breadcrumbs(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/artikel/"+this.$route.params.slug}]},snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Blog",\n              "item": "https://www.mfa-mal-anders.de/blog"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "${this.$route.params.slug.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}",\n              "item": "https://www.mfa-mal-anders.de/blog/artikel/${this.$route.params.slug}"\n            }]\n          }`},{type:"application/ld+json",id:"article-structured-data",inner:JSON.stringify({"@context":"http://schema.org","@type":"Article",headline:this.article.title,author:{"@type":"Person",name:`${this.article.author.firstName} ${this.article.author.lastName}`,image:this.article.author.avataUrl||""},publisher:{"@type":"Organization",name:"MFA mal anders",logo:{"@type":"ImageObject",url:"/img/MfaMalAnders_logo_circle_bgdark_white.png"}},image:this.article.featuredImage.sourceUrl,datePublished:this.article.date,dateModified:this.article.modified})},{id:"canonical",rel:"canonical",href:`${this.$config.website.url}/blog/artikel/${this.$route.params.slug}`}]}},watch:{async"$route.params.slug"(){await this.getArticle()},article(){this.$emit("updateHead")}},async created(){await this.getArticle()},methods:{async getArticle(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                article(slug: "${this.$route.params.slug}") {\n                  date\n                  modified\n                  title\n                  content\n                  tags\n                  author {\n                    firstName\n                    lastName\n                    avatarUrl\n                    fbUrl\n                    igUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                  seo {\n                    title\n                    metaDesc\n                  }\n                }\n              }\n            `}});if(!t.data.data.article)throw new Error;this.article=t.data.data.article}catch(t){this.$router.push("/blog")}}}},d=h,u=(e("4f51"),e("2877")),m=Object(u["a"])(d,r,s,!1,null,null,null);a["default"]=m.exports},"664b":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article-card-placeholder mb-2"},[e("div",{staticClass:"card"},[e("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),e("div",{staticClass:"card-body"},[e("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),e("div",{staticClass:"mt-3"},[e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),e("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),e("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),e("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},s=[],i=e("2b0e"),l=e("0942");i["default"].component("BSkeleton",l["a"]);var n={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=n,o=(e("dea4"),e("2877")),h=Object(o["a"])(c,r,s,!1,null,"30408d3e",null);a["a"]=h.exports},"776a":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(a){return t.track("share","twitter",t.sharePath)}}},[e("svg",{staticClass:"bi bi-twitter mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" Twitter "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},s=[],i={name:"SocialButtonTwitterShare",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data(){return{url:window.location.origin}},methods:{track(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,`method: ${a}; path: ${e}`)}}},l=i,n=e("2877"),c=Object(n["a"])(l,r,s,!1,null,null,null);a["a"]=c.exports},"9b81":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"position-static col-12 col-xl-9"},[e("router-link",{staticClass:"text-reset stretched-link",attrs:{to:"/stellengesuche/info"}},[e("h2",{staticClass:"display-4 bold",domProps:{innerHTML:t._s(t.header)}})]),e("p",{staticClass:"lead bold text-primary uppercase"},[t._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),e("p",[t._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),e("b-button",{attrs:{variant:"secondary"}},[t._v("Mehr erfahren")])],1)])])])},s=[],i={name:"BannerJobSeeksLarge",props:{header:{type:String,default:"<strong>Stellengesuch schalten</strong>"}}},l=i,n=(e("0ab1"),e("2877")),c=Object(n["a"])(l,r,s,!1,null,"f1e9162c",null);a["a"]=c.exports},b430:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.articles&&t.articles.length>0?e("div",{staticClass:"row"},t._l(t.articles,(function(a){return e("ArticleCard",{key:a.slug,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number],attrs:{article:a}})})),1):e("div",{staticClass:"row"},t._l(t.number,(function(a){return e("ArticleCardPlaceholder",{key:a,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]})})),1)])},s=[],i=e("d4bc"),l=e("664b"),n={name:"ArticleListRandom",components:{ArticleCard:i["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data(){return{articles:null}},watch:{$route(t,a){t!=a&&this.getArticles()}},async created(){this.getArticles()},methods:{async getArticles(){try{const t=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                articles(random: true, limit: ${this.number}, exclude: "${this.$route.params.slug?this.$route.params.slug:""}") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                }\n              }\n            `}});if(!t.data.data.articles)return;this.articles=t.data.data.articles}catch(t){return}}}},c=n,o=e("2877"),h=Object(o["a"])(c,r,s,!1,null,null,null);a["a"]=h.exports},d4bc:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"article-card"},[e("div",{staticClass:"card mb-2"},[e("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),e("div",{staticClass:"card-body"},[e("b-link",{staticClass:"stretched-link",attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.article.title))])]),e("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),e("hr"),e("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?e("div",{staticClass:"d-flex align-items-center"},[e("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?e("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),e("b-button",{attrs:{"aria-label":t.article.title,variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.length>0?e("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])},s=[],i={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},l=i,n=(e("2bd1"),e("2877")),c=Object(n["a"])(l,r,s,!1,null,"2e0598f8",null);a["a"]=c.exports},de4a:function(t,a,e){},dea4:function(t,a,e){"use strict";e("de4a")},fc7c:function(t,a,e){}}]);
//# sourceMappingURL=blog-article.80a6b715.js.map