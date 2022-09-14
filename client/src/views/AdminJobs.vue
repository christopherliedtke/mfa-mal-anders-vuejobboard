<template>
  <div id="admin-jobs" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin Jobs</h1>
    <b-form id="job-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
          debounce="500"
        />
        <b-input-group-append>
          <b-button class="px-2" @click.prevent="resetFilter">
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
        Number of Jobs:
        <strong>{{ filter.searchTerm ? count : jobs.length }}</strong>
      </div>
    </b-form>
    <BTable
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="jobs"
      :fields="fields"
      primary-key="_id"
      :filter="filter.searchTerm"
      @filtered="
        filteredItems => {
          count = filteredItems.length;
        }
      "
    >
      <template #cell(user)="row">
        <div v-if="row.item.userId">
          {{
            row.item.userId
              ? row.item.userId.lastName + ", " + row.item.userId.firstName
              : ""
          }}
          <a
            v-if="row.item.userId && row.item.userId.email"
            :href="`mailto:${row.item.userId.email}`"
          >
            {{ row.item.userId.email }}</a
          >
        </div>
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(firstPublishedAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(publishedAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(paidAt)="row">
        {{
          row.item.payment &&
            row.item.payment.paidAt &&
            new Date(row.item.payment.paidAt).toLocaleString()
        }}
      </template>
      <template #cell(applicationDeadline)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(paymentId)="row">
        <b-link
          v-if="row.item.payment"
          :to="`/admin/invoices?s=${row.item.payment._id}`"
          >{{ row.item.payment._id }}</b-link
        >
      </template>
      <template #cell(paymentExpiresAt)="row">
        {{
          row.item.payment &&
            row.item.payment.paymentExpiresAt &&
            new Date(row.item.payment.paymentExpiresAt).toLocaleString()
        }}
      </template>
      <template #cell(paidExpiresAt)="row">
        {{
          row.item.paidExpiresAt &&
            new Date(row.item.paidExpiresAt).toLocaleString()
        }}
      </template>
      <template #cell(paidAmount)="row">
        {{
          row.item.payment &&
            row.item.payment.amount &&
            row.item.payment.amount / 100
        }}€
      </template>
      <template #cell(location)="row">
        {{
          row.item.company
            ? row.item.company.street.replace(/(\s)/g, "&nbsp;") +
              ", " +
              row.item.company.location +
              "&nbsp;" +
              row.item.company.zipCode +
              ", " +
              row.item.company.state
            : ""
        }}
      </template>
      <template #cell(userId)="row">
        <b-link :to="`/admin/users?s=${row.item.userId._id}`">
          {{ row.item.userId._id }}
        </b-link>
      </template>
      <template #cell(analytics)="row">
        <AnalyticsPageViews
          :url="`/job/${row.item._id}`"
          :day="new Date()"
          period="range"
          :date-from="new Date(row.item.createdAt)"
          :date-to="new Date()"
        />
        <AnalyticsJobApplications
          :job-id="row.item._id"
          :day="new Date()"
          period="range"
          :date-from="new Date(row.item.createdAt)"
          :date-to="new Date()"
        />
      </template>
      <template #cell(actions)="row">
        <div class="d-flex">
          <b-button
            class="mr-2"
            :to="`/admin/jobs/edit/${row.item._id}`"
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
            :to="`/admin/jobs/preview/${row.item._id}`"
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
                />
              </svg>
              Status
            </template>
            <BDropdownItem
              :active="row.item.status === 'draft'"
              variant="secondary"
              @click.prevent="updateJob(row.item._id, 'status', 'draft')"
              >Draft</BDropdownItem
            >
            <BDropdownItem
              :active="row.item.status === 'invoice-pending'"
              variant="secondary"
              @click.prevent="
                updateJob(row.item._id, 'status', 'invoice-pending')
              "
              >Invoice pending</BDropdownItem
            >
            <BDropdownItem
              :active="row.item.status === 'published'"
              variant="success"
              @click.prevent="updateJob(row.item._id, 'status', 'published')"
              >Published</BDropdownItem
            >
            <BDropdownItem
              :active="row.item.status === 'unpublished'"
              variant="danger"
              @click.prevent="updateJob(row.item._id, 'status', 'unpublished')"
              >Unpublished</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              :active="row.item.status === 'deleted'"
              variant="danger"
              @click.prevent="updateJob(row.item._id, 'status', 'deleted')"
              >Deleted</BDropdownItem
            >
          </BDropdown>
          <BDropdown class="mr-2" size="sm" left variant="secondary">
            <template #button-content>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-credit-card-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"
                />
              </svg>
              Paid Status
            </template>
            <BDropdownItem
              :active="row.item.paid === false"
              variant="danger"
              @click.prevent="updateJob(row.item._id, 'paid', false)"
              >Unpaid</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              :active="row.item.paid === true"
              variant="success"
              @click.prevent="updateJob(row.item._id, 'paid', true)"
              >Paid</BDropdownItem
            >
          </BDropdown>
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
              E-Mail
            </template>
            <BDropdownItem
              class="mb-0"
              variant="info"
              @click.prevent="sendPublishedEmail(row.item._id)"
              >Send job published</BDropdownItem
            >
          </BDropdown>
          <b-button
            v-b-modal="'deleteJobModal'"
            size="sm"
            variant="danger"
            @click="jobToDelete = row.item"
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
      id="deleteJobModal"
      :title="`Delete ${jobToDelete.title}`"
      ok-title="Delete Job"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteJob(jobToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this job?
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
  import AnalyticsPageViews from "@/components/AnalyticsPageViews.vue";
  import AnalyticsJobApplications from "@/components/AnalyticsJobApplications.vue";
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
    name: "AdminJobs",
    components: {
      NavAdmin,
      AnalyticsPageViews,
      AnalyticsJobApplications
    },
    data() {
      return {
        jobs: [],
        count: 0,
        jobToDelete: Object,
        error: false,
        filter: {
          searchTerm: this.$route.query.s || ""
        },
        fields: [
          {
            key: "_id",
            label: "JobID",
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
            key: "status",
            label: "Status",
            sortable: true
          },
          {
            key: "stripeInvoiceStatus",
            label: "StripeInvoiceStatus",
            sortable: true
          },
          {
            key: "paid",
            label: "Paid",
            sortable: true
          },
          {
            key: "paidExpiresAt",
            label: "PaidExpiresAt",
            sortable: true
          },
          {
            key: "firstPublishedAt",
            label: "FirstPublishedAt",
            sortable: true
          },
          {
            key: "publishedAt",
            label: "PublishedAt",
            sortable: true
          },
          {
            key: "sentReminder",
            label: "SentReminder",
            sortable: true
          },
          {
            key: "refreshFrequency",
            label: "RefreshFrequency",
            sortable: true
          },
          // {
          //   key: "applicationDeadline",
          //   label: "ApplicationDeadline",
          //   sortable: true
          // },
          // {
          //   key: "paymentId",
          //   label: "PaymentID",
          //   sortable: false
          // },
          // {
          //   key: "payment.status",
          //   label: "PaidStatus",
          //   sortable: true
          // },
          // {
          //   key: "paidAt",
          //   label: "PaidAt",
          //   sortable: true
          // },
          // {
          //   key: "paymentExpiresAt",
          //   label: "PaymentExpiresAt",
          //   sortable: true
          // },
          // {
          //   key: "paidAmount",
          //   label: "PaidAmount",
          //   sortable: true
          // },
          // {
          //   key: "payment.invoiceNo",
          //   label: "InvoiceNo",
          //   sortable: true
          // },
          {
            key: "company.name",
            label: "Company",
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
            key: "user",
            label: "User",
            sortable: true
          },
          {
            key: "analytics",
            label: "Analytics",
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
      this.getAllJobs();
    },
    methods: {
      async getAllJobs() {
        this.$store.dispatch("setOverlay", true);

        try {
          const jobs = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  adminJobs {
                    _id
                    createdAt
                    updatedAt
                    refreshFrequency
                    status
                    stripeInvoiceStatus
                    paid
                    paidExpiresAt
                    firstPublishedAt
                    publishedAt
                    sentReminder
                    title
                    company {
                      name
                      street
                      location
                      state
                      zipCode
                    }
                    userId {
                      _id
                      createdAt
                      firstName
                      lastName
                      email
                    }
                  }
                }
              `
            }
          });

          if (!jobs.data.data.adminJobs) {
            throw new Error("Jobs could not be loaded!");
          }

          this.jobs = jobs.data.data.adminJobs;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Jobs konnten nicht geladen werden. Error: ${err.message}`,
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
      async updateJob(id, key, value) {
        try {
          const job = await this.$axios.post("/graphql", {
            query: `
              mutation {
                  adminUpdateJob (_id: "${id}", ${key}: ${
              typeof value === "string" ? `"${value}"` : value
            }) {
                _id
                createdAt
                updatedAt
                refreshFrequency
                status
                stripeInvoiceStatus
                applicationDeadline
                paid
                paidExpiresAt
                firstPublishedAt
                publishedAt
                title
                company {
                  name
                  street
                  location
                  state
                  zipCode
                  country
                }
                userId {
                  _id
                  createdAt
                  firstName
                  lastName
                  email
                }
                payment {
                  _id
                  status
                  amount
                  paidAt
                  paymentExpiresAt
                  invoiceNo
                }
              }
            }
          `
          });

          if (job.data.errors) {
            throw new Error("Job could not be saved!");
          }

          this.jobs = this.jobs.map(jobOld => {
            if (jobOld._id === job.data.data.adminUpdateJob._id) {
              return job.data.data.adminUpdateJob;
            } else {
              return jobOld;
            }
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            `Der Job konnte nicht gespeichert werden. Error: ${err.message}`,
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
      async sendPublishedEmail(jobId) {
        this.$store.dispatch("setOverlay", true);

        try {
          const sentEmail = await this.$axios.post(
            "/api/send-email/job-published",
            { jobId }
          );

          if (!sentEmail.data.success) {
            throw new Error();
          }

          this.$root.$bvToast.toast(`Die E-Mail wurde erfolgreich gesendet.`, {
            title: `E-Mail gesendet`,
            variant: "success",
            toaster: "b-toaster-bottom-right",
            solid: true,
            noAutoHide: true
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            `E-Mail konnte nicht gesendet werden. Error: ${err}`,
            {
              title: `Fehler beim Senden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async deleteJob(jobId) {
        try {
          const response = await this.$axios.post("/graphql", {
            query: `
              mutation {
                adminDeleteJob(_id: "${jobId}") {
                  _id
                  status
                }
              }
            `
          });

          if (response.data.errors) {
            throw new Error("Job could not be deleted.");
          }

          this.jobs.forEach((job, index) => {
            if (job._id === jobId) {
              this.jobs.splice(index, 1);
            }
          });
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Der Job konnte nicht gelöscht werden. Error: ${err.message}`,
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
        if (
          item.status === "published" &&
          (item.paid === true || item.stripeInvoiceStatus === "paid") &&
          item.publishedAt <= new Date() &&
          (item.paidExpiresAt >= new Date() ||
            (item.payment && item.payment.paymentExpiresAt >= new Date())) &&
          (!item.applicationDeadline ||
            new Date(item.applicationDeadline) > new Date(new Date().getTime()))
        ) {
          return "table-success";
        }
        if (
          item.status === "invoice-pending" ||
          item.stripeInvoiceStatus === "open"
        ) {
          return "table-warning";
        }
        if (
          item.status === "unpublished" ||
          (item.applicationDeadline &&
            new Date(item.applicationDeadline) <
              new Date(new Date().getTime())) ||
          item.paidExpiresAt < new Date()
        ) {
          return "table-danger";
        }
      },
      resetFilter() {
        this.filter.searchTerm = "";
        const query = {};

        this.$router
          .replace({
            query
          })
          .catch(() => {});
      }
    }
  };
</script>
