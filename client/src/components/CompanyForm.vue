<template>
    <div class="job-form position-relative">
        <Overlay :show="showOverlay"> </Overlay>
        <b-form id="company-form">
            <h3 class="mt-4">Company Data</h3>
            <label for="company-name">Name *</label>
            <b-form-input
                type="text"
                v-model="company.name"
                :state="validated ? (company.name ? true : false) : null"
                id="company-name"
                placeholder="Enter company name ..."
                required
            ></b-form-input>
            <label for="company-location">Location *</label>
            <b-form-input
                type="text"
                v-model="company.location"
                :state="validated ? (company.location ? true : false) : null"
                id="company-location"
                placeholder="Enter location ..."
                required
            ></b-form-input>
            <label for="company-state">State *</label>
            <b-form-select
                id="company-state"
                v-model="company.state"
                :options="companyStateOptions"
                :state="validated ? (company.state ? true : false) : null"
            ></b-form-select>
            <label for="company-street">Street and House Number *</label>
            <b-form-input
                type="text"
                v-model="company.street"
                :state="validated ? (company.street ? true : false) : null"
                id="company-street"
                placeholder="Enter street and house number ..."
                required
            ></b-form-input>
            <label for="company-zip-code">ZIP Code *</label>
            <b-form-input
                type="number"
                v-model="company.zipCode"
                :state="validated ? (company.zipCode ? true : false) : null"
                id="company-zip-code"
                placeholder="Enter zip code ..."
                required
            ></b-form-input>
            <label for="company-url">Website</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="link45deg"></b-icon
                    ></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="company.url"
                    :state="validated ? (company.url ? true : null) : null"
                    id="company-url"
                    placeholder="https://www.your-company.com"
                ></b-form-input>
            </b-input-group>
            <label for="file">Logo (jpg, png | max. 5MB)</label>
            <div>
                <b-avatar
                    class="mb-2 d-flex align-items-center justify-content-center"
                    size="lg"
                    icon="box"
                    variant="secondary"
                    rounded
                    :src="company.logoUrl"
                ></b-avatar>
            </div>
            <ImageUploader
                :validated="validated"
                :imageUrl="company.logoUrl"
                :width="200"
                :height="200"
                @update-url="company.logoUrl = $event"
            ></ImageUploader>

            <div class="d-flex justify-content-between my-4">
                <b-button variant="outline-danger" to="/dashboard?tab=2">
                    Cancel
                </b-button>
                <b-button variant="success" @click.prevent="onSubmit">
                    <b-icon v-if="success" icon="check2" class="mr-2"></b-icon>
                    {{ success ? "Done" : "Save" }}
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
    import { companyStateOptions } from "@/utils/jobDataConfig.json";
    import ImageUploader from "@/components/ImageUploader.vue";
    import Overlay from "@/components/Overlay";
    export default {
        name: "CompanyForm",
        components: {
            ImageUploader,
            Overlay
        },
        props: ["companyId"],
        data() {
            return {
                company: {
                    _id: "",
                    name: "",
                    location: "",
                    state: null,
                    street: "",
                    zipCode: null,
                    url: "",
                    logoUrl: ""
                },
                companyStateOptions,
                validated: null,
                showOverlay: false,
                success: "",
                error: ""
            };
        },
        created: function() {
            if (this.companyId) {
                this.getCompany(this.companyId);
            }
        },
        methods: {
            async getCompany(companyId) {
                try {
                    const company = await axios.post("/api/companies/private", {
                        query: `
                            query {
                                company(_id: "${companyId}") {
                                    _id
                                    name
                                    location
                                    state
                                    street
                                    zipCode
                                    url
                                    logoUrl
                                }
                            }
                        `
                    });

                    this.company = company.data.data.company;
                } catch (err) {
                    console.log("err: ", err);
                }
            },
            async onSubmit() {
                try {
                    this.error = false;
                    if (!this.formValidation()) {
                        this.error =
                            "Please provide all necessary information.";
                        return null;
                    }

                    this.showOverlay = true;

                    let mutationType;
                    this.companyId
                        ? (mutationType = "updateCompany")
                        : (mutationType = "addCompany");

                    const query = `
                        mutation {
                            ${mutationType}(
                                ${
                                    mutationType === "updateCompany"
                                        ? `_id: "${this.companyId}",`
                                        : ""
                                } 
                                name: "${this.company.name}", 
                                location: "${this.company.location}", 
                                state: "${this.company.state}", 
                                street: "${this.company.street}"
                                zipCode: "${this.company.zipCode}"
                                url: "${this.company.url}"
                                logoUrl: "${this.company.logoUrl}"
                            ) {
                                _id
                            }
                        }
                    `;

                    const response = await axios.post(
                        "/api/companies/private",
                        { query }
                    );

                    this.showOverlay = false;

                    if (!response.data.data[mutationType]) {
                        this.error =
                            "Oh, something went wrong. Please try again!";
                    } else {
                        this.success = true;

                        setTimeout(() => {
                            this.$router.push("/dashboard?tab=2");
                        }, 1000);
                    }
                } catch (err) {
                    this.error = "Oh, something went wrong. Please try again!";
                    console.log("err: ", err);
                }
            },
            formValidation() {
                this.validated = true;
                return !this.company.name ||
                    !this.company.location ||
                    !this.company.state ||
                    !this.company.street ||
                    !this.company.zipCode
                    ? false
                    : true;
            },
            formReset() {
                for (const key in this.company) {
                    this.company[key] = "";
                }
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
