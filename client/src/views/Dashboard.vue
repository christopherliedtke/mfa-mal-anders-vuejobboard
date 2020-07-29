<template>
    <b-container class="dashboard py-5">
        <h2>Dashboard</h2>
        <b-tabs content-class="mt-3" :value="query.tab">
            <b-tab title="Jobs" @click="setQuery('tab', 0)">
                <MyJobsList></MyJobsList>
            </b-tab>
            <b-tab title="Companies" @click="setQuery('tab', 1)">
                <MyCompaniesList></MyCompaniesList>
            </b-tab>
        </b-tabs>
    </b-container>
</template>

<script>
    import MyJobsList from "@/components/dashboard/MyJobsList.vue";
    import MyCompaniesList from "@/components/dashboard/MyCompaniesList.vue";
    export default {
        name: "Dashboard",
        components: {
            MyJobsList,
            MyCompaniesList
        },
        data() {
            return {
                query: {
                    tab: 0
                }
            };
        },
        mounted() {
            this.query.tab = this.$route.query.tab;
        },
        methods: {
            setQuery(key, value) {
                this.query[key] = value;
                this.$router.push({
                    query: { ...this.$route.query, [key]: value }
                });
            }
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
