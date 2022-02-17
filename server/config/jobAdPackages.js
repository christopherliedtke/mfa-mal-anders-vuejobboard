module.exports = [
  {
    id: "1",
    name: "Basis",
    stripePrice: process.env.STRIPE_PRICE_ID_BASIS,
    primary: "primary",
    accent: "light-shade",
    productFeatures: [
      {
        html: 'Stellenanzeige für <span class="text-secondary bold">60 Tage</span> online',
      },
      {
        html: 'Integration <span class="text-secondary bold">Logo & Titelbild</span> in Stellenanzeige auf <span class="italic text-primary">MFA mal anders</span> für individuelles Branding',
      },
      {
        html: 'Listung bei <span class="text-secondary bold">Google Jobs</span> &ndash; Ihre Anzeige in den organischen Suchergebnissen von Google',
      },
      {
        html: 'Einmaliger Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span>',
      },
      {
        html: 'Option auf Kontaktaufnahme zu qualifiziertem Fachpersonal aus unseren <a href="/stellengesuche" target="_blank" class="text-secondary bold" >Stellengesuchen</a>',
      },
    ],
  },
  {
    id: "2",
    name: "Standard",
    stripePrice: process.env.STRIPE_PRICE_ID_STANDARD,
    primary: "light",
    accent: "primary",
    badge: "beliebt",
    badgeBg: "secondary",
    productFeatures: [
      { html: '<span class="bold">Basis Features</span>' },
      {
        html: 'Stellenanzeige für <span class="text-secondary bold">90 Tage</span> online',
        icon: "plus-circle",
      },
      {
        html: '<span class="text-secondary bold">Datumsupdate alle 14 Tage</span> &ndash; Ihre Stellenanzeige rutscht nach oben',
        icon: "plus-circle",
      },
      {
        html: 'Wiederholter Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span> alle 14 Tage',
        icon: "plus-circle",
      },
      {
        html: 'Social Boost durch Veröffentlichung Ihrer Stellenanzeige <span class="text-secondary bold">auf unserem Facebook-Kanal sowie in speziellen Facebook-Gruppen</span> für MFA & ZFA',
        icon: "plus-circle",
      },
    ],
  },
  {
    id: "3",
    name: "Professional",
    stripePrice: process.env.STRIPE_PRICE_ID_PROFESSIONAL,
    primary: "light",
    accent: "secondary",
    productFeatures: [
      {
        html: '<span class="bold">Basis & Standard Features</span>',
      },
      {
        html: '<span class="text-secondary bold">Persönliche Beratung</span> zur Erstellung, Veröffentlichung und Optimierung Ihrer Stellenanzeige',
        icon: "plus-circle",
      },
      {
        html: '<span class="text-secondary bold">Datumsupdate alle 7 Tage</span> &ndash; Ihre Stellenanzeige rutscht nach oben',
        icon: "plus-circle",
      },
      {
        html: '<span class="text-secondary bold">Farbliche Hervorhebung</span> Ihrer Stellenanzeige in der Stellenübersicht',
        icon: "plus-circle",
      },
      {
        html: 'Wiederholter Versand Ihrer Stellenanzeige in unserem <span class="text-secondary bold" >wöchentlichen Job-Newsletter</span> alle 7 Tage',
        icon: "plus-circle",
      },
      {
        html: 'Optional &ndash; Vereinbarung zusätzl. Marketingbudget zum Schalten von <span class="text-secondary bold">Google & Social Media Werbeanzeigen</span> zur Reichweitenmaximierung',
        icon: "plus-circle",
      },
    ],
  },
];
