<template>
    <div>
        <b-form id="user-filter" inline @submit.prevent>
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
                Number of Users:
                <strong>{{ computedUsers.length }}</strong>
            </div>
        </b-form>
        <b-table
            responsive
            striped
            hover
            sticky-header="80vh"
            :items="computedUsers"
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
                    class="mr-2 mb-2"
                    :to="`/admin/users/edit/${row.item._id}`"
                    variant="primary"
                    size="sm"
                    ><Fa class="mr-2" icon="edit" />Edit
                </b-button>
                <b-button
                    size="sm"
                    variant="danger"
                    @click="showDeleteUserModal(row.item)"
                >
                    <Fa class="mr-2" icon="trash-alt" />Delete
                </b-button>
            </template>
        </b-table>
        <b-modal
            id="deleteUserModal"
            :title="`Delete ${userToDelete.email}`"
            ok-title="Delete User"
            centered
            ok-variant="danger"
            footer-class="d-flex justify-content-between"
            @ok="deleteUser(userToDelete._id)"
            ><p class="my-4">
                Are you sure to delete this user?
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
        name: "AllUsersListAdmin",
        data() {
            return {
                users: [],
                userToDelete: Object,
                error: false,
                filter: {
                    searchTerm: ""
                },
                fields: [
                    {
                        key: "_id",
                        label: "User ID",
                        sortable: false
                    },
                    {
                        key: "firstName",
                        sortable: true
                    },
                    {
                        key: "lastName",
                        sortable: true
                    },
                    {
                        key: "email",
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
                        key: "role",
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
            computedUsers: function() {
                let users = [...this.users];

                // filter search term
                if (this.filter.searchTerm) {
                    users = users.filter(user => {
                        if (
                            this.checkForSearchTerm(
                                [
                                    user._id,
                                    user.lastName,
                                    user.firstName,
                                    user.email
                                ],
                                this.filter.searchTerm
                            )
                        ) {
                            return user;
                        } else {
                            return;
                        }
                    });
                }

                return users;
            }
        },
        created() {
            this.getAllUsers();
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
            async getAllUsers() {
                try {
                    const response = await this.$axios.post("/api/user/admin", {
                        query: `
                            query {
                                users {
                                    _id
                                    createdAt
                                    updatedAt
                                    firstName
                                    lastName
                                    email
                                    status
                                    role
                                }
                            }
                        `
                    });

                    this.users = response.data.data.users;
                } catch (err) {
                    this.error = true;
                    this.$root.$bvToast.toast(
                        `Users konnten nicht geladen werden. Error: ${err}`,
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
            showDeleteUserModal(user) {
                this.userToDelete = user;
                this.$bvModal.show("deleteUserModal");
            },
            async deleteUser(userId) {
                try {
                    const response = await this.$axios.post("/api/user/admin", {
                        query: `
                            mutation {
                                deleteUser(_id: "${userId}") {
                                    firstName
                                }
                            }
                        `
                    });

                    if (response.data.data.deleteUser.firstName === "deleted") {
                        this.users.forEach((user, index) => {
                            if (user._id === userId) {
                                this.users.splice(index, 1);
                            }
                        });
                    } else {
                        this.error = true;
                        this.$root.$bvToast.toast(
                            `Der User konnte nicht gelöscht werden.`,
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
                        `Der User konnte nicht gelöscht werden. Error: ${err}`,
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
