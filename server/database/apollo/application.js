const { createApplication } = require("graphql-modules");
const JobModule = require("./modules/JobModule");
const UserModule = require("./modules/UserModule");
const CompanyModule = require("./modules/CompanyModule");
const SubscriberModule = require("./modules/SubscriberModule");
const PaymentModule = require("./modules/PaymentModule");
const StarredJobModule = require("./modules/StarredJobModule");
const JobAlertModule = require("./modules/JobAlertModule");
const TrainingModule = require("./modules/TrainingModule");
const JobSeekModule = require("./modules/JobSeekModule");
const ArticleModule = require("./modules/ArticleModule");
const WeiterbildungModule = require("./modules/WeiterbildungModule");
const ProfessionModule = require("./modules/ProfessionModule");

const application = createApplication({
  modules: [
    JobModule,
    UserModule,
    CompanyModule,
    SubscriberModule,
    PaymentModule,
    StarredJobModule,
    JobAlertModule,
    TrainingModule,
    JobSeekModule,
    ArticleModule,
    WeiterbildungModule,
    ProfessionModule,
  ],
});

module.exports = application;
