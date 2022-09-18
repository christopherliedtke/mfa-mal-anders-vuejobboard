<template>
  <div class="company-archive">
    <div class="title">
      <h1>
        Unternehmensverzeichnis
      </h1>
      <b-breadcrumb :items="breadcrumbs" class="text-capitalize"></b-breadcrumb>
    </div>

    <div class="container py-4 py-lg-5">
      <nav class="list-group-flush">
        <b-link
          v-for="company in companies"
          :key="company._id"
          class="list-group-item list-group-item-action py-3 mb-0 text-primary d-flex justify-content-between"
          :to="`/unternehmen/${company._id}/${company.slug}`"
          ><span
            ><strong>{{ company.name }}</strong> | {{ company.location }}</span
          >
          <div v-if="company.logoUrl" class="logo-container ml-3">
            <b-img-lazy
              fluid
              :src="company.logoUrl"
              :alt="`Logo - ${company.name}`"
              class="logo"
            />
          </div>
        </b-link>
      </nav>
    </div>

    <Head
      title="Unternehmensverzeichnis für Stellenangebote"
      desc="Finde passende Unternehmen mit Stellenanzeigen auf MFA mal anders"
      :script="snippet"
    />
  </div>
</template>

<script>
  export default {
    name: "JobBoardCompanyArchive",
    data() {
      return {
        companies: null,
        breadcrumbs: [
          { text: "Home", to: "/" },
          {
            text: "Unternehmensverzeichnis",
            to: "/unternehmensverzeichnis"
          }
        ],
        snippet: [
          {
            id: "canonical",
            rel: "canonical",
            href: `${this.$config.website.url}/unternehmensverzeichnis`
          },
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.mfa-mal-anders.de"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Unternehmensverzeichnis",
                "item": "https://www.mfa-mal-anders.de/unternehmensverzeichnis"
              }]
            }`
          }
        ]
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

          this.$router.push("/");
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .logo-container {
    background-color: $light;
    border-radius: $border-radius1;
    box-shadow: $shadow1;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      max-width: 40px;
      max-height: 40px;
    }
  }
</style>
