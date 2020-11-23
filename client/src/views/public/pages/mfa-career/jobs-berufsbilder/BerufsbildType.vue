<template>
    <div class="berufsbild-type">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <b-row>
                <b-col md="4" class="mb-4">
                    <JobsBerufsbilderNav />
                </b-col>
                <b-col>
                    <p>{{ intros[$route.params.slug] }}</p>
                    <p class="mb-4">
                        Vielleicht findest Du auch auf unserer
                        <b-link to="/jobboard">Stellenbörse</b-link> das
                        richtige für Dich.
                    </p>
                    <b-card
                        v-for="berufsbild in berufsbilder"
                        :key="berufsbild.slug"
                        no-body
                        class="mb-2"
                    >
                        <b-card-header
                            @click="setVisible(berufsbild.slug)"
                            style="cursor: pointer"
                            header-tag="header"
                            role="tab"
                            :header-bg-variant="
                                visible === berufsbild.id ? 'primary' : ''
                            "
                            :header-text-variant="
                                visible === berufsbild.id
                                    ? 'light'
                                    : berufsbild.content
                                    ? 'primary'
                                    : ''
                            "
                        >
                            <div>
                                <h3 class="h5 p-1 m-0">
                                    {{ berufsbild.title }}
                                    <b-icon
                                        icon="caret-right-fill"
                                        font-scale="0.8"
                                        :class="
                                            visible === berufsbild.slug
                                                ? 'animate rotate-90'
                                                : 'animate'
                                        "
                                    />
                                </h3>
                            </div>
                        </b-card-header>
                        <b-collapse
                            :visible="visible === berufsbild.slug"
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
                                        Jobsuche auf unserer Stellenbörse:
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
                    <ToJobboardBanner class="mt-3" />
                </b-col>
            </b-row>
            <RandomTrainingsContainer class="mt-5" />
        </b-container>
        <Head :title="title" :desc="intros[$route.params.slug]" img="" />
    </div>
</template>

<script>
    import Head from "@/components/utils/Head.vue";
    import JobsBerufsbilderNav from "@/components/utils/JobsBerufsbilderNav.vue";
    import RandomTrainingsContainer from "@/components/utils/RandomTrainingsContainer.vue";
    import ToJobboardBanner from "@/components/utils/ToJobboardBanner.vue";
    export default {
        name: "BerufsbildType",
        components: {
            Head,
            JobsBerufsbilderNav,
            RandomTrainingsContainer,
            ToJobboardBanner
        },
        data() {
            return {
                visible: this.$route.query.id || null,
                intros: {
                    "Medizinisch-Technisch":
                        "Wenn Dich die Arbeit mit und am Patienten mit Freude erfüllt oder Dein Herz für die Medizin schlägt, ist ein medizinisch-technischer Job am Besten für Dich geeignet. Sieh Dir deine vielfältigen Möglichkeiten an.",
                    Verwaltung:
                        "Mit einem Job in der Verwaltung von Unternehmen im Gesundheitswesen übernimmst Du organisatorische Aufgaben, prüfst Sachverhalte und erledigst allgemeine Büroarbeiten.",
                    Forschung:
                        "Mit einem Job in der Forschung kannst Du zum medizinischen Fortschritt beitragen und so die Zukunft der Medizin mitgestalten.",
                    Beratung:
                        "Mit einem Job in der Beratung kannst Du dein Expertenwissen mit Patienten, Praxen und anderen Personen des Gesundheitswesens teilen. ",
                    Management:
                        "Jobs im Management eines Unternehmens im Gesundheitswesen gewinnen bei steigenden Herausforderungen im Gesundheitssystem immer mehr an Bedeutung. Es bietet Dir ein vielfältiges Aufgabenspektrum für medizinische Fachangestellte."
                }
            };
        },
        computed: {
            title: function() {
                return `MFA Berufsbilder – ${this.$route.params.slug}`;
            },
            berufsbilder: function() {
                return this.$store.state.professions.professions.filter(
                    berufsbild =>
                        berufsbild.berufsbildTypes.nodes[0].name ===
                        this.$route.params.slug
                );
            }
        },
        methods: {
            setVisible(id) {
                if (this.visible === id) {
                    this.visible = null;
                    this.$router.push({ query: null });
                } else {
                    this.visible = id;
                    this.$router.push({ query: { id } });
                }
            }
        }
    };
</script>
