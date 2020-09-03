<template>
    <div v-if="training" class="fort-weiterbildung">
        <h1 class="title">{{ training.title }}</h1>
        <b-container class="py-5">
            <b-row>
                <b-col md="4" order="2" order-md="1">
                    <FortWeiterbildungenNav />
                </b-col>
                <b-col class="mb-4" order="1" order-md="2">
                    <b-img
                        v-if="training.featuredImage"
                        class="border-radius1 shadow mb-5"
                        fluid
                        :src="training.featuredImage.node.sourceUrl"
                        :alt="`Banner - ${training.title}`"
                    />
                    <div v-html="training.content"></div>
                </b-col>
            </b-row>
            <RandomTrainingsContainer />
        </b-container>
        <Head
            :title="training.seo && training.seo.title"
            :desc="training.seo && training.seo.metaDesc"
            :img="
                training.featuredImage && training.featuredImage.node.sourceUrl
            "
        />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import FortWeiterbildungenNav from "@/components/utils/FortWeiterbildungenNav.vue";
    import RandomTrainingsContainer from "@/components/utils/RandomTrainingsContainer.vue";
    export default {
        name: "FortWeiterbildungen",
        components: {
            Head,
            FortWeiterbildungenNav,
            RandomTrainingsContainer
        },
        computed: {
            training: function() {
                return this.$store.state.trainings.trainings.find(
                    training => training.slug === this.$route.params.slug
                );
            }
        }
    };
</script>
