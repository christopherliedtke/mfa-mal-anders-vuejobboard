(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"037e":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-facebook mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],n={name:"FacebookShareBtn",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},s=n,l=a("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null);e["a"]=c.exports},1144:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[a("svg",{staticClass:"bi bi-twitter mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" Twitter "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],n={name:"TwitterShareBtn",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},s=n,l=a("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null);e["a"]=c.exports},1276:function(t,e,a){"use strict";var r=a("2ba4"),i=a("c65b"),n=a("e330"),s=a("d784"),l=a("44e7"),c=a("825a"),o=a("1d80"),u=a("4840"),h=a("8aa5"),d=a("50c4"),f=a("577e"),m=a("dc4a"),g=a("f36a"),p=a("14c3"),b=a("9263"),v=a("9f7f"),w=a("d039"),C=v.UNSUPPORTED_Y,_=4294967295,x=Math.min,A=[].push,k=n(/./.exec),y=n(A),I=n("".slice),z=!w((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));s("split",(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=f(o(this)),s=void 0===a?_:a>>>0;if(0===s)return[];if(void 0===t)return[n];if(!l(t))return i(e,n,t,s);var c,u,h,d=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,m+"g");while(c=i(b,v,n)){if(u=v.lastIndex,u>p&&(y(d,I(n,p,c.index)),c.length>1&&c.index<n.length&&r(A,d,g(c,1)),h=c[0].length,p=u,d.length>=s))break;v.lastIndex===c.index&&v.lastIndex++}return p===n.length?!h&&k(v,"")||y(d,""):y(d,I(n,p)),d.length>s?g(d,0,s):d}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:i(e,this,t,a)}:e,[function(e,a){var r=o(this),s=void 0==e?void 0:m(e,t);return s?i(s,e,r,a):i(n,f(r),e,a)},function(t,r){var i=c(this),s=f(t),l=a(n,i,s,r,n!==e);if(l.done)return l.value;var o=u(i,RegExp),m=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(C?"g":"y"),b=new o(C?"^(?:"+i.source+")":i,g),v=void 0===r?_:r>>>0;if(0===v)return[];if(0===s.length)return null===p(b,s)?[s]:[];var w=0,A=0,k=[];while(A<s.length){b.lastIndex=C?0:A;var z,$=p(b,C?I(s,A):s);if(null===$||(z=x(d(b.lastIndex+(C?A:0)),s.length))===w)A=h(s,A,m);else{if(y(k,I(s,w,A)),k.length===v)return k;for(var M=1;M<=$.length-1;M++)if(y(k,$[M]),k.length===v)return k;A=w=z}}return y(k,I(s,w)),k}]}),!z,C)},"31be":function(t,e,a){},"3a4e":function(t,e,a){},"3c2c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.node.name?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)]),t.article.tags.nodes.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)])],1)},i=[],n={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},s=n,l=(a("85fd"),a("2877")),c=Object(l["a"])(s,r,i,!1,null,"4f842045",null);e["a"]=c.exports},"408a":function(t,e,a){var r=a("e330");t.exports=r(1..valueOf)},"57bd":function(t,e,a){"use strict";a("3a4e")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("e330"),i=a("1d80"),n=a("577e"),s=a("5899"),l=r("".replace),c="["+s+"]",o=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),h=function(t){return function(e){var a=n(i(e));return 1&t&&(a=l(a,o,"")),2&t&&(a=l(a,u,"")),a}};t.exports={start:h(1),end:h(2),trim:h(3)}},"58de":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("div",[a("article",[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.article.title))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("div",{staticClass:"cms-article container mt-3 mb-5"},[a("div",{staticClass:"position-relative"},[t.article.featuredImage?a("b-img-lazy",{staticClass:"mt-3 mb-4",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",sizes:"100vw",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630",offset:"1000",fluid:""}}):t._e(),t.article.author.node.avatar&&t.article.featuredImage?a("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[a("b-img",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),t.article.author.node.name?a("div",[t._v(" von "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e()],1),a("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),a("p",{staticClass:"mt-4"},[t._v(" Hast Du Interesse an Themen rund um Deine Karriere im Gesundheitswesen? Dann folge uns gern auf "),a("b-link",{staticClass:"bold",attrs:{href:"https://www.facebook.com/"+t.$config.fb.path,target:"_blank"}},[t._v("Facebook")]),t._v(" und "),a("b-link",{staticClass:"bold",attrs:{href:"https://www.instagram.com/"+t.$config.ig.path,target:"_blank"}},[t._v("Instagram")]),t._v(". ")],1),a("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[a("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center mb-3"},[a("b-img",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),a("div",{staticClass:"h6"},[a("span",[t._v(" Liebe Grüße, ")]),a("br"),a("span",[t._v(t._s(t.article.author.node.name))])])],1):t._e(),a("div",{staticClass:"text-primary"},[t.article.author.node.url?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.url,target:"blank"}},[a("svg",{staticClass:"bi bi-globe",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"}})])]):t._e(),t.article.author.node.seo.social.facebook?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.facebook,target:"blank"}},[a("svg",{staticClass:"bi bi-facebook",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})])]):t._e(),t.article.author.node.seo.social.instagram?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.instagram,target:"blank"}},[a("svg",{staticClass:"bi bi-instagram",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}})])]):t._e()],1)]),a("div",[a("FacebookShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),a("TwitterShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),a("WhatsAppShareBtn",{staticClass:"mb-2 mb-lg-0"})],1),"Erfahrungsbericht"===t.article.tags.nodes[0].name?a("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),a("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])])]),a("div",{staticClass:"container"},[a("RandomArticlesContainer")],1),t.article.seo.title?a("Head",{attrs:{title:t.article.seo.title,desc:t.article.seo.metaDesc,img:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",script:t.snippet}}):t._e(),a("ArticleStructuredData",{attrs:{article:t.article}})],1):t._e()},i=[],n=(a("99af"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("fb6a"),a("7db0"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")}),s=[],l=(a("e9c4"),{name:"ArticleStructuredData",props:{article:{type:Object,default:function(){}}},head:{script:function(){if(this.article.title)return[{type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"Article",headline:this.article.title,author:{"@type":"Person",name:"".concat(this.article.author.node.firstName," ").concat(this.article.author.node.lastName),image:this.article.author.node.avatar?this.article.author.node.avatar.url:""},publisher:{"@type":"Organization",name:"MFA mal anders",logo:{"@type":"ImageObject",url:"/img/MfaMalAnders_logo_circle_dark.png"}},image:this.article.featuredImage.node.sourceUrl,datePublished:this.article.date,dateModofied:this.article.modified})}]}},watch:{article:function(){this.$emit("updateHead")}}}),c=l,o=a("2877"),u=Object(o["a"])(c,n,s,!1,null,null,null),h=u.exports,d=a("e674"),f=a("037e"),m=a("1144"),g=a("b13b"),p={name:"Article",components:{ArticleStructuredData:h,RandomArticlesContainer:d["a"],FacebookShareBtn:f["a"],TwitterShareBtn:m["a"],WhatsAppShareBtn:g["a"]},data:function(){return{snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Blog",\n              "item": "https://www.mfa-mal-anders.de/blog"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n              "item": "https://www.mfa-mal-anders.de/blog/artikel/').concat(this.$route.params.slug,'"\n            }]\n          }')},{id:"canonical",rel:"canonical",href:"".concat(this.$config.website.url,"/blog/artikel/").concat(this.$route.params.slug)}]}},computed:{article:function(){var t=this;return this.$store.state.articles.articles.find((function(e){return e.slug===t.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/artikel/".concat(this.$route.params.slug)}]}},created:function(){this.$store.dispatch("getArticles")}},b=p,v=(a("7f17"),Object(o["a"])(b,r,i,!1,null,null,null));e["default"]=v.exports},"66ba":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"magazin"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.title))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),t.$config.cms.active&&t.articles?a("div",{staticClass:"container py-3 py-lg-5"},[a("div",{staticClass:"grid"},t._l(t.articles,(function(t){return a("ArticleCard",{key:t.id,attrs:{article:t}})})),1)]):t._e(),a("Head",{attrs:{title:t.title,desc:"Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr...",img:"",script:t.snippet}})],1)},i=[],n=a("3c2c"),s={name:"Blog",components:{ArticleCard:n["a"]},data:function(){return{title:this.$config.cms.postsPageTitle,breadcrumbs:[{text:"Home",to:"/"},{text:"Blog",to:"/blog"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Blog",\n                              "item": "https://www.mfa-mal-anders.de/blog"\n                          }]\n                      }'}]}},computed:{articles:function(){return this.$store.state.articles.articles}},created:function(){this.$store.dispatch("getArticles")}},l=s,c=(a("57bd"),a("2877")),o=Object(c["a"])(l,r,i,!1,null,"ad4d0748",null);e["default"]=o.exports},7156:function(t,e,a){var r=a("1626"),i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var s,l;return n&&r(s=e.constructor)&&s!==a&&i(l=s.prototype)&&l!==a.prototype&&n(t,l),t}},"7db0":function(t,e,a){"use strict";var r=a("23e7"),i=a("b727").find,n=a("44d2"),s="find",l=!0;s in[]&&Array(1)[s]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(s)},"7f17":function(t,e,a){"use strict";a("e525")},"85fd":function(t,e,a){"use strict";a("31be")},a15b:function(t,e,a){"use strict";var r=a("23e7"),i=a("e330"),n=a("44ad"),s=a("fc6a"),l=a("a640"),c=i([].join),o=n!=Object,u=l("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(t){return c(s(this),void 0===t?",":t)}})},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),n=a("e330"),s=a("94ca"),l=a("6eeb"),c=a("1a2d"),o=a("7156"),u=a("3a9b"),h=a("d9b5"),d=a("c04e"),f=a("d039"),m=a("241c").f,g=a("06cf").f,p=a("9bf2").f,b=a("408a"),v=a("58a8").trim,w="Number",C=i[w],_=C.prototype,x=i.TypeError,A=n("".slice),k=n("".charCodeAt),y=function(t){var e=d(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,a,r,i,n,s,l,c,o=d(t,"number");if(h(o))throw x("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=v(o),e=k(o,0),43===e||45===e){if(a=k(o,2),88===a||120===a)return NaN}else if(48===e){switch(k(o,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+o}for(n=A(o,2),s=n.length,l=0;l<s;l++)if(c=k(n,l),c<48||c>i)return NaN;return parseInt(n,r)}return+o};if(s(w,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var z,$=function(t){var e=arguments.length<1?0:C(y(t)),a=this;return u(_,a)&&f((function(){b(a)}))?o(Object(e),a,$):e},M=r?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;M.length>S;S++)c(C,z=M[S])&&!c($,z)&&p($,z,g(C,z));$.prototype=_,_.constructor=$,l(i,w,$)}},b13b:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}})]),t._v(" WhatsApp "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],n={name:"WhatsAppShareBtn",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a})}}},s=n,l=a("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null);e["a"]=c.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),i=a("b727").map,n=a("1dde"),s=n("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e525:function(t,e,a){},e674:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.articles,(function(e){return a("div",{key:e.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]},[a("ArticleCard",{attrs:{article:e}})],1)})),0)},i=[],n=a("1da1"),s=(a("96cf"),a("a9e3"),a("3c2c")),l={name:"RandomArticlesContainer",components:{ArticleCard:s["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(t,e){t!=e&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("getArticles"),t.getArticles();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRandom:function(t,e){var a=new Array(e),r=t.length,i=new Array(r);if(e>r)throw new RangeError("getRandom: more elements taken than available");while(e--){var n=Math.floor(Math.random()*r);a[e]=t[n in i?i[n]:n],i[n]=--r in i?i[r]:r}return a},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},c=l,o=a("2877"),u=Object(o["a"])(c,r,i,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=blog-legacy.d6706064.js.map