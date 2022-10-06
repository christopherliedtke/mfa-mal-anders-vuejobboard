<template>
  <aside class="card overflow-hidden shadow1 p-4 p-md-5">
    <div class="card-body p-0">
      <div class="row">
        <div class="position-static col-12 col-xl-9">
          <router-link
            to="/stellengesuche/info"
            class="text-reset stretched-link"
          >
            <!-- eslint-disable-next-line -->
          <h2 class="display-4 bold" v-html="header"></h2>
          </router-link>
          <p class="lead bold text-primary uppercase">
            Lass Dich jetzt von passenden Arbeitgebern finden
          </p>
          <p>
            Du bist MFA | ZFA und interessiert an attraktiven Stellenangeboten
            von Arbeitgebern? Erstelle jetzt ein anonymes Stellengesuch und
            drehe den Bewerbungsprozess um. Lass Arbeitgeber Dich mit passenden
            Angeboten kontaktieren.
          </p>
          <b-button variant="secondary">Mehr erfahren</b-button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BannerJobSeeksLarge",
    props: {
      header: {
        type: String,
        default: "<strong>Stellen&shy;gesuch schalten</strong>"
      }
    }
  };
</script>

<style scoped lang="scss">
  .card {
    background: linear-gradient(
      120deg,
      #fffcfdff 0%,
      #fffcfdcc 60%,
      #fffcfd00 100%
    );

    @media screen and (max-width: $break-menu) {
      background: radial-gradient(closest-side, #fffcfdbb 0%, #fffcfdff 100%);
    }

    .card-body {
      background: linear-gradient(
          120deg,
          #fffcfdff 0%,
          #fffcfdcc 60%,
          #fffcfd00 100%
        ),
        url("~@/assets/img/LinkedIn_Monochromatic.svg") right center no-repeat;
      background-size: contain;

      @media screen and (max-width: $break-menu) {
        background: radial-gradient(closest-side, #fffcfd88 0%, #fffcfdff 100%),
          url("~@/assets/img/LinkedIn_Monochromatic.svg") center center
            no-repeat;
      }
    }
  }
</style>
