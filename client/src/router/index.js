import Vue from "vue";
import config from "@/config/config.json";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "@/store";

// Pages
import Home from "@/views/index.vue";

import About from "@/views/pages/About.vue";
import AGBs from "@/views/pages/AGBs.vue";
import Contact from "@/views/pages/Contact.vue";
import Employer from "@/views/pages/Employer.vue";
import Impressum from "@/views/pages/Impressum.vue";
import PrivacyPolicy from "@/views/pages/PrivacyPolicy.vue";

import Blog from "@/views/pages/Blog.vue";
import Article from "@/views/articles/_slug.vue";

import Page from "@/views/pages/index.vue";

import NewsletterSubscriptionSuccess from "@/views/pages/NewsletterSubscriptionSuccess.vue";
import NewsletterUnsubscribe from "@/views/pages/NewsletterUnsubscribe.vue";
import NewsletterUnsubscriptionSuccess from "@/views/pages/NewsletterUnsubscriptionSuccess.vue";

import Career from "@/views/pages/career/index.vue";
import CareerHome from "@/views/pages/career/CareerHome.vue";
import CareerGehalt from "@/views/pages/career/CareerGehalt.vue";
import CareerBewerbungstipps from "@/views/pages/career/CareerBewerbungstipps.vue";

import CareerJobsBerufsbilder from "@/views/pages/career/jobs-berufsbilder/index.vue";
import CareerJobsBerufsbilderHome from "@/views/pages/career/jobs-berufsbilder/CareerJobsBerufsbilderHome.vue";
import CareerBerufsbildType from "@/views/pages/career/jobs-berufsbilder/CareerBerufsbildType.vue";

import CareerFortWeiterbildungen from "@/views/pages/career/fort-weiterbildungen/index.vue";
import CareerFortWeiterbildungenHome from "@/views/pages/career/fort-weiterbildungen/CareerFortWeiterbildungenHome.vue";
import CareerFortWeiterbildung from "@/views/pages/career/fort-weiterbildungen/CareerFortWeiterbildung.vue";

// Jobboard
import Jobboard from "@/views/jobboard/Jobboard.vue";
import JobView from "@/views/jobboard/JobView.vue";

// Auth
import Auth from "@/views/auth/index.vue";
import AuthLogin from "@/views/auth/AuthLogin.vue";
import AuthRegister from "@/views/auth/AuthRegister.vue";
import AuthLogout from "@/views/auth/AuthLogout.vue";
import AuthPasswordReset from "@/views/auth/AuthPasswordReset.vue";
import AuthAccountVerification from "@/views/auth/AuthAccountVerification.vue";
import AuthAccountVerificationSuccessful from "@/views/auth/AuthAccountVerificationSuccessful.vue";

// User
import User from "@/views/user/index.vue";
import UserAccount from "@/views/user/account/index.vue";
import UserDashboard from "@/views/user/dashboard/index.vue";
import UserDashboardHome from "@/views/user/dashboard/UserDashboardHome.vue";
import UserDashboardJobPreview from "@/views/user/dashboard/jobs/preview/_jobId.vue";
import UserDashboardEditJob from "@/views/user/dashboard/jobs/edit/_jobId.vue";
import UserDashboardEditCompany from "@/views/user/dashboard/companies/edit/_companyId.vue";

// Admin
import Admin from "@/views/admin/index.vue";
import AdminHome from "@/views/admin/AdminHome.vue";
import AdminJobPreview from "@/views/admin/jobs/preview/_jobId.vue";
import AdminEditJob from "@/views/admin/jobs/edit/_jobId.vue";
import AdminEditCompany from "@/views/admin/companies/edit/_companyId.vue";
import AdminEditUser from "@/views/admin/users/edit/_userId.vue";
import AdminCoupon from "@/views/admin/coupons/edit/_couponId.vue";

