import { getHereServiceMixin } from "@/mixins/getHereServiceMixin.js";
export const saveCompanyMixin = {
  mixins: [getHereServiceMixin],
  methods: {
    async saveCompany(mutationType, company, redirect = false) {
      try {
        const location = await this.getHereLocation(
          `${company.street} ${company.location} ${company.zipCode} ${company.country}`
        );
        company.geoCodeLat =
          location.position && location.position.lat
            ? location.position.lat
            : this.$config.maps.defaultCenter.lat;
        company.geoCodeLng =
          location.position && location.position.lng
            ? location.position.lng
            : this.$config.maps.defaultCenter.lng;
        company.state =
          location.address && location.address.state
            ? location.address.state
            : "";

        const companyQuery = `
          mutation {
            ${mutationType}(
              ${
                mutationType === "updateCompany" ||
                mutationType === "adminUpdateCompany"
                  ? `_id: "${company._id}",`
                  : ""
              } 
              name: "${company.name}", 
              description: "${company.description || ""}", 
              street: "${company.street}"
              location: "${company.location}", 
              zipCode: "${company.zipCode}"
              state: "${company.state}", 
              country: "${company.country}", 
              geoCodeLat: ${company.geoCodeLat}, 
              geoCodeLng: ${company.geoCodeLng}, 
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

        if (!response.data.data[mutationType]._id) {
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
            this.hasHistory && this.apiJobsSchema === "admin"
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
