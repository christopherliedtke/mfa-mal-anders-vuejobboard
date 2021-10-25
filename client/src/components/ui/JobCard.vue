<template>
  <article v-if="job" class="jobcard">
    <div
      v-if="disabled"
      class="disabled-jobcard d-flex justify-content-center align-items-center"
    >
      <span class="h2 bold text-danger">Abgelaufen</span>
    </div>
    <b-link
      :to="
        job.source != 'stepstone'
          ? `/stellenangebote/job/${job._id}/${textToSlug(
              job.title + ' in ' + job.company.location
            )}${job.userId.isAdmin ? '' : '_dsa'}`
          : undefined
      "
      :href="job.source === 'stepstone' ? job.extJobUrl : undefined"
      :target="job.source != 'stepstone' ? '_self' : '_blank'"
    >
      <div
        :class="['card', compact ? 'mb-2 mt-2 mt-lg-0' : 'mb-3 mt-3 mt-lg-0']"
      >
        <div class="card-text">
          <div class="card-head position-relative">
            <!-- eslint-disable -->
            <h2
              :class="[
                'h4',
                { 'mobile-max-width-75': job.company.logoUrl && !compact }
              ]"
              :style="
                compact
                  ? 'font-size:1rem; padding: 0.75rem; text-overflow: ellipsis; width: 95%; overflow: hidden; white-space: nowrap'
                  : ''
              "
              v-html="job.title"
            ></h2>
            <!-- eslint-enable -->
            <StarJob :job-id="job._id" />
            <div v-if="job.company.logoUrl && !compact" class="img-container">
              <b-img-lazy
                fluid
                :src="job.company.logoUrl"
                :alt="`Logo - ${job.company.name}`"
                height="70"
                blank-width="70"
                blank-height="70"
                offset="500"
              />
            </div>
          </div>
          <div v-if="!compact" class="card-content">
            <!-- eslint-disable -->
            <div
              v-html="
                job.description.replace(/<[^>]+>/g, ' ').substring(0, 200) +
                  '...'
              "
            ></div>
            <!-- eslint-enable -->
          </div>
          <hr v-if="!compact" />
          <div
            class="card-foot"
            :style="compact ? 'font-size:0.85rem; padding: 0.7rem' : ''"
          >
            <div v-if="job.company.name">
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'building']" size="lg" />
              </div>
              <!-- eslint-disable-next-line -->
              <span v-html="job.company.name"></span>
            </div>
            <div v-if="job.company.location">
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'map-marker']" size="lg" />
              </div>
              {{ job.company.location }}
            </div>
            <div v-if="job.employmentType">
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'briefcase']" size="lg" />
              </div>
              {{
                employmentTypeOptions.filter(
                  option => option.value === job.employmentType
                )[0].text
              }}
            </div>

            <div v-if="!compact && (job.salaryMin || job.salaryMax)">
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
            <div
              v-if="
                !compact && job.specialization && job.specialization != 'null'
              "
            >
              <div class="icon">
                <Fa class="mr-2" icon="syringe" size="lg" />
              </div>
              {{ job.specialization }}
            </div>
            <div v-if="job.publishedAt || job.paidAt">
              <div class="icon">
                <Fa class="mr-2" :icon="['fas', 'clock']" size="lg" />
              </div>
              {{ timeSince(new Date(job.publishedAt || job.paidAt)) }}
            </div>
            <div v-if="job.simpleApplication">
              <div class="badge badge-pill badge-secondary">
                <Fa class="mr-1" :icon="['fas', 'hashtag']" />Einfach bewerben
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-link>
  </article>
</template>

<script>
  import textToSlug from "@/utils/textToSlug.js";
  import {
    employmentTypeOptions,
    companySizeOptions
  } from "@/config/formDataConfig.json";
  import StarJob from "@/components/utils/starJob";
  export default {
    name: "JobCard",
    components: { StarJob },
    props: {
      job: { type: Object, default: () => {} },
      compact: { type: Boolean, default: false }
    },
    data() {
      return {
        employmentTypeOptions,
        companySizeOptions,
        textToSlug
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

<style lang="scss" scoped>
  .jobcard {
    position: relative;

    .disabled-jobcard {
      cursor: not-allowed;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 5;
      border-radius: $border-radius1;
      background-color: #ffffffcc;
      // backdrop-filter: grayscale(1);
    }

    a {
      color: $dark;
      transition: $transition1;

      &:hover {
        color: $primary;
      }
    }

    .card {
      border: none;
      background-color: $light-shade;
      box-shadow: $shadow1;
      transition: $transition1;

      &:hover {
        box-shadow: $shadow2;
      }

      hr {
        margin: 0;
      }

      .card-head {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        background-color: lighten($primary, $amount: 0%);
        color: $light;
        border-radius: 5px 5px 0 0;
        overflow: hidden;

        .h4 {
          margin: 0;
          padding: 1rem;

          &.mobile-max-width-75 {
            @media screen and (max-width: $break-menu) {
              max-width: 75%;
            }
          }
        }

        .img-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: darken($light-shade, $amount: 1%);
          padding: 1rem 1rem;
          width: 130px;
          min-width: 130px;
          border-radius: 0 5px 0 0;

          @media screen and (max-width: $break-menu) {
            width: 90px;
            min-width: 90px;
            padding: 2rem 0;
          }

          img {
            max-height: 70px;
            max-width: 80%;
          }
        }
      }

      .card-content {
        padding: 1rem;
      }

      .card-foot {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 1rem;

        & > div {
          margin-top: 0.5rem;
          margin-right: 1rem;
          color: transparentize($primary, $amount: 0.1);
          display: flex;
          align-items: flex-start;

          .icon {
            min-width: 35px;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            svg {
              margin-right: 1rem;
            }
          }

          // svg {
          //   color: $primary;
          // }
        }

        .badge {
          font-size: inherit;
          font-weight: inherit;
          color: $light;
          padding: 0.3rem 0.7rem;

          svg {
            color: $light;
          }
        }
      }
    }
  }
</style>
