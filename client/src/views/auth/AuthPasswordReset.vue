<template>
  <div class="password-reset auth-container container">
    <h1 class="h2 text-center">{{ title }}</h1>
    <AuthPasswordResetForm />

    <Head
      :title="title"
      desc="Passwort zurücksetzen bei MFA mal anders"
      img=""
    />
  </div>
</template>

<script>
  import AuthPasswordResetForm from "@/components/AuthPasswordResetForm.vue";
  export default {
    name: "AuthPasswordReset",
    components: {
      AuthPasswordResetForm
    },
    data() {
      return {
        title: "Passwort zurücksetzen"
      };
    }
  };
</script>
