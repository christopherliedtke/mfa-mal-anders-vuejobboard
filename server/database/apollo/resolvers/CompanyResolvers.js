const { AuthenticationError } = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
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
      const companies = await Company.find().sort({
        createdAt: "desc",
      });
      return companies;
    },
    myCompanies: async (root, args, context) => {
      const companies = await Company.find({
        userId: context.user._id,
      }).sort({
        createdAt: "desc",
      });
      return companies;
    },
  },

  Mutation: {
    addCompany: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      let addObj = { ...args, userId: context.user._id };

      addObj = cleanUpCompany(addObj);

      const newCompanyObj = new Company(addObj);
      const company = await newCompanyObj.save();

      return company;
    },
    updateCompany: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      let updateObj = { ...args };
      delete updateObj._id;

      updateObj = cleanUpCompany(updateObj);

      const company = await Company.findOneAndUpdate(
        { _id: args._id, userId: context.user._id },
        updateObj,
        { new: true }
      );

      return company;
    },
    deleteCompany: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const company = await Company.findOneAndDelete({
        _id: args._id,
        userId: context.user._id,
      });

      if (company.logoUrl) {
        await s3.delete(company.logoUrl);
      }

      return company;
    },
    adminUpdateCompany: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      let updateObj = { ...args };
      delete updateObj._id;

      updateObj = cleanUpCompany(updateObj);

      const company = await Company.findOneAndUpdate(
        { _id: args._id },
        updateObj,
        { new: true }
      );

      return company;
    },
    adminDeleteCompany: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const company = await Company.findOneAndDelete({
        _id: args._id,
      });

      if (company.logoUrl) {
        await s3.delete(company.logoUrl);
      }

      return company;
    },
  },

  Job: {
    company: async job => {
      const company = await Company.findOne({ _id: job.company });
      return company;
    },
  },

  User: {
    companies: async user => {
      const companies = await Company.find({ userId: user._id });
      return companies;
    },
  },
};

function cleanUpCompany(company) {
  for (const key in company) {
    if (typeof company[key] === "string") {
      company[key] = sanitizeHtml(company[key]);
    }
  }

  return company;
}

module.exports = CompanyResolvers;
