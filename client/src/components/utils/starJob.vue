<template>
  <span
    v-if="$config.starredJobs.active"
    :style="`padding: ${padding}; position: ${position}`"
    class="star text-secondary"
    @click.prevent="toggleStar"
  >
    <Fa v-if="!active" :icon="['far', 'star']" :size="size" />
    <Fa v-else :icon="['fas', 'star']" :size="size" />
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
