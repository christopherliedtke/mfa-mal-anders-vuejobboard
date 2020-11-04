<template>
    <b-button variant="danger" @click="onLogout" aria-label="Logout">
        <b-icon class="mr-1" icon="box-arrow-right" font-scale="1.3"></b-icon
        >Logout
    </b-button>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "Logout",
        methods: {
            async onLogout() {
                localStorage.clear();
                localStorage.setItem("nl-pop", "false");

                const response = await axios.get("/api/auth/logout");

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
