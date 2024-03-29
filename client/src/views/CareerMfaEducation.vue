<template>
  <div class="mfa-education">
    <div class="title">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <b-img-lazy
        class="border-radius1 shadow1 mb-3 mb-lg-5"
        fluid
        srcset="
          /img/MfaMalAnders_AusbildungBerufsbild_n5ixa0_c_scale,w_350.jpg 350w,
          /img/MfaMalAnders_AusbildungBerufsbild_n5ixa0_c_scale,w_769.jpg 769w,
          /img/MfaMalAnders_AusbildungBerufsbild_n5ixa0_c_scale,w_1200.jpg 1200w
        "
        sizes="(max-width: 1200px) 100vw, 1200px"
        src="/img/MfaMalAnders_AusbildungBerufsbild_n5ixa0_c_scale,w_1200.jpg"
        alt="MFA Ausbildung und Berufsbild"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        offset="1000"
      />

      <nav class="content mb-4 ml-lg-4 py-4 px-3 px-lg-5 float-lg-right">
        <h2>Inhalt</h2>
        <ol class="text-tertiary pl-4">
          <li>
            <b-link to="#aufgaben">Aufgaben</b-link>
          </li>
          <li>
            <b-link to="#faehigkeiten">Fähigkeiten</b-link>
          </li>
          <li>
            <b-link to="#ausbildung-ablauf">Ablauf der Ausbildung </b-link>
            <ol>
              <li>
                <b-link to="#ausbildung-inhalte"
                  >Inhalte der Ausbildung
                </b-link>
              </li>
              <li>
                <b-link to="#lernfelder">Lernfelder </b-link>
              </li>
              <li>
                <b-link to="#ausbildung-pruefung"
                  >Zwischen- und Abschlussprüfung in der Ausbildung
                </b-link>
              </li>
            </ol>
          </li>

          <li>
            <b-link to="#ausbildung-gehalt">Gehalt in der Ausbildung </b-link>
          </li>
          <li>
            <b-link to="#ausbildung-gehalt-danach"
              >Gehalt nach der Ausbildung
            </b-link>
          </li>
          <li>
            <b-link to="#perspektiven"
              >Perspektiven nach der Ausbildung
            </b-link>
          </li>
        </ol>
      </nav>

      <p>
        Die Medizinische Fachangestellte, kurz gesagt MFA oder in der früheren
        Berufsbezeichnung bis ins Jahr 2006 ArzthelferIn genannt, ist ein
        Multitalent mit vielen Aufgaben und Talenten.
      </p>
      <p>
        Da jeder ab und zu eine Arztpraxis besucht, kann man sich vorstellen,
        wie die typischen Tätigkeiten einer MFA aussehen. Was zu diesem
        wundervollen und abwechslungsreichen Beruf aber eigentlich alles dazu
        gehört und wie die Ausbildung zur Medizinischen Fachangestellten
        aussieht, beschreiben wir hier.
      </p>

      <h2 id="aufgaben">
        Aufgaben als Medizinische Fachangestellte (MFA)
      </h2>
      <p>
        Von manchen Patienten als “Sprechstundenhilfe” betitelt, ist eine
        Medizinische Fachangestellte keineswegs nur eine HelferIn für die
        Sprechstunde. MFAs organisieren die Arztpraxis und alles, was mit der
        Patientenversorgung und zu einer erfolgreichen Praxisführung dazu
        gehört.
      </p>
      <p>
        Je nachdem, wie eine Praxis organisiert ist sowie Praxisgröße und
        Fachrichtung, werden MFAs als Allrounder eingesetzt und erledigen quasi
        alle anfallenden Aufgaben in der Praxis. Neben der
        Sprechstundenorganisation und Patientenbetreuung, gibt es zahlreiche
        Tätigkeiten für eine MFA, die für den Patienten nicht ersichtlich sind.
        Der Beruf vereint bürokratische, organisatorische und medizinische
        Aufgaben.
      </p>
      <div class="row row-cols-1 row-cols-lg-3">
        <div class="col">
          <div class="example">
            <h3 class="h5">
              Beispiele für medizinische Tätigkeiten:
            </h3>
            <p class="mb-0">
              Sie assistieren den Ärzten bei Untersuchungen oder chirurgischen
              Eingriffen und bereiten Untersuchungsräume entsprechend vor und
              nach. Sie legen Verbände an. Manche MFAs arbeiten im praxiseigenen
              Labor, nehmen Blut ab und führen teilweise selber Blut- und
              Urinuntersuchungen durch. Sie verabreichen Injektionen, Impfungen
              und Infusionen. Nicht zuletzt ist die MFA auch für die
              fachgerechte Durchführung der Desinfektion von Arbeitsflächen und
              Instrumenten zuständig.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="example">
            <h3 class="h5">
              Beispiele für bürokratische Tätigkeiten:
            </h3>
            <p class="mb-0">
              Von Tätigkeiten an der Rezeption, Rezepte erstellen, Anträge für
              Krankenkassen oder Versorgungskassen ausfüllen, Bestellungen und
              den Einkauf der Praxis zu managen, erledigen Medizinische
              Fachangestellte ebenfalls die Abrechnung und etablieren ein
              funktionierendes Qualitätsmanagement.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="example">
            <h3 class="h5">
              Beispiele für organisatorische Tätigkeiten:
            </h3>
            <p class="mb-0">
              Medizinische Fachangestellte sorgen für einen reibungslosen
              Sprechstundenablauf. Sie vereinbaren Termine so, dass Patienten
              nicht zu lange warten. Koordinieren Untersuchungen, sodass
              entsprechende Räume und Kollegen zur Verfügung stehen. Notfälle am
              Telefon oder an der Rezeption erkennen sie schnell und können
              fachgerecht handeln.
            </p>
          </div>
        </div>
      </div>
      <h2 id="faehigkeiten">
        Fähigkeiten, die Du als Medizinische Fachangestellte (MFA) mitbringen
        solltest
      </h2>
      <p>
        Als Medizinische Fachangestellte muss man nicht perfekt sein, aber man
        ist schon ziemlich nah dran 😉. Um den Praxisalltag mit all seinen
        Herausforderungen meistern zu können und diesen wirklich wunderbaren
        Beruf mit Freude auszuüben, helfen bestimmte Eigenschaften:
      </p>
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col">
          <ul>
            <li>Organisationstalent</li>
            <li>Gutes Zeitmanagement</li>
            <li>Multitaskingfähig</li>
            <li>Freude am Umgang mit Menschen</li>
            <li>Gute Kommunikationsfähigkeit</li>
            <li>Einfühlungsvermögen</li>
            <li>
              Verschwiegenheit (Patientengeheimnis und Schweigepflicht)
            </li>
            <li>Interesse an der Medizin</li>
            <li>
              Keine Scheu vor dem menschlichen Körper, seinen Sekreten bzw.
              Ausscheídungen und Gerüchen
            </li>
            <li>Gewissenhaftes arbeiten</li>
            <li>Verantwortungsbewusstsein</li>
            <li>Genauigkeit</li>
            <li>
              Eine gewisse Serviceorientiertheit (der Patient ist schließlich
              König 🤷‍♀️)
            </li>
          </ul>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <b-img-lazy
            style="max-width: 80%"
            class="my-4"
            fluid
            src="~@/assets/img/profile_mfa.svg"
            alt="Profil einer Medizinischen Fachangestellten (MFA)"
          />
        </div>
      </div>
      <h2 id="ausbildung-ablauf">
        Ablauf der Ausbildung zur Medizinischen Fachangestellten (MFA)
      </h2>
      <p>
        Die Ausbildung zur MFA findet berufsbegleitend statt. Das heißt,
        praktische Kenntnisse werden in der Ausbildungspraxis vermittelt und
        theoretisches Wissen erlernst Du in der Berufsschule.
      </p>
      <p>
        Zur Berufsschule gehst du, je nach Bundesland, 1-2 mal die Woche. In der
        Berufsschule lernst Du alles, was Du im Berufsalltag benötigst. Dazu
        zählen medizinische Inhalte, wie die Lehre der Anatomie, Pathologie und
        Physiologie, um den Körper, seine normalen Funktionen und Krankheiten zu
        verstehen. Daneben behandelt ihr verwaltungstechnischen Lehrstoff über
        Abrechnung, Datenschutz und das deutsche Gesundheitssystem. Aber auch
        interessante Dinge zu Hygienestandards, Kommunikation mit Patienten und
        Qualitätsmanagement werden in der Berufsschule erlernt.
      </p>
      <p>
        Insgesamt dauert die Ausbildung zur MFA drei Jahre.
      </p>
      <p>
        Die Inhalte der Ausbildung sind in einem sogenannten
        Ausbildungsrahmenplan in der
        <b-link
          href="https://www.bundesaerztekammer.de/fileadmin/user_upload/downloads/MFA_Verordnung_05052006.pdf"
          target="_blank"
          >Verordnung über die Berufsausbildung zum Medizinischen
          Fachangestellten / zur Medizinischen Fachangestellten</b-link
        >
        verankert. Der Rahmenplan legt fest, welche Inhalte in welchem
        Ausbildungsjahr vermittelt werden müssen. Die Ausbildungspraxis schreibt
        einen Ausbildungsplan nieder, an dem sich die Azubis orientieren können.
      </p>
      <h3 id="ausbildung-inhalte">Inhalte der MFA Ausbildung</h3>
      <div class="example">
        <h4 class="h5">
          1. Ausbildungsjahr
        </h4>
        <p class="mb-0">
          Im ersten Ausbildungsjahr erlernt man zunächst viele Grundlagen, z.B.
          zum Arbeitsrecht und Datenschutz. Aber auch den richtigen Umgang mit
          Patienten und wie Du bei Untersuchungen oder Therapien richtig
          assisierst. Oft ist hier noch ein/e erfahrene/r KollegIn dabei, um dir
          zu helfen.
        </p>
      </div>
      <div class="example">
        <h4 class="h5">
          2. Ausbildungsjahr
        </h4>
        <p class="mb-0">
          Im zweiten Lehrjahr kommen Aufgabenfelder aus dem Bereich des
          Praxismanagements hinzu, wie Abrechnung oder Qualitätsmanagement. Die
          Azubis bekommen außerdem verantwortungsvollere Aufgaben zugeteilt und
          können jetzt Untersuchungsräume selbst vorbereiten, Instrumente
          aufbereiten oder Patienten an der Rezeption eigenständig empfangen und
          entlassen.
        </p>
      </div>
      <div class="example">
        <h4 class="h5">
          3. Ausbildungsjahr
        </h4>
        <p class="mb-0">
          Im dritten Lehrjahr kommt das große Themenfeld der Prävention auf den
          Unterrichtsplan. Die Azubis lernen, wie Krankheiten vermieden werden
          und die Gesundheit gefördert wird. MFAs belgleiten in ihrem
          Praxisalltag den Patienten oft dabei, indem sie ihn beraten und
          unterstützen. Verantwortungsvolle Tätigkeiten am Patienten, wie das
          Blutabnehmen oder Fäden ziehen, runden die Ausbildung ab.
        </p>
      </div>
      <div class="example">
        <h4 class="h5">
          Berichtsheft
        </h4>
        <p class="mb-0">
          Während der gesamten Ausbildungszeit müssen die Azubis ein
          Berichtsheft pflegen und ihre regelmäßigen Aufgaben sowie das
          Erlernte, praktisch wie theoretisch, schriftlich festhalten. Der
          Ausbilder, in der Regel der Praxisinhaber, ist verpflichtet die
          angefertigten Berichte zu überwachen und mit seiner Unterschrift zu
          bestätigen. Das Berichtsheft kann man also als eine Art
          Ausbildungsnachweis ansehen und ist Voraussetzung, um die Ausbildung
          abschließen zu können und zur Abschlussprüfung zugelassen zu werden.
        </p>
      </div>

      <h3 id="lernfelder">
        Lernfelder
      </h3>
      <p>
        Für jedes Lehrjahr gibt es Lernfelder. Insgesamt werden 12 Lernfelder in
        den 3 Ausbildungsjahren zur MFA behandelt. Die Inhalte der Lernfelder
        werden theoretisch in der Berufsschule vermittelt. Den praktischen Bezug
        erlernt man in der Arztpraxis oder ggfls. auch in Praxishospitationen in
        anderen Fachrichtungen.
      </p>
      <div class="mb-5">
        <div class="table-responsive">
          <table class="table table-secondary table-striped">
            <thead>
              <tr>
                <th colspan="1"></th>
                <th colspan="3" class="text-center">Lehrjahr</th>
              </tr>
              <tr>
                <th scope="col">Lernfeld</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Im Beruf und Gesundheitswesen orientieren</td>
                <td>60h</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2. Patienten empfangen & begleiten</td>
                <td>80h</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  3. Praxishygiene und Schutz vor Infektionskrankheiten
                  organisieren
                </td>
                <td>80h</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  4. Bei Diagnostik und Therapie von Erkrankungen des
                  Bewegungsapparates assistieren
                </td>
                <td>60h</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  5. Zwischenfällen vorbeugen und in Notfallsituationen Hilfe
                  leisten
                </td>
                <td></td>
                <td>80h</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  6. Waren beschaffen und verwalten
                </td>
                <td></td>
                <td>80h</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  7. Praxisabläufe im Team organisieren
                </td>
                <td></td>
                <td>60h</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  8. Patienten bei diagnostischen und therapeutischen Maßnahmen
                  der Erkrankungen des Urogenitalsystems begleiten
                </td>
                <td></td>
                <td>60h</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  9. Patienten bei diagnostischen und therapeutischen Maßnahmen
                  der Erkrankungen des Verdauungssystems begleiten
                </td>
                <td></td>
                <td></td>
                <td>80h</td>
              </tr>
              <tr>
                <td>
                  10. Patienten bei kleinen chirurgischen Behandlungen begleiten
                  und Wunden versorgen
                </td>
                <td></td>
                <td></td>
                <td>40h</td>
              </tr>
              <tr>
                <td>
                  11. Patienten bei der Prävention begleiten
                </td>
                <td></td>
                <td></td>
                <td>80h</td>
              </tr>
              <tr>
                <td>
                  12. Berufliche Perspektiven entwickeln
                </td>
                <td></td>
                <td></td>
                <td>80h</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="small text-muted">
          Quelle:
          <b-link
            href="https://www.bundesaerztekammer.de/fileadmin/user_upload/downloads/MFA_Verordnung_05052006.pdf"
            target="_blank"
            rel="noopener"
          >
            Verordnung über die Berufsausbildung zum Medizinischen
            Fachangestellten / zur Medizinischen Fachangestellten (2006)</b-link
          >
        </p>
      </div>

      <h3 id="ausbildung-pruefung">
        Zwischen- und Abschlussprüfung
      </h3>
      <p>
        Am Ende des zweiten Ausbildungsjahres findet eine Zwischenprüfung statt,
        um den Wissensstand der Auszubildenden abzufragen. Die Prüfung ist
        schriftlich und dauert 120 Minuten. Dabei werden alle Themenfelder
        abgefragt, die die Azubis bis zu diesem Zeitpunkt in der Berufsschule
        kennengelernt haben.
      </p>
      <p>
        Um zur Abschlussprüfung zugelassen zu werden, müssen die Azubis an der
        Zwischenprüfung teilgenommen haben und ihr Berichtsheft bei der
        Ärztekammer eingereicht haben.
      </p>
      <p>
        Die Abschlussprüfung wird am Ende des dritten Ausbildungsjahres
        absolviert und gliedert sich in einen schriftlichen und einen
        praktischen Prüfungsteil. Die schriftlichen Klausuren umfassen insgesamt
        300 Minuten.
      </p>
      <p>
        Bei der praktischen Prüfung ziehen die Auszubildenden in der Regel aus
        mehreren Umschlägen ihre Prüfungsaufgabe. Insgesamt dauert die
        praktische Prüfung 75 Minuten. In dieser Zeit bearbeiten die
        Auszubildenden ihre Prüfungsaufgabe und bereiten sich auf das
        Prüfungsgespräch mit den Prüfern vor. Die Auszubildenden spielen dabei
        eine typische Situation aus dem Praxisalltag nach, z.B. wie eine MFA
        einen chirurgischen Tisch vorbereitet. Danach erfolgt ein abschließendes
        Fachgespräch von maximal 15 Minuten, indem die Auszubildenden ihr
        Vorgehen erklären und einige Fachfragen zu der Thematik beantworten.
      </p>
      <p>
        Bei erfolgreich absolvierter schriftlicher und praktischer Prüfung mit
        einer Mindestnote von “ausreichend” ist die Ausbildung abgeschlossen.
        Die Auszubildenden erhalten einen Ausbildungsbrief zur/zum Medizinischen
        Fachangestellten.
      </p>
      <h2 id="ausbildung-gehalt">
        Gehalt in der Ausbildung zur Medizinischen Fachangestellten
      </h2>
      <p>
        Der Verband Medizinischer Fachberufe e.V. (VMF) ist die einzige
        Organisation für Medizinische Fachangestellte auf Arbeitnehmerseite. Sie
        vertritt uns Medizinische Fachangestellte bei Tarifverhandlungen
        gegenüber der Arbeitsgemeinschaft zur Regelung der Arbeitsbedingungen
        der ArzthelferInnen / Medizinischen Fachangestellten (AAA). Die AAA ist
        die Tarifpartei der Arbeitgeber, sprich der niedergelassenen Ärzte.
      </p>
      <p>
        Der VMF setzt sich auch für die Ausbildungsvergütung der MFA ein und hat
        bei der letzten Tarifverhandlung sehr gute Ergebnisse für die Gehälter
        und Ausbildungsvergütungen erzielt. In den kommenden drei Jahren wird
        sich die Ausbildungsvergütung von Medizinischen Fachangestellten stetig
        erhöhen. Wahnsinn, wenn ich daran denke, dass ich zum Start meiner
        Ausbildung im Jahr 2004 gerade einmal 480 Euro verdient habe.
        Glücklicherweise konnte die Vergütung mittlerweile fast verdoppelt
        werden.
      </p>

      <h3 class="h5">
        Tabelle – Ausbildungsvergütung als Medizinische Fachangestellte (MFA)
      </h3>
      <div class="mb-5">
        <div class="table-responsive">
          <table class="table table-secondary table-striped">
            <thead>
              <tr>
                <th colspan="1"></th>
                <th colspan="3" class="text-center">Ausbildungsjahr</th>
              </tr>
              <tr>
                <th scope="col">ab</th>
                <th scope="col">1.</th>
                <th scope="col">2.</th>
                <th scope="col">3.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>01.01.2021</th>
                <td>880,- €</td>
                <td>935,- €</td>
                <td>995,- €</td>
              </tr>
              <tr>
                <th>01.01.2022</th>
                <td>900,- €</td>
                <td>965,- €</td>
                <td>1.035,- €</td>
              </tr>
              <tr>
                <th>01.01.2023</th>
                <td>920,- €</td>
                <td>995,- €</td>
                <td>1.075,- €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="small text-muted">
          Quelle:
          <b-link
            href="https://www.vmf-online.de/mfa/mfa-tarife"
            target="_blank"
            rel="noopener"
            >Gehaltstarifvertrag 2021 für Medizinische Fachangestellte (MFA) /
            ArzthelferInnen – AAA (2021)</b-link
          >
        </p>
      </div>

      <div class="bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4">
        <SearchWidgetJob class="mb-3" placeholder="Ausbildung finden..." />
        <JobListTeaser employment-type="training" />
      </div>

      <BannerJobSeeksLarge class="mb-4 mb-lg-5" />

      <h2 id="ausbildung-gehalt-danach">
        Gehalt nach der Ausbildung zur Medizinischen Fachangestellten (MFA)
      </h2>
      <p>
        Das Gehalt einer MFA orientiert sich an dem
        <b-link to="/karriere/mfa/gehalt#gehaltstarifvertrag"
          >Tarifvertrag</b-link
        >
        für Medizinische Fachangestellte. Ausführliche Informationen zum
        <b-link to="/karriere/mfa/gehalt"
          >Gehalt für Medizinische Fachangestellte</b-link
        >
        nach der Ausbildung, den
        <b-link to="/karriere/mfa/gehalt#taetigkeitsgruppen"
          >Tätigkeitsgruppen</b-link
        >
        und Einteilung der Berufsjahre findest du auf unserer
        <b-link to="/karriere/mfa/gehalt">MFA Gehalt</b-link> Seite.
      </p>
      <p>
        Hast Du noch Fragen zum Beruf oder der Ausbildung der Medizinischen
        Fachangestellten? Dann schreib uns doch einfach
        <b-link to="/kontakt">eine Nachricht</b-link>.
      </p>

      <h2 id="perspektiven">
        Perspektiven nach der Ausbildung zur Medizinischen Fachangestellten
      </h2>
      <p>
        Hast Du deine Ausbildung erstmal in der Tasche, wird es auch als
        ausgelernt MFA garantiert nicht langweilig. Jeder kann sich entsprechend
        seiner Fähigkeiten und Interessen auf bestimmte Tätigkeiten
        spezialisieren, z. B. als
        <b-link to="/karriere/jobs-und-berufsbilder/verwaltung"
          >AbrechnungsmanagerIn</b-link
        >
        oder
        <b-link to="/karriere/jobs-und-berufsbilder/medizinisch-technisch"
          >MFA im ambulanten OP</b-link
        >. Manche mögen eher das Aufgabenfeld der AllrounderIn, um in allen
        Bereichen der Praxis eingesetzt zu sein.
      </p>
      <p>
        Das Wissen einer MFA über Medizin, Therapien, Untersuchungen oder
        Abrechnung nimmt im Laufe der Berufstätigkeit stetig zu. So wirst Du auf
        dem Arbeitsmarkt immer beliebt sein und keine Schwierigkeiten haben,
        eine Anstellung zu finden. Auch andere Arbeitgeber aus dem
        Gesundheitswesen schätzen die breiten Fähigkeiten von Medizinischen
        Fachangestellten. Sie versuchen auf sich aufmerksam zu machen durch
        <b-link to="/stellenangebote">attraktive Stellenangebote</b-link>, die
        Dir andere Möglichkeiten außerhalb der Arztpraxis bieten.
      </p>
      <p>
        Ganz allgemein haben wir die Kompetenzbereiche und Jobmöglichkeiten für
        Medizinische Fachangestellte / ArzthelferInnen in 5 Bereiche eingeteilt:
      </p>
      <TheProfessionTypeList class="my-4" :col-md="6" :col-lg="4" />
      <p>
        Jeder Bereich bietet verschiedene Möglichkeiten sich zu spezialisieren
        oder im Beruf und gehaltstechnisch aufzusteigen.
      </p>
      <p>
        Manche liebäugeln eventuell mit dem Gedanken zu studieren. Hier gibt es
        einige Studiengänge, die mit entsprechender Berufserfahrung von MFAs
        absolviert werden können. Daneben gibt es verschiedene
        <b-link to="/karriere/fort-und-weiterbildung"
          >Fortbildungen oder Weiterbildungen</b-link
        >
        im Sinne einer Aufstiegsfortbildung, die Medizinische Fachangestellte
        befähigen mehr Verantwortung zu übernehmen und in eine höhere
        Gehaltsklasse zu wechseln.
      </p>
      <p>
        Informationen über die drei großen Bildungsformen, Fortbildung,
        Weiterbildung und Studium, und welche davon für Dich die Richtige ist,
        kannst du
        <b-link
          to="/karriere/fort-und-weiterbildung#fortbildung-weiterbildung-studium"
          >hier</b-link
        >
        nachlesen.
      </p>
      <p>
        In unserer Rubrik
        <b-link to="/karriere/fort-und-weiterbildung"
          >Fort- und Weiterbildung</b-link
        >
        kannst Du Dich informieren, welche Möglichkeiten Du als Medizinische
        Fachangestellte in und außerhalb der Arztpraxis hast. Krankenhäuser,
        Medizinische Versorgungszentren, Rehakliniken, Gesundheitsämter,
        Medizinische Schreibbüros, Pflegedienste, Krankenkassen, Ärztekammern
        oder Kassenärztliche Vereinigungen sind dabei einige Arbeitsorte für
        Medizinische Fachangestellte.
      </p>

      <h2 class="h4">Quellen</h2>
      <p>
        Alle Inhalte über die Berufsausbildung zur/zum Medizinischen
        Fachangestellten kannst Du in der entsprechenden
        <b-link
          href="https://www.bundesaerztekammer.de/fileadmin/user_upload/downloads/MFA_Verordnung_05052006.pdf"
          >Berufsverordnung</b-link
        >
        nachlesen.
      </p>
      <BannerJobboard class="my-5" />
      <TrainingListRandom />
    </div>

    <ScrollTopButton />

    <Head
      :title="title"
      :desc="
        `Medizinische Fachangestellte Ausbildung ${new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 30
        ).getFullYear()} | Gehalt | Aufgabenbereiche | Anforderungsprofil | Berufsbild`
      "
      img="/img/MfaMalAnders_AusbildungBerufsbild_n5ixa0_c_scale,w_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import ScrollTopButton from "@/components/ScrollTopButton.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import BannerJobboard from "@/components/BannerJobboard.vue";
  import JobListTeaser from "@/components/JobListTeaser.vue";
  import TheProfessionTypeList from "@/components/TheProfessionTypeList.vue";
  import SearchWidgetJob from "@/components/SearchWidgetJob.vue";
  import BannerJobSeeksLarge from "@/components/BannerJobSeeksLarge.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  export default {
    name: "CareerMfaEducation",
    components: {
      TrainingListRandom,
      BannerJobboard,
      JobListTeaser,
      TheProfessionTypeList,
      SearchWidgetJob,
      BannerJobSeeksLarge,
      ScrollTopButton
    },
    mixins: [scrollToHashMixin],
    data() {
      return {
        title: "MFA Ausbildung & Berufsbild",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "MFA - Ausbildung & Berufsbild",
            to: "/karriere/mfa/ausbildung-berufsbild"
          }
        ],
        snippet: [
          {
            id: "breadcrumbs",
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "MFA mal anders",
                "item": "https://www.mfa-mal-anders.de"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Karriere",
                "item": "https://www.mfa-mal-anders.de/karriere"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": "MFA Ausbildung und Berufsbild",
                "item": "https://www.mfa-mal-anders.de/karriere/mfa-ausbildung-berufsbild"
              }]
            }`
          },
          {
            type: "application/ld+json",
            inner: `{
              "@context": "https://schema.org/",
              "@type": "Occupation",
              "name": "Medizinische Fachangstellte (MFA) / ArzthelferIn",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "lastReviewed": "2021-12-11T12:20:00-05:00"
              },
              "description": "Medizinische Fachangestellte (MFA) oder auch ArzthelferInnen arbeiten meist in Arztpraxen, aber auch Krankenhäusern und anderen Pflegeeinrichtungen und unterstützen Ärzte bei der Behandlung von Patienten sowie der Organisation des gesamten Betriebsablaufs.",
              "estimatedSalary": [
                {
                "@type": "MonetaryAmountDistribution",
                "name": "base",
                "currency": "EUR",
                "duration": "P1M",
                "percentile25": "2200",
                "median": "2500",
                "percentile75": "3000"
                }
              ],
              "occupationLocation": [
                {
                "@type": "Country",
                "name": "Germany"
                }
              ]
            }`
          }
        ]
      };
    }
  };
</script>
