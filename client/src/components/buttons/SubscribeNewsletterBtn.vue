<template>
  <div>
    <b-button v-if="$store.state.auth.loggedIn" to="/user/dashboard?tab=6">{{
      state ? "Abonniere Jobs für " + state : "Abonniere den Job Newsletter"
    }}</b-button>
    <b-button v-else v-b-modal.subscribe-newsletter-modal2 variant="secondary">
      {{
        state ? "Abonniere Jobs für " + state : "Abonniere den Job Newsletter"
      }}</b-button
    >
    <BModal id="subscribe-newsletter-modal2" hide-footer centered>
      <NewsletterSignUpForm class="p-3" :default-state="state" />
    </BModal>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BModal, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
  export default {
    name: "SubscribeNewsletterBtn",
    components: {
      NewsletterSignUpForm
    },
    props: { state: { type: String, default: "" } }
  };
</script>
