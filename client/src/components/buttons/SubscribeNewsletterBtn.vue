<template>
    <div>
        <b-button v-b-modal.subscribe-newsletter-modal2 variant="secondary">
            {{
                state
                    ? "Abonniere Jobs für " + state
                    : "Abonniere den Job Newsletter"
            }}</b-button
        >
        <b-modal id="subscribe-newsletter-modal2" hide-footer centered>
            <NewsletterSignUpForm class="p-3" :defaultState="state" />
        </b-modal>
    </div>
</template>

<script>
    import NewsletterSignUpForm from "@/components/forms/NewsletterSignUpForm.vue";
    export default {
        name: "SubscribeNewsletterBtn",
        components: {
            NewsletterSignUpForm
        },
        props: ["state"]
    };
</script>
