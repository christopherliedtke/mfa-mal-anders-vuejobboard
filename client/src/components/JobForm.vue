<template>
    <div class="job-form position-relative">
        <b-overlay
            :show="showOverlay"
            variant="transparent"
            blur="none"
            no-wrap
        >
        </b-overlay>
        <b-form :validated="validated">
            <label for="title">Job Title</label>
            <b-form-input
                type="text"
                v-model="job.title"
                id="title"
                placeholder="Enter job title..."
                required
            ></b-form-input>
            <label for="description">Job Description</label>
            <b-form-textarea
                id="textarea"
                v-model="job.description"
                placeholder="Enter job description..."
                rows="6"
                required
            ></b-form-textarea>
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
            <b-alert
                v-if="error"
                class="mt-3"
                show
                dismissible
                variant="warning"
                >{{ error }}</b-alert
            >
            <b-alert
                v-if="success"
                class="mt-3"
                show
                dismissible
                variant="success"
                >Your job has been saved successfully. You will be redirected in
                a moment...
                <b-spinner
                    style="width: 1.2rem; height: 1.2rem;"
                    variant="success"
                    label="Spinning"
                ></b-spinner>
            </b-alert>
        </b-form>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "JobForm",
        props: ["jobId"],
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
                                    updateJob(_id: "${this.job._id}", title: "${this.job.title}", description: "${this.job.description}") {
                                        _id
                                    }
                                }
                            `
                        });
                    } else {
                        response = await axios.post("/api/jobs/private", {
                            query: `
                                mutation {
                                    addJob(title: "${this.job.title}", description: "${this.job.description}") {
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
                        this.validated = false;
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
                return !this.job.title || !this.job.description ? false : true;
            },
            formReset() {
                for (const key in this.job) {
                    this.job[key] = "";
                }
            }
        },
        data() {
            return {
                job: {
                    title: "",
                    description: ""
                },
                validated: false,
                showOverlay: false,
                success: "",
                error: ""
            };
        }
    };
</script>

<style scoped lang="scss"></style>
