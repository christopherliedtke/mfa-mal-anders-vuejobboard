<template>
  <article v-if="jobSeek" class="job-seek">
    <div class="row mb-4 mb-lg-5">
      <div class="col-3 col-md-2 col-xl-2 order-2 order-md-1">
        <b-img-lazy
          v-if="jobSeek.imageUrl"
          :src="jobSeek.imageUrl"
          width="120"
          height="120"
          class="img-fluid rounded-circle shadow1 mr-md-2"
        />
        <b-img-lazy
          v-else
          src="/img/person-circle.svg"
          width="120"
          height="120"
          class="img-fluid rounded-circle shadow1 mr-md-2"
          style="opacity: 0.15"
        />
        <!-- <div v-else class="d-flex bg-light rounded-circle shadow1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div> -->
      </div>
      <div class="col-9 col-md-10 col-xl-10 order-1 order-md-2 pr-0">
        <h2
          class="h1 bold mb-1"
          style="overflow: hidden; word-wrap: break-word"
        >
          {{ jobSeek.title }}
        </h2>
        <p class="lead text-muted mb-0">
          {{ jobSeek.publicFirstName }} {{ jobSeek.publicLastName }}
        </p>
        <div class="meta mt-3">
          <div v-if="jobSeek.location" class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-geo-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
              />
            </svg>
            <span>{{ jobSeek.location }}</span>
          </div>
          <div v-if="jobSeek.isZfa" class="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="tooth"
              class="svg-inline--fa fa-tooth fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="18"
              height="18"
            >
              <path
                fill="currentColor"
                d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"
              ></path>
            </svg>
            <span>Abgeschlossene ZFA Ausbildung</span>
          </div>
          <div v-if="jobSeek.isMfa" class="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heartbeat"
              class="svg-inline--fa fa-heartbeat fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="18"
              height="18"
            >
              <path
                fill="currentColor"
                d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
              ></path>
            </svg>
            <span>Abgeschlossene MFA Ausbildung</span>
          </div>
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <!-- <svg
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
            </svg> -->
            <span>
              <span v-if="jobSeek.partTime">Teilzeit</span>
              <span v-if="jobSeek.fullTime"
                ><span v-if="jobSeek.partTime">&nbsp;| </span>Vollzeit</span
              >
              <span v-if="jobSeek.training"
                ><span v-if="jobSeek.fullTime">&nbsp;| </span>Ausbildung</span
              >
              <span v-if="jobSeek.miniJob"
                ><span v-if="jobSeek.training">&nbsp;| </span
                >450€&nbsp;Basis</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="bold">Über mich</h3>
      <!-- eslint-disable-next-line -->
      <div v-html="jobSeek.about"></div>
      <h3 class="bold">Meine Berufserfahrung</h3>
      <!-- eslint-disable-next-line -->
      <div v-html="jobSeek.experiences"></div>
      <div v-if="jobSeek.qualifications.length > 0">
        <h4 class="h5">Zusätzliche Qualifikationen & Weiterbildungen</h4>
        <ul>
          <li
            v-for="(qualification, index) in jobSeek.qualifications"
            :key="index"
          >
            {{ qualification }}
          </li>
        </ul>
      </div>
      <h3 class="bold">Gesuchte Aufgabenbereiche</h3>
      <!-- eslint-disable-next-line -->
      <div v-html="jobSeek.tasks"></div>
      <div v-if="jobSeek.salaryMin" class="mt-4 mt-lg-5">
        <p>
          Mein Gehaltswunsch:
          {{
            jobSeek.salaryMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          }}€
          <small class="text-muted">brutto, monatlich</small>
        </p>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-between mt-5">
      <b-button
        variant="outline-danger"
        class="mr-2"
        @click.prevent="$router.go(-1)"
      >
        Zurück
      </b-button>
      <b-button
        v-if="$store.state.auth.loggedIn"
        variant="secondary"
        to=""
        target="_self"
        :disabled="linkDisabled"
      >
        Jetzt Kontaktieren
      </b-button>
      <b-button
        v-else
        variant="secondary"
        to="/auth/login"
        target="_self"
        :disabled="linkDisabled"
      >
        Jetzt Anmelden und Kontaktieren
      </b-button>
    </div>
  </article>
</template>

<script>
  export default {
    name: "JobSeek",
    props: {
      jobSeek: {
        type: Object,
        default: null
      },
      linkDisabled: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  .job-seek {
    padding: 3rem;
    box-shadow: $shadow1;
    border-radius: $border-radius2;
    background-color: $light-shade;

    @media screen and (max-width: $break-menu) {
      padding: 0;
      box-shadow: none;
      border-radius: none;
      background-color: unset;
    }

    .meta {
      margin-top: 0.5rem;
      color: transparentize($primary, $amount: 0.1);
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      .icon {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: 1rem;
        margin-bottom: 0.5rem;

        svg {
          min-width: 20px;
          margin-right: 0.5rem;
        }
      }
    }
  }
</style>
