<template>
    <b-button variant="danger" @click="logout" aria-label="Logout">
        <Fa class="mr-2" icon="sign-out-alt" size="1x" />Logout
    </b-button>
</template>

<script>
    export default {
        name: "LogoutBtn",
        methods: {
            async logout() {
                await this.$store.dispatch("logout");
            }
        }
    };
</script>
