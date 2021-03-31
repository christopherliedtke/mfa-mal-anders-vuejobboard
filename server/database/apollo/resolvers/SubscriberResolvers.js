const {
    AuthenticationError,
    UserInputError,
    ApolloError,
} = require("apollo-server-express");
const errorMsg = require("../../../config/errorMsg.json");
const sanitizeHtml = require("sanitize-html");
const config = require("../../../config/config");
const emailTemplate = require("../../../utils/emailTemplate");
const emailService = require("../../../utils/nodemailer");
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

            const emailData = {
                from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
                to: args.email,
                subject: `Anmeldung für Job Newsletter auf ${config.website.name}`,
                text: `
                            Bitte bestätige deine Anmeldung für den Job-Newsletter für ${args.state} auf ${config.website.name}: ${process.env.WEBSITE_URL}/page/subscription-activation/${newSubscriber._id}
                        `,
                html: emailTemplate.generate(
                    `
                                <div 
                                    style="color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.2; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px">
                                    <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; mso-line-height-alt: 14px">
                                        <h2>Deine Anmeldung zum Job-Newsletter auf ${config.website.name}</h2>
                                        <p>
                                            Bitte bestätige deine Anmeldung für den Job-Newsletter für ${args.state} auf ${config.website.name}:
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #fffcfd;
                                        background-color: #fda225;
                                        border-radius: 50px;
                                        -webkit-border-radius: 50px;
                                        -moz-border-radius: 50px;
                                        width: auto;
                                        width: auto;
                                        border-top: 1px solid #fda225;
                                        border-right: 1px solid #fda225;
                                        border-bottom: 1px solid #fda225;
                                        border-left: 1px solid #fda225;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif;
                                        text-align: center;
                                        mso-border-alt: none;
                                        word-break: keep-all;
                                    "
                                >
                                    <a 
                                        style="padding-left: 20px; padding-right: 20px; font-size: 16px; display: inline-block; cursor: pointer; border: none; color: #fffcfd; text-decoration: none" href="${process.env.WEBSITE_URL}/page/subscription-activation/${newSubscriber._id}" target="_blank"
                                    >
                                        <span 
                                            style="font-size: 16px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px"
                                        >
                                            Anmeldung bestätigen
                                        </span>
                                    </a>
                                </div>
                            `
                ),
            };

            const emailSent = await emailService.sendMail(emailData);
            console.log(
                "sendMail() for newsletter activation email: ",
                emailSent
            );

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
