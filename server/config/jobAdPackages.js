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
        html: '<strong class="text-secondary">60 Tage Online-Präsenz:</strong> Maximieren Sie Ihre Online-Sichtbarkeit für eine größere Zielgruppe',
      },
      {
        html: '<strong class="text-secondary">Individuelles Branding:</strong> Integrieren Sie Ihr Logo und Titelbild für ein professionelles Aussehen',
      },
      {
        html: '<strong class="text-secondary">Google Jobs-Optimierung:</strong> Steigern Sie Ihre Sichtbarkeit bei Google-Suchen',
      },
      {
        html: '<strong class="text-secondary" >Wöchentlicher Job-Newsletter:</strong> Versenden Sie Ihre Stellenanzeige einmalig an qualifizierte MFA & ZFA',
      },
      {
        html: '<strong class="text-secondary">Zugriff auf qualifiziertes Fachpersonal:</strong> Kontaktieren Sie MFA & ZFA aus unserer Datenbank <a href="/stellengesuche" target="_blank" class="text-secondary" ><strong>qualifizierter Stellengesuche</strong></a>',
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
        html: '<strong class="text-secondary">90 Tage Online-Sichtbarkeit:</strong> Vergrößern Sie Ihre Chancen, die perfekten BewerberInnen zu finden, durch 90 Tage Online-Präsenz Ihrer Stellenanzeige',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Regelmäßiges Datumsupdate:</strong> Bleiben Sie oben auf der Liste durch die <strong class="text-secondary" >14-tägige Aktualisierung</strong> Ihrer Stellenanzeige',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary" >Wöchentlicher Job-Newsletter:</strong> Verbreiten Sie Ihre Stelle weiter durch die <strong class="text-secondary" >14-tägige Veröffentlichung</strong> im Job-Newsletter',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Social Boost:</strong> Steigern Sie Ihre Online-Präsenz und erreichen Sie eine größere Zielgruppe durch die <strong class="text-secondary">Veröffentlichung auf unserem Facebook-Kanal und in speziellen Facebook-Gruppen</strong>',
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
        html: '<strong class="text-light bg-secondary">Maximale Reichweite:</strong><br><strong class="text-light bg-secondary">Google Ads & Social Media Kampagne inkl. 200€ Start-Budget</strong> &ndash; Ihre Stelle als professionelle Werbeanzeige in den Google Suchergebnissen und auf Facebook & Instagram <strong class="text-light bg-secondary">speziell für Ihren Standort</strong>',
        icon: "plus-circle",
        more: true,
      },
      {
        html: '<strong class="text-secondary">Persönlicher Ansprechpartner:</strong> Profitieren Sie von einem persönlichen Ansprechpartner, der Ihnen <strong class="text-secondary" >Tipps zur Optimierung Ihrer Stellenanzeige</strong> gibt und Sie bei jedem Schritt unterstützt',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Farbliche Hervorhebung</strong> Stechen Sie aus der Masse heraus, indem Ihre Stellenanzeige in unserer Stellenbörse farblich hervorgehoben wird',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Regelmäßiges Datumsupdate:</strong> Bleiben Sie immer oben auf der Liste durch die <strong class="text-secondary" >7-tägige Aktualisierung</strong> Ihrer Stellenanzeige',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary" >Wöchentlicher Job-Newsletter:</strong> Verbreiten Sie Ihre Stelle weiter durch die <strong class="text-secondary" >7-tägige Veröffentlichung</strong> im Job-Newsletter',
        icon: "plus-circle",
      },
      {
        html: '<strong class="text-secondary">Einbindung Image Video:</strong> Verleihen Sie Ihrer Stelle mit der optionalen Einbindung eines vorhandenen Image Videos eine besondere Dimension',
        icon: "plus-circle",
      },
    ],
  },
];
