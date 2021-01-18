<template>
    <div class="job-form position-relative">
        <b-form id="company-form">
            <label for="company-name">Unternehmensname *</label>
            <b-form-input
                type="text"
                v-model="company.name"
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (company.name ? true : false) : null"
                id="company-name"
                placeholder="Unternehmensname eingeben..."
                required
                trim
            />

            <label for="company-street">Straße und Hausnummer *</label>
            <b-form-input
                type="text"
                v-model="company.street"
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (company.street ? true : false) : null"
                id="company-street"
                placeholder="Straße und Hausnummer eingeben..."
                required
                trim
            />

            <label for="company-zip-code">PLZ *</label>
            <b-form-input
                type="number"
                v-model="company.zipCode"
                :state="validated ? (company.zipCode ? true : false) : null"
                id="company-zip-code"
                placeholder="PLZ eingeben..."
                required
                trim
            />

            <label for="company-location">Ort *</label>
            <b-form-input
                type="text"
                v-model="company.location"
                lazy-formatter
                :formatter="formatter"
                :state="validated ? (company.location ? true : false) : null"
                id="company-location"
                placeholder="Ort eingeben..."
                required
                trim
            />

            <label for="company-state">Bundesland *</label>
            <b-form-select
                id="company-state"
                v-model="company.state"
                :state="validated ? (company.state ? true : false) : null"
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
                v-model="company.country"
                :state="validated ? (company.country ? true : false) : null"
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
                v-model="company.size"
                :state="validated ? (company.size ? true : false) : null"
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
                    <b-input-group-text><Fa icon="link"/></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="company.url"
                    lazy-formatter
                    :formatter="formatter"
                    :state="validated ? (company.url ? true : null) : null"
                    id="company-url"
                    placeholder="https://www.ihr-unternehmen.de"
                />
            </b-input-group>

            <label for="file">Logo (jpg, png | max. 5MB)</label>
            <ImageUploader
                :validated="validated"
                :imageUrl="company.logoUrl"
                :width="200"
                :height="200"
                fit="inside"
                @update-url="company.logoUrl = $event"
            />
            <b-form-input
                class="bg-light-shade mt-2"
                v-if="$store.state.auth.user.isAdmin"
                type="url"
                v-model="company.logoUrl"
                placeholder="ADMIN - URL to image (incl. https://)"
            >
            </b-form-input>
            <div
                class="position-relative d-flex justify-content-center align-items-center bg-secondary rounded mt-2"
                style="width: 55px; height: 55px"
            >
                <b-img v-if="company.logoUrl" :src="company.logoUrl" fluid />
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
    import {
        companyStateOptions,
        companyCountryOptions,
        companySizeOptions
    } from "@/config/formDataConfig.json";
    import ImageUploader from "@/components/utils/ImageUploader.vue";
    export default {
        name: "CompanyForm",
        components: {
            ImageUploader
        },
        mixins: [getGeocodeMixin, saveCompanyMixin],
        props: ["apiJobsSchema"],
        data() {
            return {
                company: {
                    _id: this.$route.params.companyId,
                    name: "",
                    street: "",
                    location: "",
                    zipCode: null,
                    state: null,
                    country: null,
                    geoCodeLat: null,
                    geoCodeLng: null,
                    size: null,
                    url: "",
                    logoUrl: ""
                },
                companyCountryOptions,
                companyStateOptions,
                companySizeOptions,
                validated: null,
                success: "",
                error: ""
            };
        },
        created() {
            if (this.$route.params.companyId != "new") {
                this.getCompany(this.$route.params.companyId);
            }
        },
        methods: {
            async getCompany(id) {
                try {
                    const company = await this.$axios.post(
                        `/api/companies/${this.apiJobsSchema}`,
                        {
                            query: `
                            query {
                                company(_id: "${id}") {
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

                    this.company = company.data.data.company;
                } catch (err) {
                    this.$root.$bvToast.toast(
                        "Beim Laden des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal, indem Sie die Seite neu laden.",
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

                const data = await this.getGeocode(this.company);
                this.company.geoCodeLat = data.lat;
                this.company.geoCodeLng = data.lng;

                let mutationType;
                this.company._id === "new"
                    ? (mutationType = "addCompany")
                    : (mutationType = "updateCompany");

                // Save / Update company
                const res = await this.saveCompany(
                    mutationType,
                    this.apiJobsSchema,
                    this.company,
                    true
                );

                this.success = res.success;

                this.$store.dispatch("setOverlay", false);
            },
            formatter(value) {
                return value.replace('"', "'").replace("&", "+");
            },
            formValidation() {
                this.validated = true;
                return !this.company.name ||
                    !this.company.country ||
                    !this.company.location ||
                    !this.company.state ||
                    !this.company.street ||
                    !this.company.zipCode ||
                    !this.company.size
                    ? false
                    : true;
            },
            formReset() {
                for (const key in this.company) {
                    this.company[key] = "";
                }
            },
            hasHistory() {
                return window.history.length > 2;
            }
        }
    };
</script>

<style lang="scss">
    .b-avatar-img > img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
