<template>
    <div>
        <div v-if="job.title" class="job">
            <h1>{{ job.title }}</h1>
            <div
                class="d-flex  flex-lg-nowrap align-items-start align-items-md-center my-3"
            >
                <div
                    v-if="job.company && job.company.logoUrl"
                    class="logo-container mr-2 mb-3 mb-lg-0 order-2 order-sm-1"
                >
                    <b-img
                        class="logo my-3"
                        :src="job.company.logoUrl"
                        fluid
                        :alt="`Logo - ${job.company.name}`"
                    />
                </div>
                <div class="d-flex flex-wrap head order-1 order-sm-2">
                    <div>
                        <Fa
                            class="mr-2"
                            :icon="['fas', 'map-marker']"
                            size="lg"
                        />
                        {{
                            job.company.state != job.company.location
                                ? `${job.company.location}, ${job.company.state}`
                                : job.company.location
                        }}
                    </div>
                    <div>
                        <Fa
                            class="mr-2"
                            :icon="['fas', 'building']"
                            size="lg"
                        />
                        {{ job.company.name }}
                    </div>
                    <div>
                        <Fa class="mr-2" :icon="['fas', 'clock']" size="lg" />
                        {{
                            employmentTypeOptions.filter(
                                option => option.value === job.employmentType
                            )[0].text
                        }}
                    </div>
                    <div>
                        <Fa
                            class="mr-2"
                            :icon="['fas', 'calendar-alt']"
                            size="lg"
                        />
                        Veröffentlicht:
                        {{
                            job.paidAt
                                ? new Date(
                                      parseInt(job.paidAt)
                                  ).toLocaleDateString()
                                : "-"
                        }}
                    </div>
                    <div>
                        <Fa
                            class="mr-2"
                            :icon="['fas', 'calendar-times']"
                            size="lg"
                        />
                        Bewerbungsfrist:
                        {{
                            new Date(
                                job.applicationDeadline
                            ).toLocaleDateString()
                        }}
                    </div>
                    <div>
                        <Fa class="mr-2" :icon="['fas', 'users']" size="lg" />

                        {{ job.company.size }}
                    </div>
                    <div
                        v-if="job.simpleApplication"
                        v-b-tooltip.bottom.hover
                        title="Lebenslauf genügt für Bewerbung"
                    >
                        <b-badge
                            style="cursor: pointer"
                            pill
                            variant="secondary"
                            ><Fa
                                class="mr-1"
                                :icon="['fas', 'hashtag']"
                            />Einfach bewerben</b-badge
                        >
                    </div>
                </div>
            </div>
            <div>
                <SubscribeNewsletterBtn :state="job.company.state" />
            </div>
            <div
                class="bg-light-shade border-radius1 mx-auto"
                style="width: fit-content; min-width: 85%"
            >
                <b-img
                    v-if="job.imageUrl"
                    class="mt-3 title-img"
                    style="max-height: 35vh"
                    :src="job.imageUrl"
                    fluid
                    center
                    :alt="`Image - ${job.company && job.company.name}`"
                />
            </div>
            <div class="mt-4" v-html="job.description"></div>
            <div class="mt-3" v-if="job.company.url">
                <b-link
                    @click="
                        trackEvent(
                            `VisitHP: ${job.title} | ${job.company.name} - ${job._id}`,
                            'CompanyHomepage'
                        )
                    "
                    :href="job.company.url"
                    target="_blank"
                    ref="nofollow"
                    ><strong
                        >Besuchen Sie unsere Homepage
                        <Fa
                            icon="external-link-alt"
                            size="sm"
                            style="position: relative; top: -5px"/></strong
                ></b-link>
            </div>
            <div class="mt-3 small">
                <p>
                    Beziehe Dich in Deiner Bewerbung auf MFA mal anders.
                </p>
            </div>
            <div class="mt-4">
                <b-button
                    size="lg"
                    :variant="job.simpleApplication ? 'secondary' : 'primary'"
                    @click="
                        trackEvent(
                            `Apply: ${job.title} | ${job.company.name} - ${job._id}`,
                            'Apply'
                        )
                    "
                    :href="
                        job.extJobUrl ||
                            `mailto:${job.applicationEmail}?subject=Bewerbung - ${job.title} über ${$config.website.name}`
                    "
                    target="_blank"
                    >Jetzt
                    {{ job.simpleApplication ? "nur mit Lebenslauf" : "" }}
                    bewerben</b-button
                >
            </div>
            <div class="my-3">
                <b-button
                    class="mr-2 mt-2"
                    variant="outline-primary"
                    size="sm"
                    to="/jobboard"
                    >Zurück zur Stellenbörse</b-button
                >
                <b-button
                    class="mr-2 mt-2"
                    variant="outline-primary"
                    size="sm"
                    to="/page/mfa-career/gehalt"
                    >Gehaltsrechner</b-button
                >
                <b-button
                    class="mr-2 mt-2"
                    variant="outline-primary"
                    size="sm"
                    to="/page/mfa-career/bewerbungstipps"
                    >Bewerbungsvorlage</b-button
                >
            </div>
            <div
                v-if="
                    job.contactLastName ||
                        job.contactEmail ||
                        job.contactPhone ||
                        job.applicationEmail
                "
                class="mt-4"
            >
                <h2>Kontakt für Bewerbungen</h2>
                <div class="mb-3">
                    <div v-if="job.contactLastName">
                        {{
                            job.contactGender != "null"
                                ? job.contactGender + " "
                                : ""
                        }}
                        {{
                            job.contactTitle != "null"
                                ? job.contactTitle + " "
                                : ""
                        }}
                        {{ job.contactFirstName + " " + job.contactLastName }}
                        <br />
                    </div>
                    <div v-if="job.contactPhone">
                        Telefon:
                        <b-link
                            @click="
                                trackEvent(
                                    `Tel: ${job.title} | ${job.company.name} - ${job._id}`,
                                    'ContactPhone'
                                )
                            "
                            :href="`tel:${job.contactPhone}`"
                            target="_blank"
                            >{{ job.contactPhone }}</b-link
                        >
                        <br />
                    </div>
                    <div v-if="job.contactEmail || job.applicationEmail">
                        E-Mail:
                        <b-link
                            @click="
                                trackEvent(
                                    `Email: ${job.title} | ${job.company.name} - ${job._id}`,
                                    'ContactEmail'
                                )
                            "
                            :href="
                                `mailto:${job.contactEmail ||
                                    job.applicationEmail}?subject=${
                                    job.title
                                } über ${$config.website.name}`
                            "
                            target="_blank"
                            >{{
                                job.contactEmail || job.applicationEmail
                            }}</b-link
                        >
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <h2>Arbeitsort</h2>
                <p>
                    {{ job.company.name }} <br />
                    {{ job.company.street }} <br />
                    {{ job.company.zipCode + " " + job.company.location }}
                    <br />
                </p>
                <HereMapSingleJob
                    v-if="job.company && job.company.location"
                    :job="job"
                />
            </div>
            <div
                class="d-flex flex-wrap flex-column flex-md-row align-items-start"
            >
                <FacebookShareBtn
                    class="mr-2 mb-2"
                    :sharePath="$route.fullPath"
                />
                <WhatsAppShareBtn
                    class="mr-2 mb-2"
                    :sharePath="$route.fullPath"
                />
                <TwitterShareBtn
                    class="mr-2 mb-2"
                    :sharePath="$route.fullPath"
                    :title="job.title"
                />
                <EmailShareBtn
                    class="mr-2 mb-2"
                    :sharePath="$route.fullPath"
                    :subject="job.title"
                />
            </div>

            <JobStructuredData :job="job" />
        </div>
        <div v-if="error">
            <p class="h5">
                Diese Stellenanzeige scheint nicht mehr zu existieren.
            </p>
            <b-button class="mt-3" variant="outline-primary" to="/jobboard"
                >Zurück zur Stellenübersicht</b-button
            >
        </div>
        <b-alert
            v-if="error"
            class="position-fixed fixed-bottom m-0 rounded-0 mt-3"
            show
            dismissible
            variant="warning"
            style="z-index: 2000;"
            >Oh, da ist leider etwas schief gelaufen oder die Stellenanzeige
            existiert nicht mehr.</b-alert
        >
        <SimilarJobsContainer
            v-if="job.title"
            :jobs="$store.state.jobs.jobs"
            :job="job"
            :number="5"
        />
        <Head
            v-if="job.title"
            :title="job.title"
            :desc="
                `${job.title} | ${job.company.name} | ${job.company.location}, ${job.company.state}`
            "
            :img="job.imageUrl || job.company.logoUrl || ''"
            :twitterCard="
                job.imageUrl
                    ? 'summary_large_image'
                    : job.company.logoUrl
                    ? 'summary'
                    : ''
            "
        />
    </div>
