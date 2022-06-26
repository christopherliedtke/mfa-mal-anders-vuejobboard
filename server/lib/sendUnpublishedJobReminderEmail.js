const config = require("../config/config.js");
const emailService = require("./nodemailer");

const { Job } = require("../database/models/job");

module.exports.sendUnpublishedJobReminderEmail = async () => {
  console.log("sendUnpublishedJobReminder()...");

  try {
    const jobs = await Job.find({
      paid: false,
      status: "unpublished",
      sentReminder: false,
      createdAt: {
        $lt: new Date(
          new Date().valueOf() -
            1000 * 60 * 60 * 24 * config.unpublishedJobsReminder.afterDays
        ),
      },
    })
      .populate("company")
      .populate("userId");

    jobs.forEach(async job => {
      console.log("Sending unpublishedJobReminder for : ", job._id);

      const emailData = {
        from: `${config.website.emailFrom} <${process.env.CONTACT_EMAIL_ADRESS}>`,
        to: job.userId.email,
        subject: `Ihre Stellenanzeige bei 'MFA mal anders'`,
        html: `
                    <p>${
                      job.userId.gender === "Herr"
                        ? "Sehr geehrter Herr " +
                          (job.userId.title != "null"
                            ? job.userId.title + " "
                            : "") +
                          job.userId.lastName +
                          ","
                        : job.userId.gender === "Frau"
                        ? "Sehr geehrte Frau " +
                          (job.userId.title != "null"
                            ? job.userId.title + " "
                            : "") +
                          job.userId.lastName +
                          ","
                        : "Sehr geehrte Damen und Herren,"
                    }</p>
                    <p>
                        vielen Dank für die Erstellung Ihrer Stellenanzeige <strong>'${
                          job.title
                        }'</strong> auf unserem Portal MFA mal anders. Wir haben bemerkt, dass Sie Ihre erstellte Stellenanzeige bisher nicht veröffentlicht haben.
                    </p>
                    <p>
                        Gern möchten Wir unsere Unterstützung anbieten, insofern Sie weitere Informationen, Beratung oder Hilfe bei der Veröffentlichung Ihrer Stellenanzeige benötigen.
                    </p>
                    <p>
                        Melden Sie sich gern bei uns über unser <a href="${
                          process.env.WEBSITE_URL
                        }/kontakt">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${
          process.env.CONTACT_EMAIL_ADRESS
        }">${process.env.CONTACT_EMAIL_ADRESS}</a>.
                    </p>
                    <p>
                        Nach erfolgreichem <a href="${
                          process.env.WEBSITE_URL
                        }/login">Login</a> können Sie Ihre Stellenanzeige jederzeit weiter bearbeiten.
                    </p>
                    <p>
                        Wir freuen uns darauf, von Ihnen zu hören und verbleiben mit freundlichen Grüßen
                    </p>
                    <p>Ihr <em>MFA mal anders</em> Team</p>
                    <p>__</p>
                    <p>
                        <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
                        <strong>MFA mal anders</strong> <br>
                        Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte <br>
                        <br>
                        Telefon: <a href="tel:+4917645282858">+49 176 / 45 28 28 58</a> <br>
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
              "/../../client/public/img/MfaMalAnders_logo_circle_bgdark_white.png",
            cid: "mfa-mal-anders-logo", //same cid value as in the html img src
          },
        ],
      };

      await emailService.sendMail(emailData);
      await Job.updateOne({ _id: job._id }, { sentReminder: true });
    });
  } catch (err) {
    console.log("Error on sendUnpublishedJobReminder: ", err);
  }
};
