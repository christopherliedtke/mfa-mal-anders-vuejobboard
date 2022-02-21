const express = require("express");
const router = express.Router();
const emailService = require("../utils/nodemailer");
const config = require("../config/config");
const sanitizeHtml = require("sanitize-html");

// #route:  POST /api/contact/send
// #desc:   Send contact form
// #access: Public
router.post("/send", async (req, res) => {
  const form = { ...req.body };

  for (const key in form) {
    if (typeof form[key] === "string") {
      form[key] = sanitizeHtml(form[key]);
    }
  }

  if (form.honeypot) {
    res.sendStatus(400);
  } else {
    try {
      const data = {
        from: `${form.firstName} ${form.lastName} <${process.env.CONTACT_EMAIL_ADRESS}>`,
        to: process.env.CONTACT_EMAIL_ADRESS,
        replyTo: `${form.email}`,
        subject: `${form.subject}`,
        html: `
            <div>
                <strong>Anrede:</strong> ${form.gender} <br>
                <strong>Titel:</strong> ${form.title} <br>
                <strong>Vorname:</strong> ${form.firstName} <br>
                <strong>Nachname:</strong> ${form.lastName} <br>
                <strong>E-Mail:</strong> ${form.email} <br>
                <strong>Telefon:</strong> ${form.phone} <br>
                <p style="color: #0000001a">__</p>
                <h2>Betreff: ${form.subject}</h2>
                <p>${form.message}</p>
            </div>
        `,
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
