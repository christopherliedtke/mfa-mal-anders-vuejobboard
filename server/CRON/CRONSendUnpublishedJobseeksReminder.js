const CronJob = require("cron").CronJob;
const fs = require("fs");
const path = require("path");
const config = require("../config/config");
const { sesMailTransporter } = require("../lib/ses");
const Handlebars = require("handlebars");
const { JobSeek } = require("../database/models/jobSeek");

Handlebars.registerHelper("currentYear", () => {
  return new Date().getFullYear();
});

const unpublishedJobSeeksReminderTemplate = fs.readFileSync(
  path.join(
    __dirname,
    "../templates/email/unpublished_jobseeks_reminder_email.hbs"
  ),
  "utf8"
);

module.exports.CRONSendUnpublishedJobSeeksReminder = new CronJob(
  config.unpublishedJobSeeksReminder.interval,
  () => sendUnpublishedJobSeeksReminder(),
  null, //onComplete
  false, // start directly
  "Europe/Berlin"
);

const sendUnpublishedJobSeeksReminder = async () => {
  const jobSeeks = await JobSeek.find({
    wasPublic: false,
    published: false,
    sentReminder: {
      $ne: true,
    },
    createdAt: {
      $lt:
        new Date().getTime() -
        1000 * 60 * 60 * 24 * config.unpublishedJobSeeksReminder.afterDays,
    },
  }).populate("user");

  if (jobSeeks.length === 0) return;

  const template = Handlebars.compile(unpublishedJobSeeksReminderTemplate);

  const emailData = jobSeeks.map(jobSeek => {
    const htmlToEmployee = template({
      to: `${jobSeek.user.firstName}`,
      jobSeekTitle: jobSeek.title,
      websiteUrl: process.env.WEBSITE_URL,
      websiteName: config.website.name,
      headerImg: `${process.env.WEBSITE_URL}/img/MfaMalAnders_Stellengesuche.jpg`,
      lightColor: "#fffcfd",
      lightShadeColor: "#f7f6f9",
      primaryColor: "#6d0230",
      secondaryColor: "#fda225",
      fbPath: config.social.fb.path,
      igPath: config.social.ig.path,
    });

    return {
      from: "kontakt@mfa-mal-anders.de",
      to: jobSeek.user.email,
      subject: "Dein Stellengesuch auf MFA mal anders",
      html: htmlToEmployee,
      replyTo: "kontakt@mfa-mal-anders.de",
    };
  });

  const emailsSent = await Promise.all(
    emailData.map(data => sesMailTransporter.sendMail(data))
  );

  console.info(
    "Sent unpublished JobSeeks reminders ---> ",
    jobSeeks.map(jobSeek => jobSeek._id.toString())
  );
  console.info("emailsSent: ", emailsSent);

  await JobSeek.updateMany(
    {
      _id: {
        $in: jobSeeks.map(jobSeek => jobSeek._id.toString()),
      },
    },
    { sentReminder: true }
  );
};
