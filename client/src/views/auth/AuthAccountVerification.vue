<template>
    <b-container class="account-verification position-relative py-5">
        <h2>E-Mail Adresse verifizieren</h2>
        <p>
            Aus Datenschutzgründen müssen wir Ihre E-Mail Adresse verifizieren.
        </p>
        <p>
            Bitte
            <strong
                >überprüfen Sie in den nächsten Minuten Ihr E-Mail
                Postfach</strong
            >
            und bestätigen Sie Ihre E-Mail Adresse über den Aktivierungslink.
            <strong>
                Bitte überprüfen Sie gegebenenfalls auch Ihren Spam Ordner.
            </strong>
        </p>
        <p>Keine E-Mail erhalten?</p>
        <b-button variant="primary" class="mt-3 mr-2" @click.prevent="onSubmit">
            Neue E-Mail zur Aktivierung senden
        </b-button>
        <b-button
            variant="secondary"
            class="mt-3 mr-2"
            to="/page/contact?subject=Probleme+bei+E-Mail-Verifizierung"
        >
            Probleme? Kontakt aufnehmen
        </b-button>
    </b-container>
</template>

<script>
    export default {
        name: "AuthAccountVerification",
        data() {
            return {
                timeoutId: null
            };
        },
        mounted() {
            this.checkUserStatus();
            this.checkError();
        },
        methods: {
            async onSubmit() {
                this.$store.dispatch("setOverlay", true);

                const response = await this.$axios.get(
                    "/api/auth/verification/get-activation-email"
                );

                if (!response.data.success) {
                    this.$root.$bvToast.toast(
                        "Die E-Mail konnte leider nicht versandt werden. Bitte versuchen Sie es noch einmal oder melden sich ggfls. über unser Kontaktformular.",
                        {
                            title: `Fehler beim Versenden der E-Mail`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                } else {
                    this.$root.$bvToast.toast(
                        "Eine neue E-Mail mit Aktivierungslink wurde versandt und sollte innerhalb der nächsten Minuten in Ihrem Postfach ankommen. Bitte überprüfen Sie ggfls. auch Ihren Spam Ordner.",
                        {
                            title: `Aktivierungslink versandt`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            },
            checkUserStatus() {
                this.timeoutId = setTimeout(async () => {
                    const res = await this.$axios.get("/api/auth/user-by-db");

                    this.$store.commit("setToken", res.data.token);

                    await this.$store.dispatch("fetchUser");

                    if (this.$store.state.auth.user.status === "active") {
                        this.$root.$bvToast.toast(
                            "Sie haben Ihre E-Mail Adresse erfolgreich bestätigt. Ihr Account ist nun freigeschaltet.",
                            {
                                title: `Account aktiviert`,
                                variant: "success",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );
                        this.$router.push("/user/dashboard?tab=1");
                    } else {
                        this.checkUserStatus();
                    }
                }, 5000);
            },
            checkError() {
                if (this.$route.query.error) {
                    this.$root.$bvToast.toast(
                        "Bei der Bestätigung Ihrer E-Mail Adresse ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie einen neuen Aktivierungslink anfordern oder melden Sie sich über unser Kontaktformular.",
                        {
                            title: `Fehler bei der Aktivierung`,
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
