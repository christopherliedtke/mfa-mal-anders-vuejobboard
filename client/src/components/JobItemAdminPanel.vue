<template>
  <div class="d-inline-block border-radius1 bg-light-shade py-2 px-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-facebook text-info mr-2"
      style="cursor: pointer"
      viewBox="0 0 16 16"
      @click="socialShareShortJobToClipboard(job)"
    >
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-blockquote-right text-info mr-2"
      style="cursor: pointer"
      viewBox="0 0 16 16"
      @click="copyDescription"
    >
      <path
        d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm10.113-5.373a6.59 6.59 0 0 0-.445-.275l.21-.352c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.326-.182.569-.182h.281a1.686 1.686 0 0 0-.123-.498 1.379 1.379 0 0 0-.252-.37 1.94 1.94 0 0 0-.346-.298zm-2.168 0A6.59 6.59 0 0 0 10 6.352L10.21 6c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.327-.182.569-.182h.281a1.749 1.749 0 0 0-.117-.492 1.402 1.402 0 0 0-.258-.375 1.94 1.94 0 0 0-.346-.3z"
      />
    </svg>

    <svg
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      fill="currentColor"
      class="text-info mr-2"
      style="cursor: pointer"
      width="50"
      height="20"
      viewBox="0 0 300 120.32412"
      @click="ebayShareLongJobToClipboard(job)"
    >
      <path
        id="e"
        d="m 38.866448,26.308378 c -21.145729,0 -38.76645103,8.97108 -38.76645103,36.036419 0,21.441707 11.84866003,34.944406 39.31245703,34.944406 32.326175,0 34.3984,-21.294248 34.3984,-21.294248 l -15.663557,0 c 0,0 -3.358398,11.466134 -19.690354,11.466134 -13.301932,0 -22.869203,-8.985845 -22.869203,-21.580814 l 59.861133,0 0,-7.903529 c 0,-12.460384 -7.91007,-31.668368 -36.582425,-31.668368 z m -0.546007,10.101117 c 12.662062,0 21.294248,7.757047 21.294248,19.383225 l -43.680508,0 c 0,-12.34261 11.267202,-19.383225 22.38626,-19.383225 z"
        fill-rule="evenodd"
      />

      <path
        id="b"
        d="m 75.437762,0.10007279 0,83.59702321 c 0,4.745232 -0.338677,11.408082 -0.338677,11.408082 l 14.939733,0 c 0,0 0.536238,-4.785353 0.536238,-9.1587 0,0 7.381193,11.547477 27.451204,11.547477 21.13453,0 35.49041,-14.673014 35.49041,-35.695165 0,-19.556604 -13.18634,-35.28566 -35.45629,-35.28566 -20.854235,0 -27.33444,11.261381 -27.33444,11.261381 l 0,-37.67443821 z M 114.20421,36.853125 c 14.35199,0 23.47828,10.651661 23.47828,24.945665 0,15.327725 -10.54056,25.35517 -23.3759,25.35517 -15.317854,0 -23.58065,-11.960116 -23.58065,-25.218668 0,-12.354387 7.414449,-25.082167 23.47827,-25.082167 z"
        fill-rule="evenodd"
      />

      <path
        id="a"
        d="m 190.6451,26.308378 c -31.81215,0 -33.85239,17.418776 -33.85239,20.202235 l 15.83418,0 c 0,0 0.83034,-10.169369 16.9262,-10.169369 10.45935,0 18.56422,4.787411 18.56422,13.991413 l 0,3.276038 -18.56422,0 c -24.64532,0 -37.67444,7.20973 -37.67444,21.840254 0,14.398537 12.03849,22.232696 28.30702,22.232696 22.17148,0 29.31371,-12.251017 29.31371,-12.251017 0,4.872784 0.37568,9.67455 0.37568,9.67455 l 14.07643,0 c 0,0 -0.54601,-5.951939 -0.54601,-9.759864 l 0,-32.913945 c 0,-21.581223 -17.40751,-26.122991 -32.76038,-26.122991 z m 17.47221,37.128431 0,4.368051 c 0,5.697129 -3.51553,19.860981 -24.21197,19.860981 -11.3333,0 -16.1925,-5.656156 -16.1925,-12.216892 0,-11.935273 16.36378,-12.01214 40.40447,-12.01214 z"
        fill-rule="evenodd"
      />

      <path
        id="y"
        d="m 214.87901,29.041161 17.81346,0 25.56479,51.217345 25.5063,-51.217345 16.13644,0 -46.45929,91.183029 -16.9262,0 13.40641,-25.418513 z"
        fill-rule="evenodd"
      />
    </svg>

    <!-- <svg
      id=""
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      version="1.1"
      width="30"
      height="30"
      viewBox="0 0 50 50"
      class="text-info mr-2"
      style="cursor: pointer"
      @click="
        () => {
          $axios.post('/api/prerender/recache', {
            url
          });
        }
      "
    >
      <g>
        <g id="Rectangle_6_1_" class="st1">
          <g id="Rectangle_6">
            <g>
              <path
                class="st2"
                d="M17.6,14v7.4h3.7c2,0,3.7-1.6,3.7-3.7V14H17.6z"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </g>
        <g id="Rounded_Rectangle_1_1_" class="st1">
          <g id="Rounded_Rectangle_1">
            <g>
              <path
                class="st3"
                d="M14,14c-2,0-3.7,1.6-3.7,3.7v14.7c0,2,1.6,3.7,3.7,3.7h3.7V14H14z"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </g>
        <g id="Rectangle_6_copy_2_1_" class="st1">
          <g id="Rectangle_6_copy_2">
            <g>
              <path
                class="st2"
                d="M28.7,28.7c-2,0-3.7,1.6-3.7,3.7V36h7.4v-7.4H28.7z"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </g>
        <g id="Rounded_Rectangle_1_copy_1_" class="st1">
          <g id="Rounded_Rectangle_1_copy">
            <g>
              <path
                class="st4"
                d="M36,14h-3.7V36H36c2,0,3.7-1.6,3.7-3.7V17.6C39.7,15.6,38.1,14,36,14z"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
    </svg> -->

    <b-link
      :href="
        `https://developers.facebook.com/tools/debug/?q=https://www.mfa-mal-anders.de/job/${job._id}`
      "
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-bug-fill text-info mr-2"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"
        />
        <path
          d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"
        />
      </svg>
    </b-link>
    <b-link :to="`/admin/jobs/edit/${job._id}`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        style="cursor: pointer"
        class="bi bi-pencil-square text-info"
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
    </b-link>
  </div>
</template>

<script>
  import socialShareShortJobToClipboard from "@/helpers/socialShareShortJobToClipboard.js";
  import ebayShareLongJobToClipboard from "@/helpers/ebayShareLongJobToClipboard.js";
  export default {
    name: "JobItemAdminPanel",
    props: {
      job: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        socialShareShortJobToClipboard,
        ebayShareLongJobToClipboard
      };
    },
    computed: {
      url() {
        return window.origin + "/job/" + this.job._id;
      }
    },
    methods: {
      copyDescription() {
        window
          .getSelection()
          .selectAllChildren(document.getElementById("job-description"));
        document.execCommand("copy");

        // window.getSelection().removeAllRanges();
      }
    }
  };
</script>
