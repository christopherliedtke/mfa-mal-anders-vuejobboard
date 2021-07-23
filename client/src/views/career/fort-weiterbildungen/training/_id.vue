<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <b-container class="py-3 py-lg-5">
      TEst
    </b-container>

    <Head
      title="Fortbildungskalender für ArzthelferInnen – MFA & ZFA"
      :desc="
        `Fortbildungskalender für Medizinische & Zahnmedizinische Fachangestellte (MFA / ZFA) || Weiterbildungen | Online & Offline`
      "
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  export default {
    name: "CareerFortWeiterbildungCalendarTraining",
    data() {
      return {
        title: "",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fortbildungskalender",
            to: "/karriere/fortbildungskalender"
          },
          {
            text: "Fortbildung"
          }
        ],
        snippet: [
          {
            type: "application/ld+json",
            inner: `{
                "@context": "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "MFA mal anders",
                    "item": "https://www.mfa-mal-anders.de"
                },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Karriere",
                    "item": "https://www.mfa-mal-anders.de/karriere"
                },{
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Fortbildungskalender",
                    "item": "https://www.mfa-mal-anders.de/karriere/fortbildungskalender
                },{
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Fortbildung",
                    "item": "https://www.mfa-mal-anders.de/karriere/fortbildungskalender/${this.$route.params.id}
                }]
            }`
          }
        ]
      };
    }
  };
</script>

<style></style>
