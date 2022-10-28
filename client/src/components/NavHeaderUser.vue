<template>
  <router-link
    to="/user/account"
    @mouseenter.native="showSub('account')"
    @mouseleave.native="hideSub('account')"
  >
    <div class="d-flex align-items-center">
      <b-img
        v-if="$store.state.auth.user.image"
        :src="$store.state.auth.user.image"
        class="mr-1 rounded-circle"
        style="width: 25px; height: 25px; object-fit: cover"
      />
      <span
        v-else
        class="bg-light rounded-circle text-primary d-flex justify-content-center align-items-center mr-2"
        style="width: 22.5px; height: 22.5px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
      </span>
      <span>Konto</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down ml-1"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div id="account" ref="account" class="sub-menu">
      <router-link to="/user/account">Account</router-link>
      <router-link
        v-if="$store.state.auth.user.isEmployer"
        to="/user/stellenanzeigen"
        >Stellenanzeigen</router-link
      >
      <router-link
        v-if="$store.state.auth.user.isEmployer"
        to="/user/unternehmen"
        >Unternehmen</router-link
      >
      <router-link
        v-if="$store.state.auth.user.isEmployer"
        to="/user/rechnungen"
        >Rechnungen</router-link
      >
      <router-link
        v-if="$store.state.auth.user.isEducational"
        to="/user/fortbildungen"
        >Fortbildungen</router-link
      >
      <router-link
        v-if="
          $config.starredJobs.active &&
            ($store.state.auth.user.isEmployee ||
              ($store.state.starredJobs.starredJobs &&
                $store.state.starredJobs.starredJobs.length > 0))
        "
        to="/user/gespeicherte-stellenanzeigen"
        >Gespeicherte Jobs</router-link
      >
      <router-link
        v-if="
          $store.state.auth.user.isEmployee || $store.state.auth.user.isAdmin
        "
        to="/user/stellengesuche"
        >Stellengesuche</router-link
      >
      <router-link
        v-if="
          $store.state.auth.user.isEmployee || $store.state.auth.user.isAdmin
        "
        to="/user/job-newsletter"
        >Job-Newsletter</router-link
      >
      <AuthLogoutButton class="ml-lg-2 mt-3 mt-lg-2 mb-3 py-1 px-3" />
    </div>
  </router-link>
</template>

<script>
  const AuthLogoutButton = () =>
    import(
      /* webpackChunkName: "AuthLogoutButton" */ "@/components/AuthLogoutButton"
    );

  export default {
    name: "NavHeaderUser",
    components: {
      AuthLogoutButton
    },
    methods: {
      showSub(id) {
        this.$refs[id].classList.add("show");
      },
      hideSub(id) {
        this.$refs[id].classList.remove("show");
      }
    }
  };
</script>
