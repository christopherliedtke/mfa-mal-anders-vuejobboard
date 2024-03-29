-<template>
  <div class="account-data-form position-relative mb-3">
    <b-form id="account-data-form">
      <div class="row">
        <div class="col-12 col-lg-3">
          <label for="user-gender">Anrede</label>
          <b-form-select
            id="user-gender"
            v-model="user.gender"
            :state="validated ? (user.gender ? true : null) : null"
            :disabled="disabled"
          >
            <b-form-select-option :value="''"
              >-- Anrede auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="title in contactGenderOptions"
              :key="title"
              :value="title"
              >{{ title }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col-12 col-lg-3">
          <label for="user-title">Titel</label>
          <b-form-select
            id="user-title"
            v-model="user.title"
            :state="validated ? (user.title ? true : null) : null"
            :disabled="disabled"
          >
            <b-form-select-option :value="''"
              >-- Titel auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="title in contactTitleOptions"
              :key="title"
              :value="title"
              >{{ title }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col-12 col-lg-4"></div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-3">
          <label for="first-name" required>Vorname</label>
          <b-form-input
            id="first-name"
            v-model="user.firstName"
            type="text"
            :state="validated ? (user.firstName ? true : false) : null"
            placeholder="Vorname eingeben..."
            required
            :disabled="disabled"
          />
        </div>
        <div class="col-12 col-lg-3">
          <label for="last-name" required>Nachname</label>
          <b-form-input
            id="last-name"
            v-model="user.lastName"
            type="text"
            :state="validated ? (user.lastName ? true : false) : null"
            placeholder="Nachname eingeben..."
            required
            :disabled="disabled"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="email" required>E-Mail Adresse</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text>@</b-input-group-text>
            </template>
            <b-form-input
              id="email"
              v-model="user.email"
              type="email"
              :state="validated ? (user.email ? true : false) : null"
              placeholder="E-Mail Adresse eingeben..."
              required
              :disabled="disabled"
            />
          </b-input-group>
        </div>
      </div>

      <label for="role" class="d-block mt-4 mb-0">Rolle </label>
      <b-form-text v-if="$route.query.checkrole" class="ml-1"
        ><span class="text-danger"
          >Bitte überprüfe die hinterlegte Rolle für Deinen Account!</span
        ></b-form-text
      >
      <b-form-checkbox
        id="is-employer"
        v-model="user.isEmployer"
        :value="true"
        :unchecked-value="false"
        :disabled="disabled"
        inline
      >
        Arbeitgeber
      </b-form-checkbox>
      <b-form-checkbox
        id="is-employee"
        v-model="user.isEmployee"
        :value="true"
        :unchecked-value="false"
        :disabled="disabled"
        inline
      >
        MFA / ZFA
      </b-form-checkbox>
      <b-form-checkbox
        id="is-educational"
        v-model="user.isEducational"
        :value="true"
        :unchecked-value="false"
        :disabled="disabled"
        inline
      >
        Fortbildungsanbieter
      </b-form-checkbox>

      <div class="d-flex justify-content-between my-4">
        <b-button
          :variant="disabled ? 'primary' : 'outline-danger'"
          size="sm"
          @click="disabled = !disabled"
        >
          <svg
            v-if="disabled"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          {{ disabled ? "Bearbeiten" : "Abbrechen" }}
        </b-button>
        <b-button
          v-if="!disabled"
          variant="success"
          size="sm"
          @click.prevent="onSubmit"
        >
          Speichern
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  import {
    contactGenderOptions,
    contactTitleOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "UserDataForm",
    props: { apiUsersSchema: { type: String, default: "private" } },
    data() {
      return {
        user: {
          _id: "",
          gender: null,
          title: null,
          firstName: "",
          lastName: "",
          email: "",
          isEmployer: false,
          isEmployee: false,
          isEducational: false
        },
        contactGenderOptions,
        contactTitleOptions,
        disabled: true,
        validated: null
      };
    },
    computed: {
      userQuery: function() {
        return this.apiUsersSchema === "admin" ? "adminUser" : "me";
      }
    },
    created() {
      this.getUserData();
    },
    methods: {
      async getUserData() {
        try {
          this.$store.dispatch("setOverlay", true);

          const user = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                query {
                    ${this.userQuery} ${
                this.apiUsersSchema === "admin"
                  ? `(_id: "${this.$route.params.userId}")`
                  : ""
              }
                  {
                    _id
                    gender
                    title
                    firstName
                    lastName
                    email
                    isEmployer
                    isEmployee
                    isEducational
                  }
                }
              `
            }
          });

          if (user.data.data[this.userQuery]) {
            this.user = user.data.data[this.userQuery];
          }
        } catch (err) {
          //
        }

        this.$store.dispatch("setOverlay", false);
      },
      async onSubmit() {
        if (this.formValidation()) {
          this.$store.dispatch("setOverlay", true);

          try {
            const mutationType =
              this.apiUsersSchema === "admin" ? "adminUpdateUser" : "updateMe";
            const response = await this.$axios.post(`/graphql`, {
              query: `
                mutation {
                    ${mutationType} (
                        ${
                          this.apiUsersSchema === "admin"
                            ? `_id: "${this.user._id}",`
                            : ""
                        }
                        gender: "${this.user.gender}",
                        title: "${this.user.title}",
                        firstName: "${this.user.firstName}",
                        lastName: "${this.user.lastName}",
                        email: "${this.user.email.toLowerCase()}",
                        isEmployer: ${this.user.isEmployer},
                        isEmployee: ${this.user.isEmployee},
                        isEducational: ${this.user.isEducational},
                    ) {
                        _id
                        status
                    }
                }
            `
            });

            if (response.data.data[mutationType]) {
              this.disabled = true;

              await this.$store.dispatch("fetchUserFromDb");

              this.$root.$bvToast.toast(
                "Ihre Daten wurden erfolgreich gespeichert.",
                {
                  title: `Daten gespeichert`,
                  variant: "success",
                  toaster: "b-toaster-bottom-right",
                  solid: true
                }
              );

              if (
                response.data.data[mutationType].status === "pending" &&
                !this.$store.state.auth.user.isAdmin
              ) {
                await this.$store.dispatch("fetchUserFromDb");
                await this.$axios.get(
                  "/api/auth/verification/get-activation-email"
                );

                this.$root.$bvToast.toast(
                  "In den nächsten Minuten erhalten Sie eine E-Mail zur Verifizierung Ihrer E-Mail Adresse in Ihr Postfach. Bitte bestätigen Sie Ihre E-Mail Adresse über den dort enthaltenen Bestätigunglink.",
                  {
                    title: `E-Mail verifizieren`,
                    variant: "info",
                    toaster: "b-toaster-bottom-right",
                    solid: true,
                    noAutoHide: true
                  }
                );
              }
            } else {
              console.log(response);
              throw new Error(
                response.data.errors &&
                response.data.errors[0] &&
                response.data.errors[0].extensions.code === "BAD_USER_INPUT"
                  ? response.data.errors[0].message
                  : ""
              );
            }
          } catch (err) {
            console.log(err);
            this.$root.$bvToast.toast(
              `${err.message ||
                "Beim Speichern Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal."}`,
              {
                title: `Fehler beim Speichern`,
                variant: "danger",
                toaster: "b-toaster-bottom-right",
                solid: true,
                noAutoHide: true
              }
            );
          }

          this.$store.dispatch("setOverlay", false);
        }
      },
      formValidation() {
        this.validated = true;
        return !this.user.firstName || !this.user.lastName || !this.user.email
          ? false
          : true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .account-data-form {
    label[for="is-employer"],
    label[for="is-employee"] {
      margin-top: 0;
    }
  }
</style>
