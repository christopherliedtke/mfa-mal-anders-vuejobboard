const express = require("express");
const router = express.Router();
const path = require("path");
const verifyToken = require("../middleware/verifyToken");
const validateCoupon = require("../middleware/validateCoupon");
const emailService = require("../utils/nodemailer");
const config = require("../config/config");
const { Job } = require("../database/models/job");
const { Payment } = require("../database/models/payment");
const createInvoice = require("../middleware/createInvoice");

// #route:  POST /api/invoice/get-invoice
// #desc:   Handle invoice request
// #access: Private
router.post("/get-invoice", verifyToken, async (req, res) => {
    try {
        if (req.body.amount < config.payment.minPricePerJob) {
            throw new Error(
                "Error STRIPE Invalid amount entered for stripe checkout!"
            );
        }

        const {
            jobId,
            jobTitle,
            amount,
            paymentMethod,
            couponCode,
            billingAddress,
        } = req.body;

        let validatedCoupon = {};

        if (couponCode) {
            validatedCoupon = await validateCoupon(couponCode, req.user._id);
        }

        const couponId = validatedCoupon._id || "";
        const discount = validatedCoupon.discount || 0;
        let refreshFrequency = validatedCoupon.refreshFrequency || 0;

        if (refreshFrequency == 0) {
            config.payment.refreshFrequencies.forEach((frequency) => {
                if (parseInt(amount) >= frequency.amount) {
                    refreshFrequency = frequency.refreshAfterDays;
                }
            });
        }

        const lastInvoiceNo = await Payment.find({}, "invoiceNo")
            .sort({ invoiceNo: -1 })
            .limit(1);

        const invoiceNo = lastInvoiceNo[0].invoiceNo + 1;

        const paymentObj = {
            status: "pending",
            paymentType: paymentMethod,
            invoiceNo,
            amount: parseInt(amount) * (1 - discount) + config.invoice.feeFix,
            fee: 0,
            taxes: config.payment.tax * amount,
            paymentExpiresAt: new Date(
                new Date().setHours(24) +
                    1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
            ),
            job: jobId,
            user: req.user._id,
            billingEmail: billingAddress.email,
            billingCompany: billingAddress.company,
            billingGender: billingAddress.gender,
            billingFirstName: billingAddress.firstName,
            billingLastName: billingAddress.lastName,
            billingStreet: billingAddress.street,
            billingZipCode: billingAddress.zipCode,
            billingLocation: billingAddress.location,
        };

        if (couponId) {
            paymentObj.coupon = couponId;
        }

        const newPaymentObj = new Payment(paymentObj);
        const payment = await newPaymentObj.save();
        console.log("payment: ", payment);

        payment.billingFullName = `${
            payment.billingGender && payment.billingGender != "null"
                ? payment.billingGender + " "
                : ""
        }${
            payment.billingTitle && payment.billingTitle != "null"
                ? payment.billingTitle + " "
                : ""
        }${payment.billingFirstName} ${payment.billingLastName}`;

        await Job.updateOne(
            { _id: jobId, userId: req.user._id },
            {
                status: "invoice-pending",
                refreshFrequency,
            }
        );

        const invoice = await createInvoice(
            payment,
            __dirname + "/../invoices/"
        );

        const emailDataToAdmin = {
            from: `${config.website.emailFrom} <${config.website.noreplyEmail}>`,
            to: config.website.contactEmail,
            replyTo: payment.billingEmail,
            subject: `[Rechnungsanforderung] - ${
                (parseInt(payment.amount) * (1 - payment.discount)) / 100
            }€ | ${jobTitle} | ${jobId}`,
            html: `
                <h1>Rechnungsanforderung</h1>
                <h2>Stellenanzeige</h2>
                <p>
                    Job ID: ${jobId} <br>
                    Job Title: ${jobTitle} <br>
                    Zahlungsmethode: ${payment.paymentType} <br>
                    Betrag: ${
                        (parseInt(payment.amount) * (1 - payment.discount)) /
                        100
                    } EUR <br>
                    InvoiceNo: ${payment.invoiceNo} <br>
                    Aktionscode: ${payment.coupon} <br>
                    Discount: ${payment.discount} <br>
                    Refresh Frequency: ${refreshFrequency}
                </p>
                <h2>User</h2>
                <p>
                    User ID: ${req.user._id}
                </p>
                <h2>Rechnungsadresse</h2>
                <p>
                    Unternehmen: ${payment.billingCompany} <br>
                    Name: ${payment.billingFullName} <br>
                    Straße und Hausnummer: ${payment.billingStreet} <br>
                    PLZ: ${payment.billingZipCode} <br>
                    Ort: ${payment.billingLocation} <br>
                    E-Mail Adresse: ${payment.billingEmail}
                </p>
                <hr>
                <h1>E-Mail</h1>
                <p>[Rechnung ${
                    "RE-" +
                    "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
                    payment.invoiceNo.toString()
                }] Veröffentlichung Ihrer Stellenanzeige '${jobTitle}'</p>
                <p>
                    ${
                        payment.billingFullName.includes("Herr")
                            ? "Sehr geehrter"
                            : payment.billingFullName.includes("Frau")
                            ? "Sehr geehrte"
                            : "Sehr geehrte/r"
                    } ${payment.billingFullName},
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
            to: payment.billingEmail,
            replyTo: config.website.contactEmail,
            bcc: config.website.contactEmail,
            subject: `[Rechnung ${
                "RE-" +
                "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
                payment.invoiceNo.toString()
            }] Veröffentlichung Ihrer Stellenanzeige '${jobTitle}'`,
            html: `
                <p>
                    ${
                        payment.billingFullName.includes("Herr")
                            ? "Sehr geehrter"
                            : payment.billingFullName.includes("Frau")
                            ? "Sehr geehrte"
                            : "Sehr geehrte/r"
                    } ${payment.billingFullName},
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

        res.json({ success: true });
    } catch (err) {
        console.log(
            "Error on sendEmail() || Job.updateOne() in POST /api/invoice/get-invoice: ",
            err
        );
        res.json({ success: false });
    }
});

// #route:  POST /api/invoice/download
// #desc:   Handle invoice request
// #access: Private
router.get("/download/:paymentId", verifyToken, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            throw new Error("Missing permission!");
        }

        const payment = await Payment.findOne({ _id: req.params.paymentId });

        if (!payment) {
            throw new Error("No payment found!");
        }

        const invoice = await createInvoice(
            payment,
            __dirname + "/../invoices/"
        );

        const downloadPath = path.resolve(
            __dirname + "/../invoices/",
            invoice.fileName
        );

        res.sendFile(downloadPath, {
            headers: { "content-type": "application/pdf" },
        });
    } catch (err) {
        console.log("Error on /api/invoice/download: ", err);

        res.json({ success: false });
    }
});

module.exports = router;
