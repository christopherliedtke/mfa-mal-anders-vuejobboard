<template>
    <div class="coupon-form position-relative">
        <Overlay :show="showOverlay" />
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
                min="0"
                max="1"
                step="0.01"
                v-model="coupon.discount"
                :state="validated ? (coupon.discount ? true : false) : null"
                id="discount"
                placeholder="Enter discount ..."
                required
            />
            <label for="usage">Usage</label>
            <b-form-select
                id="usage"
                v-model="coupon.usage"
                :state="validated ? true : null"
            >
                <b-form-select-option :value="null">--</b-form-select-option>
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
                    <b-icon v-if="success" icon="check2" class="mr-2" />
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
    import axios from "@/axios";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "CouponForm",
        components: {
            Overlay
        },
        props: ["couponId"],
        data() {
            return {
                coupon: {
                    _id: "",
                    code: "",
                    discount: 0,
                    usage: null,
                    expireAt: null,
                    userId: {
                        _id: null
                    }
                },

                validated: null,
                showOverlay: false,
                success: "",
                error: ""
            };
        },
        created: function() {
            if (this.couponId) {
                this.getCoupon(this.couponId);
            }
        },
        methods: {
            async getCoupon(couponId) {
                try {
                    const coupon = await axios.post("/api/coupons/admin", {
                        query: `
                            query {
                                coupon(_id: "${couponId}") {
                                    _id
                                    code
                                    discount
                                    usage
                                    expireAt
                                    userId {
                                        _id
                                    }
                                }
                            }
                        `
                    });

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
                    console.log("err: ", err);
                }
            },
            async onSubmit() {
                this.error = false;

                if (!this.formValidation()) {
                    this.error = "Please provide all necessary information.";
                    return null;
                }

                this.showOverlay = true;

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
                                        ? `_id: "${this.couponId}",`
                                        : ""
                                }
                                code: "${this.coupon.code}",
                                discount: ${this.coupon.discount}
                                usage: "${this.coupon.usage}",
                                ${
                                    this.coupon.expireAt
                                        ? `expireAt: ${Number(
                                              this.coupon.expireAt
                                          )},`
                                        : ""
                                }
                                ${
                                    this.coupon.userId._id
                                        ? `userId: "${this.coupon.userId._id}",`
                                        : ""
                                }
                            ) {
                                _id
                            }
                        }
                    `;

                    const response = await axios.post(`/api/coupons/admin`, {
                        query
                    });

                    if (!response.data.data[mutationType]) {
                        this.error =
                            "Oh, something went wrong. Please try again!";
                    } else {
                        this.success = true;

                        setTimeout(() => {
                            this.$router.go(-1);
                        }, 1000);
                    }
                } catch (err) {
                    this.error = "Oh, something went wrong. Please try again!";
                    console.log("Error on update/save coupon: ", err);
                }

                this.showOverlay = false;
            },
            formValidation() {
                this.validated = true;
                return !this.coupon.code || !this.coupon.discount
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

<style lang="scss"></style>
