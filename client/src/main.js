import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
// Vue.use(BootstrapVueIcons);

import {
    BIcon,
    BIconLink45deg,
    BIconCheck2,
    BIconAt,
    BIconBoxArrowUpRight,
    BIconPhone,
    BIconTrash,
    BIconPencilSquare,
    BIconPlusCircle,
    BIconEye,
    BIconCreditCard,
    BIconCart2,
    BIconShareFill,
    BIconBoxArrowRight,
    BIconTypeBold,
    BIconTypeItalic,
    BIconType,
    BIconTypeH1,
    BIconTypeH2,
    BIconTypeH3,
    BIconListOl,
    BIconListUl,
    BIconSearch,
    BIconCaretRightFill,
    BIconCheck,
    BIconThreeDotsVertical,
    BIconEyeSlashFill,
    BIconX,
    BIconChevronDown,
    BIconChevronRight,
    BIconKanban,
    BIconShieldLock,
    BIconPersonCircle,
    BIconInfo,
    BIconInfoCircleFill,
    BIconChevronBarContract,
    BIconArrowReturnLeft,
    BIconArrowReturnRight,
    BIconMap,
    BIconCardImage,
    BIconBox,
    BIconQuestion
} from "bootstrap-vue";

Vue.component("BIcon", BIcon);
Vue.component("BIconLink45deg", BIconLink45deg);
Vue.component("BIconCheck2", BIconCheck2);
Vue.component("BIconAt", BIconAt);
Vue.component("BIconBoxArrowUpRight", BIconBoxArrowUpRight);
Vue.component("BIconPhone", BIconPhone);
Vue.component("BIconTrash", BIconTrash);
Vue.component("BIconPencilSquare", BIconPencilSquare);
Vue.component("BIconPlusCircle", BIconPlusCircle);
Vue.component("BIconEye", BIconEye);
Vue.component("BIconCreditCard", BIconCreditCard);
Vue.component("BIconCart2", BIconCart2);
Vue.component("BIconShareFill", BIconShareFill);
Vue.component("BIconBoxArrowRight", BIconBoxArrowRight);
Vue.component("BIconTypeBold", BIconTypeBold);
Vue.component("BIconTypeItalic", BIconTypeItalic);
Vue.component("BIconType", BIconType);
Vue.component("BIconTypeH1", BIconTypeH1);
Vue.component("BIconTypeH2", BIconTypeH2);
Vue.component("BIconTypeH3", BIconTypeH3);
Vue.component("BIconListOl", BIconListOl);
Vue.component("BIconListUl", BIconListUl);
Vue.component("BIconSearch", BIconSearch);
Vue.component("BIconCaretRightFill", BIconCaretRightFill);
Vue.component("BIconCheck", BIconCheck);
Vue.component("BIconThreeDotsVertical", BIconThreeDotsVertical);
Vue.component("BIconEyeSlashFill", BIconEyeSlashFill);
Vue.component("BIconX", BIconX);
Vue.component("BIconChevronDown", BIconChevronDown);
Vue.component("BIconChevronRight", BIconChevronRight);
Vue.component("BIconKanban", BIconKanban);
Vue.component("BIconShieldLock", BIconShieldLock);
Vue.component("BIconPersonCircle", BIconPersonCircle);
Vue.component("BIconInfo", BIconInfo);
Vue.component("BIconInfoCircleFill", BIconInfoCircleFill);
Vue.component("BIconChevronBarContract", BIconChevronBarContract);
Vue.component("BIconArrowReturnLeft", BIconArrowReturnLeft);
Vue.component("BIconArrowReturnRight", BIconArrowReturnRight);
Vue.component("BIconMap", BIconMap);
Vue.component("BIconCardImage", BIconCardImage);
Vue.component("BIconBox", BIconBox);
Vue.component("BIconQuestion", BIconQuestion);

import VueSanitize from "vue-sanitize";
Vue.use(VueSanitize);

import VueHead from "vue-head";
import config from "@/utils/config.json";
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
    faCreditCard
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
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
    farUser,
    faFacebookSquare,
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp,
    faWpforms,
    faGoogle,
    faChrome,
    faUserNurse,
    faCreditCard
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

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
