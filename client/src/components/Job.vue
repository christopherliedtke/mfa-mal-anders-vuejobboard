<template>
    <div class="job">
        <h2>{{ job.title }}</h2>
        <p v-html="job.description"></p>
        <b-alert
            v-if="error"
            class="position-fixed fixed-bottom m-0 rounded-0 mt-3"
            show
            dismissible
            variant="warning"
            style="z-index: 2000;"
            >Oh, something went wrong. Please try again later ...</b-alert
        >
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "Job",
        props: ["apiRequest"],
        data() {
            return {
                job: {},
                error: null
            };
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post(
                        `/api/jobs/${this.apiRequest}`,
                        {
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
                                    imageUrl
                                    contactTitle
                                    contactFirstName
                                    contactLastName
                                    contactEmail
                                    contactPhone
                                    company {
                                        name
                                        location
                                        state
                                        street
                                        zipCode
                                        url
                                        logoUrl
                                    }
                                }
                            }
                        `
                        }
                    );

                    job.data.data.job
                        ? (this.job = job.data.data.job)
                        : (this.error = true);
                } catch (err) {
                    console.log("err: ", err);
                }
            }
        },
        created: function() {
            this.getJob(this.$route.params.jobId);
        }
    };
</script>

<style scoped lang="scss"></style>
