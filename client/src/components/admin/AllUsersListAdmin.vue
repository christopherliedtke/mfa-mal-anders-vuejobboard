<template>
  <div>
    <b-form id="user-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
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
      :tbody-tr-class="rowClass"
      :items="computedUsers"
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
          class="mr-2 mb-2"
          :to="`/admin/users/edit/${row.item._id}`"
          variant="primary"
          size="sm"
          ><Fa class="mr-2" icon="edit" />Edit
        </b-button>
        <b-dropdown class="mr-2 mb-2" size="sm" left variant="secondary">
          <template #button-content>
            <Fa class="mr-2" icon="ellipsis-v" /> Status
          </template>
          <b-dropdown-item
            class="mb-0"
            variant="success"
            @click.prevent="updateUserStatus(row.item._id, 'active')"
            >active</b-dropdown-item
          >
          <b-dropdown-item
            class="mb-0"
            variant="warning"
            @click.prevent="updateUserStatus(row.item._id, 'pending')"
            >pending</b-dropdown-item
          >
        </b-dropdown>
        <b-dropdown class="mr-2 mb-2" size="sm" left variant="info">
          <template #button-content>
            <Fa class="mr-2" icon="envelope" /> Email
          </template>
          <b-dropdown-item
            class="mb-0"
            variant="success"
            @click.prevent="sendActivationConfirmation(row.item._id)"
            >confirm activation</b-dropdown-item
          >
        </b-dropdown>
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
            key: "isEmployer",
            sortable: true
          },
          {
            key: "isEmployee",
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
            const searchTerm = this.filter.searchTerm.toLowerCase().split(" ");
            const searchProp = [
              user._id,
              user.firstName,
              user.lastName,
              user.email,
              user.status
            ]
              .join(" ")
              .toLowerCase();

            if (searchTerm.every(term => searchProp.includes(term))) {
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
      async getAllUsers() {
        this.$store.dispatch("setOverlay", true);

        try {
          const users = await this.$axios.get("/graphql", {
            params: {
              query: `
                                query {
                                    adminUsers {
                                        _id
                                        createdAt
                                        updatedAt
                                        firstName
                                        lastName
                                        email
                                        status
                                        isEmployer
                                        isEmployee
                                    }
                                }
                            `
            }
          });

          if (!users.data.data.adminUsers) {
            throw new Error("Users could not be loaded!");
          }

          this.users = users.data.data.adminUsers;
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

        this.$store.dispatch("setOverlay", false);
      },
      showDeleteUserModal(user) {
        this.userToDelete = user;
        this.$bvModal.show("deleteUserModal");
      },
      async deleteUser(userId) {
        try {
          const deletedUser = await this.$axios.post("/graphql", {
            query: `
                            mutation {
                                adminDeleteUser(_id: "${userId}") {
                                    _id
                                }
                            }
                        `
          });

          if (!deletedUser.data.data.adminDeleteUser) {
            throw new Error("User could not be deleted!");
          }

          this.users.forEach((user, index) => {
            if (user._id === deletedUser.data.data.adminDeleteUser._id) {
              this.users.splice(index, 1);
            }
          });
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
      },
      async updateUserStatus(userId, status) {
        try {
          const updatedUser = await this.$axios.post("/graphql", {
            query: `
                                mutation {
                                    adminUpdateUser(_id: "${userId}" status: "${status}") {
                                        _id
                                        createdAt
                                        updatedAt
                                        firstName
                                        lastName
                                        email
                                        status
                                        isEmployer
                                        isEmployee
                                    }
                                }
                            `
          });

          if (updatedUser.data.errors) {
            throw new Error("User could not be updated!");
          }

          this.users = this.users.map(userOld => {
            if (userOld._id === updatedUser.data.data.adminUpdateUser._id) {
              return updatedUser.data.data.adminUpdateUser;
            } else {
              return userOld;
            }
          });
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `Der User konnte nicht aktualisiert werden. Error: ${err}`,
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
      async sendActivationConfirmation(userId) {
        this.$store.dispatch("setOverlay", true);

        try {
          const response = await this.$axios.post("/graphql", {
            query: `
                            mutation {
                                adminUserActivationConfirmation (_id: "${userId}") {
                                    _id
                                }
                            }
                        `
          });

          if (response.data.errors) {
            throw new Error("Email could not be sent!");
          }

          this.$root.$bvToast.toast(
            `Die Bestätigung zur Aktivierung des User Accounts konnte erfolgreich gesendet werden.`,
            {
              title: `E-Mail erfolgreich gesendet.`,
              variant: "success",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: false
            }
          );
        } catch (err) {
          this.error = true;
          this.$root.$bvToast.toast(
            `E-Mail konnte nicht gesendet werden. Error: ${err}`,
            {
              title: `Fehler beim Senden der E-Mail`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.$store.dispatch("setOverlay", false);
      },
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.status === "pending") {
          return "table-warning";
        }
        if (item.status === "active" && item.isEmployer) {
          return "table-success";
        }
        if (item.status === "active") {
          return "table-info";
        }
      }
    }
  };
</script>
