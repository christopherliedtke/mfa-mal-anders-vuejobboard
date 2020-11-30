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
            path: "/auth/login",
            query: { redirect: to.fullPath }
        });
    }

    if (!isPublic && !onlyWhenPending && loggedIn && !userActivated) {
        return next("/auth/account/verification");
    }

    if (!isPublic && onlyWhenPending && loggedIn && userActivated) {
        return next("/user/dashboard");
    }

    if (loggedIn && onlyWhenLoggedOut) {
        return next("/user/dashboard");
    }

    next();
});

export default router;
