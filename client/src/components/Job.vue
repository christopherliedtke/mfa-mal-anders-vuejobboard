<template>
    <div v-if="job.title" class="job">
        <h1>{{ job.title }}</h1>
        <div class="d-flex flex-wrap flex-lg-nowrap align-items-center my-3">
            <div class="logo-container mr-2 mb-3 mb-lg-0">
                <b-img
                    v-if="job.company && job.company.logoUrl"
                    class="logo my-3"
                    :src="job.company.logoUrl"
                    fluid
                    :alt="`Logo - ${job.company.name}`"
                />
            </div>
            <div class="d-flex flex-wrap head">
                <div>
                    <font-awesome-icon
                        class="mr-2"
                        :icon="['fas', 'map-marker']"
                        size="lg"
                    />
                    {{ job.company.location + ", " + job.company.state }}
                </div>
                <div>
                    <font-awesome-icon
                        class="mr-2"
                        :icon="['fas', 'building']"
                        size="lg"
                    />
                    {{ job.company.name }}
                </div>
                <div>
                    <font-awesome-icon
                        class="mr-2"
                        :icon="['fas', 'clock']"
                        size="lg"
                    />
                    {{
                        employmentTypeOptions.filter(
                            option => option.value === job.employmentType
                        )[0].text
                    }}
                </div>
                <div>
                    <font-awesome-icon
                        class="mr-2"
                        :icon="['fas', 'calendar-alt']"
                        size="lg"
                    />
                    Veröffentlicht:
                    {{ new Date(parseInt(job.paidAt)).toLocaleDateString() }}
                </div>
                <div>
                    <font-awesome-icon
                        class="mr-2"
                        :icon="['fas', 'calendar-times']"
                        size="lg"
                    />
                    Bewerbungsfrist:
                    {{ new Date(job.applicationDeadline).toLocaleDateString() }}
                </div>
                <div>
                    <font-awesome-icon
                        class="mr-2"
                        :icon="['fas', 'users']"
                        size="lg"
                    />

                    {{ job.company.size }}
                </div>
                <div v-if="job.simpleApplication">
                    <b-badge pill variant="secondary"
                        ><font-awesome-icon
                            class="mr-1"
                            :icon="['fas', 'hashtag']"
                        />Einfach bewerben</b-badge
                    >
                </div>
            </div>
        </div>
        <b-img
            v-if="job.imageUrl"
            class="mt-3 title-img"
            :src="job.imageUrl"
            fluid
            :alt="`Image - ${job.company && job.company.name}`"
        />
        <div class="mt-5" v-html="job.description"></div>
        <div class="mt-3" v-if="job.company.url">
            <a :href="job.company.url"
                ><strong
                    >Besuche unsere Homepage
                    <b-icon icon="box-arrow-up-right"/></strong
            ></a>
        </div>
        <div class="mt-4">
            <b-button
                size="lg"
                :variant="job.simpleApplication ? 'secondary' : 'primary'"
                :href="job.extJobUrl || `mailto:${job.applicationEmail}`"
                target="_blank"
                >Jetzt
                {{ job.simpleApplication && "nur mit Lebenslauf" }}
                bewerben</b-button
            >
        </div>
        <div v-if="job.contactLastName" class="mt-4">
            <h2>Ansprechpartner für Bewerbungen</h2>
            <p>
                {{ job.contactTitle && job.contactTitle + " " }}
                {{ job.contactFirstName + " " + job.contactLastName }} <br />
                {{ job.contactPhone && "Telefon: " }}
                <a
                    v-if="job.contactPhone"
                    :href="`tel:${job.contactPhone}`"
                    target="_blank"
                    >{{ job.contactPhone }}</a
                >
                <br />
                {{ job.contactEmail && "E-Mail: " }}
                <a
                    v-if="job.contactEmail"
                    :href="`mailto:${job.contactEmail}`"
                    target="_blank"
                    >{{ job.contactEmail }}</a
                >
            </p>
            <h2>Arbeitsort</h2>
            <p>
                {{ job.company.name }} <br />
                {{ job.company.street }} <br />
                {{ job.company.zipCode + " " + job.company.location }} <br />
            </p>
        </div>
        <HereMapSingleJob
            v-if="job.company && job.company.location"
            :job="job"
        />
        <div class="d-flex flex-wrap flex-column flex-md-row align-items-start">
            <FacebookShareBtn class="mr-2 mb-2" :sharePath="$route.fullPath" />
            <WhatsAppShareBtn class="mr-2 mb-2" :sharePath="$route.fullPath" />
            <EmailShareBtn
                class="mr-2 mb-2"
                :sharePath="$route.fullPath"
                :subject="job.title"
            />
        </div>

        <b-alert
            v-if="error"
            class="position-fixed fixed-bottom m-0 rounded-0 mt-3"
            show
            dismissible
            variant="warning"
            style="z-index: 2000;"
            >Oh, da ist leider etwas schief gelaufen. Bitte probiere es noch
            einmal.</b-alert
        >
        <JobStructuredData :job="job" />
        <Head
            v-if="job.title"
            :title="job.title"
            :desc="
                `${job.company.name} sucht nach ${job.title} in ${job.company.location}`
            "
            :img="job.imageUrl || job.company.logoUrl"
        />
    </div>
</template>

<script>
    import axios from "@/axios";
    import {
        employmentTypeOptions,
        companySizeOptions
    } from "@/utils/jobDataConfig.json";
    import JobStructuredData from "@/components/JobStructuredData.vue";
    import HereMapSingleJob from "@/components/hereMaps/HereMapSingleJob.vue";
    import Head from "@/components/utils/Head.vue";
    import FacebookShareBtn from "@/components/utils/FacebookShareBtn.vue";
    import WhatsAppShareBtn from "@/components/utils/WhatsAppShareBtn.vue";
    import EmailShareBtn from "@/components/utils/EmailShareBtn.vue";
    export default {
        name: "Job",
        components: {
            HereMapSingleJob,
            JobStructuredData,
            FacebookShareBtn,
            WhatsAppShareBtn,
            EmailShareBtn,
            Head
        },
        props: ["apiJobsSchema"],
        data() {
            return {
                job: Object,
                error: null,
                employmentTypeOptions,
                companySizeOptions
            };
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post(
                        `/api/jobs/${this.apiJobsSchema}`,
                        {
                            query: `
                            query {
                                job(_id: "${jobId}") {
                                    _id
                                    createdAt
                                    paidAt
                                    title
                                    description
                                    employmentType
                                    applicationDeadline
                                    simpleApplication
                                    extJobUrl
                                    applicationEmail
                                    imageUrl
                                    contactTitle
                                    contactFirstName
                                    contactLastName
                                    contactEmail
                                    contactPhone
                                    company {
                                        name
                                        street
                                        location
                                        zipCode
                                        state
                                        country
                                        geoCodeLat
                                        geoCodeLng
                                        size
                                        url
                                        logoUrl
                                    }
                                }
                            }
                        `
                        }
                    );

                    job.data.data.job
                        ? (this.job = job.data.data.job)
                        : (this.error = true);

                    this.updateHead();
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            updateHead: function() {
                this.$emit("updateHead");
            }
        },
        created: function() {
            this.getJob(this.$route.params.jobId);
        }
    };
</script>

<style scoped lang="scss"></style>
