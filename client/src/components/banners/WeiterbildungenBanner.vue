<template>
  <div class="card shadow1">
    <b-img-lazy
      fluid
      class="card-img-top"
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
    <div class="card-body text-center">
      <h3 class="h4 card-title">Fort- und Weiterbildungen für MFA / ZFA</h3>
      <p class="card-text">
        Hier findest du eine Übersicht von verschiedenen Fortbildungen und
        Weiterbildungen für Medizinische / Zahnmedizinische Fachangestellte /
        ArzthelferInnen!
      </p>

      <b-button to="/karriere/fort-und-weiterbildungen" variant="primary"
        >Mehr erfahren!</b-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "WeiterbildungenBanner"
  };
</script>
