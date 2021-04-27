<template>
  <BCard no-body class="shadow1">
    <BCardImgLazy
      top
      srcset="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg-300x157.jpg 300w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg-1024x538.jpg 1024w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg-768x403.jpg 768w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg 1200w"
      sizes="(max-width: 768px) 100vw, 50vw"
      src="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
      alt="Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen"
    />
    <BCardBody align="center">
      <BCardTitle title="Alternative Jobs und Berufsbilder für MFA / ZFA" />

      <BCardText>
        Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und Berufen
        inklusive vieler Alternativen für Medizinische Fachangestellte /
        ArzthelferInnen!
      </BCardText>

      <b-button to="/karriere/jobs-und-berufsbilder" variant="primary"
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
    name: "BerufsbilderBanner"
  };
</script>
