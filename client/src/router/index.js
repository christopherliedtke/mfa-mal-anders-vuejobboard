import Vue from "vue";
import config from "@/config/config.js";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import store from "@/store";

// #Views
const Home = () =>
  import(
    /* webpackChunkName: "home" */
    /* webpackPrefetch: true */
    "@/views/Home.vue"
  );
const Employer = () =>
  import(
    /* webpackChunkName: "employer" */
    /* webpackPrefetch: true */
    "@/views/Employer.vue"
  );

const About = () => import(/* webpackChunkName: "about" */ "@/views/About.vue");
const Contact = () =>
  import(/* webpackChunkName: "contact" */ "@/views/Contact.vue");
const AGBs = () => import(/* webpackChunkName: "agbs" */ "@/views/AGBs.vue");
const Linktree = () =>
  import(/* webpackChunkName: "linktree" */ "@/views/Linktree.vue");
const Impressum = () =>
  import(/* webpackChunkName: "impressum" */ "@/views/Impressum.vue");
const PrivacyPolicy = () =>
  import(/* webpackChunkName: "privacy" */ "@/views/PrivacyPolicy.vue");

// #Blog
const Blog = () =>
  import(
    /* webpackChunkName: "blog" */
    /* webpackPrefetch: true */
    "@/views/blog/Blog.vue"
  );
const Article = () =>
  import(
    /* webpackChunkName: "blog" */
    /* webpackPrefetch: true */
    "@/views/blog/article/_slug.vue"
  );

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
  import(
    /* webpackChunkName: "career" */
    /* webpackPrefetch: true */
    "@/views/career/CareerHome.vue"
  );
const CareerMfaAusbildung = () =>
  import(
    /* webpackChunkName: "career" */
    /* webpackPrefetch: true */
    "@/views/career/mfa/CareerMfaAusbildung.vue"
  );
const CareerMfaGehalt = () =>
  import(
    /* webpackChunkName: "career-mfa-gehalt" */
    /* webpackPrefetch: true */
    "@/views/career/mfa/CareerMfaGehalt.vue"
  );
const CareerZfaGehalt = () =>
  import(
    /* webpackChunkName: "career-zfa-gehalt" */
    /* webpackPrefetch: true */
    "@/views/career/zfa/CareerZfaGehalt.vue"
  );
const CareerBewerbung = () =>
  import(
    /* webpackChunkName: "career" */
    /* webpackPrefetch: true */
    "@/views/career/CareerBewerbung.vue"
  );

const CareerJobsBerufsbilderHome = () =>
  import(
    /* webpackChunkName: "career-profession" */
    /* webpackPrefetch: true */
    "@/views/career/jobs-berufsbilder/CareerJobsBerufsbilderHome.vue"
  );
const CareerBerufsbildType = () =>
  import(
    /* webpackChunkName: "career-profession" */
    /* webpackPrefetch: true */
    "@/views/career/jobs-berufsbilder/CareerBerufsbildType.vue"
  );
const CareerBerufsbildProfession = () =>
  import(
    /* webpackChunkName: "career-profession" */
    /* webpackPrefetch: true */
    "@/views/career/jobs-berufsbilder/CareerBerufsbildProfession.vue"
  );

const CareerFortWeiterbildungenHome = () =>
  import(
    /* webpackChunkName: "career-training" */
    /* webpackPrefetch: true */
    "@/views/career/fort-weiterbildungen/CareerFortWeiterbildungenHome.vue"
  );
const CareerFortWeiterbildungenUeberblick = () =>
  import(
    /* webpackChunkName: "career-training" */
    /* webpackPrefetch: true */
    "@/views/career/fort-weiterbildungen/CareerFortWeiterbildungenUeberblick.vue"
  );
const CareerFortWeiterbildung = () =>
  import(
    /* webpackChunkName: "career-training" */
    /* webpackPrefetch: true */
    "@/views/career/fort-weiterbildungen/CareerFortWeiterbildung.vue"
  );
const CareerFortWeiterbildungenCatalogue = () =>
  import(
    /* webpackChunkName: "career-training" */
    /* webpackPrefetch: true */
    "@/views/career/fort-weiterbildungen/CareerFortWeiterbildungenCatalogue.vue"
  );
const CareerFortWeiterbildungenCatalogueTraining = () =>
  import(
    /* webpackChunkName: "career-training" */
    /* webpackPrefetch: true */
    "@/views/career/fort-weiterbildungen/training/_id.vue"
  );

