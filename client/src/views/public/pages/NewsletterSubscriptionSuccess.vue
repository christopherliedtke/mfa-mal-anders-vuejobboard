<template>
    <div class="newsletter-success">
        <h1 class="title">{{ title }}</h1>
        <b-container class=" py-5">
            <p>
                Your job newsletter subscription has been successful and is
                confirmed now. Thank you for subscribing!
            </p>
        </b-container>
        <Head
            :title="title"
            desc="This is the meta of Newsletter Subscription Success..."
            img=""
        />
    </div>
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
