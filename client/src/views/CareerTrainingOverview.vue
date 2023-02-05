<template>
  <div>
    <div class="title">
      <h1>
        <strong>Fort- und Weiterbildungen</strong> <br />
        <span class="h4">Übersicht für MFA & ZFA</span>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <NavTrainings />
        </div>
        <div class="col-12 col-md-8 mb-5">
          <TrainingListRandom :number="100" class="" />
          <BannerTrainingCatalogueLarge />
        </div>
      </div>
    </div>
    <Head
      title="Fort- und Weiterbildung – Übersicht für MFA & ZFA"
      :desc="
        `Fortbildungen und Weiterbildungen für Zahnmedizinische | Medizinische Fachangestellte (MFA / ZFA) im Gesundheitswesen || Karriere | Gehalt ${new Date().getFullYear()} | Stellenangebote`
      "
      img="/img/Banner_Weiterbildungsdschungel_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import NavTrainings from "@/components/NavTrainings.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import BannerTrainingCatalogueLarge from "@/components/BannerTrainingCatalogueLarge.vue";
  export default {
    name: "CareerTrainingOverview",
    components: {
      NavTrainings,
      TrainingListRandom,
      BannerTrainingCatalogueLarge
    },
    data() {
      return {
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildung",
            to: "/karriere/fort-und-weiterbildung"
          },
          {
            text: "Überblick für MFA & ZFA",
            to: "/karriere/fort-und-weiterbildung/ueberblick"
          }
        ],
        snippet: [
          {
            id: "breadcrumbs",
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
                  "name": "Fort- und Weiterbildung",
                  "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"
              },{
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Überblick für MFA & ZFA",
                  "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick"
              }]
            }`
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${process.env.VUE_APP_WEBSITE_URL}/karriere/fort-und-weiterbildung`
          }
        ]
      };
    }
  };
</script>
