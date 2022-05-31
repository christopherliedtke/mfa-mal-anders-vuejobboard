<template>
  <div class="dashboard container py-3 py-lg-5">
    <NavUser class="mb-3" />

    <h3>Meine Fortbildungen</h3>
    <b-button
      class="mr-2 mb-2"
      to="/user/trainings/edit/new"
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
      >Neue Fortbildung</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-secondary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >

    <div
      v-for="training in myTrainings"
      :key="training._id"
      class="card shadow1 bg-light my-3"
    >
      <div class="card-body">
        <h4>
          <!-- eslint-disable -->
          <span v-html="training.title"></span> |
          <span v-html="training.company"></span>
          <!-- eslint-enable -->
        </h4>
        <div>
          <span
            v-if="training.pending"
            class="badge badge-pill badge-warning mr-1"
            >wird geprüft</span
          >
          <span
            v-if="training.declined"
            class="badge badge-pill badge-danger mr-1"
            >abgelehnt</span
          >
          <span
            v-else-if="training.published && training.paid"
            class="badge badge-pill badge-success mr-1"
            >online</span
          >
          <span
            v-else-if="!training.paid || !training.published"
            class="badge badge-pill badge-danger mr-1"
            >offline</span
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
              :to="`/user/trainings/edit/${training._id}`"
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
              v-if="!training.paid && !training.pending"
              class="mr-2 mb-2 mb-md-0"
              variant="success"
              size="sm"
              @click.prevent="submitTraining(training._id)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                />
              </svg>
              Zur Veröffentlichung einreichen</b-button
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
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
        :id="training._id"
        :title="`Lösche ${training.title}`"
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
    </div>

    <Head title="Mein Account" desc="" img="" />
  </div>
</template>

<script>
  import NavUser from "@/components/NavUser.vue";
  import Vue from "vue";
  import { BModal, VBModal, BDropdown, BDropdownItem } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  export default {
    name: "UserTrainings",
    components: {
      NavUser
    },
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
                    declined
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
