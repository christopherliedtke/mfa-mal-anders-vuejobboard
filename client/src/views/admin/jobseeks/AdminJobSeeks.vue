<template>
  <div id="admin-jobseeks" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin JobSeeks</h1>
    <b-form id="job-filter" inline @submit.prevent>
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
      <div class="inline-block ml-3 my-3 my-lg-0">
        Number of JobSeeks:
        <strong>{{ filter.searchTerm ? count : jobSeeks.length }}</strong>
      </div>
    </b-form>
    <BTable
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="jobSeeks"
      :fields="fields"
      primary-key="_id"
      :filter="filter.searchTerm"
      @filtered="
        filteredItems => {
          count = filteredItems.length;
        }
      "
    >
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(actions)="row">
        <div class="d-flex">
          <b-button
            class="mr-2"
            :to="`/admin/jobseeks/edit/${row.item._id}`"
            variant="primary"
            size="sm"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
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
          </b-button>
          <b-button
            class="mr-2"
            :to="`/admin/jobseeks/preview/${row.item._id}`"
            target="_blank"
            variant="info"
            size="sm"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
              />
            </svg>
          </b-button>

          <BDropdown
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
              Status
            </template>
            <BDropdownItem
              variant="danger"
              :active="row.item.published === false"
              @click.prevent="updateJobSeekStatus(row.item._id, false)"
              >Offline</BDropdownItem
            >
            <BDropdownItem
              variant="success"
              :active="row.item.published === true"
              @click.prevent="updateJobSeekStatus(row.item._id, true)"
              >Online</BDropdownItem
            >
          </BDropdown>

          <b-button
            v-b-modal="'deleteJobSeekModal'"
            size="sm"
            variant="danger"
            @click="jobSeekToDelete = row.item"
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
    </BTable>
    <BModal
      id="deleteJobSeekModal"
      :title="`Delete ${jobSeekToDelete.title}`"
      ok-title="Delete JobSeek"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteJobSeek(jobSeekToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this job seek?
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

    <AdminNav />
  </div>
</template>

<script>
  import AdminNav from "@/components/navs/AdminNav.vue";
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
    name: "AdminJobSeeks",
    components: {
      AdminNav
    },
    data() {
      return {
        jobSeeks: [],
        count: 0,
        jobSeekToDelete: Object,
        error: false,
        filter: {
          searchTerm: ""
        },
        fields: [
          {
            key: "_id",
            label: "JobSeekID",
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
            key: "wasPublic",
            label: "WasPublic",
            sortable: true
          },
          {
            key: "firstName",
            label: "FirstName",
            sortable: true
          },
          {
            key: "lastName",
            label: "LastName",
            sortable: true
          },
          {
            key: "location",
            label: "Location",
            sortable: true
          },
          {
            key: "zipCode",
            label: "ZipCode",
            sortable: true
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
      this.getAllJobSeeks();
    },
    methods: {
      async getAllJobSeeks() {
        this.$store.dispatch("setOverlay", true);

        try {
          const jobSeeks = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  adminJobSeeks {
                    _id
                    createdAt
                    updatedAt
                    published
                    wasPublic
                    title
                    firstName
                    lastName
                    location
                    zipCode
                  }
                }
              `
            }
          });

          if (!jobSeeks.data.data.adminJobSeeks) {
            throw new Error("JobSeeks could not be loaded!");
          }

          this.jobSeeks = jobSeeks.data.data.adminJobSeeks;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `JobSeeks konnten nicht geladen werden. Error: ${err.message}`,
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
      async updateJobSeekStatus(jobSeekId, status) {
        this.$store.dispatch("setOverlay", true);

        try {
          const updatedJobSeek = await this.$axios.post("/graphql", {
            query: `
              mutation {
                updateJobSeek (
                  _id: "${jobSeekId}"
                  published: ${status}
                ) {
                  _id
                  createdAt
                  updatedAt
                  published
                  wasPublic
                  title
                  firstName
                  lastName
                  location
                  zipCode
                }
              }
            `
          });

          if (updatedJobSeek.data.errors) {
            throw new Error();
          }

          this.jobSeeks.forEach((jobSeek, index) => {
            if (jobSeek._id === jobSeekId) {
              this.jobSeeks[index].published =
                updatedJobSeek.data.data.updateJobSeek.published;
            }
          });

          this.$root.$bvToast.toast(
            "Der Status des Stellengesuchs wurde erfolgreich aktualisiert.",
            {
              title: `Status aktualisiert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );
        } catch (err) {
          this.$root.$bvToast.toast(
            "Der Status konnte nicht aktualisiert werden. Bitte versuche es später noch einmal.",
            {
              title: `Fehler beim Aktualisieren`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async deleteJobSeek(jobSeekId) {
        try {
          const response = await this.$axios.post("/graphql", {
            query: `
              mutation {
                deleteJobSeek(_id: "${jobSeekId}") {
                  _id
                }
              }
            `
          });

          if (response.data.errors) {
            throw new Error("JobSeek could not be deleted.");
          }

          this.jobSeeks.forEach((jobSeek, index) => {
            if (jobSeek._id === jobSeekId) {
              this.jobSeeks.splice(index, 1);
            }
          });
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Der JobSeek konnte nicht gelöscht werden. Error: ${err.message}`,
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
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.published) {
          return "table-success";
        }
      }
    }
  };
</script>
