<template>
    <div>
        <b-button class="mb-3" to="/admin/coupons/new" variant="outline-primary"
            ><b-icon class="mr-2" scale="1" icon="plus-circle"></b-icon>New
            Coupon</b-button
        >
        <b-form id="coupon-filter" inline @submit.prevent>
            <b-input-group class="my-2 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.searchTerm"
                    placeholder="Enter search term ..."
                />
                <b-input-group-append>
                    <b-button
                        ><b-icon
                            icon="x"
                            @click.prevent="filter.searchTerm = ''"
                    /></b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form>
        <b-table
            responsive
            striped
            hover
            sticky-header="80vh"
            :items="computedCoupons"
            :fields="fields"
            primary-key="_id"
        >
            <template v-slot:cell(user)="row">
                <div v-if="row.item.userId">
                    {{
                        row.item.userId.lastName +
                            ", " +
                            row.item.userId.firstName
                    }}
                    <a :href="`mailto:${row.item.userId.email}`">
                        {{ row.item.userId.email }}</a
                    >
                </div>
            </template>
            <template v-slot:cell(createdAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(updatedAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(expireAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>

            <template v-slot:cell(actions)="row">
                <b-button
                    class="mr-2 mb-2"
                    :to="`/admin/coupons/${row.item._id}`"
                    variant="primary"
                    size="sm"
                    ><b-icon icon="pencil-square"></b-icon>
                </b-button>
                <b-button
                    size="sm"
                    variant="danger"
                    @click="showDeleteCouponModal(row.item)"
                >
                    <b-icon class="mr-2" icon="trash"></b-icon>Delete
                </b-button>
            </template>
        </b-table>
        <b-modal
            id="deleteCouponModal"
            :title="`Delete ${couponToDelete.code}`"
            ok-title="Delete Coupon"
            centered
            ok-variant="danger"
            footer-class="d-flex justify-content-between"
            @ok="deleteCoupon(couponToDelete._id)"
            ><p class="my-4">
                Are you sure to delete this coupon?
            </p></b-modal
        >
        <b-alert
            v-model="error"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            variant="warning"
            dismissible
        >
            Oh, something went wrong. Please try again later.
        </b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "AllCouponsListAdmin",
        data() {
            return {
                coupons: [],
                couponToDelete: Object,
                error: false,
                filter: {
                    searchTerm: ""
                },
                fields: [
                    {
                        key: "_id",
                        label: "Coupon ID",
                        sortable: false
                    },
                    {
                        key: "code",
                        sortable: false
                    },
                    {
                        key: "discount",
                        sortable: true
                    },
                    {
                        key: "usage",
                        sortable: true
                    },
                    {
                        key: "refreshFrequency",
                        sortable: true
                    },
                    {
                        key: "userId._id",
                        label: "User ID",
                        sortable: false
                    },
                    {
                        key: "user",
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
                        key: "expireAt",
                        label: "Expires at",
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
            computedCoupons: function() {
                let coupons = [...this.coupons];

                // filter search term
                if (this.filter.searchTerm) {
                    coupons = coupons.filter(coupon => {
                        if (
                            this.checkForSearchTerm(
                                [
                                    coupon._id,
                                    coupon.code,
                                    coupon.discount,
                                    coupon.userId && coupon.userId._id,
                                    coupon.userId && coupon.userId.firstName,
                                    coupon.userId && coupon.userId.lastName,
                                    coupon.userId && coupon.userId.email
                                ],
                                this.filter.searchTerm
                            )
                        ) {
                            return coupon;
                        } else {
                            return;
                        }
                    });
                }

                return coupons;
            }
        },
        created() {
            this.getAllCoupons();
        },
        methods: {
            checkForSearchTerm(arrOfValues, searchTerm) {
                let result = false;
                arrOfValues.forEach(value => {
                    if (
                        value &&
                        value
                            .toString()
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    ) {
                        result = true;
                    }
                });
                return result;
            },
            async getAllCoupons() {
                try {
                    const response = await axios.post("/api/coupons/admin", {
                        query: `
                            query {
                                coupons {
                                    _id
                                    code
                                    discount
                                    refreshFrequency
                                    usage
                                    createdAt
                                    updatedAt
                                    expireAt
                                    userId {
                                        _id
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            }
                        `
                    });

                    this.coupons = response.data.data.coupons;
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            },
            showDeleteCouponModal(user) {
                this.couponToDelete = user;
                this.$bvModal.show("deleteCouponModal");
            },
            async deleteCoupon(couponId) {
                try {
                    const response = await axios.post("/api/coupons/admin", {
                        query: `
                            mutation {
                                deleteCoupon(_id: "${couponId}") {
                                    code
                                }
                            }
                        `
                    });

                    if (response.data.data.deleteCoupon.code === "deleted") {
                        this.coupons.forEach((coupon, index) => {
                            if (coupon._id === couponId) {
                                this.coupons.splice(index, 1);
                            }
                        });
                    } else {
                        this.error = true;
                    }
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            }
        }
    };
</script>

<style></style>
