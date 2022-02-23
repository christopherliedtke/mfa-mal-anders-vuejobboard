const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const config = require("../config/config.js");
const mg = require("../utils/mailgunMailer");
const { Subscriber } = require("../database/models/subscriber");
const { Job } = require("../database/models/job");
const { JobAlert } = require("../database/models/jobAlert");

const newsletterTemplate = fs.readFileSync(
  path.join(__dirname, "../templates/newsletter_email.hbs"),
  "utf8"
);

Handlebars.registerHelper("currentYear", () => {
  return new Date().getFullYear();
});
const template = Handlebars.compile(newsletterTemplate);

module.exports.sendNewsletter = async (daysBack = 7) => {
  console.log("sendNewsletter starting now...");

  try {
    // collect newsletter recipients
    const subscribers = await Subscriber.find(
      { status: "active" },
      "email state"
    );

    const jobAlerts = await JobAlert.find({}).populate("user");

    const receivers = subscribers
      .map(subscriber => {
        return {
          role: "subscriber",
          email: subscriber.email,
          state: subscriber.state,
        };
      })
      .concat(
        jobAlerts
          .filter(alert => alert.user)
          .map(jobAlert => {
            return {
              role: "jobAlert",
              email: jobAlert.user.email,
              state: jobAlert.state,
            };
          })
      );

    // collect jobs to send w newsletter
    const jobs = await Job.find({
      paid: true,
      status: "published",
      paidExpiresAt: {
        $gte: new Date(),
      },
      publishedAt: {
        $gte: new Date(
          new Date().setHours(0, 0, 0, 0) -
            1000 * 60 * 60 * 24 * (daysBack + 1 / 24)
        ),
        $lte: new Date(),
      },
    }).populate("company");

    // set states to send newsletter for
    const states = [...new Set(jobs.map(job => job.company.state))];

    // send newsletter for each state
    states.forEach(state => {
      const stateJobs = jobs
        .filter(
          job =>
            job.company.state.replace("ü", "ue").toLowerCase() ==
            state.replace("ü", "ue").toLowerCase()
        )
        .map(job => {
          return {
            _id: job._id,
            title: job.title,
            location: job.company.location,
          };
        });

      if (stateJobs.length > 0) {
        const stateReceivers = receivers
          .filter(
            receiver =>
              receiver.state.replace("ü", "ue").toLowerCase() ===
              state.replace("ü", "ue").toLowerCase()
          )
          .map(receiver => receiver.email);

        const html = template({
          jobs: stateJobs,
          state: state,
          websiteUrl: process.env.WEBSITE_URL,
          websiteName: config.website.name,
          headerImg: `${process.env.WEBSITE_URL}/img/MfaMalAnders_Stellengesuche.jpg`,
          // headerImg: `${
          //   process.env.WEBSITE_URL
          // }/img/SocialCard_JobsDerWoche_${state
          //   .replace(/\s+/g, "")
          //   .replace("ü", "ue")}.jpg`,
          lightColor: "#fffcfd",
          lightShadeColor: "#f7f6f9",
          primaryColor: "#6d0230",
          secondaryColor: "#fda225",
          fbPath: config.social.fb.path,
          igPath: config.social.ig.path,
        });

        const data = {
          from: `${config.website.emailFrom} <newsletter@${process.env.MG_DOMAIN}>`,
          to: process.env.CONTACT_EMAIL_ADRESS,
          bcc: stateReceivers.join(", "),
          subject: `Dein Job-Newsletter für ${state} – ${config.website.name}`,
          html: html,
        };

        mg.messages().send(data, (error, body) => {
          console.log(`mailgun.messages() -> Body for ${state}: `, body);

          if (error) {
            console.log(`Error on mailgun.messages() for ${state}: `, error);
          }
        });
      }
    });

    return { success: true };
  } catch (error) {
    console.log("Error on sendNewsletter: ", error);
    return { success: false };
  }
};
