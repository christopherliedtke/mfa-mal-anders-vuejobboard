<template>
  <div class="gehaltsrechner p-4 border-radius2 shadow1">
    <h3 class="bold">
      MFA Gehaltsrechner {{ year }}&nbsp;
      <div id="popover-mfa-gehaltsrechner" class="d-inline-block">
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
        target="popover-mfa-gehaltsrechner"
        triggers="hover"
        placement="bottom"
      >
        Der Gehaltsrechner gibt Dir eine erste grobe Richtung für Dein zu
        erwartendes Grundgehalt (exkl. Sonderzahlungen) als Medizinische
        Fachangestellte vor. Wichtige weitere Faktoren sind die tatsächliche
        Verantwortung, die Du übernimmst, der Standort (Bundesland etc.), aber
        beispielsweise auch die Größe der Praxis. Du erhältst weitere
        Informationen zur noch besseren Einschätzung im folgenden Text und im
        Gehaltstarifvertrag des AAA.
      </b-popover>
    </h3>
    <p>
      Gib Deine Daten ein und erhalte Dein Gehalt entsprechend des
      Gehaltstarifvertrags* für {{ year }} für Medizinische Fachangestellte
      (MFA) / ArzthelferIn in Voll- oder Teilzeit. <br />
      <span class="small">(Stand 2021 | gültig ab 01.01.{{ year }}) </span>
    </p>
    <b-form>
      <label for="applicable-year" class="sr-only">Jahr</label>
      <b-form-select
        id="applicable-year"
        v-model="year"
        class="mt-2"
        :options="[
          { text: 'Jahr 2022', value: 2022 },
          { text: 'Jahr 2023', value: 2023 }
        ]"
      ></b-form-select>
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
      *Quelle: Gehaltstarifvertrag 2021 für Medizinische Fachangestellte (MFA) /
      ArzthelferInnen – AAA (2021)
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
    name: "TheSalaryCalculatorMfa",
    components: { JobSeekButton },
    data() {
      return {
        form: {
          yearsOfExperience: null,
          hoursOfEducation: null,
          workingHours: 38.5
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
            value: 2088.4,
            text: "1 bis 4"
          },
          {
            value: 2267.7,
            text: "5 bis 8"
          },
          {
            value: 2411.95,
            text: "9 bis 12"
          },
          {
            value: 2480.05,
            text: "13 bis 16"
          },
          {
            value: 2743.71,
            text: "17 bis 20"
          },
          {
            value: 2793.71,
            text: "21 bis 24"
          },
          {
            value: 2843.71,
            text: "25 bis 28"
          },
          {
            value: 2893.71,
            text: "29 und mehr"
          }
        ],
        hoursOfEducationOptions: [
          {
            value: null,
            text: "Absolvierter Umfang an Fortbildungsmaßnahmen*..."
          },
          {
            value: 1,
            text: "< 40h"
          },
          {
            value: 1.075,
            text: ">= 40h"
          },
          {
            value: 1.125,
            text: ">= 80h"
          },
          {
            value: 1.2,
            text: ">= 120h"
          },
          {
            value: 1.3,
            text:
              ">= 360h (eine Fortbildung mind. à 120h und weitere mind. à 40h in den letzten 5 Jahren)"
          },
          {
            value: 1.45,
            text: "Eine Fortbildungsmaßnahme mind. à 600h"
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
              4.33) /
              167) *
              1.03 *
              (100 + (this.year - 2022) * 2.6001255)
          ) / 100
        );
      },
      salaryPerHour() {
        return (
          Math.round(
            ((this.form.yearsOfExperience * this.form.hoursOfEducation) / 167) *
              1.03 *
              (100 + (this.year - 2022) * 2.6001255)
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
      position: relative;
      top: -5px;
      // width: 18px;
      // height: 18px;

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
