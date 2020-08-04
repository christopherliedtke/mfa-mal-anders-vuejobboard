import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "@/store";

// Public
import Home from "@/views/Home.vue";
import Jobboard from "@/views/Jobboard.vue";
import PublicJobView from "@/views/PublicJobView.vue";
import CMSPageView from "@/views/CMSPageView.vue";
import CMSPostView from "@/views/CMSPostView.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import Impressum from "@/views/Impressum.vue";

// Auth
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import AccountVerification from "@/views/AccountVerification.vue";
import AccountVerificationSuccessful from "@/views/AccountVerificationSuccessful.vue";

// Private
import Account from "@/views/Account.vue";
import Dashboard from "@/views/Dashboard.vue";

import NewJobView from "@/views/NewJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import PrivateJobView from "@/views/PrivateJobView.vue";

import NewCompanyView from "@/views/NewCompanyView.vue";
import EditCompanyView from "@/views/EditCompanyView.vue";

// Admin
import Admin from "@/views/Admin.vue";
import AdminJobView from "@/views/AdminJobView.vue";
import AdminEditJobView from "@/views/AdminEditJobView.vue";
import AdminEditCompanyView from "@/views/AdminEditCompanyView.vue";
import AdminEditUserView from "@/views/AdminEditUserView.vue";
import AdminCouponView from "@/views/AdminCouponView.vue";

// 404
import NotFound from "@/views/NotFound.vue";

const routes = [
    // #Public
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
        path: "/page/:path",
        name: "CMSPageView",
        component: CMSPageView,
        meta: {
            public: true
        }
    },
    {
        path: "/post/:year/:month/:day/:path",
        name: "CMSPostView",
        component: CMSPostView,
        meta: {
            public: true
        }
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
        meta: {
            public: true
        }
    },
    {
        path: "/impressum",
        name: "Impressum",
        component: Impressum,
        meta: {
            public: true
        }
    },
    // #Auth
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
    // #Private
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta: {
            public: false
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
    // #Admin
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            public: false,
            onlyAdmin: true
        }
    },
    {
        path: "/admin/jobs/preview/:jobId",
        name: "AdminJobView",
        component: AdminJobView,
        meta: {
            public: false,
            onlyAdmin: true
        }
    },
    {
        path: "/admin/jobs/:jobId",
        name: "AdminEditJobView",
        component: AdminEditJobView,
        meta: {
            public: false,
            onlyAdmin: true
        }
    },
    {
        path: "/admin/companies/:companyId",
        name: "AdminEditCompanyView",
        component: AdminEditCompanyView,
        meta: {
            public: false,
            onlyAdmin: true
        }
    },
    {
        path: "/admin/users/:userId",
        name: "AdminEditUserView",
        component: AdminEditUserView,
        meta: {
            public: false,
            onlyAdmin: true
        }
    },
    {
        path: "/admin/coupons/:couponId",
        name: "AdminCouponView",
        component: AdminCouponView,
        meta: {
            public: false,
            onlyAdmin: true
        }
    },
    // #404
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" }
];

const router = new VueRouter({
    mode: "history",
    routes
});

// Checks before routes
router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(
        record => record.meta.onlyWhenLoggedOut
    );
    const onlyWhenPending = to.matched.some(
        record => record.meta.onlyWhenPending
    );
    const onlyAdmin = to.matched.some(record => record.meta.onlyAdmin);

    const loggedIn = !!store.getters.userId;
    const userActivated = localStorage.getItem("userStatus") != "pending";
    const userRole = store.getters.userRole;

    if (onlyAdmin && userRole !== "admin") {
        return next("/");
    }

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
