<template>
    <div class="jobboard container py-5">
        <h2>Jobboard</h2>
        <b-link
            v-for="job in jobs"
            :key="job._id"
            :to="`/jobboard/job/${job._id}`"
        >
            <b-card class="my-3">
                <b-card-text>
                    <h4>
                        {{ job.title }}
                        <b-badge
                            pill
                            :variant="
                                job.status === 'draft' ? 'light' : 'success'
                            "
                            >{{ job.status }}</b-badge
                        >
                    </h4>
                    <p>
                        Created at:
                        {{
                            new Date(
                                parseInt(job.createdAt)
                            ).toLocaleDateString()
                        }}
                    </p>
                    <p
                        v-html="
                            $sanitize(job.description, {
                                allowedTags: []
                            }).substring(0, 100) + '...'
                        "
                    ></p>
                </b-card-text>
            </b-card>
        </b-link>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default {
        name: "Jobboard",
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
                            companyName
                            companyLocation
                            companyState
                            companyStreet
                            companyZipCode
                        }
                    }
                `
            });
        },
        computed: mapGetters(["jobs"])
    };
</script>

<style scoped lang="scss"></style>
