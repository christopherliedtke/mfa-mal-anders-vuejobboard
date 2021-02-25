<template>
    <b-button variant="danger" size="sm" @click="logout" aria-label="Logout">
        <Fa class="mr-2" icon="sign-out-alt" size="1x" />Logout
    </b-button>
</template>

<script>
    export default {
        name: "LogoutBtn",
        methods: {
            async logout() {
                this.$store.dispatch("setOverlay", true);

                this.$store.dispatch("logout");

                this.$store.dispatch("setOverlay", false);
            }
        }
    };
</script>
