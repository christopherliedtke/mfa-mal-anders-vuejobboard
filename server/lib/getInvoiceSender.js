const getTaxRate = require("./getTaxRate");

const getInvoiceSender = (date = new Date()) => {
  let sender;

  if (new Date(date).getTime() < new Date("2021-04-17 00:00:00").getTime()) {
    sender = {
      company: "Kristin Maurach Rekruiting",
      name: "Kristin Maurach",
      address: {
        street: "Wellbergstraße 62",
        zipCode: "49809",
        location: "Lingen (Ems)",
      },
      email: "kontakt@mfa-mal-anders.de",
      taxNum: "32/437/01653",
      taxRate: getTaxRate(date),
      bankAccount: {
        receiver: "Kristin Maurach Rekruiting",
        bank: "Holvi Payment Services",
        iban: "DE40 1001 7997 3020 6852 06",
        bic: "HOLVDEB1",
      },
    };
  } else {
    sender = {
      company: "MFA mal anders - Kristin Maurach & Christopher Liedtke GbR",
      name: "Kristin Maurach",
      address: {
        street: "Am Bauernwäldchen 38",
        zipCode: "12559",
        location: "Berlin",
      },
      email: "kontakt@mfa-mal-anders.de",
      taxNum: "36/420/00195",
      taxRate: getTaxRate(date),
      bankAccount: {
        receiver: "MFA mal anders - Kristin Maurach & Christopher Liedtke GbR",
        bank: "solarisBank AG",
        iban: "DE43 1101 0100 2124 2828 90",
        bic: "SOBKDEBBXXX",
      },
    };
  }

  return sender;
};

module.exports = getInvoiceSender;
