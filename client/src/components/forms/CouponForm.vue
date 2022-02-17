<template>
  <div class="coupon-form position-relative">
    <b-form id="coupon-form">
      <label for="code">Code *</label>
      <b-form-input
        id="coupon-code"
        v-model="coupon.code"
        type="text"
        :state="validated ? (coupon.code ? true : false) : null"
        placeholder="Enter coupon code ..."
        required
      />
      <label for="discount">Discount *</label>
      <b-form-input
        id="discount"
        v-model="coupon.discount"
        type="number"
        number
        min="0"
        max="1"
        step="0.01"
        :state="validated ? (coupon.discount ? true : false) : null"
        placeholder="Enter discount ..."
        required
      />
      <label for="refresh-frequency">Refrech Frequency *</label>
      <b-form-input
        id="refresh-frequency"
        v-model="coupon.refreshFrequency"
        type="number"
        number
        min="0"
        step="1"
        :state="validated ? (coupon.refreshFrequency ? true : false) : null"
        placeholder="Refresh ad after X days..."
        required
      />
      <label for="usage">Usage</label>
      <b-form-select
        id="usage"
        v-model="coupon.usage"
        :state="validated ? true : null"
      >
        <b-form-select-option value="unlimited">unlimited</b-form-select-option>
        <b-form-select-option value="single">single</b-form-select-option>
        <b-form-select-option value="singlePerUser"
          >Single per User</b-form-select-option
        >
      </b-form-select>

      <label for="user-id">User ID</label>
      <b-form-input
        id="user-id"
        v-model="coupon.userId._id"
        type="text"
        :state="validated ? true : null"
        placeholder="Enter User ID ..."
      />

      <label for="expire-at">Expiration Date</label>
      <b-input-group>
        <b-form-datepicker
          id="expire-at"
          v-model="coupon.expireAt"
          :value-as-date="true"
          :state="validated && coupon.expireAt ? true : null"
          placeholder="Choose a date"
          label-help=""
          start-weekday="1"
        />
        <b-input-group-append>
          <b-button class="px-2" @click.prevent="coupon.expireAt = null"
            ><svg
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

      <div class="d-flex justify-content-between my-4">
        <b-button variant="outline-danger" :to="`/admin/coupons`">
          Cancel
        </b-button>
        <b-button variant="success" @click.prevent="onSubmit">
          Save
        </b-button>
      </div>
    </b-form>
    <b-alert v-if="error" class="mt-3" show dismissible variant="warning">{{
      error
    }}</b-alert>
  </div>
</template>

<script>
  import { BFormDatepicker } from "bootstrap-vue";
  import Vue from "vue";
  // eslint-disable-next-line
  Vue.component("b-form-datepicker", BFormDatepicker);
  export default {
    name: "CouponForm",
    props: { couponId: { type: String, default: "" } },
    data() {
      return {
        coupon: {
          _id: "",
          code: "",
          discount: 0,
          refreshFrequency: 0,
          usage: "unlimited",
          expireAt: null,
          userId: {
            _id: null
          }
        },

        validated: null,
        success: "",
        error: ""
      };
    },
    created() {
      if (this.couponId) {
        this.getCoupon(this.couponId);
      }
    },
    methods: {
      async getCoupon(couponId) {
        try {
          const coupon = await this.$axios.get("/graphql", {
            params: {
              query: `
                                query {
                                    adminCoupon(_id: "${couponId}") {
                                        _id
                                        code
                                        discount
                                        refreshFrequency
                                        usage
                                        expireAt
                                        userId {
                                            _id
                                        }
                                    }
                                }
                            `
            }
          });

          if (!coupon.data.data.adminCoupon.userId) {
            coupon.data.data.adminCoupon.userId = { _id: null };
          }
          if (coupon.data.data.adminCoupon.expireAt) {
            coupon.data.data.adminCoupon.expireAt = new Date(
              coupon.data.data.adminCoupon.expireAt
            );
          } else {
            coupon.data.data.adminCoupon.expireAt = null;
          }

          this.coupon = coupon.data.data.adminCoupon;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Laden des Coupons ist ein Fehler aufgetreten.",
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
      async onSubmit() {
        this.error = false;

        if (!this.formValidation()) {
          this.error = "Please provide all necessary information.";
          return null;
        }

        this.$store.dispatch("setOverlay", true);

        try {
          // Save / Update coupon
          let mutationType;
          this.couponId
            ? (mutationType = "updateCoupon")
            : (mutationType = "addCoupon");

          const query = `
                        mutation {
                            ${mutationType}(
                                ${
                                  mutationType === "updateCoupon"
                                    ? `_id: "${this.couponId}"`
                                    : ""
                                }
                                code: "${this.coupon.code}"
                                discount: ${this.coupon.discount}
                                refreshFrequency: ${
                                  this.coupon.refreshFrequency
                                }
                                usage: "${this.coupon.usage}"
                                ${
                                  this.coupon.expireAt
                                    ? `expireAt: ${Number(
                                        this.coupon.expireAt
                                      )}`
                                    : `expireAt: ${null}`
                                }
                                ${
                                  this.coupon.userId._id
                                    ? `userId: "${this.coupon.userId._id}"`
                                    : `userId: ${null}`
                                }
                            ) {
                                _id
                            }
                        }
                    `;

          const coupon = await this.$axios.post(`/graphql`, {
            query
          });

          if (coupon.data.errors) {
            this.$root.$bvToast.toast(
              "Beim Speichern des Coupons ist ein Fehler aufgetreten.",
              {
                title: `Fehler beim Speichern`,
                variant: "danger",
                toaster: "b-toaster-bottom-right",
                solid: true,
                noAutoHide: true
              }
            );
            throw new Error("Coupon could not be saved!");
          }

          this.success = true;

          this.$root.$bvToast.toast(
            "Der Coupon wurde erfolgreich gespeichert.",
            {
              title: `Coupon gespeichert`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true
            }
          );

          this.$router.go(-1);
        } catch (err) {
          this.$root.$bvToast.toast(
            "Beim Speichern des Coupons ist ein Fehler aufgetreten.",
            {
              title: `Fehler beim Speichern`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      formValidation() {
        this.validated = true;
        return !this.coupon.code ||
          (!this.coupon.discount && !this.coupon.refreshFrequency)
          ? false
          : true;
      },
      formReset() {
        for (const key in this.coupon) {
          this.coupon[key] = "";
        }
      },
      hasHistory() {
        return window.history.length > 2;
      }
    }
  };
</script>
