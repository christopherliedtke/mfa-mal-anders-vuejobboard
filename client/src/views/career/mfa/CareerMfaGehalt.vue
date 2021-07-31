<template>
  <div class="salary">
    <div class="title">
      <h1>{{ title }}</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <b-container class="py-3 py-lg-5">
      <b-img-lazy
        class="border-radius1 shadow1 mb-3 mb-lg-5"
        fluid
        srcset="/img/MfaMalAnders_Gehalt_1200-300x157.jpg 300w, /img/MfaMalAnders_Gehalt_1200-1024x538.jpg 1024w, /img/MfaMalAnders_Gehalt_1200-768x404.jpg 768w, /img/MfaMalAnders_Gehalt_1200.jpg 1200w"
        sizes="(max-width: 1200px) 100vw, 1200px"
        src="/img/MfaMalAnders_Gehalt_1200.jpg"
        alt="MFA Gehalt - So viel verdienst Du wirklich"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        offset="1000"
      />
      <p>
        Sobald es um das Thema Gehalt geht, fehlt vielen MFA bzw.
        ArzthelferInnen das Gespür für eine konkrete Zahl. Ein typisches
        Beispiel, das du bestimmt auch kennst: Du hast dich gerade auf einen Job
        beworben. Der zukünftige Chef fragt dich nach deinen
        <b-link
          to="/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Gehaltsvorstellungen</b-link
        >. Natürlich willst du nicht zu dreist sein und das potenzielle
        Jobangebot durch zu hohe Gehaltswünsche in Gefahr bringen. Deshalb gehen
        viele ArzthelferInnen lieber auf Nummer sicher und verkaufen sich am
        Ende unter Wert.
      </p>

      <div
        class="bg-light-shade border-radius1 my-4 p-4"
        style="max-width: fit-content"
      >
        <h2 class="h4 bold">Inhalt</h2>
        <ol class="text-tertiary pl-4">
          <li class="lead mt-3">
            <b-link to="#gehaltstarifvertrag"
              >Gehaltstarifvertrag {{ new Date().getFullYear() }} – MFA /
              ArzthelferIn (inkl. Gehaltsrechner)</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#gehalt-ausbildung"
              >MFA Ausbildung {{ new Date().getFullYear() }} – Gehalt nach
              Tarifvertrag</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#berufsjahre">Anrechnung von Berufsjahren</b-link>
          </li>
          <li class="lead mt-3">
            <b-link to="#auszeiten"
              >Mutterschutz, Elternzeit und Erziehungsurlaub</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#berufsnahe-taetigkeiten"
              >Anrechnung der Berufsjahre für MFA bei berufsnahen
              Tätigkeiten</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#taetigkeitsgruppen"
              >Tätigkeitsgruppen nach aktuellem Gehaltstarifvertrag für
              MFA</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#gehalt-per-bundesland"
              >MFA Gehalt nach Bundesland</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#benefits"
              >Benefits – wenn dein Gehalt nicht zufriedenstellend ist</b-link
            >
          </li>
        </ol>
      </div>

      <h2>
        Wie ermittelt man eigentlich seinen Marktwert?
      </h2>
      <p>
        In den vielen Gruppen und Foren kommen regelmäßig Fragen zur Höhe des
        Gehalts in Voll- und Teilzeit auf. Wenn ich bei manchen Kommentaren
        lese, dass eine MFA mit 15 Jahren Berufserfahrung in ein und derselben
        Praxis mit 1.900€ brutto nach Hause geht, finde ich das einfach nur sehr
        schade und traurig.
      </p>
      <p>
        Damit dir das nicht passiert, bekommst du in diesem Artikel von
        Informationen über Gehalt, Tarifverträge und Tätigkeitsgruppen für
        Medizinische Fachangestellte. Mit diesem Wissen, kannst du deinen
        eigenen Marktwert einordnen und selbstbewusst für einen
        leistungsorientierten und fairen Lohn einstehen. In unserem Artikel über
        <b-link
          to="/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Gehaltsverhandlungen</b-link
        >
        geben wir dir zusätzlich 9 Tipps, wie du dein Wunschgehalt erzielst.
      </p>
      <p>
        Vorweg klären wir zuerst ein paar Begrifflichkeiten und wie die
        vertragliche Lage aussieht.
      </p>
      <h2 id="gehaltstarifvertrag">
        Gehaltstarifvertrag {{ new Date().getFullYear() }} – MFA / ArzthelferIn
      </h2>
      <b-row>
        <b-col>
          <p>
            Der Verband medizinischer Fachberufe e.V. (VMF) ist die
            verantwortliche Organisation für Medizinische Fachangestellte auf
            Arbeitnehmerseite. Sie vertritt uns MFA bei Tarifverhandlungen
            gegenüber der Arbeitsgemeinschaft zur Regelung der
            Arbeitsbedingungen der ArzthelferInnen / Medizinischen
            Fachangestellten (AAA). Die AAA ist die Tarifpartei der Arbeitgeber,
            sprich der niedergelassenen Ärzte, mit der der Manteltarifvertag
            verhandelt wird.
          </p>
          <p>
            Die niedergelassenen Ärzte sind nicht automatisch Mitglied in der
            AAA. Deshalb kann man nicht zwingend davon ausgehen, dass sich
            Praxen an die Gehälter im Tarifvertrag halten müssen. Arbeitgeber
            sind nur dann dazu verpflichtet nach Gehaltstarifvertrag zu zahlen,
            wenn sowohl sie Mitglied im AAA als auch die MFA Mitglied im VMF
            sind.
          </p>
          <p>
            Ehrlich gesagt, kenne ich nicht viele ArzthelferInnen, die Mitglied
            im VMF sind. Daher wundert es auch nicht, dass so viele von uns
            untertariflich verdienen, wie die Kollegin aus dem Forum im obigen
            Beispiel.
          </p>
          <p>
            Dennoch gibt es viele Ärzte, die sich freiwillig an den aktuellen
            Tarifvertrag halten oder zumindest das Gehalt für ihre Medizinischen
            Fachangestellten daran anlehnen.
          </p>
          <p>
            Neben dem offiziellen Tarifvertrag existieren zahlreiche
            Gehaltstarifverträge von privaten Unternehmen, Krankenhäusern, dem
            öffentlichen Dienst (z.B. wenn du bei der Kassenärztlichen
            Vereinigung arbeitest) und kirchlichen Trägern (wie der Caritas, der
            Diakonie oder der Johanniter).
          </p>
          <p>
            Es kommt im privaten Bereich oftmals zu einer außertariflichen
            Bezahlung. Das muss nicht unbedingt negativ für dich ausfallen.
            Viele Medizinische Fachangestellte werden dadurch übertariflich
            bezahlt.
          </p>
          <p>
            Wenn dein Chef kein Mitglied im AAA ist, du aber darauf bestehst,
            dass dein Gehalt nach Tarifvertrag bezahlt wird, kannst du
            alternativ mit deinem Arbeitgeber vereinbaren, dass er sich
            freiwillig daran hält. Hier ist es ratsam, eine entsprechende
            Klausel im Arbeitsvertrag aufnehmen zu lassen, die die Abmachung
            bindend macht.
          </p>
          <p>
            Der Tarifvertrag hat natürlich auch einen ganz entscheidenden
            Vorteil: er wird regelmäßig neu verhandelt. Das Gehalt wird somit
            beinahe jährlich immer etwas angepasst und erhöht. Ist dein Chef
            verpflichtet nach Tarifvertrag zu zahlen oder hält sich freiwillig
            daran, musst du also selbst keine
            <b-link
              to="/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
              >Gehaltsverhandlungen</b-link
            >
            führen.
          </p>
          <p>
            Daneben bietet der Gehaltstarifvertrag für Medizinische
            Fachangestellte dir vor allem eine gute Orientierung, um deinen
            Marktwert einzuschätzen – bezüglich Qualifikation und Erfahrung.
          </p>
          <TrainingCalendarSmallBanner class="my-2" />
        </b-col>
        <b-col>
          <Gehaltsrechner class="my-4" />
          <GehaltsverhandlungBanner class="mb-4" />
          <FacebookBtn
            class="mb-4 mr-1"
            content="Folgen und keine Neuigkeiten verpassen"
          />
          <FacebookShareBtn class="mb-4" />
        </b-col>
      </b-row>
      <div>
        <h3 class="h4">
          Hier noch einmal die ab dem 01.01.2021 gültige Gehaltstabelle:
        </h3>
        <b-table-simple class="mt-3" hover responsive table-variant="secondary">
          <colgroup>
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <b-thead head-variant="primary">
            <b-tr>
              <b-th>Berufsjahr</b-th>
              <b-th>Tätigkeitsgruppe I</b-th>
              <b-th>Tätigkeitsgruppe II</b-th>
              <b-th>Tätigkeitsgruppe III</b-th>
              <b-th>Tätigkeitsgruppe IV</b-th>
              <b-th>Tätigkeitsgruppe V</b-th>
              <b-th>Tätigkeitsgruppe VI</b-th>
            </b-tr>
          </b-thead>
          <b-tbody class="text-right">
            <b-tr>
              <b-th>1 - 4</b-th>
              <b-td>2.088,40 €</b-td>
              <b-td>2.245,03 €</b-td>
              <b-td>2.349,45 €</b-td>
              <b-td>2.506,08 €</b-td>
              <b-td>2.714,92 €</b-td>
              <b-td>3.028,18 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>5 - 8</b-th>
              <b-td>2.267,70 €</b-td>
              <b-td>2.437,78 €</b-td>
              <b-td>2.551,16 €</b-td>
              <b-td>2.721,24 €</b-td>
              <b-td>2.948,01 €</b-td>
              <b-td>3.288,17 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>9 - 12</b-th>
              <b-td>2.411,95 €</b-td>
              <b-td>2.592,85 €</b-td>
              <b-td>2.713,44 €</b-td>
              <b-td>2.894,34 €</b-td>
              <b-td>3.135,54 €</b-td>
              <b-td>3.497,33 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>13 - 16</b-th>
              <b-td>2.480,05 €</b-td>
              <b-td>2.666,05 €</b-td>
              <b-td>2.790,06 €</b-td>
              <b-td>2.976,06 €</b-td>
              <b-td>3.224,07 €</b-td>
              <b-td>3.596,07 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>17 - 20</b-th>
              <b-td>2.743,71 €</b-td>
              <b-td>2.949,49 €</b-td>
              <b-td>3.086,67 €</b-td>
              <b-td>3.292,45 €</b-td>
              <b-td>3.566,82 €</b-td>
              <b-td>3.978,38 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>21 - 24</b-th>
              <b-td>2.793,71 €</b-td>
              <b-td>3.003,24 €</b-td>
              <b-td>3.142,92 €</b-td>
              <b-td>3.352,45 €</b-td>
              <b-td>3.631,82 €</b-td>
              <b-td>4.050,88 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>25 - 28</b-th>
              <b-td>2.843,71 €</b-td>
              <b-td>3.056,99 €</b-td>
              <b-td>3.199,17 €</b-td>
              <b-td>3.412,45 €</b-td>
              <b-td>3.696,82 €</b-td>
              <b-td>4.123,38 €</b-td>
            </b-tr>
            <b-tr>
              <b-th>ab 29</b-th>
              <b-td>2.893,71 €</b-td>
              <b-td>3.110,74 €</b-td>
              <b-td>3.255,42 €</b-td>
              <b-td>3.472,45 €</b-td>
              <b-td>3.761,82 €</b-td>
              <b-td>4.195,88 €</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
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

      <h2 id="gehalt-ausbildung">
        MFA Ausbildung {{ new Date().getFullYear() }} – Gehalt nach Tarifvertrag
      </h2>
      <p>
        Wie für andere Ausbildungsberufe auch, ist für die Ausbildung von
        Medizinischen Fachangestellten laut Berufsbildungsgesetz eine Vergütug
        zu zahlen. Hierüber gibt der aktuelle Gehaltstarifvertrag ebenfalls
        Auskunft. Demnach ist für Medizinische Fachangestellte /
        ArzthelferInnen, die Ihre Ausbildung ab dem 01.01.2021 starten eine
        monatliche Ausbildungsvergütung (brutto) wie folgt vorgesehen:
      </p>
      <b-table-simple class="mt-4" hover responsive table-variant="secondary">
        <colgroup>
          <col />
        </colgroup>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <b-thead head-variant="primary">
          <b-tr>
            <b-th colspan="1"> </b-th>
            <b-th colspan="3" class="text-center"> Ausbildungsjahr</b-th>
          </b-tr>
          <b-tr>
            <b-th>ab</b-th>
            <b-th>1.</b-th>
            <b-th>2.</b-th>
            <b-th>3.</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr>
            <b-th>01.01.2021</b-th>
            <b-td>880,- €</b-td>
            <b-td>935,- €</b-td>
            <b-td>995,- €</b-td>
          </b-tr>
          <b-tr>
            <b-th>01.01.2022</b-th>
            <b-td>900,- €</b-td>
            <b-td>965,- €</b-td>
            <b-td>1.035,- €</b-td>
          </b-tr>
          <b-tr>
            <b-th>01.01.2023</b-th>
            <b-td>920,- €</b-td>
            <b-td>995,- €</b-td>
            <b-td>1.075,- €</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
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
      <p>
        Auf unserer Seite findest Du auch weitere Informationen zur
        <b-link to="/karriere/mfa/ausbildung-berufsbild"
          >Ausbildung zur Medizinischen Fachangestellten / ArzthelferIn</b-link
        >.
      </p>

      <ToJobboardBanner class="my-5 mx-auto" />

      <h2 id="berufsjahre">
        Anrechnung von Berufsjahren
      </h2>
      <p>
        Ein wichtiger Indikator für die Höhe des Gehalts von MFA sind Erfahrung
        und Expertise, die man sich im Laufe seines Berufslebens aneignet. Je
        länger du im Beruf bist, desto mehr kannst du logischerweise an Gehalt
        verlangen. Auch in den Tarifverhandlungen werden Gehälter nach
        Berufsjahren und Tätigkeitsgruppen vereinbart.
      </p>
      <p>
        Schauen wir uns einmal an, wie Du deine Berufsjahre berechnen kannst.
      </p>
      <p>
        Die Anrechnung deiner Berufsjahre startet ab dem 1. des Monats, in dem
        die Ausbildung beendet wurde.
      </p>

      <div class="example">
        <p><strong>Beispiel:</strong></p>
        <p class="pl-5">
          <em>
            Ausbildung am 16.07. beendet -> Anrechnung der Berufsjahre beginnt
            ab 01.07.
          </em>
        </p>
      </div>
      <p>
        Bei Beschäftigten in Teilzeit zählen die Berufsjahre genau wie bei
        Vollzeit-Beschäftigung und werden komplett angerechnet.
      </p>
      <h2 id="auszeiten">
        Mutterschutz, Elternzeit und Erziehungsurlaub
      </h2>
      <p>
        Unterbrichst du die Arbeit für Mutterschutz, Elternzeit oder
        Erziehungsurlaub, können diese Zeiten nur angerechnet werden, wenn du
        dich in einem aktiven Arbeitsverhältnis befindest.
      </p>
      <p>
        Zeiten für Mutterschutz werden dann voll bei den Berufsjahren
        angerechnet.
      </p>
      <p>
        Zeiten für Erziehungsurlaub bzw. Elternzeit werden nur zur Hälfte zu den
        Berufsjahren gezählt. Arbeitest du während der Elternzeit in Teilzeit
        als ArzthelferIn, werden die Zeiten jedoch voll dazu gerechnet.
      </p>
      <p>Zwei Beispiele zum besseren Verständnis.</p>
      <b-row class="my-3">
        <b-col class="mx-lg-4">
          <div class="example">
            <p><strong>Beispiel 1:</strong></p>
            <p class="pl-5">
              <em>
                Eine Medizinische Fachangestellte geht am 15. August 2016 bei
                errechnetem Geburtstermin am 30.09.2016 (6 Wochen vor dem
                errechneten Entbindungstermin) bis zum 25.11.2016 (8 Wochen nach
                der Entbindung) in den Mutterschutz und nimmt eine einjährige
                Elternzeit in Anspruch. Sie kehrt am 01.10.2017 in Vollzeit in
                die berufliche Tätigkeit als MFA zurück. Sie bekommt für diese
                Zeit insgesamt 8,5 Monate bei den Berufsjahren angerechnet.
              </em>
            </p>
          </div>
        </b-col>
        <b-col class="mx-lg-4">
          <div class="example">
            <p><strong>Beispiel 2:</strong></p>
            <p class="pl-5">
              <em>
                Eine Medizinische Fachangestellte geht am 15. August 2016 bei
                errechnetem Geburtstermin am 30.09.2016 in Mutterschutz bis zum
                25.11.2016 und nimmt anschließend eine einjährige Elternzeit in
                Anspruch. Ab dem 01.04.2017 arbeitet sie während der Elternzeit
                in Teilzeit 8 Stunden wöchentlich in der Praxis. Sie kehrt am
                01.10.2017 aus der Elternzeit in die Praxis zurück. Sie bekommt
                für diese Zeit insgesamt 11,5 Monate bei den Berufsjahren
                angerechnet.
              </em>
            </p>
          </div>
        </b-col>
      </b-row>
      <h2 id="berufsnahe-taetigkeiten">
        Anrechnung der Berufsjahre für MFA bei berufsnahen Tätigkeiten
      </h2>
      <p>
        Bist du vor oder nach deiner Ausbildung einer berufsnahen Arbeit
        nachgegangen (z.B. in einem Labor oder im Krankenhaus), werden die
        Zeiten zur Hälfte angerechnet. Du musst allerdings deine Prüfung zur
        Medizinischen Fachangestellten vor der Ärztekammer bestanden haben.
      </p>
      <div class="example">
        <p><strong>Beispiel:</strong></p>
        <p class="pl-5">
          <em>
            Eine Medizinische Fachangestellte arbeitet vor (oder nach) ihrer
            Ausbildung vier Jahre in einer Zahnarztpraxis. Hier werden 2
            Berufsjahre angerechnet.
          </em>
        </p>
      </div>
      <h2 id="taetigkeitsgruppen">
        Tätigkeitsgruppen nach aktuellem Gehaltstarifvertrag für MFA
      </h2>
      <p>
        Im Gehaltstarifvertrag für Medizinische Fachangestellte werden
        vorhandene Kenntnisse und Qualifikationen in Tätigkeitsgruppen
        eingeordnet und entsprechend im Gehalt widergespiegelt. Die Tätigkeiten
        werden nach Grad der Selbstständigkeit, Anzahl der Fortbildungsstunden,
        leitende Tätigkeiten und Verantwortung eingeteilt. Dies gibt dir eine
        zusätzliche Orientierung, um dein Gehaltsniveau einschätzen zu können.
        Hier steigern vor allem abgeschlossene
        <b-link to="/karriere/fort-und-weiterbildungen"
          >Fortbildungen und Weiterbildungen</b-link
        >
        das Gehaltsniveau.
      </p>
      <p>
        Nach welchen Kriterien sich die Tätigkeitsgruppen aufteilen, zeigt dir
        die nachfolgende Übersicht.
      </p>
      <div class="my-4">
        <BCard no-body class="mb-1 bg-light-shade">
          <BCardHeader header-tag="header" class="p-3" role="tab">
            Tätigkeitsgruppe 1
          </BCardHeader>

          <BCardBody>
            <BCardText>
              <ul>
                <li>
                  Berufseinsteiger nach abgeschlossener Ausbildung zur
                  medizinischen Fachangestellten
                </li>
                <li>
                  Du führst Tätigkeiten nach Anweisungen des Arztes oder einer
                  erfahreneren Kollegin aus
                </li>
              </ul>
            </BCardText>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-1 bg-light-shade">
          <BCardHeader header-tag="header" class="p-3">
            Tätigkeitsgruppe 2
          </BCardHeader>
          <BCardBody>
            <BCardText>
              <ul>
                <li>
                  Du kannst Tätigkeiten weitestgehend selbstständig ausführen
                </li>
                <li>
                  Du hast mind. 40 Fortbildungsstunden gesammelt und weist
                  vertiefte Kenntnisse und Fertigkeiten in einem Arbeitsbereich
                  auf
                </li>
              </ul>
              <p>
                <em>Fortbildungsmaßnahmen sind zum Beispiel:</em>
              </p>
              <ul>
                <li>
                  Ambulante Versorgung älterer Menschen
                </li>
                <li>Wundbehandlung/ Wundmanagement</li>
                <li>Hygienemanagement</li>
                <li>Qualitätsmanagement</li>
                <li>
                  Patientenbegleitung und Koordination
                </li>
                <li>Datenschutz und Datensicherheit</li>
                <li>
                  Informations- und Kommunikationstechnik
                </li>
                <li>
                  Notfallmanagement/ Erweiterte Notfallkompetenz
                </li>
                <li>
                  <b-link
                    to="/karriere/fort-und-weiterbildungen/impfassistentin-fachkraft-fuer-impfmanagement"
                    >Impfassistenz</b-link
                  >
                </li>
                <li>Disease-Management-Programme</li>
              </ul>
            </BCardText>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-1 bg-light-shade">
          <BCardHeader header-tag="header" class="p-3">
            Tätigkeitsgruppe 3
          </BCardHeader>
          <BCardBody>
            <BCardText>
              <ul>
                <li>
                  Du hast mindestens 80 Fortbildungsstunden gesammelt und/oder
                  weist entsprechende Berufserfahrung nach
                </li>
                <li>
                  Du führst Tätigkeiten in der Durchführung der Ausbildung der
                  Medizinischen Fachangestellten aus
                </li>
              </ul>

              <p>
                <em>Fortbildungsmaßnahmen sind zum Beispiel:</em>
              </p>
              <ul>
                <li>
                  Elektronische Praxiskommunikation und Telematik
                </li>
                <li>
                  Prävention bei Jugendlichen und Erwachsenen
                </li>
                <li>
                  Prävention im Kindes- und Jugendalter
                </li>
                <li>
                  Strahlenschutzkurs lt. § 24 (2) Röntgenverordnung (90 Stunden)
                </li>
              </ul>
            </BCardText>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-1 bg-light-shade">
          <BCardHeader header-tag="header" class="p-3">
            Tätigkeitsgruppe 4
          </BCardHeader>
          <BCardBody>
            <BCardText>
              <ul>
                <li>
                  Du führst Tätigkeiten komplett selbstständige aus
                </li>
                <li>
                  Du hast besonders vielseitige Fachkenntnisse die durch
                  Aneignung zusätzlicher umfassender Fertigkeiten, Kenntnisse
                  und Fähigkeiten in komplexen Arbeitsbereichen erworben
                </li>
                <li>
                  Du hast mindestens 120 Fortbildungsstunden gesammelt und/oder
                  übernimmst Tätigkeiten in der systematischen Planung,
                  Durchführung und Koordination der Ausbildung der Medizinischen
                  Fachangestellten
                </li>
              </ul>
              <p>
                <em>Fortbildungsmaßnahmen sind zum Beispiel:</em>
              </p>
              <ul>
                <li>
                  <b-link
                    to="/karriere/fort-und-weiterbildungen/ambulantes-operieren"
                    >Ambulantes Operieren</b-link
                  >
                </li>
                <li>
                  <b-link
                    to="/karriere/fort-und-weiterbildungen/ambulantes-operieren-in-der-augenheilkunde"
                    >Ambulantes Operieren in der Augenheilkunde</b-link
                  >
                </li>
                <li>
                  Augenheilkundlich-technische Assistenz
                </li>
                <li>Dialyse</li>
                <li>Ernährungsmedizin</li>
                <li>Gastroenterologische Endoskopie</li>
                <li>
                  <b-link
                    to="/karriere/fort-und-weiterbildungen/onkologischer-fachassistentin"
                    >Onkologie</b-link
                  >
                </li>
                <li>Palliativversorgung</li>
                <li>Pneumologie</li>
                <li>
                  Strahlenschutzkurs lt. § 24 (2) Röntgenverordnung (120
                  Stunden)
                </li>
                <li>
                  <b-link
                    to="/karriere/fort-und-weiterbildungen/qualitaetsmanagementbeauftragte-r-qmb"
                  >
                    Qualitätsmanagement
                  </b-link>
                </li>
                <li>Hygienemanagement</li>
                <li>
                  <b-link to="/karriere/fort-und-weiterbildungen"
                    >Nicht-ärztliche Praxisassistenz</b-link
                  >
                </li>
                <li>
                  <b-link to="/karriere/fort-und-weiterbildungen/verah">
                    Versorgungsassistentin in der Hausarztpraxis (VERAH®)
                  </b-link>
                </li>
              </ul>
            </BCardText>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-1 bg-light-shade">
          <BCardHeader header-tag="header" class="p-3">
            Tätigkeitsgruppe 5
          </BCardHeader>
          <BCardBody>
            <BCardText>
              <ul>
                <li>
                  Du führst leitungsbezogenen Tätigkeiten aus
                </li>
                <li>
                  Du kannst Fortbildungsmaßnahmen von insgesamt mindestens 360
                  Stunden und entsprechende Berufserfahrung vorweisen
                </li>
                <li>
                  Hierbei sind eine Fortbildung von mindestens 120 Stunden und
                  weitere Fortbildungseinheiten von mindestens 40 Stunden
                  innerhalb eines Zeitraums von 5 Jahren zu erbringen. Dieser
                  Zeitraum verlängert sich um die in Anspruch genommene
                  Elternzeit.
                </li>
              </ul>

              <p>
                <em>Ein Beispiel für eine solche Fortbildungsmaßnahme ist:</em>
              </p>
              <ul>
                <li>
                  Fachwirtin für ambulante Medizinische
                  Versorgung/Arztfachhelferin gemäß § 54 BBiG
                </li>
              </ul>
            </BCardText>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-1 bg-light-shade">
          <BCardHeader header-tag="header" class="p-3">
            Tätigkeitsgruppe 6
          </BCardHeader>
          <BCardBody>
            <BCardText>
              <ul>
                <li>
                  Du führst leitungs- und führungsbezogene Tätigkeiten aus
                </li>
                <li>
                  Du kannst Fortbildungsmaßnahmen von insgesamt mindestens 600
                  Stunden und entsprechende Berufserfahrung vorweisen
                </li>
              </ul>
              <p>
                <em>Ein Beispiel für eine solche Fortbildungsmaßnahme ist:</em>
              </p>
              <ul>
                <li>
                  Betriebswirtin für Management im Gesundheitswesen gemäß § 54
                  BBiG
                </li>
                <li>
                  <b-link to="/karriere/fort-und-weiterbildungen"
                    >Fachwirtin im Gesundheits- und Sozialwesen</b-link
                  >
                  gemäß § 53 BBiG
                </li>
              </ul>
            </BCardText>
          </BCardBody>
        </BCard>
      </div>

      <h2 id="gehalt-per-bundesland">MFA Gehalt nach Bundesland</h2>
      <p>
        Nach wie vor ist es so, dass unterschiedliche Gehälter gezahlt werden –
        je nachdem, wo man arbeitet. Auch bei ArzthelferInnen ist dies der Fall.
        Wenig überaschend sieht man ein deutliches Gefälle zwischen den alten
        und neuen Bundesländern. Durchschnittlich verdient man in Sachsen,
        Sachsen-Anhalt, Brandenburg, Thüringen und Mecklenburg-Vorpommern
        zwischen 2.057 € und 2.153 € brutto pro Monat. In den übrigen
        Bundesländern liegt dieser Wert zwischen 2.420 € und 2.612 €.
      </p>
      <div class="w-75 mx-auto my-4">
        <div class="d-flex justify-content-center mb-4">
          <b-img
            fluid
            src="~@/assets/img/gehalt_perBundesland.jpg"
            alt="Medizinische Fachangestellte (MFA) Gehalt pro Bundesland"
            width="1200"
            height="507"
          />
        </div>
        <p class="small text-muted text-right">
          Quelle: Entgeltatlas der Bundesagentur für Arbeit
        </p>
      </div>

      <h2 id="benefits">
        Benefits – wenn dein Gehalt nicht zufriedenstellend ist
      </h2>
      <p>
        Neben einer fairen Bezahlung spielen auch weitere, sogenannte weiche
        Faktoren oder Benefits eine Rolle in der Auswahl des richtigen
        Arbeitgebers. Denn Geld alleine macht auch nicht glücklich. Es muss das
        Gesamtpaket stimmen. Dazu zählen vor allem das Klima im Team, die
        Arbeitszeiten, der Weg zur Arbeit, interessante Aufgaben, die fordern
        und fördern (Stichwort
        <b-link to="/karriere/fort-und-weiterbildungen"
          >Weiterbildungen und Fortbildungen</b-link
        >
        ) oder die Möglichkeit Home Office zu machen.
      </p>
      <p>
        Wenn das angebotene Gehalt auf den ersten Blick nicht besonders reizvoll
        ist, erkundige dich nach zusätzlich möglichen Benefits. Das können
        monetäre oder nicht monetäre Sonderleistungen sein. Das
        (unzufriedenstellende) Gehalt wird dadurch kompensiert und der Job bzw.
        den Arbeitgeber attraktiver.
      </p>
      <p>
        Inwiefern sich ein Benefit für dich wirklich lohnt, entscheidet oft die
        individuelle Lebenslage. Prüfe deshalb die angebotenen Zusatzleistungen
        eines Arbeitgebers und gehe zur Not auch in die
        <b-link
          to="/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Verhandlung</b-link
        >
        und frage, ob man sich über bestimmte Zusatzleistungen einigen kann.
      </p>
      <p>Einige Beispiele für Benefits</p>
      <ul>
        <li>Übernahme von Fortbildungskosten</li>
        <li>Jobticket für öffentliche Verkehrsmittel</li>
        <li>Zuzahlung zu Kita-Gebühren oder hauseigene Kita</li>
        <li>Übertarifliche Anzahl an Urlaubstagen</li>
        <li>13. Monatsgehalt / Urlaubsgeld</li>
        <li>
          Zulage zur privaten Rentenversicherung, Betriebsrente, Lebens-,
          Unfall-, Berufsunfähigkeitsversicherung etc.
        </li>
        <li>Beteiligung am Gewinn/ Prämien</li>
        <li>Angebot von Home Office</li>
        <li>
          Ein individuelles Arbeitszeitmodell (Teizeit / Vollzeit)
        </li>
        <li>Dienstwagen</li>
        <li>Essensgutscheine für die Mittagspause</li>
        <li>
          Beteiligung an Gesundheitsleistungen, z.B. Fitnessstudio,
          Wellnessangebote
        </li>
      </ul>
      <p>
        In jedem Fall sind Benefits eine zusätzliche Aufwertung und Zeichen der
        Wertschätzung deiner Arbeit und kein Ersatz oder eine Kompensation für
        Unzufriedenheit im Job. Denn noch einmal: Gehalt ist nicht alles. Es
        muss aber ein gewisses Level haben mit dem man seinen Lebensunterhalt
        ohne Schwierigkeiten finanzieren kann. Auf der anderen Seite macht viel
        Geld auch nicht glücklich, wenn dir die Aufgaben, der Chef oder das Team
        Bauchschmerzen bereiten und jeden Arbeitstag zur Zumutung werden lassen.
      </p>
      <div class="checklist border-radius1 shadow1 my-5">
        <h3 class="h4 mb-4">
          Checkliste &ndash; MFA / ArzthelferIn Gehalt einschätzen
        </h3>
        <ul>
          <li>
            <Fa icon="check" size="sm" class="mr-2" /> Berufsjahre berechnen
          </li>
          <li>
            <Fa icon="check" size="sm" class="mr-2" />
            Fortbildungsstunden berechnen
          </li>
          <li>
            <Fa icon="check" size="sm" class="mr-2" /> Tätigkeiten aufschreiben,
            die du ausführst oder im neuen Job ausführen sollst
          </li>
          <li>
            <Fa icon="check" size="sm" class="mr-2" /> Deine Gehaltsstufe in der
            Tabelle des Gehaltstarifvertrages für Medizinische Fachangestellte
            ablesen
          </li>
          <li>
            <Fa icon="check" size="sm" class="mr-2" />
            Tätigkeitsgruppe ermitteln
          </li>
          <li>
            <Fa icon="check" size="sm" class="mr-2" />
            Benefits und Zusatzleistungen mitbedenken
          </li>
          <li>
            <Fa icon="check" size="sm" class="mr-2" />
            Lies auch unseren Artikel zu
            <b-link
              class="text-secondary"
              to="/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
              >Gehaltsverhandlungen</b-link
            >
          </li>
        </ul>
      </div>

      <p>
        Ich hoffe, dir mit diesem Artikel ein besseres Gespür für die Berechnung
        deines Gehalts als MFA / ArzthelferIn bei unterschiedlichen Stufen an
        Erfahrungen und Tätigkeitsfelder vermitteln zu können. Mein Appell: Trau
        dich, selbstbewusst für dein Wissen und deine bisherige berufliche
        Erfahrung einzustehen und ein
        <b-link
          to="/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >angemessenes Gehalt zu verlangen</b-link
        >.
      </p>

      <ToJobboardBanner class="my-5 mx-auto" />

      <div class="row mb-4">
        <div class="col">
          <BerufsbilderBanner class="mb-3" />
        </div>
        <div class="col">
          <WeiterbildungenBanner class="mb-3" />
        </div>
      </div>

      <h2>Quellen</h2>
      <p>
        <a
          href="https://www.vmf-online.de/mfa/mfa-tarife"
          target="_blank"
          rel="noopener"
          >Webseite VMF online</a
        >
      </p>
      <p>
        Die Ärztekammer Baden-Württemberg hat zum Thema Gehaltstarifvertrag eine
        gute<a
          href="https://www.aerztekammer-bw.de/30mfa/50tarifvertraege/01bFAQs_GTV.pdf"
          target="_blank"
          rel="noopener"
        >
          FAQ-Liste</a
        >
        herausgebracht.
      </p>
      <p>
        <a
          href="https://www.teramed.de/magazin/gehalt-medizinische-fachangestellte-2018-nach-tarifvertrag-oder-individuell-bezahlt-r/"
          target="_blank"
          rel="noopener"
          >Blogartikel</a
        >
        von Teramed
      </p>
    </b-container>
    <Head
      :title="`MFA Gehalt ${new Date().getFullYear()} | inkl. Gehaltsrechner`"
      :desc="
        `Tarifvertrag ${new Date().getFullYear()} | Tätigkeitsgruppen für MFA / ArzthelferIn || Gehaltsrechner Teilzeit / Vollzeit nach Gehaltstarifvertrag ${new Date().getFullYear()}.`
      "
      img="/img/MfaMalAnders_Gehalt_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    BCard,
    BCardHeader,
    BCardBody,
    BCardText,
    TableSimplePlugin
  } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardHeader", BCardHeader);
  Vue.component("BCardBody", BCardBody);
  Vue.component("BCardText", BCardText);
  Vue.use(TableSimplePlugin);
  import Gehaltsrechner from "@/components/containers/Gehaltsrechner.vue";
  import FacebookBtn from "@/components/buttons/FacebookBtn.vue";
  import FacebookShareBtn from "@/components/buttons/FacebookShareBtn.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import WeiterbildungenBanner from "@/components/banners/WeiterbildungenBanner.vue";
  import GehaltsverhandlungBanner from "@/components/banners/GehaltsverhandlungBanner.vue";
  import TrainingCalendarSmallBanner from "@/components/banners/TrainingCalendarSmallBanner.vue";
  export default {
    name: "CareerGehalt",
    components: {
      Gehaltsrechner,
      FacebookBtn,
      FacebookShareBtn,
      ToJobboardBanner,
      BerufsbilderBanner,
      WeiterbildungenBanner,
      GehaltsverhandlungBanner,
      TrainingCalendarSmallBanner
    },
    data() {
      return {
        title: `Medizinische Fachangestellte (MFA) – Gehalt ${new Date().getFullYear()}`,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          { text: "MFA - Gehalt", to: "/karriere/mfa/gehalt" }
        ],
        snippet: [
          {
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
                "name": "MFA Gehalt",
                "item": "https://www.mfa-mal-anders.de/karriere/mfa/gehalt"
              }]
            }`
          },
          {
            type: "application/ld+json",
            inner: `{
              "@context": "http://schema.org",
              "@type" : "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Wie viel Gehalt verdient eine Medizinische Fachangestellte (MFA) / ArzthelferIn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Das Gehalt einer MFA / ArzthelferIn liegt bei Berufseinstieg laut aktuellen Gehaltstarifvertrag bei ca. 1.970 Euro / Monat für eine Vollzeitstelle. Mit zunehmender Berufserfahrung und abgeschlossenen Fortbildungen erhöht sich das Gehalt tariflich bis auf über 3.800 Euro / Monat. Im aktuellen Durchschnitt liegt der Verdienst einer MFA / ArzthelferIn bei ca. 2.500 Euro / Monat."
                }
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
                "lastReviewed": "2020-10-25T14:20:00-05:00"
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

<style lang="scss" scoped>
  .salary {
    .card-header {
      cursor: pointer;
      background-color: transparentize($primary, $amount: 0.1);
      color: $light;
    }

    .checklist {
      background: url("~@/assets/img/money_motivation_.svg") 90% center
        no-repeat;
      background-size: 270px;
      background-color: $primary;
      background-blend-mode: normal;
      color: $light;
      padding: 2rem;

      ul {
        list-style-type: none;
        margin-bottom: 0;
        padding-left: 1rem;
      }
    }
  }
</style>
