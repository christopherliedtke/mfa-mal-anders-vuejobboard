<template>
    <div class="jobboard">
        <h1 class="title">{{ title }}</h1>
        <b-container class="py-3 py-lg-5">
            <b-row class="mt-2">
                <b-col cols="12" lg="4" class="px-2 pr-lg-5">
                    <b-button-toolbar aria-label="Jobboard view toolbar">
                        <b-button-group class="mb-3">
                            <b-button
                                :variant="
                                    jobboardView == 'list'
                                        ? 'primary'
                                        : 'outline-primary'
                                "
                                @click.prevent="setJobboardView('list')"
                                ><Fa
                                    class="mr-2"
                                    icon="list-ul"
                                />Liste</b-button
                            >
                            <b-button
                                :variant="
                                    jobboardView == 'map'
                                        ? 'primary'
                                        : 'outline-primary'
                                "
                                @click.prevent="setJobboardView('map')"
                                ><Fa class="mr-2" icon="map" />Karte</b-button
                            >
                        </b-button-group>
                        <FacebookBtn class="d-lg-none mb-3 ml-1" content="" />
                        <InstagramBtn class="d-lg-none mb-3 ml-1" content="" />
                    </b-button-toolbar>
                    <b-form id="job-filter" @submit.prevent>
                        <label for="searchTerm-jobboard" class="sr-only"
                            >Suchbegriff *</label
                        >
                        <b-input-group class="mb-1 mr-2">
                            <b-form-input
                                :class="
                                    filter.searchTerm ? 'border-secondary' : ''
                                "
                                type="text"
                                v-model="filter.searchTerm"
                                placeholder="Suchbegriff..."
                                id="searchTerm-jobboard"
                                @change="setQuery"
                            />
                            <b-input-group-append>
                                <b-button
                                    @click.prevent="
                                        () => {
                                            filter.searchTerm = '';
                                            setQuery();
                                        }
                                    "
                                    ><Fa icon="times"
                                /></b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <label for="employmentType-jobboard" class="sr-only"
                            >Anstellungsart *</label
                        >
                        <b-form-select
                            class="my-1 mr-2"
                            v-model="filter.employmentType"
                            id="employmentType-jobboard"
                            @change="setQuery"
                        >
                            <b-form-select-option :value="null"
                                >Alle Anstellungsarten</b-form-select-option
                            >
                            <b-form-select-option
                                v-for="type in employmentTypeOptions"
                                :key="type.value"
                                :value="type.value"
                                >{{ type.text }}</b-form-select-option
                            >
                        </b-form-select>

                        <label for="location-jobboard" class="sr-only"
                            >Ort *</label
                        >
                        <b-input-group class="my-1 mr-2">
                            <b-form-input
                                :class="
                                    filter.location ? 'border-secondary' : ''
                                "
                                type="text"
                                v-model="filter.location"
                                list="location-list"
                                placeholder="Ort..."
                                id="location-jobboard"
                                @change="setQuery"
                            />
                            <b-input-group-append>
                                <b-button
                                    @click.prevent="
                                        () => {
                                            filter.location = '';
                                            setQuery();
                                        }
                                    "
                                    ><Fa icon="times"
                                /></b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <b-form-datalist
                            id="location-list"
                            :options="locationsList"
                        ></b-form-datalist>
                        <label for="state-jobboard" class="sr-only"
                            >Bundesland *</label
                        >
                        <b-form-select
                            class="my-1 mr-2"
                            v-model="filter.state"
                            id="state-jobboard"
                            @change="setQuery"
                        >
                            <b-form-select-option :value="null"
                                >Alle Bundesländer</b-form-select-option
                            >
                            <b-form-select-option
                                v-for="state in companyStateOptions"
                                :key="state"
                                :value="state"
                                >{{ state }}</b-form-select-option
                            >
                        </b-form-select>
                        <label for="profession-jobboard" class="mb-2 pl-2"
                            >Berufe
                        </label>
                        <b-form-group id="profession-jobboard" class="pl-2">
                            <b-form-checkbox-group
                                class="ml-1"
                                v-model="profession.active"
                                :options="professionOptions"
                                size="sm"
                                stacked
                            ></b-form-checkbox-group>
                        </b-form-group>
                        <label
                            @click="
                                specialization.visible = !specialization.visible
                            "
                            for="specialization-jobboard"
                            style="cursor: pointer"
                            class="mt-0 mb-2 pl-2"
                            >Fachgebiete
                            <Fa
                                icon="caret-right"
                                size="1x"
                                :class="
                                    specialization.visible === true
                                        ? 'animate rotate-90 ml-2'
                                        : 'animate ml-2'
                                "
                        /></label>
                        <b-collapse
                            :visible="specialization.visible === true"
                            role="tabpanel"
                        >
                            <b-form-group
                                id="specialization-jobboard"
                                class="pl-2"
                            >
                                <template #label>
                                    <b-form-checkbox
                                        v-model="specialization.allSelected"
                                        :indeterminate="
                                            specialization.indeterminate
                                        "
                                        @change="toggleAll"
                                        size="sm"
                                        stacked
                                    >
                                        {{
                                            specialization.allSelected
                                                ? "Alle Abwählen"
                                                : "Alle Auswählen"
                                        }}
                                    </b-form-checkbox>
                                </template>

                                <b-form-checkbox-group
                                    class="ml-1"
                                    v-model="specialization.active"
                                    :options="
                                        specializationOptions.map(
                                            specialization => {
                                                return {
                                                    text: specialization,
                                                    value: specialization
                                                };
                                            }
                                        )
                                    "
                                    size="sm"
                                    stacked
                                ></b-form-checkbox-group>
                            </b-form-group>
                        </b-collapse>
                    </b-form>
                    <div class="small text-right mb-2 pr-3 pt-1">
                        <b-link to="/page/fuer-arbeitgeber"
                            >Stellenanzeige schalten</b-link
                        >
                    </div>
                    <div class="d-none d-lg-block mt-5">
                        <p class="h5">
                            Verpasse keine Neuigkeiten und folge uns auf
                        </p>
                        <FacebookBtn class="mt-2 mr-1" content="Facebook" />
                        <InstagramBtn class="mt-2 mr-1" content="" />
                        <TwitterBtn class="mt-2 mr-1" content="" />
                    </div>
                </b-col>
                <b-col>
                    <keep-alive>
                        <component
                            :jobs="filteredJobs"
                            :is="computedJobboardView"
                        ></component>
                    </keep-alive>
                    <div class="mt-5">
                        <b-link
                            class="h2"
                            to="/page/mfa-career/fort-und-weiterbildungen"
                            >Fort- und Weiterbildungen für MFA</b-link
                        >
                        <RandomTrainingsContainer class="mt-3" :number="2" />
                        <BerufsbilderBanner class="mt-3" />
                    </div>
                    <div class="mt-5">
                        <p class="small">
                            Stellenangebote, Stellen, Jobs, Jobangebote für
                            Medizinische Fachangestellte (MFA), Arzthelferin,
                            Zahnmedizinische Fachangestellte (ZFA), ZMF, ZMV,
                            MTRA in {{ companyStateOptions.join(", ") }}.
                        </p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <Head
            :title="
                'MFA / ArzthelferIn Jobs' +
                    (filter.state ? ` | ${filter.state}` : '')
            "
            :desc="
                `Aktuelle Stellenangebote (Teilzeit | Vollzeit) für MFA / ArzthelferInnen ${
                    filter.state ? filter.state + ' ' : ''
                }– Dein Karriereportal nur für MFAs / ArzthelferInnen.`
            "
            img=""
            :script="snippet"
        />
    </div>
