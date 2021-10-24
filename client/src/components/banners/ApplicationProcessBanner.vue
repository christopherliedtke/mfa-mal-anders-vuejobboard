<template>
  <BCard
    no-body
    class="overflow-hidden bg-light-shade shadow1 m-3 p-4"
    align="center"
  >
    <div class="row no-gutters">
      <div class="col-md-3">
        <b-img
          class="p-1 w-100 h-100"
          src="@/assets/img/profiling_monochromatic.svg"
          alt="Tipps für einen effizienten Bewerbungsprozess für MFAs / ZFAs / ArzthelferInnen"
        ></b-img>
      </div>
      <div class="col-md-9">
        <BCardBody
          class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h4 class="bold">
            Unsere Tipps für einen effizienten Bewerbungsprozess
          </h4>
          <p>
            Die Einstellung neuer MitarbeiterInnen kostet viel Zeit, Geld und
            Mühe. Aus diesem Grund sollte ein Bewerbungsprozess so effizient und
            gründlich wie möglich etabliert werden. Hier haben wir Ihnen einen
            kleinen Leitfaden zusammengestellt.
          </p>
          <b-button
            to="/blog/article/tipps-fuer-einen-effizienten-bewerbungsprozess"
            variant="primary"
            >Mehr erfahren</b-button
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
    name: "JobAdTippsBanner"
  };
</script>
