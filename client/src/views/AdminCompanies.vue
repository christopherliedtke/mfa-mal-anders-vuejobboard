<template>
  <div id="admin-companies" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin Companies</h1>
    <b-form id="company-filter" inline @submit.prevent>
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
        Number of Companies:
        <strong>{{ filter.searchTerm ? count : companies.length }}</strong>
      </div>
    </b-form>
    <b-table
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :items="companies"
      :fields="fields"
      primary-key="_id"
      :filter="filter.searchTerm"
      @filtered="
        filteredItems => {
          count = filteredItems.length;
        }
      "
    >
      <template #cell(userId)="row">
        <b-link :to="`/admin/users?s=${row.item.userId._id}`">
          {{ row.item.userId._id }}
        </b-link>
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(numberOfJobs)="row">
        {{ row.item.jobs.length }}
      </template>
      <template #cell(location)="row">
        {{
          row.item.street +
            " " +
            row.item.location +
            " " +
            row.item.zipCode +
            " " +
            row.item.state
        }}
      </template>
      <template #cell(actions)="row">
        <div class="d-flex">
          <b-button
            class="mr-2"
            :to="`/admin/companies/edit/${row.item._id}`"
            variant="primary"
            size="sm"
          >
            <svg
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
          <b-button
            v-b-modal="'deleteCompanyModal'"
            size="sm"
            variant="danger"
            @click="companyToDelete = row.item"
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
              />
            </svg>
            Delete
          </b-button>
        </div>
      </template>
    </b-table>
    <BModal
      id="deleteCompanyModal"
      :title="`Delete ${companyToDelete.name}`"
      ok-title="Delete Company"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteCompany(companyToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this company?
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
  import { BModal, VBModal, BTable } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("BModal", VBModal);
  Vue.component("BTable", BTable);
  export default {
    name: "AdminCompanies",
    components: {
      NavAdmin
    },
    data() {
      return {
        companies: [],
        count: 0,
        jobs: [],
        companyToDelete: {},
        error: false,
        filter: {
          searchTerm: ""
        },
        fields: [
          {
            key: "_id",
            label: "CompanyID",
            sortable: false
          },
          {
            key: "name",
            label: "Name",
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
            key: "location",
            label: "Location",
            sortable: false
          },
          {
            key: "numberOfJobs",
            label: "NoOfJobs",
            sortable: false
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
      this.getAllCompanies();
    },
    methods: {
      async getAllCompanies() {
        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  companies {
                    _id
                    createdAt
                    updatedAt
                    name
                    street
                    zipCode
                    location
                    state
                    country
                    userId {
                      _id
                    }
                    jobs {
                      _id
                    }  
                  }
                }
              `
            }
          });

          this.companies = response.data.data.companies;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Unternehmen konnten nicht geladen werden. Error: ${err}`,
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
          const response = await this.$axios.post("/graphql", {
            query: `
              mutation {
                adminDeleteCompany(_id: "${companyId}") {
                  _id
                }
              }
            `
          });

          if (response.data.data.adminDeleteCompany._id) {
            this.companies.forEach((company, index) => {
              if (company._id === companyId) {
                this.companies.splice(index, 1);
              }
            });
          } else {
            this.error = true;
            this.$root.$bvToast.toast(
              `Das Unternehmen konnte nicht gelöscht werden.`,
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
          this.error = true;
          this.$root.$bvToast.toast(
            `Das Unternehmen konnte nicht gelöscht werden. Error: ${err}`,
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
