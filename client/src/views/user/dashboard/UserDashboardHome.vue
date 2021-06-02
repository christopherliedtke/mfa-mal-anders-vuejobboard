<template>
  <b-container class="dashboard py-5">
    <h2>Mein Konto</h2>
    <b-tabs content-class="mt-3" :value="parseInt(query.tab)" lazy>
      <b-tab title="Account" @click="setQuery('tab', 0)">
        <MyAccount />
      </b-tab>
      <b-tab
        v-if="$store.state.auth.user.isEmployer"
        title="Stellenanzeigen"
        @click="setQuery('tab', 1)"
      >
        <MyJobsList />
      </b-tab>
      <b-tab
        v-if="$store.state.auth.user.isEmployer"
        title="Unternehmen"
        @click="setQuery('tab', 2)"
      >
        <MyCompaniesList />
      </b-tab>
      <b-tab
        v-if="$store.state.auth.user.isEmployer"
        title="Zahlungen"
        @click="setQuery('tab', 3)"
      >
        <MyPaymentsList />
      </b-tab>
      <b-tab
        v-if="
          $config.starredJobs.active &&
            ($store.state.auth.user.isAdmin ||
              $store.state.auth.user.isEmployee ||
              $store.state.starredJobs.starredJobs.length > 0)
        "
        title="Meine gespeicherten Stellenanzeigen"
        @click="setQuery('tab', 4)"
      >
        <MyStarredJobs />
      </b-tab>
      <b-tab
        v-if="
          $store.state.auth.user.isAdmin || $store.state.auth.user.isEmployee
        "
        title="Job-Newsletter"
        @click="setQuery('tab', 5)"
      >
        <MyJobAlerts />
      </b-tab>
    </b-tabs>

    <Head title="Dashboard" desc="" img="" />
  </b-container>
</template>

<script>
  import MyAccount from "@/components/dashboard/MyAccount.vue";
  import MyJobsList from "@/components/dashboard/MyJobsList.vue";
  import MyCompaniesList from "@/components/dashboard/MyCompaniesList.vue";
  import MyPaymentsList from "@/components/dashboard/MyPaymentsList.vue";
  import MyStarredJobs from "@/components/dashboard/MyStarredJobs.vue";
  import MyJobAlerts from "@/components/dashboard/MyJobAlerts.vue";
  import { BTabs, BTab } from "bootstrap-vue";
  import Vue from "vue";
  // eslint-disable-next-line
  Vue.component("b-tabs", BTabs);
  // eslint-disable-next-line
  Vue.component("b-tab", BTab);
  export default {
    name: "UserDashboardHome",
    components: {
      MyAccount,
      MyJobsList,
      MyCompaniesList,
      MyPaymentsList,
      MyStarredJobs,
      MyJobAlerts
    },
    data() {
      return {
        query: {
          tab: 0
        }
      };
    },
    watch: {
      "$route.query.tab": {
        handler() {
          this.query.tab = parseInt(this.$route.query.tab) || 0;
        },
        immediate: true
      }
    },
    mounted() {
      // this.query.tab = this.$route.query.tab;
    },
    methods: {
      setQuery(key, value) {
        this.query[key] = value;
        this.$router.push({
          query: { ...this.$route.query, [key]: value }
        });
      }
    }
  };
</script>
