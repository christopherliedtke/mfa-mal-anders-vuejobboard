module.exports = {
  website: {
    name: "MFA mal anders",
    url: "https://www.mfa-mal-anders.de",
    contactEmail: "kontakt@mfa-mal-anders.de",
    googleCustomSearchUrl: "https://cse.google.com/cse?cx=7f5c5e15bf2d73a5d"
  },
  cms: {
    url: "https://wordpress.mfa-mal-anders.de/graphql",
    active: true,
    postsPath: "/blog",
    postsPageTitle: "Blog"
  },
  externalJobs: {
    active: false
  },
  jobboardMap: {
    active: false
  },
  starredJobs: {
    active: true
  },
  fb: {
    appId: "509159293103491",
    path: "MFAmalanders"
  },
  twitter: {
    path: "MfaMalAnders"
  },
  ig: {
    path: "mfa.mal.anders"
  },
  ga: {
    active: true,
    trackingCode: "UA-138281267-3",
    anonymizeIP: true,
    storage: "none"
  },
  matomo: {
    host: "https://matomo.mfa-mal-anders.de",
    siteId: 1,
    domains: "*.mfa-mal-anders.de"
  },
  maps: {
    defaultCenter: {
      lat: 51.241,
      lng: 10.528
    },
    lang: "de"
  },
  payment: {
    minCost: 3900,
    mediumCost: 6500,
    largeCost: 12000,
    xLargeCost: 25000,
    maxCost: 30000,
    refreshCost: 15000,
    invoiceCost: 500,
    currency: "EUR",
    duration: 60
  }
};
