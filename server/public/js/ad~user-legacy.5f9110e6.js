(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ad~user"],{"159b":function(t,e,i){var n=i("da84"),r=i("fdbc"),s=i("785a"),o=i("17c2"),c=i("9112"),a=function(t){if(t&&t.forEach!==o)try{c(t,"forEach",o)}catch(e){t.forEach=o}};for(var l in r)r[l]&&a(n[l]&&n[l].prototype);a(s)},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,r=i("a640"),s=r("forEach");t.exports=s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},8515:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n=function(t,e){return t.map((function(t,e){return[e,t]})).sort(function(t,e){return this(t[1],e[1])||t[0]-e[0]}.bind(e)).map((function(t){return t[1]}))}},"95ae":function(t,e,i){"use strict";i.d(e,"b",(function(){return F})),i.d(e,"a",(function(){return S}));var n=i("f0bd"),r=i("2b0e"),s=i("c637"),o=i("0056"),c=i("9bfa"),a="top-start",l="top-end",u="bottom-start",h="bottom-end",f="right-start",b="left-start",d=i("a723"),p=i("ca88"),O=i("6d40"),g=i("906c"),v=i("6b77"),m=i("7b1e"),j=i("d82f"),y=i("cf75"),w=i("686b"),k=r["default"].extend({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(v["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,o["U"]),t&&Object(v["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,o["U"]))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(v["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,o["U"])},beforeDestroy:function(){Object(v["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,o["U"])},methods:{isClickOut:function(t){return!Object(g["f"])(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),C=r["default"].extend({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(v["a"])(this.focusInElement,"focusin",this._focusInHandler,o["U"]),t&&Object(v["b"])(this.focusInElement,"focusin",this._focusInHandler,o["U"]))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(v["b"])(this.focusInElement,"focusin",this._focusInHandler,o["U"])},beforeDestroy:function(){Object(v["a"])(this.focusInElement,"focusin",this._focusInHandler,o["U"])},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),P=i("90ef"),E=i("602d");function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){T(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var x=Object(v["e"])(s["k"],o["Q"]),I=Object(v["e"])(s["k"],o["v"]),H=".dropdown form",D=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),N=function(t){return(t||[]).filter(g["u"])},F=Object(y["c"])(Object(j["m"])(_(_({},P["b"]),{},{boundary:Object(y["b"])([p["c"],d["s"]],"scrollParent"),disabled:Object(y["b"])(d["g"],!1),dropleft:Object(y["b"])(d["g"],!1),dropright:Object(y["b"])(d["g"],!1),dropup:Object(y["b"])(d["g"],!1),noFlip:Object(y["b"])(d["g"],!1),offset:Object(y["b"])(d["n"],0),popperOpts:Object(y["b"])(d["o"],{}),right:Object(y["b"])(d["g"],!1)})),s["k"]),S=r["default"].extend({mixins:[P["a"],E["a"],k,C],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:F,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(m["g"])(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var i=t?o["P"]:o["w"],n=new O["a"](i,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(n),n.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off(o["v"],this.focusToggler);t?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.emitOnRoot(Object(v["e"])(s["k"],e),t),this.$emit(e,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if("undefined"===typeof n["a"])Object(w["a"])("Popper.js not found. Falling back to CSS positioning",s["k"]);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.emitOnRoot(x,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit(o["Q"])}))}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(I,this),this.$emit(o["v"]),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new n["a"](t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t=u;this.dropup?t=this.right?l:a:this.dropright?t=f:this.dropleft?t=b:this.right&&(t=h);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},i=this.boundary;return i&&(e.modifiers.preventOverflow={boundariesElement:i}),Object(j["i"])(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](x,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(g["B"])((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once(o["v"],this.focusToggler))},toggle:function(t){t=t||{};var e=t,i=e.type,n=e.keyCode;("click"===i||"keydown"===i&&-1!==[c["c"],c["j"],c["a"]].indexOf(n))&&(this.disabled?this.visible=!1:(this.$emit(o["S"],t),Object(v["f"])(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Object(v["f"])(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===c["d"]?this.onEsc(t):e===c["a"]?this.focusNext(t,!1):e===c["k"]&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Object(v["f"])(t),this.$once(o["v"],this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit(o["f"],t)},hideHandler:function(t){var e=this,i=t.target;!this.visible||Object(g["f"])(this.$refs.menu,i)||Object(g["f"])(this.toggler,i)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.inNavbar?300:0))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var i=this,n=t.target;!this.visible||t&&Object(g["e"])(H,n)||(Object(v["f"])(t),this.$nextTick((function(){var t=i.getItems();if(!(t.length<1)){var r=t.indexOf(n);e&&r>0?r--:!e&&r<t.length-1&&r++,r<0&&(r=0),i.focusItem(r,t)}})))},focusItem:function(t,e){var i=e.find((function(e,i){return i===t}));Object(g["d"])(i)},getItems:function(){return N(Object(g["D"])(D,this.$refs.menu))},focusMenu:function(){Object(g["d"])(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){Object(g["d"])(t.toggler)}))}}})},"9eaa":function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var n=i("2b0e"),r=i("c637"),s=i("0056"),o=i("a723"),c=i("906c"),a=i("d82f"),l=i("cf75"),u=i("493b"),h=i("8c18"),f=i("aa59");function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=Object(a["j"])(f["b"],["event","routerTag"]),g=Object(l["c"])(Object(a["m"])(d(d({},O),{},{linkClass:Object(l["b"])(o["e"]),variant:Object(l["b"])(o["s"])})),r["l"]),v=n["default"].extend({name:r["l"],mixins:[u["a"],h["a"]],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:g,computed:{computedAttrs:function(){return d(d({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;Object(c["B"])((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit(s["f"],t),this.closeDropdown()}},render:function(t){var e=this.linkClass,i=this.variant,n=this.active,r=this.disabled,s=this.onClick,o=this.bvAttrs;return t("li",{class:o.class,style:o.style,attrs:{role:"presentation"}},[t(f["a"],{staticClass:"dropdown-item",class:[e,p({},"text-".concat(i),i&&!(n||r))],props:Object(l["d"])(O,this.$props),attrs:this.computedAttrs,on:{click:s},ref:"item"},this.normalizeSlot())])}})},a434:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),s=i("23cb"),o=i("5926"),c=i("07fa"),a=i("7b0b"),l=i("65f0"),u=i("8418"),h=i("1dde"),f=h("splice"),b=r.TypeError,d=Math.max,p=Math.min,O=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var i,n,r,h,f,v,m=a(this),j=c(m),y=s(t,j),w=arguments.length;if(0===w?i=n=0:1===w?(i=0,n=j-y):(i=w-2,n=p(d(o(e),0),j-y)),j+i-n>O)throw b(g);for(r=l(m,n),h=0;h<n;h++)f=y+h,f in m&&u(r,h,m[f]);if(r.length=n,i<n){for(h=y;h<j-n;h++)f=h+n,v=h+i,f in m?m[v]=m[f]:delete m[v];for(h=j;h>j-n+i;h--)delete m[h-1]}else if(i>n)for(h=j-n;h>y;h--)f=h+n-1,v=h+i-1,f in m?m[v]=m[f]:delete m[v];for(h=0;h<i;h++)m[h+y]=arguments[h+2];return m.length=j-n+i,r}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},d81d:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").map,s=i("1dde"),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dd9a:function(t,e,i){"use strict";i.d(e,"a",(function(){return j}));var n=i("2b0e"),r=i("c637"),s=i("a723"),o=i("9b76"),c=i("2326"),a=i("8690"),l=i("cf75"),u=i("fa73"),h=i("95ae"),f=i("90ef"),b=i("8c18"),d=i("1947"),p=i("d82f");function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?O(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m=Object(l["c"])(Object(p["m"])(g(g(g({},f["b"]),h["b"]),{},{block:Object(l["b"])(s["g"],!1),html:Object(l["b"])(s["s"]),lazy:Object(l["b"])(s["g"],!1),menuClass:Object(l["b"])(s["e"]),noCaret:Object(l["b"])(s["g"],!1),role:Object(l["b"])(s["s"],"menu"),size:Object(l["b"])(s["s"]),split:Object(l["b"])(s["g"],!1),splitButtonType:Object(l["b"])(s["s"],"button",(function(t){return Object(c["a"])(["button","submit","reset"],t)})),splitClass:Object(l["b"])(s["e"]),splitHref:Object(l["b"])(s["s"]),splitTo:Object(l["b"])(s["q"]),splitVariant:Object(l["b"])(s["s"]),text:Object(l["b"])(s["s"]),toggleClass:Object(l["b"])(s["e"]),toggleTag:Object(l["b"])(s["s"],"button"),toggleText:Object(l["b"])(s["s"],"Toggle dropdown"),variant:Object(l["b"])(s["s"],"secondary")})),r["k"]),j=n["default"].extend({name:r["k"],mixins:[f["a"],h["a"],b["a"]],props:m,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,i=this.variant,n=this.size,r=this.block,s=this.disabled,c=this.split,l=this.role,h=this.hide,f=this.toggle,b={variant:i,size:n,block:r,disabled:s},p=this.normalizeSlot(o["c"]),O=this.hasNormalizedSlot(o["c"])?{}:Object(a["a"])(this.html,this.text),v=t();if(c){var m=this.splitTo,j=this.splitHref,y=this.splitButtonType,w=g(g({},b),{},{variant:this.splitVariant||i});m?w.to=m:j?w.href=j:y&&(w.type=y),v=t(d["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:w,domProps:O,on:{click:this.onSplitClick},ref:"button"},p),p=[t("span",{class:["sr-only"]},[this.toggleText])],O={}}var k=t(d["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(u["g"])(e)},props:g(g({},b),{},{tag:this.toggleTag,block:r&&!c}),domProps:O,on:{mousedown:this.onMousedown,click:f,keydown:f},ref:"toggle"},p),C=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:l,tabindex:"-1","aria-labelledby":this.safeId(c?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(o["e"],{hide:h}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[v,k,C])}})},e6c7:function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var n=i("c637"),r=i("0056"),s=i("9bfa"),o=i("906c"),c=i("6b77"),a=i("7b1e"),l=i("d82f"),u=Object(c["d"])(n["O"],r["P"]),h="__bv_modal_directive__",f=function(t){var e=t.modifiers,i=void 0===e?{}:e,n=t.arg,r=t.value;return Object(a["n"])(r)?r:Object(a["n"])(n)?n:Object(l["h"])(i).reverse()[0]},b=function(t){return t&&Object(o["v"])(t,".dropdown-menu > li, li.nav-item")&&Object(o["C"])("a, button",t)||t},d=function(t){t&&"BUTTON"!==t.tagName&&(Object(o["o"])(t,"role")||Object(o["E"])(t,"role","button"),"A"===t.tagName||Object(o["o"])(t,"tabindex")||Object(o["E"])(t,"tabindex","0"))},p=function(t,e,i){var n=f(e),a=b(t);if(n&&a){var l=function(t){var e=t.currentTarget;if(!Object(o["r"])(e)){var r=t.type,c=t.keyCode;"click"!==r&&("keydown"!==r||c!==s["c"]&&c!==s["j"])||i.context.$root.$emit(u,n,e)}};t[h]={handler:l,target:n,trigger:a},d(a),Object(c["b"])(a,"click",l,r["V"]),"BUTTON"!==a.tagName&&"button"===Object(o["h"])(a,"role")&&Object(c["b"])(a,"keydown",l,r["V"])}},O=function(t){var e=t[h]||{},i=e.trigger,n=e.handler;i&&n&&(Object(c["a"])(i,"click",n,r["V"]),Object(c["a"])(i,"keydown",n,r["V"]),Object(c["a"])(t,"click",n,r["V"]),Object(c["a"])(t,"keydown",n,r["V"])),delete t[h]},g=function(t,e,i){var n=t[h]||{},r=f(e),s=b(t);r===n.target&&s===n.trigger||(O(t,e,i),p(t,e,i)),d(s)},v=function(){},m={inserted:g,updated:v,componentUpdated:g,unbind:O}}}]);
//# sourceMappingURL=ad~user-legacy.5f9110e6.js.map