<template>
  <aside
    class="card text-center overflow-hidden bg-light-shade shadow1 m-3 p-4"
  >
    <div class="row no-gutters">
      <div class="col-md-3">
        <b-img
          class="p-1 w-100 h-100"
          src="@/assets/img/profiling_monochromatic.svg"
          alt="Tipps für einen effizienten Bewerbungsprozess für MFAs / ZFAs / ArzthelferInnen"
        ></b-img>
      </div>
      <div class="col-md-9">
        <div
          class="card-body d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h3 class="h4 bold">
            Unsere Tipps für einen effizienten Bewerbungsprozess
          </h3>
          <p>
            Die Einstellung neuer MitarbeiterInnen kostet viel Zeit, Geld und
            Mühe. Aus diesem Grund sollte ein Bewerbungsprozess so effizient und
            gründlich wie möglich etabliert werden. Hier haben wir Ihnen einen
            kleinen Leitfaden zusammengestellt.
          </p>
          <b-button
            to="/blog/artikel/tipps-fuer-einen-effizienten-bewerbungsprozess"
            variant="primary"
            >Mehr erfahren</b-button
          >
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BannerApplicationProcess"
  };
</script>
