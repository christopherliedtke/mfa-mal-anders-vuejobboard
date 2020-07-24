<template>
    <div class="map">
        <!--In the following div the HERE Map will render-->
        <div class="map-container" ref="hereMap"></div>
    </div>
</template>

<script>
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

                    let geocode;

                    if (this.job.company.geoCode) {
                        geocode = JSON.parse(this.job.company.geoCode);
                    } else {
                        const response = await service.geocode({
                            q: `${this.job.company.street} ${this.job.company.location} ${this.job.company.state} ${this.job.company.country}`
                        });

                        geocode = response.items[0].position;
                    }

                    if (geocode) {
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
                                center: geocode
                            }
                        );

                        // DomMarker
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

<style lang="scss"></style>
