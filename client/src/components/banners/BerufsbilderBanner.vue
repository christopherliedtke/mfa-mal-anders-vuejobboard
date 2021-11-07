<template>
  <aside class="card shadow1">
    <b-img-lazy
      class="card-img-top"
      fluid
      top
      srcset="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200-300x157.jpg 300w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-1024x538.jpg 1024w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200-768x403.jpg 768w, /img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg 1200w"
      sizes="(max-width: 768px) 100vw, 50vw"
      src="/img/MfaMalAnders_50+Jobmoeglichkeiten_1200.jpg"
      alt="Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen"
      width="1200"
      height="630"
      blank-width="1200"
      blank-height="630"
      offset="1000"
      blank-color="#f7f6f9"
    />
    <div class="card-body text-center">
      <h3 class="h4 card-title">
        Alternative Jobs und Berufsbilder für MFA / ZFA
      </h3>

      <p class="card-text">
        Hier findest du eine Auswahl von ganz unterschiedlichen Jobs und Berufen
        inklusive vieler Alternativen für Medizinische & Zahnmedizinische
        Fachangestellte / ArzthelferInnen!
      </p>

      <b-button to="/karriere/jobs-und-berufsbilder" variant="primary"
        >Mehr erfahren!</b-button
      >
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BerufsbilderBanner"
  };
</script>
