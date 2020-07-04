<template>
    <div class="job-form position-relative">
        <b-overlay
            :show="showOverlay"
            variant="transparent"
            blur="none"
            no-wrap
        >
        </b-overlay>
        <b-form id="job-form">
            <!-- <b-form id="job-form" :validated="validated"> -->
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
                v-on:update-content="job.description = $event"
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
            <label for="company-name">Name *</label>
            <b-form-input
                type="text"
                v-model="job.companyName"
                :state="validated ? (job.companyName ? true : false) : null"
                id="company-name"
                placeholder="Enter company name ..."
                required
            ></b-form-input>
            <label for="company-location">Location *</label>
            <b-form-input
                type="text"
                v-model="job.companyLocation"
                :state="validated ? (job.companyLocation ? true : false) : null"
                id="company-location"
                placeholder="Enter location ..."
                required
            ></b-form-input>
            <label for="company-state">State *</label>
            <b-form-select
                id="company-state"
                v-model="job.companyState"
                :options="companyStateOptions"
                :state="!validated ? null : !job.companyState ? false : true"
            ></b-form-select>
            <label for="company-street">Street and House Number *</label>
            <b-form-input
                type="text"
                v-model="job.companyStreet"
                :state="validated ? (job.companyStreet ? true : false) : null"
                id="company-street"
                placeholder="Enter street and house number ..."
                required
            ></b-form-input>
            <label for="company-zip-code">ZIP Code *</label>
            <b-form-input
                type="number"
                v-model="job.companyZipCode"
                :state="validated ? (job.companyZipCode ? true : false) : null"
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
                    v-model="job.companyUrl"
                    :state="validated ? (job.companyUrl ? true : null) : null"
                    id="company-url"
                    placeholder="https://www.your-company.com"
                ></b-form-input>
            </b-input-group>
            <b-form-checkbox class="mt-3 ml-1" v-model="saveCompany" switch>
                Save this company to reuse another time.
            </b-form-checkbox>

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
                    Save
                </b-button>
            </div>
        </b-form>
        <b-alert v-if="error" class="mt-3" show dismissible variant="warning">{{
            error
        }}</b-alert>
        <b-alert v-if="success" class="mt-3" show dismissible variant="success"
            >Your job has been saved successfully. You will be redirected in a
            moment...
            <b-spinner
                style="width: 1.2rem; height: 1.2rem;"
                variant="success"
                label="Spinning"
            ></b-spinner>
        </b-alert>
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
    export default {
        name: "JobForm",
        components: { TipTapEditor },
        props: ["jobId"],
        data() {
            return {
                job: {
                    title: "",
                    description: "",
                    employmentType: employmentTypeOptions[0].value,
                    applicationDeadline: "",
                    extJobUrl: "",
                    applicationEmail: "",
                    contactTitle: null,
                    contactFirstName: "",
                    contactLastName: "",
                    contactEmail: "",
                    contactPhone: "",
                    companyId: "",
                    companyName: "",
                    companyLocation: "",
                    companyState: null,
                    companyStreet: "",
                    companyZipCode: null,
                    companyUrl: ""
                },
                employmentTypeOptions,
                contactTitleOptions,
                companyStateOptions,
                saveCompany: false,
                validated: null,
                showOverlay: false,
                success: "",
                error: ""
            };
        },
        created: function() {
            if (this.jobId) {
                this.getJob(this.jobId);
            }
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
                                    companyId
                                    companyName
                                    companyLocation
                                    companyState
                                    companyStreet
                                    companyZipCode
                                    companyUrl
                                }
                            }
                        `
                    });

                    this.job = job.data.data.job;
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

                    let response;

                    if (this.jobId) {
                        response = await axios.post("/api/jobs/private", {
                            query: `
                                mutation {
                                    updateJob(
                                        _id: "${this.job._id}", 
                                        title: "${this.job.title}", 
                                        description: "${this.job.description}", 
                                        employmentType: "${this.job.employmentType}", 
                                        applicationDeadline: "${this.job.applicationDeadline}"
                                        extJobUrl: "${this.job.extJobUrl}"
                                        applicationEmail: "${this.job.applicationEmail}"
                                        contactTitle: "${this.job.contactTitle}"
                                        contactFirstName: "${this.job.contactFirstName}"
                                        contactLastName: "${this.job.contactLastName}"
                                        contactEmail: "${this.job.contactEmail}"
                                        contactPhone: "${this.job.contactPhone}"
                                        companyId: "${this.job.contactPhone}"
                                        companyName: "${this.job.companyName}"
                                        companyLocation: "${this.job.companyLocation}"
                                        companyState: "${this.job.companyState}"
                                        companyStreet: "${this.job.companyStreet}"
                                        companyZipCode: "${this.job.companyZipCode}"
                                        companyUrl: "${this.job.companyUrl}"
                                    ) {
                                        _id
                                    }
                                }
                            `
                        });
                    } else {
                        response = await axios.post("/api/jobs/private", {
                            query: `
                                mutation {
                                    addJob(
                                        title: "${this.job.title}", 
                                        description: "${this.job.description}", 
                                        employmentType: "${this.job.employmentType}", 
                                        applicationDeadline: "${this.job.applicationDeadline}"
                                        extJobUrl: "${this.job.extJobUrl}"
                                        applicationEmail: "${this.job.applicationEmail}"
                                        contactTitle: "${this.job.contactTitle}"
                                        contactFirstName: "${this.job.contactFirstName}"
                                        contactLastName: "${this.job.contactLastName}"
                                        contactEmail: "${this.job.contactEmail}"
                                        contactPhone: "${this.job.contactPhone}"
                                        companyId: "${this.job.contactPhone}"
                                        companyName: "${this.job.companyName}"
                                        companyLocation: "${this.job.companyLocation}"
                                        companyState: "${this.job.companyState}"
                                        companyStreet: "${this.job.companyStreet}"
                                        companyZipCode: "${this.job.companyZipCode}"
                                        companyUrl: "${this.job.companyUrl}"
                                    ) {
                                        _id
                                    }
                                }
                            `
                        });
                    }

                    this.showOverlay = false;

                    if (
                        !response.data.data.addJob &&
                        !response.data.data.updateJob
                    ) {
                        this.error =
                            "Oh, something went wrong. Please try again!";
                    } else {
                        // this.formReset();
                        this.success = true;

                        setTimeout(() => {
                            this.validated = null;
                            this.$router.push("/dashboard");
                        }, 3000);
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
                    !this.job.companyName ||
                    !this.job.companyLocation ||
                    !this.job.companyState ||
                    !this.job.companyStreet ||
                    !this.job.companyZipCode
                    ? false
                    : true;
            },
            formReset() {
                for (const key in this.job) {
                    this.job[key] = "";
                }
            }
        }
    };
</script>

<style lang="scss"></style>
