<template>
  <aside class="card  overflow-hidden shadow1" style="max-width: 840px;">
    <div class="row p-4">
      <div class="col-md-8">
        <div class="card-body  h-100 p-4">
          <h2 class="h3 bold">
            <em>Motivierte</em> und <em>qualifizierte</em> ArzthelferInnen – MFA
            & ZFA gesucht?
          </h2>
          <p>
            Erstellen Sie
            <strong class="text-primary"
              >in wenigen Minuten Ihre Stellenanzeige</strong
            >
            und erreichen Sie noch heute unsere große Community von MFAs & ZFAs!
            Mit unserem
            <strong class="text-primary">individuellen Paketen</strong>
            veröffentlichen Sie Ihre Stellenanzeige
            <strong class="text-primary"
              >unkompliziert und auf Ihren Bedarf abgestimmt</strong
            >.
          </p>
          <b-button to="/fuer-arbeitgeber" variant="secondary" size="md"
            >Stellenanzeige schalten</b-button
          >
        </div>
      </div>
      <div class="col-md-4">
        <b-img-lazy
          class="p-0 w-100 h-100"
          src="@/assets/img/medical_research.svg"
          alt="Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn"
          blank-width="248"
          blank-height="316"
          offset="1000"
          fluid
        ></b-img-lazy>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "StellenanzeigeSchaltenBanner"
  };
</script>
