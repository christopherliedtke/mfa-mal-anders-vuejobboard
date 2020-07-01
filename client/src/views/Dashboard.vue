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
                            Created at:
                            {{
                                new Date(
                                    parseInt(job.createdAt)
                                ).toLocaleString()
                            }}
                        </p>
                        <p>
                            Last updated:
                            {{
                                new Date(
                                    parseInt(job.updatedAt)
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
                                <b-button
                                    class="mr-2 mb-2 mb-md-0"
                                    :to="`/dashboard/jobs/preview/${job._id}`"
                                    variant="info"
                                    size="sm"
                                    ><b-icon
                                        class="mr-2"
                                        scale="1"
                                        icon="eye"
                                    ></b-icon>
                                    Preview</b-button
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
                                <b-button
                                    variant="outline-danger"
                                    size="sm"
                                    @click.prevent="$bvModal.show(job._id)"
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
                    <b-modal
                        :id="job._id"
                        :title="`Delete ${job.title}`"
                        ok-title="Delete Job"
                        centered
                        ok-variant="danger"
                        footer-class="d-flex justify-content-between"
                        @ok="deleteJob(job._id)"
                        ><p class="my-4">
                            Are you sure to delete this job?
                        </p></b-modal
                    >
                </b-card>
                <b-alert
                    v-model="error"
                    class="position-fixed fixed-bottom m-0 rounded-0"
                    style="z-index: 2000;"
                    variant="warning"
                    dismissible
                >
                    Oh, something went wrong. Please try again later.
                </b-alert>
            </b-tab>
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
                try {
                    const response = await axios.post("/api/jobs/private", {
                        query: `
                    query {
                        jobs {
                            _id
                            title
                            status
                            paid
                            createdAt
                            updatedAt
                        }
                    }
                `
                    });

                    this.myJobs = response.data.data.jobs;
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
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
                                paid
                                createdAt
                                updatedAt
                            }
                        }
                    `
                    });

                    if (response.data.data.updateJobStatus.status === status) {
                        this.myJobs.forEach((job, index) => {
                            if (job._id === jobId) {
                                this.myJobs[index].status = status;
                                this.myJobs[index].updatedAt =
                                    response.data.data.updateJobStatus.updatedAt;
                            }
                        });
                    } else {
                        this.error = true;
                    }
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            },
            async deleteJob(jobId) {
                try {
                    const response = await axios.post("/api/jobs/private", {
                        query: `
                        mutation {
                            deleteJob(_id: "${jobId}") {
                                status
                            }
                        }
                    `
                    });

                    if (response.data.data.deleteJob.status === "deleted") {
                        this.myJobs.forEach((job, index) => {
                            if (job._id === jobId) {
                                this.myJobs.splice(index, 1);
                            }
                        });
                    } else {
                        this.error = true;
                    }
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            }
        },
        created: function() {
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
