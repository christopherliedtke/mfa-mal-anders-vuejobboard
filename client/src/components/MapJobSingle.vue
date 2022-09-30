<template>
  <div class="map">
    <!--In the following div the HERE Map will render-->
    <div v-show="showMap" ref="hereMap" class="map-container"></div>
    <Head :link="link" />
  </div>
</template>

<script>
  export default {
    name: "MapJobSingle",
    props: {
      job: { type: Object, default: () => {} }
    },
    data() {
      return {
        platform: null,
        apikey: "n3GOlcV0Z6utqCKpJlDWH6lWYtJdvR0QomMzYs_EreM",
        mapContainer: null,
        map: null,
        mapTypes: null,
        H: null,
        showMap: true,
        link: [
          {
            id: "mapsjs-ui",
            rel: "stylesheet",
            href: "https://js.api.here.com/v3/3.1/mapsjs-ui.css",
            type: "text/css"
          }
        ]
      };
    },
    watch: {
      job() {
        this.deleteMarkers();
        this.setMapMarker(this.job, this.getGeoCode(this.job), this.H);
        this.moveMap(this.getGeoCode(this.job));
      }
    },
    async mounted() {
      if (window) window.prerenderReady = true;

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
        innerElement.src = job.company.logoUrl || "/img/favicon.png";
        innerElement.alt =
          "Logo - " +
          (job.company.logoUrl ? job.company.name : "MFA mal anders");

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
              lg: this.$config.maps.lang
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

            addEventListener("resize", () => this.map.getViewPort().resize());

            new this.H.mapevents.Behavior(
              new this.H.mapevents.MapEvents(this.map)
            );

            this.H.ui.UI.createDefault(this.map, this.maptypes);
          }
        } catch (err) {
          // this.$root.$bvToast.toast(`Die Karte konnten nicht geladen werden.`, {
          //   title: `Fehler beim Laden`,
          //   variant: "danger",
          //   toaster: "b-toaster-bottom-right",
          //   solid: true,
          //   noAutoHide: false
          // });
          this.showMap = false;
        }
      }
    }
  };
</script>
