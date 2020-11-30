<template>
    <div class="gehaltsrechner p-4 border-radius2 shadow">
        <h3>
            Gehaltsrechner
            <div>
                <Fa
                    v-b-popover.hover.top="
                        'Der Gehaltsrechner gibt Dir eine erste grobe Richtung für Dein zu erwartendes Grundgehalt vor. Wichtige weitere Faktoren sind die tatsächliche Verantwortung, die du übernimmst, der Standort (Bundesland etc.), aber beispielsweise auch die Größe der Praxis. Du erhältst weitere Informationen zur noch besseren Einschätzung im folgenden Text und im Gehaltstarifvertrag des AAA.'
                    "
                    icon="info"
                />
            </div>
        </h3>
        <p>
            Gib Deine Daten ein und erhalte Dein Gehalt entsprechend des
            aktuellen Gehaltstarifvertrags* für Medizinische Fachangestellte
            (MFA) / ArzthelferIn in Voll- oder Teilzeit (Stand 2020).
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
                href="https://www.bundesaerztekammer.de/fileadmin/user_upload/downloads/pdf-Ordner/MFA/AAA-GTV-MFA-2019.pdf"
                target="_blank"
                rel="noopener"
                >Aktueller Gehaltstarifvertrag für Medizinische Fachangestellte
                (MFA) / ArzthelferInnen – AAA (2019)</a
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
                        value: 1970.19,
                        text: "1 bis 4"
                    },
                    {
                        value: 2139.34,
                        text: "5 bis 8"
                    },
                    {
                        value: 2275.42,
                        text: "9 bis 12"
                    },
                    {
                        value: 2339.67,
                        text: "13 bis 16"
                    },
                    {
                        value: 2588.41,
                        text: "17 und mehr"
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
                        value: 1.5,
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
