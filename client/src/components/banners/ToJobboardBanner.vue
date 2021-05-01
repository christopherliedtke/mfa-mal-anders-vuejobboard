<template>
  <BCard no-body class="overflow-hidden shadow1 p-3" align="center">
    <b-row no-gutters>
      <b-col md="3">
        <b-img-lazy
          class="p-4 w-100 h-100"
          src="@/assets/img/search_engine__monochromatic.svg"
          alt="Karriereschritt für MFA / ZFA"
          blank-width="170"
          blank-height="148"
          fluid
        ></b-img-lazy>
      </b-col>
      <b-col md="9">
        <BCardBody
          class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h3 class="h2 bold">Neuer Job gefällig?</h3>
          <p>
            Bist du auf der Suche nach einer
            <strong>neuen Herausforderung?</strong> <br />
            Möchtest du einfach mal schauen, was es sonst noch für Möglichkeiten
            gibt?
          </p>
          <b-button to="/stellenangebote" variant="secondary"
            >Zu den Stellenangeboten</b-button
          >
        </BCardBody>
      </b-col>
    </b-row>
  </BCard>
</template>

<script>
  import Vue from "vue";
  import { BCard, BCardBody } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  export default {
    name: "ToJobboardBanner"
  };
</script>

<style scoped lang="scss">
  .card {
    background: radial-gradient(closest-side, #fffcfdcc 0%, #fffcfdff 100%),
      url("~@/assets/img/hero_map_1200.jpg") center center;
    background-size: cover;
    background-blend-mode: lighten;

    .card-body {
      background-color: #fffcfd77;
    }
  }
</style>
