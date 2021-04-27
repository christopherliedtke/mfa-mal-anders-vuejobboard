<template>
  <div class="job-card-placeholder">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "JobCardPlaceholder",
    props: {
      compact: { type: Boolean, default: false }
    }
  };
</script>

<style lang="scss" scoped>
  .job-card-placeholder {
    background-color: $light;
    box-shadow: $shadow1;
    border-radius: $border-radius1;

    & > div {
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      border-radius: $border-radius1;
    }

    .content {
      background-color: $light-shade;
      background: linear-gradient(
        90deg,
        $light-shade 0%,
        $light-shade 50%,
        $light 100%
      );
    }

    .title {
      background-color: $light;
      .content {
        height: 3rem;
      }
    }

    .body {
      .content {
        height: 1rem;
        margin-bottom: 0.75rem;
      }
    }

    .footer {
      border-top: solid 1px $light-shade;

      .content {
        height: 1rem;
      }
    }

    .animate-color {
      animation: width_change 2s infinite alternate;
    }

    @keyframes width_change {
      0% {
        width: 25%;
        margin-right: 100%;
        margin-left: 0%;
      }

      100% {
        width: 100%;
        margin-right: 0%;
        margin-left: 0%;
      }
    }
  }
</style>
