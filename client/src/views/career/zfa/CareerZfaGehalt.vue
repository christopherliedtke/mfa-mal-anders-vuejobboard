<template>
  <article class="salary">
    <div class="title">
      <h1>
        {{ title }} <br />
        <span class="h3">für Zahnmedizinische Fachangestellte</span>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="container py-3 py-lg-5">
      <b-img-lazy
        class="border-radius1 shadow1 mb-3 mb-lg-5"
        fluid
        srcset="
          /img/MfaMalAnders_GehaltZfa_hkucp5_c_scale,w_350.jpg 350w,
          /img/MfaMalAnders_GehaltZfa_hkucp5_c_scale,w_635.jpg 635w,
          /img/MfaMalAnders_GehaltZfa_hkucp5_c_scale,w_1200.jpg 1200w
        "
        sizes="(max-width: 1200px) 100vw, 1200px"
        src="/img/MfaMalAnders_GehaltZfa_hkucp5_c_scale,w_1200.jpg"
        :alt="
          `ZFA / Zahnmedizinische Fachangestellte Gehalt ${new Date().getFullYear()} - Berechne Dein Gehalt mit unserem Gehaltsrechner`
        "
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
      />
      <p>
        Beim Thema Gehalt geht es der/dem ZFA bzw. ZahnarzthelferIn ähnlich wie
        den MFA-KollegenInnen: Es könnte etwas mehr sein. Kommt es zu
        Gehaltsfragen, z.B. in einem Vorstellungsgespräch, fehlt vielen das
        Gespür für eine konkrete Zahl. Man möchte mit seinen
        <b-link
          to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Gehaltsvorstellungen</b-link
        >
        nicht zu dreist rüber kommen, auf der anderen Seite sich auch nicht
        unter Wert verkaufen.
      </p>

      <nav class="content my-4 py-4 px-3 px-lg-5">
        <h2 class="h1">Inhalt</h2>
        <ol class="text-tertiary pl-4">
          <li class="lead mt-3">
            <b-link to="#gehaltstarifvertrag"
              >Gehaltstarifvertrag {{ new Date().getFullYear() }} – ZFA /
              ZahnarzthelferIn</b-link
            >
            <ol>
              <li class="lead mt-3">
                <b-link to="#gehaltsrechner"
                  >Gehaltsrechner für ZFA / ZahnarzthelferIn</b-link
                >
              </li>
              <li class="lead mt-3">
                <b-link to="#gehalt-ausbildung"
                  >ZFA Ausbildung {{ new Date().getFullYear() }} – Gehalt nach
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
                <b-link to="#taetigkeitsgruppen"
                  >Tätigkeitsgruppen nach aktuellem Gehaltstarifvertrag für
                  MFA</b-link
                >
              </li>
            </ol>
          </li>

          <li class="lead mt-3">
            <b-link to="#gehalt-per-bundesland"
              >ZFA Gehalt nach Bundesland</b-link
            >
          </li>
          <li class="lead mt-3">
            <b-link to="#benefits"
              >Benefits – wenn dein Gehalt nicht zufriedenstellend ist</b-link
            >
          </li>
        </ol>
      </nav>
      <p>
        In diesem Artikel geben wir dir die Informationen an die Hand, die du
        benötigst, um DEIN Gehalt anhand von Berufserfahrung und Qualifikationen
        zu berechnen.
      </p>
      <p>
        Zunächst ein paar Informationen und Begrifflichkeiten aus dem
        Tarifvertrag und Tätigkeitsgruppen für Zahnmedizinische Fachangestellte.
        Mit diesem Wissen, kannst du deinen eigenen Marktwert einordnen und
        selbstbewusst für einen leistungsorientierten und fairen Lohn einstehen.
        In unserem Artikel über
        <b-link
          to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Gehaltsverhandlungen</b-link
        >
        geben wir dir zusätzlich 9 Tipps, wie du dein Wunschgehalt erzielst.
      </p>
      <p>
        Ob du ausreichend verdienst oder zu wenig, kannst du anhand unseres
        Gehaltsrechners für Zahnmedizinische Fachangestellte ganz einfach
        herausfinden.
      </p>
      <h2 id="gehaltstarifvertrag" class="mb-4 mt-5">
        <span class="display-4 bold"
          >Gehaltstarifvertrag ZFA {{ new Date().getFullYear() }}</span
        >
        <br />
        für ZahnarzthelferIn
      </h2>
      <div class="row">
        <div class="col">
          <p>
            Der Verband medizinischer Fachberufe e.V. (VMF) ist die
            verantwortliche Organisation für Zahnmedizinische Fachangestellte
            auf Arbeitnehmerseite. Sie vertritt die ZFAs bei Tarifverhandlungen
            gegenüber der Arbeitsgemeinschaft zur Regelung der
            Arbeitsbedingungen der Zahnmedizinische
            Fachangestellte/Zahnarzthelfer/innen (AAZ). Die AAZ ist die
            Tarifpartei der Arbeitgeber, sprich der niedergelassenen Zahnärzte,
            mit der der Manteltarifvertrag verhandelt wird.
          </p>
          <p>
            Jedoch gilt der Manteltarifvertrag und Gehaltstarifvertrag nicht
            deutschlandweit, sondern wir nur auf Länderebene für die
            Bundesländer Hamburg, Hessen, Saarland und dem Landesteil
            Westfalen-Lippe.
          </p>
          <p>
            Die niedergelassenen Zahnärzte sind nicht automatisch Mitglied in
            der AAZ. Deshalb kann man nicht zwingend davon ausgehen, dass sich
            Zahnarztpraxen an die Gehälter im Tarifvertrag halten müssen.
            Arbeitgeber sind nur dann dazu verpflichtet nach Gehaltstarifvertrag
            zu zahlen, wenn sowohl sie Mitglied im AAZ als auch die ZFA Mitglied
            im VMF sind.
          </p>
          <p>
            Ehrlich gesagt, kenne ich nicht viele ZahnarzthelferInnen, die
            Mitglied im VMF sind, obwohl dieser viele Vorteile mit sich bringt.
            Daher wundert es auch nicht, dass so viele untertariflich verdienen.
            Der VMF unterstützt beispielsweise aktiv bei arbeitsrechtlichen
            Themen und bietet rechtlichen Beistand.
          </p>
          <p>
            Auf der anderen Seite ist es verständlich, dass viele ZFAs sich
            gegen eine Mitgliedschaft entscheiden, wenn ihr Bundesland nicht im
            Tarifvertrag berücksichtigt wird.
          </p>
          <p>
            Dennoch gibt es viele Zahnärzte, die sich freiwillig an den
            aktuellen Tarifvertrag halten oder zumindest das Gehalt für ihre
            Zahnmedizinischen Fachangestellten daran anlehnen, obwohl sie einem
            anderen Bundesland angehören oder nicht Mitglied im AAZ sind.
          </p>
          <p>
            Neben dem offiziellen Tarifvertrag existieren zahlreiche
            Gehaltstarifverträge von privaten Unternehmen, Zahnkliniken, dem
            öffentlichen Dienst (z.B. wenn du bei der Kassenzahnärztlichen
            Vereinigung arbeitest) und kirchlichen Trägern (wie der Caritas, der
            Diakonie oder der Johanniter).
          </p>
          <p>
            Es kommt im privaten Bereich oftmals zu einer außertariflichen
            Bezahlung. Das muss nicht unbedingt negativ für dich ausfallen.
            Viele Zahnmedizinische Fachangestellte werden dadurch übertariflich
            bezahlt. Letztlich ist das Gehalt immer Verhandlungssache.
          </p>
          <p>
            Wenn dein Arbeitgeber kein Mitglied im AAZ ist, du aber darauf
            bestehst, dass dein Gehalt nach Tarifvertrag bezahlt wird, kannst du
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
              to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
              >Gehaltsverhandlungen</b-link
            >
            führen.
          </p>
          <TrainingCatalogueSmallBanner class="my-2" />
        </div>
        <div class="col">
          <p>
            Daneben bietet der Gehaltstarifvertrag für Zahnmedizinische
            Fachangestellte dir vor allem eine gute Orientierung, um deinen
            Marktwert einzuschätzen – bezüglich Qualifikation und Erfahrung.
          </p>
          <p>
            Die letzte Gehaltserhöhung bzw. Tarifanpassung wurde zum 01.01.2020
            wirksam. Anfangsgehälter für Zahnmedizinische Fachangestellte nach
            der Ausbildung starten bei einem Bruttostundenlohn von 12,09 Euro.
          </p>
          <p>
            Zum 01.07.2021 erfolgt eine weitere Tarifanpassung, die bereits im
            Tarifvertrag für ZFA aufgenommen wurde.
          </p>
          <p>
            Hier findest du den
            <b-link
              href="https://www.vmf-online.de/zfa/zfa-tarife"
              target="_blank"
              rel="noopener"
              >aktuellen Gehaltstarifvertrag für Zahnmedizinische
              Fachangestellte</b-link
            >.
          </p>
          <GehaltsrechnerZfa id="gehaltsrechner" class="my-4" />
          <GehaltsverhandlungBanner class="mb-4" />
          <FacebookBtn
            class="mb-4 mr-1"
            content="Folgen und keine Neuigkeiten verpassen"
          />
          <FacebookShareBtn class="mb-4" />
        </div>
      </div>

      <div class="bg-light-shade border-radius1 p-4 mb-4">
        <p class="h5">Übrigens</p>
        <p>
          Laut offizieller Berechnung im Gehaltstarifvertrag 2020 bezieht sich
          das jeweils angegebene
          <strong
            >Vollzeit-Gehalt auf eine Wochenstundenarbeitszeit von 38,8953
            Stunden</strong
          >
          <sup>1</sup>. Die Wochenstundenarbeitszeit für Vollzeit ist nicht
          explizit im Vertrag angegeben, lässt sich jedoch aus der
          Berechnungsformel für Teilzeitkräfte herleiten.
        </p>
        <p class="small text-muted mb-0">
          <sup>1</sup> Wenn Ihr dies selbst prüfen möchtet, gebt die Arbeitszeit
          von 38,8953 Stunden in den Gehaltsrechner ein oder benutzt direkt die
          Formel aus dem Gehaltstarifvertrag.
        </p>
      </div>

      <div>
        <h3 class="h4 mt-5">
          Gehaltstabelle ZFA 2021 nach Gehaltstarifvertrag – gültig ab
          01.07.2021
        </h3>
        <p>
          Der Stundenlohn im Jahr {{ new Date().getFullYear() }} für
          Zahnmedizinische Fachangestellte (ZFA) bewegt sich laut
          Gehaltstarifvertrag je nach Berufserfahrung und erworbenen
          Qualifikationen durch Fort- und Weiterbildungen zwischen 12,60 €/h und
          21,61 €/h. <b-link to="#gehaltsrechner">Gehaltsrechner</b-link> kannst
          Du Dir den Stundenlohn bzw. Gehalt in Teilzeit für Deinen relevanten
          Bereich errechnen, indem Du als Wochenarbeitszeit eine Stunde
          auswählst.
        </p>

        <div class="table-responsive">
          <table class="table table-secondary table-striped text-left">
            <thead>
              <tr>
                <th>Berufsjahr</th>
                <th>Tätigkeitsgruppe I</th>
                <th>Tätigkeitsgruppe II</th>
                <th>Tätigkeitsgruppe III</th>
                <th>Tätigkeitsgruppe IV</th>
                <th>Tätigkeitsgruppe V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1 - 3</th>
                <td>2.105,00 €</td>
                <td>2.263,00 €</td>
                <td>2.473,50 €</td>
                <td>2.631,50 €</td>
                <td>2.736,50 €</td>
              </tr>
              <tr>
                <th>4 - 6</th>
                <td>2.182,00 €</td>
                <td>2.346,00 €</td>
                <td>2.564,00 €</td>
                <td>2.727,50 €</td>
                <td>2.837,00 €</td>
              </tr>
              <tr>
                <th>7 - 9</th>
                <td>2.288,50 €</td>
                <td>2.460,50 €</td>
                <td>2.689,00 €</td>
                <td>2.861,00 €</td>
                <td>2.975,50 €</td>
              </tr>
              <tr>
                <th>10 - 12</th>
                <td>2.368,50 €</td>
                <td>2.546,50 €</td>
                <td>2.783,00 €</td>
                <td>2.961,00 €</td>
                <td>3.079,50 €</td>
              </tr>
              <tr>
                <th>13 - 15</th>
                <td>2.442,00 €</td>
                <td>2.625,50 €</td>
                <td>2.869,50 €</td>
                <td>3.052,50 €</td>
                <td>3.175,50 €</td>
              </tr>
              <tr>
                <th>16 - 18</th>
                <td>2.512,00 €</td>
                <td>2.701,00 €</td>
                <td>2.952,00 €</td>
                <td>3.140,00 €</td>
                <td>3.266,50 €</td>
              </tr>
              <tr>
                <th>19 - 21</th>
                <td>2.582,00 €</td>
                <td>2.776,50 €</td>
                <td>3.034,50 €</td>
                <td>3.227,50 €</td>
                <td>3.357,50 €</td>
              </tr>
              <tr>
                <th>22 - 24</th>
                <td>2.652,00 €</td>
                <td>2.852,00 €</td>
                <td>3.117,00 €</td>
                <td>3.315,00 €</td>
                <td>3.448,50 €</td>
              </tr>
              <tr>
                <th>25 - 27</th>
                <td>2.722,00 €</td>
                <td>2.927,50 €</td>
                <td>3.199,50 €</td>
                <td>3.402,50 €</td>
                <td>3.539,50 €</td>
              </tr>
              <tr>
                <th>ab 28</th>
                <td>2.776,50 €</td>
                <td>2.985,00 €</td>
                <td>3.262,50 €</td>
                <td>3.471,00 €</td>
                <td>3.609,50 €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="small text-muted">
          Quelle:
          <b-link
            href="https://www.vmf-online.de/zfa/zfa-tarife"
            target="_blank"
            rel="noopener"
            >Gehaltstarifvertrag 2020 für Zahnmedizinische Fachangestellte (ZFA)
            – AAZ (2020)</b-link
          >
        </p>
      </div>

      <div class="bg-light-shade border-radius2 shadow1 my-5 p-3 p-md-4">
        <JobSearchSingleForm
          class="mb-3"
          placeholder="ZFA Job finden..."
          profession="ZFA"
        />
        <JobsTeaserContainer profession="ZFA" />
      </div>

      <div class="row mb-4">
        <div class="col">
          <BerufsbilderBanner class="mb-3" />
        </div>
        <div class="col">
          <WeiterbildungenBanner class="mb-3" />
        </div>
      </div>

      <h3 id="gehalt-ausbildung">
        ZFA Ausbildung {{ new Date().getFullYear() }} – Gehalt nach Tarifvertrag
      </h3>
      <p>
        Wie für andere Ausbildungsberufe auch, ist für die Ausbildung von
        Medizinischen Fachangestellten laut Berufsbildungsgesetz eine Vergütug
        zu zahlen. Hierüber gibt der aktuelle Gehaltstarifvertrag ebenfalls
        Auskunft. Demnach ist für Zahnmedizinische Fachangestellte /
        ZahnarzthelferInnen, die Ihre Ausbildung ab dem 01.01.2020 starten eine
        monatliche Ausbildungsvergütung (brutto) wie folgt vorgesehen:
      </p>

      <div class="table-responsive">
        <table class="table table-secondary">
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
              <td>870,- €</td>
              <td>910,- €</td>
              <td>970,- €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="small text-muted">
        Quelle:
        <b-link
          href="https://www.vmf-online.de/zfa/zfa-tarife"
          target="_blank"
          rel="noopener"
          >Gehaltstarifvertrag 2020 für Zahnmedizinische Fachangestellte (ZFA) –
          AAZ (2020)</b-link
        >
      </p>

      <ToJobboardBanner
        header="Mit neuem Job zu mehr Gehalt?"
        class="my-5 mx-auto"
      />

      <h3 id="berufsjahre">
        Anrechnung von Berufsjahren
      </h3>
      <p>
        Ein wichtiger Indikator für die Höhe des Gehalts von ZFA sind Erfahrung
        und Expertise, die man sich im Laufe seines Berufslebens aneignet. Je
        länger du im Beruf bist, desto mehr kannst du logischerweise an Gehalt
        verlangen. Auch in den Tarifverhandlungen werden Gehälter nach
        Berufsjahren und sogenannten Tätigkeitsgruppen vereinbart. Je mehr
        Wissen du vor allem durch Fort- und Weiterbildungen anhäufst, desto
        höher die Tätigkeitsgruppe.
      </p>
      <h3 class="h4 bold">
        So berechnest du deine Berufsjahre:
      </h3>
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
      <h3 id="auszeiten">
        Mutterschutz, Elternzeit und Erziehungsurlaub
      </h3>
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
        als ZahnarzthelferIn, werden die Zeiten jedoch voll dazu gerechnet.
      </p>
      <p>Zwei Beispiele zum besseren Verständnis.</p>
      <div class="row my-3">
        <div class="col mx-lg-4">
          <div class="example">
            <p><strong>Beispiel 1:</strong></p>
            <p class="pl-5">
              <em>
                Eine Zahnmedizinische Fachangestellte geht am 15. August 2016
                bei errechnetem Geburtstermin am 30.09.2016 (6 Wochen vor dem
                errechneten Entbindungstermin) bis zum 25.11.2016 (8 Wochen nach
                der Entbindung) in den Mutterschutz und nimmt eine einjährige
                Elternzeit in Anspruch. Sie kehrt am 01.10.2017 in Vollzeit in
                die berufliche Tätigkeit als ZFA zurück. Sie bekommt für diese
                Zeit insgesamt 8,5 Monate bei den Berufsjahren angerechnet.
              </em>
            </p>
          </div>
        </div>
        <div class="col mx-lg-4">
          <div class="example">
            <p><strong>Beispiel 2:</strong></p>
            <p class="pl-5">
              <em>
                Eine Zahnmedizinische Fachangestellte geht am 15. August 2016
                bei errechnetem Geburtstermin am 30.09.2016 in Mutterschutz bis
                zum 25.11.2016 und nimmt anschließend eine einjährige Elternzeit
                in Anspruch. Ab dem 01.04.2017 arbeitet sie während der
                Elternzeit in Teilzeit 8 Stunden wöchentlich in der Praxis. Sie
                kehrt am 01.10.2017 aus der Elternzeit in die Praxis zurück. Sie
                bekommt für diese Zeit insgesamt 11,5 Monate bei den
                Berufsjahren angerechnet.
              </em>
            </p>
          </div>
        </div>
      </div>

      <h3 id="taetigkeitsgruppen">
        Tätigkeitsgruppen nach aktuellem Gehaltstarifvertrag für ZFA
      </h3>
      <p>
        Im Gehaltstarifvertrag für Zahnmedizinische Fachangestellte werden
        vorhandene Kenntnisse und Qualifikationen in Tätigkeitsgruppen
        eingeordnet und entsprechend im Gehalt widergespiegelt. Die Tätigkeiten
        werden nach Grad der Selbstständigkeit, Anzahl der Fortbildungsstunden,
        leitende Tätigkeiten und Verantwortung eingeteilt. Dies gibt dir eine
        zusätzliche Orientierung, um dein Gehaltsniveau einschätzen zu können.
        Hier steigern vor allem abgeschlossene
        <b-link to="/karriere/fort-und-weiterbildung"
          >Fortbildungen und Weiterbildungen</b-link
        >
        das Gehaltsniveau.
      </p>
      <p>
        Nach welchen Kriterien sich die Tätigkeitsgruppen aufteilen, zeigt dir
        die nachfolgende Übersicht.
      </p>
      <div class="my-4">
        <div class="card mb-1 bg-light-shade">
          <h4 class="card-header h5 p-3">
            Tätigkeitsgruppe 1
          </h4>
          <div class="card-body pl-5">
            <ul>
              <li>
                Grundvergütung für Zahnmedizinische Fachangestellte nach
                erfolgreich abgeschlossener Berufsausbildung
              </li>
              <li>
                Du führst Tätigkeiten nach Anweisungen des Zahnarztes oder einer
                erfahrenen KollegIn aus
              </li>
            </ul>
          </div>
        </div>
        <div class="card mb-1 bg-light-shade">
          <h4 class="card-header h5 p-3">
            Tätigkeitsgruppe 2
          </h4>
          <div class="card-body pl-5">
            <ul>
              <li>
                Zuschlag + 7,5 % zur Grundvergütung
              </li>
              <li>
                Zahnmedizinische Fachangestellte mit durch die Zahnärztekammern
                anerkanntem/anerkannten Fortbildungsnachweis/en von vertiefenden
                und/oder speziellen Qualifizierungen im Umfang von insgesamt
                mindestens 65 Unterrichtsstunden, soweit eine
                arbeitsplatzbezogene Tätigkeit im Rahmen der erworbenen
                Kompetenzen gegeben ist.
              </li>
              <li>
                Die Absolvierung praxistestatpflichtiger Zeiten im Rahmen der
                jeweiligen Fortbildung/en ist auf die Fortbildungsdauer von 65
                Unterrichtsstunden anzurechnen.
              </li>
            </ul>
          </div>
        </div>
        <div class="card mb-1 bg-light-shade">
          <h4 class="card-header h5 p-3">
            Tätigkeitsgruppe 3
          </h4>
          <div class="card-body pl-5">
            <ul>
              <li>
                Zuschlag: + 17,5 % zur Grundvergütung
              </li>
              <li>
                Zahnmedizinische Fachangestellte mit durch die Zahnärztekammern
                anerkanntem/anerkannten Fortbildungsnachweis/en von
                Qualifizierungen zur Erweiterung der beruflichen
                Handlungsfähigkeiten im Umfang von insgesamt mindestens 200
                Unterrichtsstunden, soweit eine arbeitsplatzbezogene Tätigkeit
                im Rahmen der erworbenen Kompetenzen gegeben ist.
              </li>
              <li>
                Die Absolvierung praxistestatpflichtiger Zeiten im Rahmen der
                jeweiligen Fortbildung/en ist auf die Fortbildungsdauer von 200
                Unterrichtsstunden anzurechnen.
              </li>
            </ul>
          </div>
        </div>
        <div class="card mb-1 bg-light-shade">
          <h4 class="card-header h5 p-3">
            Tätigkeitsgruppe 4
          </h4>
          <div class="card-body pl-5">
            <ul>
              <li>
                Zuschlag: + 25 % zur Grundvergütung
              </li>
              <li>
                Praxismitarbeiter/innen mit erfolgreichem Abschluss als
                Zahnmedizinische Fachhelferinnen/Fachassistentinnen (ZMF),
                Zahnmedizinische Prophylaxehelferinnen/Prophylaxeassistentinnen
                (ZMP), Fachwirtinnen für Zahnärztliches Praxismanagement,
                Zahnmedizinische
                Verwaltungshelferinnen/Verwaltungsassistentinnen (ZMV),
                Assistentinnen für Zahnärztliches Praxismanagement (AZP).
              </li>
              <li>
                Praxismitarbeiter/innen mit erfolgreichem Abschluss als
                Kieferorthopädieassistent/in, erstmalig ausgebildet ab 2021
              </li>
              <li>
                Bei Vorliegen mehrerer Qualifikationen aus dieser
                Tätigkeitsgruppe erhöht sich der Zuschlag auf mindestens 30 %,
                soweit eine arbeitsplatzbezogene Tätigkeit im Rahmen der
                erworbenen Kompetenzen gegeben ist.
              </li>
            </ul>
          </div>
        </div>
        <div class="card mb-1 bg-light-shade">
          <h4 class="card-header h5 p-3">
            Tätigkeitsgruppe 5
          </h4>
          <div class="card-body pl-5">
            <ul>
              <li>
                Zuschlag: + 30 % zur Grundvergütung
              </li>
              <li>
                Praxismitarbeiter/innen mit erfolgreichem Abschluss als
                Dental-Hygienikerinnen (DH), Betriebswirtinnen im
                Gesundheitswesen, Betriebswirtinnen für Management im
                Gesundheitswesen.
              </li>
              <li>
                Bei Vorliegen mehrerer Qualifikationen aus dieser
                Tätigkeitsgruppe erhöht sich der Zuschlag auf mindestens 35 %,
                soweit eine arbeitsplatzbezogene Tätigkeit im Rahmen der
                erworbenen Kompetenzen gegeben ist.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="gehalt-per-bundesland">ZFA Gehalt nach Bundesland</h2>
      <p>
        Nach wie vor ist es so, dass unterschiedliche Gehälter gezahlt werden –
        je nachdem, wo man arbeitet. Auch bei ZahnarzthelferInnen ist dies der
        Fall. Wenig überaschend sieht man ein deutliches Gefälle zwischen den
        alten und neuen Bundesländern. Durchschnittlich verdient man in Sachsen,
        Sachsen-Anhalt, Brandenburg, Thüringen und Mecklenburg-Vorpommern
        zwischen 1.840 € und 1.935 € brutto pro Monat. In den übrigen
        Bundesländern liegt dieser Wert zwischen 1.972 € und 2.327 €.
      </p>
      <div class="w-75 mx-auto my-4">
        <div class="d-flex justify-content-center mb-4">
          <picture>
            <source
              srcset="
                /img/gehalt_perBundesland_zfa-300x127.webp   300w,
                /img/gehalt_perBundesland_zfa-768x325.webp   768w,
                /img/gehalt_perBundesland_zfa-1024x433.webp 1024w,
                /img/gehalt_perBundesland_zfa.webp          1200w
              "
              type="image/webp"
            />
            <b-img-lazy
              fluid
              srcset="/img/gehalt_perBundesland_zfa-300x127.jpg 300w, /img/gehalt_perBundesland_zfa-1024x433.jpg 1024w, /img/gehalt_perBundesland_zfa-768x325.jpg 768w, /img/gehalt_perBundesland_zfa.jpg 1200w"
              sizes="(max-width: 1200px) 100vw, 1200px"
              src="/img/gehalt_perBundesland_zfa.jpg"
              alt="Zahnmedizinische Fachangestellte (ZFA) Gehalt pro Bundesland"
              width="1200"
              height="508"
            />
          </picture>
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
        <b-link to="/karriere/fort-und-weiterbildung"
          >Weiterbildungen und Fortbildungen</b-link
        >
        ) oder die Möglichkeit Home Office zu machen.
      </p>
      <p>
        Wenn das angebotene Gehalt auf den ersten Blick nicht besonders reizvoll
        ist, erkundige dich nach zusätzlich möglichen Benefits. Das können
        monetäre oder nichtmonetäre Sonderleistungen sein. Das
        (unzufriedenstellende) Gehalt wird dadurch kompensiert und der Job bzw.
        den Arbeitgeber attraktiver.
      </p>
      <p>
        Inwiefern sich ein Benefit für dich wirklich lohnt, entscheidet oft die
        individuelle Lebenslage. Prüfe deshalb die angebotenen Zusatzleistungen
        eines Arbeitgebers und gehe zur Not auch in die
        <b-link
          to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Verhandlung</b-link
        >
        und frage, ob man sich über bestimmte Zusatzleistungen einigen kann.
      </p>
      <p>Einige Beispiele für Benefits</p>
      <ul>
        <li>
          Erfolgs- bzw. Umsatzbeteiligung (vor allem interessant für ZMPs)
        </li>
        <li>Übernahme von Fortbildungskosten</li>
        <li>Jobticket für öffentliche Verkehrsmittel</li>
        <li>Zuzahlung zu Kita-Gebühren oder hauseigene Kita</li>
        <li>Übertarifliche Anzahl an Urlaubstagen</li>
        <li>13. Monatsgehalt / Urlaubsgeld</li>
        <li>
          Zulage zur privaten Rentenversicherung, Betriebsrente, Lebens-,
          Unfall-, Berufsunfähigkeitsversicherung etc.
        </li>
        <li>
          Angebot von Home Office (z.B. möglich für ZMVs oder
          AbrechnungsmanagerInnen, PraxismanagerInnen)
        </li>
        <li>
          Ein individuelles Arbeitszeitmodell (Teizeit / Vollzeit)
        </li>
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
      <p>
        Für mehr praktische Tipps, lese dir unseren Artikel über
        <b-link
          to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >Gehaltsverhandlungen</b-link
        >
        durch.
      </p>
      <div class="checklist border-radius1 shadow1 my-5">
        <h3 class="h4 mb-4">
          Checkliste &ndash; ZFA / ZahnarzthelferIn Gehalt einschätzen
        </h3>
        <ul>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Berufsjahre berechnen
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Fortbildungsstunden berechnen
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Tätigkeiten aufschreiben, die du ausführst oder im neuen Job
            ausführen sollst
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Deine Gehaltsstufe in der Tabelle des Gehaltstarifvertrages für
            Zahnmedizinische Fachangestellte ablesen
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Tätigkeitsgruppe ermitteln
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Benefits und Zusatzleistungen mitbedenken
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg mr-2"
                style="vertical-align: top;"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
            Lies auch unseren Artikel zu
            <b-link
              class="text-secondary"
              to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
              >Gehaltsverhandlungen</b-link
            >
          </li>
        </ul>
      </div>

      <p>
        Ich hoffe, dir mit diesem Artikel ein besseres Gespür für die Berechnung
        deines Gehalts als ZFA / ZahnarzthelferIn bei unterschiedlichen Stufen
        an Erfahrungen und Tätigkeitsfelder vermitteln zu können. Mein Appell:
        Trau dich, selbstbewusst für dein Wissen und deine bisherige berufliche
        Erfahrung einzustehen und ein
        <b-link
          to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
          >angemessenes Gehalt zu verlangen</b-link
        >.
      </p>

      <ToJobboardBanner class="my-5 mx-auto" />

      <h2>Quellen</h2>
      <p>
        <a
          href="https://www.vmf-online.de/zfa/zfa-tarife"
          target="_blank"
          rel="noopener"
          >Webseite VMF online</a
        >
      </p>
    </div>

    <ScrollToTopBtn />

    <Head
      :title="
        `ZFA Gehalt ${new Date().getFullYear()} | Gehaltsrechner | Tarifvertrag`
      "
      :desc="
        `Gehalt als Zahnmedizinische Fachangestellte (ZFA) | Gehaltstarifvertrag ${new Date().getFullYear()} | Tätigkeitsgruppen || Gehaltsrechner Teilzeit / Vollzeit`
      "
      img="/img/MfaMalAnders_GehaltZfa_1200.jpg"
      :script="snippet"
    />
  </article>
