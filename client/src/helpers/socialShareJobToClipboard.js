export default function(job) {
  let el = document.createElement("textarea");

  el.value = `${job.title} | 📍 ${job.company.location}\n\n📌 ${
    this.$config.website.url
  }/job/${
    job._id
  }\n\n#mfamalanders #medizinischefachangestellte #mfa #arzthelfer #arzthelferin #mfajobs #stellenangebot #stellenanzeige #verstärkunggesucht #${job.company.location
    .replace("-", "")
    .replace(/\s/g, "")
    .toLowerCase()}jobs #${job.company.location
    .replace("-", "")
    .replace(/\s/g, "")
    .toLowerCase()}`;

  document.body.appendChild(el);
  el.select();

  document.execCommand("copy");
  document.body.removeChild(el);
}
