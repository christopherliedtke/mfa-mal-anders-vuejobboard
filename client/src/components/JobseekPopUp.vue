<template>
  <BModal
    id="add-jobseek-modal"
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
      @click="closePopUp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
        />
        <path
          fill-rule="evenodd"
          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
        />
      </svg>
    </span>
    <!-- <NewsletterSignUpForm
      class="p-3"
      :default-state="state"
      intro="Erhalte unsere aktuellen Stellenangebote wöchentlich direkt in Dein Postfach."
      :social="true"
      :title-bold="true"
      :show-job-seek-btn="true"
      @close="closePopUp"
    /> -->
    <div id="" class="jobseek-popup p-2">
      <div>
        <h2 class="h3 bold">Stellengesuch schalten</h2>
        <p class="mb-2">
          <strong class="text-primary">Du bist MFA | ZFA</strong> und
          interessiert an attraktiven Stellenangeboten von Arbeitgebern?
          Erstelle jetzt ein anonymes Stellengesuch und drehe den
          Bewerbungsprozess um.
          <strong class="text-primary"
            >Lass Arbeitgeber Dich mit passenden Angeboten kontaktieren</strong
          >.
        </p>
        <div>
          <b-link
            to="/stellengesuche/info"
            class="btn btn-secondary mr-2 mt-2"
            @click="closePopUp"
          >
            Jetzt Stellengesuch schalten
          </b-link>
          <b-link
            to="/stellengesuche"
            class="btn btn-outline-primary mr-2 mt-2"
            @click="closePopUp"
            >Zu den Stellengesuchen</b-link
          >
        </div>
      </div>
    </div>
  </BModal>
</template>

<script>
  import Vue from "vue";
  import { BModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  // import NewsletterSignUpForm from "@/components/NewsletterSignUpForm.vue";
  export default {
    name: "JobseekUpPopUp",
    components: {
      // NewsletterSignUpForm
    },
    props: {
      state: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        modalVisible: false
      };
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          if (window) window.prerenderReady = true;

          if (
            !localStorage.getItem("jobseek-pop") &&
            // this.$route.path != "/fuer-arbeitgeber" &&
            !this.$store.state.auth.loggedIn
          ) {
            setTimeout(() => {
              this.modalVisible = true;
            }, 3000);
          }
        }
      };
    },
    methods: {
      closePopUp() {
        localStorage.setItem("jobseek-pop", "false");
        this.modalVisible = false;
      }
    }
  };
</script>

<style scoped lang="scss">
  .jobseek-popup {
    background: linear-gradient(
      120deg,
      #fffcfdff 0%,
      #fffcfdcc 60%,
      #fffcfd00 100%
    );

    @media screen and (max-width: $break-menu) {
      background: radial-gradient(closest-side, #fffcfdbb 0%, #fffcfdff 100%);
    }

    & > div {
      background: linear-gradient(
          120deg,
          #fffcfdff 0%,
          #fffcfdcc 70%,
          #fffcfd00 100%
        ),
        url("~@/assets/img/LinkedIn_Monochromatic.svg") right center no-repeat;
      background-size: contain;

      @media screen and (max-width: $break-menu) {
        background: radial-gradient(closest-side, #fffcfd88 0%, #fffcfdff 100%),
          url("~@/assets/img/LinkedIn_Monochromatic.svg") center center
            no-repeat;
      }
    }
  }
</style>
