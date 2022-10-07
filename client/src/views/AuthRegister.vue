<template>
  <div class="register auth-container container position-relative">
    <div class="bg-logo" style="opacity: 0.025"></div>
    <AuthRegisterForm class="position-relative">
      <template #intro>
        <h2 class="h1 bold text-center mt-3 mt-lg-4 mb-0">
          {{
            $route.query.role === "employee"
              ? "MFA | ZFA"
              : $route.query.role === "education"
              ? "Fortbildungsanbieter"
              : "Arbeitgeber"
          }}
        </h2>

        <div v-if="$route.query.role == 'education'" class="mt-4">
          <p class="text-left text-md-center">
            Sie möchten eine Fortbildung un unserem
            <b-link to="/fortbildungskatalog" target="_blank" class="bold"
              >Fortbildungskatalog</b-link
            >
            veröffentlichen?
          </p>
        </div>
        <div v-else-if="$route.query.role == 'employee'" class="mt-4">
          <p class="text-left text-md-center">
            Du möchtest ein Stellengesuch schalten oder unseren Job Newsletter
            abonnieren?
          </p>
        </div>

        <div v-else class="mt-4">
          <p class="text-left text-md-center">
            Sie möchten eine Stellenanzeige bei uns schalten und auf
            Stellengesuche antworten?
          </p>

          <div class="row row-cols-md-3 d-none d-md-flex my-4 text-center">
            <div class="col">
              <div
                class="mx-auto my-3 bg-primary rounded-circle"
                style="width: 75px; height: 75px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-plus-fill text-light p-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </div>
              <h3 class="h6">Registrieren</h3>
            </div>
            <div class="col">
              <div
                class="my-3 mx-auto bg-primary rounded-circle"
                style="width: 75px; height: 75px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-pencil-square text-light p-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </div>
              <h3 class="h6">Stellenanzeige erstellen</h3>
            </div>
            <div class="col">
              <div
                class="my-3 mx-auto bg-primary rounded-circle"
                style="width: 75px; height: 75px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-megaphone-fill text-light p-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"
                  />
                </svg>
              </div>
              <h3 class="h6">Veröffentlichen</h3>
            </div>
          </div>
          <p class="text-center">
            Registrieren Sie sich jetzt und veröffentlichen Sie noch heute Ihre
            Stellenanzeige! <br />
            Weitere Informationen gibt es unter
            <b-link to="/fuer-arbeitgeber"
              ><strong>Für Arbeitgeber</strong></b-link
            >.
            <!-- Zusätzlich bekommen Sie mit einer laufenden
            Stellenanzeige die Möglichkeit, auf unsere
            <b-link class="bold" to="/stellengesuche" target="_blank"
              >Stellengesuche von MFA & ZFA</b-link
            >
            zu antworten. -->
          </p>
        </div>
      </template>
    </AuthRegisterForm>

    <Head
      :title="title"
      desc="Registriere Dich jetzt bei MFA mal anders und veröffentliche noch heute Deine Stellenanzeige."
      img=""
    />
  </div>
</template>

<script>
  import AuthRegisterForm from "@/components/AuthRegisterForm.vue";
  export default {
    name: "AuthRegister",
    components: {
      AuthRegisterForm
    },
    data() {
      return {
        title: "Registrierung für Arbeitgeber"
      };
    }
  };
</script>
