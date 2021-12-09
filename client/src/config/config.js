module.exports = {
  website: {
    name: "MFA mal anders",
    url: "https://www.mfa-mal-anders.de",
    contactEmail: "kontakt@mfa-mal-anders.de"
  },
  cms: {
    url: "https://wordpress.mfa-mal-anders.de/graphql",
    active: true,
    postsPath: "/blog",
    postsPageTitle: "Blog"
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
    path: "mfa.mal.anders/"
  },
  ga: {
    active: true,
    trackingCode: "UA-138281267-3",
    anonymizeIP: true,
    storage: "none"
  },
  maps: {
    defaultCenter: {
      lat: 51.241,
      lng: 10.528
    },
    lang: "de"
  },
  pricingPackages: [
    {
      name: "Basis",
      price: 8900,
      duration: 60,
      desc: [
        {
          html:
            'Stellenanzeige für <span class="text-secondary bold">60 Tage</span> online'
        },
        {
          html:
            'Integration <span class="text-secondary bold">Logo & Titelbild</span> in Stellenanzeige für individuelles Branding'
        },
        {
          html:
            'Veröffentlichung im <span class="text-secondary bold">MFA mal anders</span> Stellenportal'
        },
        {
          html:
            'Listung bei <span class="text-secondary bold">Google Jobs</span> &ndash; Ihre Anzeige in den organischen Suchergebnissen von Google'
        },
        {
          html:
            'Einmaliger Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span>'
        }
      ],
      primary: "primary",
      accent: "light-shade"
    },
    {
      name: "Standard",
      price: 14900,
      duration: 90,
      badge: "beliebt",
      desc: [
        { html: '<span class="bold">Basis Features</span>' },
        {
          html:
            'Stellenanzeige für <span class="text-secondary bold">90 Tage</span> online',
          icon: "plus-circle"
        },
        {
          html:
            '<span class="text-secondary bold">Datumsupdate alle 14 Tage</span> &ndash; Ihre Stellenanzeige rutscht nach oben',
          icon: "plus-circle"
        },
        {
          html:
            'Wiederholter Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span> alle 14 Tage',
          icon: "plus-circle"
        },
        {
          html:
            'Social Boost durch Veröffentlichung Ihrer Stellenanzeige <span class="text-secondary bold">auf unserem Facebook-Kanal sowie in speziellen Facebook-Gruppen</span> für MFA & ZFA',
          icon: "plus-circle"
        }
      ],
      primary: "light",
      accent: "primary",
      badgeBg: "secondary"
    },
    {
      name: "Professional",
      price: 45900,
      duration: 90,
      desc: [
        {
          html: '<span class="bold">Basis & Standard Features</span>'
        },
        {
          html:
            '<span class="text-secondary bold">Persönliche Beratung</span> zur Erstellung, Veröffentlichung und Optimierung Ihrer Stellenanzeige',
          icon: "plus-circle"
        },
        {
          html:
            '<span class="text-secondary bold">Datumsupdate alle 7 Tage</span> &ndash; Ihre Stellenanzeige rutscht nach oben',
          icon: "plus-circle"
        },
        {
          html:
            '<span class="text-secondary bold">Farbliche Hervorhebung</span> Ihrer Stellenanzeige in der Stellenübersicht',
          icon: "plus-circle"
        },
        {
          html:
            'Wiederholter Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span> alle 7 Tage',
          icon: "plus-circle"
        },
        {
          html:
            'Optional &ndash; Vereinbarung zusätzl. Marketingbudget zum Schalten von <span class="text-secondary bold">Google & Social Media Werbeanzeigen</span> zur Reichweitenmaximierung',
          icon: "plus-circle"
        }
      ],
      primary: "light",
      accent: "secondary"
    }
  ],
  payment: {
    currency: "EUR",
    minDuration: 60,
    tax:
      new Date().getTime() < new Date("2022-01-01 00:00:00").getTime()
        ? 0
        : 0.19
  }
};
