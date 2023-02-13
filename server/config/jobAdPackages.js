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
        html: 'Integration <strong class="text-secondary">Logo & Titelbild</strong> für ein <strong class="text-secondary">individuelles Design</strong>',
      },
      {
        html: '<strong class="text-secondary">Optimierung für Google Jobs</strong> &ndash; Steigern Sie Ihre Sichtbarkeit in der Google-Suche',
      },
      {
        html: '<strong class="text-secondary" >Einmaliger Versand</strong> Ihrer Stellenanzeige in unserem <strong class="text-secondary" >wöchentlichen Job-Newsletter</strong>',
      },
      {
        html: '<strong class="text-secondary">Direkter Kontakt</strong> zu qualifizierten MFA & ZFA aus unseren <a href="/stellengesuche" target="_blank" class="text-secondary" ><strong>Stellengesuchen</strong></a>',
      },
    ],
  },
  {
    id: "2",
    name: "Standard",
    stripePrice: process.env.STRIPE_PRICE_ID_STANDARD,
    shareByExternal: true,
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
        html: '<strong class="text-secondary">Erhöhte Sichtbarkeit mit Datumsupdate alle 14 Tage</strong> &ndash; Ihre Stellenanzeige rutscht nach oben',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Wiederholter Versand</strong> Ihrer Stellenanzeige in unserem <strong class="text-secondary" >wöchentlichen Job-Newsletter alle 14 Tage</strong>',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Mehr Reichweite mit Social Boost</strong> – Veröffentlichung Ihrer Stellenanzeige auf unserem <strong class="text-secondary">Facebook-Kanal sowie in speziellen Facebook-Gruppen</strong> für MFA & ZFA',
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
        html: '<strong class="text-light bg-secondary">Maximale Reichweite</strong> mit<br><strong class="text-light bg-secondary">Google Ads & Social Media Kampagne inkl. 200€ Start-Budget</strong> &ndash; Ihre Stelle als professionelle Werbeanzeige in den Google Suchergebnissen und auf Facebook & Instagram <strong class="text-light bg-secondary">speziell für Ihren Standort</strong>',
        icon: "plus-circle",
        more: true,
      },
      {
        html: '<strong class="text-secondary">Persönlicher Ansprechpartner</strong> &ndash; Profitieren Sie von einem persönlichen Ansprechpartner, der Ihnen Tipps zur Optimierung Ihrer Stellenanzeige gibt und Sie bei jedem Schritt unterstützt',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Farbliche Hervorhebung</strong> &ndash; Stechen Sie mit Ihrer Stellenanzeige in unserer Stellenbörse aus der Masse hervor',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Maximale Sichtbarkeit mit Datumsupdate alle 7 Tage</strong> &ndash; Ihre Stellenanzeige rutscht nach oben',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Wiederholter Versand</strong> Ihrer Stellenanzeige in unserem <strong class="text-secondary">wöchentlichen Job-Newsletter alle 7 Tage</strong>',
        icon: "plus-circle",
      },
      {
        html: 'Optionale <strong class="text-secondary">Einbindung eines vorhandenen Image Videos</strong> in Ihre Stellenanzeige',
        icon: "plus-circle",
      },
    ],
  },
];
