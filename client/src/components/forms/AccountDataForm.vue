-<template>
    <div class="account-data-form position-relative mb-3">
        <b-form id="account-data-form">
            <label for="user-gender">Anrede</label>
            <b-form-select
                id="user-gender"
                v-model="user.gender"
                :state="validated ? (user.gender ? true : null) : null"
                :disabled="disabled"
            >
                <b-form-select-option :value="''"
                    >-- Anrede auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="title in contactGenderOptions"
                    :key="title"
                    :value="title"
                    >{{ title }}</b-form-select-option
                >
            </b-form-select>
            <label for="user-title">Titel</label>
            <b-form-select
                id="user-title"
                v-model="user.title"
                :state="validated ? (user.title ? true : null) : null"
                :disabled="disabled"
            >
                <b-form-select-option :value="''"
                    >-- Titel auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="title in contactTitleOptions"
                    :key="title"
                    :value="title"
                    >{{ title }}</b-form-select-option
                >
            </b-form-select>
            <label for="first-name">Vorname *</label>
            <b-form-input
                type="text"
                v-model="user.firstName"
                :state="validated ? (user.firstName ? true : false) : null"
                id="first-name"
                placeholder="Vorname eingeben..."
                required
                :disabled="disabled"
            />
            <label for="last-name">Nachname *</label>
            <b-form-input
                type="text"
                v-model="user.lastName"
                :state="validated ? (user.lastName ? true : false) : null"
                id="last-name"
                placeholder="Nachname eingeben..."
                required
                :disabled="disabled"
            />
            <label for="email">E-Mail Adresse *</label>
            <b-form-input
                type="email"
                v-model="user.email"
                :state="validated ? (user.email ? true : false) : null"
                id="email"
                placeholder="E-Mail Adresse eingeben..."
                required
                :disabled="disabled"
            />

            <div class="d-flex justify-content-between my-4">
                <b-button
                    :variant="disabled ? 'primary' : 'outline-danger'"
                    size="sm"
                    @click="disabled = !disabled"
                    ><Fa v-if="disabled" class="mr-2" icon="edit" />
                    {{ disabled ? "Bearbeiten" : "Abbrechen" }}
                </b-button>
                <b-button
                    v-if="!disabled"
                    variant="success"
                    size="sm"
                    @click.prevent="onSubmit"
                >
                    Speichern
                </b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    import {
        contactGenderOptions,
        contactTitleOptions
    } from "@/config/formDataConfig.json";
    export default {
        name: "AccountDataForm",
        props: ["apiUsersSchema"],
        data() {
            return {
                user: {
                    _id: "",
                    gender: null,
                    title: null,
                    firstName: "",
                    lastName: "",
                    email: ""
                },
                contactGenderOptions,
                contactTitleOptions,
                disabled: true,
                validated: null
            };
        },
        computed: {
            userQuery: function() {
                return this.apiUsersSchema === "admin" ? "adminUser" : "me";
            }
        },
        created() {
            this.getUserData();
        },
        methods: {
            async getUserData() {
                try {
                    this.$store.dispatch("setOverlay", true);

                    const user = await this.$axios.get(`/graphql`, {
                        params: {
                            query: `
                                query {
                                    ${this.userQuery} ${
                                this.apiUsersSchema === "admin"
                                    ? `(_id: "${this.$route.params.userId}")`
                                    : ""
                            }
                                        {
                                        _id
                                        gender
                                        title
                                        firstName
                                        lastName
                                        email
                                    }
                                }
                            `
                        }
                    });

                    if (user.data.data[this.userQuery]) {
                        this.user = user.data.data[this.userQuery];
                    }
                } catch (err) {
                    //
                }

                this.$store.dispatch("setOverlay", false);
            },
            async onSubmit() {
                if (this.formValidation()) {
                    this.$store.dispatch("setOverlay", true);

                    try {
                        const mutationType =
                            this.apiUsersSchema === "admin"
                                ? "adminUpdateUser"
                                : "updateMe";
                        const response = await this.$axios.post(`/graphql`, {
                            query: `
                                    mutation {
                                        ${mutationType} (
                                            ${
                                                this.apiUsersSchema === "admin"
                                                    ? `_id: "${this.user._id}",`
                                                    : ""
                                            }
                                            gender: "${this.user.gender}",
                                            title: "${this.user.title}",
                                            firstName: "${this.user.firstName}",
                                            lastName: "${this.user.lastName}",
                                            email: "${this.user.email.toLowerCase()}",
                                        ) {
                                            _id
                                            status
                                        }
                                    }
                                `
                        });

                        if (response.data.data[mutationType]) {
                            this.disabled = true;

                            this.$root.$bvToast.toast(
                                "Ihre Daten wurden erfolgreich gespeichert.",
                                {
                                    title: `Daten gespeichert`,
                                    variant: "success",
                                    toaster: "b-toaster-bottom-right",
                                    solid: true
                                }
                            );

                            if (
                                response.data.data[mutationType].status ===
                                "pending"
                            ) {
                                this.$store.commit(
                                    "setUserStatus",
                                    response.data.data[mutationType].status
                                );
                                await this.$axios.get(
                                    "/api/auth/verification/get-activation-email"
                                );

                                this.$root.$bvToast.toast(
                                    "In den nächsten Minuten erhalten Sie eine E-Mail zur Verifizierung Ihrer E-Mail Adresse in Ihr Postfach. Bitte bestätigen Sie Ihre E-Mail Adresse über den dort enthaltenen Bestätigunglink.",
                                    {
                                        title: `E-Mail verifizieren`,
                                        variant: "info",
                                        toaster: "b-toaster-bottom-right",
                                        solid: true,
                                        noAutoHide: true
                                    }
                                );
                            }
                        } else {
                            this.$root.$bvToast.toast(
                                "Beim Speichern Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
                                {
                                    title: `Fehler beim Speichern`,
                                    variant: "danger",
                                    toaster: "b-toaster-bottom-right",
                                    solid: true,
                                    noAutoHide: true
                                }
                            );
                        }
                    } catch (err) {
                        this.$root.$bvToast.toast(
                            "Beim Speichern Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
                            {
                                title: `Fehler beim Speichern`,
                                variant: "danger",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                    }

                    this.$store.dispatch("setOverlay", false);
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
        }
    };
</script>
