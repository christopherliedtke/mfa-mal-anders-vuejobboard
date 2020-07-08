<template>
    <b-container class="jobboard py-5">
        <h2>Jobboard</h2>
        <JobCard v-for="job in jobs" :key="job._id" :job="job" />
    </b-container>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import JobCard from "@/components/JobCard.vue";
    export default {
        name: "Jobboard",
        components: {
            JobCard
        },
        methods: {
            ...mapActions(["getJobs"])
        },
        data() {
            return {};
        },
        created: function() {
            this.getJobs({
                query: `
                    query {
                        jobs {
                            _id
                            createdAt
                            title
                            description
                            employmentType
                            applicationDeadline
                            company {
                                _id
                                name
                                logoUrl
                            }
                        }
                    }
                `
            });
        },
        computed: mapGetters(["jobs"])
    };
</script>

<style scoped lang="scss"></style>
