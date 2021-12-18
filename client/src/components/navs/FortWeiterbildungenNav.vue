<template>
  <div style="max-width: 600px" class="mx-auto">
    <nav v-if="trainings" class="list-group">
      <b-link
        to="/karriere/fort-und-weiterbildung"
        class="h5 bold list-group-item list-group-item-action text-dark mb-0"
      >
        Fort- & Weiterbildungen
      </b-link>
      <div
        v-for="category in categories"
        :key="category"
        class="list-group-item p-0"
      >
        <h4 class="h5 bold pt-3 pb-1 px-3 mb-0">{{ category }}</h4>
        <div class="list-group list-group-flush">
          <b-link
            v-for="training in computedTrainings.filter(
              training => training.category === category
            )"
            :key="training.id"
            class="list-group-item list-group-item-action px-4"
            :to="`/karriere/fort-und-weiterbildung/ueberblick/${training.slug}`"
            :active="training.slug === $route.params.slug"
            >{{ training.title }}</b-link
          >
        </div>
      </div>
    </nav>
    <div class="mt-3">
      <TrainingCatalogueSmallBanner v-if="showTrainingCatalogue" class="my-2" />
      <SgdBanner v-if="showSgdBanner" class="my-2" />
    </div>
  </div>
</template>

<script>
  import SgdBanner from "@/components/banners/SgdBanner.vue";
  import TrainingCatalogueSmallBanner from "@/components/banners/TrainingCatalogueSmallBanner.vue";
  export default {
    name: "FortWeiterbildungenNav",
    components: {
      SgdBanner,
      TrainingCatalogueSmallBanner
    },
    props: {
      showTrainingCatalogue: {
        type: Boolean,
        default: true
      },
      showSgdBanner: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        trainings: null
      };
    },
    computed: {
      computedTrainings() {
        return this.trainings.map(training => {
          training.category =
            training.categories.length > 0
              ? training.categories[0]
              : "Allgemein";
          return training;
        });
      },
      categories() {
        let categories = this.trainings.map(training =>
          training.categories.length > 0 ? training.categories[0] : "Allgemein"
        );
        categories = categories
          .filter((item, index) => categories.indexOf(item) === index)
          .sort();

        return categories;
      }
    },
    created() {
      this.getTrainings();
    },
    methods: {
      async getTrainings() {
        try {
          const trainings = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  weiterbildungen {
                    title
                    slug
                    categories
                  }
                }
              `
            }
          });

          if (!trainings.data.data.weiterbildungen) {
            return;
          }

          this.trainings = trainings.data.data.weiterbildungen;
        } catch (err) {
          return;
        }
      }
    }
  };
</script>
