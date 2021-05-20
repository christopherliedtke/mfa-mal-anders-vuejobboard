<template>
  <BCard no-body class="shadow1">
    <BCardImgLazy
      fluid
      top
      srcset="/img/Banner_Weiterbildungsdschungel_1200-300x157.jpg 300w, /img/Banner_Weiterbildungsdschungel_1200-1024x538.jpg 1024w, /img/Banner_Weiterbildungsdschungel_1200-768x404.jpg 768w, /img/Banner_Weiterbildungsdschungel_1200.jpg 1200w"
      sizes="(max-width: 768px) 100vw, 50vw"
      src="/img/Banner_Weiterbildungsdschungel_1200.jpg"
      alt="Banner - Fort- und Weiterbildungen für MFA / ZFA"
      width="1200"
      height="630"
      blank-width="1200"
      blank-height="630"
      blank-color="#f7f6f9"
      offset="1000"
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
