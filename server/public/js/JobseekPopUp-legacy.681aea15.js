(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JobseekPopUp"],{2715:function(e,t,s){"use strict";s("30e0")},"30e0":function(e,t,s){},d785:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BModal",{attrs:{id:"add-jobseek-modal","content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:e.modalVisible}},[s("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:e.closePopUp}},[s("svg",{staticClass:"bi bi-x-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}}),s("path",{attrs:{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"}})])]),s("div",{staticClass:"jobseek-popup p-2",attrs:{id:""}},[s("div",[s("h2",{staticClass:"h3 bold"},[e._v("Stellengesuch schalten")]),s("p",{staticClass:"mb-2"},[s("strong",{staticClass:"text-primary"},[e._v("Du bist MFA | ZFA")]),e._v(" und interessiert an attraktiven Stellenangeboten von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und drehe den Bewerbungsprozess um. "),s("strong",{staticClass:"text-primary"},[e._v("Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren")]),e._v(". ")]),s("div",[s("b-link",{staticClass:"btn btn-secondary mr-2 mt-2",attrs:{to:"/stellengesuche/info"},on:{click:e.closePopUp}},[e._v(" Jetzt Stellengesuch schalten ")]),s("b-link",{staticClass:"btn btn-outline-primary mr-2 mt-2",attrs:{to:"/stellengesuche"},on:{click:e.closePopUp}},[e._v("Zu den Stellengesuchen")])],1)])])])},n=[],a=s("2b0e"),l=s("6aac");a["default"].component("BModal",l["a"]);var i={name:"JobseekUpPopUp",components:{},props:{state:{type:String,default:null}},data:function(){return{modalVisible:!1}},mounted:function(){var e=this;document.onreadystatechange=function(){"complete"==document.readyState&&(window&&(window.prerenderReady=!0),localStorage.getItem("jobseek-pop")||e.$store.state.auth.loggedIn||setTimeout((function(){e.modalVisible=!0}),3e3))}},methods:{closePopUp:function(){localStorage.setItem("jobseek-pop","false"),this.modalVisible=!1}}},r=i,c=(s("2715"),s("2877")),d=Object(c["a"])(r,o,n,!1,null,"38885817",null);t["default"]=d.exports}}]);
//# sourceMappingURL=JobseekPopUp-legacy.681aea15.js.map