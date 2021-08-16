<template>
  <BCard no-body class="overflow-hidden shadow1 p-3" align="center">
    <BCardBody
      class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
    >
      <h3 class="h2 bold">{{ header }}</h3>
      <p>
        Egal ob online oder in Deiner Umgebung, für MFA oder ZFA, von Abrechnung
        über Praxismanagement bis hin zu Medizinstudium... <br />
        Finde die richtige
        <strong class="text-primary">Fort- oder Weiterbildung</strong> für Dich!
      </p>
      <b-button to="/karriere/fortbildungskatalog" variant="secondary"
        >Zum Fortbildungskatalog</b-button
      >
    </BCardBody>
  </BCard>
</template>

<script>
  import Vue from "vue";
  import { BCard, BCardBody } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  export default {
    name: "TrainingCatalogueLargeBanner",
    props: {
      header: {
        type: String,
        default: "Unser Online Fortbildungskatalog!"
      }
    }
  };
</script>

<style scoped lang="scss">
  .card {
    background: radial-gradient(closest-side, #fffcfd88 0%, #fffcfdff 100%),
      url("~@/assets/img/calendar.svg") center center;
    background-size: cover;
    background-blend-mode: lighten;

    .card-body {
      background-color: #fffcfd77;
    }
  }
</style>
