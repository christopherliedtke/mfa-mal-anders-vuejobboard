<template>
    <b-container class="jobboard py-5">
        <h2>Jobboard</h2>
        <b-form id="job-filter" inline @submit.prevent>
            <b-form-select v-model="filter.state">
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
            <b-form-input
                type="text"
                v-model="filter.location"
                list="location-list"
                placeholder="Enter City ..."
            />
            <b-form-datalist
                id="location-list"
                :options="locationsList"
            ></b-form-datalist>
            <b-form-input
                type="text"
                v-model="filter.searchTerm"
                placeholder="Enter search term ..."
            />
            <b-form-select v-model="filter.employmentType">
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
        <div class="job-list">
            <JobCard v-for="job in filteredJobs" :key="job._id" :job="job" />
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
    export default {
        name: "Jobboard",
        components: {
            JobCard
        },
        methods: {
            ...mapActions(["getJobs"])
        },
        data() {
            return {
                filter: {
                    createdAt: "",
                    searchTerm: "",
                    employmentType: null,
                    location: "",
                    state: null
                },
                employmentTypeOptions: employmentTypeOptions.filter(
                    type => type.value != "part_full"
                ),
                companyStateOptions
            };
        },
        created: function() {
            this.getJobs({
                query: `
                    query {
                        jobs {
                            _id
                            createdAt
                            title
                            description
                            employmentType
                            applicationDeadline
                            company {
                                _id
                                name
                                street
                                state
                                location
                                zipCode
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
        }
    };
</script>

<style scoped lang="scss">
    @import "@/styles/custom_bootstrap.scss";

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
</style>
