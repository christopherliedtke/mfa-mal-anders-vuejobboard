<template>
  <div>
    <div class="title">
      <h1>Fortbildung &ndash; {{ training.title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <b-container class="py-4 py-lg-5">
      <Training :training="training" />
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
  import Training from "@/components/ui/Training.vue";
  export default {
    name: "CareerFortWeiterbildungCalendarTraining",
    components: {
      Training
    },
    data() {
      return {
        training: {},
        error: false,
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
    },
    async created() {
      await this.getTraining();
    },
    methods: {
      async getTraining() {
        //
        try {
          const training = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                    publicTraining(_id: "${this.$route.params.id}") {
                        _id
                        title
                        desc
                        excerpt
                        company
                        logoUrl
                        type
                        remote
                        startAnytime
                        startAt
                        endAt
                        location
                        duration
                        effort
                        cost
                        extUrl
                    }
                }
            `
            }
          });

          if (training.data.errors) {
            throw new Error("Fortbildungen konnten nicht geladen werden!");
          }

          //   this.trainings = [];
          this.training = training.data.data.publicTraining;
        } catch (err) {
          this.error = true;
        }
      }
    }
  };
</script>

<style></style>
