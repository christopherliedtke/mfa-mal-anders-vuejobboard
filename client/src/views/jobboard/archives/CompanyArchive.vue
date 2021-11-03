<template>
  <div class="company-archive">
    <div class="title">
      <h1>
        Unternehmensverzeichnis
      </h1>
      <!-- <b-breadcrumb :items="breadcrumbs" class="text-capitalize"></b-breadcrumb> -->
    </div>

    <div class="container py-4 py-lg-5">
      <nav class="list-group-flush">
        <b-link
          v-for="company in companies"
          :key="company._id"
          class="list-group-item list-group-item-action h5 text-truncate my-3 text-primary"
          :to="`/unternehmen/${company._id}/${company.slug}`"
          ><strong>{{ company.name }}</strong> | {{ company.location }}</b-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CompanyArchive",
    data() {
      return {
        companies: null
      };
    },
    async created() {
      await this.getCompanies();
    },
    methods: {
      async getCompanies() {
        try {
          const companies = await this.$axios.get("/graphql", {
            params: {
              query: `
                  query {
                    companies {
                      _id
                      name
                      location
                      logoUrl
                      slug
                    }
                  }
                `
            }
          });

          if (companies.data.data.companies) {
            this.companies = companies.data.data.companies;
          } else {
            throw new Error();
          }
        } catch (err) {
          this.$root.$bvToast.toast(
            "Unternehmen konnten nicht geladen werden.",
            {
              title: `Unternehmen nicht verfügbar`,
              variant: "warning",
              toaster: "b-toaster-bottom-right",
              solid: true,
              noAutoHide: true
            }
          );

          this.$router.push("/stellenangebote");
        }
      }
    }
  };
</script>

<style></style>
