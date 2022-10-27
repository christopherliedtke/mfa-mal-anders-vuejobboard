<template>
  <aside class="container-fluid bg-light-shade mt-4 px-0">
    <div class="container py-4 py-lg-5">
      <h2 class="lead bold">
        Medizinische Fachangestellte & Zahnmedizinische Fachangestellte &ndash;
        Stellenangebote nach Stadt
      </h2>
      <nav>
        <ul class="list-group list-group-flush mb-4">
          <li
            v-for="city in cities"
            :key="city.slug"
            class="list-group-item bg-light-shade"
          >
            <b-link :href="`/stellenangebote/${city.slug}`"
              >MFA & ZFA Jobs in {{ city.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                /></svg
            ></b-link>
          </li>
        </ul>
      </nav>

      <h2 class="lead bold mt-4">
        Auf der Suche nach Stellenangeboten für Medizinische Fachangestellte
        (MFA) | Zahnmedizinische Fachangestellte (ZFA)?
      </h2>
      <p>
        Stellenangebote für Medizinische Fachangestellte und Zahnmedizinische
        Fachangestellte gibt es im Internet zur Genüge. Wenn Du als MFA & ZFA
        einen neuen Job suchst, könntest Du in kürzester Zeit einen neuen
        Arbeitsplatz antreten. Nicht nur die Arztpraxen und Zahnarztpraxen, auch
        andere Arbeitgeber im Gesundheitswesen suchen händeringend nach Personal
        und haben viele attraktive Stellenangebote für Medizinische
        Fachangestellte und Zahnmedizinische Fachangestellte zu bieten. Mit
        unseren
        <router-link
          to="/blog/artikel/4-tipps-wie-du-die-richtige-stelle-fuer-Dich-findest"
          ><strong
            >4 Tipps, wie Du die richtige Stelle für Dich findest</strong
          ></router-link
        >
        zeigen wir Dir, worüber Du Dir im Vorhinein Gedanken machen und worauf
        Du bei der Stellensuche achten solltest.
      </p>
      <p>
        Auf MFA mal anders findest Du passende Jobs für Medizinische
        Fachangestellte (MFA) | Zahnmedizinische Fachangestellte (ZFA) von
        attraktiven Arbeitgebern in ganz Deutschland. Hier findest Du
        Stellenangebote in Vollzeit und Teilzeit in verschiedenen Fachgebieten.
        Außerdem hast Du die Möglichkeit, als ein
        <router-link to="/stellengesuche/info"
          ><strong>Stellengesuch als MFA | ZFA</strong></router-link
        >
        zu schalten und Dich von passenden Arbeitgebern ansprechen zu lassen.
      </p>

      <h2 class="lead bold mt-4">
        Gehalt für Medizinische Fachangestellte (MFA) | Zahnmedizinische
        Fachangestellte (ZFA)
      </h2>
      <p>
        In unserem großen
        <router-link to="/karriere/mfa/gehalt"
          ><strong>Gehaltsreport für MFA</strong></router-link
        >
        oder
        <router-link to="/karriere/zfa/gehalt"
          ><strong>ZFA</strong></router-link
        >
        bekommst Du alle relevanten Informationen zu Gehaltstarifverträgen,
        Gehalt nach Bundesländern, Gehalt in Teilzeit oder Vollzeit und noch
        viel mehr. Zusätzlich kannst Du mit dem
        <router-link to="/karriere/mfa/gehalt#gehaltsrechner"
          ><strong>Gehaltsrechner für MFA</strong></router-link
        >
        bzw. dem
        <router-link to="/karriere/zfa/gehalt#gehaltsrechner"
          ><strong>Gehaltsrechner für ZFA</strong></router-link
        >
        herausfinden, wie viel Gehalt Dir laut aktuellem Tarifvertrag im Jahr
        {{ new Date().getFullYear() }} mindestens zusteht.
      </p>

      <h2 class="lead bold mt-4">
        Häufige Fragen
      </h2>
      <h3 class="lead">
        Welche Aufgaben hat man im Job als MFA?
      </h3>
      <p>
        Je nachdem, wie eine Praxis organisiert ist sowie Praxisgröße und
        Fachrichtung, werden MFAs als Allrounder eingesetzt und erledigen quasi
        alle anfallenden Aufgaben in der Praxis. Neben der
        Sprechstundenorganisation und Patientenbetreuung, gibt es zahlreiche
        Tätigkeiten für eine MFA, die für den Patienten nicht ersichtlich sind.
        Der Beruf vereint bürokratische, organisatorische und medizinische
        Aufgaben. Mehr erfährst Du in unserem Artikel über
        <router-link to="/karriere/mfa/ausbildung-berufsbild"
          ><strong
            >Ausbildung und Berufsbild für Medizinische Fachangestellte</strong
          ></router-link
        >.
      </p>
      <h3 class="lead">
        Welche Weiterbildungen kann man als MFA | ZFA machen?
      </h3>
      <p>
        Als MFA | ZFA hast Du vielerlei Möglichkeiten Fortbildungen,
        Weiterbildungen bis hin zu einem Studium abzuschließen, um Deine
        Jobmöglichkeiten und Karriereperspektiven zu erweitern. In unserer
        großen
        <router-link to="/karriere/fort-und-weiterbildung"
          ><strong
            >Übersicht an Fortbildungen, Weiterbildungen & Studium</strong
          ></router-link
        >
        findest Du verschiedenste Alternativen, bei denen auch für Dich
        sicherlich etwas dabei ist.
      </p>
      <h3 class="lead">
        Welche alternativen Jobmöglichkeiten und Arbeitsorte gibt es für MFA &
        ZFA?
      </h3>
      <p>
        In unserer Liste von
        <router-link to="/karriere/jobs-und-berufsbilder"
          ><strong>50+ Alternativen Jobs und Berufsbildern</strong></router-link
        >
        findest Du eine Reihe von interessanten Möglichkeiten für MFA und ZFA.
        Von der Medizinischen Fachangestellten bei der Polizei, über die Arbeit
        als MFA | ZFA beim Gesundheitsamt bis hin zur Arbeit als
        SachbearbeiterIn bei einer Krankenkasse und viele weitere mehr, ist
        einiges dabei.
      </p>
    </div>
  </aside>
</template>

<script>
  const cities = [
    { name: "Berlin", slug: "berlin" },
    { name: "Bochum", slug: "bochum" },
    { name: "Bonn", slug: "bonn" },
    { name: "Bremen", slug: "bremen" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Essen", slug: "essen" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Hamburg", slug: "hamburg" },
    { name: "Hannover", slug: "hannover" },
    { name: "Köln", slug: "koeln" },
    { name: "München", slug: "muenchen" },
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Wuppertal", slug: "wuppertal" }
  ];

  export default {
    name: "JobBoardMore",
    data() {
      return {
        cities: Object.freeze(cities)
      };
    }
  };
</script>
