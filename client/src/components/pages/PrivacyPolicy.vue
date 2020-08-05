<template>
    <b-container class="privacy-policy py-5">
        <h1>{{ title }}</h1>

        <Head
            :title="title"
            desc="This is the meta of Privacy Policy..."
            img=""
        />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "PrivacyPolicy",
        components: {
            Head
        },
        data() {
            return {
                title: "Privacy Policy"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
