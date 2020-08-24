import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueSanitize from "vue-sanitize";
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
    faCalendarTimes
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faMapMarker,
    faBuilding,
    faCalendarAlt,
    faClock,
    faExclamationCircle,
    faHashtag,
    faCalendarTimes,
    farUser,
    faFacebookSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueHead, {
    separator: "–",
    complement: config.website.name
});
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSanitize);

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
    enabled: config.ga.active
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
