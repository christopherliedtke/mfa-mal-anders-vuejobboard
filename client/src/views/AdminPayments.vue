<template>
  <div id="admin-payments" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin Invoices</h1>
    <b-form id="payment-filter" inline @submit.prevent>
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
      <!-- <b-button
        class="my-2 mr-2"
        :to="`/admin/invoices/edit/new`"
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
      > -->
      <div class="inline-block my-2 my-lg-0">
        Number of Payments:
        <strong>{{ filter.searchTerm ? count : payments.length }}</strong>
      </div>
    </b-form>
    <b-table
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="payments"
      :fields="fields"
      primary-key="_id"
      :filter="filter.searchTerm"
      @filtered="
        filteredItems => {
          count = filteredItems.length;
        }
      "
    >
      <template #cell(stripeInvoiceId)="row">
        <b-link
          v-if="row.value"
          :href="`https://dashboard.stripe.com/search?query=${row.value}`"
          target="_blank"
          >{{ row.value }}</b-link
        >
      </template>
      <template #cell(number)="row">
        <b-link
          v-if="row.value"
          :href="`https://dashboard.stripe.com/search?query=${row.value}`"
          target="_blank"
          >{{ row.value }}</b-link
        >
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(invoiceDate)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(finalizedAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(paidAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(paymentExpiresAt)="row">
        {{ row.value && new Date(row.value).toLocaleString() }}
      </template>
      <!-- <template #cell(receiptUrl)="row">
        <b-link v-if="row.value" :href="row.value" target="_blank">Link</b-link>
      </template> -->
      <template #cell(amount)="row"> {{ row.value / 100 }}€ </template>
      <template #cell(total)="row"> {{ row.value / 100 }}€ </template>
      <!-- <template #cell(fee)="row"> {{ row.value / 100 }}€ </template> -->
      <template #cell(taxes)="row">
        {{ (row.item.amount * (row.item.taxRate || 0)) / 100 }}€
      </template>
      <template #cell(tax)="row"> {{ row.value / 100 }}€ </template>
      <template #cell(jobId)="row">
        <b-link v-if="row.item.job" :to="`/admin/jobs?s=${row.item.job._id}`">
          {{ row.item.job._id }}
        </b-link>
      </template>
      <template #cell(userId)="row">
        <b-link
          v-if="row.item.user"
          :to="`/admin/users?s=${row.item.user._id}`"
        >
          {{ row.item.user._id }}
        </b-link>
      </template>
      <!-- <template #cell(user)="row">
        <div v-if="row.value">
          {{
            row.value._id ? row.value.lastName + ", " + row.value.firstName : ""
          }}
          <a
            v-if="row.value._id && row.value.email"
            :href="`mailto:${row.value.email}`"
          >
            {{ row.value.email }}</a
          >
        </div>
      </template> -->

      <template #cell(actions)="row">
        <div class="d-flex">
          <b-button
            v-if="!row.item.stripeInvoiceId"
            class="mr-2"
            :to="`/admin/invoices/edit/${row.item._id}`"
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
          <!-- <b-button
            v-else
            class="mr-2"
            :href="
              `https://dashboard.stripe.com/search?query=${row.item.stripeInvoiceId}`
            "
            target="_blank"
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
            Open Stripe
          </b-button> -->

          <BDropdown
            v-if="!row.item.stripeInvoiceId"
            class="mr-2"
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
              @click.prevent="
                updatePayment(row.item._id, 'status', 'cancelled')
              "
              >Cancelled</BDropdownItem
            >
          </BDropdown>
          <BDropdown
            v-if="!row.item.stripeInvoiceId"
            class="mr-2"
            size="sm"
            left
            variant="info"
          >
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
            v-if="!row.item.stripeInvoiceId"
            class="mr-2"
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
          <b-button
            v-else
            class="mr-2"
            size="sm"
            variant="info"
            :href="row.item.stripeInvoicePdf"
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
        </div>
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
    name: "AdminPayments",
    components: {
      NavAdmin
    },
    data() {
      return {
        payments: [],
        count: 0,
        paymentToDelete: Object,
        filter: {
          searchTerm: this.$route.query.s || ""
        },
        fields: [
          {
            key: "_id",
            label: "PaymentID",
            sortable: false
          },
          {
            key: "stripeInvoiceId",
            label: "StripeInvoiceId",
            sortable: true
          },
          {
            key: "number",
            label: "InvoiceNo",
            sortable: true
          },
          {
            key: "invoiceNo",
            label: "InvoiceNoLegacy",
            sortable: true
          },
          {
            key: "stripeInvoiceStatus",
            label: "StripeInvoiceStatus",
            sortable: true
          },
          {
            key: "status",
            label: "Status",
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
            key: "paidAt",
            label: "PaidAt",
            sortable: true
          },
          {
            key: "paymentExpiresAt",
            label: "PaymentExpiresAt",
            sortable: true
          },
          // {
          //   key: "pricingPackage",
          //   label: "PricingPackage"
          // },
          {
            key: "finalizedAt",
            label: "FinalizedAt",
            sortable: true
          },
          {
            key: "invoiceDate",
            label: "InvoiceDateLegacy",
            sortable: true
          },
          // {
          //   key: "paymentType",
          //   label: "PaymentType",
          //   sortable: true
          // },
          // {
          //   key: "stripePaymentIntent",
          //   label: "StripePaymentIntent",
          //   sortable: true
          // },
          // {
          //   key: "receiptUrl",
          //   label: "ReceiptUrl",
          //   sortable: true
          // },
          // {
          //   key: "receiptNumber",
          //   label: "ReceiptNumber",
          //   sortable: true
          // },
          {
            key: "total",
            label: "Total",
            sortable: true
          },
          {
            key: "tax",
            label: "Tax",
            sortable: true
          },
          {
            key: "amount",
            label: "Amount",
            sortable: true
          },
          // {
          //   key: "fee",
          //   label: "Fee",
          //   sortable: true
          // },
          // {
          //   key: "taxRate",
          //   label: "TaxRate",
          //   sortable: false
          // },
          {
            key: "taxes",
            label: "TaxesLegacy",
            sortable: true
          },
          {
            key: "jobId",
            label: "JobID",
            sortable: true
          },
          {
            key: "job.title",
            label: "JobTitle",
            sortable: true
          },
          // {
          //   key: "user._id",
          //   label: "UserID",
          //   sortable: true
          // },
          {
            key: "userId",
            label: "UserID",
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
                    stripeInvoiceId
                    status
                    stripeInvoiceStatus
                    stripeHostedInvoiceUrl
                    stripeInvoicePdf
                    total
                    tax
                    number
                    createdAt
                    updatedAt
                    finalizedAt
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
                    taxRate
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
                stripeInvoiceId
                status
                stripeInvoiceStatus
                stripeHostedInvoiceUrl
                stripeInvoicePdf
                total
                tax
                number
                createdAt
                updatedAt
                finalizedAt
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
                taxRate
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
        if (item.status === "pending" || item.stripeInvoiceStatus === "open") {
          return "table-warning";
        }
        if (item.status === "paid" || item.stripeInvoiceStatus === "paid") {
          return "table-success";
        }
        if (
          item.status === "cancelled" ||
          item.stripeInvoiceStatus === "void"
        ) {
          return "table-danger";
        }
      }
    }
  };
</script>
