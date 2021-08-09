<template>
  <div v-if="berufsbilder" class="berufsbild-type">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="py-3 py-lg-5">
      <b-row>
        <b-col md="4" class="mb-4">
          <JobsBerufsbilderNav />
        </b-col>
        <b-col>
          <!-- eslint-disable -->
          <div
            v-if="berufsbilder[0].berufsbildTypes.nodes[0].description"
            class="mb-4"
            v-html="berufsbilder[0].berufsbildTypes.nodes[0].description"
          ></div>
          <!-- eslint-enable -->
          <p class="mb-4">
            Vielleicht findest Du auch auf unserer
            <b-link to="/stellenangebote" class="bold">Stellenbörse</b-link>
            den richtigen Job für Dich.
          </p>
          <BListGroup tag="ul">
            <BListGroupItem
              v-for="berufsbild in berufsbilder"
              :id="berufsbild.slug"
              :key="berufsbild.slug"
              :disabled="!berufsbild.content"
              :class="berufsbild.content ? 'text-primary bold mb-0' : 'mb-0'"
              tag="li"
            >
              <b-link
                :to="
                  `/karriere/jobs-und-berufsbilder/${berufsbild.berufsbildTypes.nodes[0].slug}/${berufsbild.slug}`
                "
                class="p-1"
                style="font-size: larger; color: inherit"
                >{{ berufsbild.title }}
                <Fa
                  v-if="berufsbild.content"
                  icon="caret-right"
                  size="1x"
                  class="ml-2"/></b-link
            ></BListGroupItem>
          </BListGroup>
          <ToJobboardBanner class="mt-5" />
        </b-col>
      </b-row>
      <RandomTrainingsContainer class="mt-5" />
    </b-container>
    <Head
      :title="title"
      :desc="berufsbilder[0].berufsbildTypes.nodes[0].seo.metaDesc"
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import { BListGroup, BListGroupItem } from "bootstrap-vue";
  Vue.component("BListGroup", BListGroup);
  Vue.component("BListGroupItem", BListGroupItem);
  import JobsBerufsbilderNav from "@/components/navs/JobsBerufsbilderNav.vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  export default {
    name: "CareerBerufsbildType",
    components: {
      JobsBerufsbilderNav,
      RandomTrainingsContainer,
      ToJobboardBanner
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
                                  .map(
                                    elem =>
                                      elem.charAt(0).toUpperCase() +
                                      elem.slice(1)
                                  )
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
