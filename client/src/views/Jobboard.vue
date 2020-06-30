<template>
    <div class="jobboard container py-5">
        <h2>Jobboard</h2>
        <div>
            <b-link
                v-for="job in jobs"
                :key="job._id"
                :to="`/jobboard/job/${job._id}`"
            >
                <b-card
                    :title="job.title"
                    :sub-title="
                        new Date(parseInt(job.createdAt)).toLocaleString()
                    "
                    class="my-3"
                >
                    <b-card-text>
                        <p>{{ job.description.substring(0, 100) }}...</p>
                    </b-card-text>
                </b-card>
            </b-link>
        </div>
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
                        title
                        description
                        createdAt
                    }
                }
            `
            });
        },
        computed: mapGetters(["jobs"])
    };
</script>
