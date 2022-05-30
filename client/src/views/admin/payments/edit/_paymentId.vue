<template>
  <div class="edit-payment container py-5">
    <h2>Zahlung bearbeiten</h2>
    <PaymentDataForm />
  </div>
</template>

<script>
  import PaymentDataForm from "@/components/PaymentDataForm.vue";
  export default {
    name: "AdminEditPayment",
    components: {
      PaymentDataForm
    }
  };
</script>
