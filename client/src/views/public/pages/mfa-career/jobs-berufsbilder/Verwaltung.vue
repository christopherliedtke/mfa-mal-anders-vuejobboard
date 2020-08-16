<template>
    <b-container class="py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Verwaltung",
        components: {
            Head
        },
        data() {
            return {
                title: "Jobs in der Verwaltung"
            };
        }
    };
</script>
