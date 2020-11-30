import axios from "@/utils/axios";
import config from "@/utils/config.json";

const state = {
    trainings: []
};

const getters = {
    trainings: state => state.trainings
};

const actions = {
    async getTrainings({ commit }) {
        const response = await axios.post(config.cms.url, {
            query: `
                    query MyQuery {
                        weiterbildungen(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
                            nodes {
                                id
                                title
                                content
                                excerpt
                                slug
                                featuredImage {
                                    node {
                                        sourceUrl
                                        altText
                                    }
                                }
                                seo {
                                    title
                                    metaDesc
                                }
                            }
                        }
                    }
                    `
        });

        commit("setTrainings", response.data.data.weiterbildungen.nodes);
    }
};

const mutations = {
    setTrainings: (state, trainings) => {
        state.trainings = trainings;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
