<template>
    <div class="jobpage container py-5">
        <Job :job="job"></Job>
    </div>
</template>

<script>
    import axios from "@/axios";
    import Job from "@/components/Job.vue";
    export default {
        name: "PublicJobView",
        components: {
            Job
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post("/api/jobs/public", {
                        query: `
                            query {
                                job(_id: "${jobId}") {
                                    _id
                                    createdAt
                                    title
                                    description
                                    employmentType
                                    applicationDeadline
                                }
                            }
                        `
                    });

                    this.job = job.data.data.job;
                } catch (err) {
                    console.log("err: ", err);
                }
            }
        },
        created: function() {
            this.getJob(this.$route.params.jobId);
        },
        data() {
            return {
                job: {},
                error: false
            };
        }
    };
</script>

<style scoped lang="scss"></style>
