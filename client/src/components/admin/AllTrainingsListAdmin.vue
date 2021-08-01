<template>
  <div>
    <b-form id="training-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
        />
        <b-input-group-append>
          <b-button
            ><Fa icon="times" @click.prevent="filter.searchTerm = ''"
          /></b-button>
        </b-input-group-append>
      </b-input-group>
      <div class="inline-block ml-3 my-3 my-lg-0">
        Number of Trainings:
        <strong>{{ computedTrainings.length }}</strong>
      </div>
    </b-form>
    <b-table
      responsive
      striped
      hover
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="computedTrainings"
      :fields="fields"
      primary-key="_id"
    >
      <!-- <template #cell(email)="row">
        <a :href="`mailto:${row.item.email}`"> {{ row.item.email }}</a>
      </template> -->
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
      <template #cell(actions)="row">
        <b-button
          class="mr-2 mb-2"
          :to="`/user/dashboard/trainings/edit/${row.item._id}`"
          variant="primary"
          size="sm"
          ><Fa class="mr-2" icon="edit" />Edit
        </b-button>

        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            Published
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

        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            Paid
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
        </BDropdown>

        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            Pending
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
        </BDropdown>

        <BDropdown class="mr-2 mb-2" size="sm" left variant="info">
          <template #button-content>
            <Fa class="mr-2" icon="envelope" /> Email
          </template>
          <BDropdownItem
            class="mb-0"
            variant="success"
            @click.prevent="sendPublishedEmail(row.item._id)"
            >send published</BDropdownItem
          >
        </BDropdown>

        <b-button
          v-b-modal="'deleteTrainingModal'"
          size="sm"
          variant="danger"
          @click="trainingToDelete = row.item"
        >
          <Fa class="mr-2" icon="trash-alt" />Delete
        </b-button>
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
  </div>
</template>

<script>
  import Vue from "vue";
  import { BModal, BDropdown, BDropdownItem, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  Vue.directive("b-modal", VBModal);
  export default {
    name: "AllTrainingsListAdmin",
    data() {
      return {
        trainings: [],
        trainingToDelete: Object,
        error: false,
        filter: {
          searchTerm: ""
        },
        fields: [
          {
            key: "_id",
            label: "Training ID",
            sortable: false
          },
          {
            key: "title",
            sortable: true
          },
          {
            key: "createdAt",
            sortable: true
          },
          {
            key: "updatedAt",
            sortable: true
          },
          {
            key: "published",
            sortable: true
          },
          {
            key: "paid",
            sortable: true
          },
          {
            key: "pending",
            sortable: true
          },
          {
            key: "company",
            sortable: true
          },
          {
            key: "startAt",
            sortable: true
          },
          {
            key: "duration",
            sortable: true
          },
          {
            key: "remote",
            sortable: true
          },
          {
            key: "location",
            sortable: true
          },
          {
            key: "actions",
            sortable: false
          }
        ]
      };
    },
    computed: {
      computedTrainings: function() {
        let trainings = [...this.trainings];

        // filter search term
        if (this.filter.searchTerm) {
          trainings = trainings.filter(training => {
            const searchTerm = this.filter.searchTerm.toLowerCase().split(" ");
            const searchProp = [
              training._id,
              training.title,
              training.company,
              training.location
            ]
              .join(" ")
              .toLowerCase();

            if (searchTerm.every(term => searchProp.includes(term))) {
              return training;
            } else {
              return;
            }
          });
        }

        return trainings;
      }
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
                        title
                        published
                        paid
                        pending
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
                        title
                        published
                        paid
                        pending
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
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (!item.published || item.pending) {
          return "table-warning";
        }
        if (item.published && item.paid) {
          return "table-success";
        }
      }
    }
  };
</script>
