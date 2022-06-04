// import copyToClipBoard from "@/helpers/copyToClipBoard";

export default function(job) {
  const text = `Wir sind MFA mal anders, das Karriereportal für Medizinische & Zahnmedizinische Fachangestellte. Im Auftrag des Arbeitgebers haben wir diese Stellenanzeige veröffentlicht.<br><br>--------------------------------------------------<br>**** ACHTUNG: Fragen zur Stelle und Bewerbungen ausschließlich über den folgenden Link!! ****<br><br>${this.$config.website.url}/job/${job._id}<br><br>(kopieren Sie den Link einfach in die URL Zeile Ihres Browsers)<br>
  --------------------------------------------------<br><br>`;

  const desc = document.getElementById("job-description");
  const prep = document.createElement("p");
  prep.innerHTML = text;

  desc.prepend(prep);

  // copyToClipBoard(text);

  window
    .getSelection()
    .selectAllChildren(document.getElementById("job-description"));
  document.execCommand("copy");

  prep.remove();
}
