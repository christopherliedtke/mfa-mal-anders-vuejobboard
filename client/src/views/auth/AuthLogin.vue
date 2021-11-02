<template>
  <div class="login auth-container container">
    <h1 class="h2 text-center">{{ title }}</h1>
    <div
      class="mx-auto my-3 bg-primary rounded-circle"
      style="width: 75px; height: 75px"
    >
      <div>
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-person-plus-fill "
          viewBox="0 0 16 16"
        >
          <path
            d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
          <path
            fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg> -->

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-unlock-fill text-light p-4"
          viewBox="0 0 16 16"
        >
          <path
            d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"
          />
        </svg>
      </div>
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
