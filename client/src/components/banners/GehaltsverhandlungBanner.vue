<template>
  <BCard no-body class="shadow1">
    <BCardImgLazy
      fluid
      top
      srcset="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/12/MfaMalAnders_Gehaltsverhandlung_1200-300x158.jpg 300w, https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/12/MfaMalAnders_Gehaltsverhandlung_1200-1024x538.jpg 1024w, https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/12/MfaMalAnders_Gehaltsverhandlung_1200-768x403.jpg 768w, https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/12/MfaMalAnders_Gehaltsverhandlung_1200.jpg 1200w"
      sizes="(max-width: 768px) 100vw, 50vw"
      src="https://wordpress.mfa-mal-anders.de/wp-content/uploads/2020/12/MfaMalAnders_Gehaltsverhandlung_1200.jpg"
      alt="Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen"
      width="1200"
      height="630"
      blank-width="1200"
      blank-height="630"
      offset="1000"
      blank-color="#f7f6f9"
    />
    <BCardBody align="center">
      <!-- <BCardTitle title="Alternative Jobs und Berufsbilder für MFA / ZFA" /> -->

      <BCardText>
        Wenn Du mit Deinem Gehalt unzufrieden bist oder einfach nicht so recht
        weißt, wie Du die nächste Gehaltsverhandlung angehen sollst, haben wir
        Dir hier ein paar Tipps zusammengestellt.
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
