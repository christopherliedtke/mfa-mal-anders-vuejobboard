<template>
    <div class="job-form position-relative">
        <b-form id="job-form">
            <label for="title">Titel *</label>
            <b-form-input
                type="text"
                v-model="job.title"
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (job.title ? true : false) : null"
                id="title"
                placeholder="Titel der Stellenanzeige eingeben..."
                required
                trim
            />

            <div
                v-if="$store.state.auth.user.isAdmin"
                class="bg-light-shade border-radius1 p-3 mt-3"
            >
                <h6>ADMIN</h6>
                <label for="created">publishedAt</label>
                <b-form-datepicker
                    v-model="publishedAt"
                    placeholder="Veröffentlicht am..."
                />
                <label class="mt-2" for="created">paidExpiresAt</label>
                <b-form-datepicker
                    v-model="paidExpiresAt"
                    placeholder="Zahlung läuft ab am..."
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

            <label for="specialization">Fachbereich Schwerpunkt</label>
            <b-form-select
                id="specialization"
                v-model="job.specialization"
                :state="validated ? true : null"
            >
                <b-form-select-option value=""
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
                <b-form-select-option value="" disabled
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
                :state="validated && applicationDeadline != ''"
                id="application-deadline"
                v-model="applicationDeadline"
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
                    <b-input-group-text><Fa icon="at"/></b-input-group-text>
                </template>
                <b-form-input
                    type="email"
                    v-model="job.applicationEmail"
                    lazy-formatter
                    :formatter="formatter"
                    :state="
                        validated ? (job.applicationEmail ? true : null) : null
                    "
                    id="application-email"
                    placeholder="karriere@ihr-unternehmen.de"
                />
            </b-input-group>

            <label for="ext-job-url"
                >URL zur Bewerbung auf Ihrem Bewerberportal [optional, wenn
                vorhanden]</label
            >
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text><Fa icon="link"/></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="job.extJobUrl"
                    lazy-formatter
                    :formatter="formatter"
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
                class="bg-light-shade mt-2"
                v-if="$store.state.auth.user.isAdmin"
                type="url"
                v-model="job.imageUrl"
                placeholder="ADMIN - URL to image (incl. https://)"
            >
            </b-form-input>
            <div
                class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
                style="width: 150px; height: 150px"
            >
                <b-img v-if="job.imageUrl" :src="job.imageUrl" fluid />
                <Fa v-else icon="image" size="5x" />
            </div>
            <b-row cols="1" cols-md="2">
                <b-col>
                    <label for="min-salary"
                        >Minimum Monatsgehalt [optional]</label
                    >
                    <b-input-group>
                        <template v-slot:prepend>
                            <b-input-group-text
                                ><Fa icon="euro-sign"
                            /></b-input-group-text>
                        </template>
                        <b-form-input
                            type="number"
                            step="1"
                            v-model="job.salaryMin"
                            :state="
                                validated ? (job.salaryMin ? true : null) : null
                            "
                            id="min-salary"
                            placeholder="Min. Monatsgehalt eingeben..."
                        />
                    </b-input-group>
                </b-col>
                <b-col>
                    <label for="max-salary"
                        >Maximum Monatsgehalt [optional]</label
                    >
                    <b-input-group>
                        <template v-slot:prepend>
                            <b-input-group-text
                                ><Fa icon="euro-sign"
                            /></b-input-group-text>
                        </template>
                        <b-form-input
                            type="number"
                            step="1"
                            v-model="job.salaryMax"
                            :state="
                                validated ? (job.salaryMax ? true : null) : null
                            "
                            id="max-salary"
                            placeholder="Max. Monatsgehalt eingeben..."
                        />
                    </b-input-group>
                </b-col>
            </b-row>

            <h3 class="mt-4">Kontakt für Bewerbungen</h3>
            <label for="contact-gender">Anrede</label>
            <b-form-select
                id="contact-gender"
                v-model="job.contactGender"
                :state="validated ? (job.contactGender ? true : null) : null"
            >
                <b-form-select-option value=""
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
                <b-form-select-option value=""
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
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (job.contactFirstName ? true : null) : null"
                id="contact-first-name"
                placeholder="Vorname eingeben..."
                trim
            />

            <label for="contact-last-name">Nachname</label>
            <b-form-input
                type="text"
                v-model="job.contactLastName"
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (job.contactLastName ? true : null) : null"
                id="contact-last-name"
                placeholder="Nachname eingeben..."
                trim
            />

            <label for="contact-email">E-Mail Adresse</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text><Fa icon="at"/></b-input-group-text>
                </template>
                <b-form-input
                    type="email"
                    v-model="job.contactEmail"
                    lazy-formatter
                    :formatter="formatter"
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
                        ><Fa icon="mobile-alt"
                    /></b-input-group-text>
                </template>
                <b-form-input
                    type="tel"
                    v-model="job.contactPhone"
                    lazy-formatter
                    :formatter="formatter"
                    :state="validated ? (job.contactPhone ? true : null) : null"
                    id="contact-phone"
                    placeholder="Telefonnummer eingeben..."
                />
            </b-input-group>

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
                lazy-formatter
                :formatter="formatter"
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
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (job.company.street ? true : false) : null"
                id="company-street"
                placeholder="Straße und Hausnummer eingeben..."
                required
                trim
            />

            <label for="company-zip-code">PLZ *</label>
            <b-form-input
                type="text"
                v-model="job.company.zipCode"
                :state="validated ? (job.company.zipCode ? true : false) : null"
                id="company-zip-code"
                placeholder="PLZ eingeben..."
                required
                trim
            />

            <label for="company-location">Ort *</label>
            <b-form-input
                type="text"
                v-model="job.company.location"
                lazy-formatter
                :formatter="formatter"
                :state="
                    validated ? (job.company.location ? true : false) : null
                "
                id="company-location"
                placeholder="Ort eingeben..."
                required
                trim
            />

            <label for="company-state">Bundesland *</label>
            <b-form-select
                id="company-state"
                v-model="job.company.state"
                :state="validated ? (job.company.state ? true : false) : null"
            >
                <b-form-select-option value="" disabled
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
                <b-form-select-option value="" disabled
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
                <b-form-select-option value="" disabled
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
                    <b-input-group-text><Fa icon="link"/></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="job.company.url"
                    lazy-formatter
                    :formatter="formatter"
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
                class="bg-light-shade mt-2"
                v-if="$store.state.auth.user.isAdmin"
                type="url"
                v-model="job.company.logoUrl"
                placeholder="ADMIN - URL to image (incl. https://)"
            >
            </b-form-input>
            <div
                class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
                style="width: 55px; height: 55px"
            >
                <b-img
                    v-if="job.company.logoUrl"
                    :src="job.company.logoUrl"
                    fluid
                    style="max-height: 100%; max-width: 100%"
                />
                <Fa v-else icon="box-open" size="lg" />
            </div>

            <div class="d-flex justify-content-between my-4">
                <b-button
                    variant="outline-danger"
                    @click.prevent="$router.go(-1)"
                >
                    Abbrechen
                </b-button>
                <b-button variant="success" @click.prevent="onSubmit">
                    <Fa v-if="success" icon="check" class="mr-2" />
                    {{ success ? "Gespeichert" : "Speichern" }}
                </b-button>
            </div>
        </b-form>
        <b-alert v-if="error" class="mt-3" show dismissible variant="danger">{{
            error
        }}</b-alert>
    </div>
