import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import articles from "@/store/modules/articles";
import utils from "@/store/modules/utils";
import starredJobs from "@/store/modules/starredJobs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    articles,
    utils,
    starredJobs
  }
});
