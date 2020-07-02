import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueSanitize from "vue-sanitize";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSanitize);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
