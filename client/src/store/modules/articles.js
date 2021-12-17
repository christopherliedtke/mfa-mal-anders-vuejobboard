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
    if (config.cms.active && state.articles.length === 0) {
      const response = await axios.get("/graphql", {
        params: {
          query: `
                query {
                  articles {
                    title
                    excerpt
                    slug
                    tags
                    author {
                      firstName
                      avatarUrl
                    }
                    featuredImage {
                      sourceUrl
                      srcSet
                      sizes
                      altText
                    }
                  }
                }
              `
        }
      });

      commit("setArticles", response.data.data.articles);
    }
  }
};

const mutations = {
  setArticles: (state, articles) => {
    state.articles = Object.freeze(articles);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
