export const saveCompanyMixin = {
    methods: {
        async saveCompany(
            mutationType,
            apiCompaniesSchema,
            company,
            redirect = false
        ) {
            try {
                const query = `
                        mutation {
                            ${mutationType}(
                                ${
                                    mutationType === "updateCompany"
                                        ? `_id: "${company._id}",`
                                        : ""
                                } 
                                name: "${company.name}", 
                                street: "${company.street}"
                                location: "${company.location}", 
                                zipCode: "${company.zipCode}"
                                state: "${company.state}", 
                                country: "${company.country}", 
                                geoCodeLat: ${company.geoCodeLat}, 
                                geoCodeLng: ${company.geoCodeLng}, 
                                size: "${company.size}"
                                url: "${
                                    !/^https?:\/\//i.test(company.url) &&
                                    company.url
                                        ? "https://" + company.url
                                        : company.url
                                }"
                                logoUrl: "${company.logoUrl}"
                            ) {
                                _id
                            }
                        }
                    `;

                const response = await this.$axios.post(
                    `/api/companies/${apiCompaniesSchema}`,
                    { query }
                );

                if (!response.data.data[mutationType]) {
                    this.error =
                        "Oh, da ist leider etwas schief gelaufen. Bitte versuchen Sie es noch einmal.";

                    return { success: false };
                } else {
                    this.$root.$bvToast.toast(
                        "Das Unternehmen wurde erfolgreich gespeichert.",
                        {
                            title: `Unternehmen gespeichert`,
                            variant: "success",
                            toaster: "b-toaster-bottom-right",
                            solid: true
                        }
                    );

                    if (redirect) {
                        this.hasHistory && this.apiCompaniesSchema === "admin"
                            ? this.$router.go(-1)
                            : this.$router.push("/user/dashboard?tab=2");
                    }

                    return {
                        success: true,
                        companyId: response.data.data[mutationType]._id
                    };
                }
            } catch (err) {
                this.$root.$bvToast.toast(
                    "Beim Speichern des Unternehmens ist ein Fehler aufgetreten. Bitte versuchen Sie es noch einmal.",
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
        }
    }
};
