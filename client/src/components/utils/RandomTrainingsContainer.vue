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
                    <b-card no-body>
                        <b-card-img-lazy
                            :src="training.featuredImage.node.sourceUrl"
                            :alt="training.featuredImage.node.altText"
                            top
                        />
                        <b-card-body>
                            <b-card-title :title="training.title" />

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
                        </b-card-body>
                    </b-card>
                </b-link>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "RandomTrainingsContainer",
        props: ["number"],
        data() {
            return {
                trainings: Array
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
            },
            getTrainings() {
                if (this.$store.state.trainings.trainings.length > 0) {
                    this.trainings = this.getRandom(
                        this.$store.state.trainings.trainings,
                        this.number || 3
                    );
                }
            }
        },
        mounted: function() {
            this.getTrainings();
        },
        watch: {
            $route(to, from) {
                if (to != from) {
                    this.getTrainings();
                }
            },
            "$store.state.trainings.trainings": function() {
                this.getTrainings();
            }
        }
    };
</script>
