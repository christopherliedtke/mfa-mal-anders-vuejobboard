<template>
  <b-container class="password-reset auth-container">
    <h2 class="text-center">{{ title }}</h2>
    <PasswordResetForm />
  </b-container>
</template>

<script>
  import PasswordResetForm from "@/components/forms/PasswordResetForm.vue";
  export default {
    name: "AuthPasswordReset",
    components: {
      PasswordResetForm
    },
    data() {
      return {
        title: "Passwort zurücksetzen"
      };
    }
  };
</script>
