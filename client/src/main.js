// #Custom Polyfills
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

// #Global Async Loadscript Integration
import LoadScript from "vue-plugin-load-script";
Vue.use(LoadScript);

// #Global Config Integration
import config from "@/config/config.js";
Vue.prototype.$config = config;

// #Global Axios Integration
import axios from "@/services/axios.js";
Vue.prototype.$axios = axios;

// #CookieConsentManager
import VueCookieBot from "@ambitiondev/vue-cookiebot-plugin";
Vue.use(VueCookieBot, {
  cookieBotID: "9ef6bac5-150d-40d3-a91e-7448f7e6848b",
  defaulLocale: "de"
});

// #Bootstrap Integration
import {
  // NavbarPlugin,
  // DropdownPlugin,
  // CollapsePlugin,
  AlertPlugin,
  ButtonPlugin,
  FormPlugin,
  FormCheckboxPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormRadioPlugin,
  FormSelectPlugin,
  FormTextareaPlugin,
  ImagePlugin,
  InputGroupPlugin,
  // LayoutPlugin,
  LinkPlugin,
  ToastPlugin,
  BreadcrumbPlugin
} from "bootstrap-vue";

// Vue.use(NavbarPlugin);
// Vue.use(DropdownPlugin);
// Vue.use(CollapsePlugin);
Vue.use(AlertPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormSelectPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(ImagePlugin);
Vue.use(InputGroupPlugin);
// Vue.use(LayoutPlugin);
Vue.use(LinkPlugin);
Vue.use(ToastPlugin);
Vue.use(BreadcrumbPlugin);

// #Custom Global Styles Integration
import "./styles/app.scss";

// #Global Head Integration
import VueHead from "vue-head";
import Head from "@/components/Head.vue";
Vue.component("Head", Head);
Vue.use(VueHead, {
  separator: "–",
  complement: config.website.name
});

// #Analytics Integration
import VueGtag from "vue-gtag";
Vue.use(
  VueGtag,
  {
    // disableScriptLoad: true,
    // bootstrap: false,
    config: {
      id: "G-BF8L4F2PWL",
      params: {
        anonymize_ip: config.ga.anonymizeIP,
        client_storage: config.ga.storage
        // send_page_view: false
      }
      // id: config.ga.trackingCode,
      // params: {
      //   anonymize_ip: config.ga.anonymizeIP,
      //   client_storage: config.ga.storage,
      //   send_page_view: false
      // }
    },
    includes: [
      // {
      //   id: "G-BF8L4F2PWL",
      //   params: {
      //     anonymize_ip: config.ga.anonymizeIP,
      //     client_storage: config.ga.storage,
      //     send_page_view: false
      //   }
      // },
      {
        id: "AW-797795882",
        params: {
          anonymize_ip: config.ga.anonymizeIP,
          client_storage: config.ga.storage
          // send_page_view: false
        }
      }
    ],
    enabled:
      config.ga.active && window.location.origin.includes(config.website.url)
  },
  router
);

import VueMatomo from "vue-matomo";
Vue.use(VueMatomo, {
  host: config.matomo.host,
  siteId: config.matomo.siteId,
  trackerFileName: "matomo",
  router: router,
  enableLinkTracking: true,
  requireConsent: false,
  trackInitialView: true,
  disableCookies: true,
  enableHeartBeatTimer: true,
  heartBeatTimerInterval: 15,
  debug: false,
  userId: undefined,
  cookieDomain: undefined,
  domains: config.matomo.domains,
  preInitActions: []
});

const isDev = process.env.NODE_ENV !== "production";
Vue.config.performance = isDev;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
