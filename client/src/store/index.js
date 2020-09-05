import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import jobs from "@/store/modules/jobs";
import articles from "@/store/modules/articles";
import trainings from "@/store/modules/trainings";
import professions from "@/store/modules/professions";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        jobs,
        articles,
        trainings,
        professions
    }
});
