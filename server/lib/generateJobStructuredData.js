const generateJobStructuredData = job => {
  return JSON.stringify({
    "@context": "http://schema.org",
    "@type": "JobPosting",
    "title": `${job.title} | ${job.company.location}`,
    "description": job.description
      .replace(/"/g, "'")
      .replace(/h1|h2|h3|h4|h5|h6/g, "p"),
    "datePosted": new Date(job.publishedAt || 0).toISOString(),
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company.name || "",
      "sameAs": job.company.url || "",
      "logo": job.company.logoUrl || "",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": job.company.street || "",
        "addressLocality": job.company.location || "",
        "addressRegion": job.company.state || "",
        "postalCode": job.company.zipCode || "",
        "addressCountry": job.company.country || "",
      },
    },
    "validThrough": job.applicationDeadline
      ? new Date(job.applicationDeadline).toISOString()
      : job.paidExpiresAt
      ? new Date(job.paidExpiresAt).toISOString()
      : "",
    "employmentType": getEmploymentType(job.employmentType),
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "value": "",
        "minValue": job.salaryMin ? parseInt(job.salaryMin) : "",
        "maxValue": job.salaryMax ? parseInt(job.salaryMax) : "",
        "unitText": "MONTH",
      },
    },
    "directApply": job.applicationEmail ? true : false,
  });
};

module.exports = generateJobStructuredData;

const getEmploymentType = str => {
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
      output = "";
      break;
  }

  return output;
};
