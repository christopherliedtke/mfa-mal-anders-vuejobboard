import Vue from "vue";
import config from "@/config/config.js";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "@/store";

// #Views
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const AGBs = () => import("@/views/AGBs.vue");
const Contact = () => import("@/views/Contact.vue");
const Employer = () => import("@/views/Employer.vue");
const Impressum = () => import("@/views/Impressum.vue");
const PrivacyPolicy = () => import("@/views/PrivacyPolicy.vue");

// #Blog
const Blog = () => import("@/views/blog/Blog.vue");
const Article = () => import("@/views/blog/article/_slug.vue");

// #Newsletter
const NewsletterSubscriptionSuccess = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/newsletter/NewsletterSubscriptionSuccess.vue"
  );
const NewsletterSubscriptionActivation = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/newsletter/NewsletterSubscriptionActivation.vue"
  );
const NewsletterUnsubscribe = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/newsletter/NewsletterUnsubscribe.vue"
  );
const NewsletterUnsubscriptionSuccess = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/newsletter/NewsletterUnsubscriptionSuccess.vue"
  );

// #Career
const CareerHome = () =>
  import(/* webpackChunkName: "career" */ "@/views/career/CareerHome.vue");
const CareerMfaAusbildung = () =>
  import(
    /* webpackChunkName: "career" */ "@/views/career/mfa/CareerMfaAusbildung.vue"
  );
const CareerMfaGehalt = () =>
  import(
    /* webpackChunkName: "career-mfa-gehalt" */ "@/views/career/mfa/CareerMfaGehalt.vue"
  );
const CareerZfaGehalt = () =>
  import(
    /* webpackChunkName: "career-zfa-gehalt" */ "@/views/career/zfa/CareerZfaGehalt.vue"
  );
const CareerBewerbungstipps = () =>
  import(
    /* webpackChunkName: "career" */ "@/views/career/CareerBewerbungstipps.vue"
  );

const CareerJobsBerufsbilderHome = () =>
  import(
    /* webpackChunkName: "career-profession" */ "@/views/career/jobs-berufsbilder/CareerJobsBerufsbilderHome.vue"
  );
const CareerBerufsbildType = () =>
  import(
    /* webpackChunkName: "career-profession" */ "@/views/career/jobs-berufsbilder/CareerBerufsbildType.vue"
  );
const CareerBerufsbildProfession = () =>
  import(
    /* webpackChunkName: "career-profession" */ "@/views/career/jobs-berufsbilder/CareerBerufsbildProfession.vue"
  );

const CareerFortWeiterbildungenHome = () =>
  import(
    /* webpackChunkName: "career-training" */ "@/views/career/fort-weiterbildungen/CareerFortWeiterbildungenHome.vue"
  );
const CareerFortWeiterbildung = () =>
  import(
    /* webpackChunkName: "career-training" */ "@/views/career/fort-weiterbildungen/CareerFortWeiterbildung.vue"
  );

// #Jobboard
const Jobboard = () =>
  import(
    /* webpackChunkName: "jobboard" */ "@/views/jobboard/JobboardHome.vue"
  );
const JobView = () =>
  import(/* webpackChunkName: "job" */ "@/views/jobboard/job/JobView.vue");

// #Auth
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

// #User
const UserDashboardHome = () =>
  import(
    /* webpackChunkName: "user" */ "@/views/user/dashboard/UserDashboardHome.vue"
  );
const UserDashboardJobPreview = () =>
  import(
    /* webpackChunkName: "job-preview" */ "@/views/user/dashboard/jobs/preview/_jobId.vue"
  );
const UserDashboardEditJob = () =>
  import(
    /* webpackChunkName: "job_edit" */ "@/views/user/dashboard/jobs/edit/_jobId.vue"
  );
const UserDashboardEditCompany = () =>
  import(
    /* webpackChunkName: "company_edit" */ "@/views/user/dashboard/companies/edit/_companyId.vue"
  );
const UserDashboardCheckoutJob = () =>
  import(
    /* webpackChunkName: "user_company" */ "@/views/user/dashboard/checkout/_jobId.vue"
  );

// #Admin
const AdminHome = () =>
  import(/* webpackChunkName: "ad" */ "@/views/admin/AdminHome.vue");
const AdminJobPreview = () =>
  import(
    /* webpackChunkName: "job-preview" */ "@/views/admin/jobs/preview/_jobId.vue"
  );
const AdminEditJob = () =>
  import(
    /* webpackChunkName: "job_edit" */ "@/views/admin/jobs/edit/_jobId.vue"
  );
const AdminEditCompany = () =>
  import(
    /* webpackChunkName: "company_edit" */ "@/views/admin/companies/edit/_companyId.vue"
  );
const AdminEditUser = () =>
  import(
    /* webpackChunkName: "ad_user" */ "@/views/admin/users/edit/_userId.vue"
  );
const AdminEditCoupon = () =>
  import(
    /* webpackChunkName: "ad_coupon" */ "@/views/admin/coupons/edit/_couponId.vue"
  );
const AdminEditPayment = () =>
  import(
    /* webpackChunkName: "ad_payment" */ "@/views/admin/payments/edit/_paymentId.vue"
  );

