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
                        ><Fa
                            icon="times"
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
            <template v-slot:cell(paymentReceivedAt)="row">
                {{ row.value ? new Date(row.value).toLocaleString() : "" }}
                <b-button
                    v-if="!row.value"
                    @click="
                        updateJob(
                            row.item._id,
                            'paymentReceivedAt',
                            new Date().getTime()
                        )
                    "
                    variant="danger"
                    size="sm"
                    >SetToday</b-button
                >
                <b-button
                    v-else
                    @click="updateJob(row.item._id, 'paymentReceivedAt', 0)"
                    variant="outline-danger"
                    size="sm"
                    ><Fa icon="trash-alt"
                /></b-button>
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
                    :to="`/admin/jobs/edit/${row.item._id}`"
                    variant="primary"
                    size="sm"
                    ><Fa icon="edit"></Fa>
                </b-button>
                <b-button
                    class="mr-2 mb-2"
                    :to="`/admin/jobs/preview/${row.item._id}`"
                    target="_blank"
                    variant="info"
                    size="sm"
                    ><Fa scale="1" icon="eye" />
                </b-button>
                <b-dropdown
                    class="mr-2 mb-2"
                    size="sm"
                    left
                    variant="secondary"
                >
                    <template v-slot:button-content>
                        <Fa class="mr-2" icon="ellipsis-v" />
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
                        :active="row.item.status === 'invoice-pending'"
                        variant="secondary"
                        @click.prevent="
                            updateJob(row.item._id, 'status', 'invoice-pending')
                        "
                        >Invoice pending</b-dropdown-item
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
                        class="mb-0"
                        :active="row.item.status === 'unpublished'"
                        variant="danger"
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
                        <Fa class="mr-2" icon="credit-card" /> Paid Status
                    </template>
                    <b-dropdown-item
                        :active="row.item.paid === false"
                        variant="danger"
                        @click.prevent="updateJob(row.item._id, 'paid', false)"
                        >Unpaid</b-dropdown-item
                    >
                    <b-dropdown-item
                        class="mb-0"
                        :active="row.item.paid === true"
                        variant="success"
                        @click.prevent="updateJob(row.item._id, 'paid', true)"
                        >Paid</b-dropdown-item
                    >
                </b-dropdown>
                <b-dropdown class="mr-2 mb-2" size="sm" left variant="info">
                    <template v-slot:button-content>
                        <Fa class="mr-2" icon="envelope" /> E-Mail
                    </template>
                    <b-dropdown-item
                        class="mb-0"
                        variant="info"
                        @click.prevent="sendPublishedEmail(row.item._id)"
                        >Send job published</b-dropdown-item
                    >
                </b-dropdown>
                <b-dropdown class="mr-2 mb-2" size="sm" left variant="primary">
                    <template v-slot:button-content>
                        <Fa class="mr-2" icon="share-alt" /> Share
                    </template>
                    <b-dropdown-item
                        class="mb-0"
                        variant="info"
                        @click.prevent="socialShareToClipBoard(row.item._id)"
                        >Copy Text</b-dropdown-item
                    >
                </b-dropdown>
                <!-- <b-button
                    class="mr-2 mb-2"
                    size="sm"
                    variant="info"
                    @click="socialShareToClipBoard(row.item._id)"
                >
                    <Fa class="mr-2" icon="share-alt" />Copy
                </b-button> -->
                <b-button
                    size="sm"
                    variant="danger"
                    @click="showDeleteJobModal(row.item)"
                >
                    <Fa class="mr-2" icon="trash-alt" />Delete
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
                        key: "status",
                        sortable: true
                    },
                    {
                        key: "paid",
                        sortable: true
                    },
                    {
                        key: "paidAt",
                        sortable: true
                    },
                    {
                        key: "paymentReceivedAt",
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
                        key: "sentReminder",
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
            computedJobs: {
                get() {
                    let jobs = [...this.jobs];

                    // filter search term
                    if (this.filter.searchTerm) {
                        jobs = jobs.filter(job => {
                            if (
                                job._id
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.title
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.name
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.street
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.location
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.state
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.zipCode
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.country
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.userId._id
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.userId.lastName
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.userId.firstName
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.userId.email
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
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
            }
        },
        created() {
            this.getAllJobs();
        },
        methods: {
            async getAllJobs() {
                try {
                    const response = await this.$axios.post("/api/jobs/admin", {
                        query: `
                            query {
                                jobs {
                                    _id
                                    createdAt
                                    updatedAt
                                    paidAt
                                    paymentReceivedAt
                                    paidExpiresAt
                                    paidAmount
                                    refreshFrequency
                                    status
                                    applicationDeadline
                                    paid
                                    paidAt
                                    paidExpiresAt
                                    sentReminder
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
                    this.$root.$bvToast.toast(
                        `Jobs konnten nicht geladen werden. Error: ${err}`,
                        {
                            title: `Fehler beim Laden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            async updateJob(id, key, value) {
                try {
                    const response = await this.$axios.post("/api/jobs/admin", {
                        query: `
                            mutation {
                                updateJob (_id: "${id}", ${key}: ${
                            typeof value === "string" ? `"${value}"` : value
                        }) {
                                    _id
                                    createdAt
                                    updatedAt
                                    paidAt
                                    paymentReceivedAt
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
                    this.$root.$bvToast.toast(
                        `Der Job konnte nicht gespeichert werden. Error: ${err}`,
                        {
                            title: `Fehler beim Speichern`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            async sendPublishedEmail(jobId) {
                this.$store.dispatch("setOverlay", true);

                try {
                    const sentEmail = await this.$axios.post(
                        "/api/send-email/job-published",
                        { jobId }
                    );

                    if (sentEmail.data.success) {
                        this.$root.$bvToast.toast(
                            `Die E-Mail wurde erfolgreich gesendet.`,
                            {
                                title: `E-Mail gesendet`,
                                variant: "success",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    } else {
                        this.$root.$bvToast.toast(
                            `E-Mail konnte nicht gesendet werden.`,
                            {
                                title: `Fehler beim Senden`,
                                variant: "danger",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    }
                } catch (err) {
                    this.$root.$bvToast.toast(
                        `E-Mail konnte nicht gesendet werden. Error: ${err}`,
                        {
                            title: `Fehler beim Senden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            },
            showDeleteJobModal(job) {
                this.jobToDelete = job;
                this.$bvModal.show("deleteJobModal");
            },
            async deleteJob(jobId) {
                try {
                    const response = await this.$axios.post("/api/jobs/admin", {
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
                        this.$root.$bvToast.toast(
                            `Der Job konnte nicht gelöscht werden.`,
                            {
                                title: `Fehler beim Löschen`,
                                variant: "danger",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    }
                } catch (err) {
                    this.error = true;
                    this.$root.$bvToast.toast(
                        `Der Job konnte nicht gelöscht werden. Error: ${err}`,
                        {
                            title: `Fehler beim Löschen`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            // async setPaymentReceivedAt(jobId) {
            //     //
            //     this.$store.dispatch("setOverlay", true);

            //     try {
            //        const response = await this.$axios.post('/api/jobs/admin', {
            //             query: `
            //                 mutation {
            //                     updateJob(_id: "${jobId}") {
            //                         paymentReceivedAt
            //                     }
            //                 }
            //             `
            //         })
            //     } catch (err) {

            //     }

            //     this.$store.dispatch("setOverlay", false);
            // },
            // async deletePaymentReceivedAt() {
            //     //
            // },
            socialShareToClipBoard(jobId) {
                let el = document.createElement("textarea");

                const job = this.jobs.find(job => job._id === jobId);

                el.value = `${job.title} | ${job.company.location}\n\n${
                    this.$config.website.url
                }/jobboard/job/${
                    job._id
                }\n\n#mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${job.company.location.toLowerCase()}jobs #${job.company.location.toLowerCase()}`;

                document.body.appendChild(el);
                el.select();

                document.execCommand("copy");
                document.body.removeChild(el);
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
