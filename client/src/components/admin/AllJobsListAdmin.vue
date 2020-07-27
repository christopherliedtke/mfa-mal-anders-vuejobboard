<template>
    <div>
        ALL JOBS
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "AllJobsListAdmin",
        data() {
            return {
                jobs: Array
            };
        },
        mounted() {
            this.getAllJobs();
        },
        methods: {
            async getAllJobs() {
                try {
                    const response = await axios.post("/api/jobs/admin", {
                        query: `
                            query {
                                jobs {
                                    _id
                                    createdAt
                                    updatedAt
                                    paidAt
                                    paidExpiresAt
                                    status
                                    applicationDeadline
                                    paid
                                    paidAt
                                    paidExpiresAt
                                    title
                                    company {
                                        name
                                    }
                                    userId {
                                        _id
                                        createdAt
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            }
                        `
                    });

                    this.jobs = response.data.data.jobs;
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            }
        }
    };
</script>

<style></style>
