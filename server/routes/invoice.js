const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");
const emailService = require("../utils/nodemailer");
const config = require("../utils/config");
const { Job } = require("../utils/models/job");
const createInvoice = require("../utils/createInvoice");

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
        billingAddressCompany,
        billingAddressName,
        billingAddressStreet,
        billingAddressZipCode,
        billingAddressLocation,
    } = req.body;

    let refreshFrequency = req.body.refreshFrequency || 0;

    if (refreshFrequency == 0) {
        config.stripe.refreshFrequencies.forEach((frequency) => {
            if (amount >= frequency.amount) {
                refreshFrequency = frequency.refreshAfterDays;
            }
        });
    }

    let { invoiceNo } = await Job.findOne({ _id: jobId });

    if (invoiceNo === 0) {
        const lastInvoiceNo = await Job.find({}, "invoiceNo")
            .sort({ invoiceNo: -1 })
            .limit(1);

        console.log("lastInvoiceNo: ", lastInvoiceNo);

        invoiceNo = lastInvoiceNo[0].invoiceNo + 1;
    }

    const invoiceNoLong =
        "RE-" +
        "000000".slice(0, 6 - invoiceNo.toString().length) +
        invoiceNo.toString();

    const invoice = await createInvoice(
        {
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
        },
        invoiceNoLong,
        __dirname + "/../invoices/"
    );

    console.log("invoice: ", invoice);

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
                <hr>
                <h1>E-Mail Text</h1>
                <p>
                    ${
                        billingAddressName.includes("Herr")
                            ? "Sehr geehrter"
                            : billingAddressName.includes("Frau")
                            ? "Sehr geehrte"
                            : "Sehr geehrte/r"
                    } ${billingAddressName},
                </p>
                <p>
                    vielen Dank für die Erstellung Ihrer Stellenanzeige '${jobTitle}' auf unserem Portal 'MFA mal anders'. Wie gewünscht haben wir Ihnen die beigefügte Rechnung erstellt.
                </p>
                <p>
                    Sobald Ihre Zahlung bei uns eingegangen ist, veröffentlichen wir Ihre Stellenanzeige und geben Ihnen noch einmal Bescheid. Anschließend haben Sie weiterhin die Möglichkeit, Ihre Stellenanzeige wie gewohnt selbst zu bearbeiten, offline zu nehmen oder zu löschen.
                </p>
                <p>
                    Sollten Sie noch Fragen oder Anregungen haben, melden Sie sich gern bei uns.
                </p>
                <p>
                    Mit freundlichen Grüßen
                </p>
                <p>
                    Kristin Maurach
                </p>
                `,
            attachments: [
                {
                    filename: invoice.fileName,
                    path: invoice.path,
                    contentType: "application/pdf",
                },
            ],
        };

        await emailService.sendMail(emailData);

        await Job.updateOne(
            { _id: jobId, userId: userId },
            {
                status: "invoice-pending",
                paidAmount: amount + 500,
                refreshFrequency,
                invoiceNo,
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
