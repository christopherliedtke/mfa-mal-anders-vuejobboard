<template>
  <div class="register auth-container container">
    <RegisterForm>
      <template #intro>
        <h2 class="text-center mb-0">
          {{
            $route.query.role === "employee"
              ? "Registrierung als MFA/  ZFA"
              : $route.query.role === "education"
              ? "Registrierung als Fortbildungsanbieter"
              : "Registrierung als Arbeitgeber"
          }}
        </h2>

        <div v-if="$route.query.role == 'education'" class="mt-4">
          <p class="bold text-left text-md-center">
            Sie möchten eine Fortbildung bei uns veröffentlichen?
          </p>
        </div>
        <div v-else-if="$route.query.role == 'employee'" class="mt-4">
          <!-- <p class="bold text-left text-md-center">
            TEST
          </p> -->
        </div>

        <div v-else class="mt-4">
          <p class="bold text-left text-md-center">
            Sie möchten eine Stellenanzeige bei uns schalten?
          </p>

          <div class="row row-cols-md-3 d-none d-md-flex my-4 text-center">
            <div class="col">
              <div
                class="icon-box mx-auto bg-primary rounded-circle"
                style="width: 75px; height: 75px"
              >
                <Fa icon="user-plus" class="text-light m-0" size="2x" />
              </div>
              <h3 class="h6">Registrieren</h3>
            </div>
            <div class="col">
              <div
                class="icon-box mx-auto bg-primary rounded-circle"
                style="width: 75px; height: 75px"
              >
                <Fa icon="drafting-compass" class="text-light m-0" size="2x" />
              </div>
              <h3 class="h6">Stellenanzeige erstellen</h3>
            </div>
            <div class="col">
              <div
                class="icon-box mx-auto bg-primary rounded-circle"
                style="width: 75px; height: 75px"
              >
                <Fa icon="paper-plane" class="text-light m-0" size="2x" />
              </div>
              <h3 class="h6">Veröffentlichen</h3>
            </div>
          </div>
          <p class="">
            Registrieren Sie sich jetzt und veröffentlichen Sie noch heute Ihre
            Stellenanzeige!
          </p>
        </div>
      </template>
    </RegisterForm>

    <Head
      :title="title"
      desc="Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige."
      img=""
    />
  </div>
</template>

<script>
  import RegisterForm from "@/components/forms/RegisterForm.vue";
  export default {
    name: "AuthRegister",
    components: {
      RegisterForm
    },
    data() {
      return {
        title: "Registrierung für Arbeitgeber"
      };
    }
  };
</script>
