<template>
    <div class="newsletter-activation">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <p class="text-center">
                Aktivierung Deiner Job-Newsletter Anmeldung läuft...
            </p>

            <RandomArticlesContainer style="margin-top: 5rem" />
        </b-container>
        <Head
            :title="title"
            desc="Aktivierung Job-Newsletter für MFAs / ArzthelferInnen."
            img=""
        />
    </div>
</template>

<script>
    import RandomArticlesContainer from "@/components/containers/RandomArticlesContainer.vue";
    export default {
        name: "NewsletterSubscriptionActivation",
        components: {
            RandomArticlesContainer
        },
        data() {
            return {
                title: "Aktivierung – Job Newsletter"
            };
        },
        async mounted() {
            await this.activateSubscriber();
        },
        methods: {
            async activateSubscriber() {
                this.$store.dispatch("setOverlay", true);

                try {
                    if (this.$route.params.subscriberId) {
                        const subscriber = await this.$axios.post("/graphql", {
                            query: `
                                mutation {
                                    activateSubscriber (_id: "${this.$route.params.subscriberId}") {
                                        _id
                                    }
                                }
                            `
                        });

                        if (subscriber.data.errors) {
                            throw new Error(
                                "Deine Newsletter Anmeldung konnte nicht aktiviert werden. Bitte versuche es noch einmal."
                            );
                        }

                        this.$router.push("/page/subscription-successful");
                    }
                } catch (err) {
                    this.$root.$bvToast.toast(err.message, {
                        title: `Aktivierung Deiner Newsletter Anmeldung`,
                        variant: "danger",
                        toaster: "b-toaster-bottom-right",
                        solid: true,
                        noAutoHide: true
                    });
                }

                this.$store.dispatch("setOverlay", false);
            }
        }
    };
</script>
