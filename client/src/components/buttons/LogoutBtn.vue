<template>
    <b-button variant="danger" @click="onLogout" aria-label="Logout">
        <Fa class="mr-2" icon="sign-out-alt" size="1x" />Logout
    </b-button>
</template>

<script>
    export default {
        name: "LogoutBtn",
        methods: {
            async onLogout() {
                localStorage.clear();
                localStorage.setItem("nl-pop", "false");

                const response = await this.$axios.get("/api/auth/logout");

                if (response.data.success) {
                    this.$store.commit("setUserId", "");
                    this.$store.commit("setUserRole", "");
                    this.$store.commit("setUserStatus", "");
                    this.$router.push({ path: "/login" });
                }
            }
        }
    };
</script>
