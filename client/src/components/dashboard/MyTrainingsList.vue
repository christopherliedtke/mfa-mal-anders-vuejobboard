<template>
  <div>
    <h3>Meine Fortbildungen</h3>
    <b-button
      class="mr-2 mb-2"
      to="/user/dashboard/trainings/edit/new"
      variant="outline-primary"
      ><Fa class="mr-2" icon="plus" />Neue Fortbildung</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-secondary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >

    <BCard
      v-for="training in myTrainings"
      :key="training._id"
      class="shadow1 bg-light my-3"
    >
      <BCardText>
        <h4>{{ training.title }}</h4>
        <div class="my-3">
          <div>
            Erstellt:
            {{ new Date(parseInt(training.createdAt)).toLocaleString() }}
          </div>
          <div>
            Veröffentlicht:
            {{ training.published ? "Ja" : "Nein" }}
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/user/dashboard/trainings/edit/${training._id}`"
              variant="primary"
              size="sm"
              ><Fa class="mr-2" icon="edit" /> Bearbeiten</b-button
            >
          </div>
          <div>
            <b-button
              v-b-modal="training._id"
              variant="outline-danger"
              size="sm"
              ><Fa class="mr-2" icon="trash-alt" /> Löschen</b-button
            >
          </div>
        </div>
      </BCardText>
      <BModal
        :id="training._id"
        :title="`Delete ${training.title}`"
        ok-title="Unternehmen löschen"
        cancel-title="Abbrechen"
        centered
        ok-variant="danger"
        footer-class="d-flex justify-content-between"
        @ok="deleteTraining(training._id)"
        ><p class="my-4">
          Sind Sie sicher, dass Sie die Fortbildung löschen möchten?
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
    name: "MyTrainingsList",
    data() {
      return {
        myTrainings: []
      };
    },
    created() {
      this.getTrainingsByUserId();
    },
    methods: {
      async getTrainingsByUserId() {
        this.$store.dispatch("setOverlay", true);

        try {
          const trainings = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myTrainings {
                    _id
                    createdAt
                    updatedAt
                    title
                    published
                  }
                }
              `
            }
          });

          this.myTrainings = trainings.data.data.myTrainings;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Ihre Fortbildungen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
      async deleteTraining(trainingId) {
        try {
          const training = await this.$axios.post("/graphql", {
            query: `
              mutation {
                deleteTraining(_id: "${trainingId}") {
                  _id
                }
              }
            `
          });

          if (training.data.data.deleteTraining._id) {
            this.myTrainings.forEach((company, index) => {
              if (training._id === trainingId) {
                this.myTrainings.splice(index, 1);
              }
            });

            this.$root.$bvToast.toast(
              "Die Fortbildung wurde erfolgreich gelöscht.",
              {
                title: `Fortbildung gelöscht`,
                variant: "success",
                toaster: "b-toaster-bottom-right",
                solid: true
              }
            );
          } else {
            throw new Error();
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            "Die Fortbildung konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",
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

<style></style>
