<template>
  <div class="jobboard">
    <div class="title">
      <h1>
        <strong>Stellenangebote</strong> <br />
        <span class="h4"
          >{{
            berufsgruppe.active.length > 0
              ? berufsgruppe.active.join(" & ")
              : ""
          }}
          Jobs {{ filter.ort ? " in " + filter.ort : "" }} gesucht –
          gefunden!</span
        >
      </h1>
      <b-breadcrumb :items="breadcrumbs" class="text-capitalize"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-4">
      <div class="row mt-2">
        <div class="col-12 col-lg-4 pt-2 px-2 pr-lg-5">
          <b-form
            id="job-filter"
            @submit.prevent="
              () => {
                getJobs();
                setQuery();
              }
            "
          >
            <label for="location-jobboard" class="sr-only">Ort / PLZ</label>
            <b-input-group class="mb-2 mr-2">
              <template #prepend>
                <b-input-group-text class="bg-secondary text-light border-0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                    /></svg
                ></b-input-group-text>
              </template>
              <b-form-input
                id="location-jobboard"
                v-model="filter.ort"
                type="text"
                placeholder="PLZ oder Ort..."
                trim
                lazy
                :formatter="capitalize"
              />
              <b-input-group-append>
                <b-button
                  aria-label="Zurücksetzen"
                  class="px-2"
                  @click.prevent="
                    () => {
                      filter.ort = '';
                      getJobs();
                      setQuery();
                    }
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    /></svg
                  ><span class="sr-only">Zurücksetzen</span></b-button
                >
              </b-input-group-append>
            </b-input-group>

            <label for="radius" class="sr-only">Umkreisradius</label>
            <b-input-group>
              <template #prepend>
                <b-input-group-text class="bg-secondary text-light border-0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bullseye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                    <path
                      d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    />
                    <path
                      d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    /></svg
                ></b-input-group-text>
              </template>
              <b-form-input
                id="radius"
                v-model="filter.radius"
                type="number"
                min="15"
                step="5"
                placeholder="Umkreis..."
                debounce="500"
                number
                trim
                lazy
              />
              <b-input-group-append>
                <b-input-group-text class="bg-light text-muted px-2"
                  >km</b-input-group-text
                >
                <b-button
                  aria-label="Zurücksetzen"
                  class="px-2"
                  @click.prevent="
                    () => {
                      filter.radius = null;
                      getJobs();
                      setQuery();
                    }
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    /></svg
                  ><span class="sr-only">Zurücksetzen</span></b-button
                >
              </b-input-group-append>
            </b-input-group>

            <div
              style="cursor: pointer"
              class="text-primary  mt-3 mb-2 ml-2"
              @click="showAdvancedSearch = !showAdvancedSearch"
            >
              Erweiterte Suche
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                :class="[
                  'bi bi-caret-right-fill animate ml-2 mb-1',
                  { 'rotate-90': showAdvancedSearch }
                ]"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                />
              </svg>
            </div>
            <b-collapse
              id="advanced-search"
              v-model="showAdvancedSearch"
              class="mb-3"
            >
              <label for="s-jobboard" class="sr-only">Suchbegriff</label>
              <b-input-group class="mb-2 mr-2">
                <template #prepend>
                  <b-input-group-text class="bg-secondary text-light border-0"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      /></svg
                  ></b-input-group-text>
                </template>
                <b-form-input
                  id="s-jobboard"
                  v-model="filter.s"
                  :class="filter.s ? 'border-secondary' : ''"
                  type="text"
                  placeholder="Suchbegriff..."
                  lazy
                />
                <b-input-group-append>
                  <b-button
                    aria-label="Zurücksetzen"
                    class="px-2"
                    @click.prevent="
                      () => {
                        filter.s = '';
                        getJobs();
                        setQuery();
                      }
                    "
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      /></svg
                    ><span class="sr-only">Zurücksetzen</span></b-button
                  >
                </b-input-group-append>
              </b-input-group>
              <label for="employmentType-jobboard" class="sr-only"
                >Anstellungsart</label
              >
              <b-input-group class="mb-2 mr-2">
                <template #prepend>
                  <b-input-group-text class="bg-secondary text-light border-0"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-briefcase-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"
                      /></svg
                  ></b-input-group-text>
                </template>
                <b-form-select
                  id="employmentType-jobboard"
                  v-model="filter.anstellungsart"
                  class=""
                  @change="
                    () => {
                      getJobs();
                      setQuery();
                    }
                  "
                >
                  <b-form-select-option :value="''"
                    >Alle Anstellungsarten</b-form-select-option
                  >
                  <b-form-select-option
                    v-for="type in employmentTypeOptions"
                    :key="type.value"
                    :value="type.value"
                    >{{ type.text }}</b-form-select-option
                  >
                </b-form-select>
              </b-input-group>

              <label for="profession-jobboard" class="mb-2 pl-2"
                >Berufsgruppe</label
              >
              <b-form-group id="profession-jobboard" class="pl-2">
                <b-form-checkbox-group
                  v-model="berufsgruppe.active"
                  class="ml-1"
                  :options="professionOptions"
                  size="sm"
                  stacked
                  @change="
                    () => {
                      getJobs();
                    }
                  "
                ></b-form-checkbox-group>
              </b-form-group>
              <label
                for="specialization-jobboard"
                style="cursor: pointer"
                class="mt-0 mb-2 pl-2"
                @click="specialization.visible = !specialization.visible"
                >Fachgebiete
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  :class="[
                    'bi bi-caret-right-fill animate ml-2 mb-1',
                    { 'rotate-90': specialization.visible }
                  ]"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                  />
                </svg>
              </label>
              <BCollapse
                :visible="specialization.visible === true"
                role="tabpanel"
              >
                <b-form-group id="specialization-jobboard" class="pl-2">
                  <template #label>
                    <b-form-checkbox
                      v-model="specialization.allSelected"
                      :indeterminate="specialization.indeterminate"
                      size="sm"
                      stacked
                      @change="toggleAll"
                    >
                      {{
                        specialization.allSelected
                          ? "Alle Abwählen"
                          : "Alle Auswählen"
                      }}
                    </b-form-checkbox>
                  </template>

                  <b-form-checkbox-group
                    v-model="specialization.active"
                    class="ml-1"
                    :options="
                      specializationOptions.map(specialization => {
                        return {
                          text: specialization,
                          value: specialization
                        };
                      })
                    "
                    size="sm"
                    stacked
                    @change="
                      () => {
                        getJobs();
                      }
                    "
                  ></b-form-checkbox-group>
                </b-form-group>
              </BCollapse>
            </b-collapse>

            <div>
              <span
                style="cursor: pointer"
                class="text-danger small ml-2"
                @click="resetFilter"
                >Filter zurücksetzen</span
              >
            </div>
            <div class="mt-2">
              <b-button variant="success" type="submit" block
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  /></svg
                >Jobs finden</b-button
              >
            </div>
          </b-form>
          <div class="small text-right mt-2 mb-2 pr-3 pt-1">
            <b-link to="/fuer-arbeitgeber">Stellenanzeige schalten</b-link>
          </div>
          <div class="mt-3 mt-lg-5 text-right text-lg-left">
            <b-button
              v-if="
                $config.starredJobs.active &&
                  $store.state.auth.loggedIn &&
                  $store.state.starredJobs.starredJobs &&
                  $store.state.starredJobs.starredJobs.length > 0
              "
              to="/user/gespeicherte-stellenanzeigen"
              variant="outline-secondary"
              size="sm"
              >Meine gespeicherten Jobs</b-button
            >
            <SubscribeNewsletterBtn
              v-else
              class="mt-2 mr-1 d-flex justify-content-end justify-content-lg-start"
              size="sm"
              variant="secondary"
            />
          </div>

          <div class="d-none d-lg-block mt-5">
            <!-- <TrainingCatalogueSmallBanner /> -->
            <JobSeeksSmallBanner />
            <FacebookBtn class="mt-3 mr-1" content="Facebook" size="sm" />
            <InstagramBtn class="mt-3 mr-1" content="" size="sm" />
            <TwitterBtn class="mt-3 mr-1" content="" size="sm" />
          </div>
        </div>
        <div class="col-12 col-lg-8 pt-2">
          <div v-if="errors && errors.length > 0">
            <p v-for="(error, index) in errors" :key="index">
              {{ error.message }}
            </p>
          </div>

          <div v-else-if="!jobs">
            <JobCardPlaceholder v-for="index in 25" :key="index" class="mb-3" />
          </div>

          <div v-else-if="jobs.length > 0" class="position-relative">
            <JobCard v-for="job in jobs" :key="job._id" :job="job" />
          </div>

          <div v-else-if="count === 0">
            Leider konnten für die Anfrage aktuell keine Stellenangebote
            gefunden werden.
          </div>

          <div class="d-flex justify-content-center">
            <button
              v-if="jobs && jobs.length < count"
              class="btn btn-secondary"
              @click="loadMoreJobs()"
            >
              Weitere Laden
            </button>
            <BSpinner
              v-else-if="loading"
              variant="primary"
              label="Lade weitere Stellenanzeigen..."
            ></BSpinner>
          </div>

          <div class="my-4 clearfix">
            <h2 class="h5 bold mb-3">Ihre Stellenanzeige hier?</h2>
            <b-img
              style="max-width: 120px"
              class="mr-3 mb-2"
              fluid
              left
              src="~@/assets/img/undraw_Updates_re_o5af.svg"
              alt="Stellenanzeige wird auf MFA mal anders veröffentlicht"
            />
            <p>
              Sie sind als attraktiver Arbeitergeber auf der Suche nach einer
              motivierten und kompetenten
              <em
                >Medizinischen Fachangestellten (MFA) | Zahnmedizinischen
                Fachangestellten (ZFA) | ArzthelferIn</em
              >{{
                $route.query.ort || $route.query.state
                  ? ` in ${$route.query.ort || $route.query.state}`
                  : ""
              }}? Dann
              <b-link to="/auth/register" class="bold">registrieren</b-link>
              Sie sich und schalten noch heute Ihre Stellenanzeige auf unserem
              Karriereportal. <br />
              <b-link to="/fuer-arbeitgeber" class="bold">Mehr erfahren</b-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <JobSeeksLargeBanner class="mt-2 mt-lg-3" />
      <TrainingCatalogueSmallBanner class="d-lg-none mt-3" />
    </div>

    <div class="container-fluid bg-light-shade my-4 my-lg-5 px-0">
      <div class="container py-4 py-lg-5">
        <h2 class="lead bold">
          {{
            berufsgruppe.active.some(str => str == "MFA")
              ? "Medizinische Fachangestellte"
              : ""
          }}
          {{ berufsgruppe.active.length > 1 ? " & " : "" }}
          {{
            berufsgruppe.active.some(str => str == "ZFA")
              ? "Zahnmedizinische Fachangestellte"
              : ""
          }}
          &ndash; Stellenangebote nach Stadt
        </h2>
        <ul class="list-group list-group-flush mb-4">
          <li
            v-for="city in cities"
            :key="city.slug"
            class="list-group-item bg-light-shade"
          >
            <b-link
              :to="
                `/stellenangebote/ort/${city.slug}${
                  berufsgruppe.active.length == 1
                    ? '?berufsgruppe=' + berufsgruppe.active[0]
                    : ''
                }`
              "
              @click="
                () => {
                  filter.ort = city.name;
                  getJobs();
                }
              "
              >{{
                berufsgruppe.active.length > 0
                  ? berufsgruppe.active.join(" & ")
                  : "MFA & ZFA"
              }}
              Jobs in {{ city.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                /></svg
            ></b-link>
          </li>
        </ul>

        <h2 class="lead bold mt-4">
          Auf der Suche nach Stellenangeboten für Medizinische Fachangestellte
          (MFA) | Zahnmedizinische Fachangestellte (ZFA)?
        </h2>
        <p>
          Stellenangebote für Medizinische Fachangestellte und Zahnmedizinische
          Fachangestellte gibt es im Internet zur Genüge. Wenn Du als MFA & ZFA
          einen neuen Job suchst, könntest Du in kürzester Zeit einen neuen
          Arbeitsplatz antreten. Nicht nur die Arztpraxen und Zahnarztpraxen,
          auch andere Arbeitgeber im Gesundheitswesen suchen händeringend nach
          Personal und haben viele attraktive Stellenangebote für Medizinische
          Fachangestellte und Zahnmedizinische Fachangestellte zu bieten. Mit
          unseren
          <router-link
            to="/blog/artikel/4-tipps-wie-du-die-richtige-stelle-fuer-Dich-findest"
            ><strong
              >4 Tipps, wie Du die richtige Stelle für Dich findest</strong
            ></router-link
          >
          zeigen wir Dir, worüber Du Dir im Vorhinein Gedanken machen und worauf
          Du bei der Stellensuche achten solltest.
        </p>
        <p>
          Auf MFA mal anders findest Du passende Jobs für Medizinische
          Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) von
          attraktiven Arbeitergebern in ganz Deutschland. Hier findest Du
          Stellenangebote in Vollzeit und Teilzeit in verschiedenen
          Fachgebieten. Außerdem hast Du die Möglichkeit, als ein
          <router-link to="/stellengesuche/info" class="bold"
            >Stellengesuch als MFA | ZFA</router-link
          >
          zu schalten und Dich von passenden Arbeitgebern ansprechen zu lassen.
        </p>

        <h2 class="lead bold mt-4">
          Gehalt für Medizinische Fachangestellte (MFA) | Zahnmedizinische
          Fachangestellte (ZFA)
        </h2>
        <p>
          In unserem großen
          <router-link to="/karriere/mfa/gehalt" class="bold"
            >Gehaltsreport für MFA</router-link
          >
          oder
          <router-link to="/karriere/zfa/gehalt" class="bold">ZFA</router-link>
          bekommst Du alle relevanten Informationen zu Gehaltstarifverträgen,
          Gehalt nach Bundesländern, Gehalt in Teilzeit oder Vollzeit und noch
          viel mehr. Zusätzlich kannst Du mit dem
          <router-link to="/karriere/mfa/gehalt#gehaltsrechner" class="bold"
            >Gehaltsrechner für MFA</router-link
          >
          bzw. dem
          <router-link to="/karriere/zfa/gehalt#gehaltsrechner" class="bold"
            >Gehaltsrechner für ZFA</router-link
          >
          herausfinden, wie viel Gehalt Dir laut aktuellem Tarifvertrag im Jahr
          {{ new Date().getFullYear() }} mindestens zusteht.
        </p>

        <h2 class="lead bold mt-4">
          Häufige Fragen
        </h2>
        <h3 class="lead">
          Welche Aufgaben hat man im Job als MFA?
        </h3>
        <p>
          Je nachdem, wie eine Praxis organisiert ist sowie Praxisgröße und
          Fachrichtung, werden MFAs als Allrounder eingesetzt und erledigen
          quasi alle anfallenden Aufgaben in der Praxis. Neben der
          Sprechstundenorganisation und Patientenbetreuung, gibt es zahlreiche
          Tätigkeiten für eine MFA, die für den Patienten nicht ersichtlich
          sind. Der Beruf vereint bürokratische, organisatorische und
          medizinische Aufgaben. Mehr erfährst Du in unserem Artikel über
          <router-link to="/karriere/mfa/ausbildung-berufsbild" class="bold"
            >Ausbildung und Berufsbild für Medizinische
            Fachangestellte</router-link
          >.
        </p>
        <h3 class="lead">
          Welche Weiterbildungen kann man als MFA | ZFA machen?
        </h3>
        <p>
          Als MFA | ZFA hast Du vielerlei Möglichkeiten Fortbildungen,
          Weiterbildungen bis hin zu einem Studium abzuschließen, um Deine
          Jobmöglichkeiten und Karriereperspektiven zu erweitern. In unserer
          großen
          <router-link class="bold" to="/karriere/fort-und-weiterbildung"
            >Übersicht an Fortbildungen, Weiterbildungen & Studium</router-link
          >
          findest Du verschiedenste Alternativen, bei denen auch für Dich
          sicherlich etwas dabei ist.
        </p>
        <h3 class="lead">
          Welche alternativen Jobmöglichkeiten und Arbeitsorte gibt es für MFA &
          ZFA?
        </h3>
        <p>
          In unserer Liste von
          <router-link to="/karriere/jobs-und-berufsbilder" class="bold"
            >50+ Alternativen Jobs und Berufsbildern</router-link
          >
          findest Du eine Reihe von interessanten Möglichkeiten für MFA und ZFA.
          Von der Medizinischen Fachangestellten bei der Polizei, über die
          Arbeit als MFA | ZFA beim Gesundheitsamt bis hin zur Arbeit als
          SachbearbeiterIn bei einer Krankenkasse und viele weitere mehr, ist
          einiges dabei.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row mt-5 mb-3">
        <div class="col-12 col-lg-8 mb-4">
          <TrainingCatalogueLargeBanner />
        </div>
        <div class="col-12 col-lg-4 mb-4">
          <BerufsbilderBanner />
        </div>
      </div>

      <div class="mt-5 mb-4">
        <p class="small">
          Stellenangebote, Stellen, Jobs, Jobangebote für Medizinische
          Fachangestellte (MFA), Arzthelferin, Zahnmedizinische Fachangestellte
          (ZFA), ZMF, ZMV, MTRA in
          <span v-for="(state, index) in companyStateOptions" :key="state">
            <b-link
              :to="`/stellenangebote/ort/${state.toLowerCase()}`"
              @click="
                () => {
                  filter.ort = state;
                  getJobs();
                }
              "
              >{{ state }}</b-link
            ><span v-if="index < companyStateOptions.length - 1">, </span></span
          >.
        </p>
      </div>
    </div>

    <ScrollToTopBtn />

    <Head
      :title="
        `Stellenangebote für ${berufsgruppe.active.join(' & ')} | Jobs${
          filter.ort ? ' in ' + filter.ort : ''
        }`
      "
      :desc="
        `Jobs für ${
          berufsgruppe.active.includes('MFA')
            ? 'Medizinische Fachangestellte (MFA)'
            : ''
        }${
          berufsgruppe.active.includes('MFA') &&
          berufsgruppe.active.includes('ZFA')
            ? ' & '
            : ''
        }${
          berufsgruppe.active.includes('ZFA')
            ? 'Zahnmedizinische Fachangestellte (ZFA)'
            : ''
        }${
          filter.ort ? ' in ' + filter.ort + ' & Umgebung' : ''
        } ✓ Teilzeit | Vollzeit – MFA mal anders Stellenbörse`
      "
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ScrollToTopBtn from "@/components/buttons/ScrollToTopBtn.vue";
  import Vue from "vue";
  import { BSpinner, BCollapse } from "bootstrap-vue";
  Vue.component("BSpinner", BSpinner);
  Vue.component("BCollapse", BCollapse);

  import {
    employmentTypeOptions,
    companyStateOptions,
    specializationOptions,
    professionOptions
  } from "@/config/formDataConfig.json";
  import textToSlug from "@/utils/textToSlug.js";

  import JobCard from "@/components/ui/JobCard.vue";
  import JobCardPlaceholder from "@/components/ui/JobCardPlaceholder.vue";
  import FacebookBtn from "@/components/buttons/FacebookBtn.vue";
  import InstagramBtn from "@/components/buttons/InstagramBtn.vue";
  import TwitterBtn from "@/components/buttons/TwitterBtn.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import TrainingCatalogueSmallBanner from "@/components/banners/TrainingCatalogueSmallBanner.vue";
  import TrainingCatalogueLargeBanner from "@/components/banners/TrainingCatalogueLargeBanner.vue";
  import JobSeeksLargeBanner from "@/components/banners/JobSeeksLargeBanner.vue";
  import JobSeeksSmallBanner from "@/components/banners/JobSeeksSmallBanner.vue";
  import SubscribeNewsletterBtn from "@/components/buttons/SubscribeNewsletterBtn.vue";

  const cities = [
    { name: "Berlin", slug: "berlin" },
    { name: "Bochum", slug: "bochum" },
    { name: "Bonn", slug: "bonn" },
    { name: "Bremen", slug: "bremen" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Essen", slug: "essen" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Hamburg", slug: "hamburg" },
    { name: "Hannover", slug: "hannover" },
    { name: "Köln", slug: "koeln" },
    { name: "München", slug: "muenchen" },
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Wuppertal", slug: "wuppertal" }
  ];

  export default {
    name: "Jobboard",
    components: {
      JobCard,
      JobCardPlaceholder,
      FacebookBtn,
      InstagramBtn,
      TwitterBtn,
      BerufsbilderBanner,
      TrainingCatalogueSmallBanner,
      TrainingCatalogueLargeBanner,
      JobSeeksLargeBanner,
      JobSeeksSmallBanner,
      SubscribeNewsletterBtn,
      ScrollToTopBtn
    },
    data() {
      return {
        jobs: null,
        count: 0,
        loading: false,
        filter: {
          s: "",
          anstellungsart: "",
          ort: "",
          radius: null
        },
        specialization: {
          active: specializationOptions,
          visible: false,
          allSelected: true,
          indeterminate: false
        },
        berufsgruppe: {
          active: this.$route.query.berufsgruppe
            ? typeof this.$route.query.berufsgruppe === "object"
              ? this.$route.query.berufsgruppe
              : [this.$route.query.berufsgruppe]
            : professionOptions.map(profession => profession.value)
        },
        showAdvancedSearch: false,
        employmentTypeOptions: Object.freeze(employmentTypeOptions),
        companyStateOptions: Object.freeze(companyStateOptions),
        specializationOptions: Object.freeze(specializationOptions),
        professionOptions: Object.freeze(professionOptions),
        cities: Object.freeze(cities),
        errors: null
      };
    },
    computed: {
      snippet() {
        return [
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
                "@context": "http://schema.org",
                "@type" : "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "MFA mal anders",
                    "item": "https://www.mfa-mal-anders.de"
                },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Stellenangebote",
                    "item": "https://www.mfa-mal-anders.de/stellenangebote"
                }${
                  this.filter.ort
                    ? ',{"@type": "ListItem","position": 3,"name": "' +
                      this.filter.ort +
                      '","item": "https://www.mfa-mal-anders.de/stellenangebote/ort/' +
                      this.filter.ort.toLowerCase() +
                      '"}'
                    : ""
                }]
              }`
          },
          {
            rel: "canonical",
            href: `${
              this.$config.website.url
            }/stellenangebote${this.getCanonical()}`,
            id: "canonical"
          }
        ];
      },
      breadcrumbs() {
        const breadcrumbs = [
          { text: "Home", to: "/" },
          { text: "Stellenangebote", to: "/stellenangebote" }
        ];

        if (this.filter.ort) {
          breadcrumbs.push({
            text: this.filter.ort,
            to: `/stellenangebote/ort/${this.filter.ort.toLowerCase()}`
          });
        }

        return breadcrumbs;
      }
    },
    watch: {
      "specialization.active"(newValue) {
        if (newValue.length === 0) {
          this.specialization.indeterminate = false;
          this.specialization.allSelected = false;
        } else if (newValue.length === this.specializationOptions.length) {
          this.specialization.indeterminate = false;
          this.specialization.allSelected = true;
        } else {
          this.specialization.indeterminate = true;
          this.specialization.allSelected = false;
        }
      },
      "berufsgruppe.active"() {
        this.setQuery();
      }
    },
    async created() {
      this.setFilter();
      this.getJobs();
    },
    methods: {
      async getJobs(limit = null, skip = null) {
        if (this.loading == true) {
          return;
        }

        this.loading = true;
        this.errors = null;
        this.jobs = skip ? this.jobs : null;

        try {
          const jobs = await this.$axios.get("/graphql", {
            params: {
              query: `
                query {
                  publicJobs (
                    limit: ${limit}
                    skip: ${skip}
                    s: "${this.filter.s}"
                    location: "${this.filter.ort}"
                    radius: ${
                      Number.isInteger(this.filter.radius)
                        ? this.filter.radius
                        : null
                    }
                    employmentType: "${this.filter.anstellungsart}",
                    specialization: "${
                      this.specialization.active.length ===
                      this.specializationOptions.length
                        ? ""
                        : typeof this.specialization.active === "object"
                        ? this.specialization.active.join("+")
                        : this.specialization.active
                    }"
                    profession: "${
                      this.berufsgruppe.active.length ===
                      this.professionOptions.length
                        ? ""
                        : typeof this.berufsgruppe.active === "object"
                        ? this.berufsgruppe.active.join("+")
                        : this.berufsgruppe.active
                    }"
                  ) {
                    jobs {
                      _id
                      title
                      excerpt
                      profession
                      employmentType
                      specialization
                      salaryMin
                      salaryMax
                      slug
                      refreshFrequency
                      company {
                        name
                        location
                        logoUrl
                      }
                    }
                    count
                  }
                }
              `
            }
          });

          if (jobs.data.errors) {
            if (
              jobs.data.errors.some(
                error => error.extensions.argumentName == "location"
              )
            ) {
              this.errors = jobs.data.errors;
              this.loading = false;
              return;
            }

            throw new Error();
          }

          this.jobs = [...(this.jobs || ""), ...jobs.data.data.publicJobs.jobs];
          this.count = jobs.data.data.publicJobs.count;
        } catch (err) {
          this.$root.$bvToast.toast(
            `Beim Laden der Stellenangebote ist ein Fehler aufgetreten. Bitte versuche die Seite neu zu laden.`,
            {
              title: `Fehler beim Laden`,
              variant: "danger",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );
        }

        this.loading = false;
      },
      async loadMoreJobs() {
        if (this.jobs && this.jobs.length < this.count) {
          await this.getJobs(undefined, this.jobs.length);
        }
      },
      setQuery() {
        const query = {
          ...this.filter,
          ort: textToSlug(this.filter.ort),
          berufsgruppe:
            typeof this.berufsgruppe.active === "object" &&
            this.berufsgruppe.active.length === this.professionOptions.length
              ? ""
              : this.berufsgruppe.active
        };

        for (const key in query) {
          if (!query[key]) {
            delete query[key];
          }
        }

        this.$router
          .replace({
            query,
            path: "/stellenangebote"
          })
          .catch(() => {});
      },
      setFilter() {
        this.filter = {
          s: this.$route.query.s || "",
          anstellungsart: this.$route.query.anstellungsart || "",
          ort: this.capitalize(
            `${this.$route.params.location || this.$route.query.ort || ""}${
              this.$route.query.state ? " " + this.$route.query.state : ""
            }`
          ).replace(/-/g, " "),
          radius: parseInt(this.$route.query.radius) || null
        };

        if (this.$route.query.fachgebiet) {
          const specialization = this.specializationOptions.find(
            elem => elem.toLowerCase() == this.$route.query.fachgebiet
          );

          this.specialization = {
            active: [specialization],
            visible: true,
            allSelected: false,
            indeterminate: true
          };
        }

        if (
          this.$route.query.s ||
          this.$route.query.anstellungsart ||
          this.$route.query.berufsgruppe ||
          this.$route.query.fachgebiet
        ) {
          this.showAdvancedSearch = true;
        }
      },
      toggleAll(checked) {
        this.specialization.active = checked
          ? this.specializationOptions.slice()
          : [];
        this.getJobs();
      },
      resetFilter() {
        this.filter = {
          s: "",
          anstellungsart: "",
          ort: "",
          radius: null
        };

        this.specialization = {
          active: this.specializationOptions,
          visible: false,
          allSelected: true,
          indeterminate: false
        };

        this.berufsgruppe.active = this.professionOptions.map(
          profession => profession.value
        );

        this.setQuery();
        this.getJobs();
      },
      capitalize(value) {
        return value.replace(/(^[a-z]| [a-z]|-[a-z])/g, letter =>
          letter.toUpperCase()
        );
      },
      getCanonical() {
        let canonical = "";
        const location =
          this.$route.params.location ||
          this.$route.query.ort ||
          this.$route.query.state;

        if (location) {
          canonical += "/ort/" + textToSlug(location);
        }

        if (this.$route.query.berufsgruppe) {
          canonical += "?berufsgruppe=" + this.$route.query.berufsgruppe;
        }

        return canonical;
      }
    }
  };
</script>

<style lang="scss">
  .jobboard {
    input,
    .input-group,
    select {
      min-width: 100%;
      max-width: 100%;
    }

    .job-list {
      a {
        color: unset;
        transition: linear 0.1s;

        &:hover {
          text-decoration: unset;
          color: $primary;
        }
      }
    }

    #specialization-jobboard,
    #profession-jobboard {
      & .custom-control-label {
        justify-content: flex-start;
        margin-top: 0;
      }
    }
  }
</style>
