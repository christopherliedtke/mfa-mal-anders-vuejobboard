<template>
    <div class="map">
        <!--In the following div the HERE Map will render-->
        <div class="map-container" ref="hereMap"></div>
    </div>
</template>

<script>
    import config from "@/utils/config.json";
    export default {
        name: "HereMapSingleJob",
        props: {
            job: Object
        },
        data() {
            return {
                platform: null,
                apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM"
            };
        },
        async mounted() {
            const platform = new window.H.service.Platform({
                apikey: this.apikey
            });
            this.platform = platform;
            this.initializeHereMap();
        },
        methods: {
            async initializeHereMap() {
                try {
                    let geocode;

                    if (this.job.company) {
                        geocode = {
                            lat: this.job.company.geoCodeLat,
                            lng: this.job.company.geoCodeLng
                        };
                    }

                    if (geocode) {
                        const mapContainer = this.$refs.hereMap;
                        const H = window.H;
                        const maptypes = this.platform.createDefaultLayers({
                            lg: config.maps.lang
                        });

                        const map = new H.Map(
                            mapContainer,
                            maptypes.vector.normal.map,
                            {
                                zoom: 13,
                                center: geocode
                            }
                        );

                        const outerElement = document.createElement("div");
                        outerElement.classList.add("icon-outer");

                        const innerElement = document.createElement("img");
                        innerElement.classList.add("icon-inner");
                        innerElement.src =
                            this.job.company.logoUrl || "/favicon.ico";

                        outerElement.appendChild(innerElement);

                        const domIcon = new H.map.DomIcon(outerElement);

                        map.addObject(
                            new window.H.map.DomMarker(geocode, {
                                icon: domIcon
                            })
                        );

                        addEventListener("resize", () =>
                            map.getViewPort().resize()
                        );

                        new H.mapevents.Behavior(
                            new H.mapevents.MapEvents(map)
                        );

                        H.ui.UI.createDefault(map, maptypes);
                    }
                } catch (err) {
                    console.log("Error on initializeHereMap(): ", err);
                }
            }
        }
    };
</script>
