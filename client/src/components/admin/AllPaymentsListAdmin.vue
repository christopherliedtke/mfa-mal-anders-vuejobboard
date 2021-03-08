<template>
    <div>
        <b-form id="payment-filter" inline @submit.prevent>
            <b-input-group class="my-2 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.searchTerm"
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
            <template v-slot:cell(createdAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(updatedAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(invoiceDate)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(paidAt)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(paymentExpiresAt)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(amount)="row">
                {{ row.value / 100 }}€
            </template>
            <template v-slot:cell(fee)="row"> {{ row.value / 100 }}€ </template>
            <template v-slot:cell(taxes)="row">
                {{ row.value / 100 }}€
            </template>
            <template v-slot:cell(user)="row">
                {{
                    row.value._id
                        ? row.value.lastName + ", " + row.value.firstName
                        : ""
                }}
                <a
                    v-if="row.value._id && row.value.email"
                    :href="`mailto:${row.value.email}`"
                >
                    {{ row.value.email }}</a
                >
            </template>

            <template v-slot:cell(actions)="row">
                <b-button
                    class="mr-2 mb-2"
                    :to="`/admin/payments/edit/${row.item._id}`"
                    variant="primary"
                    size="sm"
                    ><Fa icon="edit"></Fa>
                </b-button>

                <b-dropdown
                    class="mr-2 mb-2"
                    size="sm"
                    left
                    variant="secondary"
                >
                    <template v-slot:button-content>
                        <Fa class="mr-2" icon="ellipsis-v" />
                        Paid Status
                    </template>
                    <b-dropdown-item
                        :active="row.item.status === 'pending'"
                        variant="secondary"
                        @click.prevent="
                            updatePayment(row.item._id, 'status', 'pending')
                        "
                        >Pending</b-dropdown-item
                    >
                    <b-dropdown-item
                        :active="row.item.status === 'paid'"
                        variant="success"
                        @click.prevent="
                            updatePayment(row.item._id, 'status', 'paid')
                        "
                        >Paid</b-dropdown-item
                    >
                    <b-dropdown-item
                        :active="row.item.status === 'cancelled'"
                        variant="danger"
                        @click.prevent="
                            updatePayment(row.item._id, 'status', 'cancelled')
                        "
                        >Cancelled</b-dropdown-item
                    >
                </b-dropdown>
                <b-dropdown class="mr-2 mb-2" size="sm" left variant="info">
                    <template v-slot:button-content>
                        <Fa class="mr-2" icon="envelope" /> E-Mail
                    </template>
                    <b-dropdown-item
                        class="mb-0"
                        variant="info"
                        @click.prevent="sendPublishedEmail(row.item.job._id)"
                        >Send job published</b-dropdown-item
                    >
                </b-dropdown>
                <b-button
                    class="mr-2 mb-2"
                    size="sm"
                    variant="info"
                    :href="`/api/invoice/download/${row.item._id}`"
                    target="_blank"
                    :disabled="row.item.paymentType != 'invoice'"
                >
                    <Fa class="mr-2" icon="download" />Invoice
                </b-button>
                <b-dropdown class="mr-2 mb-2" size="sm" left variant="primary">
                    <template v-slot:button-content>
                        <Fa class="mr-2" icon="share-alt" /> Share
                    </template>
                    <b-dropdown-item
                        class="mb-0"
                        variant="info"
                        @click.prevent="socialShareToClipBoard(row.item)"
                        >Copy Text</b-dropdown-item
                    >
                </b-dropdown>

                <b-button
                    size="sm"
                    variant="danger"
                    @click="showDeletePaymentModal(row.item)"
                >
                    <Fa class="mr-2" icon="trash-alt" />Delete
                </b-button>
            </template>
        </b-table>

        <b-modal
            id="deletePaymentModal"
            :title="`Delete Payment ${paymentToDelete._id}`"
            ok-title="Delete Payment"
            centered
            ok-variant="danger"
            footer-class="d-flex justify-content-between"
            @ok="deletePayment(paymentToDelete._id)"
            ><p class="my-4">
                Are you sure to delete this job?
            </p></b-modal
        >
    </div>
</template>

<script>
    export default {
        name: "AllPaymentsListAdmin",
        data() {
            return {
                payments: [],
                paymentToDelete: Object,
                filter: {
                    searchTerm: ""
                },
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
                                payment.user._id,
                                payment.user._email,
                                payment.job._id,
                                payment.job.title
                            ]
                                .join(" ")
                                .toLowerCase();

                            if (
                                searchTerm.every(term =>
                                    searchProp.includes(term)
                                )
                            ) {
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
                                        invoiceNo
                                        invoiceDate
                                        paymentType
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
                                    invoiceNo
                                    invoiceDate
                                    paymentType
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
                        if (
                            paymentOld._id ===
                            payment.data.data.updatePayment._id
                        ) {
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
            showDeletePaymentModal(payment) {
                this.paymentToDelete = payment;
                this.$bvModal.show("deletePaymentModal");
            },
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

                    this.$root.$bvToast.toast(
                        `Die E-Mail wurde erfolgreich gesendet.`,
                        {
                            title: `E-Mail gesendet`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
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
            socialShareToClipBoard(payment) {
                let el = document.createElement("textarea");

                el.value = `${payment.job.title} | ${
                    payment.job.company.location
                }\n\n${this.$config.website.url}/jobboard/job/${
                    payment.job._id
                }\n\n#mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${payment.job.company.location
                    .replace("-", "")
                    .replace(/\s/g, "")
                    .toLowerCase()}jobs #${payment.job.company.location
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
                if (item.status === "pending") {
                    return "table-warning";
                }
                if (
                    item.status === "paid" &&
                    item.paymentExpiresAt >= new Date()
                ) {
                    return "table-success";
                }
                if (
                    item.status === "cancelled" ||
                    item.paymentExpiresAt < new Date()
                ) {
                    return "table-danger";
                }
            }
        }
    };
</script>
