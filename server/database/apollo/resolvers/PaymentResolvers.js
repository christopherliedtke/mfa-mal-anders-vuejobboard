const { AuthenticationError, ApolloError } = require("apollo-server-express");
const config = require("../../../config/config.js");
const { Payment } = require("../../models/payment");
const { Job } = require("../../models/job");
const { googleIndexing } = require("../../../middleware/googleJobIndexing");

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
            new Date().setHours(24) +
              1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
          );
        }
        if (addObj.status === "cancelled") {
          addObj.paymentExpiresAt = undefined;
          addObj.paidAt = undefined;
        }
        if (addObj.status === "pending") {
          addObj.paymentExpiresAt = new Date(
            new Date().setHours(24) +
              1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
          );
          addObj.paidAt = undefined;
        }
      }

      const newPaymentObj = new Payment(addObj);
      const payment = await newPaymentObj.save();

      if (payment) {
        await Job.findOneAndUpdate(
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
      }

      return payment;
    },
    updatePayment: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      let updateObj = { ...args };
      delete updateObj._id;

      if (updateObj.status && !updateObj.paymentExpiresAt) {
        if (updateObj.status === "paid") {
          updateObj.paidAt = new Date();
          updateObj.paymentExpiresAt = new Date(
            new Date().setHours(24) +
              1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
          );
        }
        if (updateObj.status === "cancelled") {
          updateObj.paymentExpiresAt = undefined;
          updateObj.paidAt = undefined;
        }
        if (updateObj.status === "pending") {
          updateObj.paymentExpiresAt = new Date(
            new Date().setHours(24) +
              1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
          );
          updateObj.paidAt = undefined;
        }
      }

      const updatedPayment = await Payment.findOneAndUpdate(
        { _id: args._id },
        updateObj,
        { new: true }
      );

      if (updatedPayment) {
        const job = await Job.findOneAndUpdate(
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

        indexing(job);
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
    payment: async (job) => {
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
      process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + job._id,
      "URL_UPDATED"
    );
  }
}

module.exports = PaymentResolvers;
