import copyToClipBoard from "@/helpers/copyToClipBoard";

export default function(job) {
  const text = `Wir sind MFA mal anders, das Karriereportal für Medizinische & Zahnmedizinische Fachangestellte. Im Auftrag des Arbeitgebers haben wir diese Stellenanzeige veröffentlicht.\n--------------------------------------------------\n**** ACHTUNG: Fragen zur Stelle und Bewerbungen ausschließlich über den folgenden Link!! ****\n\n${this.$config.website.url}/job/${job._id}\n\n(kopieren Sie den Link einfach in die URL Zeile Ihres Browsers)
  --------------------------------------------------\n\n`;

  copyToClipBoard(text);
}
