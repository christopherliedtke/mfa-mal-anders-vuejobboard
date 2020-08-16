<template>
    <b-container class="impressum py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of Impressum..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Impressum",
        components: {
            Head
        },
        data() {
            return {
                title: "Impressum"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
