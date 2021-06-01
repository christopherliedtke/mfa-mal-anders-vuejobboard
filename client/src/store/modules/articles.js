import axios from "@/utils/axios";
import config from "@/config/config.js";

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
            posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
                nodes {
                    id
                    title
                    content
                    excerpt
                    date
                    modified
                    slug
                    author {
                        node {
                            avatar {
                                url
                            }
                            firstName
                            lastName
                            name
                            seo {
                                social {
                                facebook
                                instagram
                                }
                            }
                            url
                        }
                    }
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                            srcSet
                            sizes
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
