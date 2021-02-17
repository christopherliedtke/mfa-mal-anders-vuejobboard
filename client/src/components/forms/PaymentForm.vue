<template>
    <div class="payment-form position-relative">
        <b-form class="payment-form">
            <label for="user-id">User ID</label>
            <b-form-input
                type="text"
                v-model="payment.user"
                id="user-id"
                placeholder="User ID eingeben..."
                trim
                required
            />
            <label for="job-id">Job ID</label>
            <b-form-input
                type="text"
                v-model="payment.job"
                id="job-id"
                placeholder="Job ID eingeben..."
                trim
                required
            />
            <label for="coupon-id">Coupon ID</label>
            <b-form-input
                type="text"
                v-model="payment.coupon"
                id="coupon-id"
                placeholder="Coupon ID eingeben..."
                trim
            />
            <label for="payment-status">Payment Status</label>
            <b-form-select id="payment-status" v-model="payment.status">
                <b-form-select-option :value="''"
                    >-- Status auswählen --</b-form-select-option
                >
                <b-form-select-option :value="'pending'"
                    >pending</b-form-select-option
                >
                <b-form-select-option :value="'paid'"
                    >paid</b-form-select-option
                >
                <b-form-select-option :value="'cancelled'"
                    >cancelled</b-form-select-option
                >
            </b-form-select>
            <label for="invoice-no">Invoice No</label>
            <b-form-input
                type="number"
                v-model="payment.invoiceNo"
                id="invoice-no"
                placeholder="Invoice No eingeben..."
                trim
            />
            <label for="payment-type">Payment Status</label>
            <b-form-select id="payment-type" v-model="payment.paymentType">
                <b-form-select-option :value="'invoice'"
                    >invoice</b-form-select-option
                >
                <b-form-select-option :value="'stripe'"
                    >stripe</b-form-select-option
                >
            </b-form-select>
            <label for="amount">Amount [Cents]</label>
            <b-form-input
                type="number"
                min="0"
                v-model="payment.amount"
                id="amount"
                placeholder="Amount eingeben..."
            />
            <label for="fee">Fee [Cents]</label>
            <b-form-input
                type="number"
                min="0"
                v-model="payment.fee"
                id="fee"
                placeholder="Fee eingeben..."
            />
            <label for="taxes">Taxes [Cents]</label>
            <b-form-input
                type="number"
                min="0"
                v-model="payment.taxes"
                id="taxes"
                placeholder="Taxes eingeben..."
                trim
            />
            <label for="billing-email">Billing Email Address</label>
            <b-form-input
                type="text"
                v-model="payment.billingEmail"
                id="billing-email"
                placeholder="Billing Email Address eingeben..."
                trim
                required
            />
            <label for="billing-company">Billing Company</label>
            <b-input
                type="text"
                id="billing-company"
                v-model="payment.billingCompany"
                placeholder="Billing Company eingeben..."
                trim
            />
            <label for="billing-gender">Billing Gender</label>
            <b-form-select id="billing-gender" v-model="payment.billingGender">
                <b-form-select-option :value="''"
                    >-- Anrede auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="title in contactGenderOptions"
                    :key="title"
                    :value="title"
                    >{{ title }}</b-form-select-option
                >
            </b-form-select>
            <label for="billing-title">Billing Title</label>
            <b-form-select id="billing-title" v-model="payment.billingTitle">
                <b-form-select-option :value="''"
                    >-- Titel auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="title in contactTitleOptions"
                    :key="title"
                    :value="title"
                    >{{ title }}</b-form-select-option
                >
            </b-form-select>
            <label for="firstname">Billing First Name</label>
            <b-form-input
                type="text"
                v-model="payment.billingFirstName"
                id="firstname"
                placeholder="First Name eingeben..."
                trim
                required
            />
            <label for="lastname">Billing Last Name</label>
            <b-form-input
                type="text"
                v-model="payment.billingLastName"
                id="lastname"
                placeholder="Last Name eingeben..."
                trim
                required
            />
            <label for="street">Billing Street</label>
            <b-form-input
                type="text"
                v-model="payment.billingStreet"
                id="street"
                placeholder="Street eingeben..."
                trim
                required
            />
            <label for="zip-code">Billing Zip Code</label>
            <b-form-input
                type="text"
                v-model="payment.billingZipCode"
                id="zip-code"
                placeholder="Zip Code eingeben..."
                trim
                required
            />
            <label for="location">Billing Location</label>
            <b-form-input
                type="text"
                v-model="payment.billingLocation"
                id="location"
                placeholder="Location eingeben..."
                trim
                required
            />
            <label for="paid-at">Paid At</label>
            <b-form-datepicker
                v-model="paidAt"
                id="paid-at"
                placeholder="Paid At eingeben..."
                :value-as-date="true"
            />
            <label for="payment-expires-at">Payment Expires At</label>
            <b-form-datepicker
                v-model="paymentExpiresAt"
                id="payment-expires-at"
                placeholder="Payment Expires At eingeben..."
                :value-as-date="true"
            />

            <div class="d-flex justify-content-between my-4">
                <b-button
                    variant="outline-danger"
                    @click.prevent="$router.go(-1)"
                >
                    Abbrechen
                </b-button>
                <b-button variant="success" @click.prevent="onSubmit">
                    Speichern
                </b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    import {
        contactGenderOptions,
        contactTitleOptions
    } from "@/config/formDataConfig.json";
    export default {
        name: "PaymentForm",
        data() {
            return {
                payment: {
                    _id: this.$route.params.paymentId,
                    user: null,
                    job: null,
                    coupon: null,
                    status: "",
                    invoiceNo: 0,
                    paymentType: "invoice",
                    amount: 0,
                    fee: 0,
                    taxes: 0,
                    billingEmail: "",
                    billingCompany: "",
                    billingGender: "",
                    billingTitle: "",
                    billingFirstName: "",
                    billingLastName: "",
                    billingStreet: "",
                    billingZipCode: "",
                    billingLocation: "",
                    paidAt: new Date().setHours(0),
                    paymentExpiresAt:
                        new Date().setHours(24) +
                        1000 * 60 * 60 * 24 * this.$config.payment.duration
                },
                contactGenderOptions,
                contactTitleOptions
            };
        },
        computed: {
            paidAt: {
                get() {
                    return new Date(this.payment.paidAt);
                },
                set(value) {
                    this.payment.paidAt = new Date(value).valueOf();
                }
            },
            paymentExpiresAt: {
                get() {
                    return new Date(this.payment.paymentExpiresAt);
                },
                set(value) {
                    this.payment.paymentExpiresAt = new Date(value).setHours(
                        23
                    );
                }
            }
        },
        created() {
            if (this.$route.params.paymentId != "new") {
                this.getPayment(this.$route.params.paymentId);
            }
        },
        methods: {
            async getPayment(id) {
                this.$store.dispatch("setOverlay", true);

                try {
                    const payment = await this.$axios.get("/graphql", {
                        params: {
                            query: `
                                query {
                                    payment (_id: "${id}") {
                                        _id
                                        user {
                                            _id
                                        }
                                        job {
                                            _id
                                        }

                                        status
                                        invoiceNo
                                        paymentType
                                        amount
                                        fee
                                        taxes
                                        billingEmail
                                        billingCompany
                                        billingGender
                                        billingTitle
                                        billingFirstName
                                        billingLastName
                                        billingStreet
                                        billingZipCode
                                        paidAt
                                        paymentExpiresAt
                                    }
                                }
                            `
                        }
                    });

                    if (payment.data.errors) {
                        throw new Error("Payment could not be loaded!");
                    }

                    payment.data.data.payment.job =
                        payment.data.data.payment.job._id;
                    payment.data.data.payment.user =
                        payment.data.data.payment.user._id;
                    payment.data.data.payment.coupon = payment.data.data.payment
                        .coupon
                        ? payment.data.data.payment.coupon._id
                        : null;

                    this.payment = payment.data.data.payment;
                } catch (err) {
                    this.$root.$bvToast.toast(err.message, {
                        title: `Fehler beim Laden`,
                        variant: "danger",
                        toaster: "b-toaster-bottom-right",
                        solid: true,
                        noAutoHide: true
                    });
                }

                this.$store.dispatch("setOverlay", false);
            },
            async onSubmit() {
                this.$store.dispatch("setOverlay", true);

                try {
                    const mutationType =
                        this.payment._id && this.payment._id != "new"
                            ? "updatePayment"
                            : "addPayment";

                    const query = `
                        mutation {
                            ${mutationType} (
                                ${
                                    mutationType === "updatePayment"
                                        ? `_id: "${this.payment._id}"`
                                        : ""
                                }
                                user: "${this.payment.user}"
                                job: "${this.payment.job}"
                                ${
                                    this.payment.coupon
                                        ? `coupon: "${this.payment.coupon}"`
                                        : ""
                                }
                                status: "${this.payment.status}"
                                invoiceNo: ${this.payment.invoiceNo}
                                paymentType: "${this.payment.paymentType}"
                                amount: ${this.payment.amount}
                                fee: ${this.payment.fee}
                                taxes: ${this.payment.taxes}
                                billingEmail: "${this.payment.billingEmail}"
                                billingCompany: "${this.payment.billingCompany}"
                                billingGender: "${this.payment.billingGender}"
                                billingTitle: "${this.payment.billingTitle}"
                                billingFirstName: "${
                                    this.payment.billingFirstName
                                }"
                                billingLastName: "${
                                    this.payment.billingLastName
                                }"
                                billingStreet: "${this.payment.billingStreet}"
                                billingZipCode: "${this.payment.billingZipCode}"
                                billingLocation: "${
                                    this.payment.billingLocation
                                }"
                                paidAt: ${this.payment.paidAt}
                                paymentExpiresAt: ${
                                    this.payment.paymentExpiresAt
                                }
                            ) {
                                _id
                            }
                        }
                    `;

                    const payment = await this.$axios.post("/graphql", {
                        query
                    });

                    if (payment.data.errors) {
                        throw new Error("Error on saving payment!");
                    }

                    this.$root.$bvToast.toast(
                        "Die Zahlung wurde erfolgreich gespeichert.",
                        {
                            title: `Stellenanzeige gespeichert`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true
                        }
                    );

                    this.$router.push("/admin?tab=5");
                } catch (err) {
                    this.$root.$bvToast.toast(err.message, {
                        title: `Fehler beim Speichern`,
                        variant: "danger",
                        toaster: "b-toaster-bottom-right",
                        solid: true,
                        noAutoHide: true
                    });
                }

                this.$store.dispatch("setOverlay", false);
            }
        }
    };
</script>
