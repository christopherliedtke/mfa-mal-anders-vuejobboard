(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60831c15"],{"077a":function(t,e,a){},"643c":function(t,e,a){"use strict";var i=a("077a"),r=a.n(i);r.a},a9537:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"magazin"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t.$config.cms.active&&t.articles?a("b-container",{staticClass:"py-5"},[a("div",{staticClass:"grid"},t._l(t.articles,(function(t){return a("ArticleCard",{key:t.id,attrs:{article:t}})})),1)]):t._e(),a("Head",{attrs:{title:t.title,desc:"Interessante Artikel rund Praxisalltag, Tipps zu Weiterbildung und Karriere, Persönlichkeitsentwicklung und vieles mehr...",img:"",script:t.snippet}})],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/article/"+t.article.slug,"aria-label":t.article.title}},[a("b-card",{staticClass:"mb-2",attrs:{title:t.article.title,"img-src":t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"","img-alt":t.article.featuredImage?t.article.featuredImage.node.altText:"","img-top":"",tag:"article"}},[a("b-card-text",[a("div",{domProps:{innerHTML:t._s(t.article.excerpt)}})]),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("b-avatar",{staticClass:"mr-2",attrs:{variant:"light",src:t.article.author.node.avatar.url,alt:t.article.author.node.name}}),t.article.author.node.name?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{to:"/article/"+t.article.slug,variant:"primary"}},[t._v("Weiterlesen")])],1),t.article.tags.nodes.length>0?a("b-badge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)],1)],1)},s=[],l={name:"ArticleCard",props:["article"]},c=l,o=a("2877"),d=Object(o["a"])(c,n,s,!1,null,null,null),u=d.exports,m={name:"Blog",components:{ArticleCard:u},data:function(){return{title:this.$config.cms.postsPageTitle,snippet:[{type:"application/ld+json",inner:'{\n                        "@context": "http://schema.org",\n                        "@type" : "BreadcrumbList",\n                        "itemListElement": [{\n                            "@type": "ListItem",\n                            "position": 1,\n                            "name": "MFA mal anders",\n                            "item": "https://www.mfa-mal-anders.de"\n                        },{\n                            "@type": "ListItem",\n                            "position": 2,\n                            "name": "Blog",\n                            "item": "https://www.mfa-mal-anders.de/page/blog"\n                        }]\n                    }'}]}},computed:{articles:function(){return this.$store.state.articles.articles}}},p=m,g=(a("643c"),Object(o["a"])(p,i,r,!1,null,"5c038940",null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-60831c15.ab8002bc.js.map