(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newsletterSignUpPopUp"],{ddc9:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("BModal",{attrs:{id:"subscribe-newsletter-modal","content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:e.modalVisible}},[l("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:e.closePopUp}},[l("svg",{staticClass:"bi bi-x-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}}),l("path",{attrs:{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"}})])]),l("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":e.state,intro:"Erhalte unsere aktuellen Stellenangebote wöchentlich direkt in Dein Postfach.",social:!0},on:{close:e.closePopUp}})],1)},s=[],a=l("2b0e"),r=l("6aac"),i=l("e7ba");a["default"].component("BModal",r["a"]);var n={name:"NewsletterSignUpPopUp",components:{NewsletterSignUpForm:i["a"]},props:{state:{type:String,default:null}},data(){return{modalVisible:!1}},mounted(){localStorage.getItem("nl-pop")||"/fuer-arbeitgeber"==this.$route.path||this.$store.state.auth.loggedIn||setTimeout(()=>{this.modalVisible=!0},1e4)},methods:{closePopUp(){localStorage.setItem("nl-pop","false"),this.modalVisible=!1}}},p=n,c=l("2877"),d=Object(c["a"])(p,o,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=newsletterSignUpPopUp.d88a97f9.js.map