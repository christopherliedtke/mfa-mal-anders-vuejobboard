<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div class="logout container"></div>

    <b-alert
      v-model="alert.show"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="danger"
      dismissible
    >
      {{ alert.msg }}
      <BSpinner
        style="width: 1.2rem; height: 1.2rem;"
        variant="danger"
        label="Spinning"
      ></BSpinner>
    </b-alert>

    <Head :title="title" desc="Ausloggen bei MFA mal anders" img="" />
  </div>
</template>

<script>
  import Vue from "vue";
  import { BSpinner } from "bootstrap-vue";
  Vue.component("BSpinner", BSpinner);
  export default {
    name: "AuthLogout",
    data() {
      return {
        title: "Abmelden",
        alert: {
          show: false,
          msg: ""
        }
      };
    },
    mounted() {
      if (this.$route.query.error) {
        this.$root.$bvToast.toast(this.$route.query.error, {
          title: `Fehler`,
          variant: "danger",
          toaster: "b-toaster-bottom-right",
          solid: true,
          noAutoHide: true
        });
      }

      this.logout();
    },
    methods: {
      async logout() {
        localStorage.clear();
        localStorage.setItem("nl-pop", "false");

        const response = await this.$axios.get("/api/auth/logout");

        if (response.data.success) {
          this.$store.commit("setUserId", "");
          this.$store.commit("setUserRole", "");
          this.$store.commit("setUserStatus", "");
          this.$router.push({ path: "/auth/login" });
        }
      }
    }
  };
</script>