// #Jobboard
const Jobboard = () =>
  import(
    /* webpackChunkName: "jobboard" */
    /* webpackPrefetch: true */
    "@/views/jobboard/JobboardHome.vue"
  );
const JobView = () =>
  import(
    /* webpackChunkName: "job" */
    /* webpackPrefetch: true */
    "@/views/jobboard/job/JobView.vue"
  );
const CompanyArchive = () =>
  import(
    /* webpackChunkName: "job" */
    /* webpackPrefetch: true */
    "@/views/jobboard/archives/CompanyArchive.vue"
  );

// #Company
const CompanyView = () =>
  import(
    /* webpackChunkName: "company" */
    "@/views/company/CompanyView.vue"
  );

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
const UserAccount = () =>
  import(/* webpackChunkName: "user" */ "@/views/user/account/UserAccount.vue");
const UserJobs = () =>
  import(/* webpackChunkName: "user" */ "@/views/user/jobs/UserJobs.vue");
const UserJobPreview = () =>
  import(
    /* webpackChunkName: "job-preview" */ "@/views/user/jobs/preview/_jobId.vue"
  );
const UserEditJob = () =>
  import(
    /* webpackChunkName: "job_edit" */ "@/views/user/jobs/edit/_jobId.vue"
  );
const UserCompanies = () =>
  import(
    /* webpackChunkName: "user" */ "@/views/user/companies/UserCompanies.vue"
  );
const UserEditCompany = () =>
  import(
    /* webpackChunkName: "company_edit" */ "@/views/user/companies/edit/_companyId.vue"
  );
const UserPayments = () =>
  import(
    /* webpackChunkName: "user" */ "@/views/user/payments/UserPayments.vue"
  );
const UserTrainings = () =>
  import(
    /* webpackChunkName: "user" */ "@/views/user/trainings/UserTrainings.vue"
  );
const UserEditTraining = () =>
  import(
    /* webpackChunkName: "training_edit" */ "@/views/user/trainings/edit/_trainingId.vue"
  );
const UserStarredJobs = () =>
  import(
    /* webpackChunkName: "user" */ "@/views/user/starredJobs/UserStarredJobs.vue"
  );
const UserJobAlerts = () =>
  import(
    /* webpackChunkName: "user" */ "@/views/user/jobAlerts/UserJobAlerts.vue"
  );
const UserCheckoutJob = () =>
  import(
    /* webpackChunkName: "user_company" */ "@/views/user/checkout/_jobId.vue"
  );

// #Admin
const AdminJobs = () =>
  import(/* webpackChunkName: "admin" */ "@/views/admin/jobs/AdminJobs.vue");
const AdminJobPreview = () =>
  import(
    /* webpackChunkName: "job-preview" */ "@/views/admin/jobs/preview/_jobId.vue"
  );
const AdminEditJob = () =>
  import(
    /* webpackChunkName: "job_edit" */ "@/views/admin/jobs/edit/_jobId.vue"
  );
const AdminCompanies = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/companies/AdminCompanies.vue"
  );
const AdminEditCompany = () =>
  import(
    /* webpackChunkName: "company_edit" */ "@/views/admin/companies/edit/_companyId.vue"
  );
const AdminUsers = () =>
  import(/* webpackChunkName: "admin" */ "@/views/admin/users/AdminUsers.vue");
const AdminEditUser = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/users/edit/_userId.vue"
  );
const AdminCoupons = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/coupons/AdminCoupons.vue"
  );
const AdminEditCoupon = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/coupons/edit/_couponId.vue"
  );
const AdminSubscribers = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/subscribers/AdminSubscribers.vue"
  );
const AdminPayments = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/payments/AdminPayments.vue"
  );
const AdminEditPayment = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/payments/edit/_paymentId.vue"
  );
const AdminTrainings = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/trainings/AdminTrainings.vue"
  );
const AdminDataAnalytics = () =>
  import(
    /* webpackChunkName: "admin" */ "@/views/admin/data-analytics/AdminDataAnalytics.vue"
  );

