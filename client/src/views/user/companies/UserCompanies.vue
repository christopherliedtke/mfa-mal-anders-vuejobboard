<template>
  <div class="dashboard container py-3 py-lg-5">
    <UserNav class="mb-3" />

    <h3>Meine Unternehmen</h3>
    <p>
      Hier können Sie Ihre erstellten Unternehmen bearbeiten, löschen bzw. neue
      Unternehmen erstellen.
    </p>
    <p>
      Sie können das selbe Unternehmen mit unterschiedlichen Standorten
      erstellen und diese gegebenenfalls für Ihre verschiedenen Stellenanzeigen
      nutzen. Ein Unternehmen können Sie auch direkt während des Erstellens
      einer Stellenanzeige im Reiter "Stellenanzeigen" einrichten. Bearbeiten
      Sie hier einzelne Unternehmen, wirkt sich dies direkt auf die verknüpften
      Stellenanzeigen aus.
    </p>
    <b-button
      class="mr-2 mb-2"
      to="/user/companies/edit/new"
      variant="outline-primary"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-lg mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        /></svg
      >Neues Unternehmen</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-secondary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >
    <div
      v-for="company in myCompanies"
      :key="company._id"
      class="card shadow1 bg-light my-3"
    >
      <div class="card-body">
        <h4>{{ company.name }} | {{ company.location }}</h4>
        <div class="my-3">
          <div>
            Erstellt:
            {{ new Date(parseInt(company.createdAt)).toLocaleString() }}
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/user/companies/edit/${company._id}`"
              variant="primary"
              size="sm"
              ><svg
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
              Bearbeiten</b-button
            >
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/unternehmen/${company._id}/${company.slug}`"
              target="_blank"
              variant="info"
              size="sm"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
              Unternehmensprofil</b-button
            >
          </div>
          <div>
            <b-button v-b-modal="company._id" variant="outline-danger" size="sm"
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
                />
              </svg>
              Löschen</b-button
            >
          </div>
        </div>
      </div>
      <BModal
        :id="company._id"
        :title="`Delete ${company.name}`"
        ok-title="Unternehmen löschen"
        cancel-title="Abbrechen"
        centered
        ok-variant="danger"
        footer-class="d-flex justify-content-between"
        @ok="deleteCompany(company._id)"
        ><p class="my-4">
          Bist Du sicher, dass Du das Unternehmen löschen möchtest?
        </p></BModal
      >
    </div>

    <Head title="Meine Unternehmen" desc="" img="" />
  </div>
</template>

<script>
  import UserNav from "@/components/navs/UserNav.vue";
  import Vue from "vue";
  import { BModal, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  export default {
    name: "UserCompanies",
    components: {
      UserNav
    },
    data() {
      return {
        myCompanies: []
      };
    },
    created() {
      this.getCompaniesByUserId();
    },
    methods: {
      async getCompaniesByUserId() {
        this.$store.dispatch("setOverlay", true);

        try {
          const companies = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myCompanies {
                    _id
                    createdAt
                    updatedAt
                    name
                    location
                    slug
                  }
                }
              `
            }
          });

          this.myCompanies = companies.data.data.myCompanies;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Ihre Unternehmen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async deleteCompany(companyId) {
        try {
          const company = await this.$axios.post("/graphql", {
            query: `
              mutation {
                deleteCompany(_id: "${companyId}") {
                  _id
                }
              }
            `
          });

          if (company.data.data.deleteCompany._id) {
            this.myCompanies.forEach((company, index) => {
              if (company._id === companyId) {
                this.myCompanies.splice(index, 1);
              }
            });

            this.$root.$bvToast.toast(
              "Das Unternehmen wurde erfolgreich gelöscht.",
              {
                title: `Unternehmen gelöscht`,
                variant: "success",
                toaster: "b-toaster-bottom-right",
                solid: true
              }
            );
          } else {
            this.$root.$bvToast.toast(
              "Das Unternehmen konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",
              {
                title: `Fehler beim Löschen`,
                variant: "danger",
                toaster: "b-toaster-bottom-right",
                solid: true,
                noAutoHide: true
              }
            );
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            "Das Unternehmen konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",
            {
              title: `Fehler beim Löschen`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>
