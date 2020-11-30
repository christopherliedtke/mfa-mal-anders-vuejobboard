import axios from "@/utils/axios";
import router from "@/router/index";

const state = {
    userId: localStorage.getItem("userId") || null,
    userRole: localStorage.getItem("userRole") || null,
    userStatus: localStorage.getItem("userStatus") || null,
    userFirstName: localStorage.getItem("userFirstName") || null,
    userLastName: localStorage.getItem("userLastName") || null
};

const getters = {
    userId: state => state.userId,
    userRole: state => state.userRole,
    userStatus: state => state.userStatus,
    userFirstName: state => state.userFirstName,
    userLastName: state => state.userLastName
};

const actions = {
    async userAuth({ commit }, data) {
        const response = await axios.post(data.url, data.userData);

        if (response.data.success) {
            commit("setUserId", response.data.userId);
            commit("setUserRole", response.data.userRole);
            commit("setUserStatus", response.data.userStatus);
            commit("setUserFirstName", response.data.userFirstName);
            commit("setUserLastName", response.data.userLastName);

            // Manage redirect after auth
            const redirectQuery = router.history.current.query.redirect;
            let redirectPath = "/user/dashboard";

            // catch undefined error -> no harm, no display
            router
                .push({ path: redirectQuery || redirectPath })
                .catch(err => err);

            return { success: true };
        } else {
            return response.data;
        }
    }
};

const mutations = {
    setUserId: (state, userId) => {
        localStorage.setItem("userId", userId);
        state.userId = userId;
    },
    setUserRole: (state, userRole) => {
        localStorage.setItem("userRole", userRole);
        state.userRole = userRole;
    },
    setUserStatus: (state, userStatus) => {
        localStorage.setItem("userStatus", userStatus);
        state.userStatus = userStatus;
    },
    setUserFirstName: (state, userFirstName) => {
        localStorage.setItem("userFirstName", userFirstName);
        state.userFirstName = userFirstName;
    },
    setUserLastName: (state, userLastName) => {
        localStorage.setItem("userLastName", userLastName);
        state.userLastName = userLastName;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
