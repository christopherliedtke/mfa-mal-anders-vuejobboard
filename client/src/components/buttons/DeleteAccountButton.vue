<template>
  <div>
    <b-button v-b-modal.delete-account variant="danger" size="sm" type="submit"
      ><Fa class="mr-2" icon="trash-alt"></Fa>Account löschen</b-button
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
          <b-input-group-append is-text>
            <Fa
              :icon="passwordType === 'text' ? 'eye' : 'eye-slash'"
              font-scale="1.2"
              @click="togglePasswordType"
            />
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
          this.$gtag.event("delete_account", {
            event_label: this.$store.state.auth.user._id
          });

          this.$matomo &&
            this.$matomo.trackEvent(
              "engagement",
              "delete_account",
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
