const { createApplication } = require("graphql-modules");
const JobModule = require("./modules/JobModule");
const UserModule = require("./modules/UserModule");
const CompanyModule = require("./modules/CompanyModule");

const application = createApplication({
    modules: [JobModule, UserModule, CompanyModule],
});

module.exports = application;
