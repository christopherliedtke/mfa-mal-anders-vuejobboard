const config = require("../config/config");
const { Job } = require("../database/models/job");
const emailService = require("../utils/nodemailer");

const sendJobAdUnpublishedEmail = async () => {
  const jobs = await Job.find({
    paid: true,
    paidExpiresAt: {
      $lt: new Date(),
    },
    status: "published",
  }).populate("userId");

  const emailData = jobs
    .filter(job => !job.userId.isAdmin)
    .map(job => {
      return {
        from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
        to: job.userId.email,
        replyTo: config.website.contactEmail,
        bcc: config.website.contactEmail,
        subject: `[Stellenanzeige abgelaufen] – '${job.title}'`,
        html: `
                <p>
                    ${
                      job.userId.gender === "Herr"
                        ? "Sehr geehrter Herr"
                        : job.userId.gender === "Frau"
                        ? "Sehr geehrte Frau"
                        : "Sehr geehrte/r Frau/Herr"
                    } ${
          job.userId.title && job.userId.title != "null"
            ? job.userId.title + " "
            : ""
        }${job.userId.lastName},
                </p>
                <p>
                    wir möchten Sie darüber informieren, dass Ihre Stellenanzeige mit dem Titel '${
                      job.title
                    }' auf unserem Portal 'MFA mal anders' abgelaufen ist und hoffen, sie konnten die offene Stelle erfolgreich besetzen.
                </p>
                <p>
                    Sie haben die Möglichkeit, Ihre Stellenanzeige jederzeit auf <a href="https://www.mfa-mal-anders.de/auth/login">www.mfa-mal-anders.de</a> unter MEIN KONTO -> STELLENANZEIGEN zu reaktivieren.
                </p>
                <p>
                    Sollten Sie noch Fragen oder Anregungen haben, melden Sie sich gern bei uns.
                </p>
                <p>
                    Mit freundlichen Grüßen
                </p>
                <p>
                    Kristin Maurach
                </p>
                <p>__</p>
                <p>
                    <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
                    <strong>MFA mal anders</strong> <br>
                    Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte <br>
                    <br>
                    Tel: <a href="tel:017663393957">0176 633 939 57</a> <br>
                    E-Mail: <a href="mailto:kontakt@mfa-mal-anders.de">kontakt@mfa-mal-anders.de</a> <br>
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
    });

  const emailSent = await Promise.all(
    emailData.map(data => emailService.sendMail(data))
  );

  console.log("emailSent: ", emailSent);
};

module.exports = sendJobAdUnpublishedEmail;
