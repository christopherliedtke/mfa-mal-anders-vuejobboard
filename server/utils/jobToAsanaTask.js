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

      const dataMailToAsana = {
        from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
        to: to,
        subject: `[${payment ? payment.paymentType : "paymentNotFound"}${
          payment
            ? " RE-" +
              "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
              payment.invoiceNo.toString()
            : ""
        }] - ${payment ? payment.pricingPackage : ""} | ${
          payment ? payment.amount / 100 : ""
        }€ - ${job.title}`,
        html: `${
          process.env.WEBSITE_URL + config.googleIndexing.pathPrefix + job._id
        }`,
      };

      const sentEmail = await emailService.sendMail(dataMailToAsana);
      console.info("sentEmail: ", sentEmail);
    }
  } catch (err) {
    console.log("Error in jobToAsanaTask(): ", err);
  } finally {
    return;
  }
};

module.exports = jobToAsanaTask;
