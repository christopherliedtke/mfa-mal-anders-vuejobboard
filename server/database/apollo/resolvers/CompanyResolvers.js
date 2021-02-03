const { Company } = require("../../models/company");

const CompanyResolvers = {
    Query: {
        company: async (root, args) => {
            const company = await Company.findOne({
                _id: args._id,
            });
            return company;
        },
        companies: async () => {
            const companies = await Company.find();
            return companies;
        },
    },

    Job: {
        company: async (job) => {
            const company = Company.findOne({ _id: job.company });
            return company;
        },
    },

    User: {
        companies: async (user) => {
            const companies = await Company.find({ userId: user._id });
            return companies;
        },
    },
};

module.exports = CompanyResolvers;
