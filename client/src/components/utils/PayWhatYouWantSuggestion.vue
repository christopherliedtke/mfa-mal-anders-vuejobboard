<template>
    <div>
        <h5>Wie hoch könnte Ihr Beitrag sein?</h5>
        <p>
            Wenn Sie nicht so recht wissen, wie hoch ihr Beitrag ausfallen
            könnte, gebe ich Ihnen an der Stelle gern einen Vorschlag, der sich
            an vergleichbaren Angeboten von anderen Branchen orientiert.
        </p>
        <ul>
            <li>
                Als <strong>kleine Praxis</strong> bis 2 Angestellte, die zum
                ersten Mal in Jahren eine neue feste Stelle ausschreibt:
                <strong>25€ pro Stelle.</strong>
            </li>
            <li>
                Als <strong>mittlere Praxis</strong> bis 6 Angestellte, die
                gelegentlich eine neue Stelle ausschreibt:
                <strong>50€ pro Stelle.</strong>
            </li>
            <li>
                Als <strong>größere Praxis</strong> oder
                <strong>kleinere bis mittlere Versorgungseinrichtung </strong
                >bis 20 Angestellte, die regelmäßig Stellen ausschreibt:
                <strong>100€ pro Stelle.</strong>
            </li>
            <li>
                Als
                <strong>große Versorgungseinrichtung </strong>mit über 20
                Angestellten, die regelmäßig mehrere Stellen ausschreibt:
                <strong>250€ pro Stelle.</strong>
            </li>
        </ul>
        <p class="small mt-5">
            Der Grundsatz
            <strong><em>“Pay What You Want”</em></strong
            >* bleibt natürlich bestehen. Sie bestimmen die Höhe in Abhängigkeit
            von Ihrer ganz individuellen Situation.
        </p>
        <p v-if="minimum" class="small">
            * Es fällt ein Mindestbeitrag von 25,- Euro pro Stellenanzeige à 60
            Tage an, der für den Betrieb der IT-Infrastruktur und der Pflege des
            Portals unerlässlich ist.
        </p>
    </div>
</template>

<script>
    export default {
        name: "PayWhatYouWantSuggestion",
        props: ["minimum"]
    };
</script>
