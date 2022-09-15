const emailService = require("./nodemailer");
const config = require("../config/config");
const { Payment } = require("../database/models/payment");
const jobAdPackages = require("../config/jobAdPackages");

const jobToAsanaTask = async job => {
  try {
    if (job) {
      const payments = await Payment.find({ job: job._id })
        .sort({
          createdAt: -1,
        })
        .limit(1);

      const payment = payments[0] || null;

      if (payment) {
        const dataMailToAsana = {
          from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
          to: process.env.ASANA_SHARETOSOCIALMEDIA_EMAIL,
          subject: `[${payment.number}] | ${payment.total / 100}€ - ${
            job.title
          }`,
          html: `${
            process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + job._id
          }`,
        };

        const sentEmailToAdmin = await emailService.sendMail(dataMailToAsana);
        console.info("sentEmailToAdmin: ", sentEmailToAdmin);

        if (
          jobAdPackages.find(
            pkg => pkg.shareByExternal && pkg.stripePrice == job.stripePriceId
          )
        ) {
          dataMailToAsana.to = process.env.ASANA_SHARETOSOCIALMEDIA_EXT_EMAIL;

          const sentEmailToExternal = await emailService.sendMail(
            dataMailToAsana
          );
          console.info("sentEmailToExternal: ", sentEmailToExternal);
        }
      }
    }
  } catch (err) {
    console.log("Error in jobToAsanaTask(): ", err);
  } finally {
    return;
  }
};

module.exports = jobToAsanaTask;
