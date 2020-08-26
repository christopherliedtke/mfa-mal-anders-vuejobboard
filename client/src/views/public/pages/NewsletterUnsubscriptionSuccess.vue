<template>
    <div class="newsletter-unsubscribe-success">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <p>
                You have successfully unsubscribed from this newsletter.
            </p>
        </b-container>
        <Head
            :title="title"
            desc="This is the meta of Newsletter Unsubscription Success..."
            img=""
        />
    </div>
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
