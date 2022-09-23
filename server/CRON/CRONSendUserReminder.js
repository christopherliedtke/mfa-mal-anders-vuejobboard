const CronJob = require("cron").CronJob;
const fs = require("fs");
const path = require("path");
const config = require("../config/config");
const { Job } = require("../database/models/job");
const { JobSeek } = require("../database/models/jobSeek");
const { User } = require("../database/models/user");
const { sesMailTransporter } = require("../lib/ses");
const Handlebars = require("handlebars");

Handlebars.registerHelper("currentYear", () => {
  return new Date().getFullYear();
});

const employerReminderTemplate = fs.readFileSync(
  path.join(__dirname, "../templates/email/employer_reminder_email.hbs"),
  "utf8"
);
const employeeReminderTemplate = fs.readFileSync(
  path.join(__dirname, "../templates/email/employee_reminder_email.hbs"),
  "utf8"
);

module.exports.CRONSendUserReminder = new CronJob(
  config.sendUserReminder.interval,
  () => sendUserReminder(),
  null, //onComplete
  false, // start directly
  "Europe/Berlin"
);

const sendUserReminder = async () => {
  try {
    await mailToEmployers();
    await mailToEmployees();
  } catch (error) {
    console.error("Error on sendUserReminder(): ", error);
  }
};

const mailToEmployers = async () => {
  const employers = await User.find({
    isEmployer: true,
    status: "active",
    sentReminder: {
      $ne: true,
    },
    createdAt: {
      $lt:
        new Date().getTime() -
        1000 * 60 * 60 * 24 * config.sendUserReminder.afterDays,
    },
  }).lean();

  const jobs = await Job.find({}).lean();

  const employersWOJobs = employers.filter(employer => {
    return !jobs.some(job => job.userId.toString() == employer._id.toString());
  });

  if (employersWOJobs.length === 0) return;

  const template = Handlebars.compile(employerReminderTemplate);

  const emailData = employersWOJobs.map(employer => {
    const htmlToEmployer = template({
      to: `${employer.gender ? employer.gender + " " : ""}${
        employer.title ? employer.title + " " : ""
      }${employer.lastName}`,
      websiteUrl: process.env.WEBSITE_URL,
      websiteName: config.website.name,
      headerImg: `${process.env.WEBSITE_URL}/img/MfaMalAnders_Banner_1200.jpg`,
      lightColor: "#fffcfd",
      lightShadeColor: "#f7f6f9",
      primaryColor: "#6d0230",
      secondaryColor: "#fda225",
      fbPath: config.social.fb.path,
      igPath: config.social.ig.path,
    });

    return {
      from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
      to: employer.email,
      subject: "Ihre Stellenanzeige auf MFA mal anders",
      html: htmlToEmployer,
      replyTo: "kontakt@mfa-mal-anders.de",
    };
  });

  const emailsSent = await Promise.all(
    emailData.map(data => sesMailTransporter.sendMail(data))
  );

  console.info(
    "Sent employer reminders for no jobs created yet ---> ",
    employersWOJobs.map(employer => employer._id.toString())
  );
  console.info("emailsSent: ", emailsSent);

  await User.updateMany(
    {
      _id: {
        $in: employersWOJobs.map(employer => employer._id.toString()),
      },
    },
    { sentReminder: true }
  );
};

const mailToEmployees = async () => {
  const employees = await User.find({
    isEmployee: true,
    status: "active",
    sentReminder: {
      $ne: true,
    },
    createdAt: {
      $lt:
        new Date().getTime() -
        1000 * 60 * 60 * 24 * config.sendUserReminder.afterDays,
    },
  }).lean();

  const jobSeeks = await JobSeek.find({}).lean();

  const employeesWOJobSeeks = employees.filter(employee => {
    return !jobSeeks.some(
      jobSeek => jobSeek.user.toString() == employee._id.toString()
    );
  });

  if (employeesWOJobSeeks.length === 0) return;

  const template = Handlebars.compile(employeeReminderTemplate);

  const emailData = employeesWOJobSeeks.map(employee => {
    const htmlToEmployee = template({
      to: `${employee.firstName}`,
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
      from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
      to: employee.email,
      subject: "Dein Stellengesuch auf MFA mal anders",
      html: htmlToEmployee,
      replyTo: "kontakt@mfa-mal-anders.de",
    };
  });

  const emailsSent = await Promise.all(
    emailData.map(data => sesMailTransporter.sendMail(data))
  );

  console.info(
    "Sent employee reminders for no jobSeeks created yet ---> ",
    employeesWOJobSeeks.map(employee => employee._id.toString())
  );
  console.info("emailsSent: ", emailsSent);

  await User.updateMany(
    {
      _id: {
        $in: employeesWOJobSeeks.map(employee => employee._id.toString()),
      },
    },
    { sentReminder: true }
  );
};
