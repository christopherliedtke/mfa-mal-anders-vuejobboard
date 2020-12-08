<template>
    <div v-if="berufsbilder" class="berufsbild-type">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-5">
            <b-row>
                <b-col md="4" class="mb-4">
                    <JobsBerufsbilderNav />
                </b-col>
                <b-col>
                    <p>{{ intros[$route.params.slug].desc }}</p>
                    <p class="mb-4">
                        Vielleicht findest Du auch auf unserer
                        <b-link to="/jobboard">Stellenbörse</b-link> das
                        richtige für Dich.
                    </p>
                    <b-card
                        v-for="berufsbild in berufsbilder"
                        :key="berufsbild.slug"
                        :id="berufsbild.slug"
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
                                    <Fa
                                        icon="caret-right"
                                        size="1x"
                                        :class="
                                            visible === berufsbild.slug
                                                ? 'animate rotate-90 ml-2'
                                                : 'animate ml-2'
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
        <Head
            :title="title"
            :desc="intros[$route.params.slug].desc"
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    import JobsBerufsbilderNav from "@/components/navs/JobsBerufsbilderNav.vue";
    import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
    import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
    export default {
        name: "CareerBerufsbildType",
        components: {
            JobsBerufsbilderNav,
            RandomTrainingsContainer,
            ToJobboardBanner
        },
        data() {
            return {
                visible: null,
                intros: {
                    "medizinisch-technisch": {
                        title: "Medizinisch-Technisch",
                        desc:
                            "Wenn Dich die Arbeit mit und am Patienten mit Freude erfüllt oder Dein Herz für die Medizin schlägt, ist ein medizinisch-technischer Job am Besten für Dich geeignet. Sieh Dir deine vielfältigen Möglichkeiten an."
                    },

                    verwaltung: {
                        title: "Verwaltung",
                        desc:
                            "Mit einem Job in der Verwaltung von Unternehmen im Gesundheitswesen übernimmst Du organisatorische Aufgaben, prüfst Sachverhalte und erledigst allgemeine Büroarbeiten."
                    },
                    forschung: {
                        title: "Forschung",
                        desc:
                            "Mit einem Job in der Forschung kannst Du zum medizinischen Fortschritt beitragen und so die Zukunft der Medizin mitgestalten."
                    },
                    beratung: {
                        title: "Beratung",
                        desc:
                            "Mit einem Job in der Beratung kannst Du dein Expertenwissen mit Patienten, Praxen und anderen Personen des Gesundheitswesens teilen. "
                    },
                    management: {
                        title: "Management",
                        desc:
                            "Jobs im Management eines Unternehmens im Gesundheitswesen gewinnen bei steigenden Herausforderungen im Gesundheitssystem immer mehr an Bedeutung. Es bietet Dir ein vielfältiges Aufgabenspektrum für medizinische Fachangestellte."
                    }
                },
                snippet: [
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "MFA mal anders",
                                "item": "https://www.mfa-mal-anders.de"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "MFA Karriere",
                                "item": "https://www.mfa-mal-anders.de/page/mfa-career"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Jobs und Berufsbilder",
                                "item": "https://www.mfa-mal-anders.de/page/mfa-career/jobs-und-berufsbilder"
                            },{
                                "@type": "ListItem",
                                "position": 4,
                                "name": "${this.$route.params.slug
                                    .split("-")
                                    .map(
                                        elem =>
                                            elem.charAt(0).toUpperCase() +
                                            elem.slice(1)
                                    )
                                    .join("-")}",
                                "item": "https://www.mfa-mal-anders.de/page/mfa-career/jobs-und-berufsbilder/${
                                    this.$route.params.slug
                                }"
                            }]
                        }`
                    }
                ]
            };
        },
        computed: {
            title() {
                return `MFA Berufsbilder – ${
                    this.intros[this.$route.params.slug].title
                }`;
            },
            berufsbilder() {
                return this.$store.state.professions.professions.filter(
                    berufsbild =>
                        berufsbild.berufsbildTypes.nodes[0].name.toLowerCase() ===
                        this.$route.params.slug.toLowerCase()
                );
            }
        },
        methods: {
            setVisible(id) {
                if (this.visible === id) {
                    this.visible = null;
                } else {
                    this.visible = id;
                }
            }
        }
    };
</script>