</template>

<script>
    import {
        employmentTypeOptions,
        companyStateOptions,
        specializationOptions,
        professionOptions
    } from "@/config/formDataConfig.json";
    import HereMapMultiJobs from "@/components/hereMaps/HereMapMultiJobs.vue";
    import JobboardList from "@/components/ui/JobboardList.vue";
    import FacebookBtn from "@/components/buttons/FacebookBtn.vue";
    import InstagramBtn from "@/components/buttons/InstagramBtn.vue";
    import TwitterBtn from "@/components/buttons/TwitterBtn.vue";
    import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
    import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
    export default {
        name: "Jobboard",
        components: {
            JobboardList,
            HereMapMultiJobs,
            FacebookBtn,
            InstagramBtn,
            TwitterBtn,
            RandomTrainingsContainer,
            BerufsbilderBanner
        },
        data() {
            return {
                title: "Stellenangebote für MFA / ArzthelferInnen",
                filter: {
                    searchTerm:
                        this.$route.query.searchTerm ||
                        this.$route.query.searchterm ||
                        "",
                    employmentType:
                        this.$route.query.employmentType ||
                        this.$route.query.employmenttype ||
                        null,
                    location: this.$route.query.location || "",
                    state: this.$route.query.state || null
                },
                specialization: {
                    active: specializationOptions,
                    visible: false,
                    allSelected: true,
                    indeterminate: false
                },
                profession: {
                    active: professionOptions.map(
                        profession => profession.value
                    )
                },
                employmentTypeOptions: employmentTypeOptions.filter(
                    type => type.value != "part_full"
                ),
                companyStateOptions,
                specializationOptions,
                professionOptions,
                jobboardView: this.$route.query.jobboardView || "list",
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
                                "name": "Stellenangebote",
                                "item": "https://www.mfa-mal-anders.de/jobboard"
                            }${
                                this.$route.query.state
                                    ? ',{"@type": "ListItem","position": 3,"name": "' +
                                      this.$route.query.state +
                                      '","item": "https://www.mfa-mal-anders.de/jobboard?state=' +
                                      this.$route.query.state +
                                      '"}'
                                    : ""
                            }]
                        }`
                    }
                ]
            };
        },
        computed: {
            computedJobboardView: {
                get() {
                    return this.jobboardView === "map"
                        ? "HereMapMultiJobs"
                        : "JobboardList";
                }
            },
            filteredJobs: {
                get() {
                    let jobs = [...this.$store.state.jobs.jobs];

                    // filter country

                    // filter state
                    if (this.filter.state) {
                        jobs = jobs.filter(job => {
                            if (
                                job.company &&
                                job.company.state
                                    .toLowerCase()
                                    .includes(this.filter.state.toLowerCase())
                            ) {
                                return job;
                            } else {
                                return;
                            }
                        });
                    }

                    // filter location
                    if (this.filter.location) {
                        jobs = jobs.filter(job => {
                            if (
                                job.company &&
                                job.company.location
                                    .toLowerCase()
                                    .includes(
                                        this.filter.location.toLowerCase()
                                    )
                            ) {
                                return job;
                            } else {
                                return;
                            }
                        });
                    }

                    // filter search term
                    if (this.filter.searchTerm) {
                        jobs = jobs.filter(job => {
                            if (
                                job.title
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.description
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.name
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.state
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.location
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    ) ||
                                job.company.zipCode
                                    .toLowerCase()
                                    .includes(
                                        this.filter.searchTerm.toLowerCase()
                                    )
                            ) {
                                return job;
                            } else {
                                return;
                            }
                        });
                    }

                    // filter employment type
                    if (this.filter.employmentType) {
                        jobs = jobs.filter(job => {
                            if (
                                job.employmentType.includes(
                                    this.filter.employmentType
                                )
                            ) {
                                return job;
                            } else {
                                return;
                            }
                        });
                    }

                    // filter specialization
                    if (
                        this.specialization.active &&
                        this.specialization.active.length > 0 &&
                        this.specialization.active.length !=
                            this.specializationOptions.length
                    ) {
                        jobs = jobs.filter(job => {
                            if (
                                this.specialization.active.some(element =>
                                    job.specialization.includes(element)
                                )
                            ) {
                                return job;
                            } else {
                                return;
                            }
                        });
                    }

                    // filter profession
                    if (
                        this.profession.active &&
                        this.profession.active.length === 1
                    ) {
                        if (
                            this.profession.active.some(
                                element => element === "Zahnheilkunde"
                            )
                        ) {
                            jobs = jobs.filter(
                                job => job.specialization === "Zahnheilkunde"
                            );
                        } else if (
                            this.profession.active.every(
                                element => element != "Zahnheilkunde"
                            )
                        ) {
                            jobs = jobs.filter(
                                job => job.specialization != "Zahnheilkunde"
                            );
                        }
                    }

                    return jobs;
                }
            },
            locationsList: {
                get() {
                    const locations = this.filteredJobs
                        .map(job => {
                            if (job.company) {
                                return job.company.location;
                            }
                        })
                        .filter(element => element);

                    return locations
                        .filter((v, i) => locations.indexOf(v) === i)
                        .sort();
                }
            }
        },
        async created() {
            this.$store.dispatch("getJobs");
        },
        watch: {
            "specialization.active"(newValue) {
                // Handle changes in individual flavour checkboxes
                if (newValue.length === 0) {
                    this.specialization.indeterminate = false;
                    this.specialization.allSelected = false;
                } else if (
                    newValue.length === this.specializationOptions.length
                ) {
                    this.specialization.indeterminate = false;
                    this.specialization.allSelected = true;
                } else {
                    this.specialization.indeterminate = true;
                    this.specialization.allSelected = false;
                }
            }
        },
        methods: {
            setJobboardView(value) {
                if (this.jobboardView != value) {
                    this.jobboardView = value;
                    this.setQuery();
                }
            },
            setQuery() {
                this.$router.push({
                    query: {
                        ...this.filter,
                        jobboardView: this.jobboardView
                    }
                });
            },
            toggleAll(checked) {
                this.specialization.active = checked
                    ? this.specializationOptions.slice()
                    : [];
            }
        }
    };
</script>

<style lang="scss">
    #specialization-jobboard,
    #profession-jobboard {
        & .custom-control-label {
            justify-content: flex-start;
            margin-top: 0;
        }
    }
</style>
