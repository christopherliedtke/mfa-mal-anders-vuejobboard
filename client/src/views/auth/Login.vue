<template>
    <b-container class="login py-5">
        <h2>{{ title }}</h2>
        <LoginForm />

        <Head :title="title" desc="Anmelden bei MFA mal anders" img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import LoginForm from "@/components/auth/LoginForm.vue";
    export default {
        name: "Login",
        components: { Head, LoginForm },
        data() {
            return {
                title: "Anmeldung"
            };
        }
    };
</script>

<style scoped lang="scss">
    .login {
        &.container {
            width: 90%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
</style>
