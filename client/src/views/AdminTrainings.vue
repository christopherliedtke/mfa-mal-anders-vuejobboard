<template>
  <div id="admin-jobs" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin Trainings</h1>
    <b-form id="training-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
          debounce="500"
        />
        <b-input-group-append>
          <b-button class="px-2" @click.prevent="filter.searchTerm = ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              /></svg
          ></b-button>
        </b-input-group-append>
      </b-input-group>
      <div class="inline-block my-2 my-lg-0">
        Number of Trainings:
        <strong>{{ filter.searchTerm ? count : trainings.length }}</strong>
      </div>
    </b-form>
    <b-table
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="trainings"
      :fields="fields"
      primary-key="_id"
      :filter="filter.searchTerm"
      @filtered="
        filteredItems => {
          count = filteredItems.length;
        }
      "
    >
      <template #cell(startAt)="row">
        {{
          row.item.startAt
            ? new Date(row.value).toLocaleString()
            : row.item.startAnytime
            ? "Any Time"
            : ""
        }}
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(userId)="row">
        <b-link :to="`/admin/users?s=${row.item.user._id}`">
          {{ row.item.user._id }}
        </b-link>
      </template>
      <!-- <template #cell(user)="row">
        <div v-if="row.item.user">
          {{
            row.item.user
              ? row.item.user.lastName + ", " + row.item.user.firstName
              : ""
          }}
          <a
            v-if="row.item.user && row.item.user.email"
            :href="`mailto:${row.item.user.email}`"
          >
            {{ row.item.user.email }}</a
          >
          {{ row.item.user._id }}
        </div>
      </template> -->
      <template #cell(actions)="row">
        <div class="d-flex">
          <b-button
            class="mr-2"
            :to="`/user/trainings/edit/${row.item._id}`"
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
              /></svg
            >Edit
          </b-button>

          <BDropdown class="mr-2" size="sm" left variant="secondary">
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
                /></svg
              >Published
            </template>
            <BDropdownItem
              class="mb-0"
              variant="success"
              @click.prevent="updateTraining(row.item._id, 'published: true')"
              >online</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              variant="danger"
              @click.prevent="updateTraining(row.item._id, 'published: false')"
              >offline</BDropdownItem
            >
          </BDropdown>

          <b-button
            class="mr-2"
            variant="danger"
            size="sm"
            @click.prevent="updateTraining(row.item._id, 'declined: true')"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-exclamation-circle-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              /></svg
            >Decline
          </b-button>

          <!-- <BDropdown class="mr-2" size="sm" left variant="secondary">
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
                /></svg
              >Paid
            </template>
            <BDropdownItem
              class="mb-0"
              variant="success"
              @click.prevent="updateTraining(row.item._id, 'paid: true')"
              >paid</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              variant="danger"
              @click.prevent="updateTraining(row.item._id, 'paid: false')"
              >unpaid</BDropdownItem
            >
          </BDropdown> -->

          <!-- <BDropdown class="mr-2" size="sm" left variant="secondary">
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
                /></svg
              >Pending
            </template>
            <BDropdownItem
              class="mb-0"
              variant="success"
              @click.prevent="updateTraining(row.item._id, 'pending: true')"
              >true</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              variant="danger"
              @click.prevent="updateTraining(row.item._id, 'pending: false')"
              >false</BDropdownItem
            >
          </BDropdown> -->

          <BDropdown class="mr-2" size="sm" left variant="info">
            <template #button-content>
              <svg
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
              Email
            </template>
            <BDropdownItem
              class="mb-0"
              variant="success"
              @click.prevent="sendPublishedEmail(row.item._id)"
              >send published</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              variant="danger"
              @click.prevent="sendDeclinedEmail(row.item._id)"
              >send declined</BDropdownItem
            >
          </BDropdown>

          <b-button
            v-b-modal="'deleteTrainingModal'"
            size="sm"
            variant="danger"
            @click="trainingToDelete = row.item"
          >
            <svg
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
            >Delete
          </b-button>
        </div>
      </template>
    </b-table>
    <BModal
      id="deleteTrainingModal"
      :title="`Delete ${trainingToDelete.title}`"
      ok-title="Delete Training"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteTraining(trainingToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this training?
      </p></BModal
    >
    <b-alert
      v-model="error"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="warning"
      dismissible
    >
      Oh, something went wrong. Please try again later.
    </b-alert>

    <NavAdmin />
  </div>
</template>

<script>
  import NavAdmin from "@/components/NavAdmin.vue";
  import Vue from "vue";
  import {
    BModal,
    BDropdown,
    BDropdownItem,
    VBModal,
    BTable
  } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  Vue.directive("BModal", VBModal);
  Vue.component("BTable", BTable);
  export default {
    name: "AdminTrainings",
    components: {
      NavAdmin
    },
    data() {
      return {
        trainings: [],
        count: 0,
        trainingToDelete: Object,
        error: false,
        filter: {
          searchTerm: ""
        },
        fields: [
          {
            key: "_id",
            label: "TrainingID",
            sortable: false
          },
          {
            key: "title",
            label: "Title",
            sortable: true
          },
          {
            key: "createdAt",
            label: "CreatedAt",
            sortable: true
          },
          {
            key: "updatedAt",
            label: "UpdatedAt",
            sortable: true
          },
          {
            key: "published",
            label: "Published",
            sortable: true
          },
          {
            key: "isSponsored",
            label: "IsSponsored",
            sortable: true
          },
          {
            key: "pending",
            label: "Pending",
            sortable: true
          },
          {
            key: "declined",
            label: "Declined",
            sortable: true
          },
          {
            key: "paid",
            label: "Paid",
            sortable: true
          },
          {
            key: "company",
            label: "Company",
            sortable: true
          },
          {
            key: "startAt",
            label: "StartAt",
            sortable: true
          },
          {
            key: "duration",
            label: "Duration",
            sortable: true
          },
          {
            key: "remote",
            label: "Remote",
            sortable: true
          },
          {
            key: "location",
            label: "Location",
            sortable: true
          },
          {
            key: "userId",
            label: "UserID",
            sortable: false
          },
          {
            key: "actions",
            label: "Actions",
            sortable: false
          }
        ]
      };
    },
    created() {
      this.getAllTrainings();
    },
    methods: {
      async getAllTrainings() {
        this.$store.dispatch("setOverlay", true);

        try {
          const trainings = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  adminTrainings {
                    _id
                    createdAt
                    updatedAt
                    user {
                      _id
                    }
                    title
                    published
                    isSponsored
                    pending
                    paid
                    declined
                    startAt
                    startAnytime
                    duration
                    remote
                    company
                    location
                    state 
                  }
                }
              `
            }
          });

          if (!trainings.data.data.adminTrainings) {
            throw new Error("Trainings could not be loaded!");
          }

          this.trainings = trainings.data.data.adminTrainings;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Trainings konnten nicht geladen werden. Error: ${err}`,
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
      async updateTraining(trainingId, args) {
        try {
          const training = await this.$axios.post("/graphql", {
            query: `
              mutation {
                updateTraining (_id: "${trainingId}" ${args}) {
                  _id
                  createdAt
                  updatedAt
                  user {
                    _id
                  }
                  title
                  published
                  isSponsored
                  pending
                  paid
                  declined
                  startAt
                  startAnytime
                  duration
                  remote
                  company
                  location
                  state
                }
              }
            `
          });

          if (training.data.errors) {
            throw new Error("Training could not be updated!");
          }

          this.trainings.forEach((oldTraining, index) => {
            if (oldTraining._id === trainingId) {
              this.trainings.splice(
                index,
                1,
                training.data.data.updateTraining
              );
            }
          });

          this.$root.$bvToast.toast(
            "Die Fortbildung wurde erfolgreich aktualisiert.",
            {
              title: `Fortbildung aktualisiert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );
        } catch (err) {
          this.$root.$bvToast.toast(
            `Das Training konnte nicht aktualisiert werden. Error: ${err}`,
            {
              title: `Fehler beim Aktualisieren`,
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
          const deletedTraining = await this.$axios.post("/graphql", {
            query: `
              mutation {
                deleteTraining(_id: "${trainingId}") {
                  _id
                }
              }
            `
          });

          if (!deletedTraining.data.data.deleteTraining) {
            throw new Error("Training could not be deleted!");
          }

          this.trainings.forEach((training, index) => {
            if (training._id === deletedTraining.data.data.deleteTraining._id) {
              this.trainings.splice(index, 1);
            }
          });
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Das Training konnte nicht gelöscht werden. Error: ${err}`,
            {
              title: `Fehler beim Löschen`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async sendPublishedEmail(trainingId) {
        try {
          const response = await this.$axios.post(
            "/api/send-email/training-published",
            {
              trainingId
            }
          );

          if (response.data.errors) {
            throw new Error("Email could not be sent.");
          }

          this.$root.$bvToast.toast("Die E-Mail wurde erfolgreich versandt.", {
            title: `E-Mail versandt`,
            variant: "success",
            toaster: "b-toaster-bottom-right",
            solid: true
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            `E-Mail konnte nicht versandt werden. Error: ${err}`,
            {
              title: `Fehler beim Versenden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      async sendDeclinedEmail(trainingId) {
        try {
          const message = window.prompt("Grund für die Ablehnung?");

          if (!message) return null;

          const response = await this.$axios.post(
            "/api/send-email/training-declined",
            {
              trainingId,
              message
            }
          );

          if (response.data.errors) {
            throw new Error("Email could not be sent.");
          }

          this.$root.$bvToast.toast("Die E-Mail wurde erfolgreich versandt.", {
            title: `E-Mail versandt`,
            variant: "success",
            toaster: "b-toaster-bottom-right",
            solid: true
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            `E-Mail konnte nicht versandt werden. Error: ${err}`,
            {
              title: `Fehler beim Versenden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.declined) {
          return "table-danger";
        }
        if (!item.published || item.pending) {
          return "table-warning";
        }
        if (item.published) {
          return "table-success";
        }
      }
    }
  };
</script>
