<template>
    <b-container class="jobboard py-5">
        <h2>Jobboard</h2>
        <b-form id="job-filter" inline @submit.prevent>
            <b-form-select
                class="my-1 mr-2"
                v-model="filter.state"
                @change="setQuery"
            >
                <b-form-select-option :value="null"
                    >Any state</b-form-select-option
                >
                <b-form-select-option
                    v-for="state in companyStateOptions"
                    :key="state"
                    :value="state"
                    >{{ state }}</b-form-select-option
                >
            </b-form-select>
            <b-input-group class="my-1 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.location"
                    list="location-list"
                    placeholder="Enter city ..."
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
            <b-input-group class="my-1 mr-2">
                <b-form-input
                    type="text"
                    v-model="filter.searchTerm"
                    placeholder="Enter search term ..."
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
                    >Any employment type</b-form-select-option
                >
                <b-form-select-option
                    v-for="type in employmentTypeOptions"
                    :key="type.value"
                    :value="type.value"
                    >{{ type.text }}</b-form-select-option
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
                    ><b-icon class="mr-2" icon="list-ul" />List View</b-button
                >
                <b-button
                    :variant="
                        jobboardView == 'map' ? 'primary' : 'outline-primary'
                    "
                    @click.prevent="setJobboardView('map')"
                    ><b-icon class="mr-2" icon="map" />Map View</b-button
                >
            </b-button-group>
        </b-button-toolbar>
        <div class="job-list" v-if="jobboardView === 'list'">
            <JobCard v-for="job in filteredJobs" :key="job._id" :job="job" />
        </div>
        <div class="job-map" v-if="jobboardView === 'map'">
            <HereMapMultiJobs :jobs="filteredJobs" />
        </div>
    </b-container>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import {
        employmentTypeOptions,
        companyStateOptions
    } from "@/utils/jobDataConfig.json";
    import JobCard from "@/components/JobCard.vue";
    import HereMapMultiJobs from "@/components/hereMaps/HereMapMultiJobs.vue";
    export default {
        name: "Jobboard",
        components: {
            JobCard,
            HereMapMultiJobs
        },
        data() {
            return {
                filter: {
                    createdAt: "",
                    searchTerm: this.$route.query.searchTerm || "",
                    employmentType: this.$route.query.employmentType || null,
                    location: this.$route.query.location || "",
                    state: this.$route.query.state || null
                },
                employmentTypeOptions: employmentTypeOptions.filter(
                    type => type.value != "part_full"
                ),
                companyStateOptions,
                jobboardView: this.$route.query.jobboardView || "list"
            };
        },
        methods: {
            ...mapActions(["getJobs"]),
            setJobboardView(value) {
                this.jobboardView = value;
                this.setQuery();
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
        },
        head: {
            title: function() {
                return {
                    inner: "Jobboard"
                };
            },
            meta: function() {
                return [
                    {
                        name: "description",
                        content: "This is the meta of jobboard...",
                        id: "desc"
                    }
                ];
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "@/styles/custom_bootstrap.scss";

    .jobboard {
        .job-list {
            a {
                color: unset;
                transition: linear 0.1s;

                &:hover {
                    text-decoration: unset;
                    color: $primary;
                }
            }
        }
    }
</style>
