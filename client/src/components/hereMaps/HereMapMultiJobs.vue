<template>
    <div class="map">
        <div class="map-container multi" ref="hereMap"></div>
    </div>
</template>

<script>
    import { companyCountryOptions } from "@/utils/jobDataConfig.json";
    import config from "@/utils/config.json";
    export default {
        name: "HereMapMultiJobs",
        props: {
            jobs: Array
        },
        data() {
            return {
                platform: null,
                map: null,
                ui: null,
                apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
                companyCountryOptions
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
            jobs: function() {
                if (this.map) {
                    this.deleteMarkers();
                    this.addMarkers();
                }
            }
        },
        methods: {
            forward(jobId) {
                this.$router.push(`/jobboard/job/${jobId}`);
            },
            async initializeHereMap() {
                try {
                    // const service = this.platform.getSearchService();

                    let zoom = 6.3;
                    let geocode;

                    try {
                        geocode = await new Promise((resolve, reject) => {
                            window.navigator.geolocation.getCurrentPosition(
                                position => {
                                    if (position.coords) {
                                        zoom = 8;
                                        resolve({
                                            lat: position.coords.latitude,
                                            lng: position.coords.longitude
                                        });
                                    } else {
                                        reject("");
                                    }
                                },
                                () => resolve(config.maps.defaultCenter)
                            );
                        });
                    } catch (err) {
                        console.log("Error in getCurrentPosition(): ", err);
                        geocode = config.maps.defaultCenter;
                    }

                    if (!geocode) {
                        // const response = await service.geocode({
                        //     q: this.companyCountryOptions[0]
                        // });

                        // geocode = response.items[0].position;
                        geocode = config.maps.defaultCenter;
                    }

                    const mapContainer = this.$refs.hereMap;
                    const H = window.H;
                    const maptypes = this.platform.createDefaultLayers({
                        lg: config.maps.lang
                    });

                    this.map = new H.Map(
                        mapContainer,
                        maptypes.vector.normal.map,
                        {
                            zoom,
                            center: geocode
                        }
                    );

                    addEventListener("resize", () =>
                        this.map.getViewPort().resize()
                    );

                    new H.mapevents.Behavior(
                        new H.mapevents.MapEvents(this.map)
                    );

                    this.ui = H.ui.UI.createDefault(this.map, maptypes);

                    this.addMarkers();
                } catch (err) {
                    console.log("Error on initializeHereMap(): ", err);
                }
            },
            async addMarkers() {
                if (this.map && this.jobs.length > 0) {
                    const H = window.H;
                    const group = new H.map.Group();

                    const markersInput = this.createMarkersInput(this.jobs);
                    const markersGroup = this.createMarkers(
                        H,
                        group,
                        markersInput
                    );

                    this.map.addObject(markersGroup);
                }
            },
            createMarkersInput(jobs) {
                return jobs.map(job => {
                    return {
                        geocode: {
                            lat: this.spreadMarker(job.company.geoCodeLat),
                            lng: this.spreadMarker(job.company.geoCodeLng)
                        },
                        companyName: job.company.name,
                        logoUrl: job.company.logoUrl,
                        jobs: [
                            {
                                jobTitle: job.title,
                                jobId: job._id
                            }
                        ]
                    };
                });
            },
            createMarkers(H, group, markersInput) {
                markersInput.forEach(async markerObject => {
                    const geocode = markerObject.geocode;

                    const outerElement = document.createElement("div");
                    outerElement.classList.add("icon-outer");

                    const innerElement = document.createElement("img");
                    innerElement.classList.add("icon-inner");
                    innerElement.src = markerObject.logoUrl || "/favicon.ico";

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

                    marker.addEventListener("tap", evt => {
                        var bubble = new H.ui.InfoBubble(
                            evt.target.getGeometry(),
                            {
                                content: evt.target.getData()
                            }
                        );
                        this.ui.addBubble(bubble);
                    });

                    group.addObject(marker);
                });

                return group;
            },
            deleteMarkers() {
                if (this.map) {
                    this.map.removeObjects(this.map.getObjects());
                }
            },
            spreadMarker(val) {
                const markerSpread = 0.0005;
                return (
                    val +
                    Math.random() * markerSpread -
                    Math.random() * markerSpread
                );
            }
        }
    };
</script>

<style lang="scss"></style>
