(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin~jobboard~user"],{"01f5":function(t,e,a){"use strict";a("56cb")},"037e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"facebook-share-btn",attrs:{variant:"primary",href:"https://www.facebook.com/sharer/sharer.php?u="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank"},on:{click:function(e){return t.$gtag.event("share",{method:"facebook",content_id:t.sharePath?t.sharePath:t.$route.fullPath})}}},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fab","facebook-square"],size:"lg"}}),t._v(" "+t._s(t.content)+" "),a("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},r=[],o={name:"FacebookShareBtn",props:{sharePath:{type:String,default:""},content:{type:String,default:"Teilen"}},data:function(){return{url:window.location.origin}}},i=o,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports},"0a32":function(t,e,a){"use strict";a("796e")},1144:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"twitter-share-btn",attrs:{disabled:!t.$route.meta.public,href:"\n    https://twitter.com/share?text="+t.title+"&url=%0A%0A"+t.url+(t.sharePath?t.sharePath:"")+"%0A%0A&hashtags=mfa,arzthelferIn,mfamalanders",target:"_blank","aria-label":"Twitter"},on:{click:function(e){return t.$gtag.event("share",{method:"twitter",content_id:t.sharePath})}}},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fab","twitter"],size:"lg"}}),t._v(" Twitter "),a("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},r=[],o={name:"TwitterShareBtn",props:["sharePath","title"],data:function(){return{url:window.location.origin}}},i=o,s=(a("c26e"),a("2877")),c=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports},"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var o=a.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),o=a("17c2"),i=a("9112");for(var s in r){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(b){l.forEach=o}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),o=a("ae40"),i=r("forEach"),s=o("forEach");t.exports=i&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),o=a("7b0b"),i=a("50c4"),s=a("a691"),c=a("1d80"),l=a("8aa5"),b=a("14c3"),p=Math.max,u=Math.min,d=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,j=g?"$":"$0";return[function(a,n){var r=c(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!g&&v||"string"===typeof n&&-1===n.indexOf(j)){var o=a(e,t,this,n);if(o.done)return o.value}var c=r(t),d=String(this),m="function"===typeof n;m||(n=String(n));var h=c.global;if(h){var _=c.unicode;c.lastIndex=0}var w=[];while(1){var x=b(c,d);if(null===x)break;if(w.push(x),!h)break;var C=String(x[0]);""===C&&(c.lastIndex=l(d,i(c.lastIndex),_))}for(var S="",E=0,k=0;k<w.length;k++){x=w[k];for(var $=String(x[0]),M=p(u(s(x.index),d.length),0),P=[],z=1;z<x.length;z++)P.push(f(x[z]));var O=x.groups;if(m){var I=[$].concat(P,M,d);void 0!==O&&I.push(O);var L=String(n.apply(void 0,I))}else L=y($,d,M,P,O,n);M>=E&&(S+=d.slice(E,M)+L,E=M+$.length)}return S+d.slice(E)}];function y(t,a,n,r,i,s){var c=n+t.length,l=r.length,b=h;return void 0!==i&&(i=o(i),b=m),e.call(s,b,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var b=+o;if(0===b)return e;if(b>l){var p=d(b/10);return 0===p?e:p<=l?void 0===r[p-1]?o.charAt(1):r[p-1]+o.charAt(1):e}s=r[b-1]}return void 0===s?"":s}))}}))},"56cb":function(t,e,a){},7067:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar(e)}}},[t.active?n("Fa",{attrs:{icon:["fas","star"],size:t.size}}):n("Fa",{attrs:{icon:["far","star"],size:t.size}}),n("b-modal",{attrs:{id:"register-modal-"+t.jobId,"content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:t.modalVisible}},[n("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:function(e){t.modalVisible=!1}}},[n("Fa",{attrs:{icon:"times"}})],1),n("div",{staticClass:"py-2 px-3 "},[n("h2",{staticClass:"h4 mb-4 bold"},[t._v("Für später speichern?")]),n("div",{staticClass:"clearfix mb-3"},[n("b-img",{staticClass:"mr-4 mb-2",staticStyle:{"max-width":"150px"},attrs:{fluid:"",left:"",src:a("7734")}}),n("p",[t._v(" Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu bewerben. Registriere Dich dazu jetzt ganz einfach. ")])],1),n("b-button",{attrs:{to:"/auth/register?role=employee",block:"",variant:"secondary"}},[t._v("Jetzt registrieren")])],1)])],1)},r=[],o=(a("45fc"),a("96cf"),a("c964")),i={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data:function(){return{active:!1,modalVisible:!1}},mounted:function(){this.checkStarredJobs()},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},methods:{checkStarredJobs:function(){var t=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(e){return e.job._id===t.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$store.state.auth.loggedIn){e.next=3;break}return t.modalVisible=!0,e.abrupt("return");case 3:if(t.active){e.next=11;break}return t.active=!0,e.next=7,t.$store.dispatch("addStarredJob",t.jobId);case 7:t.$gtag.event("add_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","add_starred_job",t.jobId),e.next=16;break;case 11:return t.active=!1,e.next=14,t.$store.dispatch("deleteStarredJob",t.jobId);case 14:t.$gtag.event("delete_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","delete_starred_job",t.jobId);case 16:case"end":return e.stop()}}),e)})))()}}},s=i,c=(a("0a32"),a("2877")),l=Object(c["a"])(s,n,r,!1,null,"fe3e2ed8",null);e["a"]=l.exports},7734:function(t,e,a){t.exports=a.p+"img/starredJobs.15f8095f.svg"},"796e":function(t,e,a){},"890f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.job.title?a("div",{staticClass:"job position-relative"},[a("h1",[t._v(t._s(t.job.title))]),a("div",{staticClass:"d-flex  flex-lg-nowrap align-items-start align-items-md-center my-3"},[t.job.company&&t.job.company.logoUrl?a("div",{staticClass:"logo-container mr-2 mb-3 mb-lg-0 order-2 order-sm-1"},[a("b-img",{staticClass:"logo my-3",attrs:{src:t.job.company.logoUrl,fluid:"",alt:"Logo - "+t.job.company.name}})],1):t._e(),a("div",{staticClass:"d-flex flex-wrap head order-1 order-sm-2"},[a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}}),t._v(" "+t._s(t.job.company.state!=t.job.company.location?t.job.company.location+", "+t.job.company.state:t.job.company.location)+" ")],1),a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}}),t._v(" "+t._s(t.job.company.name)+" ")],1),a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}}),t._v(" "+t._s(t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text)+" ")],1),a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","calendar-alt"],size:"lg"}}),t._v(" Veröffentlicht: "+t._s(t.job.paid?new Date(parseInt(t.job.publishedAt||t.job.paidAt)).toLocaleDateString():"-")+" ")],1),a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","calendar-times"],size:"lg"}}),t._v(" Bewerbungsfrist: "+t._s(new Date(t.job.applicationDeadline).toLocaleDateString())+" ")],1),a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","users"],size:"lg"}}),t._v(" "+t._s(t.job.company.size)+" ")],1),t.job.salaryMin||t.job.salaryMax?a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}}),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")],1):t._e(),t.job.specialization&&"null"!=t.job.specialization?a("div",[a("Fa",{staticClass:"mr-2",attrs:{icon:"briefcase-medical",size:"lg"}}),t._v(" "+t._s(t.job.specialization)+" ")],1):t._e(),t.job.simpleApplication?a("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],attrs:{title:"Lebenslauf genügt für Bewerbung"}},[a("b-badge",{staticStyle:{cursor:"pointer"},attrs:{pill:"",variant:"secondary"}},[a("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),t._v("Einfach bewerben")],1)],1):t._e()])]),a("div",{staticClass:"position-relative d-flex align-items-center"},[a("StarJob",{attrs:{jobId:t.job._id,position:"relative",padding:"0 20px 0 0",size:"2x"}}),a("SubscribeNewsletterBtn",{attrs:{state:t.job.company.state}})],1),t.job.imageUrl?a("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[a("b-img",{staticClass:"blur position-absolute",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl}}),a("b-img",{staticClass:"title-img",staticStyle:{"max-height":"35vh"},attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Image - "+(t.job.company&&t.job.company.name)}})],1):t._e(),a("div",{staticClass:"mt-4",domProps:{innerHTML:t._s(t.job.description)}}),t.job.company.url?a("div",{staticClass:"mt-3"},[a("b-link",{ref:"nofollow",attrs:{href:t.job.company.url,target:"_blank"},on:{click:function(e){return t.$gtag.event("apply_visit_hp",{event_label:t.job.title+" | "+t.job.company.name+" - "+t.job._id})}}},[a("strong",[t._v("Besuchen Sie unsere Homepage "),a("Fa",{staticStyle:{position:"relative",top:"-5px"},attrs:{icon:"external-link-alt",size:"sm"}})],1)])],1):t._e(),t._m(0),a("div",{staticClass:"mt-4"},[a("b-button",{attrs:{size:"lg",variant:t.job.simpleApplication?"secondary":"primary",href:t.job.extJobUrl||"mailto:"+t.job.applicationEmail+"?subject=Bewerbung - "+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(e){return t.$gtag.event("apply_now",{event_label:t.job.title+" | "+t.job.company.name+" - "+t.job._id})}}},[t._v("Jetzt "+t._s(t.job.simpleApplication?"nur mit Lebenslauf":"")+" bewerben")])],1),a("div",{staticClass:"my-3"},[a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/jobboard"}},[t._v("Zurück zur Stellenbörse")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/page/mfa-career/gehalt"}},[t._v("Gehaltsrechner")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/page/mfa-career/bewerbungstipps"}},[t._v("Bewerbungsvorlage")])],1),t.job.contactLastName||t.job.contactEmail||t.job.contactPhone||t.job.applicationEmail?a("div",{staticClass:"mt-4"},[a("h2",[t._v("Kontakt für Bewerbungen")]),a("div",{staticClass:"mb-3"},[t.job.contactLastName?a("div",[t._v(" "+t._s("null"!=t.job.contactGender?t.job.contactGender+" ":"")+" "+t._s("null"!=t.job.contactTitle?t.job.contactTitle+" ":"")+" "+t._s(t.job.contactFirstName+" "+t.job.contactLastName)+" "),a("br")]):t._e(),t.job.contactPhone?a("div",[t._v(" Telefon: "),a("b-link",{attrs:{href:"tel:"+t.job.contactPhone,target:"_blank"},on:{click:function(e){return t.$gtag.event("apply_phone",{event_label:t.job.title+" | "+t.job.company.name+" - "+t.job._id})}}},[t._v(t._s(t.job.contactPhone))]),a("br")],1):t._e(),t.job.contactEmail||t.job.applicationEmail?a("div",[t._v(" E-Mail: "),a("b-link",{attrs:{href:"mailto:"+(t.job.contactEmail||t.job.applicationEmail)+"?subject="+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(e){return t.$gtag.event("apply_email",{event_label:t.job.title+" | "+t.job.company.name+" - "+t.job._id})}}},[t._v(t._s(t.job.contactEmail||t.job.applicationEmail))])],1):t._e()])]):t._e(),a("div",{staticClass:"mt-4"},[a("h2",[t._v("Arbeitsort")]),a("p",[t._v(" "+t._s(t.job.company.name)+" "),a("br"),t._v(" "+t._s(t.job.company.street)+" "),a("br"),t._v(" "+t._s(t.job.company.zipCode+" "+t.job.company.location)+" "),a("br")]),t.job.company&&t.job.company.geoCodeLat&&t.job.company.geoCodeLng?a("HereMapSingleJob",{attrs:{job:t.job}}):t._e()],1),a("div",{staticClass:"d-flex flex-wrap flex-column flex-md-row align-items-center"},[a("StarJob",{staticClass:"ml-3 ml-md-0 mb-2",attrs:{jobId:t.job._id,position:"relative",padding:"0 20px 0 0",size:"2x"}}),a("FacebookShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{sharePath:t.$route.fullPath}}),a("WhatsAppShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{sharePath:t.$route.fullPath}}),a("TwitterShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{sharePath:t.$route.fullPath,title:t.job.title}}),a("EmailShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{sharePath:t.$route.fullPath,subject:t.job.title}})],1),a("JobStructuredData",{attrs:{job:t.job}})],1):t._e(),t.error?a("div",[a("p",{staticClass:"h5"},[t._v(" Diese Stellenanzeige scheint nicht mehr zu existieren. ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"outline-primary",to:"/jobboard"}},[t._v("Zurück zur Stellenübersicht")])],1):t._e(),t.error?a("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0 mt-3",staticStyle:{"z-index":"2000"},attrs:{show:"",dismissible:"",variant:"warning"}},[t._v("Oh, da ist leider etwas schief gelaufen oder die Stellenanzeige existiert nicht mehr.")]):t._e(),t.job.title?a("SimilarJobsContainer",{attrs:{jobs:t.$store.state.jobs.jobs,job:t.job,number:5}}):t._e(),t.job.title?a("Head",{attrs:{title:t.job.title,desc:t.job.title+" | "+t.job.company.name+" | "+t.job.company.location+", "+t.job.company.state,img:t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?t.job.imageUrl:t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?t.job.company.logoUrl:"/img/MfaMalAnders_NeuesStellenangebot_1200.jpg",twitterCard:t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?"summary_large_image":t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 small"},[a("p",[t._v(" Beziehe Dich in Deiner Bewerbung auf MFA mal anders. ")])])}],o=(a("99af"),a("96cf"),a("c964")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-5 px-0"},t._l(t.similarJobs,(function(t){return a("JobCard",{key:t.id,attrs:{job:t}})})),1)},s=[],c=(a("4de4"),a("fb6a"),a("d0ff")),l=a("f0fa"),b={name:"SimiarJobsContainer",props:["jobs","job","number"],components:{JobCard:l["a"]},computed:{similarJobs:function(){var t=this,e=Object(c["a"])(this.jobs);return this.job.company.geoCodeLat&&this.job.company.geoCodeLng?e=e.sort((function(e,a){return t.calcDistance(e.company.geoCodeLat,e.company.geoCodeLng,t.job.company.geoCodeLat,t.job.company.geoCodeLng)-t.calcDistance(a.company.geoCodeLat,a.company.geoCodeLng,t.job.company.geoCodeLat,t.job.company.geoCodeLng)})):(this.job.company.location||this.job.company.state)&&(e=e.filter((function(e){return e.company.location===t.location||e.company.state===t.state}))),this.job._id&&(e=e.filter((function(e){return e._id!=t.job._id}))),e.slice(0,this.number)}},methods:{calcDistance:function(t,e,a,n){var r=6371e3,o=t*Math.PI/180,i=a*Math.PI/180,s=(a-t)*Math.PI/180,c=(n-e)*Math.PI/180,l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(o)*Math.cos(i)*Math.sin(c/2)*Math.sin(c/2),b=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),p=r*b;return p}}},p=b,u=a("2877"),d=Object(u["a"])(p,i,s,!1,null,null,null),m=d.exports,h=a("1ba6"),f=a("7067"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},v=[],j=(a("a4d3"),a("e01a"),a("b0c0"),a("ac1f"),a("5319"),{name:"JobStructuredData",props:["job"],methods:{getEmploymentType:function(t){var e;switch(t){case"full":e='"FULL_TIME"';break;case"training":e='"FULL_TIME"';break;case"part":e='"PART_TIME"';break;case"part_full":e='["PART_TIME", "FULL_TIME"]';break;default:e=null;break}return e}},head:{script:function(){if(this.job.title)return[{type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"JobPosting",title:"".concat(this.job.title," | ").concat(this.job.company.location),description:this.$sanitize(this.job.description.replace(/"/g,"'"),{allowedTags:["h1","h2","h3","h4","h5","h6","p","strong","em","span","ul","ol","li","div"],transformTags:{h1:"p",h2:"p",h3:"p",h4:"p",h5:"p",h6:"p"}}),datePosted:new Date(this.job.updatedAt).toISOString(),hiringOrganization:{"@type":"Organization",name:this.job.company.name,sameAs:this.job.company.url,logo:this.job.company.logoUrl},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:this.job.company.street,addressLocality:this.job.company.location,addressRegion:this.job.company.state,postalCode:this.job.company.zipCode,addressCountry:this.job.company.country}},validThrough:new Date(this.job.applicationDeadline).toISOString(),employmentType:this.getEmploymentType(this.job.employmentType),baseSalary:{"@type":"MonetaryAmount",currency:"EUR",value:{"@type":"QuantitativeValue",minValue:this.job.salaryMin?parseInt(this.job.salaryMin):"",maxValue:this.job.salaryMax?parseInt(this.job.salaryMax):"",unitText:"MONTH"}}})}]}}}),y=j,_=Object(u["a"])(y,g,v,!1,null,null,null),w=_.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("div",{ref:"hereMap",staticClass:"map-container"})])},C=[],S=(a("d81d"),{name:"HereMapSingleJob",props:{job:Object},data:function(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=new window.H.service.Platform({apikey:t.apikey}),t.platform=a,t.initializeHereMap();case 3:case"end":return e.stop()}}),e)})))()},watch:{job:function(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},methods:{getGeoCode:function(t){var e;return t.company&&(e={lat:t.company.geoCodeLat,lng:t.company.geoCodeLng}),e},setMapMarker:function(t,e,a){var n=document.createElement("div");n.classList.add("icon-outer");var r=document.createElement("img");r.classList.add("icon-inner"),r.src=t.company.logoUrl||"/img/favicon.ico",n.appendChild(r);var o=new a.map.DomIcon(n);this.map.addObject(new window.H.map.DomMarker(e,{icon:o}))},deleteMarkers:function(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap:function(t){this.map.setCenter(t),this.map.setZoom(13)},initializeHereMap:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{a=t.getGeoCode(t.job),a&&(t.mapContainer=t.$refs.hereMap,t.H=window.H,t.maptypes=t.platform.createDefaultLayers({lg:t.$config.maps.lang}),t.map=new t.H.Map(t.mapContainer,t.maptypes.vector.normal.map,{zoom:13,center:a}),t.setMapMarker(t.job,a,t.H),addEventListener("resize",(function(){return t.map.getViewPort().resize()})),new t.H.mapevents.Behavior(new t.H.mapevents.MapEvents(t.map)),t.H.ui.UI.createDefault(t.map,t.maptypes))}catch(n){t.$root.$bvToast.toast("Die Karte konnten nicht geladen werden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!1})}case 1:case"end":return e.stop()}}),e)})))()}}}),E=S,k=Object(u["a"])(E,x,C,!1,null,null,null),$=k.exports,M=a("037e"),P=a("b13b"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"email-share-btn",attrs:{variant:"secondary",disabled:!t.$route.meta.public,href:"mailto:?subject="+t.subject+"&body=Stellenanzeige auf "+t.$config.website.name+": "+t.url+(t.sharePath?t.sharePath:""),target:"_blank","aria-label":"E-Mail"},on:{click:function(e){return t.$gtag.event("share",{method:"email",content_id:t.sharePath})}}},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fa","envelope"],size:"lg"}}),t._v(" E-Mail "),a("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},O=[],I={name:"EmailShareBtn",props:["sharePath","subject"],data:function(){return{url:window.location.origin}}},L=I,A=Object(u["a"])(L,z,O,!1,null,null,null),J=A.exports,T=a("1144"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:"secondary"}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),a("b-modal",{attrs:{id:"subscribe-newsletter-modal2","hide-footer":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{defaultState:t.state}})],1)],1)},F=[],U=a("e7ba"),B={name:"SubscribeNewsletterBtn",components:{NewsletterSignUpForm:U["a"]},props:["state"]},R=B,N=Object(u["a"])(R,D,F,!1,null,null,null),H=N.exports,G={name:"Job",components:{SimilarJobsContainer:m,HereMapSingleJob:$,JobStructuredData:w,FacebookShareBtn:M["a"],WhatsAppShareBtn:P["a"],EmailShareBtn:J,TwitterShareBtn:T["a"],SubscribeNewsletterBtn:H,StarJob:f["a"]},props:["apiJobsSchema"],data:function(){return{job:Object,error:null,employmentTypeOptions:h["f"],companySizeOptions:h["b"],snippet:[{type:"application/ld+json",inner:'{\n                        "@context": "http://schema.org",\n                        "@type" : "BreadcrumbList",\n                        "itemListElement": [\n                            {\n                                "@type": "ListItem",\n                                "position": 1,\n                                "name": "MFA mal anders",\n                                "item": "https://www.mfa-mal-anders.de"\n                            },\n                            {\n                                "@type": "ListItem",\n                                "position": 2,\n                                "name": "Stellenangebote",\n                                "item": "https://www.mfa-mal-anders.de/jobboard"\n                            },\n                            {\n                                "@type": "ListItem",\n                                "position": 3,\n                                "name": "Stellenangebot",\n                                "item": "https://www.mfa-mal-anders.de'.concat(this.$route.fullPath,'"\n                            }\n                        ]\n                    }')}]}},computed:{jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"private"===this.apiJobsSchema?"myJob":"publicJob"}},created:function(){this.getJob(this.$route.params.jobId)},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},methods:{getJob:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.$store.dispatch("setOverlay",!0),a.prev=1,a.next=4,e.$axios.get("/graphql",{params:{query:"\n                            query {\n                                ".concat(e.jobQuery,'(_id: "').concat(t,'") {\n                                    _id\n                                    createdAt\n                                    updatedAt\n                                    publishedAt\n                                    paidAt\n                                    paid\n                                    title\n                                    description\n                                    employmentType\n                                    applicationDeadline\n                                    simpleApplication\n                                    extJobUrl\n                                    applicationEmail\n                                    imageUrl\n                                    salaryMin\n                                    salaryMax\n                                    specialization\n                                    contactGender\n                                    contactTitle\n                                    contactFirstName\n                                    contactLastName\n                                    contactEmail\n                                    contactPhone\n                                    company {\n                                        name\n                                        street\n                                        location\n                                        zipCode\n                                        state\n                                        country\n                                        geoCodeLat\n                                        geoCodeLng\n                                        size\n                                        url\n                                        logoUrl\n                                    }\n                                }\n                            }\n                        ')}});case 4:if(n=a.sent,!n.data.data[e.jobQuery]){a.next=9;break}e.job=n.data.data[e.jobQuery],a.next=11;break;case 9:throw e.$router.push("/jobboard"),new Error;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](1),e.$root.$bvToast.toast("Beim Laden der Stellenanzeige ist leider ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite aktualisierst.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 16:e.$store.dispatch("setOverlay",!1);case 17:case"end":return a.stop()}}),a,null,[[1,13]])})))()}}},V=G,q=Object(u["a"])(V,n,r,!1,null,null,null);e["a"]=q.exports},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,s=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,b=void 0!==/()??/.exec("")[1],p=c||b||l;p&&(s=function(t){var e,a,r,s,p=this,u=l&&p.sticky,d=n.call(p),m=p.source,h=0,f=t;return u&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),f=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(m="(?: "+m+")",f=" "+f,h++),a=new RegExp("^(?:"+m+")",d)),b&&(a=new RegExp("^"+m+"$(?!\\s)",d)),c&&(e=p.lastIndex),r=o.call(u?a:p,f),u?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=p.lastIndex,p.lastIndex+=r[0].length):p.lastIndex=0:c&&r&&(p.lastIndex=p.global?r.index+r[0].length:e),b&&r&&r.length>1&&i.call(r[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=s},"9e5b":function(t,e,a){},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},b13b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"whatsapp-share-btn",attrs:{disabled:!t.$route.meta.public,href:"https://wa.me/send?text="+t.url+(t.sharePath?t.sharePath:t.$route.fullPath),target:"_blank","aria-label":"WhatsApp"},on:{click:function(e){return t.$gtag.event("share",{method:"whatsapp",content_id:t.sharePath?t.sharePath:t.$route.fullPath})}}},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fab","whatsapp"],size:"lg"}}),t._v(" WhatsApp "),a("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},r=[],o={name:"WhatsAppShareBtn",props:["sharePath"],data:function(){return{url:window.location.origin}}},i=o,s=(a("01f5"),a("2877")),c=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports},c26e:function(t,e,a){"use strict";a("9e5b")},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),o=a("b622"),i=a("9263"),s=a("9112"),c=o("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),b=function(){return"$0"==="a".replace(/./,"$0")}(),p=o("replace"),u=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,p){var m=o(t),h=!r((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),f=h&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return e=!0,null},a[m](""),!e}));if(!h||!f||"replace"===t&&(!l||!b||u)||"split"===t&&!d){var g=/./[m],v=a(m,""[t],(function(t,e,a,n,r){return e.exec===i?h&&!r?{done:!0,value:g.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:b,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:u}),j=v[0],y=v[1];n(String.prototype,t,j),n(RegExp.prototype,m,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}p&&s(RegExp.prototype[m],"sham",!0)}},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,o=a("1dde"),i=a("ae40"),s=o("map"),c=i("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),o=a("56ef"),i=a("fc6a"),s=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=i(t),r=s.f,l=o(n),b={},p=0;while(l.length>p)a=r(n,e=l[p++]),void 0!==a&&c(b,e,a);return b}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),o=a("fc6a"),i=a("06cf").f,s=a("83ab"),c=r((function(){i(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},f0fa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.job?n("div",{staticClass:"jobcard"},[t.disabled?n("div",{staticClass:"disabled-jobcard d-flex justify-content-center align-items-center"},[n("span",{staticClass:"h2 bold text-danger"},[t._v("Abgelaufen")])]):t._e(),n("b-link",{attrs:{to:"/jobboard/job/"+t.job._id}},[n("b-card",{staticClass:"mb-3 mt-3 mt-lg-0",attrs:{"no-body":""}},[n("b-card-text",[n("div",{staticClass:"card-head position-relative"},[n("h2",{class:t.job.company.logoUrl?"mobile-max-width-75 h4":"h4"},[t._v(" "+t._s(t.job.title)+" ")]),n("StarJob",{attrs:{jobId:t.job._id}}),t.job.company.logoUrl?n("div",{staticClass:"img-container"},[n("b-img-lazy",{attrs:{src:t.job.company.logoUrl,"blank-src":a("c4fd"),alt:"Logo - "+t.job.company.name}})],1):t._e()],1),n("div",{staticClass:"card-content"},[n("div",{domProps:{innerHTML:t._s(t.$sanitize(t.job.description,{allowedTags:[],textFilter:function(t,e){return" "+t}}).substring(0,200)+"...")}})]),n("hr"),n("div",{staticClass:"card-foot"},[n("div",[n("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}}),t._v(" "+t._s(t.job.company.state!=t.job.company.location?t.job.company.location+", "+t.job.company.state:t.job.company.location)+" ")],1),n("div",[n("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}}),t._v(" "+t._s(t.job.company.name)+" ")],1),n("div",[n("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}}),t._v(" "+t._s(t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text)+" ")],1),n("div",[n("Fa",{staticClass:"mr-2",attrs:{icon:["fas","calendar-alt"],size:"lg"}}),t._v(" Veröffentlicht: "+t._s(new Date(parseInt(t.job.publishedAt||t.job.paidAt)).toLocaleDateString())+" ")],1),t.job.salaryMin||t.job.salaryMax?n("div",[n("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}}),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")],1):t._e(),t.job.specialization&&"null"!=t.job.specialization?n("div",[n("Fa",{staticClass:"mr-2",attrs:{icon:"briefcase-medical",size:"lg"}}),t._v(" "+t._s(t.job.specialization)+" ")],1):t._e(),t.job.simpleApplication?n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.hover",modifiers:{bottom:!0,hover:!0}}],attrs:{title:"Lebenslauf genügt für Bewerbung"}},[n("b-badge",{attrs:{pill:"",variant:"secondary"}},[n("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),t._v("Einfach bewerben")],1)],1):t._e()])])],1)],1)],1):t._e()},r=[],o=a("1ba6"),i=a("7067"),s={name:"JobCard",props:["job"],components:{StarJob:i["a"]},data:function(){return{employmentTypeOptions:o["f"],companySizeOptions:o["b"]}},computed:{disabled:function(){return new Date(this.job.applicationDeadline)<new Date||"published"!=this.job.status||this.job.paidExpiresAt<new Date}}},c=s,l=a("2877"),b=Object(l["a"])(c,n,r,!1,null,null,null);e["a"]=b.exports},f3f3:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");var n=a("fc11");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},fc11:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=admin~jobboard~user.6fd704b8.js.map