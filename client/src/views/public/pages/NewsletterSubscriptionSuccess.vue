<template>
    <div class="newsletter-success">
        <h1 class="title">{{ title }}</h1>
        <b-container class=" py-5">
            <p>
                Deine Anmeldung für den Job-Newsletter war erfolgreich.
            </p>
            <b-button to="/jobboard" variant="secondary"
                >Weiter zur Stellenbörse</b-button
            >
            <RandomArticlesContainer style="margin-top: 5rem" />
        </b-container>
        <Head
            :title="title"
            desc="Anmeldung für den Job-Newsletter erfolgreich."
            img=""
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import RandomArticlesContainer from "@/components/utils/RandomArticlesContainer.vue";
    export default {
        name: "NewsletterSubscriptionSuccess",
        components: {
            Head,
            RandomArticlesContainer
        },
        data() {
            return {
                title: "Job Newsletter Anmeldung erfolgreich"
            };
        }
    };
</script>
