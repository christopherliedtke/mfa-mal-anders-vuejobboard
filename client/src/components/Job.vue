<template>
    <div class="job">
        <h2>{{ job.title }}</h2>
        <div class="my-3">
            <div>
                Published:
                {{ new Date(parseInt(job.createdAt)).toLocaleDateString() }}
            </div>
            <div>
                Application Deadline:
                {{ new Date(job.applicationDeadline).toLocaleDateString() }}
            </div>
            <div>Employment Type: {{ job.employmentType }}</div>
            <div>Company: {{ job.company && job.company.name }}</div>
            <b-img
                v-if="job.company && job.company.logoUrl"
                class="my-3"
                :src="job.company.logoUrl"
                fluid
                :alt="`Logo - ${job.company.name}`"
            ></b-img>
        </div>
        <b-img
            v-if="job.imageUrl"
            class="my-3"
            :src="job.imageUrl"
            fluid
            :alt="`Image - ${job.company && job.company.name}`"
        ></b-img>
        <p v-html="job.description"></p>
        <HereMapSingleJob
            v-if="job.company && job.company.location"
            :job="job"
        />

        <b-alert
            v-if="error"
            class="position-fixed fixed-bottom m-0 rounded-0 mt-3"
            show
            dismissible
            variant="warning"
            style="z-index: 2000;"
            >Oh, something went wrong. Please try again later ...</b-alert
        >
        <JobStructuredData :job="job" />
        <Head
            v-if="job.title"
            :title="job.title"
            :desc="
                `${job.company.name} is looking for a ${job.title} in ${job.company.location}`
            "
            :img="job.imageUrl || job.company.logoUrl"
        />
    </div>
</template>

<script>
    import axios from "@/axios";
    import JobStructuredData from "@/components/JobStructuredData.vue";
    import HereMapSingleJob from "@/components/hereMaps/HereMapSingleJob.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Job",
        components: {
            HereMapSingleJob,
            JobStructuredData,
            Head
        },
        props: ["apiJobsSchema"],
        data() {
            return {
                job: Object,
                error: null
            };
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post(
                        `/api/jobs/${this.apiJobsSchema}`,
                        {
                            query: `
                            query {
                                job(_id: "${jobId}") {
                                    _id
                                    createdAt
                                    paidAt
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
                                        street
                                        location
                                        zipCode
                                        state
                                        country
                                        geoCodeLat
                                        geoCodeLng
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

                    this.updateHead();
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            updateHead: function() {
                this.$emit("updateHead");
            }
        },
        created: function() {
            this.getJob(this.$route.params.jobId);
        }
    };
</script>

<style scoped lang="scss"></style>
