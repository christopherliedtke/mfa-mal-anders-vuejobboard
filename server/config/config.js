module.exports = {
  website: {
    name: "MFA mal anders",
    contactEmail: "kontakt@mfa-mal-anders.de",
    emailFrom: "MFA mal anders",
    newsletterSuccessPath: "/newsletter/subscription-successful",
    newsletterUnsubscribeSuccessPath: "/newsletter/unsubscribed-successful",
  },
  social: {
    fb: {
      path: "MFAmalanders",
    },
    ig: {
      path: "mfa.mal.anders",
    },
  },
  payment: {
    currency: "eur",
    // tax: 0,
    // paymentExpirationDays: 60,
    // minPricePerJob: 3900,
    // refreshFrequencies: [
    //   {
    //     amount: 15000,
    //     refreshAfterDays: 14,
    //   },
    // ],
    pricingPackages: [
      {
        name: "Basis",
        price: 14900,
        duration: 60,
        refreshFrequency: 0,
      },
      {
        name: "Standard",
        price: 19900,
        duration: 90,
        refreshFrequency: 14,
      },
      {
        name: "Professional",
        price: 59900,
        duration: 90,
        refreshFrequency: 7,
      },
    ],
  },
  invoice: {
    sender: getInvoiceSender,
    // sender: {
    //   company: "MFA mal anders - Kristin Maurach & Christopher Liedtke GbR",
    //   name: "Kristin Maurach",
    //   address: {
    //     street: "Am Bauernwäldchen 38",
    //     zipCode: "12559",
    //     location: "Berlin",
    //   },
    //   email: "kontakt@mfa-mal-anders.de",
    //   taxNum: "36/420/00195",
    // },
    // senderOld: {
    //   company: "Kristin Maurach Rekruiting",
    //   name: "Kristin Maurach",
    //   address: {
    //     street: "Wellbergstraße 62",
    //     zipCode: "49809",
    //     location: "Lingen (Ems)",
    //   },
    //   email: "kontakt@mfa-mal-anders.de",
    //   taxNum: "32/437/01653",
    // },
    // bankAccount: {
    //   receiver: "MFA mal anders - Kristin Maurach & Christopher Liedtke GbR",
    //   bank: "solarisBank AG",
    //   iban: "DE43 1101 0100 2124 2828 90",
    //   bic: "SOBKDEBBXXX",
    // },
    // bankAccountOld: {
    //   receiver: "Kristin Maurach Rekruiting",
    //   bank: "Holvi Payment Services",
    //   iban: "DE40 1001 7997 3020 6852 06",
    //   bic: "HOLVDEB1",
    // },
    // changeDate: 1618577393097,
    feeFix: 500,
    feeVar: 0,
  },
  stripe: {
    paymentMethods: ["card", "giropay"],
    feeFix: 25,
    feeVar: 0.014,
  },
  redirect: {
    active: true,
  },
  sitemap: {
    active: true,
    interval: "0 0 0 * * *",
    cmsUrl: "https://wordpress.mfa-mal-anders.de/graphql",
  },
  prerender: {
    userAgents: [
      // "googlebot",
      "Yahoo! Slurp",
      // "bingbot",
      "yandex",
      "baiduspider",
      "facebookexternalhit",
      "twitterbot",
      "rogerbot",
      "linkedinbot",
      "embedly",
      "quora link preview",
      "showyoubot",
      "outbrain",
      "pinterest/0.",
      "developers.google.com/+/web/snippet",
      "slackbot",
      "vkShare",
      "W3C_Validator",
      "redditbot",
      "Applebot",
      "WhatsApp",
      "flipboard",
      "tumblr",
      "bitlybot",
      "SkypeUriPreview",
      "nuzzel",
      "Discordbot",
      // "Google Page Speed",
      "Qwantify",
      "pinterestbot",
      "Bitrix link preview",
      "XING-contenttabreceiver",
      // "Chrome-Lighthouse",
    ],
  },
  googleIndexing: {
    active: true,
    pathPrefix: "/stellenangebote/job/",
  },
  facebook: {
    autoPost: false,
  },
  newsletter: {
    active: true,
    interval: "0 0 7 * * 0",
    prodInterval: "0 0 18 * * 0",
  },
  unpublishedJobsReminder: {
    active: true,
    afterDays: 4,
    interval: "0 0 17 * * *",
    prodInterval: "0 0 17 * * 1-5",
  },
  refreshJobs: {
    active: true,
    interval: "0 0 0 * * *",
  },
  unpublishJobs: {
    active: true,
    interval: "0 0 0 * * *",
  },
};

function getInvoiceSender(date = new Date()) {
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
}

function getTaxRate(date = new Date()) {
  return new Date(date).getTime() < new Date("2022-01-01 00:00:00").getTime()
    ? 0
    : 0.19;
}
