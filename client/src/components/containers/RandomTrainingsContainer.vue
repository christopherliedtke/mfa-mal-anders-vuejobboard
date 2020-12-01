<template>
    <b-row>
        <b-col
            cols="12"
            :md="12 / 2"
            :lg="12 / number"
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
                    :aria-label="training.title"
                >
                    <b-card no-body>
                        <b-card-img-lazy
                            :src="training.featuredImage.node.sourceUrl"
                            :alt="training.featuredImage.node.altText"
                            offset="1000"
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
        props: {
            number: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                trainings: Array
            };
        },
        mounted() {
            this.getTrainings();
        },
        watch: {
            $route(to, from) {
                if (to != from) {
                    this.getTrainings();
                }
            },
            "$store.state.trainings.trainings"() {
                this.getTrainings();
            }
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
                        this.number
                    );
                }
            }
        }
    };
</script>
