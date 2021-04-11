<template>
  <div>
    <h5>Wie hoch könnte Ihr Beitrag sein?</h5>
    <p>
      Wenn Sie nicht so recht wissen, wie hoch ihr Beitrag ausfallen könnte,
      gebe ich Ihnen an der Stelle gern einen Vorschlag, der sich an
      vergleichbaren Angeboten von anderen Branchen orientiert.
    </p>
    <ul>
      <li>
        Als <strong>kleine Praxis</strong> bis 5 MitarbeiterInnen, die zum
        ersten Mal in Jahren eine neue feste Stelle ausschreibt:
        <strong
          >{{ $config.payment.minCost / 100 }}
          {{ $config.payment.currency }} pro Stelle.</strong
        >
      </li>
      <li>
        Als <strong>mittlere Praxis</strong> mit 6 bis 10 MitarbeiterInnen, die
        gelegentlich eine neue Stelle ausschreibt:
        <strong
          >{{ $config.payment.mediumCost / 100 }}
          {{ $config.payment.currency }} pro Stelle.</strong
        >
      </li>
      <li>
        Als <strong>größere Praxis</strong> oder
        <strong>kleinere bis mittlere Versorgungseinrichtung </strong>mit 11 bis
        20 MitarbeiterInnen, die regelmäßig Stellen ausschreibt:
        <strong
          >{{ $config.payment.largeCost / 100 }}
          {{ $config.payment.currency }} pro Stelle.</strong
        >
      </li>
      <li>
        Als
        <strong>große Versorgungseinrichtung </strong>mit über 20
        Mitarbeiter*innen, die regelmäßig mehrere Stellen ausschreibt:
        <strong
          >{{ $config.payment.xLargeCost / 100 }}
          {{ $config.payment.currency }} pro Stelle.</strong
        >
      </li>
    </ul>
    <p>
      <strong>
        Ab einem Betrag von {{ $config.payment.refreshCost / 100 }}
        {{ $config.payment.currency }}
      </strong>
      wird Ihre Stellenanzeige automatisch alle 14 Tage in der Anzeigenliste an
      den Anfang versetzt.
    </p>
    <p class="small">
      Der Grundsatz
      <strong><em>“Pay What You Want”</em></strong
      >* bleibt natürlich bestehen. Sie bestimmen die Höhe in Abhängigkeit von
      Ihrer ganz individuellen Situation.
    </p>
    <p v-if="minimum" class="small">
      * Es fällt ein Mindestbeitrag von
      {{
        ($config.payment.minCost / 100)
          .toFixed(2)
          .toString()
          .replace(".", ",")
      }}
      {{ $config.payment.currency }} pro Stellenanzeige à
      {{ $config.payment.duration }} Tage an, der für den Betrieb der
      IT-Infrastruktur und der Pflege des Portals unerlässlich ist.
    </p>
  </div>
</template>

<script>
  export default {
    name: "PayWhatYouWantSuggestion",
    props: { minimum: { type: Boolean } }
  };
</script>
