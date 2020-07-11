<template>
    <div id="map-multi">
        <!--In the following div the HERE Map will render-->
        <div id="map-container" ref="hereMap"></div>
    </div>
</template>

<script>
    import { companyCountryOptions } from "@/utils/jobDataConfig.json";
    export default {
        name: "HereMapMultiJobs",
        props: {
            jobs: Array
        },
        data() {
            return {
                platform: null,
                apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
                companyCountryOptions
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
        watch: {
            jobs: function() {
                this.deleteMarkers();
                this.setMarkers();
            }
        },
        methods: {
            forward(jobId) {
                this.$router.push(`/jobboard/job/${jobId}`);
            },
            async initializeHereMap() {
                try {
                    const service = this.platform.getSearchService();
                    const geocode = await service.geocode({
                        q:
                            this.jobs.length > 0
                                ? `${this.jobs[0].company.street} ${this.jobs[0].company.location} ${this.jobs[0].company.state} ${this.jobs[0].company.country}`
                                : this.companyCountryOptions[0]
                    });

                    const mapContainer = this.$refs.hereMap;
                    const H = window.H;
                    // Obtain the default map types from the platform object
                    const maptypes = this.platform.createDefaultLayers();

                    // Instantiate (and display) a map object:
                    const map = new H.Map(
                        mapContainer,
                        maptypes.vector.normal.map,
                        {
                            zoom: 4,
                            center: geocode.items[0].position
                        }
                    );

                    this.map = map;

                    addEventListener("resize", () =>
                        map.getViewPort().resize()
                    );

                    // add behavior control
                    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

                    // add UI
                    H.ui.UI.createDefault(map, maptypes);

                    // set markers
                    this.setMarkers();

                    // End rendering the initial map
                } catch (err) {
                    console.log("Error on initializeHereMap(): ", err);
                }
            },
            async setMarkers() {
                if (this.jobs.length > 0 && this.jobs[0].company) {
                    const service = this.platform.getSearchService();
                    const H = window.H;

                    const group = new H.map.Group();

                    // set markers
                    this.jobs.forEach(async job => {
                        const geocode = await service.geocode({
                            q: `${job.company.street} ${job.company.location} ${job.company.state} ${job.company.country}`
                        });

                        const outerElement = document.createElement("div");
                        outerElement.classList.add("icon-outer");

                        const innerElement = document.createElement("img");
                        innerElement.classList.add("icon-inner");
                        innerElement.src =
                            job.company.logoUrl || "/favicon.ico";

                        outerElement.appendChild(innerElement);

                        const domIcon = new H.map.DomIcon(outerElement);

                        const marker = new window.H.map.DomMarker(
                            geocode.items[0].position,
                            {
                                icon: domIcon
                            }
                        );

                        group.addObject(marker);

                        marker.addEventListener("tap", () =>
                            this.forward(job._id)
                        );

                        this.map.addObject(group);
                    });
                }
            },
            deleteMarkers() {
                if (this.map) {
                    this.map.removeObjects(this.map.getObjects());
                }
            }
        }
    };
</script>

<style lang="scss">
    #map-multi {
        height: 100%;
        text-align: center;
        margin: 5% auto;
        background-color: #ccc;

        #map-container {
            width: 100%;
            height: 100vh;
            min-height: 300px;
            max-height: 66vh;

            .icon-outer {
                width: 48px;
                height: 48px;
                position: relative;
                background: url("/marker.svg") no-repeat center center;
                background-size: contain;
                cursor: pointer;
                margin-top: -48px;
                margin-left: -24px;
            }

            .icon-inner {
                position: absolute;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                object-fit: cover;
                left: 50%;
                top: 10%;
                transform: translateX(-49%);
            }
        }
    }
</style>
