const config = require("../config/config.json");
const emailService = require("../utils/nodemailer");

const { Job } = require("../database/models/job");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../config/secrets.json");
}

module.exports.sendUnpublishedJobReminder = async () => {
    console.log("sendUnpublishedJobReminder()...");

    try {
        const jobs = await Job.find({
            paid: false,
            status: "draft",
            paidAmount: 0,
            createdAt: {
                $lt: new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * 4),
            },
        })
            .populate("company")
            .populate("userId");

        jobs.forEach(async (job) => {
            if (!job.sentReminder) {
                console.log("Sending unpublishedJobReminder for : ", job._id);

                const emailData = {
                    from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
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
                            secrets.WEBSITE_URL
                        }/page/contact">Kontaktformular</a> oder direkt per Nachricht an <a href="mailto:${
                        config.website.contactEmail
                    }">${config.website.contactEmail}</a>.
                    </p>
                    <p>
                        Nach erfolgreichem <a href="${
                            secrets.WEBSITE_URL
                        }/login">Login</a> können Sie Ihre Stellenanzeige jederzeit weiter bearbeiten.
                    </p>
                    <p>
                        Ich freue mich darauf, von Ihnen zu hören und verbleibe mit freundlichen Grüßen
                    </p>
                    <p>Kristin Maurach</p>
                    <p>
                        <img style="width: 60px" src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/09/logo.png" />
                    </p>
                    <p>
                        MFA mal anders <br>
                        Das Karriereportal für medizinische Fachangestellte
                    </p>
                `,
                };

                await emailService.sendMail(emailData);
                await Job.updateOne({ _id: job._id }, { sentReminder: true });
            }
        });
    } catch (err) {
        console.log("Error on sendUnpublishedJobReminder: ", err);
    }
};
