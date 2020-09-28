import axios from "@/axios";

const state = {
    jobs: []
};

const getters = {
    jobs: state => state.jobs
};

const actions = {
    async getJobs({ commit }, data) {
        // const response = await axios.get("/api/jobs/public", data);
        const response = await axios.get(
            `/api/jobs/public?query=${data.query}`
        );
        commit("setJobs", response.data.data.jobs);
    }
};

const mutations = {
    setJobs: (state, jobs) => {
        state.jobs = jobs;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
