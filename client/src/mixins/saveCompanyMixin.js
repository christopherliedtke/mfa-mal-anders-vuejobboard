export const saveCompanyMixin = {
  methods: {
    async saveCompany(
      mutationType,
      company,
      redirect = false,
      userId = undefined
    ) {
      try {
        const companyQuery = `
          mutation {
            ${mutationType}(
              ${
                mutationType === "updateCompany" ||
                mutationType === "adminUpdateCompany"
                  ? `_id: "${company._id}",`
                  : ""
              } 
              ${userId ? `userId: "${userId}",` : ""} 
              name: "${company.name}", 
              noLocation: ${company.noLocation || false},
              description: "${company.description || ""}", 
              street: "${company.street}"
              location: "${company.location}", 
              zipCode: "${company.zipCode}"
              country: "${company.country}", 
              size: "${company.size}"
              url: "${
                !/^https?:\/\//i.test(company.url) && company.url
                  ? "https://" + company.url
                  : company.url
              }"
              logoUrl: "${company.logoUrl}"
            ) {
              _id
            }
          }
      `;

        const response = await this.$axios.post(`/graphql`, {
          query: companyQuery
        });

        if (response.data.errors) {
          throw new Error(
            response.data.errors[0].extensions.argumentName === "location"
              ? response.data.errors[0].message
              : ""
          );
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
            this.hasHistory && this.apiJobsSchema === "admin"
              ? this.$router.go(-1)
              : this.$router.push("/user/unternehmen");
          }

          return {
            success: true,
            companyId: response.data.data[mutationType]._id
          };
        }
      } catch (err) {
        // console.log(err.response.data);
        this.$root.$bvToast.toast(
          err
            ? err.message
            : "Beim Speichern des Unternehmens ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Eingaben und versuchen es noch einmal.",
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
