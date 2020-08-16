<template>
    <b-container class="newsletter-unsubscribe-success py-5">
        <h1>{{ title }}</h1>
        <p>
            You have successfully unsubscribed from this newsletter.
        </p>

        <Head
            :title="title"
            desc="This is the meta of Newsletter Unsubscription Success..."
            img=""
        />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "NewsletterUnsubscriptionSuccess",
        components: {
            Head
        },
        data() {
            return {
                title: "Unsubscribe from Newsletter"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
