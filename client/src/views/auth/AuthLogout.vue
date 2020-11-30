<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="logout"> </b-container>

        <b-alert
            v-model="alert.show"
            class="position-fixed fixed-bottom m-0 rounded-0"
            style="z-index: 2000;"
            variant="danger"
            dismissible
        >
            {{ alert.msg }}
            <b-spinner
                style="width: 1.2rem; height: 1.2rem;"
                variant="danger"
                label="Spinning"
            ></b-spinner>
        </b-alert>

        <Head :title="title" desc="Ausloggen bei MFA mal anders" img="" />
    </div>
</template>

<script>
    export default {
        name: "AuthLogout",
        data() {
            return {
                title: "Abmelden",
                alert: {
                    show: false,
                    msg: ""
                }
            };
        },
        methods: {
            async logout() {
                localStorage.clear();
                localStorage.setItem("nl-pop", "false");

                const response = await this.$axios.get("/api/auth/logout");

                if (response.data.success) {
                    this.$store.commit("setUserId", "");
                    this.$store.commit("setUserRole", "");
                    this.$store.commit("setUserStatus", "");
                    this.$router.push({ path: "/auth/login" });
                }
            }
        },
        mounted: function() {
            let timeoutDuration = 0;

            if (this.$route.query.error) {
                timeoutDuration = 2000;
                this.alert.show = true;
                this.alert.msg = this.$route.query.error;
            }

            setTimeout(() => {
                this.logout();
            }, timeoutDuration);
        }
    };
</script>
