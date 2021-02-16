const config = require("../config/config.json");
const emailTemplate = require("../utils/emailTemplate");

const { Subscriber } = require("../database/models/subscriber");
const { Job } = require("../database/models/job");

const mg = require("mailgun-js")({
    apiKey: process.env.MG_API_KEY,
    domain: process.env.MG_DOMAIN,
    host: "api.eu.mailgun.net",
});

module.exports.sendNewsletter = async (daysBack = 7) => {
    console.log("sendNewsletter starting now...");

    try {
        const subscribers = await Subscriber.find(
            { status: "active" },
            "email state"
        );

        const jobs = await Job.find({
            paid: true,
            status: "published",
            paidExpiresAt: {
                $gte: new Date(),
            },
            publishedAt: {
                $gte: new Date(
                    new Date().valueOf() - 1000 * 60 * 60 * 24 * daysBack
                ),
                $lte: new Date(),
            },
        }).populate("company");

        const states = [
            ...new Set(jobs.map((job) => job.company.state.replace("ü", "ue"))),
        ];
        const newsletterList = {};

        states.forEach((state) => {
            newsletterList[state.replace("ü", "ue")] = [];
        });

        subscribers.forEach((subscriber) => {
            if (newsletterList[subscriber.state.replace("ü", "ue")]) {
                newsletterList[subscriber.state.replace("ü", "ue")].push(
                    subscriber.email
                );
            }
        });

        console.log("newsletterList: ", newsletterList);

        for (const key in newsletterList) {
            const jobList = generateListOfJobs(key.replace("ü", "ue"), jobs);

            if (jobList) {
                const data = {
                    from: `${config.website.emailFrom} <noreply@${process.env.MG_DOMAIN}>`,
                    to: config.website.contactEmail,
                    bcc: newsletterList[key].join(", "),
                    subject: `Dein Job-Newsletter für ${key} – ${config.website.name}`,
                    html: emailTemplate.generate(
                        `
                            <div>
                                <h2 style="color: #6d0230">Deine Stellenangebote der Woche für ${key}</h2>
                                <p>Es ist wieder soweit! Hier erhältst Du unsere aktuellen Stellenanzeigen direkt in Dein Postfach.</p>
                                <p>Wir hoffen, für Dich ist etwas dabei und drücken die Daumen für Bewerbung und Co. </p>
                            </div>
                            <div style="margin: 2rem 0; padding: 1.5rem 0; border-top: solid 2px #6d0230">
                                ${jobList}
                            </div>
                        `,
                        `
                            <a
                                style="text-decoration: underline; color: #f8faf9"
                                target="_blank" rel="noopener"
                                href="${process.env.WEBSITE_URL}/page/unsubscribe"
                            >
                                Vom Newsletter abmelden
                            </a>
                        `,
                        `
                            ${
                                process.env.WEBSITE_URL
                            }/img/SocialCard_JobsDerWoche_${key
                            .replace(/\s+/g, "")
                            .replace("ü", "ue")}.jpg
                        `
                    ),
                };

                mg.messages().send(data, (error, body) => {
                    console.log(
                        `mailgun.messages() -> Body for ${key}: `,
                        body
                    );

                    if (error) {
                        console.log(
                            `Error on mailgun.messages() for ${key}: `,
                            error
                        );
                    }
                });
            }
        }

        return { success: true };
    } catch (error) {
        console.log("Error on sendNewsletter: ", error);
        return { success: false };
    }
};

const generateListOfJobs = (state, jobs) => {
    let outputStr = "";

    jobs.forEach((job) => {
        if (job.company.state.replace("ü", "ue") === state) {
            outputStr += `
                <a 
                    style="margin-bottom: 1rem; font-size: 16px; display: inline-block; cursor: pointer; border: none; color: #b94559; text-decoration: none" 
                    href="${
                        process.env.WEBSITE_URL +
                        config.googleIndexing.pathPrefix +
                        job._id
                    }?source=newsletter"
                    target="_blank"
                    rel="noopener"
                >
                    ${job.title} | ${job.company.location}
                </a>
                <br>
            `;
        }
    });

    return outputStr;
};
