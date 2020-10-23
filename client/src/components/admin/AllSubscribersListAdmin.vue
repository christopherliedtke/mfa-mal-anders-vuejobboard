<template>
    <div>
        <b-form id="subscriber-filter" inline @submit.prevent>
            <b-input-group class="my-2 mr-3">
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
            <div class="inline-block mr-5 ml-3 ml-lg-0 my-3 my-lg-0">
                Number of Subscribers:
                <strong>{{ computedSubscribers.length }}</strong>
            </div>
            <b-button
                class="d-none d-lg-inline-block"
                @click.prevent="sendNewsletter"
                :variant="newsletterSent ? 'success' : 'danger'"
                :disabled="!sendNewsletterActive"
                size="sm"
            >
                {{ newsletterSent ? "Newsletter Sent" : "Send Newsletter now" }}
            </b-button>

            <b-input-group class="d-none d-lg-flex my-2 mr-3">
                <b-form-input
                    style="width: 95px"
                    class="ml-2"
                    type="number"
                    v-model="daysBack"
                    placeholder="daysBack"
                />
                <b-input-group-append>
                    <b-button variant="dark" size="sm">daysBack</b-button>
                </b-input-group-append>
            </b-input-group>
            <b-form-checkbox
                v-model="sendNewsletterActive"
                name="check-button"
                switch
            >
                enabled
            </b-form-checkbox>
        </b-form>
        <b-table
            responsive
            striped
            hover
            sticky-header="80vh"
            :items="computedSubscribers"
            :fields="fields"
            primary-key="_id"
        >
            <template v-slot:cell(email)="row">
                <a :href="`mailto:${row.item.email}`"> {{ row.item.email }}</a>
            </template>
            <template v-slot:cell(createdAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(updatedAt)="row">
                {{ new Date(row.value).toLocaleString() }}
            </template>
            <template v-slot:cell(actions)="row">
                <b-button
                    size="sm"
                    variant="danger"
                    @click="showDeleteSubscriberModal(row.item)"
                >
                    <b-icon class="mr-2" icon="trash"></b-icon>Delete
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

        <Overlay :show="showOverlay" />
    </div>
</template>

<script>
    import axios from "@/axios";
    import Overlay from "@/components/utils/Overlay.vue";
    export default {
        name: "AllSubscribersListAdmin",
        components: {
            Overlay
        },
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
                showOverlay: false,
                newsletterSent: false
            };
        },
        computed: {
            computedSubscribers: function() {
                let subscribers = [...this.subscribers];

                // filter search term
                if (this.filter.searchTerm) {
                    subscribers = subscribers.filter(subscriber => {
                        if (
                            this.checkForSearchTerm(
                                [
                                    subscriber._id,
                                    subscriber.lastName,
                                    subscriber.firstName,
                                    subscriber.email
                                ],
                                this.filter.searchTerm
                            )
                        ) {
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
            async getAllSubscribers() {
                try {
                    const response = await axios.post("/api/subscriber/admin", {
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
                    });

                    this.subscribers = response.data.data.subscribers;
                } catch (err) {
                    this.error = true;
                    console.log("err: ", err);
                }
            },
            showDeleteSubscriberModal(subscriber) {
                this.subscriberToDelete = subscriber;
                this.$bvModal.show("deleteSubscriberModal");
            },
            async deleteSubscriber(subscriberId) {
                try {
                    const response = await axios.post("/api/subscriber/admin", {
                        query: `
                            mutation {
                                deleteSubscriber(_id: "${subscriberId}") {
                                    status
                                }
                            }
                        `
                    });

                    if (
                        response.data.data.deleteSubscriber.status === "deleted"
                    ) {
                        this.subscribers.forEach((subscriber, index) => {
                            if (subscriber._id === subscriberId) {
                                this.subscribers.splice(index, 1);
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
            async sendNewsletter() {
                this.showOverlay = true;
                const response = await axios.post("/api/newsletter/send", {
                    daysBack: this.daysBack
                });

                this.newsletterSent = response.data.success;
                this.sendNewsletterActive = false;

                this.showOverlay = false;
            }
        }
    };
</script>
