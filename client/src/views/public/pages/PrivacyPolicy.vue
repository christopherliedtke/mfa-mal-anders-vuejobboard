<template>
    <div class="privacy-policy">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5"> </b-container>
        <Head
            :title="title"
            desc="This is the meta of Privacy Policy..."
            img=""
        />
    </div>
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
                title: "Datenschutzerklärung"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
