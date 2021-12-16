import axios from "@/utils/axios";
import config from "@/config/config.js";

const state = {
  trainings: []
};

const getters = {
  trainings: state => state.trainings
};

const actions = {
  async getTrainings({ commit }) {
    if (config.cms.active && state.trainings.length === 0) {
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
                  altText
                  sourceUrl
                  srcSet
                  sizes
                }
              }
              seo {
                title
                metaDesc
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      `
      });

      commit("setTrainings", response.data.data.weiterbildungen.nodes);
    }
  }
};

const mutations = {
  setTrainings: (state, trainings) => {
    state.trainings = Object.freeze(trainings);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
