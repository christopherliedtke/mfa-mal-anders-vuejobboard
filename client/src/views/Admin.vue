<template>
    <b-container fluid class="dashboard py-5 px-5">
        <h2>Admin</h2>
        <b-tabs content-class="mt-3" :value="query.tab">
            <b-tab title="All Jobs" @click="setQuery('tab', 0)">
                <AllJobsListAdmin />
            </b-tab>
            <b-tab title="All Companies" @click="setQuery('tab', 1)">
                <AllCompaniesListAdmin />
            </b-tab>
            <b-tab title="All Users" @click="setQuery('tab', 2)">
                <AllUsersListAdmin />
            </b-tab>
            <b-tab title="Data Analytics" @click="setQuery('tab', 3)"> </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import AllJobsListAdmin from "@/components/admin/AllJobsListAdmin.vue";
    import AllCompaniesListAdmin from "@/components/admin/AllCompaniesListAdmin.vue";
    import AllUsersListAdmin from "@/components/admin/AllUsersListAdmin.vue";
    export default {
        name: "Admin",
        components: {
            AllJobsListAdmin,
            AllCompaniesListAdmin,
            AllUsersListAdmin
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
