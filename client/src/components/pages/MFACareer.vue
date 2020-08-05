<template>
    <b-container class="privacy-policy py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of MFA Career..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "MFACareer",
        components: {
            Head
        },
        data() {
            return {
                title: "MFA Career"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
