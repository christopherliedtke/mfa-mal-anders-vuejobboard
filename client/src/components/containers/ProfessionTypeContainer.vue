<template>
  <div class="row">
    <div :class="['col-12 my-3', `col-md-${colMd}`, `col-lg-${colLg}`]">
      <div class="card center icon-box shadow1 p-2">
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <div class="icon-box2 shadow1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-chat-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"
                />
              </svg>
            </div>
          </div>
          <h3 class="bold">Beratung</h3>
          <p>
            Jobs, bei denen Du aufgrund deines Expertenwissens andere Menschen
            berätst.
          </p>
          <b-button
            :to="`/karriere/jobs-und-berufsbilder/beratung`"
            variant="primary"
            >Mehr</b-button
          >
        </div>
      </div>
    </div>

    <div :class="['col-12 my-3', `col-md-${colMd}`, `col-lg-${colLg}`]">
      <div class="card center icon-box shadow1 p-2">
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <div class="icon-box2 shadow1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
                  class=""
                ></path>
              </svg>
            </div>
          </div>
          <h3 class="bold">Forschung</h3>
          <p>
            Jobs, bei denen Du zum medizinischen Fortschritt beitragen kannst.
          </p>
          <b-button
            :to="`/karriere/jobs-und-berufsbilder/forschung`"
            variant="primary"
            >Mehr</b-button
          >
        </div>
      </div>
    </div>

    <div :class="['col-12 my-3', `col-md-${colMd}`, `col-lg-${colLg}`]">
      <div class="card center icon-box shadow1 p-2">
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <div class="icon-box2 shadow1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path
                  d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                />
              </svg>
            </div>
          </div>
          <h3 class="bold">Verwaltung</h3>
          <p>
            Jobs, bei denen deine administrativen und organisatorischen
            Fähigkeiten gefragt sind.
          </p>
          <b-button
            :to="`/karriere/jobs-und-berufsbilder/verwaltung`"
            variant="primary"
            >Mehr</b-button
          >
        </div>
      </div>
    </div>

    <div :class="['col-12 my-3', `col-md-${colMd}`, `col-lg-${colLg}`]">
      <div class="card center icon-box shadow1 p-2">
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <div class="icon-box2 shadow1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"
                />
              </svg>
            </div>
          </div>
          <h3 class="bold">Management</h3>
          <p>
            Jobs, bei denen Du betriebswirtschaftliche Aufgaben und
            Personalverantwortung übernehmen kannst.
          </p>
          <b-button
            :to="`/karriere/jobs-und-berufsbilder/management`"
            variant="primary"
            >Mehr</b-button
          >
        </div>
      </div>
    </div>

    <div :class="['col-12 my-3', `col-md-${colMd}`, `col-lg-${colLg}`]">
      <div class="card center icon-box shadow1 p-2">
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <div class="icon-box2 shadow1">
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
                  class=""
                ></path>
              </svg>
            </div>
          </div>
          <h3 class="bold">Medizinisch-Technisch</h3>
          <p>
            Jobs, bei denen die medizinische Arbeit am bzw. mit dem Patienten im
            Mittelpunkt steht.
          </p>
          <b-button
            :to="`/karriere/jobs-und-berufsbilder/medizinisch-technisch`"
            variant="primary"
            >Mehr</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfessionTypeContainer",
    props: {
      colLg: {
        type: Number,
        default: 12
      },
      colMd: {
        type: Number,
        default: 12
      }
    }
  };
</script>

<style></style>
