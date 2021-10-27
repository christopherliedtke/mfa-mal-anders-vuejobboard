<template>
  <div>
    <b-button
      class="mb-3"
      to="/admin/coupons/edit/new"
      variant="outline-primary"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-lg mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        /></svg
      >New Coupon</b-button
    >
    <b-form id="coupon-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
        />
        <b-input-group-append>
          <b-button class="px-2" @click.prevent="filter.searchTerm = ''">
            <svg
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
      <template #cell(user)="row">
        <div v-if="row.item.userId">
          {{ row.item.userId.lastName + ", " + row.item.userId.firstName }}
          <a :href="`mailto:${row.item.userId.email}`">
            {{ row.item.userId.email }}</a
          >
        </div>
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(expireAt)="row">
        {{ row.value ? new Date(row.value).toLocaleString() : row.value }}
      </template>

      <template #cell(actions)="row">
        <b-button
          class="mr-2 mb-2"
          :to="`/admin/coupons/edit/${row.item._id}`"
          variant="primary"
          size="sm"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            /></svg
          >Edit
        </b-button>
        <b-button
          v-b-modal="'deleteCouponModal'"
          size="sm"
          variant="danger"
          @click="couponToDelete = row.item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
            /></svg
          >Delete
        </b-button>
      </template>
    </b-table>
    <BModal
      id="deleteCouponModal"
      :title="`Delete ${couponToDelete.code}`"
      ok-title="Delete Coupon"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteCoupon(couponToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this coupon?
      </p></BModal
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
  import Vue from "vue";
  import { BModal, VBModal } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
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
            const searchTerm = this.filter.searchTerm.toLowerCase().split(" ");
            const searchProp = [
              coupon._id,
              coupon.code,
              coupon.discount,
              coupon.userId ? coupon.userId._id : "",
              coupon.userId ? coupon.userId.fistName : "",
              coupon.userId ? coupon.userId.lastName : "",
              coupon.userId ? coupon.userId.email : ""
            ]
              .join(" ")
              .toLowerCase();

            if (searchTerm.every(term => searchProp.includes(term))) {
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
      async getAllCoupons() {
        this.$store.dispatch("setOverlay", true);

        try {
          const coupons = await this.$axios.get("/graphql", {
            params: {
              query: `
                                query {
                                    adminCoupons {
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
            }
          });

          this.coupons = coupons.data.data.adminCoupons;
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast("Codes konnten nicht geladen werden.", {
            title: `Fehler beim Laden`,
            variant: "danger",
            toaster: "b-toaster-bottom-right",
            solid: true,
            noAutoHide: true
          });
        }

        this.$store.dispatch("setOverlay", false);
      },
      // showDeleteCouponModal(user) {
      //   this.couponToDelete = user;
      //   this.$bvModal.show("deleteCouponModal");
      // },
      async deleteCoupon(couponId) {
        try {
          const coupon = await this.$axios.post("/graphql", {
            query: `
                                mutation {
                                    deleteCoupon(_id: "${couponId}") {
                                        _id
                                    }
                                }
                            `
          });

          if (coupon.data.errors) {
            throw new Error("Coupon could not be saved!");
          }

          this.coupons.forEach((coupon, index) => {
            if (coupon._id === couponId) {
              this.coupons.splice(index, 1);
            }
          });
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Der Code konnte nicht gelöscht werden. Error: ${err}`,
            {
              title: `Fehler beim Löschen`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>
