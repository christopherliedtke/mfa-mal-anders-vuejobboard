<template>
  <div>
    <b-button
      v-if="$store.state.auth.loggedIn && $store.state.auth.user.isEmployee"
      to="/user/job-newsletter"
      >{{
        state ? "Abonniere Jobs für " + state : "Abonniere den Job Newsletter"
      }}</b-button
    >
    <b-button
      v-else
      v-b-modal.subscribe-newsletter-modal2
      :variant="variant"
      :size="size"
    >
      {{
        state ? "Abonniere Jobs für " + state : "Abonniere den Job Newsletter"
      }}</b-button
    >
    <BModal
      id="subscribe-newsletter-modal2"
      ref="subscribe-newsletter-modal2"
      hide-footer
      hide-header
      centered
    >
      <NewsletterSignUpForm
        class="p-3"
        :default-state="state"
        @close="$refs['subscribe-newsletter-modal2'].hide()"
      />
    </BModal>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BModal, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  import NewsletterSignUpForm from "@/components/NewsletterSignUpForm.vue";
  export default {
    name: "NewsletterSignUpModal",
    components: {
      NewsletterSignUpForm
    },
    props: {
      state: { type: String, default: "" },
      variant: { type: String, default: "secondary" },
      size: { type: String, default: "" }
    }
  };
</script>
