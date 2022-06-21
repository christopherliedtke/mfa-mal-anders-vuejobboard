const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const mongoose = require("mongoose");
const s3 = require("../../../middleware/s3");
const { Company } = require("../../models/company");
const getLocation = require("../../../lib/geocoder");

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
        name: "asc",
      });
      return companies;
    },
    myCompanies: async (root, args, context) => {
      const companies = await Company.find({
        userId: context.user._id,
      }).sort({
        name: "asc",
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

      const locations = await getLocation(
        `${args.street} ${args.location} ${args.zipCode}`,
        args.country
      );

      if (locations) {
        addObj.state = locations[0].address.state;
        addObj.geoCodeLng = locations[0].position.lng;
        addObj.geoCodeLat = locations[0].position.lat;
      } else {
        console.error("Error in getLocation(): ", addObj);
        throw new UserInputError(
          `Es konnte kein passender Ort für '${args.street}, ${args.zipCode} ${args.location}' gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte stellen Sie sicher, dass die Unternehmensadresse korrekt und komplett angegeben ist.`,
          { argumentName: "location" }
        );
      }

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

      const locations = await getLocation(
        `${args.street} ${args.location} ${args.zipCode}`,
        args.country
      );

      if (locations) {
        updateObj.state = locations[0].address.state;
        updateObj.geoCodeLng = locations[0].position.lng;
        updateObj.geoCodeLat = locations[0].position.lat;
      } else {
        console.error("Error in getLocation(): ", updateObj);
        throw new UserInputError(
          `Es konnte kein passender Ort für '${args.street}, ${args.zipCode} ${args.location}' gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte stellen Sie sicher, dass die Unternehmensadresse korrekt und komplett angegeben ist.`,
          { argumentName: "location" }
        );
      }

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

      const locations = await getLocation(
        `${args.street} ${args.location} ${args.zipCode}`,
        args.country
      );

      if (locations) {
        updateObj.state = locations[0].address.state;
        updateObj.geoCodeLng = locations[0].position.lng;
        updateObj.geoCodeLat = locations[0].position.lat;
      } else {
        console.error("Error in getLocation(): ", updateObj);
        throw new UserInputError(
          `Es konnte kein passender Ort für '${args.street}, ${args.zipCode} ${args.location}' gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte stellen Sie sicher, dass die Unternehmensadresse korrekt und komplett angegeben ist.`,
          { argumentName: "location" }
        );
      }

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
      if (
        job.company instanceof Object &&
        job.company instanceof mongoose.Types.ObjectId === false
      ) {
        return job.company;
      }

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
