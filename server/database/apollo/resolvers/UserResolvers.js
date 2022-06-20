const fs = require("fs");
const path = require("path");
const sanitizeHtml = require("sanitize-html");
const mongoose = require("mongoose");
const config = require("../../../config/config");
const errorMsg = require("../../../config/errorMsg.json");
const jwt = require("jsonwebtoken");
const Handlebars = require("handlebars");
const cryptoRandomString = require("crypto-random-string");
const emailService = require("../../../lib/nodemailer");
const mg = require("../../../lib/mailgunMailer");
const { hash, compare } = require("../../../lib/bcrypt");
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
            isEducational: user.isEducational,
            isAdmin: user.isAdmin,
            status: user.status,
            gender: user.gender,
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          exp: new Date().getTime() + 1000 * 60 * 60 * 24 * 7,
          iat: new Date().getTime(),
        },
        process.env.JWT_SECRET
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

      const { isEmployer, isEmployee, isEducational, isAdmin } = args;

      let filter = {
        $or: [],
      };

      isEmployer ? filter.$or.push({ isEmployer }) : null;
      isEmployee ? filter.$or.push({ isEmployee }) : null;
      isEducational ? filter.$or.push({ isEducational }) : null;
      isAdmin ? filter.$or.push({ isAdmin }) : null;

      filter.$or.length == 0 ? (filter = {}) : null;

      const users = await User.find(filter).sort({
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
        throw new UserInputError(errorMsg.auth.noMatch);
      }

      const pwCheckSuccess = await compare(args.password, user.password);

      if (!pwCheckSuccess) {
        throw new UserInputError(errorMsg.auth.pwNoMatch);
      }

      delete user.password;

      const token = jwt.sign(
        {
          user: {
            _id: user._id,
            role: user.role,
            isEmployer: user.isEmployer,
            isEmployee: user.isEmployee,
            isEducational: user.isEducational,
            isAdmin: user.isAdmin,
            status: user.status,
            gender: user.gender,
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          exp: new Date().getTime() + 1000 * 60 * 60 * 24 * 7,
          iat: new Date().getTime(),
        },
        process.env.JWT_SECRET
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
        isEducational: args.isEducational,
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
            isEducational: user.isEducational,
            isAdmin: user.isAdmin,
            status: user.status,
            gender: user.gender,
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          exp: new Date().getTime() + 1000 * 60 * 60 * 24 * 7,
          iat: new Date().getTime(),
        },
        process.env.JWT_SECRET
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
            isEducational: user.isEducational,
            isAdmin: user.isAdmin,
            status: user.status,
            gender: user.gender,
            title: user.title,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          exp: new Date().getTime() + 1000 * 60 * 60 * 24 * 7,
          iat: new Date().getTime(),
        },
        process.env.JWT_SECRET
      );

      context.session.token = token;
      user.token = token;

      return user;
    },
    logout: (root, args, context) => {
      context.session.destroy();
      return { _id: "" };
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

      const savedCode = await newCode.save();

      console.info("Creating password reset code: ", {
        ...args,
        secretCode,
        savedCode,
      });

      const passwordResetTemplate = fs.readFileSync(
        path.join(
          __dirname,
          "../../../templates/email/password_reset_email.hbs"
        ),
        "utf8"
      );

      Handlebars.registerHelper("currentYear", () => {
        return new Date().getFullYear();
      });
      const template = Handlebars.compile(passwordResetTemplate);

      const html = template({
        secretCode,
        websiteUrl: process.env.WEBSITE_URL,
        websiteName: config.website.name,
        lightColor: "#fffcfd",
        primaryColor: "#6d0230",
        fbPath: config.social.fb.path,
        igPath: config.social.ig.path,
      });

      const emailData = {
        from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
        to: args.email,
        subject: `Ihr Code für den Passwort Reset auf ${config.website.name}`,
        text: `
          Bitte nutzen Sie den folgenden Code innerhalb der nächsten 60 Minuten, um Ihr Passwort auf ${config.website.name} zu ändern: ${secretCode}
        `,
        html: html,
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
      if (!args.email || !args.password || !args.password2 || !args.code) {
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

      console.info("verifyPasswordReset: ", {
        ...args,
        codeFromDb: code,
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

      try {
        const accountVerificationTemplate = fs.readFileSync(
          path.join(
            __dirname,
            "../../../templates/email/account_verification_email.hbs"
          ),
          "utf8"
        );

        Handlebars.registerHelper("currentYear", () => {
          return new Date().getFullYear();
        });
        const template = Handlebars.compile(accountVerificationTemplate);

        const html = template({
          userId: user._id,
          websiteUrl: process.env.WEBSITE_URL,
          websiteName: config.website.name,
          lightColor: "#fffcfd",
          primaryColor: "#6d0230",
          fbPath: config.social.fb.path,
          igPath: config.social.ig.path,
        });

        const emailData = {
          from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
          to: user.email,
          subject: `E-Mail bestätigen für ${config.website.name}`,
          text: `
            Bitte nutzen Sie den folgenden Link, um Ihren Account auf ${config.website.name} zu aktivieren: ${process.env.WEBSITE_URL}/auth/account/verification/${user._id}
          `,
          html: html,
        };

        // const emailSent = await emailService.sendMail(emailData);
        const emailSent = await mg.messages().send(emailData);
        console.info("sendMail() for user activation email: ", user, emailSent);
      } catch (err) {
        console.error("Error on sending account activation email: ", user, err);
      }

      return { _id: user._id };
    },
    updateMe: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const oldUserData = await User.findOne({ _id: context.user._id });

      if (args.email.toLowerCase() != oldUserData.email.toLowerCase()) {
        const existingUser = await User.findOne({
          email: args.email.toLowerCase(),
        });

        if (existingUser) {
          throw new UserInputError(
            "Die E-Mail Adresse ist bereits für einen anderen Account registriert."
          );
        }
      }

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
          isEducational: args.isEducational,
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

      console.info("deletedUser: ", deletedUser);

      return deletedUser;
    },
    adminUserActivationConfirmation: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const user = await User.findOne({
        _id: args._id,
      });

      const emailData = {
        from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
        to: user.email,
        subject: `Aktivierung Ihres Accounts für ${config.website.name}`,
        html: `
                    <p>
                        Sehr ${
                          !user.gender || user.gender === "null"
                            ? "geehrte/r Frau/Herr"
                            : user.gender === "Frau"
                            ? "geehrte Frau"
                            : "geehrter Herr"
                        }${
          user.title && user.title != "null" ? " " + user.title : ""
        } ${user.lastName},
                    </p>
                    <p>
                        Ihr Account für '${
                          config.website.name
                        }' wurde erfolgreich aktiviert. Ab sofort können Sie sich unter ${
          process.env.WEBSITE_URL
        }/auth/login mit Ihrer registrierten E-Mail Adresse anmelden.
                    </p>
                    <p>
                    Sollten Sie Fragen zur Nutzung unseres Portals haben, melden Sie sich bitte jederzeit gern z.B. über unser <a href="${
                      process.env.WEBSITE_URL
                    }/kontakt">Kontaktformular</a>.
                    </p>
                    <p>Viele Grüße</p>
                    <p>
                        Ihr <em>MFA mal anders</em> Team
                    </p>
                    <p>__</p>
                    <p>
                        <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
                        <strong>MFA mal anders</strong> <br>
                        Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte <br>
                        <br>
                        E-Mail: <a href="mailto:${
                          process.env.CONTACT_EMAIL_ADRESS
                        }">${process.env.CONTACT_EMAIL_ADRESS}</a> <br>
                        Webseite: <a href="${process.env.WEBSITE_URL}">${
          process.env.WEBSITE_URL
        }</a>
                    </p>
                `,
        attachments: [
          {
            filename: "MfaMalAnders_logo_circle_bgdark_white.png",
            path:
              __dirname +
              "/../../../../client/public/img/MfaMalAnders_logo_circle_bgdark_white.png",
            cid: "mfa-mal-anders-logo", //same cid value as in the html img src
          },
        ],
      };

      const emailSent = await emailService.sendMail(emailData);
      console.info("sendMail() for user activation confirmation: ", emailSent);

      return { _id: user._id };
    },
    adminUpdateUser: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const updateObj = { ...args };

      for (const key in updateObj) {
        if (typeof updateObj[key] === "string") {
          updateObj[key] = sanitizeHtml(updateObj[key]);
        }
      }

      const user = User.findOneAndUpdate({ _id: args._id }, updateObj, {
        new: true,
      });

      return user;
    },
    adminDeleteUser: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const user = await User.findOneAndDelete({ _id: args._id });

      return user;
    },
  },

  Job: {
    userId: async (job, args, context) => {
      if (!context.user.isAdmin) {
        return null;
        // return job.userId;
      }

      if (
        job.userId instanceof Object &&
        job.userId instanceof mongoose.Types.ObjectId === false
      ) {
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
    userId: async company => {
      return { _id: company.userId };
    },
  },

  Payment: {
    user: async (payment, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      if (!payment.user) {
        return null;
      }

      return { _id: payment.user };

      // const user = await User.findOne({ _id: payment.user });

      // delete user.password;

      // return user;
    },
  },

  Training: {
    user: async (training, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      return { _id: training.user };

      // const user = await User.findOne({ _id: training.user });

      // delete user.password;

      // return user;
    },
  },

  JobSeek: {
    user: async (jobSeek, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      return { _id: jobSeek.user };

      // const user = await User.findOne({ _id: jobSeek.user });

      // delete user.password;

      // return user;
    },
  },
};

module.exports = UserResolvers;