</template>

<script>
  import GehaltsrechnerZfa from "@/components/containers/GehaltsrechnerZfa.vue";
  import JobsTeaserContainer from "@/components/containers/JobsTeaserContainer.vue";
  import JobSearchSingleForm from "@/components/forms/JobSearchSingleForm.vue";
  import FacebookBtn from "@/components/buttons/FacebookBtn.vue";
  import FacebookShareBtn from "@/components/buttons/FacebookShareBtn.vue";
  import ToJobboardBanner from "@/components/banners/ToJobboardBanner.vue";
  import BerufsbilderBanner from "@/components/banners/BerufsbilderBanner.vue";
  import WeiterbildungenBanner from "@/components/banners/WeiterbildungenBanner.vue";
  import GehaltsverhandlungBanner from "@/components/banners/GehaltsverhandlungBanner.vue";
  import TrainingCatalogueSmallBanner from "@/components/banners/TrainingCatalogueSmallBanner.vue";
  import ScrollToTopBtn from "@/components/buttons/ScrollToTopBtn.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  export default {
    name: "CareerGehalt",
    components: {
      JobsTeaserContainer,
      JobSearchSingleForm,
      FacebookBtn,
      FacebookShareBtn,
      GehaltsrechnerZfa,
      ToJobboardBanner,
      BerufsbilderBanner,
      WeiterbildungenBanner,
      GehaltsverhandlungBanner,
      TrainingCatalogueSmallBanner,
      ScrollToTopBtn
    },
    mixins: [scrollToHashMixin],
    data() {
      return {
        title: `ZFA Gehalt ${new Date().getFullYear()}`,
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          { text: "ZFA - Gehalt", to: "/karriere/zfa/gehalt" }
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
                                "name": "ZFA Gehalt",
                                "item": "https://www.mfa-mal-anders.de/karriere/zfa/gehalt"
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
                                "name": "Wie viel Gehalt verdient eine MFA / ArzthelferIn?",
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
