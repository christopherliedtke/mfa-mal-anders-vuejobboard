(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ad~user"],{6190:function(t,e,i){"use strict";i.d(e,"a",(function(){return y}));var n,s,r=i("2b0e"),c=i("c637"),a=i("0056"),o=i("a723"),l=i("9b76"),u=i("d82f"),b=i("cf75"),d=i("90ef"),f=i("8c18"),h=i("ce2a");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){O(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function O(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var j="active",g=a["Y"]+j,m=Object(b["d"])(Object(u["m"])(v(v({},d["b"]),{},(n={},O(n,j,Object(b["c"])(o["g"],!1)),O(n,"buttonId",Object(b["c"])(o["s"])),O(n,"disabled",Object(b["c"])(o["g"],!1)),O(n,"lazy",Object(b["c"])(o["g"],!1)),O(n,"noBody",Object(b["c"])(o["g"],!1)),O(n,"tag",Object(b["c"])(o["s"],"div")),O(n,"title",Object(b["c"])(o["s"])),O(n,"titleItemClass",Object(b["c"])(o["e"])),O(n,"titleLinkAttributes",Object(b["c"])(o["o"])),O(n,"titleLinkClass",Object(b["c"])(o["e"])),n))),c["mb"]),y=r["default"].extend({name:c["mb"],mixins:[d["a"],f["a"]],inject:{bvTabs:{default:function(){return{}}}},props:m,data:function(){return{localActive:this[j]&&!this.disabled}},computed:{_isTab:function(){return!0},tabClasses:function(){var t=this.localActive,e=this.disabled;return[{active:t,disabled:e,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(s={},O(s,j,(function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit(g,this.localActive))})),O(s,"disabled",(function(t,e){if(t!==e){var i=this.bvTabs.firstTab;t&&this.localActive&&i&&(this.localActive=!1,i())}})),O(s,"localActive",(function(t){this.$emit(g,t)})),s),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(l["O"])&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return!(!t||this.disabled)&&t(this)},deactivate:function(){var t=this.bvTabs.deactivateTab;return!(!t||!this.localActive)&&t(this)}},render:function(t){var e=this.localActive,i=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:e}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":e?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[e||!this.computedLazy?this.normalizeSlot():t()]);return t(h["a"],{props:{mode:"out-in",noFade:this.computedNoFade}},[i])}})},"95ae":function(t,e,i){"use strict";i.d(e,"b",(function(){return D})),i.d(e,"a",(function(){return H}));var n=i("f0bd"),s=i("2b0e"),r=i("c637"),c=i("0056"),a=i("9bfa"),o="top-start",l="top-end",u="bottom-start",b="bottom-end",d="right-start",f="left-start",h=i("a723"),p=i("ca88"),v=i("6d40"),O=i("906c"),j=i("6b77"),g=i("7b1e"),m=i("d82f"),y=i("cf75"),T=i("686b"),w=s["default"].extend({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(j["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,c["U"]),t&&Object(j["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,c["U"]))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(j["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,c["U"])},beforeDestroy:function(){Object(j["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,c["U"])},methods:{isClickOut:function(t){return!Object(O["f"])(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),k=s["default"].extend({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(j["a"])(this.focusInElement,"focusin",this._focusInHandler,c["U"]),t&&Object(j["b"])(this.focusInElement,"focusin",this._focusInHandler,c["U"]))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(j["b"])(this.focusInElement,"focusin",this._focusInHandler,c["U"])},beforeDestroy:function(){Object(j["a"])(this.focusInElement,"focusin",this._focusInHandler,c["U"])},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),C=i("90ef"),P=i("602d");function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){x(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I=Object(j["e"])(r["w"],c["Q"]),E=Object(j["e"])(r["w"],c["v"]),N=".dropdown form",S=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),B=function(t){return(t||[]).filter(O["u"])},D=Object(y["d"])(Object(m["m"])(_(_({},C["b"]),{},{boundary:Object(y["c"])([p["c"],h["s"]],"scrollParent"),disabled:Object(y["c"])(h["g"],!1),dropleft:Object(y["c"])(h["g"],!1),dropright:Object(y["c"])(h["g"],!1),dropup:Object(y["c"])(h["g"],!1),noFlip:Object(y["c"])(h["g"],!1),offset:Object(y["c"])(h["n"],0),popperOpts:Object(y["c"])(h["o"],{}),right:Object(y["c"])(h["g"],!1)})),r["w"]),H=s["default"].extend({mixins:[C["a"],P["a"],w,k],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:D,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(g["g"])(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var i=t?c["P"]:c["w"],n=new v["a"](i,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(n),n.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off(c["v"],this.focusToggler);t?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.emitOnRoot(Object(j["e"])(r["w"],e),t),this.$emit(e,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if("undefined"===typeof n["a"])Object(T["a"])("Popper.js not found. Falling back to CSS positioning",r["w"]);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.emitOnRoot(I,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit(c["Q"])}))}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(E,this),this.$emit(c["v"]),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new n["a"](t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t=u;this.dropup?t=this.right?l:o:this.dropright?t=d:this.dropleft?t=f:this.right&&(t=b);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},i=this.boundary;return i&&(e.modifiers.preventOverflow={boundariesElement:i}),Object(m["i"])(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](I,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(O["B"])((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once(c["v"],this.focusToggler))},toggle:function(t){t=t||{};var e=t,i=e.type,n=e.keyCode;("click"===i||"keydown"===i&&-1!==[a["c"],a["j"],a["a"]].indexOf(n))&&(this.disabled?this.visible=!1:(this.$emit(c["S"],t),Object(j["f"])(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Object(j["f"])(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===a["d"]?this.onEsc(t):e===a["a"]?this.focusNext(t,!1):e===a["k"]&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Object(j["f"])(t),this.$once(c["v"],this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit(c["f"],t)},hideHandler:function(t){var e=this,i=t.target;!this.visible||Object(O["f"])(this.$refs.menu,i)||Object(O["f"])(this.toggler,i)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.inNavbar?300:0))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var i=this,n=t.target;!this.visible||t&&Object(O["e"])(N,n)||(Object(j["f"])(t),this.$nextTick((function(){var t=i.getItems();if(!(t.length<1)){var s=t.indexOf(n);e&&s>0?s--:!e&&s<t.length-1&&s++,s<0&&(s=0),i.focusItem(s,t)}})))},focusItem:function(t,e){var i=e.find((function(e,i){return i===t}));Object(O["d"])(i)},getItems:function(){return B(Object(O["D"])(S,this.$refs.menu))},focusMenu:function(){Object(O["d"])(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){Object(O["d"])(t.toggler)}))}}})},"9eaa":function(t,e,i){"use strict";i.d(e,"a",(function(){return j}));var n=i("2b0e"),s=i("c637"),r=i("0056"),c=i("a723"),a=i("906c"),o=i("d82f"),l=i("cf75"),u=i("493b"),b=i("8c18"),d=i("aa59");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v=Object(o["j"])(d["b"],["event","routerTag"]),O=Object(l["d"])(Object(o["m"])(h(h({},v),{},{linkClass:Object(l["c"])(c["e"]),variant:Object(l["c"])(c["s"])})),s["x"]),j=n["default"].extend({name:s["x"],mixins:[u["a"],b["a"]],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:O,computed:{computedAttrs:function(){return h(h({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;Object(a["B"])((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit(r["f"],t),this.closeDropdown()}},render:function(t){var e=this.linkClass,i=this.variant,n=this.active,s=this.disabled,r=this.onClick,c=this.bvAttrs;return t("li",{class:c.class,style:c.style,attrs:{role:"presentation"}},[t(d["a"],{staticClass:"dropdown-item",class:[e,p({},"text-".concat(i),i&&!(n||s))],props:Object(l["e"])(v,this.$props),attrs:this.computedAttrs,on:{click:r},ref:"item"},this.normalizeSlot())])}})},dd9a:function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var n=i("2b0e"),s=i("c637"),r=i("a723"),c=i("9b76"),a=i("2326"),o=i("8690"),l=i("cf75"),u=i("fa73"),b=i("95ae"),d=i("90ef"),f=i("8c18"),h=i("1947"),p=i("d82f");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){j(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function j(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g=Object(l["d"])(Object(p["m"])(O(O(O({},d["b"]),b["b"]),{},{block:Object(l["c"])(r["g"],!1),html:Object(l["c"])(r["s"]),lazy:Object(l["c"])(r["g"],!1),menuClass:Object(l["c"])(r["e"]),noCaret:Object(l["c"])(r["g"],!1),role:Object(l["c"])(r["s"],"menu"),size:Object(l["c"])(r["s"]),split:Object(l["c"])(r["g"],!1),splitButtonType:Object(l["c"])(r["s"],"button",(function(t){return Object(a["a"])(["button","submit","reset"],t)})),splitClass:Object(l["c"])(r["e"]),splitHref:Object(l["c"])(r["s"]),splitTo:Object(l["c"])(r["q"]),splitVariant:Object(l["c"])(r["s"]),text:Object(l["c"])(r["s"]),toggleClass:Object(l["c"])(r["e"]),toggleTag:Object(l["c"])(r["s"],"button"),toggleText:Object(l["c"])(r["s"],"Toggle dropdown"),variant:Object(l["c"])(r["s"],"secondary")})),s["w"]),m=n["default"].extend({name:s["w"],mixins:[d["a"],b["a"],f["a"]],props:g,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,i=this.variant,n=this.size,s=this.block,r=this.disabled,a=this.split,l=this.role,b=this.hide,d=this.toggle,f={variant:i,size:n,block:s,disabled:r},p=this.normalizeSlot(c["c"]),v=this.hasNormalizedSlot(c["c"])?{}:Object(o["a"])(this.html,this.text),j=t();if(a){var g=this.splitTo,m=this.splitHref,y=this.splitButtonType,T=O(O({},f),{},{variant:this.splitVariant||i});g?T.to=g:m?T.href=m:y&&(T.type=y),j=t(h["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:T,domProps:v,on:{click:this.onSplitClick},ref:"button"},p),p=[t("span",{class:["sr-only"]},[this.toggleText])],v={}}var w=t(h["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(u["g"])(e)},props:O(O({},f),{},{tag:this.toggleTag,block:s&&!a}),domProps:v,on:{mousedown:this.onMousedown,click:d,keydown:d},ref:"toggle"},p),k=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:l,tabindex:"-1","aria-labelledby":this.safeId(a?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(c["e"],{hide:b}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[j,w,k])}})},e6c7:function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var n=i("c637"),s=i("0056"),r=i("9bfa"),c=i("906c"),a=i("6b77"),o=i("7b1e"),l=i("d82f"),u=Object(a["d"])(n["cb"],s["P"]),b="__bv_modal_directive__",d=function(t){var e=t.modifiers,i=void 0===e?{}:e,n=t.arg,s=t.value;return Object(o["n"])(s)?s:Object(o["n"])(n)?n:Object(l["h"])(i).reverse()[0]},f=function(t){return t&&Object(c["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(c["C"])("a, button",t)||t},h=function(t){t&&"BUTTON"!==t.tagName&&(Object(c["o"])(t,"role")||Object(c["E"])(t,"role","button"),"A"===t.tagName||Object(c["o"])(t,"tabindex")||Object(c["E"])(t,"tabindex","0"))},p=function(t,e,i){var n=d(e),o=f(t);if(n&&o){var l=function(t){var e=t.currentTarget;if(!Object(c["r"])(e)){var s=t.type,a=t.keyCode;"click"!==s&&("keydown"!==s||a!==r["c"]&&a!==r["j"])||i.context.$root.$emit(u,n,e)}};t[b]={handler:l,target:n,trigger:o},h(o),Object(a["b"])(o,"click",l,s["V"]),"BUTTON"!==o.tagName&&"button"===Object(c["h"])(o,"role")&&Object(a["b"])(o,"keydown",l,s["V"])}},v=function(t){var e=t[b]||{},i=e.trigger,n=e.handler;i&&n&&(Object(a["a"])(i,"click",n,s["V"]),Object(a["a"])(i,"keydown",n,s["V"]),Object(a["a"])(t,"click",n,s["V"]),Object(a["a"])(t,"keydown",n,s["V"])),delete t[b]},O=function(t,e,i){var n=t[b]||{},s=d(e),r=f(t);s===n.target&&r===n.trigger||(v(t,e,i),p(t,e,i)),h(r)},j=function(){},g={inserted:O,updated:j,componentUpdated:O,unbind:v}},f902:function(t,e,i){"use strict";i.d(e,"a",(function(){return J}));var n=i("2b0e"),s=i("2f79"),r=i("c637"),c=i("e863"),a=i("0056"),o=i("9bfa"),l=i("a723"),u=i("9b76"),b=i("2326"),d=i("6d40"),f=i("906c"),h=i("6b77"),p=i("6c06"),v=i("7b1e"),O=i("3c21"),j=i("a8c8"),g=i("58f2"),m=i("3a58"),y=i("d82f"),T=i("47df"),w=i("cf75"),k=i("8515"),C=i("90ef"),P=i("8c18"),$=i("aa59"),_=i("b42e");function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I,E=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},N=Object(w["d"])({align:Object(w["c"])(l["s"]),cardHeader:Object(w["c"])(l["g"],!1),fill:Object(w["c"])(l["g"],!1),justified:Object(w["c"])(l["g"],!1),pills:Object(w["c"])(l["g"],!1),small:Object(w["c"])(l["g"],!1),tabs:Object(w["c"])(l["g"],!1),tag:Object(w["c"])(l["s"],"ul"),vertical:Object(w["c"])(l["g"],!1)},r["db"]),S=n["default"].extend({name:r["db"],functional:!0,props:N,render:function(t,e){var i,n=e.props,s=e.data,r=e.children,c=n.tabs,a=n.pills,o=n.vertical,l=n.align,u=n.cardHeader;return t(n.tag,Object(_["a"])(s,{staticClass:"nav",class:(i={"nav-tabs":c,"nav-pills":a&&!c,"card-header-tabs":!o&&u&&c,"card-header-pills":!o&&u&&a&&!c,"flex-column":o,"nav-fill":!o&&n.fill,"nav-justified":!o&&n.justified},x(i,E(l),!o&&l),x(i,"small",n.small),i)}),r)}});function B(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function D(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?B(Object(i),!0).forEach((function(e){H(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function H(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var z=Object(g["a"])("value",{type:l["l"]}),F=z.mixin,A=z.props,V=z.prop,L=z.event,U=function(t){return!t.disabled},M=n["default"].extend({name:r["sb"],inject:{bvTabs:{default:function(){return{}}}},props:{controls:Object(w["c"])(l["s"]),id:Object(w["c"])(l["s"]),noKeyNav:Object(w["c"])(l["g"],!1),posInSet:Object(w["c"])(l["l"]),setSize:Object(w["c"])(l["l"]),tab:Object(w["c"])(),tabIndex:Object(w["c"])(l["l"])},methods:{focus:function(){Object(f["d"])(this.$refs.link)},handleEvt:function(t){if(!this.tab.disabled){var e=t.type,i=t.keyCode,n=t.shiftKey;"click"===e||"keydown"===e&&i===o["j"]?(Object(h["f"])(t),this.$emit(a["f"],t)):"keydown"!==e||this.noKeyNav||(-1!==[o["k"],o["f"],o["e"]].indexOf(i)?(Object(h["f"])(t),n||i===o["e"]?this.$emit(a["r"],t):this.$emit(a["E"],t)):-1!==[o["a"],o["i"],o["b"]].indexOf(i)&&(Object(h["f"])(t),n||i===o["b"]?this.$emit(a["y"],t):this.$emit(a["B"],t)))}}},render:function(t){var e=this.id,i=this.tabIndex,n=this.setSize,s=this.posInSet,r=this.controls,c=this.handleEvt,a=this.tab,o=a.title,l=a.localActive,b=a.disabled,d=a.titleItemClass,f=a.titleLinkClass,h=a.titleLinkAttributes,p=t($["a"],{staticClass:"nav-link",class:[{active:l&&!b,disabled:b},f,l?this.bvTabs.activeNavItemClass:null],props:{disabled:b},attrs:D(D({},h),{},{id:e,role:"tab",tabindex:i,"aria-selected":l&&!b?"true":"false","aria-setsize":n,"aria-posinset":s,"aria-controls":r}),on:{click:c,keydown:c},ref:"link"},[this.tab.normalizeSlot(u["O"])||o]);return t("li",{staticClass:"nav-item",class:[d],attrs:{role:"presentation"}},[p])}}),K=Object(y["j"])(N,["tabs","isNavBar","cardHeader"]),R=Object(w["d"])(Object(y["m"])(D(D(D(D({},C["b"]),A),K),{},{activeNavItemClass:Object(w["c"])(l["e"]),activeTabClass:Object(w["c"])(l["e"]),card:Object(w["c"])(l["g"],!1),contentClass:Object(w["c"])(l["e"]),end:Object(w["c"])(l["g"],!1),lazy:Object(w["c"])(l["g"],!1),navClass:Object(w["c"])(l["e"]),navWrapperClass:Object(w["c"])(l["e"]),noFade:Object(w["c"])(l["g"],!1),noKeyNav:Object(w["c"])(l["g"],!1),noNavStyle:Object(w["c"])(l["g"],!1),tag:Object(w["c"])(l["s"],"div")})),r["rb"]),J=n["default"].extend({name:r["rb"],mixins:[C["a"],F,P["a"]],provide:function(){return{bvTabs:this}},props:R,data:function(){return{currentTab:Object(m["b"])(this[V],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(I={},H(I,V,(function(t,e){if(t!==e){t=Object(m["b"])(t,-1),e=Object(m["b"])(e,0);var i=this.tabs[t];i&&!i.disabled?this.activateTab(i):t<e?this.previousTab():this.nextTab()}})),H(I,"currentTab",(function(t){var e=-1;this.tabs.forEach((function(i,n){n!==t||i.disabled?i.localActive=!1:(i.localActive=!0,e=n)})),this.$emit(L,e)})),H(I,"tabs",(function(t,e){var i=this;Object(O["a"])(t.map((function(t){return t[s["a"]]})),e.map((function(t){return t[s["a"]]})))||this.$nextTick((function(){i.$emit(a["e"],t.slice(),e.slice())}))})),H(I,"registeredTabs",(function(){this.updateTabs()})),I),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){Object(b["a"])(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,e){var i=function(){t.$nextTick((function(){Object(f["B"])((function(){t.updateTabs()}))}))};this.$_observer=Object(T["a"])(this.$refs.content,i,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs.filter((function(t){return 0===t.$children.filter((function(t){return t._isTab})).length})),e=[];if(c["g"]&&t.length>0){var i=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=Object(f["D"])(i,this.$el).map((function(t){return t.id})).filter(p["a"])}return Object(k["a"])(t,(function(t,i){return e.indexOf(t.safeId())-e.indexOf(i.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var i=this.currentTab;i>=t.length?e=t.indexOf(t.slice().reverse().find(U)):t[i]&&!t[i].disabled&&(e=i)}e<0&&(e=t.indexOf(t.find(U))),t.forEach((function(t,i){t.localActive=i===e})),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=this.currentTab,i=this.tabs,n=!1;if(t){var s=i.indexOf(t);if(s!==e&&s>-1&&!t.disabled){var r=new d["a"](a["a"],{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(r.type,s,e,r),r.defaultPrevented||(this.currentTab=s,n=!0)}}return n||this[V]===e||this.$emit(L,e),n},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(U))},focusButton:function(t){var e=this;this.$nextTick((function(){Object(f["d"])(e.getButtonForTab(t))}))},emitTabClick:function(t,e){Object(v["d"])(e)&&t&&t.$emit&&!t.disabled&&t.$emit(a["f"],e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(U);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=Object(j["b"])(this.currentTab,0),i=this.tabs.slice(0,e).reverse().find(U);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},nextTab:function(t){var e=Object(j["b"])(this.currentTab,-1),i=this.tabs.slice(e+1).find(U);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(U);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,i=this.align,n=this.card,r=this.end,c=this.fill,o=this.firstTab,l=this.justified,b=this.lastTab,d=this.nextTab,f=this.noKeyNav,h=this.noNavStyle,p=this.pills,v=this.previousTab,O=this.small,j=this.tabs,g=this.vertical,m=j.find((function(t){return t.localActive&&!t.disabled})),y=j.find((function(t){return!t.disabled})),T=j.map((function(i,n){var r,c=i.safeId,l=null;return f||(l=-1,(i===m||!m&&i===y)&&(l=null)),t(M,{props:{controls:c?c():null,id:i.controlledBy||(c?c("_BV_tab_button_"):null),noKeyNav:f,posInSet:n+1,setSize:j.length,tab:i,tabIndex:l},on:(r={},H(r,a["f"],(function(t){e.clickTab(i,t)})),H(r,a["r"],o),H(r,a["E"],v),H(r,a["B"],d),H(r,a["y"],b),r),key:i[s["a"]]||n,ref:"buttons",refInFor:!0})})),w=t(S,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:c,justified:l,align:i,tabs:!h&&!p,pills:!h&&p,vertical:g,small:O,cardHeader:n&&!g},ref:"nav"},[this.normalizeSlot(u["M"])||t(),T,this.normalizeSlot(u["L"])||t()]);w=t("div",{class:[{"card-header":n&&!g&&!r,"card-footer":n&&!g&&r,"col-auto":g},this.navWrapperClass],key:"bv-tabs-nav"},[w]);var k=this.normalizeSlot()||[],C=t();0===k.length&&(C=t("div",{class:["tab-pane","active",{"card-body":n}],key:"bv-empty-tab"},this.normalizeSlot(u["i"])));var P=t("div",{staticClass:"tab-content",class:[{col:g},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[k,C]);return t(this.tag,{staticClass:"tabs",class:{row:g,"no-gutters":g&&n},attrs:{id:this.safeId()}},[r?P:t(),w,r?t():P])}})}}]);
//# sourceMappingURL=ad~user.9176494c.js.map