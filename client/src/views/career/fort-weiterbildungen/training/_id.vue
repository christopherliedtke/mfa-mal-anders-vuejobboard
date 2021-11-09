<template>
  <div>
    <div class="title">
      <h1>Fortbildung &ndash; {{ training ? training.title : "" }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <div class="container py-4 py-lg-5">
      <Training v-if="training" :training="training" />
      <span v-else class="h5"
        >Fortbildung konnte nicht gefunden/geladen werden.</span
      >
      <ToJobboardBanner v-if="training" class="mt-5" />

      <div class="mt-5">
        <h2>
          <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
            >Fort- und Weiterbildungen aus unserer Übersicht</b-link
          >
        </h2>
        <p>
          Du bist noch nicht sicher, welche Fort- oder Weiterbildung die
          richtige für Dich ist? Hier eine Auswahl aus unserer
          <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
            >Übersicht an Fort- und Weiterbildungen für Medizinische und
            Zahnmedizinische Fachangestellte (MFA & ZFA)</b-link
          >.
        </p>

        <RandomTrainingsContainer v-if="training" />
      </div>
    </div>

    <Head
      :title="training ? training.title : ' | Fortbildungskatalog'"
      :desc="training ? training.excerpt : ''"
      img="/img/MfaMalAnders_Fortbildungskatalog_Banner_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import Training from "@/components/ui/Training.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  export default {
    name: "CareerFortWeiterbildungCatalogueTraining",
    components: {
      Training,
      ToJobboardBanner,
      RandomTrainingsContainer
    },
    data() {
      return {
        training: {},
        error: false,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildung",
            to: "/karriere/fort-und-weiterbildung"
          },
          {
            text: "Fortbildungskatalog",
            to: "/karriere/fort-und-weiterbildung/fortbildungskatalog"
          },
          {
            text: "Fortbildung"
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
                      "position": 4,
                      "name": "Fort- & Weiterbildung",
                      "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"
                  },{
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Fortbildungskatalog",
                      "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog"
                  },{
                      "@type": "ListItem",
                      "position": 5,
                      "name": "Fortbildung",
                      "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/fortbildungskatalog/${this.$route.params.id}/${this.$route.params.slug}"
                  }]
              }`
          },
          {
            rel: "canonical",
            href: `${this.$config.website.url}/karriere/fort-und-weiterbildung/fortbildungskatalog/${this.$route.params.id}/${this.$route.params.slug}`,
            id: "canonical"
          }
        ]
      };
    },
    async created() {
      await this.getTraining();
    },
    methods: {
      async getTraining() {
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
          this.training = null;
          this.error = true;
        }
      }
    }
  };
</script>

<style></style>
