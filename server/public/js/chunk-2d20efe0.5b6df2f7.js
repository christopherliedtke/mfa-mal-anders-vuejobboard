(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20efe0"],{b271:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"privacy-policy"},[n("h1",{staticClass:"title"},[e._v(e._s(e.title))]),n("b-container",{staticClass:"py-3 py-lg-5"},[n("div",{domProps:{innerHTML:e._s(e.content)}})]),n("Head",{attrs:{title:e.title,desc:"Datenschutzerklärung",img:""}})],1)},r=[],c=(n("96cf"),n("c964")),i={name:"PrivacyPolicy",data:function(){return{title:"Datenschutzerklärung",content:""}},mounted:function(){this.getPage()},methods:{getPage:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post(e.$config.cms.url,{query:'\n                        query MyQuery {\n                            page(id: "datenschutzerklaerung", idType: URI) {\n                                content\n                                title\n                            }\n                        }\n                    '});case 3:n=t.sent,e.title=n.data.data.page.title,e.content=n.data.data.page.content,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.content="Beim Laden der Seite ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.";case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},s=i,u=n("2877"),l=Object(u["a"])(s,a,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20efe0.5b6df2f7.js.map