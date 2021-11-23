<template>
  <aside class="card shadow1">
    <b-img-lazy
      fluid
      class="card-img-top"
      srcset="
        /img/Weiterbildung_Weiterbildungsdschungel_ugahcj_c_scale,w_350.jpg 350w,
        /img/Weiterbildung_Weiterbildungsdschungel_ugahcj_c_scale,w_624.jpg 624w,
        /img/Weiterbildung_Weiterbildungsdschungel_ugahcj_c_scale,w_817.jpg 817w,
        /img/Weiterbildung_Weiterbildungsdschungel_ugahcj_c_scale,w_1200.jpg 1200w
      "
      sizes="(max-width: 768px) 100vw, 50vw"
      src="/img/Weiterbildung_Weiterbildungsdschungel_ugahcj_c_scale,w_1200.jpg"
      alt="Fort- und Weiterbildungen für MFA / ZFA"
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
        Weiterbildungen für Medizinische Fachangestellte | Zahnmedizinische
        Fachangestellte | ArzthelferInnen
      </p>

      <b-button
        to="/karriere/fort-und-weiterbildung/ueberblick"
        variant="primary"
        >Mehr erfahren!</b-button
      >
    </div>
  </aside>
</template>

<script>
  export default {
    name: "WeiterbildungenBanner"
  };
</script>
