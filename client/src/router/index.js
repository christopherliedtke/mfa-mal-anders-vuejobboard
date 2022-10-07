import Vue from "vue";
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
    "@/views/Blog.vue"
  );
const BlogArticle = () =>
  import(
    /* webpackChunkName: "blog-article" */
    /* webpackPrefetch: true */
    "@/views/BlogArticle.vue"
  );

// #Newsletter
const NewsletterSubscriptionSuccess = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/NewsletterSubscriptionSuccess.vue"
  );
const NewsletterSubscriptionActivation = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/NewsletterSubscriptionActivation.vue"
  );
const NewsletterUnsubscribe = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/NewsletterUnsubscribe.vue"
  );
const NewsletterUnsubscriptionSuccess = () =>
  import(
    /* webpackChunkName: "newsletter" */ "@/views/NewsletterUnsubscriptionSuccess.vue"
  );

// #Career
const CareerHome = () =>
  import(
    /* webpackChunkName: "career-home" */
    /* webpackPrefetch: true */
    "@/views/CareerHome.vue"
  );
const CareerMfaEducation = () =>
  import(
    /* webpackChunkName: "career-mfa-education" */
    /* webpackPrefetch: true */
    "@/views/CareerMfaEducation.vue"
  );
const CareerMfaSalary = () =>
  import(
    /* webpackChunkName: "career-mfa-salary" */
    /* webpackPrefetch: true */
    "@/views/CareerMfaSalary.vue"
  );
const CareerZfaSalary = () =>
  import(
    /* webpackChunkName: "career-zfa-salary" */
    /* webpackPrefetch: true */
    "@/views/CareerZfaSalary.vue"
  );
const CareerApplication = () =>
  import(
    /* webpackChunkName: "career-application" */
    /* webpackPrefetch: true */
    "@/views/CareerApplication.vue"
  );

const CareerProfessionHome = () =>
  import(
    /* webpackChunkName: "career-profession-home" */
    /* webpackPrefetch: true */
    "@/views/CareerProfessionHome.vue"
  );
const CareerProfessionType = () =>
  import(
    /* webpackChunkName: "career-profession-type" */
    /* webpackPrefetch: true */
    "@/views/CareerProfessionType.vue"
  );
const CareerProfessionItem = () =>
  import(
    /* webpackChunkName: "career-profession-single" */
    /* webpackPrefetch: true */
    "@/views/CareerProfessionItem.vue"
  );

const CareerTrainingHome = () =>
  import(
    /* webpackChunkName: "career-training-home" */
    /* webpackPrefetch: true */
    "@/views/CareerTrainingHome.vue"
  );
const CareerTrainingAffiliatePKV = () =>
  import(
    /* webpackChunkName: "career-training-affiliate" */
    /* webpackPrefetch: true */
    "@/views/CareerTrainingAffiliatePKV.vue"
  );
const CareerTrainingOverview = () =>
  import(
    /* webpackChunkName: "career-training-overview" */
    /* webpackPrefetch: true */
    "@/views/CareerTrainingOverview.vue"
  );
const CareerTrainingItem = () =>
  import(
    /* webpackChunkName: "career-training-single" */
    /* webpackPrefetch: true */
    "@/views/CareerTrainingItem.vue"
  );
const CareerTrainingCatalogue = () =>
  import(
    /* webpackChunkName: "career-training-catalogue" */
    /* webpackPrefetch: true */
    "@/views/CareerTrainingCatalogue.vue"
  );
const CareerTrainingCatalogueItem = () =>
  import(
    /* webpackChunkName: "career-training-catalogue-training" */
    /* webpackPrefetch: true */
    "@/views/CareerTrainingCatalogueItem.vue"
  );

// #JobBoard
const JobBoard = () =>
  import(
    /* webpackChunkName: "jobboard" */
    /* webpackPrefetch: true */
    "@/views/JobBoard.vue"
  );
const JobView = () =>
  import(
    /* webpackChunkName: "job" */
    /* webpackPrefetch: true */
    "@/views/JobView.vue"
  );
