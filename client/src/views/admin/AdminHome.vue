<template>
  <b-container fluid class="dashboard py-5 px-3 px-md-5">
    <h2>Admin</h2>
    <BTabs content-class="mt-3" :value="query.tab" lazy>
      <BTab title="Jobs" @click="setQuery('tab', 0)">
        <AllJobsListAdmin />
      </BTab>
      <BTab title="Companies" @click="setQuery('tab', 1)">
        <AllCompaniesListAdmin />
      </BTab>
      <BTab title="Users" @click="setQuery('tab', 2)">
        <AllUsersListAdmin />
      </BTab>
      <BTab title="Coupons" @click="setQuery('tab', 3)">
        <AllCouponsListAdmin />
      </BTab>
      <BTab title="Subscribers" @click="setQuery('tab', 4)">
        <AllSubscribersListAdmin />
      </BTab>
      <BTab title="Payments" @click="setQuery('tab', 5)">
        <AllPaymentsListAdmin />
      </BTab>
      <BTab title="Data Analytics" @click="setQuery('tab', 6)">
        <DataAnalyticsDashboard />
      </BTab>
    </BTabs>

    <Head title="Admin" desc="" img="" />
  </b-container>
</template>

<script>
  import AllJobsListAdmin from "@/components/admin/AllJobsListAdmin.vue";
  import AllCompaniesListAdmin from "@/components/admin/AllCompaniesListAdmin.vue";
  import AllUsersListAdmin from "@/components/admin/AllUsersListAdmin.vue";
  import AllCouponsListAdmin from "@/components/admin/AllCouponsListAdmin.vue";
  import AllSubscribersListAdmin from "@/components/admin/AllSubscribersListAdmin.vue";
  import AllPaymentsListAdmin from "@/components/admin/AllPaymentsListAdmin.vue";
  import DataAnalyticsDashboard from "@/components/admin/DataAnalyticsDashboard.vue";
  import { BTable, BTabs, BTab } from "bootstrap-vue";
  import Vue from "vue";
  // eslint-disable-next-line
  Vue.component("b-table", BTable);
  Vue.component("BTabs", BTabs);
  Vue.component("BTab", BTab);
  export default {
    name: "AdminHome",
    components: {
      AllJobsListAdmin,
      AllCompaniesListAdmin,
      AllUsersListAdmin,
      AllCouponsListAdmin,
      AllSubscribersListAdmin,
      AllPaymentsListAdmin,
      DataAnalyticsDashboard
    },
    data() {
      return {
        query: {
          tab: parseInt(this.$route.query.tab) || 0
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
