export const getGeocodeMixin = {
    data() {
        return {
            hereMaps: {
                apiKey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
                platform: null
            }
        };
    },
    created() {
        this.initPlatform();
    },
    methods: {
        initPlatform() {
            this.hereMaps.platform = new window.H.service.Platform({
                apikey: this.hereMaps.apiKey
            });
        },
        async getGeocode(company) {
            let lat, lng;
            try {
                const service = this.hereMaps.platform.getSearchService();
                const geocode = await service.geocode({
                    q: `${company.street} ${company.location} ${company.state} ${company.country}`
                });

                lat = geocode.items[0].position.lat;
                lng = geocode.items[0].position.lng;
            } catch (err) {
                console.log("Error on getGeoCode(): ", err);

                lat = null;
                lng = null;
            }

            return { lat, lng };
        }
    }
};
