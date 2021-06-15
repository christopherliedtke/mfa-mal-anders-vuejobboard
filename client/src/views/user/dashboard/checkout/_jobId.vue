<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <b-container class="checkout py-3 py-lg-5">
      <div>
        <h2 class="mb-4">
          <strong>{{ job && job.title }}</strong>
        </h2>
        <p class="mb-4">
          Bitte wählen Sie Ihr gewünschtes Stellenpaket.
        </p>

        <b-row cols="1" cols-lg="3" class="mb-4">
          <b-col
            v-for="pricingPackage in $config.pricingPackages"
            :key="pricingPackage.name"
          >
            <PricingCard
              :pricing="pricingPackage"
              :checkout="true"
              :active="pricingPackage.name === checkout.pricingPackage"
              @update-pricing-package="updatePricingPackage"
            />
          </b-col>
        </b-row>

        <div class="d-flex justify-content-end">
          <b-button variant="outline-primary" to="/kontakt?role=employer"
            >Sie haben noch Fragen? Nehmen Sie jetzt Kontakt auf!</b-button
          >
        </div>

        <b-form class="mb-4">
          <label for="coupon">Haben Sie einen gültigen Aktionscode?</label>
          <b-input-group>
            <b-form-input
              id="coupon"
              v-model="checkout.coupon.code"
              type="text"
              placeholder="Aktionscode eingeben..."
              trim
              :state="checkout.couponValidationState"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="primary"
                size="sm"
                @click.prevent="checkCouponCode"
                >Überprüfen</b-button
              >
            </b-input-group-append>
          </b-input-group>
          <b-form-invalid-feedback :state="checkout.couponValidationState">
            Ihr eingegebener Aktionscode ist nicht gültig oder wurde bereits
            benutzt.
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            :state="
              checkout.coupon.discount > 0 ||
                checkout.coupon.refreshFrequency > 0
            "
          >
            <span v-if="checkout.coupon.discount">
              Sie erhalten einen Rabatt von
              {{ checkout.coupon.discount * 100 }} Prozent.
            </span>
            <span v-if="checkout.coupon.refreshFrequency > 0"
              >Sie erhalten eine zusätzliche Datumsaktualisierung Ihrer
              Stellenanzeige alle
              {{ checkout.coupon.refreshFrequency }} Tage.</span
            >
          </b-form-valid-feedback>
          <hr class="mt-4" />

          <label for="payment-method" class="bold">Zahlungsart auswählen</label>
          <b-form-group>
            <b-form-radio-group
              id="payment-method"
              v-model="checkout.paymentMethod"
              stacked
            >
              <b-form-radio value="stripe">
                <b-img
                  src="@/assets/img/Mastercard_2019_logo.svg"
                  height="16"
                />
                Kreditkarte |
                <b-img src="@/assets/img/640px-Giropay.png" height="16" />

                GiroPay |
                <b-img
                  src="@/assets/img/Google_Pay_(GPay)_Logo.svg"
                  height="16"
                />
                GooglePay <br />
                <span class="small">Sofortige Veröffentlichung</span>
              </b-form-radio>
              <b-form-radio value="invoice"
                >Rechnung <br />
                <span class="small">Veröffentlichung nach Geldeingang</span>
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group>

          <b-form-group
            v-if="checkout.paymentMethod === 'invoice'"
            class="mt-4"
          >
            <h5>Rechnungsadresse</h5>

            <label for="billingAddress-gender">Anrede</label>
            <b-form-select
              id="billingAddress-gender"
              v-model="checkout.billingAddress.gender"
              :state="
                checkout.validated
                  ? checkout.billingAddress.gender
                    ? true
                    : null
                  : null
              "
            >
              <b-form-select-option value=""
                >-- Anrede auswählen --</b-form-select-option
              >
              <b-form-select-option
                v-for="gender in contactGenderOptions"
                :key="gender"
                :value="gender"
                >{{ gender }}</b-form-select-option
              >
            </b-form-select>

            <label for="billingAddress-title">Titel</label>
            <b-form-select
              id="billingAddress-title"
              v-model="checkout.billingAddress.title"
              :state="
                checkout.validated
                  ? checkout.billingAddress.title
                    ? true
                    : null
                  : null
              "
            >
              <b-form-select-option value=""
                >-- Titel auswählen --</b-form-select-option
              >
              <b-form-select-option
                v-for="contactTitle in contactTitleOptions"
                :key="contactTitle"
                :value="contactTitle"
                >{{ contactTitle }}</b-form-select-option
              >
            </b-form-select>

            <label for="billingAddress-first-name">Vorname *</label>
            <b-form-input
              id="billingAddress-first-name"
              v-model="checkout.billingAddress.firstName"
              type="text"
              :state="
                checkout.validated
                  ? checkout.billingAddress.firstName
                    ? true
                    : false
                  : null
              "
              placeholder="Vorname eingeben..."
              required
            />
            <label for="billingAddress-last-name">Nachname *</label>
            <b-form-input
              id="billingAddress-last-name"
              v-model="checkout.billingAddress.lastName"
              type="text"
              :state="
                checkout.validated
                  ? checkout.billingAddress.lastName
                    ? true
                    : false
                  : null
              "
              placeholder="Nachname eingeben..."
              required
            />

            <label for="billing-address-company">Unternehmen *</label>
            <b-input
              id="billing-address-company"
              v-model="checkout.billingAddress.company"
              type="text"
              placeholder="Unternehmensname eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.company &&
                    checkout.billingAddress.company.length <= 55
                    ? true
                    : false
                  : null
              "
              aria-describedby="company-name-help company-name-feedback"
            />
            <b-form-invalid-feedback id="company-name-feedback" class="ml-2">
              Bitte nutzen Sie maximal 55 Zeichen.
            </b-form-invalid-feedback>
            <b-form-text id="company-name-help" class="ml-2"
              >Max. 55 Zeichen</b-form-text
            >

            <label for="billing-address-department">Abteilung</label>
            <b-input
              id="billing-address-company"
              v-model="checkout.billingAddress.department"
              type="text"
              placeholder="Abteilung eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.department &&
                    checkout.billingAddress.department.length <= 55
                    ? true
                    : !checkout.billingAddress.department
                    ? null
                    : false
                  : null
              "
              aria-describedby="department-help department-feedback"
            />
            <b-form-invalid-feedback id="department-feedback" class="ml-2">
              Bitte nutzen Sie maximal 55 Zeichen.
            </b-form-invalid-feedback>
            <b-form-text id="department-help" class="ml-2"
              >Max. 55 Zeichen</b-form-text
            >

            <label for="billing-address-email">E-Mail Adresse *</label>
            <b-input
              id="billing-address-email"
              v-model="checkout.billingAddress.email"
              type="text"
              placeholder="E-Mail Adresse eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.email
                    ? true
                    : false
                  : null
              "
            />
            <label for="billing-address-phone">Telefonnummer</label>
            <b-input
              id="billing-address-phone"
              v-model="checkout.billingAddress.phone"
              type="text"
              placeholder="Telefonnummer eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.phone
                    ? true
                    : null
                  : null
              "
            />
            <label for="billing-address-street">Straße und Hausnummer *</label>
            <b-input
              id="billing-address-street"
              v-model="checkout.billingAddress.street"
              type="text"
              placeholder="Straße und Hausnummer eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.street
                    ? true
                    : false
                  : null
              "
            />
            <label for="billing-address-zip-code">PLZ *</label>
            <b-input
              id="billing-address-zip-code"
              v-model="checkout.billingAddress.zipCode"
              type="text"
              placeholder="PLZ eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.zipCode
                    ? true
                    : false
                  : null
              "
            />
            <label for="billing-address-location">Ort *</label>
            <b-input
              id="billing-address-location"
              v-model="checkout.billingAddress.location"
              type="text"
              placeholder="Ort eingeben..."
              trim
              :state="
                checkout.validated
                  ? checkout.billingAddress.location
                    ? true
                    : false
                  : null
              "
            />

            <b-alert
              v-if="checkout.error"
              class="mt-3"
              show
              dismissible
              variant="danger"
              >{{ checkout.error }}</b-alert
            >
          </b-form-group>

          <b-form-checkbox
            v-model="checkout.accepted"
            class="mt-4 small"
            :state="checkout.accepted || null"
            :value="true"
            :unchecked-value="false"
            switch
            required
          >
            Ich habe die
            <b-link href="/agbs" target="_blank">
              AGBs
            </b-link>
            und
            <b-link href="/datenschutz" target="_blank">
              Datenschutzbestimmungen
            </b-link>

            gelesen und akzeptiere diese.
          </b-form-checkbox>
        </b-form>
      </div>
      <div class="d-flex justify-content-between align-items-start mt-5">
        <b-button class="mr-2 mb-2" variant="danger" @click="$router.go(-1)"
          >Abbrechen</b-button
        >
        <div>
          <b-button
            v-if="checkout.paymentMethod === 'invoice'"
            class="mr-2 mb-2"
            variant="success"
            :disabled="!checkout.accepted"
            @click.prevent="sendInvoice"
            >{{
              (amountComputed / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")
            }}
            {{ $config.payment.currency }} | Rechnung anfordern
          </b-button>
          <b-button
            v-if="checkout.paymentMethod === 'stripe'"
            class="mb-2"
            variant="success"
            :disabled="!checkout.accepted"
            @click="startStripeCheckout()"
          >
            {{
              (amountComputed / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")
            }}
            {{ $config.payment.currency }} | Jetzt bezahlen
          </b-button>
        </div>
      </div>
    </b-container>

    <Head :title="title" desc="" />
  </div>
</template>

<script>
  // import { BPopover } from "bootstrap-vue";
  // import Vue from "vue";
  // Vue.component("BPopover", BPopover);
  import {
    contactGenderOptions,
    contactTitleOptions
  } from "@/config/formDataConfig.json";
  import { stripeCheckoutMixin } from "@/mixins/stripeCheckoutMixin";
  import PricingCard from "@/components/ui/PricingCard.vue";
  export default {
    name: "UserDashboardCheckoutJob",
    components: { PricingCard },
    mixins: [stripeCheckoutMixin],
    data() {
      return {
        title: "Zahlung – Stellenanzeige veröffentlichen",
        job: Object,
        checkout: {
          pricingPackage: localStorage.getItem("pricingPackage") || "Standard",
          paymentMethod: "stripe",
          amount: null,
          coupon: {
            code: null,
            discount: 0,
            refreshFrequency: 0
          },
          couponValidationState: null,
          billingAddress: {
            gender: "",
            title: "",
            firstName: "",
            lastName: "",
            company: "",
            department: "",
            email: "",
            phone: "",
            street: "",
            zipCode: "",
            location: ""
          },
          accepted: false,
          validated: false,
          error: false
        },
        contactGenderOptions,
        contactTitleOptions
      };
    },
    computed: {
      amountComputed() {
        return (
          Math.round(
            this.$config.pricingPackages.find(
              pkg => pkg.name === this.checkout.pricingPackage
            ).price *
              (1 - this.checkout.coupon.discount) *
              100
          ) / 100
        );
      },
      refreshFrequencyComputed() {
        let value = 0;
        if (this.checkout.coupon.refreshFrequency) {
          value = this.checkout.coupon.refreshFrequency;
        }
        return value;
      }
    },
    async mounted() {
      await this.getJob();

      if (this.job.company.name) {
        this.setBillingAddress();
      }
    },
    methods: {
      async getJob() {
        this.$store.dispatch("setOverlay", true);

        try {
          const job = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myJob (_id: "${this.$route.params.jobId}") {
                    _id
                    createdAt
                    updatedAt
                    publishedAt
                    status
                    paid
                    paidExpiresAt
                    applicationDeadline
                    title
                    company {
                      name
                      street
                      zipCode
                      location
                      state
                      size
                    }
                    payment {
                      status
                      paidAt
                      paymentExpiresAt
                    }
                  }
                }
              `
            }
          });

          if (job.data.errors) {
            throw new Error();
          }

          this.job = job.data.data.myJob;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Ihre Stellenanzeige konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
      updatePricingPackage(pkg) {
        this.checkout.pricingPackage = pkg;
      },
      async setBillingAddress() {
        if (this.$store.state.auth.loggedIn && this.$store.state.auth.user) {
          this.checkout.billingAddress = {
            gender: this.$store.state.auth.user.gender || "",
            title: this.$store.state.auth.user.title || "",
            firstName: this.$store.state.auth.user.firstName || "",
            lastName: this.$store.state.auth.user.lastName || "",
            company: this.job.company.name,
            department: "",
            email: this.$store.state.auth.user.email,
            phone: "",
            street: this.job.company.street,
            zipCode: this.job.company.zipCode,
            location: this.job.company.location
          };
        }
      },
      validateBillingAddress() {
        this.checkout.error = null;
        this.checkout.validated = true;
        return !this.checkout.billingAddress.company ||
          this.checkout.billingAddress.company.length > 55 ||
          this.checkout.billingAddress.department.length > 55 ||
          !this.checkout.billingAddress.firstName ||
          !this.checkout.billingAddress.lastName ||
          !this.checkout.billingAddress.email ||
          !this.checkout.billingAddress.street ||
          !this.checkout.billingAddress.zipCode ||
          !this.checkout.billingAddress.location
          ? false
          : true;
      },
      async sendInvoice() {
        if (!this.validateBillingAddress()) {
          this.checkout.error =
            "Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!";
          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.post("/api/invoice/get-invoice", {
            jobId: this.job._id,
            jobTitle: this.job.title,
            pricingPackage: this.checkout.pricingPackage,
            // amount: this.checkout.amount,
            paymentMethod: this.checkout.paymentMethod,
            couponCode: this.checkout.coupon.code,
            refreshFrequency: this.refreshFrequencyComputed,
            billingAddress: this.checkout.billingAddress
          });

          if (!response.data.success) {
            throw new Error("Invoice could not be sent!");
          }

          this.$root.$bvToast.toast(
            "Vielen Dank! Ihre Rechnung wurde erfolgreich angefordert. Sie erhalten die gewünschte Rechnung in Kürze auf die angegebene E-Mail Adresse.",
            {
              title: `Rechnung angefordert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );

          await this.downloadInvoice(
            response.data.paymentId,
            response.data.invoiceNo
          );

          this.$gtag.event("begin_checkout", {
            value: this.checkout.amount / 100,
            currency: "EUR",
            items: [
              {
                id: this.job._id,
                name: this.job.title,
                coupon: this.checkout.coupon.code,
                price: this.checkout.amount,
                category: this.checkout.paymentMethod
              }
            ]
          });

          this.$matomo &&
            this.$matomo.trackEvent(
              "commerce",
              "begin_checkout",
              this.job._id,
              this.checkout.amount / 100
            );

          this.$router.push("/user/dashboard?tab=1");
        } catch (err) {
          this.$root.$bvToast.toast(
            "Bei der Verarbeitung Ihrer Daten ist leider ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
            {
              title: `Fehler bei Rechnungsanforderung`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async downloadInvoice(paymentId, invoiceNo) {
        if (!paymentId || !invoiceNo) {
          return;
        }

        const invoice = await this.$axios.get(
          `/api/invoice/download/${paymentId}`,
          { responseType: "blob" }
        );

        const fileURL = window.URL.createObjectURL(new Blob([invoice.data]));
        const fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute(
          "download",
          `${"RE-" +
            "000000".slice(0, 6 - invoiceNo.toString().length) +
            invoiceNo.toString()}.pdf`
        );
        fileLink.setAttribute("target", "_blank");
        fileLink.classList.add("d-none");
        document.body.appendChild(fileLink);

        fileLink.click();
      },
      async startStripeCheckout() {
        await this.initStripeCheckout(
          "job",
          this.job._id,
          this.job.title,
          this.checkout.coupon.code,
          this.checkout.pricingPackage,
          this.checkout.accepted,
          "/user/dashboard?tab=1"
        );
      },
      async checkCouponCode() {
        this.checkout.couponValidationState = null;

        const coupon = await this.$axios.get("/graphql", {
          params: {
            query: `
              query {
                validateCoupon (code: "${this.checkout.coupon.code}") {
                  _id
                  code
                  discount
                  refreshFrequency
                }
              }
            `
          }
        });

        if (coupon.data.errors) {
          this.checkout.couponValidationState = false;
          this.checkout.coupon.discount = 0;
          this.checkout.coupon.refreshFrequency = 0;
        } else {
          this.checkout.couponValidationState = true;
          this.checkout.coupon.discount =
            coupon.data.data.validateCoupon.discount;
          this.checkout.coupon.refreshFrequency =
            coupon.data.data.validateCoupon.refreshFrequency;
        }
      }
    }
  };
</script>
