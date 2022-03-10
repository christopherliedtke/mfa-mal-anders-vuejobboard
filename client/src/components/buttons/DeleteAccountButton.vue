<template>
  <div>
    <b-button v-b-modal.delete-account variant="danger" size="sm" type="submit"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash-fill mr-2"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
        /></svg
      >Account löschen</b-button
    >
    <BModal
      id="delete-account"
      title="Account löschen"
      ok-title="Jetzt löschen"
      cancel-title="Abbrechen"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteAccount"
    >
      <p class="my-4">
        Bist Du sicher, dass Du Deinen Account löschen möchtest?
      </p>
      <b-form>
        <label for="password">Passwort</label>
        <b-input-group>
          <b-form-input
            id="password"
            v-model="password"
            :type="passwordType"
            placeholder="Passwort eingeben..."
            autocomplete="current-password"
          ></b-form-input>
          <b-input-group-append
            is-text
            style="cursor: pointer"
            @click="togglePasswordType"
          >
            <svg
              v-if="passwordType === 'text'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-eye-slash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
              />
              <path
                d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
              />
            </svg>
          </b-input-group-append>
        </b-input-group>

        <div class="error mt-3">
          <b-alert
            v-for="error in errors"
            :key="error.message"
            show
            dismissible
            variant="warning"
            >{{ error.message }}</b-alert
          >
        </div>
      </b-form>
    </BModal>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BModal, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  export default {
    name: "DeleteAccountButton",
    data() {
      return {
        password: "",
        passwordType: "password",
        errors: null
      };
    },
    methods: {
      async deleteAccount(e) {
        e.preventDefault();

        this.$store.dispatch("setOverlay", true);

        this.errors = null;

        const response = await this.$axios.post("/graphql", {
          query: `
                        mutation {
                            deleteMe (password: "${this.password}") {
                                _id
                            }
                        }
                    `
        });

        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$gtag.event("user_delete", {
            event_label: this.$store.state.auth.user._id
          });

          this.$matomo &&
            this.$matomo.trackEvent(
              "engagement",
              "user_delete",
              this.$store.state.auth.user._id
            );

          this.$store.dispatch("logout");
        }

        this.$store.dispatch("setOverlay", false);
      },
      togglePasswordType() {
        this.passwordType === "text"
          ? (this.passwordType = "password")
          : (this.passwordType = "text");
      }
    }
  };
</script>

<style scoped lang="scss">
  .svg-inline--fa {
    cursor: pointer;
  }
</style>
