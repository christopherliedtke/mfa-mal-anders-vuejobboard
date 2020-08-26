<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="privacy-policy py-5"> </b-container>
        <Head :title="title" desc="This is the meta of About..." img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "About",
        components: {
            Head
        },
        data() {
            return {
                title: "Über MFA mal anders"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
