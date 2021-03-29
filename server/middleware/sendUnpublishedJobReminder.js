const config = require("../config/config.json");
const emailService = require("../utils/nodemailer");

const { Job } = require("../database/models/job");

module.exports.sendUnpublishedJobReminder = async () => {
    console.log("sendUnpublishedJobReminder()...");

    try {
        const jobs = await Job.find({
            paid: false,
            status: "draft",
            createdAt: {
                $lt: new Date(
                    new Date().valueOf() -
                        1000 *
                            60 *
                            60 *
                            24 *
                            config.unpublishedJobsReminder.afterDays
                ),
            },
        })
            .populate("company")
            .populate("userId");

        jobs.forEach(async (job) => {
            if (!job.sentReminder) {
                console.log("Sending unpublishedJobReminder for : ", job._id);

                const emailData = {
                    from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
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
                        Gern möchten Wir unsere Unterstützung anbieten, insofern Sie weiter Informationen, Beratung oder Hilfe bei der Veröffentlichung Ihrer Stellenanzeige benötigen.
                    </p>
                    <p>
                        Melden Sie sich gern bei uns über unser <a href="${
                            process.env.WEBSITE_URL
                        }/page/contact">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${
                        config.website.contactEmail
                    }">${config.website.contactEmail}</a>.
                    </p>
                    <p>
                        Nach erfolgreichem <a href="${
                            process.env.WEBSITE_URL
                        }/login">Login</a> können Sie Ihre Stellenanzeige jederzeit weiter bearbeiten.
                    </p>
                    <p>
                        Ich freue mich darauf, von Ihnen zu hören und verbleibe mit freundlichen Grüßen
                    </p>
                    <p>Kristin Maurach</p>
                    <p>__</p>
                    <p>
                        <img src="cid:mfa-mal-anders-logo" width="60" style="margin-bottom: 1rem"/> <br>
                        <strong>MFA mal anders</strong> <br>
                        Das Karriere- & Stellenportal für Medizinische / Zahnmedizinische Fachangestellte <br>
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

                await emailService.sendMail(emailData);
                await Job.updateOne({ _id: job._id }, { sentReminder: true });
            }
        });
    } catch (err) {
        console.log("Error on sendUnpublishedJobReminder: ", err);
    }
};
