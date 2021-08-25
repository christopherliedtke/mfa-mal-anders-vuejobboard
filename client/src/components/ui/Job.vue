<template>
  <div v-if="!job.title && !error">
    <JobPlaceholder class="mb-5" />
    <JobCardPlaceholder v-for="index in 5" :key="index" class="mb-3" />
  </div>
  <div v-else-if="job.title">
    <article class="job position-relative">
      <div class="mb-4 d-flex align-items-start justify-content-between">
        <div>
          <!-- eslint-disable-next-line -->
          <h1 v-html="job.title"></h1>
          <span class="lead text-muted">
            <!-- eslint-disable-next-line -->
            <span v-html="job.company.name"></span> | {{ job.company.location
            }}{{
              job.company.state && job.company.state != job.company.location
                ? ", " + job.company.state
                : ""
            }}</span
          >
        </div>
        <div
          v-if="job.company && job.company.logoUrl"
          class="d-none d-sm-flex logo-container mx-2"
        >
          <b-img
            class="logo"
            :src="job.company.logoUrl"
            :alt="`Logo - ${job.company.name}`"
          />
        </div>
      </div>

      <hr />

      <div>
        <div
          class="d-flex flex-lg-nowrap justify-content-between align-items-start"
        >
          <div
            v-if="job.company && job.company.logoUrl"
            class="d-sm-none logo-container mr-1 ml-2 ml-sm-0 mr-sm-4 mb-3 mb-lg-0 order-2 order-sm-1"
          >
            <b-img
              class="logo"
              :src="job.company.logoUrl"
              :alt="`Logo - ${job.company.name}`"
            />
          </div>
          <div class="head flex-column flex-sm-row order-1 order-sm-2">
            <!-- <b-col>
              <div class="icon">
                <Fa :icon="['fas', 'map-marker']" size="lg" />
              </div>
              {{
                job.company.state != job.company.location
                  ? `${job.company.location}, ${job.company.state}`
                  : job.company.location
              }}
            </b-col>
            <b-col>
              <div class="icon">
                <Fa :icon="['fas', 'building']" size="lg" />
              </div>
              {{ job.company.name }}
            </b-col> -->
            <div v-if="job.employmentType">
              <div class="icon">
                <Fa :icon="['fas', 'briefcase']" size="lg" />
              </div>
              {{
                employmentTypeOptions.filter(
                  option => option.value === job.employmentType
                )[0].text
              }}
            </div>
            <div v-if="job.company.size">
              <div class="icon">
                <Fa :icon="['fas', 'users']" size="lg" />
              </div>

              {{ job.company.size }}
            </div>
            <div v-if="job.salaryMin || job.salaryMax">
              <div class="icon">
                <Fa
                  icon="euro-sign"
                  mask="calendar"
                  transform="shrink-9 down-3"
                  size="lg"
                />
              </div>
              {{
                !job.salaryMax
                  ? `ab ${parseInt(job.salaryMin)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`
                  : `${
                      job.salaryMin
                        ? parseInt(job.salaryMin)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " -"
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
            <div v-if="job.specialization && job.specialization != 'null'">
              <div class="icon">
                <Fa icon="syringe" size="lg" />
              </div>
              {{ job.specialization }}
            </div>
            <div>
              <div class="icon">
                <Fa :icon="['fas', 'clock']" size="lg" />
              </div>
              {{
                job.paid
                  ? timeSince(new Date(job.publishedAt || job.paidAt))
                  : "-"
              }}
            </div>
            <div
              v-if="job.applicationDeadline"
              :class="
                new Date(job.applicationDeadline) < new Date()
                  ? 'text-danger'
                  : ''
              "
            >
              <div class="icon">
                <Fa :icon="['fas', 'calendar-times']" size="lg" />
              </div>
              bis
              {{ new Date(job.applicationDeadline).toLocaleDateString() }}
            </div>
            <div v-if="job.simpleApplication" id="tooltip-simple-application">
              <BBadge style="cursor: pointer" pill variant="secondary">
                <Fa class="mr-1" :icon="['fas', 'hashtag']" />
                Einfach bewerben</BBadge
              >
            </div>
            <BTooltip
              v-if="job.simpleApplication"
              target="tooltip-simple-application"
              title="Lebenslauf genügt für Bewerbung"
              triggers="hover"
              placement="bottom"
            >
            </BTooltip>
          </div>
        </div>
      </div>

      <hr />

      <div class="position-relative d-flex align-items-center my-4">
        <StarJob
          :job-id="job._id"
          position="relative"
          padding="0 20px 0 0"
          size="2x"
        />
        <SubscribeNewsletterBtn :state="job.company.state" />
        <div
          v-if="$store.state.auth.user.isAdmin"
          class="border-radius1 bg-light-shade ml-3 py-2 px-3"
        >
          <Fa
            style="cursor: pointer"
            class="text-info"
            icon="share-alt"
            size="lg"
            @click="socialShareToClipBoard(job)"
          />
          <b-link :to="`/admin/jobs/edit/${job._id}`">
            <Fa
              style="cursor: pointer"
              class="text-info ml-3"
              icon="edit"
              size="lg"
            />
          </b-link>
          <b-link
            :href="
              `https://developers.facebook.com/tools/debug/?q=https://www.mfa-mal-anders.de/stellenangebote/job/${job._id}`
            "
            target="_blank"
          >
            <Fa
              style="cursor: pointer"
              class="text-info ml-3"
              :icon="['fab', 'facebook-square']"
              size="lg"
            />
          </b-link>
        </div>
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
          class="blur position-absolute w-100"
          :src="job.imageUrl"
        />

        <b-img
          class="title-img"
          :src="job.imageUrl"
          fluid
          center
          :alt="`Image - ${job.company && job.company.name}`"
        />
      </div>
      <!-- eslint-disable-next-line -->
      <div class="mt-4" v-html="job.description"></div>
      <div v-if="job.company.url" class="mt-3">
        <b-link
          ref="nofollow"
          :href="job.company.url"
          target="_blank"
          @click="
            track(
              'apply_visit_hp',
              `${job.title} | ${job.company.name} - ${job._id}`
            )
          "
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
          :href="
            job.extJobUrl ||
              `mailto:${job.applicationEmail}?subject=Bewerbung - ${job.title} über ${$config.website.name}`
          "
          target="_blank"
          @click="
            track(
              'apply_now',
              `${job.title} | ${job.company.name} - ${job._id}`
            )
          "
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
          to="/stellenangebote"
          >Zurück zur Stellenbörse</b-button
        >
        <b-button
          class="mr-2 mt-2"
          variant="outline-primary"
          size="sm"
          to="/karriere/mfa/gehalt"
          >Gehaltsrechner</b-button
        >
        <b-button
          class="mr-2 mt-2"
          variant="outline-primary"
          size="sm"
          to="/karriere/bewerbungstipps"
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
            {{ job.contactGender != "null" ? job.contactGender + " " : "" }}
            {{ job.contactTitle != "null" ? job.contactTitle + " " : "" }}
            {{ job.contactFirstName + " " + job.contactLastName }}
            <br v-if="job.contactPosition" />
            {{ job.contactPosition }}
            <br />
          </div>
          <div v-if="job.contactPhone">
            Telefon:
            <b-link
              :href="`tel:${job.contactPhone}`"
              target="_blank"
              @click="
                track(
                  'apply_phone',
                  `${job.title} | ${job.company.name} - ${job._id}`
                )
              "
              >{{ job.contactPhone }}</b-link
            >
            <br />
          </div>
          <div v-if="job.contactEmail || job.applicationEmail">
            E-Mail:
            <b-link
              :href="
                `mailto:${job.contactEmail || job.applicationEmail}?subject=${
                  job.title
                } über ${$config.website.name}`
              "
              target="_blank"
              @click="
                track(
                  'apply_email',
                  `${job.title} | ${job.company.name} - ${job._id}`
                )
              "
              >{{ job.contactEmail || job.applicationEmail }}</b-link
            >
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h2>Arbeitsort</h2>
        <p>
          {{ job.company.name }} <br v-if="job.company.name" />
          {{ job.company.street }} <br v-if="job.company.street" />
          {{ job.company.zipCode + " " + job.company.location }}
          <br />
        </p>
        <HereMapSingleJob
          v-if="job.company && job.company.geoCodeLat && job.company.geoCodeLng"
          :job="job"
        />
      </div>
      <div class="d-flex flex-wrap flex-column flex-md-row align-items-center">
        <StarJob
          class="ml-3 ml-md-0 mb-2"
          :job-id="job._id"
          position="relative"
          padding="0 20px 0 0"
          size="2x"
        />
        <FacebookShareBtn
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
        />
        <WhatsAppShareBtn
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
        />
        <TwitterShareBtn
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
          :title="job.title"
        />
        <EmailShareBtn
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
          :subject="job.title"
        />
      </div>
    </article>

    <SimilarJobsContainer :job="job" :number="5" />

    <RandomTrainingsContainer :number="3" class="mt-4 mt-lg-5" />

    <Head
      :title="
        `${job.title} | ${
          job.employmentType
            ? employmentTypeOptions.filter(
                option => option.value === job.employmentType
              )[0].text
            : ''
        } | ${job.company.location}`
      "
      :desc="
        `Stellenangebot – ${job.title} | ${job.company.name} | ${
          job.employmentType
            ? employmentTypeOptions.filter(
                option => option.value === job.employmentType
              )[0].text
            : ''
        } | ${job.company.location}${
          job.company.state != job.company.location
            ? ', ' + job.company.state
            : ''
        }`
      "
      :img="
        job.imageUrl && !job.imageUrl.includes('.svg')
          ? job.imageUrl
          : job.company.logoUrl && !job.company.logoUrl.includes('.svg')
          ? job.company.logoUrl
          : job.profession === 'ZFA'
          ? '/img/MfaMalAnders_NeuesStellenangebot_ZFA_1200.jpg'
          : '/img/MfaMalAnders_NeuesStellenangebot_MFA_1200.jpg'
      "
      :twitter-card="
        job.imageUrl && !job.imageUrl.includes('.svg')
          ? 'summary_large_image'
          : job.company.logoUrl && !job.company.logoUrl.includes('.svg')
          ? 'summary'
          : 'summary_large_image'
      "
      :script="snippet"
      :link="link"
    />
    <JobStructuredData :job="job" />
  </div>

  <div v-else>
    <p class="h5">
      Diese Stellenanzeige scheint nicht (mehr) zu existieren.
    </p>
    <b-button class="mt-3" variant="outline-primary" to="/stellenangebote"
      >Zurück zur Stellenübersicht</b-button
    >
  </div>
</template>

<script>
  import textToSlug from "@/utils/textToSlug.js";
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
  import JobPlaceholder from "@/components/ui/JobPlaceholder.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  import { BTooltip, BBadge } from "bootstrap-vue";
  import RandomTrainingsContainer from "@/components/containers/RandomTrainingsContainer.vue";
  import Vue from "vue";
  Vue.component("BTooltip", BTooltip);
  Vue.component("BBadge", BBadge);
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
      StarJob,
      JobPlaceholder,
      JobCardPlaceholder,
      RandomTrainingsContainer
    },
    props: { apiJobsSchema: { type: String, default: "private" } },
    data() {
      return {
        job: Object,
        error: false,
        employmentTypeOptions,
        companySizeOptions,
        // snippet: [
        //   {
        //     type: "application/ld+json",
        //     inner: `{
        //       "@context": "http://schema.org",
        //       "@type" : "BreadcrumbList",
        //       "itemListElement": [
        //         {
        //             "@type": "ListItem",
        //             "position": 1,
        //             "name": "MFA mal anders",
        //             "item": "https://www.mfa-mal-anders.de"
        //         },
        //         {
        //             "@type": "ListItem",
        //             "position": 2,
        //             "name": "Stellenangebote",
        //             "item": "https://www.mfa-mal-anders.de/stellenangebote"
        //         },
        //         {
        //             "@type": "ListItem",
        //             "position": 3,
        //             "name": "Stellenangebot",
        //             "item": "https://www.mfa-mal-anders.de${this.$route.fullPath}"
        //         }
        //       ]
        //     }`
        //   }
        // ],
        link: [
          {
            id: "mapsjs-ui",
            rel: "stylesheet",
            href: "https://js.api.here.com/v3/3.1/mapsjs-ui.css",
            type: "text/css"
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
      },
      snippet: function() {
        return [
          {
            id: "breadcrumbs",
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
                    "item": "https://www.mfa-mal-anders.de/stellenangebote"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Stellenangebot",
                    "item": "https://www.mfa-mal-anders.de/stellenangebote/job/${
                      this.job._id
                    }/${textToSlug(
              this.job.title + " in " + this.job.company.location
            )}"
                }
              ]
            }`
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}job/${this.job._id}`
          }
        ];
      }
    },
    watch: {
      "$route.params.jobId"() {
        this.getJob(this.$route.params.jobId);
      }
    },
    created() {
      this.getJob(this.$route.params.jobId);
    },
    methods: {
      async getJob(jobId) {
        if (this.jobQuery === "publicJob") {
          try {
            const response = await this.$axios.get(
              `/api/public-jobs/job/${jobId}`
            );

            if (response.data.job) {
              this.job = response.data.job;
            } else {
              throw new Error();
            }
          } catch (err) {
            // this.error = true;

            this.$root.$bvToast.toast(
              "Diese Stellenanzeige ist nicht oder nicht mehr verfügbar.",
              {
                title: `Stellenanzeige nicht verfügbar`,
                variant: "warning",
                toaster: "b-toaster-bottom-right",
                solid: true,
                noAutoHide: true
              }
            );

            this.$router.push("/stellenangebote");
          }
        } else {
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
                      paidExpiresAt
                      title
                      description
                      profession
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
                      contactPosition
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
              this.$router.push("/stellenangebote");
              throw new Error();
            }
          } catch (err) {
            this.error = true;
          }
        }
      },
      track(eventAction, eventLabel) {
        this.$gtag.event(eventAction, {
          event_label: eventLabel
        });

        this.$matomo &&
          this.$matomo.trackEvent("engagement", eventAction, eventLabel);
      },
      socialShareToClipBoard(job) {
        let el = document.createElement("textarea");

        el.value = `${job.title} | ${job.company.location}\n\n${
          this.$config.website.url
        }/stellenangebote/job/${job._id}/${textToSlug(
          job.title,
          job.company.location
        )}\n\n#mfamalanders #mfa #arzthelfer #arzthelferin #mfajobs #${job.company.location
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
      },
      timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
          return (
            "vor " +
            Math.floor(interval) +
            " Jahr" +
            (Math.floor(interval) > 1 ? "en" : "")
          );
        }

        interval = seconds / (60 * 60 * 24 * 7);
        if (interval > 1) {
          return (
            "vor " +
            Math.floor(interval) +
            " Woche" +
            (Math.floor(interval) > 1 ? "n" : "")
          );
        }

        interval = seconds / 86400;
        if (interval > 1) {
          return (
            "vor " +
            Math.floor(interval) +
            " Tag" +
            (Math.floor(interval) > 1 ? "en" : "")
          );
        }

        return "heute";
      }
    }
  };
</script>

<style lang="scss" scoped>
  .job {
    padding: 3rem;
    box-shadow: $shadow1;
    border-radius: $border-radius1;

    @media screen and (max-width: $break-menu) {
      padding: 0;
      box-shadow: none;
      border-radius: none;
    }

    h1 {
      font-weight: bold;
    }

    .logo-container {
      background-color: $light;
      border-radius: $border-radius1;
      box-shadow: $shadow1;
      min-width: 100px;
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 767px) {
        min-width: 90px;
        min-height: 90px;
      }

      .logo {
        max-width: 80px;
        max-height: 80px;
        //   padding: 0.5rem;

        @media screen and (max-width: 767px) {
          max-width: 70px;
          max-height: 70px;
        }
      }
    }

    .head {
      display: flex;
      flex-wrap: wrap;

      & > div {
        margin-right: 2rem;
        margin-top: 0.275rem;
        margin-bottom: 0.275rem;
        color: transparentize($primary, $amount: 0.1);
        display: flex;
        align-items: flex-start;

        .icon {
          min-width: 40px;
          display: flex;
          justify-content: center;
          align-items: flex-start;

          svg {
            margin-right: 0.5rem;
          }
        }
      }

      .badge {
        font-size: inherit;
        font-weight: inherit;
        color: $light;
        padding: 0.3rem 0.7rem;
      }
    }

    .title-img {
      max-height: 35vh;
      border-radius: $border-radius1;
    }

    .blur {
      filter: blur(8px) opacity(0.3);
    }
  }
</style>