</template>

<script>
    import { getGeocodeMixin } from "@/mixins/getGeocodeMixin";
    import { saveCompanyMixin } from "@/mixins/saveCompanyMixin";
    import { saveJobMixin } from "@/mixins/saveJobMixin";
    import {
        specializationOptions,
        employmentTypeOptions,
        simpleApplicationOptions,
        contactGenderOptions,
        contactTitleOptions,
        companyStateOptions,
        companyCountryOptions,
        companySizeOptions
    } from "@/config/formDataConfig.json";
    import TipTapEditor from "@/components/utils/TipTapEditor.vue";
    import ImageUploader from "@/components/utils/ImageUploader.vue";
    export default {
        name: "JobForm",
        components: {
            TipTapEditor,
            ImageUploader
        },
        mixins: [getGeocodeMixin, saveCompanyMixin, saveJobMixin],
        props: ["apiJobsSchema"],
        data() {
            return {
                job: {
                    _id: this.$route.params.jobId,
                    publishedAt: 0,
                    paidExpiresAt: 0,
                    refreshFrequency: 0,
                    title: "",
                    description:
                        "<p>[Für eine attraktive Stellenanzeige sollten Sie mindestens folgende Punkte berücksichtigen. Bitte ersetzen Sie den hier stehenden Text entsprechend.]</p><p>[Schreiben Sie eine kurze Einleitung zu Ihrem Unternehmen.]</p><h3>Was wir Ihnen bieten</h3><p>[Was bieten Sie potentiellen BewerberInnen?]</p><h3>Ihre Aufgaben</h3><p>[Welche Aufgaben sollen von potentiellen BewerberInnen durchgeführt werden?]</p><h3>Ihr Profil</h3><p>[Was sollen potentielle BewerberInnen mitbringen?]</p>",
                    specialization: "",
                    employmentType: "",
                    applicationDeadline: new Date(
                        new Date().valueOf() +
                            1000 * 60 * 60 * 24 * this.$config.payment.duration
                    ),
                    simpleApplication: false,
                    extJobUrl: "",
                    applicationEmail: "",
                    imageUrl: "",
                    salaryMin: "",
                    salaryMax: "",
                    contactGender: "",
                    contactTitle: "",
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
                        state: "",
                        country: companyCountryOptions[0],
                        geoCodeLat: null,
                        geoCodeLng: null,
                        size: "",
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
                validated: null,
                success: "",
                error: ""
            };
        },
        computed: {
            publishedAt: {
                get() {
                    return new Date(this.job.publishedAt);
                },
                set(value) {
                    this.job.publishedAt = new Date(value).getTime();
                }
            },
            paidExpiresAt: {
                get() {
                    return new Date(this.job.paidExpiresAt);
                },
                set(value) {
                    this.job.paidExpiresAt = new Date(value).getTime();
                }
            },
            applicationDeadline: {
                get() {
                    return new Date(this.job.applicationDeadline);
                },
                set(value) {
                    this.job.applicationDeadline = new Date(value).getTime();
                }
            },
            jobQuery: function() {
                return this.apiJobsSchema === "admin" ? "adminJob" : "myJob";
            }
        },
        created() {
            this.setAdminDates();
            if (this.$route.params.jobId != "new") {
                this.getJob(this.$route.params.jobId);
            }
            this.getCompanies();
        },
        methods: {
            setAdminDates() {
                if (this.$store.state.auth.user.isAdmin) {
                    this.publishedAt = new Date();
                    this.paidExpiresAt = new Date(
                        new Date().valueOf() +
                            1000 * 60 * 60 * 24 * this.$config.payment.duration
                    );
                }
            },
            async getJob(id) {
                this.$store.dispatch("setOverlay", true);

                try {
                    const job = await this.$axios.get(`/graphql`, {
                        params: {
                            query: `
                                query {
                                    ${this.jobQuery}(_id: "${id}") {
                                        _id
                                        publishedAt
                                        paidExpiresAt
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
                                        salaryMin
                                        salaryMax
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
                    });

                    if (!job.data.data[this.jobQuery].company) {
                        job.data.data[this.jobQuery].company = {
                            _id: "",
                            name: "",
                            street: "",
                            location: "",
                            zipCode: "",
                            state: "",
                            country: this.companyCountryOptions[0],
                            geoCodeLat: null,
                            geoCodeLng: null,
                            size: "",
                            url: "",
                            logoUrl: ""
                        };
                    }

                    this.job = job.data.data[this.jobQuery];

                    this.selectedCompanyId = this.job.company._id;
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Beim Laden der Stellenanzeige ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
                        {
                            title: `Fehler beim Laden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }

                this.$store.dispatch("setOverlay", false);
            },
            async getCompanies() {
                try {
                    const companies = await this.$axios.get(`/graphql`, {
                        params: {
                            query: `
                                query {
                                    myCompanies {
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
                    });

                    this.companies = companies.data.data.myCompanies;
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Beim Laden Ihrer erstellten Unternehmen ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
                        {
                            title: `Fehler beim Laden`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );
                }
            },
            async onSubmit() {
                this.error = false;

                if (!this.formValidation()) {
                    this.error =
                        "Bitte füllen Sie die erforderlichen Felder aus!";

                    return null;
                }

                this.$store.dispatch("setOverlay", true);

                const data = await this.getGeocode(this.job.company);
                this.job.company.geoCodeLat = data.lat;
                this.job.company.geoCodeLng = data.lng;

                // Save / Update company
                let companyMutationType;

                if (!this.job.company._id) {
                    companyMutationType = "addCompany";
                } else {
                    this.apiJobsSchema === "admin"
                        ? (companyMutationType = "adminUpdateCompany")
                        : (companyMutationType = "updateCompany");
                }

                const savedCompany = await this.saveCompany(
                    companyMutationType,
                    this.job.company,
                    false
                );

                if (savedCompany.success) {
                    this.job.company._id = savedCompany.companyId;

                    // Save / Update job
                    let jobMutationType;

                    if (this.job._id === "new") {
                        this.apiJobsSchema === "private"
                            ? (jobMutationType = "addJob")
                            : (jobMutationType = "adminAddJob");
                    } else {
                        this.apiJobsSchema === "private"
                            ? (jobMutationType = "updateJob")
                            : (jobMutationType = "adminUpdateJob");
                    }

                    const savedJob = await this.saveJob(
                        jobMutationType,
                        this.job,
                        true
                    );

                    this.success = savedJob.success;
                }

                this.$store.dispatch("setOverlay", false);
            },
            formatter(value) {
                return value.replace('"', "'").replace("&", "+");
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
