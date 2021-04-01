<template>
    <div>
        <h3>Meine Zahlungen</h3>
        <p>
            Hier können Sie Ihre getätigten/ausstehenden Zahlungen bzw.
            Rechnungen einsehen.
        </p>
        <b-button
            class="mr-2 mb-2"
            to="/kontakt"
            variant="outline-primary"
            target="_blank"
            >Fragen oder Hilfe benötigt?</b-button
        >
        <div v-if="myPayments.length > 0">
            <b-card
                v-for="payment in myPayments"
                :key="payment._id"
                class="my-3"
            >
                <b-card-text>
                    <h4>
                        {{ payment.job.title }} | {{ payment.job.company.name }}
                    </h4>
                    <div>
                        <b-badge
                            v-if="payment.status === 'paid'"
                            class="mr-1"
                            pill
                            variant="success
                        "
                            >bezahlt</b-badge
                        >
                        <b-badge
                            v-if="payment.status === 'pending'"
                            class="mr-1"
                            pill
                            variant="warning
                        "
                            >ausstehend</b-badge
                        >
                        <b-badge
                            v-if="payment.status === 'cancelled'"
                            class="mr-1"
                            pill
                            variant="danger
                        "
                            >verworfen</b-badge
                        >
                    </div>
                    <div class="my-3">
                        <div>
                            Rechnungsdatum:
                            {{
                                new Date(
                                    parseInt(
                                        payment.invoiceDate || payment.createdAt
                                    )
                                ).toLocaleDateString("de-DE")
                            }}
                        </div>
                        <div v-if="payment.paidAt">
                            Zahlung eingegangen am:
                            {{
                                new Date(
                                    parseInt(payment.paidAt)
                                ).toLocaleDateString("de-DE")
                            }}
                        </div>
                        <div
                            v-if="
                                payment.paymentExpiresAt &&
                                    payment.status === 'paid'
                            "
                        >
                            Zahlung läuft ab am:
                            {{
                                new Date(
                                    parseInt(payment.paymentExpiresAt)
                                ).toLocaleDateString("de-DE")
                            }}
                        </div>
                        <!-- <div>
                        Aktualisiert:
                        {{
                            new Date(
                                parseInt(company.updatedAt)
                            ).toLocaleString()
                        }}
                    </div> -->
                    </div>
                    <div class="d-flex justify-content-start align-items-end">
                        <div>
                            <b-button
                                class="mr-2 mb-2 mb-md-0"
                                :href="`/api/invoice/download/${payment._id}`"
                                target="_blank"
                                variant="secondary"
                                size="sm"
                                ><Fa class="mr-2" icon="download" /> Rechnung
                                herunterladen</b-button
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
                                ><Fa
                                    class="mr-2"
                                    icon="external-link-alt"
                                />Zahlungsbeleg abrufen</b-button
                            >
                        </div>
                        <!-- <div>
                        <b-button
                            variant="outline-danger"
                            size="sm"
                            @click.prevent="$bvModal.show(company._id)"
                            ><Fa class="mr-2" icon="trash-alt" />
                            Löschen</b-button
                        >
                    </div> -->
                    </div>
                </b-card-text>
            </b-card>
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
