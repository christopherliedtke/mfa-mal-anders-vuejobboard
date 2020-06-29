<template>
    <div class="dashboard container py-5">
        <h2>Dashboard</h2>
        <b-tabs content-class="mt-3">
            <b-tab title="Jobs" active
                ><p>Your Jobs</p>
                <b-button to="/dashboard/new-job" variant="outline-primary"
                    ><b-icon class="mr-2" scale="1" icon="plus-circle"></b-icon
                    >New Job</b-button
                >
                <b-card v-for="job in myJobs" :key="job._id" class="my-3">
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
                            Created:
                            {{
                                new Date(
                                    parseInt(job.dateCreated)
                                ).toLocaleString()
                            }}
                        </p>
                        <div
                            class="d-flex justify-content-between align-items-end"
                        >
                            <div>
                                <b-button
                                    class="mr-2 mb-2 mb-md-0"
                                    :to="`/dashboard/jobs/${job._id}`"
                                    variant="primary"
                                    size="sm"
                                    ><b-icon
                                        class="mr-2"
                                        scale="1"
                                        icon="pencil-square"
                                    ></b-icon>
                                    Edit</b-button
                                >
                                <b-dropdown size="sm" left variant="secondary">
                                    <template v-slot:button-content>
                                        <b-icon
                                            class="mr-2"
                                            scale="1"
                                            icon="three-dots-vertical
"
                                        ></b-icon>
                                        Change Status
                                    </template>
                                    <b-dropdown-item
                                        variant="secondary"
                                        @click.prevent="
                                            updateJobStatus(job._id, 'draft')
                                        "
                                        >Draft</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        variant="success"
                                        @click.prevent="
                                            updateJobStatus(
                                                job._id,
                                                'published'
                                            )
                                        "
                                        >Published</b-dropdown-item
                                    >
                                </b-dropdown>
                            </div>
                            <div>
                                <b-button variant="outline-danger" size="sm"
                                    ><b-icon
                                        class="mr-2"
                                        scale="1"
                                        icon="trash"
                                    ></b-icon>
                                    Delete</b-button
                                >
                            </div>
                        </div>
                    </b-card-text>
                </b-card></b-tab
            >
            <b-tab title="Companies"><p>Your Companies</p></b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "Dashboard",
        methods: {
            async getJobsByUserId() {
                const response = await axios.post("/api/jobs/private", {
                    query: `
                query {
                    jobs {
                        _id
                        title
                        status
                        dateCreated
                    }
                }
            `
                });

                this.myJobs = response.data.data.jobs;
            },
            async updateJobStatus(jobId, status) {
                try {
                    const response = await axios.post("/api/jobs/private", {
                        query: `
                        mutation {
                            updateJobStatus(_id: "${jobId}", status: "${status}") {
                                _id
                                userId
                                title
                                description
                                status
                                dateCreated
                            }
                        }
                    `
                    });

                    if (response.data.data.updateJobStatus.status === status) {
                        this.myJobs.forEach((job, index) => {
                            if (job._id === jobId) {
                                this.myJobs[index].status = status;
                            }
                        });
                    }
                } catch (err) {
                    console.log("err: ", err);
                }
            }
        },
        mounted: function() {
            this.getJobsByUserId();
        },
        data() {
            return {
                myJobs: [],
                error: false
            };
        }
    };
</script>

<style scoped lang="scss">
    .badge {
        font-size: 0.8rem;
    }
</style>
