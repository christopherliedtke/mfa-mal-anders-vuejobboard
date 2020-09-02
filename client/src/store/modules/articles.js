import axios from "@/axios";
import config from "@/utils/config.json";

const state = {
    articles: []
};

const getters = {
    articles: state => state.articles
};

const actions = {
    async getArticles({ commit }) {
        const response = await axios.post(config.cms.url, {
            query: `
                    query MyQuery {
                        posts(where: {orderby: {field: MODIFIED, order: ASC}}) {
                            nodes {
                                id
                                title
                                content
                                excerpt
                                slug
                                featuredImage {
                                    node {
                                        altText
                                        sourceUrl
                                    }
                                }
                                seo {
                                    metaDesc
                                    title
                                }
                                tags {
                                    nodes {
                                        name
                                    }
                                }
                            }
                        }
                    }
                    `
        });

        commit("setArticles", response.data.data.posts.nodes);
    }
};

const mutations = {
    setArticles: (state, articles) => {
        state.articles = articles;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
