<template>
    <div class="jobpage container py-5">
        <h2>{{ job.title }}</h2>
        <p>{{ job.description }}</p>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "JobPage",
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post("/api/jobs/public", {
                        query: `
                            query {
                                job(_id: "${jobId}") {
                                    _id
                                    title
                                    description
                                    createdAt
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
