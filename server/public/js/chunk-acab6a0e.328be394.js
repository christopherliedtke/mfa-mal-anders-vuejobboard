(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acab6a0e"],{1276:function(t,e,a){"use strict";var r=a("d784"),n=a("44e7"),i=a("825a"),l=a("1d80"),s=a("4840"),c=a("8aa5"),o=a("50c4"),u=a("14c3"),d=a("9263"),m=a("d039"),f=[].push,h=Math.min,b=4294967295,p=!m((function(){return!RegExp(b,"y")}));r("split",2,(function(t,e,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var r=String(l(this)),i=void 0===a?b:a>>>0;if(0===i)return[];if(void 0===t)return[r];if(!n(t))return e.call(r,t,i);var s,c,o,u=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=new RegExp(t.source,m+"g");while(s=d.call(p,r)){if(c=p.lastIndex,c>h&&(u.push(r.slice(h,s.index)),s.length>1&&s.index<r.length&&f.apply(u,s.slice(1)),o=s[0].length,h=c,u.length>=i))break;p.lastIndex===s.index&&p.lastIndex++}return h===r.length?!o&&p.test("")||u.push(""):u.push(r.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var n=l(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n,a):r.call(String(n),e,a)},function(t,n){var l=a(r,t,this,n,r!==e);if(l.done)return l.value;var d=i(t),m=String(this),f=s(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),y=new f(p?d:"^(?:"+d.source+")",v),C=void 0===n?b:n>>>0;if(0===C)return[];if(0===m.length)return null===u(y,m)?[m]:[];var w=0,x=0,_=[];while(x<m.length){y.lastIndex=p?x:0;var B,j=u(y,p?m:m.slice(x));if(null===j||(B=h(o(y.lastIndex+(p?0:x)),m.length))===w)x=c(m,x,g);else{if(_.push(m.slice(w,x)),_.length===C)return _;for(var k=1;k<=j.length-1;k++)if(_.push(j[k]),_.length===C)return _;x=w=B}}return _.push(m.slice(w)),_}]}),!p)},"2a84":function(t,e,a){"use strict";a("33d6")},"33d6":function(t,e,a){},"3c2c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/article/"+t.article.slug,"aria-label":t.article.title}},[a("BCard",{staticClass:"mb-2",attrs:{title:t.article.title,"img-src":t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"","img-alt":t.article.featuredImage?t.article.featuredImage.node.altText:"","img-top":"",tag:"article"}},[a("BCardText",[a("div",{domProps:{innerHTML:t._s(t.article.excerpt)}})]),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("b-img",{staticClass:"mr-2 rounded-circle",attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"37.5"}}),t.article.author.node.name?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1),t.article.tags.nodes.length>0?a("BBadge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)],1)],1)},n=[],i=a("2b0e"),l=a("e98b"),s=a("205f"),c=a("d6e4");i["default"].component("BBadge",l["a"]),i["default"].component("BCard",s["a"]),i["default"].component("BCardText",c["a"]);var o={name:"ArticleCard",props:{article:{type:Object,default:function(){}}}},u=o,d=(a("2a84"),a("2877")),m=Object(d["a"])(u,r,n,!1,null,"1f147e1b",null);e["a"]=m.exports},"58de":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("article",[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.article.title))]),a("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1),a("b-container",{staticClass:"cms-article mt-3 mb-5"},[a("div",{staticClass:"position-relative"},[t.article.featuredImage?a("b-img",{staticClass:"mt-3 mb-4",attrs:{src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",fluid:""}}):t._e(),t.article.author.node.avatar&&t.article.featuredImage?a("div",{staticClass:"position-absolute d-flex align-items-center bg-light-shade border-radius2 px-3 py-1",staticStyle:{bottom:"0",right:"5%"}},[a("b-img",{staticClass:"mr-2 rounded-circle",staticStyle:{height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),t.article.author.node.name?a("div",[t._v(" by "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e()],1),a("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.article.content)}}),a("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mt-5"},[a("div",{staticClass:"mb-4 mb-lg-0"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center mb-3"},[a("b-img",{staticClass:"mr-3 rounded-circle",staticStyle:{height:"60px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),a("div",{staticClass:"h6"},[a("span",[t._v(" Liebe Grüße, ")]),a("br"),a("span",[t._v(t._s(t.article.author.node.name))])])],1):t._e(),a("div",{staticClass:"text-primary"},[t.article.author.node.url?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.url,target:"blank"}},[a("Fa",{attrs:{icon:["fa","globe"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.facebook?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.facebook,target:"blank"}},[a("Fa",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1):t._e(),t.article.author.node.seo.social.instagram?a("b-link",{staticClass:"mr-2",attrs:{href:t.article.author.node.seo.social.instagram,target:"blank"}},[a("Fa",{attrs:{icon:["fab","instagram"],size:"2x"}})],1):t._e()],1)]),a("div",[a("FacebookShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),a("TwitterShareBtn",{staticClass:"mb-2 mb-lg-0 mr-2"}),a("WhatsAppShareBtn",{staticClass:"mb-2 mb-lg-0"})],1),"Erfahrungsbericht"===t.article.tags.nodes[0].name?a("div",{staticClass:"small mt-4"},[t._v(" Wenn auch Du von einer interessanten Weiterbildung oder Deiner Arbeit als MFA / ZFA berichten möchtest, melde Dich gern bei uns über das "),a("b-link",{attrs:{to:"/kontakt"}},[t._v("Kontaktformular")]),t._v(". ")],1):t._e()])]),a("b-container",[a("RandomArticlesContainer")],1),t.article.title?a("Head",{attrs:{title:t.article.title,desc:t.article.excerpt,img:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",script:t.snippet}}):t._e()],1):t._e()},n=[],i=(a("99af"),a("7db0"),a("a15b"),a("d81d"),a("fb6a"),a("ac1f"),a("1276"),a("e674")),l=a("037e"),s=a("1144"),c=a("b13b"),o={name:"Article",components:{RandomArticlesContainer:i["a"],FacebookShareBtn:l["a"],TwitterShareBtn:s["a"],WhatsAppShareBtn:c["a"]},data:function(){return{snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [{\n                              "@type": "ListItem",\n                              "position": 1,\n                              "name": "MFA mal anders",\n                              "item": "https://www.mfa-mal-anders.de"\n                          },{\n                              "@type": "ListItem",\n                              "position": 2,\n                              "name": "Blog",\n                              "item": "https://www.mfa-mal-anders.de/blog"\n                          },{\n                              "@type": "ListItem",\n                              "position": 3,\n                              "name": "'.concat(this.$route.params.slug.split("-").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),'",\n                              "item": "https://www.mfa-mal-anders.de/article/').concat(this.$route.params.slug,'"\n                          }]\n                      }')}]}},computed:{article:function(){var t=this;return this.$store.state.articles.articles.find((function(e){return e.slug===t.$route.params.slug}))},breadcrumbs:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog"},{text:"Artikel",to:"/blog/article/".concat(this.$route.params.slug)}]}}},u=o,d=(a("7f17"),a("2877")),m=Object(d["a"])(u,r,n,!1,null,null,null);e["default"]=m.exports},"60f1":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var r=a("dcb3"),n=a("d82f"),i=a("b42e"),l=a("f479");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u=Object(n["m"])(l["b"],["left","right","center","block","rounded","thumbnail","fluid","fluidGrow"]),d=c(c({},u),{},{top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},start:{type:Boolean,default:!1},left:{type:Boolean,default:!1},end:{type:Boolean,default:!1},right:{type:Boolean,default:!1}}),m=r["a"].extend({name:"BCardImgLazy",functional:!0,props:d,render:function(t,e){var a=e.props,r=e.data,n="card-img";a.top?n+="-top":a.right||a.end?n+="-right":a.bottom?n+="-bottom":(a.left||a.start)&&(n+="-left");var s=c(c({},a),{},{left:!1,right:!1,center:!1});return t(l["a"],Object(i["a"])(r,{class:[n],props:s}))}})},"7db0":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").find,i=a("44d2"),l=a("ae40"),s="find",c=!0,o=l(s);s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!o},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},"7f17":function(t,e,a){"use strict";a("e525")},a15b:function(t,e,a){"use strict";var r=a("23e7"),n=a("44ad"),i=a("fc6a"),l=a("a640"),s=[].join,c=n!=Object,o=l("join",",");r({target:"Array",proto:!0,forced:c||!o},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},e525:function(t,e,a){},e674:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",t._l(t.articles,(function(e){return a("b-col",{key:e.id,staticClass:"mb-4",attrs:{cols:"12",md:6,lg:12/t.number}},[a("ArticleCard",{attrs:{article:e}})],1)})),1)},n=[],i=(a("a9e3"),a("2b0e")),l=a("205f"),s=a("6197"),c=a("60f1"),o=a("4968"),u=a("d6e4"),d=a("3c2c");i["default"].component("BCard",l["a"]),i["default"].component("BCardBody",s["a"]),i["default"].component("BCardImgLazy",c["a"]),i["default"].component("BCardTitle",o["a"]),i["default"].component("BCardText",u["a"]);var m={name:"RandomArticlesContainer",components:{ArticleCard:d["a"]},props:{number:{type:Number,default:3}},data:function(){return{articles:Array}},watch:{$route:function(t,e){t!=e&&this.getArticles()},"$store.state.articles.articles":function(){this.getArticles()}},mounted:function(){this.getArticles()},methods:{getRandom:function(t,e){var a=new Array(e),r=t.length,n=new Array(r);if(e>r)throw new RangeError("getRandom: more elements taken than available");while(e--){var i=Math.floor(Math.random()*r);a[e]=t[i in n?n[i]:i],n[i]=--r in n?n[r]:r}return a},getArticles:function(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},f=m,h=a("2877"),b=Object(h["a"])(f,r,n,!1,null,null,null);e["a"]=b.exports}}]);
//# sourceMappingURL=chunk-acab6a0e.328be394.js.map