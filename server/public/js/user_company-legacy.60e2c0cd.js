(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user_company"],{"0942":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var c=a("2b0e"),r=a("b42e"),n=a("c637"),s=a("a723"),o=a("cf75");function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=Object(o["c"])({animation:Object(o["b"])(s["s"],"wave"),height:Object(o["b"])(s["s"]),size:Object(o["b"])(s["s"]),type:Object(o["b"])(s["s"],"text"),variant:Object(o["b"])(s["s"]),width:Object(o["b"])(s["s"])},n["W"]),u=c["default"].extend({name:n["W"],functional:!0,props:l,render:function(e,t){var a,c=t.data,n=t.props,s=n.size,o=n.animation,l=n.variant;return e("div",Object(r["a"])(c,{staticClass:"b-skeleton",style:{width:s||n.width,height:s||n.height},class:(a={},i(a,"b-skeleton-".concat(n.type),!0),i(a,"b-skeleton-animate-".concat(o),o),i(a,"bg-".concat(l),l),a)}))}})},"15d4":function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pricing-card-placeholder bg-light m-1 mb-3"},[a("BSkeleton",{staticClass:"border-radius2",attrs:{height:"68px"}}),a("div",{staticClass:"d-flex flex-column align-items-center p-3"},[a("BSkeleton",{staticClass:"mb-3",attrs:{height:"80px",width:"180px"}}),a("BSkeleton",{attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"mb-3",attrs:{height:"1px"}}),a("div",{staticClass:"p-4"},[a("BSkeleton",{staticClass:"mb-3",attrs:{height:"20px"}}),a("BSkeleton",{staticClass:"mb-3",attrs:{height:"50px"}}),a("BSkeleton",{staticClass:"mb-3",attrs:{height:"50px"}}),a("BSkeleton",{staticClass:"mb-3",attrs:{height:"50px"}}),a("BSkeleton",{staticClass:"mb-3",attrs:{height:"50px"}}),a("BSkeleton",{staticClass:"border-radius2 mt-4",attrs:{height:"40px"}})],1)],1)},r=[],n=a("2b0e"),s=a("0942");n["default"].component("BSkeleton",s["a"]);var o={name:"PricingCardPlaceholder"},i=o,l=(a("bd0c"),a("2877")),u=Object(l["a"])(i,c,r,!1,null,"20f0cb16",null);t["a"]=u.exports},"780b":function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["pricing-card border-radius2 bg-light m-1 mb-3",e.active?"shadow2":"shadow1"]},[a("div",{class:"position-relative text-center bg-"+e.pricing.accent+" border-radius2 p-3",staticStyle:{overflow:"hidden"}},[a("span",{class:"h2 bold text-"+e.pricing.primary},[e._v(" "+e._s(e.pricing.name)+" ")]),e.pricing.badge?a("span",{class:"position-absolute text-light bg-"+e.pricing.badgeBg+" px-5 py-1 small",staticStyle:{transform:"rotate(45deg)",right:"-45px",top:"12px"}},[e._v(" "+e._s(e.pricing.badge)+" ")]):e._e()]),a("div",{staticClass:"p-3"},[a("div",[a("span",{staticClass:"display-3 text-center d-block"},[a("span",{staticClass:"bold"},[e._v(e._s(e.pricing.stripePrice.price/100))]),e._v("€")])]),a("div",{staticClass:"small text-center"},[e._v(" (zzgl. USt.) ")])]),a("hr",{staticClass:"bg-light-shade"}),a("div",{staticClass:"p-3 p-lg-4"},[a("ul",{staticClass:"no-bullets"},e._l(e.pricing.productFeatures,(function(t){return a("li",{key:t.html,staticClass:"d-flex mb-2 mb-lg-3"},[a("div",[t.icon?a("svg",{staticClass:"bi bi-plus-circle-fill text-success mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"}})]):a("svg",{staticClass:"bi bi-check-circle text-muted mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),a("path",{attrs:{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"}})])]),a("div",{staticClass:"pb-1 pb-lg-2",domProps:{innerHTML:e._s(t.html)}})])})),0),a("b-button",{staticClass:"mt-2 mt-lg-0",attrs:{block:"",variant:e.active?"primary":"secondary"},on:{click:function(t){return e.setPricingPackage(e.pricing.name)}}},[e._v(e._s(e.checkout?"":"Weiter mit ")+e._s(e.pricing.name)+e._s(e.checkout?e.active?" Ausgewählt":" Auswählen":""))])],1)])},r=[],n={name:"PricingCard",props:{pricing:{type:Object,default:function(){return{stripePrice:{price:0},name:"kA",productFeatures:["kA"],primary:"primary",accent:"light-shade"}}},checkout:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},methods:{setPricingPackage:function(e){localStorage.setItem("pricingPackage",e),this.checkout?this.$emit("update-pricing-package",e):this.$router.push("/user/stellenanzeigen")}}},s=n,o=a("2877"),i=Object(o["a"])(s,c,r,!1,null,null,null);t["a"]=i.exports},"7db0":function(e,t,a){"use strict";var c=a("23e7"),r=a("b727").find,n=a("44d2"),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),c({target:"Array",proto:!0,forced:o},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(s)},a0b0:function(e,t,a){},bd0c:function(e,t,a){"use strict";a("a0b0")},ff4c:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"title"},[e._v(e._s(e.title))]),a("div",{staticClass:"checkout container py-3 py-lg-5"},[a("div",[a("h2",{staticClass:"mb-4"},[e.job&&e.job.title?a("strong",{domProps:{innerHTML:e._s(e.job.title)}}):e._e()]),a("p",{staticClass:"mb-4"},[e._v(" Bitte wählen Sie Ihr gewünschtes Stellenpaket. ")]),e.pricingPackages?a("div",{staticClass:"row row-cols-1 row-cols-lg-3 mb-4"},e._l(e.pricingPackages,(function(t){return a("div",{key:t.name,staticClass:"col"},[a("PricingCard",{attrs:{pricing:t,checkout:!0,active:t.name===e.checkout.pricingPackage.name},on:{"update-pricing-package":e.setPricingPackage}})],1)})),0):a("div",{staticClass:"row row-cols-1 row-cols-lg-3 mb-4"},e._l(3,(function(e){return a("div",{key:e,staticClass:"col"},[a("PricingCardPlaceholder")],1)})),0),a("div",{staticClass:"d-flex justify-content-end"},[a("b-button",{attrs:{variant:"outline-primary",to:"/kontakt?role=employer"}},[e._v("Sie haben noch Fragen? Nehmen Sie jetzt Kontakt auf!")])],1),a("b-form",{staticClass:"mb-4"},[a("label",{attrs:{for:"promotion-code"}},[e._v("Haben Sie einen gültigen Aktionscode?")]),a("b-input-group",[a("b-form-input",{attrs:{id:"promotion-code",type:"text",placeholder:"Aktionscode eingeben...",trim:"",state:e.checkout.couponValidationState},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.validatePromotionCode.apply(null,arguments))}},model:{value:e.checkout.promotionCode,callback:function(t){e.$set(e.checkout,"promotionCode",t)},expression:"checkout.promotionCode"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(t){return t.preventDefault(),e.validatePromotionCode.apply(null,arguments)}}},[e._v("Überprüfen")])],1)],1),a("b-form-invalid-feedback",{attrs:{state:e.checkout.couponValidationState}},[e._v(" "+e._s(e.checkout.promotionCodeErr)+" ")]),e.checkout.coupon?a("b-form-valid-feedback",{attrs:{state:!!e.checkout.coupon}},[e.checkout.coupon.percent_off?a("span",[e._v(" Sie erhalten einen Rabatt von "+e._s(e.checkout.coupon.percent_off)+" Prozent. ")]):e._e(),e.checkout.coupon.metadata.refreshFrequency?a("span",[e._v("Sie erhalten eine zusätzliche Datumsaktualisierung Ihrer Stellenanzeige alle "+e._s(e.checkout.coupon.metadata.refreshFrequency)+" Tage.")]):e._e()]):e._e(),a("hr",{staticClass:"mt-4"}),a("b-form-group",{staticClass:"mt-4"},[a("h5",{staticClass:"bold mb-0"},[e._v("Rechnungsadresse")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8"},[a("label",{attrs:{for:"customer-name",required:""}},[e._v("RechnungsempfängerIn")]),a("b-input",{attrs:{id:"customer-name",type:"text",placeholder:"RechnungsempfängerIn eingeben...",trim:"",state:e.checkout.validated?!!e.checkout.customer.name:null,"aria-describedby":"name-help"},model:{value:e.checkout.customer.name,callback:function(t){e.$set(e.checkout.customer,"name",t)},expression:"checkout.customer.name"}}),a("b-form-text",{staticClass:"ml-2",attrs:{id:"name-help"}},[e._v("z. B. Unternehmen (ggfls. + Abteilung) oder Name")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"customer-address-line1",required:""}},[e._v("Straße und Hausnummer")]),a("b-input",{attrs:{id:"customer-address-line1",type:"text",placeholder:"Straße und Hausnummer eingeben...",trim:"",state:e.checkout.validated?!!e.checkout.customer.address.line1:null},model:{value:e.checkout.customer.address.line1,callback:function(t){e.$set(e.checkout.customer.address,"line1",t)},expression:"checkout.customer.address.line1"}})],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"customer-address-line2"}},[e._v("Adresszusatz")]),a("b-input",{attrs:{id:"customer-address-lin2",type:"text",placeholder:"Adresszusatz eingeben...",trim:"",state:e.checkout.validated?!!e.checkout.customer.address.line2||!e.checkout.customer.address.line2&&null:null},model:{value:e.checkout.customer.address.line2,callback:function(t){e.$set(e.checkout.customer.address,"line2",t)},expression:"checkout.customer.address.line2"}})],1),a("div",{staticClass:"w-100"}),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"dustomer-address-postal-code",required:""}},[e._v("PLZ")]),a("b-input",{attrs:{id:"dustomer-address-postal-code",type:"text",placeholder:"PLZ eingeben...",trim:"",state:e.checkout.validated?!!e.checkout.customer.address.postal_code:null},model:{value:e.checkout.customer.address.postal_code,callback:function(t){e.$set(e.checkout.customer.address,"postal_code",t)},expression:"checkout.customer.address.postal_code"}})],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"customer-address-city",required:""}},[e._v("Ort")]),a("b-input",{attrs:{id:"customer-address-city",type:"text",placeholder:"Ort eingeben...",trim:"",state:e.checkout.validated?!!e.checkout.customer.address.city:null},model:{value:e.checkout.customer.address.city,callback:function(t){e.$set(e.checkout.customer.address,"city",t)},expression:"checkout.customer.address.city"}})],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"company-country",required:""}},[e._v("Land")]),a("b-form-select",{attrs:{id:"checkout-country",state:e.checkout.validated?!!e.checkout.customer.address.country:null},model:{value:e.checkout.customer.address.country,callback:function(t){e.$set(e.checkout.customer.address,"country",t)},expression:"checkout.customer.address.country"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("-- Land auswählen --")]),e._l(e.checkoutCountryOptions,(function(t){return a("b-form-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],2)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"customer-email",required:""}},[e._v("E-Mail Adresse")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[e._v("@")])]},proxy:!0}])},[a("b-input",{attrs:{id:"customer-email",type:"text",placeholder:"E-Mail Adresse eingeben...",disabled:"",trim:"",state:e.checkout.validated?!!e.checkout.customer.email:null},model:{value:e.checkout.customer.email,callback:function(t){e.$set(e.checkout.customer,"email",t)},expression:"checkout.customer.email"}})],1),a("b-form-text",{staticClass:"ml-2",attrs:{id:"email-help"}},[e._v("Konto E-Mail-Adresse "),a("br"),a("small",[e._v("(Kann nur über Ihr Account-Profil geändert werden)")])])],1),a("div",{staticClass:"col-12 col-lg-4"},[a("label",{attrs:{for:"customer-phone"}},[e._v("Telefonnummer")]),a("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[a("b-input-group-text",[a("svg",{staticClass:"bi bi-phone",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"}}),a("path",{attrs:{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}})])])]},proxy:!0}])},[a("b-input",{attrs:{id:"customer-phone",type:"text",placeholder:"Telefonnummer eingeben...",trim:"",state:e.checkout.validated&&!!e.checkout.customer.phone||null},model:{value:e.checkout.customer.phone,callback:function(t){e.$set(e.checkout.customer,"phone",t)},expression:"checkout.customer.phone"}})],1)],1)]),e.checkout.error?a("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(e._s(e.checkout.error))]):e._e()],1),a("b-form-checkbox",{staticClass:"mt-4 small",attrs:{state:e.checkout.accepted||null,value:!0,"unchecked-value":!1,switch:"",required:""},model:{value:e.checkout.accepted,callback:function(t){e.$set(e.checkout,"accepted",t)},expression:"checkout.accepted"}},[e._v(" Ich habe die "),a("b-link",{attrs:{href:"/agbs",target:"_blank"}},[e._v(" AGBs ")]),e._v(" und "),a("b-link",{attrs:{href:"/datenschutz",target:"_blank"}},[e._v(" Datenschutzbestimmungen ")]),e._v(" gelesen und akzeptiere diese. Ich verlange ausdrücklich und stimme gleichzeitig zu, dass MFA mal anders - K. Maurach & C. Liedtke GbR mit der in Auftrag gegebenen Dienstleistung vor Ablauf der Widerrufsfrist beginnt. Ich weiß, dass mein Widerrufsrecht bei vollständiger Erfüllung des Vertrages erlischt. ")],1)],1)],1),a("div",{staticClass:"d-flex justify-content-between align-items-start mt-5"},[a("b-button",{staticClass:"mr-2 mb-2",attrs:{variant:"danger"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("Abbrechen")]),a("div",[a("span"),a("b-button",{staticClass:"mb-2",attrs:{size:"lg",variant:"success",disabled:!e.checkout.accepted||!e.checkout.pricingPackage},on:{click:function(t){return e.startCheckout()}}},[e._v(" "+e._s((e.amountComputed/100).toFixed(2).toString().replace(".",","))+"€ | Rechnung anfordern und kostenpflichtig Veröffentlichen ")])],1)],1)]),a("Head",{attrs:{title:e.title,desc:""}})],1)},r=[],n=a("1da1"),s=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("7db0"),a("b0c0"),a("780b")),o=a("15d4"),i=a("1ba6"),l={name:"UserCheckoutJob",components:{PricingCard:s["a"],PricingCardPlaceholder:o["a"]},data:function(){return{title:"Zahlung – Stellenanzeige veröffentlichen",job:Object,pricingPackages:null,checkout:{pricingPackage:null,promotionCode:null,coupon:null,couponValidationState:null,customer:{name:"",email:"",phone:null,address:{city:"",line1:"",line2:null,postal_code:"",country:""}},accepted:!1,validated:!1,error:!1,promotionCodeErr:null},checkoutCountryOptions:i["a"]}},computed:{amountComputed:function(){var e=0;if(!this.pricingPackages)return e;if(this.checkout.pricingPackage){e=this.checkout.pricingPackage.stripePrice.price,this.checkout.coupon&&this.checkout.coupon.percent_off&&(e=Math.round(e*(1-this.checkout.coupon.percent_off/100)));var t=this.$config.payment.taxRate;e=Math.round(e*(1+t))}return e}},watch:{"checkout.pricingPackage":function(){this.checkout.promotionCode&&this.validatePromotionCode()}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.getJob(),e.getPricingPackages()]);case 2:return t.next=4,e.setBillingAddress();case 4:case"end":return t.stop()}}),t)})))()},methods:{getJob:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,t.next=4,e.$axios.get("/graphql",{params:{query:'\n              query {\n                myJob (_id: "'.concat(e.$route.params.jobId,'") {\n                  _id\n                  createdAt\n                  updatedAt\n                  publishedAt\n                  status\n                  paid\n                  paidExpiresAt\n                  applicationDeadline\n                  title\n                  company {\n                    name\n                    street\n                    zipCode\n                    location\n                    state\n                    country\n                    size\n                  }\n                  payment {\n                    status\n                    paidAt\n                    paymentExpiresAt\n                  }\n                }\n              }\n            ')}});case 4:if(a=t.sent,!a.data.errors){t.next=7;break}throw new Error;case 7:e.job=a.data.data.myJob,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.$root.$bvToast.toast("Ihre Stellenanzeige konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 13:e.$store.dispatch("setOverlay",!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getPricingPackages:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/api/products/job-ad-packages");case 3:if(a=t.sent,a.data.jobAdPackages){t.next=6;break}throw new Error("Stellenpakete konnten nicht geladen werden");case 6:e.pricingPackages=a.data.jobAdPackages,e.setPricingPackage(localStorage.getItem("pricingPackage")),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$root.$bvToast.toast("Unsere Stellenpakete konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},setPricingPackage:function(e){var t=this.pricingPackages.find((function(t){return t.name===e}));this.checkout.pricingPackage=t||this.pricingPackages[1]},setBillingAddress:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/customers/me");case 2:a=t.sent,a.data.customer?e.checkout.customer=a.data.customer:e.checkout.customer={name:e.job.company.name,email:e.$store.state.auth.user.email,phone:null,address:{city:e.job.company.location,postal_code:e.job.company.zipCode,line1:e.job.company.street,line2:null,country:""}};case 4:case"end":return t.stop()}}),t)})))()},validateBillingAddress:function(){return this.checkout.error=null,this.checkout.validated=!0,!!(this.checkout.customer.name&&this.checkout.customer.email&&this.checkout.customer.address.city&&this.checkout.customer.address.line1&&this.checkout.customer.address.postal_code&&this.checkout.customer.address.country)},startCheckout:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validateBillingAddress()){t.next=3;break}return e.checkout.error="Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!",t.abrupt("return",null);case 3:return e.$store.dispatch("setOverlay",!0),t.prev=4,t.next=7,e.$axios.post("/api/checkout/create-invoice",{jobId:e.job._id,customer:e.checkout.customer,coupons:e.checkout.coupon?[e.checkout.coupon.id]:null,invoiceItems:[{price:e.checkout.pricingPackage.stripePrice.id,metadata:{type:"single_job",jobId:e.job._id}}],accepted:e.checkout.accepted});case 7:a=t.sent,200===a.status&&(window.open(a.data.invoice_pdf,"_blank"),e.$root.$bvToast.toast("Sie erhalten die Rechnung per E-Mail inkl. Zahlungslink sowie als PDF Anhang.",{title:"Rechnung erfolgreich angefordert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),e.$gtag.event("begin_checkout",{value:e.amountComputed/100,currency:"EUR",items:[{id:e.job._id,name:e.job.title,price:e.amountComputed/100}]}),e.$matomo&&e.$matomo.trackEvent("commerce","begin_checkout",e.job._id,e.amountComputed/100),e.$router.push("/user/rechnungen")),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),console.log("err.response: ",t.t0.response),e.$root.$bvToast.toast(t.t0.response.data||"Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns über das Kontaktformular.",{title:"Es ist ein Fehler aufgetreten",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0});case 15:e.$store.dispatch("setOverlay",!1);case 16:case"end":return t.stop()}}),t,null,[[4,11]])})))()},validatePromotionCode:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("setOverlay",!0),t.prev=1,e.checkout.couponValidationState=null,t.next=5,e.$axios.get("/api/coupons/coupon-by-promotion-code",{params:{code:e.checkout.promotionCode,product:e.checkout.pricingPackage.stripePrice.stripeProduct}});case 5:a=t.sent,a.data.error?(e.checkout.couponValidationState=!1,e.checkout.coupon=null,e.checkout.promotionCodeErr=a.data.error):(e.checkout.couponValidationState=!0,e.checkout.coupon=a.data.coupon,e.checkout.promotionCodeErr=null),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.checkout.couponValidationState=!1,e.checkout.coupon=null;case 13:e.$store.dispatch("setOverlay",!1);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},u=l,d=a("2877"),p=Object(d["a"])(u,c,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=user_company-legacy.60e2c0cd.js.map