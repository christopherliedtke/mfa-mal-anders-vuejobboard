<template>
  <b-container class="edit-payment py-5">
    <h2>Zahlung bearbeiten</h2>
    <PaymentForm />
  </b-container>
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
