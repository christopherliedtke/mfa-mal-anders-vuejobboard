<template>
    <div>
        <div v-if="jobs.length > 0">
            <JobCard v-for="job in activeJobs" :key="job._id" :job="job" />
            <div>
                <b-pagination
                    v-model="currentPage"
                    class="mt-4"
                    :total-rows="noOfJobs"
                    :per-page="perPage"
                    pills
                    align="center"
                    :limit="5"
                    aria-controls="my-table"
                ></b-pagination>
            </div>
        </div>
        <div
            v-else-if="jobs.length === 0 && $store.state.jobs.jobs.length > 0"
            style="min-height: 200px"
        >
            <p class="h5">Leider gibt es hierzu keine Ergebnisse.</p>
        </div>
        <div v-else>
            <JobCardPlaceholder class="mb-3" />
            <JobCardPlaceholder class="mb-3" />
            <JobCardPlaceholder class="mb-3" />
        </div>
        <div class="my-4 clearfix">
            <h2 class="h5 bold mb-3">Ihre Stellenanzeige hier?</h2>
            <b-img
                style="max-width: 120px"
                class="mr-3 mb-2"
                fluid
                left
                src="~@/assets/img/undraw_Updates_re_o5af.svg"
            />
            <p>
                Sie sind als attraktiver Arbeitergeber auf der Suche nach einer
                motivierten und kompetenten
                <em
                    >Medizinischen Fachangestellten (MFA) / ArzthelferIn oder
                    Zahnmedizinischen Fachangestellten (ZFA)</em
                >{{
                    $route.query.location || $route.query.state
                        ? ` in ${$route.query.location || $route.query.state}`
                        : ""
                }}? Dann
                <b-link to="/auth/register" class="bold">registrieren</b-link>
                Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem
                Karriereportal. <br />
                <b-link to="/page/fuer-arbeitgeber" class="bold"
                    >Mehr erfahren</b-link
                >
            </p>
        </div>
    </div>
</template>

<script>
    import JobCard from "@/components/ui/JobCard.vue";
    import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
    export default {
        name: "JobboardList",
        props: ["jobs"],
        components: {
            JobCard,
            JobCardPlaceholder
        },
        data() {
            return {
                perPage: 25,
                currentPage: 1
            };
        },
        computed: {
            noOfJobs() {
                return this.jobs.length;
            },
            activeJobs() {
                return this.jobs.slice(
                    this.currentPage * this.perPage - this.perPage,
                    this.currentPage * this.perPage
                );
            }
        }
    };
</script>
