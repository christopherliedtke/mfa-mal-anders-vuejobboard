<template>
    <b-container class="account-verification-successful position-relative py-5">
        <h2>E-Mail Adresse verifizieren</h2>
        <div class="success mt-3">
            <b-alert :show="success" dismissible variant="success"
                >Ihre E-Mail Adresse wurde erfolgreich verifiziert. Sie werden
                sofort weitergeleitet...
                <b-spinner
                    style="width: 1.2rem; height: 1.2rem;"
                    variant="success"
                    label="Spinning"
                ></b-spinner>
            </b-alert>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "AccountVerificationSuccessful",
        data() {
            return {
                success: false
            };
        },
        mounted() {
            this.updateUserStatus();
        },
        methods: {
            async updateUserStatus() {
                const res = await this.$axios.get("/api/auth/user-by-db");

                this.$store.commit("setToken", res.data.token);

                const user = await this.$store.dispatch("fetchUser");

                if (!user) {
                    this.$root.$bvToast.toast(
                        "Beim Aktivieren Ihres Accounts ist ein Fehler aufgetreten. Bitte loggen Sie sich erneut ein und versuchen es noch einmal. Sollten Sie weiterhin Probleme haben, melden Sie sich bitte über unser Kontaktformular.",
                        {
                            title: `Fehler beim Aktivieren Ihres Accounts`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );

                    this.$store.dispatch("logout");
                } else {
                    this.success = true;
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

                    this.$router.push({ path: "/user/dashboard?tab=1" });
                }
            }
        }
    };
</script>
