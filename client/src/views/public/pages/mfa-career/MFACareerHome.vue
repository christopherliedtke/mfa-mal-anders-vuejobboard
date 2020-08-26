<template>
    <div class="mfa-career">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5"> </b-container>
        <Head :title="title" desc="This is the meta of MFA Career..." img="" />
    </div>
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
