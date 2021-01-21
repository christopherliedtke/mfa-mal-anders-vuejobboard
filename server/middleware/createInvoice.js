const fs = require("fs");
const PDFDocument = require("pdfkit");

const createInvoice = (data, invoiceNo, path) => {
    return new Promise((resolve, reject) => {
        try {
            let doc = new PDFDocument({
                size: "A4",
                margins: { top: 50, bottom: 15, left: 50, right: 50 },
            }).font("Helvetica");

            generateHeader(doc);
            generateCustomerInformation(doc, data, invoiceNo);
            generateBody(doc, data, invoiceNo);
            generateFooter(doc);

            doc.end();
            doc.pipe(fs.createWriteStream(path + invoiceNo + ".pdf"));

            resolve({
                success: true,
                fileName: invoiceNo + ".pdf",
                path: path + invoiceNo + ".pdf",
            });
        } catch (err) {
            console.log("Error on createInvoice(): ", err);

            reject(false);
        }
    });
};

module.exports = createInvoice;

function generateHeader(doc) {
    doc
        // .image(
        //     __dirname + "/../../client/public/img/" + "logo_800.png",
        //     500,
        //     40,
        //     {
        //         width: 50,
        //         align: "right",
        //     }
        // )
        .strokeColor("#6d0230")
        .lineWidth(1)
        .moveTo(50, 100)
        .lineTo(550, 100)
        .stroke()
        .strokeColor("#222222")
        .fontSize(8)
        .text(
            "MFA mal anders - Kristin Maurach - Wellbergstraße 62 - 49809 Lingen (Ems)",
            50,
            105,
            { align: "left", underline: true, oblique: true }
        )
        .moveDown();
}

function generateCustomerInformation(doc, data, invoiceNo, date = new Date()) {
    doc.fontSize(10)
        .text(data.billingAddress.company, 50, 140, { align: "left" })
        .text(data.billingAddress.name, 50, 155, { align: "left" })
        .text(data.billingAddress.street, 50, 170, { align: "left" })
        .text(
            data.billingAddress.zipCode + " " + data.billingAddress.location,
            50,
            185,
            { align: "left" }
        )
        .font("Helvetica-Bold")
        .text("Rechnungsnummer:", 340, 140, { align: "left" })
        .text("Rechnungsdatum:", 340, 155, { align: "left" })
        .text("Ihr Ansprechpartner:", 340, 170, { align: "left" })
        .font("Helvetica")
        .text(invoiceNo, 450, 140, { align: "right" })
        .text(
            date.getDate() +
                "." +
                (date.getMonth() + 1) +
                "." +
                date.getFullYear(),
            450,
            155,
            { align: "right" }
        )
        .text("Kristin Maurach", 450, 170, { align: "right" })
        .moveDown();
}

function generateBody(doc, data, invoiceNo) {
    let position = 250;

    doc.font("Helvetica-Bold")
        .text("Rechnung Nr. " + invoiceNo, 50, 250)
        .font("Helvetica")
        .text(
            `${
                data.billingAddress.name.includes("Herr")
                    ? "Sehr geehrter"
                    : data.billingAddress.name.includes("Frau")
                    ? "Sehr geehrte"
                    : "Sehr geehrte/r"
            } ${data.billingAddress.name},`,
            50,
            280
        )
        .text(
            `vielen Dank für die Erstellung Ihrer Stellenanzeige auf unserem Portal 'MFA mal anders'. Wie gewünscht erhalten Sie hier Ihre Rechnung:`,
            50,
            305,
            { width: 500 }
        )
        .moveDown();

    position = generateInvoiceTable(doc, data, 345);

    doc.font("Helvetica")
        .fontSize(8)
        .text(
            "Zahlungsbedingungen: Der Rechnungsbetrag ist innerhalb von 14 Tagen ohne Abzüge ab Rechnungseingang fällig. Gemäß § 19 UStG erheben wir keine Umsatzsteuer und weisen diese folglich auch nicht aus. Die Preise sind Endpreise.",
            50,
            position,
            { width: 500 }
        )
        .moveDown();

    doc.fontSize(10)
        .text(
            `Bitte überweisen Sie den fälligen Betrag innerhalb von 14 Tagen ab Rechnungsdatum auf das folgende Konto:`,
            50,
            position + 40,
            { width: 500 }
        )
        .moveDown();

    position += 65;

    doc.text(`Empfängerin: Kristin Maurach`, 70, position, {
        width: 500,
        oblique: true,
    })
        .text(`Bank: Holvi Payment Services`, 70, position + 12, {
            width: 500,
            oblique: true,
        })
        .text(`IBAN: DE40 1001 7997 3020 6852 06`, 70, position + 24, {
            width: 500,
            oblique: true,
        })
        .text(`BIC: HOLVDEB1`, 70, position + 36, {
            width: 500,
            oblique: true,
        })
        .text(
            `Verwendungszweck: ${invoiceNo} / ${data.billingAddress.company}`,
            70,
            position + 48,
            {
                width: 500,
                oblique: true,
            }
        )
        .moveDown();

    position += 75;

    doc.text(
        "Sobald Ihre Zahlung bei uns eingegangen ist, veröffentlichen wir Ihre Stellenanzeige und geben Ihnen noch einmal Bescheid. Anschließend haben Sie weiterhin die Möglichkeit, Ihre Stellenanzeige wie gewohnt selbst zu bearbeiten, offline zu nehmen oder zu löschen. Für Fragen und Anregungen stehe ich Ihnen jederzeit gern zur Verfügung.",
        50,
        position,
        { width: 500 }
    ).moveDown();

    position += 65;

    doc.text("Mit freundlichen Grüßen", 50, position)
        // .image(
        //     __dirname + "/../invoices/" + "KMaurach_signature.png",
        //     50,
        //     position + 15,
        //     {
        //         height: 45,
        //         align: "left",
        //     }
        // )
        .text("Kristin Maurach", 50, position + 35)
        .moveDown();
}

