(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ad_coupon"],{de84:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"new-job container py-5"},[o("h2",[e._v("Add/Update Coupon")]),o("CouponForm",{attrs:{"coupon-id":"new"===e.$route.params.couponId?null:e.$route.params.couponId}})],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"coupon-form position-relative"},[o("b-form",{attrs:{id:"coupon-form"}},[o("label",{attrs:{for:"code"}},[e._v("Code *")]),o("b-form-input",{attrs:{id:"coupon-code",type:"text",state:e.validated?!!e.coupon.code:null,placeholder:"Enter coupon code ...",required:""},model:{value:e.coupon.code,callback:function(t){e.$set(e.coupon,"code",t)},expression:"coupon.code"}}),o("label",{attrs:{for:"discount"}},[e._v("Discount *")]),o("b-form-input",{attrs:{id:"discount",type:"number",number:"",min:"0",max:"1",step:"0.01",state:e.validated?!!e.coupon.discount:null,placeholder:"Enter discount ...",required:""},model:{value:e.coupon.discount,callback:function(t){e.$set(e.coupon,"discount",t)},expression:"coupon.discount"}}),o("label",{attrs:{for:"refresh-frequency"}},[e._v("Refrech Frequency *")]),o("b-form-input",{attrs:{id:"refresh-frequency",type:"number",number:"",min:"0",step:"1",state:e.validated?!!e.coupon.refreshFrequency:null,placeholder:"Refresh ad after X days...",required:""},model:{value:e.coupon.refreshFrequency,callback:function(t){e.$set(e.coupon,"refreshFrequency",t)},expression:"coupon.refreshFrequency"}}),o("label",{attrs:{for:"usage"}},[e._v("Usage")]),o("b-form-select",{attrs:{id:"usage",state:!!e.validated||null},model:{value:e.coupon.usage,callback:function(t){e.$set(e.coupon,"usage",t)},expression:"coupon.usage"}},[o("b-form-select-option",{attrs:{value:"unlimited"}},[e._v("unlimited")]),o("b-form-select-option",{attrs:{value:"single"}},[e._v("single")]),o("b-form-select-option",{attrs:{value:"singlePerUser"}},[e._v("Single per User")])],1),o("label",{attrs:{for:"user-id"}},[e._v("User ID")]),o("b-form-input",{attrs:{id:"user-id",type:"text",state:!!e.validated||null,placeholder:"Enter User ID ..."},model:{value:e.coupon.userId._id,callback:function(t){e.$set(e.coupon.userId,"_id",t)},expression:"coupon.userId._id"}}),o("label",{attrs:{for:"expire-at"}},[e._v("Expiration Date")]),o("b-input-group",[o("b-form-datepicker",{attrs:{id:"expire-at","value-as-date":!0,state:!(!e.validated||!e.coupon.expireAt)||null,placeholder:"Choose a date"},model:{value:e.coupon.expireAt,callback:function(t){e.$set(e.coupon,"expireAt",t)},expression:"coupon.expireAt"}}),o("b-input-group-append",[o("b-button",{staticClass:"px-2",on:{click:function(t){t.preventDefault(),e.coupon.expireAt=null}}},[o("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])],1)],1),o("div",{staticClass:"d-flex justify-content-between my-4"},[o("b-button",{attrs:{variant:"outline-danger",to:"/admin/coupons"}},[e._v(" Cancel ")]),o("b-button",{attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v(" Save ")])],1)],1),e.error?o("b-alert",{staticClass:"mt-3",attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(e._s(e.error))]):e._e()],1)},s=[],i=o("c2f1"),u=o("2b0e");u["default"].component("b-form-datepicker",i["a"]);var c={name:"CouponForm",props:{couponId:{type:String,default:""}},data(){return{coupon:{_id:"",code:"",discount:0,refreshFrequency:0,usage:"unlimited",expireAt:null,userId:{_id:null}},validated:null,success:"",error:""}},created(){this.couponId&&this.getCoupon(this.couponId)},methods:{async getCoupon(e){try{const t=await this.$axios.get("/graphql",{params:{query:`\n                              query {\n                                  adminCoupon(_id: "${e}") {\n                                      _id\n                                      code\n                                      discount\n                                      refreshFrequency\n                                      usage\n                                      expireAt\n                                      userId {\n                                          _id\n                                      }\n                                  }\n                              }\n                          `}});t.data.data.adminCoupon.userId||(t.data.data.adminCoupon.userId={_id:null}),t.data.data.adminCoupon.expireAt?t.data.data.adminCoupon.expireAt=new Date(t.data.data.adminCoupon.expireAt):t.data.data.adminCoupon.expireAt=null,this.coupon=t.data.data.adminCoupon}catch(t){this.$root.$bvToast.toast("Beim Laden des Coupons ist ein Fehler aufgetreten.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}},async onSubmit(){if(this.error=!1,!this.formValidation())return this.error="Please provide all necessary information.",null;this.$store.dispatch("setOverlay",!0);try{let e;e=this.couponId?"updateCoupon":"addCoupon";const t=`\n                      mutation {\n                          ${e}(\n                              ${"updateCoupon"===e?`_id: "${this.couponId}"`:""}\n                              code: "${this.coupon.code}"\n                              discount: ${this.coupon.discount}\n                              refreshFrequency: ${this.coupon.refreshFrequency}\n                              usage: "${this.coupon.usage}"\n                              ${this.coupon.expireAt?"expireAt: "+Number(this.coupon.expireAt):"expireAt: null"}\n                              ${this.coupon.userId._id?`userId: "${this.coupon.userId._id}"`:""}\n                          ) {\n                              _id\n                          }\n                      }\n                  `,o=await this.$axios.post("/graphql",{query:t});if(o.data.errors)throw this.$root.$bvToast.toast("Beim Speichern des Coupons ist ein Fehler aufgetreten.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),new Error("Coupon could not be saved!");this.success=!0,this.$root.$bvToast.toast("Der Coupon wurde erfolgreich gespeichert.",{title:"Coupon gespeichert",variant:"success",toaster:"b-toaster-bottom-right",solid:!0}),this.$router.go(-1)}catch(e){this.$root.$bvToast.toast("Beim Speichern des Coupons ist ein Fehler aufgetreten.",{title:"Fehler beim Speichern",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.$store.dispatch("setOverlay",!1)},formValidation(){return this.validated=!0,!(!this.coupon.code||!this.coupon.discount&&!this.coupon.refreshFrequency)},formReset(){for(const e in this.coupon)this.coupon[e]=""},hasHistory(){return window.history.length>2}}},d=c,l=o("2877"),p=Object(l["a"])(d,a,s,!1,null,null,null),h=p.exports,m={name:"AdminCouponView",components:{CouponForm:h}},f=m,b=Object(l["a"])(f,n,r,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=ad_coupon.cd7f32da.js.map