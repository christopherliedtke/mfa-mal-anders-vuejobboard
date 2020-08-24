const express = require("express");
const router = express.Router();
const config = require("../utils/config");
const sanitizeHtml = require("sanitize-html");
const emailService = require("../utils/nodemailer");
const emailTemplate = require("../utils/emailTemplate");
const { Subscriber } = require("../utils/models/subscriber");

// #route:  POST /api/newsletter/sign-up
// #desc:   Sign up for newsletter
// #access: Public
router.post("/sign-up", async (req, res) => {
    const form = { ...req.body };

    form.email = sanitizeHtml(form.email);
    form.state = sanitizeHtml(form.state);

    let success = false;

    if (!form.email || !form.state || !form.accepted) {
        res.json({ success });
    } else {
        try {
            const newSubscriber = new Subscriber(form);
            const response = await newSubscriber.save();

            if (response) {
                try {
                    const baseUrl = req.protocol + "://" + req.get("host");

                    const data = {
                        from: `${config.website.emailFrom} <${res.locals.secrets.EMAIL_USERNAME}>`,
                        to: response.email,
                        subject: `Your Activation Link for the job newsletter on ${config.website.name}`,
                        text: `
                            Please use the following link to activate your newsletter subscription on ${config.website.name}: ${baseUrl}/api/newsletter/verification/${response._id}
                        `,
                        html: emailTemplate.generate(
                            `
                                <div>
                                    <h2>Your Newsletter Subscription</h2>
                                    <p>Please use the following link to activate your newsletter subscription on ${config.website.name}: <strong><a href="${baseUrl}/api/newsletter/verification/${response._id}" target="_blank">Verify Email</a></strong></p>
                                </div>
                            `
                        ),
                    };
                    const email = await emailService.sendMail(data);

                    if (email.accepted.length > 0) {
                        success = true;
                    }
                } catch (error) {
                    console.log(
                        "Error on sendMail() in newsletter sign up: ",
                        error
                    );
                }
            }
        } catch (error) {
            console.log("Error on newSubscriber.save(): ", error);
        } finally {
            res.json({ success });
        }
    }
});

// #route:  GET /api/newsletter/verification/:subscriberId
// #desc:   Verify email for newsletter subscription
// #access: Public
router.get("/verification/:subscriberId", async (req, res) => {
    try {
        const updatedSubscriber = await Subscriber.updateOne(
            { _id: req.params.subscriberId },
            { status: "active" }
        );

        if (updatedSubscriber.nModified === 0) {
            res.sendStatus(503);
        } else {
            res.redirect(
                config.website.url + config.website.newsletterSuccessPath
            );
        }
    } catch (error) {
        console.log("Error on /verification/:subscriberId: ", error);
        res.sendStatus(503);
    }
});

// #route:  GET /api/newsletter/delete/:subscriberId
// #desc:   Delete Subscriber
// #access: Public
router.get("/delete/:subscriberId", async (req, res) => {
    try {
        const deletedSubscriber = await Subscriber.deleteOne({
            _id: req.params.subscriberId,
        });

        if (deletedSubscriber.n === 1) {
            res.redirect(
                config.website.url +
                    config.website.newsletterUnsubscribeSuccessPath
            );
        } else {
            res.sendStatus(503);
        }
    } catch (error) {
        console.log("Error on /delete/:subscriberId: ", error);
        res.sendStatus(503);
    }
});

module.exports = router;