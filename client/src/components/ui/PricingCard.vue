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
      <div>
        <span class="display-3 text-center d-block"
          ><span class="bold">{{ pricing.stripePrice.price / 100 }}</span
          >€</span
        >
      </div>
      <div class="small text-center">
        (zzgl. USt.)
      </div>
    </div>
    <hr class="bg-light-shade" />
    <div class="p-3 p-lg-4">
      <ul class="no-bullets">
        <li
          v-for="desc in pricing.productFeatures"
          :key="desc.html"
          class="d-flex mb-2 mb-lg-3"
        >
          <div>
            <svg
              v-if="desc.icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-plus-circle-fill text-success mr-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-check-circle text-muted mr-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
              />
            </svg>
          </div>
          <!-- eslint-disable-next-line -->
          <div v-html="desc.html" class="pb-1 pb-lg-2"></div>
        </li>
      </ul>
      <b-button
        class="mt-2 mt-lg-0"
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
            stripePrice: {
              price: 0
            },
            name: "kA",
            productFeatures: ["kA"],
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
          this.$router.push("/user/stellenanzeigen");
        } else {
          this.$emit("update-pricing-package", pkg);
        }
      }
    }
  };
</script>
// TODO Add placeholders
