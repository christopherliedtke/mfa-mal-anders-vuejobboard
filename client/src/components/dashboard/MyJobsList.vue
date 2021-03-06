<template>
  <div>
    <h3>Meine Stellenanzeigen</h3>
    <p>
      Hier können Sie Stellenanzeigen erstellen, bearbeiten, veröffentlichen
      oder löschen.
    </p>
    <b-button
      class="mr-2 mb-2"
      :to="
        `/${
          $store.state.auth.user.isAdmin ? 'admin' : 'user/dashboard'
        }/jobs/edit/new`
      "
      variant="primary"
      ><Fa class="mr-2" icon="plus" />Neue Stelle</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/blog/article/8-tipps-fuer-attraktive-stellenanzeigen-fuer-mfas"
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
    <BCard v-for="job in myJobs" :key="job._id" class="shadow1 bg-light my-3">
      <BCardText>
        <h4>
          {{ job.title }}
        </h4>
        <div>
          <BBadge
            v-if="job.paidExpiresAt >= new Date() && job.paid"
            class="mr-1"
            pill
            variant="success
                        "
            >bezahlt</BBadge
          >
          <BBadge v-if="!job.paid" class="mr-1" pill variant="warning"
            >unbezahlt</BBadge
          >
          <BBadge
            v-if="
              job.status === 'published' &&
                job.paidExpiresAt >= new Date() &&
                (!job.applicationDeadline ||
                  job.applicationDeadline >= new Date().getTime()) &&
                job.paid
            "
            class="mr-1"
            pill
            variant="success"
            >online</BBadge
          >
          <BBadge
            v-if="job.status === 'draft'"
            class="mr-1"
            pill
            variant="light"
            >Entwurf</BBadge
          >
          <BBadge
            v-if="job.status === 'unpublished'"
            class="mr-1"
            pill
            variant="danger"
            >offline</BBadge
          >

          <BBadge
            v-if="
              job.applicationDeadline &&
                job.applicationDeadline < new Date().getTime()
            "
            class="mr-1"
            pill
            variant="danger"
            >Bewerbungsfrist abgelaufen</BBadge
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
              :to="`/user/dashboard/jobs/edit/${job._id}`"
              variant="primary"
              size="sm"
              ><Fa class="mr-2" icon="edit" /> Bearbeiten</b-button
            >
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/user/dashboard/jobs/preview/${job._id}`"
              target="_blank"
              variant="info"
              size="sm"
              ><Fa class="mr-2" icon="eye" /> Vorschau</b-button
            >
            <BDropdown
              v-if="job.paid && job.paidExpiresAt >= new Date()"
              class="mr-2 mb-2 mb-md-0"
              size="sm"
              left
              variant="secondary"
            >
              <template #button-content>
                <Fa class="mr-2" icon="ellipsis-v" />
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
              :to="`/user/dashboard/checkout/${job._id}`"
              ><Fa class="mr-2" icon="shopping-cart" />Jetzt bezahlen</b-button
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
              >Rechnung in Bearbeitung</b-button
            >
          </div>
          <div>
            <b-button
              v-b-modal="job._id"
              class="mb-2 mb-md-0"
              variant="outline-danger"
              size="sm"
              ><Fa class="mr-2" icon="trash-alt" /> Löschen</b-button
            >
          </div>
        </div>
      </BCardText>
      <BModal
        :id="job._id"
        :title="`Delete ${job.title}`"
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
    </BCard>
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    BModal,
    VBModal,
    BBadge,
    BCard,
    BDropdown,
    BDropdownItem,
    BCardText
  } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  Vue.component("BBadge", BBadge);
  Vue.component("BCard", BCard);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  Vue.component("BCardText", BCardText);
  export default {
    name: "MyJobsList",
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
