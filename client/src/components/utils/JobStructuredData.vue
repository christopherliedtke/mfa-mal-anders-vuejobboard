<template>
    <div></div>
</template>

<script>
    export default {
        name: "JobStructuredData",
        props: ["job"],
        watch: {
            job() {
                this.updateHead();
            }
        },
        methods: {
            updateHead() {
                this.$emit("updateHead");
            },
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
                    case "part_full":
                        output = `["PART_TIME", "FULL_TIME"]`;
                        break;

                    default:
                        output = null;
                        break;
                }

                return output;
            }
        },
        head: {
            script() {
                if (this.job.title) {
                    return [
                        {
                            type: "application/ld+json",
                            inner: JSON.stringify({
                                "@context": "http://schema.org",
                                "@type": "JobPosting",
                                title: `${this.job.title} | ${this.job.company.location}`,
                                description: this.$sanitize(
                                    this.job.description.replace(/"/g, "'"),
                                    {
                                        allowedTags: [
                                            "h1",
                                            "h2",
                                            "h3",
                                            "h4",
                                            "h5",
                                            "h6",
                                            "p",
                                            "strong",
                                            "em",
                                            "span",
                                            "ul",
                                            "ol",
                                            "li",
                                            "div"
                                        ],
                                        transformTags: {
                                            h1: "p",
                                            h2: "p",
                                            h3: "p",
                                            h4: "p",
                                            h5: "p",
                                            h6: "p"
                                        }
                                    }
                                ),
                                datePosted: new Date(
                                    this.job.updatedAt
                                ).toISOString(),
                                hiringOrganization: {
                                    "@type": "Organization",
                                    name: this.job.company.name,
                                    sameAs: this.job.company.url,
                                    logo: this.job.company.logoUrl
                                },
                                jobLocation: {
                                    "@type": "Place",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress: this.job.company.street,
                                        addressLocality: this.job.company
                                            .location,
                                        addressRegion: this.job.company.state,
                                        postalCode: this.job.company.zipCode,
                                        addressCountry: this.job.company.country
                                    }
                                },
                                validThrough: this.job.applicationDeadline,
                                employmentType: this.getEmploymentType(
                                    this.job.employmentType
                                ),
                                baseSalary: {
                                    "@type": "MonetaryAmount",
                                    currency: "EUR",
                                    value: {
                                        "@type": "QuantitativeValue",
                                        minValue: this.job.salaryMin
                                            ? parseInt(this.job.salaryMin)
                                            : "",
                                        maxValue: this.job.salaryMax
                                            ? parseInt(this.job.salaryMax)
                                            : "",
                                        unitText: "MONTH"
                                    }
                                }
                            })
                        }
                    ];
                }
            }
        }
    };
</script>
