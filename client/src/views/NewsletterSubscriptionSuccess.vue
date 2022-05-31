<template>
  <div class="newsletter-success">
    <h1 class="title">{{ title }}</h1>
    <div class="container py-5">
      <p>
        Deine Anmeldung für den Job-Newsletter war erfolgreich.
      </p>
      <b-button to="/stellenangebote" variant="secondary"
        >Weiter zur Stellenbörse</b-button
      >
      <ArticleListRandom style="margin-top: 5rem" />
    </div>
    <Head
      :title="title"
      desc="Anmeldung für den Job-Newsletter erfolgreich."
      img=""
    />
  </div>
</template>

<script>
  import ArticleListRandom from "@/components/ArticleListRandom.vue";
  export default {
    name: "NewsletterSubscriptionSuccess",
    components: {
      ArticleListRandom
    },
    data() {
      return {
        title: "Job Newsletter Anmeldung erfolgreich"
      };
    }
  };
</script>
