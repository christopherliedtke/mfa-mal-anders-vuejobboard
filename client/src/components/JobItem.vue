<template>
  <div v-if="job">
    <article class="job position-relative" style="word-break: break-word">
      <div class="mb-4 d-flex align-items-start justify-content-between">
        <div>
          <!-- eslint-disable-next-line -->
          <h1 v-html="job.title"></h1>
          <span class="lead">
            <b-link
              class="text-muted"
              :to="`/unternehmen/${job.company._id}/${job.company.slug}`"
            >
              <!-- eslint-disable-next-line -->
              <span v-html="job.company.name"></span>
            </b-link>
            |
            <b-link
              class="text-muted"
              :to="
                `/?ort=${job.company.location.toLowerCase().replace(' ', '-')}`
              "
              >{{ job.company.location
              }}{{
                job.company.state && job.company.state != job.company.location
                  ? ", " + job.company.state
                  : ""
              }}</b-link
            ></span
          >
        </div>
        <b-link
          v-if="job.company && job.company.logoUrl"
          :to="`/unternehmen/${job.company._id}/${job.company.slug}`"
          class="d-none d-sm-flex logo-container mx-2"
        >
          <b-img
            class="logo"
            :src="job.company.logoUrl"
            :alt="`Logo - ${job.company.name}`"
          />
        </b-link>
      </div>

      <JobItemAdminPanel v-if="$store.state.auth.user.isAdmin" :job="job" />

      <hr />

      <div>
        <div
          class="d-flex flex-lg-nowrap justify-content-between align-items-start"
        >
          <b-link
            v-if="job.company && job.company.logoUrl"
            :to="`/unternehmen/${job.company._id}/${job.company.slug}`"
            class="d-sm-none logo-container mr-1 ml-2 ml-sm-0 mr-sm-4 mb-3 mb-lg-0 order-2 order-sm-1"
          >
            <b-img
              class="logo"
              :src="job.company.logoUrl"
              :alt="`Logo - ${job.company.name}`"
            />
          </b-link>
          <div class="head flex-column flex-sm-row order-1 order-sm-2">
            <b-link
              v-if="job.employmentType"
              :to="`/?employmentType=${job.employmentType}`"
            >
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"
                  />
                </svg>
              </div>
              {{
                employmentTypeOptions.find(
                  option => option.value === job.employmentType
                ).text
              }}
            </b-link>
            <div v-if="job.company.size">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>

              {{ job.company.size }}
            </div>
            <div v-if="job.salaryMin || job.salaryMax">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-currency-euro"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"
                  />
                </svg>
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
            <b-link
              v-if="job.specialization && job.specialization != 'null'"
              :to="`/?fachgebiet=${job.specialization.toLowerCase()}`"
            >
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-activity"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                  />
                </svg>
              </div>
              {{ job.specialization }}
            </b-link>
            <div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-megaphone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"
                  />
                </svg>
              </div>
              {{
                job.status == "published"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar2-x-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"
                  />
                </svg>
              </div>
              bis
              {{ new Date(job.applicationDeadline).toLocaleDateString() }}
            </div>
            <div v-if="job.simpleApplication" id="tooltip-simple-application">
              <div
                style="cursor: pointer"
                class="badge badge-pill badge-secondary"
              >
                # Einfach bewerben
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="position-relative d-flex align-items-center my-4">
        <StarJob
          :job-id="job._id"
          position="relative"
          padding="0 20px 0 0"
          :size="2"
        />
        <NewsletterSignUpModal :state="job.company.state" />
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
          :alt="
            `Bild von ${job.company && job.company.name} zu ${job.title}${
              job.company ? ' in ' + job.company.location : ''
            }`
          "
        />

        <b-img
          class="title-img"
          :src="job.imageUrl"
          fluid
          center
          :alt="
            `Bild von ${job.company && job.company.name} zu ${job.title}${
              job.company ? ' in ' + job.company.location : ''
            }`
          "
        />
      </div>
      <!-- eslint-disable-next-line -->
      <div id="job-description" class="mt-4" v-html="job.description"></div>
      <div v-if="job.company.url" class="mt-3">
        <b-link
          ref="nofollow"
          :href="job.company.url"
          target="_blank"
          @click="
            track(
              'job_visit_website',
              `${job.title} | ${job.company.name} - ${job._id}`
            )
          "
          ><strong
            >Besuchen Sie unsere Homepage
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              style="position: relative; top: -5px"
              class="bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg> </strong
        ></b-link>
      </div>
      <div class="mt-3">
        <b-link :to="`/unternehmen/${job.company._id}/${job.company.slug}`"
          >Unternehmensprofil –
          <!-- eslint-disable-next-line -->
          <span class="mr-1" v-html="job.company.name"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            style="position: relative; top: -5px"
            class="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            /></svg
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
            job.applicationEmail
              ? `mailto:${job.applicationEmail}?subject=Bewerbung - ${job.title} über ${$config.website.name}`
              : job.extJobUrl
          "
          target="_blank"
          @click="
            track(
              'job_apply',
              `${job.title} | ${job.company.name} - ${job._id}`
            )
          "
          >Jetzt
          {{ job.simpleApplication ? "nur mit Lebenslauf" : "" }}
          bewerben</b-button
        >
      </div>
      <div class="my-3">
        <b-button class="mr-2 mt-2" variant="outline-primary" size="sm" to="/"
          >Zurück zu Stellenangeboten</b-button
        >
        <b-button
          class="mr-2 mt-2"
          variant="outline-primary"
          size="sm"
          :to="`/karriere/${job.profession === 'ZFA' ? 'zfa' : 'mfa'}/gehalt`"
          >{{ job.profession === "ZFA" ? "ZFA" : "MFA" }} Gehalt |
          Gehaltsrechner</b-button
        >
        <b-button
          class="mr-2 mt-2"
          variant="outline-primary"
          size="sm"
          to="/karriere/bewerbung"
          >Bewerbungsvorlage</b-button
        >
        <JobSeekButton size="sm" class="mt-3" />
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
                  'job_phone',
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
                  'job_mail',
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
          <b-link :to="`/unternehmen/${job.company._id}/${job.company.slug}`">{{
            job.company.name
          }}</b-link>
          <br v-if="job.company.name" />
          {{ job.company.street }} <br v-if="job.company.street" />
          {{ job.company.zipCode + " " + job.company.location }}
          <br />
        </p>
        <MapJobSingle
          v-if="job.company && job.company.geoCodeLat && job.company.geoCodeLng"
          :job="job"
          class="mt-4 mb-5"
        />
      </div>
      <div class="d-flex flex-wrap flex-column flex-md-row align-items-center">
        <StarJob
          class="ml-3 ml-md-0 mb-2"
          :job-id="job._id"
          position="relative"
          padding="0 20px 0 0"
          :size="2"
        />
        <SocialButtonFacebookShare
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
        />
        <SocialButtonWhatsAppShare
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
        />
        <SocialButtonTwitterShare
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
          :title="job.title"
        />
        <SocialButtonEmailShare
          class="mr-0 mr-md-2 mb-2"
          :share-path="$route.fullPath"
          :subject="job.title"
        />
      </div>
    </article>

    <Head :link="link" />
  </div>
</template>

<script>
  import {
    employmentTypeOptions,
    companySizeOptions
  } from "@/config/formDataConfig.json";
  import StarJob from "@/components/StarJob";
  import MapJobSingle from "@/components/MapJobSingle.vue";
  import SocialButtonFacebookShare from "@/components/SocialButtonFacebookShare.vue";
  import SocialButtonWhatsAppShare from "@/components/SocialButtonWhatsAppShare.vue";
  import SocialButtonEmailShare from "@/components/SocialButtonEmailShare.vue";
  import SocialButtonTwitterShare from "@/components/SocialButtonTwitterShare.vue";
  import NewsletterSignUpModal from "@/components/NewsletterSignUpModal.vue";
  import { jobStructuredDataMixin } from "@/mixins/jobStructuredDataMixin.js";
  import JobSeekButton from "@/components/JobSeekButton.vue";
  const JobItemAdminPanel = () =>
    import(
      /* webpackChunkName: "JobItemAdminPanel" */ "@/components/JobItemAdminPanel.vue"
    );
  export default {
    name: "JobItem",
    components: {
      MapJobSingle,
      SocialButtonFacebookShare,
      SocialButtonWhatsAppShare,
      SocialButtonEmailShare,
      SocialButtonTwitterShare,
      NewsletterSignUpModal,
      JobItemAdminPanel,
      StarJob,
      JobSeekButton
    },
    mixins: [jobStructuredDataMixin],
    props: {
      job: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        employmentTypeOptions,
        companySizeOptions,
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
    methods: {
      track(eventAction, eventLabel) {
        this.$gtag.event(eventAction, {
          event_label: eventLabel
        });

        this.$matomo &&
          this.$matomo.trackEvent("engagement", eventAction, eventLabel);
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

      & > div,
      a {
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
