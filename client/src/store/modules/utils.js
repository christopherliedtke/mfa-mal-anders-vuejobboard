import cookie from "vue-cookies";

const state = {
  overlay: false,
  starJobModal: false,
  showCookieConsentBanner: cookie.get("CookieConsent") ? false : true
};

const getters = {
  overlay: state => state.overlay,
  starJobModal: state => state.starJobModal,
  showCookieConsentBanner: state => state.showCookieConsentBanner
};

const actions = {
  setOverlay({ commit }, data) {
    commit("setOverlay", data);
  },
  setStarJobModal({ commit }, data) {
    commit("starJobModal", data);
  },
  setShowCookieConsentBanner({ commit }, data) {
    commit("showCookieConsentBanner", data);
  }
};

const mutations = {
  setOverlay: (state, overlay) => {
    state.overlay = overlay;
  },
  setStarJobModal: (state, starJobModal) => {
    state.starJobModal = starJobModal;
  },
  setShowCookieConsentBanner: (state, showCookieConsentBanner) => {
    state.showCookieConsentBanner = showCookieConsentBanner;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
