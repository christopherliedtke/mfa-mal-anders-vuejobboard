const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");
const emailService = require("../utils/nodemailer");
const config = require("../config/config");
const { Job } = require("../database/models/job");
const { Training } = require("../database/models/training");
const jobToAsanaTask = require("../utils/jobToAsanaTask");

// #route:  POST /api/send-email/job-published
// #desc:   Handle invoice request
// #access: Private
router.post("/job-published", verifyToken, isAdmin, async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.body.jobId,
    })
      .populate("company")
      .populate("userId");

    const emailData = {
      from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
      to: job.userId.email,
      subject: `Veröffentlichung Ihrer Stellenanzeige auf 'MFA mal anders'`,
      html: `
                <p>
                    Sehr ${
                      !job.userId.gender || job.userId.gender === "null"
                        ? "geehrte/r Frau/Herr"
                        : job.userId.gender === "Frau"
                        ? "geehrte Frau"
                        : "geehrter Herr"
                    }${
        job.userId.title && job.userId.title != "null"
          ? " " + job.userId.title
          : ""
      } ${job.userId.lastName},
                </p>
                <p>
                    Ihre Zahlung ist heute bei uns eingetroffen. Vielen Dank für die Veröffentlichung Ihrer Stellenanzeige '${
                      job.title
                    }' auf unserem Stellen- und Karriereportal speziell für MFA & ZFA – MFA mal anders. Diese ist ab sofort unter folgendem Link abrufbar:
                </p>
                <p>
                    <a href="${process.env.WEBSITE_URL}/stellenangebote/job/${
        job._id
      }">${process.env.WEBSITE_URL}/stellenangebote/job/${job._id}</a>
                </p>
                <p>
                    Bitte beachten Sie, dass Ihre Stellenanzeige nur solange abrufbar ist, wie auch Ihre Bewerbungsfrist nicht überschritten ist. Über Ihre Zugangsdaten haben Sie weiterhin Zugriff auf Ihre Stellenanzeigen und können diese jederzeit anpassen.
                </p>
                <p>
                    Sollten Sie noch Fragen, Anregungen oder weiteren Beratungsbedarf haben, melden Sie sich gern bei uns über unser <a href="${
                      process.env.WEBSITE_URL
                    }/kontakt">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:kontakt@mfa-mal-anders.de">kontakt@mfa-mal-anders.de</a>.
                </p>
                <p>
                    Wir wünschen Ihnen viele qualifizierte BewerberInnen und verbleiben mit freundlichen Grüßen
                </p>
                <p>
                    Kristin Maurach
                </p>
                <p>__</p>
                <p>
                    <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
                    <strong>MFA mal anders</strong> <br>
                    Das Stellen- & Karriereportal für Medizinische / Zahnmedizinische Fachangestellte <br>
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
          filename: "MfaMalAnders_logo_circle_dark.png",
          path:
            __dirname +
            "/../../client/public/img/MfaMalAnders_logo_circle_dark.png",
          cid: "mfa-mal-anders-logo", //same cid value as in the html img src
        },
      ],
    };

    const sentEmail = await emailService.sendMail(emailData);
    console.log("sentEmail: ", sentEmail);

    await jobToAsanaTask(job);

    res.json({ success: sentEmail.accepted.length > 0 });
  } catch (err) {
    console.log(
      "Error on sendEmail() || Job.updateOne() in POST /api/send-email/job-published: ",
      err
    );
    res.json({ success: false });
  }
});

// #route:  POST /api/send-email/training-published
// #desc:   Send E-Mail to user when training is published through admin
// #access: Private
router.post("/training-published", verifyToken, isAdmin, async (req, res) => {
  console.log("req.body: ", req.body);

  try {
    const training = await Training.findOne({
      _id: req.body.trainingId,
    }).populate("user");

    console.log("training: ", training);

    if (!training) {
      throw new Error(
        `Training could not be found for _id: ${req.body.trainingId}.`
      );
    }

    // send email to user
    const emailData = {
      from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
      to: training.user.email,
      subject: `Veröffentlichung Ihrer Fortbildung auf 'MFA mal anders'`,
      html: `
                <p>
                    Sehr ${
                      !training.user.gender || training.user.gender === "null"
                        ? "geehrte/r Frau/Herr"
                        : training.user.gender === "Frau"
                        ? "geehrte Frau"
                        : "geehrter Herr"
                    }${
        training.user.title && training.user.title != "null"
          ? " " + training.user.title
          : ""
      } ${training.user.lastName},
                </p>
                <p>
                    Wir haben Ihre eingereichte Fortbildung '${
                      training.title
                    }' geprüft. Diese ist ab sofort unter folgendem Link abrufbar:
                </p>
                <p>
                    <a href="${
                      process.env.WEBSITE_URL
                    }/karriere/fortbildungskatalog">${
        process.env.WEBSITE_URL
      }/karriere/fortbildungskatalog</a>
                </p>
                <p>
                    Sie können die Fortbildung jederzeit unter MEIN KONTO > FORTBILDUNGEN ändern bzw. deaktivieren. Sollten Sie noch Fragen oder Anregungen haben, melden Sie sich gern bei uns über unser <a href="${
                      process.env.WEBSITE_URL
                    }/kontakt">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:kontakt@mfa-mal-anders.de">kontakt@mfa-mal-anders.de</a>.
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
                    Das Stellen- & Karriereportal für Medizinische / Zahnmedizinische Fachangestellte <br>
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
          filename: "MfaMalAnders_logo_circle_dark.png",
          path:
            __dirname +
            "/../../client/public/img/MfaMalAnders_logo_circle_dark.png",
          cid: "mfa-mal-anders-logo", //same cid value as in the html img src
        },
      ],
    };

    const sentEmail = await emailService.sendMail(emailData);

    console.log("sentEmail: ", sentEmail);

    if (sentEmail.accepted.length == 0) {
      throw new Error("Email could not be sent by emailService");
    }

    res.json({ success: true });
  } catch (err) {
    res.json({ errors: [err] });
  }
});

module.exports = router;
