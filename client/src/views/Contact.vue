<template>
  <div>
    <div class="title">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="contact container py-3 py-lg-5">
      <ContactForm :title="formContent.title" :intro="formContent.intro" />
    </div>
    <Head
      :title="title"
      desc="Du hast ein Anliegen, dass Du mit uns besprechen möchtest? Nimm noch heute Kontakt zu uns auf."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ContactForm from "@/components/ContactForm.vue";
  export default {
    name: "Contact",
    components: {
      ContactForm
    },
    data() {
      return {
        title: "Kontakt",
        formContent: {
          title:
            this.$route.query.role != "employer"
              ? "Nimm Kontakt auf!"
              : "Nehmen Sie Kontakt auf!",
          intro:
            this.$route.query.role != "employer"
              ? "Hast Du Fragen, Anregungen oder Hinweise zur Webseite, suchst Austausch zum Thema “Jobs und Karriere für MFAs / ZFAs” oder benötigst Hilfe bei der Jobsuche bzw. Personalsuche? Dann schreibe uns gern und nutze dazu das Kontaktformular."
              : ""
        },
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Kontakt", to: "/kontakt" }
        ],
        snippet: [
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "MFA mal anders",
                "item": "https://www.mfa-mal-anders.de"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Kontakt",
                "item": "https://www.mfa-mal-anders.de/kontakt"
              }]
            }`
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .contact {
    background: url("/img/MfaMalAnders_logo_circle_bgdark_white.svg") center
      center no-repeat transparentize($light, $amount: 0.05);
    background-size: 50vh;
    background-blend-mode: lighten;
  }
</style>
