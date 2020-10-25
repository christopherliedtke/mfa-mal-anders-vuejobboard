import Vue from "vue";
import config from "@/utils/config.json";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "@/store";

// Public
import Home from "@/views/public/Home.vue";
import Jobboard from "@/views/public/Jobboard.vue";
import PublicJobView from "@/views/public/PublicJobView.vue";

import PageView from "@/views/public/PageView.vue";
import About from "@/views/public/pages/About.vue";
import PrivacyPolicy from "@/views/public/pages/PrivacyPolicy.vue";
import Impressum from "@/views/public/pages/Impressum.vue";
import AGBs from "@/views/public/pages/AGBs.vue";
import Contact from "@/views/public/pages/Contact.vue";
import NewsletterSubscriptionSuccess from "@/views/public/pages/NewsletterSubscriptionSuccess.vue";
import NewsletterUnsubscribe from "@/views/public/pages/NewsletterUnsubscribe.vue";
import NewsletterUnsubscriptionSuccess from "@/views/public/pages/NewsletterUnsubscriptionSuccess.vue";

import MFACareer from "@/views/public/pages/MFACareer.vue";
import MFACareerHome from "@/views/public/pages/mfa-career/MFACareerHome.vue";
import Gehalt from "@/views/public/pages/mfa-career/Gehalt.vue";
import Bewerbungstipps from "@/views/public/pages/mfa-career/Bewerbungstipps.vue";

import JobsBerufsbilder from "@/views/public/pages/mfa-career/JobsBerufsbilder.vue";
import JobsBerufsbilderHome from "@/views/public/pages/mfa-career/jobs-berufsbilder/JobsBerufsbilderHome.vue";
import BerufsbildType from "@/views/public/pages/mfa-career/jobs-berufsbilder/BerufsbildType.vue";

import FortWeiterbildungen from "@/views/public/pages/mfa-career/FortWeiterbildungen.vue";
import FortWeiterbildungenHome from "@/views/public/pages/mfa-career/fort-weiterbildungen/FortWeiterbildungenHome.vue";
import FortWeiterbildung from "@/views/public/pages/mfa-career/fort-weiterbildungen/FortWeiterbildung.vue";

import Magazin from "@/views/public/pages/Magazin.vue";

import ArticleView from "@/views/public/ArticleView.vue";

import Employer from "@/views/public/pages/Employer.vue";

// Auth
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import PasswordReset from "@/views/auth/PasswordReset.vue";
import AccountVerification from "@/views/auth/AccountVerification.vue";
import AccountVerificationSuccessful from "@/views/auth/AccountVerificationSuccessful.vue";

// Private
import Account from "@/views/private/Account.vue";
import Dashboard from "@/views/private/Dashboard.vue";

import NewJobView from "@/views/private/NewJobView.vue";
import EditJobView from "@/views/private/EditJobView.vue";
import PrivateJobView from "@/views/private/PrivateJobView.vue";

import NewCompanyView from "@/views/private/NewCompanyView.vue";
import EditCompanyView from "@/views/private/EditCompanyView.vue";

// Admin
import Admin from "@/views/admin/Admin.vue";
import AdminJobView from "@/views/admin/AdminJobView.vue";
import AdminEditJobView from "@/views/admin/AdminEditJobView.vue";
import AdminEditCompanyView from "@/views/admin/AdminEditCompanyView.vue";
import AdminEditUserView from "@/views/admin/AdminEditUserView.vue";
import AdminCouponView from "@/views/admin/AdminCouponView.vue";

// 404
import NotFound from "@/views/public/NotFound.vue";

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
        path: "/page",
        name: "PageView",
        component: PageView,
        meta: {
            public: true
        },
        children: [
            {
                path: "mfa-career",
                component: MFACareer,
                children: [
                    {
                        path: "",
                        component: MFACareerHome
                    },
                    {
                        path: "gehalt",
                        component: Gehalt
                    },
                    {
                        path: "bewerbungstipps",
                        component: Bewerbungstipps
                    },
                    {
                        path: "jobs-und-berufsbilder",
                        component: JobsBerufsbilder,
                        children: [
                            {
                                path: "",
                                component: JobsBerufsbilderHome
                            },
                            {
                                path: ":slug",
                                component: BerufsbildType
                            }
                        ]
                    },
                    {
                        path: "fort-und-weiterbildungen",
                        component: FortWeiterbildungen,
                        children: [
                            {
                                path: "",
                                component: FortWeiterbildungenHome
                            },
                            {
                                path: ":slug",
                                component: FortWeiterbildung
                            }
                        ]
                    }
                ]
            },
            {
                path: "about",
                component: About
            },
            {
                path: "fuer-arbeitgeber",
                component: Employer
            },
            {
                path: config.cms.postsPath,
                component: Magazin
            },
            {
                path: "contact",
                component: Contact
            },
            {
                path: "subscription-successful",
                component: NewsletterSubscriptionSuccess
            },
            {
                path: "unsubscribe",
                component: NewsletterUnsubscribe
            },
            {
                path: "unsubscribed-successful",
                component: NewsletterUnsubscriptionSuccess
            },
            {
                path: "impressum",
                component: Impressum
            },
            {
                path: "privacy-policy",
                component: PrivacyPolicy
            },
            {
                path: "agbs",
                component: AGBs
            }
        ]
    },
    {
        path: "/article/:slug",
        name: "ArticleView",
        component: ArticleView,
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
    { path: "/404", component: NotFound, meta: { public: true } },
    { path: "*", redirect: "/jobboard" }
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
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
        return next("/dashboard");
    }

    next();
});

export default router;
