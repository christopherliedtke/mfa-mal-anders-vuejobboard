(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jobseek-info"],{"361b":function(e,t,s){},"46b0":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.jobSeek?s("article",[s("div",{staticClass:"card job-seek-card p-4 mb-3"},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 col-md-2 order-2"},[e.jobSeek.imageUrl?s("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",attrs:{src:e.jobSeek.imageUrl,alt:"Bild von "+e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,width:"75",height:"75"}}):s("b-img-lazy",{staticClass:"img-fluid rounded-circle shadow1",staticStyle:{opacity:"0.1"},attrs:{src:"/img/person-circle.svg",alt:"Platzhalter für Bild von "+e.jobSeek.publicFirstName+" "+e.jobSeek.publicLastName,width:"75",height:"75"}})],1),s("div",{staticClass:"col-9 col-md-10 order-1 pr-0 pr-md-2 position-static"},[s("b-link",{staticClass:" stretched-link",attrs:{to:"/stellengesuche/gesuch/"+e.jobSeek._id+"/"+e.jobSeek.slug,target:"_self",disabled:e.linkDisabled}},[s("h3",{staticClass:"h4 bold mb-1 text-break",staticStyle:{"font-weight":"700"}},[e._v(" "+e._s(e.jobSeek.title)+" ")])]),s("p",{staticClass:"text-muted mb-0"},[e._v(" "+e._s(e.jobSeek.publicFirstName)+" "+e._s(e.jobSeek.publicLastName)+" ")]),s("div",{staticClass:"card-foot"},[e.jobSeek.location?s("div",{staticClass:"icon"},[s("svg",{staticClass:"bi bi-geo-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"}})]),s("span",[e._v(e._s(e.jobSeek.location))])]):e._e(),e.jobSeek.isZfa?s("div",{staticClass:"icon"},[s("svg",{staticClass:"svg-inline--fa fa-tooth fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tooth",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"18",height:"18"}},[s("path",{attrs:{fill:"currentColor",d:"M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"}})]),s("span",[e._v("Abgeschlossene ZFA Ausbildung")])]):e._e(),e.jobSeek.isMfa?s("div",{staticClass:"icon"},[s("svg",{staticClass:"svg-inline--fa fa-heartbeat fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heartbeat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"}},[s("path",{attrs:{fill:"currentColor",d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}})]),s("span",[e._v("Abgeschlossene MFA Ausbildung")])]):e._e(),s("div",{staticClass:"icon"},[s("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),s("span",[e.jobSeek.partTime?s("span",[e._v("Teilzeit")]):e._e(),e.jobSeek.fullTime?s("span",[e.jobSeek.partTime?s("span",[e._v(" | ")]):e._e(),e._v("Vollzeit")]):e._e(),e.jobSeek.training?s("span",[e.jobSeek.fullTime||e.jobSeek.partTime?s("span",[e._v(" | ")]):e._e(),e._v("Ausbildung")]):e._e(),e.jobSeek.miniJob?s("span",[e.jobSeek.fullTime||e.jobSeek.partTime||e.jobSeek.training?s("span",[e._v(" | ")]):e._e(),e._v("520€ Basis")]):e._e(),e.jobSeek.freelance?s("span",[e.jobSeek.fullTime||e.jobSeek.partTime||e.jobSeek.training||e.jobSeek.miniJob?s("span",[e._v(" | ")]):e._e(),e._v("Freie Mitarbeit")]):e._e()])])])],1)])])])]):e._e()},a=[],n={name:"JobSeekCard",props:{jobSeek:{type:Object,default:null},linkDisabled:{type:Boolean,default:!1}}},l=n,r=(s("c5c9"),s("2877")),c=Object(r["a"])(l,i,a,!1,null,"ab9a3858",null);t["a"]=c.exports},5605:function(e,t,s){"use strict";s("e64a")},6535:function(e,t,s){e.exports=s.p+"img/KristinMaurach_portrait_800.02147dbf.jpg"},a7d5:function(e,t,s){e.exports=s.p+"img/new_message.963605aa.svg"},c5c9:function(e,t,s){"use strict";s("361b")},d04e:function(e,t,s){e.exports=s.p+"img/Campaign launch_Monochromatic.1d1aa797.svg"},d173:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"title"},[i("h1",[e._v("Stellengesuch schalten für MFA | ZFA")]),i("b-breadcrumb",{attrs:{items:e.breadcrumbs}})],1),i("div",{staticClass:"text-light shadow1 border-radius2 my-3 mr-2 mr-lg-5 my-lg-4 position-relative",staticStyle:{"border-top-left-radius":"0","border-bottom-left-radius":"0"},attrs:{id:"hero"}},[i("div",{staticClass:"row px-3 pt-5 pb-4 px-md-5 mx-auto ml-lg-auto position-relative",staticStyle:{"max-width":"1600px","overflow-x":"hidden"}},[i("div",{staticClass:"bg-logo"}),i("div",{staticClass:"col-12 col-md-9",staticStyle:{"z-index":"1"}},[e._m(0),i("h2",{staticClass:"display-4 bold mb-3",staticStyle:{"line-height":"1.1em"}},[e._v(" Unsere Arbeitgeber bewerben sich bei Dir! ")]),i("ul",{staticClass:"lead no-bullets mb-4 my-lg-4 py-lg-2 mt-lg-4"},[i("li",{staticClass:"d-flex mb-2"},[i("span",[i("svg",{staticClass:"bi bi-check2-circle mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}}),i("path",{attrs:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}})])]),e._m(1)]),i("li",{staticClass:"d-flex mb-2"},[i("span",[i("svg",{staticClass:"bi bi-check2-circle mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}}),i("path",{attrs:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}})])]),e._m(2)]),i("li",{staticClass:"d-flex mb-2"},[i("span",[i("svg",{staticClass:"bi bi-check2-circle mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}}),i("path",{attrs:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}})])]),e._m(3)]),i("li",{staticClass:"d-flex mb-2"},[i("span",[i("svg",{staticClass:"bi bi-check2-circle mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}}),i("path",{attrs:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}})])]),e._m(4)])]),i("div",{staticClass:"mt-3"},[i("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/auth/register?role=employee",variant:"primary",size:"lg"}},[e._v("Stellengesuch erstellen")]),i("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/stellengesuche",variant:"outline-light"}},[e._v("Veröffentlichte Stellengesuche ansehen")])],1)])])]),i("div",{staticClass:"container mt-5 mb-4 mb-lg-5"},[i("h2",{staticClass:"display-4 bold text-lg-center"},[e._v(" So startest Du... ")]),e._m(5),i("div",{staticClass:"row row-cols-1 row-cols-md-3"},[i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:s("dfcd"),alt:"MFA / ZFA Stellengesuch erstellen",height:"130","blank-width":"154","blank-height":"130",offset:"1000"}}),i("h3",{staticClass:"h2 bold"},[e._v(" Profil "),i("br"),e._v(" erstellen ")]),i("p",[e._v(" Melde Dich an und erstelle in ein paar Minuten Dein Profil mit relevanten Infos über Dich und Deine Anforderungen. ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Stellengesuch Erstellen")])],1)],1),i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:s("d04e"),alt:"Stellengesuch veröffentlichen",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("h3",{staticClass:"h2 bold"},[e._v("Stellengesuch veröffentlichen")]),i("p",[e._v(" Du hast volle Kontrolle und kannst Dein Stellengesuch jederzeit anonym veröffentlichen oder wieder offline nehmen. ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Gesuch Veröffentlichen")])],1)],1),i("div",{staticClass:"col"},[i("b-link",{staticClass:"icon-box shadow1",attrs:{to:"/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"}},[i("b-img-lazy",{staticClass:"mr-4 mb-4 ml-4",attrs:{src:s("a7d5"),alt:"Anfragen auf Stellengesuch erhalten",height:"130","blank-width":"167","blank-height":"130",offset:"1000"}}),i("h3",{staticClass:"h2 bold"},[e._v("Anfragen erhalten")]),i("p",[e._v(" Erhalte Nachrichten von passenden Arbeitgebern, die sich für Dich und Dein Profil interessieren. ")]),i("b-button",{attrs:{variant:"primary"}},[e._v("Jetzt Loslegen")])],1)],1)]),i("div",{staticClass:"d-flex flex-column align-items-center mt-4"},[i("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{to:"/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche",variant:"secondary",size:"lg"}},[e._v("Stellengesuche schalten")]),i("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{to:"/stellengesuche",variant:"outline-secondary",size:""}},[e._v("Stellengesuche in Deiner Nähe ansehen")]),i("b-button",{staticClass:"d-block d-lg-inline-block mx-1 my-1",attrs:{href:"#faq",variant:"outline-primary",size:""}},[e._v("Fragen oder Hilfe benötigt?")])],1)]),i("div",{staticClass:"container-fluid bg-light-shade py-5"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"h1 bold text-center"},[e._v(" Unsere Stellengesuche ")]),i("p",{staticClass:"lead text-center"},[e._v(" So könnte Dein "),i("b-link",{staticClass:"bold",attrs:{to:"/stellengesuche"}},[e._v("Stellengesuch in der Übersicht")]),e._v(" aussehen (anonym oder nicht anonym) ")],1),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-lg-8"},[i("JobSeekCard",{staticClass:"mt-3",attrs:{"job-seek":{_id:"0",title:"MFA mit Abrechnungskenntnissen sucht Stelle in Orthopädie",publicFirstName:"Kristin",publicLastName:"Maurach",location:"Berlin",isMfa:!0,fullTime:!0,imageUrl:s("6535"),slug:"0"},"link-disabled":!0}}),i("JobSeekCard",{staticClass:"mt-3",attrs:{"job-seek":{_id:"0",title:"MFA mit Abrechnungskenntnissen sucht Stelle in Orthopädie",publicFirstName:"K.",publicLastName:"M.",location:"Berlin",isMfa:!0,fullTime:!0,slug:"0"},"link-disabled":!0}})],1)]),i("div",{staticClass:"d-flex justify-content-center mt-3"},[i("b-button",{attrs:{to:"/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche",variant:"secondary"}},[e._v("Jetzt Stellengesuch erstellen")])],1)])]),i("div",{staticClass:"container my-5"},[i("h2",{staticClass:"h1 bold text-center"},[e._v("Deine Vorteile")]),e._m(6),e._m(7),i("div",{staticClass:"row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center my-4"},[i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-hourglass-bottom",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Zeitaufwand")]),i("p",[e._v(" Du erstellst Dein Stellengesuch einmal und wartest, dass der passende Arbeitgeber sich bei Dir meldet. ")])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-shield-fill-check",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Anonymität")]),i("p",[e._v(" Du wählst selbst, ob Du Deinen Namen sowie ein Bild von Dir mit dem Stellengesuch veröffentlichen möchtest oder nicht. ")])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-puzzle-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Einfach und Bequem")]),i("p",[e._v(" Mit unserem vorgegebenem Eingabeformular erstellst Du ein individuelles Stellengesuch nach Maß. ")])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-send-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Direkter Kontakt")]),i("p",[e._v(" Der Arbeitgeber nimmt direkt zu Dir Kontakt auf. Als Plattform stehen wir nicht als Dritte zwischen Dir und dem Arbeitgeber. ")])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-signpost-split-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Du Entscheidest")]),i("p",[e._v(" Du entscheidest, ob Du auf eine Anfrage antwortest. Deine E-Mail Adresse sieht der Arbeitgeber erst, wenn Du reagierst. ")])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-file-lock-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{d:"M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z"}}),i("path",{attrs:{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Deine Daten")]),i("p",[e._v(" Du hast volle Kontrolle über Deine Daten und kannst Dein Stellengesuch jederzeit online oder offline nehmen. ")])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"icon-box shadow1 py-5 px-4"},[i("svg",{staticClass:"bi bi-piggy-bank-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199zm-8.999-.65A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 1 0 .286-.958A7.601 7.601 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962zM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"}})]),i("h4",{staticClass:"mt-2 mb-3"},[e._v("Komplett Kostenlos")]),i("p",[e._v(" Es entstehen natürlich keinerlei Kosten für Dich. ")])])])])]),i("div",{staticClass:"container-fluid bg-light-shade py-4"},[i("div",{staticClass:"container my-4",attrs:{id:"faq"}},[i("h2",{staticClass:"h1 bold text-center mb-4"},[e._v(" Häufige Fragen ")]),e._m(8),i("div",{staticClass:"d-flex flex-column align-items-center mt-4"},[i("b-button",{staticClass:"mx-1 my-1",attrs:{to:"/kontakt?role=employee",variant:"primary",size:"lg"}},[e._v("Kontakt")]),i("b-button",{staticClass:"d-block d-md-inline-block my-2 mr-md-2",attrs:{to:"/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche",variant:"secondary",size:"lg"}},[e._v("Stellengesuch erstellen")])],1)])]),i("Head",{attrs:{title:"Stellengesuch schalten – MFA & ZFA",desc:"Jetzt von Arbeitgebern gefunden werden! Als MFA | ZFA ein Stellengesuch schalten auf MFA mal anders. Finde Deinen nächsten Job.",img:"/img/MfaMalAnders_Stellengesuche.jpg",script:e.snippet}})],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h4",{staticClass:"mb-2"},[s("em",[e._v(" Unzufrieden im Job? Auf der Suche nach einer neuen Herausforderung? ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" Du hast die "),s("span",{staticStyle:{"font-weight":"600"}},[e._v("volle Kontrolle über Deine Daten")]),e._v(", kannst Dein Stellengesuch "),s("span",{staticStyle:{"font-weight":"600"}},[e._v("anonym")]),e._v(" schalten und jederzeit online/offline nehmen ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span",{staticStyle:{"font-weight":"600"}},[e._v("Du entscheidest")]),e._v(" , wie Du auf Kontaktanfragen von Arbeitgebern reagierst ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" Dein Stellengesuch schaltest Du in "),s("span",{staticStyle:{"font-weight":"600"}},[e._v("unter 5 Minuten")]),e._v(" und zu "),s("span",{staticStyle:{"font-weight":"600"}},[e._v("100% kostenfrei")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" Du bist eine gefragte Fachkraft! "),s("span",{staticStyle:{"font-weight":"600"}},[e._v("Drehe den Bewerbungsprozess um")]),e._v(" und lass Dich von attraktiven Arbeitgebern kontaktieren (natürlich komplett anonym) ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"lead"},[e._v(" Du bist auf der Suche nach einer neuen Stelle, aber findest nicht das passende Angebot? Mit einem Stellengesuch auf "),s("em",[e._v("MFA mal anders")]),e._v(" kannst Du Dich jetzt von passenden Arbeitgebern finden und kontaktieren lassen. Und so funktioniert es... ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Ob Arztpraxis, Zahnarztpraxis, MVZ, Krankenhaus oder ein anderes Unternehmen im Gesundheitswesen. In einem Stellengesuch auf "),s("em",[e._v("MFA mal anders")]),e._v(" beschreibst Du Deine individuellen Anforderungen an Deinen neuen Job und bekommst Angebote von Unternehmen für Deine bevorzugten Rahmenbedingungen und Dein gewünschtes Gehalt. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Egal, ob Du aktiv auf der Suche nach einer neuen Stelle bist oder eigentlich nur die Augen nach interessanten Angeboten offen hältst. Mit einem Stellengesuch auf "),s("em",[e._v("MFA mal anders")]),e._v(" kannst Du Deine Jobsuche ideal ergänzen. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row row-cols-1 row-cols-md-2"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"h5 bold"},[e._v(" Sind meine persönlichen Daten öffentlich? ")]),s("p",[e._v(" Du entscheidest selbst, welche Deiner Daten öffentlich in Deinem Stellengesuch angezeigt werden. Du hast die Möglichkeit, Deinen Namen zu anonymisieren. Deine Kontaktdaten werden niemals veröffentlicht. Erst, wenn Du auf eine Anfrage antworten möchtest, gibst Du Deine Kontaktdaten preis. Du kannst ebenfalls frei entscheiden, ob Du ein Bild von Dir mit dem Stellengesuch veröffentlichen möchtest oder nicht. ")]),s("h3",{staticClass:"h5 bold"},[e._v(" Wird mein Wohnort öffentlich angezeigt? ")]),s("p",[e._v(" Nein, weder erfassen wir Deinen konkreten Wohnort, noch wird dieser an irgendeiner Stelle angezeigt. Du gibst lediglich den PLZ-Bereich an, in dem Du nach einer neuen Stelle suchst. Dieser wird verwendet, um das Matching zwischen Dir und den Arbeitgebern zu vereinfachen. ")]),s("h3",{staticClass:"h5 bold"},[e._v(" Kann ich meinen Stellengesuch ändern? ")]),s("p",[e._v(" Du kannst Dein Stellengesuch jederzeit ändern, online/offline nehmen oder auch löschen. Du behältst die volle Kontrolle über Deine Daten. ")]),s("h3",{staticClass:"h5 bold"},[e._v(" Muss ich ein Bild für mein Stellengesuch bereitstellen? ")]),s("p",[e._v(" Nein, Du musst kein Bild für Dein Stellengesuch hochladen. Du kannst ein Bild bereitstellen, aber die Entscheidung liegt allein bei Dir! ")])]),s("div",{staticClass:"col"},[s("h3",{staticClass:"h5 bold"},[e._v(" Wer kann mich kontaktieren? ")]),s("p",[e._v(" Dich können ausschließlich registrierte und verifizierte Arbeitgeber, die auf MFA mal anders nach neuen MitarbeiterInnen suchen, kontaktieren. ")]),s("h3",{staticClass:"h5 bold"},[e._v(" Was passiert, wenn ein Arbeitgeber mich kontaktieren möchte? ")]),s("p",[e._v(" Wenn ein Arbeitgeber Dich kontaktieren möchte, verfasst er als Antwort auf Dein Stellengesuch eine Nachricht an Dich. Diese Nachricht wird über unsere Plattform an Deine registrierte E-Mail Adresse weitergeleitet. Der Arbeitgeber kann Deine Kontaktdaten zu keiner Zeit einsehen. Sobald die Nachricht vom Arbeitgeber bei Dir angekommen ist, hast Du die Möglichkeit, den Arbeitgeber direkt zu kontaktieren. "),s("strong",[e._v("Du bleibst solange anonym, bis Du Dich entscheidest, dem Arbeitgeber zu antworten")]),e._v(". Hierzu bekommst Du die E-Mail Adresse des Arbeitgebers zur Verfügung gestellt. ")]),s("h3",{staticClass:"h5 bold"},[e._v(" Kann ich mehrere Stellengesuche aufgeben? ")]),s("p",[e._v(" Ja, Du hast auch die Möglichkeit, mehrere Stellengesuche z. B. für verschiedene Orte oder unterschiedliche Aufgabenbereiche etc. zu erstellen und veröffentlichen. ")])])])}],n=s("46b0"),l={name:"JobSeeksInfoView",components:{JobSeekCard:n["a"]},data:function(){return{breadcrumbs:[{text:"Home",to:"/"},{text:"Stellengesuche",to:"/stellengesuche"},{text:"Info",to:"/stellengesuche/info"}],snippet:[{id:"breadcrumbs",type:"application/ld+json",inner:'{\n            "@context": "http://schema.org",\n            "@type" : "BreadcrumbList",\n            "itemListElement": [{\n              "@type": "ListItem",\n              "position": 1,\n              "name": "MFA mal anders",\n              "item": "https://www.mfa-mal-anders.de"\n            },{\n              "@type": "ListItem",\n              "position": 2,\n              "name": "Für Arbeitgeber",\n              "item": "https://www.mfa-mal-anders.de/stellengesuche/info"\n            }]\n          }'}]}}},r=l,c=(s("5605"),s("2877")),o=Object(c["a"])(r,i,a,!1,null,"7ce76a6e",null);t["default"]=o.exports},dfcd:function(e,t,s){e.exports=s.p+"img/LinkedIn_Monochromatic.a4d7c979.svg"},e64a:function(e,t,s){}}]);
//# sourceMappingURL=jobseek-info-legacy.f2fcf912.js.map