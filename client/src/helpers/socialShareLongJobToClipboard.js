import copyToClipBoard from "@/helpers/copyToClipBoard";

export default function(job) {
  const text = `📍 ${job.company.location} | ${job.title}\n\n  \n\n📌 ${
    this.$config.website.url
  }/job/${job._id}\n\n#mfamalanders #${
    job.profession === "ZFA" ? "zahn" : ""
  }medizinischefachangestellte #${
    job.profession === "ZFA" ? "zfa" : "mfa"
  } #arzthelfer #arzthelferin #${
    job.profession === "ZFA" ? "zfa" : "mfa"
  }jobs #stellenangebot #stellenanzeige #verstärkunggesucht #${job.company.location
    .replace("-", "")
    .replace(/\s/g, "")
    .toLowerCase()}jobs #${job.company.location
    .replace("-", "")
    .replace(/\s/g, "")
    .toLowerCase()}`;

  copyToClipBoard(text);
}
