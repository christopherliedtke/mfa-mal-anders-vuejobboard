<template>
  <div>
    <b-form id="payment-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
        />
        <b-input-group-append>
          <b-button class="px-2" @click.prevent="filter.searchTerm = ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
        Number of Payments:
        <strong>{{ computedPayments.length }}</strong>
      </div>

      <b-button
        class="ml-4 my-2"
        :to="`/admin/payments/edit/new`"
        variant="outline-primary"
        size="sm"
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
        >Neue Zahlung</b-button
      >
    </b-form>
    <b-table
      responsive
      striped
      hover
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="computedPayments"
      :fields="fields"
      primary-key="_id"
    >
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(invoiceDate)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(paidAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(paymentExpiresAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(receiptUrl)="row">
        <b-link v-if="row.value" :href="row.value" target="_blank">Link</b-link>
      </template>
      <template #cell(amount)="row"> {{ row.value / 100 }}€ </template>
      <template #cell(fee)="row"> {{ row.value / 100 }}€ </template>
      <template #cell(taxes)="row"> {{ row.value / 100 }}€ </template>
      <template #cell(user)="row">
        {{
          row.value._id ? row.value.lastName + ", " + row.value.firstName : ""
        }}
        <a
          v-if="row.value._id && row.value.email"
          :href="`mailto:${row.value.email}`"
        >
          {{ row.value.email }}</a
        >
      </template>

      <template #cell(actions)="row">
        <b-button
          class="mr-2 mb-2"
          :to="`/admin/payments/edit/${row.item._id}`"
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

        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
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
            Paid Status
          </template>
          <BDropdownItem
            :active="row.item.status === 'pending'"
            variant="secondary"
            @click.prevent="updatePayment(row.item._id, 'status', 'pending')"
            >Pending</BDropdownItem
          >
          <BDropdownItem
            :active="row.item.status === 'paid'"
            variant="success"
            @click.prevent="updatePayment(row.item._id, 'status', 'paid')"
            >Paid</BDropdownItem
          >
          <BDropdownItem
            :active="row.item.status === 'cancelled'"
            variant="danger"
            @click.prevent="updatePayment(row.item._id, 'status', 'cancelled')"
            >Cancelled</BDropdownItem
          >
        </BDropdown>
        <BDropdown class="mr-2 mb-2" size="sm" left variant="info">
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
            @click.prevent="sendPublishedEmail(row.item.job._id)"
            >Send job published</BDropdownItem
          >
        </BDropdown>
        <b-button
          class="mr-2 mb-2"
          size="sm"
          variant="info"
          :href="`/api/invoice/download/${row.item._id}`"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-download mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            /></svg
          >Invoice
        </b-button>
        <BDropdown class="mr-2 mb-2" size="sm" left variant="primary">
          <template #button-content>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-share-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
              />
            </svg>
            Share
          </template>
          <BDropdownItem
            class="mb-0"
            variant="info"
            @click.prevent="socialShareJobToClipboard(row.item.job)"
            >Copy Text</BDropdownItem
          >
        </BDropdown>

        <b-button
          v-b-modal="'deletePaymentModal'"
          size="sm"
          variant="danger"
          @click="paymentToDelete = row.item"
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
      </template>
    </b-table>

    <BModal
      id="deletePaymentModal"
      :title="`Delete Payment ${paymentToDelete._id}`"
      ok-title="Delete Payment"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deletePayment(paymentToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this job?
      </p></BModal
    >
  </div>
</template>

<script>
  import socialShareJobToClipboard from "@/utils/socialShareJobToClipboard.js";
  import Vue from "vue";
  import { BModal, BDropdown, BDropdownItem, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  Vue.directive("b-modal", VBModal);
  export default {
    name: "AllPaymentsListAdmin",
    data() {
      return {
        payments: [],
        paymentToDelete: Object,
        filter: {
          searchTerm: ""
        },
        socialShareJobToClipboard,
        fields: [
          {
            key: "_id",
            label: "Payment ID",
            sortable: false
          },
          {
            key: "status",
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
            key: "paidAt",
            sortable: true
          },
          {
            key: "paymentExpiresAt",
            sortable: true
          },
          {
            key: "pricingPackage"
          },
          {
            key: "invoiceNo",
            sortable: true
          },
          {
            key: "invoiceDate",
            sortable: true
          },
          {
            key: "paymentType",
            sortable: true
          },
          {
            key: "stripePaymentIntent",
            sortable: true
          },
          {
            key: "receiptUrl",
            sortable: true
          },
          {
            key: "receiptNumber",
            sortable: true
          },
          {
            key: "amount",
            sortable: true
          },
          {
            key: "fee",
            sortable: true
          },
          {
            key: "taxes",
            sortable: true
          },
          {
            key: "job._id",
            label: "Job ID",
            sortable: true
          },
          {
            key: "job.title",
            label: "Job Title",
            sortable: true
          },
          {
            key: "user._id",
            label: "User ID",
            sortable: true
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
      computedPayments: {
        get() {
          let payments = [...this.payments];

          // filter search term
          if (this.filter.searchTerm) {
            payments = payments.filter(payment => {
              const searchTerm = this.filter.searchTerm
                .toLowerCase()
                .split(" ");
              const searchProp = [
                payment._id,
                payment.status ? payment.status : "",
                payment.invoiceNo ? payment.invoiceNo : "",
                payment.amount,
                payment.user ? payment.user._id : "",
                payment.user ? payment.user.email : "",
                payment.job ? payment.job._id : "",
                payment.job ? payment.job.title : ""
              ]
                .join(" ")
                .toLowerCase();

              if (searchTerm.every(term => searchProp.includes(term))) {
                return payment;
              } else {
                return;
              }
            });
          }

          return payments;
        }
      }
    },
    created() {
      this.getAllPayments();
    },
    methods: {
      async getAllPayments() {
        this.$store.dispatch("setOverlay", true);

        try {
          const payments = await this.$axios.get("/graphql", {
            params: {
              query: `
                                query {
                                    payments {
                                        _id
                                        status
                                        createdAt
                                        updatedAt
                                        paidAt
                                        paymentExpiresAt
                                        stripePaymentIntent
                                        receiptUrl
                                        receiptNumber
                                        invoiceNo
                                        invoiceDate
                                        paymentType
                                        pricingPackage
                                        amount
                                        fee
                                        taxes
                                        job {
                                            _id
                                            title
                                            company {
                                                location
                                            }
                                        }
                                        user {
                                            _id
                                            firstName
                                            lastName
                                            email
                                        }
                                    }
                                }
                            `
            }
          });

          this.payments = payments.data.data.payments;
        } catch (err) {
          this.$root.$bvToast.toast(
            `Payments konnten nicht geladen werden. Error: ${err.message}`,
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
      async updatePayment(id, key, value) {
        try {
          const payment = await this.$axios.post("/graphql", {
            query: `
                            mutation {
                                updatePayment (_id: "${id}", ${key}: ${
              typeof value === "string" ? `"${value}"` : value
            }) {
                                    _id
                                    status
                                    createdAt
                                    updatedAt
                                    paidAt
                                    paymentExpiresAt
                                    stripePaymentIntent
                                    receiptUrl
                                    receiptNumber
                                    invoiceNo
                                    invoiceDate
                                    paymentType
                                    pricingPackage
                                    amount
                                    fee
                                    taxes
                                    job {
                                        _id
                                        title
                                        company {
                                            location
                                        }
                                    }
                                    user {
                                        _id
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            }
                        `
          });

          if (payment.data.errors) {
            throw new Error("Payment could not be saved!");
          }

          this.payments = this.payments.map(paymentOld => {
            if (paymentOld._id === payment.data.data.updatePayment._id) {
              return payment.data.data.updatePayment;
            } else {
              return paymentOld;
            }
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            `Die Zahlung konnte nicht gespeichert werden. Error: ${err.message}`,
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
      // showDeletePaymentModal(payment) {
      //   this.paymentToDelete = payment;
      //   this.$bvModal.show("deletePaymentModal");
      // },
      async deletePayment(paymentId) {
        this.$store.dispatch("setOverlay", true);

        try {
          const payment = await this.$axios.post("/graphql", {
            query: `
                            mutation {
                                deletePayment(_id: "${paymentId}") {
                                    _id
                                    status
                                }
                            }
                        `
          });

          if (payment.data.errors) {
            throw new Error("Payment could not be deleted.");
          }

          this.payments.forEach((payment, index) => {
            if (payment._id === paymentId) {
              this.payments.splice(index, 1);
            }
          });
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Die Zahlung konnte nicht gelöscht werden. Error: ${err.message}`,
            {
              title: `Fehler beim Löschen`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
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
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.status === "pending") {
          return "table-warning";
        }
        if (item.status === "paid" && item.paymentExpiresAt >= new Date()) {
          return "table-success";
        }
        if (item.status === "cancelled" || item.paymentExpiresAt < new Date()) {
          return "table-danger";
        }
      }
    }
  };
</script>
