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

module.exports.sendNewsletter = async () => {
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
                $gte: new Date(new Date().valueOf() - 1000 * 60 * 60 * 24 * 7),
            },
        }).populate("company");

        subscribers.forEach((subscriber) => {
            const jobList = generateListOfJobs(subscriber, jobs);

            if (jobList) {
                const data = {
                    from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                    to: subscriber.email,
                    subject: `Dein Job-Newsletter für ${subscriber.state} – ${config.website.name}`,
                    html: emailTemplate.generate(
                        `
                                <div>
                                    <h2 style="color: #6d0230">Deine Stellenangebote der Woche für ${subscriber.state}</h2>
                                    <p>Es ist wieder soweit! Hier erhältst Du ausgewählte Jobs der aktuellen Woche.</p>
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
                                    href="${secrets.WEBSITE_URL}/api/newsletter/delete/${subscriber._id}"
                                >
                                    Vom Newsletter abmelden
                                </a>
                            `,
                        `
                                ${
                                    secrets.WEBSITE_URL
                                }/SocialCard_JobsDerWoche_${subscriber.state
                            .replace(/\s+/g, "")
                            .replace("ü", "ue")}.png
                            `
                    ),
                };

                emailService.sendMail(data);
            }
        });
        return { success: true };
    } catch (error) {
        console.log("Error on sendNewsletter CRON: ", error);
        return { success: false };
    }
};

const generateListOfJobs = (subscriber, jobs) => {
    let outputStr = "";

    jobs.forEach((job) => {
        if (job.company.state === subscriber.state) {
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
