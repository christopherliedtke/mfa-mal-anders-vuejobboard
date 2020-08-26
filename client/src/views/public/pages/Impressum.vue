<template>
    <div class="impressum">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5"> </b-container>
        <Head :title="title" desc="This is the meta of Impressum..." img="" />
    </div>
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
