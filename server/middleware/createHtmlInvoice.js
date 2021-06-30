const fs = require("fs");
const pdf = require("html-pdf");
const path = require("path");

const createHtmlInvoice = async (payment, pathToSave) => {
  const options = {
    format: "A4",
    orientation: "portrait",
    directory: pathToSave,
    border: {
      top: "0.5cm",
      right: "2.5cm",
      bottom: "0.5cm",
      left: "2.5cm",
    },
    // header: {
    //   height: "2.5cm",
    //   // contents: `<div>Test</div>`,
    // },
    // footer: {
    //   height: "3cm",
    //   // contents: `
    //   //   <div>
    //   //       <div style="text-align: center">Seite {{page}} / {{pages}}</div>
    //   //   </div>
    //   //   `,
    // },
    localUrlAccess: true,
    base: "file://" + path.join(pathToSave),
  };

  payment.invoiceNoLong =
    "RE-" +
    "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
    payment.invoiceNo.toString();

  const html = fs.readFileSync(
    path.join(pathToSave, "html/invoice.html"),
    "utf8"
  );

  try {
    pdf
      .create(html, options)
      .toFile(
        pathToSave + payment.invoiceNoLong + "_.pdf",
        function (err, res) {
          if (err) {
            console.log("err: ", err);
          }
          console.log("res.filename: ", res.filename);
        }
      );
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = createHtmlInvoice;
