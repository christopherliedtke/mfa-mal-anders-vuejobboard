const state = {
    overlay: false
    // toast: false
};

const getters = {
    overlay: state => state.overlay,
    toast: state => state.overlay
};

const actions = {
    setOverlay({ commit }, data) {
        commit("setOverlay", data);
    }
    // setToast({ commit }, data) {
    //     let toast = {
    //         toaster: "b-toaster-bottom-right",
    //         variant: "",
    //         title: "",
    //         noAutoHide: false,
    //         autoHideDelay: 5000,
    //         solid: true,
    //         appendToast: true,
    //         ...data
    //     };
    //     commit("setToast", toast);
    // }
};

const mutations = {
    setOverlay: (state, overlay) => {
        state.overlay = overlay;
    }
    // setToast: (state, toast) => {
    //     state.toast = toast;
    // }
};

export default {
    state,
    getters,
    actions,
    mutations
};
