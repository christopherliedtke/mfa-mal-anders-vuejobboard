<template>
    <div class="job-form position-relative">
        <Overlay :show="showOverlay"> </Overlay>
        <b-form id="job-form">
            <h3 class="mt-4">Job Data</h3>
            <label for="title">Job Title *</label>
            <b-form-input
                type="text"
                v-model="job.title"
                :state="validated ? (job.title ? true : false) : null"
                id="title"
                placeholder="Enter job title ..."
                required
            ></b-form-input>
            <label for="employment-type">Employment Type *</label>
            <b-form-select
                id="employment-type"
                v-model="job.employmentType"
                :state="validated ? (job.employmentType ? true : false) : null"
                :options="employmentTypeOptions"
            ></b-form-select>
            <label for="application-deadline">Application Deadline *</label>
            <b-form-datepicker
                :state="validated && job.applicationDeadline != ''"
                id="application-deadline"
                v-model="job.applicationDeadline"
                placeholder="Choose a date"
                class=""
            ></b-form-datepicker>
            <label for="description">Job Description *</label>
            <TipTapEditor
                :validated="validated"
                :content="job.description"
                @update-content="job.description = $event"
            ></TipTapEditor>
            <label for="ext-job-url">URL to Job Post</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="link45deg"></b-icon
                    ></b-input-group-text>
                </template>
                <b-form-input
                    type="url"
                    v-model="job.extJobUrl"
                    :state="validated ? (job.extJobUrl ? true : null) : null"
                    id="ext-job-url"
                    placeholder="https://www.your-company.com/job-post"
                ></b-form-input>
            </b-input-group>
            <label for="application-email">Email for Applications</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="at"></b-icon
                    ></b-input-group-text>
                </template>
                <b-form-input
                    type="email"
                    v-model="job.applicationEmail"
                    :state="
                        validated ? (job.applicationEmail ? true : null) : null
                    "
                    id="application-email"
                    placeholder="career@your-company.com"
                ></b-form-input>
            </b-input-group>

            <h3 class="mt-4">Company</h3>
            <div class="mt-3 d-flex align-items-end">
                <div>
                    <label for="company-list">Choose Existing Company</label>
                    <b-form-select
                        id="company-list"
                        v-model="job.company._id"
                        @change="setCompany"
                        ><b-form-select-option
                            v-for="company in companies"
                            :key="company._id"
                            :value="company._id"
                            >{{ company.name }}</b-form-select-option
                        ></b-form-select
                    >
                </div>
                <b-button
                    class="ml-2"
                    variant="warning"
                    @click.prevent="resetCompany"
                    >Reset</b-button
                >
            </div>
            <label for="company-name">Name *</label>
            <b-form-input
                type="text"
                v-model="job.company.name"
                :state="validated ? (job.company.name ? true : false) : null"
                id="company-name"
                placeholder="Enter company name ..."
                required
            ></b-form-input>
            <label for="company-location">Location *</label>
            <b-form-input
                type="text"
                v-model="job.company.location"
                :state="
                    validated ? (job.company.location ? true : false) : null
                "
                id="company-location"
                placeholder="Enter location ..."
                required
            ></b-form-input>
            <label for="company-state">State *</label>
            <b-form-select
                id="company-state"
                v-model="job.company.state"
                :options="companyStateOptions"
                :state="validated ? (job.company.state ? true : false) : null"
            ></b-form-select>
            <label for="company-street">Street and House Number *</label>
            <b-form-input
                type="text"
                v-model="job.company.street"
                :state="validated ? (job.company.street ? true : false) : null"
                id="company-street"
                placeholder="Enter street and house number ..."
                required
            ></b-form-input>
            <label for="company-zip-code">ZIP Code *</label>
            <b-form-input
                type="number"
                v-model="job.company.zipCode"
                :state="validated ? (job.company.zipCode ? true : false) : null"
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
                    v-model="job.company.url"
                    :state="validated ? (job.company.url ? true : null) : null"
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
                    :src="job.company.logoUrl"
                ></b-avatar>
            </div>
            <ImageUploader
                :validated="validated"
                :imageUrl="job.company.logoUrl"
                :width="200"
                :height="200"
                @update-url="job.company.logoUrl = $event"
            ></ImageUploader>

            <h3 class="mt-4">Contact</h3>
            <label for="contact-title">Title</label>
            <b-form-select
                id="contact-title"
                v-model="job.contactTitle"
                :state="validated ? (job.contactTitle ? true : null) : null"
                :options="contactTitleOptions"
            ></b-form-select>
            <label for="contact-first-name">First Name</label>
            <b-form-input
                type="text"
                v-model="job.contactFirstName"
                :state="validated ? (job.contactFirstName ? true : null) : null"
                id="contact-first-name"
                placeholder="Enter first name ..."
            ></b-form-input>
            <label for="contact-last-name">Last Name</label>
            <b-form-input
                type="text"
                v-model="job.contactLastName"
                :state="validated ? (job.contactLastName ? true : null) : null"
                id="contact-last-name"
                placeholder="Enter last name ..."
            ></b-form-input>
            <label for="contact-email">Email Address</label>
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
                    placeholder="contact@your-company.com"
                ></b-form-input>
            </b-input-group>
            <label for="contact-phone">Phone Number</label>
            <b-input-group>
                <template v-slot:prepend>
                    <b-input-group-text
                        ><b-icon scale="1" icon="phone"></b-icon
                    ></b-input-group-text>
                </template>
                <b-form-input
                    type="tel"
                    v-model="job.contactPhone"
                    :state="validated ? (job.contactPhone ? true : null) : null"
                    id="contact-phone"
                    placeholder="Enter phone number ..."
                ></b-form-input>
            </b-input-group>

            <div class="d-flex justify-content-between my-4">
                <b-button variant="outline-danger" to="/dashboard">
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
    import {
        employmentTypeOptions,
        contactTitleOptions,
        companyStateOptions
    } from "@/utils/jobDataConfig.json";
    import TipTapEditor from "@/components/TipTapEditor.vue";
    import ImageUploader from "@/components/ImageUploader.vue";
    import Overlay from "@/components/Overlay";
    export default {
        name: "JobForm",
        components: { TipTapEditor, ImageUploader, Overlay },
        props: ["jobId"],
        data() {
            return {
                job: {
                    _id: "",
                    title: "",
                    description: "",
                    employmentType: null,
                    applicationDeadline: "",
                    extJobUrl: "",
                    applicationEmail: "",
                    contactTitle: null,
                    contactFirstName: "",
                    contactLastName: "",
                    contactEmail: "",
                    contactPhone: "",
                    company: {
                        _id: "",
                        name: "",
                        location: "",
                        state: "",
                        street: "",
                        zipCode: "",
                        url: "",
                        logoUrl: ""
                    }
                },
                companies: [],
                employmentTypeOptions,
                contactTitleOptions,
                companyStateOptions,
                validated: null,
                showOverlay: false,
                success: "",
                error: ""
            };
        },
        created: function() {
            this.jobId ? this.getJob(this.jobId) : null;
            this.getCompanies();
        },
        methods: {
            async getJob(jobId) {
                try {
                    const job = await axios.post("/api/jobs/private", {
                        query: `
                            query {
                                job(_id: "${jobId}") {
                                    _id
                                    title
                                    description
                                    employmentType
                                    applicationDeadline
                                    extJobUrl
                                    applicationEmail
                                    contactTitle
                                    contactFirstName
                                    contactLastName
                                    contactEmail
                                    contactPhone
                                    company {
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
                            }
                        `
                    });

                    this.job = job.data.data.job;

                    if (!this.job.company) {
                        this.job.company = {
                            _id: "",
                            name: "",
                            location: "",
                            state: "",
                            street: "",
                            zipCode: "",
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
                        "/api/companies/private",
                        {
                            query: `
                            query {
                                companies {
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
                        }
                    );

                    this.companies = companies.data.data.companies;
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
                                location: "${this.job.company.location}", 
                                state: "${this.job.company.state}", 
                                street: "${this.job.company.street}"
                                zipCode: "${this.job.company.zipCode}"
                                url: "${this.job.company.url}"
                                logoUrl: "${this.job.company.logoUrl}"
                            ) {
                                _id
                            }
                        }
                    `;

                    const companyQueryResponse = await axios.post(
                        "/api/companies/private",
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
                                        ? `_id: "${this.job._id}",`
                                        : ""
                                } 
                                title: "${this.job.title}", 
                                description: "${this.job.description}", 
                                employmentType: "${this.job.employmentType}", 
                                applicationDeadline: "${
                                    this.job.applicationDeadline
                                }"
                                extJobUrl: "${this.job.extJobUrl}"
                                applicationEmail: "${this.job.applicationEmail}"
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
                        "/api/jobs/private",
                        {
                            query: jobQuery
                        }
                    );

                    this.showOverlay = false;

                    if (!jobQueryResponse.data.data[jobMutationType]) {
                        this.error =
                            "Oh, something went wrong. Please try again!";
                    } else {
                        this.success = true;

                        setTimeout(() => {
                            this.$router.push("/dashboard");
                        }, 1000);
                    }
                } catch (err) {
                    this.error = "Oh, something went wrong. Please try again!";
                    console.log("err: ", err);
                }
            },
            formValidation() {
                this.validated = true;
                return !this.job.title ||
                    !this.job.description ||
                    !this.job.employmentType ||
                    !this.job.applicationDeadline ||
                    !this.job.company.name ||
                    !this.job.company.location ||
                    !this.job.company.state ||
                    !this.job.company.street ||
                    !this.job.company.zipCode
                    ? false
                    : true;
            },
            resetCompany() {
                for (const key in this.job.company) {
                    this.job.company[key] = "";
                }
            },
            setCompany() {
                this.companies.forEach(company => {
                    if (company._id === this.job.company._id) {
                        this.job.company.name = company.name;
                        this.job.company.location = company.location;
                        this.job.company.state = company.state;
                        this.job.company.street = company.street;
                        this.job.company.zipCode = company.zipCode;
                        this.job.company.url = company.url;
                        this.job.company.logoUrl = company.logoUrl;
                    }
                });
            }
        }
    };
</script>

<style lang="scss"></style>
