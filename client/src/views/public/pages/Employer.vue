<template>
    <div class="employer">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5"> </b-container>
        <Head :title="title" desc="This is the meta of About..." img="" />
    </div>
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
