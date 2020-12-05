const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const validateCoupon = require("../middleware/validateCoupon");
const emailService = require("../utils/nodemailer");
const config = require("../config/config");
const { Job } = require("../database/models/job");
const createInvoice = require("../middleware/createInvoice");

// #route:  POST /api/invoice/get-invoice
// #desc:   Handle invoice request
// #access: Private
router.post("/get-invoice", verifyToken, async (req, res) => {
    const {
        jobId,
        jobTitle,
        email,
        amount,
        paymentMethod,
        couponCode,
        billingAddress,
    } = req.body;

    try {
        let validatedCoupon;

        if (couponCode) {
            validatedCoupon = await validateCoupon(couponCode, req.user._id);
        }

        const discount = validatedCoupon.discount || 0;
        let refreshFrequency = validatedCoupon.couponRefreshFrequency || 0;

        if (refreshFrequency == 0) {
            config.stripe.refreshFrequencies.forEach((frequency) => {
                if (parseInt(amount) >= frequency.amount) {
                    refreshFrequency = frequency.refreshAfterDays;
                }
            });
        }

        let { invoiceNo } = await Job.findOne({ _id: jobId });

        if (invoiceNo === 0) {
            const lastInvoiceNo = await Job.find({}, "invoiceNo")
                .sort({ invoiceNo: -1 })
                .limit(1);

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
                email,
                amount,
                paymentMethod,
                couponCode,
                discount,
                refreshFrequency,
                billingAddress,
            },
            invoiceNoLong,
            __dirname + "/../invoices/"
        );

        const emailData = {
            from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
            to: config.website.contactEmail,
            replyTo: email,
            subject: `[Rechnungsanforderung] - ${
                (parseInt(amount) * (1 - discount)) / 100
            }€ | ${jobTitle} | ${jobId}`,
            html: `
                <h1>Rechnungsanforderung</h1>
                <h2>Stellenanzeige</h2>
                <p>
                    Job ID: ${jobId} <br>
                    Job Title: ${jobTitle} <br>
                    Zahlungsmethode: ${paymentMethod} <br>
                    Betrag: ${parseInt(amount) * (1 - discount)} <br>
                    Aktionscode: ${couponCode} <br>
                    Discount: ${discount} <br>
                    Refresh Frequency: ${refreshFrequency}
                </p>
                <h2>User</h2>
                <p>
                    User ID: ${req.user._id}
                </p>
                <h2>Rechnungsadresse</h2>
                <p>
                    Unternehmen: ${billingAddress.company} <br>
                    Name: ${billingAddress.name} <br>
                    Straße und Hausnummer: ${billingAddress.street} <br>
                    PLZ: ${billingAddress.zipCode} <br>
                    Ort: ${billingAddress.location} <br>
                    E-Mail Adresse: ${email}
                </p>
                <hr>
                <h1>E-Mail</h1>
                <p>[Rechnung ${invoiceNoLong}] Veröffentlichung Ihrer Stellenanzeige '${jobTitle}'</p>
                <p>
                    ${
                        billingAddress.name.includes("Herr")
                            ? "Sehr geehrter"
                            : billingAddress.name.includes("Frau")
                            ? "Sehr geehrte"
                            : "Sehr geehrte/r"
                    } ${billingAddress.name},
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
            { _id: jobId, userId: req.user._id },
            {
                status: "invoice-pending",
                paidAmount: parseInt(amount) * (1 - discount) + 500,
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
