<template>
    <div class="coupon-form position-relative">
        <b-form id="coupon-form">
            <label for="code">Code *</label>
            <b-form-input
                type="text"
                v-model="coupon.code"
                :state="validated ? (coupon.code ? true : false) : null"
                id="coupon-code"
                placeholder="Enter coupon code ..."
                required
            />
            <label for="discount">Discount *</label>
            <b-form-input
                type="number"
                number
                min="0"
                max="1"
                step="0.01"
                v-model="coupon.discount"
                :state="validated ? (coupon.discount ? true : false) : null"
                id="discount"
                placeholder="Enter discount ..."
                required
            />
            <label for="refresh-frequency">Refrech Frequency *</label>
            <b-form-input
                type="number"
                number
                min="0"
                step="1"
                v-model="coupon.refreshFrequency"
                :state="
                    validated ? (coupon.refreshFrequency ? true : false) : null
                "
                id="refresh-frequency"
                placeholder="Refresh ad after X days..."
                required
            />
            <label for="usage">Usage</label>
            <b-form-select
                id="usage"
                v-model="coupon.usage"
                :state="validated ? true : null"
            >
                <b-form-select-option value="unlimited"
                    >unlimited</b-form-select-option
                >
                <b-form-select-option value="single"
                    >single</b-form-select-option
                >
                <b-form-select-option value="singlePerUser"
                    >Single per User</b-form-select-option
                >
            </b-form-select>

            <label for="user-id">User ID</label>
            <b-form-input
                type="text"
                v-model="coupon.userId._id"
                :state="validated ? true : null"
                id="user-id"
                placeholder="Enter User ID ..."
            />

            <label for="expire-at">Expiration Date</label>
            <b-form-datepicker
                :value-as-date="true"
                :state="validated && coupon.expireAt ? true : null"
                id="expire-at"
                v-model="coupon.expireAt"
                placeholder="Choose a date"
            />

            <div class="d-flex justify-content-between my-4">
                <b-button variant="outline-danger" :to="`/admin?tab=3`">
                    Cancel
                </b-button>
                <b-button variant="success" @click.prevent="onSubmit">
                    <Fa v-if="success" icon="check" class="mr-2" />
                    {{ success ? "Done" : "Save" }}
                </b-button>
            </div>
        </b-form>
        <b-alert v-if="error" class="mt-3" show dismissible variant="warning">{{
            error
        }}</b-alert>
    </div>
</template>

<script>
    export default {
        name: "CouponForm",
        props: ["couponId"],
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
                    const coupon = await this.$axios.post(
                        "/api/coupons/admin",
                        {
                            query: `
                            query {
                                coupon(_id: "${couponId}") {
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
                    );

                    if (!coupon.data.data.coupon.userId) {
                        coupon.data.data.coupon.userId = { _id: null };
                    }
                    if (coupon.data.data.coupon.expireAt) {
                        coupon.data.data.coupon.expireAt = new Date(
                            coupon.data.data.coupon.expireAt
                        );
                    } else {
                        coupon.data.data.coupon.expireAt = null;
                    }

                    this.coupon = coupon.data.data.coupon;
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
                                        : ""
                                }
                                ${
                                    this.coupon.userId._id
                                        ? `userId: "${this.coupon.userId._id}"`
                                        : ""
                                }
                            ) {
                                _id
                            }
                        }
                    `;

                    const response = await this.$axios.post(
                        `/api/coupons/admin`,
                        {
                            query
                        }
                    );

                    if (!response.data.data[mutationType]) {
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
                    } else {
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
                    }
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