<template>
  <aside class="d-flex justify-content-center">
    <router-link to="/stellengesuche/info" class="text-dark">
      <div
        class="border-radius1 shadow1 px-2 py-3 d-flex justify-content-around align-items-center"
        style="max-width: 450px"
      >
        <b-img-lazy
          class="p-1"
          style="max-height: 60px"
          src="@/assets/img/LinkedIn_Monochromatic.svg"
          alt="Stellengesuche für MFA / ZFA und ArzthelferInnen"
          blank-width="77"
          blank-height="60"
          offset="1000"
          fluid
        ></b-img-lazy>
        <div
          class="text-center d-flex flex-column justify-content-center align-items-center px-2"
        >
          <h3 class="h6 bold mb-1">
            Stellengesuch schalten
          </h3>
          <small>
            Lass Dich von Arbeitgebern finden statt umgekehrt
          </small>
        </div>
      </div>
    </router-link>
  </aside>
</template>

<script>
  export default {
    name: "JobSeeksSmallBanner"
  };
</script>
