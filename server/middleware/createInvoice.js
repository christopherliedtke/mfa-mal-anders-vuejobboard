const fs = require("fs");
const PDFDocument = require("pdfkit");
const config = require("../config/config.js");

const createInvoice = (payment, pathToSave) => {
  return new Promise((resolve, reject) => {
    try {
      payment.billingFullName = `${
        payment.billingGender && payment.billingGender != "null"
          ? payment.billingGender + " "
          : ""
      }${
        payment.billingTitle && payment.billingTitle != "null"
          ? payment.billingTitle + " "
          : ""
      }${
        payment.billingFirstName && payment.billingFirstName != "null"
          ? payment.billingFirstName + " "
          : ""
      }${
        payment.billingLastName && payment.billingLastName != "null"
          ? payment.billingLastName
          : ""
      }`;

      payment.discount = payment.discount || 0;

      payment.invoiceNoLong =
        "RE-" +
        "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
        payment.invoiceNo.toString();

      const sender = config.invoice.sender(payment.invoiceDate);

      // const bankAccount =
      //   new Date(payment.invoiceDate).getTime() < config.invoice.changeDate
      //     ? config.invoice.bankAccountOld
      //     : config.invoice.bankAccount;
      // const sender =
      //   new Date(payment.invoiceDate).getTime() < config.invoice.changeDate
      //     ? config.invoice.senderOld
      //     : config.invoice.sender;

      let doc = new PDFDocument({
        size: "A4",
        margins: { top: 50, bottom: 15, left: 50, right: 50 },
      }).font("Helvetica");

      generateHeader(doc, sender);
      generateCustomerInformation(doc, payment);
      generateBody(doc, payment, sender);
      generateFooter(doc, sender);

      doc.end();

      const file = fs.createWriteStream(
        pathToSave + payment.invoiceNoLong + ".pdf"
      );
      doc.pipe(file);

      file.on("finish", () => {
        file.end();
        resolve({
          success: true,
          fileName: payment.invoiceNoLong + ".pdf",
          path: pathToSave + payment.invoiceNoLong + ".pdf",
        });
      });

      file.on("error", () => reject(false));
    } catch (err) {
      console.log("Error on createInvoice(): ", err);

      reject(false);
    }
  });
};

module.exports = createInvoice;

function generateHeader(doc, sender) {
  doc
    .image(
      __dirname +
        "/../../client/public/img/" +
        "MfaMalAnders_logo_circle_bgdark_white.png",
      500,
      40,
      {
        width: 50,
        align: "right",
      }
    )
    .strokeColor("#6d0230")
    .lineWidth(1)
    .moveTo(50, 100)
    .lineTo(550, 100)
    .stroke()
    .strokeColor("#222222")
    .fontSize(8)
    .text(
      `${sender.company} - ${sender.address.street} - ${sender.address.zipCode} ${sender.address.location}`,
      50,
      105,
      {
        width: 200,
        align: "left",
        underline: true,
        oblique: true,
      }
    )
    .moveDown();
}

function generateCustomerInformation(doc, payment) {
  const date = payment.invoiceDate || payment.createdAt || new Date();

  doc
    .fontSize(10)
    .text(payment.billingCompany, 50, 140, { align: "left" })
    .text(payment.billingDepartment || "", 50, 155, { align: "left" })
    .text(
      payment.billingFullName,
      50,
      155 + (payment.billingDepartment ? 15 : 0),
      {
        align: "left",
      }
    )
    .text(
      payment.billingStreet || "",
      50,
      170 + (payment.billingDepartment ? 15 : 0),
      { align: "left" }
    )
    .text(
      (payment.billingZipCode || "") + " " + (payment.billingLocation || ""),
      50,
      185 + (payment.billingDepartment ? 15 : 0),
      {
        align: "left",
      }
    )
    .font("Helvetica-Bold")
    .text("Rechnungsnummer:", 340, 140, { align: "left" })
    .text("Rechnungsdatum:", 340, 155, { align: "left" })
    .text("Ihr Ansprechpartner:", 340, 170, { align: "left" })
    .text("Status:", 340, 185, { align: "left" })
    .font("Helvetica")
    .text(payment.invoiceNoLong, 450, 140, { align: "right" })
    .text(
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
      450,
      155,
      { align: "right" }
    )
    .text("Kristin Maurach", 450, 170, { align: "right" })
    .text(
      payment.status === "paid"
        ? "bezahlt"
        : payment.status === "cancelled"
        ? "storniert"
        : "offen",
      450,
      185,
      {
        align: "right",
      }
    )
    .moveDown();
}

