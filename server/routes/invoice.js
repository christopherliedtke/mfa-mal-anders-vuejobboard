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
const sanitizeHtml = require("sanitize-html");
const saveInvoiceToGDrive = require("../utils/saveInvoiceToGDrive");

// #route:  POST /api/invoice/get-invoice
// #desc:   Handle invoice request
// #access: Private
router.post("/get-invoice", verifyToken, async (req, res) => {
  try {
    if (!req.body.pricingPackage) {
      throw new Error("Error on /get-invoice - no pricingPackage provided!");
    }

    const {
      jobId,
      jobTitle,
      pricingPackage,
      paymentMethod,
      couponCode,
      billingAddress,
    } = req.body;

    const amount = config.payment.pricingPackages.find(
      pkg => pkg.name.toLowerCase() === pricingPackage.toLowerCase()
    ).price;
    let refreshFrequency = config.payment.pricingPackages.find(
      pkg => pkg.name.toLowerCase() === pricingPackage.toLowerCase()
    ).refreshFrequency;

    if (!amount) {
      throw new Error(
        `Error on /get-invoice - ${pricingPackage} not found in pricingPackages!`
      );
    }

    let validatedCoupon = {};

    if (couponCode) {
      validatedCoupon = await validateCoupon(couponCode, req.user._id);
    }

    const couponId = validatedCoupon._id || "";
    const discount = validatedCoupon.discount || 0;

    if (
      validatedCoupon.refreshFrequency > 0 &&
      validatedCoupon.refreshFrequency < refreshFrequency
    ) {
      refreshFrequency = validatedCoupon.refreshFrequency;
    }

    const lastInvoiceNo = await Payment.find({}, "invoiceNo")
      .sort({ invoiceNo: -1 })
      .limit(1);

    const invoiceNo = lastInvoiceNo[0].invoiceNo + 1;

    const paymentObj = {
      status: "pending",
      paymentType: paymentMethod,
      invoiceNo,
      invoiceDate: new Date(),
      pricingPackage,
      amount: parseInt(amount) * (1 - discount),
      fee: 0,
      taxes: config.payment.tax * amount,
      paymentExpiresAt: new Date(
        new Date().setHours(24) +
          1000 * 60 * 60 * 24 * config.payment.paymentExpirationDays
      ),
      job: jobId,
      user: req.user._id,
      billingEmail: sanitizeHtml(billingAddress.email),
      billingPhone: sanitizeHtml(billingAddress.phone),
      billingCompany: sanitizeHtml(billingAddress.company),
      billingDepartment: sanitizeHtml(billingAddress.department),
      billingGender: sanitizeHtml(billingAddress.gender),
      billingFirstName: sanitizeHtml(billingAddress.firstName),
      billingLastName: sanitizeHtml(billingAddress.lastName),
      billingStreet: sanitizeHtml(billingAddress.street),
      billingZipCode: sanitizeHtml(billingAddress.zipCode),
      billingLocation: sanitizeHtml(billingAddress.location),
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

    const invoice = await createInvoice(payment, __dirname + "/../invoices/");

    await saveInvoiceToGDrive(invoice.path, invoice.fileName);

    const emailDataToCustomer = {
      from: `${config.website.emailFrom} <${config.website.contactEmail}>`,
      to: payment.billingEmail,
      replyTo: config.website.contactEmail,
      bcc: [
        config.website.contactEmail,
        process.env.NODE_ENV == "production" && process.env.ZAPIER_INVOICES
          ? process.env.ZAPIER_INVOICES
          : "",
      ],
      subject: `[Rechnung ${
        "RE-" +
        "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
        payment.invoiceNo.toString()
      }] - ${pricingPackage} | ${
        (parseInt(payment.amount) * (1 - payment.discount)) / 100
      }€ - Veröffentlichung Ihrer Stellenanzeige '${jobTitle}'`,
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
                    vielen Dank für die Erstellung Ihrer Stellenanzeige '${jobTitle}' auf unserem Stellen- und Karriereportal speziell für MFA & ZFA – 'MFA mal anders'. Wie gewünscht erhalten Sie die beigefügte Rechnung für Ihr gewähltes Stellenpaket – ${pricingPackage}.
                </p>
                ${
                  pricingPackage === "Professional"
                    ? `
                      <p>
                        Mit Ihrem gewählten Stellenpaket "${pricingPackage}" erhalten Sie eine individuelle, persönliche Beratung zur Optimierung Ihrer Stellenanzeige. Wir werden Sie innerhalb von 2 Werktagen direkt kontaktieren und das weitere Vorgehen mit Ihnen besprechen. Ihre Stellenanzeige wird nach der Optimierung und Absprache mit Ihnen von uns veröffentlicht. Die Laufzeit beginnt natürlich erst nach erfolgter Veröffentlichung.
                      </p>
                    `
                    : `
                      <p>
                        Sobald Ihre Zahlung bei uns eingegangen ist, veröffentlichen wir Ihre Stellenanzeige und geben Ihnen noch einmal Bescheid. Anschließend haben Sie weiterhin die Möglichkeit, Ihre Stellenanzeige wie gewohnt selbst zu bearbeiten, offline zu nehmen oder zu löschen.
                      </p>
                    `
                }
                <p>
                    Sollten Sie noch Fragen oder Anregungen haben, melden Sie sich gern bei uns.
                </p>
                <p>
                    Mit freundlichen Grüßen
                </p>
                <p>
                    Kristin Maurach
                </p>
                <p>__</p>
                <p>
                    <img src="${
                      process.env.WEBSITE_URL
                    }/img/MfaMalAnders_logo_circle_dark.png" alt="MFA mal anders - Logo" width="60" style="margin-bottom: 1rem"/> <br>
                    <strong>MFA mal anders</strong> <br>
                    Das Stellen- & Karriereportal für Medizinische / Zahnmedizinische Fachangestellte <br>
                    <br>
                    Tel: <a href="tel:017663393957">0176 633 939 57</a> <br>
                    E-Mail: <a href="mailto:kontakt@mfa-mal-anders.de">kontakt@mfa-mal-anders.de</a> <br>
                    Webseite: <a href="${process.env.WEBSITE_URL}">${
        process.env.WEBSITE_URL
      }</a>
                </p>
                `,
      attachments: [
        {
          filename: invoice.fileName,
          path: invoice.path,
          contentType: "application/pdf",
        },
        // {
        //   filename: "MfaMalAnders_logo_circle_dark.png",
        //   path:
        //     __dirname +
        //     "/../../client/public/img/MfaMalAnders_logo_circle_dark.png",
        //   cid: "mfa-mal-anders-logo", //same cid value as in the html img src
        // },
      ],
    };

    const emailSent = await Promise.all([
      emailService.sendMail(emailDataToCustomer),
    ]);

    console.log("emailSent: ", emailSent);

    res.json({
      success: true,
      paymentId: payment._id,
      invoiceNo: payment.invoiceNo,
    });
  } catch (err) {
    console.log(
      "Error on sendEmail() || Job.updateOne() in POST /api/invoice/get-invoice: ",
      err
    );
    res.json({ success: false });
  }
});

// #route:  GET /api/invoice/download
// #desc:   Handle invoice request
// #access: Private
router.get("/download/:paymentId", verifyToken, async (req, res) => {
  try {
    const payment = await Payment.findOne({ _id: req.params.paymentId });

    if (!payment) {
      throw new Error("No payment found!");
    }

    if (!req.user.isAdmin && !req.user._id === payment.user) {
      throw new Error("Missing permission!");
    }

    const invoice = await createInvoice(payment, __dirname + "/../invoices/");

    const downloadPath = path.resolve(
      __dirname + "/../invoices/",
      invoice.fileName
    );

    res.download(downloadPath, invoice.FileName);
  } catch (err) {
    console.log("Error on /api/invoice/download: ", err);

    res.json({ success: false });
  }
});

module.exports = router;
