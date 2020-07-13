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
                if (this.map) {
                    this.deleteMarkers();
                    this.setMarkers();
                }
            }
        },
        methods: {
            forward(jobId) {
                this.$router.push(`/jobboard/job/${jobId}`);
            },
            async initializeHereMap() {
                try {
                    const service = this.platform.getSearchService();

                    let geocode;

                    if (this.jobs.length > 0 && this.jobs[0].company.geoCode) {
                        geocode = JSON.parse(this.jobs[0].company.geoCode);
                    } else {
                        const response = await service.geocode({
                            q: this.companyCountryOptions[0]
                        });

                        geocode = response.items[0].position;
                    }

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
                            center: geocode
                        }
                    );

                    this.map = map;

                    addEventListener("resize", () =>
                        map.getViewPort().resize()
                    );

                    // add behavior control
                    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

                    // add UI
                    const ui = H.ui.UI.createDefault(map, maptypes);
                    this.ui = ui;

                    // set markers
                    this.setMarkers();

                    // End rendering the initial map
                } catch (err) {
                    console.log("Error on initializeHereMap(): ", err);
                }
            },
            async setMarkers() {
                if (this.map && this.jobs.length > 0) {
                    // const service = this.platform.getSearchService();
                    const H = window.H;

                    const group = new H.map.Group();

                    const markerObjects = [];

                    this.jobs.forEach(job => {
                        let newGeocode = true;

                        markerObjects.forEach((item, j) => {
                            if (item.geocode === job.company.geoCode) {
                                markerObjects[j].jobs.push({
                                    jobTitle: job.title,
                                    jobId: job._id
                                });
                                newGeocode = false;
                            }
                        });

                        if (newGeocode) {
                            markerObjects.push({
                                geocode: job.company.geoCode,
                                companyName: job.company.name,
                                logoUrl: job.company.logoUrl,
                                jobs: [
                                    {
                                        jobTitle: job.title,
                                        jobId: job._id
                                    }
                                ]
                            });
                        }
                    });

                    // set markers
                    markerObjects.forEach(async markerObject => {
                        // let geocode;

                        // if (job.company.geoCode) {
                        //     geocode = JSON.parse(job.company.geoCode);
                        // } else {
                        //     const response = await service.geocode({
                        //         q: `${job.company.street} ${job.company.location} ${job.company.state} ${job.company.country}`
                        //     });

                        //     geocode = response.items[0].position;
                        // }

                        const geocode = JSON.parse(markerObject.geocode);

                        const outerElement = document.createElement("div");
                        outerElement.classList.add("icon-outer");

                        const innerElement = document.createElement("img");
                        innerElement.classList.add("icon-inner");
                        innerElement.src =
                            markerObject.logoUrl || "/favicon.ico";

                        outerElement.appendChild(innerElement);

                        const domIcon = new H.map.DomIcon(outerElement);

                        const marker = new window.H.map.DomMarker(geocode, {
                            icon: domIcon
                        });

                        let str = `<div class="map-bubble mb-2"><strong>${markerObject.companyName}</strong></div><hr class="my-1" />`;
                        markerObject.jobs.forEach(job => {
                            str =
                                str +
                                `<p class="my-0"><a href="/jobboard/job/${job.jobId}" target="_blank">${job.jobTitle}</a></p><hr class="my-1" />`;
                        });

                        marker.setData(str);
                        // marker.setData(`
                        //         <div class="map-bubble">
                        //             <a href="/jobboard/job/${job._id}" target="_blank">${job.title}</a>
                        //         </div>
                        //     `);

                        group.addObject(marker);

                        marker.addEventListener("tap", evt => {
                            // this.forward(job._id)

                            // event target is the marker itself, group is a parent event target
                            // for all objects that it contains
                            var bubble = new H.ui.InfoBubble(
                                evt.target.getGeometry(),
                                {
                                    // read custom data
                                    content: evt.target.getData()
                                }
                            );
                            // show info bubble
                            this.ui.addBubble(bubble);
                        });

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
                top: 12%;
                transform: translateX(-49%);
            }

            .map-bubble {
                min-width: 150px;
            }
        }
    }
</style>
