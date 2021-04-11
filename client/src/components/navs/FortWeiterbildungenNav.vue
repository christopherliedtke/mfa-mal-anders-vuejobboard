<template>
  <div>
    <b-list-group v-if="trainings">
      <b-list-group-item to="/karriere/fort-und-weiterbildungen">
        <h3 class="h5 bold">
          Fort- & Weiterbildungen
        </h3></b-list-group-item
      >
      <b-list-group-item
        v-for="category in categories"
        :key="category"
        class="p-0"
      >
        <h4 class="h5 bold pt-3 pb-1 px-3 mb-0">{{ category }}</h4>
        <b-list-group flush>
          <b-list-group-item
            v-for="training in trainings.filter(
              training => training.category === category
            )"
            :key="training.id"
            class="px-4"
            :to="`/karriere/fort-und-weiterbildungen/${training.slug}`"
            :active="training.slug === $route.params.slug"
            >{{ training.title }}</b-list-group-item
          >
        </b-list-group>
      </b-list-group-item>

      <!-- <b-list-group-item
                v-for="training in trainings"
                :key="training.id"
                :to="
                    `/karriere/fort-und-weiterbildungen/${training.slug}`
                "
                :active="training.slug === $route.params.slug"
                >{{ training.title }}</b-list-group-item
            > -->
    </b-list-group>
    <div>
      <SgdBanner class="my-2" />
      <!-- <DelstBanner class="my-2" /> -->
    </div>
  </div>
</template>

<script>
  import SgdBanner from "@/components/banners/SgdBanner.vue";
  // import DelstBanner from "@/components/banners/DelstBanner.vue";
  export default {
    name: "FortWeiterbildungenNav",
    components: {
      SgdBanner
      // DelstBanner
    },
    computed: {
      trainings() {
        return this.$store.state.trainings.trainings.map(training => {
          training.category =
            training.categories.nodes.length > 0
              ? training.categories.nodes[0].name
              : "Allgemein";
          return training;
        });
      },
      categories() {
        let categories = this.$store.state.trainings.trainings.map(training =>
          training.categories.nodes.length > 0
            ? training.categories.nodes[0].name
            : "Allgemein"
        );
        categories = categories
          .filter((item, index) => categories.indexOf(item) === index)
          .sort();

        return categories;
      }
    }
  };
</script>
