const emailService = require("./nodemailer");
const config = require("../config/config");
const { Payment } = require("../database/models/payment");

const jobToAsanaTask = async (
  job,
  to = process.env.ASANA_SHARETOSOCIALMEDIA_EMAIL
) => {
  try {
    if (process.env.NODE_ENV == "production" && job && to) {
      const payments = await Payment.find({ job: job._id })
        .sort({
          createdAt: -1,
        })
        .limit(1);

      const payment = payments[0] || null;

      if (payment) {
        const dataMailToAsana = {
          from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
          to: to,
          subject: `[${payment.number}] | ${payment.total / 100}€ - ${
            job.title
          }`,
          html: `${
            process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + job._id
          }`,
        };

        const sentEmail = await emailService.sendMail(dataMailToAsana);
        console.info("sentEmail: ", sentEmail);
      }
    }
  } catch (err) {
    console.log("Error in jobToAsanaTask(): ", err);
  } finally {
    return;
  }
};

module.exports = jobToAsanaTask;
