<template>
  <div class="password-reset auth-container container">
    <h1 class="h2 text-center">{{ title }}</h1>
    <PasswordResetForm />

    <Head
      :title="title"
      desc="Passwort zurücksetzen bei MFA mal anders"
      img=""
    />
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
