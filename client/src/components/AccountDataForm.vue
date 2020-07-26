-<template>
    <div class="account-data-form position-relative mb-3">
        <Overlay :show="showOverlay" />
        <b-form id="account-data-form">
            <h3>Account Data</h3>
            <label for="first-name">First Name *</label>
            <b-form-input
                type="text"
                v-model="user.firstName"
                :state="validated ? (user.firstName ? true : false) : null"
                id="first-name"
                placeholder="Enter your first name ..."
                required
                :disabled="disabled"
            />
            <label for="last-name">Last Name *</label>
            <b-form-input
                type="text"
                v-model="user.lastName"
                :state="validated ? (user.lastName ? true : false) : null"
                id="last-name"
                placeholder="Enter your last name ..."
                required
                :disabled="disabled"
            />
            <label for="email">Email *</label>
            <b-form-input
                type="email"
                v-model="user.email"
                :state="validated ? (user.email ? true : false) : null"
                id="email"
                placeholder="Enter your email address ..."
                required
                :disabled="disabled"
            />

            <div class="d-flex justify-content-between my-4">
                <b-button
                    :variant="disabled ? 'primary' : 'outline-secondary'"
                    @click="disabled = !disabled"
                >
                    {{ disabled ? "Edit" : "Cancel" }}
                </b-button>
                <b-button
                    v-if="!disabled"
                    variant="success"
                    @click.prevent="onSubmit"
                >
                    <b-icon v-if="success" icon="check2" class="mr-2" />
                    {{ success ? "Done" : "Save" }}
                </b-button>
            </div>
            <b-alert v-if="verify" class="mt-3" show dismissible variant="info"
                >Please check your email inbox to verify your new email
                address.</b-alert
            >
            <b-alert
                v-if="error"
                class="mt-3"
                show
                dismissible
                variant="warning"
                >Oh, something went wrong. Please try again.</b-alert
            >
        </b-form>
    </div>
</template>

<script>
    import axios from "@/axios";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "AccountDataForm",
        components: {
            Overlay
        },
        data() {
            return {
                user: {
                    _id: "",
                    firstName: "",
                    lastName: "",
                    email: ""
                },
                disabled: true,
                validated: null,
                showOverlay: false,
                verify: null,
                success: null,
                error: null
            };
        },
        methods: {
            async getUserData() {
                try {
                    const userData = await axios.post("/api/user/private", {
                        query: `
                            query {
                                user {
                                    _id
                                    firstName
                                    lastName
                                    email
                                }
                            }
                        `
                    });

                    if (userData.data.data.user) {
                        this.user = userData.data.data.user;
                    }
                } catch (err) {
                    console.log("Error on getUserData(): ", err);
                }
            },
            async onSubmit() {
                if (this.formValidation()) {
                    try {
                        this.showOverlay = true;

                        const response = await axios.post("/api/user/private", {
                            query: `
                                mutation {
                                    updateUser (
                                        firstName: "${this.user.firstName}", 
                                        lastName: "${this.user.lastName}", 
                                        email: "${this.user.email}", 
                                    ) {
                                        _id
                                        status
                                    }
                                }
                            `
                        });

                        if (response.data.data.updateUser) {
                            this.success = true;

                            if (
                                response.data.data.updateUser.status ===
                                "pending"
                            ) {
                                this.verify = true;
                                this.$store.commit(
                                    "setUserStatus",
                                    response.data.data.updateUser.status
                                );
                                await axios.get(
                                    "/api/auth/verification/get-activation-email"
                                );
                            }

                            setTimeout(() => {
                                this.disabled = true;
                                this.success = null;
                            }, 1000);
                        } else {
                            this.error = true;
                        }

                        this.showOverlay = false;
                    } catch (err) {
                        console.log("Error on onSubmit(): ", err);
                    }
                }
            },
            formValidation() {
                this.validated = true;
                return !this.user.firstName ||
                    !this.user.lastName ||
                    !this.user.email
                    ? false
                    : true;
            }
        },
        created() {
            this.getUserData();
        }
    };
</script>

<style></style>
