(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job~job-preview"],{"0cb2":function(t,e,a){var o=a("e330"),i=a("7b0b"),n=Math.floor,r=o("".charAt),s=o("".replace),l=o("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,p=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,o,b,u){var m=a+t.length,d=o.length,h=p;return void 0!==b&&(b=i(b),h=c),s(u,h,(function(i,s){var c;switch(r(s,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,a);case"'":return l(e,m);case"<":c=b[l(s,1,-1)];break;default:var p=+s;if(0===p)return i;if(p>d){var u=n(p/10);return 0===u?i:u<=d?void 0===o[u-1]?r(s,1):o[u-1]+r(s,1):i}c=o[p-1]}return void 0===c?"":c}))}},2044:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,disabled:!t.$route.meta.public,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank",rel:"nofollow"},on:{click:function(e){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-facebook mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],n=(a("99af"),{name:"SocialButtonFacebookShare",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),r=n,s=a("2877"),l=Object(s["a"])(r,o,i,!1,null,null,null);e["a"]=l.exports},"25f0":function(t,e,a){"use strict";var o=a("e330"),i=a("5e77").PROPER,n=a("6eeb"),r=a("825a"),s=a("3a9b"),l=a("577e"),c=a("d039"),p=a("ad6d"),b="toString",u=RegExp.prototype,m=u[b],d=o(p),h=c((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),f=i&&m.name!=b;(h||f)&&n(RegExp.prototype,b,(function(){var t=r(this),e=l(t.source),a=t.flags,o=l(void 0===a&&s(u,t)&&!("flags"in u)?d(t):a);return"/"+e+"/"+o}),{unsafe:!0})},"2c3e":function(t,e,a){var o=a("da84"),i=a("83ab"),n=a("9f7f").UNSUPPORTED_Y,r=a("c6b6"),s=a("9bf2").f,l=a("69f3").get,c=RegExp.prototype,p=o.TypeError;i&&n&&s(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===r(this))return!!l(this).sticky;throw p("Incompatible receiver, RegExp required")}}})},"2f0b":function(t,e,a){},"4a28":function(t,e,a){},"4d63":function(t,e,a){var o=a("83ab"),i=a("da84"),n=a("e330"),r=a("94ca"),s=a("7156"),l=a("9112"),c=a("9bf2").f,p=a("241c").f,b=a("3a9b"),u=a("44e7"),m=a("577e"),d=a("ad6d"),h=a("9f7f"),f=a("6eeb"),v=a("d039"),g=a("1a2d"),w=a("69f3").enforce,j=a("2626"),y=a("b622"),_=a("fce3"),C=a("107c"),x=y("match"),k=i.RegExp,S=k.prototype,M=i.SyntaxError,z=n(d),A=n(S.exec),B=n("".charAt),E=n("".replace),$=n("".indexOf),P=n("".slice),O=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,T=/a/g,H=new k(L)!==L,R=h.UNSUPPORTED_Y,U=o&&(!H||R||_||C||v((function(){return T[x]=!1,k(L)!=L||k(T)==T||"/a/i"!=k(L,"i")}))),V=function(t){for(var e,a=t.length,o=0,i="",n=!1;o<=a;o++)e=B(t,o),"\\"!==e?n||"."!==e?("["===e?n=!0:"]"===e&&(n=!1),i+=e):i+="[\\s\\S]":i+=e+B(t,++o);return i},I=function(t){for(var e,a=t.length,o=0,i="",n=[],r={},s=!1,l=!1,c=0,p="";o<=a;o++){if(e=B(t,o),"\\"===e)e+=B(t,++o);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:A(O,P(t,o+1))&&(o+=2,l=!0),i+=e,c++;continue;case">"===e&&l:if(""===p||g(r,p))throw new M("Invalid capture group name");r[p]=!0,n[n.length]=[p,c],l=!1,p="";continue}l?p+=e:i+=e}return[i,n]};if(r("RegExp",U)){for(var J=function(t,e){var a,o,i,n,r,c,p=b(S,this),d=u(t),h=void 0===e,f=[],v=t;if(!p&&d&&h&&t.constructor===J)return t;if((d||b(S,t))&&(t=t.source,h&&(e="flags"in v?v.flags:z(v))),t=void 0===t?"":m(t),e=void 0===e?"":m(e),v=t,_&&"dotAll"in L&&(o=!!e&&$(e,"s")>-1,o&&(e=E(e,/s/g,""))),a=e,R&&"sticky"in L&&(i=!!e&&$(e,"y")>-1,i&&(e=E(e,/y/g,""))),C&&(n=I(t),t=n[0],f=n[1]),r=s(k(t,e),p?this:S,J),(o||i||f.length)&&(c=w(r),o&&(c.dotAll=!0,c.raw=J(V(t),a)),i&&(c.sticky=!0),f.length&&(c.groups=f)),t!==v)try{l(r,"source",""===v?"(?:)":v)}catch(g){}return r},D=function(t){t in J||c(J,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},N=p(k),F=0;N.length>F;)D(N[F++]);S.constructor=J,J.prototype=S,f(i,"RegExp",J)}j("RegExp")},"4e10":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp",rel:"nofollow"},on:{click:function(e){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[a("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}})]),t._v(" WhatsApp "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],n=(a("99af"),{name:"SocialButtonWhatsAppShare",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),r=n,s=a("2877"),l=Object(s["a"])(r,o,i,!1,null,null,null);e["a"]=l.exports},5319:function(t,e,a){"use strict";var o=a("2ba4"),i=a("c65b"),n=a("e330"),r=a("d784"),s=a("d039"),l=a("825a"),c=a("1626"),p=a("5926"),b=a("50c4"),u=a("577e"),m=a("1d80"),d=a("8aa5"),h=a("dc4a"),f=a("0cb2"),v=a("14c3"),g=a("b622"),w=g("replace"),j=Math.max,y=Math.min,_=n([].concat),C=n([].push),x=n("".indexOf),k=n("".slice),S=function(t){return void 0===t?t:String(t)},M=function(){return"$0"==="a".replace(/./,"$0")}(),z=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),A=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,a){var n=z?"$":"$0";return[function(t,a){var o=m(this),n=void 0==t?void 0:h(t,w);return n?i(n,t,o,a):i(e,u(o),t,a)},function(t,i){var r=l(this),s=u(t);if("string"==typeof i&&-1===x(i,n)&&-1===x(i,"$<")){var m=a(e,r,s,i);if(m.done)return m.value}var h=c(i);h||(i=u(i));var g=r.global;if(g){var w=r.unicode;r.lastIndex=0}var M=[];while(1){var z=v(r,s);if(null===z)break;if(C(M,z),!g)break;var A=u(z[0]);""===A&&(r.lastIndex=d(s,b(r.lastIndex),w))}for(var B="",E=0,$=0;$<M.length;$++){z=M[$];for(var P=u(z[0]),O=j(y(p(z.index),s.length),0),L=[],T=1;T<z.length;T++)C(L,S(z[T]));var H=z.groups;if(h){var R=_([P],L,O,s);void 0!==H&&C(R,H);var U=u(o(i,void 0,R))}else U=f(P,s,O,L,H,i);O>=E&&(B+=k(s,E,O)+U,E=O+P.length)}return B+k(s,E)}]}),!A||!M||z)},"5b92":function(t,e,a){"use strict";a("4a28")},"776a":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank",rel:"nofollow","aria-label":"Twitter"},on:{click:function(e){return t.track("share","twitter",t.sharePath)}}},[a("svg",{staticClass:"bi bi-twitter mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" Twitter "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],n=(a("99af"),{name:"SocialButtonTwitterShare",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),r=n,s=a("2877"),l=Object(s["a"])(r,o,i,!1,null,null,null);e["a"]=l.exports},9192:function(t,e,a){a("ac1f"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0");var o=function(t){return t?i(t):""};function i(t){t=t.replace(/^\s+|\s+$/g,""),t=t.toLowerCase(),t=t.replace(/&amp;/g,"-").replace(/&shy;/g,"-").replace(/ß/g,"ss").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue");for(var e="àáãäâèéëêìíïîòóöôùúüûñç·/_,:;",a="aaaaaeeeeiiiioooouuuunc------",o=0,i=e.length;o<i;o++)t=t.replace(new RegExp(e.charAt(o),"g"),a.charAt(o));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),t}t.exports=o},"9d0e":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-placeholder"},[a("div",{staticClass:"header mb-4"},[a("div",[a("BSkeleton",{staticClass:"title mb-3"}),a("BSkeleton",{staticClass:"company"})],1)]),a("BSkeleton",{attrs:{height:"1px"}}),a("div",{staticClass:"meta"},[a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1),a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1),a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1),a("div",{staticClass:"item"},[a("BSkeleton",{attrs:{type:"avatar"}}),a("BSkeleton")],1)]),a("BSkeleton",{attrs:{height:"1px"}}),a("div",{staticClass:"d-flex mt-4"},[a("BSkeleton",{staticClass:"mr-3",attrs:{type:"avatar",height:"40px",width:"40px"}}),a("BSkeleton",{staticClass:"border-radius2",staticStyle:{"max-width":"50vw"},attrs:{type:"button",height:"40px",width:"300px"}})],1),a("div",{staticClass:"body"},[a("BSkeleton",{attrs:{height:"35vh"}}),a("div",[a("BSkeleton",{staticClass:"heading"}),t._l(7,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",[a("BSkeleton",{staticClass:"heading"}),t._l(10,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2),a("div",[a("BSkeleton",{staticClass:"heading"}),t._l(6,(function(t){return a("BSkeleton",{key:t,staticClass:"text"})}))],2)],1),a("div",{staticClass:"footer"},[a("BSkeleton",{staticClass:"map-skeleton"}),a("BSkeleton",{attrs:{height:"30px"}})],1)],1)},i=[],n=a("2b0e"),r=a("0942");n["default"].component("BSkeleton",r["a"]);var s={name:"JobItemPlaceholder"},l=s,c=(a("baba"),a("2877")),p=Object(c["a"])(l,o,i,!1,null,"40cf80b4",null);e["a"]=p.exports},a050:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMap,expression:"showMap"}],ref:"hereMap",staticClass:"map-container"}),a("Head",{attrs:{link:t.link}})],1)},i=[],n=a("1da1"),r=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("d81d"),{name:"MapJobSingle",props:{job:{type:Object,default:function(){}}},data:function(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null,showMap:!0,link:[{id:"mapsjs-ui",rel:"stylesheet",href:"https://js.api.here.com/v3/3.1/mapsjs-ui.css",type:"text/css"}]}},watch:{job:function(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window&&(window.prerenderReady=!0),e.prev=1,e.next=4,t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");case 4:return e.next=6,Promise.all([t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")]);case 6:a=new window.H.service.Platform({apikey:t.apikey}),t.platform=a,t.initializeHereMap(),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})))()},methods:{getGeoCode:function(t){var e;return t.company&&(e={lat:t.company.geoCodeLat,lng:t.company.geoCodeLng}),e},setMapMarker:function(t,e,a){var o=document.createElement("div");o.classList.add("icon-outer");var i=document.createElement("img");i.classList.add("icon-inner"),i.src=t.company.logoUrl||"/img/favicon.png",i.alt="Logo - "+(t.company.logoUrl?t.company.name:"MFA mal anders"),o.appendChild(i);var n=new a.map.DomIcon(o);this.map.addObject(new window.H.map.DomMarker(e,{icon:n}))},deleteMarkers:function(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap:function(t){this.map.setCenter(t),this.map.setZoom(13)},initializeHereMap:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{a=t.getGeoCode(t.job),a&&(t.mapContainer=t.$refs.hereMap,t.H=window.H,t.maptypes=t.platform.createDefaultLayers({lg:t.$config.maps.lang}),t.map=new t.H.Map(t.mapContainer,t.maptypes.vector.normal.map,{zoom:13,center:a}),t.setMapMarker(t.job,a,t.H),addEventListener("resize",(function(){return t.map.getViewPort().resize()})),new t.H.mapevents.Behavior(new t.H.mapevents.MapEvents(t.map)),t.H.ui.UI.createDefault(t.map,t.maptypes))}catch(o){t.showMap=!1}case 1:case"end":return e.stop()}}),e)})))()}}}),s=r,l=a("2877"),c=Object(l["a"])(s,o,i,!1,null,null,null);e["a"]=c.exports},baba:function(t,e,a){"use strict";a("2f0b")},c607:function(t,e,a){var o=a("da84"),i=a("83ab"),n=a("fce3"),r=a("c6b6"),s=a("9bf2").f,l=a("69f3").get,c=RegExp.prototype,p=o.TypeError;i&&n&&s(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===r(this))return!!l(this).dotAll;throw p("Incompatible receiver, RegExp required")}}})},ce46:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("div",[a("article",{staticClass:"job position-relative text-break"},[a("div",{staticClass:"mb-4 d-flex align-items-start justify-content-between"},[a("div",[a("h1",{domProps:{innerHTML:t._s(t.job.title)}}),a("span",{staticClass:"lead"},[t.job.company._id?a("b-link",{staticClass:"text-muted",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[a("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):a("span",{staticClass:"text-muted",domProps:{innerHTML:t._s(t.job.company.name)}}),t._v(" | "),a("b-link",{staticClass:"text-muted",attrs:{to:"/jobs?ort="+t.textToSlug(t.job.company.location)}},[t._v(t._s(t.job.company.location)+t._s(t.job.company.state&&t.job.company.state!=t.job.company.location?", "+t.job.company.state:""))])],1)]),t.job.company&&t.job.company.logoUrl?a("b-link",{staticClass:"d-none d-sm-flex logo-container mx-2",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[a("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e()],1),t.$store.state.auth.user.isAdmin?a("JobItemAdminPanel",{attrs:{job:t.job}}):t._e(),a("hr"),a("div",[a("div",{staticClass:"d-flex flex-lg-nowrap justify-content-between align-items-start"},[t.job.company&&t.job.company.logoUrl?a("b-link",{staticClass:"d-sm-none logo-container mr-1 ml-2 ml-sm-0 mr-sm-4 mb-3 mb-lg-0 order-2 order-sm-1",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[a("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e(),a("div",{staticClass:"head flex-column flex-sm-row order-1 order-sm-2"},[t.job.employmentType?a("b-link",{attrs:{to:"/jobs?anstellungsart="+t.job.employmentType}},[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-clock-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}})])]),t._v(" "+t._s(t.employmentTypeOptions.find((function(e){return e.value===t.job.employmentType})).text)+" ")]):t._e(),t.job.company.size?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-people-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"}}),a("path",{attrs:{d:"M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}})])]),t._v(" "+t._s(t.job.company.size)+" ")]):t._e(),t.job.salaryMin||t.job.salaryMax?a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]):t._e(),a("div",[a("div",{staticClass:"icon"},[a("svg",{attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]),a("div",[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-calendar-check-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"}})])]),t._v(" "+t._s("published"==t.job.status?t.timeSince(new Date(t.job.publishedAt||t.job.paidAt)):"-")+" ")]),t.job.applicationDeadline?a("div",{class:new Date(t.job.applicationDeadline)<new Date?"text-danger":""},[a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-calendar2-x-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"}})])]),t._v(" bis "+t._s(new Date(t.job.applicationDeadline).toLocaleDateString())+" ")]):t._e(),t.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("div",{staticClass:"badge badge-pill badge-secondary",staticStyle:{cursor:"pointer"}},[a("svg",{staticClass:"bi bi-check2-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}}),a("path",{attrs:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}})]),t._v(" Kurzbewerbung ")])]):t._e()],1)],1)]),a("hr"),a("div",{staticClass:"position-relative d-flex align-items-center my-4"},[a("StarJob",{attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:2}}),a("NewsletterSignUpModal",{attrs:{state:t.job.company.state}})],1),t.job.videoUrl?a("div",{staticClass:"position-relative d-flex justify-content-center bg-light-shade border-radius1"},[a("video",{staticClass:"border-radius1 mw-100 h-auto",attrs:{src:t.job.videoUrl,width:"560",height:"315",autobuffer:"",controls:""}})]):t.job.imageUrl?a("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[a("b-img",{staticClass:"blur position-absolute w-100",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl,alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}}),a("b-img",{staticClass:"title-img",attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}})],1):t._e(),a("div",{staticClass:"mt-4",attrs:{id:"job-description"},domProps:{innerHTML:t._s(t.job.description)}}),t.job.company.url?a("div",{staticClass:"mt-3"},[a("b-link",{ref:"nofollow",attrs:{href:t.job.company.url,target:"_blank"},on:{click:function(e){return t.track("job_visit_website",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[a("strong",[t._v("Besuchen Sie unsere Homepage "),a("svg",{staticClass:"bi bi-box-arrow-up-right",staticStyle:{position:"relative",top:"-5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])])],1):t._e(),t.job.videoUrl&&t.job.imageUrl?a("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[a("b-img",{staticClass:"blur position-absolute w-100",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl,alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}}),a("b-img",{staticClass:"title-img",attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}})],1):t._e(),t.job.company._id?a("div",{staticClass:"mt-3"},[a("b-link",{attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[t._v("Unternehmensprofil – "),a("span",{staticClass:"mr-1",domProps:{innerHTML:t._s(t.job.company.name)}}),a("svg",{staticClass:"bi bi-box-arrow-up-right",staticStyle:{position:"relative",top:"-5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])],1):t._e(),t._m(0),a("div",{staticClass:"mt-4"},[t.job.simpleApplication?a("b-button",{staticClass:"mr-2 mb-2",attrs:{size:"lg",to:"/kurzbewerbung/"+t.job._id,disabled:!t.$route.meta.public,rel:"nofollow"}},[a("svg",{staticClass:"bi bi-arrow-right-circle-fill mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}})]),t._v("Bewerben in 2 Minuten")]):t._e(),a("b-button",{staticClass:"mb-2",attrs:{size:t.job.simpleApplication?"sm":"lg",variant:t.job.simpleApplication?"outline-primary":"primary",href:t.job.applicationEmail?"mailto:"+t.job.applicationEmail+"?subject=Bewerbung - "+t.job.title+" über "+t.$config.website.name:t.job.extJobUrl,target:"_blank",disabled:!t.$route.meta.public},on:{click:function(e){return t.track("job_apply",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(" "+t._s(t.job.simpleApplication?"Konventionell":"Jetzt")+" bewerben")])],1),a("div",{staticClass:"my-3"},[a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/jobs"}},[t._v("Zurück zu Stellenangeboten")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/"+("ZFA"===t.job.profession?"zfa":"mfa")+"/gehalt"}},[t._v(t._s("ZFA"===t.job.profession?"ZFA":"MFA")+" Gehalt | Gehaltsrechner")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/bewerbung"}},[t._v("Bewerbungsvorlage")]),a("JobSeekButton",{staticClass:"mt-3",attrs:{size:"sm"}})],1),t.job.contactLastName||t.job.contactEmail||t.job.contactPhone||t.job.applicationEmail?a("div",{staticClass:"mt-4"},[a("h2",[t._v("Kontakt für Bewerbungen")]),a("div",{staticClass:"mb-3"},[t.job.contactLastName?a("div",[t._v(" "+t._s("null"!=t.job.contactGender?t.job.contactGender+" ":"")+" "+t._s("null"!=t.job.contactTitle?t.job.contactTitle+" ":"")+" "+t._s(t.job.contactFirstName+" "+t.job.contactLastName)+" "),t.job.contactPosition?a("br"):t._e(),t._v(" "+t._s(t.job.contactPosition)+" "),a("br")]):t._e(),t.job.contactPhone?a("div",[t._v(" Telefon: "),a("b-link",{attrs:{href:"tel:"+t.job.contactPhone,target:"_blank"},on:{click:function(e){return t.track("job_phone",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactPhone))]),a("br")],1):t._e(),t.job.contactEmail||t.job.applicationEmail?a("div",[t._v(" E-Mail: "),a("b-link",{attrs:{href:"mailto:"+(t.job.contactEmail||t.job.applicationEmail)+"?subject="+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(e){return t.track("job_mail",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactEmail||t.job.applicationEmail))])],1):t._e()])]):t._e(),a("div",{staticClass:"mt-4"},[a("h2",[t._v("Arbeitsort")]),a("p",[t.job.company._id?a("b-link",{attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[t._v(t._s(t.job.company.name))]):a("span",[t._v(t._s(t.job.company.name))]),t.job.company.name?a("br"):t._e(),t._v(" "+t._s(t.job.company.street)+" "),t.job.company.street?a("br"):t._e(),t._v(" "+t._s(t.job.company.zipCode+" "+t.job.company.location)+" "),a("br")],1),a("b-btn",{staticClass:"mb-4",attrs:{size:"sm",variant:"secondary"},on:{click:function(e){t.showMap=!t.showMap}}},[a("svg",{staticClass:"bi bi-geo-alt-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}})]),t._v("Karte anzeigen")]),t.showMap&&t.job.company&&t.job.company.geoCodeLat&&t.job.company.geoCodeLng?a("MapJobSingle",{staticClass:"mb-5",attrs:{job:t.job}}):t._e()],1),a("div",{staticClass:"d-flex flex-wrap flex-column flex-md-row align-items-center"},[a("StarJob",{staticClass:"ml-3 ml-md-0 mb-2",attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:2}}),a("SocialButtonFacebookShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),a("SocialButtonWhatsAppShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),a("SocialButtonTwitterShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,title:t.job.title}}),a("SocialButtonEmailShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,subject:t.job.title}})],1)],1)]):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 small"},[a("p",[t._v(" Beziehe Dich in Deiner Bewerbung auf MFA mal anders. ")])])}],n=(a("d3b7"),a("3ca3"),a("ddb0"),a("1ba6")),r=a("2740"),s=a("a050"),l=a("2044"),c=a("4e10"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"email-share-btn",attrs:{variant:"secondary",size:t.size,disabled:!t.$route.meta.public,href:"mailto:?subject="+t.subject+"&body=Stellenanzeige auf "+t.$config.website.name+": "+t.url+(t.sharePath?t.sharePath:""),target:"_blank",rel:"nofollow","aria-label":"E-Mail"},on:{click:function(e){return t.track("share","email",t.sharePath)}}},[a("svg",{staticClass:"bi bi-envelope-fill mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"}})]),t._v(" E-Mail "),a("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},b=[],u=(a("99af"),{name:"SocialButtonEmailShare",props:{sharePath:{type:String,default:""},subject:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}}),m=u,d=a("2877"),h=Object(d["a"])(m,p,b,!1,null,null,null),f=h.exports,v=a("776a"),g=a("ce98"),w=a("f179"),j=(a("e9c4"),a("ac1f"),a("5319"),a("a4d3"),a("e01a"),a("b0c0"),{head:{script:function(){if(this.job)return[{id:"job-structured-data",type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"JobPosting",title:"".concat(this.job.title," | ").concat(this.job.company.location),description:this.job.description.replace(/"/g,"'").replace(/h1|h2|h3|h4|h5|h6/g,"p"),datePosted:new Date(this.job.publishedAt||0).toISOString(),hiringOrganization:{"@type":"Organization",name:this.job.company.name||"",sameAs:this.job.company.url||"",logo:this.job.company.logoUrl||""},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:this.job.company.street||"",addressLocality:this.job.company.location||"",addressRegion:this.job.company.state||"",postalCode:this.job.company.zipCode||"",addressCountry:this.job.company.country||""}},validThrough:this.job.applicationDeadline?new Date(this.job.applicationDeadline).toISOString():this.job.paidExpiresAt?new Date(this.job.paidExpiresAt).toISOString():"",employmentType:this.getEmploymentType(this.job.employmentType||""),baseSalary:{"@type":"MonetaryAmount",currency:"EUR",value:{"@type":"QuantitativeValue",value:"",minValue:this.job.salaryMin?parseInt(this.job.salaryMin):"",maxValue:this.job.salaryMax?parseInt(this.job.salaryMax):"",unitText:"MONTH"}},directApply:!!this.job.applicationEmail})}]}},watch:{job:function(){this.$emit("updateHead")}},methods:{getEmploymentType:function(t){var e;switch(t){case"full":e='"FULL_TIME"';break;case"training":e='"FULL_TIME"';break;case"part":e='"PART_TIME"';break;case"mini":e='"PART_TIME"';break;case"part_full":e='["PART_TIME", "FULL_TIME"]';break;default:e=null;break}return e}}}),y=a("9192"),_=a.n(y),C=function(){return a.e("JobItemAdminPanel").then(a.bind(null,"be03"))},x={name:"JobItem",components:{MapJobSingle:s["a"],SocialButtonFacebookShare:l["a"],SocialButtonWhatsAppShare:c["a"],SocialButtonEmailShare:f,SocialButtonTwitterShare:v["a"],NewsletterSignUpModal:g["a"],JobItemAdminPanel:C,StarJob:r["a"],JobSeekButton:w["a"]},mixins:[j],props:{job:{type:Object,default:null}},data:function(){return{employmentTypeOptions:n["g"],companySizeOptions:n["c"],textToSlug:_.a,showMap:!1}},mounted:function(){window&&(window.prerenderReady=!0)},methods:{track:function(t,e){this.$matomo&&this.$matomo.trackEvent("engagement",t,e)},timeSince:function(t){var e=Math.floor((new Date-t)/1e3),a=e/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=e/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=e/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},k=x,S=(a("5b92"),Object(d["a"])(k,o,i,!1,null,"467aa68d",null));e["a"]=S.exports},ce98:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.auth.loggedIn&&t.$store.state.auth.user.isEmployee?a("b-button",{attrs:{to:"/user/job-newsletter"}},[t._v(t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]):a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:t.variant,size:t.size}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),a("BModal",{ref:"subscribe-newsletter-modal2",attrs:{id:"subscribe-newsletter-modal2","hide-footer":"","hide-header":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":t.state},on:{close:function(e){return t.$refs["subscribe-newsletter-modal2"].hide()}}})],1)],1)},i=[],n=a("2b0e"),r=a("6aac"),s=a("e6c7"),l=a("2c32");n["default"].component("BModal",r["a"]),n["default"].directive("b-modal",s["a"]);var c={name:"NewsletterSignUpModal",components:{NewsletterSignUpForm:l["a"]},props:{state:{type:String,default:""},variant:{type:String,default:"secondary"},size:{type:String,default:""}}},p=c,b=a("2877"),u=Object(b["a"])(p,o,i,!1,null,null,null);e["a"]=u.exports},d81d:function(t,e,a){"use strict";var o=a("23e7"),i=a("b727").map,n=a("1dde"),r=n("map");o({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dfcd:function(t,e,a){t.exports=a.p+"img/LinkedIn_Monochromatic.a4d7c979.svg"},e6c7:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var o=a("c637"),i=a("0056"),n=a("9bfa"),r=a("906c"),s=a("6b77"),l=a("7b1e"),c=a("d82f"),p=Object(s["d"])(o["R"],i["K"]),b="__bv_modal_directive__",u=function(t){var e=t.modifiers,a=void 0===e?{}:e,o=t.arg,i=t.value;return Object(l["n"])(i)?i:Object(l["n"])(o)?o:Object(c["h"])(a).reverse()[0]},m=function(t){return t&&Object(r["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(r["C"])("a, button",t)||t},d=function(t){t&&"BUTTON"!==t.tagName&&(Object(r["o"])(t,"role")||Object(r["E"])(t,"role","button"),"A"===t.tagName||Object(r["o"])(t,"tabindex")||Object(r["E"])(t,"tabindex","0"))},h=function(t,e,a){var o=u(e),l=m(t);if(o&&l){var c=function(t){var e=t.currentTarget;if(!Object(r["r"])(e)){var i=t.type,s=t.keyCode;"click"!==i&&("keydown"!==i||s!==n["e"]&&s!==n["l"])||a.context.$root.$emit(p,o,e)}};t[b]={handler:c,target:o,trigger:l},d(l),Object(s["b"])(l,"click",c,i["R"]),"BUTTON"!==l.tagName&&"button"===Object(r["h"])(l,"role")&&Object(s["b"])(l,"keydown",c,i["R"])}},f=function(t){var e=t[b]||{},a=e.trigger,o=e.handler;a&&o&&(Object(s["a"])(a,"click",o,i["R"]),Object(s["a"])(a,"keydown",o,i["R"]),Object(s["a"])(t,"click",o,i["R"]),Object(s["a"])(t,"keydown",o,i["R"])),delete t[b]},v=function(t,e,a){var o=t[b]||{},i=u(e),n=m(t);i===o.target&&n===o.trigger||(f(t,e,a),h(t,e,a)),d(n)},g=function(){},w={inserted:v,updated:g,componentUpdated:v,unbind:f}},f179:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-btn",{attrs:{to:"/stellengesuche/info",block:t.block,size:t.size}},[o("b-img-lazy",{staticClass:"p-0 mr-2",staticStyle:{"max-height":"30px"},attrs:{src:a("dfcd"),alt:"Stellengesuche für MFA / ZFA und ArzthelferInnen","blank-width":"38","blank-height":"30",offset:"1000",fluid:""}}),o("strong",[t._v("Jetzt Stellengesuch schalten")]),o("span",{staticClass:"d-none d-lg-inline"},[t._v("  – Arbeitgeber finden Dich!")])],1)},i=[],n={name:"JobSeekButton",props:{block:{type:Boolean,default:!1},size:{type:String,default:""}}},r=n,s=a("2877"),l=Object(s["a"])(r,o,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=job~job-preview-legacy.95717973.js.map