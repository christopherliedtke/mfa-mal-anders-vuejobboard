<template>
  <span
    v-if="$config.starredJobs.active"
    :style="`padding: ${padding}; position: ${position}`"
    class="star text-secondary"
    @click.prevent="toggleStar"
  >
    <Fa v-if="!active" :icon="['far', 'star']" :size="size" />
    <Fa v-else :icon="['fas', 'star']" :size="size" />

    <BModal
      :id="`register-modal-${jobId}`"
      content-class="border-0"
      body-class="shadow1 border-radius1"
      no-close-on-backdrop
      no-close-on-esc
      hide-footer
      hide-header
      centered
      :visible="modalVisible"
    >
      <span
        class="position-absolute"
        style="right: 15px; top: 15px; cursor: pointer"
        @click="modalVisible = false"
      >
        <Fa icon="times" />
      </span>

      <div class="py-2 px-3 ">
        <h2 class="h4 mb-4 bold">Für später speichern?</h2>
        <div class="clearfix mb-3">
          <b-img
            style="max-width: 150px"
            class="mr-4 mb-2"
            fluid
            left
            src="~@/assets/img/starredJobs.svg"
          />
          <p>
            Speichere Dir Jobs in Deinen Favouriten, um Dich später auf diese zu
            bewerben. Registriere Dich dazu jetzt ganz einfach.
          </p>
        </div>
        <b-button to="/auth/register?role=employee" block variant="secondary"
          >Jetzt registrieren</b-button
        >
      </div>
    </BModal>
  </span>
</template>

<script>
  import Vue from "vue";
  import { BModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
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
          this.modalVisible = true;

          return;
        }

        if (!this.active) {
          this.active = true;
          await this.$store.dispatch("addStarredJob", this.jobId);

          this.$gtag.event("add_starred_job", {
            event_label: this.jobId
          });
          this.$matomo &&
            this.$matomo.trackEvent(
              "engagement",
              "add_starred_job",
              this.jobId
            );
        } else {
          this.active = false;
          await this.$store.dispatch("deleteStarredJob", this.jobId);

          this.$gtag.event("delete_starred_job", {
            event_label: this.jobId
          });
          this.$matomo &&
            this.$matomo.trackEvent(
              "engagement",
              "delete_starred_job",
              this.jobId
            );
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
