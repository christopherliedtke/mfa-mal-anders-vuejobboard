<template>
  <aside class="card overflow-hidden shadow1">
    <div class="row no-gutters p-3">
      <div v-if="!compact" class="col-md-3">
        <b-img-lazy
          class="p-4 w-100 h-100"
          src="@/assets/img/search_engine__monochromatic.svg"
          alt="Karriereschritt für MFA / ZFA"
          blank-width="170"
          blank-height="148"
          offset="1000"
          fluid
        ></b-img-lazy>
      </div>
      <div class="col">
        <div class="card-body p-3 p-lg-4">
          <h3 :class="['bold', compact ? 'h2' : 'h1']">{{ header }}</h3>
          <slot name="desc">
            <p>
              Bist Du auf der Suche nach einer
              <strong class="text-primary">neuen Herausforderung?</strong>
              <br />
              Du willst Dich
              <strong class="text-primary">beruflich weiterentwickeln?</strong>
              <br />
              Finde bei uns Deinen nächsten Job!
            </p>
          </slot>
          <b-button to="/stellenangebote" variant="secondary"
            >Zu den Stellenangeboten</b-button
          >
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "BannerJobboard",
    props: {
      header: {
        type: String,
        default: "Der richtige Job für Dich!"
      },
      compact: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style scoped lang="scss">
  .card {
    background: radial-gradient(closest-side, #fffcfd88 0%, #fffcfdff 100%),
      image-set(
          url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
          url("~@/assets/img/medizinischesPersonal.jpg") 2x
        )
        center center;
    background-size: cover;
    background-blend-mode: lighten;

    .row {
      background-color: #fffcfd66;
    }
  }
</style>
