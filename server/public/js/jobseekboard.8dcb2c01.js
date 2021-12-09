(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobseekboard"],{"0ab4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jobseekboard"},[s("div",{staticClass:"title"},[s("h1",[t._v(" Stellengesuche – MFA & ZFA"+t._s(t.filter.ort?" | "+t.filter.ort:"")+" ")]),s("b-breadcrumb",{staticClass:"text-capitalize",attrs:{items:t.breadcrumbs}})],1),s("div",{staticClass:"container py-3 py-lg-4"},[s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-12 col-lg-4 pt-2 pr-lg-5"},[s("b-form",{attrs:{id:"job-filter"},on:{submit:function(e){return e.preventDefault(),function(){t.getJobSeeks(),t.setQuery()}.apply(null,arguments)}}},[s("label",{staticClass:"sr-only",attrs:{for:"location"}},[t._v("Ort / PLZ")]),s("b-input-group",{staticClass:"mb-2 mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[s("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})])])]},proxy:!0}])},[s("b-form-input",{attrs:{id:"location",type:"text",placeholder:"PLZ oder Ort...",trim:"",lazy:"",formatter:t.capitalize},model:{value:t.filter.ort,callback:function(e){t.$set(t.filter,"ort",e)},expression:"filter.ort"}}),s("b-input-group-append",[s("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.ort="",t.getJobSeeks(),t.setQuery()}.apply(null,arguments)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),s("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),s("label",{staticClass:"sr-only",attrs:{for:"radius"}},[t._v("Umkreisradius")]),s("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[s("svg",{staticClass:"bi bi-bullseye",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),s("path",{attrs:{d:"M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}}),s("path",{attrs:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}),s("path",{attrs:{d:"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])])]},proxy:!0}])},[s("b-form-input",{attrs:{id:"radius",type:"number",min:"15",step:"5",placeholder:"Umkreis...",debounce:"500",number:"",trim:"",lazy:""},model:{value:t.filter.radius,callback:function(e){t.$set(t.filter,"radius",e)},expression:"filter.radius"}}),s("b-input-group-append",[s("b-input-group-text",{staticClass:"bg-light text-muted px-2"},[t._v("km")]),s("b-button",{staticClass:"px-2",attrs:{"aria-label":"Zurücksetzen"},on:{click:function(e){return e.preventDefault(),function(){t.filter.radius=null,t.getJobSeeks(),t.setQuery()}.apply(null,arguments)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})]),s("span",{staticClass:"sr-only"},[t._v("Zurücksetzen")])])],1)],1),s("div",{staticClass:"text-primary mt-3 mb-2 ml-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showAdvancedSearch=!t.showAdvancedSearch}}},[t._v(" Erweiterte Suche "),s("svg",{class:["bi bi-caret-right-fill animate ml-2 mb-1",{"rotate-90":t.showAdvancedSearch}],attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}})])]),s("b-collapse",{staticClass:"mb-3",attrs:{id:"advanced-search"},model:{value:t.showAdvancedSearch,callback:function(e){t.showAdvancedSearch=e},expression:"showAdvancedSearch"}},[s("label",{staticClass:"sr-only",attrs:{for:"employmentType"}},[t._v("Anstellungsart")]),s("b-input-group",{staticClass:"mr-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"bg-secondary text-light border-0"},[s("svg",{staticClass:"bi bi-briefcase-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}}),s("path",{attrs:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}})])])]},proxy:!0}])},[s("b-form-select",{attrs:{id:"employmentType"},on:{change:function(){t.getJobSeeks(),t.setQuery()}},model:{value:t.filter.anstellungsart,callback:function(e){t.$set(t.filter,"anstellungsart",e)},expression:"filter.anstellungsart"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("Alle Anstellungsarten")]),t._l(t.employmentTypeOptions,(function(e){return s("b-form-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.text))])}))],2)],1),s("b-form-group",{staticClass:"d-flex flex-wrap mt-2"},[s("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-mfa",name:"is-mfa",switch:""},on:{change:function(){t.getJobSeeks(),t.setQuery()}},model:{value:t.filter.isMfa,callback:function(e){t.$set(t.filter,"isMfa",e)},expression:"filter.isMfa"}},[t._v(" MFA Ausbildung ")]),s("b-form-checkbox",{staticClass:"mr-sm-4",attrs:{id:"is-zfa",name:"is-zfa",switch:""},on:{change:function(){t.getJobSeeks(),t.setQuery()}},model:{value:t.filter.isZfa,callback:function(e){t.$set(t.filter,"isZfa",e)},expression:"filter.isZfa"}},[t._v(" ZFA Ausbildung ")])],1)],1),s("div",[s("span",{staticClass:"text-danger small ml-2",staticStyle:{cursor:"pointer"},on:{click:t.resetFilter}},[t._v("Filter zurücksetzen")])]),s("div",{staticClass:"mt-2"},[s("b-button",{attrs:{variant:"success",type:"submit",block:""}},[s("svg",{staticClass:"bi bi-search mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),t._v("Stellengesuche finden")])],1)],1),s("div",{staticClass:"small text-right mt-2 mb-2 pr-3 pt-1"},[s("b-link",{attrs:{to:"/stellengesuche/info"}},[t._v("Stellengesuch schalten")])],1),s("div",{staticClass:"d-none d-lg-block mt-5"},[s("JobSeeksSmallBanner"),s("FacebookBtn",{staticClass:"mt-3 mr-1",attrs:{content:"Facebook",size:"sm"}}),s("InstagramBtn",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}}),s("TwitterBtn",{staticClass:"mt-3 mr-1",attrs:{content:"",size:"sm"}})],1)],1),s("div",{staticClass:"col-12 col-lg-8 pt-2"},[t.errors?s("div",t._l(t.errors,(function(e,a){return s("p",{key:a},[t._v(" "+t._s(e.message)+" ")])})),0):t.jobSeeks?t.jobSeeks.length>0?s("div",t._l(t.jobSeeks,(function(t){return s("JobSeekCard",{key:t._id,attrs:{"job-seek":t}})})),1):0===t.count?s("div",[t._v(" Leider konnten für Ihre Anfrage aktuell keine Stellengesuche gefunden werden. ")]):t._e():s("div",t._l(25,(function(t){return s("JobSeekCardPlaceholder",{key:t})})),1),s("div",{staticClass:"d-flex justify-content-center"},[t.jobSeeks&&t.jobSeeks.length<t.count?s("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.loadMoreJobSeeks()}}},[t._v(" Weitere Laden ")]):t.loading?s("BSpinner",{attrs:{variant:"primary",label:"Lade weitere Stellengesuche..."}}):t._e()],1),s("div",{staticClass:"my-4 my-lg-5 clearfix"},[s("h2",{staticClass:"h5 bold mb-3"},[t._v(" Ihre Stellenanzeige auf MFA mal anders? ")]),s("b-img",{staticClass:"mr-3 mb-2",staticStyle:{"max-width":"120px"},attrs:{fluid:"",left:"",src:a("7057"),alt:"Stellenanzeige wird auf MFA mal anders veröffentlicht"}}),s("p",[t._v(" Sie sind als attraktiver Arbeitergeber auf der Suche nach einer motivierten und kompetenten "),s("em",[t._v("Medizinischen Fachangestellten (MFA) | Zahnmedizinischen Fachangestellten (ZFA) | ArzthelferIn")]),t._v(t._s(t.$route.query.ort||t.$route.query.state?" in "+(t.$route.query.ort||t.$route.query.state):"")+"? Dann "),s("b-link",{staticClass:"bold",attrs:{to:"/auth/register"}},[t._v("registrieren")]),t._v(" Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem Karriereportal. "),s("br"),s("b-link",{staticClass:"bold",attrs:{to:"/fuer-arbeitgeber"}},[t._v("Mehr erfahren")])],1)],1)])]),s("JobSeeksLargeBanner",{staticClass:"mb-4 mb-lg-5"}),s("RandomArticlesContainer")],1),s("ScrollToTopBtn"),s("Head",{attrs:{title:"Stellengesuche ArzthelferIn | MFA | ZFA"+(t.filter.ort?" in "+t.filter.ort:""),desc:"Stellengesuche von Medizinische Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) "+(t.filter.ort?" in "+t.filter.ort+" & Umgebung":"")+" ✓ Teilzeit | Vollzeit",img:"/img/MfaMalAnders_Stellengesuche.jpg",script:t.snippet}})],1)},i=[],r=a("2b0e"),l=a("01e3"),n=a("5843"),o=a("1ba6"),c=a("9ff9"),d=a("2518"),u=a("f70e"),h=a("e674"),b=a("448f"),m=a("e10e"),p=a("2bf9"),f=a("670c"),g=a("9b8e");r["default"].component("BSpinner",l["a"]),r["default"].component("BCollapse",n["a"]);var v={name:"JobSeekBoardHome",components:{JobSeekCard:c["a"],JobSeekCardPlaceholder:d["a"],ScrollToTopBtn:u["a"],RandomArticlesContainer:h["a"],JobSeeksLargeBanner:b["a"],JobSeeksSmallBanner:m["a"],FacebookBtn:p["a"],InstagramBtn:f["a"],TwitterBtn:g["a"]},data(){return{title:"",jobSeeks:null,count:null,filter:{ort:"",radius:null,anstellungsart:"",isMfa:!1,isZfa:!1},showAdvancedSearch:!1,employmentTypeOptions:o["f"],loading:!1,errors:null}},computed:{snippet(){return[{id:"breadcrumbs",type:"application/ld+json",inner:`{\n              "@context": "http://schema.org",\n              "@type" : "BreadcrumbList",\n              "itemListElement": [{\n                  "@type": "ListItem",\n                  "position": 1,\n                  "name": "MFA mal anders",\n                  "item": "https://www.mfa-mal-anders.de"\n              },{\n                  "@type": "ListItem",\n                  "position": 2,\n                  "name": "Stellengesuche",\n                  "item": "https://www.mfa-mal-anders.de/stellengesuche"\n              }${this.filter.ort?',{"@type": "ListItem","position": 3,"name": "'+this.filter.ort+'","item": "https://www.mfa-mal-anders.de/stellengesuche/ort/'+this.filter.ort.toLowerCase()+'"}':""}]\n            }`},{rel:"canonical",href:`${this.$config.website.url}/stellengesuche${this.getCanonical()}`,id:"canonical"}]},breadcrumbs(){const t=[{text:"Home",to:"/"},{text:"Stellengesuche",to:"/stellengesuche"}];return this.filter.ort&&t.push({text:this.filter.ort,to:"/stellengesuche/ort/"+this.filter.ort.toLowerCase()}),t}},async created(){this.setFilter(),this.getJobSeeks()},methods:{async getJobSeeks(t=null,e=null){if(!0!==this.loading){this.loading=!0,this.jobSeeks=e?this.jobSeeks:null,this.errors=null;try{const a=await this.$axios.get("/graphql",{params:{query:`\n              query {\n                publicJobSeeks(\n                    limit: ${t}\n                    skip: ${e}\n                    location: "${this.filter.ort}"\n                    radius: ${Number.isInteger(this.filter.radius)?this.filter.radius:null}\n                    employmentType: "${this.filter.anstellungsart}"\n                    isMfa: ${this.filter.isMfa}\n                    isZfa: ${this.filter.isZfa}\n                  ) {\n                  jobSeeks {\n                    _id\n                    title\n                    isMfa\n                    isZfa\n                    partTime\n                    fullTime\n                    training\n                    miniJob\n                    publicFirstName\n                    publicLastName\n                    imageUrl\n                    location\n                    slug\n                  }\n                  count\n                }\n              }\n            `}});if(a.data.errors){if(a.data.errors.some(t=>"NO_LOCATION"==t.extensions.exception.code))return void(this.errors=a.data.errors);throw new Error}this.count=a.data.data.publicJobSeeks.count,this.jobSeeks=[...this.jobSeeks||"",...a.data.data.publicJobSeeks.jobSeeks]}catch(a){this.$root.$bvToast.toast("Beim Laden der Stellengesuche ist ein Fehler aufgetreten. Bitte versuchen Sie die Seite neu zu laden.",{title:"Fehler beim Laden",variant:"danger",toaster:"b-toaster-bottom-right",solid:!0,noAutoHide:!0})}this.loading=!1}},async loadMoreJobSeeks(){this.jobSeeks&&this.jobSeeks.length<this.count&&await this.getJobSeeks(void 0,this.jobSeeks.length)},setQuery(){const t={...this.filter,ort:this.filter.ort.replace(/(\s)/g,"-").toLowerCase()};for(const e in t)t[e]||delete t[e];this.$router.replace({query:t,path:"/stellengesuche"}).catch(()=>{})},setFilter(){this.filter={...this.filter,ort:this.capitalize(""+(this.$route.params.location||this.$route.query.ort||"")).replace(/-/g," "),radius:parseInt(this.$route.query.radius)||null,anstellungsart:this.$route.query.anstellungsart||"",isMfa:!!this.$route.query.isMfa,isZfa:!!this.$route.query.isZfa},(this.filter.radius||this.filter.anstellungsart||this.filter.isMfa||this.filter.isZfa)&&(this.showAdvancedSearch=!0)},resetFilter(){this.filter={ort:"",radius:null,anstellungsart:"",isMfa:!1,isZfa:!1},this.setQuery(),this.getJobSeeks()},capitalize(t){return t.replace(/(^[a-z]| [a-z]|-[a-z])/g,t=>t.toUpperCase())},getCanonical(){let t="";const e=this.$route.params.location||this.$route.query.ort;return e&&(t+="/ort/"+e.toLowerCase()),t}}},w=v,k=(a("6dd5"),a("2877")),C=Object(k["a"])(w,s,i,!1,null,null,null);e["default"]=C.exports},"23b8":function(t,e,a){},2518:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jobseek-card-placeholder p-4 mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid",staticStyle:{"aspect-ratio":"1"},attrs:{width:"75px",height:"auto"}})],1),a("div",{staticClass:"col-9 col-md-10 order-1 pr-0 pr-md-2"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"40px"}}),a("BSkeleton",{staticClass:"border-radius1",attrs:{width:"200px",height:"18px"}}),a("div",{staticClass:"d-flex flex-wrap mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"150px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"200px",height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mr-3 mb-2",attrs:{width:"160px",height:"16px"}})],1)],1)])])},i=[],r=a("2b0e"),l=a("0942");r["default"].component("BSkeleton",l["a"]);var n={name:"JobSeekCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},o=n,c=(a("74eb"),a("2877")),d=Object(c["a"])(o,s,i,!1,null,"3d8b2538",null);e["a"]=d.exports},"3c2c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article-card"},[a("b-link",{attrs:{to:"/blog/artikel/"+t.article.slug,"aria-label":t.article.title}},[a("div",{staticClass:"card mb-2"},[a("b-img-lazy",{staticClass:"card-img-top",attrs:{srcset:t.article.featuredImage?t.article.featuredImage.node.srcSet:"",src:t.article.featuredImage?t.article.featuredImage.node.sourceUrl:"",sizes:"(max-width: 768px) 100vw, 50vw",alt:t.article.featuredImage?t.article.featuredImage.node.altText:"",width:"1200",height:"630","blank-width":"1200","blank-height":"630","blank-color":"#f7f6f9",offset:"1000",fluid:""}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.article.excerpt)}}),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[t.article.author.node.avatar?a("div",{staticClass:"d-flex align-items-center"},[a("b-img-lazy",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"auto",height:"37.5px"},attrs:{src:t.article.author.node.avatar.url,alt:t.article.author.node.name,height:"96",width:"96","blank-width":"96","blank-height":"96",offset:"1000"}}),t.article.author.node.name?a("div",{staticClass:"mr-3"},[t._v(" "+t._s(t.article.author.node.name)+" ")]):t._e()],1):t._e(),a("b-button",{attrs:{variant:"primary"}},[t._v("Weiterlesen")])],1)]),t.article.tags.nodes.length>0?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.article.tags.nodes[0].name))]):t._e()],1)])],1)},i=[],r={name:"ArticleCard",props:{article:{type:Object,default:()=>{}}}},l=r,n=(a("f7b5"),a("2877")),o=Object(n["a"])(l,s,i,!1,null,"116d1e3d",null);e["a"]=o.exports},"4c7c":function(t,e,a){},"5e9b":function(t,e,a){"use strict";a("4c7c")},"66de":function(t,e,a){},"6dd5":function(t,e,a){"use strict";a("66de")},"74eb":function(t,e,a){"use strict";a("23b8")},"78bf":function(t,e,a){"use strict";a("c6be")},"9ff9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.jobSeek?a("article",[a("b-link",{staticClass:"card job-seek-card bg-light-shade border-radius2 shadow1 p-4 mb-3",attrs:{to:"/stellengesuche/gesuch/"+t.jobSeek._id+"/"+t.jobSeek.slug,target:"_self",disabled:t.linkDisabled}},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-2 order-2"},[t.jobSeek.imageUrl?a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",attrs:{src:t.jobSeek.imageUrl,alt:"Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"75",height:"75"}}):a("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+t.jobSeek.publicFirstName+" "+t.jobSeek.publicLastName,width:"75",height:"75"}})],1),a("div",{staticClass:"col-9 col-md-10  order-1 pr-0 pr-md-2"},[a("h3",{staticClass:"h4 bold mb-1",staticStyle:{overflow:"hidden","word-wrap":"break-word"}},[t._v(" "+t._s(t.jobSeek.title)+" ")]),a("p",{staticClass:"text-muted mb-0"},[t._v(" "+t._s(t.jobSeek.publicFirstName)+" "+t._s(t.jobSeek.publicLastName)+" ")]),a("div",{staticClass:"card-foot"},[t.jobSeek.location?a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),a("span",[t._v(t._s(t.jobSeek.location))])]):t._e(),t.jobSeek.isZfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),a("span",[t._v("Abgeschlossene ZFA Ausbildung")])]):t._e(),t.jobSeek.isMfa?a("div",{staticClass:"icon"},[a("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[a("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),a("span",[t._v("Abgeschlossene MFA Ausbildung")])]):t._e(),a("div",{staticClass:"icon"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),a("span",[t.jobSeek.partTime?a("span",[t._v("Teilzeit")]):t._e(),t.jobSeek.fullTime?a("span",[t.jobSeek.partTime?a("span",[t._v(" | ")]):t._e(),t._v("Vollzeit")]):t._e(),t.jobSeek.training?a("span",[t.jobSeek.fullTime?a("span",[t._v(" | ")]):t._e(),t._v("Ausbildung")]):t._e(),t.jobSeek.miniJob?a("span",[t.jobSeek.training?a("span",[t._v(" | ")]):t._e(),t._v("450€ Basis")]):t._e()])])])])])])])],1):t._e()},i=[],r={name:"JobSeekCard",props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}}},l=r,n=(a("5e9b"),a("2877")),o=Object(n["a"])(l,s,i,!1,null,"5beff20d",null);e["a"]=o.exports},ab2f:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-card-placeholder mb-2"},[a("div",{staticClass:"card"},[a("BSkeleton",{staticClass:"img-fluid card-img-top",staticStyle:{"aspect-ratio":"1200/630"},attrs:{width:"100%",height:"auto"}}),a("div",{staticClass:"card-body"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"30px"}}),a("div",{staticClass:"mt-3"},[a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"95%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"96%"},attrs:{height:"16px"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",staticStyle:{"max-width":"94%"},attrs:{height:"16px"}})],1),a("BSkeleton",{staticClass:"border-radius1 my-3",attrs:{height:"1px"}}),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"d-flex align-items-center"},[a("BSkeleton",{staticClass:"rounded-circle img-fluid mr-2",staticStyle:{"aspect-ratio":"1"},attrs:{width:"38px",height:"auto"}}),a("BSkeleton",{staticClass:"border-radius1 mb-2",attrs:{height:"18px",width:"70px"}})],1),a("BSkeleton",{staticClass:"border-radius2",attrs:{width:"136px",height:"39px"}})],1)],1)],1)])},i=[],r=a("2b0e"),l=a("0942");r["default"].component("BSkeleton",l["a"]);var n={name:"ArticleCardPlaceholder",props:{compact:{type:Boolean,default:!1}}},o=n,c=(a("78bf"),a("2877")),d=Object(c["a"])(o,s,i,!1,null,"d6454454",null);e["a"]=d.exports},c11e:function(t,e,a){},c6be:function(t,e,a){},e674:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles&&t.articles.length>0?a("div",{staticClass:"row"},t._l(t.articles,(function(e){return a("ArticleCard",{key:e.id,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number],attrs:{article:e}})})),1):a("div",{staticClass:"row"},t._l(t.number,(function(e){return a("ArticleCardPlaceholder",{key:e,class:["col-12 mb-4","col-md-6","col-lg-"+12/t.number]})})),1)])},i=[],r=a("3c2c"),l=a("ab2f"),n={name:"RandomArticlesContainer",components:{ArticleCard:r["a"],ArticleCardPlaceholder:l["a"]},props:{number:{type:Number,default:3}},data(){return{articles:null}},watch:{$route(t,e){t!=e&&this.getArticles()},"$store.state.articles.articles"(){this.getArticles()}},async created(){this.$store.dispatch("getArticles"),this.getArticles()},methods:{getRandom(t,e){var a=new Array(e),s=t.length,i=new Array(s);if(e>s)throw new RangeError("getRandom: more elements taken than available");while(e--){var r=Math.floor(Math.random()*s);a[e]=t[r in i?i[r]:r],i[r]=--s in i?i[s]:s}return a},getArticles(){this.$store.state.articles.articles.length>0&&(this.articles=this.getRandom(this.$store.state.articles.articles,this.number))}}},o=n,c=a("2877"),d=Object(c["a"])(o,s,i,!1,null,null,null);e["a"]=d.exports},f7b5:function(t,e,a){"use strict";a("c11e")}}]);
//# sourceMappingURL=jobseekboard.8dcb2c01.js.map