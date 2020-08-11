<template>
    <b-container class="newsletter-success py-5">
        <h1>{{ title }}</h1>
        <p>
            Your job newsletter subscription has been successful and is
            confirmed now. Thank you for subscribing!
        </p>

        <Head
            :title="title"
            desc="This is the meta of Newsletter Subscription Success..."
            img=""
        />
    </b-container>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "NewsletterSubscriptionSuccess",
        components: {
            Head
        },
        data() {
            return {
                title: "Newsletter Subscription Successful"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
