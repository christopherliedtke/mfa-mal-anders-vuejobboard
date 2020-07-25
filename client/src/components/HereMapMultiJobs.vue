<template>
    <div class="map">
        <div class="map-container multi" ref="hereMap"></div>
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

                    // combine jobs per company&geocode || move marker for same geocode but different company
                    const markerObjects = [];

                    this.jobs.forEach(job => {
                        let existingGeoCode = false;
                        const maxMarkerAdjust = 0.003;

                        markerObjects.forEach(item => {
                            if (
                                item.geocode.lat === job.company.geoCodeLat &&
                                item.geocode.lng === job.company.geoCodeLng
                            ) {
                                existingGeoCode = true;
                            }
                        });

                        if (!existingGeoCode) {
                            markerObjects.push({
                                geocode: {
                                    lat: job.company.geoCodeLat,
                                    lng: job.company.geoCodeLng
                                },
                                companyName: job.company.name,
                                logoUrl: job.company.logoUrl,
                                jobs: [
                                    {
                                        jobTitle: job.title,
                                        jobId: job._id
                                    }
                                ]
                            });
                        } else if (existingGeoCode) {
                            markerObjects.push({
                                geocode: {
                                    lat:
                                        job.company.geoCodeLat +
                                        (Math.random() * maxMarkerAdjust) / 2 -
                                        maxMarkerAdjust / 4,
                                    lng:
                                        job.company.geoCodeLng +
                                        (Math.random() * maxMarkerAdjust) / 2 -
                                        maxMarkerAdjust / 4
                                },
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
                        const geocode = markerObject.geocode;

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

                        let markerHtml = `<div class="map-bubble mb-2"><strong>${markerObject.companyName}</strong></div><hr class="my-1" />`;
                        markerObject.jobs.forEach(job => {
                            markerHtml =
                                markerHtml +
                                `<p class="my-0"><a href="/jobboard/job/${job.jobId}" target="_blank">${job.jobTitle}</a></p><hr class="my-1" />`;
                        });

                        marker.setData(markerHtml);

                        group.addObject(marker);

                        marker.addEventListener("tap", evt => {
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

<style lang="scss"></style>
