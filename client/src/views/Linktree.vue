<template>
  <div id="linktree">
    <div class="bg-logo"></div>
    <b-container class=" position-relative py-3 py-lg-5">
      <nav class="d-flex flex-column align-items-center">
        <b-button block to="/">📌 mfa-mal-anders.de</b-button>
        <b-button block to="/stellenangebote"
          >📬 Aktuelle Stellenangebote</b-button
        >
        <b-button block to="/karriere/jobs-und-berufsbilder"
          >💼 50+ Alternative Jobmöglichkeiten</b-button
        >
        <b-button block to="/karriere/mfa/gehalt"
          >🧮 MFA Gehaltsrechner</b-button
        >
        <b-button block to="/karriere/zfa/gehalt"
          >🧮 ZFA Gehaltsrechner</b-button
        >
        <b-button block to="/karriere/fort-und-weiterbildungen"
          >🎓 Fort- und Weiterbildungen</b-button
        >
        <b-button block to="/karriere/fortbildungskatalog"
          >📆 Fortbildungskatalog</b-button
        >
        <b-button block to="/blog">📰 Blog</b-button>
        <b-button block to="/fuer-arbeitgeber">🏥 Für Arbeitgeber</b-button>
      </nav>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Linktree"
  };
</script>

<style lang="scss">
  #linktree {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(0deg, #fffcfd 0%, #fffcfd66 50%, #6d023077 100%),
      image-set(
          url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
          url("~@/assets/img/medizinischesPersonal.jpg") 2x
        )
        center center;

    background-size: cover;
    background-blend-mode: normal;

    .btn {
      border-radius: $border-radius1;
      padding: 1rem 1.5rem;
      background-color: transparentize($light, $amount: 0.5);
      color: $dark;
      font-weight: bold;
      font-size: 110%;

      &:hover {
        background-color: transparentize($light, $amount: 0.8);
        border-color: $primary;
      }
    }

    .container {
      max-width: 600px;
    }
  }
</style>
