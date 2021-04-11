<template>
  <b-container class="mt-5 px-0">
    <JobCard
      v-for="similarJob in similarJobs"
      :key="similarJob.id"
      :job="similarJob"
    />
  </b-container>
</template>

<script>
  import JobCard from "@/components/ui/JobCard.vue";
  export default {
    name: "SimiarJobsContainer",
    components: {
      JobCard
    },
    props: {
      jobs: { type: Array, default: () => [] },
      job: { type: Object, default: () => {} },
      number: { type: Number, default: 5 }
    },
    computed: {
      similarJobs() {
        let similarJobs = [...this.jobs];

        if (this.job.company.geoCodeLat && this.job.company.geoCodeLng) {
          similarJobs = similarJobs.sort((a, b) => {
            return (
              this.calcDistance(
                a.company.geoCodeLat,
                a.company.geoCodeLng,
                this.job.company.geoCodeLat,
                this.job.company.geoCodeLng
              ) -
              this.calcDistance(
                b.company.geoCodeLat,
                b.company.geoCodeLng,
                this.job.company.geoCodeLat,
                this.job.company.geoCodeLng
              )
            );
          });
        } else if (this.job.company.location || this.job.company.state) {
          similarJobs = similarJobs.filter(
            job =>
              job.company.location === this.location ||
              job.company.state === this.state
          );
        }

        if (this.job._id) {
          similarJobs = similarJobs.filter(job => job._id != this.job._id);
        }

        return similarJobs.slice(0, this.number);
      }
    },
    methods: {
      calcDistance(lat1, lon1, lat2, lon2) {
        const R = 6371000; // metres
        const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;

        const a =
          Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c; // in metres

        return d;

        // return Math.sqrt(
        //     Math.pow(xLat - yLat, 2) + Math.pow(xLng - yLng, 2)
        // );
      }
    }
  };
</script>
