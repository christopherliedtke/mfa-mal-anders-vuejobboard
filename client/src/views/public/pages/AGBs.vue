<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="privacy-policy py-5"> </b-container>
        <Head :title="title" desc="This is the meta of AGBs..." img="" />
    </div>
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