const JobBoardCompanyArchive = () =>
  import(
    /* webpackChunkName: "company-archive" */
    "@/views/JobBoardCompanyArchive.vue"
  );

// #SimpleApplication
const SimpleApplicationView = () =>
  import(
    /* webpackChunkName: "simple-application" */
    "@/views/SimpleApplicationView.vue"
  );

// #JobSeekBoard
const JobSeekBoard = () =>
  import(
    /* webpackChunkName: "jobseekboard" */
    /* webpackPrefetch: true */
    "@/views/JobSeekBoard.vue"
  );
const JobSeekView = () =>
  import(
    /* webpackChunkName: "jobseek" */
    /* webpackPrefetch: true */
    "@/views/JobSeekView.vue"
  );
const JobSeeksInfoView = () =>
  import(
    /* webpackChunkName: "jobseek-info" */
    /* webpackPrefetch: true */
    "@/views/JobSeeksInfoView.vue"
  );

// #Company
const CompanyView = () =>
  import(
    /* webpackChunkName: "company" */
    "@/views/CompanyView.vue"
  );

// #Auth
const AuthLogin = () =>
  import(/* webpackChunkName: "auth" */ "@/views/AuthLogin.vue");
const AuthRegister = () =>
  import(/* webpackChunkName: "auth" */ "@/views/AuthRegister.vue");
const AuthLogout = () =>
  import(/* webpackChunkName: "auth" */ "@/views/AuthLogout.vue");
const AuthPasswordReset = () =>
  import(/* webpackChunkName: "auth" */ "@/views/AuthPasswordReset.vue");
const AuthAccountVerification = () =>
  import(/* webpackChunkName: "auth" */ "@/views/AuthAccountVerification.vue");

// #User
const UserAccountEdit = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserAccountEdit.vue");
const UserJobs = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserJobs.vue");
const UserJobPreview = () =>
  import(/* webpackChunkName: "job-preview" */ "@/views/UserJobPreview.vue");
const UserJobEdit = () =>
  import(/* webpackChunkName: "job_edit" */ "@/views/UserJobEdit.vue");
const UserCompanies = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserCompanies.vue");
const UserCompanyEdit = () =>
  import(/* webpackChunkName: "company_edit" */ "@/views/UserCompanyEdit.vue");
const UserPayments = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserPayments.vue");
const UserTrainings = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserTrainings.vue");
const UserTrainingEdit = () =>
  import(
    /* webpackChunkName: "training_edit" */ "@/views/UserTrainingEdit.vue"
  );
const UserStarredJobs = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserStarredJobs.vue");
const UserJobAlerts = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserJobAlerts.vue");
const UserJobSeeks = () =>
  import(/* webpackChunkName: "user" */ "@/views/UserJobSeeks.vue");
const UserJobSeekEdit = () =>
  import(/* webpackChunkName: "job_seek_edit" */ "@/views/UserJobSeekEdit.vue");
const UserJobSeekPreview = () =>
  import(
    /* webpackChunkName: "job_seek-preview" */ "@/views/UserJobSeekPreview.vue"
  );
const UserCheckoutJob = () =>
  import(/* webpackChunkName: "user_company" */ "@/views/UserCheckoutJob.vue");

// #Admin
const AdminJobs = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminJobs.vue");
const AdminJobPreview = () =>
  import(/* webpackChunkName: "job-preview" */ "@/views/AdminJobPreview.vue");
const AdminJobEdit = () =>
  import(/* webpackChunkName: "job_edit" */ "@/views/AdminJobEdit.vue");
const AdminCompanies = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminCompanies.vue");
const AdminCompanyEdit = () =>
  import(/* webpackChunkName: "company_edit" */ "@/views/AdminCompanyEdit.vue");
