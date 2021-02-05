<template>
    <div>
        <h3>Meine Stellenanzeigen</h3>
        <p>
            Hier können Sie Stellenanzeigen erstellen, bearbeiten,
            veröffentlichen oder löschen.
        </p>
        <b-button
            class="mr-2 mb-2"
            :to="
                `/${
                    $store.state.auth.user.isAdmin ? 'admin' : 'user/dashboard'
                }/jobs/edit/new`
            "
            variant="outline-primary"
            ><Fa class="mr-2" icon="plus" />Neue Stelle</b-button
        >
        <b-button
            class="mr-2 mb-2"
            to="/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas"
            variant="outline-secondary"
            target="_blank"
            >Tipps für Stellenanzeigen</b-button
        >
        <b-button
            class="mr-2 mb-2"
            to="/page/contact"
            variant="outline-primary"
            target="_blank"
            >Fragen oder Hilfe benötigt?</b-button
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
                            job.status === 'draft' ||
                            job.status === 'invoice-pending'
                                ? 'light'
                                : job.status === 'published'
                                ? 'success'
                                : 'danger'
                        "
                        >{{
                            job.status === "published"
                                ? "online"
                                : job.status === "draft" ||
                                  job.status === "invoice-pending"
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
                        Bewerbungsfrist:
                        <span class="text-muted">
                            {{
                                new Date(
                                    new Date(
                                        job.applicationDeadline
                                    ).valueOf() +
                                        1000 * 60 * 60 * 23 -
                                        1
                                ).toLocaleString()
                            }}
                        </span>
                    </div>
                    <div v-if="job.publishedAt">
                        Zuletzt veröffentlicht:
                        <span class="text-muted">
                            {{
                                new Date(
                                    parseInt(job.publishedAt)
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
                        Zahlung für Anzeige läuft ab:
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
                            :to="`/user/dashboard/jobs/edit/${job._id}`"
                            variant="primary"
                            size="sm"
                            ><Fa class="mr-2" icon="edit" />
                            Bearbeiten</b-button
                        >
                        <b-button
                            class="mr-2 mb-2 mb-md-0"
                            :to="`/user/dashboard/jobs/preview/${job._id}`"
                            target="_blank"
                            variant="info"
                            size="sm"
                            ><Fa class="mr-2" icon="eye" /> Vorschau</b-button
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
                                <Fa class="mr-2" icon="ellipsis-v" />
                                Status ändern
                            </template>
                            <b-dropdown-item
                                variant=""
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
                                class="mb-0"
                                variant="danger"
                                @click.prevent="
                                    updateJobStatus(job._id, 'unpublished')
                                "
                                >Offline</b-dropdown-item
                            >
                        </b-dropdown>
                        <b-button
                            v-if="
                                (!job.paid || job.paidExpiresAt < new Date()) &&
                                    job.status != 'invoice-pending'
                            "
                            class="mr-2 mb-2 mb-md-0"
                            variant="success"
                            size="sm"
                            @click.prevent="showCheckoutModal(job)"
                            ><Fa class="mr-2" icon="shopping-cart" />Jetzt
                            bezahlen</b-button
                        >
                        <b-button
                            v-if="
                                job.status === 'invoice-pending' &&
                                    (!job.paid ||
                                        job.paidExpiresAt < new Date())
                            "
                            :disabled="true"
                            class="mr-2 mb-2 mb-md-0"
                            variant="light"
                            size="sm"
                            >Rechnung in Bearbeitung</b-button
                        >
                    </div>
                    <div>
                        <b-button
                            class="mb-2 mb-md-0"
                            variant="outline-danger"
                            size="sm"
                            @click.prevent="$bvModal.show(job._id)"
                            ><Fa class="mr-2" icon="trash-alt" />
                            Löschen</b-button
                        >
                    </div>
                </div>
            </b-card-text>
            <b-modal
                :id="job._id"
                :title="`Delete ${job.title}`"
                ok-title="Stellenanzeige löschen"
                cancel-title="Abbrechen"
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
        <Checkout
            :showCheckoutModal="checkout.showModal"
            :job="checkout.checkoutJob"
            @close="checkout.showModal = false"
            @update="getJobsByUserId"
        />
    </div>
</template>

<script>
    import Checkout from "@/components/checkout/Checkout.vue";
    export default {
        name: "MyJobsList",
        components: {
            Checkout
        },
        data() {
            return {
                myJobs: [],
                checkout: {
                    showModal: false,
                    checkoutJob: null
                }
            };
        },
        created() {
            this.getJobsByUserId();
        },
        methods: {
            async getJobsByUserId() {
                this.$store.dispatch("setOverlay", true);

                try {
                    const response = await this.$axios.get("graphql", {
                        params: {
                            query: `
                                query {
                                    myJobs {
                                        _id
                                        createdAt
                                        updatedAt
                                        publishedAt
                                        paidAt
                                        paidExpiresAt
                                        status
                                        applicationDeadline
                                        paid
                                        title
                                        company {
                                            name
                                            street
                                            zipCode
                                            location
                                            state
                                            size
                                        }

                                    }
                                }
                            `
                        }
                    });

                    this.myJobs = response.data.data.myJobs;
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Ihre Stellenanzeigen konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
                        {
                            title: `Fehler beim Laden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            },
            async updateJobStatus(jobId, status) {
                try {
                    const response = await this.$axios.post("/graphql", {
                        query: `
                                mutation {
                                    updateJob(_id: "${jobId}", status: "${status}") {
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

                    if (response.data.data.updateJob.status === status) {
                        this.myJobs.forEach((job, index) => {
                            if (job._id === jobId) {
                                this.myJobs[index].status = status;
                                this.myJobs[index].updatedAt =
                                    response.data.data.updateJob.updatedAt;
                            }
                        });

                        this.$root.$bvToast.toast(
                            "Der Status der Stellenanzeige wurde erfolgreich aktualisiert.",
                            {
                                title: `Status aktualisiert`,
                                variant: "success",
                                toaster: "b-toaster-bottom-right",
                                solid: true
                            }
                        );
                    } else {
                        this.$root.$bvToast.toast(
                            "Der Status der Stellenanzeige konnte nicht aktualisiert werden. Bitte versuchen Sie es später noch einmal.",
                            {
                                title: `Fehler beim Aktualisieren`,
                                variant: "danger",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    }
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Der Status der Stellenanzeige konnte nicht aktualisiert werden. Bitte versuchen Sie es später noch einmal.",
                        {
                            title: `Fehler beim Aktualisieren`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            async deleteJob(jobId) {
                try {
                    const response = await this.$axios.post("graphql", {
                        query: `
                                mutation {
                                    deleteJob(_id: "${jobId}") {
                                        _id
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

                        this.$root.$bvToast.toast(
                            "Die Stellenanzeige wurde erfolgreich gelöscht.",
                            {
                                title: `Stellenanzeige gelöscht`,
                                variant: "success",
                                toaster: "b-toaster-bottom-right",
                                solid: true
                            }
                        );
                    } else {
                        this.$root.$bvToast.toast(
                            "Die Stellenanzeige konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",
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
                    this.$root.$bvToast.toast(
                        "Die Stellenanzeige konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",
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
            showCheckoutModal(job) {
                this.checkout.checkoutJob = job;
                this.checkout.showModal = true;
            }
        }
    };
</script>

<style scoped lang="scss">
    .badge {
        font-size: 0.8rem;
    }
</style>
