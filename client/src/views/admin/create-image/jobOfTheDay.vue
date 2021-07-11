<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>

    <b-container class="my-4">
      <b-row>
        <b-col cols="12" lg="6">
          <b-form>
            <label for="title">Job Title</label>
            <b-input
              id="title"
              v-model="form.title"
              placeholder="Enter job title..."
            ></b-input>
            <label for="logo-url">Logo URL</label>
            <b-input
              id="logo-url"
              v-model="form.logoUrl"
              placeholder="Enter logo url..."
            ></b-input>
            <label for="image-url">Image URL</label>
            <b-input
              id="image-url"
              v-model="form.imageUrl"
              placeholder="Enter image url..."
            ></b-input>
            <label for="company-name">Company Name</label>
            <b-input
              id="company-name"
              v-model="form.companyName"
              placeholder="Enter company name..."
            ></b-input>
            <label for="employment-type">Employment Type</label>
            <b-input
              id="employment-type"
              v-model="form.employmentType"
              placeholder="Enter employment type..."
            ></b-input>
            <label for="location">Location</label>
            <b-input
              id="location"
              v-model="form.location"
              placeholder="Enter location..."
            ></b-input>
            <label for="description">Description</label>
            <b-input v-model="form.descOne" class="mb-1"></b-input>
            <b-input v-model="form.descTwo" class="mb-1"></b-input>
            <b-input v-model="form.descThree" class="mb-1"></b-input>
          </b-form>
          <h2 class="h5 mt-3">Full Description</h2>
          <!-- eslint-disable-next-line -->
          <div v-html="fullDescription"></div>
        </b-col>
        <b-col cols="12" lg="6">
          <div id="image-preview" class="position-relative">
            <JobOfTheDayImage :content="form" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { employmentTypeOptions } from "@/config/formDataConfig.json";
  import JobOfTheDayImage from "@/components/ui/JobOfTheDayImage.vue";
  export default {
    name: "AdminCreateJobOfTheDay",
    components: {
      JobOfTheDayImage
    },
    data() {
      return {
        title: "IG Job of the Day | Export",
        fullDescription: "",
        form: {
          title: "",
          logoUrl: "",
          imageUrl:
            "https://www.mfa-mal-anders.de/img/medizinischesPersonal-1200x513.722ad919.jpg",
          companyName: "",
          employmentType: "",
          location: "",
          descOne: "",
          descTwo: "",
          descThree: ""
        },
        employmentTypeOptions,
        error: false
      };
    },
    async created() {
      if (this.$route.query.job) {
        await this.fetchJob(this.$route.query.job);
      }
    },
    methods: {
      async fetchJob(jobId) {
        try {
          const job = await this.$axios.get(`/graphql`, {
            params: {
              query: `
                  query {
                    adminJob (_id: "${jobId}") {
                      _id
                      title
                      description
                      profession
                      employmentType
                      applicationDeadline
                      imageUrl
                      company {
                        name
                        location
                        state
                        logoUrl
                      }
                    }
                  }
                `
            }
          });

          if (job.data.data.adminJob) {
            this.form = {
              title: job.data.data.adminJob.title,
              logoUrl: job.data.data.adminJob.company.logoUrl,
              imageUrl: job.data.data.adminJob.imageUrl
                ? job.data.data.adminJob.imageUrl
                : "https://www.mfa-mal-anders.de/img/medizinischesPersonal-1200x513.722ad919.jpg",
              companyName: job.data.data.adminJob.company.name,
              employmentType: this.employmentTypeOptions.find(
                option => option.value === job.data.data.adminJob.employmentType
              ).text,
              location: job.data.data.adminJob.company.location
            };

            this.fullDescription = job.data.data.adminJob.description;
          } else {
            throw new Error();
          }
        } catch (err) {
          this.error = true;
        }
      }
    }
  };
</script>

<style></style>
