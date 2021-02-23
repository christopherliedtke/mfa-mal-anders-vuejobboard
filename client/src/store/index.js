import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import jobs from "@/store/modules/jobs";
import articles from "@/store/modules/articles";
import trainings from "@/store/modules/trainings";
import professions from "@/store/modules/professions";
import utils from "@/store/modules/utils";
import starredJobs from "@/store/modules/starredJobs";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        jobs,
        articles,
        trainings,
        professions,
        utils,
        starredJobs
    }
});
