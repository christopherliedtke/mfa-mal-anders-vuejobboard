<template>
  <aside class="d-flex justify-content-center">
    <router-link
      to="/karriere/fort-und-weiterbildung/fortbildungskatalog"
      class="text-dark"
    >
      <div
        class="border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center"
        style="max-width: 450px"
      >
        <b-img-lazy
          class="p-1"
          style="max-height: 60px"
          src="@/assets/img/calendar.svg"
          alt="Fortbildungskatalog für MFA / ZFA und ArzthelferInnen"
          blank-width="77"
          blank-height="60"
          offset="1000"
          fluid
        ></b-img-lazy>
        <div
          class="text-center d-flex flex-column justify-content-center align-items-center px-2"
        >
          <h3 class="h6 bold mb-1">
            Zum Fortbildungskatalog
          </h3>
          <small>
            Finde die passende Fort- oder Weiterbildung für Dich
          </small>
        </div>
      </div>
    </router-link>
  </aside>
</template>

<script>
  export default {
    name: "BannerTrainingCatalogueSmall"
  };
</script>
