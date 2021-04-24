<template>
  <header id="header">
    <b-container class="px-0">
      <b-navbar toggleable="xl" type="dark">
        <b-navbar-brand to="/">
          <b-img
            class="header-logo"
            src="/img/MfaMalAnders_Logo_white.svg"
            alt="MFA mal anders - Logo"
          />
        </b-navbar-brand>

        <b-navbar-toggle class="ui-hamburger-05" target="nav-collapse">
          <span></span>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav @click="toggleNavbar">
          <b-navbar-nav class="m-auto">
            <b-nav-item
              v-for="link in headerLinks"
              :key="link.title"
              :to="link.path"
              @mouseover="link.children && showSub(link.title)"
              @mouseleave="link.children && hideSub(link.title)"
              >{{ link.title }}
              <Fa
                v-if="link.icon"
                class="ml-1 icon"
                :icon="link.icon"
                size="xs"
              />
              <div v-if="link.children" :id="link.title" class="sub-menu">
                <b-nav-item
                  v-for="subLink in link.children"
                  :key="subLink.title"
                  :to="subLink.path"
                  @mouseover="subLink.children && showSub(subLink.title)"
                  @mouseleave="subLink.children && hideSub(subLink.title)"
                  >{{ subLink.title }}
                  <Fa
                    v-if="subLink.icon"
                    class="ml-1 icon"
                    :icon="subLink.icon"
                    size="xs"/>
                  <div
                    v-if="subLink.children"
                    :id="subLink.title"
                    class="sub-menu"
                  >
                    <b-nav-item
                      v-for="subSubLink in subLink.children"
                      :key="subSubLink.title"
                      :to="subSubLink.path"
                      >{{ subSubLink.title }}
                      <Fa
                        v-if="subSubLink.icon"
                        class="ml-1 icon"
                        :icon="subSubLink.icon"
                        size="xs"
                    /></b-nav-item></div
                ></b-nav-item>
              </div>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="mt-3 mt-lg-0">
            <b-nav-item
              v-if="loggedIn"
              to="/user/dashboard"
              @mouseover="showSub('account')"
              @mouseleave="hideSub('account')"
            >
              <div class="d-flex align-items-center">
                <b-img
                  v-if="user.image"
                  :src="user.image"
                  class="mr-1 rounded-circle"
                  style="width: 25px; height: 25px; object-fit: cover"
                />
                <span
                  v-else
                  class="bg-light rounded-circle text-primary d-flex justify-content-center align-items-center mr-1"
                  style="width: 22.5px; height: 22.5px"
                >
                  <Fa icon="user" size="sm" />
                </span>
                <span>Mein Konto</span>
                <Fa class="ml-1" icon="chevron-down" size="xs" />
              </div>
              <div id="account" class="sub-menu">
                <b-nav-item
                  to="/user/dashboard?tab=0"
                  :active="
                    $route.path == '/user/dashboard' && !$route.query.tab
                  "
                  :active-class="
                    $route.query.tab == 0 ? 'router-link-active' : ''
                  "
                  :exact-active-class="
                    $route.query.tab == 0 ? 'router-link-active' : ''
                  "
                  >Account</b-nav-item
                >
                <b-nav-item
                  v-if="$store.state.auth.user.isEmployer"
                  to="/user/dashboard?tab=1"
                  :active-class="
                    $route.query.tab == 1 ? 'router-link-active' : ''
                  "
                  :exact-active-class="
                    $route.query.tab == 1 ? 'router-link-active' : ''
                  "
                  >Stellenanzeigen</b-nav-item
                >
                <b-nav-item
                  v-if="$store.state.auth.user.isEmployer"
                  to="/user/dashboard?tab=2"
                  :active-class="
                    $route.query.tab == 2 ? 'router-link-active' : ''
                  "
                  :exact-active-class="
                    $route.query.tab == 2 ? 'router-link-active' : ''
                  "
                  >Unternehmen</b-nav-item
                >
                <b-nav-item
                  v-if="$store.state.auth.user.isEmployer"
                  to="/user/dashboard?tab=3"
                  :active-class="
                    $route.query.tab == 3 ? 'router-link-active' : ''
                  "
                  :exact-active-class="
                    $route.query.tab == 3 ? 'router-link-active' : ''
                  "
                  >Zahlungen</b-nav-item
                >
                <b-nav-item
                  v-if="
                    $store.state.auth.user.isEmployee ||
                      ($store.state.starredJobs.starredJobs &&
                        $store.state.starredJobs.starredJobs.length > 0)
                  "
                  to="/user/dashboard?tab=4"
                  :active-class="
                    $route.query.tab == 4 ? 'router-link-active' : ''
                  "
                  :exact-active-class="
                    $route.query.tab == 4 ? 'router-link-active' : ''
                  "
                  >Gespeicherte Jobs</b-nav-item
                >
              </div>
            </b-nav-item>

            <b-nav-item v-if="user.isAdmin" to="/admin"
              ><Fa icon="key" size="lg"
            /></b-nav-item>
            <b-nav-item v-if="loggedIn"
              ><LogoutBtn @done="toggleNavbar"
            /></b-nav-item>
            <b-nav-item v-else>
              <b-button
                class="mr-1"
                variant="secondary"
                size="sm"
                to="/auth/login"
                >Login</b-button
              >
              <b-button
                class="px-3"
                variant="secondary"
                size="lg"
                to="/auth/register"
                ><Fa style="margin: 0.1rem" icon="user-plus" size="sm" />
              </b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
  import LogoutBtn from "@/components/buttons/LogoutBtn";
  export default {
    name: "Header",
    components: {
      LogoutBtn
    },
    data() {
      return {
        headerLinks: [
          {
            title: "Home",
            path: "/"
          },
          {
            title: "Stellenangebote",
            path: "/stellenangebote"
          },
          {
            title: "Karriere",
            path: "/karriere",
            icon: "chevron-down",
            children: [
              {
                title: "MFA – Ausbildung & Berufsbild",
                path: "/karriere/mfa/ausbildung-berufsbild"
              },
              {
                title: "MFA – Gehalt",
                path: "/karriere/mfa/gehalt"
              },
              {
                title: "ZFA – Gehalt",
                path: "/karriere/zfa/gehalt"
              },
              {
                title: "Gehaltsverhandlung 2021",
                path:
                  "/blog/article/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
              },
              {
                title: "Bewerbungstipps",
                path: "/karriere/bewerbungstipps"
              },
              {
                title: "Jobs & Berufsbilder",
                path: "/karriere/jobs-und-berufsbilder"
                // icon: "chevron-right"
                // children: [
                //     {
                //         title: "Medizinisch-Technisch",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/medizinisch-technisch"
                //     },
                //     {
                //         title: "Verwaltung",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/verwaltung"
                //     },
                //     {
                //         title: "Management",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/management"
                //     },
                //     {
                //         title: "Beratung",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/beratung"
                //     },
                //     {
                //         title: "Forschung",
                //         path:
                //             "/karriere/jobs-und-berufsbilder/forschung"
                //     }
                // ]
              },
              {
                title: "Fort- & Weiterbildungen",
                path: "/karriere/fort-und-weiterbildungen"
              }
            ]
          },
          {
            title: "Blog",
            path: "/blog"
          },
          {
            title: "Für Arbeitgeber",
            path: "/fuer-arbeitgeber"
          },
          {
            title: "Über",
            path: "/ueber"
          },
          {
            title: "Kontakt",
            path: "/kontakt"
          }
        ],
        previousScrollPositionY: window.document.documentElement.scrollTop
      };
    },
    computed: {
      user() {
        return this.$store.state.auth.user;
      },
      loggedIn() {
        return this.$store.state.auth.loggedIn;
      }
    },
    mounted() {
      setInterval(() => {
        this.showHeader();
      }, 100);
    },
    methods: {
      toggleNavbar() {
        this.$root.$emit("bv::toggle::collapse", "nav-collapse");
      },
      showSub(id) {
        window.document.getElementById(id).classList.add("show");
      },
      hideSub(id) {
        window.document.getElementById(id).classList.remove("show");
      },
      showHeader() {
        const header = document.getElementById("header");
        const navCollapse = document.getElementById("nav-collapse");
        let currentPositionY = window.document.documentElement.scrollTop;

        if (
          currentPositionY > this.previousScrollPositionY &&
          currentPositionY > header.offsetHeight &&
          !navCollapse.classList.contains("collapsing") &&
          !navCollapse.classList.contains("show") &&
          !header.classList.contains("hide")
        ) {
          header.classList.add("hide");
        } else if (
          currentPositionY < this.previousScrollPositionY &&
          header.classList.contains("hide")
        ) {
          header.classList.remove("hide");
        }

        this.previousScrollPositionY =
          window.document.documentElement.scrollTop;
      }
    }
  };
