<template>
  <div class="payment-form position-relative">
    <b-form class="payment-form">
      <label for="user-id">User ID</label>
      <b-form-input
        id="user-id"
        v-model="payment.user"
        type="text"
        placeholder="User ID eingeben..."
        trim
        required
      />
      <label for="job-id">Job ID</label>
      <b-form-input
        id="job-id"
        v-model="payment.job"
        type="text"
        placeholder="Job ID eingeben..."
        trim
        required
      />
      <label for="coupon-id">Coupon ID</label>
      <b-form-input
        id="coupon-id"
        v-model="payment.coupon"
        type="text"
        placeholder="Coupon ID eingeben..."
        trim
      />
      <label for="payment-status">Payment Status</label>
      <b-form-select id="payment-status" v-model="payment.status">
        <b-form-select-option :value="''"
          >-- Status auswählen --</b-form-select-option
        >
        <b-form-select-option :value="'pending'">pending</b-form-select-option>
        <b-form-select-option :value="'paid'">paid</b-form-select-option>
        <b-form-select-option :value="'cancelled'"
          >cancelled</b-form-select-option
        >
      </b-form-select>
      <label for="invoice-no">Invoice No</label>
      <b-form-input
        id="invoice-no"
        v-model="payment.invoiceNo"
        type="number"
        placeholder="Invoice No eingeben..."
        trim
      />
      <label for="invoice-date">Invoice Date</label>
      <b-form-datepicker
        id="invoice-date"
        v-model="invoiceDate"
        placeholder="Invoice Date eingeben..."
        :value-as-date="true"
      />
      <label for="payment-type">Payment Status</label>
      <b-form-select id="payment-type" v-model="payment.paymentType">
        <b-form-select-option :value="'invoice'">invoice</b-form-select-option>
        <b-form-select-option :value="'stripe'">stripe</b-form-select-option>
      </b-form-select>
      <label for="pricing-package">Pricing Package</label>
      <b-form-select id="pricing-package" v-model="payment.pricingPackage">
        <b-form-select-option :value="''"
          >-- Choose Pricing Package --</b-form-select-option
        >
        <b-form-select-option
          v-for="pkg in $config.pricingPackages"
          :key="pkg.name"
          :value="pkg.name"
          >{{ pkg.name }}</b-form-select-option
        >
      </b-form-select>
      <label for="amount">Amount [Cents]</label>
      <b-form-input
        id="amount"
        v-model="payment.amount"
        type="number"
        min="0"
        placeholder="Amount eingeben..."
      />
      <label for="fee">Fee [Cents]</label>
      <b-form-input
        id="fee"
        v-model="payment.fee"
        type="number"
        min="0"
        placeholder="Fee eingeben..."
      />
      <label for="taxes">Taxes [Cents]</label>
      <b-form-input
        id="taxes"
        v-model="payment.taxes"
        type="number"
        min="0"
        placeholder="Taxes eingeben..."
        trim
      />
      <label for="billing-email">Billing Email Address</label>
      <b-form-input
        id="billing-email"
        v-model="payment.billingEmail"
        type="text"
        placeholder="Billing Email Address eingeben..."
        trim
        required
      />
      <label for="billing-phone">Billing Phone Number</label>
      <b-form-input
        id="billing-phone"
        v-model="payment.billingPhone"
        type="text"
        placeholder="Billing Phone Number eingeben..."
        trim
      />
      <label for="billing-company">Billing Company</label>
      <b-input
        id="billing-company"
        v-model="payment.billingCompany"
        type="text"
        placeholder="Billing Company eingeben..."
        trim
      />
      <label for="billing-department">Billing Department</label>
      <b-input
        id="billing-department"
        v-model="payment.billingDepartment"
        type="text"
        placeholder="Billing Department eingeben..."
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
        id="firstname"
        v-model="payment.billingFirstName"
        type="text"
        placeholder="First Name eingeben..."
        trim
        required
      />
      <label for="lastname">Billing Last Name</label>
      <b-form-input
        id="lastname"
        v-model="payment.billingLastName"
        type="text"
        placeholder="Last Name eingeben..."
        trim
        required
      />
      <label for="street">Billing Street</label>
      <b-form-input
        id="street"
        v-model="payment.billingStreet"
        type="text"
        placeholder="Street eingeben..."
        trim
        required
      />
      <label for="zip-code">Billing Zip Code</label>
      <b-form-input
        id="zip-code"
        v-model="payment.billingZipCode"
        type="text"
        placeholder="Zip Code eingeben..."
        trim
        required
      />
      <label for="location">Billing Location</label>
      <b-form-input
        id="location"
        v-model="payment.billingLocation"
        type="text"
        placeholder="Location eingeben..."
        trim
        required
      />
      <label for="paid-at">Paid At</label>
      <b-form-datepicker
        id="paid-at"
        v-model="paidAt"
        placeholder="Paid At eingeben..."
        :value-as-date="true"
      />
      <label for="payment-expires-at">Payment Expires At</label>
      <b-form-datepicker
        id="payment-expires-at"
        v-model="paymentExpiresAt"
        placeholder="Payment Expires At eingeben..."
        :value-as-date="true"
      />

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" @click.prevent="$router.go(-1)">
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
  import { BFormDatepicker } from "bootstrap-vue";
  import Vue from "vue";
  // eslint-disable-next-line
  Vue.component("b-form-datepicker", BFormDatepicker);
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
          invoiceDate: new Date().getTime(),
          paymentType: "invoice",
          pricingPackage: "",
          amount: 0,
          fee: 0,
          taxes: 0,
          billingEmail: "",
          billingPhone: "",
          billingCompany: "",
          billingDepartment: "",
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
      invoiceDate: {
        get() {
          return new Date(this.payment.invoiceDate);
        },
        set(value) {
          this.payment.invoiceDate = new Date(value).setHours(12);
        }
      },
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
          this.payment.paymentExpiresAt = new Date(value).setHours(23);
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
                    invoiceDate
                    paymentType
                    pricingPackage
                    amount
                    fee
                    taxes
                    billingEmail
                    billingPhone
                    billingCompany
                    billingDepartment
                    billingGender
                    billingTitle
                    billingFirstName
                    billingLastName
                    billingStreet
                    billingZipCode
                    billingLocation
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

          payment.data.data.payment.job = payment.data.data.payment.job._id;
          payment.data.data.payment.user = payment.data.data.payment.user._id;
          payment.data.data.payment.coupon = payment.data.data.payment.coupon
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
                  invoiceDate: ${this.payment.invoiceDate}
                  paymentType: "${this.payment.paymentType}"
                  pricingPackage: "${this.payment.pricingPackage}"
                  amount: ${this.payment.amount}
                  fee: ${this.payment.fee}
                  taxes: ${this.payment.taxes}
                  billingEmail: "${this.payment.billingEmail}"
                  billingPhone: "${this.payment.billingPhone}"
                  billingCompany: "${this.payment.billingCompany}"
                  billingDepartment: "${this.payment.billingDepartment}"
                  billingGender: "${this.payment.billingGender}"
                  billingTitle: "${this.payment.billingTitle}"
                  billingFirstName: "${this.payment.billingFirstName}"
                  billingLastName: "${this.payment.billingLastName}"
                  billingStreet: "${this.payment.billingStreet}"
                  billingZipCode: "${this.payment.billingZipCode}"
                  billingLocation: "${this.payment.billingLocation}"
                  paidAt: ${this.payment.paidAt}
                  paymentExpiresAt: ${this.payment.paymentExpiresAt}
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
              title: `Zahlung gespeichert`,
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
