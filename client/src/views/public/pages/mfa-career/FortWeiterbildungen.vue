<template>
    <b-container class="py-5">
        <h1>{{ title }}</h1>

        <Head :title="title" desc="This is the meta of..." img="" />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "FortWeiterbildungen",
        components: {
            Head
        },
        data() {
            return {
                title: "Fort- und Weiterbildungen für MFAs"
            };
        }
    };
</script>
