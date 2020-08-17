<template>
    <b-container class="privacy-policy py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of AGBs..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "AGBs",
        components: {
            Head
        },
        data() {
            return {
                title: "Allgemeine Geschäftsbedingungen"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
