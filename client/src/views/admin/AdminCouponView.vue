<template>
    <b-container class="new-job py-5">
        <h2>Add/Update Coupon</h2>
        <CouponForm
            :couponId="
                $route.params.couponId === 'new' ? null : $route.params.couponId
            "
        ></CouponForm>
    </b-container>
</template>

<script>
    import CouponForm from "@/components/admin/CouponForm.vue";
    export default {
        name: "AdminCouponView",
        components: {
            CouponForm
        }
    };
</script>

<style scoped lang="scss"></style>
