import axios from "@/utils/axios";
import config from "@/config/config.json";

const state = {
    professions: []
};

const getters = {
    professions: state => state.professions
};

const actions = {
    async getProfessions({ commit }) {
        const response = await axios.post(config.cms.url, {
            query: `
                    query MyQuery {
                        berufsbilder(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
                            nodes {
                                id
                                title
                                content
                                excerpt
                                slug
                                berufsbildTypes {
                                    nodes {
                                        name
                                    }
                                }
                            }
                        }
                    }
                    `
        });

        commit("setProfessions", response.data.data.berufsbilder.nodes);
    }
};

const mutations = {
    setProfessions: (state, professions) => {
        state.professions = professions;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
