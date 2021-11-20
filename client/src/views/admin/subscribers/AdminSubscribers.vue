<template>
  <div id="admin-jobs" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin Subscribers</h1>
    <b-form id="subscriber-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-3">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
          debounce="500"
        />
        <b-input-group-append>
          <b-button class="px-2" @click.prevent="filter.searchTerm = ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              /></svg
          ></b-button>
        </b-input-group-append>
      </b-input-group>
      <div class="inline-block mr-5 ml-3 ml-lg-0 my-3 my-lg-0">
        Number of Subscribers:
        <strong>{{ filter.searchTerm ? count : subscribers.length }}</strong>
      </div>
      <b-button
        class="d-none d-lg-inline-block"
        :variant="newsletterSent ? 'success' : 'danger'"
        :disabled="!sendNewsletterActive"
        size="sm"
        @click.prevent="sendNewsletter"
      >
        {{ newsletterSent ? "Newsletter Sent" : "Send Newsletter now" }}
      </b-button>

      <b-input-group class="d-none d-lg-flex my-2 mr-3">
        <b-form-input
          v-model="daysBack"
          style="width: 95px"
          class="ml-2"
          type="number"
          placeholder="daysBack"
        />
        <b-input-group-append>
          <b-button variant="dark" size="sm">daysBack</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-form-checkbox
        v-model="sendNewsletterActive"
        class="d-none d-lg-flex my-2 mr-3"
        name="check-button"
        switch
      >
        enabled
      </b-form-checkbox>
      <b-button
        class="d-none d-lg-flex my-2 mr-3"
        variant="primary"
        size="sm"
        @click="emailsToClipboard"
        >Copy all emails</b-button
      >
    </b-form>
    <b-table
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="subscribers"
      :fields="fields"
      primary-key="_id"
      :filter="filter.searchTerm"
      @filtered="
        filteredItems => {
          count = filteredItems.length;
        }
      "
    >
      <template #cell(email)="row">
        <a :href="`mailto:${row.item.email}`"> {{ row.item.email }}</a>
      </template>
      <template #cell(createdAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(updatedAt)="row">
        {{ new Date(row.value).toLocaleString() }}
      </template>
      <template #cell(actions)="row">
        <b-button
          v-b-modal="'deleteSubscriberModal'"
          size="sm"
          variant="danger"
          @click="subscriberToDelete = row.item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
            /></svg
          >Delete
        </b-button>
      </template>
    </b-table>
    <BModal
      id="deleteSubscriberModal"
      :title="`Delete ${subscriberToDelete.email}`"
      ok-title="Delete Subscriber"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteSubscriber(subscriberToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this subscriber?
      </p></BModal
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

    <AdminNavbar />
  </div>
</template>

<script>
  import AdminNavbar from "@/components/layout/AdminNavbar.vue";
  import Vue from "vue";
  import { BModal, VBModal, BTable } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.directive("BModal", VBModal);
  Vue.component("BTable", BTable);
  export default {
    name: "AdminSubscribers",
    components: {
      AdminNavbar
    },
    data() {
      return {
        subscribers: [],
        count: 0,
        subscriberToDelete: Object,
        error: false,
        filter: {
          searchTerm: ""
        },
        daysBack: 7,
        sendNewsletterActive: false,
        fields: [
          {
            key: "_id",
            label: "Subscriber ID",
            sortable: false
          },
          {
            key: "email",
            sortable: true
          },
          {
            key: "state",
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
            key: "actions",
            sortable: false
          }
        ],
        newsletterSent: false
      };
    },
    created() {
      this.getAllSubscribers();
    },
    methods: {
      async getAllSubscribers() {
        this.$store.dispatch("setOverlay", true);

        try {
          const subscribers = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  subscribers {
                    _id
                    createdAt
                    updatedAt
                    email
                    state
                    status
                  }
                }
              `
            }
          });

          if (subscribers.data.errors) {
            throw new Error("Subscribers could not be loaded!");
          }

          this.subscribers = subscribers.data.data.subscribers;
        } catch (err) {
          this.error = true;
        }

        this.$store.dispatch("setOverlay", false);
      },
      // showDeleteSubscriberModal(subscriber) {
      //   this.subscriberToDelete = subscriber;
      //   this.$bvModal.show("deleteSubscriberModal");
      // },
      async deleteSubscriber(subscriberId) {
        try {
          const subscriber = await this.$axios.post("/graphql", {
            query: `
              mutation {
                adminDeleteSubscriber(_id: "${subscriberId}") {
                  _id 
                }
              }
            `
          });

          if (subscriber.data.errors) {
            throw new Error("User could not be deleted!");
          }

          this.subscribers.forEach((subscriber, index) => {
            if (subscriber._id === subscriberId) {
              this.subscribers.splice(index, 1);
            }
          });
        } catch (err) {
          this.error = true;
        }
      },
      async sendNewsletter() {
        const response = await this.$axios.post("/api/newsletter/send", {
          daysBack: this.daysBack
        });

        this.newsletterSent = response.data.success;
        this.sendNewsletterActive = false;
      },
      emailsToClipboard() {
        let el = document.createElement("textarea");

        el.value = this.subscribers
          .filter(subscriber => subscriber.status === "active")
          .map(subscriber => subscriber.email)
          .join("; ");

        document.body.appendChild(el);
        el.select();

        document.execCommand("copy");
        document.body.removeChild(el);
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.status === "pending") {
          return "table-warning";
        }
        if (item.status === "active") {
          return "table-success";
        }
      }
    }
  };
</script>
