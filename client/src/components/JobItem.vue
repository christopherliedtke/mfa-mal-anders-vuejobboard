<template>
  <div v-if="job">
    <article class="job position-relative text-break">
      <div class="mb-4 d-flex align-items-start justify-content-between">
        <div>
          <!-- eslint-disable-next-line -->
          <h1 v-html="job.title"></h1>
          <span class="lead">
            <b-link
              v-if="job.company._id"
              class="text-muted"
              :to="`/unternehmen/${job.company._id}/${job.company.slug}`"
            >
              <!-- eslint-disable-next-line -->
              <span v-html="job.company.name"></span>
            </b-link>
            <!-- eslint-disable-next-line -->
            <span v-else class="text-muted" v-html="job.company.name"></span>
            |
            <span v-if="job.company.noLocation" class="text-muted"
              >Deutschlandweit</span
            >
            <b-link
              v-else
              class="text-muted"
              :to="`/stellenangebote/${job.company.location}`"
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
            <div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                </svg>
              </div>
              {{ job.employmentTypeFull }}
            </div>
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
            <div v-if="job.specialization">
              <div class="icon">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
                    class=""
                  ></path>
                </svg>
              </div>
              {{ job.specialization }}
            </div>
            <div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                  />
                </svg>
              </div>
              {{ job.timeSincePublished || "–" }}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                  />
                  <path
                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                  />
                </svg>
                Kurzbewerbung
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
        v-if="job.videoUrl"
        class="position-relative d-flex justify-content-center bg-light-shade border-radius1"
      >
        <video
          :src="job.videoUrl"
          class="border-radius1 mw-100 h-auto"
          width="560"
          height="315"
          autobuffer
          controls
        ></video>
      </div>

      <div
        v-else-if="job.imageUrl"
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
      <h2 class="sr-only">Stellenbeschreibung</h2>
      <!-- eslint-disable-next-line -->
      <div id="job-description" class="mt-4" v-html="job.description"></div>
      <div v-if="job.company.url" class="mt-3">
        <b-link
          rel="nofollow"
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

      <div
        v-if="job.videoUrl && job.imageUrl"
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

      <div v-if="job.company._id" class="mt-3">
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
          v-if="job.simpleApplication"
          size="lg"
          :to="`/kurzbewerbung/${job._id}`"
          class="mr-2 mb-2"
          :disabled="!$route.meta.public"
          rel="nofollow"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            /></svg
          >Bewerben in 2 Minuten</b-button
        >
        <b-button
          :size="job.simpleApplication ? 'sm' : 'lg'"
          :variant="job.simpleApplication ? 'outline-primary' : 'primary'"
          :href="
            job.extJobUrl ||
              `mailto:${job.applicationEmail}?subject=Bewerbung - ${job.title} über MFA mal anders`
          "
          target="_blank"
          class="mb-2"
          :disabled="!$route.meta.public"
          @click="
            track(
              'job_apply',
              `${job.title} | ${job.company.name} - ${job._id}`
            )
          "
        >
          {{ job.simpleApplication ? "Konventionell" : "Jetzt" }}
          bewerben</b-button
        >
      </div>
      <div class="my-3">
        <b-button
          class="mr-2 mt-2"
          variant="outline-primary"
          size="sm"
          to="/stellenangebote"
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
        <h2><strong>Kontakt für Bewerbungen</strong></h2>
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
                } über MFA mal anders`
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
        <h2><strong>Arbeitsort</strong></h2>
        <div>
          <b-link
            v-if="job.company._id"
            :to="`/unternehmen/${job.company._id}/${job.company.slug}`"
            class="d-block"
          >
            <!-- eslint-disable-next-line -->
            <span v-html="job.company.name"></span
          ></b-link>
          <!-- eslint-disable-next-line -->
          <span v-else class="d-block" v-html="job.company.name"></span>

          <div v-if="job.company.noLocation">
            <span>Deutschlandweit</span>
          </div>
          <div v-else>
            <span class="d-block">{{ job.company.street }} </span>
            <span class="d-block">{{
              job.company.zipCode + " " + job.company.location
            }}</span>
          </div>
          <br />
        </div>
        <b-btn
          v-if="
            !showMap &&
              job.company &&
              job.company.geoCodeLat &&
              job.company.geoCodeLng
          "
          class="mb-4"
          size="sm"
          variant="secondary"
          @click="showMap = !showMap"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill mr-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            /></svg
          >Karte anzeigen</b-btn
        >
        <MapJobSingle v-if="showMap" :job="job" class="mb-5" />
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
  </div>
</template>

<script>
  import StarJob from "@/components/StarJob";
  const MapJobSingle = () =>
    import(
      /* webpackChunkName: "MapJobSingle" */ "@/components/MapJobSingle.vue"
    );
  const JobItemAdminPanel = () =>
    import(
      /* webpackChunkName: "JobItemAdminPanel" */ "@/components/JobItemAdminPanel.vue"
    );
  import SocialButtonFacebookShare from "@/components/SocialButtonFacebookShare.vue";
  import SocialButtonWhatsAppShare from "@/components/SocialButtonWhatsAppShare.vue";
  import SocialButtonEmailShare from "@/components/SocialButtonEmailShare.vue";
  import SocialButtonTwitterShare from "@/components/SocialButtonTwitterShare.vue";
  import NewsletterSignUpModal from "@/components/NewsletterSignUpModal.vue";
  import JobSeekButton from "@/components/JobSeekButton.vue";
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
    props: {
      job: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        showMap: false
      };
    },
    mounted() {
      if (window) window.prerenderReady = true;
    },
    methods: {
      track(eventAction, eventLabel) {
        this.$gtag.event(eventAction, {
          event_label: eventLabel
        });

        if (eventAction === "job_apply") {
          this.$gtag.query("event", "conversion", {
            send_to: "AW-797795882/cM5pCJu31IoYEKrMtfwC"
          });
        }

        this.$matomo &&
          this.$matomo.trackEvent("engagement", eventAction, eventLabel);
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
        align-items: center;

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
