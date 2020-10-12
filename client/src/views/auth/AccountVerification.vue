<template>
    <b-container class="account-verification position-relative py-5">
        <Overlay :show="showOverlay"> </Overlay>
        <h2>E-Mail Adresse verifizieren</h2>
        <p>
            Bitte überprüfen Sie Ihr E-Mail Postfach und bestätigen Sie Ihre
            E-Mail Adresse über den Aktivierungslink innerhalb der nächsten 60
            Minuten.
            <strong>
                Bitte überprüfen Sie gegebenenfalls auch Ihren Spam Ordner.
            </strong>
        </p>
        <p>Keine E-Mail erhalten?</p>
        <button class="btn btn-primary my-3" @click="onSubmit">
            Erneut E-Mail zur Aktivierung senden
        </button>
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
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "AccountVerification",
        components: {
            Overlay
        },
        data() {
            return {
                error: false,
                success: false,
                showOverlay: false,
                setIntervalId: null
            };
        },
        methods: {
            async onSubmit(e) {
                e.preventDefault();
                this.showOverlay = true;
                this.error = false;
                this.success = false;

                const response = await axios.get(
                    "/api/auth/verification/get-activation-email"
                );
                this.showOverlay = false;

                if (!response.data.success) {
                    this.error = true;
                } else {
                    this.success = response.data.success;
                }
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
