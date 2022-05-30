<template>
  <div id="testimonials" class="row flex-lg-row-reverse justify-content-center">
    <div
      v-for="testimonial in testimonials"
      :key="testimonial.company"
      class="col-12 col-lg-6 mb-4"
    >
      <div class="position-relative bg-light-shade border-radius2 shadow1 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 512 512"
          class="position-absolute text-primary icon-transparent"
          style="right: 0; top: 0; transform: translate(-25%, 70%)"
        >
          <path
            fill="currentColor"
            d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        <div class="row">
          <div class="col-12 d-flex  justify-content-center py-2 px-4">
            <b-img-lazy
              class="rounded-circle shadow1"
              height="100"
              :src="testimonial.imgUrl"
              :alt="`Bild von ${testimonial.company} | ${testimonial.name}`"
            />
          </div>
          <div class="col-12 pt-2">
            <p>
              {{ testimonial.text }}
            </p>
            <div>
              <p class="h6 mb-1">
                <strong>{{ testimonial.name }}</strong> |
              </p>
              <p class="mb-0" style="line-height: 1.15">
                <em class="text-muted">{{ testimonial.company }}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheTestimonials",
    data() {
      return {
        testimonials: Object.freeze([
          {
            name: "Dr. Jörg Schröder",
            company: "Endodontologische Privatpraxis Berlin",
            text:
              "MFA mal anders war für unsere Praxis eine durchweg positive Erfahrung. Bereits einen Tag nach der Veröffentlichung unserer Stellenanzeige hat sich eine erste Bewerberin gemeldet. Nach vier Wochen hatten wir das perfekte Match gefunden. Mein besonderer Dank gilt Frau Maurach für ihre sehr professionelle Unterstützung unserer Bewerberinnensuche.",
            imgUrl: require("@/assets/img/DrJoergSchroeder.jpg")
          },
          {
            name: "Franziska Fritz",
            company: "Kinderarztpraxis Ostertor",
            text:
              "Durch die Online-Suche haben wir deutlich mehr und auch besser qualifizierte Zuschriften erhalten. Vielen Dank noch einmal für Ihre Unterstützung und die wertvollen Tipps.",
            imgUrl: require("@/assets/img/kinderarztpraxis_ostertor_200.jpg")
          }
        ])
      };
    }
  };
</script>

<style lang="scss" scoped>
  #testimonials {
    .icon-transparent {
      opacity: 0.065;
    }
  }
</style>
