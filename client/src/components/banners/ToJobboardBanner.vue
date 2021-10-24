<template>
  <BCard no-body class="overflow-hidden shadow1 p-3" align="center">
    <div class="row no-gutters">
      <div class="col-md-3">
        <b-img-lazy
          class="p-4 w-100 h-100"
          src="@/assets/img/search_engine__monochromatic.svg"
          alt="Karriereschritt für MFA / ZFA"
          blank-width="170"
          blank-height="148"
          offset="1000"
          fluid
        ></b-img-lazy>
      </div>
      <div class="col-md-9">
        <BCardBody
          class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h3 class="h2 bold">{{ header }}</h3>
          <p>
            Bist du auf der Suche nach einer
            <strong class="text-primary">neuen Herausforderung?</strong> <br />
            Du willst Dich
            <strong class="text-primary">beruflich weiterentwickeln?</strong>
            <br />
            Finde bei uns Deinen nächsten Job!
          </p>
          <b-button to="/stellenangebote" variant="secondary"
            >Zu den Stellenangeboten</b-button
          >
        </BCardBody>
      </div>
    </div>
  </BCard>
</template>

<script>
  import Vue from "vue";
  import { BCard, BCardBody } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  export default {
    name: "ToJobboardBanner",
    props: {
      header: {
        type: String,
        default: "Der richtige Job für Dich!"
      }
    }
  };
</script>

<style scoped lang="scss">
  .card {
    background: radial-gradient(closest-side, #fffcfd88 0%, #fffcfdff 100%),
      image-set(
          url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
          url("~@/assets/img/medizinischesPersonal.jpg") 2x
        )
        center center;
    background-size: cover;
    background-blend-mode: lighten;

    .card-body {
      background-color: #fffcfd77;
    }
  }
</style>
