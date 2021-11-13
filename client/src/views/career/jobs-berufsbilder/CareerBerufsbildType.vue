<template>
  <div v-if="berufsbilder" class="berufsbild-type">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <JobsBerufsbilderNav />
          <TrainingCatalogueSmallBanner class="my-3" />
        </div>
        <div class="col-12 col-md-8 mb-5">
          <!-- eslint-disable -->
          <div
            v-if="berufsbilder[0].berufsbildTypes.nodes[0].description"
            class="mb-4"
            v-html="berufsbilder[0].berufsbildTypes.nodes[0].description"
          ></div>
          <!-- eslint-enable -->
          <nav class="list-group">
            <div
              v-for="berufsbild in berufsbilder"
              :id="berufsbild.slug"
              :key="berufsbild.slug"
              class="list-group-item mb-0 p-3"
              style="font-size: larger; color: inherit"
            >
              <b-link
                v-if="berufsbild.content"
                :to="
                  `/karriere/jobs-und-berufsbilder/${berufsbild.berufsbildTypes.nodes[0].slug}/${berufsbild.slug}`
                "
                class="bold text-primary hover-text-secondary"
              >
                {{ berufsbild.title }}
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
              <span v-else class="text-muted">{{ berufsbild.title }}</span>
            </div>
          </nav>

          <div class="bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4">
            <JobSearchSingleForm
              class="mb-3"
              placeholder="Passende Stelle finden..."
              profession=""
            />
            <JobsTeaserContainer
              profession=""
              :number="2"
              :cols-md="2"
              :cols-lg="2"
            />
          </div>

          <ToJobboardBanner class="mt-5" />
        </div>
      </div>
      <RandomTrainingsContainer class="mt-5" />
    </div>

    <Head
      :title="title"
      :desc="berufsbilder[0].berufsbildTypes.nodes[0].seo.metaDesc"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import JobsBerufsbilderNav from "@/components/navs/JobsBerufsbilderNav.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import JobsTeaserContainer from "@/components/containers/JobsTeaserContainer.vue";
  import JobSearchSingleForm from "@/components/forms/JobSearchSingleForm.vue";
  import TrainingCatalogueSmallBanner from "@/components/banners/TrainingCatalogueSmallBanner.vue";
  export default {
    name: "CareerBerufsbildType",
    components: {
      JobsBerufsbilderNav,
      RandomTrainingsContainer,
      ToJobboardBanner,
      JobsTeaserContainer,
      JobSearchSingleForm,
      TrainingCatalogueSmallBanner
    },
    data() {
      return {
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
      title() {
        return `MFA & ZFA Berufsbilder – ${this.berufsbilder[0].berufsbildTypes.nodes[0].name}`;
      },
      berufsbilder() {
        if (this.$store.state.professions.professions.length > 0) {
          return this.$store.state.professions.professions.filter(
            berufsbild =>
              berufsbild.berufsbildTypes.nodes[0].name.toLowerCase() ===
              this.$route.params.slug.toLowerCase()
          );
        } else {
          return null;
        }
      },
      /** @returns { array } */
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Job- & Berufsbilder",
            to: "/karriere/jobs-und-berufsbilder"
          },
          {
            text: this.berufsbilder[0].berufsbildTypes.nodes[0].name,
            to: `/karriere/jobs-und-berufsbilder/${this.berufsbilder[0].slug}`
          }
        ];
      }
    },
    created() {
      this.$store.dispatch("getProfessions");
    },
    methods: {
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
