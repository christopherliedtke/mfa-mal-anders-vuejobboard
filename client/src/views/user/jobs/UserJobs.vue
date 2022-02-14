<template>
  <div class="dashboard container py-3 py-lg-5">
    <UserNav class="mb-3" />

    <h3>Meine Stellenanzeigen</h3>
    <p>
      Hier können Sie Stellenanzeigen erstellen, bearbeiten, veröffentlichen
      oder löschen.
    </p>
    <b-button
      class="mr-2 mb-2"
      :to="
        `/${$store.state.auth.user.isAdmin ? 'admin' : 'user'}/jobs/edit/new`
      "
      variant="primary"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-lg mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        /></svg
      >Neue Stelle</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/fuer-arbeitgeber#tipps-stellenanzeigen"
      variant="secondary"
      target="_blank"
      >Tipps für Stellenanzeigen</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-primary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >
    <div
      v-for="job in myJobs"
      :key="job._id"
      class="card shadow1 bg-light my-3"
    >
      <div class="card-body">
        <!-- eslint-disable-next-line -->
        <h4 v-html="job.title"></h4>
        <div>
          <span
            v-if="job.paidExpiresAt >= new Date() && job.paid"
            class="badge badge-pill badge-success mr-1"
            >bezahlt</span
          >
          <span v-if="!job.paid" class="badge badge-pill badge-warning mr-1"
            >unbezahlt</span
          >
          <span
            v-if="
              job.status === 'published' &&
                job.paidExpiresAt >= new Date() &&
                (!job.applicationDeadline ||
                  job.applicationDeadline >= new Date().getTime()) &&
                job.paid
            "
            class="badge badge-pill badge-success mr-1"
            >online</span
          >
          <span
            v-if="job.status === 'draft'"
            class="badge badge-pill badge-light mr-1"
            >Entwurf</span
          >
          <span
            v-if="job.status === 'unpublished'"
            class="badge badge-pill badge-danger mr-1"
            >offline</span
          >

          <span
            v-if="
              job.applicationDeadline &&
                job.applicationDeadline < new Date().getTime()
            "
            class="badge badge-pill badge-danger mr-1"
            >Bewerbungsfrist abgelaufen</span
          >
        </div>
        <div class="my-3">
          <div>
            Erstellt:
            <span class="text-muted">
              {{ new Date(parseInt(job.createdAt)).toLocaleString() }}
            </span>
          </div>
          <div v-if="job.applicationDeadline">
            Bewerbungsfrist:
            <span class="text-muted">
              {{ new Date(job.applicationDeadline).toLocaleString() }}
            </span>
          </div>
          <div v-if="job.publishedAt && job.paidExpiresAt >= new Date()">
            Zuletzt veröffentlicht:
            <span class="text-muted">
              {{ new Date(parseInt(job.publishedAt)).toLocaleString() }}
            </span>
          </div>
          <div
            v-if="
              job.paidExpiresAt >= new Date() &&
                job.payment &&
                job.payment.status === 'paid'
            "
          >
            Bezahlt:
            <span class="text-muted">
              {{ new Date(parseInt(job.payment.paidAt)).toLocaleString() }}
            </span>
          </div>
          <div
            v-if="
              job.paidExpiresAt >= new Date() && job.status != 'invoice-pending'
            "
          >
            Zahlung für Anzeige läuft ab:
            <span class="text-muted">
              {{ new Date(parseInt(job.paidExpiresAt)).toLocaleString() }}
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="
                `/${
                  $store.state.auth.user.isAdmin ? 'admin' : 'user'
                }/jobs/edit/${job._id}`
              "
              variant="primary"
              size="sm"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Bearbeiten</b-button
            >
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/user/jobs/preview/${job._id}`"
              target="_blank"
              variant="info"
              size="sm"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
              Vorschau</b-button
            >
            <BDropdown
              v-if="job.paid && job.paidExpiresAt >= new Date()"
              class="mr-2 mb-2 mb-md-0"
              size="sm"
              left
              variant="secondary"
            >
              <template #button-content>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
                Status ändern
              </template>
              <BDropdownItem
                variant=""
                @click.prevent="updateJobStatus(job._id, 'draft')"
                >Entwurf</BDropdownItem
              >
              <BDropdownItem
                variant="success"
                @click.prevent="updateJobStatus(job._id, 'published')"
                >Online</BDropdownItem
              >
              <BDropdownItem
                class="mb-0"
                variant="danger"
                @click.prevent="updateJobStatus(job._id, 'unpublished')"
                >Offline</BDropdownItem
              >
            </BDropdown>
            <b-button
              v-if="job.paidExpiresAt < new Date() && !job.payment"
              class="mr-2 mb-2 mb-md-0"
              variant="success"
              size="sm"
              :to="`/user/checkout/job/${job._id}`"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                /></svg
              >Jetzt veröffentlichen</b-button
            >
            <b-button
              v-if="
                job.status === 'invoice-pending' ||
                  (job.payment && job.payment.status === 'pending')
              "
              :disabled="true"
              class="mr-2 mb-2 mb-md-0"
              variant="light"
              size="sm"
              >Rechnung offen</b-button
            >
          </div>
          <div>
            <b-button
              v-b-modal="job._id"
              class="mb-2 mb-md-0"
              variant="outline-danger"
              size="sm"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                />
              </svg>
              Löschen</b-button
            >
          </div>
        </div>
      </div>

      <BModal
        :id="job._id"
        :title="`Lösche ${job.title}`"
        ok-title="Stellenanzeige löschen"
        cancel-title="Abbrechen"
        centered
        ok-variant="danger"
        footer-class="d-flex justify-content-between"
        @ok="deleteJob(job._id)"
        ><p class="my-4">
          Bist Du sicher, dass Du diese Stellenanzeige löschen möchtest?
        </p></BModal
      >
    </div>

    <Head title="Meine Stellenanzeigen" desc="" img="" />
  </div>
</template>

<script>
  import Vue from "vue";
  import { BModal, VBModal, BDropdown, BDropdownItem } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  import UserNav from "@/components/navs/UserNav.vue";
  export default {
    name: "UserJobs",
    components: {
      UserNav
    },
    data() {
      return {
        myJobs: []
      };
    },
    created() {
      this.getJobsByUserId();
    },
    mounted() {
      this.checkPaymentSuccess(this.$route.query);
    },
    methods: {
      async getJobsByUserId() {
        this.$store.dispatch("setOverlay", true);

        try {
          const jobs = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                    myJobs {
                        _id
                        createdAt
                        updatedAt
                        publishedAt
                        status
                        paid
                        paidExpiresAt
                        applicationDeadline
                        title
                        company {
                            name
                            street
                            zipCode
                            location
                            state
                            size
                        }
                        payment {
                            status
                            paidAt
                            paymentExpiresAt
                        }
                    }
                }
            `
            }
          });

          this.myJobs = jobs.data.data.myJobs;
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
                                        publishedAt
                                        status
                                        paid
                                        paidExpiresAt
                                        applicationDeadline
                                        title
                                        company {
                                            name
                                            street
                                            zipCode
                                            location
                                            state
                                            size
                                        }
                                        payment {
                                            status
                                            paidAt
                                            paymentExpiresAt
                                        }
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
          const response = await this.$axios.post("/graphql", {
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
      async checkPaymentSuccess(query) {
        if (query.success === "true") {
          this.$root.$bvToast.toast(
            "Der Zahlungsvorgang wurde erfolgreich abgeschlossen. Ihre Anzeige ist ab sofort auf unserer Stellenbörse verfügbar. Einen Beleg für Ihre Zahlung erhalten Sie auf Ihre angegebene E-Mail Adresse.",
            {
              title: `Zahlung erfolgreich`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        } else if (query.success === "false") {
          this.$root.$bvToast.toast(
            "Ihre Zahlung konnte leider nicht verarbeitet werden. Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns über unsere Kontaktdaten.",
            {
              title: `Zahlung fehlgeschlagen`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .badge {
    font-size: 0.8rem;
  }
</style>
