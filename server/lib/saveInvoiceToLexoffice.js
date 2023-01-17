const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const util = require("util");

const { User } = require("../database/models/user");

const saveInvoiceToLexoffice = async (invoice, filePath) => {
  if (process.env.NODE_ENV != "production") {
    return;
  }

  try {
    // get user from stripe customer id
    const user = await User.findOne({ stripeCustomerId: invoice.customer });

    let lexofficeCustomer = null;

    // create voucher in lexoffice
    const voucher = {
      type: "salesinvoice",
      voucherNumber: invoice.number,
      voucherDate: new Date(invoice.status_transitions.finalized_at * 1000)
        .toISOString()
        .split("T")[0],
      dueDate: new Date(invoice.due_date * 1000).toISOString().split("T")[0],
      totalGrossAmount: (invoice.total / 100).toFixed(2),
      totalTaxAmount: (invoice.tax / 100).toFixed(2),
      taxType: "gross",
      voucherItems: invoice.lines.data.map(line => {
        return {
          amount: (
            line.amount / 100 +
            line.tax_amounts[0].amount / 100
          ).toFixed(2),
          taxAmount: (line.tax_amounts[0].amount / 100).toFixed(2),
          taxRatePercent: 19,
          categoryId: "8f8664a1-fd86-11e1-a21f-0800200c9a66",
        };
      }),
      version: 0,
    };

    if (user) {
      lexofficeCustomer = {
        roles: {
          customer: {},
        },
        company: {
          name: invoice.customer_name,
        },
        addresses: {
          billing: [
            {
              street: invoice.customer_address.line1,
              zip: invoice.customer_address.postal_code,
              city: invoice.customer_address.city,
              countryCode: invoice.customer_address.country,
            },
          ],
        },
        emailAddresses: {
          business: [invoice.customer_email],
        },
        note: `stripeCustomerId: ${invoice.customer}`,
      };

      if (user.lexofficeCustomerId) {
        // retrieve lexoffice customer
        const configRetrieveCustomer = {
          method: "get",
          url:
            process.env.LEXOFFICE_RESOURCE_URL +
            "/contacts/" +
            user.lexofficeCustomerId,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.LEXOFFICE_API_KEY}`,
          },
        };

        const currentLexofficeCustomer = await axios.default(
          configRetrieveCustomer
        );

        console.log(
          "currentLexofficeCustomer: ",
          currentLexofficeCustomer.data
        );

        // set lexoffice customer version
        lexofficeCustomer.version = currentLexofficeCustomer.data.version;

        // update lexoffice customer
        const configUpdateCustomer = {
          method: "put",
          url:
            process.env.LEXOFFICE_RESOURCE_URL +
            "/contacts/" +
            user.lexofficeCustomerId,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.LEXOFFICE_API_KEY}`,
          },
          data: JSON.stringify(lexofficeCustomer),
        };

        const updatedLexofficeCustomer = await axios(configUpdateCustomer);

        console.info(
          "updatedLexofficeCustomer: ",
          updatedLexofficeCustomer.data
        );

        voucher.contactId = user.lexofficeCustomerId;
      } else {
        // create lexoffice customer
        lexofficeCustomer.version = 0;

        const config = {
          method: "post",
          url: process.env.LEXOFFICE_RESOURCE_URL + "/contacts",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.LEXOFFICE_API_KEY}`,
          },
          data: JSON.stringify(lexofficeCustomer),
        };

        const newLexofficeCustomer = await axios(config);
        console.info("newLexofficeCustomer: ", newLexofficeCustomer.data);

        // attach lexofficeCustomerID to user
        await User.findOneAndUpdate(
          { _id: user._id },
          { lexofficeCustomerId: newLexofficeCustomer.data.id }
        );

        // attach lexoffice contactId to voucher
        voucher.contactId = newLexofficeCustomer.data.id;
      }
    } else {
      // set lexoffice customer to Sammelkunde
      voucher.useCollectiveContact = true;
    }

    // add voucher to lexoffice
    const configVoucherUpload = {
      method: "post",
      url: process.env.LEXOFFICE_RESOURCE_URL + "/vouchers",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.LEXOFFICE_API_KEY}`,
      },
      data: JSON.stringify(voucher),
    };

    const newVoucher = await axios(configVoucherUpload);

    // attach file to voucher in lexoffice
    const data = new FormData();
    data.append("file", fs.createReadStream(filePath));

    const configFileUpload = {
      method: "post",
      url:
        process.env.LEXOFFICE_RESOURCE_URL +
        "/vouchers/" +
        newVoucher.data.id +
        "/files",
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${process.env.LEXOFFICE_API_KEY}`,
        ...data.getHeaders(),
      },
      data: data,
    };

    const newLexofficeVoucher = await axios(configFileUpload);
    console.info("newLexofficeVoucher: ", newLexofficeVoucher.data);
  } catch (error) {
    console.error(
      `Error in saveInvoiceToLexoffice: `,
      util.inspect(error.response.data, false, null, true)
    );
  }
};

module.exports = saveInvoiceToLexoffice;
