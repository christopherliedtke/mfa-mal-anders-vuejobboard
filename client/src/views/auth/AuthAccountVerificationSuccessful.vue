<template>
    <b-container class="account-verification-successful position-relative py-5">
        <h2>E-Mail Adresse erfolgreich verifiziert</h2>
        <div class="success mt-3">
            <b-alert show dismissible variant="success"
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
        mounted() {
            this.updateUserStatus();
        },
        methods: {
            async updateUserStatus() {
                const response = await this.$axios.get(
                    "/api/auth/verification/update-user-status"
                );

                if (!response.data.success) {
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

                    localStorage.clear();
                    const logout = await this.$axios.get("/api/auth/logout");
                    if (logout.data.success) {
                        this.$router.push({ path: "/auth/login" });
                    }
                } else {
                    localStorage.setItem("userId", response.data.userId);
                    localStorage.setItem("userRole", response.data.userRole);
                    localStorage.setItem(
                        "userStatus",
                        response.data.userStatus
                    );

                    this.$store.commit(
                        "setUserStatus",
                        response.data.userStatus
                    );

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

                    this.$router.push({ path: "/user/dashboard" });
                }
            }
        }
    };
</script>
