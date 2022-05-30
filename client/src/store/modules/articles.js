import axios from "@/services/axios";

const state = {
  articles: []
};

const getters = {
  articles: state => state.articles
};

const actions = {
  async getArticles({ commit }) {
    if (state.articles.length === 0) {
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