// #404
const NotFound = () =>
  import(/* webpackChunkName: "not_found" */ "@/views/NotFound.vue");

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
    path: "/stellenangebote/ort/:location",
    name: "JobboardWLocation",
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
    path: "/stellenangebote/job/:jobId/:title",
    name: "JobViewWithTitle",
    component: JobView,
    meta: {
      public: true
    }
  },
  {
    path: "/stellenangebote/unternehmensverzeichnis",
    name: "CompanyArchive",
    component: CompanyArchive,
    meta: {
      public: true
    }
  },
  {
    path: "/unternehmen/:companyId",
    name: "CompanyView",
    component: CompanyView,
    meta: {
      public: true
    }
  },
  {
    path: "/unternehmen/:companyId/:name",
    name: "CompanyViewWName",
    component: CompanyView,
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
    path: "/karriere/bewerbung",
    name: "KarriereBewerbung",
    component: CareerBewerbung,
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
    path: "/karriere/fort-und-weiterbildung",
    name: "KarriereFortWeiterbildungen",
    component: CareerFortWeiterbildungenHome,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/ueberblick",
    name: "KarriereFortWeiterbildungUeberblick",
    component: CareerFortWeiterbildungenUeberblick,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/ueberblick/:slug",
    name: "KarriereFortWeiterbildung",
    component: CareerFortWeiterbildung,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/fortbildungskatalog",
    name: "KarriereFortbildungskatalog",
    component: CareerFortWeiterbildungenCatalogue,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/fortbildungskatalog/:id",
    name: "KarriereFortbildungskatalogFortbildung",
    component: CareerFortWeiterbildungenCatalogueTraining,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/fortbildungskatalog/:id/:slug",
    name: "KarriereFortbildungskatalogFortbildungWSlug",
    component: CareerFortWeiterbildungenCatalogueTraining,
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
    path: config.cms.postsPath + "/artikel/:slug",
    name: "Article2",
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
    path: "/linktree",
    name: "Linktree",
    component: Linktree,
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
    path: "/user/account",
    name: "UserAccount",
    component: UserAccount,
    meta: {
      public: false
    }
  },
  {
    path: "/user/stellenanzeigen",
    name: "UserJobs",
    component: UserJobs,
    meta: {
      public: false
    }
  },
  {
    path: "/user/jobs/edit/:jobId",
    name: "UserEditJob",
    component: UserEditJob,
    meta: {
      public: false
    }
  },
  {
    path: "/user/jobs/preview/:jobId",
    name: "UserJobPreview",
    component: UserJobPreview,
    meta: {
      public: false
    }
  },
  {
    path: "/user/unternehmen",
    name: "UserCompanies",
    component: UserCompanies,
    meta: {
      public: false
    }
  },
  {
    path: "/user/zahlungen",
    name: "UserPayments",
    component: UserPayments,
    meta: {
      public: false
    }
  },
  {
    path: "/user/companies/edit/:companyId",
    name: "UserEditCompany",
    component: UserEditCompany,
    meta: {
      public: false
    }
  },
  {
    path: "/user/fortbildungen",
    name: "UserTrainings",
    component: UserTrainings,
    meta: {
      public: false
    }
  },
  {
    path: "/user/trainings/edit/:trainingId",
    name: "UserEditTraining",
    component: UserEditTraining,
    meta: {
      public: false
    }
  },
  {
    path: "/user/gespeicherte-stellenanzeigen",
    name: "UserStarredJobs",
    component: UserStarredJobs,
    meta: {
      public: false
    }
  },
  {
    path: "/user/job-newsletter",
    name: "UserJobAlerts",
    component: UserJobAlerts,
    meta: {
      public: false
    }
  },
  {
    path: "/user/checkout/:jobId",
    name: "UserCheckoutJob",
    component: UserCheckoutJob,
    meta: {
      public: false
    }
  },
  {
    path: "/admin/jobs",
    name: "AdminJobs",
    component: AdminJobs,
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
    path: "/admin/companies",
    name: "AdminCompanies",
    component: AdminCompanies,
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
    path: "/admin/users",
    name: "AdminUsers",
    component: AdminUsers,
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
    path: "/admin/coupons",
    name: "AdminCoupons",
    component: AdminCoupons,
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
    path: "/admin/subscribers",
    name: "AdminSubscribers",
    component: AdminSubscribers,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/payments",
    name: "AdminPayments",
    component: AdminPayments,
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
  {
    path: "/admin/trainings",
    name: "AdminTrainings",
    component: AdminTrainings,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/data-analytics",
    name: "AdminDataAnalytics",
    component: AdminDataAnalytics,
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
        offset: { x: 0, y: 75 },
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
    return next("/user/stellenanzeigen");
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next(
      to.query.redirect ? to.query.redirect : "/user/stellenanzeigen"
    );
  }

  next();
});

export default router;
