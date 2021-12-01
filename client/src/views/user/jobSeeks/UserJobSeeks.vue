<template>
  <div class="dashboard container py-3 py-lg-5">
    <UserNav class="mb-3" />

    <h3>Meine Stellengesuche</h3>
    <p>
      Hier kannst Du Deine Stellengesuche bearbeiten, löschen bzw. neue
      Stellengesuche erstellen.
    </p>
    <b-button
      class="mr-2 mb-2"
      to="/user/stellengesuche/edit/new"
      variant="outline-primary"
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
      >Neues Stellengesuch</b-button
    >
    <b-button
      class="mr-2 mb-2"
      to="/kontakt"
      variant="outline-secondary"
      target="_blank"
      >Fragen oder Hilfe benötigt?</b-button
    >
    <div
      v-for="jobSeek in myJobSeeks"
      :key="jobSeek._id"
      class="card shadow1 border-radius2 bg-light-shade my-3"
    >
      <div class="card-body">
        <div class="d-flex align-items-center mb-2">
          <b-img-lazy
            v-if="jobSeek.imageUrl"
            :src="jobSeek.imageUrl"
            width="70"
            height="70"
            class="img-fluid rounded-circle shadow1 mr-2"
          />
          <h4
            class="d-inline-block m-0"
            style="overflow: hidden; word-wrap: break-word"
          >
            {{ jobSeek.title }} |
            <span class="text-muted lead"> {{ jobSeek.location }}</span>
          </h4>
        </div>
        <div>
          <span
            v-if="jobSeek.published"
            class="badge badge-pill badge-success mr-1"
            >online</span
          >
          <span
            v-if="!jobSeek.published"
            class="badge badge-pill badge-danger mr-1"
            >offline</span
          >
        </div>

        <div class="my-3">
          <div>
            Erstellt:
            <span class="text-muted">
              {{ new Date(parseInt(jobSeek.createdAt)).toLocaleString() }}
            </span>
          </div>
          <div>
            Zuletzt aktualisiert:
            <span class="text-muted">
              {{ new Date(parseInt(jobSeek.updatedAt)).toLocaleString() }}
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <b-button
              class="mr-2 mb-2 mb-md-0"
              :to="`/user/stellengesuche/edit/${jobSeek._id}`"
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
              :to="`/user/stellengesuche/preview/${jobSeek._id}`"
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
                variant="danger"
                :active="jobSeek.published === false"
                @click.prevent="updateJobSeekStatus(jobSeek._id, false)"
                >Offline</BDropdownItem
              >
              <BDropdownItem
                variant="success"
                :active="jobSeek.published === true"
                @click.prevent="updateJobSeekStatus(jobSeek._id, true)"
                >Online</BDropdownItem
              >
            </BDropdown>
          </div>
          <div>
            <b-button v-b-modal="jobSeek._id" variant="outline-danger" size="sm"
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
        :id="jobSeek._id"
        :title="`Lösche ${jobSeek.title}`"
        ok-title="Stellengesuch löschen"
        cancel-title="Abbrechen"
        centered
        ok-variant="danger"
        footer-class="d-flex justify-content-between"
        @ok="deleteJobSeek(jobSeek._id)"
        ><p class="my-4">
          Bist Du sicher, dass Du das Stellengesuch löschen möchtest?
        </p></BModal
      >
    </div>

    <Head title="Meine Stellengesuche" desc="" img="" />
  </div>
</template>

<script>
  import UserNav from "@/components/navs/UserNav.vue";
  import Vue from "vue";
  import { BModal, VBModal, BDropdown, BDropdownItem } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("b-modal", VBModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  export default {
    name: "UserJobSeeks",
    components: {
      UserNav
    },
    data() {
      return {
        myJobSeeks: []
      };
    },
    created() {
      this.getJobSeeksByUserId();
    },
    methods: {
      async getJobSeeksByUserId() {
        this.$store.dispatch("setOverlay", true);

        try {
          const jobSeeks = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  myJobSeeks {
                    _id
                    createdAt
                    updatedAt
                    published
                    title
                    location
                    imageUrl
                  }
                }
              `
            }
          });

          this.myJobSeeks = jobSeeks.data.data.myJobSeeks;
        } catch (err) {
          this.$root.$bvToast.toast(
            "Ihre Stellengesuche konnten nicht geladen werden. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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
      async updateJobSeekStatus(jobSeekId, status) {
        this.$store.dispatch("setOverlay", true);

        try {
          const updatedJobSeek = await this.$axios.post("/graphql", {
            query: `
              mutation {
                updateJobSeek (
                  _id: "${jobSeekId}"
                  published: ${status}
                ) {
                  _id
                  createdAt
                  updatedAt
                  published
                  title
                  location
                  imageUrl
                }
              }
            `
          });

          if (updatedJobSeek.data.errors) {
            throw new Error();
          }

          this.myJobSeeks.forEach((jobSeek, index) => {
            if (jobSeek._id === jobSeekId) {
              this.myJobSeeks[index].published =
                updatedJobSeek.data.data.updateJobSeek.published;
            }
          });
        } catch (err) {
          this.$root.$bvToast.toast(
            "Das Stellengesuch konnte nicht aktualisiert werden. Bitte versuche es später noch einmal.",
            {
              title: `Fehler beim Aktualisieren`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      async deleteJobSeek(jobSeekId) {
        try {
          const jobSeek = await this.$axios.post("/graphql", {
            query: `
              mutation {
                deleteJobSeek(_id: "${jobSeekId}") {
                  _id
                }
              }
            `
          });

          if (jobSeek.data.data.deleteJobSeek._id) {
            this.myJobSeeks.forEach((jobSeek, index) => {
              if (jobSeek._id === jobSeekId) {
                this.myJobSeeks.splice(index, 1);
              }
            });

            this.$root.$bvToast.toast(
              "Das Stellengesuch wurde erfolgreich gelöscht.",
              {
                title: `Stellengesuch gelöscht`,
                variant: "success",
                toaster: "b-toaster-bottom-right",
                solid: true
              }
            );
          } else {
            throw new Error();
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            "Das Stellengesuch konnte nicht gelöscht werden. Bitte versuchen Sie es später noch einmal.",
            {
              title: `Fehler beim Löschen`,
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
