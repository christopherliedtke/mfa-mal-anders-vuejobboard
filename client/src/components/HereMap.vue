<template>
    <div id="map">
        <!--In the following div the HERE Map will render-->
        <div id="map-container" ref="hereMap"></div>
    </div>
</template>

<script>
    export default {
        name: "HereMap",
        props: {
            address: String,
            logoUrl: String
        },
        data() {
            return {
                platform: null,
                apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM"
            };
        },
        async mounted() {
            // Initialize the platform object:
            const platform = new window.H.service.Platform({
                apikey: this.apikey
            });
            this.platform = platform;
            this.initializeHereMap();
        },
        methods: {
            async initializeHereMap() {
                try {
                    const service = this.platform.getSearchService();

                    const geocode = await service.geocode({
                        q: this.address
                    });

                    if (geocode.items.length > 0) {
                        const mapContainer = this.$refs.hereMap;
                        const H = window.H;
                        // Obtain the default map types from the platform object
                        const maptypes = this.platform.createDefaultLayers();

                        // Instantiate (and display) a map object:
                        const map = new H.Map(
                            mapContainer,
                            maptypes.vector.normal.map,
                            {
                                zoom: 13,
                                center: geocode.items[0].position
                            }
                        );

                        // Create a marker icon from an image URL:
                        const icon = new H.map.Icon("/favicon.ico", {
                            size: { h: 25, w: 25 }
                        });

                        map.addObject(
                            new window.H.map.Marker(geocode.items[0].position, {
                                icon
                            })
                        );

                        addEventListener("resize", () =>
                            map.getViewPort().resize()
                        );

                        // add behavior control
                        new H.mapevents.Behavior(
                            new H.mapevents.MapEvents(map)
                        );

                        // add UI
                        H.ui.UI.createDefault(map, maptypes);
                        // End rendering the initial map
                    }
                } catch (err) {
                    console.log("Error on initializeHereMap(): ", err);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    #map-container {
        width: 100%;
        height: 30vh;
        min-height: 300px;
    }
    #map {
        text-align: center;
        margin: 5% auto;
        background-color: #ccc;
    }
</style>
