(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog-article"],{"0942":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var r=a("2b0e"),i=a("b42e"),s=a("c637"),n=a("a723"),l=a("cf75");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=Object(l["c"])({animation:Object(l["b"])(n["s"],"wave"),height:Object(l["b"])(n["s"]),size:Object(l["b"])(n["s"]),type:Object(l["b"])(n["s"],"text"),variant:Object(l["b"])(n["s"]),width:Object(l["b"])(n["s"])},s["Y"]),u=r["default"].extend({name:s["Y"],functional:!0,props:o,render:function(t,e){var a,r=e.data,s=e.props,n=s.size,l=s.animation,o=s.variant;return t("div",Object(i["a"])(r,{staticClass:"b-skeleton",style:{width:n||s.width,height:n||s.height},class:(a={},c(a,"b-skeleton-".concat(s.type),!0),c(a,"b-skeleton-animate-".concat(l),l),c(a,"bg-".concat(o),o),a)}))}})},1276:function(t,e,a){"use strict";var r=a("2ba4"),i=a("c65b"),s=a("e330"),n=a("d784"),l=a("44e7"),c=a("825a"),o=a("1d80"),u=a("4840"),h=a("8aa5"),d=a("50c4"),m=a("577e"),f=a("dc4a"),b=a("f36a"),g=a("14c3"),p=a("9263"),v=a("9f7f"),w=a("d039"),x=v.UNSUPPORTED_Y,C=4294967295,k=Math.min,y=[].push,_=s(/./.exec),S=s(y),A=s("".slice),I=!w((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));n("split",(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=m(o(this)),n=void 0===a?C:a>>>0;if(0===n)return[];if(void 0===t)return[s];if(!l(t))return i(e,s,t,n);var c,u,h,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,f+"g");while(c=i(p,v,s)){if(u=v.lastIndex,u>g&&(S(d,A(s,g,c.index)),c.length>1&&c.index<s.length&&r(y,d,b(c,1)),h=c[0].length,g=u,d.length>=n))break;v.lastIndex===c.index&&v.lastIndex++}return g===s.length?!h&&_(v,"")||S(d,""):S(d,A(s,g)),d.length>n?b(d,0,n):d}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:i(e,this,t,a)}:e,[function(e,a){var r=o(this),n=void 0==e?void 0:f(e,t);return n?i(n,e,r,a):i(s,m(r),e,a)},function(t,r){var i=c(this),n=m(t),l=a(s,i,n,r,s!==e);if(l.done)return l.value;var o=u(i,RegExp),f=i.unicode,b=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(x?"g":"y"),p=new o(x?"^(?:"+i.source+")":i,b),v=void 0===r?C:r>>>0;if(0===v)return[];if(0===n.length)return null===g(p,n)?[n]:[];var w=0,y=0,_=[];while(y<n.length){p.lastIndex=x?0:y;var I,B=g(p,x?A(n,y):n);if(null===B||(I=k(d(p.lastIndex+(x?y:0)),n.length))===w)y=h(n,y,f);else{if(S(_,A(n,w,y)),_.length===v)return _;for(var $=1;$<=B.length-1;$++)if(S(_,B[$]),_.length===v)return _;y=w=I}}return S(_,A(n,w)),_}]}),!I,x)},1718:function(t,e,a){"use strict";a("c0b2")},2044:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,disabled:!t.$route.meta.public,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank",rel:"nofollow"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-facebook mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],s=(a("99af"),{name:"SocialButtonFacebookShare",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_type:"link",content_id:a}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),n=s,l=a("2877"),c=Object(l["a"])(n,r,i,!1,null,null,null);e["a"]=c.exports},3488:function(t,e,a){},"408a":function(t,e,a){var r=a("e330");t.exports=r(1..valueOf)},"427c":function(t,e,a){"use strict";a("80cd")},"4e10":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp",rel:"nofollow"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}})]),t._v(" WhatsApp "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],s=(a("99af"),{name:"SocialButtonWhatsAppShare",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_type:"link",content_id:a}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),n=s,l=a("2877"),c=Object(l["a"])(n,r,i,!1,null,null,null);e["a"]=c.exports},"4f51":function(t,e,a){"use strict";a("3488")},"52a8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("div",[a("article",[a("div",{staticClass:"title"},[a("h1",[a("strong",[t._v(t._s(t.article.title))])]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"cms-article container mt-3 mb-5"},[a("div",{staticClass:"position-relative"},[t.article.featuredImage?a("b-img-lazy",{staticClass:"mt-3 mb-4",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",sizes:"(max-width: 1200px) 100vw, 1200px",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000",fluid:""}}):t._e(),t.article.author.avatarUrl&&t.article.featuredImage?a("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,"blank-height":"38"}}),t.article.author.firstName?a("div",[t._v(" von "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e()],1),a("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),a("p",{staticClass:"mt-4"},[t._v(" Hast Du Interesse an Themen rund um Deine Karriere im Gesundheitswesen? Dann folge MFA mal anders gern auf "),a("b-link",{staticClass:"bold",attrs:{href:"https://www.facebook.com/MFAmalanders",target:"_blank"}},[t._v("Facebook")]),t._v(" und "),a("b-link",{staticClass:"bold",attrs:{href:"https://www.instagram.com/mfa.mal.anders/",target:"_blank"}},[t._v("Instagram")]),t._v(". ")],1),a("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[a("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center mb-3"},[a("b-img-lazy",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,"blank-height":"60"}}),a("div",{staticClass:"h6"},[a("span",[t._v(" Liebe Grüße, ")]),a("br"),a("span",[t._v(t._s(t.article.author.firstName))])])],1):t._e(),a("div",{staticClass:"text-primary"},[t.article.author.fbUrl?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.fbUrl,target:"blank"}},[a("svg",{staticClass:"bi bi-facebook",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})])]):t._e(),t.article.author.igUrl?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.igUrl,target:"blank"}},[a("svg",{staticClass:"bi bi-instagram",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}})])]):t._e()],1)]),a("div",[a("SocialButtonFacebookShare",{staticClass:"mb-2 mb-lg-0 mr-2"}),a("SocialButtonTwitterShare",{staticClass:"mb-2 mb-lg-0 mr-2"}),a("SocialButtonWhatsAppShare",{staticClass:"mb-2 mb-lg-0"})],1),t.article.tags.some((function(t){return"Erfahrungsbericht"==t}))?a("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),a("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])])]),a("div",{staticClass:"container"},[a("BannerJobSeeksLarge",{staticClass:"my-4 my-lg-5"}),a("ArticleListRandom")],1),t.article.seo.title?a("Head",{attrs:{title:t.article.seo.title,desc:t.article.seo.metaDesc,img:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",script:t.snippet}}):t._e()],1):t._e()},i=[],s=a("1da1"),n=(a("96cf"),a("99af"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("fb6a"),a("e9c4"),a("b430")),l=a("9b81"),c=a("2044"),o=a("776a"),u=a("4e10"),h={name:"BlogArticle",components:{ArticleListRandom:n["a"],BannerJobSeeksLarge:l["a"],SocialButtonFacebookShare:c["a"],SocialButtonTwitterShare:o["a"],SocialButtonWhatsAppShare:u["a"]},data:function(){return{article:null}},computed:{breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/artikel/".concat(this.$route.params.slug)}]},snippet:function(){return[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Blog",\n              "item": "https://www.mfa-mal-anders.de/blog"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n              "item": "https://www.mfa-mal-anders.de/blog/artikel/').concat(this.$route.params.slug,'"\n            }]\n          }')},{type:"application/ld+json",id:"article-structured-data",inner:JSON.stringify({"@context":"http://schema.org","@type":"Article",headline:this.article.title,author:{"@type":"Person",name:"".concat(this.article.author.firstName," ").concat(this.article.author.lastName),image:this.article.author.avataUrl||""},publisher:{"@type":"Organization",name:"MFA mal anders",logo:{"@type":"ImageObject",url:"/img/MfaMalAnders_logo_circle_bgdark_white.png"}},image:this.article.featuredImage.sourceUrl,datePublished:this.article.date,dateModified:this.article.modified})},{id:"canonical",rel:"canonical",href:"".concat("https://www.mfa-mal-anders.de","/blog/artikel/").concat(this.$route.params.slug)}]}},watch:{"$route.params.slug":function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getArticle();case 2:case"end":return e.stop()}}),e)})))()},article:function(){this.$emit("updateHead")}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getArticle();case 2:case"end":return e.stop()}}),e)})))()},methods:{getArticle:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:'\n              query {\n                article(slug: "'.concat(t.$route.params.slug,'") {\n                  date\n                  modified\n                  title\n                  content\n                  tags\n                  author {\n                    firstName\n                    lastName\n                    avatarUrl\n                    fbUrl\n                    igUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                  seo {\n                    title\n                    metaDesc\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.article){e.next=6;break}throw new Error;case 6:t.article=a.data.data.article,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$router.push("/blog");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},d=h,m=(a("4f51"),a("2877")),f=Object(m["a"])(d,r,i,!1,null,null,null);e["default"]=f.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("e330"),i=a("1d80"),s=a("577e"),n=a("5899"),l=r("".replace),c="["+n+"]",o=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),h=function(t){return function(e){var a=s(i(e));return 1&t&&(a=l(a,o,"")),2&t&&(a=l(a,u,"")),a}};t.exports={start:h(1),end:h(2),trim:h(3)}},"664b":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},i=[],s=a("2b0e"),n=a("0942");s["default"].component("BSkeleton",n["a"]);var l={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},c=l,o=(a("dea4"),a("2877")),u=Object(o["a"])(c,r,i,!1,null,"30408d3e",null);e["a"]=u.exports},7156:function(t,e,a){var r=a("1626"),i=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var n,l;return s&&r(n=e.constructor)&&n!==a&&i(l=n.prototype)&&l!==a.prototype&&s(t,l),t}},"776a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank",rel:"nofollow","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[a("svg",{staticClass:"bi bi-twitter mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" Twitter "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],s=(a("99af"),{name:"SocialButtonTwitterShare",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_type:"link",content_id:a}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),n=s,l=a("2877"),c=Object(l["a"])(n,r,i,!1,null,null,null);e["a"]=c.exports},"80cd":function(t,e,a){},"9b81":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"card overflow-hidden shadow1 p-4 p-md-5"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"position-static col-12 col-xl-9"},[a("router-link",{staticClass:"text-reset stretched-link",attrs:{to:"/stellengesuche/info"}},[a("h2",{staticClass:"display-4",staticStyle:{"font-weight":"800"},domProps:{innerHTML:t._s(t.header)}})]),a("p",{staticClass:"lead bold text-primary uppercase"},[t._v(" Lass Dich jetzt von passenden Arbeitgebern finden ")]),a("p",[t._v(" Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren. ")]),a("b-button",{attrs:{variant:"secondary"}},[t._v("Mehr erfahren")])],1)])])])},i=[],s={name:"BannerJobSeeksLarge",props:{header:{type:String,default:"Stellen&shy;gesuch schalten"}}},n=s,l=(a("427c"),a("2877")),c=Object(l["a"])(n,r,i,!1,null,"6c1f6352",null);e["a"]=c.exports},a15b:function(t,e,a){"use strict";var r=a("23e7"),i=a("e330"),s=a("44ad"),n=a("fc6a"),l=a("a640"),c=i([].join),o=s!=Object,u=l("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(t){return c(n(this),void 0===t?",":t)}})},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),s=a("e330"),n=a("94ca"),l=a("6eeb"),c=a("1a2d"),o=a("7156"),u=a("3a9b"),h=a("d9b5"),d=a("c04e"),m=a("d039"),f=a("241c").f,b=a("06cf").f,g=a("9bf2").f,p=a("408a"),v=a("58a8").trim,w="Number",x=i[w],C=x.prototype,k=i.TypeError,y=s("".slice),_=s("".charCodeAt),S=function(t){var e=d(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,a,r,i,s,n,l,c,o=d(t,"number");if(h(o))throw k("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=v(o),e=_(o,0),43===e||45===e){if(a=_(o,2),88===a||120===a)return NaN}else if(48===e){switch(_(o,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+o}for(s=y(o,2),n=s.length,l=0;l<n;l++)if(c=_(s,l),c<48||c>i)return NaN;return parseInt(s,r)}return+o};if(n(w,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var I,B=function(t){var e=arguments.length<1?0:x(S(t)),a=this;return u(C,a)&&m((function(){p(a)}))?o(Object(e),a,B):e},$=r?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;$.length>j;j++)c(x,I=$[j])&&!c(B,I)&&g(B,I,b(x,I));B.prototype=C,C.constructor=B,l(i,w,B)}},b430:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles&&t.articles.length>0?a("div",{staticClass:"row"},t._l(t.articles,(function(e){return a("ArticleCard",{key:e.slug,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number],attrs:{article:e}})})),1):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("ArticleCardPlaceholder",{key:e,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]})})),1)])},i=[],s=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),a("d4bc")),l=a("664b"),c={name:"ArticleListRandom",components:{ArticleCard:n["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:null}},watch:{$route:function(t,e){t!=e&&this.getArticles()}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getArticles();case 1:case"end":return e.stop()}}),e)})))()},methods:{getArticles:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/graphql",{params:{query:"\n              query {\n                articles(random: ".concat(!0,", limit: ",t.number,', exclude: "').concat(t.$route.params.slug?t.$route.params.slug:"",'") {\n                  title\n                  excerpt\n                  slug\n                  tags\n                  author {\n                    firstName\n                    avatarUrl\n                  }\n                  featuredImage {\n                    sourceUrl\n                    srcSet\n                    altText\n                  }\n                }\n              }\n            ')}});case 3:if(a=e.sent,a.data.data.articles){e.next=6;break}return e.abrupt("return");case 6:t.articles=a.data.data.articles,e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},o=c,u=a("2877"),h=Object(u["a"])(o,r,i,!1,null,null,null);e["a"]=h.exports},c0b2:function(t,e,a){},d4bc:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 600px",alt:t.article.featuredImage?t.article.featuredImage.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("b-link",{staticClass:"stretched-link",attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("h4",{staticClass:"card-title"},[t._v(" "+t._s(t.article.title)+" ")])]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.avatarUrl?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.avatarUrl,alt:t.article.author.firstName,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.firstName?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.firstName)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{"aria-label":t.article.title,variant:"primary"}},[t._v("Weiterlesen")])],1)],1),t.article.tags.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags[0]))]):t._e()],1)])},i=[],s={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},n=s,l=(a("1718"),a("2877")),c=Object(l["a"])(n,r,i,!1,null,"60c7b624",null);e["a"]=c.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),i=a("b727").map,s=a("1dde"),n=s("map");r({target:"Array",proto:!0,forced:!n},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},de4a:function(t,e,a){},dea4:function(t,e,a){"use strict";a("de4a")}}]);
//# sourceMappingURL=blog-article-legacy.a5515f96.js.map