<template>
    <div class="newsletter-unsubscribe-success">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <p>
                Du hast dich erfolgreich von unserem Job-Newsletter abgemeldet.
            </p>
            <b-button to="/jobboard" variant="secondary"
                >Weiter zur Stellenbörse</b-button
            >
            <RandomArticlesContainer style="margin-top: 5rem" />
        </b-container>
        <Head
            :title="title"
            desc="Job-Newsletter Abmeldung erfolgreich"
            img=""
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import RandomArticlesContainer from "@/components/utils/RandomArticlesContainer.vue";

    export default {
        name: "NewsletterUnsubscriptionSuccess",
        components: {
            Head,
            RandomArticlesContainer
        },
        data() {
            return {
                title: "Job Newsletter Abmeldung erfolgreich"
            };
        }
    };
</script>

<style scoped lang="scss"></style>
