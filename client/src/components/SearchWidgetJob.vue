<template>
  <div>
    <b-form
      class="row mx-1"
      @keydown.enter.prevent="
        $router.push(
          `/stellenangebote?s=${searchTerm}&berufsgruppe=${profession}&ort=${localLocation ||
            location ||
            ''}`
        )
      "
    >
      <div class="col-12 col-lg-5 px-1 mb-2">
        <label class="sr-only sr-only-focusable" for="landing-search"
          >Suchbegriff</label
        >
        <b-input-group class="shadow1 border-radius2">
          <template #prepend>
            <b-input-group-text class="bg-secondary text-light border-0"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                /></svg
            ></b-input-group-text>
          </template>
          <b-form-input
            id="landing-search"
            v-model="searchTerm"
            :size="size"
            :placeholder="placeholder"
          ></b-form-input>
        </b-input-group>
      </div>
      <div class="col-12 col-lg-5 px-1 mb-2">
        <label class="sr-only sr-only-focusable" for="landing-location"
          >PLZ / Ort</label
        >
        <b-input-group class="shadow1 border-radius2">
          <template #prepend>
            <b-input-group-text class="bg-secondary text-light border-0"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                /></svg
            ></b-input-group-text>
          </template>
          <b-form-input
            id="landing-location"
            v-model="localLocation"
            :size="size"
            placeholder="PLZ / Ort..."
          ></b-form-input>
        </b-input-group>
      </div>
      <div class="col-12 col-lg-2 px-1 mb-2">
        <b-button
          aria-label="Suchen"
          :size="size"
          class="shadow1 h-100"
          variant="secondary"
          block
          :to="
            `/stellenangebote?s=${searchTerm}&berufsgruppe=${profession}&ort=${localLocation ||
              location ||
              ''}`
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
          <span class="d-lg-none ml-2">Suchen</span>
        </b-button>
      </div>
      <!-- <b-input-group>
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
              `/stellenangebote?s=${searchTerm}&berufsgruppe=${profession}&ort=${location}`
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
      </b-input-group> -->
    </b-form>
    <div v-if="showAdJobLink" class="mt-2 text-right">
      <b-link class="pt-3 pb-4 pl-3 small" to="/stellengesuche/info">
        Stellengesuch schalten
      </b-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchWidgetJob",
    props: {
      size: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "Jobtitel, Stichwort..."
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
        searchTerm: "",
        localLocation: ""
      };
    }
  };
</script>

<style></style>
