<template>
    <b-container class="jobpage py-5">
        <Job :job="job"></Job>
    </b-container>
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
                                    extJobUrl
                                    applicationEmail
                                    contactTitle
                                    contactFirstName
                                    contactLastName
                                    contactEmail
                                    contactPhone
                                    companyName
                                    companyLocation
                                    companyState
                                    companyStreet
                                    companyZipCode
                                    companyUrl
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
