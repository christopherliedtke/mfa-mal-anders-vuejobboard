<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <b-container class="contact py-3 py-lg-5">
      <ContactForm :title="formContent.title" :intro="formContent.intro" />
    </b-container>
    <Head
      :title="title"
      desc="Du hast ein Anliegen, dass Du mit uns besprechen möchtest? Nimm noch heute Kontakt zu uns auf."
      img=""
      :script="snippet"
    />
  </div>
</template>

<script>
  import ContactForm from "@/components/forms/ContactForm.vue";
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
    background: url("~@/assets/img/new_message.svg") center center no-repeat
      transparentize($light, $amount: 0.3);
    background-size: 50vh;
    background-blend-mode: lighten;
  }
</style>
