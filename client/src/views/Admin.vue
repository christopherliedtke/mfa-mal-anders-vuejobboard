<template>
    <b-container fluid class="dashboard py-5 px-5">
        <h2>Admin</h2>
        <b-tabs content-class="mt-3" :value="query.tab">
            <b-tab title="Jobs" @click="setQuery('tab', 0)">
                <AllJobsListAdmin />
            </b-tab>
            <b-tab title="Companies" @click="setQuery('tab', 1)">
                <AllCompaniesListAdmin />
            </b-tab>
            <b-tab title="Users" @click="setQuery('tab', 2)">
                <AllUsersListAdmin />
            </b-tab>
            <b-tab title="Coupons" @click="setQuery('tab', 3)">
                <AllCouponsListAdmin />
            </b-tab>
            <b-tab title="Data Analytics" @click="setQuery('tab', 4)"> </b-tab>
        </b-tabs>

        <Head title="Admin" desc="" img="" />
    </b-container>
</template>

<script>
    import AllJobsListAdmin from "@/components/admin/AllJobsListAdmin.vue";
    import AllCompaniesListAdmin from "@/components/admin/AllCompaniesListAdmin.vue";
    import AllUsersListAdmin from "@/components/admin/AllUsersListAdmin.vue";
    import AllCouponsListAdmin from "@/components/admin/AllCouponsListAdmin.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Admin",
        components: {
            AllJobsListAdmin,
            AllCompaniesListAdmin,
            AllUsersListAdmin,
            AllCouponsListAdmin,
            Head
        },
        data() {
            return {
                query: {
                    tab: parseInt(this.$route.query.tab) || 0
                }
            };
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

<style></style>
