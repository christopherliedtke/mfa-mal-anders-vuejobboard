<template>
    <b-container class="dashboard py-5">
        <h2>Admin</h2>
        <b-tabs content-class="mt-3" :value="query.tab">
            <b-tab title="All Jobs" @click="setQuery('tab', 0)">
                <AllJobsListAdmin />
            </b-tab>
            <b-tab title="All Companies" @click="setQuery('tab', 1)"> </b-tab>
            <b-tab title="All Users" @click="setQuery('tab', 2)"> </b-tab>
            <b-tab title="Data Analytics" @click="setQuery('tab', 3)"> </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import AllJobsListAdmin from "@/components/admin/AllJobsListAdmin.vue";
    export default {
        name: "Admin",
        components: { AllJobsListAdmin },
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
