<template>
  <aside
    class="card text-center overflow-hidden bg-light-shade shadow1 m-3 p-4"
  >
    <div class="row no-gutters">
      <div class="col-md-3">
        <b-img
          class="p-1 w-100 h-100"
          src="@/assets/img/presentation.svg"
          alt="Weitere Tipps für Stellenanzeigen für MFA & ZFA"
        ></b-img>
      </div>
      <div class="col-md-9">
        <div
          class="card-body d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h3 class="h4 bold">Weitere Tipps für Ihre Stellenanzeige</h3>
          <p>
            Erhalten Sie zusätzliche Details zu unseren Tipps und erstellen Sie
            eine attraktive Stellenanzeige, die mehr Bewerber*innen anzieht.
          </p>
          <div>
            <b-button
              to="/fuer-arbeitgeber#tipps-stellenanzeigen"
              variant="primary"
              class="mx-1 my-1"
              >Zu den Tipps</b-button
            >
            <b-button
              href="/downloads/MfaMalAnders_Beispiel_Stellenanzeige.pdf"
              target="_blank"
              variant="secondary"
              class="mx-1 my-1"
              >Beispiel herunterladen</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "JobAdTippsBanner"
  };
</script>
