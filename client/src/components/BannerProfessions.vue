<template>
  <aside class="card shadow1 position-relative">
    <b-img-lazy
      class="card-img-top"
      fluid
      top
      srcset="
        /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_350.jpg 350w,
        /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_579.jpg 579w,
        /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_782.jpg 782w,
        /img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg 1200w
      "
      sizes="(max-width: 768px) 100vw, 50vw"
      src="/img/MfaMalAnders_50_Jobmoeglichkeiten_pxsady_c_scale,w_1200.jpg"
      alt="Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen"
      width="1200"
      height="630"
      blank-width="1200"
      blank-height="630"
      offset="1000"
      blank-color="#f7f6f9"
    />
    <div class="card-body text-center">
      <h3 class="h4 card-title" style="font-weight: 700">
        <b-link
          to="/karriere/jobs-und-berufsbilder"
          class="stretched-link text-reset"
        >
          Alternative Jobs und Berufsbilder für MFA / ZFA
        </b-link>
      </h3>

      <p class="card-text">
        Hier findest Du eine Auswahl von ganz unterschiedlichen Jobs und Berufen
        inklusive vieler Alternativen für Medizinische Fachangestellte |
        Zahnmedizinische Fachangestellte | ArzthelferInnen!
      </p>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BannerProfessions"
  };
</script>
