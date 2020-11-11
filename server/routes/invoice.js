const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");
const emailService = require("../utils/nodemailer");
const config = require("../utils/config");
const { Job } = require("../utils/models/job");

// #route:  POST /api/invoice/get-invoice
// #desc:   Handle invoice request
// #access: Private
router.post("/get-invoice", authenticateToken, async (req, res) => {
    const {
        jobId,
        jobTitle,
        userId,
        email,
        amount,
        paymentMethod,
        couponCode,
        discount,
        refreshFrequency,
        billingAddressCompany,
        billingAddressName,
        billingAddressStreet,
        billingAddressZipCode,
        billingAddressLocation,
    } = req.body;

    try {
        const emailData = {
            from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
            to: config.website.contactEmail,
            replyTo: email,
            subject: `[Rechnungsanforderung] - ${
                amount / 100
            }€ | ${jobTitle} | ${jobId}`,
            html: `
                <h1>Rechnungsanforderung</h1>
                <h2>Stellenanzeige</h2>
                <p>
                    Job ID: ${jobId} <br>
                    Job Title: ${jobTitle} <br>
                    Zahlungsmethode: ${paymentMethod} <br>
                    Betrag: ${amount} <br>
                    Aktionscode: ${couponCode} <br>
                    Discount: ${discount} <br>
                    Refresh Frequency: ${refreshFrequency}
                </p>
                <h2>User</h2>
                <p>
                    User ID: ${userId}
                </p>
                <h2>Rechnungsadresse</h2>
                <p>
                    Unternehmen: ${billingAddressCompany} <br>
                    Name: ${billingAddressName} <br>
                    Straße und Hausnummer: ${billingAddressStreet} <br>
                    PLZ: ${billingAddressZipCode} <br>
                    Ort: ${billingAddressLocation} <br>
                    E-Mail Adresse: ${email}
                </p>
                `,
        };

        await emailService.sendMail(emailData);
        await Job.updateOne(
            { _id: jobId, userId: userId },
            {
                status: "invoice-pending",
                paidAmount: amount,
                refreshFrequency,
            }
        );
        res.json({ success: true });
    } catch (err) {
        console.log(
            "Error on sendEmail() || Job.updateOne() in POST /api/invoice/get-invoice: ",
            err
        );
        res.json({ success: false });
    }
});

module.exports = router;
