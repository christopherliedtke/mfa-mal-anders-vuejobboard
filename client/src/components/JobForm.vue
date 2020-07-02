<template>
    <div class="job-form position-relative">
        <b-overlay
            :show="showOverlay"
            variant="transparent"
            blur="none"
            no-wrap
        >
        </b-overlay>
        <b-form id="job-form" :validated="validated">
            <h3 class="mt-4">Job Data</h3>
            <label for="title">Job Title *</label>
            <b-form-input
                type="text"
                v-model="job.title"
                id="title"
                placeholder="Enter job title..."
                required
            ></b-form-input>
            <label for="employment-type">Employment Type *</label>
            <b-form-select
                id="employment-type"
                v-model="job.employmentType"
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
            <label for="job-url">URL to Job Post</label>
            <b-form-input
                type="url"
                v-model="job.jobUrl"
                id="job-url"
                placeholder="https://www.your-website.com/job-post"
            ></b-form-input>
            <h3 class="mt-4">Contact</h3>
            <label for="contact-title">Title</label>
            <b-form-select
                id="contact-title"
                v-model="job.contactTitle"
                :options="contactTitleOptions"
            ></b-form-select>
            <label for="contact-first-name">First Name *</label>
            <b-form-input
                type="text"
                v-model="job.contactFirstName"
                id="contact-first-name"
                placeholder="Enter first name..."
                required
            ></b-form-input>
            <label for="contact-last-name">Last Name *</label>
            <b-form-input
                type="text"
                v-model="job.contactLastName"
                id="contact-last-name"
                placeholder="Enter last name..."
                required
            ></b-form-input>
            <label for="contact-email">Email Address</label>
            <b-form-input
                type="email"
                v-model="job.contactEmail"
                id="contact-email"
                placeholder="Enter email address..."
            ></b-form-input>
            <label for="contact-phone">Phone Number</label>
            <b-form-input
                type="tel"
                v-model="job.contactPhone"
                id="contact-phone"
                placeholder="Enter phone number..."
            ></b-form-input>

            <div class="d-flex justify-content-between">
                <b-button class="my-3" variant="outline-danger" to="/dashboard">
                    Cancel
                </b-button>
                <b-button
                    class="my-3"
                    variant="success"
                    @click.prevent="onSubmit"
                >
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
        contactTitleOptions
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
                    employmentType: "full",
                    applicationDeadline: "",
                    jobUrl: "",
                    contactTitle: null,
                    contactFirstName: "",
                    contactLastName: "",
                    contactEmail: "",
                    contactPhone: ""
                },
                employmentTypeOptions,
                contactTitleOptions,
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
                    if (!this.formValidation()) {
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
                        this.validated = null;
                        // this.formReset();
                        this.success = true;

                        setTimeout(() => {
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
                    !this.job.applicationDeadline
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

<style scoped lang="scss"></style>
