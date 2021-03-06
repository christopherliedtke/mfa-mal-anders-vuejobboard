<template>
  <div v-if="training" class="fort-weiterbildung">
    <div class="title">
      <h1>{{ training.title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5">
      <b-row>
        <b-col md="4" order="2" order-md="1">
          <FortWeiterbildungenNav />
        </b-col>
        <b-col class="mb-4" order="1" order-md="2">
          <b-img-lazy
            v-if="training.featuredImage"
            class="border-radius1 shadow1 mb-3 mb-lg-5"
            fluid
            :src="training.featuredImage.node.sourceUrl"
            :alt="`Banner - ${training.title}`"
            width="1200"
            height="630"
            blank-width="1200"
            blank-height="630"
            offset="1000"
          />
          <!-- eslint-disable-next-line -->
          <div v-html="training.content"></div>
          <ToJobboardBanner class="mt-4" />
        </b-col>
      </b-row>
      <RandomTrainingsContainer />
    </b-container>
    <Head
      :title="training.seo && training.seo.title"
      :desc="training.seo && training.seo.metaDesc"
      :img="training.featuredImage && training.featuredImage.node.sourceUrl"
      :script="snippet"
    />
  </div>
</template>

<script>
  import FortWeiterbildungenNav from "@/components/navs/FortWeiterbildungenNav.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  export default {
    name: "CareerFortWeiterbildung",
    components: {
      FortWeiterbildungenNav,
      RandomTrainingsContainer,
      ToJobboardBanner
    },
    data() {
      return {
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
                                "name": "Fort- und Weiterbildungen",
                                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen"
                            },{
                                "@type": "ListItem",
                                "position": 4,
                                "name": "${this.$route.params.slug
                                  .split("-")
                                  .map(
                                    elem =>
                                      elem.charAt(0).toUpperCase() +
                                      elem.slice(1)
                                  )
                                  .join(" ")}",
                                "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildungen/${
                                  this.$route.params.slug
                                }"
                            }]
                        }`
          }
        ]
      };
    },
    computed: {
      training() {
        return this.$store.state.trainings.trainings.find(
          training => training.slug === this.$route.params.slug
        );
      },
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildungen",
            to: "/karriere/jobs-und-berufsbilder"
          },
          {
            text: this.training.title,
            to: `/karriere/jobs-und-berufsbilder/${this.training.slug}`
          }
        ];
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

          // &:first-child {
          //     font-family: $headings-font-family;
          //     font-size: 115%;
          // }

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
