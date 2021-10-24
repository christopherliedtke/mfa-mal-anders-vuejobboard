<template>
  <BCard
    no-body
    class="overflow-hidden shadow1"
    align="center"
    style="max-width: 840px;"
  >
    <div class="row p-4">
      <div class="col-md-4">
        <b-img-lazy
          class="p-3 pl-md-3 pr-md-0 w-100 h-100"
          src="@/assets/img/medical_research.svg"
          alt="Bewerbungsgespräch zwischen Arzt und MFA / ZFA / ArzthelferIn"
          blank-width="248"
          blank-height="316"
          offset="1000"
          fluid
        ></b-img-lazy>
      </div>
      <div class="col-md-8">
        <BCardBody
          class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
        >
          <h2 class="bold">
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
            veröffentlichen Sie Ihre Stellenanzeige bereits ab
            <strong class="text-primary"
              >{{
                ($config.pricingPackages[0].price / 100)
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")
              }}
              {{ $config.payment.currency }}</strong
            ><span v-if="$config.payment.tax" class="small"> (zzgl. USt)</span>.
          </p>
          <b-button to="/fuer-arbeitgeber" variant="secondary" size="lg"
            >Stellenanzeige schalten</b-button
          >
        </BCardBody>
      </div>
    </div>
  </BCard>
</template>

<script>
  import Vue from "vue";
  import { BCard, BCardBody } from "bootstrap-vue";
  Vue.component("BCard", BCard);
  Vue.component("BCardBody", BCardBody);
  export default {
    name: "StellenanzeigeSchaltenBanner"
  };
</script>
