<template>
  <aside class="card overflow-hidden shadow1 p-4 p-md-5">
    <div
      class="card-body d-flex flex-column justify-content-start align-items-start h-100 p-0"
    >
      <!-- eslint-disable-next-line -->
      <h2 class="h1" v-html="header"></h2>
      <p class="lead bold text-primary">
        Finde jetzt den passenden Anbieter für Deinen nächsten Karriereschritt
      </p>
      <p>
        Egal ob online oder in Deiner Umgebung, für MFA oder ZFA, von Abrechnung
        über Praxismanagement bis hin zu Medizinstudium... In unserem
        Fortbildungskatalog findest Du garantiert Deine nächste Fort- oder
        Weiterbildung!
      </p>
      <b-button to="/fortbildungskatalog" variant="secondary"
        >Zum Fortbildungskatalog</b-button
      >
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BannerTrainingCatalogueLarge",
    props: {
      header: {
        type: String,
        default:
          "<strong>Online Fortbildungskatalog</strong> <br> speziell für MFA & ZFA!"
      }
    }
  };
</script>

<style scoped lang="scss">
  .card {
    background: radial-gradient(closest-side, #fffcfd99 0%, #fffcfdff 100%),
      url("~@/assets/img/Online_lesson_Monochromatic.svg") right center
        no-repeat;
    background-size: contain;
    background-blend-mode: lighten;

    .card-body {
      background-color: #fffcfd77;
    }
  }
</style>
