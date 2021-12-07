const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");
const emailService = require("../utils/nodemailer");
const config = require("../config/config");
const { Job } = require("../database/models/job");
const { Training } = require("../database/models/training");
const { Payment } = require("../database/models/payment");
const { JobSeek } = require("../database/models/jobSeek");
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
                  Gern können Sie diesen Link nutzen, um beispielsweise auf Ihrer Webseite oder über Ihre Social Media Kanäle auf die offene Stelle aufmerksam zu machen. Unserer Erfahrung nach ist dies eine weitere hilfreiche Möglichkeit, potentielle BewerberInnen auf sich aufmerksam zu machen. 
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
                    }/karriere/fort-und-weiterbildung/fortbildungskatalog">${
        process.env.WEBSITE_URL
      }/karriere/fort-und-weiterbildung/fortbildungskatalog</a>
                </p>
                <p>
                    Sie können die Fortbildung jederzeit unter KONTO > FORTBILDUNGEN ändern bzw. deaktivieren. Sollten Sie noch Fragen oder Anregungen haben, melden Sie sich gern bei uns über unser <a href="${
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
                    Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte Fachangestellte <br>
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

// #route:  POST /api/send-email/contact-jobseek
// #desc:   Handle jobseek contact request
// #access: Private
router.post("/contact-jobseek", verifyToken, async (req, res) => {
  try {
    if (!req.body.accepted) {
      throw new Error(
        "Sie müssen AGBs und Datenschutzerklärung gelesen und akzeptiert haben, um Ihre Nachricht zu versenden."
      );
    }
    // check for current payment
    const filter = {
      user: req.user._id,
      status: "paid",
      paymentExpiresAt: {
        $gt: new Date().getTime(),
      },
    };
    const validPaymentCount = await Payment.countDocuments(filter);

    if (!validPaymentCount) {
      throw new Error(
        "Sie haben aktuell kein Stellenangebot auf MFA mal anders online. Ausschließlich verifizierte Arbeitgeber mit einer offenen Stelle auf unserem Portal haben die Möglichkeit, Jobsuchende direkt zu kontaktieren."
      );
    }

    // get jobSeek
    const jobSeek = await JobSeek.findOne({ _id: req.body.jobSeekId }).populate(
      "user",
      "email"
    );

    if (!jobSeek) {
      throw new Error(
        "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns über unser Kontaktformular."
      );
    }

    // send mail to jobseeker
    const mailDataToJobSeeker = {
      from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
      to: jobSeek.user.email,
      bcc: [config.website.contactEmail],
      replyTo: req.body.email,
      subject: `Kontaktaufnahme zu Deinem Stellengesuch auf 'MFA mal anders'`,
      html: `
        <p>
          Hallo ${jobSeek.firstName},
        </p>
        <p>
            Auf Dein Stellengesuch <a href="${
              process.env.WEBSITE_URL
            }/stellengesuche/${jobSeek._id}" target="_blank">${
        jobSeek.title
      }</a> auf <a href="${
        process.env.WEBSITE_URL
      }" target="_blank">MFA mal anders</a> hat ${
        req.user.gender ? req.user.gender + " " : ""
      }${req.user.title ? req.user.title + " " : ""}${req.user.firstName} ${
        req.user.lastName
      } mit geantwortet:
        </p>
        <p style="color: #0000001a">__</p>

        <p style="color: #6c757d; font-style: italic">
            ${req.body.message}
        </p>

        <p style="color: #0000001a">__</p>
        <p>
            Du kannst ${req.user.gender ? req.user.gender + " " : ""}${
        req.user.title ? req.user.title + " " : ""
      }${req.user.firstName} ${
        req.user.lastName
      } über den Antwort-Button Deines E-Mail Programms oder direkt an <a href="mailto:${
        req.user.email
      }">${req.user.email}
          </a> antworten.
        </p>
        <p>
            Wir wünschen Dir viel Erfolg in dem Gespräch und bei der weiteren Stellensuche.
        </p>
        <p>
            <small style="color: #6c757d">Solltest Du nicht mehr auf der Suche nach einer neuen Stelle sein, bitten wir Dich, Dein Stellengesuch auf MFA mal anders unter KONTO > STELLENGESUCHE auf OFFLINE zu setzen. In diesem Fall möchten wir Dich ebenso bitten, ${
              req.user.gender ? req.user.gender + " " : ""
            }${req.user.title ? req.user.title + " " : ""}${
        req.user.firstName
      } ${req.user.lastName} mit einem kurzen Hinweis abzusagen.</small>
        </p>
        <p>
            Viele Grüße
        </p>
        <p>
            Kristin Maurach
        </p>
        <p>__</p>
        <p>
            <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
            <strong>MFA mal anders</strong> <br>
            Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte Fachangestellte <br>
            <br>
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

    const sentEmailToJobSeeker = await emailService.sendMail(
      mailDataToJobSeeker
    );
    console.info("sentEmailToJobSeeker: ", sentEmailToJobSeeker);

    if (sentEmailToJobSeeker.accepted.length == 0) {
      throw new Error(
        `Die Nachricht konnte nicht an ${jobSeek.publicFirstName} ${jobSeek.publicLastName} versandt werden. Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns über unser Kontaktformular.`
      );
    }

    // send copy to employer
    try {
      const mailDataToEmployer = {
        from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
        to: jobSeek.user.email,
        subject: `Ihre Kontaktaufnahme zum Stellengesuch auf 'MFA mal anders'`,
        html: `
        <p>
          ${
            req.user.gender == "Frau"
              ? "Sehr geehrte"
              : req.user.gender == "Herr"
              ? "Sehr geehrter"
              : "Sehr geehrte/r"
          } ${req.user.gender ? req.user.gender + " " : ""}${
          req.user.title ? req.user.title + " " : ""
        }${req.user.firstName} ${req.user.lastName},
        </p>
        <p>
            Ihre Nachricht an ${jobSeek.publicFirstName} ${
          jobSeek.publicLastName
        } wurde erfolgreich versandt. Hiermit erhalten Sie eine Kopie der Nachricht.
        </p>
        <p style="color: #0000001a">__</p>

        <p style="color: #6c757d; font-style: italic">
            ${req.body.message}
        </p>

        <p style="color: #0000001a">__</p>
        <p>
            Wir wünschen Ihnen viel Erfolg in dem Gespräch und bei der Stellenbesetzung. Sollten Sie noch Fragen oder Hinweise für uns haben, melden Sie sich gern bei uns.
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
            Das Stellen- & Karriereportal für Medizinische Fachangestellte | Zahnmedizinische Fachangestellte Fachangestellte <br>
            <br>
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

      const sentEmailToEmployer = await emailService.sendMail(
        mailDataToEmployer
      );
      console.info("sentEmailToEmployer: ", sentEmailToEmployer);
    } catch (err) {
      console.error(
        "Error on /api/send-email/contact-jobseek -> sentEmailToEmployer: ",
        err
      );
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Error on /api/send-email/contact-jobseek: ", err);
    res.json({ success: false, error: err.message });
  }
});

module.exports = router;
