<template>
  <b-btn to="/stellengesuche/info" :block="block" :size="size"
    ><b-img-lazy
      class="p-0 mr-2"
      style="max-height: 30px"
      src="@/assets/img/LinkedIn_Monochromatic.svg"
      alt="Stellengesuche für MFA / ZFA und ArzthelferInnen"
      blank-width="38"
      blank-height="30"
      offset="1000"
      fluid
    ></b-img-lazy>
    <strong>Jetzt Stellengesuch schalten</strong
    ><span class="d-none d-lg-inline"> &nbsp;– Arbeitgeber finden Dich!</span>
  </b-btn>
</template>

<script>
  export default {
    name: "JobSeekButton",
    props: {
      block: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ""
      }
    }
  };
</script>
