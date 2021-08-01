<template>
  <div>
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
      to="/user/dashboard/companies/edit/new"
      variant="outline-primary"
      ><Fa class="mr-2" icon="plus" />Neues Unternehmen</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-secondary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >
    <BCard
      v-for="company in myCompanies"
      :key="company._id"
      class="shadow1 bg-light my-3"
    >
      <BCardText>
        <h4>{{ company.name }} | {{ company.location }}</h4>
        <div class="my-3">
          <div>
            Erstellt:
            {{ new Date(parseInt(company.createdAt)).toLocaleString() }}
          </div>
          <!-- <div>
                        Aktualisiert:
                        {{
                            new Date(
                                parseInt(company.updatedAt)
                            ).toLocaleString()
                        }}
                    </div> -->
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/user/dashboard/companies/edit/${company._id}`"
              variant="primary"
              size="sm"
              ><Fa class="mr-2" icon="edit" /> Bearbeiten</b-button
            >
          </div>
          <div>
            <b-button v-b-modal="company._id" variant="outline-danger" size="sm"
              ><Fa class="mr-2" icon="trash-alt" /> Löschen</b-button
            >
          </div>
        </div>
      </BCardText>
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
    </BCard>
  </div>
</template>

<script>
  import Vue from "vue";
  import { BModal, VBModal, BCard, BCardText } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  Vue.component("BCard", BCard);
  Vue.component("BCardText", BCardText);
  export default {
    name: "MyCompaniesList",
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
