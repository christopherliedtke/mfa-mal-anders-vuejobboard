<template>
    <b-container class="login auth-container">
        <h2 class="text-center">{{ title }}</h2>
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