// 404
import NotFound from "@/views/pages/NotFound.vue";

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
        name: "JobView",
        component: JobView,
        meta: {
            public: true
        }
    },
    {
        path: "/article/:slug",
        name: "Article",
        component: Article,
        meta: {
            public: true
        }
    },
    {
        path: "/page",
        name: "Page",
        component: Page,
        meta: {
            public: true
        },
        children: [
            {
                path: "mfa-career",
                component: Career,
                children: [
                    {
                        path: "",
                        component: CareerHome
                    },
                    {
                        path: "gehalt",
                        component: CareerGehalt
                    },
                    {
                        path: "bewerbungstipps",
                        component: CareerBewerbungstipps
                    },
                    {
                        path: "jobs-und-berufsbilder",
                        component: CareerJobsBerufsbilder,
                        children: [
                            {
                                path: "",
                                component: CareerJobsBerufsbilderHome
                            },
                            {
                                path: ":slug",
                                component: CareerBerufsbildType
                            }
                        ]
                    },
                    {
                        path: "fort-und-weiterbildungen",
                        component: CareerFortWeiterbildungen,
                        children: [
                            {
                                path: "",
                                component: CareerFortWeiterbildungenHome
                            },
                            {
                                path: ":slug",
                                component: CareerFortWeiterbildung
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
                component: Blog
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

    // #Auth
    {
        path: "/auth",
        name: "Auth",
        component: Auth,
        children: [
            {
                path: "login",
                name: "AuthLogin",
                component: AuthLogin,
                meta: {
                    public: true,
                    onlyWhenLoggedOut: true
                }
            },
            {
                path: "register",
                name: "AuthRegister",
                component: AuthRegister,
                meta: {
                    public: true,
                    onlyWhenLoggedOut: true
                }
            },
            {
                path: "logout",
                name: "AuthLogout",
                component: AuthLogout,
                meta: {
                    public: true
                }
            },
            {
                path: "password-reset",
                name: "AuthPasswordReset",
                component: AuthPasswordReset,
                meta: {
                    public: true,
                    onlyWhenLoggedOut: true
                }
            },
            {
                path: "account/verification",
                name: "AuthAccountVerification",
                component: AuthAccountVerification,
                meta: {
                    public: false,
                    onlyWhenPending: true
                }
            },
            {
                path: "account/verified",
                name: "AuthAccountVerificationSuccessful",
                component: AuthAccountVerificationSuccessful,
                meta: {
                    public: false,
                    onlyWhenPending: true
                }
            }
        ]
    },
    // #User
    {
        path: "/user",
        component: User,
        children: [
            {
                path: "account",
                name: "UserAccount",
                component: UserAccount,
                meta: {
                    public: false
                }
            },
            {
                path: "dashboard",
                component: UserDashboard,
                children: [
                    {
                        path: "",
                        name: "UserDashboardHome",
                        component: UserDashboardHome,
                        meta: {
                            public: false
                        }
                    },
                    {
                        path: "jobs/edit/:jobId",
                        name: "UserDashboardEditJob",
                        component: UserDashboardEditJob,
                        meta: {
                            public: false
                        }
                    },
                    {
                        path: "jobs/preview/:jobId",
                        name: "UserDashboardJobPreview",
                        component: UserDashboardJobPreview,
                        meta: {
                            public: false
                        }
                    },
                    {
                        path: "/user/dashboard/companies/edit/:companyId",
                        name: "UserDashboardEditCompany",
                        component: UserDashboardEditCompany,
                        meta: {
                            public: false
                        }
                    }
                ]
            }
        ]
    },
    // #Admin
    {
        path: "/admin",
        component: Admin,
        children: [
            {
                path: "",
                name: "AdminHome",
                component: AdminHome,
                meta: {
                    public: false,
                    onlyAdmin: true
                }
            },
            {
                path: "jobs/preview/:jobId",
                name: "AdminJobPreview",
                component: AdminJobPreview,
                meta: {
                    public: false,
                    onlyAdmin: true
                }
            },
            {
                path: "jobs/edit/:jobId",
                name: "AdminEditJob",
                component: AdminEditJob,
                meta: {
                    public: false,
                    onlyAdmin: true
                }
            },
            {
                path: "companies/edit/:companyId",
                name: "AdminEditCompany",
                component: AdminEditCompany,
                meta: {
                    public: false,
                    onlyAdmin: true
                }
            },
            {
                path: "users/edit/:userId",
                name: "AdminEditUser",
                component: AdminEditUser,
                meta: {
                    public: false,
                    onlyAdmin: true
                }
            },
            {
                path: "coupons/edit/:couponId",
                name: "AdminCoupon",
                component: AdminCoupon,
                meta: {
                    public: false,
                    onlyAdmin: true
                }
            }
        ]
    },
    // #404
    { path: "/pages/404", component: NotFound, meta: { public: true } },
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

    const loggedIn = store.getters.loggedIn;
    const userActivate = store.getters.user.status === "active";
    const userRole = store.getters.user.role;

    if (onlyAdmin && userRole !== "admin") {
        return next("/");
    }

    if (!isPublic && !loggedIn) {
        return next({
            path: "/auth/login",
            query: { redirect: to.fullPath }
        });
    }

    if (!isPublic && !onlyWhenPending && loggedIn && !userActivate) {
        return next("/auth/account/verification");
    }

    if (!isPublic && onlyWhenPending && loggedIn && userActivate) {
        return next("/user/dashboard");
    }

    if (loggedIn && onlyWhenLoggedOut) {
        return next("/user/dashboard");
    }

    next();
});

export default router;
