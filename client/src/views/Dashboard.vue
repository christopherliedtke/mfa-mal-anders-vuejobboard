<template>
    <b-container class="dashboard py-5">
        <h2>Dashboard</h2>
        <b-tabs content-class="mt-3">
            <b-tab
                title="Jobs"
                :active="tabIndex === '1' || tabIndex === undefined"
            >
                <MyJobsList></MyJobsList>
            </b-tab>
            <b-tab title="Companies" :active="tabIndex === '2'">
                <MyCompaniesList></MyCompaniesList>
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import MyJobsList from "@/components/MyJobsList.vue";
    import MyCompaniesList from "@/components/MyCompaniesList.vue";
    export default {
        name: "Dashboard",
        components: {
            MyJobsList,
            MyCompaniesList
        },
        data() {
            return {
                tabIndex: "1"
            };
        },
        mounted() {
            this.tabIndex = this.$route.query.tab;
        },
        head: {
            title: function() {
                return {
                    inner: "Dashboard"
                };
            }
        }
    };
</script>

<style scoped lang="scss"></style>
