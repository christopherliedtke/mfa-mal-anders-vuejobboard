<template>
  <aside class="card shadow1">
    <b-img-lazy
      fluid
      class="card-img-top"
      srcset="
        /img/MfaMalAnders_Gehaltsverhandlung_igfsqt_c_scale,w_350.jpg 350w,
        /img/MfaMalAnders_Gehaltsverhandlung_igfsqt_c_scale,w_804.jpg 804w,
        /img/MfaMalAnders_Gehaltsverhandlung_igfsqt_c_scale,w_1200.jpg 1200w
      "
      sizes="(max-width: 768px) 100vw, 50vw"
      src="/img/MfaMalAnders_Gehaltsverhandlung_igfsqt_c_scale,w_1200.jpg"
      alt="Banner - Jobs und Berufsbilder für MFA / ZFA und ArzthelferInnen"
      width="1200"
      height="630"
      blank-width="1200"
      blank-height="630"
      offset="1000"
      blank-color="#f7f6f9"
    />
    <div class="card-body text-center">
      <p class="card-text">
        Wenn Du mit Deinem Gehalt unzufrieden bist oder einfach nicht so recht
        weißt, wie Du die nächste Gehaltsverhandlung angehen sollst, haben wir
        Dir hier ein paar Tipps zusammengestellt.
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
