import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from "@/store";

import Home from "@/views/Home.vue";
import Jobboard from "@/views/Jobboard.vue";
import PublicJobView from "@/views/PublicJobView.vue";
import Dashboard from "@/views/Dashboard.vue";
import NewJobView from "@/views/NewJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import NewCompanyView from "@/views/NewCompanyView.vue";
import EditCompanyView from "@/views/EditCompanyView.vue";
import PrivateJobView from "@/views/PrivateJobView.vue";
import Account from "@/views/Account.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import AccountVerification from "@/views/AccountVerification.vue";
import AccountVerificationSuccessful from "@/views/AccountVerificationSuccessful.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            public: true
        }
    },
    {
        path: "/jobboard",
        name: "Jobboard",
        component: Jobboard,
        meta: {
            public: true
        }
    },
    {
        path: "/jobboard/job/:jobId",
        name: "PublicJobView",
        component: PublicJobView,
        meta: {
            public: true
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            public: false
        }
    },
    {
        path: "/dashboard/new-job",
        name: "NewJobView",
        component: NewJobView,
        meta: {
            public: false
        }
    },
    {
        path: "/dashboard/jobs/:jobId",
        name: "EditJobView",
        component: EditJobView,
        meta: {
            public: false
        }
    },
    {
        path: "/dashboard/jobs/preview/:jobId",
        name: "PrivateJobView",
        component: PrivateJobView,
        meta: {
            public: false
        }
    },
    {
        path: "/dashboard/new-company",
        name: "NewCompanyView",
        component: NewCompanyView,
        meta: {
            public: false
        }
    },
    {
        path: "/dashboard/companies/:companyId",
        name: "EditCompanyView",
        component: EditCompanyView,
        meta: {
            public: false
        }
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta: {
            public: false
        }
    },
    {
        path: "/account/verification",
        name: "AccountVerification",
        component: AccountVerification,
        meta: {
            public: false,
            onlyWhenPending: true
        }
    },
    {
        path: "/account/verified",
        name: "AccountVerificationSuccessful",
        component: AccountVerificationSuccessful,
        meta: {
            public: false,
            onlyWhenPending: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: "/password-reset",
        name: "PasswordReset",
        component: PasswordReset,
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

// Check auth before entering routes
router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(
        record => record.meta.onlyWhenLoggedOut
    );
    const onlyWhenPending = to.matched.some(
        record => record.meta.onlyWhenPending
    );

    const loggedIn = !!store.getters.userId;
    const userActivated = localStorage.getItem("userStatus") != "pending";

    if (!isPublic && !loggedIn) {
        return next({
            path: "/login",
            query: { redirect: to.fullPath }
        });
    }

    if (!isPublic && !onlyWhenPending && loggedIn && !userActivated) {
        return next("/account/verification");
    }

    if (!isPublic && onlyWhenPending && loggedIn && userActivated) {
        return next("/dashboard");
    }

    if (loggedIn && onlyWhenLoggedOut) {
        return next("/");
    }

    next();
});

export default router;
