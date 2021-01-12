<template>
    <b-container class="dashboard py-5">
        <h2>Mein Konto</h2>
        <b-tabs content-class="mt-3" :value="parseInt(query.tab)" lazy>
            <b-tab title="Profil" @click="setQuery('tab', 0)">
                <MyProfile />
            </b-tab>
            <b-tab
                v-if="$store.state.auth.user.isEmployer"
                title="Stellenanzeigen"
                @click="setQuery('tab', 1)"
            >
                <MyJobsList></MyJobsList>
            </b-tab>
            <b-tab
                v-if="$store.state.auth.user.isEmployer"
                title="Unternehmen"
                @click="setQuery('tab', 2)"
            >
                <MyCompaniesList></MyCompaniesList>
            </b-tab>
        </b-tabs>

        <Head title="Dashboard" desc="" img="" />
    </b-container>
</template>

<script>
    import MyJobsList from "@/components/dashboard/MyJobsList.vue";
    import MyCompaniesList from "@/components/dashboard/MyCompaniesList.vue";
    import MyProfile from "@/components/dashboard/MyProfile.vue";
    export default {
        name: "UserDashboardHome",
        components: {
            MyJobsList,
            MyCompaniesList,
            MyProfile
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
        watch: {
            "$route.query.tab"() {
                this.query.tab = this.$route.query.tab || 0;
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
