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
            size="lg"
            class="shadow1"
            variant="secondary"
            :to="
              `/stellenangebote?s=${searchTerm}&profession=${profession}&location=${location}`
            "
            ><Fa icon="search" /> <span class="sr-only">Suchen</span>
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
    name: "JobSearchSingleForm",
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