</script>

<style lang="scss">
  #header {
    background: $primary;
    font-family: $font-family-headlines;
    box-shadow: $shadow1;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: linear 0.3s;

    @media screen and (max-width: $break-menu) {
      max-height: 100vh;
      overflow-y: auto;
    }

    &.hide {
      transform: translateY(-100%);
    }

    .container {
      max-width: 1300px;

      .navbar {
        padding: 0 0.75rem;

        .header-logo {
          height: 50px;
          margin: 0.5rem 1rem;

          @media screen and (max-width: $break-menu) {
            height: 45px;
          }
        }

        .navbar-nav {
          display: flex;
          align-items: center;

          @media screen and (max-width: $break-menu) {
            align-items: start;
          }
        }

        .navbar-collapse {
          @media screen and (max-width: $break-menu) {
            padding: 1rem;
          }
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0.4rem 0.5rem;
          color: transparentize($color: $light, $amount: 0.3);

          &:not([href="/"]) {
            &.router-link-active {
              color: transparentize($color: $light, $amount: 0);
            }
          }

          &.router-link-exact-active,
          &.active {
            color: transparentize($color: $light, $amount: 0);
          }

          &:hover {
            color: transparentize($color: $light, $amount: 0);
          }

          @media screen and (max-width: $break-menu) {
            display: block;
          }
        }

        .sub-menu {
          position: absolute;
          top: 100%;
          background-color: $primary;
          border-radius: $border-radius1;
          width: max-content;
          max-height: 0;
          overflow-y: hidden;
          visibility: hidden;
          transition: linear 0.3s;

          @media screen and (max-width: $break-menu) {
            display: block;
            position: relative;
            top: 0%;
            left: 0;
            max-height: none;
            visibility: visible;
          }

          &.show {
            max-height: 300px;
            // overflow-y: visible;
            visibility: visible;

            @media screen and (max-width: $break-menu) {
              max-height: none;
            }
          }

          .nav-link {
            padding: 0.4rem 1rem;

            @media screen and (max-width: $break-menu) {
              .svg-inline--fa {
                display: none;
              }
            }

            .sub-menu {
              top: 0%;
              left: 100%;

              @media screen and (max-width: $break-menu) {
                display: none;
              }
            }
          }
        }
      }
    }

    /* #Animate navbar menu icon */
    .ui-hamburger-05 {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 35px;
      height: 30px;
      border: none;
      position: relative;
      background: linear-gradient(
        to bottom,
        transparentize($light, 0.5),
        transparentize($light, 0.5)
      );
      background-size: 0 0;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:before,
      &:after {
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        background-color: transparentize($light, 0.5);
        content: "";
        transition: transform 0.4s ease;
      }

      &:before {
        top: 10px;
      }

      &:after {
        bottom: 10px;
      }

      &:not(.collapsed) {
        background-size: 0 0;
      }

      &:not(.collapsed):before,
      &:not(.collapsed):after {
        transition-delay: 0.1s;
      }

      &:not(.collapsed):before {
        transform: translateY(4px) rotate(45deg);
      }

      &:not(.collapsed):after {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }
</style>