function generateBody(doc, payment, sender) {
  let position = 250;

  doc
    .font("Helvetica-Bold")
    .text("Rechnung Nr. " + payment.invoiceNoLong, 50, 250)
    .font("Helvetica")
    .text(
      `${
        payment.billingFullName.includes("Herr")
          ? "Sehr geehrter "
          : payment.billingFullName.includes("Frau")
          ? "Sehr geehrte "
          : payment.billingFullName
          ? "Sehr geehrte/r "
          : "Sehr geehrte Damen und Herren"
      }${payment.billingFullName},`,
      50,
      280
    )
    .text(
      `vielen Dank für die Erstellung Ihrer Stellenanzeige auf unserem Stellen- und Karriereportal speziell für MFA & ZFA – 'MFA mal anders'. Wie gewünscht erhalten Sie hier Ihre Rechnung:`,
      50,
      305,
      { width: 500 }
    )
    .moveDown();

  position = generateInvoiceTable(doc, payment, 345);

  doc
    .font("Helvetica")
    .fontSize(8)
    .text(
      `Zahlungsbedingungen: Der Rechnungsbetrag ist innerhalb von 14 Tagen ohne Abzüge ab Rechnungseingang fällig.${
        !sender.tax
          ? " Gemäß § 19 UStG erheben wir keine Umsatzsteuer und weisen diese folglich auch nicht aus. Die Preise sind Endpreise."
          : ""
      }`,
      50,
      position,
      { width: 500 }
    )
    .moveDown();

  doc
    .fontSize(10)
    .text(
      `Bitte überweisen Sie den fälligen Betrag innerhalb von 14 Tagen ab Rechnungsdatum auf das folgende Konto:`,
      50,
      position + 40,
      { width: 500 }
    )
    .moveDown();

  position += 65;

  doc
    .text("Empfänger: " + sender.bankAccount.receiver, 70, position, {
      width: 500,
      oblique: true,
    })
    .text("Bank: " + sender.bankAccount.bank, 70, position + 12, {
      width: 500,
      oblique: true,
    })
    .text("IBAN: " + sender.bankAccount.iban, 70, position + 24, {
      width: 500,
      oblique: true,
    })
    .text("BIC: " + sender.bankAccount.bic, 70, position + 36, {
      width: 500,
      oblique: true,
    })
    .text(
      `Verwendungszweck: ${payment.invoiceNoLong} / ${
        payment.billingCompany || ""
      }`,
      70,
      position + 48,
      {
        width: 500,
        oblique: true,
      }
    )
    .moveDown();

  position += 75;

  doc
    .text(
      payment.pricingPackage === "Professional"
        ? `Mit Ihrem gewählten Stellenpaket "${payment.pricingPackage}" erhalten Sie eine individuelle, persönliche Beratung zur Optimierung Ihrer Stellenanzeige. Wir werden Sie innerhalb von 2 Werktagen direkt kontaktieren und das weitere Vorgehen mit Ihnen besprechen. Ihre Stellenanzeige wird nach der Optimierung und Absprache mit Ihnen von uns veröffentlicht.`
        : `Sobald Ihre Zahlung bei uns eingegangen ist, veröffentlichen wir Ihre Stellenanzeige und geben Ihnen noch einmal Bescheid. Anschließend haben Sie weiterhin die Möglichkeit, Ihre Stellenanzeige wie gewohnt selbst zu bearbeiten, offline zu nehmen oder zu löschen. Für Fragen und Anregungen stehe ich Ihnen jederzeit gern zur Verfügung.`,
      50,
      position,
      { width: 500 }
    )
    .moveDown();

  position += 65;

  doc
    .text("Mit freundlichen Grüßen", 50, position)
    .image(
      __dirname + "/../invoices/" + "KMaurach_signature.png",
      50,
      position + 15,
      {
        height: 45,
        align: "left",
      }
    )
    .text(sender.name, 50, position + 75)
    .moveDown();
}

