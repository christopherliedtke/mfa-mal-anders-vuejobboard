<template>
    <div>
        <div v-if="job.title" class="job position-relative">
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
                            job.paid
                                ? new Date(
                                      parseInt(job.publishedAt || job.paidAt)
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
                    <div v-if="job.salaryMin || job.salaryMax">
                        <Fa
                            class="mr-2"
                            icon="euro-sign"
                            mask="calendar"
                            transform="shrink-9 down-3"
                            size="lg"
                        />
                        {{
                            !job.salaryMax
                                ? `ab ${parseInt(job.salaryMin)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`
                                : `${
                                      job.salaryMin
                                          ? parseInt(job.salaryMin)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    "."
                                                ) + " -"
                                          : "bis"
                                  }`
                        }}
                        {{
                            job.salaryMax
                                ? `${parseInt(job.salaryMax)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`
                                : ""
                        }}
                    </div>
                    <div
                        v-if="
                            job.specialization && job.specialization != 'null'
                        "
                    >
                        <Fa class="mr-2" icon="briefcase-medical" size="lg" />
                        {{ job.specialization }}
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
            <div class="position-relative d-flex align-items-center">
                <StarJob
                    :jobId="job._id"
                    position="relative"
                    padding="0 20px 0 0"
                    size="2x"
                />
                <SubscribeNewsletterBtn :state="job.company.state" />
                <Fa
                    v-if="$store.state.auth.user.isAdmin"
                    @click="socialShareToClipBoard(job)"
                    style="cursor: pointer"
                    class="ml-3 text-muted"
                    icon="share-alt"
                    size="2x"
                />
            </div>
            <div
                v-if="job.imageUrl"
                style="overflow: hidden"
                class="position-relative border-radius1 mx-auto mt-3"
            >
                <b-img
                    fluid
                    center
                    style="object-fit: fill; z-index: -1"
                    class="blur position-absolute"
                    :src="job.imageUrl"
                />

                <b-img
                    class="title-img"
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
                        $gtag.event('apply_visit_hp', {
                            event_label: `${job.title} | ${job.company.name} - ${job._id}`
                        })
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
                        $gtag.event('apply_now', {
                            event_label: `${job.title} | ${job.company.name} - ${job._id}`
                        })
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
                                $gtag.event('apply_phone', {
                                    event_label: `${job.title} | ${job.company.name} - ${job._id}`
                                })
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
                                $gtag.event('apply_email', {
                                    event_label: `${job.title} | ${job.company.name} - ${job._id}`
                                })
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
                    v-if="
                        job.company &&
                            job.company.geoCodeLat &&
                            job.company.geoCodeLng
                    "
                    :job="job"
                />
            </div>
            <div
                class="d-flex flex-wrap flex-column flex-md-row align-items-center"
            >
                <StarJob
                    class="ml-3 ml-md-0 mb-2"
                    :jobId="job._id"
                    position="relative"
                    padding="0 20px 0 0"
                    size="2x"
                />
                <FacebookShareBtn
                    class="mr-0 mr-md-2 mb-2"
                    :sharePath="$route.fullPath"
                />
                <WhatsAppShareBtn
                    class="mr-0 mr-md-2 mb-2"
                    :sharePath="$route.fullPath"
                />
                <TwitterShareBtn
                    class="mr-0 mr-md-2 mb-2"
                    :sharePath="$route.fullPath"
                    :title="job.title"
                />
                <EmailShareBtn
                    class="mr-0 mr-md-2 mb-2"
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
            :img="
                job.imageUrl && !job.imageUrl.includes('.svg')
                    ? job.imageUrl
                    : job.company.logoUrl &&
                      !job.company.logoUrl.includes('.svg')
                    ? job.company.logoUrl
                    : '/img/MfaMalAnders_NeuesStellenangebot_1200.jpg'
            "
            :twitterCard="
                job.imageUrl && !job.imageUrl.includes('.svg')
                    ? 'summary_large_image'
                    : job.company.logoUrl &&
                      !job.company.logoUrl.includes('.svg')
                    ? 'summary'
                    : 'summary_large_image'
            "
            :script="snippet"
        />
    </div>
</template>

<script>
    import SimilarJobsContainer from "@/components/containers/SimilarJobsContainer.vue";
    import {
        employmentTypeOptions,
        companySizeOptions
    } from "@/config/formDataConfig.json";
    import StarJob from "@/components/utils/starJob";
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
            SubscribeNewsletterBtn,
            StarJob
        },
        props: ["apiJobsSchema"],
        data() {
            return {
                job: Object,
                error: null,
                employmentTypeOptions,
                companySizeOptions,
                snippet: [
                    {
                        type: "application/ld+json",
                        inner: `{
                            "@context": "http://schema.org",
                            "@type" : "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "MFA mal anders",
                                    "item": "https://www.mfa-mal-anders.de"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Stellenangebote",
                                    "item": "https://www.mfa-mal-anders.de/jobboard"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Stellenangebot",
                                    "item": "https://www.mfa-mal-anders.de${this.$route.fullPath}"
                                }
                            ]
                        }`
                    }
                ]
            };
        },
        computed: {
            jobQuery: function() {
                return this.apiJobsSchema === "admin"
                    ? "adminJob"
                    : this.apiJobsSchema === "private"
                    ? "myJob"
                    : "publicJob";
            }
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
                this.$store.dispatch("setOverlay", true);

                try {
                    const job = await this.$axios.get(`/graphql`, {
                        params: {
                            query: `
                                query {
                                    ${this.jobQuery}(_id: "${jobId}") {
                                        _id
                                        createdAt
                                        updatedAt
                                        publishedAt
                                        paidAt
                                        paid
                                        title
                                        description
                                        employmentType
                                        applicationDeadline
                                        simpleApplication
                                        extJobUrl
                                        applicationEmail
                                        imageUrl
                                        salaryMin
                                        salaryMax
                                        specialization
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
                    });

                    if (job.data.data[this.jobQuery]) {
                        this.job = job.data.data[this.jobQuery];
                    } else {
                        this.$router.push("/jobboard");
                        throw new Error();
                    }
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

                this.$store.dispatch("setOverlay", false);
            },
            socialShareToClipBoard(job) {
                let el = document.createElement("textarea");

                el.value = `${job.title} | ${job.company.location}\n\n${
                    this.$config.website.url
                }/jobboard/job/${
                    job._id
                }\n\n#mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${job.company.location
                    .replace("-", "")
                    .replace(/\s/g, "")
                    .toLowerCase()}jobs #${job.company.location
                    .replace("-", "")
                    .replace(/\s/g, "")
                    .toLowerCase()}`;

                document.body.appendChild(el);
                el.select();

                document.execCommand("copy");
                document.body.removeChild(el);
            }
        }
    };
</script>
