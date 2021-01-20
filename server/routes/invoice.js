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
    try {
        if (req.body.amount < config.stripe.minPricePerJob) {
            throw new Error(
                "Error STRIPE Invalid amount entered for stripe checkout!"
            );
        }

        const {
            jobId,
            jobTitle,
            email,
            amount,
            paymentMethod,
            couponCode,
            billingAddress,
        } = req.body;

        let validatedCoupon = {};

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

        const emailDataToAdmin = {
            from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
            to: config.website.contactEmail,
            replyTo: email,
            subject: `[Rechnungsanforderung] - ${
                (parseInt(amount) * (1 - discount) + 500) / 100
            }€ | ${jobTitle} | ${jobId}`,
            html: `
                <h1>Rechnungsanforderung</h1>
                <h2>Stellenanzeige</h2>
                <p>
                    Job ID: ${jobId} <br>
                    Job Title: ${jobTitle} <br>
                    Zahlungsmethode: ${paymentMethod} <br>
                    Betrag: ${
                        (parseInt(amount) * (1 - discount) + 500) / 100
                    } EUR <br>
                    InvoiceNo: ${invoiceNoLong} EUR <br>
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

        const emailDataToCustomer = {
            from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
            to: email,
            replyTo: config.website.contactEmail,
            bcc: config.website.contactEmail,
            subject: `[Rechnung ${invoiceNoLong}] Veröffentlichung Ihrer Stellenanzeige '${jobTitle}'`,
            html: `
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
                <br>
                <hr>
                <p>
                    <img src="cid:mfa-mal-anders-logo" width="60"/> <br>
                    MFA mal anders <br>
                    Dein Karriereportal für Medizinische Fachangestellte <br>
                    <br>
                    Tel: 0176 63393957 <br>
                    E-Mail: kontakt@mfa-mal-anders.de <br>
                    Webseite: www.mfa-mal-anders.de
                </p>
                `,
            attachments: [
                {
                    filename: invoice.fileName,
                    path: invoice.path,
                    contentType: "application/pdf",
                },
                {
                    filename: "logo_800.png",
                    path: __dirname + "/../../client/public/img/logo_800.png",
                    cid: "mfa-mal-anders-logo", //same cid value as in the html img src
                },
            ],
        };

        const emailSent = await Promise.all([
            emailService.sendMail(emailDataToCustomer),
            emailService.sendMail(emailDataToAdmin),
        ]);

        console.log("emailSent: ", emailSent);

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
