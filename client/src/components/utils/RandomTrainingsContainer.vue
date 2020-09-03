<template>
    <b-row class="mt-4">
        <b-col
            cols="12"
            md="6"
            lg="4"
            class="mb-4"
            v-for="training in trainings"
            :key="training.id"
        >
            <div class="article-card">
                <b-link
                    :to="
                        '/page/mfa-career/fort-und-weiterbildungen/' +
                            training.slug
                    "
                >
                    <b-card
                        :title="training.title"
                        :img-src="training.featuredImage.node.sourceUrl"
                        :img-alt="training.featuredImage.node.altText"
                        img-top
                        class="mb-2"
                    >
                        <b-card-text>
                            <div v-html="training.excerpt"></div>
                        </b-card-text>

                        <b-button
                            :to="
                                '/page/mfa-career/fort-und-weiterbildungen/' +
                                    training.slug
                            "
                            variant="primary"
                            >Mehr</b-button
                        >
                    </b-card>
                </b-link>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "RandomTrainingsContainer",
        data() {
            return {
                trainings: null
            };
        },
        methods: {
            getRandom(arr, n) {
                var result = new Array(n),
                    len = arr.length,
                    taken = new Array(len);
                if (n > len)
                    throw new RangeError(
                        "getRandom: more elements taken than available"
                    );
                while (n--) {
                    var x = Math.floor(Math.random() * len);
                    result[n] = arr[x in taken ? taken[x] : x];
                    taken[x] = --len in taken ? taken[len] : len;
                }
                return result;
            }
        },
        mounted: function() {
            this.trainings = this.getRandom(
                this.$store.state.trainings.trainings,
                3
            );
        },
        watch: {
            $route(to, from) {
                if (to != from) {
                    this.trainings = this.getRandom(
                        this.$store.state.trainings.trainings,
                        3
                    );
                }
            }
        }
    };
</script>

<style></style>
