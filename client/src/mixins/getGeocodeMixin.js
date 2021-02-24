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

                console.log("geocode: ", geocode);

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
