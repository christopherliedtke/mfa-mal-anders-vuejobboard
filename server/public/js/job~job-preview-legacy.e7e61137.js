(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job~job-preview"],{"0d1d":function(t,a,e){},2044:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",size:t.size,disabled:!t.$route.meta.public,href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank",rel:"nofollow"},on:{click:function(a){return t.track("share","facebook",t.sharePath?t.sharePath:t.$route.fullPath)}}},[e("svg",{staticClass:"bi bi-facebook mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}})]),t._v(" "+t._s(t.content)+" "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],s=(e("99af"),{name:"SocialButtonFacebookShare",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(a,"; path: ").concat(e))}}}),n=s,l=e("2877"),r=Object(l["a"])(n,o,i,!1,null,null,null);a["a"]=r.exports},"2f0b":function(t,a,e){},"4e10":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"https://wa.me/?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp",rel:"nofollow"},on:{click:function(a){return t.track("share","whatsapp",t.sharePath?t.sharePath:t.$route.fullPath)}}},[e("svg",{staticClass:"bi bi-whatsapp mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}})]),t._v(" WhatsApp "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],s=(e("99af"),{name:"SocialButtonWhatsAppShare",props:{sharePath:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(a,"; path: ").concat(e))}}}),n=s,l=e("2877"),r=Object(l["a"])(n,o,i,!1,null,null,null);a["a"]=r.exports},"776a":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,size:t.size,href:"\n      https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank",rel:"nofollow","aria-label":"Twitter"},on:{click:function(a){return t.track("share","twitter",t.sharePath)}}},[e("svg",{staticClass:"bi bi-twitter mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}})]),t._v(" Twitter "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},i=[],s=(e("99af"),{name:"SocialButtonTwitterShare",props:{sharePath:{type:String,default:""},title:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(a,"; path: ").concat(e))}}}),n=s,l=e("2877"),r=Object(l["a"])(n,o,i,!1,null,null,null);a["a"]=r.exports},"89d0":function(t,a,e){"use strict";e("0d1d")},"9d0e":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"job-placeholder"},[e("div",{staticClass:"header mb-4"},[e("div",[e("BSkeleton",{staticClass:"title mb-3"}),e("BSkeleton",{staticClass:"company"})],1)]),e("BSkeleton",{attrs:{height:"1px"}}),e("div",{staticClass:"meta"},[e("div",{staticClass:"item"},[e("BSkeleton",{attrs:{type:"avatar"}}),e("BSkeleton")],1),e("div",{staticClass:"item"},[e("BSkeleton",{attrs:{type:"avatar"}}),e("BSkeleton")],1),e("div",{staticClass:"item"},[e("BSkeleton",{attrs:{type:"avatar"}}),e("BSkeleton")],1),e("div",{staticClass:"item"},[e("BSkeleton",{attrs:{type:"avatar"}}),e("BSkeleton")],1)]),e("BSkeleton",{attrs:{height:"1px"}}),e("div",{staticClass:"d-flex mt-4"},[e("BSkeleton",{staticClass:"mr-3",attrs:{type:"avatar",height:"40px",width:"40px"}}),e("BSkeleton",{staticClass:"border-radius2",staticStyle:{"max-width":"50vw"},attrs:{type:"button",height:"40px",width:"300px"}})],1),e("div",{staticClass:"body"},[e("BSkeleton",{attrs:{height:"35vh"}}),e("div",[e("BSkeleton",{staticClass:"heading"}),t._l(7,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2),e("div",[e("BSkeleton",{staticClass:"heading"}),t._l(10,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2),e("div",[e("BSkeleton",{staticClass:"heading"}),t._l(6,(function(t){return e("BSkeleton",{key:t,staticClass:"text"})}))],2)],1),e("div",{staticClass:"footer"},[e("BSkeleton",{staticClass:"map-skeleton"}),e("BSkeleton",{attrs:{height:"30px"}})],1)],1)},i=[],s=e("2b0e"),n=e("0942");s["default"].component("BSkeleton",n["a"]);var l={name:"JobItemPlaceholder"},r=l,c=(e("baba"),e("2877")),b=Object(c["a"])(r,o,i,!1,null,"40cf80b4",null);a["a"]=b.exports},baba:function(t,a,e){"use strict";e("2f0b")},ce46:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.job?e("div",[e("article",{staticClass:"job position-relative text-break"},[e("div",{staticClass:"mb-4 d-flex align-items-start justify-content-between"},[e("div",[e("h1",{domProps:{innerHTML:t._s(t.job.title)}}),e("span",{staticClass:"lead"},[t.job.company._id?e("b-link",{staticClass:"text-muted",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[e("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):e("span",{staticClass:"text-muted",domProps:{innerHTML:t._s(t.job.company.name)}}),t._v(" | "),t.job.company.noLocation?e("span",{staticClass:"text-muted"},[t._v("Deutschlandweit")]):e("b-link",{staticClass:"text-muted",attrs:{to:"/stellenangebote/"+t.job.company.location}},[t._v(t._s(t.job.company.location)+t._s(t.job.company.state&&t.job.company.state!=t.job.company.location?", "+t.job.company.state:""))])],1)]),t.job.company&&t.job.company.logoUrl?e("b-link",{staticClass:"d-none d-sm-flex logo-container mx-2",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[e("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e()],1),t.$store.state.auth.user.isAdmin?e("JobItemAdminPanel",{attrs:{job:t.job}}):t._e(),e("hr"),e("div",[e("div",{staticClass:"d-flex flex-lg-nowrap justify-content-between align-items-start"},[t.job.company&&t.job.company.logoUrl?e("b-link",{staticClass:"d-sm-none logo-container mr-1 ml-2 ml-sm-0 mr-sm-4 mb-3 mb-lg-0 order-2 order-sm-1",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[e("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e(),e("div",{staticClass:"head flex-column flex-sm-row order-1 order-sm-2"},[e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-clock-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}})])]),t._v(" "+t._s(t.job.employmentTypeFull)+" ")]),t.job.company.size?e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-people-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"}}),e("path",{attrs:{d:"M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}})])]),t._v(" "+t._s(t.job.company.size)+" ")]):t._e(),t.job.salaryMin||t.job.salaryMax?e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-currency-euro",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"}})])]),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]):t._e(),t.job.specialization?e("div",[e("div",{staticClass:"icon"},[e("svg",{attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"}})])]),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),e("div",[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-calendar-check-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"}})])]),t._v(" "+t._s(t.job.timeSincePublished||"–")+" ")]),t.job.applicationDeadline?e("div",{class:new Date(t.job.applicationDeadline)<new Date?"text-danger":""},[e("div",{staticClass:"icon"},[e("svg",{staticClass:"bi bi-calendar2-x-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"}})])]),t._v(" bis "+t._s(new Date(t.job.applicationDeadline).toLocaleDateString())+" ")]):t._e(),t.job.simpleApplication?e("div",{attrs:{id:"tooltip-simple-application"}},[e("div",{staticClass:"badge badge-pill badge-secondary",staticStyle:{cursor:"pointer"}},[e("svg",{staticClass:"bi bi-check2-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}}),e("path",{attrs:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}})]),t._v(" Kurzbewerbung ")])]):t._e()])],1)]),e("hr"),e("div",{staticClass:"position-relative d-flex align-items-center my-4"},[e("StarJob",{attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:2}}),e("NewsletterSignUpModal",{attrs:{state:t.job.company.state}})],1),t.job.videoUrl?e("div",{staticClass:"position-relative d-flex justify-content-center bg-light-shade border-radius1"},[e("video",{staticClass:"border-radius1 mw-100 h-auto",attrs:{src:t.job.videoUrl,width:"560",height:"315",autobuffer:"",controls:""}})]):t.job.imageUrl?e("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[e("b-img",{staticClass:"blur position-absolute w-100",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl,alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}}),e("b-img",{staticClass:"title-img",attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}})],1):t._e(),e("h2",{staticClass:"sr-only"},[t._v("Stellenbeschreibung")]),e("div",{staticClass:"mt-4",attrs:{id:"job-description"},domProps:{innerHTML:t._s(t.job.description)}}),t.job.company.url?e("div",{staticClass:"mt-3"},[e("b-link",{attrs:{rel:"nofollow",href:t.job.company.url,target:"_blank"},on:{click:function(a){return t.track("job_visit_website",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[e("strong",[t._v("Besuchen Sie unsere Homepage "),e("svg",{staticClass:"bi bi-box-arrow-up-right",staticStyle:{position:"relative",top:"-5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])])],1):t._e(),t.job.videoUrl&&t.job.imageUrl?e("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[e("b-img",{staticClass:"blur position-absolute w-100",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl,alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}}),e("b-img",{staticClass:"title-img",attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Bild von "+(t.job.company&&t.job.company.name)+" zu "+t.job.title+(t.job.company?" in "+t.job.company.location:"")}})],1):t._e(),t.job.company._id?e("div",{staticClass:"mt-3"},[e("b-link",{attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[t._v("Unternehmensprofil – "),e("span",{staticClass:"mr-1",domProps:{innerHTML:t._s(t.job.company.name)}}),e("svg",{staticClass:"bi bi-box-arrow-up-right",staticStyle:{position:"relative",top:"-5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})])])],1):t._e(),t._m(0),e("div",{staticClass:"mt-4"},[t.job.simpleApplication?e("b-button",{staticClass:"mr-2 mb-2",attrs:{size:"lg",to:"/kurzbewerbung/"+t.job._id,disabled:!t.$route.meta.public,rel:"nofollow"}},[e("svg",{staticClass:"bi bi-arrow-right-circle-fill mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}})]),t._v("Bewerben in 2 Minuten")]):t._e(),e("b-button",{staticClass:"mb-2",attrs:{size:t.job.simpleApplication?"sm":"lg",variant:t.job.simpleApplication?"outline-primary":"primary",href:t.job.extJobUrl||"mailto:"+t.job.applicationEmail+"?subject=Bewerbung - "+t.job.title+" über "+t.$config.website.name,target:"_blank",disabled:!t.$route.meta.public},on:{click:function(a){return t.track("job_apply",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(" "+t._s(t.job.simpleApplication?"Konventionell":"Jetzt")+" bewerben")])],1),e("div",{staticClass:"my-3"},[e("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/stellenangebote"}},[t._v("Zurück zu Stellenangeboten")]),e("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/"+("ZFA"===t.job.profession?"zfa":"mfa")+"/gehalt"}},[t._v(t._s("ZFA"===t.job.profession?"ZFA":"MFA")+" Gehalt | Gehaltsrechner")]),e("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/bewerbung"}},[t._v("Bewerbungsvorlage")]),e("JobSeekButton",{staticClass:"mt-3",attrs:{size:"sm"}})],1),t.job.contactLastName||t.job.contactEmail||t.job.contactPhone||t.job.applicationEmail?e("div",{staticClass:"mt-4"},[t._m(1),e("div",{staticClass:"mb-3"},[t.job.contactLastName?e("div",[t._v(" "+t._s("null"!=t.job.contactGender?t.job.contactGender+" ":"")+" "+t._s("null"!=t.job.contactTitle?t.job.contactTitle+" ":"")+" "+t._s(t.job.contactFirstName+" "+t.job.contactLastName)+" "),t.job.contactPosition?e("br"):t._e(),t._v(" "+t._s(t.job.contactPosition)+" "),e("br")]):t._e(),t.job.contactPhone?e("div",[t._v(" Telefon: "),e("b-link",{attrs:{href:"tel:"+t.job.contactPhone,target:"_blank"},on:{click:function(a){return t.track("job_phone",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactPhone))]),e("br")],1):t._e(),t.job.contactEmail||t.job.applicationEmail?e("div",[t._v(" E-Mail: "),e("b-link",{attrs:{href:"mailto:"+(t.job.contactEmail||t.job.applicationEmail)+"?subject="+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(a){return t.track("job_mail",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactEmail||t.job.applicationEmail))])],1):t._e()])]):t._e(),e("div",{staticClass:"mt-4"},[t._m(2),e("div",[t.job.company._id?e("b-link",{staticClass:"d-block",attrs:{to:"/unternehmen/"+t.job.company._id+"/"+t.job.company.slug}},[e("span",{domProps:{innerHTML:t._s(t.job.company.name)}})]):e("span",{staticClass:"d-block",domProps:{innerHTML:t._s(t.job.company.name)}}),t.job.company.noLocation?e("div",[e("span",[t._v("Deutschlandweit")])]):e("div",[e("span",{staticClass:"d-block"},[t._v(t._s(t.job.company.street)+" ")]),e("span",{staticClass:"d-block"},[t._v(t._s(t.job.company.zipCode+" "+t.job.company.location))])]),e("br")],1),!t.showMap&&t.job.company&&t.job.company.geoCodeLat&&t.job.company.geoCodeLng?e("b-btn",{staticClass:"mb-4",attrs:{size:"sm",variant:"secondary"},on:{click:function(a){t.showMap=!t.showMap}}},[e("svg",{staticClass:"bi bi-geo-alt-fill mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}})]),t._v("Karte anzeigen")]):t._e(),t.showMap?e("MapJobSingle",{staticClass:"mb-5",attrs:{job:t.job}}):t._e()],1),e("div",{staticClass:"d-flex flex-wrap flex-column flex-md-row align-items-center"},[e("StarJob",{staticClass:"ml-3 ml-md-0 mb-2",attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:2}}),e("SocialButtonFacebookShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),e("SocialButtonWhatsAppShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),e("SocialButtonTwitterShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,title:t.job.title}}),e("SocialButtonEmailShare",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,subject:t.job.title}})],1)],1)]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3 small"},[e("p",[t._v(" Beziehe Dich in Deiner Bewerbung auf MFA mal anders. ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[e("strong",[t._v("Kontakt für Bewerbungen")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[e("strong",[t._v("Arbeitsort")])])}],s=(e("d3b7"),e("3ca3"),e("ddb0"),e("2740")),n=e("2044"),l=e("4e10"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-button",{staticClass:"email-share-btn",attrs:{variant:"secondary",size:t.size,disabled:!t.$route.meta.public,href:"mailto:?subject="+t.subject+"&body=Stellenanzeige auf "+t.$config.website.name+": "+t.url+(t.sharePath?t.sharePath:""),target:"_blank",rel:"nofollow","aria-label":"E-Mail"},on:{click:function(a){return t.track("share","email",t.sharePath)}}},[e("svg",{staticClass:"bi bi-envelope-fill mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"}})]),t._v(" E-Mail "),e("svg",{staticClass:"bi bi-share-fill ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})])])},c=[],b=(e("99af"),{name:"SocialButtonEmailShare",props:{sharePath:{type:String,default:""},subject:{type:String,default:""},size:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,a,e){this.$gtag.event(t,{method:a,content_id:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(a,"; path: ").concat(e))}}}),m=b,d=e("2877"),h=Object(d["a"])(m,r,c,!1,null,null,null),u=h.exports,p=e("776a"),v=e("ce98"),g=e("f179"),f=function(){return e.e("MapJobSingle").then(e.bind(null,"a050"))},w=function(){return e.e("JobItemAdminPanel").then(e.bind(null,"be03"))},j={name:"JobItem",components:{MapJobSingle:f,SocialButtonFacebookShare:n["a"],SocialButtonWhatsAppShare:l["a"],SocialButtonEmailShare:u,SocialButtonTwitterShare:p["a"],NewsletterSignUpModal:v["a"],JobItemAdminPanel:w,StarJob:s["a"],JobSeekButton:g["a"]},props:{job:{type:Object,default:null}},data:function(){return{showMap:!1}},mounted:function(){window&&(window.prerenderReady=!0)},methods:{track:function(t,a){this.$gtag.event(t,{event_label:a}),this.$gtag.query("event","conversion",{send_to:"AW-797795882/cM5pCJu31IoYEKrMtfwC"}),this.$matomo&&this.$matomo.trackEvent("engagement",t,a)}}},_=j,y=(e("89d0"),Object(d["a"])(_,o,i,!1,null,"368e9513",null));a["a"]=y.exports},ce98:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.$store.state.auth.loggedIn&&t.$store.state.auth.user.isEmployee?e("b-button",{attrs:{to:"/user/job-newsletter"}},[t._v(t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]):e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:t.variant,size:t.size}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),e("BModal",{ref:"subscribe-newsletter-modal2",attrs:{id:"subscribe-newsletter-modal2","hide-footer":"","hide-header":"",centered:""}},[e("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":t.state},on:{close:function(a){return t.$refs["subscribe-newsletter-modal2"].hide()}}})],1)],1)},i=[],s=e("2b0e"),n=e("6aac"),l=e("e6c7"),r=e("2c32");s["default"].component("BModal",n["a"]),s["default"].directive("b-modal",l["a"]);var c={name:"NewsletterSignUpModal",components:{NewsletterSignUpForm:r["a"]},props:{state:{type:String,default:""},variant:{type:String,default:"secondary"},size:{type:String,default:""}}},b=c,m=e("2877"),d=Object(m["a"])(b,o,i,!1,null,null,null);a["a"]=d.exports},dfcd:function(t,a,e){t.exports=e.p+"img/LinkedIn_Monochromatic.a4d7c979.svg"},e6c7:function(t,a,e){"use strict";e.d(a,"a",(function(){return w}));var o=e("c637"),i=e("0056"),s=e("9bfa"),n=e("906c"),l=e("6b77"),r=e("7b1e"),c=e("d82f"),b=Object(l["d"])(o["R"],i["K"]),m="__bv_modal_directive__",d=function(t){var a=t.modifiers,e=void 0===a?{}:a,o=t.arg,i=t.value;return Object(r["n"])(i)?i:Object(r["n"])(o)?o:Object(c["h"])(e).reverse()[0]},h=function(t){return t&&Object(n["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(n["C"])("a, button",t)||t},u=function(t){t&&"BUTTON"!==t.tagName&&(Object(n["o"])(t,"role")||Object(n["E"])(t,"role","button"),"A"===t.tagName||Object(n["o"])(t,"tabindex")||Object(n["E"])(t,"tabindex","0"))},p=function(t,a,e){var o=d(a),r=h(t);if(o&&r){var c=function(t){var a=t.currentTarget;if(!Object(n["r"])(a)){var i=t.type,l=t.keyCode;"click"!==i&&("keydown"!==i||l!==s["e"]&&l!==s["l"])||e.context.$root.$emit(b,o,a)}};t[m]={handler:c,target:o,trigger:r},u(r),Object(l["b"])(r,"click",c,i["R"]),"BUTTON"!==r.tagName&&"button"===Object(n["h"])(r,"role")&&Object(l["b"])(r,"keydown",c,i["R"])}},v=function(t){var a=t[m]||{},e=a.trigger,o=a.handler;e&&o&&(Object(l["a"])(e,"click",o,i["R"]),Object(l["a"])(e,"keydown",o,i["R"]),Object(l["a"])(t,"click",o,i["R"]),Object(l["a"])(t,"keydown",o,i["R"])),delete t[m]},g=function(t,a,e){var o=t[m]||{},i=d(a),s=h(t);i===o.target&&s===o.trigger||(v(t,a,e),p(t,a,e)),u(s)},f=function(){},w={inserted:g,updated:f,componentUpdated:g,unbind:v}},f179:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("b-btn",{attrs:{to:"/stellengesuche/info",block:t.block,size:t.size}},[o("b-img-lazy",{staticClass:"p-0 mr-2",staticStyle:{"max-height":"30px"},attrs:{src:e("dfcd"),alt:"Stellengesuche für MFA / ZFA und ArzthelferInnen","blank-width":"38","blank-height":"30",offset:"1000",fluid:""}}),o("strong",{staticStyle:{"font-weight":"600"}},[t._v("Jetzt Stellengesuch schalten")]),o("span",{staticClass:"d-none d-lg-inline"},[t._v("  – Arbeitgeber finden Dich!")])],1)},i=[],s={name:"JobSeekButton",props:{block:{type:Boolean,default:!1},size:{type:String,default:""}}},n=s,l=e("2877"),r=Object(l["a"])(n,o,i,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=job~job-preview-legacy.e7e61137.js.map