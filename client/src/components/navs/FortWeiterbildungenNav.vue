<template>
  <div>
    <BListGroup v-if="trainings" tag="nav">
      <BListGroupItem to="/karriere/fort-und-weiterbildungen">
        <h3 class="h5 bold">
          Fort- & Weiterbildungen
        </h3></BListGroupItem
      >
      <BListGroupItem
        v-for="category in categories"
        :key="category"
        class="p-0"
      >
        <h4 class="h5 bold pt-3 pb-1 px-3 mb-0">{{ category }}</h4>
        <BListGroup flush>
          <BListGroupItem
            v-for="training in trainings.filter(
              training => training.category === category
            )"
            :key="training.id"
            class="px-4"
            :to="`/karriere/fort-und-weiterbildungen/${training.slug}`"
            :active="training.slug === $route.params.slug"
            >{{ training.title }}</BListGroupItem
          >
        </BListGroup>
      </BListGroupItem>
    </BListGroup>
    <div>
      <SgdBanner class="my-2" />
      <!-- <DelstBanner class="my-2" /> -->
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BListGroup, BListGroupItem } from "bootstrap-vue";
  Vue.component("BListGroup", BListGroup);
  Vue.component("BListGroupItem", BListGroupItem);
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
