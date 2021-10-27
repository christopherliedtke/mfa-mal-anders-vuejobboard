<template>
  <div>
    <h3>Meine Zahlungen</h3>
    <p>
      Hier können Sie Ihre getätigten/ausstehenden Zahlungen bzw. Rechnungen
      einsehen.
    </p>
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
          <!-- eslint-disable -->
          <h4
            v-html="payment.job.title + ' | ' + payment.job.company.name"
          ></h4>
          <!-- eslint-enable -->
          <div>
            <span
              v-if="payment.status === 'paid'"
              class="badge badge-pill badge-success mr-1"
              >bezahlt</span
            >
            <span
              v-if="payment.status === 'pending'"
              class="badge badge-pill badge-warning mr-1"
              >ausstehend</span
            >
            <span
              v-if="payment.status === 'cancelled'"
              class="badge badge-pill badge-danger mr-1"
              >verworfen</span
            >
          </div>
          <div class="my-3">
            <div>
              Rechnungsdatum:
              {{
                new Date(
                  parseInt(payment.invoiceDate || payment.createdAt)
                ).toLocaleDateString("de-DE")
              }}
            </div>
            <div v-if="payment.paidAt">
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
            </div>
          </div>
          <div class="d-flex justify-content-start align-items-end">
            <div>
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
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyPaymentsList",
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
