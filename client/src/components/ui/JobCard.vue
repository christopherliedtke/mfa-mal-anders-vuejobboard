<template>
  <div v-if="job" class="jobcard">
    <div
      v-if="disabled"
      class="disabled-jobcard d-flex justify-content-center align-items-center"
    >
      <span class="h2 bold text-danger">Abgelaufen</span>
    </div>
    <b-link :to="`/stellenangebote/job/${job._id}`">
      <b-card no-body class="mb-3 mt-3 mt-lg-0">
        <b-card-text>
          <div class="card-head position-relative">
            <h2 :class="job.company.logoUrl ? 'mobile-max-width-75 h4' : 'h4'">
              {{ job.title }}
            </h2>
            <StarJob :job-id="job._id" />
            <div v-if="job.company.logoUrl" class="img-container">
              <b-img-lazy
                :src="job.company.logoUrl"
                blank-src="/img/MfaMalAnders_logo_circle_dark.svg"
                :alt="`Logo - ${job.company.name}`"
              />
            </div>
          </div>
          <div class="card-content">
            <!-- eslint-disable -->
            <div
              v-html="
                $sanitize(job.description, {
                  allowedTags: [],
                  textFilter: function(text, tagName) {
                    return ' ' + text;
                  }
                }).substring(0, 200) + '...'
              "
            ></div>
            <!-- eslint-enable -->
          </div>
          <hr />
          <div class="card-foot">
            <div>
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'map-marker']" size="lg" />
              </div>
              {{
                job.company.state != job.company.location
                  ? `${job.company.location}, ${job.company.state}`
                  : job.company.location
              }}
            </div>
            <div>
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'building']" size="lg" />
              </div>
              {{ job.company.name }}
            </div>
            <div>
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'briefcase']" size="lg" />
              </div>
              {{
                employmentTypeOptions.filter(
                  option => option.value === job.employmentType
                )[0].text
              }}
            </div>

            <div v-if="job.salaryMin || job.salaryMax">
              <div class="icon">
                <Fa
                  class="mr-2"
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
                <Fa class="mr-2" icon="syringe" size="lg" />
              </div>
              {{ job.specialization }}
            </div>
            <div>
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'clock']" size="lg" />
              </div>
              {{ timeSince(new Date(parseInt(job.publishedAt || job.paidAt))) }}
            </div>
            <div
              v-if="job.simpleApplication"
              v-b-tooltip.bottom.hover
              title="Lebenslauf genügt für Bewerbung"
            >
              <b-badge pill variant="secondary"
                ><Fa class="mr-1" :icon="['fas', 'hashtag']" />Einfach
                bewerben</b-badge
              >
            </div>
          </div>
        </b-card-text>
      </b-card>
    </b-link>
  </div>
</template>

<script>
  import {
    employmentTypeOptions,
    companySizeOptions
  } from "@/config/formDataConfig.json";
  import StarJob from "@/components/utils/starJob";
  export default {
    name: "JobCard",
    components: { StarJob },
    props: { job: { type: Object, default: () => {} } },
    data() {
      return {
        employmentTypeOptions,
        companySizeOptions
      };
    },
    computed: {
      disabled() {
        return (
          (this.job.applicationDeadline &&
            new Date(this.job.applicationDeadline) < new Date()) ||
          this.job.status != "published" ||
          this.job.paidExpiresAt < new Date()
        );
      }
    },
    methods: {
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
