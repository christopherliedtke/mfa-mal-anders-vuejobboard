<template>
  <div class="gehaltsrechner p-4 border-radius2 shadow1">
    <h3 class="bold">
      ZFA Gehaltsrechner {{ year }}&nbsp;
      <div id="popover-zfa-gehaltsrechner" class="d-inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-info-circle-fill text-light"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          />
        </svg>
      </div>
      <b-popover
        target="popover-zfa-gehaltsrechner"
        triggers="hover"
        placement="bottom"
      >
        Der Gehaltsrechner gibt Dir eine erste grobe Richtung für Dein zu
        erwartendes Grundgehalt als Zahnmedizinische Fachangestellte vor.
        Wichtige weitere Faktoren sind die tatsächliche Verantwortung, die du
        übernimmst, der Standort (Bundesland etc.), aber beispielsweise auch die
        Größe der Praxis. Du erhältst weitere Informationen zur noch besseren
        Einschätzung im folgenden Text und im Gehaltstarifvertrag des AAZ.
      </b-popover>
    </h3>
    <p>
      Gib Deine Daten ein und erhalte Dein Gehalt entsprechend des
      Gehaltstarifvertrags* {{ year }} für Zahnmedizinische Fachangestellte
      (ZFA) / ZahnarzthelferInnen in Voll- oder Teilzeit. <br />
      <span class="small">(Stand 2022 | gültig ab 01.07.2022) </span>
    </p>
    <b-form>
      <label for="years-of-experience" class="sr-only">Berufsjahre</label>
      <b-form-select
        id="years-of-experience"
        v-model="form.yearsOfExperience"
        class="mt-2"
        :options="yearsOfExperienceOptions"
      ></b-form-select>
      <label for="hours-of-training" class="sr-only"
        >Umfang absolvierter Fortbildungsmaßnahmen</label
      >
      <b-form-select
        id="hours-of-training"
        v-model="form.hoursOfEducation"
        class="mt-2"
        :options="hoursOfEducationOptions"
      ></b-form-select>
      <label class="mt-4" for="range-1">Deine Wochenarbeitsstunden</label>
      <b-form-input
        id="range-1"
        v-model="form.workingHours"
        type="range"
        min="0"
        max="40"
        step="0.5"
      ></b-form-input>
      <label for="weekly-working-hours" class="sr-only"
        >Deine Wochenarbeitsstunden</label
      >
      <b-form-input
        id="weekly-working-hours"
        v-model="form.workingHours"
        type="number"
        min="0"
        max="40"
        step="0.5"
      >
      </b-form-input>
      <hr />
      <h4>Dein monatliches Grundgehalt (brutto)</h4>

      <label for="monthly-salary" class="sr-only"
        >Dein Monatliches Grundgehalt</label
      >
      <b-input-group prepend="€" class="mb-2">
        <b-form-input
          id="monthly-salary"
          v-model="salary"
          disabled
          type="number"
        ></b-form-input>
      </b-input-group>

      <p class="small">
        entspricht einem Stundenlohn von
        {{
          salaryPerHour
            .toFixed(2)
            .toString()
            .replace(".", ",")
        }}
        €/h
      </p>
    </b-form>
    <p class="small mt-4 source">
      <span>
        *Quelle:
        <a
          href="https://www.vmf-online.de/zfa/zfa-tarife"
          target="_blank"
          rel="noopener"
          >Gehaltstarifvertrag 2022 für Zahnmedizinische Fachangestellte (ZFA) –
          AAZ (2022)</a
        >
      </span>
    </p>
    <JobSeekButton size="sm" block />
  </div>
</template>

<script>
  import { BPopover } from "bootstrap-vue";
  import Vue from "vue";
  import JobSeekButton from "@/components/JobSeekButton.vue";
  Vue.component("BPopover", BPopover);
  export default {
    name: "TheSalaryCalculatorZfa",
    components: { JobSeekButton },
    data() {
      return {
        form: {
          yearsOfExperience: null,
          hoursOfEducation: null,
          workingHours: 38.89
        },
        year: new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 45
        ).getFullYear(),
        yearsOfExperienceOptions: [
          {
            value: null,
            text: "Anzahl Berufsjahre*..."
          },
          {
            value: 2221,
            text: "1 bis 3"
          },
          {
            value: 2302,
            text: "4 bis 6"
          },
          {
            value: 2414.5,
            text: "7 bis 9"
          },
          {
            value: 2499,
            text: "10 bis 12"
          },
          {
            value: 2576.5,
            text: "13 bis 15"
          },
          {
            value: 2650.5,
            text: "16 bis 18"
          },
          {
            value: 2724.5,
            text: "19 bis 21"
          },
          {
            value: 2798,
            text: "22 bis 24"
          },
          {
            value: 2872,
            text: "25 bis 27"
          },
          {
            value: 2929.5,
            text: "ab 28"
          }
        ],
        hoursOfEducationOptions: [
          {
            value: null,
            text: "Absolvierter Umfang an Fortbildungsmaßnahmen*..."
          },
          {
            value: 1,
            text: "< 65h Fortbildungen"
          },
          {
            value: 1.075,
            text: ">= 65h Fortbildungen"
          },
          {
            value: 1.175,
            text: ">= 200h Fortbildungen"
          },
          {
            value: 1.25,
            text: "Abschluss als ZMF/ZMP/ZMV/AZP"
          },
          {
            value: 1.3,
            text: "Abschluss als DH / BetriebswirtIn"
          }
        ]
      };
    },
    computed: {
      salary() {
        return (
          Math.round(
            ((this.form.yearsOfExperience *
              this.form.hoursOfEducation *
              this.form.workingHours *
              4.345) /
              169) *
              100
          ) / 100
        );
      },
      salaryPerHour() {
        return (
          Math.round(
            ((this.form.yearsOfExperience * this.form.hoursOfEducation) / 169) *
              100
          ) / 100
        );
      }
    }
  };
</script>

<style lang="scss" scoped>
  .gehaltsrechner {
    background-color: $primary;
    color: $light;

    h3 > div {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: relative;
      top: -10px;
      width: 18px;
      height: 18px;

      svg {
        font-size: 11px;
      }
    }

    input[type="range"]::-webkit-slider-thumb {
      background: $secondary;
    }

    hr {
      margin-top: 3rem;
      background-color: $light;
    }

    a {
      color: transparentize($light, $amount: 0.2);
    }
  }
</style>
