const CronJob = require("cron").CronJob;
const config = require("../utils/config");
const emailService = require("../utils/nodemailer");
const emailTemplate = require("../utils/emailTemplate");
const { Subscriber } = require("../utils/models/subscriber");
const { Job } = require("../utils/models/job");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets");
}

module.exports.sendNewsletter = new CronJob(
    config.newsletter.interval,
    async function () {
        console.log("You will see this message every 10 seconds");

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
                        new Date().valueOf() - 1000 * 60 * 60 * 24 * 7
                    ),
                },
            }).populate("company");

            subscribers.forEach((subscriber) => {
                const data = {
                    from: `${config.website.emailFrom} <${secrets.EMAIL_USERNAME}>`,
                    to: subscriber.email,
                    subject: `Your weekly job newsletter for ${subscriber.state}`,
                    html: emailTemplate.generate(
                        `
                            <div>
                                <h2>Your Newsletter</h2>
                                <p>Your weekly ...</p>
                            </div>
                            <div>
                                ${generateListOfJobs(subscriber, jobs)}
                            </div>
                        `,
                        `
                            <div>
                                <a href="${config.website.url}/api/newsletter/delete/${subscriber._id}">Unsubscribe from Newsletter</a>
                            </div>
                        `
                    ),
                };

                emailService.sendMail(data);
            });
        } catch (error) {
            console.log("Error on sendNewsletter CRON: ", error);
        }
    },
    null, //onComplete
    false, // start directly
    "Europe/Berlin"
);

const generateListOfJobs = (subscriber, jobs) => {
    let outputStr = "";

    jobs.forEach((job) => {
        if (job.company.state === subscriber.state) {
            outputStr += `
                <a href="${config.website.url}/jobboard/job/${job._id}">${job.title}</a><br>
            `;
        }
    });

    return outputStr;
};
