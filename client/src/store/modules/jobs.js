import axios from "@/utils/axios";
import config from "@/config/config.js";

const state = {
  jobs: []
};

const getters = {
  jobs: state => state.jobs
};

const actions = {
  async getJobs({ commit }) {
    const response = await axios.get("/graphql", {
      params: {
        query: `
          query {
            publicJobs {
              _id
              createdAt
              updatedAt
              publishedAt
              paidAt
              paid
              paidExpiresAt
              status
              title
              description
              profession
              employmentType
              applicationDeadline
              simpleApplication
              extJobUrl
              applicationEmail
              imageUrl
              salaryMin
              salaryMax
              specialization
              contactGender
              contactTitle
              contactFirstName
              contactLastName
              contactEmail
              contactPhone
              company {
                _id
                name
                street
                location
                zipCode
                state
                country
                geoCodeLat
                geoCodeLng
                size
                url
                logoUrl
              }
            }  
          }
        `
      }
    });

    let jobs = response.data.data.publicJobs;
    commit("setJobs", jobs);

    // if (config.externalJobs.active) {
    //   const externalJobs = await axios.get("/api/external-jobs");
    //   jobs = [...jobs, ...externalJobs.data];
    //   // .sort(
    //   //   (a, b) => b.publishedAt - a.publishedAt
    //   // )

    //   commit("setJobs", jobs);
    // }
  }
};

const mutations = {
  setJobs: (state, jobs) => {
    state.jobs = jobs;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
