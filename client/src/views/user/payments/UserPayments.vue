<template>
  <div class="dashboard container py-3 py-lg-5">
    <UserNav class="mb-3" />

    <h3>Meine Rechnungen</h3>
    <p>
      Hier können Sie Ihre Rechnungen einsehen.
    </p>
    <b-button class="mr-2 mb-2" variant="primary" @click="getPaymentsByUserId"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-repeat mr-2"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
        />
        <path
          fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        /></svg
      >Aktualisieren</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-primary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >
    <div v-if="myPayments.length > 0">
      <div
        v-for="payment in myPayments"
        :key="payment._id"
        class="card shadow1 bg-light my-3"
      >
        <div class="card-body">
          <h4 class="bold">
            {{
              payment.number ||
                "RE-" +
                  "000000".slice(0, 6 - payment.invoiceNo.toString().length) +
                  payment.invoiceNo.toString()
            }}
          </h4>
          <div>
            <span
              v-if="
                payment.status === 'paid' ||
                  payment.stripeInvoiceStatus === 'paid'
              "
              class="badge badge-pill badge-success mr-1"
              >bezahlt</span
            >
            <span
              v-if="
                payment.status === 'pending' ||
                  payment.stripeInvoiceStatus === 'open' ||
                  payment.stripeInvoiceStatus === 'uncollectible'
              "
              class="badge badge-pill badge-warning mr-1"
              >offen</span
            >
            <span
              v-if="
                payment.status === 'cancelled' ||
                  payment.stripeInvoiceStatus === 'void'
              "
              class="badge badge-pill badge-danger mr-1"
              >storniert</span
            >
          </div>
          <div class="my-3">
            <div v-if="payment.job && payment.job.company">
              <!-- eslint-disable -->
              <strong>Stellenanzeige: </strong>
              <span
                class="text-muted"
                v-html="payment.job.title + ' | ' + payment.job.company.name"
              ></span>
              <!-- eslint-enable -->
            </div>
            <div>
              <strong>Rechnungsdatum: </strong>
              <span class="text-muted">{{
                new Date(
                  parseInt(
                    payment.finalizedAt ||
                      payment.invoiceDate ||
                      payment.createdAt
                  )
                ).toLocaleDateString("de-DE")
              }}</span>
            </div>
            <!-- <div v-if="payment.paidAt">
              Zahlung eingegangen am:
              {{
                new Date(parseInt(payment.paidAt)).toLocaleDateString("de-DE")
              }}
            </div>
            <div v-if="payment.paymentExpiresAt && payment.status === 'paid'">
              Zahlung läuft ab am:
              {{
                new Date(parseInt(payment.paymentExpiresAt)).toLocaleDateString(
                  "de-DE"
                )
              }}
            </div> -->
          </div>
          <div class="d-flex justify-content-start align-items-end flex-wrap">
            <div
              v-if="
                payment.stripeHostedInvoiceUrl &&
                  (payment.stripeInvoiceStatus === 'open' ||
                    payment.stripeInvoiceStatus === 'uncollectible')
              "
            >
              <b-button
                class="mr-2 mb-2 mb-md-0"
                :href="payment.stripeHostedInvoiceUrl"
                target="_blank"
                variant="success"
                size="sm"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-credit-card-2-front-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
                  />
                </svg>
                Rechnung bezahlen</b-button
              >
            </div>
            <div
              v-if="
                payment.stripeInvoiceStatus === 'paid' &&
                  payment.stripeReceiptUrl
              "
            >
              <b-button
                class="mr-2 mb-2 mb-md-0"
                :href="payment.stripeReceiptUrl"
                target="_blank"
                variant="success"
                size="sm"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                Zahlungsbeleg anzeigen</b-button
              >
            </div>
            <div v-if="payment.stripeInvoicePdf">
              <b-button
                class="mr-2 mb-2 mb-md-0"
                :href="payment.stripeInvoicePdf"
                target="_blank"
                variant="secondary"
                size="sm"
                ><svg
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
                  />
                </svg>
                Rechnung herunterladen</b-button
              >
            </div>
            <div v-else>
              <b-button
                class="mr-2 mb-2 mb-md-0"
                :href="`/api/invoice/download/${payment._id}`"
                target="_blank"
                variant="secondary"
                size="sm"
                ><svg
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
                  />
                </svg>
                Rechnung herunterladen</b-button
              >
            </div>
            <!-- <div>
              <b-button
                v-if="payment.receiptUrl"
                class="mr-2 mb-2 mb-md-0"
                :href="`${payment.receiptUrl}`"
                target="_blank"
                variant="info"
                size="sm"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  /></svg
                >Zahlungsbeleg abrufen</b-button
              >
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <Head title="Meine Zahlungen" desc="" img="" />
  </div>
</template>

<script>
  import UserNav from "@/components/navs/UserNav.vue";
  export default {
    name: "UserPayments",
    components: {
      UserNav
    },
    data() {
      return {
        myPayments: []
      };
    },
    created() {
      this.getPaymentsByUserId();
    },
    methods: {
      async getPaymentsByUserId() {
        this.$store.dispatch("setOverlay", true);

        try {
          const payments = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myPayments {
                    _id
                    stripeInvoiceId
                    stripeInvoiceStatus
                    stripeHostedInvoiceUrl
                    stripeInvoicePdf
                    stripeReceiptUrl
                    finalizedAt
                    number
                    createdAt
                    updatedAt
                    paidAt
                    paymentExpiresAt
                    invoiceNo
                    invoiceDate
                    amount
                    status
                    receiptUrl
                    job {
                      title
                      company {
                        name
                      }
                    }
                  }
                }
              `
            }
          });

          this.myPayments = payments.data.data.myPayments;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Ihre Zahlungen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
      }
    }
  };
</script>

<style scoped lang="scss">
  .badge {
    font-size: 0.8rem;
  }
</style>