function generateInvoiceTable(doc, data, position) {
    let invoiceTableTop = position;

    doc.font("Helvetica-Bold").fontSize(10);

    generateTableRow(
        doc,
        invoiceTableTop,
        "Pos.",
        "Bezeichnung",
        "Menge",
        "Einzelpreis",
        "Gesamtpreis"
    );

    doc.font("Helvetica");

    generateHr(doc, invoiceTableTop + 15);

    generateTableRow(
        doc,
        invoiceTableTop + 25,
        "1",
        `Veröffentlichung Stellenanzeige`,
        "1",
        `${((parseInt(data.amount) * (1 - data.discount)) / 100)
            .toFixed(2)
            .toString()
            .replace(".", ",")}€`,
        `${((parseInt(data.amount) * (1 - data.discount)) / 100)
            .toFixed(2)
            .toString()
            .replace(".", ",")}€`
    );

    generateTableRow(
        doc,
        invoiceTableTop + 45,
        "2",
        `Bearbeitungsgebühr - separate Rechnungsausstellung`,
        "1",
        `5,00€`,
        `5,00€`
    );

    generateHr(doc, invoiceTableTop + 75);

    doc.font("Helvetica-Bold");

    generateTableRow(
        doc,
        invoiceTableTop + 85,
        "",
        `Rechnungsbetrag`,
        "",
        ``,
        `${((parseInt(data.amount) * (1 - data.discount)) / 100 + 5)
            .toFixed(2)
            .toString()
            .replace(".", ",")}€`
    );

    return invoiceTableTop + 110;
}

function generateTableRow(
    doc,
    y,
    position,
    description,
    units,
    pricePerUnit,
    lineTotal
) {
    doc.text(position, 50, y, { width: 30 })
        .text(description, 80, y, { width: 240 })
        .text(units, 330, y, { width: 40, align: "right" })
        .text(pricePerUnit, 380, y, { width: 60, align: "right" })
        .text(lineTotal, 450, y, { align: "right" })
        .moveDown();
}

function generateHr(doc, y, color = "#222222", lineWidth = 1) {
    doc.strokeColor(color)
        .lineWidth(lineWidth)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke()
        .moveDown();
}

function generateFooter(doc) {
    let position = 780;
    doc.fontSize(8)
        .fillColor("#888888")
        .text("Kristin Maurach", 50, position)
        .text("Wellbergstraße 62", 50, position + 10)
        .text("49809 Lingen (Ems)", 50, position + 20)
        .text("kontakt@mfa-mal-anders.de", 50, position + 35)
        .moveDown();

    doc.fontSize(8)
        .fillColor("#888888")
        .text("Holvi Payment Services", 400, position)
        .text("IBAN: DE40 1001 7997 3020 6852 06", 400, position + 10)
        .text("BIC: HOLVDEB1", 400, position + 20)
        .text("Steuernummer: 32/437/01653", 400, position + 30)
        .moveDown();
}
