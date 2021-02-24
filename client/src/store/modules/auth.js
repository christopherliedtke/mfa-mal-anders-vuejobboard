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
        let args = "";
        for (const key in data.creds) {
            if (typeof data.creds[key] === "string") {
                args += `${key}: "${data.creds[key]}" `;
            } else {
                args += `${key}: ${data.creds[key]} `;
            }
        }

        const user = await axios.post("/graphql", {
            query: `
                mutation {
                    ${data.type}(
                        ${args} 
                    ) {
                        _id
                        gender
                        title
                        firstName
                        lastName
                        email
                        status
                        role
                        isAdmin
                        isEmployer
                        isEmployee
                        token
                    }
                }
            `
        });

        if (user.data.data[data.type]) {
            commit("setToken", user.data.data[data.type].token);
            commit("setUser", user.data.data[data.type]);
            commit("setLoggedIn", true);
        }

        return user.data;
    },
    async fetchUserFromDb({ commit }) {
        const user = await axios.get("/graphql", {
            params: {
                query: `
                    query {
                        me {
                            _id
                            gender
                            title
                            firstName
                            lastName
                            email
                            status
                            role
                            isAdmin
                            isEmployer
                            isEmployee
                            token
                        }
                    }
                `
            }
        });

        if (user.data.data.me) {
            commit("setToken", user.data.data.me.token);
            commit("setUser", user.data.data.me);
            commit("setLoggedIn", true);
        }

        return user.data;
    },
    async getActivationEmail() {
        const user = await axios.post("/graphql", {
            query: `
                mutation {
                    accountVerificationGetEmail {
                        _id
                    }
                }
        `
        });

        return user.data.data.accountVerificationGetEmail._id ? true : false;
    },
    async activateUser({ commit }, id) {
        const user = await axios.post("/graphql", {
            query: `
                mutation {
                    activateUser (_id: "${id}") {
                        _id
                        gender
                        title
                        firstName
                        lastName
                        email
                        status
                        role
                        isAdmin
                        isEmployer
                        isEmployee
                        token
                    }
                }
            `
        });

        if (user.data.data.activateUser) {
            commit("setToken", user.data.data.activateUser.token);
            commit("setUser", user.data.data.activateUser);
            commit("setLoggedIn", true);
        }

        return user.data.data.activateUser ? true : false;
    },
    async fetchUserFromToken({ commit }) {
        const user = await axios.get("/graphql", {
            params: {
                query: `
                    query {
                        meFromToken {
                            _id
                            gender
                            title
                            firstName
                            lastName
                            email
                            status
                            role
                            isAdmin
                            isEmployer
                            isEmployee
                        }
                    }
                `
            }
        });

        if (user.data.data.meFromToken) {
            commit("setUser", user.data.data.meFromToken);
            commit("setLoggedIn", true);
        }

        return user;
    },
    async logout({ commit }) {
        const response = await axios.post("/graphql", {
            query: `
                mutation {
                    logout {
                        _id
                    }
                }
        `
        });

        if (response.data.data.logout) {
            commit("setToken", false);
            commit("setUser", false);
            commit("setLoggedIn", false);
            commit("emptyStarredJobs");

            // localStorage.removeItem("token");
            // localStorage.removeItem("user");
            // localStorage.removeItem("loggedIn");
            localStorage.clear();
            localStorage.setItem("nl-pop", "false");

            router.push("/").catch(() => {});

            return true;
        }

        return false;
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
