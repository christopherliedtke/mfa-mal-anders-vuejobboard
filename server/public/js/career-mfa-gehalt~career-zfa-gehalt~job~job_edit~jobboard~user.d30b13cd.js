(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-mfa-gehalt~career-zfa-gehalt~job~job_edit~jobboard~user"],{"8df8":function(t,e,i){"use strict";i.d(e,"a",(function(){return E}));var n=i("dcb3"),o=i("be29"),a=i("3c21"),r=i("a8c8"),s=i("f07e"),c=i("2326"),l=i("906c"),h=i("6b77"),d=i("d82f"),u=i("7b1e"),p=i("3a58"),f=i("686b"),b=i("6d40"),m=i("df44");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){T(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O="BVTooltip",$=".modal-content",y="bv::modal::hidden",j=".b-sidebar",w=[$,j].join(", "),_="dropdown",S=".dropdown-menu.show",P={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,interactive:!0,disabled:!1,id:null,html:!1},E=n["a"].extend({name:O,props:{},data:function(){return g(g({},P),{},{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function(){return"tooltip"},computedId:function(){return this.id||"__bv_".concat(this.templateType,"_").concat(this._uid,"__")},computedDelay:function(){var t={show:0,hide:0};return Object(d["k"])(this.delay)?(t.show=Object(r["c"])(Object(p["b"])(this.delay.show,0),0),t.hide=Object(r["c"])(Object(p["b"])(this.delay.hide,0),0)):(Object(u["g"])(this.delay)||Object(u["j"])(this.delay))&&(t.show=t.hide=Object(r["c"])(Object(p["b"])(this.delay,0),0)),t},computedTriggers:function(){return Object(c["b"])(this.triggers).filter(Boolean).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function(){for(var t in this.activeTrigger)if(this.activeTrigger[t])return!0;return!1},computedTemplateData:function(){return{title:this.title,content:this.content,variant:this.variant,customClass:this.customClass,noFade:this.noFade,interactive:this.interactive}}},watch:{computedTriggers:function(t,e){var i=this;Object(a["a"])(t,e)||this.$nextTick((function(){i.unListen(),e.forEach((function(e){Object(c["a"])(t,e)||i.activeTrigger[e]&&(i.activeTrigger[e]=!1)})),i.listen()}))},computedTemplateData:function(){this.handleTemplateUpdate()},disabled:function(t){t?this.disable():this.enable()}},created:function(){var t=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=s["a"].bind(this),this.$parent&&this.$parent.$once("hook:beforeDestroy",this.$destroy),this.$nextTick((function(){var e=t.getTarget();e&&Object(l["f"])(document.body,e)?(t.scopeId=Object(o["a"])(t.$parent),t.listen()):Object(f["a"])("Unable to find target element in document.",t.templateType)}))},updated:function(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function(){this.forceHide()},beforeDestroy:function(){this.unListen(),this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.clearVisibilityInterval(),this.destroyTemplate(),this.$_noop=null},methods:{getTemplate:function(){return m["a"]},updateData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!1;Object(d["l"])(P).forEach((function(n){Object(u["k"])(e[n])||t[n]===e[n]||(t[n]=e[n],"title"===n&&(i=!0))})),i&&this.localShow&&this.fixTitle()},createTemplateAndShow:function(){var t=this.getContainer(),e=this.getTemplate(),i=this.$_tip=new e({parent:this,propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:Object(p["b"])(this.offset,0),arrowPadding:Object(p["b"])(this.arrowPadding,0),boundaryPadding:Object(p["b"])(this.boundaryPadding,0)}});this.handleTemplateUpdate(),i.$once("show",this.onTemplateShow),i.$once("shown",this.onTemplateShown),i.$once("hide",this.onTemplateHide),i.$once("hidden",this.onTemplateHidden),i.$once("hook:destroyed",this.destroyTemplate),i.$on("focusin",this.handleEvent),i.$on("focusout",this.handleEvent),i.$on("mouseenter",this.handleEvent),i.$on("mouseleave",this.handleEvent),i.$mount(t.appendChild(document.createElement("div")))},hideTemplate:function(){this.$_tip&&this.$_tip.hide(),this.clearActiveTriggers(),this.$_hoverState=""},destroyTemplate:function(){this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip.$destroy()}catch(t){}this.$_tip=null,this.removeAriaDescribedby(),this.restoreTitle(),this.localShow=!1},getTemplateElement:function(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function(){var t=this,e=this.$_tip;if(e){var i=["title","content","variant","customClass","noFade","interactive"];i.forEach((function(i){e[i]!==t[i]&&(e[i]=t[i])}))}},show:function(){var t=this.getTarget();if(t&&Object(l["f"])(document.body,t)&&Object(l["t"])(t)&&!this.dropdownOpen()&&(!Object(u["l"])(this.title)&&""!==this.title||!Object(u["l"])(this.content)&&""!==this.content)&&!this.$_tip&&!this.localShow){this.localShow=!0;var e=this.buildEvent("show",{cancelable:!0});this.emitEvent(e),e.defaultPrevented?this.destroyTemplate():(this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow())}},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.getTemplateElement();if(e&&this.localShow){var i=this.buildEvent("hide",{cancelable:!t});this.emitEvent(i),i.defaultPrevented||this.hideTemplate()}else this.restoreTitle()},forceHide:function(){var t=this.getTemplateElement();t&&this.localShow&&(this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function(){this.$_enabled=!0,this.emitEvent(this.buildEvent("enabled"))},disable:function(){this.$_enabled=!1,this.emitEvent(this.buildEvent("disabled"))},onTemplateShow:function(){this.setWhileOpenListeners(!0)},onTemplateShown:function(){var t=this.$_hoverState;this.$_hoverState="","out"===t&&this.leave(null),this.emitEvent(this.buildEvent("shown"))},onTemplateHide:function(){this.setWhileOpenListeners(!1)},onTemplateHidden:function(){this.destroyTemplate(),this.emitEvent(this.buildEvent("hidden"))},getTarget:function(){var t=this.target?this.target.$el||this.target:null;return t=Object(u["j"])(t)?Object(l["j"])(t.replace(/^#/,"")):t,t=Object(u["e"])(t)?t():t,Object(l["r"])(t)?t:null},getPlacementTarget:function(){return this.getTarget()},getTargetId:function(){var t=this.getTarget();return t&&t.id?t.id:null},getContainer:function(){var t=!!this.container&&(this.container.$el||this.container),e=document.body,i=this.getTarget();return!1===t?Object(l["e"])(w,i)||e:Object(u["j"])(t)&&Object(l["j"])(t.replace(/^#/,""))||e},getBoundary:function(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function(){var t=this.getTarget();return t&&Object(l["e"])($,t)},isDropdown:function(){var t=this.getTarget();return t&&Object(l["o"])(t,_)},dropdownOpen:function(){var t=this.getTarget();return this.isDropdown()&&t&&Object(l["A"])(S,t)},clearHoverTimeout:function(){clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null},clearVisibilityInterval:function(){clearInterval(this.$_visibleInterval),this.$_visibleInterval=null},clearActiveTriggers:function(){for(var t in this.activeTrigger)this.activeTrigger[t]=!1},addAriaDescribedby:function(){var t=this.getTarget(),e=Object(l["h"])(t,"aria-describedby")||"";e=e.split(/\s+/).concat(this.computedId).join(" ").trim(),Object(l["C"])(t,"aria-describedby",e)},removeAriaDescribedby:function(){var t=this,e=this.getTarget(),i=Object(l["h"])(e,"aria-describedby")||"";i=i.split(/\s+/).filter((function(e){return e!==t.computedId})).join(" ").trim(),i?Object(l["C"])(e,"aria-describedby",i):Object(l["w"])(e,"aria-describedby")},fixTitle:function(){var t=this.getTarget();t&&Object(l["h"])(t,"title")&&(Object(l["C"])(t,"data-original-title",Object(l["h"])(t,"title")||""),Object(l["C"])(t,"title",""))},restoreTitle:function(){var t=this.getTarget();t&&Object(l["n"])(t,"data-original-title")&&(Object(l["C"])(t,"title",Object(l["h"])(t,"data-original-title")||""),Object(l["w"])(t,"data-original-title"))},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new b["a"](t,g({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},e))},emitEvent:function(t){var e=t.type,i=this.$root;i&&i.$emit&&i.$emit("bv::".concat(this.templateType,"::").concat(e),t),this.$emit(e,t)},listen:function(){var t=this,e=this.getTarget();e&&(this.setRootListener(!0),this.computedTriggers.forEach((function(i){"click"===i?Object(h["d"])(e,"click",t.handleEvent,h["a"]):"focus"===i?(Object(h["d"])(e,"focusin",t.handleEvent,h["a"]),Object(h["d"])(e,"focusout",t.handleEvent,h["a"])):"blur"===i?Object(h["d"])(e,"focusout",t.handleEvent,h["a"]):"hover"===i&&(Object(h["d"])(e,"mouseenter",t.handleEvent,h["a"]),Object(h["d"])(e,"mouseleave",t.handleEvent,h["a"]))}),this))},unListen:function(){var t=this,e=["click","focusin","focusout","mouseenter","mouseleave"],i=this.getTarget();this.setRootListener(!1),e.forEach((function(e){i&&Object(h["c"])(i,e,t.handleEvent,h["a"])}),this)},setRootListener:function(t){var e=this.$root;if(e){var i=t?"$on":"$off",n=this.templateType;e[i]("bv::hide::".concat(n),this.doHide),e[i]("bv::show::".concat(n),this.doShow),e[i]("bv::disable::".concat(n),this.doDisable),e[i]("bv::enable::".concat(n),this.doEnable)}},setWhileOpenListeners:function(t){this.setModalListener(t),this.setDropdownListener(t),this.visibleCheck(t),this.setOnTouchStartListener(t)},visibleCheck:function(t){var e=this;this.clearVisibilityInterval();var i=this.getTarget(),n=this.getTemplateElement();t&&(this.$_visibleInterval=setInterval((function(){!n||!e.localShow||i.parentNode&&Object(l["t"])(i)||e.forceHide()}),100))},setModalListener:function(t){this.isInModal()&&this.$root[t?"$on":"$off"](y,this.forceHide)},setOnTouchStartListener:function(t){var e=this;"ontouchstart"in document.documentElement&&Object(c["c"])(document.body.children).forEach((function(i){Object(h["e"])(t,i,"mouseover",e.$_noop)}))},setDropdownListener:function(t){var e=this.getTarget();e&&this.$root&&this.isDropdown&&e.__vue__&&e.__vue__[t?"$on":"$off"]("shown",this.forceHide)},handleEvent:function(t){var e=this.getTarget();if(e&&!Object(l["q"])(e)&&this.$_enabled&&!this.dropdownOpen()){var i=t.type,n=this.computedTriggers;if("click"===i&&Object(c["a"])(n,"click"))this.click(t);else if("mouseenter"===i&&Object(c["a"])(n,"hover"))this.enter(t);else if("focusin"===i&&Object(c["a"])(n,"focus"))this.enter(t);else if("focusout"===i&&(Object(c["a"])(n,"focus")||Object(c["a"])(n,"blur"))||"mouseleave"===i&&Object(c["a"])(n,"hover")){var o=this.getTemplateElement(),a=t.target,r=t.relatedTarget;if(o&&Object(l["f"])(o,a)&&Object(l["f"])(e,r)||o&&Object(l["f"])(e,a)&&Object(l["f"])(o,r)||o&&Object(l["f"])(o,a)&&Object(l["f"])(o,r)||Object(l["f"])(e,a)&&Object(l["f"])(e,r))return;this.leave(t)}}},doHide:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.forceHide()},doShow:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.show()},doDisable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.disable()},doEnable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.enable()},click:function(t){this.$_enabled&&!this.dropdownOpen()&&(Object(l["d"])(t.currentTarget),this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function(){this.$_enabled&&!this.dropdownOpen()&&(this.localShow?this.leave(null):this.enter(null))},enter:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusin"===e.type?"focus":"hover"]=!0),this.localShow||"in"===this.$_hoverState?this.$_hoverState="in":(this.clearHoverTimeout(),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.$_hoverTimeout=setTimeout((function(){"in"===t.$_hoverState?t.show():t.localShow||t.restoreTitle()}),this.computedDelay.show)):this.show())},leave:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusout"===e.type?"focus":"hover"]=!1,"focusout"===e.type&&Object(c["a"])(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),this.isWithActiveTrigger||(this.clearHoverTimeout(),this.$_hoverState="out",this.computedDelay.hide?this.$_hoverTimeout=setTimeout((function(){"out"===t.$_hoverState&&t.hide()}),this.computedDelay.hide):this.hide())}}})},b4ae:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("dcb3"),o=i("be29"),a=i("2326"),r=i("228e"),s=i("7b1e"),c=i("a5d7"),l=i("8df8"),h="BTooltip",d=n["a"].extend({name:h,props:{title:{type:String},target:{type:[String,c["b"],c["c"],Function,Object],required:!0},triggers:{type:[String,Array],default:"hover focus"},placement:{type:String,default:"top"},fallbackPlacement:{type:[String,Array],default:"flip",validator:function(t){return Object(a["d"])(t)&&t.every((function(t){return Object(s["j"])(t)}))||Object(a["a"])(["flip","clockwise","counterclockwise"],t)}},variant:{type:String,default:function(){return Object(r["c"])(h,"variant")}},customClass:{type:String,default:function(){return Object(r["c"])(h,"customClass")}},delay:{type:[Number,Object,String],default:function(){return Object(r["c"])(h,"delay")}},boundary:{type:[String,c["b"],Object],default:function(){return Object(r["c"])(h,"boundary")}},boundaryPadding:{type:[Number,String],default:function(){return Object(r["c"])(h,"boundaryPadding")}},offset:{type:[Number,String],default:0},noFade:{type:Boolean,default:!1},container:{type:[String,c["b"],Object]},show:{type:Boolean,default:!1},noninteractive:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{type:String}},data:function(){return{localShow:this.show,localTitle:"",localContent:""}},computed:{templateData:function(){return{title:this.localTitle,content:this.localContent,target:this.target,triggers:this.triggers,placement:this.placement,fallbackPlacement:this.fallbackPlacement,variant:this.variant,customClass:this.customClass,container:this.container,boundary:this.boundary,boundaryPadding:this.boundaryPadding,delay:this.delay,offset:this.offset,noFade:this.noFade,interactive:!this.noninteractive,disabled:this.disabled,id:this.id}},templateTitleContent:function(){return{title:this.title,content:this.content}}},watch:{show:function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())},disabled:function(t){t?this.doDisable():this.doEnable()},localShow:function(t){this.$emit("update:show",t)},templateData:function(){var t=this;this.$nextTick((function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)}))},templateTitleContent:function(){this.$nextTick(this.updateContent)}},created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off("open",this.doOpen),this.$off("close",this.doClose),this.$off("disable",this.doDisable),this.$off("enable",this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var i=Object(o["a"])(t)||Object(o["a"])(t.$parent),n=t.$_toolpop=new e({parent:t,_scopeId:i||void 0});n.updateData(t.templateData),n.$on("show",t.onShow),n.$on("shown",t.onShown),n.$on("hide",t.onHide),n.$on("hidden",t.onHidden),n.$on("disabled",t.onDisabled),n.$on("enabled",t.onEnabled),t.disabled&&t.doDisable(),t.$on("open",t.doOpen),t.$on("close",t.doClose),t.$on("disable",t.doDisable),t.$on("enable",t.doEnable),t.localShow&&n.show()}))},methods:{getComponent:function(){return l["a"]},updateContent:function(){this.setTitle(this.$scopedSlots.default||this.title)},setTitle:function(t){t=Object(s["l"])(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=Object(s["l"])(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit("show",t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit("shown",t)},onHide:function(t){this.$emit("hide",t)},onHidden:function(t){this.$emit("hidden",t),this.localShow=!1},onDisabled:function(t){t&&"disabled"===t.type&&(this.$emit("update:disabled",!0),this.$emit("disabled",t))},onEnabled:function(t){t&&"enabled"===t.type&&(this.$emit("update:disabled",!1),this.$emit("enabled",t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}})},df44:function(t,e,i){"use strict";i.d(e,"a",(function(){return T}));var n=i("dcb3"),o=i("2f76"),a=i("7b1e"),r=i("f0bd"),s=i("906c"),c=i("3a58"),l=i("a5d7"),h=i("3702"),d="BVPopper",u={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},p={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},f=n["a"].extend({name:d,props:{target:{type:[l["b"],l["c"]]},placement:{type:String,default:"top"},fallbackPlacement:{type:[String,Array],default:"flip"},offset:{type:Number,default:0},boundary:{type:[String,l["b"]],default:"scrollParent"},boundaryPadding:{type:Number,default:5},arrowPadding:{type:Number,default:6}},data:function(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function(){return"unknown"},popperConfig:function(){var t=this,e=this.placement;return{placement:this.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t.popperPlacementChange(e)},onUpdate:function(e){t.popperPlacementChange(e)}}}},created:function(){var t=this;this.$_popper=null,this.localShow=!0,this.$on("show",(function(e){t.popperCreate(e)})),this.$on("hidden",(function(){t.$nextTick(t.$destroy)})),this.$parent.$once("hook:destroyed",this.$destroy)},beforeMount:function(){this.attachment=this.getAttachment(this.placement)},mounted:function(){},updated:function(){this.updatePopper()},beforeDestroy:function(){this.destroyPopper()},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{hide:function(){this.localShow=!1},getAttachment:function(t){return u[String(t).toUpperCase()]||"auto"},getOffset:function(t){if(!this.offset){var e=this.$refs.arrow||Object(s["A"])(".arrow",this.$el),i=Object(c["a"])(Object(s["k"])(e).width,0)+Object(c["a"])(this.arrowPadding,0);switch(p[String(t).toUpperCase()]||0){case 1:return"+50%p - ".concat(i,"px");case-1:return"-50%p + ".concat(i,"px");default:return 0}}return this.offset},popperCreate:function(t){this.destroyPopper(),this.$_popper=new r["a"](this.target,t,this.popperConfig)},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function(t){this.attachment=this.getAttachment(t.placement)},renderTemplate:function(t){return t("div")}},render:function(t){var e=this;return t(h["a"],{props:{appear:!0,noFade:this.noFade},on:{beforeEnter:function(t){return e.$emit("show",t)},afterEnter:function(t){return e.$emit("shown",t)},beforeLeave:function(t){return e.$emit("hide",t)},afterLeave:function(t){return e.$emit("hidden",t)}}},[this.localShow?this.renderTemplate(t):t()])}});function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g="BVTooltipTemplate",T=n["a"].extend({name:g,extends:f,mixins:[o["a"]],props:{id:{type:String},html:{type:Boolean}},data:function(){return{title:"",content:"",variant:null,customClass:null,interactive:!0}},computed:{templateType:function(){return"tooltip"},templateClasses:function(){var t;return[(t={noninteractive:!this.interactive},v(t,"b-".concat(this.templateType,"-").concat(this.variant),this.variant),v(t,"bs-".concat(this.templateType,"-").concat(this.attachment),this.attachment),t),this.customClass]},templateAttributes:function(){return m({id:this.id,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function(){var t=this;return{mouseenter:function(e){t.$emit("mouseenter",e)},mouseleave:function(e){t.$emit("mouseleave",e)},focusin:function(e){t.$emit("focusin",e)},focusout:function(e){t.$emit("focusout",e)}}}},methods:{renderTemplate:function(t){var e=Object(a["e"])(this.title)?this.title({}):Object(a["l"])(this.title)?t():this.title,i=this.html&&!Object(a["e"])(this.title)?{innerHTML:this.title}:{};return t("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{ref:"arrow",staticClass:"arrow"}),t("div",{staticClass:"tooltip-inner",domProps:i},[e])])}}})},f07e:function(t,e,i){"use strict";var n=function(){};e["a"]=n}}]);
//# sourceMappingURL=career-mfa-gehalt~career-zfa-gehalt~job~job_edit~jobboard~user.d30b13cd.js.map