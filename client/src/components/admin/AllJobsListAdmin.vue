<template>
    <div>
        <b-form id="job-filter" inline @submit.prevent>
            <b-input-group class="my-2 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.searchTerm"
                    placeholder="Enter search term ..."
                />
                <b-input-group-append>
                    <b-button
                        ><b-icon
                            icon="x"
                            @click.prevent="filter.searchTerm = ''"
                    /></b-button>
                </b-input-group-append>
            </b-input-group>
            <div class="inline-block ml-3 my-3 my-lg-0">
                Number of Jobs:
                <strong>{{ computedJobs.length }}</strong>
            </div>
        </b-form>
        <b-table
            responsive
            striped
            hover
            sticky-header="80vh"
            :tbody-tr-class="rowClass"
            :items="computedJobs"
            :fields="fields"
            primary-key="_id"
        >
            <template v-slot:cell(user)="row">
                {{
                    row.item.userId.lastName + ", " + row.item.userId.firstName
                }}
                <a :href="`mailto:${row.item.userId.email}`">
                    {{ row.item.userId.email }}</a
                >
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
            <template v-slot:cell(applicationDeadline)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(paidExpiresAt)="row">
                {{ row.value && new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(paidAmount)="row">
                {{ row.value / 100 }}€
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
                <b-button
                    class="mr-2 mb-2"
                    :to="`/admin/jobs/${row.item._id}`"
                    variant="primary"
                    size="sm"
                    ><b-icon icon="pencil-square"></b-icon>
                </b-button>
                <b-button
                    class="mr-2 mb-2"
                    :to="`/admin/jobs/preview/${row.item._id}`"
                    variant="info"
                    size="sm"
                    ><b-icon scale="1" icon="eye"></b-icon>
                </b-button>
                <b-dropdown
                    class="mr-2 mb-2"
                    size="sm"
                    left
                    variant="secondary"
                >
                    <template v-slot:button-content>
                        <b-icon
                            class="mr-2"
                            icon="three-dots-vertical"
                        ></b-icon>
                        Status
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
                        <b-icon class="mr-2" icon="credit-card"></b-icon> Paid
                        Status
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
                    variant="danger"
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
                filter: {
                    searchTerm: ""
                },
                fields: [
                    {
                        key: "_id",
                        label: "Job ID",
                        sortable: false
                    },
                    {
                        key: "title",
                        sortable: true
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
                        key: "paidAmount",
                        sortable: true
                    },
                    {
                        key: "refreshFrequency",
                        sortable: true
                    },
                    {
                        key: "applicationDeadline",
                        sortable: true
                    },
                    {
                        key: "company.name",
                        label: "Company",
                        sortable: true
                    },
                    {
                        key: "location",
                        sortable: true
                    },
                    {
                        key: "userId._id",
                        label: "User ID",
                        sortable: false
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
                let jobs = [...this.jobs];

                // filter search term
                if (this.filter.searchTerm) {
                    jobs = jobs.filter(job => {
                        if (
                            this.checkForSearchTerm(
                                [
                                    job._id,
                                    job.title,
                                    job.company.name,
                                    job.company.street,
                                    job.company.location,
                                    job.company.zipCode,
                                    job.company.state,
                                    job.company.country,
                                    job.userId._id,
                                    job.userId.lastName,
                                    job.userId.firstName,
                                    job.userId.email
                                ],
                                this.filter.searchTerm
                            )
                        ) {
                            return job;
                        } else {
                            return;
                        }
                    });
                }

                return jobs;
            }
        },
        created() {
            this.getAllJobs();
        },
        methods: {
            checkForSearchTerm(arrOfValues, searchTerm) {
                let result = false;
                arrOfValues.forEach(value => {
                    if (
                        value &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        result = true;
                    }
                });
                return result;
            },
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
                                    paidAmount
                                    refreshFrequency
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
            },
            rowClass(item, type) {
                if (!item || type !== "row") return;
                if (
                    item.status === "published" &&
                    item.paid === true &&
                    item.paidExpiresAt > new Date() &&
                    new Date(item.applicationDeadline) >
                        new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
                )
                    return "table-success";
            }
        }
    };
</script>
