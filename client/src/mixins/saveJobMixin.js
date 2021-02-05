export const saveJobMixin = {
    methods: {
        async saveJob(mutationType, job, redirect = false) {
            try {
                const jobQuery = `
                        mutation {
                            ${mutationType}(
                                ${
                                    mutationType === "updateJob" ||
                                    mutationType === "adminUpdateJob"
                                        ? `_id: "${job._id}"`
                                        : ""
                                } 
                                title: "${job.title}"
                                publishedAt: ${job.publishedAt}
                                paidAt: ${job.paidAt}
                                paidExpiresAt: ${job.paidExpiresAt}
                                paidAmount: ${job.paidAmount}
                                refreshFrequency: ${job.refreshFrequency}
                                description: "${job.description.replace(
                                    /"/g,
                                    '\\"'
                                )}"
                                employmentType: "${job.employmentType}"
                                applicationDeadline: "${
                                    job.applicationDeadline
                                }"
                                simpleApplication: ${job.simpleApplication}
                                specialization: "${job.specialization}"
                                extJobUrl: "${
                                    !/^https?:\/\//i.test(job.extJobUrl) &&
                                    job.extJobUrl
                                        ? "https://" + job.extJobUrl
                                        : job.extJobUrl
                                }"
                                applicationEmail: "${job.applicationEmail}"
                                imageUrl: "${job.imageUrl}"
                                salaryMin: "${job.salaryMin}"
                                salaryMax: "${job.salaryMax}"
                                contactGender: "${job.contactGender}"
                                contactTitle: "${job.contactTitle}"
                                contactFirstName: "${job.contactFirstName}"
                                contactLastName: "${job.contactLastName}"
                                contactEmail: "${job.contactEmail}"
                                contactPhone: "${job.contactPhone}"
                                company: "${job.company._id}"
                            ) {
                                _id
                            }
                        }
                    `;

                const jobQueryResponse = await this.$axios.post(`/graphql`, {
                    query: jobQuery
                });

                if (!jobQueryResponse.data.data[mutationType]) {
                    this.$root.$bvToast.toast(
                        "Beim Speichern der Stellenanzeige ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
                        {
                            title: `Fehler beim Speichern`,
                            variant: "danger",
                            toaster: "b-toaster-bottom-right",
                            solid: true,
                            noAutoHide: true
                        }
                    );

                    return { success: false };
                } else {
                    this.trackEvent(
                        `${mutationType}: ${job.title} | ${job.company.state} - ${jobQueryResponse.data.data[mutationType]._id}`,
                        "Job_Ad",
                        mutationType
                    );

                    this.$root.$bvToast.toast(
                        "Die Stellenanzeige wurde erfolgreich gespeichert.",
                        {
                            title: `Stellenanzeige gespeichert`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true
                        }
                    );

                    if (redirect) {
                        this.hasHistory
                            ? this.$router.go(-1)
                            : this.$router.push("/user/dashboard");
                    }

                    return { success: true };
                }
            } catch (err) {
                this.$root.$bvToast.toast(
                    "Beim Speichern der Stellenanzeige ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
                    {
                        title: `Fehler beim Speichern`,
                        variant: "danger",
                        toaster: "b-toaster-bottom-right",
                        solid: true,
                        noAutoHide: true
                    }
                );

                return { success: false };
            }
        },
        hasHistory() {
            return window.history.length > 2;
        },
        trackEvent(label, category, action) {
            if (!this.$store.state.auth.user.isAdmin) {
                this.$gtag.event(action, {
                    event_category: category,
                    event_label: label
                });
            }
        }
    }
};
