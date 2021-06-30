export const getHereServiceMixin = {
  data() {
    return {
      hereMaps: {
        apiKey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
        platform: null,
        service: null
      }
    };
  },
  async created() {
    try {
      // Script is loaded, do something
      await this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");
      await Promise.all([
        this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js")
      ]);

      this.initPlatform();
    } catch (err) {
      // Failed to fetch script
    }
  },
  methods: {
    async initPlatform() {
      this.hereMaps.platform = new window.H.service.Platform({
        apikey: this.hereMaps.apiKey
      });
      this.hereMaps.service = this.hereMaps.platform.getSearchService();
      // await this.getHereLocationSuggestions("berl");
    },
    async getHereLocation(str) {
      let location = {};

      try {
        const response = await this.hereMaps.service.geocode({
          q: str
        });

        location = response.items[0];
      } catch (err) {
        //
      } finally {
        return location;
      }
    },
    async getHereLocationSuggestions(str, maxresults = 5, resultType = "city") {
      let locations = [];

      try {
        // console.log("this.hereMaps.service: ", this.hereMaps.service);

        // const response = await this.hereMaps.service.autosuggest({
        //   at: "52.5199813,13.3985138",
        //   // in: "countryCode: DEU",
        //   limit: 5,
        //   country: "DEU",
        //   language: "de",
        //   // result_types: "locality",
        //   q: str
        // });

        const response = await this.$axios.get(
          `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?
        `,
          {
            params: {
              query: str,
              maxresults,
              country: "DEU",
              language: "de",
              resultType,
              apiKey: this.hereMaps.apiKey
            }
          }
        );

        locations = response.data.suggestions;
      } catch (err) {
        //
      } finally {
        return locations;
      }
    }
  }
};