</template>

<script>
    import SimilarJobsContainer from "@/components/containers/SimilarJobsContainer.vue";
    import {
        employmentTypeOptions,
        companySizeOptions
    } from "@/utils/jobDataConfig.json";
    import JobStructuredData from "@/components/utils/JobStructuredData.vue";
    import HereMapSingleJob from "@/components/hereMaps/HereMapSingleJob.vue";
    import FacebookShareBtn from "@/components/buttons/FacebookShareBtn.vue";
    import WhatsAppShareBtn from "@/components/buttons/WhatsAppShareBtn.vue";
    import EmailShareBtn from "@/components/buttons/EmailShareBtn.vue";
    import TwitterShareBtn from "@/components/buttons/TwitterShareBtn.vue";
    import SubscribeNewsletterBtn from "@/components/buttons/SubscribeNewsletterBtn.vue";
    export default {
        name: "Job",
        components: {
            SimilarJobsContainer,
            HereMapSingleJob,
            JobStructuredData,
            FacebookShareBtn,
            WhatsAppShareBtn,
            EmailShareBtn,
            TwitterShareBtn,
            SubscribeNewsletterBtn
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
        created() {
            this.getJob(this.$route.params.jobId);
        },
        watch: {
            "$route.params.jobId"() {
                this.getJob(this.$route.params.jobId);
            }
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await this.$axios.get(
                        `/api/jobs/${this.apiJobsSchema}`,
                        {
                            params: {
                                query: `
                                    query {
                                        job(_id: "${jobId}") {
                                            _id
                                            createdAt
                                            updatedAt
                                            paidAt
                                            title
                                            description
                                            employmentType
                                            applicationDeadline
                                            simpleApplication
                                            extJobUrl
                                            applicationEmail
                                            imageUrl
                                            contactGender
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
                        }
                    );

                    if (job.data.data.job) {
                        this.job = job.data.data.job;
                    } else {
                        this.$root.$bvToast.toast(
                            "Beim Laden der Stellenanzeige ist leider ein Fehler aufgetreten oder Sie ist abgelaufen.",
                            {
                                title: `Fehler beim Laden`,
                                variant: "danger",
                                toaster: "b-toaster-bottom-right",
                                solid: true,
                                noAutoHide: true
                            }
                        );

                        this.$router.push("/jobboard");
                    }

                    this.updateHead();
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Beim Laden der Stellenanzeige ist leider ein Fehler aufgetreten. Bitte versuche es noch einmal, indem Du die Seite aktualisierst.",
                        {
                            title: `Fehler beim Laden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            updateHead: function() {
                this.$emit("updateHead");
            },
            trackEvent: function(
                label,
                category,
                action = "Outbound_Link_Click"
            ) {
                if (this.apiJobsSchema === "public") {
                    this.$gtag.event(action, {
                        event_category: category,
                        event_label: label
                    });
                }
            }
        }
    };
</script>
