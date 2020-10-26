const config = require("../config.json");
const emailService = require("../nodemailer");
const emailTemplate = require("../emailTemplate");
const { Subscriber } = require("../models/subscriber");
const { Job } = require("../models/job");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../secrets");
}

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
            applicationDeadline: {
                $gte: new Date(
                    new Date().valueOf() - 1000 * 60 * 60 * 24
                ).toISOString(),
            },
            paidAt: {
                $gte: new Date(
                    new Date().valueOf() - 1000 * 60 * 60 * 24 * daysBack
                ),
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
                    from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                    to: config.website.noreplyEmail,
                    bcc: newsletterList[key],
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
                                    href="${secrets.WEBSITE_URL}/page/unsubscribe"
                                >
                                    Vom Newsletter abmelden
                                </a>
                            `,
                        `
                                ${
                                    secrets.WEBSITE_URL
                                }/SocialCard_JobsDerWoche_${key
                            .replace(/\s+/g, "")
                            .replace("ü", "ue")}.png
                            `
                    ),
                };

                // try {
                //     emailService.sendMail(data);
                // } catch (err) {
                //     console.log("Error on newsletter sendMail(): ", err);
                // }
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
                        secrets.WEBSITE_URL +
                        config.googleIndexing.pathPrefix +
                        job._id
                    }"
                    target="_blank"
                    rel="noopener"
                >
                    ${job.title} | ${job.company.location}, ${job.company.state}
                </a>
                <br>
            `;
        }
    });

    return outputStr;
};
