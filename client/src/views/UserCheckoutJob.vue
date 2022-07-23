<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div class="checkout container py-3 py-lg-5">
      <div>
        <h2 class="mb-4">
          <!-- eslint-disable-next-line -->
          <strong v-if="job && job.title" v-html="job.title"></strong>
        </h2>
        <p class="mb-4">
          Bitte wählen Sie Ihr gewünschtes Stellenpaket.
        </p>

        <div v-if="pricingPackages" class="row row-cols-1 row-cols-lg-3 mb-4">
          <div
            v-for="pricingPackage in pricingPackages"
            :key="pricingPackage.name"
            class="col"
          >
            <PricingCard
              :pricing="pricingPackage"
              :checkout="true"
              :active="pricingPackage.name === checkout.pricingPackage.name"
              @update-pricing-package="setPricingPackage"
            />
          </div>
        </div>

        <div v-else class="row row-cols-1 row-cols-lg-3 mb-4">
          <div v-for="index in 3" :key="index" class="col">
            <PricingCardPlaceholder />
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <b-button variant="outline-primary" to="/kontakt?role=employer"
            >Sie haben noch Fragen? Nehmen Sie jetzt Kontakt auf!</b-button
          >
        </div>

        <b-form class="mb-4">
          <label for="promotion-code"
            >Haben Sie einen gültigen Aktionscode?</label
          >
          <b-input-group>
            <b-form-input
              id="promotion-code"
              v-model="checkout.promotionCode"
              type="text"
              placeholder="Aktionscode eingeben..."
              trim
              :state="checkout.couponValidationState"
              @keydown.enter.prevent="validatePromotionCode"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="primary"
                size="sm"
                @click.prevent="validatePromotionCode"
                >Überprüfen</b-button
              >
            </b-input-group-append>
          </b-input-group>
          <b-form-invalid-feedback :state="checkout.couponValidationState">
            {{ checkout.promotionCodeErr }}
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            v-if="checkout.coupon"
            :state="!!checkout.coupon"
          >
            <span v-if="checkout.coupon.percent_off">
              Sie erhalten einen Rabatt von
              {{ checkout.coupon.percent_off }} Prozent.
            </span>
            <span v-if="checkout.coupon.metadata.refreshFrequency"
              >Sie erhalten eine zusätzliche Datumsaktualisierung Ihrer
              Stellenanzeige alle
              {{ checkout.coupon.metadata.refreshFrequency }} Tage.</span
            >
          </b-form-valid-feedback>

          <hr class="mt-4" />

          <b-form-group class="mt-4">
            <h5 class="bold mb-0">Rechnungsadresse</h5>

            <div class="row">
              <div class="col-12 col-lg-8">
                <label for="customer-name" required>RechnungsempfängerIn</label>
                <b-input
                  id="customer-name"
                  v-model="checkout.customer.name"
                  type="text"
                  placeholder="RechnungsempfängerIn eingeben..."
                  trim
                  :state="
                    checkout.validated
                      ? checkout.customer.name
                        ? true
                        : false
                      : null
                  "
                  aria-describedby="name-help"
                />
                <b-form-text id="name-help" class="ml-2"
                  >z. B. Unternehmen (ggfls. + Abteilung) oder Name</b-form-text
                >
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-4">
                <label for="customer-address-line1" required
                  >Straße und Hausnummer</label
                >
                <b-input
                  id="customer-address-line1"
                  v-model="checkout.customer.address.line1"
                  type="text"
                  placeholder="Straße und Hausnummer eingeben..."
                  trim
                  :state="
                    checkout.validated
                      ? checkout.customer.address.line1
                        ? true
                        : false
                      : null
                  "
                />
              </div>
              <div class="col-12 col-lg-4">
                <label for="customer-address-line2">Adresszusatz</label>
                <b-input
                  id="customer-address-lin2"
                  v-model="checkout.customer.address.line2"
                  type="text"
                  placeholder="Adresszusatz eingeben..."
                  trim
                  :state="
                    checkout.validated
                      ? checkout.customer.address.line2
                        ? true
                        : !checkout.customer.address.line2
                        ? null
                        : false
                      : null
                  "
                />
              </div>
              <div class="w-100"></div>
              <div class="col-12 col-lg-4">
                <label for="dustomer-address-postal-code" required>PLZ</label>
                <b-input
                  id="dustomer-address-postal-code"
                  v-model="checkout.customer.address.postal_code"
                  type="text"
                  placeholder="PLZ eingeben..."
                  trim
                  :state="
                    checkout.validated
                      ? checkout.customer.address.postal_code
                        ? true
                        : false
                      : null
                  "
                />
              </div>
              <div class="col-12 col-lg-4">
                <label for="customer-address-city" required>Ort</label>
                <b-input
                  id="customer-address-city"
                  v-model="checkout.customer.address.city"
                  type="text"
                  placeholder="Ort eingeben..."
                  trim
                  :state="
                    checkout.validated
                      ? checkout.customer.address.city
                        ? true
                        : false
                      : null
                  "
                />
              </div>
              <div class="col-12 col-lg-4">
                <label for="company-country" required>Land</label>
                <b-form-select
                  id="checkout-country"
                  v-model="checkout.customer.address.country"
                  :state="
                    checkout.validated
                      ? checkout.customer.address.country
                        ? true
                        : false
                      : null
                  "
                >
                  <b-form-select-option value=""
                    >-- Land auswählen --</b-form-select-option
                  >
                  <b-form-select-option
                    v-for="country in checkoutCountryOptions"
                    :key="country.value"
                    :value="country.value"
                    >{{ country.text }}</b-form-select-option
                  >
                </b-form-select>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-4">
                <label for="customer-email" required>E-Mail Adresse</label>
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </template>
                  <b-input
                    id="customer-email"
                    v-model="checkout.customer.email"
                    type="text"
                    placeholder="E-Mail Adresse eingeben..."
                    disabled
                    trim
                    :state="
                      checkout.validated
                        ? checkout.customer.email
                          ? true
                          : false
                        : null
                    "
                  />
                </b-input-group>
                <b-form-text id="email-help" class="ml-2"
                  >Konto E-Mail-Adresse <br />
                  <small
                    >(Kann nur über Ihr Account-Profil geändert werden)</small
                  ></b-form-text
                >
              </div>
              <div class="col-12 col-lg-4">
                <label for="customer-phone">Telefonnummer</label>
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-phone"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                        />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg
                    ></b-input-group-text>
                  </template>
                  <b-input
                    id="customer-phone"
                    v-model="checkout.customer.phone"
                    type="text"
                    placeholder="Telefonnummer eingeben..."
                    trim
                    :state="
                      checkout.validated
                        ? checkout.customer.phone
                          ? true
                          : null
                        : null
                    "
                  />
                </b-input-group>
              </div>
            </div>

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

            gelesen und akzeptiere diese. Ich verlange ausdrücklich und stimme
            gleichzeitig zu, dass MFA mal anders - K. Maurach & C. Liedtke GbR
            mit der in Auftrag gegebenen Dienstleistung vor Ablauf der
            Widerrufsfrist beginnt. Ich weiß, dass mein Widerrufsrecht bei
            vollständiger Erfüllung des Vertrages erlischt.
          </b-form-checkbox>
        </b-form>
      </div>
      <div class="d-flex justify-content-between align-items-start mt-5">
        <b-button class="mr-2 mb-2" variant="danger" @click="$router.go(-1)"
          >Abbrechen</b-button
        >
        <div>
          <span></span>
          <b-button
            class="mb-2"
            size="lg"
            variant="success"
            :disabled="!checkout.accepted || !checkout.pricingPackage"
            @click="startCheckout()"
          >
            {{
              (amountComputed / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")
            }}€ | Rechnung anfordern und kostenpflichtig Veröffentlichen
          </b-button>
        </div>
      </div>
    </div>

    <Head :title="title" desc="" />
  </div>
</template>

<script>
  import PricingCard from "@/components/PricingCard.vue";
  import PricingCardPlaceholder from "@/components/PricingCardPlaceholder.vue";
  import { checkoutCountryOptions } from "@/config/formDataConfig.json";
  export default {
    name: "UserCheckoutJob",
    components: { PricingCard, PricingCardPlaceholder },
    data() {
      return {
        title: "Zahlung – Stellenanzeige veröffentlichen",
        job: Object,
        pricingPackages: null,
        checkout: {
          // amount: null,
          pricingPackage: null,
          promotionCode: null,
          coupon: null,
          couponValidationState: null,
          customer: {
            name: "",
            email: "",
            phone: null,
            address: {
              city: "",
              line1: "",
              line2: null,
              postal_code: "",
              country: ""
            }
          },
          accepted: false,
          validated: false,
          error: false,
          promotionCodeErr: null
        },
        checkoutCountryOptions
      };
    },
    computed: {
      amountComputed() {
        let amount = 0;
        if (!this.pricingPackages) {
          return amount;
        }

        if (this.checkout.pricingPackage) {
          amount = this.checkout.pricingPackage.stripePrice.price;

          if (this.checkout.coupon && this.checkout.coupon.percent_off) {
            amount = Math.round(
              amount * (1 - this.checkout.coupon.percent_off / 100)
            );
          }

          const taxRate = this.$config.payment.taxRate;

          amount = Math.round(amount * (1 + taxRate));
        }

        return amount;
      }
    },
    watch: {
      "checkout.pricingPackage"() {
        if (this.checkout.promotionCode) this.validatePromotionCode();
      }
    },
    async created() {
      await Promise.all([this.getJob(), this.getPricingPackages()]);

      await this.setBillingAddress();
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
                      country
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
      async getPricingPackages() {
        try {
          const response = await this.$axios.get(
            "/api/products/job-ad-packages"
          );

          if (!response.data.jobAdPackages) {
            throw new Error("Stellenpakete konnten nicht geladen werden");
          }

          this.pricingPackages = response.data.jobAdPackages;

          this.setPricingPackage(localStorage.getItem("pricingPackage"));
        } catch (err) {
          this.$root.$bvToast.toast(
            "Unsere Stellenpakete konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      },
      setPricingPackage(pkg) {
        const pricingPackage = this.pricingPackages.find(
          pricingPackage => pricingPackage.name === pkg
        );

        this.checkout.pricingPackage =
          pricingPackage || this.pricingPackages[1];
      },
      async setBillingAddress() {
        const response = await this.$axios.get("/api/customers/me");

        if (response.data.customer) {
          this.checkout.customer = response.data.customer;
          this.checkout.customer.email = this.$store.state.auth.user.email;
        } else {
          this.checkout.customer = {
            name: this.job.company.name,
            email: this.$store.state.auth.user.email,
            phone: null,
            address: {
              city: this.job.company.location,
              postal_code: this.job.company.zipCode,
              line1: this.job.company.street,
              line2: null,
              country: ""
            }
          };
        }
      },
      validateBillingAddress() {
        this.checkout.error = null;
        this.checkout.validated = true;
        return !this.checkout.customer.name ||
          !this.checkout.customer.email ||
          !this.checkout.customer.address.city ||
          !this.checkout.customer.address.line1 ||
          !this.checkout.customer.address.postal_code ||
          !this.checkout.customer.address.country
          ? false
          : true;
      },
      async startCheckout() {
        if (!this.validateBillingAddress()) {
          this.checkout.error =
            "Bitte füllen Sie die erforderlichen Felder aus und beachten Sie die Zeichenvorgaben!";
          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.post(
            "/api/checkout/create-invoice",
            {
              jobId: this.job._id,
              customer: this.checkout.customer,
              coupons: this.checkout.coupon ? [this.checkout.coupon.id] : null,
              invoiceItems: [
                {
                  price: this.checkout.pricingPackage.stripePrice.id,
                  metadata: { type: "single_job", jobId: this.job._id }
                }
              ],
              accepted: this.checkout.accepted
            }
          );

          if (response.status === 200) {
            window.open(response.data.invoice_pdf, "_blank");

            this.$root.$bvToast.toast(
              "Sie erhalten die Rechnung per E-Mail inkl. Zahlungslink sowie als PDF Anhang.",
              {
                title: `Rechnung erfolgreich angefordert`,
                variant: "success",
                toaster: "b-toaster-bottom-right",
                solid: true,
                noAutoHide: true
              }
            );

            this.$gtag.event("begin_checkout", {
              value: this.amountComputed / 100,
              currency: "EUR",
              items: [
                {
                  id: this.job._id,
                  name: this.job.title,
                  price: this.amountComputed / 100
                }
              ]
            });

            this.$matomo &&
              this.$matomo.trackEvent(
                "commerce",
                "begin_checkout",
                this.job._id,
                this.amountComputed / 100
              );

            this.$router.push("/user/rechnungen");
          }
        } catch (err) {
          console.log("err.response: ", err.response);

          this.$root.$bvToast.toast(
            err.response.data ||
              "Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns über das Kontaktformular.",
            {
              title: `Es ist ein Fehler aufgetreten`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async validatePromotionCode() {
        this.$store.dispatch("setOverlay", true);

        try {
          this.checkout.couponValidationState = null;

          const response = await this.$axios.get(
            "/api/coupons/coupon-by-promotion-code",
            {
              params: {
                code: this.checkout.promotionCode,
                product: this.checkout.pricingPackage.stripePrice.stripeProduct
              }
            }
          );

          if (response.data.error) {
            this.checkout.couponValidationState = false;
            this.checkout.coupon = null;
            this.checkout.promotionCodeErr = response.data.error;
          } else {
            this.checkout.couponValidationState = true;
            this.checkout.coupon = response.data.coupon;
            this.checkout.promotionCodeErr = null;
          }
        } catch (error) {
          this.checkout.couponValidationState = false;
          this.checkout.coupon = null;
        }

        this.$store.dispatch("setOverlay", false);
      }
    }
  };
</script>
