<template>
  <div class="edit-payment container py-5">
    <h2>Zahlung bearbeiten</h2>
    <PaymentForm />
  </div>
</template>

<script>
  import PaymentForm from "@/components/forms/PaymentForm.vue";
  export default {
    name: "AdminEditPayment",
    components: {
      PaymentForm
    }
  };
</script>
