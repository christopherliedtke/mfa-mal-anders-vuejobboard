import axios from "@/services/axios";
import config from "@/config/config.js";

const state = {
  starredJobs: []
};

const getters = {
  starredJobs: state => state.starredJobs
};

const actions = {
  async getStarredJobs({ commit }) {
    if (config.starredJobs.active) {
      const response = await axios.get("/graphql", {
        params: {
          query: `
            query {
              starredJobs {
                _id
                user
                job
              }  
            }
          `
        }
      });

      commit("setStarredJobs", response.data.data.starredJobs);
    }
  },
  async addStarredJob({ commit }, jobId) {
    const response = await axios.post("/graphql", {
      query: `
        mutation {
          addStarredJob (job: "${jobId}") {
            _id
            user
            job 
          }
        }
      `
    });

    commit("addStarredJob", response.data.data.addStarredJob);
  },
  async deleteStarredJob({ commit }, jobId) {
    const response = await axios.post("/graphql", {
      query: `
        mutation {
          deleteStarredJob (job: "${jobId}") {
            _id
            user
            job
          }
        }
      `
    });

    commit("deleteStarredJob", response.data.data.deleteStarredJob.job);
  }
};

const mutations = {
  setStarredJobs: (state, starredJobs) => {
    state.starredJobs = starredJobs;
  },
  addStarredJob: (state, starredJob) => {
    state.starredJobs = [...state.starredJobs, starredJob];
  },
  deleteStarredJob: (state, deletedStarredJobId) => {
    state.starredJobs = state.starredJobs.filter(
      star => star.job != deletedStarredJobId
    );
  },
  emptyStarredJobs: state => {
    state.starredJobs = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
