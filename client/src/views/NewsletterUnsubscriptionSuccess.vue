<template>
  <div class="newsletter-unsubscribe-success">
    <h1 class="title">{{ title }}</h1>
    <div class="container py-3 py-lg-5">
      <p>
        Du hast Dich erfolgreich von unserem Job-Newsletter abgemeldet.
      </p>
      <b-button to="/stellenangebote" variant="secondary"
        >Weiter zur Stellenbörse</b-button
      >
      <ArticleListRandom style="margin-top: 5rem" />
    </div>
    <Head :title="title" desc="Job-Newsletter Abmeldung erfolgreich" img="" />
  </div>
</template>

<script>
  import ArticleListRandom from "@/components/ArticleListRandom.vue";

  export default {
    name: "NewsletterUnsubscriptionSuccess",
    components: {
      ArticleListRandom
    },
    data() {
      return {
        title: "Job Newsletter Abmeldung erfolgreich"
      };
    }
  };
</script>
