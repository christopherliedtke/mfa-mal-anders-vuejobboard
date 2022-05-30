<template>
  <div v-if="training">
    <article class="fort-weiterbildung">
      <div class="title">
        <h1>{{ training ? training.title : "" }}</h1>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </div>
      <div class="container py-3 py-lg-5">
        <div class="row">
          <div class="col-12 col-md-4 order-2 order-md-1">
            <NavTrainings />
          </div>
          <div class="col-12 col-md-8 order-1 order-md-2 mb-4">
            <b-img-lazy
              v-if="training.featuredImage"
              class="border-radius1 shadow1 mb-3 mb-lg-5"
              fluid
              :srcset="training.featuredImage.srcSet"
              sizes="(max-width: 576px) 100vw, 768px"
              :src="training.featuredImage.sourceUrl"
              :alt="`Banner - ${training.title}`"
              width="1200"
              height="630"
              blank-width="1200"
              blank-height="630"
            />
            <!-- eslint-disable-next-line -->
            <div v-html="training.content"></div>
            <BannerTrainingCatalogueLarge
              header="Jetzt passende Fortbildung finden"
              class="mt-4"
            />
            <BannerJobboard class="mt-4" />
          </div>
        </div>
      </div>
    </article>

    <div class="container">
      <TrainingListRandom />
    </div>

    <Head
      v-if="training"
      :title="training.seo && training.seo.title"
      :desc="training.seo && training.seo.metaDesc"
      :img="training.featuredImage && training.featuredImage.sourceUrl"
      :script="snippet"
    />
  </div>
</template>

<script>
  import NavTrainings from "@/components/NavTrainings.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import BannerTrainingCatalogueLarge from "@/components/BannerTrainingCatalogueLarge.vue";
  import BannerJobboard from "@/components/BannerJobboard.vue";
  export default {
    name: "CareerFortWeiterbildung",
    components: {
      NavTrainings,
      TrainingListRandom,
      BannerTrainingCatalogueLarge,
      BannerJobboard
    },
    data() {
      return {
        training: null,
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
                "position": 3,
                "name": "Überblick für MFA & ZFA",
                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick"
              },{
                "@type": "ListItem",
                "position": 4,
                "name": "${this.$route.params.slug
                  .split("-")
                  .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
                  .join(" ")}",
                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung/ueberblick/${
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
            text: "Fort- & Weiterbildung",
            to: "/karriere/fort-und-weiterbildung"
          },
          {
            text: "Überblick für MFA & ZFA",
            to: "/karriere/fort-und-weiterbildung/ueberblick"
          },
          {
            text: this.training.title,
            to: `/karriere/fort-und-weiterbildung/ueberblick/${this.training.slug}`
          }
        ];
      }
    },
    watch: {
      async "$route.params.slug"() {
        await this.getTraining();
      }
    },
    created() {
      this.getTraining();
    },
    methods: {
      async getTraining() {
        try {
          const training = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  weiterbildung(slug: "${this.$route.params.slug}") {
                    title
                    content
                    featuredImage {
                      sourceUrl
                      srcSet
                      altText
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

          if (!training.data.data.weiterbildung) {
            throw new Error();
          }

          this.training = training.data.data.weiterbildung;
        } catch (err) {
          this.$router.push("/karriere/fort-und-weiterbildung/ueberblick");
        }
      }
    }
  };
</script>

<style lang="scss">
  $table-breakpoint: 750px;

  .fort-weiterbildung {
    table {
      thead {
        font-size: 115%;
      }
      tr {
        @media screen and (max-width: $table-breakpoint) {
          display: flex;
          flex-direction: column;
        }

        td {
          vertical-align: top;
          padding-top: 1rem;

          &:nth-child(2) {
            padding-left: 2rem;
          }

          a {
            color: transparentize($light, $amount: 0.4);

            &:hover {
              color: $secondary;
            }
          }
        }
      }
    }

    .summary {
      background-color: $primary;
      color: $light;
      padding: 2rem;
      margin: 2rem 0;
      border-radius: $border-radius1;
      box-shadow: $shadow1;

      h3 {
        margin-bottom: 1rem;
      }

      a {
        color: $secondary;
      }
    }

    .curriculum {
      margin: 2rem 0;

      thead {
        th {
          background-color: $primary;
          color: $light;

          &:first-child {
            border-top-left-radius: 5px;

            @media screen and (max-width: $table-breakpoint) {
              border-top-right-radius: 5px;
            }
          }

          &:last-child {
            border-top-right-radius: 5px;

            @media screen and (max-width: $table-breakpoint) {
              border-top-right-radius: 0;
            }
          }
        }
      }

      th,
      td {
        padding: 0.75rem 1rem;

        &:nth-child(2) {
          text-align: end;
        }
      }

      tr {
        &:nth-child(even) {
          background-color: $light-shade;
        }

        &:last-child {
          td {
            &:first-child {
              border-bottom-left-radius: 5px;

              @media screen and (max-width: $table-breakpoint) {
                border-bottom-left-radius: 0;
              }
            }

            &:last-child {
              border-bottom-right-radius: 5px;

              @media screen and (max-width: $table-breakpoint) {
                border-bottom-left-radius: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
