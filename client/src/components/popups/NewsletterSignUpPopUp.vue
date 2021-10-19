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
      <Fa icon="times" />
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
