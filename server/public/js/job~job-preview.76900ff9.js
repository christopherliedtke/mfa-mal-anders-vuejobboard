(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job~job-preview"],{"1b8d":function(t,e,a){},"1d53":function(t,e,a){"use strict";a("1b8d")},"410b":function(t,e,a){},5319:function(t,e,a){"use strict";var o=a("d784"),n=a("825a"),i=a("7b0b"),r=a("50c4"),s=a("a691"),c=a("1d80"),l=a("8aa5"),b=a("14c3"),p=Math.max,m=Math.min,d=Math.floor,u=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};o("replace",2,(function(t,e,a,o){var f=o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,j=o.REPLACE_KEEPS_$0,v=f?"$":"$0";return[function(a,o){var n=c(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,o):e.call(String(n),a,o)},function(t,o){if(!f&&j||"string"===typeof o&&-1===o.indexOf(v)){var i=a(e,t,this,o);if(i.done)return i.value}var c=n(t),d=String(this),u="function"===typeof o;u||(o=String(o));var h=c.global;if(h){var _=c.unicode;c.lastIndex=0}var C=[];while(1){var w=b(c,d);if(null===w)break;if(C.push(w),!h)break;var S=String(w[0]);""===S&&(c.lastIndex=l(d,r(c.lastIndex),_))}for(var x="",M=0,k=0;k<C.length;k++){w=C[k];for(var z=String(w[0]),E=p(m(s(w.index),d.length),0),$=[],O=1;O<w.length;O++)$.push(g(w[O]));var T=w.groups;if(u){var J=[z].concat($,E,d);void 0!==T&&J.push(T);var A=String(o.apply(void 0,J))}else A=y(z,d,E,$,T,o);E>=M&&(x+=d.slice(M,E)+A,M=E+z.length)}return x+d.slice(M)}];function y(t,a,o,n,r,s){var c=o+t.length,l=n.length,b=h;return void 0!==r&&(r=i(r),b=u),e.call(s,b,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,o);case"'":return a.slice(c);case"<":s=r[i.slice(1,-1)];break;default:var b=+i;if(0===b)return e;if(b>l){var p=d(b/10);return 0===p?e:p<=l?void 0===n[p-1]?i.charAt(1):n[p-1]+i.charAt(1):e}s=n[b-1]}return void 0===s?"":s}))}}))},7067:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"star text-secondary",style:"padding: "+t.padding+"; position: "+t.position,on:{click:function(e){return e.preventDefault(),t.toggleStar(e)}}},[t.active?o("Fa",{attrs:{icon:["fas","star"],size:t.size}}):o("Fa",{attrs:{icon:["far","star"],size:t.size}}),o("BModal",{attrs:{id:"register-modal-"+t.jobId,"content-class":"border-0","body-class":"shadow1 border-radius1","no-close-on-backdrop":"","no-close-on-esc":"","hide-footer":"","hide-header":"",centered:"",visible:t.modalVisible}},[o("span",{staticClass:"position-absolute",staticStyle:{right:"15px",top:"15px",cursor:"pointer"},on:{click:function(e){t.modalVisible=!1}}},[o("Fa",{attrs:{icon:"times"}})],1),o("div",{staticClass:"py-2 px-3 "},[o("h2",{staticClass:"h4 mb-4 bold"},[t._v("Für später speichern?")]),o("div",{staticClass:"clearfix mb-3"},[o("b-img",{staticClass:"mr-4 mb-2",staticStyle:{"max-width":"150px"},attrs:{fluid:"",left:"",src:a("7734")}}),o("p",[t._v(" Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu bewerben. Registriere Dich dazu jetzt ganz einfach. ")])],1),o("b-button",{attrs:{to:"/auth/register?role=employee",block:"",variant:"secondary"}},[t._v("Jetzt registrieren")])],1)])],1)},n=[],i=(a("45fc"),a("96cf"),a("c964")),r=a("2b0e"),s=a("6aac");r["default"].component("BModal",s["a"]);var c={name:"StarJob",props:{jobId:{type:String,default:""},padding:{type:String,default:"8px"},position:{type:String,default:"absolute"},size:{type:String,default:"sm"}},data:function(){return{active:!1,modalVisible:!1}},watch:{"$store.state.starredJobs.starredJobs":function(){this.checkStarredJobs()}},mounted:function(){this.checkStarredJobs()},methods:{checkStarredJobs:function(){var t=this;this.$store.state.auth.loggedIn&&this.$store.state.starredJobs.starredJobs.some((function(e){return e.job._id===t.jobId}))?this.active=!0:this.active=!1},toggleStar:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$store.state.auth.loggedIn){e.next=3;break}return t.modalVisible=!0,e.abrupt("return");case 3:if(t.active){e.next=11;break}return t.active=!0,e.next=7,t.$store.dispatch("addStarredJob",t.jobId);case 7:t.$gtag.event("add_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","add_starred_job",t.jobId),e.next=16;break;case 11:return t.active=!1,e.next=14,t.$store.dispatch("deleteStarredJob",t.jobId);case 14:t.$gtag.event("delete_starred_job",{event_label:t.jobId}),t.$matomo&&t.$matomo.trackEvent("engagement","delete_starred_job",t.jobId);case 16:case"end":return e.stop()}}),e)})))()}}},l=c,b=(a("ede6"),a("2877")),p=Object(b["a"])(l,o,n,!1,null,"43318a33",null);e["a"]=p.exports},7734:function(t,e,a){t.exports=a.p+"img/starredJobs.15f8095f.svg"},8890:function(t,e,a){"use strict";a("410b")},"890f":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.job.title?a("div",{staticClass:"job position-relative"},[a("div",{staticClass:"mb-4 d-flex align-items-start justify-content-between"},[a("div",[a("h1",[t._v(t._s(t.job.title))]),a("span",{staticClass:"lead text-muted"},[t._v(t._s(t.job.company.name)+" | "+t._s(t.job.company.location)+t._s(t.job.company.state!=t.job.company.location?", "+t.job.company.state:""))])]),t.job.company&&t.job.company.logoUrl?a("div",{staticClass:"d-none d-sm-flex logo-container mx-2"},[a("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e()]),a("hr"),a("div",[a("div",{staticClass:"d-flex flex-lg-nowrap justify-content-between align-items-start"},[t.job.company&&t.job.company.logoUrl?a("div",{staticClass:"d-sm-none logo-container mr-1 ml-2 ml-sm-0 mr-sm-4 mb-3 mb-lg-0 order-2 order-sm-1"},[a("b-img",{staticClass:"logo",attrs:{src:t.job.company.logoUrl,alt:"Logo - "+t.job.company.name}})],1):t._e(),a("div",{staticClass:"head flex-column flex-sm-row order-1 order-sm-2"},[a("div",[a("div",{staticClass:"icon"},[a("Fa",{attrs:{icon:["fas","briefcase"],size:"lg"}})],1),t._v(" "+t._s(t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text)+" ")]),a("div",[a("div",{staticClass:"icon"},[a("Fa",{attrs:{icon:["fas","users"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.size)+" ")]),t.job.salaryMin||t.job.salaryMax?a("div",[a("div",{staticClass:"icon"},[a("Fa",{attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}})],1),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]):t._e(),t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("Fa",{attrs:{icon:"syringe",size:"lg"}})],1),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),a("div",[a("div",{staticClass:"icon"},[a("Fa",{attrs:{icon:["fas","clock"],size:"lg"}})],1),t._v(" "+t._s(t.job.paid?t.timeSince(new Date(parseInt(t.job.publishedAt||t.job.paidAt))):"-")+" ")]),t.job.applicationDeadline?a("div",{class:new Date(t.job.applicationDeadline)<new Date?"text-danger":""},[a("div",{staticClass:"icon"},[a("Fa",{attrs:{icon:["fas","calendar-times"],size:"lg"}})],1),t._v(" bis "+t._s(new Date(t.job.applicationDeadline).toLocaleDateString())+" ")]):t._e(),t.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("BBadge",{staticStyle:{cursor:"pointer"},attrs:{pill:"",variant:"secondary"}},[a("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),t._v(" Einfach bewerben")],1)],1):t._e(),t.job.simpleApplication?a("BTooltip",{attrs:{target:"tooltip-simple-application",title:"Lebenslauf genügt für Bewerbung",triggers:"hover",placement:"bottom"}}):t._e()],1)])]),a("hr"),a("div",{staticClass:"position-relative d-flex align-items-center my-4"},[a("StarJob",{attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:"2x"}}),a("SubscribeNewsletterBtn",{attrs:{state:t.job.company.state}}),t.$store.state.auth.user.isAdmin?a("div",{staticClass:"border-radius1 bg-light-shade ml-3 py-2 px-3"},[a("Fa",{staticClass:"text-info",staticStyle:{cursor:"pointer"},attrs:{icon:"share-alt",size:"lg"},on:{click:function(e){return t.socialShareToClipBoard(t.job)}}}),a("b-link",{attrs:{to:"/admin/jobs/edit/"+t.job._id}},[a("Fa",{staticClass:"text-info ml-3",staticStyle:{cursor:"pointer"},attrs:{icon:"edit",size:"lg"}})],1),a("b-link",{attrs:{href:"https://developers.facebook.com/tools/debug/?q=https://www.mfa-mal-anders.de/stellenangebote/job/"+t.job._id,target:"_blank"}},[a("Fa",{staticClass:"text-info ml-3",staticStyle:{cursor:"pointer"},attrs:{icon:["fab","facebook-square"],size:"lg"}})],1)],1):t._e()],1),t.job.imageUrl?a("div",{staticClass:"position-relative border-radius1 mx-auto mt-3",staticStyle:{overflow:"hidden"}},[a("b-img",{staticClass:"blur position-absolute w-100",staticStyle:{"object-fit":"fill","z-index":"-1"},attrs:{fluid:"",center:"",src:t.job.imageUrl}}),a("b-img",{staticClass:"title-img",staticStyle:{"max-height":"35vh"},attrs:{src:t.job.imageUrl,fluid:"",center:"",alt:"Image - "+(t.job.company&&t.job.company.name)}})],1):t._e(),a("div",{staticClass:"mt-4",domProps:{innerHTML:t._s(t.job.description)}}),t.job.company.url?a("div",{staticClass:"mt-3"},[a("b-link",{ref:"nofollow",attrs:{href:t.job.company.url,target:"_blank"},on:{click:function(e){return t.track("apply_visit_hp",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[a("strong",[t._v("Besuchen Sie unsere Homepage "),a("Fa",{staticStyle:{position:"relative",top:"-5px"},attrs:{icon:"external-link-alt",size:"sm"}})],1)])],1):t._e(),t._m(0),a("div",{staticClass:"mt-4"},[a("b-button",{attrs:{size:"lg",variant:t.job.simpleApplication?"secondary":"primary",href:t.job.extJobUrl||"mailto:"+t.job.applicationEmail+"?subject=Bewerbung - "+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(e){return t.track("apply_now",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v("Jetzt "+t._s(t.job.simpleApplication?"nur mit Lebenslauf":"")+" bewerben")])],1),a("div",{staticClass:"my-3"},[a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/stellenangebote"}},[t._v("Zurück zur Stellenbörse")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/mfa/gehalt"}},[t._v("Gehaltsrechner")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"outline-primary",size:"sm",to:"/karriere/bewerbungstipps"}},[t._v("Bewerbungsvorlage")])],1),t.job.contactLastName||t.job.contactEmail||t.job.contactPhone||t.job.applicationEmail?a("div",{staticClass:"mt-4"},[a("h2",[t._v("Kontakt für Bewerbungen")]),a("div",{staticClass:"mb-3"},[t.job.contactLastName?a("div",[t._v(" "+t._s("null"!=t.job.contactGender?t.job.contactGender+" ":"")+" "+t._s("null"!=t.job.contactTitle?t.job.contactTitle+" ":"")+" "+t._s(t.job.contactFirstName+" "+t.job.contactLastName)+" "),a("br")]):t._e(),t.job.contactPhone?a("div",[t._v(" Telefon: "),a("b-link",{attrs:{href:"tel:"+t.job.contactPhone,target:"_blank"},on:{click:function(e){return t.track("apply_phone",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactPhone))]),a("br")],1):t._e(),t.job.contactEmail||t.job.applicationEmail?a("div",[t._v(" E-Mail: "),a("b-link",{attrs:{href:"mailto:"+(t.job.contactEmail||t.job.applicationEmail)+"?subject="+t.job.title+" über "+t.$config.website.name,target:"_blank"},on:{click:function(e){return t.track("apply_email",t.job.title+" | "+t.job.company.name+" - "+t.job._id)}}},[t._v(t._s(t.job.contactEmail||t.job.applicationEmail))])],1):t._e()])]):t._e(),a("div",{staticClass:"mt-4"},[a("h2",[t._v("Arbeitsort")]),a("p",[t._v(" "+t._s(t.job.company.name)+" "),a("br"),t._v(" "+t._s(t.job.company.street)+" "),a("br"),t._v(" "+t._s(t.job.company.zipCode+" "+t.job.company.location)+" "),a("br")]),t.job.company&&t.job.company.geoCodeLat&&t.job.company.geoCodeLng?a("HereMapSingleJob",{attrs:{job:t.job}}):t._e()],1),a("div",{staticClass:"d-flex flex-wrap flex-column flex-md-row align-items-center"},[a("StarJob",{staticClass:"ml-3 ml-md-0 mb-2",attrs:{"job-id":t.job._id,position:"relative",padding:"0 20px 0 0",size:"2x"}}),a("FacebookShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),a("WhatsAppShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath}}),a("TwitterShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,title:t.job.title}}),a("EmailShareBtn",{staticClass:"mr-0 mr-md-2 mb-2",attrs:{"share-path":t.$route.fullPath,subject:t.job.title}})],1),a("JobStructuredData",{attrs:{job:t.job}})],1):t._e(),t.error?a("div",[a("p",{staticClass:"h5"},[t._v(" Diese Stellenanzeige scheint nicht mehr zu existieren. ")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"outline-primary",to:"/stellenangebote"}},[t._v("Zurück zur Stellenübersicht")])],1):t._e(),t.error?a("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0 mt-3",staticStyle:{"z-index":"2000"},attrs:{show:"",dismissible:"",variant:"warning"}},[t._v("Oh, da ist leider etwas schief gelaufen oder die Stellenanzeige existiert nicht mehr.")]):t._e(),t.job.title?a("SimilarJobsContainer",{attrs:{jobs:t.$store.state.jobs.jobs,job:t.job,number:5}}):t._e(),t.job.title?a("Head",{attrs:{title:t.job.title+" | "+t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text+" | "+t.job.company.location,desc:"Stellenangebot – "+t.job.title+" | "+t.job.company.name+" | "+t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text+" | "+t.job.company.location+(t.job.company.state!=t.job.company.location?", "+t.job.company.state:""),img:t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?t.job.imageUrl:t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?t.job.company.logoUrl:"ZFA"===t.job.profession?"/img/MfaMalAnders_NeuesStellenangebot_ZFA_1200.jpg":"/img/MfaMalAnders_NeuesStellenangebot_MFA_1200.jpg","twitter-card":t.job.imageUrl&&!t.job.imageUrl.includes(".svg")?"summary_large_image":t.job.company.logoUrl&&!t.job.company.logoUrl.includes(".svg")?"summary":"summary_large_image",script:t.snippet}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 small"},[a("p",[t._v(" Beziehe Dich in Deiner Bewerbung auf MFA mal anders. ")])])}],i=(a("99af"),a("ac1f"),a("5319"),a("96cf"),a("c964")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-5 px-0"},t._l(t.similarJobs,(function(t){return a("JobCard",{key:t.id,attrs:{job:t}})})),1)},s=[],c=(a("4de4"),a("fb6a"),a("a9e3"),a("d0ff")),l=a("f0fa"),b={name:"SimiarJobsContainer",components:{JobCard:l["a"]},props:{jobs:{type:Array,default:function(){return[]}},job:{type:Object,default:function(){}},number:{type:Number,default:5}},computed:{similarJobs:function(){var t=this,e=Object(c["a"])(this.jobs);return this.job.company.geoCodeLat&&this.job.company.geoCodeLng?e=e.sort((function(e,a){return t.calcDistance(e.company.geoCodeLat,e.company.geoCodeLng,t.job.company.geoCodeLat,t.job.company.geoCodeLng)-t.calcDistance(a.company.geoCodeLat,a.company.geoCodeLng,t.job.company.geoCodeLat,t.job.company.geoCodeLng)})):(this.job.company.location||this.job.company.state)&&(e=e.filter((function(e){return e.company.location===t.location||e.company.state===t.state}))),this.job._id&&(e=e.filter((function(e){return e._id!=t.job._id}))),e.slice(0,this.number)}},methods:{calcDistance:function(t,e,a,o){var n=6371e3,i=t*Math.PI/180,r=a*Math.PI/180,s=(a-t)*Math.PI/180,c=(o-e)*Math.PI/180,l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(i)*Math.cos(r)*Math.sin(c/2)*Math.sin(c/2),b=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),p=n*b;return p}}},p=b,m=a("2877"),d=Object(m["a"])(p,r,s,!1,null,null,null),u=d.exports,h=a("1ba6"),g=a("7067"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},j=[],v=(a("a4d3"),a("e01a"),a("b0c0"),{name:"JobStructuredData",props:{job:{type:Object,default:function(){}}},head:{script:function(){if(this.job.title)return[{type:"application/ld+json",inner:JSON.stringify({"@context":"http://schema.org","@type":"JobPosting",title:"".concat(this.job.title," | ").concat(this.job.company.location),description:this.job.description.replace(/"/g,"'").replace(/h1|h2|h3|h4|h5|h6/g,"p"),datePosted:new Date(this.job.updatedAt).toISOString(),hiringOrganization:{"@type":"Organization",name:this.job.company.name,sameAs:this.job.company.url,logo:this.job.company.logoUrl},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:this.job.company.street,addressLocality:this.job.company.location,addressRegion:this.job.company.state,postalCode:this.job.company.zipCode,addressCountry:this.job.company.country}},validThrough:this.job.applicationDeadline?new Date(this.job.applicationDeadline).toISOString():new Date(this.job.paidExpiresAt).toISOString(),employmentType:this.getEmploymentType(this.job.employmentType),baseSalary:{"@type":"MonetaryAmount",currency:"EUR",value:{"@type":"QuantitativeValue",value:"",minValue:this.job.salaryMin?parseInt(this.job.salaryMin):"",maxValue:this.job.salaryMax?parseInt(this.job.salaryMax):"",unitText:"MONTH"}}})}]}},methods:{getEmploymentType:function(t){var e;switch(t){case"full":e='"FULL_TIME"';break;case"training":e='"FULL_TIME"';break;case"part":e='"PART_TIME"';break;case"mini":e='"PART_TIME"';break;case"part_full":e='["PART_TIME", "FULL_TIME"]';break;default:e=null;break}return e}}}),y=v,_=Object(m["a"])(y,f,j,!1,null,null,null),C=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("div",{ref:"hereMap",staticClass:"map-container"})])},S=[],x=(a("d81d"),a("d3b7"),a("3ca3"),a("ddb0"),{name:"HereMapSingleJob",props:{job:{type:Object,default:function(){}}},data:function(){return{platform:null,apikey:"n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",mapContainer:null,map:null,mapTypes:null,H:null}},watch:{job:function(){this.deleteMarkers(),this.setMapMarker(this.job,this.getGeoCode(this.job),this.H),this.moveMap(this.getGeoCode(this.job))}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");case 3:return e.next=5,Promise.all([t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),t.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")]);case 5:a=new window.H.service.Platform({apikey:t.apikey}),t.platform=a,t.initializeHereMap(),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()},methods:{getGeoCode:function(t){var e;return t.company&&(e={lat:t.company.geoCodeLat,lng:t.company.geoCodeLng}),e},setMapMarker:function(t,e,a){var o=document.createElement("div");o.classList.add("icon-outer");var n=document.createElement("img");n.classList.add("icon-inner"),n.src=t.company.logoUrl||"/img/favicon.ico",o.appendChild(n);var i=new a.map.DomIcon(o);this.map.addObject(new window.H.map.DomMarker(e,{icon:i}))},deleteMarkers:function(){this.map&&this.map.removeObjects(this.map.getObjects())},moveMap:function(t){this.map.setCenter(t),this.map.setZoom(13)},initializeHereMap:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{a=t.getGeoCode(t.job),a&&(t.mapContainer=t.$refs.hereMap,t.H=window.H,t.maptypes=t.platform.createDefaultLayers({lg:t.$config.maps.lang}),t.map=new t.H.Map(t.mapContainer,t.maptypes.vector.normal.map,{zoom:13,center:a}),t.setMapMarker(t.job,a,t.H),addEventListener("resize",(function(){return t.map.getViewPort().resize()})),new t.H.mapevents.Behavior(new t.H.mapevents.MapEvents(t.map)),t.H.ui.UI.createDefault(t.map,t.maptypes))}catch(o){t.$root.$bvToast.toast("Die Karte konnten nicht geladen werden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!1})}case 1:case"end":return e.stop()}}),e)})))()}}}),M=x,k=Object(m["a"])(M,w,S,!1,null,null,null),z=k.exports,E=a("037e"),$=a("b13b"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button",{staticClass:"email-share-btn",attrs:{variant:"secondary",disabled:!t.$route.meta.public,href:"mailto:?subject="+t.subject+"&body=Stellenanzeige auf "+t.$config.website.name+": "+t.url+(t.sharePath?t.sharePath:""),target:"_blank","aria-label":"E-Mail"},on:{click:function(e){return t.track("share","email",t.sharePath)}}},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fa","envelope"],size:"lg"}}),t._v(" E-Mail "),a("Fa",{staticClass:"ml-2",attrs:{icon:"share-alt"}})],1)},T=[],J={name:"EmailShareBtn",props:{sharePath:{type:String,default:""},subject:{type:String,default:""}},data:function(){return{url:window.location.origin}},methods:{track:function(t,e,a){this.$gtag.event(t,{method:e,content_id:a}),this.$matomo&&this.$matomo.trackEvent("engagement",t,"method: ".concat(e,"; path: ").concat(a))}}},A=J,B=Object(m["a"])(A,O,T,!1,null,null,null),L=B.exports,I=a("1144"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.subscribe-newsletter-modal2",modifiers:{"subscribe-newsletter-modal2":!0}}],attrs:{variant:"secondary"}},[t._v(" "+t._s(t.state?"Abonniere Jobs für "+t.state:"Abonniere den Job Newsletter"))]),a("BModal",{attrs:{id:"subscribe-newsletter-modal2","hide-footer":"",centered:""}},[a("NewsletterSignUpForm",{staticClass:"p-3",attrs:{"default-state":t.state}})],1)],1)},F=[],U=a("2b0e"),P=a("6aac"),N=a("e6c7"),H=a("e7ba");U["default"].component("BModal",P["a"]),U["default"].directive("b-modal",N["a"]);var R={name:"SubscribeNewsletterBtn",components:{NewsletterSignUpForm:H["a"]},props:{state:{type:String,default:""}}},G=R,q=Object(m["a"])(G,D,F,!1,null,null,null),V=q.exports,Q=a("b4ae"),W=a("e98b");U["default"].component("BTooltip",Q["a"]),U["default"].component("BBadge",W["a"]);var Z={name:"Job",components:{SimilarJobsContainer:u,HereMapSingleJob:z,JobStructuredData:C,FacebookShareBtn:E["a"],WhatsAppShareBtn:$["a"],EmailShareBtn:L,TwitterShareBtn:I["a"],SubscribeNewsletterBtn:V,StarJob:g["a"]},props:{apiJobsSchema:{type:String,default:"private"}},data:function(){return{job:Object,error:null,employmentTypeOptions:h["f"],companySizeOptions:h["b"],snippet:[{type:"application/ld+json",inner:'{\n                          "@context": "http://schema.org",\n                          "@type" : "BreadcrumbList",\n                          "itemListElement": [\n                              {\n                                  "@type": "ListItem",\n                                  "position": 1,\n                                  "name": "MFA mal anders",\n                                  "item": "https://www.mfa-mal-anders.de"\n                              },\n                              {\n                                  "@type": "ListItem",\n                                  "position": 2,\n                                  "name": "Stellenangebote",\n                                  "item": "https://www.mfa-mal-anders.de/stellenangebote"\n                              },\n                              {\n                                  "@type": "ListItem",\n                                  "position": 3,\n                                  "name": "Stellenangebot",\n                                  "item": "https://www.mfa-mal-anders.de'.concat(this.$route.fullPath,'"\n                              }\n                          ]\n                      }')}]}},computed:{jobQuery:function(){return"admin"===this.apiJobsSchema?"adminJob":"private"===this.apiJobsSchema?"myJob":"publicJob"}},watch:{"$route.params.jobId":function(){this.getJob(this.$route.params.jobId)}},created:function(){this.getJob(this.$route.params.jobId)},methods:{getJob:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.$store.dispatch("setOverlay",!0),a.prev=1,a.next=4,e.$axios.get("/graphql",{params:{query:"\n                              query {\n                                  ".concat(e.jobQuery,'(_id: "').concat(t,'") {\n                                      _id\n                                      createdAt\n                                      updatedAt\n                                      publishedAt\n                                      paidAt\n                                      paid\n                                      paidExpiresAt\n                                      title\n                                      description\n                                      profession\n                                      employmentType\n                                      applicationDeadline\n                                      simpleApplication\n                                      extJobUrl\n                                      applicationEmail\n                                      imageUrl\n                                      salaryMin\n                                      salaryMax\n                                      specialization\n                                      contactGender\n                                      contactTitle\n                                      contactFirstName\n                                      contactLastName\n                                      contactEmail\n                                      contactPhone\n                                      company {\n                                          name\n                                          street\n                                          location\n                                          zipCode\n                                          state\n                                          country\n                                          geoCodeLat\n                                          geoCodeLng\n                                          size\n                                          url\n                                          logoUrl\n                                      }\n                                  }\n                              }\n                          ')}});case 4:if(o=a.sent,!o.data.data[e.jobQuery]){a.next=9;break}e.job=o.data.data[e.jobQuery],a.next=11;break;case 9:throw e.$router.push("/stellenangebote"),new Error;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](1),e.$root.$bvToast.toast("Die Stellenanzeige ist nicht mehr verfügbar bzw. bereits abgelaufen.",{title:"Stellenanzeige nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 16:e.$store.dispatch("setOverlay",!1);case 17:case"end":return a.stop()}}),a,null,[[1,13]])})))()},track:function(t,e){this.$gtag.event(t,{event_label:e}),this.$matomo&&this.$matomo.trackEvent("engagement",t,e)},socialShareToClipBoard:function(t){var e=document.createElement("textarea");e.value="".concat(t.title," | ").concat(t.company.location,"\n\n").concat(this.$config.website.url,"/stellenangebote/job/").concat(t._id,"\n\n#mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #").concat(t.company.location.replace("-","").replace(/\s/g,"").toLowerCase(),"jobs #").concat(t.company.location.replace("-","").replace(/\s/g,"").toLowerCase()),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},timeSince:function(t){var e=Math.floor((new Date-t)/1e3),a=e/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=e/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=e/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},K=Z,Y=(a("1d53"),Object(m["a"])(K,o,n,!1,null,"0d3f4778",null));e["a"]=Y.exports},"9e54":function(t,e,a){},e6c7:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var o=a("01e7"),n=a("906c"),i=a("6b77"),r=a("7b1e"),s=a("d82f"),c="bv::show::modal",l="__bv_modal_directive__",b=function(t){var e=t.modifiers,a=void 0===e?{}:e,o=t.arg,n=t.value;return Object(r["j"])(n)?n:Object(r["j"])(o)?o:Object(s["l"])(a).reverse()[0]},p=function(t){return t&&Object(n["u"])(t,".dropdown-menu > li, li.nav-item")&&Object(n["A"])("a, button",t)||t},m=function(t){t&&"BUTTON"!==t.tagName&&(Object(n["n"])(t,"role")||Object(n["C"])(t,"role","button"),"A"===t.tagName||Object(n["n"])(t,"tabindex")||Object(n["C"])(t,"tabindex","0"))},d=function(t,e,a){var r=b(e),s=p(t);if(r&&s){var d=function(t){var e=t.currentTarget;if(!Object(n["q"])(e)){var i=t.type,s=t.keyCode;"click"!==i&&("keydown"!==i||s!==o["a"].ENTER&&s!==o["a"].SPACE)||a.context.$root.$emit(c,r,e)}};t[l]={handler:d,target:r,trigger:s},m(s),Object(i["d"])(s,"click",d,i["b"]),"BUTTON"!==s.tagName&&"button"===Object(n["h"])(s,"role")&&Object(i["d"])(s,"keydown",d,i["b"])}},u=function(t){var e=t[l]||{},a=e.trigger,o=e.handler;a&&o&&(Object(i["c"])(a,"click",o,i["b"]),Object(i["c"])(a,"keydown",o,i["b"]),Object(i["c"])(t,"click",o,i["b"]),Object(i["c"])(t,"keydown",o,i["b"])),delete t[l]},h=function(t,e,a){var o=t[l]||{},n=b(e),i=p(t);n===o.target&&i===o.trigger||(u(t,e,a),d(t,e,a)),m(i)},g=function(){},f={inserted:h,updated:g,componentUpdated:h,unbind:u}},ede6:function(t,e,a){"use strict";a("9e54")},f0fa:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.job?a("div",{staticClass:"jobcard"},[t.disabled?a("div",{staticClass:"disabled-jobcard d-flex justify-content-center align-items-center"},[a("span",{staticClass:"h2 bold text-danger"},[t._v("Abgelaufen")])]):t._e(),a("b-link",{attrs:{to:"/stellenangebote/job/"+t.job._id}},[a("BCard",{staticClass:"mb-3 mt-3 mt-lg-0",attrs:{"no-body":""}},[a("BCardText",[a("div",{staticClass:"card-head position-relative"},[a("h2",{class:t.job.company.logoUrl?"mobile-max-width-75 h4":"h4"},[t._v(" "+t._s(t.job.title)+" ")]),a("StarJob",{attrs:{"job-id":t.job._id}}),t.job.company.logoUrl?a("div",{staticClass:"img-container"},[a("b-img-lazy",{attrs:{src:t.job.company.logoUrl,"blank-src":"/img/MfaMalAnders_logo_circle_dark.svg",alt:"Logo - "+t.job.company.name}})],1):t._e()],1),a("div",{staticClass:"card-content"},[a("div",{domProps:{innerHTML:t._s(t.job.description.replace(/<[^>]+>/g," ").substring(0,200)+"...")}})]),a("hr"),a("div",{staticClass:"card-foot"},[a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","map-marker"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.state!=t.job.company.location?t.job.company.location+", "+t.job.company.state:t.job.company.location)+" ")]),a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","building"],size:"lg"}})],1),t._v(" "+t._s(t.job.company.name)+" ")]),a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","briefcase"],size:"lg"}})],1),t._v(" "+t._s(t.employmentTypeOptions.filter((function(e){return e.value===t.job.employmentType}))[0].text)+" ")]),t.job.salaryMin||t.job.salaryMax?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"euro-sign",mask:"calendar",transform:"shrink-9 down-3",size:"lg"}})],1),t._v(" "+t._s(t.job.salaryMax?t.job.salaryMin?parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+" -":"bis":"ab "+parseInt(t.job.salaryMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€")+" "+t._s(t.job.salaryMax?parseInt(t.job.salaryMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"€":"")+" ")]):t._e(),t.job.specialization&&"null"!=t.job.specialization?a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:"syringe",size:"lg"}})],1),t._v(" "+t._s(t.job.specialization)+" ")]):t._e(),a("div",[a("div",{staticClass:"icon"},[a("Fa",{staticClass:"mr-2",attrs:{icon:["fas","clock"],size:"lg"}})],1),t._v(" "+t._s(t.timeSince(new Date(parseInt(t.job.publishedAt||t.job.paidAt))))+" ")]),t.job.simpleApplication?a("div",{attrs:{id:"tooltip-simple-application"}},[a("BBadge",{attrs:{pill:"",variant:"secondary"}},[a("Fa",{staticClass:"mr-1",attrs:{icon:["fas","hashtag"]}}),t._v("Einfach bewerben")],1)],1):t._e(),t.job.simpleApplication?a("BTooltip",{attrs:{target:"tooltip-simple-application",title:"Lebenslauf genügt für Bewerbung",triggers:"hover",placement:"bottom"}}):t._e()],1)])],1)],1)],1):t._e()},n=[],i=a("1ba6"),r=a("7067"),s=a("b4ae"),c=a("e98b"),l=a("205f"),b=a("d6e4"),p=a("2b0e");p["default"].component("BTooltip",s["a"]),p["default"].component("BBadge",c["a"]),p["default"].component("BCard",l["a"]),p["default"].component("BCardText",b["a"]);var m={name:"JobCard",components:{StarJob:r["a"]},props:{job:{type:Object,default:function(){}}},data:function(){return{employmentTypeOptions:i["f"],companySizeOptions:i["b"]}},computed:{disabled:function(){return this.job.applicationDeadline&&new Date(this.job.applicationDeadline)<new Date||"published"!=this.job.status||this.job.paidExpiresAt<new Date}},methods:{timeSince:function(t){var e=Math.floor((new Date-t)/1e3),a=e/31536e3;return a>1?"vor "+Math.floor(a)+" Jahr"+(Math.floor(a)>1?"en":""):(a=e/604800,a>1?"vor "+Math.floor(a)+" Woche"+(Math.floor(a)>1?"n":""):(a=e/86400,a>1?"vor "+Math.floor(a)+" Tag"+(Math.floor(a)>1?"en":""):"heute"))}}},d=m,u=(a("8890"),a("2877")),h=Object(u["a"])(d,o,n,!1,null,"62cf4f60",null);e["a"]=h.exports}}]);
//# sourceMappingURL=job~job-preview.76900ff9.js.map