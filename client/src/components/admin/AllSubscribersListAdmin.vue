<template>
  <div>
    <b-form id="subscriber-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-3">
        <b-form-input
          v-model="filter.searchTerm"
          type="text"
          placeholder="Enter search term ..."
        />
        <b-input-group-append>
          <b-button
            ><Fa icon="times" @click.prevent="filter.searchTerm = ''"
          /></b-button>
        </b-input-group-append>
      </b-input-group>
      <div class="inline-block mr-5 ml-3 ml-lg-0 my-3 my-lg-0">
        Number of Subscribers:
        <strong>{{ computedSubscribers.length }}</strong>
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
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="computedSubscribers"
      :fields="fields"
      primary-key="_id"
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
          size="sm"
          variant="danger"
          @click="showDeleteSubscriberModal(row.item)"
        >
          <Fa class="mr-2" icon="trash-alt" />Delete
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="deleteSubscriberModal"
      :title="`Delete ${subscriberToDelete.email}`"
      ok-title="Delete Subscriber"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteSubscriber(subscriberToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this subscriber?
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
    name: "AllSubscribersListAdmin",
    data() {
      return {
        subscribers: [],
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
    computed: {
      computedSubscribers: function() {
        let subscribers = [...this.subscribers];

        // filter search term
        if (this.filter.searchTerm) {
          subscribers = subscribers.filter(subscriber => {
            const searchTerm = this.filter.searchTerm.toLowerCase().split(" ");
            const searchProp = [
              subscriber._id,
              subscriber.state,
              subscriber.status,
              subscriber.email
            ]
              .join(" ")
              .toLowerCase();

            if (searchTerm.every(term => searchProp.includes(term))) {
              return subscriber;
            } else {
              return;
            }
          });
        }

        return subscribers;
      }
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
      showDeleteSubscriberModal(subscriber) {
        this.subscriberToDelete = subscriber;
        this.$bvModal.show("deleteSubscriberModal");
      },
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
