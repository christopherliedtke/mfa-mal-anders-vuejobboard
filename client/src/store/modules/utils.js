const state = {
  overlay: false
};

const getters = {
  overlay: state => state.overlay,
  toast: state => state.overlay
};

const actions = {
  setOverlay({ commit }, data) {
    commit("setOverlay", data);
  }
};

const mutations = {
  setOverlay: (state, overlay) => {
    state.overlay = overlay;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
