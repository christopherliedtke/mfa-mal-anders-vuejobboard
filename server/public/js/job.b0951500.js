(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["job"],{"2f62b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"jobpage container py-5"},[e("Job",{attrs:{"api-jobs-schema":"public"}})],1)},s=[],i=e("890f"),r={name:"JobView",components:{Job:i["a"]}},o=r,c=e("2877"),l=Object(c["a"])(o,a,s,!1,null,null,null);n["default"]=l.exports},"30d1":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"company-archive"},[t._m(0),e("div",{staticClass:"container py-4 py-lg-5"},[e("nav",{staticClass:"list-group-flush"},t._l(t.companies,(function(n){return e("b-link",{key:n._id,staticClass:"list-group-item list-group-item-action h5 text-truncate my-3 text-primary",attrs:{to:"/unternehmen/"+n._id+"/"+n.slug}},[e("strong",[t._v(t._s(n.name))]),t._v(" | "+t._s(n.location))])})),1)])])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("h1",[t._v(" Unternehmensverzeichnis ")])])}],i={name:"CompanyArchive",data(){return{companies:null}},async created(){await this.getCompanies()},methods:{async getCompanies(){try{const t=await this.$axios.get("/graphql",{params:{query:"\n                query {\n                  companies {\n                    _id\n                    name\n                    location\n                    logoUrl\n                    slug\n                  }\n                }\n              "}});if(!t.data.data.companies)throw new Error;this.companies=t.data.data.companies}catch(t){this.$root.$bvToast.toast("Unternehmen konnten nicht geladen werden.",{title:"Unternehmen nicht verfügbar",variant:"warning",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0}),this.$router.push("/stellenangebote")}}}},r=i,o=e("2877"),c=Object(o["a"])(r,a,s,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=job.b0951500.js.map