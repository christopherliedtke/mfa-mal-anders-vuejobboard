if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}

if (!Object.entries)
    Object.entries = function(obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import config from "@/config/config.json";
Vue.prototype.$config = config;

import axios from "@/utils/axios.js";
Vue.prototype.$axios = axios;

import {
    NavbarPlugin,
    AlertPlugin,
    AvatarPlugin,
    BadgePlugin,
    ButtonPlugin,
    ButtonGroupPlugin,
    ButtonToolbarPlugin,
    CardPlugin,
    FormPlugin,
    FormCheckboxPlugin,
    FormDatepickerPlugin,
    FormFilePlugin,
    FormGroupPlugin,
    FormInputPlugin,
    FormRadioPlugin,
    FormSelectPlugin,
    FormTextareaPlugin,
    ImagePlugin,
    InputGroupPlugin,
    LayoutPlugin,
    LinkPlugin,
    ListGroupPlugin,
    ModalPlugin,
    OverlayPlugin,
    PopoverPlugin,
    TablePlugin,
    TabsPlugin,
    TooltipPlugin,
    SpinnerPlugin,
    ToastPlugin
} from "bootstrap-vue";
Vue.use(NavbarPlugin);
Vue.use(AlertPlugin);
Vue.use(AvatarPlugin);
Vue.use(BadgePlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(ButtonToolbarPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(FormFilePlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormSelectPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(ImagePlugin);
Vue.use(InputGroupPlugin);
Vue.use(LayoutPlugin);
Vue.use(LinkPlugin);
Vue.use(ListGroupPlugin);
Vue.use(ModalPlugin);
Vue.use(OverlayPlugin);
Vue.use(PopoverPlugin);
Vue.use(TablePlugin);
Vue.use(TabsPlugin);
Vue.use(TooltipPlugin);
Vue.use(SpinnerPlugin);
Vue.use(ToastPlugin);

import VueSanitize from "vue-sanitize";
Vue.use(VueSanitize);

import VueHead from "vue-head";
import VueGtag from "vue-gtag";

// FontAwesome Integration
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMapMarker,
    faBuilding,
    faCalendarAlt,
    faClock,
    faExclamationCircle,
    faHashtag,
    faCalendarTimes,
    faUsers,
    faEnvelope,
    faNewspaper,
    faEnvelopeOpenText,
    faStethoscope,
    faComments,
    faFlask,
    faBriefcase,
    faLightbulb,
    faTasks,
    faGift,
    faDoorOpen,
    faSyringe,
    faHospital,
    faUserPlus,
    faDraftingCompass,
    faPaperPlane,
    faUserNurse,
    faCreditCard,
    faDesktop,
    faGlobe,
    faListUl,
    faListOl,
    faUndo,
    faRedo,
    faMinus,
    faTimes,
    faEdit,
    faUser,
    faTrashAlt,
    faPlus,
    faEye,
    faEyeSlash,
    faEllipsisV,
    faShareAlt,
    faSignOutAlt,
    faInfoCircle,
    faInfo,
    faShoppingCart,
    faCheck,
    faLink,
    faAt,
    faMobileAlt,
    faChevronDown,
    faChevronRight,
    faColumns,
    faUserCircle,
    faKey,
    faExternalLinkAlt,
    faSearch,
    faCaretRight,
    faMap,
    faImage,
    faBoxOpen,
    faQuoteRight,
    faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";
// import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import {
    faFacebookSquare,
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp,
    faWpforms,
    faGoogle,
    faChrome
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faMapMarker,
    faBuilding,
    faCalendarAlt,
    faClock,
    faExclamationCircle,
    faHashtag,
    faCalendarTimes,
    faUsers,
    faEnvelope,
    faNewspaper,
    faEnvelopeOpenText,
    faStethoscope,
    faComments,
    faFlask,
    faBriefcase,
    faLightbulb,
    faTasks,
    faGift,
    faDoorOpen,
    faSyringe,
    faHospital,
    faUserPlus,
    faDraftingCompass,
    faPaperPlane,
    faUser,
    faFacebookSquare,
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp,
    faWpforms,
    faGoogle,
    faChrome,
    faUserNurse,
    faCreditCard,
    faDesktop,
    faGlobe,
    faListUl,
    faListOl,
    faUndo,
    faRedo,
    faMinus,
    faTimes,
    faEdit,
    faTrashAlt,
    faPlus,
    faEye,
    faEyeSlash,
    faEllipsisV,
    faCreditCard,
    faShareAlt,
    faSignOutAlt,
    faInfoCircle,
    faInfo,
    faShoppingCart,
    faCheck,
    faLink,
    faAt,
    faMobileAlt,
    faChevronDown,
    faChevronRight,
    faColumns,
    faUserCircle,
    faKey,
    faExternalLinkAlt,
    faSearch,
    faCaretRight,
    faMap,
    faImage,
    faBoxOpen,
    faQuoteRight,
    faUnlockAlt
);

Vue.component("Fa", FontAwesomeIcon);

import Head from "@/components/utils/Head.vue";
Vue.component("Head", Head);

Vue.use(VueHead, {
    separator: "–",
    complement: config.website.name
});

// GA tracking -> tracking in App.vue
Vue.use(VueGtag, {
    config: {
        id: config.ga.trackingCode,
        params: {
            anonymize_ip: config.ga.anonymizeIP,
            client_storage: config.ga.storage,
            send_page_view: false
        }
    },
    enabled:
        config.ga.active && window.location.origin.includes(config.website.url)
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
