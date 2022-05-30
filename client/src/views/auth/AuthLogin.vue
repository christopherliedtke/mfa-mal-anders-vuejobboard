<template>
  <div class="login auth-container container position-relative">
    <div class="bg-logo" style="opacity: 0.025"></div>
    <div class="position-relative">
      <h1 class="display-3 bold text-center">{{ title }}</h1>
      <p class="text-center h3">MFA mal anders</p>
      <b-img
        src="/img/MfaMalAnders_logo_circle_bgdark_white.svg"
        width="90px"
        height="90px"
        class="d-block mx-auto my-4"
      />
      <AuthLoginForm />
    </div>

    <Head :title="title" desc="Anmelden bei MFA mal anders" img="" />
  </div>
</template>

<script>
  import AuthLoginForm from "@/components/AuthLoginForm.vue";
  export default {
    name: "AuthLogin",
    components: { AuthLoginForm },
    data() {
      return {
        title: "Login"
      };
    }
  };
</script>
