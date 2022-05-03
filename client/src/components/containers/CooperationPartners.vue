<template>
  <div class="row row-cols-1 row-cols-lg-2 d-flex justify-content-center">
    <div
      v-for="partner in partners"
      :key="partner.name"
      class="col d-flex flex-column justify-content-start align-items-center"
    >
      <b-link :href="partner.url" target="_blank">
        <b-img-lazy
          fluid
          :src="partner.img"
          :alt="`Logo - ${partner.name}`"
          style="max-height: 75px; max-width: 220px"
          class="m-5 blend"
        />
      </b-link>
      <!-- eslint-disable-next-line -->
      <div v-html="partner.html"></div>
      <b-button
        v-if="partner.html && partner.url"
        class="align-self-start"
        size="sm"
        variant="outline-primary"
        :href="partner.url"
        target="_blank"
        rel="noopener"
        >Mehr erfahren</b-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "CooperationPartners",
    data() {
      return {
        partners: Object.freeze([
          {
            name: "PKV Institut",
            img: "/img/pkvverlag_logo2.png",
            url:
              "https://www.pkv-institut.de/?utm_source=MFA%20mal%20anders&utm_medium=affiliate",
            html: `
              <p>Die PKV Institut GmbH entwickelt seit 1990 Fort- und Weiterbildungsangebote speziell für Medizinische Fachangestellte (MFA) und Zahnmedizinische Fachangestellte (ZFA). Alle Fernlehrgänge sind von der staatlichen Zentralstelle für Fernunterricht zertifiziert. Das PKV Institut ist als Bildungsdienstleister ISO-zertifiziert (DIN 29990) sowie AZAV-zertifiziert und gehört zu den TOP-Fernschulen in Deutschland.</p>
              <p>Mit dem jährlich in München stattfindenden „MFA-Tag & ZFA-Tag“ richtet das PKV Institut den größten deutschsprachigen Kongress für MFAs und ZFAs aus. Seit 8 Jahren bietet das PKV Institut auch Online-Seminare bzw. Webinare an.</p>
              <p>Es arbeitet unabhängig von Industrie, Politik und Pharmaunternehmen und ist allein den MFAs und ZFAs sowie den Arzt- und Zahnarztpraxen verpflichtet. Es steht nach dem Motto <strong>„Nah an der Praxis. Nah am Leben.“</strong> für einen verbesserten Praxisalltag, mehr Erfolg und Chancen im Beruf.</p>
            `
          },
          {
            name: "Hausärzteverband Westfalen-Lippe",
            img: "/img/hvwl_logo2.png",
            url:
              "https://www.hausaerzteverband-wl.de/index.php/mfa-lp/mfa-mal-anders",
            html: `
              <p>Der Hausärzteverband Westfalen-Lippe e.V. ist ein Zusammenschluss und
                die Interessenvertretung hausärztlich tätiger Ärztinnen und Ärzte in
                Westfalen-Lippe und der drittgrößte der 17 Landesverbände des
                Deutschen Hausärzteverbandes.
              </p>
              <p>
                Mit knapp 30.000 Mitgliedern bundesweit ist der Deutsche
                Hausärzteverband e.V. der größte Berufsverband niedergelassener Ärzte
                in Deutschland und Europa.
              </p>
              <p>
                Die 17 Landesverbände setzen sich für die Interessen der Hausärztinnen
                und Hausärzte regional gegenüber Ärztekammern, Kassenärztlichen
                Vereinigungen, Krankenkassen und Landesministerien ein. Das Büro des
                Bundesvorsitzenden in Berlin nimmt die Interessen auf
                bundespolitischer Ebene wahr.
              </p>
              <p>
                Der Hausärzteverband Westfalen-Lippe e.V. vertritt mehr als 4.500
                Ärztinnen und Ärzte, die in Westfalen-Lippe an der hausärztlichen
                Versorgung teilnehmen.
              </p>
              <p>
                <strong>
                  Als Kooperationspartner des Hausärzteverbandes Westfalen-Lippe
                  unterstützt „MFA mal anders“ Mitglieder des Hausärzteverbandes mit
                  einem Vorzugsangebot zur Schaltung von Stellenanzeigen.
                </strong>
              </p>
            `
          },
          {
            name: "Landarzt sein.",
            img: "/img/landarztSein_logo2.png",
            url:
              "https://www.landarzt-sein.de/?utm_source=mfa-mal-anders&utm_medium=linkref&utm_campaign=other",
            html: `
              <p>Landarzt sein ist viel mehr, als nur eine Praxisbörse. Wir wollen das Landleben so positiv darstellen, wie wir es selbst kennengelernt haben und auf diese Weise neue Nachwuchsärzte davon überzeugen, dass es sich lohnt, diesen Weg einzuschlagen.</p>
              <p><strong>…KURZ GESAGT: WIR ZIEHEN ÄRZTE AN(S) LAND!</strong></p>
            `
          },
          {
            name: "Hausärzteverband HH",
            img: "/img/hzv-logo-hamburg3.png",
            url: "https://www.hausaerzteverband-hamburg.de/"
          },
          {
            name: "Ihre „gesunde“ Arztpraxis",
            img: "/img/ihreGesundeArztpraxis_logo3.png",
            url: "https://www.facebook.com/ihregesundearztpraxis/"
          }
        ])
      };
    }
  };
</script>

<style scoped lang="scss">
  .blend {
    // filter: grayscale(0.5);
    transition: linear 0.3s;

    &:hover {
      // filter: grayscale(0);
      transform: scale(0.95);
    }
  }
</style>
