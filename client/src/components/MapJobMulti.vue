<template>
  <div class="map">
    <div ref="hereMap" class="map-container multi"></div>
  </div>
</template>

<script>
  import { companyCountryOptions } from "@/config/formDataConfig.json";
  export default {
    name: "MapJobMulti",
    props: {
      jobs: { type: Array, default: () => [] }
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
    watch: {
      jobs() {
        if (this.map) {
          this.deleteMarkers();
          this.addMarkers();
        }
      }
    },
    async mounted() {
      try {
        // Script is loaded, do something
        await this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");
        await Promise.all([
          this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js"),
          this.$loadScript(
            "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
          ),
          this.$loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js")
        ]);

        const platform = new window.H.service.Platform({
          apikey: this.apikey
        });
        this.platform = platform;
        this.initializeHereMap();
      } catch (err) {
        // Failed to fetch script
      }
    },
    methods: {
      forward(jobId) {
        this.$router.push(`/job/${jobId}`);
      },
      async initializeHereMap() {
        try {
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
                () =>
                  resolve({
                    lat: 51.241,
                    lng: 10.528
                  })
              );
            });
          } catch (err) {
            geocode = {
              lat: 51.241,
              lng: 10.528
            };
          }

          if (!geocode) {
            geocode = {
              lat: 51.241,
              lng: 10.528
            };
          }

          const mapContainer = this.$refs.hereMap;
          const H = window.H;
          const maptypes = this.platform.createDefaultLayers({
            lg: "de"
          });

          this.map = new H.Map(mapContainer, maptypes.vector.normal.map, {
            zoom,
            center: geocode
          });

          addEventListener("resize", () => this.map.getViewPort().resize());

          new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

          this.ui = H.ui.UI.createDefault(this.map, maptypes);

          this.addMarkers();
        } catch (err) {
          this.$root.$bvToast.toast(`Die Karte konnten nicht geladen werden.`, {
            title: `Fehler beim Laden`,
            variant: "danger",
            toaster: "b-toaster-bottom-right",
            solid: true,
            noAutoHide: false
          });
        }
      },
      async addMarkers() {
        if (this.map && this.jobs.length > 0) {
          const H = window.H;
          const group = new H.map.Group();

          const markersInput = this.createMarkersInput(this.jobs);
          const markersGroup = this.createMarkers(H, group, markersInput);

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
          innerElement.src = markerObject.logoUrl || "/img/favicon.png";

          outerElement.appendChild(innerElement);

          const domIcon = new H.map.DomIcon(outerElement);

          const marker = new window.H.map.DomMarker(geocode, {
            icon: domIcon
          });

          let markerHtml = `<div class="map-bubble mb-2"><strong>${markerObject.companyName}</strong></div><hr class="my-1" />`;
          markerObject.jobs.forEach(job => {
            markerHtml =
              markerHtml +
              `<p class="my-0"><a href="/job/${job.jobId}" target="_blank">${job.jobTitle}</a></p><hr class="my-1" />`;
          });

          marker.setData(markerHtml);

          marker.addEventListener("tap", evt => {
            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
              content: evt.target.getData()
            });
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
          val + Math.random() * markerSpread - Math.random() * markerSpread
        );
      }
    }
  };
</script>
