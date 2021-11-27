<template>
  <div id="admin-users" class="container-fluid admin-container pt-3">
    <h1 class="h2">Admin Users</h1>
    <b-form id="user-filter" inline @submit.prevent>
      <b-input-group class="my-2 mr-2">
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
      <div class="d-flex align-items-center ml-3 my-3 my-lg-0">
        <div class="mr-3">
          Number of Users:
          <strong>{{ filter.searchTerm ? count : users.length }}</strong>
        </div>
        <b-form-group class="d-none d-lg-inline-block">
          <b-form-checkbox
            id="is-employer"
            v-model="filter.isEmployer"
            class="m-0"
            :value="true"
            :unchecked-value="false"
            inline
            @change="getAllUsers()"
          >
            isEmployer
          </b-form-checkbox>
          <b-form-checkbox
            id="is-employee"
            v-model="filter.isEmployee"
            class="m-0"
            :value="true"
            :unchecked-value="false"
            inline
            @change="getAllUsers()"
          >
            isEmployee
          </b-form-checkbox>
          <b-form-checkbox
            id="is-educational"
            v-model="filter.isEducational"
            class="m-0"
            :value="true"
            :unchecked-value="false"
            inline
            @change="getAllUsers()"
          >
            isEducational
          </b-form-checkbox>
          <b-form-checkbox
            id="is-admin"
            v-model="filter.isAdmin"
            class="m-0"
            :value="true"
            :unchecked-value="false"
            inline
            @change="getAllUsers()"
          >
            isAdmin
          </b-form-checkbox>
        </b-form-group>
      </div>
    </b-form>
    <b-table
      responsive
      striped
      hover
      small
      sticky-header="80vh"
      :tbody-tr-class="rowClass"
      :items="users"
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
        <div class="d-flex">
          <b-button
            class="mr-2"
            :to="`/admin/users/edit/${row.item._id}`"
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
              /></svg
            >Edit
          </b-button>
          <BDropdown class="mr-2" size="sm" left variant="secondary">
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
              Status
            </template>
            <BDropdownItem
              class="mb-0"
              variant="success"
              @click.prevent="updateUserStatus(row.item._id, 'active')"
              >active</BDropdownItem
            >
            <BDropdownItem
              class="mb-0"
              variant="warning"
              @click.prevent="updateUserStatus(row.item._id, 'pending')"
              >pending</BDropdownItem
            >
          </BDropdown>
          <BDropdown class="mr-2" size="sm" left variant="info">
            <template #button-content>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                />
              </svg>
              Email
            </template>
            <BDropdownItem
              class="mb-0"
              variant="success"
              @click.prevent="sendActivationConfirmation(row.item._id)"
              >confirm activation</BDropdownItem
            >
          </BDropdown>
          <b-button
            v-b-modal="'deleteUserModal'"
            size="sm"
            variant="danger"
            @click="userToDelete = row.item"
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
        </div>
      </template>
    </b-table>
    <BModal
      id="deleteUserModal"
      :title="`Delete ${userToDelete.email}`"
      ok-title="Delete User"
      centered
      ok-variant="danger"
      footer-class="d-flex justify-content-between"
      @ok="deleteUser(userToDelete._id)"
      ><p class="my-4">
        Are you sure to delete this user?
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

    <AdminNav />
  </div>
</template>

<script>
  import AdminNav from "@/components/navs/AdminNav.vue";
  import Vue from "vue";
  import {
    BModal,
    BDropdown,
    BDropdownItem,
    VBModal,
    BTable
  } from "bootstrap-vue";
  Vue.component("BModal", BModal);
  Vue.component("BDropdown", BDropdown);
  Vue.component("BDropdownItem", BDropdownItem);
  Vue.directive("BModal", VBModal);
  Vue.component("BTable", BTable);
  export default {
    name: "AdminUsers",
    components: {
      AdminNav
    },
    data() {
      return {
        users: [],
        count: 0,
        userToDelete: Object,
        error: false,
        filter: {
          searchTerm: "",
          isEmployer: true,
          isEmployee: true,
          isEducational: true,
          isAdmin: true
        },
        fields: [
          {
            key: "_id",
            label: "UserID",
            sortable: false
          },
          {
            key: "firstName",
            label: "FirstName",
            sortable: true
          },
          {
            key: "lastName",
            label: "LastName",
            sortable: true
          },
          {
            key: "email",
            label: "Email",
            sortable: true
          },
          {
            key: "createdAt",
            label: "CreatedAt",
            sortable: true
          },
          {
            key: "updatedAt",
            label: "UpdatedAt",
            sortable: true
          },
          {
            key: "status",
            label: "Status",
            sortable: true
          },
          {
            key: "isEmployer",
            label: "IsEmployer",
            sortable: true
          },
          {
            key: "isEducational",
            label: "IsEducational",
            sortable: true
          },
          {
            key: "isEmployee",
            label: "IsEmployee",
            sortable: true
          },
          {
            key: "isAdmin",
            label: "isAdmin",
            sortable: true
          },
          {
            key: "actions",
            label: "Actions",
            sortable: false
          }
        ]
      };
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
                    adminUsers(
                      isEmployer: ${this.filter.isEmployer},
                      isEmployee: ${this.filter.isEmployee},
                      isEducational: ${this.filter.isEducational},
                      isAdmin: ${this.filter.isAdmin}
                    ) {
                      _id
                      createdAt
                      updatedAt
                      firstName
                      lastName
                      email
                      status
                      isEmployer
                      isEmployee
                      isEducational
                      isAdmin
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
      // showDeleteUserModal(user) {
      //   this.userToDelete = user;
      //   this.$bvModal.show("deleteUserModal");
      // },
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
                  isEducational
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

<style lang="scss">
  #admin-users {
    label {
      margin: 0 0.75rem 0 0;
    }
  }
</style>
