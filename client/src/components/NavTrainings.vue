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
      <BannerTrainingCatalogueSmall v-if="showTrainingCatalogue" class="my-2" />
      <BannerSponsoredPkv v-if="showBannerSponsoredPkv" class="my-2" />
      <BannerSponsoredSgd v-if="showBannerSponsoredSgd" class="my-2" />
    </div>
  </div>
</template>

<script>
  import BannerSponsoredSgd from "@/components/BannerSponsoredSgd.vue";
  import BannerSponsoredPkv from "@/components/BannerSponsoredPkv.vue";
  import BannerTrainingCatalogueSmall from "@/components/BannerTrainingCatalogueSmall.vue";
  export default {
    name: "NavTrainings",
    components: {
      BannerSponsoredSgd,
      BannerSponsoredPkv,
      BannerTrainingCatalogueSmall
    },
    props: {
      showTrainingCatalogue: {
        type: Boolean,
        default: true
      },
      showBannerSponsoredSgd: {
        type: Boolean,
        default: true
      },
      showBannerSponsoredPkv: {
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
