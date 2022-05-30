<template>
  <div>
    <b-form
      @submit.prevent="
        $router.push(
          `/stellenangebote?s=${searchTerm}&profession=${profession}&location=${location}`
        )
      "
    >
      <label class="sr-only sr-only-focusable" for="landing-search"
        >Suchbegriff</label
      >
      <b-input-group>
        <b-form-input
          id="landing-search"
          v-model="searchTerm"
          size="lg"
          class="shadow1"
          :placeholder="placeholder"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            aria-label="Suchen"
            size="lg"
            class="shadow1"
            variant="secondary"
            :to="
              `/stellenangebote?s=${searchTerm}&profession=${profession}&location=${location}`
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <span class="sr-only">Stellenangebote für MFA / ZFA finden</span>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
    <div v-if="showAdJobLink" class="mt-2 text-right">
      <b-link class="pt-3 pb-4 px-3 small" to="/fuer-arbeitgeber">
        Stellenanzeige schalten
      </b-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchWidgetJob",
    props: {
      placeholder: {
        type: String,
        default: "Stelle finden..."
      },
      showAdJobLink: {
        type: Boolean,
        default: true
      },
      profession: {
        type: String,
        default: ""
      },
      location: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        searchTerm: ""
      };
    }
  };
</script>

<style></style>
