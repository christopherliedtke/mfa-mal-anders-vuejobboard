import axios from "@/utils/axios";
import router from "@/router";

const state = {
    token: localStorage.getItem("token") || false,
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : false,
    loggedIn: localStorage.getItem("loggedIn")
        ? JSON.parse(localStorage.getItem("loggedIn"))
        : false
};

const getters = {
    token: state => state.token,
    user: state => state.user,
    loggedIn: state => state.loggedIn
};

const actions = {
    async auth({ commit }, data) {
        const response = await axios.post("/api/auth/" + data.type, data.creds);

        if (response.data.success) {
            commit("setToken", response.data.token);
        }

        return response.data;
    },
    async fetchUser({ commit }) {
        const response = await axios.get("/api/auth/user-by-token");

        if (response.data.user) {
            commit("setUser", response.data.user);
            commit("setLoggedIn", true);
        }

        return response.data.user;
    },
    async logout({ commit }) {
        const response = await axios.get("/api/auth/logout");

        if (response.data.success) {
            commit("setToken", false);
            commit("setUser", false);
            commit("setLoggedIn", false);

            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("loggedIn");

            router.push("/").catch(() => {});
        }
    }
};

const mutations = {
    setToken: (state, token) => {
        localStorage.setItem("token", token);
        state.token = token;
    },
    setUser: (state, user) => {
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;
    },
    setLoggedIn: (state, loggedIn) => {
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
        state.loggedIn = loggedIn;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
