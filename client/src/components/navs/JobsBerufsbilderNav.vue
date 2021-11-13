<template>
  <nav class="list-group">
    <b-link
      to="/karriere/jobs-und-berufsbilder"
      class="h5 bold list-group-item list-group-item-action text-dark mb-0"
    >
      Jobs & Berufsbilder
    </b-link>
    <b-link
      v-for="berufsbilderType in berufsbilderTypes"
      :key="berufsbilderType"
      class="list-group-item list-group-item-action"
      :to="`/karriere/jobs-und-berufsbilder/${berufsbilderType.toLowerCase()}`"
      :active="berufsbilderType.toLowerCase() === $route.params.slug"
      >{{ berufsbilderType }}</b-link
    >
  </nav>
</template>

<script>
  export default {
    name: "JobsBerufsbilderNav",
    components: {},
    data() {
      return {
        berufsbilderTypes: [
          "Beratung",
          "Forschung",
          "Management",
          "Medizinisch-Technisch",
          "Verwaltung"
        ]
      };
    },
    // computed: {
    //   berufsbilderTypes() {
    //     let data = this.$store.state.professions.professions.map(profession =>
    //       profession.berufsbildTypes.nodes.length > 0
    //         ? profession.berufsbildTypes.nodes[0].name
    //         : null
    //     );
    //     return data
    //       .filter((value, index) => value && data.indexOf(value) === index)
    //       .sort();
    //   }
    // },
    created() {
      this.$store.dispatch("getProfessions");
    }
  };
</script>
