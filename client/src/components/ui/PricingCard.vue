<template>
  <div
    :class="[
      'pricing-card border-radius2 bg-light m-1 mb-3',
      active ? 'shadow2' : 'shadow1'
    ]"
  >
    <div
      :class="
        `position-relative text-center bg-${pricing.accent} border-radius2 p-3`
      "
      style="overflow: hidden"
    >
      <span :class="`h2 bold text-${pricing.primary}`">
        {{ pricing.name }}
      </span>
      <span
        v-if="pricing.badge"
        :class="
          `position-absolute text-light bg-${pricing.badgeBg} px-5 py-1 small`
        "
        style="transform: rotate(45deg); right: -45px; top: 12px"
      >
        {{ pricing.badge }}
      </span>
    </div>
    <div class="p-3">
      <span class="display-3 text-center d-block"
        ><span class="bold">{{ pricing.price / 100 }}</span
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
        :variant="active ? 'primary' : 'secondary'"
        @click="setPricingPackage(pricing.name)"
        >{{ !checkout ? "Weiter mit " : "" }}{{ pricing.name
        }}{{
          checkout ? (active ? " Ausgewählt" : " Auswählen") : ""
        }}</b-button
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
      },
      checkout: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      setPricingPackage(pkg) {
        localStorage.setItem("pricingPackage", pkg);

        if (!this.checkout) {
          this.$router.push("/user/dashboard?tab=1");
        } else {
          this.$emit("update-pricing-package", pkg);
        }
      }
    }
  };
</script>