// #404
const NotFound = () => import("@/views/NotFound.vue");

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
    path: "/stellenangebote",
    name: "Jobboard",
    component: Jobboard,
    meta: {
      public: true
    }
  },
  {
    path: "/stellenangebote/job/:jobId",
    name: "JobView",
    component: JobView,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere",
    name: "Karriere",
    component: CareerHome,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/mfa/ausbildung-berufsbild",
    name: "KarriereMfaAusbildungBerufsbild",
    component: CareerMfaAusbildung,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/mfa/gehalt",
    name: "KarriereMfaGehalt",
    component: CareerMfaGehalt,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/zfa/gehalt",
    name: "KarriereZfaGehalt",
    component: CareerZfaGehalt,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/bewerbungstipps",
    name: "KarriereBewerbungstipps",
    component: CareerBewerbungstipps,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/jobs-und-berufsbilder",
    name: "KarriereJobsBerufsbilder",
    component: CareerJobsBerufsbilderHome,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/jobs-und-berufsbilder/:slug",
    name: "KarriereJobsBerufsbilderType",
    component: CareerBerufsbildType,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/jobs-und-berufsbilder/:slug/:profession",
    name: "KarriereJobsBerufsbilderProfession",
    component: CareerBerufsbildProfession,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildungen",
    name: "KarriereFortWeiterbildungen",
    component: CareerFortWeiterbildungenHome,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildungen/:slug",
    name: "KarriereFortWeiterbildung",
    component: CareerFortWeiterbildung,
    meta: {
      public: true
    }
  },
  {
    path: config.cms.postsPath,
    name: config.cms.postsPageTitle,
    component: Blog,
    meta: {
      public: true
    }
  },
  {
    path: config.cms.postsPath + "/article/:slug",
    name: "Article",
    component: Article,
    meta: {
      public: true
    }
  },
  {
    path: "/fuer-arbeitgeber",
    name: "Employer",
    component: Employer,
    meta: {
      public: true
    }
  },
  {
    path: "/ueber",
    name: "About",
    component: About,
    meta: {
      public: true
    }
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: Contact,
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
  {
    path: "/datenschutz",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: {
      public: true
    }
  },
  {
    path: "/agbs",
    name: "AGBs",
    component: AGBs,
    meta: {
      public: true
    }
  },
  {
    path: "/newsletter/subscription-successful",
    name: "NewsletterSubscriptionSuccess",
    component: NewsletterSubscriptionSuccess,
    meta: {
      public: true
    }
  },
  {
    path: "/newsletter/subscription-activation/:subscriberId",
    name: "NewsletterSubscriptionActivation",
    component: NewsletterSubscriptionActivation,
    meta: {
      public: true
    }
  },
  {
    path: "/newsletter/unsubscribe",
    name: "NewsletterUnsubscribe",
    component: NewsletterUnsubscribe,
    meta: {
      public: true
    }
  },
  {
    path: "/newsletter/unsubscribed-successful",
    name: "NewsletterUnsubscriptionSuccess",
    component: NewsletterUnsubscriptionSuccess,
    meta: {
      public: true
    }
  },
  {
    path: "/auth/login",
    name: "AuthLogin",
    component: AuthLogin,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/auth/register",
    name: "AuthRegister",
    component: AuthRegister,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/auth/logout",
    name: "AuthLogout",
    component: AuthLogout,
    meta: {
      public: true
    }
  },
  {
    path: "/auth/password-reset",
    name: "AuthPasswordReset",
    component: AuthPasswordReset,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/auth/account/verification",
    name: "AuthAccountVerification",
    component: AuthAccountVerification,
    meta: {
      public: false,
      onlyWhenPending: true
    }
  },
  {
    path: "/auth/account/verification/:userId",
    name: "AuthAccountVerificationWUserId",
    component: AuthAccountVerification,
    meta: {
      public: false,
      onlyWhenPending: true
    }
  },
  {
    path: "/user/dashboard",
    name: "UserDashboardHome",
    component: UserDashboardHome,
    meta: {
      public: false
    }
  },
  {
    path: "/user/dashboard/jobs/edit/:jobId",
    name: "UserDashboardEditJob",
    component: UserDashboardEditJob,
    meta: {
      public: false
    }
  },
  {
    path: "/user/dashboard/jobs/preview/:jobId",
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
  },
  {
    path: "/user/dashboard/checkout/:jobId",
    name: "UserDashboardCheckoutJob",
    component: UserDashboardCheckoutJob,
    meta: {
      public: false
    }
  },
  {
    path: "/admin",
    name: "AdminHome",
    component: AdminHome,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/jobs/preview/:jobId",
    name: "AdminJobPreview",
    component: AdminJobPreview,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/jobs/edit/:jobId",
    name: "AdminEditJob",
    component: AdminEditJob,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/companies/edit/:companyId",
    name: "AdminEditCompany",
    component: AdminEditCompany,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/users/edit/:userId",
    name: "AdminEditUser",
    component: AdminEditUser,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/coupons/edit/:couponId",
    name: "AdminEditCoupon",
    component: AdminEditCoupon,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/payments/edit/:paymentId",
    name: "AdminEditPayment",
    component: AdminEditPayment,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  { path: "/404", component: NotFound, meta: { public: true } },
  { path: "*", redirect: "/stellenangebote" }
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
  const userActive = store.getters.user.status === "active";
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

  if (!isPublic && !onlyWhenPending && loggedIn && !userActive) {
    return next("/auth/account/verification");
  }

  if (!isPublic && onlyWhenPending && loggedIn && userActive) {
    return next("/user/dashboard?tab=1");
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next("/user/dashboard?tab=1");
  }

  next();
});

export default router;
