<template>
  <div class="password-reset auth-container container">
    <h2 class="text-center">{{ title }}</h2>
    <PasswordResetForm />
  </div>
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
