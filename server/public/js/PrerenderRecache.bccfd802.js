(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PrerenderRecache"],{"1ce1":function(e,t,r){"use strict";r("d2c8")},"3e9c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$store.state.auth.user.isAdmin&&e.$route.meta.public?r("b-button",{staticClass:"recache-btn p-1",on:{click:e.recache}},[r("svg",{staticClass:"bi bi-arrow-repeat",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}}),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"}})])]):e._e()},c=[],s={name:"PrerenderRecache",computed:{url(){return window.origin+this.$route.fullPath}},methods:{recache(){this.$axios.post("/api/prerender/recache",{url:this.url})}}},i=s,n=(r("1ce1"),r("2877")),o=Object(n["a"])(i,a,c,!1,null,"ee125b02",null);t["default"]=o.exports},d2c8:function(e,t,r){}}]);
//# sourceMappingURL=PrerenderRecache.bccfd802.js.map