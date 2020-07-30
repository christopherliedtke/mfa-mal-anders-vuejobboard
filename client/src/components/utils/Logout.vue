<template>
    <b-icon icon="box-arrow-right" font-scale="1.45" @click="onLogout"></b-icon>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "Logout",
        methods: {
            async onLogout() {
                localStorage.clear();
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

<style scoped lang="scss"></style>
