<template>
  <div class="job-form position-relative">
    <b-form id="company-form">
      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-name" required>Unternehmensname</label>
          <b-form-input
            id="company-name"
            v-model="company.name"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (company.name ? true : false) : null"
            placeholder="Unternehmensname eingeben..."
            required
            trim
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-street" required>Straße und Hausnummer</label>
          <b-form-input
            id="company-street"
            v-model="company.street"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (company.street ? true : false) : null"
            placeholder="Straße und Hausnummer eingeben..."
            required
            trim
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <label for="company-zip-code" required>PLZ</label>
          <b-form-input
            id="company-zip-code"
            v-model="company.zipCode"
            type="text"
            :state="validated ? (company.zipCode ? true : false) : null"
            placeholder="PLZ eingeben..."
            required
            trim
          />
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-location" required>Ort</label>
          <b-form-input
            id="company-location"
            v-model="company.location"
            type="text"
            lazy-formatter
            :formatter="formatter"
            :state="validated ? (company.location ? true : false) : null"
            placeholder="Ort eingeben..."
            required
            trim
          />
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-country" required>Land</label>
          <b-form-select
            id="company-country"
            v-model="company.country"
            :state="validated ? (company.country ? true : false) : null"
          >
            <b-form-select-option value="" disabled
              >-- Land auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="country in companyCountryOptions"
              :key="country"
              :value="country"
              >{{ country }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-url">Unternehmenswebseite</label>
          <b-input-group>
            <template #prepend>
              <b-input-group-text
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                  />
                  <path
                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                  /></svg
              ></b-input-group-text>
            </template>
            <b-form-input
              id="company-url"
              v-model="company.url"
              type="url"
              lazy-formatter
              :formatter="formatter"
              :state="validated ? (company.url ? true : null) : null"
              placeholder="https://www.ihr-unternehmen.de"
            />
          </b-input-group>
        </div>
        <div class="col-12 col-lg-4">
          <label for="company-size">Unternehmensgröße</label>
          <b-form-select
            id="company-size"
            v-model="company.size"
            :state="validated ? (company.size ? true : null) : null"
          >
            <b-form-select-option value=""
              >-- Unternehmensgröße auswählen --</b-form-select-option
            >
            <b-form-select-option
              v-for="size in companySizeOptions"
              :key="size"
              :value="size"
              >{{ size }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="col-12 col-lg-8">
          <label for="file">Logo</label>
          <ImageUploader
            :validated="validated"
            :image-url="company.logoUrl"
            :width="200"
            :height="200"
            fit="outside"
            aria-describedby="logo-url-help"
            @update-url="company.logoUrl = $event"
          />
          <b-form-text id="logo-url-help" class="ml-2"
            >jpg, png | max. 5MB</b-form-text
          >
          <b-form-input
            v-if="$store.state.auth.user.isAdmin"
            v-model="company.logoUrl"
            class="bg-light-shade mt-2"
            type="url"
            placeholder="ADMIN - URL to image (incl. https://)"
          >
          </b-form-input>
          <div
            class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
            style="width: 55px; height: 55px"
          >
            <b-img v-if="company.logoUrl" :src="company.logoUrl" fluid />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-box p-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label
          for="description"
          :role="
            !company.description && !showCompanyDescription ? 'button' : ''
          "
          @click="showCompanyDescription = !showCompanyDescription"
          ><svg
            v-if="!company.description && !showCompanyDescription"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-plus-circle-fill text-primary mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
            /></svg
          >Unternehmensbeschreibung für Unternehmensprofil
          <span class="small text-muted">[optional]</span></label
        >
        <TipTapEditor
          v-if="company.description || showCompanyDescription"
          :validated="validated"
          :min-length="0"
          :content="company.description"
          placeholder="Beschreiben Sie hier Ihr Unternehmen..."
          @update-content="company.description = $event"
        />
      </div>

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" @click.prevent="$router.go(-1)">
          Abbrechen
        </b-button>
        <b-button variant="success" @click.prevent="onSubmit">
          Speichern
        </b-button>
      </div>
    </b-form>
    <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import TipTapEditor from "@/components/utils/TipTapEditor.vue";
  import ImageUploader from "@/components/utils/ImageUploader.vue";
  import { saveCompanyMixin } from "@/mixins/saveCompanyMixin";
  import {
    companyStateOptions,
    companyCountryOptions,
    companySizeOptions
  } from "@/config/formDataConfig.json";
  export default {
    name: "CompanyForm",
    components: {
      ImageUploader,
      TipTapEditor
    },
    mixins: [saveCompanyMixin],
    props: { apiJobsSchema: { type: String, default: "private" } },
    data() {
      return {
        company: {
          _id: this.$route.params.companyId,
          name: "",
          description: "",
          street: "",
          location: "",
          zipCode: "",
          state: "",
          country: "",
          geoCodeLat: null,
          geoCodeLng: null,
          size: "",
          url: "",
          logoUrl: ""
        },
        showCompanyDescription: false,
        companyCountryOptions,
        companyStateOptions,
        companySizeOptions,
        validated: null,
        success: "",
        error: ""
      };
    },
    created() {
      if (this.$route.params.companyId != "new") {
        this.getCompany(this.$route.params.companyId);
      }
    },
    methods: {
      async getCompany(id) {
        try {
          const company = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                  query {
                      company(_id: "${id}") {
                          _id
                          name
                          description
                          street
                          location
                          zipCode
                          state
                          country
                          geoCodeLat
                          geoCodeLng
                          size
                          url
                          logoUrl
                      }
                  }
              `
            }
          });

          this.company = company.data.data.company;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async onSubmit() {
        this.error = false;

        if (!this.formValidation()) {
          this.error = "Bitte füllen Sie die erforderlichen Felder aus!";
          return null;
        }

        this.$store.dispatch("setOverlay", true);

        let mutationType;

        if (this.company._id === "new") {
          mutationType = "addCompany";
        } else {
          this.apiJobsSchema === "admin"
            ? (mutationType = "adminUpdateCompany")
            : (mutationType = "updateCompany");
        }

        // Save / Update company
        const res = await this.saveCompany(mutationType, this.company, true);

        this.success = res.success;

        this.$store.dispatch("setOverlay", false);
      },
      formatter(value) {
        return value.replace('"', "'").replace("&", "+");
      },
      formValidation() {
        this.validated = true;
        return !this.company.name ||
          !this.company.country ||
          !this.company.location ||
          !this.company.street ||
          !this.company.zipCode
          ? false
          : true;
      },
      formReset() {
        for (const key in this.company) {
          this.company[key] = "";
        }
      },
      hasHistory() {
        return window.history.length > 2;
      }
    }
  };
</script>
