<template>
    <b-container class="register py-5 position-relative">
        <h2>{{ title }}</h2>
        <RegisterForm />

        <Head
            :title="title"
            desc="Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige."
            img=""
        />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import RegisterForm from "@/components/auth/RegisterForm.vue";
    export default {
        name: "Register",
        components: {
            Head,
            RegisterForm
        },
        data() {
            return {
                title: "Registrieren"
            };
        }
    };
</script>

<style scoped lang="scss">
    .register {
        &.container {
            width: 90%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
</style>
