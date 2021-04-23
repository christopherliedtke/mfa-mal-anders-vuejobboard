<template>
  <BListGroup>
    <BListGroupItem to="/karriere/jobs-und-berufsbilder">
      <h3 class="h5 bold">
        Jobs & Berufsbilder
      </h3></BListGroupItem
    >
    <BListGroupItem
      v-for="berufsbilderType in berufsbilderTypes"
      :key="berufsbilderType"
      :to="`/karriere/jobs-und-berufsbilder/${berufsbilderType.toLowerCase()}`"
      :active="berufsbilderType.toLowerCase() === $route.params.slug"
      >{{ berufsbilderType }}</BListGroupItem
    >
  </BListGroup>
</template>

<script>
  import Vue from "vue";
  import { BListGroup, BListGroupItem } from "bootstrap-vue";
  Vue.component("BListGroup", BListGroup);
  Vue.component("BListGroupItem", BListGroupItem);
  export default {
    name: "JobsBerufsbilderNav",
    computed: {
      berufsbilderTypes() {
        let data = this.$store.state.professions.professions.map(profession =>
          profession.berufsbildTypes.nodes.length > 0
            ? profession.berufsbildTypes.nodes[0].name
            : null
        );
        return data
          .filter((value, index) => value && data.indexOf(value) === index)
          .sort();
      }
    }
  };
</script>
