import axios from "@/utils/axios";

const state = {
  starredJobs: []
};

const getters = {
  starredJobs: state => state.starredJobs
};

const actions = {
  async getStarredJobs({ commit }) {
    const response = await axios.get("/graphql", {
      params: {
        query: `
        query {
          starredJobs {
            _id
            user
            job {
              _id
              title
              status
              publishedAt
              paidExpiresAt
              description
              employmentType
              applicationDeadline
              salaryMin
              salaryMax
              simpleApplication
              specialization
              company {
                _id
                name
                location
                state
                size
                logoUrl
              }
            }
          }  
        }
      `
      }
    });

    commit("setStarredJobs", response.data.data.starredJobs);
  },
  async addStarredJob({ commit }, jobId) {
    const response = await axios.post("/graphql", {
      query: `
        mutation {
          addStarredJob (job: "${jobId}") {
            _id
            user
            job {
              _id
              title
              status
              publishedAt
              paidExpiresAt
              description
              employmentType
              applicationDeadline
              salaryMin
              salaryMax
              simpleApplication
              specialization
              company {
                _id
                name
                location
                state
                size
                logoUrl
              }
            }
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
                        job {
                            _id
                        }
                    }
                }
            `
    });

    commit("deleteStarredJob", response.data.data.deleteStarredJob.job._id);
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
      star => star.job._id != deletedStarredJobId
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
