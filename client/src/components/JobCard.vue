<template>
  <article v-if="job" class="jobcard">
    <!-- <div
      v-if="disabled"
      class="disabled-jobcard d-flex justify-content-center align-items-center"
    >
      <span class="h2 bold text-danger">Abgelaufen</span>
    </div> -->
    <!-- <b-link :to="`/job/${job._id}/${job.slug}`" target="_self"> -->
    <div :class="['card', compact ? 'mb-2 mt-2 mt-lg-0' : 'mb-3 mt-3 mt-lg-0']">
      <div class="card-text">
        <div
          :class="[
            'card-head',
            `${
              job.refreshFrequency && job.refreshFrequency <= 7
                ? 'bg-secondary'
                : 'bg-primary'
            }`
          ]"
        >
          <b-link
            :to="`/job/${job._id}/${job.slug}`"
            :aria-label="job.title"
            target="_self"
            :class="[
              'text-reset stretched-link',
              { 'mr-3': !job.company.logoUrl || compact }
            ]"
            :style="compact ? 'max-width: 95%' : ''"
          >
            <!-- eslint-disable -->
            <h2
              :class="[
                'h4 text-break',
                {'text-truncate': compact}
              ]"
              :style="
                compact
                  ? 'font-size:1rem; padding: 0.75rem;'
                  : ''
              "
              v-html="job.title"
            ></h2>
          </b-link>
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
                class="bi bi-hospital"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"
                />
                <path
                  d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"
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
                class="bi bi-clock-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
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
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                :width="18 + !compact * 2"
                :height="18 + !compact * 2"
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
          <div v-if="job.simpleApplication">
            <div class="badge badge-pill badge-secondary">
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
    <!-- </b-link> -->
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
          font-weight: 500;

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
