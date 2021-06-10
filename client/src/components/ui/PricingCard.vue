<template>
  <div class="pricing-card shadow1 border-radius2 m-1 mb-3">
    <div
      :class="
        `h2 bold text-center text-${pricing.primary} bg-${pricing.accent} border-radius2  p-3`
      "
    >
      {{ pricing.name }}
    </div>
    <div class="p-3">
      <span class="display-3 text-center d-block"
        ><span class="bold">{{ pricing.price }}</span
        ><span>€</span></span
      >
    </div>
    <hr class="bg-light-shade" />
    <div class="p-3 p-lg-4">
      <ul class="no-bullets">
        <li v-for="desc in pricing.desc" :key="desc.html" class="d-flex">
          <Fa
            :icon="desc.icon || 'check-circle'"
            size="lg"
            :class="`mr-3 ${desc.icon ? 'text-success' : 'text-muted'}`"
          />
          <!-- eslint-disable-next-line -->
          <div v-html="desc.html" class="pb-1 pb-lg-2"></div>
        </li>
      </ul>
      <b-button
        class="mt-2 mt-lg-3"
        block
        variant="secondary"
        to="/user/dashboard?tab=1"
        @click="setPricingPackage(pricing.name)"
        >Weiter mit {{ pricing.name }}</b-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "PricingCard",
    props: {
      pricing: {
        type: Object,
        default: () => {
          return {
            price: 0,
            name: "kA",
            desc: ["kA"],
            primary: "primary",
            accent: "light-shade"
          };
        }
      }
    },
    methods: {
      setPricingPackage(value) {
        localStorage.setItem("pricingPackage", value);
      }
    }
  };
</script>
