const { AuthenticationError, ApolloError } = require("apollo-server-express");
const config = require("../../../config/config.js");
const { Payment } = require("../../models/payment");
const { Job } = require("../../models/job");
const { googleIndexing } = require("../../../middleware/googleJobIndexing");
const internalJobsCache = require("../../../cache/internalJobsCache");

const PaymentResolvers = {
  Query: {
    payment: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const payment = await Payment.findOne({ _id: args._id });

      return payment;
    },
    payments: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const payments = await Payment.find().sort({ updatedAt: "desc" });

      return payments;
    },
    myPayments: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const payments = await Payment.find({
        user: context.user._id,
      }).sort({ createdAt: "desc" });

      return payments;
    },
  },

  Mutation: {
    addPayment: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      let addObj = { ...args };

      if (addObj.status && !addObj.paymentExpiresAt) {
        if (addObj.status === "paid") {
          addObj.paidAt = new Date();
          addObj.paymentExpiresAt = new Date(
            new Date().setHours(23) +
              1000 *
                60 *
                60 *
                24 *
                (config.payment.pricingPackages.find(
                  pkg =>
                    pkg.name.toLowerCase() ===
                    addObj.pricingPackage.toLowerCase()
                ).duration || 60)
          );
        }
        if (addObj.status === "cancelled" || addObj.status === "pending") {
          addObj.paymentExpiresAt = undefined;
          addObj.paidAt = undefined;
        }
      }

      const newPaymentObj = new Payment(addObj);
      const payment = await newPaymentObj.save();

      if (payment) {
        const updatedJob = await Job.findOneAndUpdate(
          { _id: payment.job },
          {
            paid:
              payment.status === "paid" &&
              payment.paymentExpiresAt >= new Date()
                ? true
                : false,
            paidExpiresAt:
              payment.paymentExpiresAt >= new Date()
                ? payment.paymentExpiresAt
                : undefined,
            status:
              payment.status === "paid"
                ? "published"
                : payment.status === "pending"
                ? "invoice-pending"
                : "draft",
            publishedAt:
              payment.status === "paid" &&
              payment.paymentExpiresAt >= new Date()
                ? new Date()
                : undefined,
          },
          { new: true }
        );

        if (updatedJob.status === "published") {
          internalJobsCache.flush();
          indexing(updatedJob);
        }
      }

      return payment;
    },
    updatePayment: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      console.log("args: ", args);

      let updateObj = { ...args };
      delete updateObj._id;

      const oldPayment = await Payment.findOne({ _id: args._id });
      updateObj.pricingPackage =
        updateObj.pricingPackage || oldPayment.pricingPackage || "Basis";

      console.log("oldPayment: ", oldPayment);

      if (updateObj.status && !updateObj.paymentExpiresAt) {
        if (updateObj.status === "paid") {
          updateObj.paidAt = new Date();
          updateObj.paymentExpiresAt = new Date(
            new Date().setHours(23) +
              1000 *
                60 *
                60 *
                24 *
                (config.payment.pricingPackages.find(
                  pkg =>
                    pkg.name.toLowerCase() ===
                    updateObj.pricingPackage.toLowerCase()
                ).duration || 60)
          );
        }
        if (
          updateObj.status === "cancelled" ||
          updateObj.status === "pending"
        ) {
          updateObj.paymentExpiresAt = undefined;
          updateObj.paidAt = undefined;
        }
      }

      const updatedPayment = await Payment.findOneAndUpdate(
        { _id: args._id },
        updateObj,
        { new: true }
      );

      if (updatedPayment) {
        const updatedJob = await Job.findOneAndUpdate(
          { _id: updatedPayment.job },
          {
            paid:
              updatedPayment.status === "paid" &&
              updatedPayment.paymentExpiresAt >= new Date()
                ? true
                : false,
            paidExpiresAt:
              updatedPayment.paymentExpiresAt >= new Date()
                ? updatedPayment.paymentExpiresAt
                : undefined,
            status:
              updatedPayment.status === "paid"
                ? "published"
                : updatedPayment.status === "pending"
                ? "invoice-pending"
                : "draft",
            publishedAt:
              updatedPayment.status === "paid" &&
              updatedPayment.paymentExpiresAt >= new Date()
                ? new Date()
                : undefined,
          },
          { new: true }
        );

        if (updatedJob.status === "published") {
          internalJobsCache.flush();
          indexing(updatedJob);
        }
      }

      return updatedPayment;
    },
    deletePayment: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const payment = await Payment.findOneAndDelete({ _id: args._id });

      if (!payment) {
        throw new ApolloError("Payment could not be found/deleted!");
      }

      return payment;
    },
  },

  Job: {
    payment: async job => {
      const payment = await Payment.find({
        job: job._id,
        paymentExpiresAt: { $gte: new Date() },
      })
        .sort({ paidAt: "desc" })
        .limit(1);

      return payment[0];
    },
  },
};

function indexing(job) {
  if (job.status === "published") {
    googleIndexing(
      process.env.WEBSITE_URL +
        config.googleIndexing.pathPrefix +
        job._id +
        "/" +
        job.slug,
      "URL_UPDATED"
    );
  }
}

module.exports = PaymentResolvers;
