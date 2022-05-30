<template>
  <div v-if="professions" class="berufsbild-type">
    <div class="title">
      <h1>MFA & ZFA Berufsbilder – {{ professions[0].professionType.name }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <NavProfessions />
          <BannerTrainingCatalogueSmall class="my-3" />
        </div>
        <div class="col-12 col-md-8 mb-5">
          <!-- eslint-disable -->
          <div
            v-if="professions[0].professionType.description"
            class="mb-4"
            v-html="professions[0].professionType.description"
          ></div>
          <!-- eslint-enable -->
          <nav class="list-group">
            <div
              v-for="profession in professions"
              :id="profession.slug"
              :key="profession.slug"
              class="list-group-item mb-0 p-3"
              style="font-size: larger; color: inherit"
            >
              <b-link
                v-if="profession.content"
                :to="
                  `/karriere/jobs-und-berufsbilder/${profession.professionType.slug}/${profession.slug}`
                "
                class="bold text-primary hover-text-secondary"
              >
                {{ profession.title }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                  />
                </svg>
              </b-link>
              <span v-else class="text-muted">{{ profession.title }}</span>
            </div>
          </nav>

          <div class="bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4">
            <SearchWidgetJob
              class="mb-3"
              placeholder="Passende Stelle finden..."
              profession=""
            />
            <JobListTeaser
              profession=""
              :number="2"
              :cols-md="2"
              :cols-lg="2"
            />
          </div>

          <BannerJobboard class="mt-5" />
        </div>
      </div>
      <TrainingListRandom class="mt-5" />
    </div>

    <Head
      :title="`MFA & ZFA Berufsbilder – ${professions[0].professionType.name}`"
      :desc="professions[0].professionType.metaDesc"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import NavProfessions from "@/components/NavProfessions.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import BannerJobboard from "@/components/BannerJobboard.vue";
  import JobListTeaser from "@/components/JobListTeaser.vue";
  import SearchWidgetJob from "@/components/SearchWidgetJob.vue";
  import BannerTrainingCatalogueSmall from "@/components/BannerTrainingCatalogueSmall.vue";
  export default {
    name: "CareerBerufsbildType",
    components: {
      NavProfessions,
      TrainingListRandom,
      BannerJobboard,
      JobListTeaser,
      SearchWidgetJob,
      BannerTrainingCatalogueSmall
    },
    data() {
      return {
        professions: null,
        visible: null,
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
                  "name": "Jobs und Berufsbilder",
                  "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"
              },{
                  "@type": "ListItem",
                  "position": 4,
                  "name": "${this.$route.params.slug
                    .split("-")
                    .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
                    .join("-")}",
                  "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/${
                    this.$route.params.slug
                  }"
              }]
            }`
          }
        ]
      };
    },
    computed: {
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Job- & Berufsbilder",
            to: "/karriere/jobs-und-berufsbilder"
          },
          {
            text: this.professions[0].professionType.name,
            to: `/karriere/jobs-und-berufsbilder/${this.$route.params.slug}`
          }
        ];
      }
    },
    watch: {
      async "$route.params.slug"() {
        await this.getProfessions();
      }
    },
    created() {
      this.getProfessions();
    },
    methods: {
      async getProfessions() {
        try {
          const professions = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  professions(type: "${this.$route.params.slug}") {
                    title
                    content
                    slug
                    professionType {
                      name
                      description
                      slug
                      metaDesc
                    }
                  }
                }
              `
            }
          });

          if (!professions.data.data.professions) {
            return;
          }

          this.professions = professions.data.data.professions;
        } catch (err) {
          return;
        }
      },
      setVisible(id) {
        if (this.visible === id) {
          this.visible = null;
        } else {
          this.visible = id;
        }
      }
    }
  };
</script>
