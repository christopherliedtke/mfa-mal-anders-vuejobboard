import axios from "@/utils/axios";

const state = {
    jobs: []
};

const getters = {
    jobs: state => state.jobs
};

const actions = {
    async getJobs({ commit }) {
        const response = await axios.get("/api/jobs/public", {
            params: {
                query: `
                    query {
                        jobs {
                            _id
                            createdAt
                            paidAt
                            title
                            description
                            employmentType
                            applicationDeadline
                            simpleApplication
                            specialization
                            company {
                                _id
                                name
                                street
                                location
                                zipCode
                                state
                                country
                                geoCodeLat
                                geoCodeLng
                                size
                                logoUrl
                            }
                        }
                    }
                `
            }
        });
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
