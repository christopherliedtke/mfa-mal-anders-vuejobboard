const express = require("express");
const router = express.Router();
const emailService = require("../utils/nodemailer");
const config = require("../utils/config");
const sanitizeHtml = require("sanitize-html");
const emailTemplate = require("../utils/emailTemplate");

// #route:  POST /api/contact/send
// #desc:   Send contact form
// #access: Public
router.post("/send", async (req, res) => {
    const form = { ...req.body };

    for (const key in form) {
        form[key] = sanitizeHtml(form[key]);
    }

    if (form.honeypot) {
        res.sendStatus(400);
    } else {
        try {
            const data = {
                from: `${form.firstName} ${form.lastName} <${res.locals.secrets.EMAIL_USERNAME}>`,
                to: config.website.contactEmail,
                replyTo: `${form.email}`,
                subject: `${form.subject}`,
                html: emailTemplate.generate(`
                    <div>
                        <strong>First Name:</strong> ${form.firstName} <br>
                        <strong>Last Name:</strong> ${form.lastName} <br>
                        <strong>Email Address:</strong> ${form.email} <br>
                        <strong>Phone Number:</strong> ${form.phone} <br>
                        <hr>
                        <h2>Subject: ${form.subject}</h2>
                        <p>${form.message}</p>
                    </div>
                `),
            };

            const response = await emailService.sendMail(data);

            if (response.accepted.length > 0) {
                res.send({ success: true });
            } else {
                res.send({ success: false });
            }
        } catch (err) {
            console.log("Error on /api/contact/send: ", err);
            res.send({ success: false });
        }
    }
});

module.exports = router;
