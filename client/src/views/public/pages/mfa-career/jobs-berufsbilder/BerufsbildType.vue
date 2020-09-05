<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <b-row>
                <b-col md="4" class="mb-4">
                    <JobsBerufsbilderNav />
                </b-col>
                <b-col>
                    <b-card
                        v-for="berufsbild in berufsbilder"
                        :key="berufsbild.id"
                        no-body
                        class="mb-2"
                    >
                        <b-card-header
                            @click="setVisible(berufsbild.id)"
                            header-tag="header"
                            role="tab"
                            :header-bg-variant="
                                visible === berufsbild.id ? 'primary' : ''
                            "
                            :header-text-variant="
                                visible === berufsbild.id ? 'light' : ''
                            "
                        >
                            <div>
                                <h3 class="h5 p-1 m-0">
                                    {{ berufsbild.title }}
                                </h3>
                            </div>
                        </b-card-header>
                        <b-collapse
                            :visible="visible === berufsbild.id"
                            role="tabpanel"
                        >
                            <b-card-body>
                                <b-card-text>
                                    <div
                                        v-if="berufsbild.content"
                                        v-html="berufsbild.content"
                                    ></div>
                                    <p v-else>
                                        Leider gibt es hier aktuell noch keine
                                        weiteren Informationen.
                                    </p>
                                    <p class="bold">
                                        Jobsuche auf unserer Stellelbörse:
                                        <b-link
                                            :to="
                                                `/jobboard?searchTerm=${berufsbild.title.slice(
                                                    0,
                                                    5
                                                )}`
                                            "
                                            >{{ berufsbild.title }}</b-link
                                        >
                                    </p>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </b-col>
            </b-row>
            <RandomTrainingsContainer />
        </b-container>
        <Head :title="title" desc="This is the meta of..." img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import JobsBerufsbilderNav from "@/components/utils/JobsBerufsbilderNav.vue";
    import RandomTrainingsContainer from "@/components/utils/RandomTrainingsContainer.vue";
    export default {
        name: "BerufsbildType",
        components: {
            Head,
            JobsBerufsbilderNav,
            RandomTrainingsContainer
        },
        data() {
            return {
                visible: null
            };
        },
        computed: {
            title: function() {
                return `Berufsbilder – ${this.$route.params.slug}`;
            },
            berufsbilder: function() {
                return this.$store.state.professions.professions.filter(
                    berufsbild =>
                        berufsbild.terms.nodes[0].name ===
                        this.$route.params.slug
                );
            }
        },
        methods: {
            setVisible(id) {
                this.visible = id;
            }
        }
    };
</script>
