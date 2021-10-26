<template>
  <span
    v-if="$config.starredJobs.active"
    :style="`padding: ${padding}; position: ${position}`"
    class="star text-secondary"
    @click.prevent="toggleStar"
  >
    <svg
      v-if="!active"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      class="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="currentColor"
      class="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  </span>
</template>

<script>
  export default {
    name: "StarJob",
    props: {
      jobId: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "8px"
      },
      position: {
        type: String,
        default: "absolute"
      },
      size: {
        type: String,
        default: "sm"
      }
    },
    data() {
      return {
        active: false,
        modalVisible: false
      };
    },
    watch: {
      "$store.state.starredJobs.starredJobs"() {
        this.checkStarredJobs();
      }
    },
    mounted() {
      this.checkStarredJobs();
    },
    methods: {
      checkStarredJobs() {
        if (
          this.$store.state.auth.loggedIn &&
          this.$store.state.starredJobs.starredJobs.some(
            starredJob => starredJob.job === this.jobId
          )
        ) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
      async toggleStar() {
        if (!this.$store.state.auth.loggedIn) {
          this.$store.commit("setStarJobModal", true);

          return;
        }

        if (!this.active) {
          this.active = true;
          await this.$store.dispatch("addStarredJob", this.jobId);

          this.$gtag.event("add_starred_job", {
            event_label: this.jobId
          });
        } else {
          this.active = false;
          await this.$store.dispatch("deleteStarredJob", this.jobId);

          this.$gtag.event("delete_starred_job", {
            event_label: this.jobId
          });
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .star {
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 6;
  }
</style>
