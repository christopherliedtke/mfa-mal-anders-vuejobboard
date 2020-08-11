<template>
    <div class="newsletter-signup">
        <h5>Sign Up for Job Newsletter</h5>
        <b-form>
            <b-form-input
                class="mt-2"
                type="email"
                v-model="form.email"
                id="email"
                placeholder="Enter your email..."
                autocomplete="email"
                required
                trim
                :state="validated ? (form.email ? true : false) : null"
            ></b-form-input>
            <b-form-select
                class="mt-2"
                id="newsletter-state"
                v-model="form.state"
                :state="validated ? (form.state ? true : false) : null"
            >
                <b-form-select-option :value="null" disabled
                    >-- Choose a state --</b-form-select-option
                >
                <b-form-select-option
                    v-for="state in companyStateOptions"
                    :key="state"
                    :value="state"
                    >{{ state }}</b-form-select-option
                >
            </b-form-select>
            <b-form-checkbox
                class="mt-2"
                id="acceptance"
                v-model="form.accepted"
                name="acceptance"
                :value="true"
                :unchecked-value="false"
                switch
                required
                :state="validated ? (form.accepted ? true : false) : null"
            >
                I accept the terms of use
            </b-form-checkbox>

            <b-button
                class="mt-2"
                :variant="success ? 'success' : 'primary'"
                @click.prevent="onSubmit"
            >
                <b-icon v-if="success" icon="check2" class="mr-2" />
                {{ success ? "Subscribed" : "Subscribe" }}
            </b-button>
        </b-form>

        <b-alert v-if="success" class="mt-3" show dismissible variant="success"
            >You signed up for the job newsletter. Please check your email inbox
            to verify the subscription.</b-alert
        >
        <b-alert v-if="error" class="mt-3" show dismissible variant="warning">{{
            error
        }}</b-alert>
        <Overlay :show="showOverlay" />
    </div>
</template>

<script>
    import axios from "@/axios";
    import { companyStateOptions } from "@/utils/jobDataConfig.json";
    import Overlay from "@/components/utils/Overlay";
    export default {
        name: "NewsletterSignUpForm",
        components: {
            Overlay
        },
        data() {
            return {
                form: {
                    email: "",
                    state: null,
                    accepted: false
                },
                validated: null,
                showOverlay: false,
                error: null,
                success: null,
                companyStateOptions
            };
        },
        methods: {
            async onSubmit() {
                this.error = false;

                if (!this.formValidation()) {
                    this.error = "Please provide all necessary information.";
                    return null;
                }

                this.showOverlay = true;

                try {
                    const response = await axios.post(
                        "/api/newsletter/sign-up",
                        {
                            email: this.form.email,
                            state: this.form.state,
                            accepted: this.form.accepted
                        }
                    );

                    if (response.data.success) {
                        this.success = true;
                    } else {
                        this.error =
                            "Your subscription failed. Please try again!";
                    }
                } catch (err) {
                    console.log(
                        "Error on post to /api/newsletter/sign-up: ",
                        err
                    );
                    this.error = "Your subscription failed. Please try again!";
                }

                this.showOverlay = false;
            },
            formValidation() {
                this.validated = true;
                return !this.form.email ||
                    !this.form.state ||
                    !this.form.accepted
                    ? false
                    : true;
            }
        }
    };
</script>

<style scoped lang="scss"></style>
