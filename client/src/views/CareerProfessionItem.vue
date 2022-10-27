<template>
  <div v-if="profession">
    <article class="profession">
      <div class="title">
        <h1>
          <strong>{{ profession.title }}</strong>
        </h1>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </div>
      <div class="container py-3 py-lg-5">
        <div class="row">
          <div class="col-12 col-md-4 mb-4 order-2 order-lg-1">
            <NavProfessions />
            <BannerTrainingCatalogueSmall class="my-3" />
          </div>
          <div class="col-12 col-md-8 order-1 order-lg-2 mb-5">
            <!-- eslint-disable-next-line -->
            <div v-html="profession.content"></div>
            <b-button
              :to="
                `/karriere/jobs-und-berufsbilder/${profession.professionType.slug}`
              "
              size="sm"
              >Zurück</b-button
            >

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
      </div>
    </article>

    <div class="container">
      <TrainingListRandom />
    </div>

    <Head
      :title="profession.seo.title"
      :desc="profession.seo.metaDesc"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import NavProfessions from "@/components/NavProfessions.vue";
  import BannerTrainingCatalogueSmall from "@/components/BannerTrainingCatalogueSmall.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import BannerJobboard from "@/components/BannerJobboard.vue";
  import JobListTeaser from "@/components/JobListTeaser.vue";
  import SearchWidgetJob from "@/components/SearchWidgetJob.vue";
  export default {
    name: "CareerProfessionItem",
    components: {
      NavProfessions,
      BannerTrainingCatalogueSmall,
      TrainingListRandom,
      BannerJobboard,
      JobListTeaser,
      SearchWidgetJob
    },
    data() {
      return {
        profession: null,
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
              },{
                  "@type": "ListItem",
                  "position": 5,
                  "name": "${this.$route.params.profession
                    .split("-")
                    .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
                    .join("-")}",
                  "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/${
                    this.$route.params.slug
                  }/${this.$route.params.profession}"
              }]
          }`
          }
        ]
      };
    },
    computed: {
      // title() {
      //   return `MFA & ZFA Berufsbilder – ${
      //     this.profession ? this.profession.title : ""
      //   }`;
      // },
      // profession() {
      //   return this.$store.state.professions.professions.find(
      //     profession =>
      //       profession.slug.toLowerCase() ==
      //       this.$route.params.profession.toLowerCase()
      //   );
      // },
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Job- & Berufsbilder",
            to: "/karriere/jobs-und-berufsbilder"
          },
          {
            text: this.profession.professionType.name,
            to: `/karriere/jobs-und-berufsbilder/${this.$route.params.slug}`
          },
          {
            text: this.profession ? this.profession.title : "",
            to: `/karriere/jobs-und-berufsbilder/${this.$route.params.profession}`
          }
        ];
      }
    },
    watch: {
      async "$route.params.profession"() {
        await this.getProfession();
      }
    },
    created() {
      this.getProfession();
    },
    methods: {
      async getProfession() {
        try {
          const profession = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  profession(slug: "${this.$route.params.profession}") {
                    title
                    content
                    professionType {
                      name
                      slug

                    }
                    seo {
                      title
                      metaDesc
                    }
                  }
                }
              `
            }
          });

          if (!profession.data.data.profession) {
            throw new Error();
          }

          this.profession = profession.data.data.profession;
        } catch (err) {
          this.$router.push("/karriere/jobs-und-berufsbilder");
        }
      }
    }
  };
</script>
