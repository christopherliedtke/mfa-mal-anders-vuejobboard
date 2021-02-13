const { AuthenticationError, ApolloError } = require("apollo-server-express");
const config = require("../../../config/config.json");
const { Payment } = require("../../models/payment");
const { Job } = require("../../models/job");

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

            const payments = await Payment.find().sort({ paidAt: "desc" });

            return payments;
        },
    },

    Mutation: {
        addPayment: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }
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
                            1000 *
                                60 *
                                60 *
                                24 *
                                config.payment.paymentExpirationDays
                    );
                }
                if (updateObj.status === "cancelled") {
                    updateObj.paymentExpiresAt = undefined;
                    updateObj.paidAt = undefined;
                }
                if (updateObj.status === "pending") {
                    updateObj.paymentExpiresAt = new Date(
                        new Date().setHours(24) +
                            1000 *
                                60 *
                                60 *
                                24 *
                                config.payment.paymentExpirationDays
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
                await Job.findOneAndUpdate(
                    { _id: updatedPayment.job },
                    {
                        paid: updatedPayment.status === "paid" ? true : false,
                        paidExpiresAt: updatedPayment.paymentExpiresAt,
                        status:
                            updatedPayment.status === "paid"
                                ? "published"
                                : updatedPayment.status === "pending"
                                ? "invoice-pending"
                                : "draft",
                        publishedAt:
                            updatedPayment.status === "paid"
                                ? new Date()
                                : undefined,
                    },
                    { new: true }
                );
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

module.exports = PaymentResolvers;
