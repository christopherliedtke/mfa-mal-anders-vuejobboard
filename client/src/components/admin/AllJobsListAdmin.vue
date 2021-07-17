<template>
  <div>
    <b-form id="job-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
        />
        <b-input-group-append>
          <b-button @click.prevent="filter.searchTerm = ''"
            ><Fa icon="times"
          /></b-button>
        </b-input-group-append>
      </b-input-group>
      <div class="inline-block ml-3 my-3 my-lg-0">
        Number of Jobs:
        <strong>{{ computedJobs.length }}</strong>
      </div>
    </b-form>
    <b-table
      responsive
      striped
      hover
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="computedJobs"
      :fields="fields"
      primary-key="_id"
    >
      <template #cell(user)="row">
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
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
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
            ? row.item.company.street +
              " " +
              row.item.company.location +
              " " +
              row.item.company.zipCode +
              " " +
              row.item.company.state +
              " " +
              row.item.company.country
            : ""
        }}
      </template>
      <template #cell(actions)="row">
        <b-button
          class="mr-2 mb-2"
          :to="`/admin/jobs/edit/${row.item._id}`"
          variant="primary"
          size="sm"
          ><Fa icon="edit"></Fa>
        </b-button>
        <b-button
          class="mr-2 mb-2"
          :to="`/admin/jobs/preview/${row.item._id}`"
          target="_blank"
          variant="info"
          size="sm"
          ><Fa scale="1" icon="eye" />
        </b-button>
        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            <Fa class="mr-2" icon="ellipsis-v" />
            Status
          </template>
          <BDropdownItem
            :active="row.item.status === 'draft'"
            variant="secondary"
            @click.prevent="updateJob(row.item._id, 'status', 'draft')"
            >Draft</BDropdownItem
          >
          <!-- <BDropdownItem
                        :active="row.item.status === 'invoice-pending'"
                        variant="secondary"
                        @click.prevent="
                            updateJob(row.item._id, 'status', 'invoice-pending')
                        "
                        >Invoice pending</BDropdownItem
                    > -->
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
        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            <Fa class="mr-2" icon="credit-card" /> Paid Status
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
        <BDropdown class="mr-2 mb-2" size="sm" left variant="info">
          <template #button-content>
            <Fa class="mr-2" icon="envelope" /> E-Mail
          </template>
          <BDropdownItem
            class="mb-0"
            variant="info"
            @click.prevent="sendPublishedEmail(row.item._id)"
            >Send job published</BDropdownItem
          >
        </BDropdown>
        <BDropdown class="mr-2 mb-2" size="sm" left variant="primary">
          <template #button-content>
            <Fa class="mr-2" icon="share-alt" /> Share
          </template>
          <BDropdownItem
            class="mb-0"
            variant="info"
            @click.prevent="socialShareToClipBoard(row.item)"
            >Copy Text</BDropdownItem
          >
        </BDropdown>
        <!-- <b-button
                    class="mr-2 mb-2"
                    size="sm"
                    variant="info"
                    @click="socialShareToClipBoard(row.item._id)"
                >
                    <Fa class="mr-2" icon="share-alt" />Copy
                </b-button> -->
        <b-button
          v-b-modal="'deleteJobModal'"
          size="sm"
          variant="danger"
          @click="jobToDelete = row.item"
        >
          <Fa class="mr-2" icon="trash-alt" />Delete
        </b-button>
      </template>
    </b-table>
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
    name: "AllJobsListAdmin",
    data() {
      return {
        jobs: [],
        jobToDelete: Object,
        error: false,
        filter: {
          searchTerm: ""
        },
        fields: [
          {
            key: "_id",
            label: "Job ID",
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
            key: "status",
            sortable: true
          },
          {
            key: "paid",
            sortable: true
          },
          {
            key: "paidExpiresAt",
            sortable: true
          },
          {
            key: "publishedAt",
            sortable: true
          },
          {
            key: "sentReminder",
            sortable: true
          },
          {
            key: "refreshFrequency",
            sortable: true
          },
          {
            key: "applicationDeadline",
            sortable: true
          },
          {
            key: "payment._id",
            label: "Payment ID",
            sortable: false
          },
          {
            key: "payment.status",
            label: "Paid Status",
            sortable: true
          },
          {
            key: "paidAt",
            sortable: true
          },
          {
            key: "paymentExpiresAt",
            sortable: true
          },
          {
            key: "paidAmount",
            sortable: true
          },
          {
            key: "payment.invoiceNo",
            label: "Invoice No",
            sortable: true
          },
          {
            key: "company.name",
            label: "Company",
            sortable: true
          },
          {
            key: "location",
            sortable: true
          },
          {
            key: "userId._id",
            label: "User ID",
            sortable: false
          },
          {
            key: "user",
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
      computedJobs: {
        get() {
          let jobs = [...this.jobs];

          // filter search term
          if (this.filter.searchTerm) {
            jobs = jobs.filter(job => {
              const searchTerm = this.filter.searchTerm
                .toLowerCase()
                .split(" ");
              const searchProp = [
                job._id,
                job.title,
                job.company.name ? job.company.name : "",
                job.company.street ? job.company.street : "",
                job.company.location ? job.company.location : "",
                job.company.state ? job.company.state : "",
                job.company.zipCode ? job.company.zipCode : "",
                job.company.country ? job.company.country : "",
                job.userId._id ? job.userId._id : "",
                job.userId.firstName ? job.userId.firstName : "",
                job.userId.lastName ? job.userId.lastName : "",
                job.userId.email ? job.userId.email : ""
              ]
                .join(" ")
                .toLowerCase();

              if (searchTerm.every(term => searchProp.includes(term))) {
                return job;
              } else {
                return;
              }
            });
          }

          return jobs;
        }
      }
    },
    created() {
      this.getAllJobs();
    },
    methods: {
      async getAllJobs() {
        this.$store.dispatch("setOverlay", true);

        try {
          const jobs = await this.$axios.get("graphql", {
            params: {
              query: `
                query {
                    adminJobs {
                        _id
                        createdAt
                        updatedAt
                        refreshFrequency
                        status
                        applicationDeadline
                        paid
                        paidExpiresAt
                        publishedAt
                        sentReminder
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
                  applicationDeadline
                  paid
                  paidExpiresAt
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
      // showDeleteJobModal(job) {
      //   this.jobToDelete = job;
      //   this.$bvModal.show("deleteJobModal");
      // },
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
      socialShareToClipBoard(job) {
        let el = document.createElement("textarea");

        el.value = `${job.title} | ${job.company.location}\n\n${
          this.$config.website.url
        }/stellenangebote/job/${
          job._id
        }\n\n#mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${job.company.location
          .replace("-", "")
          .replace(/\s/g, "")
          .toLowerCase()}jobs #${job.company.location
          .replace("-", "")
          .replace(/\s/g, "")
          .toLowerCase()}`;

        document.body.appendChild(el);
        el.select();

        document.execCommand("copy");
        document.body.removeChild(el);
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (
          item.status === "published" &&
          item.paid === true &&
          item.publishedAt <= new Date() &&
          (item.paidExpiresAt >= new Date() ||
            (item.payment && item.payment.paymentExpiresAt >= new Date())) &&
          (!item.applicationDeadline ||
            new Date(item.applicationDeadline) > new Date(new Date().getTime()))
        ) {
          return "table-success";
        }
        if (item.status === "invoice-pending") {
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
      }
    }
  };
</script>
