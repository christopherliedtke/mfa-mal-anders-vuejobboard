<template>
    <div class="job-form position-relative">
        <Overlay :show="showOverlay"> </Overlay>
        <b-form id="job-form">
            <label for="title">Titel *</label>
            <b-form-input
                type="text"
                v-model="job.title"
                :state="validated ? (job.title ? true : false) : null"
                id="title"
                placeholder="Titel der Stellenanzeige eingeben..."
                required
                trim
            />
            <div
                v-if="$store.state.auth.userRole === 'admin'"
                class="bg-light-shade border-radius1 p-3 mt-3"
            >
                <h6>ADMIN</h6>
                <label for="created">paidAt</label>
                <b-form-datepicker
                    v-model="paidAt"
                    placeholder="Bezahlt am..."
                />
                <label class="mt-2" for="created">paidExpiresAt</label>
                <b-form-datepicker
                    v-model="paidExpiresAt"
                    placeholder="Zahlung läuft ab am..."
                />
                <label class="mt-2" for="refresh-frequency"
                    >paidAmount [Cents]</label
                >
                <b-form-input
                    type="number"
                    number
                    v-model="job.paidAmount"
                    placeholder="Gezahlter Betrag..."
                />
                <label class="mt-2" for="refresh-frequency"
                    >refreshFrequency</label
                >
                <b-form-input
                    type="number"
                    number
                    v-model="job.refreshFrequency"
                    placeholder="Anzeige wird nach X Tagen aktualisiert..."
                />
            </div>
            <label for="specialization">Fachbereich</label>
            <b-form-select
                id="specialization"
                v-model="job.specialization"
                :state="validated ? true : null"
            >
                <b-form-select-option :value="null"
                    >-- Fachbereich wählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="type in specializationOptions"
                    :key="type"
                    :value="type"
                    >{{ type }}</b-form-select-option
                ></b-form-select
            >
            <label for="employment-type">Anstellungsart *</label>
            <b-form-select
                id="employment-type"
                v-model="job.employmentType"
                :state="validated ? (job.employmentType ? true : false) : null"
            >
                <b-form-select-option :value="null" disabled
                    >-- Anstellungsart wählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="type in employmentTypeOptions"
                    :key="type.value"
                    :value="type.value"
                    >{{ type.text }}</b-form-select-option
                ></b-form-select
            >
            <label for="application-deadline">Bewerbungsfrist *</label>
            <b-form-datepicker
                :state="validated && job.applicationDeadline != ''"
                id="application-deadline"
                v-model="job.applicationDeadline"
                placeholder="Bewerbungsfrist wählen"
            />
            <label for="simple-applcation">Nur mit Lebenslauf bewerben</label>
            <b-form-select
                id="simple-application"
                v-model="job.simpleApplication"
                :state="validated ? true : null"
            >
                <b-form-select-option
                    v-for="type in simpleApplicationOptions"
                    :key="type.value"
                    :value="type.value"
                    >{{ type.text }}</b-form-select-option
                ></b-form-select
            >
            <label for="description">Stellenbeschreibung *</label>
            <TipTapEditor
                :validated="validated"
                :content="job.description"
                @update-content="job.description = $event"
            />
            <label for="application-email"
                >E-Mail Adresse für Bewerbungen</label
            >
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="at"
                    /></b-input-group-text>
                </template>
                <b-form-input
                    type="email"
                    v-model="job.applicationEmail"
                    :state="
                        validated ? (job.applicationEmail ? true : null) : null
                    "
                    id="application-email"
                    placeholder="karriere@ihr-unternehmen.de"
                />
            </b-input-group>
            <label for="ext-job-url"
                >URL zur Bewerbung auf Ihrem Bewerberportal [wenn
                vorhanden]</label
            >
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="link45deg"
                    /></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="job.extJobUrl"
                    :state="validated ? (job.extJobUrl ? true : null) : null"
                    id="ext-job-url"
                    placeholder="https://www.ihr-unternehmen.com/karriere/stelle/bewerben"
                />
            </b-input-group>
            <label for="title-image"
                >Team/Praxis Bild (jpg, png | max. 5MB)</label
            >
            <ImageUploader
                id="title-image"
                :validated="validated"
                :imageUrl="job.imageUrl"
                :width="1280"
                :height="720"
                fit="inside"
                @update-url="job.imageUrl = $event"
            />
            <b-form-input
                class="bg-light-shade mt-4"
                v-if="$store.state.auth.userRole === 'admin'"
                type="url"
                v-model="job.imageUrl"
                placeholder="ADMIN - URL to image (incl. https://)"
            >
            </b-form-input>
            <div>
                <b-avatar
                    class="mt-2 d-flex align-items-center justify-content-center avatar"
                    size="10rem"
                    icon="card-image"
                    variant="secondary"
                    rounded
                    :src="job.imageUrl"
                />
            </div>

            <h3 class="mt-4">Unternehmen</h3>
            <div class="mt-3 d-flex align-items-end">
                <div>
                    <label for="company-list"
                        >Vorhandenes Unternehmen wählen</label
                    >
                    <b-form-select
                        id="company-list"
                        v-model="selectedCompanyId"
                        @change="setCompany"
                        ><b-form-select-option
                            v-for="company in companies"
                            :key="company._id"
                            :value="company._id"
                            >{{
                                company.name + " | " + company.location
                            }}</b-form-select-option
                        ></b-form-select
                    >
                </div>
                <b-button
                    class="ml-2"
                    variant="warning"
                    @click.prevent="resetCompany"
                    >Zurücksetzen</b-button
                >
            </div>
            <label for="company-name">Unternehmensname *</label>
            <b-form-input
                type="text"
                v-model="job.company.name"
                :state="validated ? (job.company.name ? true : false) : null"
                id="company-name"
                placeholder="Unternehmensname eingeben..."
                required
                trim
            />
            <label for="company-street">Straße und Hausnummer *</label>
            <b-form-input
                type="text"
                v-model="job.company.street"
                :state="validated ? (job.company.street ? true : false) : null"
                id="company-street"
                placeholder="Straße und Hausnummer eingeben..."
                required
                trim
            />
            <label for="company-location">Ort *</label>
            <b-form-input
                type="text"
                v-model="job.company.location"
                :state="
                    validated ? (job.company.location ? true : false) : null
                "
                id="company-location"
                placeholder="Ort eingeben..."
                required
                trim
            />
            <label for="company-zip-code">PLZ *</label>
            <b-form-input
                type="number"
                v-model="job.company.zipCode"
                :state="validated ? (job.company.zipCode ? true : false) : null"
                id="company-zip-code"
                placeholder="PLZ eingeben..."
                required
                trim
            />
            <label for="company-state">Bundesland *</label>
            <b-form-select
                id="company-state"
                v-model="job.company.state"
                :state="validated ? (job.company.state ? true : false) : null"
            >
                <b-form-select-option :value="null" disabled
                    >-- Bundesland auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="state in companyStateOptions"
                    :key="state"
                    :value="state"
                    >{{ state }}</b-form-select-option
                >
            </b-form-select>
            <label for="company-country">Land *</label>
            <b-form-select
                id="company-country"
                v-model="job.company.country"
                :state="validated ? (job.company.country ? true : false) : null"
            >
                <b-form-select-option :value="null" disabled
                    >-- Land auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="country in companyCountryOptions"
                    :key="country"
                    :value="country"
                    >{{ country }}</b-form-select-option
                >
            </b-form-select>
            <label for="company-size">Unternehmensgröße *</label>
            <b-form-select
                id="company-size"
                v-model="job.company.size"
                :state="validated ? (job.company.size ? true : false) : null"
            >
                <b-form-select-option :value="null" disabled
                    >-- Unternehmensgröße auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="size in companySizeOptions"
                    :key="size"
                    :value="size"
                    >{{ size }}</b-form-select-option
                >
            </b-form-select>

            <label for="company-url">Unternehmenswebseite</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="link45deg"
                    /></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="job.company.url"
                    :state="validated ? (job.company.url ? true : null) : null"
                    id="company-url"
                    placeholder="https://www.ihr-unternehmen.de"
                />
            </b-input-group>
            <label for="logo">Logo (jpg, png | max. 5MB)</label>
            <ImageUploader
                id="logo"
                :validated="validated"
                :imageUrl="job.company.logoUrl"
                :width="200"
                :height="200"
                fit="inside"
                @update-url="job.company.logoUrl = $event"
            />
            <b-form-input
                class="bg-light-shade mt-4"
                v-if="$store.state.auth.userRole === 'admin'"
                type="url"
                v-model="job.company.logoUrl"
                placeholder="ADMIN - URL to image (incl. https://)"
            >
            </b-form-input>
            <div>
                <b-avatar
                    class="mt-2 d-flex align-items-center justify-content-center"
                    size="lg"
                    icon="box"
                    variant="secondary"
                    rounded
                    :src="job.company.logoUrl"
                />
            </div>

            <h3 class="mt-4">Kontakt für Bewerbungen</h3>
            <label for="contact-gender">Anrede</label>
            <b-form-select
                id="contact-gender"
                v-model="job.contactGender"
                :state="validated ? (job.contactGender ? true : null) : null"
            >
                <b-form-select-option :value="null"
                    >-- Titel auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="title in contactGenderOptions"
                    :key="title"
                    :value="title"
                    >{{ title }}</b-form-select-option
                >
            </b-form-select>
            <label for="contact-title">Titel</label>
            <b-form-select
                id="contact-title"
                v-model="job.contactTitle"
                :state="validated ? (job.contactTitle ? true : null) : null"
            >
                <b-form-select-option :value="null"
                    >-- Titel auswählen --</b-form-select-option
                >
                <b-form-select-option
                    v-for="title in contactTitleOptions"
                    :key="title"
                    :value="title"
                    >{{ title }}</b-form-select-option
                >
            </b-form-select>
            <label for="contact-first-name">Vorname</label>
            <b-form-input
                type="text"
                v-model="job.contactFirstName"
                :state="validated ? (job.contactFirstName ? true : null) : null"
                id="contact-first-name"
                placeholder="Vorname eingeben..."
                trim
            />
            <label for="contact-last-name">Nachname</label>
            <b-form-input
                type="text"
                v-model="job.contactLastName"
                :state="validated ? (job.contactLastName ? true : null) : null"
                id="contact-last-name"
                placeholder="Nachname eingeben..."
                trim
            />
            <label for="contact-email">E-Mail Adresse</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="at"></b-icon
                    ></b-input-group-text>
                </template>
                <b-form-input
                    type="email"
                    v-model="job.contactEmail"
                    :state="validated ? (job.contactEmail ? true : null) : null"
                    id="contact-email"
                    placeholder="kontakt@ihr-unternehmen.de"
                    trim
                />
            </b-input-group>
            <label for="contact-phone">Telefon</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="phone"
                    /></b-input-group-text>
                </template>
                <b-form-input
                    type="tel"
                    v-model="job.contactPhone"
                    :state="validated ? (job.contactPhone ? true : null) : null"
                    id="contact-phone"
                    placeholder="Telefonnummer eingeben..."
                />
            </b-input-group>

            <div class="d-flex justify-content-between my-4">
                <b-button variant="outline-danger" to="/dashboard">
                    Abbrechen
                </b-button>
                <b-button variant="success" @click.prevent="onSubmit">
                    <b-icon v-if="success" icon="check2" class="mr-2" />
                    {{ success ? "Gespeichert" : "Speichern" }}
                </b-button>
            </div>
        </b-form>
        <b-alert v-if="error" class="mt-3" show dismissible variant="warning">{{
            error
        }}</b-alert>
    </div>
