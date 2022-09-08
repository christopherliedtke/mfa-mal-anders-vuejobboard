<template>
  <div>
    <div class="title">
      <h1>Stellengesuch schalten für MFA | ZFA</h1>
      <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
    </div>

    <div class="header-img" style="max-height: 300px">
      <b-img-lazy
        class="header-img"
        style="object-position: center center"
        sizes="(max-width: 1920px) 100vw, 1920px"
        srcset="
          /img/pexels-fauxels-3184465_ylkztw_c_scale,w_450.jpg 450w,
          /img/pexels-fauxels-3184465_ylkztw_c_scale,w_902.jpg 902w,
          /img/pexels-fauxels-3184465_ylkztw_c_scale,w_1394.jpg 1394w,
          /img/pexels-fauxels-3184465_ylkztw_c_scale,w_1920.jpg 1920w
        "
        src="/img/pexels-fauxels-3184465_ylkztw_c_scale,w_1920.jpg"
        alt="Stellengesuch schalten für MFA & ZFA"
        width="1920"
        height="1280"
        blank-width="1920"
        blank-height="1280"
        offset="1000"
      />
      <div class="overlay"></div>
    </div>

    <div class="container mt-4 mb-4 mb-lg-5">
      <h2 class="display-3 bold text-gray-dark">
        Lass Dich <br />
        von Arbeitgeber finden
      </h2>
      <p class="lead">
        Du bist auf der Suche nach einer neuen Stelle, aber findest nicht das
        passende Angebot? Mit einem Stellengesuch auf
        <em>MFA mal anders</em> kannst Du Dich jetzt von passenden Arbeitgebern
        finden und kontaktieren lassen. Und so funktioniert es...
      </p>

      <div class="row row-cols-1 row-cols-md-3">
        <div class="col">
          <b-link
            to="/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"
            class="icon-box shadow1"
          >
            <b-img-lazy
              class="mr-4 mb-4 ml-4"
              src="@/assets/img/LinkedIn_Monochromatic.svg"
              alt="MFA / ZFA Stellengesuch erstellen"
              height="130"
              blank-width="154"
              blank-height="130"
              offset="1000"
            />
            <h3 class="h2 bold">
              Profil <br />
              erstellen
            </h3>
            <p>
              Melde Dich an und erstelle in ein paar Minuten Dein Profil mit
              relevanten Infos über Dich und Deine Anforderungen.
            </p>
            <b-button variant="primary">Stellengesuch Erstellen</b-button>
          </b-link>
        </div>
        <div class="col">
          <b-link
            to="/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"
            class="icon-box shadow1"
          >
            <b-img-lazy
              class="mr-4 mb-4 ml-4"
              src="@/assets/img/Campaign launch_Monochromatic.svg"
              alt="Stellengesuch veröffentlichen"
              height="130"
              blank-width="167"
              blank-height="130"
              offset="1000"
            />
            <h3 class="h2 bold">Stellengesuch veröffentlichen</h3>
            <p>
              Du hast volle Kontrolle und kannst Dein Stellengesuch jederzeit
              anonym veröffentlichen oder wieder offline nehmen.
            </p>
            <b-button variant="primary">Gesuch Veröffentlichen</b-button>
          </b-link>
        </div>
        <div class="col">
          <b-link
            to="/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"
            class="icon-box shadow1"
          >
            <b-img-lazy
              class="mr-4 mb-4 ml-4"
              src="@/assets/img/new_message.svg"
              alt="Anfragen auf Stellengesuch erhalten"
              height="130"
              blank-width="167"
              blank-height="130"
              offset="1000"
            />
            <h3 class="h2 bold">Anfragen erhalten</h3>
            <p>
              Erhalte Nachrichten von passenden Arbeitgebern, die sich für Dich
              und Dein Profil interessieren.
            </p>
            <b-button variant="primary">Jetzt Loslegen</b-button>
          </b-link>
        </div>
      </div>

      <div class="d-flex flex-column align-items-center mt-4">
        <b-button
          href="#faq"
          variant="outline-primary"
          size="lg"
          class="d-block d-lg-inline-block mx-1 my-1"
          >Fragen oder Hilfe benötigt?</b-button
        >
      </div>
    </div>

    <div class="container-fluid bg-light-shade py-5">
      <div class="container">
        <h2 class="h1 bold text-center">
          Unsere Stellengesuche
        </h2>
        <p class="lead text-center">
          So könnte Dein
          <b-link to="/stellengesuche">Stellengesuch in der Übersicht </b-link>
          aussehen
        </p>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <JobSeekCard
              :job-seek="{
                _id: '0',
                title:
                  'MFA mit Abrechnungskenntnissen sucht Stelle in Orthopädie',
                publicFirstName: 'Kristin',
                publicLastName: 'Maurach',
                location: 'Berlin',
                isMfa: true,
                fullTime: true,
                imageUrl: require('@/assets/img/KristinMaurach_portrait_800.jpg'),
                slug: '0'
              }"
              :link-disabled="true"
              class="mt-3"
            />
            <JobSeekCard
              :job-seek="{
                _id: '0',
                title:
                  'MFA mit Abrechnungskenntnissen sucht Stelle in Orthopädie',
                publicFirstName: 'K.',
                publicLastName: 'M.',
                location: 'Berlin',
                isMfa: true,
                fullTime: true,
                slug: '0'
              }"
              :link-disabled="true"
              class="mt-3"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <b-button
            to="/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"
            variant="secondary"
            >Jetzt Stellengesuch erstellen</b-button
          >
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h2 class="h1 bold text-center">Deine Vorteile</h2>
      <p>
        Ob Arztpraxis, Zahnarztpraxis, MVZ, Krankenhaus oder ein anderes
        Unternehmen im Gesundheitswesen. In einem Stellengesuch auf
        <em>MFA&nbsp;mal&nbsp;anders</em> beschreibst Du Deine individuellen
        Anforderungen an Deinen neuen Job und bekommst Angebote von Unternehmen
        für Deine bevorzugten Rahmenbedingungen und Dein gewünschtes Gehalt.
      </p>
      <p>
        Egal, ob Du aktiv auf der Suche nach einer neuen Stelle bist oder
        eigentlich nur die Augen nach interessanten Angeboten offen hältst. Mit
        einem Stellengesuch auf <em>MFA&nbsp;mal&nbsp;anders</em> kannst Du
        Deine Jobsuche ideal ergänzen.
      </p>

      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center my-4"
      >
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-hourglass-bottom"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Zeitaufwand</h4>
            <p>
              Du erstellst Dein Stellengesuch einmal und wartest, dass der
              passende Arbeitgeber sich bei Dir meldet.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-shield-fill-check"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Anonymität</h4>
            <p>
              Du wählst selbst, ob Du Deinen Namen sowie ein Bild von Dir mit
              dem Stellengesuch veröffentlichen möchtest oder nicht.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-puzzle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Einfach und Bequem</h4>
            <p>
              Mit unserem vorgegebenem Eingabeformular erstellst Du ein
              individuelles Stellengesuch nach Maß.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Direkter Kontakt</h4>
            <p>
              Der Arbeitgeber nimmt direkt zu Dir Kontakt auf. Als Plattform
              stehen wir nicht als Dritte zwischen Dir und dem Arbeitgeber.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-signpost-split-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Du Entscheidest</h4>
            <p>
              Du entscheidest, ob Du auf eine Anfrage antwortest. Deine E-Mail
              Adresse sieht der Arbeitgeber erst, wenn Du reagierst.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-file-lock-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z"
              />
              <path
                d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Deine Daten</h4>
            <p>
              Du hast volle Kontrolle über Deine Daten und kannst Dein
              Stellengesuch jederzeit online oder offline nehmen.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="icon-box shadow1 py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-piggy-bank-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199zm-8.999-.65A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 1 0 .286-.958A7.601 7.601 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962zM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
              />
            </svg>
            <h4 class="mt-2 mb-3">Komplett Kostenlos</h4>
            <p>
              Es entstehen natürlich keinerlei Kosten für Dich.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light-shade py-4">
      <div id="faq" class="container my-4">
        <h2 class="h1 bold text-center mb-4">
          Häufige Fragen
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
            <h3 class="h5 bold">
              Sind meine persönlichen Daten öffentlich?
            </h3>
            <p>
              Du entscheidest selbst, welche Deiner Daten öffentlich in Deinem
              Stellengesuch angezeigt werden. Du hast die Möglichkeit, Deinen
              Namen zu anonymisieren. Deine Kontaktdaten werden niemals
              veröffentlicht. Erst, wenn Du auf eine Anfrage antworten möchtest,
              gibst Du Deine Kontaktdaten preis. Du kannst ebenfalls frei
              entscheiden, ob Du ein Bild von Dir mit dem Stellengesuch
              veröffentlichen möchtest oder nicht.
            </p>
            <h3 class="h5 bold">
              Wird mein Wohnort öffentlich angezeigt?
            </h3>
            <p>
              Nein, weder erfassen wir Deinen konkreten Wohnort, noch wird
              dieser an irgendeiner Stelle angezeigt. Du gibst lediglich den
              PLZ-Bereich an, in dem Du nach einer neuen Stelle suchst. Dieser
              wird verwendet, um das Matching zwischen Dir und den Arbeitgebern
              zu vereinfachen.
            </p>
            <h3 class="h5 bold">
              Kann ich meinen Stellengesuch ändern?
            </h3>
            <p>
              Du kannst Dein Stellengesuch jederzeit ändern, online/offline
              nehmen oder auch löschen. Du behältst die volle Kontrolle über
              Deine Daten.
            </p>
            <h3 class="h5 bold">
              Muss ich ein Bild für mein Stellengesuch bereitstellen?
            </h3>
            <p>
              Nein, Du musst kein Bild für Dein Stellengesuch hochladen. Du
              kannst ein Bild bereitstellen, aber die Entscheidung liegt allein
              bei Dir!
            </p>
            <h3 class="h5 bold">
              Wer kann mich kontaktieren?
            </h3>
            <p>
              Dich können ausschließlich registrierte und verifizierte
              Arbeitgeber, die auf MFA mal anders nach neuen MitarbeiterInnen
              suchen, kontaktieren.
            </p>
          </div>
          <div class="col">
            <h3 class="h5 bold">
              Was passiert, wenn ein Arbeitgeber mich kontaktieren möchte?
            </h3>
            <p>
              Wenn ein Arbeitgeber Dich kontaktieren möchte, verfasst er als
              Antwort auf Dein Stellengesuch eine Nachricht an Dich. Diese
              Nachricht wird über unsere Plattform an Deine registrierte E-Mail
              Adresse weitergeleitet. Der Arbeitgeber kann Deine Kontaktdaten zu
              keiner Zeit einsehen. Sobald die Nachricht vom Arbeitgeber bei Dir
              angekommen ist, hast Du die Möglichkeit, den Arbeitgeber direkt zu
              kontaktieren.
              <strong
                >Du bleibst solange anonym, bis Du Dich entscheidest, dem
                Arbeitgeber zu antworten</strong
              >. Hierzu bekommst Du die E-Mail Adresse des Arbeitgebers zur
              Verfügung gestellt.
            </p>
            <h3 class="h5 bold">
              Kann ich mehrere Stellengesuche aufgeben?
            </h3>
            <p>
              Ja, Du hast auch die Möglichkeit, mehrere Stellengesuche
              z.&nbsp;B. für verschiedene Orte oder unterschiedliche
              Aufgabenbereiche etc. zu erstellen und veröffentlichen.
            </p>
            <!-- <h3 class="h5 bold">
              Arbeitet MFA mal anders mit Personalvermittlern zusammen?
            </h3>
            <p>
              Nein, MFA mal anders ist eine unabhängige Plattform, die sich
              direkt an MFA | ZFA richtet. Wir arbeiten ausdrücklich nicht mit
              Personaldienstleitern o.&nbsp;ä. zusammen und fungieren auch nicht
              als solche. Es gibt keinen Dritten, der zwischen Euch und dem
              Arbeitgeber steht. Wir bieten lediglich die Plattform, die Euch
              helfen soll, zusammen zu finden.
            </p> -->
          </div>
        </div>
        <div class="d-flex flex-column align-items-center mt-4">
          <b-button
            to="/kontakt?role=employee"
            variant="primary"
            size="lg"
            class="mx-1 my-1"
            >Kontakt</b-button
          >
          <b-button
            to="/auth/register?role=employee&redirect=%2Fuser%2Fstellengesuche"
            variant="secondary"
            size="lg"
            class="d-block d-md-inline-block my-2 mr-md-2"
            >Stellengesuch erstellen</b-button
          >
        </div>
      </div>
    </div>

    <Head
      title="Stellengesuch schalten – MFA & ZFA"
      desc="Jetzt von Arbeitgebern gefunden werden! Als MFA | ZFA ein Stellengesuch schalten auf MFA mal anders. Finde Deinen nächsten Job."
      img="/img/MfaMalAnders_Stellengesuche.jpg"
      :script="snippet"
    />
  </div>
</template>

<script>
  import JobSeekCard from "@/components/JobSeekCard.vue";
  export default {
    name: "JobSeeksInfoView",
    components: {
      JobSeekCard
    },
    data() {
      return {
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Stellengesuche", to: "/stellengesuche" },
          { text: "Info", to: "/stellengesuche/info" }
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
                "name": "Für Arbeitgeber",
                "item": "https://www.mfa-mal-anders.de/stellengesuche/info"
              }]
            }`
          }
        ]
      };
    }
  };
</script>
