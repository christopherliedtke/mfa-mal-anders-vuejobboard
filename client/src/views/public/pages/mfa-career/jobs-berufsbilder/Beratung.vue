<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5"> </b-container>
        <Head :title="title" desc="This is the meta of..." img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Beratung",
        components: {
            Head
        },
        data() {
            return {
                title: "Jobs in der Beratung"
            };
        }
    };
</script>
