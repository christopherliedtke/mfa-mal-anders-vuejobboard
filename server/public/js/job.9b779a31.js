(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job"],{"2f62b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jobpage container py-5"},[n("Job",{attrs:{"api-jobs-schema":"public"}})],1)},s=[],i=n("890f"),o={name:"JobView",components:{Job:i["a"]}},r=o,l=n("2877"),c=Object(l["a"])(r,a,s,!1,null,null,null);t["default"]=c.exports},"30d1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"company-archive"},[n("div",{staticClass:"title"},[n("h1",[e._v(" Unternehmensverzeichnis ")]),n("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:e.breadcrumbs}})],1),n("div",{staticClass:"container py-4 py-lg-5"},[n("nav",{staticClass:"list-group-flush"},e._l(e.companies,(function(t){return n("b-link",{key:t._id,staticClass:"list-group-item list-group-item-action h5 text-truncate py-3 mb-0 text-primary d-flex justify-content-between",attrs:{to:"/unternehmen/"+t._id+"/"+t.slug}},[n("span",[n("strong",[e._v(e._s(t.name))]),e._v(" | "+e._s(t.location))]),t.logoUrl?n("div",{staticClass:"logo-container"},[n("b-img-lazy",{staticClass:"logo",attrs:{fluid:"",src:t.logoUrl,alt:"Logo - "+t.name}})],1):e._e()])})),1)]),n("Head",{attrs:{title:"Unternehmensverzeichnis",desc:"",script:e.snippet}})],1)},s=[],i={name:"CompanyArchive",data(){return{companies:null,breadcrumbs:[{text:"Home",to:"/"},{text:"Stellenangebote",to:"/stellenangebote"},{text:"Unternehmensverzeichnis",to:"/stellenangebote/unternehmensverzeichnis"}],snippet:[{id:"canonical",rel:"canonical",href:this.$config.website.url+"/stellenangebote/unternehmensverzeichnis"},{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Stellenangebote",\n              "item": "https://www.mfa-mal-anders.de/stellenangebote"\n            },{\n              "@type": "ListItem",\n              "position": 3,\n              "name": "Unternehmensverzeichnis",\n              "item": "https://www.mfa-mal-anders.de/stellenangebote/unternehmensverzeichnis"\n            }]\n          }'}]}},async created(){await this.getCompanies()},methods:{async getCompanies(){try{const e=await this.$axios.get("/graphql",{params:{query:"\n                query {\n                  companies {\n                    _id\n                    name\n                    location\n                    logoUrl\n                    slug\n                  }\n                }\n              "}});if(!e.data.data.companies)throw new Error;this.companies=e.data.data.companies}catch(e){this.$root.$bvToast.toast("Unternehmen konnten nicht geladen werden.",{title:"Unternehmen nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$router.push("/stellenangebote")}}}},o=i,r=(n("d8b5"),n("2877")),l=Object(r["a"])(o,a,s,!1,null,"e5846e16",null);t["default"]=l.exports},"9ffc":function(e,t,n){},d8b5:function(e,t,n){"use strict";n("9ffc")}}]);
//# sourceMappingURL=job.9b779a31.js.map