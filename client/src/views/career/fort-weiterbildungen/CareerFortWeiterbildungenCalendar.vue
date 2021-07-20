<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <b-container class="py-3 py-lg-5">
      <b-row>
        <b-col md="4" class="mb-4">Filter</b-col>
        <b-col v-if="trainings.length > 0">
          <TrainingCalendarCard
            v-for="training in trainings"
            :key="training._id"
            :training="training"
          />
        </b-col>
        <b-col v-else
          ><span class="h5"
            >Keine passenden Fortbildungen gefunden.</span
          ></b-col
        >
      </b-row>
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
  import TrainingCalendarCard from "@/components/ui/TrainingCalendarCard.vue";
  export default {
    name: "CareerFortWeiterbildungenCalendar",
    components: {
      TrainingCalendarCard
    },
    data() {
      return {
        title: "Fortbildungskalender",
        trainings: [{}, {}, {}],
        error: false,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fortbildungskalender",
            to: "/karriere/fortbildungskalender"
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
                }]
            }`
          }
        ]
      };
    },
    async mounted() {
      await this.getTrainings();
    },
    methods: {
      async getTrainings() {
        try {
          const trainings = await this.$axios.get("/graphql", {
            params: {
              query: `
                    query {
                        publicTrainings {
                            _id
                            title
                            excerpt
                            company
                            logoUrl
                            type
                            startAt
                        }
                    }
                `
            }
          });

          if (trainings.data.errors) {
            throw new Error("Fortbildungen konnten nicht geladen werden!");
          }

          //   this.trainings = [];
          this.trainings = trainings.data.data.publicTrainings;
        } catch (err) {
          this.error = true;
        }
      }
    }
  };
</script>

<style></style>
