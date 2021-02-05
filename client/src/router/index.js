import Vue from "vue";
import config from "@/config/config.json";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "@/store";

// #Pages
// import Home from "@/views/index.vue";
const Home = () => import("@/views/index.vue");

// import About from "@/views/pages/About.vue";
// import AGBs from "@/views/pages/AGBs.vue";
// import Contact from "@/views/pages/Contact.vue";
// import Employer from "@/views/pages/Employer.vue";
// import Impressum from "@/views/pages/Impressum.vue";
// import PrivacyPolicy from "@/views/pages/PrivacyPolicy.vue";
const About = () => import("@/views/pages/About.vue");
const AGBs = () => import("@/views/pages/AGBs.vue");
const Contact = () => import("@/views/pages/Contact.vue");
const Employer = () => import("@/views/pages/Employer.vue");
const Impressum = () => import("@/views/pages/Impressum.vue");
const PrivacyPolicy = () => import("@/views/pages/PrivacyPolicy.vue");

// import Blog from "@/views/pages/Blog.vue";
// import Article from "@/views/articles/_slug.vue";
const Blog = () => import("@/views/pages/Blog.vue");
const Article = () => import("@/views/articles/_slug.vue");

// import Page from "@/views/pages/index.vue";
const Page = () => import("@/views/pages/index.vue");

// import NewsletterSubscriptionSuccess from "@/views/pages/NewsletterSubscriptionSuccess.vue";
// import NewsletterUnsubscribe from "@/views/pages/NewsletterUnsubscribe.vue";
// import NewsletterUnsubscriptionSuccess from "@/views/pages/NewsletterUnsubscriptionSuccess.vue";
const NewsletterSubscriptionSuccess = () =>
    import(
        /* webpackChunkName: "newsletter" */ "@/views/pages/NewsletterSubscriptionSuccess.vue"
    );
const NewsletterUnsubscribe = () =>
    import(
        /* webpackChunkName: "newsletter" */ "@/views/pages/NewsletterUnsubscribe.vue"
    );
const NewsletterUnsubscriptionSuccess = () =>
    import(
        /* webpackChunkName: "newsletter" */ "@/views/pages/NewsletterUnsubscriptionSuccess.vue"
    );

// import Career from "@/views/pages/career/index.vue";
// import CareerHome from "@/views/pages/career/CareerHome.vue";
// import CareerGehalt from "@/views/pages/career/CareerGehalt.vue";
// import CareerBewerbungstipps from "@/views/pages/career/CareerBewerbungstipps.vue";
const Career = () =>
    import(/* webpackChunkName: "career" */ "@/views/pages/career/index.vue");
const CareerHome = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/CareerHome.vue"
    );
const CareerGehalt = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/CareerGehalt.vue"
    );
const CareerBewerbungstipps = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/CareerBewerbungstipps.vue"
    );

// import CareerJobsBerufsbilder from "@/views/pages/career/jobs-berufsbilder/index.vue";
// import CareerJobsBerufsbilderHome from "@/views/pages/career/jobs-berufsbilder/CareerJobsBerufsbilderHome.vue";
// import CareerBerufsbildType from "@/views/pages/career/jobs-berufsbilder/CareerBerufsbildType.vue";
const CareerJobsBerufsbilder = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/jobs-berufsbilder/index.vue"
    );
const CareerJobsBerufsbilderHome = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/jobs-berufsbilder/CareerJobsBerufsbilderHome.vue"
    );
const CareerBerufsbildType = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/jobs-berufsbilder/CareerBerufsbildType.vue"
    );

// import CareerFortWeiterbildungen from "@/views/pages/career/fort-weiterbildungen/index.vue";
// import CareerFortWeiterbildungenHome from "@/views/pages/career/fort-weiterbildungen/CareerFortWeiterbildungenHome.vue";
// import CareerFortWeiterbildung from "@/views/pages/career/fort-weiterbildungen/CareerFortWeiterbildung.vue";
const CareerFortWeiterbildungen = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/fort-weiterbildungen/index.vue"
    );
const CareerFortWeiterbildungenHome = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/fort-weiterbildungen/CareerFortWeiterbildungenHome.vue"
    );
const CareerFortWeiterbildung = () =>
    import(
        /* webpackChunkName: "career" */ "@/views/pages/career/fort-weiterbildungen/CareerFortWeiterbildung.vue"
    );

// Jobboard
// import Jobboard from "@/views/jobboard/Jobboard.vue";
// import JobView from "@/views/jobboard/JobView.vue";
const Jobboard = () =>
    import(/* webpackChunkName: "jobboard" */ "@/views/jobboard/Jobboard.vue");
const JobView = () =>
    import(/* webpackChunkName: "jobboard" */ "@/views/jobboard/JobView.vue");

