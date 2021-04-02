<template>
    <div class="gehaltsrechner p-4 border-radius2 shadow1">
        <h3>
            Gehaltsrechner
            <div>
                <Fa
                    v-b-popover.hover.top="
                        'Der Gehaltsrechner gibt Dir eine erste grobe Richtung für Dein zu erwartendes Grundgehalt als Medizinische Fachangestellte vor. Wichtige weitere Faktoren sind die tatsächliche Verantwortung, die du übernimmst, der Standort (Bundesland etc.), aber beispielsweise auch die Größe der Praxis. Du erhältst weitere Informationen zur noch besseren Einschätzung im folgenden Text und im Gehaltstarifvertrag des AAA.'
                    "
                    icon="info"
                />
            </div>
        </h3>
        <p>
            Gib Deine Daten ein und erhalte Dein Gehalt entsprechend des
            Gehaltstarifvertrags* 2021 für Medizinische Fachangestellte (MFA) /
            ArzthelferIn in Voll- oder Teilzeit. <br />
            <span class="small">(Stand 2021 | gültig ab 01.01.2021) </span>
        </p>
        <b-form>
            <b-form-select
                class="mt-2"
                v-model="form.yearsOfExperience"
                :options="yearsOfExperienceOptions"
            ></b-form-select>
            <b-form-select
                class="mt-2"
                v-model="form.hoursOfEducation"
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
                type="number"
                min="0"
                max="40"
                step="0.5"
                v-model="form.workingHours"
            >
            </b-form-input>
            <hr />
            <h4>Dein monatliches Grundgehalt (brutto)</h4>

            <b-input-group prepend="€">
                <b-form-input
                    disabled
                    type="number"
                    v-model="salary"
                ></b-form-input>
            </b-input-group>
        </b-form>
        <p class="small mt-4 source">
            *Quelle:
            <a
                href="https://www.vmf-online.de/mfa/mfa-tarife"
                target="_blank"
                rel="noopener"
                >Gehaltstarifvertrag 2021 für Medizinische Fachangestellte (MFA)
                / ArzthelferInnen – AAA (2021)</a
            >
        </p>
    </div>
</template>

<script>
    export default {
        name: "Gehaltsrechner",
        data() {
            return {
                form: {
                    yearsOfExperience: null,
                    hoursOfEducation: null,
                    workingHours: 38.5
                },
                yearsOfExperienceOptions: [
                    {
                        value: null,
                        text: "Anzahl Berufsjahre..."
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
                            100
                    ) / 100
                );
            }
        }
    };
</script>
