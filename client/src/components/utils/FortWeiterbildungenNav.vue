<template>
    <b-list-group>
        <b-list-group-item to="/page/mfa-career/fort-und-weiterbildungen">
            <h3 class="h5 bold">
                Fort- und Weiterbildungen
            </h3></b-list-group-item
        >
        <b-list-group-item
            v-for="training in trainings"
            :key="training.id"
            :to="`/page/mfa-career/fort-und-weiterbildungen/${training.slug}`"
            :active="training.slug === $route.params.title"
            >{{ training.title }}</b-list-group-item
        >
    </b-list-group>
</template>

<script>
    import axios from "@/axios";
    import config from "@/utils/config.json";
    export default {
        name: "FortWeiterbildungenNav",
        data() {
            return {
                trainings: Array,
                config
            };
        },
        methods: {
            async getTrainings() {
                const response = await axios.post(config.cms.url, {
                    query: `
                        query MyQuery {
                            weiterbildungen(where: {orderby: {field: TITLE, order: DESC}}) {
                                edges {
                                    node {
                                        id
                                        slug
                                        title
                                    }
                                }
                            }
                        }
                    `
                });

                this.trainings = response.data.data.weiterbildungen.edges.map(
                    edge => {
                        return {
                            id: edge.node.id,
                            title: edge.node.title,
                            slug: edge.node.slug
                        };
                    }
                );
            }
        },
        created() {
            if (config.cms.active) {
                this.getTrainings();
            }
        }
    };
</script>

<style></style>
