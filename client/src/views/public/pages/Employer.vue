<template>
    <b-container class="privacy-policy py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of About..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Employer",
        components: {
            Head
        },
        data() {
            return {
                title: "Für Arbeitgeber"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
