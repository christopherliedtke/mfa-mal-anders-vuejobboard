const state = {
  overlay: false,
  starJobModal: false
};

const getters = {
  overlay: state => state.overlay,
  starJobModal: state => state.starJobModal,
  toast: state => state.overlay
};

const actions = {
  setOverlay({ commit }, data) {
    commit("setOverlay", data);
  },
  setStarJobModal({ commit }, data) {
    commit("starJobModal", data);
  }
};

const mutations = {
  setOverlay: (state, overlay) => {
    state.overlay = overlay;
  },
  setStarJobModal: (state, starJobModal) => {
    state.starJobModal = starJobModal;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
