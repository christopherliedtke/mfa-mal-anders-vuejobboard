<template>
  <div>
    <div v-if="profession" class="profession">
      <div class="title">
        <h1>{{ profession.title }}</h1>
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
      </div>
      <b-container class="py-3 py-lg-5">
        <b-row>
          <b-col md="4" class="mb-4 order-2 order-lg-1">
            <JobsBerufsbilderNav />
          </b-col>
          <b-col class="order-1 order-lg-2 mb-5">
            <!-- eslint-disable-next-line -->
            <div v-html="profession.content"></div>
            <p class="bold">
              <b-link :to="`/stellenangebote`"
                >Finde den passenden Job auf unserer Stellenbörse
                <Fa
                  class="position-relative"
                  style="top: -5px"
                  icon="external-link-alt"
                  size="xs"
                />
              </b-link>
            </p>
            <b-button
              :to="
                `/karriere/jobs-und-berufsbilder/${profession.berufsbildTypes.nodes[0].slug}`
              "
              size="sm"
              >Zurück</b-button
            >
            <ToJobboardBanner class="mt-5" />
          </b-col>
        </b-row>
        <RandomTrainingsContainer class="mt-4" />
      </b-container>
      <Head
        :title="title"
        :desc="profession.seo.metaDesc"
        img=""
        :script="snippet"
      />
    </div>
  </div>
</template>

<script>
  import JobsBerufsbilderNav from "@/components/navs/JobsBerufsbilderNav.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  export default {
    name: "CareerBerufsbildProfession",
    components: {
      JobsBerufsbilderNav,
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
                                "name": "Jobs und Berufsbilder",
                                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder"
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
                                  .join("-")}",
                                "item": "https://www.mfa-mal-anders.de/karriere/jobs-und-berufsbilder/${
                                  this.$route.params.slug
                                }"
                            },{
                                "@type": "ListItem",
                                "position": 5,
                                "name": "${this.$route.params.profession
                                  .split("-")
                                  .map(
                                    elem =>
                                      elem.charAt(0).toUpperCase() +
                                      elem.slice(1)
                                  )
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
      title() {
        return `MFA & ZFA Berufsbilder – ${this.profession.title}`;
      },
      profession() {
        return this.$store.state.professions.professions.find(
          profession =>
            profession.slug.toLowerCase() ==
            this.$route.params.profession.toLowerCase()
        );
      },
      breadcrumbs() {
        return [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Job- & Berufsbilder",
            to: "/karriere/jobs-und-berufsbilder"
          },
          {
            text: this.profession.berufsbildTypes.nodes[0].name,
            to: `/karriere/jobs-und-berufsbilder/${this.$route.params.slug}`
          },
          {
            text: this.profession.title,
            to: `/karriere/jobs-und-berufsbilder/${this.$route.params.profession}`
          }
        ];
      }
    }
  };
</script>
