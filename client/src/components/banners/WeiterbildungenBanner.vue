<template>
  <BCard no-body class="shadow1">
    <BCardImgLazy
      top
      src="/img/Banner_Weiterbildungsdschungel_1200.jpg"
      alt="Banner - Fort- und Weiterbildungen für MFA / ZFA"
    />
    <BCardBody align="center">
      <BCardTitle title="Fort- und Weiterbildungen für MFA / ZFA" />
      <BCardText>
        Hier findest du eine Übersicht von verschiedenen Fortbildungen und
        Weiterbildungen für Medizinische / Zahnmedizinische Fachangestellte /
        ArzthelferInnen!
      </BCardText>

      <b-button to="/karriere/fort-und-weiterbildungen" variant="primary"
        >Mehr erfahren!</b-button
      >
    </BCardBody>
  </BCard>
</template>

<script>
  import Vue from "vue";
  import {
    BCard,
    BCardBody,
    BCardImgLazy,
    BCardTitle,
    BCardText
  } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  Vue.component("BCardImgLazy", BCardImgLazy);
  Vue.component("BCardTitle", BCardTitle);
  Vue.component("BCardText", BCardText);
  export default {
    name: "WeiterbildungenBanner"
  };
</script>
