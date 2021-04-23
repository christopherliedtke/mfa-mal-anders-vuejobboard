<template>
  <BCard
    no-body
    class="overflow-hidden bg-light-shade shadow1 m-3 p-4"
    align="center"
  >
    <b-row no-gutters>
      <b-col md="3">
        <b-img
          class="p-1 w-100 h-100"
          src="@/assets/img/presentation.svg"
          alt="Weitere Tipps für Stellenanzeigen für MFA / ZFA"
        ></b-img>
      </b-col>
      <b-col md="9">
        <BCardBody
          class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h4 class="bold">Weitere Tipps für Ihre Stellenanzeige</h4>
          <p>
            Erhalten Sie zusätzliche Details zu unseren Tipps und erstellen Sie
            eine attraktive Stellenanzeige, die mehr Bewerber*innen anzieht.
          </p>
          <b-button
            to="/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas"
            variant="primary"
            >Zu den Tipps</b-button
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
    name: "JobAdTippsBanner"
  };
</script>
