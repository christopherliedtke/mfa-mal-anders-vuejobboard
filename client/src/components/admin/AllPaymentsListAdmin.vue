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
          <b-button @click.prevent="filter.searchTerm = ''"
            ><Fa icon="times"
          /></b-button>
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
        ><Fa class="mr-2" icon="plus" />Neue Zahlung</b-button
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
          ><Fa icon="edit"></Fa>
        </b-button>

        <BDropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            <Fa class="mr-2" icon="ellipsis-v" />
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
            <Fa class="mr-2" icon="envelope" /> E-Mail
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
          <Fa class="mr-2" icon="download" />Invoice
        </b-button>
        <BDropdown class="mr-2 mb-2" size="sm" left variant="primary">
          <template #button-content>
            <Fa class="mr-2" icon="share-alt" /> Share
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
          <Fa class="mr-2" icon="trash-alt" />Delete
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
                payment.user._id,
                payment.user.email,
                payment.job._id,
                payment.job.title
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
