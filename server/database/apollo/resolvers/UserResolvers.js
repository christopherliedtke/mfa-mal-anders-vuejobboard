const sanitizeHtml = require("sanitize-html");
const config = require("../../../config/config");
const errorMsg = require("../../../config/errorMsg.json");
const jwt = require("jsonwebtoken");
const cryptoRandomString = require("crypto-random-string");
const emailTemplate = require("../../../utils/emailTemplate");
const emailService = require("../../../utils/nodemailer");
const { hash, compare } = require("../../../utils/bcrypt");
const {
    UserInputError,
    ApolloError,
    AuthenticationError,
} = require("apollo-server-express");
const { User } = require("../../models/user");
const { Code } = require("../../models/secretCode");

const UserResolvers = {
    Query: {
        me: async (root, args, context) => {
            const user = await User.findOne({
                _id: context.user._id,
            });

            if (!user) {
                return null;
            }

            delete user.password;

            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isEmployee: user.isEmployee,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            context.session.token = token;
            user.token = token;

            return user;
        },
        meFromToken: (root, args, context) => {
            return context.user;
        },
        adminUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const user = await User.findOne({ _id: args._id });

            return user;
        },
        adminUsers: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const users = await User.find().sort({
                createdAt: "desc",
            });

            return users;
        },
    },

    Mutation: {
        login: async (root, args, context) => {
            if (!args.email || !args.password) {
                throw new UserInputError(errorMsg.auth.fillAll, {
                    invalidArgs: Object.keys(args),
                });
            }

            const user = await User.findOne({ email: args.email });

            if (!user) {
                throw new ApolloError(errorMsg.auth.noMatch);
            }

            const pwCheckSuccess = await compare(args.password, user.password);

            if (!pwCheckSuccess) {
                throw new ApolloError(errorMsg.auth.pwNoMatch);
            }

            delete user.password;

            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isEmployee: user.isEmployee,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            context.session.token = token;
            user.token = token;

            return user;
        },
        register: async (root, args, context) => {
            if (
                !args.firstName ||
                !args.lastName ||
                !args.email ||
                !args.password ||
                !args.password2
            ) {
                throw new UserInputError(errorMsg.auth.fillAll);
            }
            if (args.password != args.password2) {
                throw new UserInputError(errorMsg.auth.pwsNoMatch);
            }
            if (
                !args.password.match(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/
                )
            ) {
                throw new UserInputError(errorMsg.auth.pwRequirements);
            }
            if (!args.email.match(/\S+@\S+\.\S+/)) {
                throw new UserInputError(errorMsg.auth.notValidEmail);
            }
            if (args.acceptance != "accepted") {
                throw new UserInputError(errorMsg.auth.termsOfUse);
            }

            const existingUser = await User.findOne({ email: args.email });

            if (existingUser) {
                throw new UserInputError(errorMsg.auth.emailRegistered);
            }

            const hashedPw = await hash(args.password);

            const newUserObj = new User({
                gender: sanitizeHtml(args.gender),
                title: sanitizeHtml(args.title),
                firstName: sanitizeHtml(args.firstName),
                lastName: sanitizeHtml(args.lastName),
                email: sanitizeHtml(args.email),
                role: "basic",
                isEmployer: args.isEmployer,
                isEmployee: args.isEmployee,
                password: hashedPw,
                accepted: true,
                status: "pending",
            });

            const user = await newUserObj.save();
            delete user.password;

            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isEmployee: user.isEmployee,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            context.session.token = token;
            user.token = token;

            return user;
        },
        activateUser: async (root, args, context) => {
            const user = await User.findOneAndUpdate(
                { _id: args._id },
                { status: "active" },
                { new: true }
            );

            delete user.password;

            const token = jwt.sign(
                {
                    user: {
                        _id: user._id,
                        role: user.role,
                        isEmployer: user.isEmployer,
                        isEmployee: user.isEmployee,
                        isAdmin: user.isAdmin,
                        status: user.status,
                        gender: user.gender,
                        title: user.title,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7,
                }
            );

            context.session.token = token;
            user.token = token;

            return user;
        },
        logout: (root, args, context) => {
            context.session.destroy();
            return context.user;
        },
        resetPasswordGetCode: async (root, args) => {
            if (!args.email) {
                throw new UserInputError(errorMsg.auth.provideRegisteredEmail);
            }

            const user = await User.findOne({ email: args.email });

            if (!user) {
                throw new ApolloError(errorMsg.auth.emailNotExist);
            }

            const secretCode = cryptoRandomString({
                length: 6,
            });

            const newCode = new Code({
                code: secretCode,
                email: args.email,
            });

            await newCode.save();

            const emailData = {
                from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                to: args.email,
                subject: `Ihr Code für den Passwort Reset auf ${config.website.name}`,
                text: `
                        Bitte nutzen Sie den folgenden Code innerhalb der nächsten 60 Minuten, um Ihr Passwort auf ${config.website.name} zu ändern: ${secretCode}
                    `,
                html: emailTemplate.generate(`
                        <p>Bitte nutzen Sie den folgenden Code innerhalb der nächsten 60 Minuten, um Ihr Passwort auf ${config.website.name} zu ändern: <strong>${secretCode}</strong></p>
                        `),
            };
            const email = await emailService.sendMail(emailData);

            if (email.accepted.length === 0) {
                throw new ApolloError(
                    "Die E-Mail konnte nicht versandt werden, bitte versuchen Sie es noch einmal."
                );
            }

            return { _id: user._id };
        },
        resetPasswordVerify: async (root, args) => {
            if (
                !args.email ||
                !args.password ||
                !args.password2 ||
                !args.code
            ) {
                throw new UserInputError(errorMsg.auth.fillAll);
            }
            if (args.password != args.password2) {
                throw new UserInputError(errorMsg.auth.pwsNoMatch);
            }
            if (
                !args.password.match(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/
                )
            ) {
                throw new UserInputError(errorMsg.auth.pwRequirements);
            }

            const code = await Code.findOne({
                email: args.email,
                code: args.code,
            });

            if (!code) {
                throw new UserInputError(errorMsg.auth.codeIncorrect);
            }

            const newHashedPw = await hash(args.password);

            const user = await User.findOneAndUpdate(
                { email: args.email },
                { password: newHashedPw },
                { new: true }
            );
            await Code.deleteOne({ email: args.email, code: args.code });

            return { _id: user._id };
        },
        accountVerificationGetEmail: async (root, args, context) => {
            if (!context.user._id) {
                throw new ApolloError(errorMsg.general);
            }

            const user = await User.findById(context.user._id);

            if (!user) {
                throw new ApolloError(errorMsg.general);
            }

            const emailData = {
                from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                to: user.email,
                subject: `E-Mail bestätigen für ${config.website.name}`,
                text: `
                        Bitte nutzen Sie den folgenden Link, um Ihren Account auf ${config.website.name} zu aktivieren: ${process.env.WEBSITE_URL}/auth/account/verification/${user._id}
                    `,
                html: emailTemplate.generate(`
                        <div 
                            style="color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.2; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px">
                            <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; mso-line-height-alt: 14px">
                                <h2>Aktivieren Sie Ihren Account bei ${config.website.name}</h2>
                                <p>
                                    Bitte nutzen Sie den folgenden Link, um Ihren Account auf ${config.website.name} zu aktivieren: 
                                </p>
                            </div>
                        </div>
                        <div
                            style="
                                text-decoration: none;
                                display: inline-block;
                                color: #f8faf9;
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
                                style="padding-left: 20px; padding-right: 20px; font-size: 16px; display: inline-block; cursor: pointer; border: none; color: #f8faf9; text-decoration: none" href="${process.env.WEBSITE_URL}/auth/account/verification/${user._id}" target="_blank"
                            >
                                <span 
                                    style="font-size: 16px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px"
                                >
                                    Account aktivieren
                                </span>
                            </a>
                        </div>
                    `),
            };

            const emailSent = await emailService.sendMail(emailData);
            console.log("sendMail() for user activation email: ", emailSent);

            return { _id: user._id };
        },
        updateMe: async (root, args, context) => {
            if (!context.user._id) {
                throw new AuthenticationError("Must be logged in!");
            }

            const oldUserData = await User.findOne({ _id: context.user._id });

            const status =
                args.email.toLowerCase() === oldUserData.email.toLowerCase()
                    ? oldUserData.status
                    : "pending";

            const user = User.findOneAndUpdate(
                { _id: context.user._id },
                {
                    gender: sanitizeHtml(args.gender),
                    title: sanitizeHtml(args.title),
                    firstName: sanitizeHtml(args.firstName),
                    lastName: sanitizeHtml(args.lastName),
                    email: sanitizeHtml(args.email),
                    status: status,
                    isEmployer: args.isEmployer,
                    isEmployee: args.isEmployee,
                },
                { new: true }
            );

            return user;
        },
        deleteMe: async (root, args, context) => {
            if (!context.user._id) {
                throw new AuthenticationError("Must be logged in!");
            }

            if (!args.password) {
                throw new UserInputError(errorMsg.auth.fillAll, {
                    invalidArgs: Object.keys(args),
                });
            }

            const user = await User.findOne({ _id: context.user._id });

            if (!user) {
                throw new ApolloError(errorMsg.general);
            }

            const pwCheckSuccess = await compare(args.password, user.password);

            if (!pwCheckSuccess) {
                throw new UserInputError(errorMsg.auth.pwNoMatch);
            }

            const deletedUser = await User.findOneAndDelete({
                _id: context.user._id,
            });

            if (!deletedUser) {
                throw new ApolloError(errorMsg.general);
            }

            return deletedUser;
        },
        adminUpdateUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const user = User.findOneAndUpdate(
                { _id: args._id },
                {
                    gender: sanitizeHtml(args.gender),
                    title: sanitizeHtml(args.title),
                    firstName: sanitizeHtml(args.firstName),
                    lastName: sanitizeHtml(args.lastName),
                    email: sanitizeHtml(args.email),
                    isEmployer: args.isEmployer,
                    isEmployee: args.isEmployee,
                },
                { new: true }
            );

            return user;
        },
        adminDeleteUser: async (root, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const user = User.findOneAndDelete({ _id: args._id });

            return user;
        },
    },

    Job: {
        userId: async (job, args, context) => {
            if (!context.user.isAdmin) {
                return job.userId;
            }

            const user = await User.findOne({
                _id: job.userId,
            });
            delete user.password;

            return user;
        },
    },

    Company: {
        userId: async (company, args, context) => {
            if (!context.user.isAdmin) {
                return company.userId;
            }
            const user = await User.findOne({
                _id: company.userId,
            });
            delete user.password;

            return user;
        },
    },

    Coupon: {
        userId: async (coupon, args, context) => {
            if (!context.user.isAdmin) {
                return coupon.userId;
            }
            const user = await User.findOne({
                _id: coupon.userId,
            });
            delete user.password;

            return user;
        },
    },

    Payment: {
        user: async (payment, args, context) => {
            if (!context.user.isAdmin) {
                throw new AuthenticationError("Missing permission!");
            }

            const user = await User.findOne({ _id: payment.user });

            delete user.password;

            return user;
        },
    },
};

module.exports = UserResolvers;
