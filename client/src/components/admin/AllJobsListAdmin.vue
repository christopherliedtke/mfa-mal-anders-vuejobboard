<template>
    <div>
        <b-table
            responsive
            striped
            hover
            :items="computedJobs"
            :fields="fields"
            primary-key="_id"
        >
            <template v-slot:cell(user)="row">
                {{
                    row.item.userId.firstName +
                        " " +
                        row.item.userId.lastName +
                        " " +
                        row.item.userId.email
                }}
            </template>
            <template v-slot:cell(createdAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(updatedAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(paidAt)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(paidExpiresAt)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(location)="row">
                {{
                    row.item.company.street +
                        " " +
                        row.item.company.location +
                        " " +
                        row.item.company.zipCode +
                        " " +
                        row.item.company.state +
                        " " +
                        row.item.company.country
                }}
            </template>
            <template v-slot:cell(actions)="row">
                <b-dropdown
                    class="mr-2 mb-2"
                    size="sm"
                    left
                    variant="secondary"
                >
                    <template v-slot:button-content>
                        <b-icon
                            class="mr-2"
                            icon="three-dots-vertical
"
                        ></b-icon>
                        Change Status
                    </template>
                    <b-dropdown-item
                        :active="row.item.status === 'draft'"
                        variant="secondary"
                        @click.prevent="
                            updateJob(row.item._id, 'status', 'draft')
                        "
                        >Draft</b-dropdown-item
                    >
                    <b-dropdown-item
                        :active="row.item.status === 'published'"
                        variant="success"
                        @click.prevent="
                            updateJob(row.item._id, 'status', 'published')
                        "
                        >Published</b-dropdown-item
                    >
                    <b-dropdown-item
                        :active="row.item.status === 'unpublished'"
                        variant="warning"
                        @click.prevent="
                            updateJob(row.item._id, 'status', 'unpublished')
                        "
                        >Unpublished</b-dropdown-item
                    >
                </b-dropdown>
                <b-dropdown
                    class="mr-2 mb-2"
                    size="sm"
                    left
                    variant="secondary"
                >
                    <template v-slot:button-content>
                        <b-icon
                            class="mr-2"
                            icon="three-dots-vertical
"
                        ></b-icon>
                        Change Payment Status
                    </template>
                    <b-dropdown-item
                        :active="row.item.paid === false"
                        variant="danger"
                        @click.prevent="updateJob(row.item._id, 'paid', false)"
                        >Unpaid</b-dropdown-item
                    >
                    <b-dropdown-item
                        :active="row.item.paid === true"
                        variant="success"
                        @click.prevent="updateJob(row.item._id, 'paid', true)"
                        >Paid</b-dropdown-item
                    >
                </b-dropdown>
                <b-button
                    size="sm"
                    variant="outline-danger"
                    @click="showDeleteJobModal(row.item)"
                >
                    <b-icon class="mr-2" icon="trash"></b-icon>Delete
                </b-button>
            </template>
        </b-table>
        <b-modal
            id="deleteJobModal"
            :title="`Delete ${jobToDelete.title}`"
            ok-title="Delete Job"
            centered
            ok-variant="danger"
            footer-class="d-flex justify-content-between"
            @ok="deleteJob(jobToDelete._id)"
            ><p class="my-4">
                Are you sure to delete this job?
            </p></b-modal
        >
        <b-alert
            v-model="error"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            variant="warning"
            dismissible
        >
            Oh, something went wrong. Please try again later.
        </b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "AllJobsListAdmin",
        data() {
            return {
                jobs: [],
                jobToDelete: Object,
                error: false,
                fields: [
                    {
                        key: "_id",
                        sortable: false,
                        label: "Job ID"
                    },
                    {
                        key: "title",
                        sortable: false
                    },
                    {
                        key: "createdAt",
                        sortable: true
                    },
                    {
                        key: "updatedAt",
                        sortable: true
                    },
                    {
                        key: "paidAt",
                        sortable: true
                    },
                    {
                        key: "paidExpiresAt",
                        sortable: true
                    },
                    {
                        key: "company.name",
                        sortable: true,
                        label: "Company"
                    },
                    {
                        key: "location",
                        sortable: true
                    },
                    {
                        key: "userId._id",
                        sortable: false,
                        label: "User ID"
                    },
                    {
                        key: "user",
                        sortable: true
                    },
                    {
                        key: "actions",
                        sortable: false
                    }
                ]
            };
        },
        computed: {
            computedJobs: function() {
                const jobs = [...this.jobs];

                return jobs;
            }
        },
        created() {
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
                                        street
                                        location
                                        state
                                        zipCode
                                        country
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
            },
            async updateJob(id, key, value) {
                try {
                    const response = await axios.post("/api/jobs/admin", {
                        query: `
                            mutation {
                                updateJob (_id: "${id}", ${key}: ${
                            typeof value === "string" ? `"${value}"` : value
                        }) {
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
                                        street
                                        location
                                        state
                                        zipCode
                                        country
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

                    if (response.data.data.updateJob._id) {
                        this.jobs = this.jobs.map(job => {
                            if (job._id === response.data.data.updateJob._id) {
                                return response.data.data.updateJob;
                            } else {
                                return job;
                            }
                        });
                    }
                } catch (err) {
                    console.log("Error on updateJob(): ", err);
                }
            },
            showDeleteJobModal(job) {
                this.jobToDelete = job;
                this.$bvModal.show("deleteJobModal");
            },
            async deleteJob(jobId) {
                try {
                    const response = await axios.post("/api/jobs/admin", {
                        query: `
                            mutation {
                                deleteJob(_id: "${jobId}") {
                                    status
                                }
                            }
                        `
                    });

                    if (response.data.data.deleteJob.status === "deleted") {
                        this.jobs.forEach((job, index) => {
                            if (job._id === jobId) {
                                this.jobs.splice(index, 1);
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
        }
    };
</script>

<style></style>
