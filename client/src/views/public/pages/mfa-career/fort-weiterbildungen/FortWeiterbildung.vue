<template>
    <div v-if="training.title" class="fort-weiterbildung">
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
        </b-container>
        <Head
            :title="training.seo.title"
            :desc="training.seo.metaDesc"
            :img="training.featuredImage.node.sourceUrl"
        />
    </div>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    import Head from "@/components/utils/Head.vue";
    import FortWeiterbildungenNav from "@/components/utils/FortWeiterbildungenNav.vue";
    export default {
        name: "FortWeiterbildungen",
        components: {
            Head,
            FortWeiterbildungenNav
        },
        data() {
            return {
                training: Array,
                config
            };
        },
        methods: {
            async getTraining() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            weiterbildungBy(slug: "${this.$route.params.title}") {
                                id
                                featuredImage {
                                    node {
                                        sourceUrl
                                    }
                                }
                                content
                                title
                                seo {
                                    metaDesc
                                    title
                                }
                            }
                        }

                    `
                });

                this.training = response.data.data.weiterbildungBy;
            }
        },
        created() {
            if (config.cms.active) {
                this.getTraining();
            }
        },
        watch: {
            $route(to, from) {
                if (config.cms.active && to.params.title != from.params.title) {
                    this.getTraining();
                }
            }
        }
    };
</script>
