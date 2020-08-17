<template>
    <b-container class="jobboard py-5">
        <h2>Stellenangebote</h2>
        <b-form id="job-filter" inline @submit.prevent>
            <b-input-group class="my-1 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.searchTerm"
                    placeholder="Suchbegriff..."
                    @change="setQuery"
                />
                <b-input-group-append>
                    <b-button
                        ><b-icon
                            icon="x"
                            @click.prevent="
                                () => {
                                    filter.searchTerm = '';
                                    setQuery();
                                }
                            "
                    /></b-button>
                </b-input-group-append>
            </b-input-group>
            <b-form-select
                class="my-1 mr-2"
                v-model="filter.employmentType"
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
            <b-form-select
                class="my-1 mr-2"
                v-model="filter.specialization"
                @change="setQuery"
            >
                <b-form-select-option :value="null"
                    >Alle Fachrichtungen</b-form-select-option
                >
                <b-form-select-option
                    v-for="specialization in specializationOptions"
                    :key="specialization"
                    :value="specialization"
                    >{{ specialization }}</b-form-select-option
                >
            </b-form-select>
            <b-input-group class="my-1 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.location"
                    list="location-list"
                    placeholder="Ort..."
                    @change="setQuery"
                />
                <b-input-group-append>
                    <b-button
                        ><b-icon
                            icon="x"
                            @click.prevent="
                                () => {
                                    filter.location = '';
                                    setQuery();
                                }
                            "
                    /></b-button>
                </b-input-group-append>
            </b-input-group>
            <b-form-datalist
                id="location-list"
                :options="locationsList"
            ></b-form-datalist>
            <b-form-select
                class="my-1 mr-2"
                v-model="filter.state"
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
        </b-form>
        <b-button-toolbar aria-label="Jobboard view toolbar">
            <b-button-group class="mt-3">
                <b-button
                    :variant="
                        jobboardView == 'list' ? 'primary' : 'outline-primary'
                    "
                    @click.prevent="setJobboardView('list')"
                    ><b-icon class="mr-2" icon="list-ul" />Liste</b-button
                >
                <b-button
                    :variant="
                        jobboardView == 'map' ? 'primary' : 'outline-primary'
                    "
                    @click.prevent="setJobboardView('map')"
                    ><b-icon class="mr-2" icon="map" />Karte</b-button
                >
            </b-button-group>
        </b-button-toolbar>
        <keep-alive>
            <component
                :jobs="filteredJobs"
                :is="computedJobboardView"
            ></component>
        </keep-alive>

        <Head title="Jobboard" desc="This is the meta of jobboard..." img="" />
    </b-container>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import {
        employmentTypeOptions,
        companyStateOptions,
        specializationOptions
    } from "@/utils/jobDataConfig.json";
    import HereMapMultiJobs from "@/components/hereMaps/HereMapMultiJobs.vue";
    import JobboardList from "@/components/JobboardList.vue";
    import Head from "@/components/utils/Head.vue";
    export default {
        name: "Jobboard",
        components: {
            JobboardList,
            HereMapMultiJobs,
            Head
        },
        data() {
            return {
                filter: {
                    searchTerm: this.$route.query.searchTerm || "",
                    employmentType: this.$route.query.employmentType || null,
                    location: this.$route.query.location || "",
                    state: this.$route.query.state || null,
                    specialization: this.$route.query.specialization || null
                },
                employmentTypeOptions: employmentTypeOptions.filter(
                    type => type.value != "part_full"
                ),
                companyStateOptions,
                specializationOptions,
                jobboardView: this.$route.query.jobboardView || "list"
            };
        },
        methods: {
            ...mapActions(["getJobs"]),
            setJobboardView(value) {
                if (this.jobboardView != value) {
                    this.jobboardView = value;
                    this.setQuery();
                }
            },
            setQuery() {
                this.$router.push({
                    query: { ...this.filter, jobboardView: this.jobboardView }
                });
            }
        },
        created: function() {
            this.getJobs({
                query: `
                    query {
                        jobs {
                            _id
                            createdAt
                            paidAt
                            title
                            description
                            employmentType
                            applicationDeadline
                            specialization
                            company {
                                _id
                                name
                                street
                                location
                                zipCode
                                state
                                country
                                geoCodeLat
                                geoCodeLng
                                logoUrl
                            }
                        }
                    }
                `
            });
        },
        computed: {
            ...mapGetters(["jobs"]),
            computedJobboardView: {
                get: function() {
                    return this.jobboardView === "map"
                        ? "HereMapMultiJobs"
                        : "JobboardList";
                }
            },
            filteredJobs: {
                get: function() {
                    let jobs = [...this.jobs];

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
                    if (this.filter.specialization) {
                        jobs = jobs.filter(job => {
                            if (
                                job.specialization.includes(
                                    this.filter.specialization
                                )
                            ) {
                                return job;
                            } else {
                                return;
                            }
                        });
                    }

                    return jobs;
                }
            },
            locationsList: {
                get: function() {
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
        }
    };
</script>

<style scoped lang="scss"></style>
