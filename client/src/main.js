import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueSanitize from "vue-sanitize";
import VueHead from "vue-head";
import config from "@/utils/config.json";
import VueGtag from "vue-gtag";

Vue.use(VueHead, {
    separator: "–",
    complement: config.website.name
});
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSanitize);

// // GA tracking
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
