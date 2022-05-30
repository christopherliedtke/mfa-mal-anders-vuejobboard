<template>
  <article v-if="job" class="jobcard">
    <!-- <div
      v-if="disabled"
      class="disabled-jobcard d-flex justify-content-center align-items-center"
    >
      <span class="h2 bold text-danger">Abgelaufen</span>
    </div> -->
    <b-link :to="`/stellenangebote/job/${job._id}/${job.slug}`" target="_self">
      <div
        :class="['card', compact ? 'mb-2 mt-2 mt-lg-0' : 'mb-3 mt-3 mt-lg-0']"
      >
        <div class="card-text">
          <div
            :class="[
              'card-head position-relative',
              `${
                job.refreshFrequency && job.refreshFrequency <= 7
                  ? 'bg-secondary'
                  : 'bg-primary'
              }`
            ]"
          >
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
          <div v-if="!compact && job.excerpt" class="card-content">
            <p class="mb-0">{{ job.excerpt }}</p>
          </div>
          <hr v-if="!compact" />
          <div
            class="card-foot"
            :style="compact ? 'font-size:0.85rem; padding: 0.7rem' : ''"
          >
            <div v-if="job.company.name">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :width="18 + !compact * 2"
                  :height="18 + !compact * 2"
                  fill="currentColor"
                  class="bi bi-building"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                  />
                  <path
                    d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                  />
                </svg>
              </div>
              <!-- eslint-disable-next-line -->
              <span v-html="job.company.name"></span>
            </div>
            <div v-if="job.company.location">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :width="18 + !compact * 2"
                  :height="18 + !compact * 2"
                  fill="currentColor"
                  class="bi bi-geo-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                  />
                </svg>
              </div>
              {{ job.company.location }}
            </div>
            <div v-if="job.employmentType">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :width="18 + !compact * 2"
                  :height="18 + !compact * 2"
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
            </div>

            <div v-if="!compact && (job.salaryMin || job.salaryMax)">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :width="18 + !compact * 2"
                  :height="18 + !compact * 2"
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
            <div
              v-if="
                !compact && job.specialization && job.specialization != 'null'
              "
            >
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :width="18 + !compact * 2"
                  :height="18 + !compact * 2"
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
            </div>
            <div v-if="job.simpleApplication">
              <div class="badge badge-pill badge-secondary">
                # Einfach bewerben
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-link>
  </article>
</template>

<script>
  import {
    employmentTypeOptions,
    companySizeOptions
  } from "@/config/formDataConfig.json";
  import StarJob from "@/components/StarJob";
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
        companySizeOptions
      };
    }
    // computed: {
    //   disabled() {
    //     return (
    //       (this.job.applicationDeadline &&
    //         new Date(this.job.applicationDeadline) < new Date()) ||
    //       this.job.status != "published" ||
    //       this.job.paidExpiresAt < new Date()
    //     );
    //   }
    // }
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
        // background-color: lighten($primary, $amount: 0%);
        color: $light;
        border-radius: 5px 5px 0 0;
        overflow: hidden;

        .h4 {
          margin: 0;
          padding: 1rem;
          line-height: 1.3;

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
              margin-right: 0.5rem;
            }
          }
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
