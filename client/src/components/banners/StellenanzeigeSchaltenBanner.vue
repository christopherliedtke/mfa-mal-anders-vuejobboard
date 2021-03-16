<template>
    <b-card
        no-body
        class="overflow-hidden shadow1"
        align="center"
        style="max-width: 840px;"
    >
        <b-row class="p-4">
            <b-col md="4">
                <b-img
                    class="p-3 pl-md-3 pr-md-0 w-100 h-100"
                    src="@/assets/img/medical_research.svg"
                    alt="Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn"
                ></b-img>
            </b-col>
            <b-col md="8">
                <b-card-body
                    class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
                >
                    <h2 class="bold">
                        <em>Motivierte</em> und <em>qualifizierte</em> MFAs /
                        ZFAs und ArzthelferInnen gesucht?
                    </h2>
                    <p>
                        Erstellen Sie
                        <strong class="text-primary"
                            >in wenigen Minuten Ihre Stellenanzeige</strong
                        >
                        und erreichen Sie noch heute unsere große Community von
                        MFAs / ZFAs! Mit unserem “Pay What You Want”* Modell
                        veröffentlichen Sie Ihre Stellenanzeige bereits ab
                        {{
                            ($config.payment.minCost / 100)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")
                        }}
                        {{ $config.payment.currency }} à
                        {{ $config.payment.duration }} Tage.
                    </p>
                    <b-button
                        to="/page/fuer-arbeitgeber"
                        variant="secondary"
                        size="lg"
                        >Stellenanzeige schalten</b-button
                    >
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "StellenanzeigeSchaltenBanner"
    };
</script>
