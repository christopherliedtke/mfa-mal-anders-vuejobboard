export const jobStructuredDataMixin = {
  head: {
    script() {
      if (this.job) {
        return [
          {
            id: "job-structured-data",
            type: "application/ld+json",
            inner: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "JobPosting",
              "title": `${this.job.title} | ${this.job.company.location}`,
              "description": this.job.description
                .replace(/"/g, "'")
                .replace(/h1|h2|h3|h4|h5|h6/g, "p"),
              "datePosted": new Date(this.job.publishedAt || 0).toISOString(),
              "hiringOrganization": {
                "@type": "Organization",
                "name": this.job.company.name || "",
                "sameAs": this.job.company.url || "",
                "logo": this.job.company.logoUrl || ""
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": this.job.company.street || "",
                  "addressLocality": this.job.company.location || "",
                  "addressRegion": this.job.company.state || "",
                  "postalCode": this.job.company.zipCode || "",
                  "addressCountry": this.job.company.country || ""
                }
              },
              "validThrough": this.job.applicationDeadline
                ? new Date(this.job.applicationDeadline).toISOString()
                : this.job.paidExpiresAt
                ? new Date(this.job.paidExpiresAt).toISOString()
                : "",
              "employmentType": this.getEmploymentType(
                this.job.employmentType || ""
              ),
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": "",
                  "minValue": this.job.salaryMin
                    ? parseInt(this.job.salaryMin)
                    : "",
                  "maxValue": this.job.salaryMax
                    ? parseInt(this.job.salaryMax)
                    : "",
                  "unitText": "MONTH"
                }
              }
            })
          }
        ];
      }
    }
  },
  watch: {
    job() {
      this.$emit("updateHead");
    }
  },
  methods: {
    getEmploymentType(str) {
      let output;
      switch (str) {
        case "full":
          output = `"FULL_TIME"`;
          break;
        case "training":
          output = `"FULL_TIME"`;
          break;
        case "part":
          output = `"PART_TIME"`;
          break;
        case "mini":
          output = `"PART_TIME"`;
          break;
        case "part_full":
          output = `["PART_TIME", "FULL_TIME"]`;
          break;

        default:
          output = null;
          break;
      }

      return output;
    }
  }
};
