<template>
  <div>
    <div class="title">
      <h1>
        <strong>{{ title }}</strong>
      </h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>
    <div class="header-img">
      <b-img-lazy
        class="header-img"
        srcset="/img/heart_300.jpg 300w, 
                /img/heart_768.jpg 768w, 
                /img/heart_1024.jpg 1024w, 
                /img/heart_1920.jpg 1200w"
        sizes="100vw"
        src="/img/heart_1920.jpg"
        alt="Fort- und Weiterbildung für MFA & ZFA"
        width="1920"
        height="1272"
        blank-width="1920"
        blank-height="1272"
        offset="1000"
      />
      <div class="overlay"></div>
    </div>

    <div class="container pb-3 pb-lg-5">
      <h2 class="display-3 bold text-gray-dark mb-4">
        Dein nächster Karriereschritt
      </h2>

      <nav class="content mb-4 ml-lg-4 py-4 px-3 px-lg-5 float-lg-right">
        <h2>Inhalt</h2>
        <ol class="text-tertiary pl-4 m-0">
          <li>
            <b-link to="#ueberblick"
              >Fort- und Weiterbildungen für MFA & ZFA – Der große
              Überblick</b-link
            >
          </li>
          <li>
            <b-link to="#fortbildung-weiterbildung-studium"
              >Fortbildung, Weiterbildung oder Studium?</b-link
            >
            <ol>
              <li>
                <b-link to="#fortbildung">Fortbildung</b-link>
              </li>
              <li>
                <b-link to="#weiterbildung">Weiterbildung </b-link>
              </li>
              <li>
                <b-link to="#studium">Studium</b-link>
              </li>
              <li>
                <b-link to="#das-richtige-fuer-Dich"
                  >Was ist das Richtige für Dich?</b-link
                >
              </li>
            </ol>
          </li>

          <li>
            <b-link to="#foerderung-finanzierung"
              >Förderung und Finanzierung von Weiterbildungen</b-link
            >
            <ol>
              <li>
                <b-link to="#chef-fragen">Beim Chef nachfragen</b-link>
              </li>
              <li>
                <b-link to="#bafoeg">Aufstiegs-BAföG</b-link>
              </li>
              <li>
                <b-link to="#bildungsgutschein">Bildungsgutschein</b-link>
              </li>
              <li>
                <b-link to="#bildungsprämie"
                  >Prämiengutschein (Bildungsprämie)</b-link
                >
              </li>
              <li>
                <b-link to="#bildungskredit">Bildungskredit</b-link>
              </li>
              <li>
                <b-link to="#aufstiegsstipendium">Aufstiegsstipendium</b-link>
              </li>
              <li>
                <b-link to="#weiterbildungsstipendium"
                  >Weiterbildungsstipendium</b-link
                >
              </li>
              <li>
                <b-link to="#steuererklaerung"
                  >Kostenerstattung über die Steuererklärung</b-link
                >
              </li>
              <li>
                <b-link to="#qualifizierungsoffensive"
                  >WEITER.BILDUNG! – die Qualifizierungs­offensive</b-link
                >
              </li>
            </ol>
          </li>
          <li>
            <b-link to="#bildungsurlaub">Bildungsurlaub</b-link>
          </li>
          <li>
            <b-link to="#umschulung">Umschulung zur MFA & ZFA</b-link>
          </li>
          <li>
            <b-link to="#quereinstieg">Quereinstieg als MFA & ZFA</b-link>
          </li>
        </ol>
      </nav>

      <p>
        Als Zahnmedizinische | Medizinische Fachangestellte hast Du viele
        Möglichkeiten Dich zu qualifizieren und im Job aufzusteigen oder sogar
        in anderen Bereichen des Gesundheitswesens Fuß zu fassen. Nur leider ist
        der Dschungel an Fortbildungen für Medizinische Fachangestellte so stark
        bewachsen und undurchdringlich, dass es nicht leicht fällt, den
        Durchblick zu behalten.
      </p>
      <p>
        MFA mal anders bietet Dir die Informationen, die Du brauchst. Und das
        komprimiert und zusammengefasst auf einer Seite. Ohne, dass Du Dich
        endlos durchs Internet klicken musst, um einen Überblick über deine
        Chancen zu bekommen.
      </p>

      <!-- <BannerTrainingCatalogueLarge class="my-5" /> -->
      <BannerJobSeeksLarge class="my-4" />

      <h2 id="ueberblick">
        <span class="display-4 bold d-block mb-1"
          >Fort- und Weiterbildungen</span
        >
        für MFA & ZFA – Der große Überblick
      </h2>
      <p>
        Welche Fortbildungen – welche Weiterbildungen gibt es speziell für
        Medizinische Fachangestellte | Zahnmedizinische Fachangestellte? In der
        Rubrik
        <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
          >Fort- und Weiterbildungen – Überblick</b-link
        >
        kannst Du Dich informieren, welche Weiterbildungsmöglichkeiten Du als
        MFA oder ZFA in und außerhalb der Arztpraxis hast.
      </p>
      <p>
        Wir beschreiben anerkannte Fortbildungen der Ärztekammer, zertifizierte
        Weiterbildungen, Lehrgänge, Studiengänge und andere
        Weiterbildungsmöglichkeiten für MFA & ZFA. Die Eckdaten wie Kosten,
        Dauer, Inhalte und Lernkonzepte werden für Dich übersichtlich und
        verständlich dargestellt. Daneben zeigen wir Dir vor allem auch, was du
        mit welchem Abschluss anschließend anfangen kannst. Und natürlich auch
        wo. Das Gesundheitswesen bietet Dir zahlreiche Karrierewege.
      </p>

      <NavTrainings
        class="my-4 my-lg-5"
        :show-training-catalogue="false"
        :show-sgd-banner="false"
      />

      <p>
        Die Liste ist noch lange nicht vollständig. Nach und nach stellen wir
        für Dich eine grandiose Übersicht über deine Karrieremöglichkeiten in-
        und außerhalb der Arztpraxis zusammen.
      </p>
      <div class="example shadow1 my-4">
        PS: Wenn Du interessiert an einer bestimmten Weiterbildung für MFA / ZFA
        bist, die wir noch nicht aufgeführt haben,
        <b-link class="bold" to="/kontakt">schreib uns</b-link> doch. Oder
        vielleicht hast Du schon eine Fortbildung gemacht von der deine
        Kolleginnen unbedingt wissen sollten?!
      </div>

      <TrainingListRandom class="my-4" />

      <h2 id="fortbildung-weiterbildung-studium" class="display-4 bold">
        Fortbildung, Weiterbildung oder Studium?
      </h2>
      <p>
        Gute Frage! Wann solltest Du eine Weiterbildung machen? Wann lieber
        studieren? Und worin liegt eigentlich der Unterscheid zwischen einer
        Fortbildung und einer Weiterbildung?
      </p>
      <p>
        Der Bildungsdschungel in Deutschland ist groß und sehr unübersichtlich.
        Die Fülle an Weiterbildungsanbietern und Informationen im Internet
        machen es dabei nicht besser. Als ich mich damals für eine berufliche
        Weiterentwicklung entschieden hatte, war das wie die Suche nach der
        Nadel im Heuhaufen. Es gibt zwar viele Angebot für Medizinische
        Fachangestellte | Zahnmedizinische Fachangestellte, aber die
        Informationen muss man sich mühsam zusammen sammeln. Damit Du Dich für
        den richtigen Weg entscheiden kannst, solltest Du zunächst wissen,
        welche Bildungsform für Dich die Richtige ist. Und welche Türen, Dir die
        einzelnen Entwicklungsmöglichkeiten bieten.
      </p>
      <p>
        Um Dir mehr Klarheit und Durchblick für deinen Karriereweg zu geben, ist
        dieser Artikel über die Unterschiede der drei großen Bildungsformen
        entstanden.
      </p>
      <p>
        In unserem
        <a href="/fortbildungskatalog">Fortbildungskatalog</a>
        findest Du übrigens einer Vielzahl an Fort- und Weiterbildungen
        unterschiedlicher Anbieter. Schau auch dort gern ein mal vorbei.
      </p>

      <b-img-lazy
        srcset="
          /img/MfaMalAnders_FortbildungWeiterbildungOderStudium_je9igh_c_scale,w_350.jpg 350w,
          /img/MfaMalAnders_FortbildungWeiterbildungOderStudium_je9igh_c_scale,w_642.jpg 642w,
          /img/MfaMalAnders_FortbildungWeiterbildungOderStudium_je9igh_c_scale,w_1200.jpg 1200w
        "
        src="/img/MfaMalAnders_FortbildungWeiterbildungOderStudium_je9igh_c_scale,w_1200.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Was sind die Unterschiede zwischen Fortbildung, Weiterbildung und
        Studium für MFA & ZFA?"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        blank-color="#f7f6f9"
        offset="1000"
        class="border-radius1 shadow1 mb-4"
        fluid
      />

      <h3 id="fortbildung">Fortbildung</h3>
      <p>
        Wenn Du Dich in deinem Beruf als MFA / ZFA weiter spezialisieren
        möchtest, fällt das unter den Begriff der Fortbildungen. Deine
        bisheriges Wissen in dem Beruf wird erweitert, angepasst, erhalten oder
        für den weiteren Aufstieg ausgebaut. An einem Beispiel aus der Praxis,
        wird der Fall noch klarer:
      </p>
      <p>
        Du bist als Medizinische Fachangestellte in einer onkologischen Praxis
        tätig und möchtest mehr qualifizierte Aufgaben bei der onkologischen und
        palliativmedizinischen Versorgung der Patienten übernehmen. Die
        Fortbildung zur
        <b-link
          to="/karriere/fort-und-weiterbildung/ueberblick/mfa-in-der-onkologie"
          >Fachassistentin Onkologie</b-link
        >
        macht Dich zur Spezialistin dafür. Du erweiterst dein Wissen im Beruf
        der MFA. Durch deine zusätzliche Qualifizierung steigt auch dein Gehalt.
        Ein anderes Beispiel hierfür sind Röntgenscheine. Durch regelmäßige
        Fortbildungen bleibt dein Wissen über die Röntgen- und Strahlenheilkunde
        erhalten und wird aufgefrischt, um die Qualität deiner Arbeit auf
        gewohnt hohem Niveau zu halten. Außerdem bleibst auf dem Laufenden, wenn
        es Neuerungen auf dem Gebiet gibt.
      </p>
      <p>
        Die meisten Fortbildungen werden von dem Arbeitgeber initiiert, weil es
        für sie von Vorteil ist eine Medizinische Fachangestellte |
        Zahnmedizinische Fachangestellte mit einer speziellen
        Zusatzqualifikation zu haben und werden deshalb auch von ihm übernommen.
        Zudem sind bestimmte Fortbildungen pflichtgemäß in regelmäßigen
        Abständen aufzufrischen.
      </p>

      <h3 id="weiterbildung">Weiterbildung</h3>
      <p>
        Dagegen vermitteln Weiterbildungen eher allgemeine Inhalte und sind
        darauf ausgelegt, dass Du zusätzliche Qualifikationen als MFA / ZFA
        erwirbst. Erste Vorbildungen, die Du mit deiner Ausbildung zur
        Medizinischen Fachangestellten | Zahnmedizinischen Fachangestellten
        erhalten hast, werden erweitert oder vertieft. Dazu könntest Du dir
        einen EKG-Kurs vorstellen, bei dem die verschiedenen Bilder von
        Herzrhythmusstörungen erläutert werden und deine Teilnahme mit einer
        anschließenden Teilnahmebescheinigung belegt wird. Dein Wissen wird bei
        dem Kurs vertieft und erweitert. Eine Zusatzqualifikation oder einen
        zusätzlichen Titel erlangst Du dadurch aber nicht.
      </p>
      <p>
        Mit Weiterbildungen können auch erweiterte Bildungsabschlüsse nachgeholt
        werden. Dazu zählt z. B. der Besuch einer Abendschule, um das Abitur
        nach zu machen oder
        <a
          href="https://www.sgd.de/kursseite/gepr-fachwirtin-im-gesundheits-und-sozialwesen-ihk.html?referrer=pn_13_45"
          target="_blank"
          >Fernstudiengänge</a
        >, wie der
        <b-link
          to="/karriere/fort-und-weiterbildung/ueberblick/fachwirtin-im-gesundheits-und-sozialwesen"
          >Fachwirt im Gesundheits- und Sozialwesen</b-link
        >.
      </p>
      <p>
        Auch Umschulungen, die Dir zu beruflichen Qualifizierungen in einem ganz
        neuen Beruf verhelfen, zählen zu den Weiterbildungen.
      </p>
      <p>
        Das Wissen wird oft in relativ kurzer Zeit in Kursen oder Seminaren
        vermittelt.
      </p>

      <h3 id="studium">Studium</h3>
      <p>
        Ein Studium verhilft Dir zu einem akademischen Grad. Es ist sehr
        theoretisch ausgelegt und befähigt Dich zu wissenschaftlichen Arbeiten.
        Viele Studiengänge können heute auch ohne Abitur absolviert werden, wie
        z.B. das
        <b-link to="/karriere/fort-und-weiterbildung/ueberblick/medizinstudium"
          >Medizinstudium</b-link
        >. Voraussetzungen für die Studienzulassung sind meist eine
        abgeschlossene Berufsausbildung und eine gewisse Anzahl an Berufsjahren.
        Heute gibt es viele Fernstudium-Anbieter, die es Dir als MFA / ZFA
        ermöglichen neben dem Beruf zu studieren und einen Studienabschluss
        erwerben. Ein akademischer Abschluss öffnet Dir neue Türen in
        unterschiedlichen Sparten des Gesundheitswesens und verhilft zu besserem
        Gehalt. Viele Arbeitgeber fordern ein abgeschlossenes Studium für
        Führungspositionen.
      </p>
      <p>
        Ein Studium ist zeitintensiv. Es dauert ca. 3 bis 3,5 Jahre. Auch das
        Lernpensum ist höher als bei Fort- oder Weiterbildungen. Es werden
        aufwändige Projekt- und Seminararbeiten gefordert. Und das in jedem
        Semester. Studieren bedeutet auch sich Lerninhalte selbst zu erarbeiten
        und Lernprozesse selbst zu steuern. Die Lernstruktur und Vorgaben bei
        Fort- und Weiterbildungen sind vorgegeben, das Lernen ist ähnlich wie
        damals in der Schule.
      </p>
      <p>
        Ich will Dir das Studieren nicht madig machen. Ich spreche aus Erfahrung
        und weiß, wie anstrengend ein berufsbegleitendes Studium sein kann. Aber
        ich kann Dir auch sagen: es lohnt sich. Für deine berufliche und
        persönliche Entwicklung auf jeden Fall.
      </p>

      <div class="my-5 bg-light-shade border-radius2 shadow1 p-4">
        <h3 class=" display-4 text-center bold mb-4">Auf einen Blick</h3>
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col">
            <h4 class="text-center mb-3 uppercase">Fortbildung</h4>
            <ul>
              <li>Spezialisierung im Beruf</li>
              <li>
                Erwerb von weiterführenden Fähigkeiten und Fertigkeiten für neue
                Betätigungsfelder im Beruf
              </li>
              <li>höheres Gehalt</li>
            </ul>
          </div>
          <div class="col">
            <h4 class="text-center mb-3 uppercase">Weiterbildung</h4>
            <ul>
              <li>muss nicht im direkten Bezug zum aktuellen Beruf stehen</li>
              <li>breitere Bildung und Betätigungsfelder</li>
              <li>erweiterte Bildungsabschlüsse</li>
              <li>Umschulungen zu neuen Berufen</li>
            </ul>
          </div>
          <div class="col">
            <h4 class="text-center mb-3 uppercase">Studium</h4>
            <ul>
              <li>qualifiziert zu wissenschaftlichem Arbeiten</li>
              <li>
                bietet viele Karrieremöglichkeiten, auch Führungspositionen
              </li>
              <li>besseres Gehalt</li>
              <li>Zeit- und Kostenintensiv</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 id="das-richtige-fuer-Dich">Was ist das Richtige für Dich?</h3>
      <p>
        Was für Dich die richtige Weiterbildungsform ist, hängt davon ob, welche
        beruflichen Ziele Du hast. Was möchtest Du im Laufe der Jahre noch
        erreichen?
      </p>
      <p>
        Wenn Du MFA / ZFA mit Leib und Seele bist und auch bleiben möchtest,
        könnte eine Fortbildung für Dich das Richtige sein. Du kannst Dich in
        einem medizinischen Bereich spezialisieren und verantwortungsvollere
        Aufgaben übernehmen. Durch die Zusatzqualifikation kannst Du mehr Gehalt
        erlangen. Das hat mit den
        <b-link to="/karriere/mfa/gehalt#taetigkeitsgruppen"
          >Tätigkeitsgruppen</b-link
        >
        zu tun. Lese Dir hierzu unseren Artikel über
        <b-link to="/karriere/mfa/gehalt"
          >Gehalt für Medizinische Fachangestellte</b-link
        >
        bzw.
        <b-link to="/karriere/zfa/gehalt"
          >Gehalt für Zahnmedizinische Fachangestellte</b-link
        >.
      </p>
      <p>
        Vielleicht möchtest Du auch auf lange Sicht raus aus der Praxis und mehr
        verwaltungsbezogene Aufgaben erledigen. Dann könnte die Fortbildung zum
        <b-link
          to="/karriere/fort-und-weiterbildung/ueberblick/fachwirtin-im-gesundheits-und-sozialwesen"
          >Fachwirt im Gesundheits- und Sozialwesen</b-link
        >
        etwas für Dich sein.
      </p>
      <p>
        Wenn Du zufrieden mit deiner jetzigen Tätigkeit und Position in der
        Praxis bist, solltest Du in deinem eigenen Interesse dazu bereit sein,
        Dich regelmäßig fortzubilden. Gerade in unserer Branche gibt es ständig
        neue medizinische Techniken, geänderte Vorgaben von den Krankenkassen
        bzw. Kassenärztlichen Vereinigungen oder neue Gesetze, die unsere
        alltägliche Arbeit betreffen. Hier gilt es auf dem Laufenden zu bleiben.
      </p>
      <p>
        Natürlich solltest Du auch den Zeitfaktor nicht außer Acht lassen.
        Zusätzlich zu Familie und Kindern kann ein Studium zur großen
        Herausforderung werden.
      </p>
      <p>
        PS: Für viele Bildungsmaßnahmen gibt es
        <b-link to="/karriere/fort-und-weiterbildung#foerderung-finanzierung"
          >Förderungen und andere Finanzierungsmöglichkeiten</b-link
        >, die für Dich auch interessant sein können.
      </p>

      <div class="d-flex justify-content-center">
        <div
          style="max-width: 600px"
          class="card text-center bg-light-shade shadow1 mt-4 mb-5"
        >
          <b-img-lazy
            srcset="
              /img/MfaMalAnders_In6SchrittenZurRichtigenWeiterbildung_hibrhw_c_scale,w_350.jpg 350w,
              /img/MfaMalAnders_In6SchrittenZurRichtigenWeiterbildung_hibrhw_c_scale,w_801.jpg 801w,
              /img/MfaMalAnders_In6SchrittenZurRichtigenWeiterbildung_hibrhw_c_scale,w_1200.jpg 1200w
            "
            src="/img/MfaMalAnders_In6SchrittenZurRichtigenWeiterbildung_hibrhw_c_scale,w_1200.jpg"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="In 6 Schritten zur richtigen Weiterbildung für MFA / ZFA und ArzthelferIn"
            width="1200"
            height="630"
            blank-width="1200"
            blank-height="630"
            blank-color="#f7f6f9"
            offset="1000"
            class="card-img-top"
            fluid
          />

          <div class="card-body">
            <h4 class="card-title">
              Die richtige Weiterbildung für Dich?!
            </h4>
            <p class="card-text">
              Hier findest Du eine kleine Anleitung, wie Du Schritt für Schritt
              vorgehen kannst.
            </p>
            <b-button
              to="/blog/artikel/in-6-schritten-zur-richtigen-weiterbildung"
              variant="primary"
              >Los geht's!</b-button
            >
          </div>
        </div>
      </div>

      <BannerTrainingCatalogueLarge class="mt-4 mb-5" />

      <h2 id="foerderung-finanzierung" class="display-4 bold">
        Förderung und Finanzierung von Weiterbildungen
      </h2>
      <p class="lead">
        Weiterbildung finanzieren – sei schlau und informiere Dich!
      </p>
      <p>
        Wer in seine Bildung investiert, investiert auch in sich. So platt
        dieser Spruch auch kling, es stimmt. Weiterbildung kostet. Und das oft
        nicht wenig. Die Preisspanne kann von ein paar Hundert bis zu ein paar
        Tausend Euro reichen. Dein Geld ist zwar gut in Dich angelegt, aber
        nicht jeder hat höhere Summen locker in der Brieftaschen liegen, um sich
        seine Weiterbildung zu finanzieren.
      </p>
      <p>
        Allerdings, es gibt Hoffnung damit dein Traum von einem besseren Job
        nicht an dem mangelndem Kleingeld zerplatzen soll. Viele Seiten bieten
        finanzielle Unterstützung in unterschiedlicher Form an, die Du in
        Anspruch nehmen kannst. Lass Dich also von hohen Kursgebühren nicht
        abschrecken. Wenn Du weißt, welche finanziellen Förderungsmöglichkeiten
        Du ausschöpfen kannst, kann sich die Weiterbildung für Dich auch im
        wahrsten Sinne des Wortes auszahlen.
      </p>
      <b-img-lazy
        srcset="
          /img/MfaMalAnders_FoerderungUndFinanzierungVonWeiterbildungen_gwmelv_c_scale,w_350.jpg 350w,
          /img/MfaMalAnders_FoerderungUndFinanzierungVonWeiterbildungen_gwmelv_c_scale,w_785.jpg 785w,
          /img/MfaMalAnders_FoerderungUndFinanzierungVonWeiterbildungen_gwmelv_c_scale,w_1200.jpg 1200w
        "
        src="/img/MfaMalAnders_FoerderungUndFinanzierungVonWeiterbildungen_gwmelv_c_scale,w_1200.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Was sind die Unterschiede zwischen Fortbildung, Weiterbildung und
        Studium für MFA & ZFA?"
        width="1200"
        height="630"
        blank-width="1200"
        blank-height="630"
        blank-color="#f7f6f9"
        offset="1000"
        class="border-radius1 shadow1 mb-4"
        fluid
      />
      <p class="h3 bold">
        Welche Möglichkeit hast Du als MFA & ZFA, um deine Weiterbildung zu
        finanzieren?
      </p>
      <h3 id="chef-fragen">Beim Chef nachfragen</h3>
      <p>
        Das ist in vielen Situationen die einfachste und unkomplizierteste
        Lösung. Es kommt dabei aber auf die Art deiner
        <b-link to="/karriere/fort-und-weiterbildung/ueberblick"
          >Weiterbildung</b-link
        >
        an. Angenommen, Du arbeitest in einer chirurgischen Praxis, in der auch
        operiert wird. Bisher hast Du hauptsächlich den laufenden
        Sprechstundenbetrieb organisiert. Dich interessiert aber die Arbeit im
        OP sehr und Du schlägst deinem Chef vor, die
        <b-link
          to="/karriere/fort-und-weiterbildung/ueberblick/ambulantes-operieren"
          >Fortbildung Ambulantes Operieren</b-link
        >
        zu machen. Davon würde dein Chef sicherlich enorm profitieren, sodass er
        ein echtes Interesse an deiner beruflichen Weiterbildung hat. Unter
        diesen Umständen würde er die Kosten der Fortbildung bestimmt tragen.
      </p>
      <p>
        In manchen Fällen, besonders wenn die Kursgebühren in den
        Tausender-Bereichen liegen, wollen einige Arbeitgeber, dass Du Dich für
        eine gewisse Dauer dazu verpflichtest in der Praxis zu bleiben. Im
        Arbeitsrecht nennt man das, die Rückzahlungsklausel. Dafür müssen einige
        Voraussetzungen erfüllt sein, damit dein Arbeitgeber diese Klausel
        anwenden darf. Welche das sind und wie hoch die Bindungsdauer je nach
        Fortbildungsdauer ist, findest Du z. B.
        <a
          href="https://www.arbeitsrecht-weltweit.de/2018/03/01/rueckzahlung-von-fortbildungskosten-was-ist-moeglich/"
          target="_blank"
          >hier</a
        >.
      </p>
      <p>
        Falls Du Dich beruflich umorientieren möchtest und eine Weiterbildung im
        Auge hast, die deiner Praxis keine Vorteile bringt, wird es schwierig
        werden, dass dein Chef sich an den Kosten beteiligen wird.
      </p>
      <p>
        Dafür bieten der Staat und die einzelnen Bundesländer einige
        Möglichkeiten, um Dich zu unterstützen.
      </p>
      <h3 id="bafoeg">Aufstiegs-BAföG</h3>
      <p>
        Das Aufstiegs-BAföG, früher auch Meister-BAföG genannt, unterstützt
        Arbeitnehmer, Berufsrückkehrer und Selbstständige, die sich per
        Aufstiegsfortbildung weiterbilden möchten. Unter einer
        Aufstiegsfortbildung versteht man eine Fortbildung, die auf dem
        Ausbildungsberuf aufbaut und die Dich für einen größeren
        Verantwortungsbereich mit höherem Gehalt qualifiziert. Förderungsfähig
        wäre z. B. die Fortbildung zum
        <b-link
          to="/karriere/fort-und-weiterbildung/ueberblick/fachwirtin-im-gesundheits-und-sozialwesen"
          >Fachwirt im Sozial- und Gesundheitswesen</b-link
        >. Das Aufstiegs-BAföG gilt auch Fernstudiengänge.
      </p>
      <p>
        Die Förderung beinhaltet Zuschüsse, die Du nicht zurück zahlen musst.
        Außerdem besteht die Möglichkeit, ein zinsgünstiges Darlehen bei der
        Kreditanstalt für Wiederaufbau (KfW) über die Differenz zwischen
        Zuschussanteil und maximalem Förderbetrag abzuschließen (ähnlich wie ein
        Bildungskredit).
      </p>
      <p>
        Alle Informationen für den
        <a
          href="https://www.aufstiegs-bafoeg.de/de/was-wird-gefoerdert-1698.html"
          target="_blank"
          >Anspruch auf Aufstiegs-BAföG</a
        >, die Beantragung sowie Antragsformulare und Kontaktdaten zu den
        jeweiligen Beratungsstellen der Bundesländer findest Du auf der
        Internetseite des Bundesministerium für Bildung und Forschung.
      </p>
      <h3 id="bildungsgutschein">Bildungsgutschein</h3>
      <p>
        Mit dem
        <a
          href="https://www.arbeitsagentur.de/karriere-und-weiterbildung/bildungsgutschein"
          target="_blank"
          >Bildungsgutschein </a
        >fördert die Bundesagentur für Arbeit die berufliche Weiterbildung von
        Arbeitslosen, Berufstätigen und Berufsrückkehrern. Das Ziel ist, weitere
        berufliche Qualifikationen zu erlagen, um nach längerer Berufsauszeit
        wieder leichter in den Beruf einzusteigen. Fehlende Abschlüsse können
        mit dem Bildungsgutschein ebenso nachgeholt werden, wie Lehrgänge, die
        einer drohenden Arbeitslosigkeit entgegenwirken sollen. Wenn die
        zuständige Agentur für Arbeit eine Weiterbildung für notwendig hält,
        bekommst Du den Bildungsgutschein ausgehändigt. Dieser kann bei einem
        zugelassen Anbieter eingelöst werden. Übernommen werden neben den
        Lehrgangskosten auch Kosten zum Beispiel für Prüfungen, Bücher, Fahrten,
        Unterkunft und Verpflegung oder Kinderbetreuung. Welche Bildungsziele
        die Agentur für Arbeit fördert, wird jedes Jahr wieder neu und nach
        Region festgelegt.
      </p>
      <div class="example shadow1 my-4">
        <p class="lead bold">MFA mal anders – Tipp</p>
        <p>
          Ich könnte mir vorstellen, dass der Bildungsgutschein gerade für
          Mütter interessant sein könnte, die nach längerer Elternzeit wieder
          zurück in den Beruf der MFA oder ZFA möchten. Im Gesundheitswesen
          ändert sich in wenigen Jahren so viel, von Abrechnungsfragen über
          (zahn)medizinische Techniken, sodass man den Bildungsgutschein gut
          nutzen könnte, um wieder auf dem Laufenden zu sein.
        </p>
      </div>
      <p>
        Ob du
        <a
          href="https://www.arbeitsagentur.de/bildungsgutschein"
          target="_blank"
          >Anspruch auf einen Bildungsgutschein</a
        >
        hast, kann Dir deine zuständige Agentur für Arbeit nach entsprechender
        Beratung mitteilen.
      </p>
      <h3 id="bildungsprämie">
        Prämiengutschein (Bildungsprämie)
      </h3>
      <p>
        Der
        <a href="https://www.bildungspraemie.info/" target="_blank"
          >Prämiengutschein </a
        >ist für Arbeitnehmer und Selbstständige, deren zu versteuerndes
        Jahreseinkommen 20.000 Euro bzw. 40.000 Euro bei Verheirateten nicht
        übersteigt. Auch Arbeitnehmer im Mutterschutz und in Eltern- bzw.
        Pflegezeit können den Prämiengutschein erhalten.
      </p>
      <p>
        Der Staat beteiligt sich mit maximal 500 Euro an Kosten, um eine
        Weiterbildung zu finanzieren. In den Bundesländern Brandenburg,
        Rheinland-Pfalz, Sachsen, Sachsen-Anhalt und Schleswig-Holstein darf der
        Prämiengutschein nur für Weiterbildungen genutzt werden, die
        <strong>maximal 1.000 Euro</strong> inklusive Mehrwertsteuer kosten.
        Alle anderen Bundesländern rechnen den Prämiengutschein für
        Weiterbildungen <strong>auch</strong> <strong>ab 1.000 Euro</strong> an.
        Relevant ist hier nicht dein Wohnort, sondern das Bundesland, indem die
        Weiterbildung stattfindet.
      </p>
      <p>
        Die berufliche Weiterbildung darf nicht im Zusammenhang mit einer
        betrieblichen Schulung stattfinden. Also zum Beispiel kann er nicht
        angewendet werden für eine Hygieneschulung, die in der Praxis
        stattfindet.
      </p>
      <p>
        Der Prämiengutschein kann jährlich neu beantragt werden. So könntest du
        Dir jedes Jahr eine Weiterbildung mithilfe des Prämiengutscheins
        finanzieren.
      </p>
      <p>
        Alle
        <a href="https://www.bildungspraemie.info/" target="_blank"
          >Infos zur Bildungsprämie</a
        >
        findest Du auf der Webseite des Bundesministerium für Bildung und
        Forschung.
      </p>

      <h3 id="bildungskredit">Bildungskredit</h3>
      <p>
        Der Bildungskredit unterstützt bei schulischen Ausbildungen und bei
        einem Studium.
      </p>
      <p>
        Mit einem zinsgünstigem Darlehen finanziert ist der Bildungskredit
        staatlich begünstigt und kann unabhängig von deinen Einkommens- und
        Vermögensverhältnissen oder die deines Ehepartners, deines
        Lebenspartners oder deiner Eltern aufgenommen werden. Die Beantragung
        kann relativ einfach über ein
        <a
          href="https://www.bva.bund.de/DE/Services/Buerger/Schule-Ausbildung-Studium/Bildungskredit/Antrag/Bildungskredit-online/bildungskredit-online.html?nn=149374"
          target="_blank"
          >Online-Formular</a
        >
        abgewickelt werden. Das begünstigte Kreditvolumen beträgt zwischen 1.000
        und 7.200 Euro und wird wahlweise bis zu 24 Monatsraten in Höhe von 100
        EUR, 200 EUR oder 300 EUR oder auf Wunsch in einer Einmalzahlung von bis
        zu 3.600 EUR für ausbildungsbezogene Aufwendungen ausgezahlt. Es kann
        sogar mit anderen Finanzierungsangeboten – wie BAföG – kombiniert
        werden. Die Rückzahlungsrate in Höhe von 120 EUR monatlich beginnt vier
        Jahre nach der ersten Ratenzahlung.
      </p>
      <p>
        Weitere
        <a
          href="https://www.bva.bund.de/DE/Services/Buerger/Schule-Ausbildung-Studium/Bildungskredit/bildungskredit_node.html"
          target="_blank"
          >Informationen zum Bildungskredit</a
        >
        findest Du auf der Seite des Bundesverwaltung.
      </p>

      <h3 id="aufstiegsstipendium">Aufstiegsstipendium</h3>
      <p>
        Warst Du eine besonders gute Schülerin während der Ausbildung? Und bist
        immer noch besonders motiviert und möchtest Dich beruflich durch ein
        Studium weiterqualifizieren? Dann könnte das Aufstiegsstipendium des
        Bundesministeriums für Bildung und Forschung für Dich in Frage kommen.
        Es richtet sich an Fachkräfte, die nach der Ausbildung bereits
        mindestens zwei Jahre Berufserfahrung haben.
      </p>
      <p>
        Voraussetzungen dafür ist ein Nachweis über sehr gute Leistungen in
        Ausbildung und Beruf, u.a. durch die Note der Berufsabschlussprüfung
        oder der Abschlussprüfung einer Aufstiegsfortbildung (Gesamtergebnis mit
        mindestens Note 1,9 oder 87 Punkte und mehr). Eine weitere Möglichkeit
        ist die besonders erfolgreiche Teilnahme an einem überregionalen
        beruflichen Leistungswettbewerb (Platzierung unter den ersten drei).
        Sollten die ersten beiden Voraussetzungen für Dich nicht zutreffen kann
        auch ein begründeter Vorschlag des Arbeitgebers für die Bewerbung um ein
        Aufstiegsstipendium qualifizieren.
      </p>
      <p>
        Alle Informationen zum Aufstiegsstipendium sowie zu die Beantragung
        kannst Du auf der
        <a
          href="https://www.sbb-stipendien.de/aufstiegsstipendium.html"
          target="_blank"
          >Webseite der Stiftung Begabtenförderungswerk berufliche Bildung</a
        >
        finden.
      </p>

      <h3 id="weiterbildungsstipendium">
        Weiterbildungsstipendium
      </h3>
      <p>
        Das Weiterbildungsstipendium ist ähnlich wie das Aufstiegsstipendium. Es
        richtet sich an Berufstätige, die mithilfe einer Weiterbildung ihre
        Fertigkeiten und Kenntnisse spezialisieren wollen. Die Weiterbildung
        kann fachlich sein, also auf deinen Beruf aufbauen, wie z. B. der
        Fachwirt oder aber fachübergreifend. Damit sind beispielsweise
        berufsbegleitende Studiengänge gemeint.
      </p>
      <p>
        Die Voraussetzungen sind die gleichen wie bei dem Aufstiegsstipendium.
        Allerdings muss man bei Aufnahme in das Programm unter 25 Jahre sein.
        Die Bewerbung richtest Du in dem Fall an die Ärztekammer, bei die damals
        deinen Ausbildungsvertrag gegengezeichnet hat.
      </p>
      <p>
        Weitere Infos zum Weiterbildungsstipendium findest Du wieder bei der
        <a
          href="https://www.sbb-stipendien.de/weiterbildungsstipendium/programmziele.html"
          target="_blank"
          >Stiftung Begabtenförderungswerk berufliche Bildung</a
        >.
      </p>

      <h3 id="steuererklaerung">
        Kostenerstattung über die Steuererklärung
      </h3>
      <p>
        Die Kosten für eine Weiterbildung kannst Du auch von der Steuer
        absetzen. Bis zu 1000 Euro erkennt das Finanzamt bei Arbeitnehmern
        pauschal als Werbungskosten an. Wie hoch deine Rückzahlung ausfällt,
        hängt davon ab ,wie das Finanzamt deine Weiterbildung einordnet. Du
        kannst die konkret zuordenbaren Seminar- bzw. Studiengebühren, die
        Kosten für notwendige Literatur und Arbeitsmaterialien sowie Reisekosten
        (Fahrt, Übernachtung, Verpflegung etc.) geltend machen.
      </p>

      <h3 id="qualifizierungsoffensive">
        WEITER.BILDUNG! – die Qualifizierungs­offensive
      </h3>
      <p>
        Die Bundesagentur für Arbeit hat eine Qualifizierungsoffensive ins Leben
        gerufen von der vor allem kleine Unternehmen mit weniger als 10
        Mitarbeiter profitieren. Weiterbildungskosten werden hier sogar zu 100 %
        erstattet.
      </p>
      <p>
        Alle Informationen unter welchen Voraussetzungen dein Unternehmen von
        der Qualifizierungsoffensive profitiert, findest Du auf der Seite der
        <a
          href="https://www.arbeitsagentur.de/unternehmen/finanziell/foerderung-von-weiterbildung"
          target="_blank"
          >Bundesagentur für Arbeit</a
        >.
      </p>
      <p class="mt-4">
        Das waren 9 Möglichkeiten in der Kurzübersicht, die Dir eine finanzielle
        Hilfe sein können, um in deine Karriere als MFA oder ZFA zu investieren.
        Natürlich sind nicht für jeden die 9 Möglichkeiten der Finanzierung
        nutzbar, um deine Weiterbildung zu finanzieren. Dies soll für Dich
        lediglich ein Überblick über deine eventuellen Chancen auf die
        Reduzierung von Weiterbildungskosten sein. Welche Form der Förderung für
        Dich in Frage kommen könnte, findest Du heraus, wenn Du Dich bei den
        einzelnen Stellen direkt informierst.
      </p>
      <p>
        Hast Du bereits Erfahrung mit einer der 9 Förderungen gemacht und kannst
        erzählen, wie das genau abgelaufen ist? Oder kennst Du noch eine andere
        Möglichkeit, die hier noch nicht aufgeführt ist?
        <b-link to="/kontakt">Lass es uns wissen</b-link>.
      </p>

      <h2 id="bildungsurlaub">
        <span class="display-4 bold">Bildungsurlaub</span> <br />
        5-10 Bildungstage pro Jahr
      </h2>
      <p>
        Wusstest Du eigentlich, dass Du einen gesetzlichen Anspruch auf
        Weiterbildung während der Arbeitszeit hast? Dir stehen je nach
        Bundesland 5-10 Tage bezahlter Sonderurlaub zu.
      </p>
      <p>
        Du kannst Dich von der Arbeit beurlauben lassen, um neue Erkenntnisse zu
        einem selbst gewählten Thema zu gewinnen. Es muss nicht zwingend eine
        Fortbildung im medizinischen Bereich sein. Du könntest z.B. auch einen
        Yogakurs oder Social Media Kurs machen oder eine neue Sprache lernen.
      </p>
      <p>
        Das Gehalt wird während dieser Zeit vom Arbeitgeber weitergezahlt.
      </p>
      <p>
        Der Anspruch auf Bildungsurlaub wird in den Gesetzen der einzelnen
        Bundesländer geregelt. Bayern und Sachsen sind die einzigen Bundesländer
        in denen es keinen Bildungsurlaub gibt. Auf
        <a href="https://www.bildungsurlauber.de/bildungsurlaub" target="_blank"
          >bildungsurlauber.de</a
        >
        kannst Du ganz einfach einen Check machen und herausfinden, welchen
        Anspruch Du hast. Daneben findest Du eine große Kursübersicht mit allen
        anerkannten Kursen.
      </p>

      <h2 id="umschulung" class="display-4 bold">
        Umschulung zur MFA & ZFA
      </h2>
      <p>
        Den Beruf der Medizinischen Fachangestellten | Zahnmedizinischen
        Fachangestellten erlernt man durch eine 3-jährige Ausbildung (siehe
        <b-link class="bold" to="/karriere/mfa/ausbildung-berufsbild"
          >Ausbildung zur MFA</b-link
        >). Alternativ kannst Du auch eine Umschulung zur MFA absolvieren, wenn
        Du schon einen Ausbildungsabschluss in einem anderen Beruf hast. Die
        Umschulung dauert ca. 24-30 Monate.
      </p>
      <p>
        Es gibt unterschiedliche Modelle, um die Umschulung zur MFA / ZFA zu
        machen. Oft findet die Umschulung rein schulisch statt. Hier empfiehlt
        es sich ein Praktikum in einer Arztpraxis zu leisten, um bestimmte
        Tätigkeiten, z.B. Blutabnehmen, EKG schreiben, auch einmal praktisch
        ausgeführt zu haben. Oder Du machst die Umschulung dual. D.h. Dir werden
        praktische Inhalte in der Arztpraxis beigebracht und theoretische
        Inhalte an 1-2 Schultagen pro Woche vermittelt. Bei der rein schulischen
        Variante liegt die Umschulungsdauer meist bei 24 Monaten. Du erhältst
        bei der schulischen Umschulung kein Ausbildungsgeld. Das Arbeitsamt
        unterstützt in vielen Fällen bei einer Zweitausbildung.
      </p>
      <p>
        Viele Anbieter der Umschulung zur MFA & ZFA bieten dies auch in
        Teilzeitmodellen an.
      </p>
      <p>
        Auch im Rahmen der Umschulung findet die offizielle Abschlussprüfung mit
        einem praktischen und schriftlichen Teil statt. Bei bestandener Prüfung
        vor der Ärztekammer hast Du den Berufsabschluss zur MFA / ZFA erworben.
        Mit dem anerkannten Abschluss zur Medizinischen Fachangestellten |
        Zahnmedizinischen Fachangestellten hast Du sehr gute Chancen auf dem
        <b-link class="bold" to="/stellenangebote">Arbeitsmarkt</b-link> eine
        Anstellung zu finden.
      </p>

      <h2 id="quereinstieg" class="display-4 bold">
        Quereinstieg als MFA & ZFA
      </h2>
      <p>
        Für viele ist der Quereinstieg in einer Arztpraxis interessant. Wegen
        des immer größer werdenden Problems des Fachkräftemangels sind viele
        Praxen sehr offen für Bewerber aus anderen Branchen. Besonders
        Kandidaten aus dem Hotel- und Gastgewerbe sind beliebt, da diese
        Berufsgruppen bereits Erfahrung und die Motivation zur hohen
        Serviceorientiertheit mitbringen.
      </p>
      <p>
        Meist bietet sich hier die Gelegenheit für Quereinsteiger am
        Praxisempfang bzw. der Rezeption zu starten und verwaltungstechnische
        und organisatorische Aufgaben, wie Patientenannahme, Terminvergabe,
        Telefonate, etc. auszuführen. Bei entsprechendem Interesse bieten viele
        Praxen die Chance auch in medizinische Tätigkeiten im Bereich der
        Diagnostik und Therapie eingearbeitet zu werden.
      </p>
      <p>
        Mittlerweile gibt es
        <b-link class="bold" to="/fortbildungskatalog"
          >Fortbildungsanbieter</b-link
        >
        die berufsbegleitende Kurse für MFA & ZFA Quereinsteiger anbieten, um
        die notwendigen theoretischen Inhalte von Praxisorganisation,
        Abrechnung, Qualitätsmanagement und allgemeinen Grundlagen aus dem
        Gesundheitswesen zu erwerben und sich schneller im neuen Job zurecht zu
        finden.
      </p>

      <SearchWidgetJob class="mt-5" />
      <JobListTeaser class="mt-4" />
    </div>

    <ScrollTopButton />

    <Head
      title="Fort- und Weiterbildung für MFA | ZFA | ArzthelferInnen"
      :desc="
        `Fortbildungen und Weiterbildungen für Zahnmedizinische | Medizinische Fachangestellte (ZFA & MFA) im Gesundheitswesen || Überblick | Finanzierung | Studium`
      "
      img="/img/Weiterbildung_Weiterbildungsdschungel_ugahcj_c_scale,w_1200.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import ScrollTopButton from "@/components/ScrollTopButton.vue";
  import NavTrainings from "@/components/NavTrainings.vue";
  import TrainingListRandom from "@/components/TrainingListRandom.vue";
  import BannerTrainingCatalogueLarge from "@/components/BannerTrainingCatalogueLarge.vue";
  import BannerJobSeeksLarge from "@/components/BannerJobSeeksLarge.vue";
  import SearchWidgetJob from "@/components/SearchWidgetJob.vue";
  import JobListTeaser from "@/components/JobListTeaser.vue";
  import { scrollToHashMixin } from "@/mixins/scrollToHashMixin";
  export default {
    name: "CareerTrainingHome",
    components: {
      NavTrainings,
      TrainingListRandom,
      BannerTrainingCatalogueLarge,
      BannerJobSeeksLarge,
      SearchWidgetJob,
      JobListTeaser,
      ScrollTopButton
    },
    mixins: [scrollToHashMixin],
    data() {
      return {
        title: "Fort- und Weiterbildung für MFA & ZFA",
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Karriere", to: "/karriere" },
          {
            text: "Fort- & Weiterbildung",
            to: "/karriere/fort-und-weiterbildung"
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
                    "name": "Fort- und Weiterbildung",
                    "item": "https://www.mfa-mal-anders.de/karriere/fort-und-weiterbildung"
                }]
            }`
          },
          {
            id: "canonical",
            rel: "canonical",
            href: `${process.env.VUE_APP_WEBSITE_URL}/karriere/fort-und-weiterbildung`
          }
        ]
      };
    }
  };
</script>
