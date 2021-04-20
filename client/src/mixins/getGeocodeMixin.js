export const getGeocodeMixin = {
  data() {
    return {
      hereMaps: {
        apiKey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
        platform: null
      }
    };
  },
  async created() {
    try {
      // Script is loaded, do something
      await this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");
      await Promise.all([
        this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),
        this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"),
        this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")
      ]);

      this.initPlatform();
    } catch (err) {
      // Failed to fetch script
    }
  },
  methods: {
    initPlatform() {
      this.hereMaps.platform = new window.H.service.Platform({
        apikey: this.hereMaps.apiKey
      });
    },
    async getGeocode(company) {
      const data = {
        lat: null,
        lng: null,
        state: ""
      };

      try {
        const service = this.hereMaps.platform.getSearchService();
        const geocode = await service.geocode({
          q: `${company.street} ${company.location} ${company.zipCode} ${company.country}`
        });

        data.lat = geocode.items[0].position.lat;
        data.lng = geocode.items[0].position.lng;
        data.state = geocode.items[0].address.state;
      } catch (err) {
        //
      }

      return data;
    }
  }
};
