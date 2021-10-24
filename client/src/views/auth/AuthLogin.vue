<template>
  <div class="login auth-container container">
    <h2 class="text-center">{{ title }}</h2>
    <div
      class="icon-box mx-auto bg-primary rounded-circle"
      style="width: 75px; height: 75px"
    >
      <Fa icon="unlock-alt" class="text-light m-0" size="2x" />
    </div>
    <LoginForm />

    <Head :title="title" desc="Anmelden bei MFA mal anders" img="" />
  </div>
</template>

<script>
  import LoginForm from "@/components/forms/LoginForm.vue";
  export default {
    name: "AuthLogin",
    components: { LoginForm },
    data() {
      return {
        title: "Anmeldung"
      };
    }
  };
</script>
