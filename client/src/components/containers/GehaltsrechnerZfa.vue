<template>
  <div class="gehaltsrechner p-4 border-radius2 shadow1">
    <h3>
      Gehaltsrechner
      <div id="popover-zfa-gehaltsrechner">
        <Fa icon="info" />
      </div>
      <b-popover
        target="popover-zfa-gehaltsrechner"
        triggers="hover"
        placement="top"
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
      Gehaltstarifvertrags* 2021 für Zahnmedizinische Fachangestellte (ZFA) /
      ZahnarzthelferInnen in Voll- oder Teilzeit. <br />
      <span class="small">(Stand 2021 | gültig ab 01.07.2021) </span>
    </p>
    <b-form>
      <b-form-select
        v-model="form.yearsOfExperience"
        class="mt-2"
        :options="yearsOfExperienceOptions"
      ></b-form-select>
      <b-form-select
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
      <b-form-input
        v-model="form.workingHours"
        type="number"
        min="0"
        max="40"
        step="0.5"
      >
      </b-form-input>
      <hr />
      <h4>Dein monatliches Grundgehalt (brutto)</h4>

      <b-input-group prepend="€">
        <b-form-input v-model="salary" disabled type="number"></b-form-input>
      </b-input-group>
    </b-form>
    <p class="small mt-4 source">
      <span>
        *Quelle:
        <a
          href="https://www.vmf-online.de/zfa/zfa-tarife"
          target="_blank"
          rel="noopener"
          >Gehaltstarifvertrag 2020 für Zahnmedizinische Fachangestellte (ZFA) –
          AAZ (2020)</a
        >
      </span>
    </p>
  </div>
</template>

<script>
  import { BPopover } from "bootstrap-vue";
  import Vue from "vue";
  Vue.component("BPopover", BPopover);
  export default {
    name: "GehaltsrechnerZfa",
    data() {
      return {
        form: {
          yearsOfExperience: null,
          hoursOfEducation: null,
          workingHours: 38.89
        },
        yearsOfExperienceOptions: [
          {
            value: null,
            text: "Anzahl Berufsjahre..."
          },
          {
            value: 2105,
            text: "1 bis 3"
          },
          {
            value: 2182,
            text: "4 bis 6"
          },
          {
            value: 2288.5,
            text: "7 bis 9"
          },
          {
            value: 2368.5,
            text: "10 bis 12"
          },
          {
            value: 2442,
            text: "13 bis 15"
          },
          {
            value: 2512,
            text: "16 bis 18"
          },
          {
            value: 2582,
            text: "19 bis 21"
          },
          {
            value: 2652,
            text: "22 bis 24"
          },
          {
            value: 2722,
            text: "25 bis 27"
          },
          {
            value: 2776.5,
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
      background-color: $light;
      color: $primary;
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
