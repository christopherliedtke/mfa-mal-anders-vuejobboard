<template>
  <div>
    <div class="title">
      <!-- eslint-disable -->
      <h1>
        <strong>Fortbildung &ndash;
        <span v-html="training ? training.title : ''"></span></strong>
      </h1>
      <!-- eslint-enable -->
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <div class="container py-4 py-lg-5">
      <div v-if="error">
        <span class="h5"
          >Fortbildung konnte nicht gefunden/geladen werden.</span
        >
      </div>
      <TrainingCatalogueItem v-else-if="training" :training="training" />
      <TrainingCatalogueItemPlaceholder v-else />

      <BannerJobboard class="mt-5" />

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
            >Übersicht an Fort- und Weiterbildungen für Medizinische
            Fachangestellte | Zahnmedizinische Fachangestellte (MFA &
            ZFA)</b-link
          >.
        </p>

        <TrainingListRandom v-if="training" />
      </div>
    </div>

    <Head
      :title="training ? training.title : ' | Fortbildungskatalog'"
      :desc="training ? training.excerpt : ''"
      img="/img/MfaMalAnders_Fortbildungskatalog.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import TrainingCatalogueItem from "@/components/TrainingCatalogueItem.vue";
  import TrainingCatalogueItemPlaceholder from "@/components/TrainingCatalogueItemPlaceholder.vue";
  import BannerJobboard from "@/components/BannerJobboard.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  export default {
    name: "CareerTrainingCatalogueItem",
    components: {
      TrainingCatalogueItem,
      TrainingCatalogueItemPlaceholder,
      BannerJobboard,
      TrainingListRandom
    },
    data() {
      return {
        training: null,
        error: false,
        breadcrumbs: [
          { text: "Home", to: "/" },
          // { text: "Karriere", to: "/karriere" },
          // {
          //   text: "Fort- & Weiterbildung",
          //   to: "/karriere/fort-und-weiterbildung"
          // },
          {
            text: "Fortbildungskatalog",
            to: "/fortbildungskatalog"
          },
          {
            text: "Fortbildung"
          }
        ]
      };
    },
    computed: {
      snippet() {
        return [
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
                      "name": "Fortbildungskatalog",
                      "item": "https://www.mfa-mal-anders.de/fortbildungskatalog"
                  },{
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Fortbildung",
                      "item": "https://www.mfa-mal-anders.de/fortbildungskatalog/${this.$route.params.id}/${this.$route.params.slug}"
                  }]
              }`
          },
          this.training
            ? {
                id: "course",
                type: "application/ld+json",
                inner: `{
                  "@context": "http://schema.org",
                  "@type" : "Course",
                  "name": "${this.training.title}",
                  "description": "${this.training.excerpt}",
                  "provider": {
                    "@type": "Organization",
                    "name": "${this.training.company}"                  }
              }`
              }
            : "",
          {
            rel: "canonical",
            href: this.error
              ? `${this.$config.website.url}/404`
              : `${this.$config.website.url}/fortbildungskatalog/${
                  this.$route.params.id
                }/${this.training ? this.training.slug : ""}`,
            id: "canonical"
          }
        ];
      }
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
                        eventType
                        graduation
                        remote
                        startAnytime
                        startAt
                        endAt
                        location
                        duration
                        effort
                        cost
                        extUrl
                        slug
                    }
                }
            `
            }
          });

          if (training.data.errors) {
            throw new Error("Fortbildungen konnten nicht geladen werden!");
          }

          this.training = training.data.data.publicTraining;
        } catch (err) {
          this.training = null;
          this.error = true;
        }
      }
    }
  };
</script>
