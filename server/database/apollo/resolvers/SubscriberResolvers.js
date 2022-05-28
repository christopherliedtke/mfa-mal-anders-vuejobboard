const fs = require("fs");
const path = require("path");
const {
  AuthenticationError,
  UserInputError,
  ApolloError,
} = require("apollo-server-express");
const errorMsg = require("../../../config/errorMsg.json");
const sanitizeHtml = require("sanitize-html");
const config = require("../../../config/config");
const Handlebars = require("handlebars");
// const emailService = require("../../../utils/nodemailer");
const mg = require("../../../lib/mailgunMailer");
const { Subscriber } = require("../../models/subscriber");

const SubscriberResolvers = {
  Query: {
    subscribers: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const subscribers = await Subscriber.find().sort({
        createdAt: "desc",
      });
      return subscribers;
    },
  },

  Mutation: {
    addSubscriber: async (root, args) => {
      if (!args.email || !args.state) {
        throw new ApolloError(errorMsg.subscriber.fillAll);
      }
      if (!args.accepted) {
        throw new ApolloError(errorMsg.subscriber.termsOfUse);
      }
      if (!args.email.match(/\S+@\S+\.\S+/)) {
        throw new UserInputError(errorMsg.subscriber.notValidEmail);
      }

      const existingSubscriber = await Subscriber.findOne({
        email: args.email,
        state: args.state,
      });

      if (existingSubscriber) {
        throw new ApolloError(errorMsg.subscriber.subscriberExists);
      }

      const newSubscriberObj = new Subscriber({
        email: sanitizeHtml(args.email),
        state: sanitizeHtml(args.state),
        accepted: sanitizeHtml(args.accepted),
      });

      const newSubscriber = await newSubscriberObj.save();

      if (!newSubscriber) {
        throw new ApolloError(errorMsg.general);
      }

      try {
        const subscriberActivationTemplate = fs.readFileSync(
          path.join(
            __dirname,
            "../../../templates/email/subscriber_activation_email.hbs"
          ),
          "utf8"
        );

        Handlebars.registerHelper("currentYear", () => {
          return new Date().getFullYear();
        });
        const template = Handlebars.compile(subscriberActivationTemplate);

        const html = template({
          subscriberId: newSubscriber._id,
          state: newSubscriber.state,
          websiteUrl: process.env.WEBSITE_URL,
          websiteName: config.website.name,
          lightColor: "#fffcfd",
          primaryColor: "#6d0230",
          fbPath: config.social.fb.path,
          igPath: config.social.ig.path,
        });

        const emailData = {
          from: `${config.website.emailFrom} <newsletter@${process.env.MG_DOMAIN}>`,
          to: args.email,
          subject: `Anmeldung für Job Newsletter auf ${config.website.name}`,
          text: `
            Bitte bestätige deine Anmeldung für den Job-Newsletter für ${args.state} auf ${config.website.name}: ${process.env.WEBSITE_URL}/newsletter/subscription-activation/${newSubscriber._id}
          `,
          html: html,
        };

        const emailSent = await mg.messages().send(emailData);
        //   const emailSent = await emailService.sendMail(emailData);

        console.info(
          "sendMail() for newsletter activation email: ",
          newSubscriber,
          emailSent
        );
      } catch (err) {
        console.error("Error on sending subscriber activation email: ", err);
      }

      return { _id: newSubscriber._id };
    },
    activateSubscriber: async (root, args) => {
      const subscriber = await Subscriber.findOneAndUpdate(
        { _id: args._id },
        { status: "active" },
        { new: true }
      );

      if (!subscriber) {
        throw new ApolloError(errorMsg.subscriber.noMatch);
      }

      console.info("Subscriber activated: ", subscriber);

      return { _id: subscriber._id };
    },
    deleteSubscriber: async (root, args) => {
      const deletedSubscriber = await Subscriber.deleteMany({
        email: args.email,
      });

      if (deletedSubscriber.n === 0) {
        throw new ApolloError(errorMsg.subscriber.noMatch);
      }

      return { email: args.email };
    },
    adminDeleteSubscriber: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const deletedSubscriber = await Subscriber.findOneAndDelete({
        _id: args._id,
      });

      if (!deletedSubscriber) {
        throw new ApolloError(errorMsg.subscriber.noMatch);
      }

      return { _id: deletedSubscriber._id };
    },
  },
};

module.exports = SubscriberResolvers;
