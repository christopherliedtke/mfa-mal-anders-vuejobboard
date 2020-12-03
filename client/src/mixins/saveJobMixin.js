export const saveJobMixin = {
    methods: {
        async saveJob(mutationType, apiJobsSchema, job, redirect = false) {
            try {
                const jobQuery = `
                        mutation {
                            ${mutationType}(
                                ${
                                    mutationType === "updateJob"
                                        ? `_id: "${job._id}"`
                                        : ""
                                } 
                                title: "${job.title}"
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

                const jobQueryResponse = await this.$axios.post(
                    `/api/jobs/${apiJobsSchema}`,
                    {
                        query: jobQuery
                    }
                );

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
                } else {
                    this.success = true;

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
            }
        }
    }
};
