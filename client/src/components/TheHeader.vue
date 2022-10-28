<template>
  <header id="header" ref="header" :class="{ hide: hideNavbar }">
    <div id="navbar" class="container">
      <router-link to="/">
        <b-img
          class="header-logo"
          src="/img/MfaMalAnders_Logo_white.svg"
          alt="MFA mal anders - Logo"
          width="100"
          height="50"
          fluid
        />
      </router-link>

      <div
        :class="['nav-wrapper', { collapsed: navCollapsed }]"
        @click="navCollapsed = true"
      >
        <nav id="primary-nav">
          <router-link to="/stellenangebote">Stellenangebote</router-link>
          <router-link to="/stellengesuche">Stellengesuche</router-link>
          <router-link to="/fortbildungskatalog" class=""
            >Fortbildungskatalog</router-link
          >

          <router-link
            to="/karriere"
            @mouseenter.native="showSub('karriere')"
            @mouseleave.native="hideSub('karriere')"
            ><span
              >Karriere
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                /></svg
            ></span>
            <div id="karriere" ref="karriere" class="sub-menu">
              <router-link to="/karriere/mfa/ausbildung-berufsbild"
                >MFA | Ausbildung und Berufsbild</router-link
              >
              <router-link to="/karriere/mfa/gehalt">MFA | Gehalt</router-link>
              <router-link to="/karriere/zfa/gehalt">ZFA | Gehalt</router-link>
              <router-link
                to="/blog/artikel/gehaltserhoehung-fuer-mfa-tipps-wie-du-erfolgreich-mehr-gehalt-verhandelst"
                >Gehaltsverhandlung</router-link
              >
              <router-link to="/karriere/bewerbung">Bewerbung</router-link>
              <router-link to="/karriere/jobs-und-berufsbilder"
                >Jobs & Berufsbilder</router-link
              >

              <router-link to="/karriere/fort-und-weiterbildung"
                >Fort- & Weiterbildung</router-link
              >
              <router-link
                to="/karriere/fort-und-weiterbildung/ueberblick"
                class="ml-3"
                >Überblick Fort- & Weiterbildungen</router-link
              >
              <router-link
                to="/karriere/fort-und-weiterbildung#fortbildung-weiterbildung-studium"
                class="ml-3"
                >Fortbildung | Weiterbildung | Studium</router-link
              >
              <router-link
                to="/karriere/fort-und-weiterbildung#foerderung-finanzierung"
                class="ml-3"
                >Finanzierung & Förderung</router-link
              >
            </div>
          </router-link>

          <router-link to="/blog">Blog</router-link>
          <router-link to="/fuer-arbeitgeber">Für&nbsp;Arbeitgeber</router-link>
          <!-- <router-link to="/ueber">Über</router-link> -->
          <router-link class="d-lg-none" to="/kontakt">Kontakt</router-link>
        </nav>

        <nav id="secondary-nav" class="mt-3 mt-lg-0">
          <NavHeaderAdmin v-if="$store.state.auth.user.isAdmin" />
          <NavHeaderUser v-if="$store.state.auth.loggedIn" />
          <div v-else class="d-flex">
            <b-button
              class="mr-1 px-4 py-1"
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
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-plus-fill"
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
              <span class="sr-only">Registrieren</span>
            </b-button>
          </div>
          <b-button
            class="d-none d-lg-flex px-3"
            variant="outline-primary"
            size="lg"
            to="/kontakt"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"
              />
              <path
                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"
              />
            </svg>
            <span class="sr-only">Kontakt</span>
          </b-button>
        </nav>
      </div>

      <div
        :class="['ui-hamburger-05', { collapsed: navCollapsed }]"
        @click="navCollapsed = !navCollapsed"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
  const NavHeaderUser = () =>
    import(
      /* webpackChunkName: "NavHeaderUser" */ "@/components/NavHeaderUser"
    );
  const NavHeaderAdmin = () =>
    import(
      /* webpackChunkName: "NavHeaderAdmin" */ "@/components/NavHeaderAdmin"
    );

  export default {
    name: "TheHeader",
    components: {
      NavHeaderUser,
      NavHeaderAdmin
    },
    data() {
      return {
        hideNavbar: false,
        navCollapsed: true,
        previousScrollPositionY: document.documentElement.scrollTop
      };
    },
    mounted() {
      this.checkHeaderVisible();
    },
    methods: {
      showSub(id) {
        this.$refs[id].classList.add("show");
      },
      hideSub(id) {
        this.$refs[id].classList.remove("show");
      },
      checkHeaderVisible(timer = 0) {
        setTimeout(() => {
          let currentPositionY = document.documentElement.scrollTop;

          if (
            currentPositionY > this.previousScrollPositionY &&
            currentPositionY > this.$refs.header.offsetHeight &&
            this.navCollapsed &&
            !this.$refs.header.classList.contains("hide")
          ) {
            this.hideNavbar = true;
          } else if (
            currentPositionY < this.previousScrollPositionY &&
            this.$refs.header.classList.contains("hide")
          ) {
            this.hideNavbar = false;
          }

          this.previousScrollPositionY = document.documentElement.scrollTop;

          this.checkHeaderVisible(100);
        }, timer);
      }
    }
  };
</script>

<style lang="scss">
  #header {
    background: $primary;
    // font-family: $headings-font-family;
    box-shadow: $shadow1;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    // height: 70px;
    z-index: 1000;
    transition: ease-in-out 0.3s;

    @media screen and (max-width: $break-menu) {
      max-height: 100vh;
      overflow-y: hidden;
      height: 60px;
    }

    &.hide {
      transform: translateY(-100%);
    }

    #navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1300px;
      padding: 0 0.75rem;

      .header-logo {
        height: 50px;
        margin: 0.5rem 1rem;

        @media screen and (max-width: $break-menu) {
          height: 44px;
          width: 88px;
        }
      }

      .nav-wrapper::-webkit-scrollbar {
        width: 0.4rem;
      }

      .nav-wrapper::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: $primary;
      }

      .nav-wrapper::-webkit-scrollbar-thumb {
        background-color: transparentize($color: $secondary, $amount: 0.5);
        border-radius: 10px;
      }

      .nav-wrapper {
        flex-grow: 1;
        display: flex;
        // padding: 1rem;

        @media screen and (max-width: $break-menu) {
          position: fixed;
          padding: 1rem 0.5rem 70px 0.5rem;
          left: 0;
          top: 60px;
          bottom: 0;
          min-height: calc(100vh - 60px);
          flex-direction: column;
          background-color: $primary;
          box-shadow: $shadow1;
          transition: ease-in-out 0.3s;
          overflow: auto;

          &.collapsed {
            transform: translateX(-100%);
          }
        }

        nav {
          display: flex;
          justify-content: center;
          align-items: center;

          @media screen and (max-width: $break-menu) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }

          a {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.2rem 0.5rem;
            color: transparentize($color: $light, $amount: 0.3);
            // font-weight: 500;

            @media screen and (max-width: $break-menu) {
              flex-direction: column;
              align-items: flex-start;
            }

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
          }

          .sub-menu {
            position: absolute;
            top: 100%;
            left: 0;
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
              // left: 0;
              max-height: none;
              visibility: visible;
            }

            &.show {
              max-height: 450px;
              visibility: visible;

              @media screen and (max-width: $break-menu) {
                max-height: none;
              }
            }

            a {
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

        #primary-nav {
          flex-grow: 1;
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
    display: none;

    @media screen and (max-width: $break-menu) {
      display: block;
    }

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
</style>
