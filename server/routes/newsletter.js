const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");
const isAdmin = require("../utils/middleware/isAdmin");
const config = require("../utils/config");
const sanitizeHtml = require("sanitize-html");
const emailService = require("../utils/nodemailer");
const emailTemplate = require("../utils/emailTemplate");
const { Subscriber } = require("../utils/models/subscriber");
const { sendNewsletter } = require("../utils/middleware/sendNewsletter");

// #route:  POST /api/newsletter/sign-up
// #desc:   Sign up for newsletter
// #access: Public
router.post("/sign-up", async (req, res) => {
    const form = {
        email: sanitizeHtml(req.body.email),
        state: sanitizeHtml(req.body.state),
        accepted: sanitizeHtml(req.body.accepted),
    };

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
                        from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
                        to: response.email,
                        subject: `Anmeldung für Job Newsletter auf ${config.website.name}`,
                        text: `
                            Bitte bestätige deine Anmeldung für den Job-Newsletter für ${form.state} auf ${config.website.name}: ${baseUrl}/api/newsletter/verification/${response._id}
                        `,
                        html: emailTemplate.generate(
                            `
                                <div 
                                    style="color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.2; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px">
                                    <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif; mso-line-height-alt: 14px">
                                        <h2>Deine Anmeldung zum Job-Newsletter auf ${config.website.name}</h2>
                                        <p>
                                            Bitte bestätige deine Anmeldung für den Job-Newsletter für ${form.state} auf ${config.website.name}:
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #f8faf9;
                                        background-color: #fda225;
                                        border-radius: 50px;
                                        -webkit-border-radius: 50px;
                                        -moz-border-radius: 50px;
                                        width: auto;
                                        width: auto;
                                        border-top: 1px solid #fda225;
                                        border-right: 1px solid #fda225;
                                        border-bottom: 1px solid #fda225;
                                        border-left: 1px solid #fda225;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', sans-serif;
                                        text-align: center;
                                        mso-border-alt: none;
                                        word-break: keep-all;
                                    "
                                >
                                    <a 
                                        style="padding-left: 20px; padding-right: 20px; font-size: 16px; display: inline-block; cursor: pointer; border: none; color: #f8faf9; text-decoration: none" href="${baseUrl}/api/newsletter/verification/${response._id}" target="_blank"
                                    >
                                        <span 
                                            style="font-size: 16px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px"
                                        >
                                            Anmeldung bestätigen
                                        </span>
                                    </a>
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
                res.locals.secrets.WEBSITE_URL +
                    config.website.newsletterSuccessPath
            );
        }
    } catch (error) {
        console.log("Error on /verification/:subscriberId: ", error);
        res.sendStatus(503);
    }
});

// #route:  POST /api/newsletter/unsubscribe
// #desc:   Delete Subscriber
// #access: Public
router.post("/unsubscribe", async (req, res) => {
    try {
        const deletedSubscriber = await Subscriber.deleteOne({
            email: req.body.email,
        });

        if (deletedSubscriber.n === 1) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.log("Error on /delete/:subscriberId: ", error);
        res.json({ success: false });
    }
});

// #route:  POST /api/newsletter/send
// #desc:   Send newsletter
// #access: Admin
router.post("/send", authenticateToken, isAdmin, async (req, res) => {
    const success = await sendNewsletter(req.body.daysBack);
    res.json(success);
});

module.exports = router;
