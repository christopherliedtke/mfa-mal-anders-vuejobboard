<template>
  <nav>
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <b-link
          to="/user/account"
          role="tab"
          class="nav-link"
          active-class="active"
          >Account</b-link
        >
      </li>
      <li
        v-if="$store.state.auth.user.isEmployer"
        class="nav-item"
        role="presentation"
      >
        <b-link
          to="/user/stellenanzeigen"
          role="tab"
          class="nav-link"
          active-class="active"
          >Stellenanzeigen</b-link
        >
      </li>
      <li
        v-if="$store.state.auth.user.isEmployer"
        class="nav-item"
        role="presentation"
      >
        <b-link
          to="/user/unternehmen"
          role="tab"
          class="nav-link"
          active-class="active"
          >Unternehmen</b-link
        >
      </li>
      <li
        v-if="$store.state.auth.user.isEmployer"
        class="nav-item"
        role="presentation"
      >
        <b-link
          to="/user/zahlungen"
          role="tab"
          class="nav-link"
          active-class="active"
          >Zahlungen</b-link
        >
      </li>
      <li
        v-if="$store.state.auth.user.isEducational"
        class="nav-item"
        role="presentation"
      >
        <b-link
          to="/user/fortbildungen"
          role="tab"
          class="nav-link"
          active-class="active"
          >Fortbildungen</b-link
        >
      </li>
      <li
        v-if="
          $config.starredJobs.active &&
            ($store.state.auth.user.isAdmin ||
              $store.state.auth.user.isEmployee ||
              $store.state.starredJobs.starredJobs.length > 0)
        "
        class="nav-item"
        role="presentation"
      >
        <b-link
          to="/user/gespeicherte-stellenanzeigen"
          role="tab"
          class="nav-link"
          active-class="active"
          >Gespeicherte Stellenanzeigen</b-link
        >
      </li>
      <li
        v-if="$store.state.auth.user.isEmployee"
        class="nav-item"
        role="presentation"
      >
        <b-link
          to="/user/job-newsletter"
          role="tab"
          class="nav-link"
          active-class="active"
          >Job Newsletter</b-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "UserNav"
  };
</script>