</template>

<script>
    import axios from "@/axios";
    import {
        specializationOptions,
        employmentTypeOptions,
        simpleApplicationOptions,
        contactGenderOptions,
        contactTitleOptions,
        companyStateOptions,
        companyCountryOptions,
        companySizeOptions
    } from "@/utils/jobDataConfig.json";
    import TipTapEditor from "@/components/utils/TipTapEditor.vue";
    import ImageUploader from "@/components/utils/ImageUploader.vue";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "JobForm",
        components: { TipTapEditor, ImageUploader, Overlay },
        props: ["jobId", "apiJobsSchema"],
        data() {
            return {
                job: {
                    _id: "",
                    paidAt: null,
                    paidExpiresAt: null,
                    paidAmount: 0,
                    refreshFrequency: 0,
                    title: "",
                    description: `
                        <p>[Für eine attraktive Stellenanzeige sollten Sie folgende Punkte berücksichtigen. Bitte ersetzen Sie den hier stehenden Text entsprechend.]</p>
                        <p>[Schreiben Sie eine kurze Einleitung zu Ihrem Unternehmen.]</p>
                        <h3>Was wir Ihnen bieten</h3>
                        <p>[Was bieten Sie potentiellen BewerberInnen?]</p>
                        <h3>Ihre Aufgaben</h3>
                        <p>[Welche Aufgaben sollen von potentiellen BewerberInnen durchgeführt werden?]</p>
                        <h3>Ihr Profil</h3>
                        <p>[Was sollen potentielle BewerberInnen mitbringen?]</p>
                    `,
                    specialization: null,
                    employmentType: null,
                    applicationDeadline: "",
                    simpleApplication: false,
                    extJobUrl: "",
                    applicationEmail: "",
                    imageUrl: "",
                    contactGender: null,
                    contactTitle: null,
                    contactFirstName: "",
                    contactLastName: "",
                    contactEmail: "",
                    contactPhone: "",
                    company: {
                        _id: "",
                        name: "",
                        street: "",
                        location: "",
                        zipCode: "",
                        state: null,
                        country: "Deutschland",
                        geoCodeLat: null,
                        geoCodeLng: null,
                        size: null,
                        url: "",
                        logoUrl: ""
                    }
                },
                companies: [],
                selectedCompanyId: "",
                specializationOptions,
                employmentTypeOptions,
                simpleApplicationOptions,
                contactGenderOptions,
                contactTitleOptions,
                companyCountryOptions,
                companyStateOptions,
                companySizeOptions,
                hereMaps: {
                    platform: null,
                    apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM"
                },
                validated: null,
                showOverlay: false,
                success: "",
                error: ""
            };
        },
        computed: {
            paidAt: {
                get: function() {
                    return new Date(this.job.paidAt);
                },
                set: function(value) {
                    this.job.paidAt = new Date(value).getTime();
                }
            },
            paidExpiresAt: {
                get: function() {
                    return new Date(this.job.paidExpiresAt);
                },
                set: function(value) {
                    this.job.paidExpiresAt = new Date(value).getTime();
                }
            }
        },
        created: function() {
            this.jobId ? this.getJob(this.jobId) : null;
            this.getCompanies();

            // Initialize the platform object:
            const platform = new window.H.service.Platform({
                apikey: this.hereMaps.apikey
            });
            this.hereMaps.platform = platform;
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post(
                        `/api/jobs/${this.apiJobsSchema}`,
                        {
                            query: `
                            query {
                                job(_id: "${jobId}") {
                                    _id
                                    paidAt
                                    paidExpiresAt
                                    paidAmount
                                    refreshFrequency
                                    title
                                    description
                                    employmentType
                                    applicationDeadline
                                    simpleApplication
                                    specialization
                                    extJobUrl
                                    applicationEmail
                                    imageUrl
                                    contactGender
                                    contactTitle
                                    contactFirstName
                                    contactLastName
                                    contactEmail
                                    contactPhone
                                    company {
                                        _id
                                        name
                                        street
                                        location
                                        zipCode
                                        state
                                        country
                                        geoCodeLat
                                        geoCodeLng
                                        size
                                        url
                                        logoUrl
                                    }
                                }
                            }
                        `
                        }
                    );

                    this.job = job.data.data.job;

                    this.selectedCompanyId = this.job.company._id;

                    if (!this.job.company) {
                        this.job.company = {
                            _id: "",
                            name: "",
                            street: "",
                            location: "",
                            zipCode: "",
                            state: null,
                            country: null,
                            geoCodeLat: null,
                            geoCodeLng: null,
                            size: null,
                            url: "",
                            logoUrl: ""
                        };
                    }
                } catch (err) {
                    console.log("Error on getJob(): ", err);
                }
            },
            async getCompanies() {
                try {
                    const companies = await axios.post(
                        `/api/companies/${this.apiJobsSchema}`,
                        {
                            query: `
                            query {
                                companies {
                                    _id
                                    name
                                    street
                                    location
                                    zipCode
                                    state
                                    country
                                    geoCodeLat
                                    geoCodeLng
                                    size
                                    url
                                    logoUrl
                                }
                            }
                        `
                        }
                    );

                    this.companies = companies.data.data.companies;
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            async onSubmit() {
                this.error = false;

                if (!this.formValidation()) {
                    this.error = "Bitte fülle die erforderlichen Felder aus!";
                    return null;
                }

                this.showOverlay = true;

                try {
                    // get geocode
                    const service = this.hereMaps.platform.getSearchService();
                    const geocode = await service.geocode({
                        q: `${this.job.company.street} ${this.job.company.location} ${this.job.company.state} ${this.job.company.country}`
                    });

                    this.job.company.geoCodeLat = geocode.items[0].position.lat;
                    this.job.company.geoCodeLng = geocode.items[0].position.lng;
                } catch (err) {
                    console.log("Error on getGeoCode(): ", err);

                    this.job.company.geoCodeLat = null;
                    this.job.company.geoCodeLng = null;
                }

                try {
                    // Save / Update company
                    let companyMutationType;
                    this.job.company._id
                        ? (companyMutationType = "updateCompany")
                        : (companyMutationType = "addCompany");

                    const companyQuery = `
                        mutation {
                            ${companyMutationType}(
                                ${
                                    companyMutationType === "updateCompany"
                                        ? `_id: "${this.job.company._id}",`
                                        : ""
                                } 
                                name: "${this.job.company.name}", 
                                street: "${this.job.company.street}"
                                location: "${this.job.company.location}", 
                                zipCode: "${this.job.company.zipCode}"
                                state: "${this.job.company.state}", 
                                country: "${this.job.company.country}", 
                                geoCodeLat: ${this.job.company.geoCodeLat}, 
                                geoCodeLng: ${this.job.company.geoCodeLng}, 
                                size: "${this.job.company.size}"
                                url: "${
                                    !/^https?:\/\//i.test(
                                        this.job.company.url
                                    ) && this.job.company.url
                                        ? "https://" + this.job.company.url
                                        : this.job.company.url
                                }"
                                logoUrl: "${this.job.company.logoUrl}"
                            ) {
                                _id
                            }
                        }
                    `;

                    const companyQueryResponse = await axios.post(
                        `/api/companies/${this.apiJobsSchema}`,
                        { query: companyQuery }
                    );

                    const newCompanyId =
                        companyQueryResponse.data.data[companyMutationType]._id;

                    // Save / Update job
                    let jobMutationType;
                    this.job._id
                        ? (jobMutationType = "updateJob")
                        : (jobMutationType = "addJob");

                    const jobQuery = `
                        mutation {
                            ${jobMutationType}(
                                ${
                                    jobMutationType === "updateJob"
                                        ? `_id: "${this.job._id}"`
                                        : ""
                                } 
                                title: "${this.job.title}"
                                paidAt: ${this.job.paidAt}
                                paidExpiresAt: ${this.job.paidExpiresAt}
                                paidAmount: ${this.job.paidAmount}
                                refreshFrequency: ${this.job.refreshFrequency}
                                description: "${this.job.description.replace(
                                    /"/g,
                                    '\\"'
                                )}"
                                employmentType: "${this.job.employmentType}"
                                applicationDeadline: "${
                                    this.job.applicationDeadline
                                }"
                                simpleApplication: ${this.job.simpleApplication}
                                specialization: "${this.job.specialization}"
                                extJobUrl: "${
                                    !/^https?:\/\//i.test(this.job.extJobUrl) &&
                                    this.job.extJobUrl
                                        ? "https://" + this.job.extJobUrl
                                        : this.job.extJobUrl
                                }"
                                applicationEmail: "${this.job.applicationEmail}"
                                imageUrl: "${this.job.imageUrl}"
                                contactGender: "${this.job.contactGender}"
                                contactTitle: "${this.job.contactTitle}"
                                contactFirstName: "${this.job.contactFirstName}"
                                contactLastName: "${this.job.contactLastName}"
                                contactEmail: "${this.job.contactEmail}"
                                contactPhone: "${this.job.contactPhone}"
                                company: "${newCompanyId ||
                                    this.job.company._id}"
                            ) {
                                _id
                            }
                        }
                    `;

                    const jobQueryResponse = await axios.post(
                        `/api/jobs/${this.apiJobsSchema}`,
                        {
                            query: jobQuery
                        }
                    );

                    if (!jobQueryResponse.data.data[jobMutationType]) {
                        this.error =
                            "Oh, da ist leider etwas schief gelaufen. Bitte probiere es noch einmal.";
                    } else {
                        this.success = true;

                        setTimeout(() => {
                            this.hasHistory
                                ? this.$router.go(-1)
                                : this.$router.push("/dashboard");
                        }, 1000);
                    }
                } catch (err) {
                    this.error =
                        "Oh, da ist leider etwas schief gelaufen. Bitte probiere es noch einmal.";
                    console.log("err: ", err);
                }

                this.showOverlay = false;
            },
            formValidation() {
                this.validated = true;
                return !this.job.title ||
                    !this.job.description ||
                    !this.job.employmentType ||
                    !this.job.applicationDeadline ||
                    !this.job.company.name ||
                    !this.job.company.country ||
                    !this.job.company.location ||
                    !this.job.company.state ||
                    !this.job.company.street ||
                    !this.job.company.zipCode ||
                    !this.job.company.size
                    ? false
                    : true;
            },
            resetCompany() {
                for (const key in this.job.company) {
                    this.job.company[key] = "";
                    this.selectedCompanyId = "";
                }
            },
            setCompany() {
                this.job.company = this.companies.find(
                    company => company._id === this.selectedCompanyId
                );
            },
            hasHistory() {
                return window.history.length > 2;
            }
        }
    };
</script>

<style lang="scss">
    .b-avatar .b-avatar-img img {
        width: auto;
        height: auto;
        border-radius: 0;
    }
</style>
