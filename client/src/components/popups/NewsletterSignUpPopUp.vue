<template>
  <BModal
    id="subscribe-newsletter-modal"
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
    <NewsletterSignUpForm
      class="p-3"
      :default-state="state"
      intro="Erhalte unsere aktuellen Stellenangebote wöchentlich direkt in Dein Postfach."
      :social="true"
      @close="closePopUp"
    />
  </BModal>
</template>

<script>
  import Vue from "vue";
  import { BModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
  export default {
    name: "NewsletterSignUpPopUp",
    components: {
      NewsletterSignUpForm
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
      if (
        !localStorage.getItem("nl-pop") &&
        this.$route.path != "/fuer-arbeitgeber" &&
        !this.$store.state.auth.loggedIn
      ) {
        setTimeout(() => {
          this.modalVisible = true;
        }, 10000);
      }
    },
    methods: {
      closePopUp() {
        localStorage.setItem("nl-pop", "false");
        this.modalVisible = false;
      }
    }
  };
</script>