const AdminUsers = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminUsers.vue");
const AdminUserEdit = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminUserEdit.vue");
const AdminSubscribers = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminSubscribers.vue");
const AdminPayments = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminPayments.vue");
const AdminPaymentEdit = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminPaymentEdit.vue");
const AdminTrainings = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminTrainings.vue");
const AdminDataAnalytics = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminDataAnalytics.vue");
const AdminTools = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminTools.vue");
const AdminJobSeeks = () =>
  import(/* webpackChunkName: "admin" */ "@/views/AdminJobSeeks.vue");
const AdminJobSeekPreview = () =>
  import(
    /* webpackChunkName: "job-preview" */ "@/views/AdminJobSeekPreview.vue"
  );
const AdminJobSeekEdit = () =>
  import(/* webpackChunkName: "job_edit" */ "@/views/AdminJobSeekEdit.vue");

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
  // {
  //   path: "/",
  //   redirect: () => {
  //     return { path: "/jobs" };
  //   }
  // },
  // {
  //   path: "/",
  //   name: "JobBoardAsHome",
  //   component: JobBoard,
  //   meta: {
  //     public: true
  //   }
  // },
  {
    path: "/jobs/:location?",
    name: "JobBoard",
    component: JobBoard,
    meta: {
      public: true
    }
  },
  // {
  //   path: "/mfa/:location?",
  //   name: "JobBoardMfa",
  //   component: JobBoard,
  //   meta: {
  //     public: true
  //   }
  // },
  {
    path: "/mfa/:location?",
    redirect: to => {
      return {
        path: "/jobs",
        query: { ort: to.params.location, berufsgruppe: "mfa" }
      };
    }
  },
  {
    path: "/jobs/mfa/:location?",
    name: "JobBoardMfa",
    component: JobBoard,
    meta: {
      public: true
    }
  },
  // {
  //   path: "/zfa/:location?",
  //   name: "JobBoardZfa",
  //   component: JobBoard,
  //   meta: {
  //     public: true
  //   }
  // },
  {
    path: "/zfa/:location?",
    redirect: to => {
      return {
        path: "/jobs",
        query: { ort: to.params.location, berufsgruppe: "zfa" }
      };
    }
  },
  {
    path: "/jobs/zfa/:location?",
    name: "JobBoardZfa",
    component: JobBoard,
    meta: {
      public: true
    }
  },
  {
    path: "/ort/:location",
    redirect: to => {
      return {
        path: "/jobs/:location",
        params: { location: to.params.location }
        // query: { berufsgruppe: to.query.berufsgruppe }
      };
    }
  },
  {
    path: "/stellenangebote",
    redirect: to => {
      return { path: "/jobs", query: to.query };
    }
  },
  {
    path: "/stellenangebote/ort/:location",
    redirect: to => {
      return {
        path: "/jobs/:location",
        params: { location: to.params.location }
      };
    }
  },
  {
    path: "/job/:jobId/:title?",
    name: "JobView",
    component: JobView,
    meta: {
      public: true
    }
  },
  {
    path: "/stellenangebote/job/:jobId/:title?",
    redirect: to => {
      return {
        path: "/job/:jobId",
        params: {
          jobId: to.params.jobId
        }
      };
    }
  },
  {
    path: "/jobboard/job/:jobId/:title?",
    redirect: to => {
      return {
        path: "/job/:jobId",
        params: {
          jobId: to.params.jobId
        }
      };
    }
  },
  {
    path: "/kurzbewerbung/:jobId",
    name: "SimpleApplicationView",
    component: SimpleApplicationView,
    meta: {
      public: true
    }
  },
  {
    path: "/unternehmensverzeichnis",
    name: "JobBoardCompanyArchive",
    component: JobBoardCompanyArchive,
    meta: {
      public: true
    }
  },
  {
    path: "/unternehmen/:companyId/:name?",
    name: "CompanyView",
    component: CompanyView,
    meta: {
      public: true
    }
  },
  {
    path: "/stellengesuche/info",
    name: "JobSeeksInfoView",
    component: JobSeeksInfoView,
    meta: {
      public: true
    }
  },
  {
    path: "/stellengesuche",
    name: "JobSeekBoard",
    component: JobSeekBoard,
    meta: {
      public: true
    }
  },
  {
    path: "/stellengesuche/ort/:location",
    name: "JobSeekboardWLocation",
    component: JobSeekBoard,
    meta: {
      public: true
    }
  },
  {
    path: "/stellengesuche/gesuch/:jobSeekId/:title?",
    name: "JobSeekView",
    component: JobSeekView,
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
    name: "CareerMfaEducation",
    component: CareerMfaEducation,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/mfa/gehalt",
    name: "CareerMfaSalary",
    component: CareerMfaSalary,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/zfa/gehalt",
    name: "CareerZfaSalary",
    component: CareerZfaSalary,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/bewerbung",
    name: "CareerApplication",
    component: CareerApplication,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/jobs-und-berufsbilder",
    name: "CareerProfessionHome",
    component: CareerProfessionHome,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/jobs-und-berufsbilder/:slug",
    name: "CareerProfessionType",
    component: CareerProfessionType,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/jobs-und-berufsbilder/:slug/:profession",
    name: "CareerProfessionItem",
    component: CareerProfessionItem,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung",
    name: "CareerTrainingHome",
    component: CareerTrainingHome,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/pkv-institut",
    name: "CareerTrainingAffiliatePKV",
    component: CareerTrainingAffiliatePKV,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/ueberblick",
    name: "CareerTrainingOverview",
    component: CareerTrainingOverview,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/ueberblick/:slug",
    name: "CareerTrainingItem",
    component: CareerTrainingItem,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/fortbildungskalender",
    redirect: "/fortbildungskatalog"
  },
  {
    path: "/karriere/fort-und-weiterbildung/fortbildungskatalog",
    redirect: "/fortbildungskatalog"
    // name: "CareerTrainingCatalogue",
    // component: CareerTrainingCatalogue,
    // meta: {
    //   public: true
    // }
  },
  {
    path: "/fortbildungskatalog",
    name: "CareerTrainingCatalogue",
    component: CareerTrainingCatalogue,
    meta: {
      public: true
    }
  },
  {
    path: "/karriere/fort-und-weiterbildung/fortbildungskatalog/:id/:slug?",
    redirect: to => {
      return {
        path: "/fortbildungskatalog/:id/:slug?",
        params: {
          id: to.params.id,
          slug: to.params.slug
        }
      };
    }
    // name: "CareerTrainingCatalogueItem",
    // component: CareerTrainingCatalogueItem,
    // meta: {
    //   public: true
    // }
  },
  {
    path: "/fortbildungskatalog/:id/:slug?",
    name: "CareerTrainingCatalogueItem",
    component: CareerTrainingCatalogueItem,
    meta: {
      public: true
    }
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      public: true
    }
  },
  {
    path: "/blog/artikel/:slug",
    alias: "/blog/article/:slug",
    name: "BlogArticle",
    component: BlogArticle,
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
    name: "UserAccountEdit",
    component: UserAccountEdit,
    meta: {
      public: false
    }
  },
  {
    path: "/user/stellenanzeigen",
    name: "UserJobs",
    component: UserJobs,
    meta: {
      public: false,
      onlyEmployer: true
    }
  },
  {
    path: "/user/jobs/edit/:jobId",
    name: "UserJobEdit",
    component: UserJobEdit,
    meta: {
      public: false,
      onlyEmployer: true
    }
  },
  {
    path: "/user/jobs/preview/:jobId",
    name: "UserJobPreview",
    component: UserJobPreview,
    meta: {
      public: false,
      onlyEmployer: true
    }
  },
  {
    path: "/user/unternehmen",
    name: "UserCompanies",
    component: UserCompanies,
    meta: {
      public: false,
      onlyEmployer: true
    }
  },
  {
    path: "/user/rechnungen",
    name: "UserPayments",
    component: UserPayments,
    meta: {
      public: false,
      onlyEmployer: true
    }
  },
  {
    path: "/user/companies/edit/:companyId",
    name: "UserCompanyEdit",
    component: UserCompanyEdit,
    meta: {
      public: false,
      onlyEmployer: true
    }
  },
  {
    path: "/user/fortbildungen",
    name: "UserTrainings",
    component: UserTrainings,
    meta: {
      public: false,
      onlyEducational: true
    }
  },
  {
    path: "/user/trainings/edit/:trainingId",
    name: "UserTrainingEdit",
    component: UserTrainingEdit,
    meta: {
      public: false,
      onlyEducational: true
    }
  },
  {
    path: "/user/gespeicherte-stellenanzeigen",
    name: "UserStarredJobs",
    component: UserStarredJobs,
    meta: {
      public: false,
      onlyEmployee: true
    }
  },
  {
    path: "/user/job-newsletter",
    name: "UserJobAlerts",
    component: UserJobAlerts,
    meta: {
      public: false,
      onlyEmployee: true
    }
  },
  {
    path: "/user/stellengesuche",
    name: "UserJobSeeks",
    component: UserJobSeeks,
    meta: {
      public: false,
      onlyEmployee: true
    }
  },
  {
    path: "/user/stellengesuche/edit/:jobSeekId",
    name: "UserJobSeekEdit",
    component: UserJobSeekEdit,
    meta: {
      public: false,
      onlyEmployee: true
    }
  },
  {
    path: "/user/stellengesuche/preview/:jobSeekId",
    name: "UserJobSeekPreview",
    component: UserJobSeekPreview,
    meta: {
      public: false,
      onlyEmployee: true
    }
  },
  {
    path: "/user/checkout/job/:jobId",
    name: "UserCheckoutJob",
    component: UserCheckoutJob,
    meta: {
      public: false,
      onlyEmployer: true
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
    name: "AdminJobEdit",
    component: AdminJobEdit,
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
    name: "AdminCompanyEdit",
    component: AdminCompanyEdit,
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
    name: "AdminUserEdit",
    component: AdminUserEdit,
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
    path: "/admin/invoices",
    name: "AdminPayments",
    component: AdminPayments,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/invoices/edit/:paymentId",
    name: "AdminPaymentEdit",
    component: AdminPaymentEdit,
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
  {
    path: "/admin/tools",
    name: "AdminTools",
    component: AdminTools,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/jobseeks",
    name: "AdminJobSeeks",
    component: AdminJobSeeks,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/jobseeks/preview/:jobSeekId",
    name: "AdminJobSeekPreview",
    component: AdminJobSeekPreview,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  {
    path: "/admin/jobseeks/edit/:jobSeekId",
    name: "AdminJobSeekEdit",
    component: AdminJobSeekEdit,
    meta: {
      public: false,
      onlyAdmin: true
    }
  },
  { path: "/404", component: NotFound, meta: { public: true } },
  { path: "*", redirect: "/404" }
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

// #Handle Router error
router.onError(err => {
  console.log("Error on Vue.Router: ", err);
  alert(
    "Bei der Navigation ist ein Fehler aufgetreten. Bitte laden Sie die Seite falls nötig neu."
  );

  return { success: false };
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
  const onlyEmployer = to.matched.some(record => record.meta.onlyEmployer);
  const onlyEmployee = to.matched.some(record => record.meta.onlyEmployee);
  const onlyEducational = to.matched.some(
    record => record.meta.onlyEducational
  );

  const loggedIn = store.getters.loggedIn;
  const userActive = store.getters.user.status === "active";
  const isAdmin = store.getters.user.isAdmin;
  const isEmployer = store.getters.user.isEmployer;
  const isEmployee = store.getters.user.isEmployee;
  const isEducational = store.getters.user.isEducational;

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
    return next("/user/account");
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next(to.query.redirect ? to.query.redirect : "/user/account");
  }

  if (
    (onlyEducational && !isEducational) ||
    (onlyEmployer && !isEmployer) ||
    (onlyEmployee && !isEmployee)
  ) {
    return next("/user/account?checkrole=true");
  }

  next();
});

export default router;
