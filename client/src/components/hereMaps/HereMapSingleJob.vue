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
                apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
                mapContainer: null,
                map: null,
                mapTypes: null,
                H: null
            };
        },
        async mounted() {
            const platform = new window.H.service.Platform({
                apikey: this.apikey
            });
            this.platform = platform;
            this.initializeHereMap();
        },
        watch: {
            job() {
                this.deleteMarkers();
                this.setMapMarker(this.job, this.getGeoCode(this.job), this.H);
                this.moveMap(this.getGeoCode(this.job));
            }
        },
        methods: {
            getGeoCode(job) {
                let geocode;

                if (job.company) {
                    geocode = {
                        lat: job.company.geoCodeLat,
                        lng: job.company.geoCodeLng
                    };
                }

                return geocode;
            },
            setMapMarker(job, geocode, H) {
                const outerElement = document.createElement("div");
                outerElement.classList.add("icon-outer");

                const innerElement = document.createElement("img");
                innerElement.classList.add("icon-inner");
                innerElement.src = job.company.logoUrl || "/favicon.ico";

                outerElement.appendChild(innerElement);

                const domIcon = new H.map.DomIcon(outerElement);

                this.map.addObject(
                    new window.H.map.DomMarker(geocode, {
                        icon: domIcon
                    })
                );
            },
            deleteMarkers() {
                if (this.map) {
                    this.map.removeObjects(this.map.getObjects());
                }
            },
            moveMap(geocode) {
                this.map.setCenter(geocode);
                this.map.setZoom(13);
            },
            async initializeHereMap() {
                try {
                    const geocode = this.getGeoCode(this.job);

                    if (geocode) {
                        this.mapContainer = this.$refs.hereMap;
                        this.H = window.H;
                        this.maptypes = this.platform.createDefaultLayers({
                            lg: config.maps.lang
                        });

                        this.map = new this.H.Map(
                            this.mapContainer,
                            this.maptypes.vector.normal.map,
                            {
                                zoom: 13,
                                center: geocode
                            }
                        );

                        this.setMapMarker(this.job, geocode, this.H);

                        addEventListener("resize", () =>
                            this.map.getViewPort().resize()
                        );

                        new this.H.mapevents.Behavior(
                            new this.H.mapevents.MapEvents(this.map)
                        );

                        this.H.ui.UI.createDefault(this.map, this.maptypes);
                    }
                } catch (err) {
                    console.log("Error on initializeHereMap(): ", err);
                }
            }
        }
    };
</script>