// Auth
// import Auth from "@/views/auth/index.vue";
// import AuthLogin from "@/views/auth/AuthLogin.vue";
// import AuthRegister from "@/views/auth/AuthRegister.vue";
// import AuthLogout from "@/views/auth/AuthLogout.vue";
// import AuthPasswordReset from "@/views/auth/AuthPasswordReset.vue";
// import AuthAccountVerification from "@/views/auth/AuthAccountVerification.vue";
// import AuthAccountVerificationSuccessful from "@/views/auth/AuthAccountVerificationSuccessful.vue";
const Auth = () =>
    import(/* webpackChunkName: "auth" */ "@/views/auth/index.vue");
const AuthLogin = () =>
    import(/* webpackChunkName: "auth" */ "@/views/auth/AuthLogin.vue");
const AuthRegister = () =>
    import(/* webpackChunkName: "auth" */ "@/views/auth/AuthRegister.vue");
const AuthLogout = () =>
    import(/* webpackChunkName: "auth" */ "@/views/auth/AuthLogout.vue");
const AuthPasswordReset = () =>
    import(/* webpackChunkName: "auth" */ "@/views/auth/AuthPasswordReset.vue");
const AuthAccountVerification = () =>
    import(
        /* webpackChunkName: "auth" */ "@/views/auth/AuthAccountVerification.vue"
    );
const AuthAccountVerificationSuccessful = () =>
    import(
        /* webpackChunkName: "auth" */ "@/views/auth/AuthAccountVerificationSuccessful.vue"
    );

// User
// import User from "@/views/user/index.vue";
// import UserDashboard from "@/views/user/dashboard/index.vue";
// import UserDashboardHome from "@/views/user/dashboard/UserDashboardHome.vue";
// import UserDashboardJobPreview from "@/views/user/dashboard/jobs/preview/_jobId.vue";
// import UserDashboardEditJob from "@/views/user/dashboard/jobs/edit/_jobId.vue";
// import UserDashboardEditCompany from "@/views/user/dashboard/companies/edit/_companyId.vue";
const User = () =>
    import(/* webpackChunkName: "user" */ "@/views/user/index.vue");
const UserDashboard = () =>
    import(/* webpackChunkName: "user" */ "@/views/user/dashboard/index.vue");
const UserDashboardHome = () =>
    import(
        /* webpackChunkName: "user" */ "@/views/user/dashboard/UserDashboardHome.vue"
    );
const UserDashboardJobPreview = () =>
    import(
        /* webpackChunkName: "user" */ "@/views/user/dashboard/jobs/preview/_jobId.vue"
    );
const UserDashboardEditJob = () =>
    import(
        /* webpackChunkName: "user" */ "@/views/user/dashboard/jobs/edit/_jobId.vue"
    );
const UserDashboardEditCompany = () =>
    import(
        /* webpackChunkName: "user" */ "@/views/user/dashboard/companies/edit/_companyId.vue"
    );

// Admin
// import Admin from "@/views/admin/index.vue";
// import AdminHome from "@/views/admin/AdminHome.vue";
// import AdminJobPreview from "@/views/admin/jobs/preview/_jobId.vue";
// import AdminEditJob from "@/views/admin/jobs/edit/_jobId.vue";
// import AdminEditCompany from "@/views/admin/companies/edit/_companyId.vue";
// import AdminEditUser from "@/views/admin/users/edit/_userId.vue";
// import AdminCoupon from "@/views/admin/coupons/edit/_couponId.vue";
const Admin = () =>
    import(/* webpackChunkName: "admin" */ "@/views/admin/index.vue");
const AdminHome = () =>
    import(/* webpackChunkName: "admin" */ "@/views/admin/AdminHome.vue");
const AdminJobPreview = () =>
    import(
        /* webpackChunkName: "admin" */ "@/views/admin/jobs/preview/_jobId.vue"
    );
const AdminEditJob = () =>
    import(
        /* webpackChunkName: "admin" */ "@/views/admin/jobs/edit/_jobId.vue"
    );
const AdminEditCompany = () =>
    import(
        /* webpackChunkName: "admin" */ "@/views/admin/companies/edit/_companyId.vue"
    );
const AdminEditUser = () =>
    import(
        /* webpackChunkName: "admin" */ "@/views/admin/users/edit/_userId.vue"
    );
const AdminCoupon = () =>
    import(
        /* webpackChunkName: "admin" */ "@/views/admin/coupons/edit/_couponId.vue"
    );

// 404
// import NotFound from "@/views/pages/NotFound.vue";
const NotFound = () => import("@/views/pages/NotFound.vue");

// #Routes
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
                path: "account/verification/:userId",
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
    {
        path: "/user",
        component: User,
        children: [
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
    { path: "/pages/404", component: NotFound, meta: { public: true } },
    { path: "*", redirect: "/jobboard" }
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                // offset: { x: 0, y: 10 },
                behavior: "smooth"
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

// #Checks before routes
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
    const isAdmin = store.getters.user.isAdmin;

    if (onlyAdmin && !isAdmin) {
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
        return next("/user/dashboard?tab=1");
    }

    if (loggedIn && onlyWhenLoggedOut) {
        return next("/user/dashboard?tab=1");
    }

    next();
});

export default router;
