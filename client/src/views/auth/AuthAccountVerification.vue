<template>
    <b-container class="account-verification position-relative py-5">
        <h2>E-Mail Adresse verifizieren</h2>
        <p>
            Aus Datenschutzgründen müssen wir Ihre E-Mail Adresse verifizieren.
        </p>
        <p>
            Bitte <strong>überprüfen Sie Ihr E-Mail Postfach</strong> und
            bestätigen Sie Ihre E-Mail Adresse über den Aktivierungslink.
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
        <div class="error mt-3" v-if="error">
            <b-alert show dismissible variant="warning"
                >Oh, da ist leider etwas schief gelaufen. Bitte probieren Sie es
                noch einmal.</b-alert
            >
        </div>
        <div class="success mt-3" v-if="success">
            <b-alert show dismissible variant="success"
                >Eine neue E-Mail mit Aktivierungslink wurde versandt.
            </b-alert>
        </div>
    </b-container>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "AuthAccountVerification",
        data() {
            return {
                error: false,
                success: false,
                setIntervalId: null
            };
        },
        methods: {
            async onSubmit() {
                this.$store.dispatch("setOverlay", true);
                this.error = false;
                this.success = false;

                const response = await axios.get(
                    "/api/auth/verification/get-activation-email"
                );

                if (!response.data.success) {
                    this.error = true;
                } else {
                    this.success = response.data.success;
                }

                this.$store.dispatch("setOverlay", false);
            },
            checkUserStatus() {
                this.setIntervalId = setInterval(() => {
                    if (localStorage.getItem("userStatus") === "active") {
                        clearInterval(this.setIntervalId);
                        this.$router.go();
                    }
                }, 5000);
            },
            checkError() {
                if (this.$route.query.error) {
                    this.error = true;
                }
            }
        },
        mounted() {
            this.checkUserStatus();
            this.checkError();
        }
    };
</script>
