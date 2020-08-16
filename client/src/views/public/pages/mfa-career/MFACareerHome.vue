<template>
    <b-container class="mfa-career py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of MFA Career..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "MFACareerHome",
        components: {
            Head
        },
        data() {
            return {
                title: "Karriere machen als MFA"
            };
        }
    };
</script>
