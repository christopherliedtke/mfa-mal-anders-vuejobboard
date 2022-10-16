<template>
  <div class="container-fluid not-found" style="height: 100vh">
    <div class="container d-flex flex-column align-items-center">
      <h1 class="display-2 bold text-light text-center mt-5 pt-lg-5">
        404 – Seite nicht gefunden
      </h1>
      <b-img
        class="mb-5"
        fluid
        src="@/assets/img/404_page_not_found_.svg"
        style="max-height: 250px"
      />
      <div class="text-center mx-auto" style="max-width: 500px">
        <p class="text-light bold">
          Tut uns Leid, diese Seite konnten wir nicht finden. Auf unserer
          Startseite gibt es mehr zu entdecken.
        </p>
        <b-button class="mr-2 mb-2" variant="primary" to="/"
          >Zur Startseite</b-button
        >
        <b-button class="mb-2" to="/stellenangebote" variant="secondary"
          >Zur Stellenbörse</b-button
        >
      </div>
    </div>

    <Head
      title="404 | Seite nicht gefunden"
      desc="Diese Seite existiert nicht."
      img=""
    />
  </div>
</template>

<script>
  export default {
    name: "NotFound",
    head: {
      meta() {
        return [
          {
            name: "robots",
            content: "noindex",
            id: "noindex"
          },
          {
            name: "prerender-status-code",
            content: "404",
            id: "prerender-status-code"
          }
        ];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .not-found {
    background: linear-gradient(0deg, #fffcfd 0%, #fffcfd66 25%, #6d023077 100%),
      image-set(
          url("~@/assets/img/medizinischesPersonal-1200x513.jpg") 1x,
          url("~@/assets/img/medizinischesPersonal.jpg") 2x
        )
        center center;

    background-size: cover;
    background-blend-mode: normal;
  }
</style>
