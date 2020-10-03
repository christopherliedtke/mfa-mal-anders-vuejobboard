<template>
    <div>
        <h3>Meine Stellenanzeigen</h3>
        <p>
            Hier können Sie Stellenanzeigen erstellen, bearbeiten,
            veröffentlichen oder löschen.
        </p>
        <b-button to="/dashboard/new-job" variant="outline-primary"
            ><b-icon class="mr-2" scale="1" icon="plus-circle"></b-icon>Neue
            Stelle</b-button
        >
        <b-card v-for="job in myJobs" :key="job._id" class="my-3">
            <b-card-text>
                <h4>
                    {{ job.title }}
                </h4>
                <div>
                    <b-badge
                        v-if="
                            job.paidExpiresAt && job.paidExpiresAt < new Date()
                        "
                        class="mr-1"
                        pill
                        variant="danger"
                        >Zahlung abgelaufen</b-badge
                    >
                    <b-badge
                        v-else
                        class="mr-1"
                        pill
                        :variant="job.paid ? 'success' : 'warning'"
                        >{{ job.paid ? "bezahlt" : "unbezahlt" }}</b-badge
                    >
                    <b-badge
                        class="mr-1"
                        pill
                        :variant="
                            job.status === 'draft'
                                ? 'light'
                                : job.status === 'published'
                                ? 'success'
                                : 'warning'
                        "
                        >{{
                            job.status === "published"
                                ? "online"
                                : job.status === "draft"
                                ? "Entwurf"
                                : "offline"
                        }}</b-badge
                    >
                    <b-badge
                        v-if="
                            job.applicationDeadline <
                                new Date(
                                    new Date().valueOf() - 1000 * 60 * 60 * 24
                                ).toISOString()
                        "
                        class="mr-1"
                        pill
                        variant="danger"
                        >Bewerbungsfrist abgelaufen</b-badge
                    >
                </div>
                <div class="my-3">
                    <div>
                        Erstellt:
                        <span class="text-muted">
                            {{
                                new Date(
                                    parseInt(job.createdAt)
                                ).toLocaleString()
                            }}
                        </span>
                    </div>
                    <div>
                        Zuletzt aktualisiert:
                        <span class="text-muted">
                            {{
                                new Date(
                                    parseInt(job.updatedAt)
                                ).toLocaleString()
                            }}
                        </span>
                    </div>
                    <!-- <div v-if="job.paidAt">
                        Bezahlt:
                        <span class="text-muted">
                            {{
                                new Date(parseInt(job.paidAt)).toLocaleString()
                            }}
                        </span>
                    </div> -->
                    <div v-if="job.paidExpiresAt">
                        Anzeige läuft ab:
                        <span class="text-muted">
                            {{
                                new Date(
                                    parseInt(job.paidExpiresAt)
                                ).toLocaleString()
                            }}
                        </span>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                    <div>
                        <b-button
                            class="mr-2 mb-2 mb-md-0"
                            :to="`/dashboard/jobs/${job._id}`"
                            variant="primary"
                            size="sm"
                            ><b-icon class="mr-2" icon="pencil-square"></b-icon>
                            Bearbeiten</b-button
                        >
                        <b-button
                            class="mr-2 mb-2 mb-md-0"
                            :to="`/dashboard/jobs/preview/${job._id}`"
                            variant="info"
                            size="sm"
                            ><b-icon class="mr-2" scale="1" icon="eye"></b-icon>
                            Vorschau</b-button
                        >
                        <b-dropdown
                            v-if="
                                job.paid &&
                                    job.paidExpiresAt &&
                                    job.paidExpiresAt > new Date()
                            "
                            class="mr-2 mb-2 mb-md-0"
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
                                Status ändern
                            </template>
                            <b-dropdown-item
                                variant="secondary"
                                @click.prevent="
                                    updateJobStatus(job._id, 'draft')
                                "
                                >Entwurf</b-dropdown-item
                            >
                            <b-dropdown-item
                                variant="success"
                                @click.prevent="
                                    updateJobStatus(job._id, 'published')
                                "
                                >Online</b-dropdown-item
                            >
                            <b-dropdown-item
                                variant="warning"
                                @click.prevent="
                                    updateJobStatus(job._id, 'unpublished')
                                "
                                >Offline</b-dropdown-item
                            >
                        </b-dropdown>
                        <b-button
                            v-if="!job.paid || job.paidExpiresAt < new Date()"
                            class="mr-2 mb-2 mb-md-0"
                            variant="success"
                            size="sm"
                            @click.prevent="showStripeCheckoutModal(job)"
                            ><b-icon class="mr-2" icon="cart2"></b-icon>Jetzt
                            bezahlen</b-button
                        >
                    </div>
                    <div>
                        <b-button
                            class="mb-2 mb-md-0"
                            variant="outline-danger"
                            size="sm"
                            @click.prevent="$bvModal.show(job._id)"
                            ><b-icon class="mr-2" icon="trash"></b-icon>
                            Löschen</b-button
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
                    Bist Du sicher, dass Du diese Stellenanzeige löschen
                    möchtest?
                </p></b-modal
            >
        </b-card>
        <StripeCheckout
            :showStripeCheckoutModal="stripe.showModal"
            :job="stripe.checkoutJob"
            @close="stripe.showModal = false"
        />
        <b-alert
            v-model="error"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            variant="warning"
            dismissible
        >
            Oh, da ist leider etwas schief gelaufen. Bitte probiere es noch
            einmal oder versuche Dich neu ein- und auszuloggen.
        </b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    import StripeCheckout from "@/components/stripe/StripeCheckout.vue";
    export default {
        name: "MyJobsList",
        components: {
            StripeCheckout
        },
        data() {
            return {
                myJobs: [],
                stripe: {
                    showModal: false,
                    checkoutJob: null
                },
                error: false
            };
        },
        methods: {
            async getJobsByUserId() {
                try {
                    const response = await axios.post("/api/jobs/private", {
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
                                    title
                                    company {
                                        size
                                    }

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
                                    createdAt
                                    updatedAt
                                    paidAt
                                    paidExpiresAt
                                    status
                                    paid
                                    title
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
            },
            showStripeCheckoutModal(job) {
                this.stripe.checkoutJob = job;
                this.stripe.showModal = true;
            }
        },
        created: function() {
            this.getJobsByUserId();
        }
    };
</script>

<style scoped lang="scss">
    .badge {
        font-size: 0.8rem;
    }
</style>
