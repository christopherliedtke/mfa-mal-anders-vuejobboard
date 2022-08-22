module.exports = [
  {
    id: "1",
    name: "Basis",
    stripePrice: process.env.STRIPE_PRICE_ID_BASIS,
    duration: 60, // !legacy
    price: 14900, // !legacy
    refreshFrequency: 0, // !legacy
    primary: "primary",
    accent: "light-shade",
    productFeatures: [
      {
        html: 'Stellenanzeige für <strong class="text-secondary">60 Tage</strong> online',
      },
      {
        html: 'Integration <strong class="text-secondary">Logo & Titelbild</strong> in Stellenanzeige auf <strong class="italic text-primary">MFA mal anders</strong> für individuelles Branding',
      },
      {
        html: 'Optimierung für <strong class="text-secondary">Google Jobs</strong> &ndash; Ihre Anzeige in den organischen Suchergebnissen von Google',
      },
      {
        html: 'Einmaliger Versand Ihrer Stellenanzeige in unserem <strong class="text-secondary" >wöchentlichen Job-Newsletter</strong>',
      },
      {
        html: '<strong class="text-secondary">Zugriff auf</strong> qualifiziertes Fachpersonal aus unseren <a href="/stellengesuche" target="_blank" class="text-secondary" ><strong>Stellengesuchen</strong></a>',
      },
    ],
  },
  {
    id: "2",
    name: "Standard",
    stripePrice: process.env.STRIPE_PRICE_ID_STANDARD,
    duration: 90, // !legacy
    price: 19900, // !legacy
    refreshFrequency: 14, // !legacy
    primary: "light",
    accent: "primary",
    badge: "beliebt",
    badgeBg: "secondary",
    productFeatures: [
      { html: "<strong>Basis Features</strong>" },
      {
        html: 'Stellenanzeige für <strong class="text-secondary">90 Tage</strong> online',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Datumsupdate alle 14 Tage</strong> &ndash; Ihre Stellenanzeige rutscht nach oben',
        icon: "plus-circle",
      },
      {
        html: 'Wiederholter Versand Ihrer Stellenanzeige in unserem <strong class="text-secondary" >wöchentlichen Job-Newsletter alle 14 Tage</strong>',
        icon: "plus-circle",
      },
      {
        html: 'Social Boost durch Veröffentlichung Ihrer Stellenanzeige <strong class="text-secondary">auf unserem Facebook-Kanal sowie in speziellen Facebook-Gruppen</strong> für MFA & ZFA',
        icon: "plus-circle",
      },
    ],
  },
  {
    id: "3",
    name: "Professional",
    stripePrice: process.env.STRIPE_PRICE_ID_PROFESSIONAL,
    duration: 90, // !legacy
    price: 59900, // !legacy
    refreshFrequency: 7, // !legacy
    primary: "light",
    accent: "secondary",
    productFeatures: [
      {
        html: "<strong>Basis & Standard Features</strong>",
      },
      {
        html: '<strong class="text-secondary">Google Ads & Social Media Kampagne inkl. 200€ Start-Budget</strong> &ndash; Ihre Stelle als Werbeanzeige in den Google Suchergebnissen und auf Facebook & Instagram <strong class="text-secondary">speziell für Ihren Standort</strong>',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Persönlicher Ansprechpartner</strong> mit Tipps zur Optimierung Ihrer Stellenanzeige',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Datumsupdate alle 7 Tage</strong> &ndash; Ihre Stellenanzeige rutscht nach oben',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Farbliche Hervorhebung</strong> Ihrer Stellenanzeige in unserer Stellenbörse',
        icon: "plus-circle",
      },
      {
        html: 'Wiederholter Versand Ihrer Stellenanzeige in unserem <strong class="text-secondary">wöchentlichen Job-Newsletter alle 7 Tage</strong>',
        icon: "plus-circle",
      },
      {
        html: 'Optionale <strong class="text-secondary">Einbindung eines vorhandenen Image Videos</strong> in Ihre Stellenanzeige',
        icon: "plus-circle",
      },
    ],
  },
];
