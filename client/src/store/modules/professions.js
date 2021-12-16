import axios from "@/utils/axios";
import config from "@/config/config.js";

const state = {
  professions: []
};

const getters = {
  professions: state => state.professions
};

const actions = {
  async getProfessions({ commit }) {
    if (config.cms.active && state.professions.length === 0) {
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
                    description
                    slug
                    seo {
                      metaDesc
                    }
                  }
                }
                seo {
                  metaDesc
                  title
                }
              }
            }
          }
        `
      });

      commit("setProfessions", response.data.data.berufsbilder.nodes);
    }
  }
};

const mutations = {
  setProfessions: (state, professions) => {
    state.professions = Object.freeze(professions);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
