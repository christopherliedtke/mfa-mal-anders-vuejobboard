import axios from "@/utils/axios";

const state = {
    jobs: []
};

const getters = {
    jobs: state => state.jobs
};

const actions = {
    async getJobs({ commit }) {
        const response = await axios.get("/graphql", {
            params: {
                query: `
                    query {
                        publicJobs {
                            _id
                            createdAt
                            publishedAt
                            paidAt
                            paidExpiresAt
                            status
                            title
                            description
                            profession
                            employmentType
                            applicationDeadline
                            salaryMin
                            salaryMax
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

        commit("setJobs", response.data.data.publicJobs);
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
