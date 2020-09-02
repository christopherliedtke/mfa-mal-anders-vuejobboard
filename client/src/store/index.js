import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import jobs from "@/store/modules/jobs";
import trainings from "@/store/modules/trainings";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        jobs,
        trainings
    }
});
