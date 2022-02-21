module.exports = {
  website: {
    name: "MFA mal anders",
    // contactEmail: "kontakt@mfa-mal-anders.de",
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
  // payment: {
  //   // currency: "eur",
  //   // pricingPackages: [
  //   //   {
  //   //     name: "Basis",
  //   //     stripeProductId: "prod_L7VuawNfGaMriT",
  //   //     stripePriceId: "price_1KRGsSBqHbQO3NhwsxZ5H50X",
  //   //     price: 14900,
  //   //     duration: 60,
  //   //     refreshFrequency: 0,
  //   //     primary: "primary",
  //   //     accent: "light-shade",
  //   //     desc: [
  //   //       {
  //   //         html: 'Stellenanzeige für <span class="text-secondary bold">60 Tage</span> online',
  //   //       },
  //   //       {
  //   //         html: 'Integration <span class="text-secondary bold">Logo & Titelbild</span> in Stellenanzeige auf <span class="italic text-primary">MFA mal anders</span> für individuelles Branding',
  //   //       },
  //   //       {
  //   //         html: 'Listung bei <span class="text-secondary bold">Google Jobs</span> &ndash; Ihre Anzeige in den organischen Suchergebnissen von Google',
  //   //       },
  //   //       {
  //   //         html: 'Einmaliger Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span>',
  //   //       },
  //   //       {
  //   //         html: 'Option auf Kontaktaufnahme zu qualifiziertem Fachpersonal aus unseren <a href="/stellengesuche" target="_blank" class="text-secondary bold" >Stellengesuchen</a>',
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     name: "Standard",
  //   //     stripeProductId: "prod_L7WJ4NyiuoR6Bh",
  //   //     stripePriceId: "price_1KRHH7BqHbQO3Nhwup8i3Zv9",
  //   //     price: 19900,
  //   //     duration: 90,
  //   //     refreshFrequency: 14,
  //   //     primary: "light",
  //   //     accent: "primary",
  //   //     badge: "beliebt",
  //   //     badgeBg: "secondary",
  //   //     desc: [
  //   //       { html: '<span class="bold">Basis Features</span>' },
  //   //       {
  //   //         html: 'Stellenanzeige für <span class="text-secondary bold">90 Tage</span> online',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: '<span class="text-secondary bold">Datumsupdate alle 14 Tage</span> &ndash; Ihre Stellenanzeige rutscht nach oben',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: 'Wiederholter Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span> alle 14 Tage',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: 'Social Boost durch Veröffentlichung Ihrer Stellenanzeige <span class="text-secondary bold">auf unserem Facebook-Kanal sowie in speziellen Facebook-Gruppen</span> für MFA & ZFA',
  //   //         icon: "plus-circle",
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     name: "Professional",
  //   //     stripeProductId: "prod_L7WLaDtMk27gkx",
  //   //     stripePriceId: "price_1KRHIzBqHbQO3NhwWyMSu3mf",
  //   //     price: 59900,
  //   //     duration: 90,
  //   //     refreshFrequency: 7,
  //   //     primary: "light",
  //   //     accent: "secondary",
  //   //     desc: [
  //   //       {
  //   //         html: '<span class="bold">Basis & Standard Features</span>',
  //   //       },
  //   //       {
  //   //         html: '<span class="text-secondary bold">Persönliche Beratung</span> zur Erstellung, Veröffentlichung und Optimierung Ihrer Stellenanzeige',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: '<span class="text-secondary bold">Datumsupdate alle 7 Tage</span> &ndash; Ihre Stellenanzeige rutscht nach oben',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: '<span class="text-secondary bold">Farbliche Hervorhebung</span> Ihrer Stellenanzeige in der Stellenübersicht',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: 'Wiederholter Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span> alle 7 Tage',
  //   //         icon: "plus-circle",
  //   //       },
  //   //       {
  //   //         html: 'Optional &ndash; Vereinbarung zusätzl. Marketingbudget zum Schalten von <span class="text-secondary bold">Google & Social Media Werbeanzeigen</span> zur Reichweitenmaximierung',
  //   //         icon: "plus-circle",
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  // },
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
