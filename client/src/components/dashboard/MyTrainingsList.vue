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
        <h4>
          <!-- eslint-disable -->
          <span v-html="training.title"></span> |
          <span v-html="training.company"></span>
          <!-- eslint-enable -->
        </h4>
        <div>
          <BBadge v-if="training.pending" class="mr-1" pill variant="warning"
            >wird geprüft</BBadge
          >
          <BBadge
            v-else-if="training.published && training.paid"
            class="mr-1"
            pill
            variant="success"
            >online</BBadge
          >
          <BBadge
            v-else-if="!training.paid || !training.published"
            class="mr-1"
            pill
            variant="danger"
            >offline</BBadge
          >
        </div>
        <div class="my-3">
          <div>
            Erstellt:
            {{ new Date(parseInt(training.createdAt)).toLocaleString() }}
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
            <b-button
              v-if="!training.paid && !training.pending"
              class="mr-2 mb-2 mb-md-0"
              variant="success"
              size="sm"
              @click.prevent="submitTraining(training._id)"
              ><Fa class="mr-2" icon="envelope" /> Zur Veröffentlichung
              einreichen</b-button
            >
            <b-button
              v-if="training.pending"
              class="mr-2 mb-2 mb-md-0"
              variant="light"
              :disabled="true"
              size="sm"
              >In der Prüfung</b-button
            >
            <BDropdown
              v-if="training.paid"
              class="mr-2 mb-2 mb-md-0"
              size="sm"
              left
              variant="secondary"
            >
              <template #button-content>
                <Fa class="mr-2" icon="ellipsis-v" />
                Status ändern
              </template>
              <BDropdownItem
                variant="success"
                @click.prevent="updateTrainingStatus(training._id, true)"
                >Online</BDropdownItem
              >
              <BDropdownItem
                class="mb-0"
                variant="danger"
                @click.prevent="updateTrainingStatus(training._id, false)"
                >Offline</BDropdownItem
              >
            </BDropdown>
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
  import {
    BModal,
    VBModal,
    BCard,
    BCardText,
    BBadge,
    BDropdown,
    BDropdownItem
  } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  Vue.component("BCard", BCard);
  Vue.component("BCardText", BCardText);
  Vue.component("BBadge", BBadge);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
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
                    company
                    published
                    paid
                    pending
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
      async updateTrainingStatus(trainingId, published) {
        try {
          const training = await this.$axios.post("/graphql", {
            query: `
              mutation {
                updateTraining (_id: "${trainingId}" published: ${published}) {
                  _id
                  createdAt
                  updatedAt
                  title
                  company
                  published
                  paid
                  pending
                }
              }
            `
          });

          if (training.data.errors) {
            throw new Error("Fortbildung konnte nicht gespeichert werden.");
          }

          this.myTrainings.forEach((oldTraining, index) => {
            if (oldTraining._id === trainingId) {
              this.myTrainings.splice(
                index,
                1,
                training.data.data.updateTraining
              );
            }
          });

          this.$root.$bvToast.toast(
            "Die Fortbildung wurde erfolgreich gespeichert.",
            {
              title: `Fortbildung gespeichert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Speichern der Fortbildung ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Speichern`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async submitTraining(trainingId) {
        try {
          const training = await this.$axios.post("/graphql", {
            query: `
              mutation {
                submitTraining (_id: "${trainingId}") {
                  _id
                  createdAt
                  updatedAt
                  title
                  company
                  published
                  paid
                  pending
                }
              }
            `
          });

          if (training.data.errors) {
            throw new Error("Fortbildung konnte nicht eingereicht werden.");
          }

          this.myTrainings.forEach((oldTraining, index) => {
            if (oldTraining._id === trainingId) {
              this.myTrainings[index].pending =
                training.data.data.submitTraining.pending;
              this.myTrainings[index].updatedAt =
                training.data.data.submitTraining.updatedAt;
            }
          });

          this.$root.$bvToast.toast(
            "Die Fortbildung wurde erfolgreich eingereicht. Sie erhalten eine Nachricht sobald die Fortbildung veröffentlicht wurde.",
            {
              title: `Fortbildung eingereicht`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );
        } catch (err) {
          this.$root.$bvToast.toast(
            "Die Fortbildung konnte nicht eingereicht werden. Bitte versuchen Sie es später noch einmal.",
            {
              title: `Fehler beim Einreichen`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
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

<style scoped lang="scss">
  .badge {
    font-size: 0.8rem;
  }
</style>
