<template>
    <div class="new-job container py-5">
        <b-overlay :show="showOverlay" variant="transparent" blur="none">
            <h2>New Job</h2>
            <b-form :validated="validated">
                <label for="title">Job Title</label>
                <b-form-input
                    type="text"
                    v-model="form.title"
                    id="title"
                    placeholder="Enter job title..."
                    required
                ></b-form-input>
                <label for="description">Job Description</label>
                <b-form-textarea
                    id="textarea"
                    v-model="form.description"
                    placeholder="Enter job description..."
                    rows="6"
                    required
                ></b-form-textarea>
                <b-button
                    class="my-3"
                    variant="primary"
                    @click.prevent="onSubmit"
                >
                    Save
                </b-button>
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
                    >Your job has been saved successfully.
                </b-alert>
            </b-form>
        </b-overlay>
    </div>
</template>

<script>
    import axios from "@/axios";
    export default {
        name: "NewJob",
        methods: {
            async onSubmit() {
                try {
                    if (!this.formValidation()) {
                        return null;
                    }

                    this.showOverlay = true;
                    const response = await axios.post("/api/jobs/private", {
                        query: `
                        mutation {
                            addJob(title: "${this.form.title}", description: "${this.form.description}") {
                                _id
                                userId
                                title
                                description
                                status
                                createdAt
                            }
                        }
                    `
                    });
                    this.showOverlay = false;

                    if (!response.data.data.addJob) {
                        this.error =
                            "Oh, something went wrong. Please try again!";
                    } else {
                        this.validated = false;
                        this.formReset();
                        this.success = true;

                        setTimeout(() => {
                            this.$router.push("/dashboard");
                        }, 2000);
                    }
                } catch (err) {
                    this.error = "Oh, something went wrong. Please try again!";
                    console.log("err: ", err);
                }
            },
            formValidation() {
                this.validated = true;
                return !this.form.title || !this.form.description
                    ? false
                    : true;
            },
            formReset() {
                for (const key in this.form) {
                    this.form[key] = "";
                }
            }
        },
        data() {
            return {
                form: {
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
