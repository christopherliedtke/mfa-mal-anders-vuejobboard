<template>
  <b-container class="new-job py-5">
    <h2>Add/Update Coupon</h2>
    <CouponForm
      :coupon-id="
        $route.params.couponId === 'new' ? null : $route.params.couponId
      "
    ></CouponForm>
  </b-container>
</template>

<script>
  import CouponForm from "@/components/forms/CouponForm.vue";
  export default {
    name: "AdminCouponView",
    components: {
      CouponForm
    }
  };
</script>