function generateInvoiceTable(doc, payment, position) {
  let invoiceTableTop = position;

  doc.font("Helvetica-Bold").fontSize(10);

  generateTableRow(
    doc,
    invoiceTableTop,
    "Pos.",
    "Bezeichnung",
    "Menge",
    "Stückpreis",
    "USt. %",
    "USt.",
    "Netto"
  );

  doc.font("Helvetica");

  generateHr(doc, invoiceTableTop + 15);

  generateTableRow(
    doc,
    invoiceTableTop + 25,
    // Position
    "1",
    // Bezeichnung
    `Veröffentlichung Stellenanzeige ${
      payment.pricingPackage ? `| Paket ${payment.pricingPackage}` : ""
    }`,
    // Menge
    "1",
    // Stückpreis
    (
      (parseInt(
        payment.amount -
          (payment.paymentType === "invoice" && !payment.pricingPackage
            ? config.invoice.feeFix
            : 0)
      ) -
        payment.taxes) /
      100
    )
      .toFixed(2)
      .toString()
      .replace(".", ","),
    // USt. %
    config.invoice.sender(payment.invoiceDate).tax * 100,
    // USt.
    (payment.taxes / 100).toFixed(2).toString().replace(".", ","),
    // Netto
    (
      (parseInt(
        payment.amount -
          (payment.paymentType === "invoice" && !payment.pricingPackage
            ? config.invoice.feeFix
            : 0)
      ) -
        payment.taxes) /
      100
    )
      .toFixed(2)
      .toString()
      .replace(".", ",")
  );

  if (payment.paymentType === "invoice" && !payment.pricingPackage) {
    generateTableRow(
      doc,
      invoiceTableTop + 45,
      // Position
      "2",
      // Bezeichnung
      `Bearbeitungsgebühr - separate Rechnungsverarbeitung`,
      // Menge
      "1",
      // Stückpreis
      (config.invoice.feeFix / 100).toFixed(2).toString().replace(".", ","),
      // USt. %
      config.invoice.sender(payment.invoiceDate).tax * 100,
      // USt.
      (
        (config.invoice.feeFix *
          config.invoice.sender(payment.invoiceDate).tax) /
        100
      )
        .toFixed(2)
        .toString()
        .replace(".", ","),
      // Netto
      (config.invoice.feeFix / 100).toFixed(2).toString().replace(".", ",")
    );
  }

  generateHr(doc, invoiceTableTop + 75);

  generateTableRow(
    doc,
    invoiceTableTop + 85,
    // Position
    "",
    // Bezeichnung
    `Summe Positionen`,
    // Menge
    "",
    // Stückpreis
    "",
    // USt. %
    "",
    // USt.
    (payment.taxes / 100).toFixed(2).toString().replace(".", ","),
    // Netto
    (parseInt(payment.amount - payment.taxes) / 100)
      .toFixed(2)
      .toString()
      .replace(".", ",")
  );

  doc.font("Helvetica-Bold");

  generateTableRow(
    doc,
    invoiceTableTop + 105,
    // Position
    "",
    // Bezeichnung
    `Gesamtbetrag EUR`,
    // Menge
    "",
    // Stückpreis
    "",
    // USt. %
    "",
    // USt.
    "",
    // Netto
    (parseInt(payment.amount) / 100).toFixed(2).toString().replace(".", ",")
  );

  return invoiceTableTop + 125;
}

function generateTableRow(
  doc,
  y,
  position,
  description,
  units,
  pricePerUnit,
  vatPercent,
  vatAbsolute,
  lineTotal
) {
  doc
    .text(position, 50, y, { width: 30 })
    .text(description, 80, y, { width: 200 })
    .text(units, 280, y, { width: 35, align: "right" })
    .text(pricePerUnit, 315, y, { width: 70, align: "right" })
    .text(vatPercent, 385, y, { width: 40, align: "right" })
    .text(vatAbsolute, 425, y, { width: 50, align: "right" })
    .text(lineTotal, 475, y, { align: "right" })
    .moveDown();
}

function generateHr(doc, y, color = "#222222", lineWidth = 1) {
  doc
    .strokeColor(color)
    .lineWidth(lineWidth)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke()
    .moveDown();
}

function generateFooter(doc, sender) {
  let position = 780;
  doc
    .fontSize(8)
    .fillColor("#888888")
    .text(sender.company, 50, position)
    .text(sender.address.street, 50, position + 10)
    .text(
      sender.address.zipCode + " " + sender.address.location,
      50,
      position + 20
    )
    .text(sender.email, 50, position + 35)
    .moveDown();

  doc
    .fontSize(8)
    .fillColor("#888888")
    .text(sender.bankAccount.bank, 400, position)
    .text("IBAN: " + sender.bankAccount.iban, 400, position + 10)
    .text("BIC: " + sender.bankAccount.bic, 400, position + 20)
    .text("Steuernummer: " + sender.taxNum, 400, position + 30)
    .moveDown();
}
