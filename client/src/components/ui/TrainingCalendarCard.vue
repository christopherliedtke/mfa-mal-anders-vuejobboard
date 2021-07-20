<template>
  <div class="training-card">
    <div class="side">
      <div>
        {{
          new Date(training.startAt).toLocaleString("default", {
            month: "long"
          })
        }}
      </div>
    </div>
    <div class="header">
      <div class="logo-container">
        <b-img-lazy
          v-if="training.logoUrl"
          fluid
          blank-src="/img/MfaMalAnders_logo_circle_dark.svg"
          blank-width="90"
          offset="1000"
          height="70"
          :src="training.logoUrl"
          :alt="`Logo ${training.company}`"
        />
      </div>
      <div class="training-title">
        <h2 class="h4">{{ training.title }}</h2>
      </div>
    </div>
    <div class="body">{{ training.excerpt }}</div>
  </div>
</template>

<script>
  export default {
    name: "TrainingCalendarCard",
    props: {
      training: {
        type: Object,
        default: () => {}
      }
    }
  };
</script>

<style lang="scss" scoped>
  .training-card {
    position: relative;
    margin-bottom: 1rem;
    padding-right: 2.5rem;
    // background-color: $light-shade;
    border-radius: $border-radius1;
    box-shadow: $shadow1;

    .side {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: $primary;
      color: $light;
      border-top-right-radius: $border-radius1;
      border-bottom-right-radius: $border-radius1;

      div {
        transform: rotate(90deg);
      }
    }

    .header {
      display: flex;
      align-items: center;
      border-top-left-radius: $border-radius1;
      border-top-right-radius: $border-radius1;
      font-family: $headings-font-family;
      // color: $light;
      // background-color: $primary;
      padding: 1rem 1rem 0 1rem;
      // padding: 1rem 1rem 1rem 1rem;
      // border-bottom: 1px solid #ddd;

      .training-title {
        padding-left: 1rem;
      }

      .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: darken($light-shade, $amount: 1%);
        padding: 1rem 1rem;
        width: 110px;
        min-width: 110px;
        border-radius: 5px;

        @media screen and (max-width: $break-menu) {
          width: 80px;
          min-width: 80px;
          padding: 2rem 0;
        }

        img {
          max-height: 70px;
          max-width: 80%;
        }
      }
    }

    .body {
      padding: 1.5rem;
    }
  }
</style>
