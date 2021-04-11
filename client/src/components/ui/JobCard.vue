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
              <Fa class="mr-2" :icon="['fas', 'map-marker']" size="lg" />
              {{
                job.company.state != job.company.location
                  ? `${job.company.location}, ${job.company.state}`
                  : job.company.location
              }}
            </div>
            <div>
              <Fa class="mr-2" :icon="['fas', 'building']" size="lg" />
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
              <Fa class="mr-2" :icon="['fas', 'calendar-alt']" size="lg" />
              Veröffentlicht:
              {{
                new Date(
                  parseInt(job.publishedAt || job.paidAt)
                ).toLocaleDateString()
              }}
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
              <Fa class="mr-2" icon="briefcase-medical" size="lg" />
              {{ job.specialization }}
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
          new Date(this.job.applicationDeadline) < new Date() ||
          this.job.status != "published" ||
          this.job.paidExpiresAt < new Date()
        );
      }
    }
  };
</script>
