<template>
  <!-- <div class="job-card-placeholder">
    <div class="title">
      <div class="content animate-color"></div>
    </div>
    <div v-if="!compact" class="body">
      <div class="content animate-color"></div>
      <div class="content animate-color"></div>
      <div class="content animate-color"></div>
      <div class="content animate-color"></div>
    </div>
    <div class="footer">
      <div class="content animate-color"></div>
      <div class="content animate-color"></div>
    </div>
  </div> -->
  <div
    :class="[
      'job-card-placeholder',
      compact ? 'mb-2 mt-2 mt-lg-0' : 'mb-3 mt-3 mt-lg-0'
    ]"
  >
    <BSkeleton :height="!compact ? '60px' : '40px'" class="header" />
    <div class="body">
      <BSkeleton />
      <BSkeleton />
      <BSkeleton />
    </div>
    <BSkeleton v-if="!compact" height="1px" />
    <div v-if="!compact" class="footer">
      <BSkeleton />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSkeleton } from "bootstrap-vue";
  Vue.component("BSkeleton", BSkeleton);
  export default {
    name: "JobCardPlaceholder",
    props: {
      compact: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  .job-card-placeholder {
    border-radius: $border-radius1;
    box-shadow: $shadow1;

    .b-skeleton {
      // background-color: transparentize($primary, 0.95);
      background-color: transparentize($dark, 0.95);
      // background-color: $light-shade;
    }

    // .b-skeleton-animate-wave::after {
    //   background: linear-gradient(
    //     90deg,
    //     transparent,
    //     transparentize($primary, 0.9),
    //     transparent
    //   );
    // }

    .header {
      border-radius: 5px 5px 0 0;
    }

    .body {
      padding: 0.2rem 0.8rem;

      .b-skeleton {
        margin: 0.5rem 0;
      }
    }

    .footer {
      padding: 0.5rem 0.8rem;
    }
  }

  // .job-card-placeholder {
  //   background-color: $light;
  //   box-shadow: $shadow1;
  //   border-radius: $border-radius1;

  //   & > div {
  //     padding: 0.5rem;
  //     display: flex;
  //     flex-direction: column;
  //     border-radius: $border-radius1;
  //   }

  //   .content {
  //     background-color: $light-shade;
  //     background: linear-gradient(
  //       90deg,
  //       $light-shade 0%,
  //       $light-shade 50%,
  //       $light 100%
  //     );
  //   }

  //   .title {
  //     background-color: $light;
  //     .content {
  //       height: 3rem;
  //     }
  //   }

  //   .body {
  //     .content {
  //       height: 1rem;
  //       margin-bottom: 0.75rem;
  //     }
  //   }

  //   .footer {
  //     border-top: solid 1px $light-shade;

  //     .content {
  //       height: 1rem;
  //     }
  //   }

  //   .animate-color {
  //     animation: width_change 2s infinite alternate;
  //   }

  //   @keyframes width_change {
  //     0% {
  //       width: 25%;
  //       margin-right: 100%;
  //       margin-left: 0%;
  //     }

  //     100% {
  //       width: 100%;
  //       margin-right: 0%;
  //       margin-left: 0%;
  //     }
  //   }
  // }
</style>
